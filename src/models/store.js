const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');


const Store = sequelize.define('store', { 
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
    status: {
        type: Sequelize.INTEGER
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
    address: {
        type: Sequelize.TEXT
        // allowNull defaults to true
    }


})

sequelize.sync()
  .then(() =>
  console.log("sincronizado")
   )
  


   module.exports = Store;