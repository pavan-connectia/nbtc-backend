"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var axios = require("axios");
var ContactForm = require("../../models/contact/contactFormModel");
var ExcelJS = require("exceljs");
var sendEmail = require("../../utils/sendEmail");
var CoreBusiness = require("../../models/coreBusinessModel");
var getAllSubmissionsController = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var submissions, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return ContactForm.find();
        case 1:
          submissions = _context.v;
          res.status(200).json({
            sucess: true,
            message: "Contact submission fetched Successfully",
            data: submissions
          });
          _context.n = 3;
          break;
        case 2:
          _context.p = 2;
          _t = _context.v;
          res.status(500).json({
            sucess: false,
            message: "Internal server error",
            error: _t.message
          });
        case 3:
          return _context.a(2);
      }
    }, _callee, null, [[0, 2]]);
  }));
  return function getAllSubmissionsController(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getDepartmentSubmissionsController = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var submissions, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return ContactForm.find({
            department: req.params.id
          });
        case 1:
          submissions = _context2.v;
          res.status(200).json({
            sucess: true,
            message: "Department contact submission fetched Successfully",
            data: submissions
          });
          _context2.n = 3;
          break;
        case 2:
          _context2.p = 2;
          _t2 = _context2.v;
          res.status(500).json({
            sucess: false,
            message: "Internal server error",
            error: _t2.message
          });
        case 3:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 2]]);
  }));
  return function getDepartmentSubmissionsController(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getSubmissionByIdController = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var submission, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          _context3.n = 1;
          return ContactForm.findById(req.params.id);
        case 1:
          submission = _context3.v;
          if (submission) {
            _context3.n = 2;
            break;
          }
          return _context3.a(2, res.status(404).json({
            success: false,
            message: "Contact submission not found"
          }));
        case 2:
          res.status(200).json({
            success: true,
            message: "Contact submission fetched successfully",
            data: submission
          });
          _context3.n = 4;
          break;
        case 3:
          _context3.p = 3;
          _t3 = _context3.v;
          res.status(500).json({
            sucess: false,
            message: "Internal server error",
            error: _t3.message
          });
        case 4:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 3]]);
  }));
  return function getSubmissionByIdController(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var createSubmissionController = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var _req$body, recaptchaToken, EmailAddress, cc, response, _response$data, success, score, newSubmission, savedSubmission, emailHtmlContact, emailHtmlUser, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _req$body = req.body, recaptchaToken = _req$body.recaptchaToken, EmailAddress = _req$body.EmailAddress, cc = _req$body.cc;
          _context4.p = 1;
          _context4.n = 2;
          return axios.post("https://www.google.com/recaptcha/api/siteverify", null, {
            params: {
              secret: process.env.RECAPTCHA_SECRET_KEY,
              response: recaptchaToken
            }
          });
        case 2:
          response = _context4.v;
          _response$data = response.data, success = _response$data.success, score = _response$data.score;
          if (!(!success || score < 0.5)) {
            _context4.n = 3;
            break;
          }
          return _context4.a(2, res.status(400).json({
            success: false,
            message: "reCAPTCHA verification failed."
          }));
        case 3:
          newSubmission = new ContactForm(req.body);
          _context4.n = 4;
          return newSubmission.save();
        case 4:
          savedSubmission = _context4.v;
          emailHtmlContact = "\n      <div style=\"font-family: Arial, sans-serif; line-height: 1.6; color: #333;\">\n        <p>Dear NBTC Team,</p>\n\n        <p>A new enquiry has been submitted through the NBTC Contact Form.</p>\n\n        <p><strong>Full Name:</strong> ".concat(savedSubmission.name, "</p>\n        <p><strong>Email:</strong> ").concat(savedSubmission.email, "</p>\n        <p><strong>Contact Number:</strong> ").concat(savedSubmission.phoneNo, "</p>\n        <p><strong>Message:</strong> ").concat(savedSubmission.question, "</p>\n        \n\n        <p>\n          Thank you,<br />\n          <strong>NBTC Website Support</strong>\n        </p>\n      </div>\n    ");
          emailHtmlUser = "\n      <div style=\"font-family: Arial, sans-serif; line-height: 1.6; color: #333;\">\n        <p>Dear ".concat(savedSubmission.name, ",</p>\n\n        <p>\n          Thank you for contacting <strong>NBTC</strong>.  \n          We have received your enquiry and our team will get back to you shortly.\n        </p>\n\n        <p>\n          Regards,<br />\n          <strong>NBTC Team</strong>\n        </p>\n      </div>\n    ");
          _context4.n = 5;
          return sendEmail({
            email: savedSubmission.email,
            subject: "Thank You for Contacting NBTC",
            html: emailHtmlUser
          });
        case 5:
          _context4.n = 6;
          return sendEmail(_objectSpread({
            email: EmailAddress,
            subject: "New Contact Form Enquiry",
            html: emailHtmlContact
          }, cc && cc.length && {
            cc: cc
          }));
        case 6:
          res.status(201).json({
            success: true,
            message: "Contact form submitted successfully",
            data: savedSubmission
          });
          _context4.n = 8;
          break;
        case 7:
          _context4.p = 7;
          _t4 = _context4.v;
          console.error("Error creating submission:", _t4.message);
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 8:
          return _context4.a(2);
      }
    }, _callee4, null, [[1, 7]]);
  }));
  return function createSubmissionController(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var updateSubmissionController = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var updatedSubmission, _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _context5.p = 0;
          _context5.n = 1;
          return ContactForm.findByIdAndUpdate(req.params.id, req.body, {
            "new": true
          });
        case 1:
          updatedSubmission = _context5.v;
          if (updatedSubmission) {
            _context5.n = 2;
            break;
          }
          return _context5.a(2, res.status(404).json({
            success: false,
            message: "Contact submission not found"
          }));
        case 2:
          res.status(200).json({
            success: true,
            message: "Contact submission updated successfully",
            data: updatedSubmission
          });
          _context5.n = 4;
          break;
        case 3:
          _context5.p = 3;
          _t5 = _context5.v;
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 4:
          return _context5.a(2);
      }
    }, _callee5, null, [[0, 3]]);
  }));
  return function updateSubmissionController(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();
var deleteSubmissionController = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res) {
    var deletedSubmission, _t6;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          _context6.p = 0;
          _context6.n = 1;
          return ContactForm.findByIdAndDelete(req.params.id);
        case 1:
          deletedSubmission = _context6.v;
          if (deletedSubmission) {
            _context6.n = 2;
            break;
          }
          return _context6.a(2, res.status(404).json({
            success: false,
            message: "Contact submission not found"
          }));
        case 2:
          res.status(200).json({
            success: true,
            message: "Contact submission deleted successfully"
          });
          _context6.n = 4;
          break;
        case 3:
          _context6.p = 3;
          _t6 = _context6.v;
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 4:
          return _context6.a(2);
      }
    }, _callee6, null, [[0, 3]]);
  }));
  return function deleteSubmissionController(_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
var exportSubmissionController = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req, res) {
    var _req$query, startDate, endDate, filter, contacts, workbook, worksheet, _t7;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          _context7.p = 0;
          _req$query = req.query, startDate = _req$query.startDate, endDate = _req$query.endDate; // Default to all if no date filters provided
          filter = {};
          if (startDate && endDate) {
            filter.createdAt = {
              $gte: new Date(startDate),
              $lte: new Date(endDate)
            };
          }
          _context7.n = 1;
          return ContactForm.find(filter).populate("department");
        case 1:
          contacts = _context7.v;
          console.log(contacts);
          if (contacts.length) {
            _context7.n = 2;
            break;
          }
          return _context7.a(2, res.status(404).json({
            message: "No contacts found"
          }));
        case 2:
          // Create workbook & sheet
          workbook = new ExcelJS.Workbook();
          worksheet = workbook.addWorksheet("Contacts"); // Define columns
          worksheet.columns = [{
            header: "Name",
            key: "name",
            width: 25
          }, {
            header: "Email",
            key: "email",
            width: 30
          }, {
            header: "Phone",
            key: "phoneNo",
            width: 15
          }, {
            header: "Subject",
            key: "subject",
            width: 30
          }, {
            header: "Question",
            key: "question",
            width: 50
          }, {
            header: "Department",
            key: "department",
            width: 25
          }, {
            header: "Created At",
            key: "createdAt",
            width: 20
          }];

          // Add rows
          contacts.forEach(function (c) {
            var _c$department;
            worksheet.addRow({
              name: c.name,
              email: c.email,
              phoneNo: c.phoneNo || "",
              subject: c.subject,
              question: c.question,
              department: ((_c$department = c.department) === null || _c$department === void 0 || (_c$department = _c$department.name) === null || _c$department === void 0 ? void 0 : _c$department.en) || "",
              // adjust based on your schema
              createdAt: c.createdAt.toISOString().split("T")[0]
            });
          });

          // Style header
          worksheet.getRow(1).eachCell(function (cell) {
            cell.font = {
              bold: true
            };
            cell.alignment = {
              horizontal: "center"
            };
            cell.fill = {
              type: "pattern",
              pattern: "solid",
              fgColor: {
                argb: "FFD3D3D3"
              }
            };
          });

          // Send file
          res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
          res.setHeader("Content-Disposition", "attachment; filename=contacts_export.xlsx");
          _context7.n = 3;
          return workbook.xlsx.write(res);
        case 3:
          res.end();
          _context7.n = 5;
          break;
        case 4:
          _context7.p = 4;
          _t7 = _context7.v;
          console.error(_t7);
          res.status(500).json({
            message: "Error exporting contacts"
          });
        case 5:
          return _context7.a(2);
      }
    }, _callee7, null, [[0, 4]]);
  }));
  return function exportSubmissionController(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();
module.exports = {
  getAllSubmissionsController: getAllSubmissionsController,
  createSubmissionController: createSubmissionController,
  getDepartmentSubmissionsController: getDepartmentSubmissionsController,
  getSubmissionByIdController: getSubmissionByIdController,
  updateSubmissionController: updateSubmissionController,
  deleteSubmissionController: deleteSubmissionController,
  exportSubmissionController: exportSubmissionController
};