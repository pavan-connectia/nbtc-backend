"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var CareersForm = require("../../models/careers/careersFormModel");
var CareersOpening = require("../../models/careers/careersOpeningModel");
var ExcelJS = require("exceljs");
var sendEmail = require("../../utils/sendEmail");
var createCareersFormController = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var _opening$title, careersForm, savedCareersForm, opening, openingTitle, emailHtml, emailHtmlHR, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          careersForm = new CareersForm(req.body);
          _context.n = 1;
          return careersForm.save();
        case 1:
          savedCareersForm = _context.v;
          _context.n = 2;
          return CareersOpening.findById(savedCareersForm.selectedOpening);
        case 2:
          opening = _context.v;
          openingTitle = (opening === null || opening === void 0 || (_opening$title = opening.title) === null || _opening$title === void 0 ? void 0 : _opening$title.en) || "N/A";
          emailHtml = "\n      <div style=\"font-family: Arial, sans-serif; line-height: 1.6; color: #333;\">\n        <p>Dear ".concat(savedCareersForm.name || "Applicant", ",</p>\n\n        <p>\n          Thank you for submitting your application to\n          <strong>NBTC Careers</strong>. We appreciate your interest in joining\n          our team and the time you took to complete your application.\n        </p>\n\n        <p>\n          Our hiring team will carefully review your submission. If your\n          qualifications align with our current requirements, we will contact\n          you regarding the next steps. Please note that the review process may\n          take some time.\n        </p>\n\n        <p>\n          Thank you once again for your interest in NBTC. We wish you the best\n          and appreciate your patience.\n        </p>\n\n        <p>\n          Regards,<br />\n          <strong>NBTC HR Department</strong>\n        </p>\n      </div>\n    ");
          emailHtmlHR = "\n  <div style=\"font-family: Arial, sans-serif; line-height: 1.6; color: #333;\">\n    <p>Dear NBTC HR Team,</p>\n\n    <p>\n      A new job application has been submitted through the <strong>NBTC Careers Portal</strong>.\n    </p>\n\n    <h3 style=\"margin-top: 20px;\">Applicant Details</h3>\n\n    <p><strong>Full Name:</strong> ".concat(savedCareersForm.fName, " ").concat(savedCareersForm.mName || "", " ").concat(savedCareersForm.lName || "", "</p>\n    <p><strong>Email:</strong> ").concat(savedCareersForm.email, "</p>\n    <p><strong>Contact Number:</strong> ").concat(savedCareersForm.phone, "</p>\n    <p><strong>Nationality:</strong> ").concat(savedCareersForm.nationality || "N/A", "</p>\n    <p><strong>Age:</strong> ").concat(savedCareersForm.age || "N/A", "</p>\n    <p><strong>Gender:</strong> ").concat(savedCareersForm.gender || "N/A", "</p>\n    <p><strong>Current Location:</strong> ").concat(savedCareersForm.location || "N/A", "</p>\n\n    <h3 style=\"margin-top: 20px;\">Professional Information</h3>\n\n    <p><strong>Position Applied For:</strong> ").concat(openingTitle, "</p>\n    <p><strong>Years of Experience:</strong> ").concat(savedCareersForm.experience || "N/A", "</p>\n    <p><strong>Educational Qualification:</strong> ").concat(savedCareersForm.eduQualification || "N/A", "</p>\n    <p><strong>Technical Qualification:</strong> ").concat(savedCareersForm.techQualification || "N/A", "</p>\n\n    <h3 style=\"margin-top: 20px;\">Cover Message</h3>\n    <p>").concat(savedCareersForm.remarks || "No cover message provided.", "</p>\n\n    <h3 style=\"margin-top: 20px;\">Resume</h3>\n    <p>\n      <a href=\"").concat(process.env.BASE_URL, "/").concat(savedCareersForm.resume, "\" target=\"_blank\">\n        View / Download Resume\n      </a>\n    </p>\n\n    <p style=\"margin-top: 30px;\">\n      Kindly review the application and take the necessary action.\n    </p>\n\n    <p>\n      Regards,<br />\n      <strong>NBTC Careers System</strong>\n    </p>\n  </div>\n");
          _context.n = 3;
          return sendEmail({
            email: savedCareersForm.email,
            subject: "Thank You for Applying to NBTC Careers",
            html: emailHtml
          });
        case 3:
          _context.n = 4;
          return sendEmail({
            email: process.env.HREmail,
            subject: "New Job Application",
            html: emailHtml
          });
        case 4:
          res.status(201).json({
            success: true,
            message: "Careers form submitted successfully",
            data: savedCareersForm
          });
          _context.n = 6;
          break;
        case 5:
          _context.p = 5;
          _t = _context.v;
          res.status(500).json({
            success: false,
            message: "Internal server error",
            error: _t.message
          });
        case 6:
          return _context.a(2);
      }
    }, _callee, null, [[0, 5]]);
  }));
  return function createCareersFormController(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getAllCareersFormController = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var careersForms, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return CareersForm.find().populate("selectedOpening", "title location department");
        case 1:
          careersForms = _context2.v;
          res.status(200).json({
            success: true,
            message: "Careers form fetched successfully",
            data: careersForms
          });
          _context2.n = 3;
          break;
        case 2:
          _context2.p = 2;
          _t2 = _context2.v;
          console.error(_t2);
          res.status(500).json({
            success: false,
            message: "Internal server error",
            error: _t2.message
          });
        case 3:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 2]]);
  }));
  return function getAllCareersFormController(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getCareersFormByDepartmentController = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var id, careersForms, filteredForms, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          id = req.params.id;
          _context3.p = 1;
          _context3.n = 2;
          return CareersForm.find().populate({
            path: "selectedOpening",
            match: {
              department: id
            },
            select: "title href department"
          }).exec();
        case 2:
          careersForms = _context3.v;
          filteredForms = careersForms.filter(function (form) {
            return form.selectedOpening;
          });
          if (!(filteredForms.length === 0)) {
            _context3.n = 3;
            break;
          }
          return _context3.a(2, res.status(404).json({
            success: false,
            message: "No careers forms found for this department"
          }));
        case 3:
          res.status(200).json({
            success: true,
            message: "Careers forms fetched successfully",
            data: filteredForms
          });
          _context3.n = 5;
          break;
        case 4:
          _context3.p = 4;
          _t3 = _context3.v;
          console.error(_t3);
          res.status(500).json({
            success: false,
            message: "Internal server error",
            error: _t3.message
          });
        case 5:
          return _context3.a(2);
      }
    }, _callee3, null, [[1, 4]]);
  }));
  return function getCareersFormByDepartmentController(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getCareersFormByIdController = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var careersForm, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          _context4.n = 1;
          return CareersForm.findById(req.params.id).populate("selectedOpening");
        case 1:
          careersForm = _context4.v;
          if (careersForm) {
            _context4.n = 2;
            break;
          }
          return _context4.a(2, res.status(404).json({
            success: false,
            message: "Careers form not found"
          }));
        case 2:
          res.status(200).json({
            success: true,
            message: "Careers form fetched successfully",
            data: careersForm
          });
          _context4.n = 4;
          break;
        case 3:
          _context4.p = 3;
          _t4 = _context4.v;
          res.status(500).json({
            success: false,
            message: "Internal server error",
            error: _t4.message
          });
        case 4:
          return _context4.a(2);
      }
    }, _callee4, null, [[0, 3]]);
  }));
  return function getCareersFormByIdController(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var updateCareersFormController = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var updatedCareersForm, _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _context5.p = 0;
          _context5.n = 1;
          return CareersForm.findByIdAndUpdate(req.params.id, req.body, {
            "new": true,
            runValidators: true
          });
        case 1:
          updatedCareersForm = _context5.v;
          if (updatedCareersForm) {
            _context5.n = 2;
            break;
          }
          return _context5.a(2, res.status(404).json({
            success: false,
            message: "Careers form not found"
          }));
        case 2:
          res.status(200).json({
            success: true,
            data: updatedCareersForm,
            message: "Careers form updated successfully"
          });
          _context5.n = 4;
          break;
        case 3:
          _context5.p = 3;
          _t5 = _context5.v;
          res.status(500).json({
            success: false,
            message: "Internal server error",
            error: _t5.message
          });
        case 4:
          return _context5.a(2);
      }
    }, _callee5, null, [[0, 3]]);
  }));
  return function updateCareersFormController(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();
var deleteCareersFormController = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res) {
    var deletedCareersForm, _t6;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          _context6.p = 0;
          _context6.n = 1;
          return CareersForm.findByIdAndDelete(req.params.id);
        case 1:
          deletedCareersForm = _context6.v;
          if (deletedCareersForm) {
            _context6.n = 2;
            break;
          }
          return _context6.a(2, res.status(404).json({
            success: false,
            message: "Careers form not found"
          }));
        case 2:
          res.status(200).json({
            success: true,
            message: "Careers form deleted successfully"
          });
          _context6.n = 4;
          break;
        case 3:
          _context6.p = 3;
          _t6 = _context6.v;
          res.status(500).json({
            success: false,
            message: "Internal server error",
            error: _t6.message
          });
        case 4:
          return _context6.a(2);
      }
    }, _callee6, null, [[0, 3]]);
  }));
  return function deleteCareersFormController(_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
var exportCareersController = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req, res) {
    var _req$query, startDate, endDate, filter, submissions, workbook, worksheet, _t7;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          _context7.p = 0;
          _req$query = req.query, startDate = _req$query.startDate, endDate = _req$query.endDate; // Build filter
          filter = {};
          if (startDate && endDate) {
            filter.createdAt = {
              $gte: new Date(startDate),
              $lte: new Date(endDate)
            };
          }
          _context7.n = 1;
          return CareersForm.find(filter).populate("selectedOpening", "title") // populate job title
          .lean();
        case 1:
          submissions = _context7.v;
          if (submissions.length) {
            _context7.n = 2;
            break;
          }
          return _context7.a(2, res.status(404).json({
            message: "No career submissions found"
          }));
        case 2:
          // Create workbook
          workbook = new ExcelJS.Workbook();
          worksheet = workbook.addWorksheet("Careers"); // Define columns
          worksheet.columns = [{
            header: "First Name",
            key: "fName",
            width: 20
          }, {
            header: "Middle Name",
            key: "mName",
            width: 20
          }, {
            header: "Last Name",
            key: "lName",
            width: 20
          }, {
            header: "Nationality",
            key: "nationality",
            width: 20
          }, {
            header: "Age",
            key: "age",
            width: 10
          }, {
            header: "Gender",
            key: "gender",
            width: 15
          }, {
            header: "Email",
            key: "email",
            width: 30
          }, {
            header: "Phone",
            key: "phone",
            width: 20
          }, {
            header: "Location",
            key: "location",
            width: 20
          }, {
            header: "Experience",
            key: "experience",
            width: 20
          }, {
            header: "Education",
            key: "eduQualification",
            width: 25
          }, {
            header: "Technical Qualification",
            key: "techQualification",
            width: 25
          }, {
            header: "Remarks",
            key: "remarks",
            width: 40
          }, {
            header: "Resume File",
            key: "resume",
            width: 40
          }, {
            header: "Job Opening",
            key: "jobOpening",
            width: 25
          }, {
            header: "Submitted At",
            key: "createdAt",
            width: 20
          }];

          // Add rows
          submissions.forEach(function (s) {
            var _s$selectedOpening;
            worksheet.addRow({
              fName: s.fName,
              mName: s.mName || "",
              lName: s.lName || "",
              nationality: s.nationality || "",
              age: s.age || "",
              gender: s.gender || "",
              email: s.email,
              phone: s.phone,
              location: s.location || "",
              experience: s.experience || "",
              eduQualification: s.eduQualification || "",
              techQualification: s.techQualification || "",
              remarks: s.remarks || "",
              resume: s.resume,
              // file path
              jobOpening: ((_s$selectedOpening = s.selectedOpening) === null || _s$selectedOpening === void 0 ? void 0 : _s$selectedOpening.title) || "",
              createdAt: s.createdAt.toISOString().split("T")[0]
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

          // Send response
          res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
          res.setHeader("Content-Disposition", "attachment; filename=careers_export.xlsx");
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
            message: "Error exporting careers form"
          });
        case 5:
          return _context7.a(2);
      }
    }, _callee7, null, [[0, 4]]);
  }));
  return function exportCareersController(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();
module.exports = {
  createCareersFormController: createCareersFormController,
  getAllCareersFormController: getAllCareersFormController,
  getCareersFormByIdController: getCareersFormByIdController,
  updateCareersFormController: updateCareersFormController,
  deleteCareersFormController: deleteCareersFormController,
  getCareersFormByDepartmentController: getCareersFormByDepartmentController,
  exportCareersController: exportCareersController
};