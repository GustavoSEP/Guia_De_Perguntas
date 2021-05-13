const Sequelize = require('sequelize');

const connection = new Sequelize('guiadeperguntas','root','Guuh420@!',{
    host:'localhost',
    dialect:'mysql'
});

module.exports = connection;