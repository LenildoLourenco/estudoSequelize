  
const { Usuario, Post, sequelize, Comentario } = require('./models');
const { Op } = require('sequelize');
// Usuario.findAll().then((resultado) => {
//   console.table(resultado.map((user) => user.toJSON()));
// });

// Usuario.findOne({
//   where: {
//     nome: 'Gabriel Brunetti',
//   },
// }).then((resultado) => {
//   console.log(resultado.toJSON());
// });

// Usuario.findByPk(3).then((resultado) => {
//   console.log(resultado.toJSON());
// });

// POST
// Post.findAll().then((resultado) => {
//   console.table(resultado.map((post) => post.toJSON()));
// });

// Post.findOne({
//   where: {
//     id: '1',
//   },
// }).then((resultado) => {
//   console.table(resultado.toJSON().texto);
// });

// Post.findByPk(1).then((resultado) => {
//   console.log(resultado.toJSON());
// });

// Comentario
// Comentario.findAll().then((resultado) => {
//   console.table(resultado.map((comment) => comment.toJSON()));
// });

//Comentario.findOne({
  //where: {
    //id: '2',
  //},
//}).then((resultado) => {
  //console.table(resultado.toJSON());
//});

//Post.findAll({
  //where: {
    //texto: {[Op.like]: '%h'}
  //}
//})

//Usuario.findAll({
  //where: {
    //  nome: {[Op.like]: '%a'}
  //}
//}) .then((resultado) => {
     //  console.table(resultado.map(user => user.toJSON()));
   //});

   //for (let i = 0; i < 6; i += 2) {
    //Comentario.findAll({
      //order: [['id', 'ASC']],
      //offset: i,
      //limit: 2,
    //}).then((resultado) => {
      //console.table(resultado.map((comment) => comment.toJSON()));
    //});
  //}

  //Usuario.create({
    //nome: 'Iago',
    //email: 'iago@digitalhouse.com',
    //senha: 'dev123'
  //}).then((resultado) => {
    //console.log(resultado.toJSON());
  //});

   //Usuario.create({
     //nome: 'Natalia',
     //email: 'nat@digitalhouse.com',
   //  senha: 'maravilhosaaaa123'
 //}).then((resultado) => {
  //   console.log(resultado.toJSON());
//});
 //Usuario.update({
   //  senha: 'novasenha123'
 //}, {
    // where: {
     //    id: 8
   //  }
 //}).then((resultado) => {
   //  console.log(resultado);
 //})
 Usuario.destroy({
  where: {
         id: 6
     }
 }).then((resultado) => {
     console.log(resultado);
});
