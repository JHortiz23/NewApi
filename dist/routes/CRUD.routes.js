"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _CrudData = require("../controllers/CrudData");
//LAS RUTAS DE TODAS LAS PETICIONES QUE SE HACEN EN controllers
//importar router de express para crear URLS

//IMPORTA CADA UNO DE LOS METODOS CRUD

//instanciar la importacion
var router = (0, _express.Router)();
//CONSTRUIR CADA UNA DE LAS RUTAS
router.get('/GetGeneralData', _CrudData.GetGeneralData);
router["delete"]('/DeleteData/:Id', _CrudData.DeleteData);
router.post('/SendData', _CrudData.SendData);
router.put('/UpdateData/:Id', _CrudData.UpdateData);
//EXPORTAR
var _default = router;
exports["default"] = _default;