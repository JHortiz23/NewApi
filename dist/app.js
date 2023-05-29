"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _config = _interopRequireDefault(require("./config"));
var _CRUD = _interopRequireDefault(require("./routes/CRUD.routes"));
//import config para acceder a la variable del puerto

//importar las rutas

var app = (0, _express["default"])();

//decirle que recibas json
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
//configurar el puerto
app.set('port', _config["default"].port);

//le indicamos a la aplicacion que utilize las rutas 
app.use(_CRUD["default"]);
//si existe por que utilize el puerto de la variable sino que utilize el puerto 3000
var _default = app;
exports["default"] = _default;