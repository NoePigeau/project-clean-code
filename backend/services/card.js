const { Card } = require("../db")
const { INITIAL_CATEGORY } = require('../utils/handle-quizz')

const cardService = {
    findAll: async (criteria) => {
        const filters = { where: {}, order: [['createdAt', 'DESC']] }

        if (criteria?.tags) {
            filters.where.tag = criteria.tags
        }

        const cards = await Card.findAll(filters)

        return cards
    },
    findById: async (id) => {
        return Card.findByPk(id)
    },
    create: async (card) => {
        const newCard = await Card.create({
            ...card,
            category: INITIAL_CATEGORY
        })

        return newCard
    },
    update: async (criteria, dataToUpdate) => {
        const updatedCard = await Card.update(dataToUpdate, {
            where: criteria
        })
        return updatedCard
    }
}

module.exports = cardService