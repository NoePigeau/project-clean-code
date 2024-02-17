const { Router } = require("express")
const cardController = require("../controllers/card")
const router = Router()

router.post("/", cardController.post)
router.get("/", cardController.getCollection)
router.get("/quizz", cardController.getQuizz)
router.patch("/:id/answer", cardController.answerCardQuestion)

module.exports = router
