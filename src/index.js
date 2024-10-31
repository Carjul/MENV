const express = require('express');
const morgan = require('morgan')
const http = require('http');
const cors = require('cors'); 
const app = express();
const server = http.createServer(app);
const dotenv = require('dotenv');
 
//ajustes 
dotenv.config();
app.set('port', process.env.PORT || 5000);
app.use(express.static(__dirname + '/public'))
//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//Rutas 
app.use('/api',require('./routes/rutas'))

//servidor corriendo 
server.listen(app.get('port'), ()=> console.log('server running at', app.get('port')));
