
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Stock = sequelize.define('stock', { 

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    storeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    size: {
        type: Sequelize.STRING,
        allowNull: false
    },
    color: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    price: {
        type: Sequelize.DOUBLE
        // allowNull defaults to true
    },
    quantity: {
        type: Sequelize.INTEGER
        // allowNull defaults to true
    },
    status: {
        type: Sequelize.INTEGER
        // allowNull defaults to true
    }, 
    createdAt: {
        type: Sequelize.DATE
        // allowNull defaults to true
    },
    modifiedAt: {
        type: Sequelize.DATE
        // allowNull defaults to true
    }


})

sequelize.sync()
  .then(() => User.create({
    firstName: 'janedoe',
    lastNameF: 'CDFAAR'    
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });



module.exports = Stock;





