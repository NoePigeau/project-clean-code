const INITIAL_CATEGORY = 'FIRST'

const FINISHED_CATEGORY = 'FINISHED'

const QUIZZ_CATEGORIES = [ 'FIRST', 'SECOND', 'THIRD', 'FOUR', 'FIVE', 'SIX', 'SEVEN' ]

const powsByCategory =  QUIZZ_CATEGORIES.reduce((powsByCategory, category, index) => {
    powsByCategory[category] = Math.pow(2, index)
    return powsByCategory
}, {})

const removeTimeFromDate = (dateString) => {
    try {
        return new Date(new Date(dateString).toISOString().split("T")[0])  
    } catch (error) {
        return undefined 
    }
}

const getNextCategory = (currentCategory) => {
    const index = QUIZZ_CATEGORIES.findIndex(category => category === currentCategory)
    return QUIZZ_CATEGORIES[index + 1] ?? FINISHED_CATEGORY
}

const filterCardsByCategoriesAvailables = (cards, quizzDate) => {
    return cards.filter(card => {
        const diffTime = Math.abs(new Date(card.updatedAt).getTime() - removeTimeFromDate(quizzDate).getTime())
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

module.exports = { filterCardsByCategoriesAvailables, getNextCategory, removeTimeFromDate, INITIAL_CATEGORY }