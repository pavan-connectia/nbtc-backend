"use strict";

var _excluded = ["index"];
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var Publication = require("../../models/news/publicationModel");
var createPublicationController = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var newPublication, savedPublication, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          newPublication = new Publication(req.body);
          _context.n = 1;
          return newPublication.save();
        case 1:
          savedPublication = _context.v;
          res.status(201).json({
            success: true,
            message: "Publication created successfully",
            data: savedPublication
          });
          _context.n = 3;
          break;
        case 2:
          _context.p = 2;
          _t = _context.v;
          res.status(500).json({
            success: false,
            message: "Internal server error",
            error: _t.message
          });
        case 3:
          return _context.a(2);
      }
    }, _callee, null, [[0, 2]]);
  }));
  return function createPublicationController(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getAllPublicationController = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var _req$query, display, showInMain, requested, filter, publication, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _req$query = req.query, display = _req$query.display, showInMain = _req$query.showInMain, requested = _req$query.requested;
          filter = {};
          if (showInMain) {
            filter.showInMain = showInMain === "true";
          }
          if (requested) {
            filter.requested = requested === "true";
          }
          if (display) {
            filter.display = display === "true";
          }
          _context2.n = 1;
          return Publication.find(filter).sort({
            index: 1
          }).populate("department", "name href");
        case 1:
          publication = _context2.v;
          res.status(200).json({
            success: true,
            message: "Publication fetched successfully",
            data: publication
          });
          _context2.n = 3;
          break;
        case 2:
          _context2.p = 2;
          _t2 = _context2.v;
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 3:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 2]]);
  }));
  return function getAllPublicationController(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getPublicationByIdController = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var publication, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          _context3.n = 1;
          return Publication.findById(req.params.id);
        case 1:
          publication = _context3.v;
          if (publication) {
            _context3.n = 2;
            break;
          }
          return _context3.a(2, res.status(404).json({
            success: false,
            message: "Publication not found"
          }));
        case 2:
          res.status(200).json({
            success: true,
            message: "Publication fetched successfully",
            data: publication
          });
          _context3.n = 4;
          break;
        case 3:
          _context3.p = 3;
          _t3 = _context3.v;
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 4:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 3]]);
  }));
  return function getPublicationByIdController(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var updatePublicationController = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var id, _req$body, index, updateData, updatedPublication, allPublications, oldIndex, findNewIndex, tempPublications, _tempPublications$spl, _tempPublications$spl2, removedElement, _t4;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _context5.p = 0;
          id = req.params.id;
          _req$body = req.body, index = _req$body.index, updateData = _objectWithoutProperties(_req$body, _excluded);
          _context5.n = 1;
          return Publication.findByIdAndUpdate(id, updateData, {
            "new": true,
            runValidators: true
          });
        case 1:
          updatedPublication = _context5.v;
          if (updatedPublication) {
            _context5.n = 2;
            break;
          }
          return _context5.a(2, res.status(404).json({
            message: "Publication not found"
          }));
        case 2:
          if (!(index !== undefined)) {
            _context5.n = 7;
            break;
          }
          _context5.n = 3;
          return Publication.find().sort({
            index: 1
          });
        case 3:
          allPublications = _context5.v;
          oldIndex = allPublications.findIndex(function (t) {
            return t._id.toString() === id;
          });
          _context5.n = 4;
          return Publication.findOne({
            index: index
          });
        case 4:
          findNewIndex = _context5.v;
          if (findNewIndex) {
            _context5.n = 6;
            break;
          }
          _context5.n = 5;
          return Publication.findByIdAndUpdate(id, {
            index: index
          }, {
            "new": true
          });
        case 5:
          _context5.n = 7;
          break;
        case 6:
          tempPublications = _toConsumableArray(allPublications);
          _tempPublications$spl = tempPublications.splice(oldIndex, 1), _tempPublications$spl2 = _slicedToArray(_tempPublications$spl, 1), removedElement = _tempPublications$spl2[0];
          tempPublications.splice(index, 0, removedElement);
          _context5.n = 7;
          return Promise.all(tempPublications.map(/*#__PURE__*/function () {
            var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(element, idx) {
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    return _context4.a(2, Publication.findByIdAndUpdate(element._id, {
                      index: idx
                    }, {
                      "new": true
                    }));
                }
              }, _callee4);
            }));
            return function (_x9, _x0) {
              return _ref5.apply(this, arguments);
            };
          }()));
        case 7:
          res.status(200).json({
            success: true,
            message: "Publication updated successfully",
            data: updatedPublication
          });
          _context5.n = 9;
          break;
        case 8:
          _context5.p = 8;
          _t4 = _context5.v;
          console.error("Error in Update Publication: ", _t4.message);
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 9:
          return _context5.a(2);
      }
    }, _callee5, null, [[0, 8]]);
  }));
  return function updatePublicationController(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var deletePublicationController = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res) {
    var deletedPublication, _t5;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          _context6.p = 0;
          _context6.n = 1;
          return Publication.findByIdAndDelete(req.params.id);
        case 1:
          deletedPublication = _context6.v;
          if (deletedPublication) {
            _context6.n = 2;
            break;
          }
          return _context6.a(2, res.status(404).json({
            success: false,
            message: "Publication not found"
          }));
        case 2:
          res.status(200).json({
            success: false,
            message: "Publication deleted successfully"
          });
          _context6.n = 4;
          break;
        case 3:
          _context6.p = 3;
          _t5 = _context6.v;
          res.status(500).json({
            success: false,
            message: "Internal server error",
            error: _t5.message
          });
        case 4:
          return _context6.a(2);
      }
    }, _callee6, null, [[0, 3]]);
  }));
  return function deletePublicationController(_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
var getPublicationByDepartment = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req, res) {
    var id, publication, _t6;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          id = req.params.id;
          _context7.p = 1;
          _context7.n = 2;
          return Publication.find({
            department: id
          });
        case 2:
          publication = _context7.v;
          if (publication) {
            _context7.n = 3;
            break;
          }
          return _context7.a(2, res.status(404).json({
            success: false,
            message: "No publication found"
          }));
        case 3:
          res.status(200).json({
            success: true,
            message: "Publication fetched successfully",
            data: publication
          });
          _context7.n = 5;
          break;
        case 4:
          _context7.p = 4;
          _t6 = _context7.v;
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 5:
          return _context7.a(2);
      }
    }, _callee7, null, [[1, 4]]);
  }));
  return function getPublicationByDepartment(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();
module.exports = {
  createPublicationController: createPublicationController,
  getAllPublicationController: getAllPublicationController,
  getPublicationByIdController: getPublicationByIdController,
  updatePublicationController: updatePublicationController,
  deletePublicationController: deletePublicationController,
  getPublicationByDepartment: getPublicationByDepartment
};