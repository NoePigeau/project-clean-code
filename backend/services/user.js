const { User } = require("../db")

const userService = {
    create: async (user) => {
        return User.create(user)
    }
}

module.exports = userService