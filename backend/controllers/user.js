const userService = require("../services/user")

const userController = {
    post: async (req, res, next) => {
        try {
            if (!req.body) {
                return res.sendStatus(400)
            }
            const user = await userService.create(req.body)
            res.status(201).json(user)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = userController