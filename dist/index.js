"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
require("./database/conection");
//llamar app de app.js

//importar la conexion de base de datos

//asignarle un puerto
_app["default"].listen(_app["default"].get('port'));
console.log("server on port", _app["default"].get('port'));