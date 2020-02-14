
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Product = sequelize.define('product', { 

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT
        // allowNull defaults to true
    },
     created_at: {
        type: Sequelize.DATE
        // allowNull defaults to true
    },
    modified_at: {
        type: Sequelize.DATE
        // allowNull defaults to true
    },
    brand: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    categoryId: {
        type: Sequelize.INTEGER
        // allowNull defaults to true
    }


})

sequelize.sync()
  .then(() => console.log("sincronizado productos")
  );



  module.exports = Product;