const express = require('express');
const morgan = require('morgan')
const http = require('http');
const app = express();
const server = http.createServer(app);
 
//ajustes 
app.set('port', process.env.PORT || 5000);
app.use(express.static(__dirname + '/public'))

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//Rutas 
app.use('/api',require('./routes/rutas'))

//servidor corriendo 
server.listen(app.get('port'), ()=> console.log('server running at', app.get('port')));