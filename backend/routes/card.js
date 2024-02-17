const { Router } = require("express")
const cardController = require("../controllers/card")
const router = Router()

router.post("/", cardController.post)
router.get("/", cardController.getCollection)

module.exports = router
