const cardService = require("../services/card")

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
    }
}

module.exports = cardController