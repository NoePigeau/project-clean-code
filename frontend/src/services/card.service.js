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
    }
}