const Sequelize = require('sequelize');
//Conexao com o banco de dasos
const sequelize = new Sequelize('postap', 'root', 'Blackdog', {
    host: "localhost",
    dialect: "mysql"
})

//exportando sequilize
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}