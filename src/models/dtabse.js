const mongoose = require('mongoose');

const {Schema, model,connect } = mongoose;

connect('mongodb+srv://carlos:12345@cluster0.losq7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(db => console.log('db esta conectado'))
.catch(err => console.error(err))

var schema = new Schema({
   
   titulo: String,
   descripcion: String 
  
  });
  
  
  module.exports = model("archivo", schema);
  
  