const { Model, DataTypes } = require("sequelize")

module.exports = function (connection) {
  class User extends Model {}

  User.init(
    {
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    },
    {
      sequelize: connection,
      tableName: "user",
    }
  )

  return User
}
