"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var jwt = require("jsonwebtoken");
var User = require("../models/userModel");
var mongoose = require("mongoose");
var protect = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res, next) {
    var _req$headers$authoriz, _req$cookies, token, decoded, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          token = null;
          if ((_req$headers$authoriz = req.headers.authorization) !== null && _req$headers$authoriz !== void 0 && _req$headers$authoriz.startsWith("Bearer")) {
            token = req.headers.authorization.split(" ")[1];
          }
          if (!token && (_req$cookies = req.cookies) !== null && _req$cookies !== void 0 && _req$cookies.token) {
            token = req.cookies.token;
          }
          if (token) {
            _context.n = 1;
            break;
          }
          return _context.a(2, res.status(401).json({
            success: false,
            message: "Not authorized, no token"
          }));
        case 1:
          decoded = jwt.verify(token, process.env.JWT_SECRET);
          _context.n = 2;
          return User.findById(decoded.id).select("-password");
        case 2:
          req.user = _context.v;
          if (req.user) {
            _context.n = 3;
            break;
          }
          return _context.a(2, res.status(401).json({
            success: false,
            message: "User not found"
          }));
        case 3:
          next();
          _context.n = 5;
          break;
        case 4:
          _context.p = 4;
          _t = _context.v;
          return _context.a(2, res.status(401).json({
            success: false,
            message: "Not authorized, token failed"
          }));
        case 5:
          return _context.a(2);
      }
    }, _callee, null, [[0, 4]]);
  }));
  return function protect(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var authorize = function authorize() {
  for (var _len = arguments.length, roles = new Array(_len), _key = 0; _key < _len; _key++) {
    roles[_key] = arguments[_key];
  }
  return function (req, res, next) {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Access denied"
      });
    }
    next();
  };
};
var checkDepartmentAccess = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res, next) {
    var _req$user, role, department, permissions, resourceDepartment;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _req$user = req.user, role = _req$user.role, department = _req$user.department, permissions = _req$user.permissions;
          if (!(role === "superadmin")) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2, next());
        case 1:
          resourceDepartment = req.body.department || req.params.department || req.query.department;
          if (!(role === "admin" && !department.equals(new mongoose.Types.ObjectId(resourceDepartment)))) {
            _context2.n = 2;
            break;
          }
          return _context2.a(2, res.status(403).json({
            success: false,
            message: "Access denied to this department"
          }));
        case 2:
          if (!(role === "user")) {
            _context2.n = 7;
            break;
          }
          if (!(!permissions.read && req.method === "GET")) {
            _context2.n = 3;
            break;
          }
          return _context2.a(2, res.status(403).json({
            success: false,
            message: "No read access"
          }));
        case 3:
          if (!(!permissions.create && req.method === "POST")) {
            _context2.n = 4;
            break;
          }
          return _context2.a(2, res.status(403).json({
            success: false,
            message: "No create access"
          }));
        case 4:
          if (!(!permissions.update && req.method === "PATCH")) {
            _context2.n = 5;
            break;
          }
          return _context2.a(2, res.status(403).json({
            success: false,
            message: "No update access"
          }));
        case 5:
          if (!(!permissions["delete"] && req.method === "DELETE")) {
            _context2.n = 6;
            break;
          }
          return _context2.a(2, res.status(403).json({
            success: false,
            message: "No delete access"
          }));
        case 6:
          if (department.equals(new mongoose.Types.ObjectId(resourceDepartment))) {
            _context2.n = 7;
            break;
          }
          return _context2.a(2, res.status(403).json({
            success: false,
            message: "Access denied to this department"
          }));
        case 7:
          next();
        case 8:
          return _context2.a(2);
      }
    }, _callee2);
  }));
  return function checkDepartmentAccess(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
module.exports = {
  protect: protect,
  authorize: authorize,
  checkDepartmentAccess: checkDepartmentAccess
};