"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = require("dotenv");
//ejecutar
(0, _dotenv.config)();
var _default = {
  // validar la variable de entorno para eso se importa dotenv
  //crear una variable para almacenar el puerto
  port: process.env.PORT || 5000
};
exports["default"] = _default;