"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateData = exports.SendData = exports.GetGeneralData = exports.DeleteData = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _conection = require("../database/conection");
//IMPORTAR LA CONEXION A LA BASE DE DATOS

//CREAR TODOS LOS METODOS DE UN CRUD PARA EXPORTARLOS A LAS RUTAS

//GET DATA
var GetGeneralData = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _conection.getConection)();
        case 3:
          pool = _context.sent;
          _context.next = 6;
          return pool.request().query('select *from tb_React');
        case 6:
          result = _context.sent;
          console.log(result);
          res.json(result.recordset);
          _context.next = 15;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          res.status(500);
          res.send(_context.t0.message);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function GetGeneralData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//SEND DATA 
exports.GetGeneralData = GetGeneralData;
var SendData = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, names, country, type, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          //AGRGEAR UN CLIENTE REST PARA HACER PRUEBAS CON POST O PUT
          _req$body = req.body, names = _req$body.names, country = _req$body.country, type = _req$body.type; //validar
          if (!(names == "" || country == "" || type == "")) {
            _context2.next = 5;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            msg: 'You have to fill all fileds'
          }));
        case 5:
          _context2.prev = 5;
          _context2.next = 8;
          return (0, _conection.getConection)();
        case 8:
          pool = _context2.sent;
          _context2.next = 11;
          return pool.request().input("name", _conection.sql.VarChar, names).input("country", _conection.sql.VarChar, country).input("type", _conection.sql.VarChar, type).query("Insert into tb_React values (@name,@country,@type)");
        case 11:
          console.log(names, country, type);
          res.json('good');
          _context2.next = 19;
          break;
        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](5);
          res.status(500);
          res.send(_context2.t0.message);
        case 19:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[5, 15]]);
  }));
  return function SendData(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//DELETE DATA
//SEND DATA 
exports.SendData = SendData;
var DeleteData = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var Id, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          //AGRGEAR UN CLIENTE REST PARA HACER PRUEBAS CON POST O PUT
          Id = req.params.Id;
          _context3.next = 4;
          return (0, _conection.getConection)();
        case 4:
          pool = _context3.sent;
          _context3.next = 7;
          return pool.request().input("Id", Id).query('Delete from tb_React where ID_Product = @Id');
        case 7:
          result = _context3.sent;
          res.send("Eliminado correctamente: " + result);
          _context3.next = 14;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          res.send(_context3.t0.message);
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 11]]);
  }));
  return function DeleteData(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//UPDATE DATA
//SEND DATA 
exports.DeleteData = DeleteData;
var UpdateData = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body2, names, country, type, Id, pool;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          //AGRGEAR UN CLIENTE REST PARA HACER PRUEBAS CON POST O PUT
          _req$body2 = req.body, names = _req$body2.names, country = _req$body2.country, type = _req$body2.type;
          Id = req.params.Id; //validar
          if (!(Id == "" || names == "" || country == "" || type == "")) {
            _context4.next = 6;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            msg: 'You have to fill all fileds'
          }));
        case 6:
          _context4.prev = 6;
          _context4.next = 9;
          return (0, _conection.getConection)();
        case 9:
          pool = _context4.sent;
          _context4.next = 12;
          return pool.request().input("name", _conection.sql.VarChar, names).input("country", _conection.sql.VarChar, country).input("type", _conection.sql.VarChar, type).input("Id", _conection.sql.Int, Id).query("UPDATE tb_React SET Product_Name = @name, Product_Country = @country, Product_Type = @type WHERE ID_Product = @Id");
        case 12:
          console.log(names, country, type, Id);
          res.send("Actualizado correctamente");
          _context4.next = 20;
          break;
        case 16:
          _context4.prev = 16;
          _context4.t0 = _context4["catch"](6);
          res.status(500);
          res.send(_context4.t0.message);
        case 20:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[6, 16]]);
  }));
  return function UpdateData(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.UpdateData = UpdateData;