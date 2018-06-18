'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso_mean2', (err, res) => {
    if(err){
        throw err;
    } else{
        console.log("La coneccion a la base de datos esta funcionando correctamente :3");
        
        app.listen(port, function() {
            console.log("Servidor del API Rest de musica escuchando en http://localhost:" + port);
        });
    }
});