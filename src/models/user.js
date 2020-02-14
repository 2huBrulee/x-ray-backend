const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');


const User = sequelize.define('user', { 
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastNameF: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    lastNameM: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    mail: {
        type: Sequelize.STRING
        // allowNull defaults to true
    }, password: {
        type: Sequelize.STRING
        // allowNull defaults to true
    }, password_recovery_code: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    status: {
        type: Sequelize.INTEGER
        // allowNull defaults to true
    },
    rol: {
        type: Sequelize.STRING
        // allowNull defaults to true
    }, createdAt: {
        type: Sequelize.DATE
        // allowNull defaults to true
    },
    modifiedAt: {
        type: Sequelize.DATE
        // allowNull defaults to true
    },
    address: {
        type: Sequelize.TEXT
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

  module.exports = User;