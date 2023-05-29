"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConection = getConection;
Object.defineProperty(exports, "sql", {
  enumerable: true,
  get: function get() {
    return _mssql["default"];
  }
});
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mssql = _interopRequireDefault(require("mssql"));
//primero traer el modulo de coneccion de sql

//hacer una coneccion simple
//dentro de ella colocamos todos los datos de donde se encuentra la base de datos y accceso
var databaseSettings = {
  user: "sa",
  password: "JuHuOr531",
  server: "localhost",
  database: "React",
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};
//crear una funcion de conexion
function getConection() {
  return _getConection.apply(this, arguments);
} //ir a Index.js y importar la cenexion que se encuentra en la carperta de database
function _getConection() {
  _getConection = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var pool;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _mssql["default"].connect(databaseSettings);
        case 3:
          pool = _context.sent;
          return _context.abrupt("return", pool);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getConection.apply(this, arguments);
}