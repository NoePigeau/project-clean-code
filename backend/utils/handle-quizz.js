const { isEqual, addDays } = require("date-fns");

const INITIAL_CATEGORY = 'FIRST'

const FINISHED_CATEGORY = 'FINISHED'

const QUIZZ_CATEGORIES = ['FIRST', 'SECOND', 'THIRD', 'FOUR', 'FIVE', 'SIX', 'SEVEN']

const powsByCategory = QUIZZ_CATEGORIES.reduce((powsByCategory, category, index) => {
    powsByCategory[category] = Math.pow(2, index)
    return powsByCategory
}, {})

const getNextCategory = (currentCategory) => {
    const index = QUIZZ_CATEGORIES.findIndex(category => category === currentCategory)
    return QUIZZ_CATEGORIES[index + 1] ?? FINISHED_CATEGORY
}

const notAnsweredToday = (card) => {
    const createdAt = new Date(card.createdAt)
    const updatedAt = new Date(card.updatedAt)

    // reset millisecond because there is small delay between create and update
    createdAt.setMilliseconds(0)
    updatedAt.setMilliseconds(0)

    return isEqual(createdAt, updatedAt) || !isEqual(updatedAt.toDateString(), new Date().toDateString())
}

const filterCardsByCategoriesAvailables = (cards, quizzDate) => {
    const quizzDateToTime = new Date(new Date(quizzDate).toDateString()).getTime()
    return cards.filter(card => {
        const diffTime = Math.abs(new Date(card.updatedAt).getTime() - quizzDateToTime)
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        if (diffDays === 0) {
            return card.category === INITIAL_CATEGORY
        }
        if (powsByCategory[card.category] && diffDays % powsByCategory[card.category] === 0) {
            return true
        }
        return false
    })
}

module.exports = { notAnsweredToday, filterCardsByCategoriesAvailables, getNextCategory, INITIAL_CATEGORY }