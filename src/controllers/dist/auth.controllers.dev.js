"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signin = exports.signup = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _Config = _interopRequireDefault(require("../Config"));

var _morgan = require("morgan");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var signup = function signup(req, res) {
  var _req$body, username, email, pass, roles, newUser, saveUser, token;

  return regeneratorRuntime.async(function signup$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, username = _req$body.username, email = _req$body.email, pass = _req$body.pass, roles = _req$body.roles;
          _context.t0 = _User["default"];
          _context.t1 = username;
          _context.t2 = email;
          _context.next = 6;
          return regeneratorRuntime.awrap(_User["default"].encryptPassword(pass));

        case 6:
          _context.t3 = _context.sent;
          _context.t4 = {
            username: _context.t1,
            email: _context.t2,
            pass: _context.t3
          };
          newUser = new _context.t0(_context.t4);
          _context.next = 11;
          return regeneratorRuntime.awrap(newUser.save());

        case 11:
          saveUser = _context.sent;
          token = _jsonwebtoken["default"].sign({
            id: saveUser._id
          }, _Config["default"].SECRECT, {
            expiresIn: 86400
          });
          res.json(token);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.signup = signup;

var signin = function signin(req, res) {
  return regeneratorRuntime.async(function signin$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          res.json('Sigunin');

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.signin = signin;