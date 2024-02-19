const cardService = require("../services/card")
const { filterCardsByCategoriesAvailables, getNextCategory, INITIAL_CATEGORY, notAnsweredToday } = require("../utils/handle-quizz")

const cardController = {
    getCollection: async (req, res, next) => {
        const { query } = req
        const tags = query.tags ? query.tags.split(',') : undefined
        try {
            const cards = await cardService.findAll({ tags })
            res.json(cards)
        } catch (err) {
            next(err)
        }
    },
    post: async (req, res, next) => {
        try {
            if (!req.body) {
                return res.sendStatus(400)
            }
            const card = await cardService.create(req.body)
            res.status(201).json(card)
        } catch (err) {
            next(err)
        }
    },
    getQuizz: async (req, res, next) => {
        const { query } = req

        const quizzDate = query.$date ?? new Date().toDateString()
        try {
            const cards = await cardService.findAll()
            const filteredCards = cards.filter(notAnsweredToday)
            const availableCards = filterCardsByCategoriesAvailables(filteredCards, quizzDate)
            res.json(availableCards)
        } catch (err) {
            next(err)
        }
    },
    answerCardQuestion: async (req, res, next) => {
        const { params, body } = req

        if (!body) {
            return res.sendStatus(400)
        }
        try {
            const card = await cardService.findById(Number(params.id))
            if (!card?.id) {
                return res.sendStatus(404)
            }
            
            const newCategory = body.isValid ? getNextCategory(card.category) : INITIAL_CATEGORY
            await cardService.update({ id: Number(params.id) }, { category: newCategory })
            return res.sendStatus(204)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = cardController