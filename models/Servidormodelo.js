const express = require("express");
//const { conectarBD } = require("../database/conexion.js");

//Traer las rutas

//const rutas=require('../routes/rutas.js')

class ServidorModelo {
  constructor() {
    this.app = express();
    this.conectarconBD();
    this.enrutarPeticiones();
  }

  encenderServidor() {
    this.app.listen(8080, function () {
      console.log("Servidor encendido.." + 8080);
    });
  }

  enrutarPeticiones() {
    this.app.use('/',rutas)
    
  }

  conectarconBD() {
    conectarBD();
  }
}

module.exports = ServidorModelo;