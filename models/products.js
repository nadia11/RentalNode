'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    id: DataTypes.INTEGER,
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    availibility: DataTypes.BOOLEAN,
    needing_repair: DataTypes.BOOLEAN,
    durability: DataTypes.INTEGER,
    max_durability: DataTypes.INTEGER,
    mileage: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    minimum_rent_period: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Products',
  });
  return Products;
};