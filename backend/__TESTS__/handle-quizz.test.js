const { getNextCategory, removeTimeFromDate, filterCardsByCategoriesAvailables } = require("../utils/handle-quizz")

describe("getNextCategory", () => {
    it("function should return SECOND", () => {
        const nextCategory = getNextCategory("FIRST")
        expect(nextCategory).toEqual("SECOND")
    })

    it("function should return FIVE", () => {
        const nextCategory = getNextCategory("FOUR")
        expect(nextCategory).toEqual("FIVE")
    })

    it("function should return SEVEN", () => {
        const nextCategory = getNextCategory("SEVEN")
        expect(nextCategory).toEqual("FINISHED")
    })
})

describe("filterCardsByCategoriesAvailables", () => {
    const cards = [
        {
            "id": 1,
            "question": "Quoi ?",
            "answer": "feur",
            "category": "FIRST",
            "tag": "teamwork",
            "createdAt": "2024-01-14T14:50:26.927Z",
            "updatedAt": "2024-01-14T14:50:26.927Z"
        },
        {
            "id": 1,
            "question": "Quoi ?",
            "answer": "feur",
            "category": "SECOND",
            "tag": "teamwork",
            "createdAt": "2024-01-14T14:50:26.927Z",
            "updatedAt": "2024-01-14T14:50:26.927Z"
        },
        {
            "id": 1,
            "question": "Quoi ?",
            "answer": "feur",
            "category": "THIRD",
            "tag": "teamwork",
            "createdAt": "2024-01-14T14:50:26.927Z",
            "updatedAt": "2024-01-14T14:50:26.927Z"
        },
        {
            "id": 1,
            "question": "Quoi ?",
            "answer": "feur",
            "category": "FOUR",
            "tag": "teamwork",
            "createdAt": "2024-01-14T14:50:26.927Z",
            "updatedAt": "2024-01-14T14:50:26.927Z"
        },
        {
            "id": 1,
            "question": "Quoi ?",
            "answer": "feur",
            "category": "FIVE",
            "tag": "teamwork",
            "createdAt": "2024-01-14T14:50:26.927Z",
            "updatedAt": "2024-01-14T14:50:26.927Z"
        },
        {
            "id": 1,
            "question": "Quoi ?",
            "answer": "feur",
            "category": "SIX",
            "tag": "teamwork",
            "createdAt": "2024-01-14T14:50:26.927Z",
            "updatedAt": "2024-01-14T14:50:26.927Z"
        },
        {
            "id": 1,
            "question": "Quoi ?",
            "answer": "feur",
            "category": "SEVEN",
            "tag": "teamwork",
            "createdAt": "2024-01-14T14:50:26.927Z",
            "updatedAt": "2024-01-14T14:50:26.927Z"
        },
    ]
    it("SAME DATE: should return only cards FIRST", () => {
        const quizzDate = "2024-01-14"
        const filteredCards = filterCardsByCategoriesAvailables(cards, quizzDate)
        expect(filteredCards).toEqual([
            {
                "id": 1,
                "question": "Quoi ?",
                "answer": "feur",
                "category": "FIRST",
                "tag": "teamwork",
                "createdAt": "2024-01-14T14:50:26.927Z",
                "updatedAt": "2024-01-14T14:50:26.927Z"
            },
        ])
    })

    it("DATE + 1: should return only cards FIRST", () => {
        const quizzDate = "2024-01-15"
        const filteredCards = filterCardsByCategoriesAvailables(cards, quizzDate)
        expect(filteredCards).toEqual([
            {
                "id": 1,
                "question": "Quoi ?",
                "answer": "feur",
                "category": "FIRST",
                "tag": "teamwork",
                "createdAt": "2024-01-14T14:50:26.927Z",
                "updatedAt": "2024-01-14T14:50:26.927Z"
            },
        ])
    })

    it("DATE + 2: should return only cards FIRST and SECOND", () => {
        const quizzDate = "2024-01-16"
        const filteredCards = filterCardsByCategoriesAvailables(cards, quizzDate)
        expect(filteredCards).toEqual([
            {
                "id": 1,
                "question": "Quoi ?",
                "answer": "feur",
                "category": "FIRST",
                "tag": "teamwork",
                "createdAt": "2024-01-14T14:50:26.927Z",
                "updatedAt": "2024-01-14T14:50:26.927Z"
            },
            {
                "id": 1,
                "question": "Quoi ?",
                "answer": "feur",
                "category": "SECOND",
                "tag": "teamwork",
                "createdAt": "2024-01-14T14:50:26.927Z",
                "updatedAt": "2024-01-14T14:50:26.927Z"
            }
        ])
    })

    it("DATE + 4: should return only cards FIRST, SECOND and THIRD", () => {
        const quizzDate = "2024-01-18"
        const filteredCards = filterCardsByCategoriesAvailables(cards, quizzDate)
        expect(filteredCards).toEqual([
            {
                "id": 1,
                "question": "Quoi ?",
                "answer": "feur",
                "category": "FIRST",
                "tag": "teamwork",
                "createdAt": "2024-01-14T14:50:26.927Z",
                "updatedAt": "2024-01-14T14:50:26.927Z"
            },
            {
                "id": 1,
                "question": "Quoi ?",
                "answer": "feur",
                "category": "SECOND",
                "tag": "teamwork",
                "createdAt": "2024-01-14T14:50:26.927Z",
                "updatedAt": "2024-01-14T14:50:26.927Z"
            },
            {
                "id": 1,
                "question": "Quoi ?",
                "answer": "feur",
                "category": "THIRD",
                "tag": "teamwork",
                "createdAt": "2024-01-14T14:50:26.927Z",
                "updatedAt": "2024-01-14T14:50:26.927Z"
            }
        ])
    })

    it("DATE + 8: should return only cards FIRST, SECOND, THIRD and FOUR", () => {
        const quizzDate = "2024-01-22"
        const filteredCards = filterCardsByCategoriesAvailables(cards, quizzDate)
        expect(filteredCards).toEqual([
            {
                "id": 1,
                "question": "Quoi ?",
                "answer": "feur",
                "category": "FIRST",
                "tag": "teamwork",
                "createdAt": "2024-01-14T14:50:26.927Z",
                "updatedAt": "2024-01-14T14:50:26.927Z"
            },
            {
                "id": 1,
                "question": "Quoi ?",
                "answer": "feur",
                "category": "SECOND",
                "tag": "teamwork",
                "createdAt": "2024-01-14T14:50:26.927Z",
                "updatedAt": "2024-01-14T14:50:26.927Z"
            },
            {
                "id": 1,
                "question": "Quoi ?",
                "answer": "feur",
                "category": "THIRD",
                "tag": "teamwork",
                "createdAt": "2024-01-14T14:50:26.927Z",
                "updatedAt": "2024-01-14T14:50:26.927Z"
            },
            {
                "id": 1,
                "question": "Quoi ?",
                "answer": "feur",
                "category": "FOUR",
                "tag": "teamwork",
                "createdAt": "2024-01-14T14:50:26.927Z",
                "updatedAt": "2024-01-14T14:50:26.927Z"
            }
        ])
    })

    it("DATE + 16: should return only cards FIRST, SECOND, THIRD, FOUR and FIVE", () => {
        const quizzDate = "2024-01-30"
        const filteredCards = filterCardsByCategoriesAvailables(cards, quizzDate)
        expect(filteredCards).toEqual([
            {
                "id": 1,
                "question": "Quoi ?",
                "answer": "feur",
                "category": "FIRST",
                "tag": "teamwork",
                "createdAt": "2024-01-14T14:50:26.927Z",
                "updatedAt": "2024-01-14T14:50:26.927Z"
            },
            {
                "id": 1,
                "question": "Quoi ?",
                "answer": "feur",
                "category": "SECOND",
                "tag": "teamwork",
                "createdAt": "2024-01-14T14:50:26.927Z",
                "updatedAt": "2024-01-14T14:50:26.927Z"
            },
            {
                "id": 1,
                "question": "Quoi ?",
                "answer": "feur",
                "category": "THIRD",
                "tag": "teamwork",
                "createdAt": "2024-01-14T14:50:26.927Z",
                "updatedAt": "2024-01-14T14:50:26.927Z"
            },
            {
                "id": 1,
                "question": "Quoi ?",
                "answer": "feur",
                "category": "FOUR",
                "tag": "teamwork",
                "createdAt": "2024-01-14T14:50:26.927Z",
                "updatedAt": "2024-01-14T14:50:26.927Z"
            },
            {
                "id": 1,
                "question": "Quoi ?",
                "answer": "feur",
                "category": "FIVE",
                "tag": "teamwork",
                "createdAt": "2024-01-14T14:50:26.927Z",
                "updatedAt": "2024-01-14T14:50:26.927Z"
            }
        ])
    })

    it("DATE + 32: should return only cards FIRST, SECOND, THIRD, FOUR, FIVE and SIX", () => {
        const quizzDate = "2024-02-15"
        const filteredCards = filterCardsByCategoriesAvailables(cards, quizzDate)
        expect(filteredCards).toEqual([
            {
                "id": 1,
                "question": "Quoi ?",
                "answer": "feur",
                "category": "FIRST",
                "tag": "teamwork",
                "createdAt": "2024-01-14T14:50:26.927Z",
                "updatedAt": "2024-01-14T14:50:26.927Z"
            },
            {
                "id": 1,
                "question": "Quoi ?",
                "answer": "feur",
                "category": "SECOND",
                "tag": "teamwork",
                "createdAt": "2024-01-14T14:50:26.927Z",
                "updatedAt": "2024-01-14T14:50:26.927Z"
            },
            {
                "id": 1,
                "question": "Quoi ?",
                "answer": "feur",
                "category": "THIRD",
                "tag": "teamwork",
                "createdAt": "2024-01-14T14:50:26.927Z",
                "updatedAt": "2024-01-14T14:50:26.927Z"
            },
            {
                "id": 1,
                "question": "Quoi ?",
                "answer": "feur",
                "category": "FOUR",
                "tag": "teamwork",
                "createdAt": "2024-01-14T14:50:26.927Z",
                "updatedAt": "2024-01-14T14:50:26.927Z"
            },
            {
                "id": 1,
                "question": "Quoi ?",
                "answer": "feur",
                "category": "FIVE",
                "tag": "teamwork",
                "createdAt": "2024-01-14T14:50:26.927Z",
                "updatedAt": "2024-01-14T14:50:26.927Z"
            },
            {
                "id": 1,
                "question": "Quoi ?",
                "answer": "feur",
                "category": "SIX",
                "tag": "teamwork",
                "createdAt": "2024-01-14T14:50:26.927Z",
                "updatedAt": "2024-01-14T14:50:26.927Z"
            }
        ])
    })

    it("DATE + 64: should return all cards", () => {
        const quizzDate = "2024-03-18"
        const filteredCards = filterCardsByCategoriesAvailables(cards, quizzDate)
        expect(filteredCards).toEqual(cards)
    })

    it("FINISHED CARDS: should return no cards", () => {
        const quizzDate = "2024-03-18"
        const finishedCard = [
            {
                "id": 1,
                "question": "Quoi ?",
                "answer": "feur",
                "category": "FINISHED",
                "tag": "teamwork",
                "createdAt": "2024-01-14T14:50:26.927Z",
                "updatedAt": "2024-01-14T14:50:26.927Z"
            }
        ]
        const filteredCards = filterCardsByCategoriesAvailables(finishedCard, quizzDate)
        expect(filteredCards).toEqual([])
    })
})