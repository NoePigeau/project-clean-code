const { Model, DataTypes } = require("sequelize")

module.exports = function (connection) {
  class Card extends Model {}

  Card.init(
    {
        question: DataTypes.STRING,
        answer: DataTypes.STRING,
        category: DataTypes.STRING,
        tag: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'createdAt',
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate : DataTypes.NOW,
        field: 'updatedAt',
      },
    },
    {
      sequelize: connection,
      tableName: "card",
    }
  )

  return Card
}
