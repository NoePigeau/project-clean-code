const { sequelize } = require("./db")

sequelize.sync({ force: true }).then(() => {
  console.log("Database synchronized")
  sequelize.close()
})