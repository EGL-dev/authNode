"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRoles = void 0;

var _Rol = _interopRequireDefault(require("../models/Rol"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createRoles = function createRoles() {
  var count, values;
  return regeneratorRuntime.async(function createRoles$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_Rol["default"].estimatedDocumentCount());

        case 3:
          count = _context.sent;

          if (!(count > 0)) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return");

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(Promise.all([new _Rol["default"]({
            name: "user"
          }).save(), new _Rol["default"]({
            name: "moderator"
          }).save(), new _Rol["default"]({
            name: "admin"
          }).save()]));

        case 8:
          values = _context.sent;
          console.log(values);
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
};

exports.createRoles = createRoles;