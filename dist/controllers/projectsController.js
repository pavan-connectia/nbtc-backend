"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var Projects = require("../models/projectsModel");
var createProjectsController = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var projects, savedProjects, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          projects = new Projects(req.body);
          _context.n = 1;
          return projects.save();
        case 1:
          savedProjects = _context.v;
          res.status(201).json({
            success: true,
            message: "Projects created successfully",
            data: savedProjects
          });
          _context.n = 3;
          break;
        case 2:
          _context.p = 2;
          _t = _context.v;
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 3:
          return _context.a(2);
      }
    }, _callee, null, [[0, 2]]);
  }));
  return function createProjectsController(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var insertManyProjects = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var savedProjects, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return Projects.insertMany(req.body);
        case 1:
          savedProjects = _context2.v;
          // req.body should be an array
          res.status(201).json({
            success: true,
            message: "Projects created successfully",
            data: savedProjects
          });
          _context2.n = 3;
          break;
        case 2:
          _context2.p = 2;
          _t2 = _context2.v;
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
  return function insertManyProjects(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getAllProjectsController = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var display, filter, projectss, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          display = req.query.display;
          filter = display ? {
            display: display === "true"
          } : {};
          _context3.n = 1;
          return Projects.find(filter).populate("department", "href name").sort({
            index: 1
          });
        case 1:
          projectss = _context3.v;
          res.status(200).json({
            success: true,
            message: "Projects fetched successfully",
            data: projectss
          });
          _context3.n = 3;
          break;
        case 2:
          _context3.p = 2;
          _t3 = _context3.v;
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 3:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 2]]);
  }));
  return function getAllProjectsController(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getProjectsByIdController = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var projects, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          _context4.n = 1;
          return Projects.findById(req.params.id);
        case 1:
          projects = _context4.v;
          if (projects) {
            _context4.n = 2;
            break;
          }
          return _context4.a(2, res.status(404).json({
            success: false,
            message: "Projects not found"
          }));
        case 2:
          res.status(200).json({
            success: true,
            message: "Projects fetched successfully",
            data: projects
          });
          _context4.n = 4;
          break;
        case 3:
          _context4.p = 3;
          _t4 = _context4.v;
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 4:
          return _context4.a(2);
      }
    }, _callee4, null, [[0, 3]]);
  }));
  return function getProjectsByIdController(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getProjectsByDepartment = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var name, display, filter, projects, filteredProjects, _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          name = req.params.name;
          display = req.query.display;
          filter = display ? {
            display: display === "true"
          } : {};
          _context5.p = 1;
          _context5.n = 2;
          return Projects.find(filter).populate({
            path: "department",
            match: {
              href: name
            },
            select: "title href"
          }).exec();
        case 2:
          projects = _context5.v;
          filteredProjects = projects.filter(function (project) {
            return project.department !== null;
          });
          if (!(filteredProjects.length === 0)) {
            _context5.n = 3;
            break;
          }
          return _context5.a(2, res.status(404).json({
            success: false,
            message: "No projects found for this title"
          }));
        case 3:
          res.status(200).json({
            success: true,
            message: "Projects fetched successfully",
            data: filteredProjects
          });
          _context5.n = 5;
          break;
        case 4:
          _context5.p = 4;
          _t5 = _context5.v;
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 5:
          return _context5.a(2);
      }
    }, _callee5, null, [[1, 4]]);
  }));
  return function getProjectsByDepartment(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();
var getProjectsByDepartmentId = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res) {
    var display, filter, projects, _t6;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          display = req.query.display;
          filter = {
            department: req.params.id
          };
          if (display) {
            filter.display = display === "true";
          }
          _context6.p = 1;
          _context6.n = 2;
          return Projects.find(filter).populate("department", "href").sort({
            index: 1
          });
        case 2:
          projects = _context6.v;
          if (projects.length) {
            _context6.n = 3;
            break;
          }
          return _context6.a(2, res.status(404).json({
            success: false,
            message: "Projects not found"
          }));
        case 3:
          res.status(200).json({
            success: true,
            message: "Projects fetched successfully",
            data: projects
          });
          _context6.n = 5;
          break;
        case 4:
          _context6.p = 4;
          _t6 = _context6.v;
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 5:
          return _context6.a(2);
      }
    }, _callee6, null, [[1, 4]]);
  }));
  return function getProjectsByDepartmentId(_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
var updateProjectsController = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req, res) {
    var updatedProjects, _t7;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          _context7.p = 0;
          _context7.n = 1;
          return Projects.findByIdAndUpdate(req.params.id, req.body, {
            "new": true,
            runValidators: true
          });
        case 1:
          updatedProjects = _context7.v;
          if (updatedProjects) {
            _context7.n = 2;
            break;
          }
          return _context7.a(2, res.status(404).json({
            success: false,
            message: "Projects not found"
          }));
        case 2:
          res.status(200).json({
            success: true,
            message: "Projects updated successfully",
            data: updatedProjects
          });
          _context7.n = 4;
          break;
        case 3:
          _context7.p = 3;
          _t7 = _context7.v;
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 4:
          return _context7.a(2);
      }
    }, _callee7, null, [[0, 3]]);
  }));
  return function updateProjectsController(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();
var deleteProjectsController = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(req, res) {
    var deletedProjects, _t8;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.p = _context8.n) {
        case 0:
          _context8.p = 0;
          _context8.n = 1;
          return Projects.findByIdAndDelete(req.params.id);
        case 1:
          deletedProjects = _context8.v;
          if (deletedProjects) {
            _context8.n = 2;
            break;
          }
          return _context8.a(2, res.status(404).json({
            success: false,
            message: "Projects not found"
          }));
        case 2:
          res.status(200).json({
            success: true,
            message: "Projects deleted successfully"
          });
          _context8.n = 4;
          break;
        case 3:
          _context8.p = 3;
          _t8 = _context8.v;
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 4:
          return _context8.a(2);
      }
    }, _callee8, null, [[0, 3]]);
  }));
  return function deleteProjectsController(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();
module.exports = {
  createProjectsController: createProjectsController,
  insertManyProjects: insertManyProjects,
  getAllProjectsController: getAllProjectsController,
  getProjectsByIdController: getProjectsByIdController,
  getProjectsByDepartment: getProjectsByDepartment,
  getProjectsByDepartmentId: getProjectsByDepartmentId,
  updateProjectsController: updateProjectsController,
  deleteProjectsController: deleteProjectsController
};