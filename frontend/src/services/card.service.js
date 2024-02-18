const URL_API = "http://localhost:3001"

export const cardService = {
    async fetchAll() {
        return fetch(`${URL_API}/cards`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    },
    async create(card) {
        return fetch(`${URL_API}/cards`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(card)
        }).then(res => res.json())
    },
    async fetchQuizz(card, date = new Date()) {
        return fetch(`${URL_API}/cards/quizz/?$date=${date.toISOString().split('T')[0]}`, {
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(card)
        }).then(res => res.json())
    },
    async answerQuestion(cardId, isValid) {
        await fetch(`${URL_API}/cards/${cardId}/answer`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ isValid })
        })
    }
}