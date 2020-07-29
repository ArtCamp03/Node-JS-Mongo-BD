const db = require('./Db');

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
});

//necessario para saber se esta funcionando
//Post.sync({force: true});
module.exports = Post