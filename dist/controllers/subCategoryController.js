"use strict";

function _objectDestructuringEmpty(t) { if (null == t) throw new TypeError("Cannot destructure " + t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var Category = require("../models/categoryModel");
var SubCategory = require("../models/subCategoryModel");
var createSubCategoryController = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var subCategory, savedSubCategory, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          subCategory = new SubCategory(req.body);
          _context.n = 1;
          return subCategory.save();
        case 1:
          savedSubCategory = _context.v;
          res.status(201).json({
            success: true,
            message: "SubCategory inserted successfully",
            data: savedSubCategory
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
  return function createSubCategoryController(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getAllSubCategoryController = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var subCategory, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return SubCategory.find().populate("department", "name");
        case 1:
          subCategory = _context2.v;
          res.status(200).json({
            success: true,
            message: "SubCategory fetched successfully",
            data: subCategory
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
  return function getAllSubCategoryController(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getSubCategoryByDepartment = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var name, subCategory, filteredQualifications, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          name = req.query.name;
          _context3.n = 1;
          return SubCategory.find().populate({
            path: "department",
            select: "title href"
          }).exec();
        case 1:
          subCategory = _context3.v;
          filteredQualifications = subCategory.filter(function (subCategory) {
            return subCategory.department && subCategory.department.href === name;
          });
          res.status(200).json({
            success: true,
            message: "SubCategory fetched successfully",
            data: filteredQualifications
          });
          _context3.n = 3;
          break;
        case 2:
          _context3.p = 2;
          _t3 = _context3.v;
          console.error("Error in getSubCategoryByDepartment: ", _t3.message);
          res.status(500).json({
            success: false,
            message: "Internal server error",
            error: _t3.message
          });
        case 3:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 2]]);
  }));
  return function getSubCategoryByDepartment(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getSubCategoryByFeaturedPopular = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var filter, equipments, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          filter = {
            department: req.params.id,
            display: true,
            $or: [{
              featured: true
            }, {
              popular: true
            }]
          };
          _context4.n = 1;
          return SubCategory.find(filter).populate("department", "title href").populate("category", "name href").sort({
            index: 1
          });
        case 1:
          equipments = _context4.v;
          if (!(!equipments || equipments.length === 0)) {
            _context4.n = 2;
            break;
          }
          return _context4.a(2, res.status(404).json({
            success: false,
            message: "No featured/popular equipment found"
          }));
        case 2:
          res.status(200).json({
            success: true,
            message: "Equipments fetched successfully",
            data: equipments
          });
          _context4.n = 4;
          break;
        case 3:
          _context4.p = 3;
          _t4 = _context4.v;
          console.error("Error fetching featured/popular equipment:", _t4.message);
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
  return function getSubCategoryByFeaturedPopular(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getSubCategoryByFeaturedPopularByDeptId = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var id, filter, equipments, _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _context5.p = 0;
          id = req.params.id;
          filter = {
            display: true,
            $or: [{
              featured: true
            }, {
              popular: true
            }],
            department: id
          };
          _context5.n = 1;
          return SubCategory.find(filter).populate("department", "title href").populate("category", "name href").sort({
            index: 1
          });
        case 1:
          equipments = _context5.v;
          if (!(!equipments || equipments.length === 0)) {
            _context5.n = 2;
            break;
          }
          return _context5.a(2, res.status(404).json({
            success: false,
            message: "No featured/popular equipment found"
          }));
        case 2:
          res.status(200).json({
            success: true,
            message: "Equipments fetched successfully",
            data: equipments
          });
          _context5.n = 4;
          break;
        case 3:
          _context5.p = 3;
          _t5 = _context5.v;
          console.error("Error fetching featured/popular equipment:", _t5.message);
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
  return function getSubCategoryByFeaturedPopularByDeptId(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();
var getSubCategoryByIdController = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res) {
    var equipment, _t6;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          _context6.p = 0;
          _context6.n = 1;
          return SubCategory.findById(req.params.id).populate("category", "name href");
        case 1:
          equipment = _context6.v;
          if (equipment) {
            _context6.n = 2;
            break;
          }
          return _context6.a(2, res.status(404).json({
            success: false,
            message: "Equipment not found"
          }));
        case 2:
          res.status(200).json({
            success: true,
            message: "Equipment fetched successfully",
            data: equipment
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
  return function getSubCategoryByIdController(_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
var getSubCategoryByDepartmentId = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req, res) {
    var subCategory, _t7;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          _context7.p = 0;
          _context7.n = 1;
          return SubCategory.find({
            department: req.params.id
          }).populate("category", "name href");
        case 1:
          subCategory = _context7.v;
          if (subCategory) {
            _context7.n = 2;
            break;
          }
          return _context7.a(2, res.status(404).json({
            success: false,
            message: "SubCategory not found"
          }));
        case 2:
          res.status(200).json({
            success: true,
            message: "SubCategory fetched successfully",
            data: subCategory
          });
          _context7.n = 4;
          break;
        case 3:
          _context7.p = 3;
          _t7 = _context7.v;
          res.status(500).json({
            success: false,
            message: "Internal server error",
            error: _t7.message
          });
        case 4:
          return _context7.a(2);
      }
    }, _callee7, null, [[0, 3]]);
  }));
  return function getSubCategoryByDepartmentId(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();
var getSubCategoryByCategory = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(req, res) {
    var _req$query, display, categorySlug, category, filter, subcategories, _t8;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.p = _context8.n) {
        case 0:
          _context8.p = 0;
          _req$query = req.query, display = _req$query.display, categorySlug = _req$query.category;
          if (categorySlug) {
            _context8.n = 1;
            break;
          }
          return _context8.a(2, res.status(400).json({
            success: false,
            message: "Category slug is required"
          }));
        case 1:
          _context8.n = 2;
          return Category.findOne({
            href: categorySlug
          });
        case 2:
          category = _context8.v;
          if (category) {
            _context8.n = 3;
            break;
          }
          return _context8.a(2, res.status(404).json({
            success: false,
            message: "Category not found"
          }));
        case 3:
          filter = {
            category: category._id
          };
          if (display !== undefined) {
            filter.display = display === "true";
          }
          _context8.n = 4;
          return SubCategory.find(filter).populate("department", "name").populate("category", "name href").sort({
            index: 1
          });
        case 4:
          subcategories = _context8.v;
          res.status(200).json({
            success: true,
            message: "Subcategories fetched successfully",
            data: subcategories
          });
          _context8.n = 6;
          break;
        case 5:
          _context8.p = 5;
          _t8 = _context8.v;
          console.error("Error in getSubCategoryByCategory:", _t8.message);
          res.status(500).json({
            success: false,
            message: "Internal server error",
            error: _t8.message
          });
        case 6:
          return _context8.a(2);
      }
    }, _callee8, null, [[0, 5]]);
  }));
  return function getSubCategoryByCategory(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();
var updateSubCategoryController = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(req, res) {
    var id, updateData, updatedSubCategory, _t9;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.p = _context9.n) {
        case 0:
          _context9.p = 0;
          id = req.params.id;
          updateData = _extends({}, (_objectDestructuringEmpty(req.body), req.body));
          _context9.n = 1;
          return SubCategory.findByIdAndUpdate(id, updateData, {
            "new": true,
            runValidators: true
          });
        case 1:
          updatedSubCategory = _context9.v;
          res.status(200).json({
            success: true,
            message: "SubCategory updated successfully",
            data: updatedSubCategory
          });
          _context9.n = 3;
          break;
        case 2:
          _context9.p = 2;
          _t9 = _context9.v;
          console.error("Error in Update SubCategory: ", _t9.message);
          res.status(500).json({
            success: false,
            message: "Internal server error",
            error: _t9.message
          });
        case 3:
          return _context9.a(2);
      }
    }, _callee9, null, [[0, 2]]);
  }));
  return function updateSubCategoryController(_x15, _x16) {
    return _ref9.apply(this, arguments);
  };
}();
var deleteSubCategoryController = /*#__PURE__*/function () {
  var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(req, res) {
    var deletedSubCategory, _t0;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.p = _context0.n) {
        case 0:
          _context0.p = 0;
          _context0.n = 1;
          return SubCategory.findByIdAndDelete(req.params.id);
        case 1:
          deletedSubCategory = _context0.v;
          if (deletedSubCategory) {
            _context0.n = 2;
            break;
          }
          return _context0.a(2, res.status(404).json({
            success: false,
            message: "SubCategory not found"
          }));
        case 2:
          res.status(200).json({
            success: true,
            message: "SubCategory deleted successfully"
          });
          _context0.n = 4;
          break;
        case 3:
          _context0.p = 3;
          _t0 = _context0.v;
          res.status(500).json({
            success: false,
            message: "Internal server error",
            error: _t0.message
          });
        case 4:
          return _context0.a(2);
      }
    }, _callee0, null, [[0, 3]]);
  }));
  return function deleteSubCategoryController(_x17, _x18) {
    return _ref0.apply(this, arguments);
  };
}();
module.exports = {
  createSubCategoryController: createSubCategoryController,
  getAllSubCategoryController: getAllSubCategoryController,
  getSubCategoryByDepartment: getSubCategoryByDepartment,
  getSubCategoryByFeaturedPopular: getSubCategoryByFeaturedPopular,
  getSubCategoryByFeaturedPopularByDeptId: getSubCategoryByFeaturedPopularByDeptId,
  getSubCategoryByIdController: getSubCategoryByIdController,
  getSubCategoryByDepartmentId: getSubCategoryByDepartmentId,
  getSubCategoryByCategory: getSubCategoryByCategory,
  updateSubCategoryController: updateSubCategoryController,
  deleteSubCategoryController: deleteSubCategoryController
};