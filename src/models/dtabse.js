const mongoose = require('mongoose');

const {Schema, model,connect } = mongoose;

const {URI} = process.env;

connect(URI)
.then(db => console.log('db esta conectado'))
.catch(err => console.error(err))

var schema = new Schema({
   
   titulo: String,
   descripcion: String 
  
  });
  
  
  module.exports = model("archivo", schema);
  
  