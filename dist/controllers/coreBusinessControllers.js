"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var CoreBusiness = require("../models/coreBusinessModel");
var NodeCache = require("node-cache");
var cache = new NodeCache();
var addCoreBusiness = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var newCoreBusiness, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          newCoreBusiness = new CoreBusiness(req.body);
          _context.n = 1;
          return newCoreBusiness.save();
        case 1:
          cache.del("navbarCoreBusiness");
          res.status(201).json({
            success: true,
            message: "Core business item added successfully",
            data: newCoreBusiness
          });
          _context.n = 3;
          break;
        case 2:
          _context.p = 2;
          _t = _context.v;
          res.status(500).json({
            success: false,
            message: "Failed to add core business item",
            error: _t.message
          });
        case 3:
          return _context.a(2);
      }
    }, _callee, null, [[0, 2]]);
  }));
  return function addCoreBusiness(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var editCoreBusiness = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var id, updates, updatedCoreBusiness, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          id = req.params.id;
          updates = req.body;
          _context2.n = 1;
          return CoreBusiness.findByIdAndUpdate(id, updates, {
            "new": true
          });
        case 1:
          updatedCoreBusiness = _context2.v;
          if (updatedCoreBusiness) {
            _context2.n = 2;
            break;
          }
          return _context2.a(2, res.status(404).json({
            success: false,
            message: "Core business item not found"
          }));
        case 2:
          cache.del("navbarCoreBusiness");
          res.status(200).json({
            success: true,
            message: "Core business item updated successfully",
            data: updatedCoreBusiness
          });
          _context2.n = 4;
          break;
        case 3:
          _context2.p = 3;
          _t2 = _context2.v;
          res.status(500).json({
            success: false,
            message: "Failed to update core business item",
            error: _t2
          });
        case 4:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 3]]);
  }));
  return function editCoreBusiness(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var deleteCoreBusiness = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var id, deletedCoreBusiness, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          id = req.params.id;
          _context3.n = 1;
          return CoreBusiness.findByIdAndDelete(id);
        case 1:
          deletedCoreBusiness = _context3.v;
          if (deletedCoreBusiness) {
            _context3.n = 2;
            break;
          }
          return _context3.a(2, res.status(404).json({
            success: false,
            message: "Core business item not found"
          }));
        case 2:
          cache.del("navbarCoreBusiness");
          res.status(200).json({
            success: true,
            message: "Core business item deleted successfully"
          });
          _context3.n = 4;
          break;
        case 3:
          _context3.p = 3;
          _t3 = _context3.v;
          res.status(500).json({
            success: false,
            message: "Failed to delete core business item",
            error: _t3.message
          });
        case 4:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 3]]);
  }));
  return function deleteCoreBusiness(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getAllCoreBusinesses = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var coreBusinesses, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          _context4.n = 1;
          return CoreBusiness.find().sort({
            index: 1
          }).lean();
        case 1:
          coreBusinesses = _context4.v;
          res.status(200).json({
            success: true,
            data: coreBusinesses
          });
          _context4.n = 3;
          break;
        case 2:
          _context4.p = 2;
          _t4 = _context4.v;
          res.status(500).json({
            success: false,
            message: "Failed to fetch core business items",
            error: _t4.message
          });
        case 3:
          return _context4.a(2);
      }
    }, _callee4, null, [[0, 2]]);
  }));
  return function getAllCoreBusinesses(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getCoreBusinessesByName = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var name, coreBusinesses, _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          name = req.params.name;
          _context5.p = 1;
          _context5.n = 2;
          return CoreBusiness.find({
            href: name
          }).lean();
        case 2:
          coreBusinesses = _context5.v;
          res.status(200).json({
            success: true,
            message: "Core business fetched successfully",
            data: coreBusinesses
          });
          _context5.n = 4;
          break;
        case 3:
          _context5.p = 3;
          _t5 = _context5.v;
          res.status(500).json({
            success: false,
            message: "Failed to fetch core business items",
            error: _t5.message
          });
        case 4:
          return _context5.a(2);
      }
    }, _callee5, null, [[1, 3]]);
  }));
  return function getCoreBusinessesByName(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();
var getCoreBusinessesById = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res) {
    var id, coreBusinesses, _t6;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          id = req.params.id;
          _context6.p = 1;
          _context6.n = 2;
          return CoreBusiness.findById(id).lean();
        case 2:
          coreBusinesses = _context6.v;
          if (!coreBusinesses) {
            res.status(404).json({
              success: false,
              message: "Core business not found"
            });
          }
          res.status(200).json({
            success: true,
            message: "Core business fetched sucessfully",
            data: coreBusinesses
          });
          _context6.n = 4;
          break;
        case 3:
          _context6.p = 3;
          _t6 = _context6.v;
          res.status(500).json({
            success: false,
            message: "Failed to fetch core business items",
            error: _t6.message
          });
        case 4:
          return _context6.a(2);
      }
    }, _callee6, null, [[1, 3]]);
  }));
  return function getCoreBusinessesById(_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
var getNavbarItems = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req, res) {
    var coreBusiness, cached, _t7;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          _context7.p = 0;
          cached = cache.get("navbarCoreBusinessss");
          if (!cached) {
            _context7.n = 1;
            break;
          }
          coreBusiness = cached;
          _context7.n = 3;
          break;
        case 1:
          _context7.n = 2;
          return CoreBusiness.find().select("hasSubDomain displayCoreBusiness displayProjects name href learnMore").sort({
            index: 1
          }).lean();
        case 2:
          coreBusiness = _context7.v;
          cache.set("navbarCoreBusiness", coreBusiness);
        case 3:
          res.status(200).json({
            success: true,
            message: "Core business for navbar fetched successfully",
            data: coreBusiness
          });
          _context7.n = 5;
          break;
        case 4:
          _context7.p = 4;
          _t7 = _context7.v;
          res.status(500).json({
            success: false,
            message: "Internal server error",
            error: _t7.message
          });
        case 5:
          return _context7.a(2);
      }
    }, _callee7, null, [[0, 4]]);
  }));
  return function getNavbarItems(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();
module.exports = {
  addCoreBusiness: addCoreBusiness,
  editCoreBusiness: editCoreBusiness,
  deleteCoreBusiness: deleteCoreBusiness,
  getAllCoreBusinesses: getAllCoreBusinesses,
  getCoreBusinessesByName: getCoreBusinessesByName,
  getCoreBusinessesById: getCoreBusinessesById,
  getNavbarItems: getNavbarItems
};