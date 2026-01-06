"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["title", "image", "cc", "salesEmailAddress", "recaptchaToken"];
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var Quotation = require("../models/quotationModel");
var axios = require("axios");
var sendEmail = require("../utils/sendEmail");
var addQuotation = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var _req$body, title, image, cc, salesEmailAddress, recaptchaToken, quotationData, response, _response$data, success, score, newQuotation, emailHtml, emailHtml2, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _req$body = req.body, title = _req$body.title, image = _req$body.image, cc = _req$body.cc, salesEmailAddress = _req$body.salesEmailAddress, recaptchaToken = _req$body.recaptchaToken, quotationData = _objectWithoutProperties(_req$body, _excluded);
          _context.p = 1;
          _context.n = 2;
          return axios.post("https://www.google.com/recaptcha/api/siteverify", null, {
            params: {
              secret: process.env.RECAPTCHA_SECRET_KEY,
              response: recaptchaToken
            }
          });
        case 2:
          response = _context.v;
          _response$data = response.data, success = _response$data.success, score = _response$data.score;
          if (!(!success || score < 0.5)) {
            _context.n = 3;
            break;
          }
          return _context.a(2, res.status(400).json({
            success: false,
            message: "reCAPTCHA verification failed."
          }));
        case 3:
          newQuotation = new Quotation(quotationData);
          _context.n = 4;
          return newQuotation.save();
        case 4:
          emailHtml = "\n  <div style=\"font-family: Arial, sans-serif;\">\n    <p>Dear NBTC Sales Team,</p>\n\n    <p>You have received a new enquiry</p>\n\n    <p><strong>Name:</strong> ".concat(newQuotation.name, "</p>\n    <p><strong>Email:</strong> ").concat(newQuotation.email, "</p>\n    <p><strong>Phone:</strong> ").concat(newQuotation.phone, "</p>\n    <p><strong>Message:</strong> ").concat(newQuotation.message, "</p>\n    <p><strong>Company:</strong> ").concat(newQuotation.company, "</p>\n    <p><strong>Location:</strong> ").concat(newQuotation.site, "</p>\n").concat(newQuotation.pdf ? "\n    <h3 style=\"margin-top: 20px;\">Resume</h3>\n    <p>\n      <a href=\"".concat(process.env.BASE_URL, "/").concat(newQuotation.pdf, "\" target=\"_blank\">\n        View / Download Resume\n      </a>\n    </p>\n  ") : "", "\n\n    ").concat(title ? "<p><strong>Project:</strong> ".concat(title, "</p>") : "Ganeral enquire", "\n\n    <p>Best regards,<br/>NBTC Website Enquiry System</p>\n  </div>\n");
          _context.n = 5;
          return sendEmail(_objectSpread({
            email: salesEmailAddress,
            subject: "New Sales Enquiry - ".concat(title),
            html: emailHtml
          }, cc && cc.length && {
            cc: cc
          }));
        case 5:
          emailHtml2 = "\n          <div style=\"font-family: Arial, sans-serif; line-height: 1.6; color: #333;\">\n            <p>Dear ".concat(newQuotation.name, ",</p>\n    \n            <p>Thank you for reaching out to NBTC. We have received your enquiry and will get back to you shortly.</p>\n          </div>\n        ");
          _context.n = 6;
          return sendEmail({
            email: newQuotation.email,
            subject: "Acknowledgement of Your Enquiry",
            html: emailHtml2
          });
        case 6:
          res.status(201).json({
            success: true,
            message: "Quotation item added successfully",
            data: newQuotation
          });
          _context.n = 8;
          break;
        case 7:
          _context.p = 7;
          _t = _context.v;
          res.status(500).json({
            success: false,
            message: "Internal server error",
            error: _t.message
          });
        case 8:
          return _context.a(2);
      }
    }, _callee, null, [[1, 7]]);
  }));
  return function addQuotation(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var editQuotation = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var id, updates, updatedQuotation, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          id = req.params.id;
          updates = req.body;
          _context2.n = 1;
          return Quotation.findByIdAndUpdate(id, updates, {
            "new": true
          });
        case 1:
          updatedQuotation = _context2.v;
          if (updatedQuotation) {
            _context2.n = 2;
            break;
          }
          return _context2.a(2, res.status(404).json({
            success: false,
            message: "Quotation item not found"
          }));
        case 2:
          res.status(200).json({
            success: true,
            message: "Quotation item updated successfully",
            data: updatedQuotation
          });
          _context2.n = 4;
          break;
        case 3:
          _context2.p = 3;
          _t2 = _context2.v;
          res.status(500).json({
            success: false,
            message: "Internal server error",
            error: _t2.message
          });
        case 4:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 3]]);
  }));
  return function editQuotation(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var deleteQuotation = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var id, deletedQuotation, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          id = req.params.id;
          _context3.n = 1;
          return Quotation.findByIdAndDelete(id);
        case 1:
          deletedQuotation = _context3.v;
          if (deletedQuotation) {
            _context3.n = 2;
            break;
          }
          return _context3.a(2, res.status(404).json({
            success: false,
            message: "Quotation item not found"
          }));
        case 2:
          res.status(200).json({
            success: true,
            message: "Quotation item deleted successfully"
          });
          _context3.n = 4;
          break;
        case 3:
          _context3.p = 3;
          _t3 = _context3.v;
          res.status(500).json({
            success: false,
            message: "Internal server error",
            error: _t3.message
          });
        case 4:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 3]]);
  }));
  return function deleteQuotation(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getAllQuotation = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var quotation, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          _context4.n = 1;
          return Quotation.find();
        case 1:
          quotation = _context4.v;
          res.status(200).json({
            success: true,
            data: quotation
          });
          _context4.n = 3;
          break;
        case 2:
          _context4.p = 2;
          _t4 = _context4.v;
          res.status(500).json({
            success: false,
            message: "Internal server error",
            error: _t4.message
          });
        case 3:
          return _context4.a(2);
      }
    }, _callee4, null, [[0, 2]]);
  }));
  return function getAllQuotation(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getQuotationById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var id, quotation, _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          id = req.params.id;
          _context5.p = 1;
          _context5.n = 2;
          return Quotation.findById(id);
        case 2:
          quotation = _context5.v;
          if (!quotation) {
            res.status(404).json({
              success: false,
              message: "Quotation not found"
            });
          }
          res.status(200).json({
            success: true,
            message: "Quotation fetched sucessfully",
            data: quotation
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
  return function getQuotationById(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();
var getQuotationByDepartment = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res) {
    var id, quotation, _t6;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          id = req.params.id;
          _context6.p = 1;
          _context6.n = 2;
          return Quotation.find({
            department: id
          });
        case 2:
          quotation = _context6.v;
          if (!quotation) {
            res.status(404).json({
              success: false,
              message: "Quotation not found"
            });
          }
          res.status(200).json({
            success: true,
            message: "Quotation fetched sucessfully",
            data: quotation
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
  return function getQuotationByDepartment(_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
module.exports = {
  addQuotation: addQuotation,
  editQuotation: editQuotation,
  deleteQuotation: deleteQuotation,
  getAllQuotation: getAllQuotation,
  getQuotationById: getQuotationById,
  getQuotationByDepartment: getQuotationByDepartment
};