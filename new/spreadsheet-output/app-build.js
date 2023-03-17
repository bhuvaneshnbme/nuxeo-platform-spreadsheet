/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/nuxeo/connection.js":
/*!*********************************!*\
  !*** ./app/nuxeo/connection.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Connection": () => (/* binding */ Connection)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/*
 * (C) Copyright 2014 Nuxeo SA (http://nuxeo.com/) and contributors.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * Contributors:
 *     Nelson Silva <nelson.silva@inevo.pt>
 */
/**
 * Wrapper for nuxeo.Client
 */
var Connection = /*#__PURE__*/function (_nuxeo$Client) {
  _inherits(Connection, _nuxeo$Client);
  var _super = _createSuper(Connection);
  function Connection() {
    var baseURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/nuxeo';
    var username = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var password = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    _classCallCheck(this, Connection);
    return _super.call(this, {
      baseURL: baseURL,
      username: username,
      password: password,
      timeout: 300000
    });
  }
  _createClass(Connection, [{
    key: "baseURL",
    get: function get() {
      return this._baseURL;
    }
  }, {
    key: "connect",
    value: function connect() {
      var _this = this;
      return new Promise(function (resolve, reject) {
        var headers = {
          'Accept': 'application/json'
        };
        var xhrFields = {};
        if (_this._username && _this._password) {
          headers.Authorization = 'Basic ' + btoa(_this._username + ':' + _this._password);
          xhrFields = {
            withCredentials: true
          };
        }
        $.ajax({
          type: 'POST',
          url: "".concat(_this._automationURL, "/login"),
          headers: headers,
          xhrFields: xhrFields
        }).done(function (data, textStatus, jqXHR) {
          if (data['entity-type'] === 'login') {
            _this.connected = true;
            resolve(_this);
          } else {
            reject(Error(data));
          }
        }).fail(function (jqXHR, textStatus, errorThrown) {
          reject(Error(errorThrown));
        });
      });
    }
  }]);
  return Connection;
}(nuxeo.Client);


/***/ }),

/***/ "./app/nuxeo/layout.js":
/*!*****************************!*\
  !*** ./app/nuxeo/layout.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Layout": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection */ "./app/nuxeo/connection.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget */ "./app/nuxeo/widget.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*
 * (C) Copyright 2014 Nuxeo SA (http://nuxeo.com/) and contributors.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * Contributors:
 *     Nelson Silva <nelson.silva@inevo.pt>
 */



/**
 * Layout
 */
var Layout = /*#__PURE__*/function () {
  function Layout(conn, name, lang) {
    _classCallCheck(this, Layout);
    this.conn = conn;
    this.name = name;
    this.lang = lang;
    this.widgets = {};
  }
  _createClass(Layout, [{
    key: "fetch",
    value: function fetch() {
      var _this = this;
      return new Promise(function (resolve, reject) {
        var request = _this.conn.request('/site/layout-manager/layouts/json?layoutName=' + _this.name + '&lang=' + _this.lang).repositoryName(undefined);
        request._url = _this.conn.baseURL;
        request.get(function (error, def) {
          if (error) {
            reject(Error(error));
          }
          // Prepare a hashmap with the widgets
          _this.widgets = {};
          def.widgets.forEach(function (widget) {
            return _this.widgets[widget.name] = new _widget__WEBPACK_IMPORTED_MODULE_1__.Widget(_this.conn, widget);
          });
          _this.columns = def.rows;
          resolve(_this);
        });
      });
    }
  }]);
  return Layout;
}();


/***/ }),

/***/ "./app/nuxeo/rest/request.js":
/*!***********************************!*\
  !*** ./app/nuxeo/rest/request.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Request": () => (/* binding */ Request)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*
 * (C) Copyright 2014 Nuxeo SA (http://nuxeo.com/) and contributors.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * Contributors:
 *     Nelson Silva <nelson.silva@inevo.pt>
 */
/**
 * Wrapper for nuxeo.Request
 */
var Request = /*#__PURE__*/function () {
  function Request(conn) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    _classCallCheck(this, Request);
    this.path = path;
    this.conn = conn;
    this._params = {};
    this._headers = {};
  }
  _createClass(Request, [{
    key: "params",
    get: function get() {
      return this._params;
    }
  }, {
    key: "headers",
    get: function get() {
      return this._headers;
    }
  }, {
    key: "enrichers",
    set: function set(lst) {
      this.headers['X-NXContext-Category'] = lst.join(',');
    }
  }, {
    key: "execute",
    value: function execute() {
      var _this = this;
      var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'get';
      var path = arguments.length > 1 ? arguments[1] : undefined;
      return new Promise(function (resolve, reject) {
        _this.conn.request(path || _this.path).repositoryName(undefined).headers(_this._headers).query(_this._params)[method](function (error, data) {
          if (error) {
            reject(Error(error));
          }
          resolve(data);
        });
      });
    }
  }]);
  return Request;
}();


/***/ }),

/***/ "./app/nuxeo/rest/schemas.js":
/*!***********************************!*\
  !*** ./app/nuxeo/rest/schemas.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Schemas": () => (/* binding */ Schemas)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./app/nuxeo/rest/request.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/*
 * (C) Copyright 2017 Nuxeo SA (http://nuxeo.com/) and contributors.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 */

var PATH = '/config/schemas/';

/**
 * REST Schemas
 */
var Schemas = /*#__PURE__*/function (_Request) {
  _inherits(Schemas, _Request);
  var _super = _createSuper(Schemas);
  function Schemas(connection) {
    _classCallCheck(this, Schemas);
    return _super.call(this, connection, PATH);
  }
  _createClass(Schemas, [{
    key: "fetch",
    value: function fetch(schemas) {
      var _this = this;
      var data = [];
      return this.execute().then(function (entries) {
        var _iterator = _createForOfIteratorHelper(entries),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var entry = _step.value;
            var key = entry['@prefix'] || entry.name;
            if (schemas.indexOf(key) !== -1) {
              data[key] = {
                name: entry.name
              };
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        var promises = schemas.map(function (s) {
          return _this._fetchFieldsBySchema(data[s].name);
        });
        return Promise.all(promises).then(function (values) {
          var _iterator2 = _createForOfIteratorHelper(values),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var value = _step2.value;
              var key = value['@prefix'] || value.name;
              data[key].fields = value.fields;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          return data;
        });
      });
    }
  }, {
    key: "_fetchFieldsBySchema",
    value: function _fetchFieldsBySchema(schema) {
      return this.execute('get', "".concat(PATH, "/").concat(schema, "?fetch.schema=fields"));
    }
  }]);
  return Schemas;
}(_request__WEBPACK_IMPORTED_MODULE_0__.Request);


/***/ }),

/***/ "./app/nuxeo/rpc/directory.js":
/*!************************************!*\
  !*** ./app/nuxeo/rpc/directory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directory": () => (/* binding */ Directory)
/* harmony export */ });
/* harmony import */ var _operation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operation */ "./app/nuxeo/rpc/operation.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/*
 * (C) Copyright 2014 Nuxeo SA (http://nuxeo.com/) and contributors.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * Contributors:
 *     Nelson Silva <nelson.silva@inevo.pt>
 */


/**
 * Directory
 */
var Directory = /*#__PURE__*/function (_Operation) {
  _inherits(Directory, _Operation);
  var _super = _createSuper(Directory);
  function Directory(connection, directoryName, language) {
    var _this;
    _classCallCheck(this, Directory);
    _this = _super.call(this, connection, 'Directory.SuggestEntries');
    _this.directoryName = directoryName;
    _this.language = language;
    return _this;
  }
  _createClass(Directory, [{
    key: "directoryName",
    get: function get() {
      return this.params.directoryName;
    },
    set: function set(name) {
      this.params.directoryName = name;
    }
  }, {
    key: "translateLabels",
    get: function get() {
      return this.params.translateLabels;
    },
    set: function set(flag) {
      this.params.translateLabels = flag;
    }
  }, {
    key: "dbl10n",
    set: function set(flag) {
      this.params.dbl10n = flag;
    }
  }, {
    key: "localize",
    set: function set(flag) {
      this.params.localize = flag;
    }
  }, {
    key: "language",
    set: function set(lang) {
      this.params.lang = lang;
    }
  }, {
    key: "entries",
    value: function entries() {
      return this.search();
    }
  }, {
    key: "search",
    value: function search(term) {
      this.params.searchTerm = term;
      return this.execute();
    }
  }]);
  return Directory;
}(_operation__WEBPACK_IMPORTED_MODULE_0__.Operation);


/***/ }),

/***/ "./app/nuxeo/rpc/operation.js":
/*!************************************!*\
  !*** ./app/nuxeo/rpc/operation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Operation": () => (/* binding */ Operation)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*
 * (C) Copyright 2014 Nuxeo SA (http://nuxeo.com/) and contributors.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * Contributors:
 *     Nelson Silva <nelson.silva@inevo.pt>
 */
/**
 * Wrapper for nuxeo.Operation
 */
var Operation = /*#__PURE__*/function () {
  function Operation(conn, opId) {
    _classCallCheck(this, Operation);
    this.opId = opId;
    this.conn = conn;
    this._params = {};
    this._headers = {};
  }
  _createClass(Operation, [{
    key: "params",
    get: function get() {
      return this._params;
    }
  }, {
    key: "headers",
    get: function get() {
      return this._headers;
    }
  }, {
    key: "depth",
    set: function set(value) {
      this.headers["depth"] = value;
    }
  }, {
    key: "enrich",
    value: function enrich(objectType) {
      for (var _len = arguments.length, enrichers = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        enrichers[_key - 1] = arguments[_key];
      }
      this.headers["enrichers-".concat(objectType)] = enrichers.join(',');
    }
  }, {
    key: "fetch",
    value: function fetch(objectType) {
      for (var _len2 = arguments.length, parts = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        parts[_key2 - 1] = arguments[_key2];
      }
      this.headers["fetch-".concat(objectType)] = parts.join(',');
    }
  }, {
    key: "translate",
    value: function translate(objectType) {
      for (var _len3 = arguments.length, elements = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        elements[_key3 - 1] = arguments[_key3];
      }
      this.headers["translate-".concat(objectType)] = elements.join(',');
    }
  }, {
    key: "execute",
    value: function execute() {
      var _this = this;
      return new Promise(function (resolve, reject) {
        _this.conn.operation(_this.opId).headers(_this._headers).params(_this._params).execute(function (error, data) {
          if (error) {
            reject(Error(error));
          }
          resolve(data);
        });
      });
    }
  }]);
  return Operation;
}();


/***/ }),

/***/ "./app/nuxeo/rpc/query.js":
/*!********************************!*\
  !*** ./app/nuxeo/rpc/query.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Query": () => (/* binding */ Query)
/* harmony export */ });
/* harmony import */ var _operation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operation */ "./app/nuxeo/rpc/operation.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/*
 * (C) Copyright 2014 Nuxeo SA (http://nuxeo.com/) and contributors.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * Contributors:
 *     Nelson Silva <nelson.silva@inevo.pt>
 */


/**
 * Paginated Query
 */
var Query = /*#__PURE__*/function (_Operation) {
  _inherits(Query, _Operation);
  var _super = _createSuper(Query);
  function Query(connection) {
    _classCallCheck(this, Query);
    return _super.call(this, connection, 'Document.PageProvider');
  }
  _createClass(Query, [{
    key: "nxql",
    set: function set(q) {
      this.params.language = 'nxql';
      this.params.query = q;
    }
  }, {
    key: "namedParameters",
    set: function set(p) {
      this.params.namedParameters = p;
    }
  }, {
    key: "queryParameters",
    set: function set(p) {
      this.params.queryParams = p;
    }
  }, {
    key: "pageProvider",
    set: function set(name) {
      this.params.providerName = name;
    }
  }, {
    key: "page",
    get: function get() {
      return this.params.currentPageIndex;
    },
    set: function set(p) {
      this.params.currentPageIndex = p;
    }
  }, {
    key: "pageSize",
    set: function set(s) {
      this.params.pageSize = s;
    }
  }, {
    key: "sortBy",
    set: function set(s) {
      this.params.sortBy = s.join(',');
    }
  }, {
    key: "sortOrder",
    set: function set(s) {
      this.params.sortOrder = s.join(',');
    }
  }, {
    key: "run",
    value: function run() {
      return this.execute();
    }
  }]);
  return Query;
}(_operation__WEBPACK_IMPORTED_MODULE_0__.Operation);


/***/ }),

/***/ "./app/nuxeo/util/nxql.js":
/*!********************************!*\
  !*** ./app/nuxeo/util/nxql.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseNXQL": () => (/* binding */ parseNXQL)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*
 * (C) Copyright 2014 Nuxeo SA (http://nuxeo.com/) and contributors.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * Contributors:
 *     Nelson Silva <nelson.silva@inevo.pt>
 */
/**
 * NXQL Query
 */
var NXQLQuery = /*#__PURE__*/function () {
  function NXQLQuery(nxql) {
    _classCallCheck(this, NXQLQuery);
    var result = NXQLRE.exec(nxql);
    if (!result) {
      throw "Failed to parse NXQL: ".concat(nxql);
    }
    this.parts = result.slice(1);
  }
  _createClass(NXQLQuery, [{
    key: "selectClause",
    get: function get() {
      return this.parts[0];
    },
    set: function set(c) {
      this.parts[0] = c;
    }
  }, {
    key: "fromClause",
    get: function get() {
      return this.parts[1];
    },
    set: function set(c) {
      this.parts[1] = c;
    }
  }, {
    key: "whereClause",
    get: function get() {
      return this.parts[2];
    },
    set: function set(c) {
      this.parts[2] = c;
    }
  }, {
    key: "orderClause",
    get: function get() {
      return this.parts[3];
    },
    set: function set(c) {
      this.parts[3] = c;
    }

    /**
     * Add a where clause
     * @param clause
     */
  }, {
    key: "addWhereClause",
    set: function set(clause) {
      if (this.whereClause) {
        this.whereClause += " AND ".concat(clause);
      } else {
        this.whereClause = "WHERE ".concat(clause);
      }
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.parts.join(' ');
    }
  }]);
  return NXQLQuery;
}();
/**
 * RegExp to parse a NXQL query
 */
var NXQLRE = new RegExp('(SELECT\\s.*)' + '(FROM\\s(?:.(?!WHERE|ORDER BY))*)\\s?' + '(WHERE\\s.(?:.(?!ORDER BY))*)?\\s?' + '(ORDER BY\\s.*)?', 'i');

/**
 * Fixed conditions to add to a NXQL query
 */
var QUERY_FIXED_PART = 'ecm:mixinType != \'HiddenInNavigation\' AND ' + 'ecm:isProxy = 0 AND ' + 'ecm:isVersion = 0 AND ' + 'ecm:currentLifeCycleState != \'deleted\'';

/**
 * Parses a NXQL query and add the fixed part
 */
function parseNXQL(nxql) {
  var result = nxql;
  try {
    var query = new NXQLQuery(nxql);
    query.addWhereClause = QUERY_FIXED_PART;
    result = query.toString();
  } catch (err) {
    console.log(err);
  }
  return result;
}

/***/ }),

/***/ "./app/nuxeo/widget.js":
/*!*****************************!*\
  !*** ./app/nuxeo/widget.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Widget": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection */ "./app/nuxeo/connection.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*
 * (C) Copyright 2014 Nuxeo SA (http://nuxeo.com/) and contributors.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * Contributors:
 *     Nelson Silva <nelson.silva@inevo.pt>
 */

var Widget = /*#__PURE__*/function () {
  function Widget(conn, definition) {
    _classCallCheck(this, Widget);
    this.conn = conn;
    this.widget = definition;
    if (!this.widget.fields) {
      return;
    }

    // TODO(nfgs): Handle multiple fields
    this.field = this.widget.fields[0].fieldName;

    // Rename data['schema']['property'] to data.schema.property
    this.field = this.field.replace(/\['/g, '.').replace(/']/g, '');

    // In a listing, the layout is not usually rendered on the document, but on a PageSelection element,
    // wrapping the  DocumentModel to handle selection information.
    // So field binding will look like data.dc.title  instead of dc:title.
    // Let's fix that:
    if (this.field.startsWith('data.')) {
      this.field = this.field.substr(5).replace('.', ':');
    }
  }
  _createClass(Widget, [{
    key: "name",
    get: function get() {
      return this.widget.name;
    }
  }, {
    key: "label",
    get: function get() {
      return this.widget.labels.any;
    }
  }, {
    key: "type",
    get: function get() {
      return this.widget.type;
    },
    set: function set(t) {
      this.widget.type = t;
    }
  }, {
    key: "properties",
    get: function get() {
      return this.widget.properties ? this.widget.properties.any : {};
    },
    set: function set(p) {
      this.widget.properties = p;
    }
  }]);
  return Widget;
}();


/***/ }),

/***/ "./app/ui/column.js":
/*!**************************!*\
  !*** ./app/ui/column.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Column": () => (/* binding */ Column)
/* harmony export */ });
/* harmony import */ var _widgets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets */ "./app/ui/widgets.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*
 * (C) Copyright 2014 Nuxeo SA (http://nuxeo.com/) and contributors.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * Contributors:
 *     Nelson Silva <nelson.silva@inevo.pt>
 */


/**
 * Handsontable column options
 */
var Column = /*#__PURE__*/function () {
  function Column(connection, def, widget) {
    var defaultRenderer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Handsontable.renderers.TextRenderer;
    _classCallCheck(this, Column);
    Object.assign(this, {
      connection: connection,
      def: def,
      widget: widget,
      defaultRenderer: defaultRenderer
    });

    // These widgets use all the properties for rendering
    // so we must either replicate the logic here or just fall back to the sort property
    if (this.widget.field === 'data') {
      this.widget.field = this.def.properties.any.sortPropertyName;
    }

    // Mixin widget
    if (_widgets__WEBPACK_IMPORTED_MODULE_0__.WIDGETS[this.widget.name]) {
      Object.assign(this.widget, _widgets__WEBPACK_IMPORTED_MODULE_0__.WIDGETS[widget.name]);
    }

    // Mixin custom field widget
    var field = this.widget.field;
    if (CUSTOM_FIELDS[field] && CUSTOM_FIELDS[field].widget) {
      Object.assign(this.widget, CUSTOM_FIELDS[field].widget);
    }
    if (CUSTOM_FIELDS[field] && CUSTOM_FIELDS[field].properties) {
      Object.assign(this.widget.properties, CUSTOM_FIELDS[field].properties);
    }

    // Mixin widget type
    if (_widgets__WEBPACK_IMPORTED_MODULE_0__.WIDGET_TYPES[this.widget.type]) {
      // reset custom type since it's not known to handsontable
      var type = this.widget.type;
      delete this.widget.type;
      Object.assign(this.widget, _widgets__WEBPACK_IMPORTED_MODULE_0__.WIDGET_TYPES[type]);
    }

    // Make widget properties available in the columns
    Object.assign(this, this.widget);

    // Bind the renderer to this column
    if (this.renderer) {
      this.renderer = this.renderer.bind(this);
    } else {
      this.renderer = defaultRenderer;
    }
  }
  _createClass(Column, [{
    key: "data",
    get: function get() {
      if (!this.field) {
        return null;
      }
      // Check for special field overrides
      if (CUSTOM_FIELDS[this.field] && CUSTOM_FIELDS[this.field].field) {
        return CUSTOM_FIELDS[this.field].field;
      }
      return "properties.".concat(this.field);
    }
  }, {
    key: "header",
    get: function get() {
      var header = this.def.properties.any.label || this.field;
      if (this.def.properties.any.useFirstWidgetLabelAsColumnHeader) {
        header = this.widget.label || this.widget.labels.any;
      }
      return header;
    }
  }, {
    key: "hasSupportedWidgetType",
    get: function get() {
      return !!_widgets__WEBPACK_IMPORTED_MODULE_0__.WIDGET_TYPES[this.widget.type];
    }
  }]);
  return Column;
}();
var CUSTOM_FIELDS = {
  // system metadata fields
  'dc:created': {
    widget: {
      readOnly: true
    }
  },
  'dc:modified': {
    widget: {
      readOnly: true
    }
  },
  'dc:creator': {
    widget: {
      readOnly: true
    }
  },
  'dc:lastContributor': {
    widget: {
      readOnly: true
    }
  },
  'dc:contributors': {
    widget: {
      readOnly: true
    }
  },
  'currentLifeCycleState': {
    widget: {
      readOnly: true
    },
    field: 'state'
  },
  'type': {
    widget: {
      readOnly: true
    },
    field: 'type'
  },
  'versionLabel': {
    widget: {
      readOnly: true
    },
    field: 'versionLabel'
  },
  'dc:nature': {
    properties: {
      dbl10n: false,
      localize: true
    }
  },
  'thumb:thumbnail': {
    widget: {
      readOnly: true,
      type: 'image'
    }
  }
};


/***/ }),

/***/ "./app/ui/editors/directory.js":
/*!*************************************!*\
  !*** ./app/ui/editors/directory.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectoryEditor": () => (/* binding */ DirectoryEditor),
/* harmony export */   "DirectoryRenderer": () => (/* binding */ DirectoryRenderer)
/* harmony export */ });
/* harmony import */ var _select2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select2 */ "./app/ui/editors/select2.js");
/* harmony import */ var _nuxeo_rpc_directory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nuxeo/rpc/directory */ "./app/nuxeo/rpc/directory.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/*
 * (C) Copyright 2014 Nuxeo SA (http://nuxeo.com/) and contributors.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * Contributors:
 *     Nelson Silva <nelson.silva@inevo.pt>
 */


var DirectoryEditor = /*#__PURE__*/function (_Select2Editor) {
  _inherits(DirectoryEditor, _Select2Editor);
  var _super = _createSuper(DirectoryEditor);
  function DirectoryEditor() {
    _classCallCheck(this, DirectoryEditor);
    return _super.apply(this, arguments);
  }
  _createClass(DirectoryEditor, [{
    key: "prepare",
    value:
    // Let's override prepare and just pass set the select2 options ourselves
    function prepare(row, col, prop, td, originalValue, cellProperties) {
      // setup the label cache
      this._labels = {};

      // flatten our values to a list of ids
      var value = Array.isArray(originalValue) ? originalValue.map(this.prepareEntity.bind(this)) : this.prepareEntity(originalValue);
      _get(_getPrototypeOf(DirectoryEditor.prototype), "prepare", this).call(this, row, col, prop, td, value, cellProperties);
    }

    // flatten entities to plain ids and cache the labels
  }, {
    key: "prepareEntity",
    value: function prepareEntity(entity) {
      if (!entity) {
        return;
      }

      // remember if we are handling directoryEntries or just strings
      this._isDirectoryEntry = entity['entity-type'] === 'directoryEntry';
      if (!this._isDirectoryEntry) {
        return entity;
      }
      var id;
      if (entity.properties.parent) {
        id = "".concat(entity.properties.parent.properties.id, "/").concat(entity.properties.id);
      } else {
        id = entity.properties.id;
      }
      this.cellLabels[id] = this.cellLabels[id] || getEntryLabel(entity, this.language);
      return id;
    }

    // create directory entries again on save
  }, {
    key: "saveValue",
    value: function saveValue(val, ctrlDown) {
      var value = val[0][0];
      if (value) {
        // if we are working with directoryEntries lets build them for saving
        if (this._isDirectoryEntry) {
          value = value.split(',').map(function (id) {
            return {
              'entity-type': 'directoryEntry',
              directoryName: this.directoryName,
              properties: {
                id: id
              }
            };
          }.bind(this));
          // unwrap the map result if not multiple
          if (!this.column.multiple) {
            value = value[0];
          }
        }
      } else {
        value = this.column.multiple ? [] : null;
      }
      _get(_getPrototypeOf(DirectoryEditor.prototype), "saveValue", this).call(this, [[value]], ctrlDown);
    }
  }, {
    key: "query",
    value: function query(connection, properties, term) {
      var directory = new _nuxeo_rpc_directory__WEBPACK_IMPORTED_MODULE_1__.Directory(connection); // Directory name is a widget property
      // Set the properties
      Object.assign(directory, properties);
      // Set the language
      directory.language = this.language || 'en';
      // Perform the search
      return directory.search(term);
    }

    // When a dbl10n entry is selected we'll cache the labels to be used
    // by our renderer
  }, {
    key: "onSelected",
    value: function onSelected(evt) {
      this.cellLabels[evt.choice.computedId] = evt.choice.absoluteLabel;
    }
  }, {
    key: "cellMeta",
    get: function get() {
      return this.instance.getCellMeta(this.row, this.col);
    }
  }, {
    key: "cellLabels",
    get: function get() {
      return this.cellMeta._labels = this.cellMeta._labels || {};
    }
  }, {
    key: "language",
    get: function get() {
      return this.instance.getSettings().language || 'en';
    }
  }, {
    key: "column",
    get: function get() {
      return this.cellProperties;
    }
  }, {
    key: "widget",
    get: function get() {
      return this.column.widget;
    }
  }, {
    key: "field",
    get: function get() {
      return this.widget.field;
    }
  }, {
    key: "directoryName",
    get: function get() {
      return this.widget.properties.directoryName;
    }
  }, {
    key: "isDbl10n",
    get: function get() {
      return !!this.widget.properties.dbl10n;
    }
  }, {
    key: "sourceData",
    get: function get() {
      return this.instance.getSourceDataAtRow(this.row);
    }
  }, {
    key: "resultFormatter",
    value: function resultFormatter(entry) {
      return entry.displayLabel;
    }
  }, {
    key: "formatter",
    value: function formatter(entry) {
      var label = this.cellLabels[entry.id] || entry.absoluteLabel;
      // This is used in initSelection and in this case we don't have 'displayLabel'
      if (!label && this.isDbl10n) {
        label = getEntryLabel(entry, this.language);
      }
      return label || entry.text;
    }
  }, {
    key: "getEntryId",
    value: function getEntryId(item) {
      if (item.computedId) {
        return item.computedId;
      } else {
        return item.id;
      }
    }
  }]);
  return DirectoryEditor;
}(_select2__WEBPACK_IMPORTED_MODULE_0__.Select2Editor); // l10n Label helpers
function getEntryLabel(entry) {
  var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';
  if (entry.properties) {
    var label = '';
    if (entry.properties.parent) {
      label = getEntryLabel(entry.properties.parent, lang) + '/';
    }
    label += entry.properties['label_' + lang] || entry.properties.label || entry.properties.id;
    return label;
  }
  return entry;
}
function DirectoryRenderer(instance, td, row, col, prop, value, cellProperties) {
  if (value) {
    var lang = instance.getSettings().language || 'en';
    if (!Array.isArray(value)) {
      value = typeof value === 'string' ? value.split(',') : [value];
    }
    var labels = instance.getCellMeta(row, col)._labels;
    arguments[5] = value.map(function (v) {
      var key = v.properties ? v.properties.id : v;
      return labels && labels[key] ? labels[key] : getEntryLabel(v, lang);
    }).join(','); // jshint ignore:line
  }

  cellProperties.defaultRenderer.apply(this, arguments);
}


/***/ }),

/***/ "./app/ui/editors/document.js":
/*!************************************!*\
  !*** ./app/ui/editors/document.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentEditor": () => (/* binding */ DocumentEditor),
/* harmony export */   "DocumentRenderer": () => (/* binding */ DocumentRenderer)
/* harmony export */ });
/* harmony import */ var _select2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select2 */ "./app/ui/editors/select2.js");
/* harmony import */ var _nuxeo_rpc_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nuxeo/rpc/query */ "./app/nuxeo/rpc/query.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/*
 * (C) Copyright 2014 Nuxeo SA (http://nuxeo.com/) and contributors.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * Contributors:
 *     Nelson Silva <nelson.silva@inevo.pt>
 */


var DocumentEditor = /*#__PURE__*/function (_Select2Editor) {
  _inherits(DocumentEditor, _Select2Editor);
  var _super = _createSuper(DocumentEditor);
  function DocumentEditor() {
    _classCallCheck(this, DocumentEditor);
    return _super.apply(this, arguments);
  }
  _createClass(DocumentEditor, [{
    key: "prepare",
    value: function prepare(row, col, prop, td, originalValue, cellProperties) {
      var _this = this;
      // flatten our values to a list of ids
      var value = Array.isArray(originalValue) ? originalValue.map(function (u) {
        return _this.getEntryId(u);
      }) : this.getEntryId(originalValue);
      _get(_getPrototypeOf(DocumentEditor.prototype), "prepare", this).call(this, row, col, prop, td, value, cellProperties);
    }
  }, {
    key: "query",
    value: function query(connection, properties, term) {
      var q = new _nuxeo_rpc_query__WEBPACK_IMPORTED_MODULE_1__.Query(connection);
      // Set the properties
      Object.assign(q.params, properties);
      q.params.searchTerm = term;
      q.pageProvider = properties && properties.pageProviderName || 'default_document_suggestion';
      q.page = 0;
      q.pageSize = 20;
      // Execute the query
      return q.run().then(function (result) {
        return result.entries;
      });
    }
  }, {
    key: "formatter",
    value: function formatter(doc) {
      return doc.text || doc.title;
    }
  }, {
    key: "getEntryId",
    value: function getEntryId(item) {
      return item.uid;
    }

    // create documents again on save
  }, {
    key: "saveValue",
    value: function saveValue(val, ctrlDown) {
      var value = val[0][0];
      if (value) {
        value = value.split(',').map(function (uid) {
          return {
            'entity-type': 'document',
            uid: uid
          };
        }.bind(this));
        // unwrap the map result if not muliple
        if (!this.cellProperties.multiple) {
          value = value[0];
        }
      } else {
        value = this.cellProperties.multiple ? [] : null;
      }
      _get(_getPrototypeOf(DocumentEditor.prototype), "saveValue", this).call(this, [[value]], ctrlDown);
    }
  }]);
  return DocumentEditor;
}(_select2__WEBPACK_IMPORTED_MODULE_0__.Select2Editor);
function DocumentRenderer(instance, td, row, col, prop, value, cellProperties) {
  if (value) {
    if (!Array.isArray(value)) {
      value = [value];
    }
    arguments[5] = value.map(function (d) {
      return d.uid;
    }).join(','); // jshint ignore:line
  }

  cellProperties.defaultRenderer.apply(this, arguments);
}


/***/ }),

/***/ "./app/ui/editors/image.js":
/*!*********************************!*\
  !*** ./app/ui/editors/image.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageRenderer": () => (/* binding */ ImageRenderer)
/* harmony export */ });
/*
 * (C) Copyright 2014 Nuxeo SA (http://nuxeo.com/) and contributors.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * Contributors:
 *     mobrebski
 *     Jackie Aldama <jaldama@nuxeo.com>
 */

var ImageRenderer = function ImageRenderer(instance, td, row, col, prop, value, cellProperties) {
  if (value && value.data) {
    var img = document.createElement('img');
    img.src = value.data;
    if (cellProperties.width) {
      img.setAttribute('width', cellProperties.height);
    }
    if (cellProperties.height) {
      img.setAttribute('height', cellProperties.height);
    }
    Handsontable.Dom.empty(td);
    td.appendChild(img);
  }
  return td;
};


/***/ }),

/***/ "./app/ui/editors/select2.js":
/*!***********************************!*\
  !*** ./app/ui/editors/select2.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Select2Editor": () => (/* binding */ Select2Editor)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/*
 * (C) Copyright 2014 Nuxeo SA (http://nuxeo.com/) and contributors.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * Contributors:
 *     Nelson Silva <nelson.silva@inevo.pt>
 */
var Select2Editor = /*#__PURE__*/function (_Handsontable$editors) {
  _inherits(Select2Editor, _Handsontable$editors);
  var _super = _createSuper(Select2Editor);
  function Select2Editor(instance) {
    _classCallCheck(this, Select2Editor);
    return _super.call(this, instance);
  }

  // Let's override prepare and just pass set the select2 options ourselves
  _createClass(Select2Editor, [{
    key: "prepare",
    value: function prepare(row, col, prop, td, originalValue, cellProperties) {
      var _this = this;
      // cellProperties is an instance our our Column
      var widget = cellProperties.widget,
        connection = cellProperties.connection;
      Handsontable.editors.TextEditor.prototype.prepare.apply(this, arguments);
      var isMultiple = cellProperties.multiple;

      // See :
      // https://github.com/nuxeo/nuxeo-features/blob/master/nuxeo-platform-ui-select2/src/main/resources/web/nuxeo.war/scripts/select2/nuxeo-select2.js
      // https://github.com/nuxeo/nuxeo-features/blob/master/nuxeo-platform-ui-select2/src/main/java/org/nuxeo/ecm/platform/ui/select2/Select2ActionsBean.java
      this.options = {
        query: function query(q) {
          _this.query(connection, widget.properties, q.term).then(function (results) {
            q.callback({
              results: results
            });
          });
        },
        dropdownAutoWidth: true,
        allowClear: true,
        width: 'resolve',
        minimumInputLength: cellProperties.minimumInputLength || 0,
        formatResult: this.resultFormatter.bind(this),
        formatSelection: this.selectionFormatter.bind(this),
        multiple: isMultiple,
        placeholder: 'Select a value',
        initSelection: this.initSelection(isMultiple).bind(this),
        id: this.getEntryId
      };
    }
  }, {
    key: "open",
    value: function open() {
      _get(_getPrototypeOf(Select2Editor.prototype), "open", this).call(this);
      this.$textarea.on('selected', this.onSelected.bind(this));
      this.$textarea.on('select2-selected', this.onSelected.bind(this));
      this.$textarea.on('select2-removed', this.onRemoved.bind(this));
    }
  }, {
    key: "onSelected",
    value: function onSelected(evt) {
      //
    }
  }, {
    key: "onRemoved",
    value: function onRemoved(evt) {
      //
    }

    // use same formatter by default
  }, {
    key: "resultFormatter",
    value: function resultFormatter(entry) {
      return this.formatter(entry);
    }
  }, {
    key: "selectionFormatter",
    value: function selectionFormatter(entry) {
      return this.formatter(entry);
    }
  }, {
    key: "initSelection",
    value: function initSelection(isMultiple) {
      var _this2 = this;
      if (!isMultiple) {
        return function (element, callback) {
          return callback({
            id: element.val(),
            text: _this2.getSelectionText(element.val())
          });
        };
      }
      return function (element, callback) {
        return callback(element.val().split(',').map(function (v) {
          return {
            id: v,
            text: _this2.getSelectionText(v)
          };
        }));
      };
    }
  }, {
    key: "getSelectionText",
    value: function getSelectionText(val) {
      return val;
    }
  }, {
    key: "getEntryId",
    value: function getEntryId(item) {
      return item.id;
    }

    // Must return a promise
  }, {
    key: "query",
    value: function query(connection, properties, term) {
      //
    }
  }]);
  return Select2Editor;
}(Handsontable.editors.Select2Editor);


/***/ }),

/***/ "./app/ui/editors/user.js":
/*!********************************!*\
  !*** ./app/ui/editors/user.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserEditor": () => (/* binding */ UserEditor),
/* harmony export */   "UserRenderer": () => (/* binding */ UserRenderer)
/* harmony export */ });
/* harmony import */ var _select2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select2 */ "./app/ui/editors/select2.js");
/* harmony import */ var _nuxeo_rpc_operation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nuxeo/rpc/operation */ "./app/nuxeo/rpc/operation.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/*
 * (C) Copyright 2014 Nuxeo SA (http://nuxeo.com/) and contributors.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * Contributors:
 *     Nelson Silva <nelson.silva@inevo.pt>
 */


var UserEditor = /*#__PURE__*/function (_Select2Editor) {
  _inherits(UserEditor, _Select2Editor);
  var _super = _createSuper(UserEditor);
  function UserEditor() {
    _classCallCheck(this, UserEditor);
    return _super.apply(this, arguments);
  }
  _createClass(UserEditor, [{
    key: "prepare",
    value: function prepare(row, col, prop, td, originalValue, cellProperties) {
      var _this = this;
      // flatten our values to a list of ids
      var value = Array.isArray(originalValue) ? originalValue.map(function (u) {
        return _this.getEntryId(u);
      }) : this.getEntryId(originalValue);
      _get(_getPrototypeOf(UserEditor.prototype), "prepare", this).call(this, row, col, prop, td, value, cellProperties);
    }
  }, {
    key: "getSelectionText",
    value: function getSelectionText(val) {
      if (val.startsWith('user:') || val.startsWith('group:')) {
        return val.split(':')[1];
      }
      return val;
    }
  }, {
    key: "saveValue",
    value: function saveValue(val, ctrlDown) {
      // create directory entries again on save
      var value = val[0][0];
      if (value) {
        value = value.split(',').map(function (id) {
          var type = 'user'; // XXX: can't guess type if not prefixed
          if (id.startsWith('user:') || id.startsWith('group:')) {
            var parts = id.split(':');
            type = parts[0];
            id = parts[1];
          }
          return {
            'entity-type': type,
            id: id
          };
        }.bind(this));
        // unwrap the map result if not multiple
        if (!this.cellProperties.multiple) {
          value = value[0];
        }
      } else {
        value = this.cellProperties.multiple ? [] : null;
      }
      _get(_getPrototypeOf(UserEditor.prototype), "saveValue", this).call(this, [[value]], ctrlDown);
    }
  }, {
    key: "getEntryId",
    value: function getEntryId(item) {
      if (item['entity-type']) {
        return "".concat(item['entity-type'], ":").concat(item.id);
      }
      // use prefixed value so we can know entity type when saving
      // not relying on this.widgetProperties.prefixed as we're POSTing back entities
      return item.prefixed_id || item.id;
    }
  }, {
    key: "query",
    value: function query(connection, properties, term) {
      var op = new _nuxeo_rpc_operation__WEBPACK_IMPORTED_MODULE_1__.Operation(connection, 'UserGroup.Suggestion');
      // Set the properties
      Object.assign(op.params, properties);
      op.params.searchTerm = term;
      if (this.widgetProperties.userSuggestionSearchType) {
        op.params.searchType = this.widgetProperties.userSuggestionSearchType;
      }
      // Perform the search
      return op.execute();
    }
  }, {
    key: "formatter",
    value: function formatter(entry) {
      return entry.text || entry.displayLabel;
    }
  }, {
    key: "widgetProperties",
    get: function get() {
      return this.cellProperties.widget.properties.any || {};
    }
  }]);
  return UserEditor;
}(_select2__WEBPACK_IMPORTED_MODULE_0__.Select2Editor);
function UserRenderer(instance, td, row, col, prop, value, cellProperties) {
  if (value) {
    if (!Array.isArray(value)) {
      value = [value];
    }
    arguments[5] = value.map(function (u) {
      return u.id;
    }).join(','); // jshint ignore:line
  }

  cellProperties.defaultRenderer.apply(this, arguments);
}


/***/ }),

/***/ "./app/ui/i18n.js":
/*!************************!*\
  !*** ./app/ui/i18n.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i18n": () => (/* binding */ i18n)
/* harmony export */ });
/*
 * (C) Copyright 2016 Nuxeo SA (http://nuxeo.com/) and contributors.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 */

function i18n(key) {
  return nuxeo && nuxeo.spreadsheet && nuxeo.spreadsheet.labels && nuxeo.spreadsheet.labels[key] || key;
}

/***/ }),

/***/ "./app/ui/log.js":
/*!***********************!*\
  !*** ./app/ui/log.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Log": () => (/* binding */ Log)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*
 * (C) Copyright 2014 Nuxeo SA (http://nuxeo.com/) and contributors.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * Contributors:
 *     Nelson Silva <nelson.silva@inevo.pt>
 */
var Log = /*#__PURE__*/function () {
  function Log(el) {
    _classCallCheck(this, Log);
    this.el = el;
    this._default = '';
  }
  _createClass(Log, [{
    key: "info",
    value: function info(msg) {
      this.el.text(msg);
    }
  }, {
    key: "error",
    value: function error(msg) {
      this.el.text(msg);
    }
  }, {
    key: "default",
    value: function _default(msg) {
      if (msg !== undefined) {
        this._default = msg;
      }
      this.el.text(this._default);
    }
  }]);
  return Log;
}();


/***/ }),

/***/ "./app/ui/spreadsheet.js":
/*!*******************************!*\
  !*** ./app/ui/spreadsheet.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Spreadsheet": () => (/* binding */ Spreadsheet)
/* harmony export */ });
/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column */ "./app/ui/column.js");
/* harmony import */ var _nuxeo_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nuxeo/layout */ "./app/nuxeo/layout.js");
/* harmony import */ var _nuxeo_rest_schemas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nuxeo/rest/schemas */ "./app/nuxeo/rest/schemas.js");
/* harmony import */ var _nuxeo_rpc_directory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nuxeo/rpc/directory */ "./app/nuxeo/rpc/directory.js");
/* harmony import */ var _nuxeo_rpc_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nuxeo/rpc/query */ "./app/nuxeo/rpc/query.js");
/* harmony import */ var _ui_editors_directory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/editors/directory */ "./app/ui/editors/directory.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*
 * (C) Copyright 2014 Nuxeo SA (http://nuxeo.com/) and contributors.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * Contributors:
 *     Nelson Silva <nelson.silva@inevo.pt>
 */







/**
 * Spreadsheet backed by Hansontable
 */
var Spreadsheet = /*#__PURE__*/function () {
  function Spreadsheet(container, connection, layout, columns, pageProvider, language) {
    var _this = this;
    _classCallCheck(this, Spreadsheet);
    this.container = container;
    this.connection = connection;
    this._data = [];
    this.options = {
      data: this._data,
      autoColumnSize: false,
      colWidths: 200,
      stretchH: 'all',
      rowHeaders: true,
      manualColumnResize: true,
      startRows: 0,
      currentRowClassName: 'currentRow',
      currentColClassName: 'currentCol',
      contextMenu: ['undo', 'redo'],
      afterChange: this.onChange.bind(this),
      beforeAutofill: this.beforeAutofill.bind(this),
      search: true,
      cells: this.createCell.bind(this),
      language: language
    };
    this.query = new _nuxeo_rpc_query__WEBPACK_IMPORTED_MODULE_4__.Query(connection);
    // include the user's permission on each document
    this.query.enrich('document', 'permissions');
    // fetch every property and versioning information
    this.query.fetch('document', 'properties', 'versionLabel');
    // fetch parent for directory entries
    this.query.fetch('directoryEntry', 'parent');
    // request root depth
    this.query.depth = 'root';
    // translate directory labels
    this.query.translate('directoryEntry', 'label');
    this.query.pageProvider = pageProvider;

    // set columns based on result layout
    if (layout) {
      new _nuxeo_layout__WEBPACK_IMPORTED_MODULE_1__.Layout(connection, layout, language).fetch().then(function (l) {
        // Check which columns to display
        var cols = columns ? columns.map(function (name) {
          return l.columns.filter(function (c) {
            return c.name === name;
          })[0];
        }) : l.columns.filter(function (c) {
          return c.selectedByDefault !== false;
        });
        _this.columns = cols
        // Exclude columns without widgets
        .filter(function (c) {
          return c.widgets;
        })
        // Create our columns wrapper
        .map(function (c) {
          return new _column__WEBPACK_IMPORTED_MODULE_0__.Column(connection, c, l.widgets[c.widgets[0].name], _this.dirtyRenderer.bind(_this));
        })
        // Only show columns with a known widget type and with a field
        .filter(function (c) {
          return c.hasSupportedWidgetType && c.field;
        });
      });

      // or based on result columns only
    } else {
      // get schemas prefixes from columns
      var schemasPrefixes = [];
      var _iterator = _createForOfIteratorHelper(columns),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var c = _step.value;
          var schema = c.field.indexOf(':') > -1 ? c.field.split(':')[0] : undefined;
          if (schema && schemasPrefixes.indexOf(schema) === -1) {
            schemasPrefixes.push(schema);
          }
        }

        // fetch schemas (based on prefixes)
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      new _nuxeo_rest_schemas__WEBPACK_IMPORTED_MODULE_2__.Schemas(connection).fetch(schemasPrefixes).then(function (schemas) {
        var cols = columns.map(function (c) {
          var column = {
            def: {
              properties: {
                any: {
                  sortPropertyName: c.field,
                  label: c.label
                }
              }
            },
            widget: {
              field: c.field
            }
          };

          // get field definition from schemas map
          var field = undefined; // <- explicitly set field as undefined in each iteration
          if (c.field.indexOf(':') > -1) {
            var _c$field$split = c.field.split(':'),
              _c$field$split2 = _slicedToArray(_c$field$split, 2),
              s = _c$field$split2[0],
              f = _c$field$split2[1];
            field = schemas[s].fields[f] || undefined;
            field = typeof field === 'string' ? {
              type: field
            } : field;
          }

          // set column widget type and properties based on field constraints
          if (field) {
            if (field.type.endsWith('[]')) {
              column.widget.multiple = true;
            }
            var constraints = field.itemConstraints || field.constraints;
            if (constraints) {
              var _iterator2 = _createForOfIteratorHelper(constraints),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var constraint = _step2.value;
                  switch (constraint.name) {
                    case 'documentResolver':
                      column.widget.type = field.type === 'string[]' ? 'multipleDocumentsSuggestion' : 'singleDocumentSuggestion';
                      break;
                    case 'directoryResolver':
                      column.widget.type = field.type === 'string[]' ? 'suggestManyDirectory' : 'suggestOneDirectory';
                      column.widget.properties = {
                        dbl10n: true,
                        directoryName: constraint.parameters.directory
                      };
                      break;
                    case 'userManagerResolver':
                      column.widget.type = field.type === 'string[]' ? 'multipleUsersSuggestion' : 'singleUserSuggestion';
                      var searchType = void 0;
                      if (constraint.parameters.includeGroups === 'true' && constraint.parameters.includeUsers === 'true') {
                        searchType = 'USER_GROUP_TYPE';
                      } else if (constraint.parameters.includeUsers === 'true') {
                        searchType = 'USER_TYPE';
                      } else if (constraint.parameters.includeGroups === 'true') {
                        searchType = 'GROUP_TYPE';
                      }
                      column.widget.properties = {
                        any: {
                          userSuggestionSearchType: searchType
                        }
                      };
                      break;
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          }
          return column;
        });
        _this.columns = cols.map(function (c) {
          return new _column__WEBPACK_IMPORTED_MODULE_0__.Column(connection, c.def, c.widget, _this.dirtyRenderer.bind(_this));
        });
      });
    }
    this.container.handsontable(this.options);
    this.ht = this.container.data('handsontable');
  }
  _createClass(Spreadsheet, [{
    key: "data",
    get: function get() {
      return this._data;
    },
    set: function set(d) {
      this._data = d;
      this.ht.loadData(this._data);
    }

    // Returns source data
  }, {
    key: "getDataAtRow",
    value: function getDataAtRow(row) {
      return this.ht ? this.ht.getSourceDataAtRow(row) : null;
    }
  }, {
    key: "columns",
    get: function get() {
      return this._columns;
    },
    set: function set(columns) {
      this._columns = columns;
      this._columnsByField = {};
      var _iterator3 = _createForOfIteratorHelper(columns),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var c = _step3.value;
          this._columnsByField[c.data] = c;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      this._update();
    }
  }, {
    key: "createCell",
    value: function createCell(row, col, prop) {
      var cell = {};
      var doc = this.getDataAtRow(row);
      var permissions = doc && doc.contextParameters && doc.contextParameters.permissions;
      if (permissions && permissions.indexOf('Write') === -1) {
        cell.readOnly = true;
      }
      return cell;
    }
  }, {
    key: "nxql",
    set: function set(q) {
      this.queryParameters = [q];
    }
  }, {
    key: "queryParameters",
    set: function set(p) {
      this.query.queryParameters = p;
    }
  }, {
    key: "namedParameters",
    set: function set(p) {
      this.query.namedParameters = p;
    }
  }, {
    key: "sortInfos",
    set: function set(sortInfos) {
      this.query.sortBy = sortInfos.map(function (s) {
        return s.sortColumn;
      });
      this.query.sortOrder = sortInfos.map(function (s) {
        return s.sortAscending ? 'asc' : 'desc';
      });
    }
  }, {
    key: "_fetch",
    value: function _fetch() {
      var _this2 = this;
      return this.query.run().then(function (result) {
        Array.prototype.push.apply(_this2._data, result.entries);
        // prevent adding new rows
        _this2.ht.updateSettings({
          maxRows: _this2._data.length
        });
        _this2.ht.render();
        if (result.isNextPageAvailable) {
          _this2.query.page++;
          return _this2._fetch();
        }
      });
    }
  }, {
    key: "update",
    value: function update() {
      this._data.length = 0;
      this._dirty = {};
      this.query.page = 0;
      this.ht.clearUndo();
      return this._fetch();
    }
  }, {
    key: "save",
    value: function save() {
      var _this3 = this;
      return Promise.all(Object.keys(this._dirty).map(function (uid) {
        return new Promise(function (resolve, reject) {
          try {
            // TODO(nfgs) - Move request execution to the connection
            _this3.connection.request('/id/' + uid).put({
              data: _this3._dirty[uid]
            }, function (error) {
              if (error !== null) {
                _this3._dirty[uid]._error = error;
                reject(Error(error));
                return;
              }
              delete _this3._dirty[uid];
              resolve(uid);
            });
          } catch (e) {
            _this3._dirty[uid]._error = e;
            reject(Error(e));
          }
        });
      })).catch(function (err) {
        console.error(err);
      }).then(function (result) {
        _this3.ht.clearUndo();
        _this3.ht.render();
        return result;
      });
    }
  }, {
    key: "onChange",
    value: function onChange(change, source) {
      if (source === 'loadData') {
        this._dirty = {};
        return;
      }
      if (change !== null) {
        for (var i = 0; i < change.length; i++) {
          var _change$i = _slicedToArray(change[i], 4),
            idx = _change$i[0],
            field = _change$i[1],
            oldV = _change$i[2],
            newV = _change$i[3];
          if (oldV === newV) {
            continue;
          }
          var uid = this.data[idx].uid;
          var doc = this._dirty[uid] = this._dirty[uid] || {
            'entity-type': 'document',
            uid: uid
          };

          // Split csv values into array
          var column = this._columnsByField[field];
          if (column.multiple && !Array.isArray(newV)) {
            newV = newV ? newV.split(',') : [];
          }
          assign(doc, field, newV);
        }
        if (this.autosave) {
          this.save();
        }
        this.ht.render();
      }
    }
  }, {
    key: "beforeAutofill",
    value: function beforeAutofill(start, end, data) {
      var ht = this.ht.getInstance();
      var editor = ht.getActiveEditor();
      if (!editor || !(editor instanceof _ui_editors_directory__WEBPACK_IMPORTED_MODULE_5__.DirectoryEditor)) {
        return;
      }
      if (!data && (data.length === 0 || data[0].length === 0)) {
        console.warn('It is not expected to have an empty data set.');
        return;
      }
      var draggingDirection = new WalkontableCellRange(undefined, ht.getSelectedRange().highlight, start).getDirection();
      if (draggingDirection.charAt(0) === 'S') {
        data = data.reverse();
      }
      var originalCornerCell = this._getCornerCell(ht.getSelectedRange().from, ht.getSelectedRange().to, draggingDirection);
      for (var i = start.row; i <= end.row; i++) {
        for (var j = start.col; j <= end.col; j++) {
          var dataRowIndex = (i - start.row) % data.length;
          var dataColIndex = (j - start.col) % data[0].length;
          var dataEntry = data[dataRowIndex][dataColIndex];
          var formattedLabel = editor.formatter(dataEntry);
          if (!formattedLabel) {
            // resolved || unresolved (when just filled in)
            var id = dataEntry.properties && dataEntry.properties.id || dataEntry;
            var cell = ht.getCellMeta(i, j);
            if (!cell._labels) {
              cell._labels = {};
            }
            var originalCell = ht.getCellMeta(originalCornerCell.row + dataRowIndex, originalCornerCell.col + dataColIndex);
            if (originalCell._labels) {
              cell._labels[id] = originalCell._labels[id];
            }
          }
        }
      }
    }
  }, {
    key: "_getCornerCell",
    value: function _getCornerCell(start, end, draggingDirection) {
      var range = new WalkontableCellRange(undefined, start, end);
      switch (draggingDirection) {
        case 'NW-SE':
          return range.getBottomRightCorner();
        case 'NE-SW':
          return range.getBottomLeftCorner();
        case 'SE-NW':
          return range.getTopLeftCorner();
        case 'SW-NE':
          return range.getTopRightCorner();
      }
    }
  }, {
    key: "dirtyRenderer",
    value: function dirtyRenderer(instance, td, row, col, prop, value, cellProperties) {
      Handsontable.renderers.TextRenderer.apply(this, arguments);
      var doc = this.getDataAtRow(row);
      if (doc && this._dirty[doc.uid]) {
        // color dirty rows
        var color = '#e2f1ff';
        // check for errors
        if (this._dirty[doc.uid].hasOwnProperty('_error')) {
          color = '#f33';
          // check for dirty property
        } else if (hasProp(this._dirty[doc.uid], prop)) {
          color = '#afd8ff';
        }
        $(td).css({
          background: color
        });
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.ht.destroy();
    }
  }, {
    key: "_update",
    value: function _update() {
      var options = $.extend({}, this.options);
      options.colHeaders = this.columns.map(function (c) {
        return c.header;
      });
      options.columns = this.columns;
      this.ht.updateSettings(options);
    }
  }]);
  return Spreadsheet;
}(); // Renderers
var ReadOnlyRenderer = function ReadOnlyRenderer(instance, td, row, col, prop, value, cellProperties) {
  Handsontable.renderers.TextRenderer.apply(this, arguments);
  td.style.color = 'green';
  td.style.background = '#CEC';
};
Handsontable.renderers.registerRenderer('readOnly', ReadOnlyRenderer);

// Property Utils

// http://stackoverflow.com/questions/13719593/javascript-how-to-set-object-property-given-its-string-name
function assign(obj, prop, value) {
  if (typeof prop === 'string') {
    prop = prop.split('.');
  }
  if (prop.length > 1) {
    var e = prop.shift();
    assign(obj[e] = Object.prototype.toString.call(obj[e]) === '[object Object]' ? obj[e] : {}, prop, value);
  } else {
    obj[prop[0]] = value;
  }
}
function hasProp(obj, prop) {
  if (typeof prop === 'string') {
    prop = prop.split('.');
  }
  if (prop.length > 1) {
    var e = prop.shift();
    return hasProp(obj[e] = Object.prototype.toString.call(obj[e]) === '[object Object]' ? obj[e] : {}, prop);
  } else {
    return obj.hasOwnProperty(prop[0]);
  }
}


/***/ }),

/***/ "./app/ui/widgets.js":
/*!***************************!*\
  !*** ./app/ui/widgets.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WIDGETS": () => (/* binding */ WIDGETS),
/* harmony export */   "WIDGET_TYPES": () => (/* binding */ WIDGET_TYPES)
/* harmony export */ });
/* harmony import */ var _editors_directory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editors/directory */ "./app/ui/editors/directory.js");
/* harmony import */ var _editors_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editors/document */ "./app/ui/editors/document.js");
/* harmony import */ var _editors_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editors/user */ "./app/ui/editors/user.js");
/* harmony import */ var _editors_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editors/image */ "./app/ui/editors/image.js");
/*
 * (C) Copyright 2014 Nuxeo SA (http://nuxeo.com/) and contributors.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * Contributors:
 *     Nelson Silva <nelson.silva@inevo.pt>
 *     Jackie Aldama <jaldama@nuxeo.com>
 */




Handsontable.editors.registerEditor('directory', _editors_directory__WEBPACK_IMPORTED_MODULE_0__.DirectoryEditor);
Handsontable.editors.registerEditor('document', _editors_document__WEBPACK_IMPORTED_MODULE_1__.DocumentEditor);
Handsontable.editors.registerEditor('user', _editors_user__WEBPACK_IMPORTED_MODULE_2__.UserEditor);

/**
 * Mixin for widgets based on their name.
 * Used to override widget definitions (ex: template widgets).
 */
var WIDGETS = {
  listing_coverage: {
    type: 'suggestOneDirectory',
    properties: {
      any: {
        dbl10n: true,
        directoryName: 'l10ncoverage'
      }
    }
  },
  listing_subjects: {
    type: 'suggestManyDirectory',
    properties: {
      any: {
        dbl10n: true,
        directoryName: 'l10nsubjects'
      }
    }
  },
  listing_version: {
    type: 'text',
    field: 'versionLabel'
  },
  listing_last_contributor: {
    type: 'singleUserSuggestion',
    renderer: _editors_user__WEBPACK_IMPORTED_MODULE_2__.UserRenderer
  },
  listing_title_link: {
    type: 'text'
  },
  listing_thumbnail: {
    field: 'thumb:thumbnail'
  }
};

/**
 * Mapping between widget types and handsontable's editors and renderers
 */
var WIDGET_TYPES = {
  text: {
    type: 'text'
  },
  textarea: {
    type: 'text'
  },
  date: {
    type: 'date'
  },
  datetime: {
    type: 'date',
    dateFormat: 'yy-mm-ddT00:00:00.000'
  },
  numeric: {
    type: 'numeric'
  },
  int: {
    type: 'numeric'
  },
  // SELECT
  selectOneDirectory: {
    renderer: _editors_directory__WEBPACK_IMPORTED_MODULE_0__.DirectoryRenderer,
    editor: 'directory'
  },
  selectManyDirectory: {
    renderer: _editors_directory__WEBPACK_IMPORTED_MODULE_0__.DirectoryRenderer,
    editor: 'directory',
    multiple: true
  },
  // SUGGESTION
  suggestOneDirectory: {
    renderer: _editors_directory__WEBPACK_IMPORTED_MODULE_0__.DirectoryRenderer,
    editor: 'directory'
  },
  suggestManyDirectory: {
    renderer: _editors_directory__WEBPACK_IMPORTED_MODULE_0__.DirectoryRenderer,
    editor: 'directory',
    multiple: true
  },
  singleUserSuggestion: {
    renderer: _editors_user__WEBPACK_IMPORTED_MODULE_2__.UserRenderer,
    editor: 'user'
  },
  multipleUsersSuggestion: {
    renderer: _editors_user__WEBPACK_IMPORTED_MODULE_2__.UserRenderer,
    editor: 'user',
    multiple: true
  },
  singleDocumentSuggestion: {
    renderer: _editors_document__WEBPACK_IMPORTED_MODULE_1__.DocumentRenderer,
    editor: 'document',
    minimumInputLength: 3
  },
  multipleDocumentsSuggestion: {
    renderer: _editors_document__WEBPACK_IMPORTED_MODULE_1__.DocumentRenderer,
    editor: 'document',
    multiple: true,
    minimumInputLength: 3
  },
  // IMAGE
  image: {
    renderer: _editors_image__WEBPACK_IMPORTED_MODULE_3__.ImageRenderer,
    height: '150px',
    readOnly: true
  }
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "run": () => (/* binding */ run)
/* harmony export */ });
/* harmony import */ var _nuxeo_connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nuxeo/connection */ "./app/nuxeo/connection.js");
/* harmony import */ var _ui_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/log */ "./app/ui/log.js");
/* harmony import */ var _ui_spreadsheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/spreadsheet */ "./app/ui/spreadsheet.js");
/* harmony import */ var _nuxeo_util_nxql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nuxeo/util/nxql */ "./app/nuxeo/util/nxql.js");
/* harmony import */ var _ui_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/i18n */ "./app/ui/i18n.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/*
 * (C) Copyright 2014 Nuxeo SA (http://nuxeo.com/) and contributors.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * Contributors:
 *     Nelson Silva <nelson.silva@inevo.pt>
 */






// Extract the parameters (content view state and page provider)
var _parseParams = parseParams(),
  cv = _parseParams.cv,
  pp = _parseParams.pp;
// Parse the content view state
var cv = cv && JSON.parse(b64DecodeUnicode(cv));

// Check if we're in standalone mode
var isStandalone = !cv;

// Our Spreadsheet instance
var sheet;
var log;
function setupUI() {
  log = new _ui_log__WEBPACK_IMPORTED_MODULE_1__.Log($('#console'));

  // Setup popup UI
  if (!isStandalone) {
    $('#close').click(function () {
      if (parent.jQuery && parent.jQuery.fancybox) {
        parent.jQuery.fancybox.close();
      }
    });
    $('#close').toggle(true);

    // Setup standalone UI
  } else {
    $('#queryArea').toggle(true);
    $('#execute').click(doQuery);
  }
  $('#save').click(function () {
    log.info((0,_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n)('saving'));
    sheet.save().then(function (results) {
      if (!results) {
        log.error((0,_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n)('failedSave'));
        return;
      }
      var msg;
      if (results.length === 0) {
        msg = (0,_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n)('upToDate');
      } else {
        msg = "".concat(results.length, " ").concat((0,_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n)('rowsSaved'));
      }
      log.info(msg);
    });
  });
  $('input[name=autosave]').click(function () {
    sheet.autosave = $(this).is(':checked');
    if (sheet.autosave) {
      log.default((0,_ui_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n)('autoSave'));
    } else {
      log.default('');
    }
  });
  $(document).ajaxStart(function () {
    return $('#loading').show();
  });
  $(document).ajaxStop(function () {
    return $('#loading').hide();
  });
}
function doQuery() {
  // Only parse queries in standalone mode
  if (isStandalone) {
    var q = $('#query').val();
    sheet.nxql = (0,_nuxeo_util_nxql__WEBPACK_IMPORTED_MODULE_3__.parseNXQL)(q);
  }
  return sheet.update().catch(function (err) {
    log.error(err.message);
  });
}
function run() {
  var baseURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/nuxeo';
  var username = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var password = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  // Setup our connection
  var nx = new _nuxeo_connection__WEBPACK_IMPORTED_MODULE_0__.Connection(baseURL, username, password);
  nx.schemas(['*']);
  setupUI();
  return nx.connect().then(function () {
    // Setup the language
    var language = nuxeo && nuxeo.spreadsheet && nuxeo.spreadsheet.language ? nuxeo.spreadsheet.language.split('_')[0] : 'en';

    // Extract content view configuration
    var resultLayoutName = cv && cv.resultLayout && cv.resultLayout.name;
    var resultColumns = cv && cv.resultColumns;
    var pageProviderName = cv ? cv.pageProviderName : pp || 'spreadsheet_query';

    // default columns
    if (!resultLayoutName && (!resultColumns || resultColumns.length === 0)) {
      resultColumns = [{
        label: 'Title',
        field: 'dc:title'
      }, {
        label: 'Modified',
        field: 'dc:modified'
      }, {
        label: 'Last Contributor',
        field: 'dc:lastContributor'
      }, {
        label: 'State',
        field: 'currentLifeCycleState'
      }];
    }

    // Setup the SpreadSheet
    sheet = new _ui_spreadsheet__WEBPACK_IMPORTED_MODULE_2__.Spreadsheet($('#grid'), nx, resultLayoutName, resultColumns, pageProviderName, language);

    // If we don't have a content view we're done...
    if (isStandalone) {
      return;
    }
    // ... otherwise let's set it up

    // Add query parameters
    if (cv.queryParameters) {
      sheet.queryParameters = cv.queryParameters;
    }

    // Add the search document
    if (cv.searchDocument) {
      var namedParameters = {};
      for (var k in cv.searchDocument.properties) {
        var v = cv.searchDocument.properties[k];
        // skip null or empty values
        if (v == null || typeof v.length !== 'undefined' && v.length === 0) {
          continue;
        }
        namedParameters[k] = typeof v === 'string' ? v : JSON.stringify(v);
      }
      sheet.namedParameters = namedParameters;
    }

    // Add sort infos
    if (cv.sortInfos && cv.sortInfos.length > 0) {
      sheet.sortInfos = cv.sortInfos;
    }

    // Run the query
    return doQuery();
  });
}

// Utils
function parseParams() {
  var parameters = {};
  var query = window.location.search.replace('?', '');
  if (query.length === 0) {
    return parameters;
  }
  var params = query.split('&');
  var _iterator = _createForOfIteratorHelper(params),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var param = _step.value;
      var _param$split = param.split('='),
        _param$split2 = _slicedToArray(_param$split, 2),
        k = _param$split2[0],
        v = _param$split2[1];
      v = v.replace(/\+/g, ' ');
      parameters[k] = decodeURIComponent(v);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return parameters;
}

// see https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}
run();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsQ0FBQyxJQUFJLEdBQUdBLENBQUMsQ0FBQytULFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzVULFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRUosS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2hFLENBQUMsQ0FBQyxDQUFDMUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2Q7QUFFQW9FLEdBQUcsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL251eGVvLXNwcmVhZHNoZWV0Ly4vYXBwL251eGVvL2Nvbm5lY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbnV4ZW8tc3ByZWFkc2hlZXQvLi9hcHAvbnV4ZW8vbGF5b3V0LmpzIiwid2VicGFjazovL251eGVvLXNwcmVhZHNoZWV0Ly4vYXBwL251eGVvL3Jlc3QvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9udXhlby1zcHJlYWRzaGVldC8uL2FwcC9udXhlby9yZXN0L3NjaGVtYXMuanMiLCJ3ZWJwYWNrOi8vbnV4ZW8tc3ByZWFkc2hlZXQvLi9hcHAvbnV4ZW8vcnBjL2RpcmVjdG9yeS5qcyIsIndlYnBhY2s6Ly9udXhlby1zcHJlYWRzaGVldC8uL2FwcC9udXhlby9ycGMvb3BlcmF0aW9uLmpzIiwid2VicGFjazovL251eGVvLXNwcmVhZHNoZWV0Ly4vYXBwL251eGVvL3JwYy9xdWVyeS5qcyIsIndlYnBhY2s6Ly9udXhlby1zcHJlYWRzaGVldC8uL2FwcC9udXhlby91dGlsL254cWwuanMiLCJ3ZWJwYWNrOi8vbnV4ZW8tc3ByZWFkc2hlZXQvLi9hcHAvbnV4ZW8vd2lkZ2V0LmpzIiwid2VicGFjazovL251eGVvLXNwcmVhZHNoZWV0Ly4vYXBwL3VpL2NvbHVtbi5qcyIsIndlYnBhY2s6Ly9udXhlby1zcHJlYWRzaGVldC8uL2FwcC91aS9lZGl0b3JzL2RpcmVjdG9yeS5qcyIsIndlYnBhY2s6Ly9udXhlby1zcHJlYWRzaGVldC8uL2FwcC91aS9lZGl0b3JzL2RvY3VtZW50LmpzIiwid2VicGFjazovL251eGVvLXNwcmVhZHNoZWV0Ly4vYXBwL3VpL2VkaXRvcnMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbnV4ZW8tc3ByZWFkc2hlZXQvLi9hcHAvdWkvZWRpdG9ycy9zZWxlY3QyLmpzIiwid2VicGFjazovL251eGVvLXNwcmVhZHNoZWV0Ly4vYXBwL3VpL2VkaXRvcnMvdXNlci5qcyIsIndlYnBhY2s6Ly9udXhlby1zcHJlYWRzaGVldC8uL2FwcC91aS9pMThuLmpzIiwid2VicGFjazovL251eGVvLXNwcmVhZHNoZWV0Ly4vYXBwL3VpL2xvZy5qcyIsIndlYnBhY2s6Ly9udXhlby1zcHJlYWRzaGVldC8uL2FwcC91aS9zcHJlYWRzaGVldC5qcyIsIndlYnBhY2s6Ly9udXhlby1zcHJlYWRzaGVldC8uL2FwcC91aS93aWRnZXRzLmpzIiwid2VicGFjazovL251eGVvLXNwcmVhZHNoZWV0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL251eGVvLXNwcmVhZHNoZWV0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9udXhlby1zcHJlYWRzaGVldC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL251eGVvLXNwcmVhZHNoZWV0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbnV4ZW8tc3ByZWFkc2hlZXQvLi9hcHAvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIChDKSBDb3B5cmlnaHQgMjAxNCBOdXhlbyBTQSAoaHR0cDovL251eGVvLmNvbS8pIGFuZCBjb250cmlidXRvcnMuXHJcbiAqXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFRoaXMgcHJvZ3JhbSBhbmQgdGhlIGFjY29tcGFueWluZyBtYXRlcmlhbHNcclxuICogYXJlIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXHJcbiAqIChMR1BMKSB2ZXJzaW9uIDIuMSB3aGljaCBhY2NvbXBhbmllcyB0aGlzIGRpc3RyaWJ1dGlvbiwgYW5kIGlzIGF2YWlsYWJsZSBhdFxyXG4gKiBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvbGdwbC0yLjEuaHRtbFxyXG4gKlxyXG4gKiBUaGlzIGxpYnJhcnkgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcclxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcclxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVVxyXG4gKiBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBDb250cmlidXRvcnM6XHJcbiAqICAgICBOZWxzb24gU2lsdmEgPG5lbHNvbi5zaWx2YUBpbmV2by5wdD5cclxuICovXHJcblxyXG4vKipcclxuICogV3JhcHBlciBmb3IgbnV4ZW8uQ2xpZW50XHJcbiAqL1xyXG5jbGFzcyBDb25uZWN0aW9uIGV4dGVuZHMgbnV4ZW8uQ2xpZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IoYmFzZVVSTCA9ICcvbnV4ZW8nLCB1c2VybmFtZSA9IG51bGwsIHBhc3N3b3JkID0gbnVsbCkge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICAgIGJhc2VVUkwsXHJcbiAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgdGltZW91dDogMzAwMDAwXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldCBiYXNlVVJMKCkgeyByZXR1cm4gdGhpcy5fYmFzZVVSTDsgfVxyXG5cclxuICBjb25uZWN0KCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdmFyIGhlYWRlcnMgPSB7XHJcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdmFyIHhockZpZWxkcyA9IHt9O1xyXG4gICAgICBpZiAodGhpcy5fdXNlcm5hbWUgJiYgdGhpcy5fcGFzc3dvcmQpIHtcclxuICAgICAgICBoZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodGhpcy5fdXNlcm5hbWUgKyAnOicgKyB0aGlzLl9wYXNzd29yZCk7XHJcbiAgICAgICAgeGhyRmllbGRzID0ge1xyXG4gICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBgJHt0aGlzLl9hdXRvbWF0aW9uVVJMfS9sb2dpbmAsXHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICB4aHJGaWVsZHNcclxuICAgICAgfSlcclxuICAgICAgLmRvbmUoKGRhdGEsIHRleHRTdGF0dXMsIGpxWEhSKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGFbJ2VudGl0eS10eXBlJ10gPT09ICdsb2dpbicpIHtcclxuICAgICAgICAgIHRoaXMuY29ubmVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgIHJlc29sdmUodGhpcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlamVjdChFcnJvcihkYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuZmFpbChmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgcmVqZWN0KEVycm9yKGVycm9yVGhyb3duKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge0Nvbm5lY3Rpb259O1xyXG4iLCIvKlxyXG4gKiAoQykgQ29weXJpZ2h0IDIwMTQgTnV4ZW8gU0EgKGh0dHA6Ly9udXhlby5jb20vKSBhbmQgY29udHJpYnV0b3JzLlxyXG4gKlxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLiBUaGlzIHByb2dyYW0gYW5kIHRoZSBhY2NvbXBhbnlpbmcgbWF0ZXJpYWxzXHJcbiAqIGFyZSBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxyXG4gKiAoTEdQTCkgdmVyc2lvbiAyLjEgd2hpY2ggYWNjb21wYW5pZXMgdGhpcyBkaXN0cmlidXRpb24sIGFuZCBpcyBhdmFpbGFibGUgYXRcclxuICogaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2xncGwtMi4xLmh0bWxcclxuICpcclxuICogVGhpcyBsaWJyYXJ5IGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXHJcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXHJcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlVcclxuICogTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogQ29udHJpYnV0b3JzOlxyXG4gKiAgICAgTmVsc29uIFNpbHZhIDxuZWxzb24uc2lsdmFAaW5ldm8ucHQ+XHJcbiAqL1xyXG5pbXBvcnQge0Nvbm5lY3Rpb259IGZyb20gJy4vY29ubmVjdGlvbic7XHJcbmltcG9ydCB7V2lkZ2V0fSBmcm9tICcuL3dpZGdldCc7XHJcblxyXG4vKipcclxuICogTGF5b3V0XHJcbiAqL1xyXG5jbGFzcyBMYXlvdXQge1xyXG4gIGNvbnN0cnVjdG9yKGNvbm4sIG5hbWUsIGxhbmcpIHtcclxuICAgIHRoaXMuY29ubiA9IGNvbm47XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5sYW5nID0gbGFuZztcclxuICAgIHRoaXMud2lkZ2V0cyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgZmV0Y2goKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuY29ubi5yZXF1ZXN0KCcvc2l0ZS9sYXlvdXQtbWFuYWdlci9sYXlvdXRzL2pzb24/bGF5b3V0TmFtZT0nICsgdGhpcy5uYW1lICsgJyZsYW5nPScgKyB0aGlzLmxhbmcpLnJlcG9zaXRvcnlOYW1lKHVuZGVmaW5lZCk7XHJcbiAgICAgIHJlcXVlc3QuX3VybCA9IHRoaXMuY29ubi5iYXNlVVJMO1xyXG5cclxuICAgICAgcmVxdWVzdC5nZXQoKGVycm9yLCBkZWYpID0+IHtcclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgIHJlamVjdChFcnJvcihlcnJvcikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBQcmVwYXJlIGEgaGFzaG1hcCB3aXRoIHRoZSB3aWRnZXRzXHJcbiAgICAgICAgdGhpcy53aWRnZXRzID0ge307XHJcbiAgICAgICAgZGVmLndpZGdldHMuZm9yRWFjaCgod2lkZ2V0KSA9PiB0aGlzLndpZGdldHNbd2lkZ2V0Lm5hbWVdID0gbmV3IFdpZGdldCh0aGlzLmNvbm4sIHdpZGdldCkpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbHVtbnMgPSBkZWYucm93cztcclxuXHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge0xheW91dH07XHJcbiIsIi8qXHJcbiAqIChDKSBDb3B5cmlnaHQgMjAxNCBOdXhlbyBTQSAoaHR0cDovL251eGVvLmNvbS8pIGFuZCBjb250cmlidXRvcnMuXHJcbiAqXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFRoaXMgcHJvZ3JhbSBhbmQgdGhlIGFjY29tcGFueWluZyBtYXRlcmlhbHNcclxuICogYXJlIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXHJcbiAqIChMR1BMKSB2ZXJzaW9uIDIuMSB3aGljaCBhY2NvbXBhbmllcyB0aGlzIGRpc3RyaWJ1dGlvbiwgYW5kIGlzIGF2YWlsYWJsZSBhdFxyXG4gKiBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvbGdwbC0yLjEuaHRtbFxyXG4gKlxyXG4gKiBUaGlzIGxpYnJhcnkgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcclxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcclxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVVxyXG4gKiBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBDb250cmlidXRvcnM6XHJcbiAqICAgICBOZWxzb24gU2lsdmEgPG5lbHNvbi5zaWx2YUBpbmV2by5wdD5cclxuICovXHJcblxyXG4vKipcclxuICogV3JhcHBlciBmb3IgbnV4ZW8uUmVxdWVzdFxyXG4gKi9cclxuY2xhc3MgUmVxdWVzdCB7XHJcbiAgY29uc3RydWN0b3IoY29ubiwgcGF0aCA9ICcnKSB7XHJcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xyXG4gICAgdGhpcy5jb25uID0gY29ubjtcclxuICAgIHRoaXMuX3BhcmFtcyA9IHt9O1xyXG4gICAgdGhpcy5faGVhZGVycyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBhcmFtcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9wYXJhbXM7XHJcbiAgfVxyXG5cclxuICBnZXQgaGVhZGVycygpIHtcclxuICAgIHJldHVybiB0aGlzLl9oZWFkZXJzO1xyXG4gIH1cclxuXHJcbiAgc2V0IGVucmljaGVycyhsc3QpIHtcclxuICAgIHRoaXMuaGVhZGVyc1snWC1OWENvbnRleHQtQ2F0ZWdvcnknXSA9IGxzdC5qb2luKCcsJyk7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlKG1ldGhvZCA9ICdnZXQnLCBwYXRoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmNvbm4ucmVxdWVzdChwYXRoIHx8IHRoaXMucGF0aClcclxuICAgICAgICAucmVwb3NpdG9yeU5hbWUodW5kZWZpbmVkKVxyXG4gICAgICAgIC5oZWFkZXJzKHRoaXMuX2hlYWRlcnMpXHJcbiAgICAgICAgLnF1ZXJ5KHRoaXMuX3BhcmFtcylcclxuICAgICAgICBbbWV0aG9kXSgoZXJyb3IsIGRhdGEpID0+IHtcclxuICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICByZWplY3QoRXJyb3IoZXJyb3IpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7UmVxdWVzdH07XHJcbiIsIi8qXHJcbiAqIChDKSBDb3B5cmlnaHQgMjAxNyBOdXhlbyBTQSAoaHR0cDovL251eGVvLmNvbS8pIGFuZCBjb250cmlidXRvcnMuXHJcbiAqXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFRoaXMgcHJvZ3JhbSBhbmQgdGhlIGFjY29tcGFueWluZyBtYXRlcmlhbHNcclxuICogYXJlIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXHJcbiAqIChMR1BMKSB2ZXJzaW9uIDIuMSB3aGljaCBhY2NvbXBhbmllcyB0aGlzIGRpc3RyaWJ1dGlvbiwgYW5kIGlzIGF2YWlsYWJsZSBhdFxyXG4gKiBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvbGdwbC0yLjEuaHRtbFxyXG4gKlxyXG4gKiBUaGlzIGxpYnJhcnkgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcclxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcclxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVVxyXG4gKiBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKi9cclxuaW1wb3J0IHtSZXF1ZXN0fSBmcm9tICcuL3JlcXVlc3QnO1xyXG5cclxuY29uc3QgUEFUSCA9ICcvY29uZmlnL3NjaGVtYXMvJztcclxuXHJcbi8qKlxyXG4gKiBSRVNUIFNjaGVtYXNcclxuICovXHJcbmNsYXNzIFNjaGVtYXMgZXh0ZW5kcyBSZXF1ZXN0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoY29ubmVjdGlvbikge1xyXG4gICAgc3VwZXIoY29ubmVjdGlvbiwgUEFUSCk7XHJcbiAgfVxyXG5cclxuICBmZXRjaChzY2hlbWFzKSB7XHJcbiAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSgpLnRoZW4oKGVudHJpZXMpID0+IHtcclxuXHJcbiAgICAgIGZvciAobGV0IGVudHJ5IG9mIGVudHJpZXMpIHtcclxuICAgICAgICBsZXQga2V5ID0gZW50cnlbJ0BwcmVmaXgnXSB8fCBlbnRyeS5uYW1lO1xyXG4gICAgICAgIGlmIChzY2hlbWFzLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcclxuICAgICAgICAgIGRhdGFba2V5XSA9IHtuYW1lOiBlbnRyeS5uYW1lfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBwcm9taXNlcyA9IHNjaGVtYXMubWFwKChzKSA9PiB0aGlzLl9mZXRjaEZpZWxkc0J5U2NoZW1hKGRhdGFbc10ubmFtZSkpO1xyXG5cclxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKHZhbHVlcyA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XHJcbiAgICAgICAgICBsZXQga2V5ID0gdmFsdWVbJ0BwcmVmaXgnXSB8fCB2YWx1ZS5uYW1lO1xyXG4gICAgICAgICAgZGF0YVtrZXldLmZpZWxkcyA9IHZhbHVlLmZpZWxkcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2ZldGNoRmllbGRzQnlTY2hlbWEoc2NoZW1hKSB7XHJcbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKCdnZXQnLCBgJHtQQVRIfS8ke3NjaGVtYX0/ZmV0Y2guc2NoZW1hPWZpZWxkc2ApO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7U2NoZW1hc307XHJcbiIsIi8qXHJcbiAqIChDKSBDb3B5cmlnaHQgMjAxNCBOdXhlbyBTQSAoaHR0cDovL251eGVvLmNvbS8pIGFuZCBjb250cmlidXRvcnMuXHJcbiAqXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFRoaXMgcHJvZ3JhbSBhbmQgdGhlIGFjY29tcGFueWluZyBtYXRlcmlhbHNcclxuICogYXJlIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXHJcbiAqIChMR1BMKSB2ZXJzaW9uIDIuMSB3aGljaCBhY2NvbXBhbmllcyB0aGlzIGRpc3RyaWJ1dGlvbiwgYW5kIGlzIGF2YWlsYWJsZSBhdFxyXG4gKiBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvbGdwbC0yLjEuaHRtbFxyXG4gKlxyXG4gKiBUaGlzIGxpYnJhcnkgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcclxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcclxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVVxyXG4gKiBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBDb250cmlidXRvcnM6XHJcbiAqICAgICBOZWxzb24gU2lsdmEgPG5lbHNvbi5zaWx2YUBpbmV2by5wdD5cclxuICovXHJcbmltcG9ydCB7T3BlcmF0aW9ufSBmcm9tICcuL29wZXJhdGlvbic7XHJcblxyXG4vKipcclxuICogRGlyZWN0b3J5XHJcbiAqL1xyXG5jbGFzcyBEaXJlY3RvcnkgZXh0ZW5kcyBPcGVyYXRpb24ge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb25uZWN0aW9uLCBkaXJlY3RvcnlOYW1lLCBsYW5ndWFnZSkge1xyXG4gICAgc3VwZXIoY29ubmVjdGlvbiwgJ0RpcmVjdG9yeS5TdWdnZXN0RW50cmllcycpO1xyXG4gICAgdGhpcy5kaXJlY3RvcnlOYW1lID0gZGlyZWN0b3J5TmFtZTtcclxuICAgIHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZTtcclxuICB9XHJcblxyXG4gIGdldCBkaXJlY3RvcnlOYW1lKCkgeyByZXR1cm4gdGhpcy5wYXJhbXMuZGlyZWN0b3J5TmFtZTsgfVxyXG4gIHNldCBkaXJlY3RvcnlOYW1lKG5hbWUpIHtcclxuICAgIHRoaXMucGFyYW1zLmRpcmVjdG9yeU5hbWUgPSBuYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRyYW5zbGF0ZUxhYmVscygpIHsgcmV0dXJuIHRoaXMucGFyYW1zLnRyYW5zbGF0ZUxhYmVsczsgfVxyXG4gIHNldCB0cmFuc2xhdGVMYWJlbHMoZmxhZykge1xyXG4gICAgdGhpcy5wYXJhbXMudHJhbnNsYXRlTGFiZWxzID0gZmxhZztcclxuICB9XHJcblxyXG4gIHNldCBkYmwxMG4oZmxhZykge1xyXG4gICAgdGhpcy5wYXJhbXMuZGJsMTBuID0gZmxhZztcclxuICB9XHJcblxyXG4gIHNldCBsb2NhbGl6ZShmbGFnKSB7XHJcbiAgICB0aGlzLnBhcmFtcy5sb2NhbGl6ZSA9IGZsYWc7XHJcbiAgfVxyXG5cclxuICBzZXQgbGFuZ3VhZ2UobGFuZykge1xyXG4gICAgdGhpcy5wYXJhbXMubGFuZyA9IGxhbmc7XHJcbiAgfVxyXG5cclxuICBlbnRyaWVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoKCk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2godGVybSkge1xyXG4gICAgdGhpcy5wYXJhbXMuc2VhcmNoVGVybSA9IHRlcm07XHJcbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge0RpcmVjdG9yeX07XHJcbiIsIi8qXHJcbiAqIChDKSBDb3B5cmlnaHQgMjAxNCBOdXhlbyBTQSAoaHR0cDovL251eGVvLmNvbS8pIGFuZCBjb250cmlidXRvcnMuXHJcbiAqXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFRoaXMgcHJvZ3JhbSBhbmQgdGhlIGFjY29tcGFueWluZyBtYXRlcmlhbHNcclxuICogYXJlIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXHJcbiAqIChMR1BMKSB2ZXJzaW9uIDIuMSB3aGljaCBhY2NvbXBhbmllcyB0aGlzIGRpc3RyaWJ1dGlvbiwgYW5kIGlzIGF2YWlsYWJsZSBhdFxyXG4gKiBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvbGdwbC0yLjEuaHRtbFxyXG4gKlxyXG4gKiBUaGlzIGxpYnJhcnkgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcclxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcclxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVVxyXG4gKiBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBDb250cmlidXRvcnM6XHJcbiAqICAgICBOZWxzb24gU2lsdmEgPG5lbHNvbi5zaWx2YUBpbmV2by5wdD5cclxuICovXHJcblxyXG4vKipcclxuICogV3JhcHBlciBmb3IgbnV4ZW8uT3BlcmF0aW9uXHJcbiAqL1xyXG5jbGFzcyBPcGVyYXRpb24ge1xyXG4gIGNvbnN0cnVjdG9yKGNvbm4sIG9wSWQpIHtcclxuICAgIHRoaXMub3BJZCA9IG9wSWQ7XHJcbiAgICB0aGlzLmNvbm4gPSBjb25uO1xyXG4gICAgdGhpcy5fcGFyYW1zID0ge307XHJcbiAgICB0aGlzLl9oZWFkZXJzID0ge307XHJcbiAgfVxyXG5cclxuICBnZXQgcGFyYW1zKCkgeyByZXR1cm4gdGhpcy5fcGFyYW1zOyB9XHJcblxyXG4gIGdldCBoZWFkZXJzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlcnM7XHJcbiAgfVxyXG5cclxuICBzZXQgZGVwdGgodmFsdWUpIHtcclxuICAgIHRoaXMuaGVhZGVyc1tgZGVwdGhgXSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZW5yaWNoKG9iamVjdFR5cGUsIC4uLmVucmljaGVycykge1xyXG4gICAgdGhpcy5oZWFkZXJzW2BlbnJpY2hlcnMtJHtvYmplY3RUeXBlfWBdID0gZW5yaWNoZXJzLmpvaW4oJywnKTtcclxuICB9XHJcblxyXG4gIGZldGNoKG9iamVjdFR5cGUsIC4uLnBhcnRzKSB7XHJcbiAgICB0aGlzLmhlYWRlcnNbYGZldGNoLSR7b2JqZWN0VHlwZX1gXSA9IHBhcnRzLmpvaW4oJywnKTtcclxuICB9XHJcblxyXG4gIHRyYW5zbGF0ZShvYmplY3RUeXBlLCAuLi5lbGVtZW50cykge1xyXG4gICAgdGhpcy5oZWFkZXJzW2B0cmFuc2xhdGUtJHtvYmplY3RUeXBlfWBdID0gZWxlbWVudHMuam9pbignLCcpO1xyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZSgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuY29ubi5vcGVyYXRpb24odGhpcy5vcElkKVxyXG4gICAgICAuaGVhZGVycyh0aGlzLl9oZWFkZXJzKVxyXG4gICAgICAucGFyYW1zKHRoaXMuX3BhcmFtcylcclxuICAgICAgLmV4ZWN1dGUoKGVycm9yLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICByZWplY3QoRXJyb3IoZXJyb3IpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7T3BlcmF0aW9ufTtcclxuIiwiLypcclxuICogKEMpIENvcHlyaWdodCAyMDE0IE51eGVvIFNBIChodHRwOi8vbnV4ZW8uY29tLykgYW5kIGNvbnRyaWJ1dG9ycy5cclxuICpcclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC4gVGhpcyBwcm9ncmFtIGFuZCB0aGUgYWNjb21wYW55aW5nIG1hdGVyaWFsc1xyXG4gKiBhcmUgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcclxuICogKExHUEwpIHZlcnNpb24gMi4xIHdoaWNoIGFjY29tcGFuaWVzIHRoaXMgZGlzdHJpYnV0aW9uLCBhbmQgaXMgYXZhaWxhYmxlIGF0XHJcbiAqIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9sZ3BsLTIuMS5odG1sXHJcbiAqXHJcbiAqIFRoaXMgbGlicmFyeSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxyXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxyXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VXHJcbiAqIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIENvbnRyaWJ1dG9yczpcclxuICogICAgIE5lbHNvbiBTaWx2YSA8bmVsc29uLnNpbHZhQGluZXZvLnB0PlxyXG4gKi9cclxuaW1wb3J0IHtPcGVyYXRpb259IGZyb20gJy4vb3BlcmF0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBQYWdpbmF0ZWQgUXVlcnlcclxuICovXHJcbmNsYXNzIFF1ZXJ5IGV4dGVuZHMgT3BlcmF0aW9uIHtcclxuXHJcbiAgY29uc3RydWN0b3IoY29ubmVjdGlvbikge1xyXG4gICAgc3VwZXIoY29ubmVjdGlvbiwgJ0RvY3VtZW50LlBhZ2VQcm92aWRlcicpO1xyXG4gIH1cclxuXHJcbiAgc2V0IG54cWwocSkge1xyXG4gICAgdGhpcy5wYXJhbXMubGFuZ3VhZ2UgPSAnbnhxbCc7XHJcbiAgICB0aGlzLnBhcmFtcy5xdWVyeSA9IHE7XHJcbiAgfVxyXG5cclxuICBzZXQgbmFtZWRQYXJhbWV0ZXJzKHApIHtcclxuICAgIHRoaXMucGFyYW1zLm5hbWVkUGFyYW1ldGVycyA9IHA7XHJcbiAgfVxyXG5cclxuICBzZXQgcXVlcnlQYXJhbWV0ZXJzKHApIHtcclxuICAgIHRoaXMucGFyYW1zLnF1ZXJ5UGFyYW1zID0gcDtcclxuICB9XHJcblxyXG4gIHNldCBwYWdlUHJvdmlkZXIobmFtZSkge1xyXG4gICAgdGhpcy5wYXJhbXMucHJvdmlkZXJOYW1lID0gbmFtZTtcclxuICB9XHJcblxyXG4gIGdldCBwYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyYW1zLmN1cnJlbnRQYWdlSW5kZXg7XHJcbiAgfVxyXG5cclxuICBzZXQgcGFnZShwKSB7XHJcbiAgICB0aGlzLnBhcmFtcy5jdXJyZW50UGFnZUluZGV4ID0gcDtcclxuICB9XHJcblxyXG4gIHNldCBwYWdlU2l6ZShzKSB7XHJcbiAgICB0aGlzLnBhcmFtcy5wYWdlU2l6ZSA9IHM7XHJcbiAgfVxyXG5cclxuICBzZXQgc29ydEJ5KHMpIHtcclxuICAgIHRoaXMucGFyYW1zLnNvcnRCeSA9IHMuam9pbignLCcpO1xyXG4gIH1cclxuXHJcbiAgc2V0IHNvcnRPcmRlcihzKSB7XHJcbiAgICB0aGlzLnBhcmFtcy5zb3J0T3JkZXIgPSBzLmpvaW4oJywnKTtcclxuICB9XHJcblxyXG4gIHJ1bigpIHtcclxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7UXVlcnl9O1xyXG4iLCIvKlxyXG4gKiAoQykgQ29weXJpZ2h0IDIwMTQgTnV4ZW8gU0EgKGh0dHA6Ly9udXhlby5jb20vKSBhbmQgY29udHJpYnV0b3JzLlxyXG4gKlxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLiBUaGlzIHByb2dyYW0gYW5kIHRoZSBhY2NvbXBhbnlpbmcgbWF0ZXJpYWxzXHJcbiAqIGFyZSBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxyXG4gKiAoTEdQTCkgdmVyc2lvbiAyLjEgd2hpY2ggYWNjb21wYW5pZXMgdGhpcyBkaXN0cmlidXRpb24sIGFuZCBpcyBhdmFpbGFibGUgYXRcclxuICogaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2xncGwtMi4xLmh0bWxcclxuICpcclxuICogVGhpcyBsaWJyYXJ5IGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXHJcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXHJcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlVcclxuICogTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogQ29udHJpYnV0b3JzOlxyXG4gKiAgICAgTmVsc29uIFNpbHZhIDxuZWxzb24uc2lsdmFAaW5ldm8ucHQ+XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIE5YUUwgUXVlcnlcclxuICovXHJcbmNsYXNzIE5YUUxRdWVyeSB7XHJcbiAgY29uc3RydWN0b3IobnhxbCkge1xyXG4gICAgdmFyIHJlc3VsdCA9IE5YUUxSRS5leGVjKG54cWwpO1xyXG4gICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgdGhyb3cgYEZhaWxlZCB0byBwYXJzZSBOWFFMOiAke254cWx9YDtcclxuICAgIH1cclxuICAgIHRoaXMucGFydHMgPSByZXN1bHQuc2xpY2UoMSk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VsZWN0Q2xhdXNlKCkgeyByZXR1cm4gdGhpcy5wYXJ0c1swXTsgfVxyXG4gIHNldCBzZWxlY3RDbGF1c2UoYykgeyB0aGlzLnBhcnRzWzBdID0gYzsgfVxyXG5cclxuICBnZXQgZnJvbUNsYXVzZSgpIHsgcmV0dXJuIHRoaXMucGFydHNbMV07IH1cclxuICBzZXQgZnJvbUNsYXVzZShjKSB7IHRoaXMucGFydHNbMV0gPSBjOyB9XHJcblxyXG4gIGdldCB3aGVyZUNsYXVzZSgpIHsgcmV0dXJuIHRoaXMucGFydHNbMl07IH1cclxuICBzZXQgd2hlcmVDbGF1c2UoYykgeyB0aGlzLnBhcnRzWzJdID0gYzsgfVxyXG5cclxuICBnZXQgb3JkZXJDbGF1c2UoKSB7IHJldHVybiB0aGlzLnBhcnRzWzNdOyB9XHJcbiAgc2V0IG9yZGVyQ2xhdXNlKGMpIHsgdGhpcy5wYXJ0c1szXSA9IGM7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkIGEgd2hlcmUgY2xhdXNlXHJcbiAgICogQHBhcmFtIGNsYXVzZVxyXG4gICAqL1xyXG4gIHNldCBhZGRXaGVyZUNsYXVzZShjbGF1c2UpIHtcclxuICAgIGlmICh0aGlzLndoZXJlQ2xhdXNlKSB7XHJcbiAgICAgIHRoaXMud2hlcmVDbGF1c2UgKz0gYCBBTkQgJHtjbGF1c2V9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMud2hlcmVDbGF1c2UgPSBgV0hFUkUgJHtjbGF1c2V9YDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGFydHMuam9pbignICcpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJlZ0V4cCB0byBwYXJzZSBhIE5YUUwgcXVlcnlcclxuICovXHJcbnZhciBOWFFMUkUgPSBuZXcgUmVnRXhwKFxyXG4gICAgICAgICcoU0VMRUNUXFxcXHMuKiknICtcclxuICAgICAgICAnKEZST01cXFxccyg/Oi4oPyFXSEVSRXxPUkRFUiBCWSkpKilcXFxccz8nICtcclxuICAgICAgICAnKFdIRVJFXFxcXHMuKD86Lig/IU9SREVSIEJZKSkqKT9cXFxccz8nICtcclxuICAgICAgICAnKE9SREVSIEJZXFxcXHMuKik/JyxcclxuICAgICdpJyk7XHJcblxyXG4vKipcclxuICogRml4ZWQgY29uZGl0aW9ucyB0byBhZGQgdG8gYSBOWFFMIHF1ZXJ5XHJcbiAqL1xyXG5jb25zdCBRVUVSWV9GSVhFRF9QQVJUID1cclxuICAgICdlY206bWl4aW5UeXBlICE9IFxcJ0hpZGRlbkluTmF2aWdhdGlvblxcJyBBTkQgJyArXHJcbiAgICAnZWNtOmlzUHJveHkgPSAwIEFORCAnICtcclxuICAgICdlY206aXNWZXJzaW9uID0gMCBBTkQgJyArXHJcbiAgICAnZWNtOmN1cnJlbnRMaWZlQ3ljbGVTdGF0ZSAhPSBcXCdkZWxldGVkXFwnJztcclxuXHJcbi8qKlxyXG4gKiBQYXJzZXMgYSBOWFFMIHF1ZXJ5IGFuZCBhZGQgdGhlIGZpeGVkIHBhcnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU5YUUwobnhxbCkge1xyXG4gIHZhciByZXN1bHQgPSBueHFsO1xyXG4gIHRyeSB7XHJcbiAgICB2YXIgcXVlcnkgPSBuZXcgTlhRTFF1ZXJ5KG54cWwpO1xyXG4gICAgcXVlcnkuYWRkV2hlcmVDbGF1c2UgPSBRVUVSWV9GSVhFRF9QQVJUO1xyXG4gICAgcmVzdWx0ID0gcXVlcnkudG9TdHJpbmcoKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn0iLCIvKlxyXG4gKiAoQykgQ29weXJpZ2h0IDIwMTQgTnV4ZW8gU0EgKGh0dHA6Ly9udXhlby5jb20vKSBhbmQgY29udHJpYnV0b3JzLlxyXG4gKlxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLiBUaGlzIHByb2dyYW0gYW5kIHRoZSBhY2NvbXBhbnlpbmcgbWF0ZXJpYWxzXHJcbiAqIGFyZSBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxyXG4gKiAoTEdQTCkgdmVyc2lvbiAyLjEgd2hpY2ggYWNjb21wYW5pZXMgdGhpcyBkaXN0cmlidXRpb24sIGFuZCBpcyBhdmFpbGFibGUgYXRcclxuICogaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2xncGwtMi4xLmh0bWxcclxuICpcclxuICogVGhpcyBsaWJyYXJ5IGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXHJcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXHJcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlVcclxuICogTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogQ29udHJpYnV0b3JzOlxyXG4gKiAgICAgTmVsc29uIFNpbHZhIDxuZWxzb24uc2lsdmFAaW5ldm8ucHQ+XHJcbiAqL1xyXG5pbXBvcnQge0Nvbm5lY3Rpb259IGZyb20gJy4vY29ubmVjdGlvbic7XHJcblxyXG5jbGFzcyBXaWRnZXQge1xyXG4gIGNvbnN0cnVjdG9yKGNvbm4sIGRlZmluaXRpb24pIHtcclxuICAgIHRoaXMuY29ubiA9IGNvbm47XHJcbiAgICB0aGlzLndpZGdldCA9IGRlZmluaXRpb247XHJcblxyXG4gICAgaWYgKCF0aGlzLndpZGdldC5maWVsZHMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE8obmZncyk6IEhhbmRsZSBtdWx0aXBsZSBmaWVsZHNcclxuICAgIHRoaXMuZmllbGQgPSB0aGlzLndpZGdldC5maWVsZHNbMF0uZmllbGROYW1lO1xyXG5cclxuICAgIC8vIFJlbmFtZSBkYXRhWydzY2hlbWEnXVsncHJvcGVydHknXSB0byBkYXRhLnNjaGVtYS5wcm9wZXJ0eVxyXG4gICAgdGhpcy5maWVsZCA9IHRoaXMuZmllbGQucmVwbGFjZSgvXFxbJy9nLCAnLicpLnJlcGxhY2UoLyddL2csICcnKTtcclxuXHJcbiAgICAvLyBJbiBhIGxpc3RpbmcsIHRoZSBsYXlvdXQgaXMgbm90IHVzdWFsbHkgcmVuZGVyZWQgb24gdGhlIGRvY3VtZW50LCBidXQgb24gYSBQYWdlU2VsZWN0aW9uIGVsZW1lbnQsXHJcbiAgICAvLyB3cmFwcGluZyB0aGUgIERvY3VtZW50TW9kZWwgdG8gaGFuZGxlIHNlbGVjdGlvbiBpbmZvcm1hdGlvbi5cclxuICAgIC8vIFNvIGZpZWxkIGJpbmRpbmcgd2lsbCBsb29rIGxpa2UgZGF0YS5kYy50aXRsZSAgaW5zdGVhZCBvZiBkYzp0aXRsZS5cclxuICAgIC8vIExldCdzIGZpeCB0aGF0OlxyXG4gICAgaWYgKHRoaXMuZmllbGQuc3RhcnRzV2l0aCgnZGF0YS4nKSkge1xyXG4gICAgICB0aGlzLmZpZWxkID0gdGhpcy5maWVsZC5zdWJzdHIoNSkucmVwbGFjZSgnLicsICc6Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpIHsgcmV0dXJuIHRoaXMud2lkZ2V0Lm5hbWU7IH1cclxuICBnZXQgbGFiZWwoKSB7IHJldHVybiB0aGlzLndpZGdldC5sYWJlbHMuYW55OyB9XHJcbiAgZ2V0IHR5cGUoKSB7IHJldHVybiB0aGlzLndpZGdldC50eXBlOyB9XHJcbiAgc2V0IHR5cGUodCkgeyB0aGlzLndpZGdldC50eXBlID0gdDsgfVxyXG4gIGdldCBwcm9wZXJ0aWVzKCkgeyByZXR1cm4gKHRoaXMud2lkZ2V0LnByb3BlcnRpZXMpID8gdGhpcy53aWRnZXQucHJvcGVydGllcy5hbnkgOiB7fTsgfVxyXG4gIHNldCBwcm9wZXJ0aWVzKHApIHsgdGhpcy53aWRnZXQucHJvcGVydGllcyA9IHA7IH1cclxufVxyXG5cclxuZXhwb3J0IHtXaWRnZXR9O1xyXG4iLCIvKlxyXG4gKiAoQykgQ29weXJpZ2h0IDIwMTQgTnV4ZW8gU0EgKGh0dHA6Ly9udXhlby5jb20vKSBhbmQgY29udHJpYnV0b3JzLlxyXG4gKlxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLiBUaGlzIHByb2dyYW0gYW5kIHRoZSBhY2NvbXBhbnlpbmcgbWF0ZXJpYWxzXHJcbiAqIGFyZSBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxyXG4gKiAoTEdQTCkgdmVyc2lvbiAyLjEgd2hpY2ggYWNjb21wYW5pZXMgdGhpcyBkaXN0cmlidXRpb24sIGFuZCBpcyBhdmFpbGFibGUgYXRcclxuICogaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2xncGwtMi4xLmh0bWxcclxuICpcclxuICogVGhpcyBsaWJyYXJ5IGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXHJcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXHJcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlVcclxuICogTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogQ29udHJpYnV0b3JzOlxyXG4gKiAgICAgTmVsc29uIFNpbHZhIDxuZWxzb24uc2lsdmFAaW5ldm8ucHQ+XHJcbiAqL1xyXG5pbXBvcnQge1dJREdFVFMsIFdJREdFVF9UWVBFU30gZnJvbSAnLi93aWRnZXRzJztcclxuXHJcbiAvKipcclxuICAqIEhhbmRzb250YWJsZSBjb2x1bW4gb3B0aW9uc1xyXG4gICovXHJcbmNsYXNzIENvbHVtbiB7XHJcbiAgY29uc3RydWN0b3IoIGNvbm5lY3Rpb24sIGRlZiwgd2lkZ2V0LCBkZWZhdWx0UmVuZGVyZXIgPSBIYW5kc29udGFibGUucmVuZGVyZXJzLlRleHRSZW5kZXJlcikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7Y29ubmVjdGlvbiwgZGVmLCB3aWRnZXQsIGRlZmF1bHRSZW5kZXJlcn0pO1xyXG5cclxuICAgIC8vIFRoZXNlIHdpZGdldHMgdXNlIGFsbCB0aGUgcHJvcGVydGllcyBmb3IgcmVuZGVyaW5nXHJcbiAgICAvLyBzbyB3ZSBtdXN0IGVpdGhlciByZXBsaWNhdGUgdGhlIGxvZ2ljIGhlcmUgb3IganVzdCBmYWxsIGJhY2sgdG8gdGhlIHNvcnQgcHJvcGVydHlcclxuICAgIGlmICh0aGlzLndpZGdldC5maWVsZCA9PT0gJ2RhdGEnKSB7XHJcbiAgICAgIHRoaXMud2lkZ2V0LmZpZWxkID0gdGhpcy5kZWYucHJvcGVydGllcy5hbnkuc29ydFByb3BlcnR5TmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNaXhpbiB3aWRnZXRcclxuICAgIGlmIChXSURHRVRTW3RoaXMud2lkZ2V0Lm5hbWVdKSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy53aWRnZXQsIFdJREdFVFNbd2lkZ2V0Lm5hbWVdKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNaXhpbiBjdXN0b20gZmllbGQgd2lkZ2V0XHJcbiAgICBjb25zdCBmaWVsZCA9IHRoaXMud2lkZ2V0LmZpZWxkO1xyXG4gICAgaWYgKENVU1RPTV9GSUVMRFNbZmllbGRdICYmIENVU1RPTV9GSUVMRFNbZmllbGRdLndpZGdldCkge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMud2lkZ2V0LCBDVVNUT01fRklFTERTW2ZpZWxkXS53aWRnZXQpO1xyXG4gICAgfVxyXG4gICAgaWYgKENVU1RPTV9GSUVMRFNbZmllbGRdICYmIENVU1RPTV9GSUVMRFNbZmllbGRdLnByb3BlcnRpZXMpIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLndpZGdldC5wcm9wZXJ0aWVzLCBDVVNUT01fRklFTERTW2ZpZWxkXS5wcm9wZXJ0aWVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNaXhpbiB3aWRnZXQgdHlwZVxyXG4gICAgaWYgKFdJREdFVF9UWVBFU1t0aGlzLndpZGdldC50eXBlXSkge1xyXG4gICAgICAvLyByZXNldCBjdXN0b20gdHlwZSBzaW5jZSBpdCdzIG5vdCBrbm93biB0byBoYW5kc29udGFibGVcclxuICAgICAgY29uc3QgdHlwZSA9IHRoaXMud2lkZ2V0LnR5cGU7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLndpZGdldC50eXBlO1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMud2lkZ2V0LCBXSURHRVRfVFlQRVNbdHlwZV0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ha2Ugd2lkZ2V0IHByb3BlcnRpZXMgYXZhaWxhYmxlIGluIHRoZSBjb2x1bW5zXHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMud2lkZ2V0KTtcclxuXHJcbiAgICAvLyBCaW5kIHRoZSByZW5kZXJlciB0byB0aGlzIGNvbHVtblxyXG4gICAgaWYgKHRoaXMucmVuZGVyZXIpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlciA9IHRoaXMucmVuZGVyZXIuYmluZCh0aGlzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIgPSBkZWZhdWx0UmVuZGVyZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZGF0YSgpIHtcclxuICAgIGlmICghdGhpcy5maWVsZCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIC8vIENoZWNrIGZvciBzcGVjaWFsIGZpZWxkIG92ZXJyaWRlc1xyXG4gICAgaWYgKENVU1RPTV9GSUVMRFNbdGhpcy5maWVsZF0gJiYgQ1VTVE9NX0ZJRUxEU1t0aGlzLmZpZWxkXS5maWVsZCkge1xyXG4gICAgICByZXR1cm4gQ1VTVE9NX0ZJRUxEU1t0aGlzLmZpZWxkXS5maWVsZDtcclxuICAgIH1cclxuICAgIHJldHVybiBgcHJvcGVydGllcy4ke3RoaXMuZmllbGR9YDtcclxuICB9XHJcblxyXG4gIGdldCBoZWFkZXIoKSB7XHJcbiAgICB2YXIgaGVhZGVyID0gdGhpcy5kZWYucHJvcGVydGllcy5hbnkubGFiZWwgfHwgdGhpcy5maWVsZDtcclxuICAgIGlmICh0aGlzLmRlZi5wcm9wZXJ0aWVzLmFueS51c2VGaXJzdFdpZGdldExhYmVsQXNDb2x1bW5IZWFkZXIpIHtcclxuICAgICAgaGVhZGVyID0gdGhpcy53aWRnZXQubGFiZWwgfHwgdGhpcy53aWRnZXQubGFiZWxzLmFueTtcclxuICAgIH1cclxuICAgIHJldHVybiBoZWFkZXI7XHJcbiAgfVxyXG5cclxuICBnZXQgaGFzU3VwcG9ydGVkV2lkZ2V0VHlwZSgpIHtcclxuICAgIHJldHVybiAhIVdJREdFVF9UWVBFU1t0aGlzLndpZGdldC50eXBlXTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IENVU1RPTV9GSUVMRFMgPSB7XHJcblxyXG4gIC8vIHN5c3RlbSBtZXRhZGF0YSBmaWVsZHNcclxuICAnZGM6Y3JlYXRlZCc6IHtcclxuICAgIHdpZGdldDoge1xyXG4gICAgICByZWFkT25seTogdHJ1ZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgJ2RjOm1vZGlmaWVkJzoge1xyXG4gICAgd2lkZ2V0OiB7XHJcbiAgICAgIHJlYWRPbmx5OiB0cnVlXHJcbiAgICB9XHJcbiAgfSxcclxuICAnZGM6Y3JlYXRvcic6IHtcclxuICAgIHdpZGdldDoge1xyXG4gICAgICByZWFkT25seTogdHJ1ZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgJ2RjOmxhc3RDb250cmlidXRvcic6IHtcclxuICAgIHdpZGdldDoge1xyXG4gICAgICByZWFkT25seTogdHJ1ZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgJ2RjOmNvbnRyaWJ1dG9ycyc6IHtcclxuICAgIHdpZGdldDoge1xyXG4gICAgICByZWFkT25seTogdHJ1ZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgJ2N1cnJlbnRMaWZlQ3ljbGVTdGF0ZSc6IHtcclxuICAgIHdpZGdldDoge1xyXG4gICAgICByZWFkT25seTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGZpZWxkOiAnc3RhdGUnXHJcbiAgfSxcclxuICAndHlwZSc6IHtcclxuICAgIHdpZGdldDoge1xyXG4gICAgICByZWFkT25seTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGZpZWxkOiAndHlwZSdcclxuICB9LFxyXG4gICd2ZXJzaW9uTGFiZWwnOiB7XHJcbiAgICB3aWRnZXQ6IHtcclxuICAgICAgcmVhZE9ubHk6IHRydWVcclxuICAgIH0sXHJcbiAgICBmaWVsZDogJ3ZlcnNpb25MYWJlbCdcclxuICB9LFxyXG4gICdkYzpuYXR1cmUnOiB7XHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgIGRibDEwbjogZmFsc2UsXHJcbiAgICAgIGxvY2FsaXplOiB0cnVlXHJcbiAgICB9XHJcbiAgfSxcclxuICAndGh1bWI6dGh1bWJuYWlsJzoge1xyXG4gICAgd2lkZ2V0OiB7XHJcbiAgICAgIHJlYWRPbmx5OiB0cnVlLFxyXG4gICAgICB0eXBlOiAnaW1hZ2UnXHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCB7Q29sdW1ufTtcclxuIiwiLypcclxuICogKEMpIENvcHlyaWdodCAyMDE0IE51eGVvIFNBIChodHRwOi8vbnV4ZW8uY29tLykgYW5kIGNvbnRyaWJ1dG9ycy5cclxuICpcclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC4gVGhpcyBwcm9ncmFtIGFuZCB0aGUgYWNjb21wYW55aW5nIG1hdGVyaWFsc1xyXG4gKiBhcmUgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcclxuICogKExHUEwpIHZlcnNpb24gMi4xIHdoaWNoIGFjY29tcGFuaWVzIHRoaXMgZGlzdHJpYnV0aW9uLCBhbmQgaXMgYXZhaWxhYmxlIGF0XHJcbiAqIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9sZ3BsLTIuMS5odG1sXHJcbiAqXHJcbiAqIFRoaXMgbGlicmFyeSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxyXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxyXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VXHJcbiAqIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIENvbnRyaWJ1dG9yczpcclxuICogICAgIE5lbHNvbiBTaWx2YSA8bmVsc29uLnNpbHZhQGluZXZvLnB0PlxyXG4gKi9cclxuaW1wb3J0IHtTZWxlY3QyRWRpdG9yfSBmcm9tICcuL3NlbGVjdDInO1xyXG5pbXBvcnQge0RpcmVjdG9yeX0gZnJvbSAnLi4vLi4vbnV4ZW8vcnBjL2RpcmVjdG9yeSc7XHJcblxyXG5jbGFzcyBEaXJlY3RvcnlFZGl0b3IgZXh0ZW5kcyBTZWxlY3QyRWRpdG9yIHtcclxuXHJcbiAgLy8gTGV0J3Mgb3ZlcnJpZGUgcHJlcGFyZSBhbmQganVzdCBwYXNzIHNldCB0aGUgc2VsZWN0MiBvcHRpb25zIG91cnNlbHZlc1xyXG4gIHByZXBhcmUocm93LCBjb2wsIHByb3AsIHRkLCBvcmlnaW5hbFZhbHVlLCBjZWxsUHJvcGVydGllcykge1xyXG4gICAgLy8gc2V0dXAgdGhlIGxhYmVsIGNhY2hlXHJcbiAgICB0aGlzLl9sYWJlbHMgPSB7fTtcclxuXHJcbiAgICAvLyBmbGF0dGVuIG91ciB2YWx1ZXMgdG8gYSBsaXN0IG9mIGlkc1xyXG4gICAgdmFyIHZhbHVlID0gKEFycmF5LmlzQXJyYXkob3JpZ2luYWxWYWx1ZSkpID8gb3JpZ2luYWxWYWx1ZS5tYXAodGhpcy5wcmVwYXJlRW50aXR5LmJpbmQodGhpcykpIDogdGhpcy5wcmVwYXJlRW50aXR5KG9yaWdpbmFsVmFsdWUpO1xyXG5cclxuICAgIHN1cGVyLnByZXBhcmUocm93LCBjb2wsIHByb3AsIHRkLCB2YWx1ZSwgY2VsbFByb3BlcnRpZXMpO1xyXG4gIH1cclxuXHJcbiAgLy8gZmxhdHRlbiBlbnRpdGllcyB0byBwbGFpbiBpZHMgYW5kIGNhY2hlIHRoZSBsYWJlbHNcclxuICBwcmVwYXJlRW50aXR5KGVudGl0eSkge1xyXG4gICAgaWYgKCFlbnRpdHkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlbWVtYmVyIGlmIHdlIGFyZSBoYW5kbGluZyBkaXJlY3RvcnlFbnRyaWVzIG9yIGp1c3Qgc3RyaW5nc1xyXG4gICAgdGhpcy5faXNEaXJlY3RvcnlFbnRyeSA9IGVudGl0eVsnZW50aXR5LXR5cGUnXSA9PT0gJ2RpcmVjdG9yeUVudHJ5JztcclxuICAgIGlmICghdGhpcy5faXNEaXJlY3RvcnlFbnRyeSkge1xyXG4gICAgICByZXR1cm4gZW50aXR5O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBpZDtcclxuICAgIGlmIChlbnRpdHkucHJvcGVydGllcy5wYXJlbnQpIHtcclxuICAgICAgaWQgPSBgJHtlbnRpdHkucHJvcGVydGllcy5wYXJlbnQucHJvcGVydGllcy5pZH0vJHtlbnRpdHkucHJvcGVydGllcy5pZH1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWQgPSBlbnRpdHkucHJvcGVydGllcy5pZDtcclxuICAgIH1cclxuICAgIHRoaXMuY2VsbExhYmVsc1tpZF0gPSB0aGlzLmNlbGxMYWJlbHNbaWRdIHx8IGdldEVudHJ5TGFiZWwoZW50aXR5LCB0aGlzLmxhbmd1YWdlKTtcclxuICAgIHJldHVybiBpZDtcclxuICB9XHJcblxyXG4gIC8vIGNyZWF0ZSBkaXJlY3RvcnkgZW50cmllcyBhZ2FpbiBvbiBzYXZlXHJcbiAgc2F2ZVZhbHVlKHZhbCwgY3RybERvd24pIHtcclxuICAgIHZhciB2YWx1ZSA9IHZhbFswXVswXTtcclxuXHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgLy8gaWYgd2UgYXJlIHdvcmtpbmcgd2l0aCBkaXJlY3RvcnlFbnRyaWVzIGxldHMgYnVpbGQgdGhlbSBmb3Igc2F2aW5nXHJcbiAgICAgIGlmICh0aGlzLl9pc0RpcmVjdG9yeUVudHJ5KSB7XHJcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICdlbnRpdHktdHlwZSc6ICdkaXJlY3RvcnlFbnRyeScsXHJcbiAgICAgICAgICAgIGRpcmVjdG9yeU5hbWU6IHRoaXMuZGlyZWN0b3J5TmFtZSxcclxuICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gdW53cmFwIHRoZSBtYXAgcmVzdWx0IGlmIG5vdCBtdWx0aXBsZVxyXG4gICAgICAgIGlmICghdGhpcy5jb2x1bW4ubXVsdGlwbGUpIHtcclxuICAgICAgICAgIHZhbHVlID0gdmFsdWVbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWx1ZSA9IHRoaXMuY29sdW1uLm11bHRpcGxlID8gW10gOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLnNhdmVWYWx1ZShbW3ZhbHVlXV0sIGN0cmxEb3duKTtcclxuICB9XHJcblxyXG4gIHF1ZXJ5KGNvbm5lY3Rpb24sIHByb3BlcnRpZXMsIHRlcm0pIHtcclxuICAgIHZhciBkaXJlY3RvcnkgPSBuZXcgRGlyZWN0b3J5KGNvbm5lY3Rpb24pOyAvLyBEaXJlY3RvcnkgbmFtZSBpcyBhIHdpZGdldCBwcm9wZXJ0eVxyXG4gICAgLy8gU2V0IHRoZSBwcm9wZXJ0aWVzXHJcbiAgICBPYmplY3QuYXNzaWduKGRpcmVjdG9yeSwgcHJvcGVydGllcyk7XHJcbiAgICAvLyBTZXQgdGhlIGxhbmd1YWdlXHJcbiAgICBkaXJlY3RvcnkubGFuZ3VhZ2UgPSB0aGlzLmxhbmd1YWdlIHx8ICdlbic7XHJcbiAgICAvLyBQZXJmb3JtIHRoZSBzZWFyY2hcclxuICAgIHJldHVybiBkaXJlY3Rvcnkuc2VhcmNoKHRlcm0pO1xyXG4gIH1cclxuXHJcbiAgLy8gV2hlbiBhIGRibDEwbiBlbnRyeSBpcyBzZWxlY3RlZCB3ZSdsbCBjYWNoZSB0aGUgbGFiZWxzIHRvIGJlIHVzZWRcclxuICAvLyBieSBvdXIgcmVuZGVyZXJcclxuICBvblNlbGVjdGVkKGV2dCkge1xyXG4gICAgdGhpcy5jZWxsTGFiZWxzW2V2dC5jaG9pY2UuY29tcHV0ZWRJZF0gPSBldnQuY2hvaWNlLmFic29sdXRlTGFiZWw7XHJcbiAgfVxyXG5cclxuICBnZXQgY2VsbE1ldGEoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5nZXRDZWxsTWV0YSh0aGlzLnJvdywgdGhpcy5jb2wpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNlbGxMYWJlbHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jZWxsTWV0YS5fbGFiZWxzID0gdGhpcy5jZWxsTWV0YS5fbGFiZWxzIHx8IHt9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxhbmd1YWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZ2V0U2V0dGluZ3MoKS5sYW5ndWFnZSB8fCAnZW4nO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbHVtbigpIHtcclxuICAgIHJldHVybiB0aGlzLmNlbGxQcm9wZXJ0aWVzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHdpZGdldCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbHVtbi53aWRnZXQ7XHJcbiAgfVxyXG5cclxuICBnZXQgZmllbGQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy53aWRnZXQuZmllbGQ7XHJcbiAgfVxyXG5cclxuICBnZXQgZGlyZWN0b3J5TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLndpZGdldC5wcm9wZXJ0aWVzLmRpcmVjdG9yeU5hbWU7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNEYmwxMG4oKSB7XHJcbiAgICByZXR1cm4gISF0aGlzLndpZGdldC5wcm9wZXJ0aWVzLmRibDEwbjtcclxuICB9XHJcblxyXG4gIGdldCBzb3VyY2VEYXRhKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZ2V0U291cmNlRGF0YUF0Um93KHRoaXMucm93KTtcclxuICB9XHJcblxyXG4gIHJlc3VsdEZvcm1hdHRlcihlbnRyeSkge1xyXG4gICAgcmV0dXJuIGVudHJ5LmRpc3BsYXlMYWJlbDtcclxuICB9XHJcblxyXG4gIGZvcm1hdHRlcihlbnRyeSkge1xyXG4gICAgdmFyIGxhYmVsID0gdGhpcy5jZWxsTGFiZWxzW2VudHJ5LmlkXSB8fCBlbnRyeS5hYnNvbHV0ZUxhYmVsO1xyXG4gICAgLy8gVGhpcyBpcyB1c2VkIGluIGluaXRTZWxlY3Rpb24gYW5kIGluIHRoaXMgY2FzZSB3ZSBkb24ndCBoYXZlICdkaXNwbGF5TGFiZWwnXHJcbiAgICBpZiAoIWxhYmVsICYmIHRoaXMuaXNEYmwxMG4pIHtcclxuICAgICAgbGFiZWwgPSBnZXRFbnRyeUxhYmVsKGVudHJ5LCB0aGlzLmxhbmd1YWdlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBsYWJlbCB8fCBlbnRyeS50ZXh0O1xyXG4gIH1cclxuXHJcbiAgZ2V0RW50cnlJZChpdGVtKSB7XHJcbiAgICBpZiAoaXRlbS5jb21wdXRlZElkKSB7XHJcbiAgICAgIHJldHVybiBpdGVtLmNvbXB1dGVkSWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gaXRlbS5pZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIGwxMG4gTGFiZWwgaGVscGVyc1xyXG5mdW5jdGlvbiBnZXRFbnRyeUxhYmVsKGVudHJ5LCBsYW5nID0gJ2VuJykge1xyXG4gIGlmIChlbnRyeS5wcm9wZXJ0aWVzKSB7XHJcbiAgICB2YXIgbGFiZWwgPSAnJztcclxuICAgIGlmIChlbnRyeS5wcm9wZXJ0aWVzLnBhcmVudCkge1xyXG4gICAgICBsYWJlbCA9IGdldEVudHJ5TGFiZWwoZW50cnkucHJvcGVydGllcy5wYXJlbnQsIGxhbmcpICsgJy8nO1xyXG4gICAgfVxyXG4gICAgbGFiZWwgKz0gKGVudHJ5LnByb3BlcnRpZXNbJ2xhYmVsXycgKyBsYW5nXSB8fCBlbnRyeS5wcm9wZXJ0aWVzLmxhYmVsIHx8IGVudHJ5LnByb3BlcnRpZXMuaWQpO1xyXG4gICAgcmV0dXJuIGxhYmVsO1xyXG4gIH1cclxuICByZXR1cm4gZW50cnk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERpcmVjdG9yeVJlbmRlcmVyKGluc3RhbmNlLCB0ZCwgcm93LCBjb2wsIHByb3AsIHZhbHVlLCBjZWxsUHJvcGVydGllcykge1xyXG4gIGlmICh2YWx1ZSkge1xyXG4gICAgdmFyIGxhbmcgPSBpbnN0YW5jZS5nZXRTZXR0aW5ncygpLmxhbmd1YWdlIHx8ICdlbic7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgIHZhbHVlID0gKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpID8gdmFsdWUuc3BsaXQoJywnKSA6IFt2YWx1ZV07XHJcbiAgICB9XHJcbiAgICB2YXIgbGFiZWxzID0gaW5zdGFuY2UuZ2V0Q2VsbE1ldGEocm93LCBjb2wpLl9sYWJlbHM7XHJcbiAgICBhcmd1bWVudHNbNV0gPSB2YWx1ZS5tYXAoKHYpID0+IHtcclxuICAgICAgdmFyIGtleSA9IHYucHJvcGVydGllcyA/IHYucHJvcGVydGllcy5pZCA6IHY7XHJcbiAgICAgIHJldHVybiAobGFiZWxzICYmIGxhYmVsc1trZXldKSA/IGxhYmVsc1trZXldIDogZ2V0RW50cnlMYWJlbCh2LCBsYW5nKTtcclxuICAgIH0pLmpvaW4oJywnKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcbiAgfVxyXG4gIGNlbGxQcm9wZXJ0aWVzLmRlZmF1bHRSZW5kZXJlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQge0RpcmVjdG9yeUVkaXRvciwgRGlyZWN0b3J5UmVuZGVyZXJ9O1xyXG4iLCIvKlxyXG4gKiAoQykgQ29weXJpZ2h0IDIwMTQgTnV4ZW8gU0EgKGh0dHA6Ly9udXhlby5jb20vKSBhbmQgY29udHJpYnV0b3JzLlxyXG4gKlxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLiBUaGlzIHByb2dyYW0gYW5kIHRoZSBhY2NvbXBhbnlpbmcgbWF0ZXJpYWxzXHJcbiAqIGFyZSBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxyXG4gKiAoTEdQTCkgdmVyc2lvbiAyLjEgd2hpY2ggYWNjb21wYW5pZXMgdGhpcyBkaXN0cmlidXRpb24sIGFuZCBpcyBhdmFpbGFibGUgYXRcclxuICogaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2xncGwtMi4xLmh0bWxcclxuICpcclxuICogVGhpcyBsaWJyYXJ5IGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXHJcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXHJcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlVcclxuICogTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogQ29udHJpYnV0b3JzOlxyXG4gKiAgICAgTmVsc29uIFNpbHZhIDxuZWxzb24uc2lsdmFAaW5ldm8ucHQ+XHJcbiAqL1xyXG5pbXBvcnQge1NlbGVjdDJFZGl0b3J9IGZyb20gJy4vc2VsZWN0Mic7XHJcbmltcG9ydCB7UXVlcnl9IGZyb20gJy4uLy4uL251eGVvL3JwYy9xdWVyeSc7XHJcblxyXG5jbGFzcyBEb2N1bWVudEVkaXRvciBleHRlbmRzIFNlbGVjdDJFZGl0b3Ige1xyXG5cclxuICBwcmVwYXJlKHJvdywgY29sLCBwcm9wLCB0ZCwgb3JpZ2luYWxWYWx1ZSwgY2VsbFByb3BlcnRpZXMpIHtcclxuICAgIC8vIGZsYXR0ZW4gb3VyIHZhbHVlcyB0byBhIGxpc3Qgb2YgaWRzXHJcbiAgICB2YXIgdmFsdWUgPSAoQXJyYXkuaXNBcnJheShvcmlnaW5hbFZhbHVlKSkgPyBvcmlnaW5hbFZhbHVlLm1hcCgodSkgPT4gdGhpcy5nZXRFbnRyeUlkKHUpKSA6IHRoaXMuZ2V0RW50cnlJZChvcmlnaW5hbFZhbHVlKTtcclxuICAgIHN1cGVyLnByZXBhcmUocm93LCBjb2wsIHByb3AsIHRkLCB2YWx1ZSwgY2VsbFByb3BlcnRpZXMpO1xyXG4gIH1cclxuXHJcbiAgcXVlcnkoY29ubmVjdGlvbiwgcHJvcGVydGllcywgdGVybSkge1xyXG4gICAgdmFyIHEgPSBuZXcgUXVlcnkoY29ubmVjdGlvbik7XHJcbiAgICAvLyBTZXQgdGhlIHByb3BlcnRpZXNcclxuICAgIE9iamVjdC5hc3NpZ24ocS5wYXJhbXMsIHByb3BlcnRpZXMpO1xyXG4gICAgcS5wYXJhbXMuc2VhcmNoVGVybSA9IHRlcm07XHJcbiAgICBxLnBhZ2VQcm92aWRlciA9IChwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMucGFnZVByb3ZpZGVyTmFtZSkgfHwgJ2RlZmF1bHRfZG9jdW1lbnRfc3VnZ2VzdGlvbic7XHJcbiAgICBxLnBhZ2UgPSAwO1xyXG4gICAgcS5wYWdlU2l6ZSA9IDIwO1xyXG4gICAgLy8gRXhlY3V0ZSB0aGUgcXVlcnlcclxuICAgIHJldHVybiBxLnJ1bigpLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0LmVudHJpZXMpO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0dGVyKGRvYykge1xyXG4gICAgcmV0dXJuIGRvYy50ZXh0IHx8IGRvYy50aXRsZTtcclxuICB9XHJcblxyXG4gIGdldEVudHJ5SWQoaXRlbSkge1xyXG4gICAgcmV0dXJuIGl0ZW0udWlkO1xyXG4gIH1cclxuXHJcbiAgLy8gY3JlYXRlIGRvY3VtZW50cyBhZ2FpbiBvbiBzYXZlXHJcbiAgc2F2ZVZhbHVlKHZhbCwgY3RybERvd24pIHtcclxuICAgIHZhciB2YWx1ZSA9IHZhbFswXVswXTtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uICh1aWQpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgJ2VudGl0eS10eXBlJzogJ2RvY3VtZW50JyxcclxuICAgICAgICAgIHVpZFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgIC8vIHVud3JhcCB0aGUgbWFwIHJlc3VsdCBpZiBub3QgbXVsaXBsZVxyXG4gICAgICBpZiAoIXRoaXMuY2VsbFByb3BlcnRpZXMubXVsdGlwbGUpIHtcclxuICAgICAgICB2YWx1ZSA9IHZhbHVlWzBdO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWx1ZSA9IHRoaXMuY2VsbFByb3BlcnRpZXMubXVsdGlwbGUgPyBbXSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIuc2F2ZVZhbHVlKFtbdmFsdWVdXSwgY3RybERvd24pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gRG9jdW1lbnRSZW5kZXJlcihpbnN0YW5jZSwgdGQsIHJvdywgY29sLCBwcm9wLCB2YWx1ZSwgY2VsbFByb3BlcnRpZXMpIHtcclxuICBpZiAodmFsdWUpIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgdmFsdWUgPSBbdmFsdWVdO1xyXG4gICAgfVxyXG4gICAgYXJndW1lbnRzWzVdID0gdmFsdWUubWFwKChkKSA9PiAgZC51aWQpLmpvaW4oJywnKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcbiAgfVxyXG4gIGNlbGxQcm9wZXJ0aWVzLmRlZmF1bHRSZW5kZXJlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQge0RvY3VtZW50RWRpdG9yLCBEb2N1bWVudFJlbmRlcmVyfTtcclxuIiwiLypcclxuICogKEMpIENvcHlyaWdodCAyMDE0IE51eGVvIFNBIChodHRwOi8vbnV4ZW8uY29tLykgYW5kIGNvbnRyaWJ1dG9ycy5cclxuICpcclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC4gVGhpcyBwcm9ncmFtIGFuZCB0aGUgYWNjb21wYW55aW5nIG1hdGVyaWFsc1xyXG4gKiBhcmUgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcclxuICogKExHUEwpIHZlcnNpb24gMi4xIHdoaWNoIGFjY29tcGFuaWVzIHRoaXMgZGlzdHJpYnV0aW9uLCBhbmQgaXMgYXZhaWxhYmxlIGF0XHJcbiAqIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9sZ3BsLTIuMS5odG1sXHJcbiAqXHJcbiAqIFRoaXMgbGlicmFyeSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxyXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxyXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VXHJcbiAqIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIENvbnRyaWJ1dG9yczpcclxuICogICAgIG1vYnJlYnNraVxyXG4gKiAgICAgSmFja2llIEFsZGFtYSA8amFsZGFtYUBudXhlby5jb20+XHJcbiAqL1xyXG5cclxuY29uc3QgSW1hZ2VSZW5kZXJlciA9IChpbnN0YW5jZSwgdGQsIHJvdywgY29sLCBwcm9wLCB2YWx1ZSwgY2VsbFByb3BlcnRpZXMpID0+IHtcclxuXHRpZiAodmFsdWUgJiYgdmFsdWUuZGF0YSkge1xyXG5cdFx0dmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cdFx0aW1nLnNyYyA9IHZhbHVlLmRhdGE7XHJcbiAgICBpZiAoY2VsbFByb3BlcnRpZXMud2lkdGgpIHsgaW1nLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBjZWxsUHJvcGVydGllcy5oZWlnaHQpOyB9XHJcbiAgICBpZiAoY2VsbFByb3BlcnRpZXMuaGVpZ2h0KSB7IGltZy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGNlbGxQcm9wZXJ0aWVzLmhlaWdodCk7IH1cclxuXHRcdEhhbmRzb250YWJsZS5Eb20uZW1wdHkodGQpO1xyXG5cdFx0dGQuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHR9XHJcblx0cmV0dXJuIHRkO1xyXG59O1xyXG5cclxuZXhwb3J0IHtJbWFnZVJlbmRlcmVyfTtcclxuIiwiLypcclxuICogKEMpIENvcHlyaWdodCAyMDE0IE51eGVvIFNBIChodHRwOi8vbnV4ZW8uY29tLykgYW5kIGNvbnRyaWJ1dG9ycy5cclxuICpcclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC4gVGhpcyBwcm9ncmFtIGFuZCB0aGUgYWNjb21wYW55aW5nIG1hdGVyaWFsc1xyXG4gKiBhcmUgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcclxuICogKExHUEwpIHZlcnNpb24gMi4xIHdoaWNoIGFjY29tcGFuaWVzIHRoaXMgZGlzdHJpYnV0aW9uLCBhbmQgaXMgYXZhaWxhYmxlIGF0XHJcbiAqIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9sZ3BsLTIuMS5odG1sXHJcbiAqXHJcbiAqIFRoaXMgbGlicmFyeSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxyXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxyXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VXHJcbiAqIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIENvbnRyaWJ1dG9yczpcclxuICogICAgIE5lbHNvbiBTaWx2YSA8bmVsc29uLnNpbHZhQGluZXZvLnB0PlxyXG4gKi9cclxuXHJcbmNsYXNzIFNlbGVjdDJFZGl0b3IgZXh0ZW5kcyBIYW5kc29udGFibGUuZWRpdG9ycy5TZWxlY3QyRWRpdG9yIHtcclxuICBjb25zdHJ1Y3RvcihpbnN0YW5jZSkge1xyXG4gICAgc3VwZXIoaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgLy8gTGV0J3Mgb3ZlcnJpZGUgcHJlcGFyZSBhbmQganVzdCBwYXNzIHNldCB0aGUgc2VsZWN0MiBvcHRpb25zIG91cnNlbHZlc1xyXG4gIHByZXBhcmUocm93LCBjb2wsIHByb3AsIHRkLCBvcmlnaW5hbFZhbHVlLCBjZWxsUHJvcGVydGllcykge1xyXG5cclxuICAgIC8vIGNlbGxQcm9wZXJ0aWVzIGlzIGFuIGluc3RhbmNlIG91ciBvdXIgQ29sdW1uXHJcbiAgICB2YXIgd2lkZ2V0ID0gY2VsbFByb3BlcnRpZXMud2lkZ2V0LFxyXG4gICAgICAgIGNvbm5lY3Rpb24gPSBjZWxsUHJvcGVydGllcy5jb25uZWN0aW9uO1xyXG5cclxuICAgIEhhbmRzb250YWJsZS5lZGl0b3JzLlRleHRFZGl0b3IucHJvdG90eXBlLnByZXBhcmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHJcbiAgICB2YXIgaXNNdWx0aXBsZSA9IGNlbGxQcm9wZXJ0aWVzLm11bHRpcGxlO1xyXG5cclxuICAgIC8vIFNlZSA6XHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbnV4ZW8vbnV4ZW8tZmVhdHVyZXMvYmxvYi9tYXN0ZXIvbnV4ZW8tcGxhdGZvcm0tdWktc2VsZWN0Mi9zcmMvbWFpbi9yZXNvdXJjZXMvd2ViL251eGVvLndhci9zY3JpcHRzL3NlbGVjdDIvbnV4ZW8tc2VsZWN0Mi5qc1xyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL251eGVvL251eGVvLWZlYXR1cmVzL2Jsb2IvbWFzdGVyL251eGVvLXBsYXRmb3JtLXVpLXNlbGVjdDIvc3JjL21haW4vamF2YS9vcmcvbnV4ZW8vZWNtL3BsYXRmb3JtL3VpL3NlbGVjdDIvU2VsZWN0MkFjdGlvbnNCZWFuLmphdmFcclxuICAgIHRoaXMub3B0aW9ucyA9IHtcclxuICAgICAgcXVlcnk6IChxKSA9PiB7XHJcbiAgICAgICAgdGhpcy5xdWVyeShjb25uZWN0aW9uLCB3aWRnZXQucHJvcGVydGllcywgcS50ZXJtKVxyXG4gICAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7IHEuY2FsbGJhY2soe3Jlc3VsdHM6IHJlc3VsdHN9KTsgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGRyb3Bkb3duQXV0b1dpZHRoOiB0cnVlLFxyXG4gICAgICBhbGxvd0NsZWFyOiB0cnVlLFxyXG4gICAgICB3aWR0aDogJ3Jlc29sdmUnLFxyXG4gICAgICBtaW5pbXVtSW5wdXRMZW5ndGg6IGNlbGxQcm9wZXJ0aWVzLm1pbmltdW1JbnB1dExlbmd0aCB8fCAwLFxyXG4gICAgICBmb3JtYXRSZXN1bHQ6IHRoaXMucmVzdWx0Rm9ybWF0dGVyLmJpbmQodGhpcyksXHJcbiAgICAgIGZvcm1hdFNlbGVjdGlvbjogdGhpcy5zZWxlY3Rpb25Gb3JtYXR0ZXIuYmluZCh0aGlzKSxcclxuICAgICAgbXVsdGlwbGU6IGlzTXVsdGlwbGUsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiAnU2VsZWN0IGEgdmFsdWUnLFxyXG4gICAgICBpbml0U2VsZWN0aW9uOiB0aGlzLmluaXRTZWxlY3Rpb24oaXNNdWx0aXBsZSkuYmluZCh0aGlzKSxcclxuICAgICAgaWQ6IHRoaXMuZ2V0RW50cnlJZFxyXG4gICAgfTtcclxuXHJcbiAgfVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgc3VwZXIub3BlbigpO1xyXG4gICAgdGhpcy4kdGV4dGFyZWEub24oJ3NlbGVjdGVkJywgdGhpcy5vblNlbGVjdGVkLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy4kdGV4dGFyZWEub24oJ3NlbGVjdDItc2VsZWN0ZWQnLCB0aGlzLm9uU2VsZWN0ZWQuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLiR0ZXh0YXJlYS5vbignc2VsZWN0Mi1yZW1vdmVkJywgdGhpcy5vblJlbW92ZWQuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdGVkKGV2dCkge1xyXG4gICAgLy9cclxuICB9XHJcblxyXG4gIG9uUmVtb3ZlZChldnQpIHtcclxuICAgIC8vXHJcbiAgfVxyXG5cclxuICAvLyB1c2Ugc2FtZSBmb3JtYXR0ZXIgYnkgZGVmYXVsdFxyXG4gIHJlc3VsdEZvcm1hdHRlcihlbnRyeSkgeyByZXR1cm4gdGhpcy5mb3JtYXR0ZXIoZW50cnkpOyB9XHJcbiAgc2VsZWN0aW9uRm9ybWF0dGVyKGVudHJ5KSB7IHJldHVybiB0aGlzLmZvcm1hdHRlcihlbnRyeSk7IH1cclxuXHJcbiAgaW5pdFNlbGVjdGlvbihpc011bHRpcGxlKSB7XHJcbiAgICBpZiAoIWlzTXVsdGlwbGUpIHtcclxuICAgICAgcmV0dXJuIChlbGVtZW50LCBjYWxsYmFjaykgPT4gY2FsbGJhY2soXHJcbiAgICAgICAge2lkOiBlbGVtZW50LnZhbCgpLCB0ZXh0OiB0aGlzLmdldFNlbGVjdGlvblRleHQoZWxlbWVudC52YWwoKSl9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKGVsZW1lbnQsIGNhbGxiYWNrKSA9PiBjYWxsYmFjayhcclxuICAgICAgZWxlbWVudC52YWwoKS5zcGxpdCgnLCcpLm1hcCgodikgPT4gKHtpZDogdiwgdGV4dDogdGhpcy5nZXRTZWxlY3Rpb25UZXh0KHYpfSkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0aW9uVGV4dCh2YWwpIHtcclxuICAgIHJldHVybiB2YWw7XHJcbiAgfVxyXG5cclxuICBnZXRFbnRyeUlkKGl0ZW0pIHtcclxuICAgIHJldHVybiBpdGVtLmlkO1xyXG4gIH1cclxuXHJcbiAgLy8gTXVzdCByZXR1cm4gYSBwcm9taXNlXHJcbiAgcXVlcnkoY29ubmVjdGlvbiwgcHJvcGVydGllcywgdGVybSkge1xyXG4gICAgLy9cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7U2VsZWN0MkVkaXRvcn07XHJcbiIsIi8qXHJcbiAqIChDKSBDb3B5cmlnaHQgMjAxNCBOdXhlbyBTQSAoaHR0cDovL251eGVvLmNvbS8pIGFuZCBjb250cmlidXRvcnMuXHJcbiAqXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFRoaXMgcHJvZ3JhbSBhbmQgdGhlIGFjY29tcGFueWluZyBtYXRlcmlhbHNcclxuICogYXJlIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXHJcbiAqIChMR1BMKSB2ZXJzaW9uIDIuMSB3aGljaCBhY2NvbXBhbmllcyB0aGlzIGRpc3RyaWJ1dGlvbiwgYW5kIGlzIGF2YWlsYWJsZSBhdFxyXG4gKiBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvbGdwbC0yLjEuaHRtbFxyXG4gKlxyXG4gKiBUaGlzIGxpYnJhcnkgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcclxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcclxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVVxyXG4gKiBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBDb250cmlidXRvcnM6XHJcbiAqICAgICBOZWxzb24gU2lsdmEgPG5lbHNvbi5zaWx2YUBpbmV2by5wdD5cclxuICovXHJcbmltcG9ydCB7U2VsZWN0MkVkaXRvcn0gZnJvbSAnLi9zZWxlY3QyJztcclxuaW1wb3J0IHtPcGVyYXRpb259IGZyb20gJy4uLy4uL251eGVvL3JwYy9vcGVyYXRpb24nO1xyXG5cclxuY2xhc3MgVXNlckVkaXRvciBleHRlbmRzIFNlbGVjdDJFZGl0b3Ige1xyXG5cclxuICBwcmVwYXJlKHJvdywgY29sLCBwcm9wLCB0ZCwgb3JpZ2luYWxWYWx1ZSwgY2VsbFByb3BlcnRpZXMpIHtcclxuICAgIC8vIGZsYXR0ZW4gb3VyIHZhbHVlcyB0byBhIGxpc3Qgb2YgaWRzXHJcbiAgICB2YXIgdmFsdWUgPSAoQXJyYXkuaXNBcnJheShvcmlnaW5hbFZhbHVlKSkgPyBvcmlnaW5hbFZhbHVlLm1hcCgodSkgPT4gdGhpcy5nZXRFbnRyeUlkKHUpKSA6IHRoaXMuZ2V0RW50cnlJZChvcmlnaW5hbFZhbHVlKTtcclxuICAgIHN1cGVyLnByZXBhcmUocm93LCBjb2wsIHByb3AsIHRkLCB2YWx1ZSwgY2VsbFByb3BlcnRpZXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0aW9uVGV4dCh2YWwpIHtcclxuICAgIGlmICh2YWwuc3RhcnRzV2l0aCgndXNlcjonKSB8fCB2YWwuc3RhcnRzV2l0aCgnZ3JvdXA6JykpIHtcclxuICAgICAgcmV0dXJuIHZhbC5zcGxpdCgnOicpWzFdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbDtcclxuICB9XHJcblxyXG4gIHNhdmVWYWx1ZSh2YWwsIGN0cmxEb3duKSB7XHJcbiAgICAvLyBjcmVhdGUgZGlyZWN0b3J5IGVudHJpZXMgYWdhaW4gb24gc2F2ZVxyXG4gICAgdmFyIHZhbHVlID0gdmFsWzBdWzBdO1xyXG5cclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIGxldCB0eXBlID0gJ3VzZXInOyAvLyBYWFg6IGNhbid0IGd1ZXNzIHR5cGUgaWYgbm90IHByZWZpeGVkXHJcbiAgICAgICAgaWYgKGlkLnN0YXJ0c1dpdGgoJ3VzZXI6JykgfHwgaWQuc3RhcnRzV2l0aCgnZ3JvdXA6JykpIHtcclxuICAgICAgICAgIGxldCBwYXJ0cyA9IGlkLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICB0eXBlID0gcGFydHNbMF07IGlkID0gcGFydHNbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAnZW50aXR5LXR5cGUnOiB0eXBlLFxyXG4gICAgICAgICAgaWQ6IGlkXHJcbiAgICAgICAgfTtcclxuICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgLy8gdW53cmFwIHRoZSBtYXAgcmVzdWx0IGlmIG5vdCBtdWx0aXBsZVxyXG4gICAgICBpZiAoIXRoaXMuY2VsbFByb3BlcnRpZXMubXVsdGlwbGUpIHtcclxuICAgICAgICB2YWx1ZSA9IHZhbHVlWzBdO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWx1ZSA9IHRoaXMuY2VsbFByb3BlcnRpZXMubXVsdGlwbGUgPyBbXSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIuc2F2ZVZhbHVlKFtbdmFsdWVdXSwgY3RybERvd24pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RW50cnlJZChpdGVtKSB7XHJcbiAgICBpZiAoaXRlbVsnZW50aXR5LXR5cGUnXSkge1xyXG4gICAgICByZXR1cm4gYCR7aXRlbVsnZW50aXR5LXR5cGUnXX06JHtpdGVtLmlkfWA7XHJcbiAgICB9XHJcbiAgICAvLyB1c2UgcHJlZml4ZWQgdmFsdWUgc28gd2UgY2FuIGtub3cgZW50aXR5IHR5cGUgd2hlbiBzYXZpbmdcclxuICAgIC8vIG5vdCByZWx5aW5nIG9uIHRoaXMud2lkZ2V0UHJvcGVydGllcy5wcmVmaXhlZCBhcyB3ZSdyZSBQT1NUaW5nIGJhY2sgZW50aXRpZXNcclxuICAgIHJldHVybiBpdGVtLnByZWZpeGVkX2lkIHx8IGl0ZW0uaWQ7XHJcbiAgfVxyXG5cclxuICBxdWVyeShjb25uZWN0aW9uLCBwcm9wZXJ0aWVzLCB0ZXJtKSB7XHJcbiAgICB2YXIgb3AgPSBuZXcgT3BlcmF0aW9uKGNvbm5lY3Rpb24sICdVc2VyR3JvdXAuU3VnZ2VzdGlvbicpO1xyXG4gICAgLy8gU2V0IHRoZSBwcm9wZXJ0aWVzXHJcbiAgICBPYmplY3QuYXNzaWduKG9wLnBhcmFtcywgcHJvcGVydGllcyk7XHJcbiAgICBvcC5wYXJhbXMuc2VhcmNoVGVybSA9IHRlcm07XHJcbiAgICBpZiAodGhpcy53aWRnZXRQcm9wZXJ0aWVzLnVzZXJTdWdnZXN0aW9uU2VhcmNoVHlwZSkge1xyXG4gICAgICBvcC5wYXJhbXMuc2VhcmNoVHlwZSA9IHRoaXMud2lkZ2V0UHJvcGVydGllcy51c2VyU3VnZ2VzdGlvblNlYXJjaFR5cGU7XHJcbiAgICB9XHJcbiAgICAvLyBQZXJmb3JtIHRoZSBzZWFyY2hcclxuICAgIHJldHVybiBvcC5leGVjdXRlKCk7XHJcbiAgfVxyXG5cclxuICBmb3JtYXR0ZXIoZW50cnkpIHtcclxuICAgIHJldHVybiBlbnRyeS50ZXh0IHx8IGVudHJ5LmRpc3BsYXlMYWJlbDtcclxuICB9XHJcblxyXG4gIGdldCB3aWRnZXRQcm9wZXJ0aWVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2VsbFByb3BlcnRpZXMud2lkZ2V0LnByb3BlcnRpZXMuYW55IHx8IHt9O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gVXNlclJlbmRlcmVyKGluc3RhbmNlLCB0ZCwgcm93LCBjb2wsIHByb3AsIHZhbHVlLCBjZWxsUHJvcGVydGllcykge1xyXG4gIGlmICh2YWx1ZSkge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICB2YWx1ZSA9IFt2YWx1ZV07XHJcbiAgICB9XHJcbiAgICBhcmd1bWVudHNbNV0gPSB2YWx1ZS5tYXAoKHUpID0+ICB1LmlkKS5qb2luKCcsJyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG4gIH1cclxuICBjZWxsUHJvcGVydGllcy5kZWZhdWx0UmVuZGVyZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IHtVc2VyRWRpdG9yLCBVc2VyUmVuZGVyZXJ9O1xyXG4iLCIvKlxyXG4gKiAoQykgQ29weXJpZ2h0IDIwMTYgTnV4ZW8gU0EgKGh0dHA6Ly9udXhlby5jb20vKSBhbmQgY29udHJpYnV0b3JzLlxyXG4gKlxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLiBUaGlzIHByb2dyYW0gYW5kIHRoZSBhY2NvbXBhbnlpbmcgbWF0ZXJpYWxzXHJcbiAqIGFyZSBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxyXG4gKiAoTEdQTCkgdmVyc2lvbiAyLjEgd2hpY2ggYWNjb21wYW5pZXMgdGhpcyBkaXN0cmlidXRpb24sIGFuZCBpcyBhdmFpbGFibGUgYXRcclxuICogaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2xncGwtMi4xLmh0bWxcclxuICpcclxuICogVGhpcyBsaWJyYXJ5IGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXHJcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXHJcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlVcclxuICogTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaTE4bihrZXkpIHtcclxuICByZXR1cm4gKG51eGVvICYmIG51eGVvLnNwcmVhZHNoZWV0ICYmIG51eGVvLnNwcmVhZHNoZWV0LmxhYmVscyAmJiBudXhlby5zcHJlYWRzaGVldC5sYWJlbHNba2V5XSkgfHwga2V5O1xyXG59XHJcblxyXG4iLCIvKlxyXG4gKiAoQykgQ29weXJpZ2h0IDIwMTQgTnV4ZW8gU0EgKGh0dHA6Ly9udXhlby5jb20vKSBhbmQgY29udHJpYnV0b3JzLlxyXG4gKlxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLiBUaGlzIHByb2dyYW0gYW5kIHRoZSBhY2NvbXBhbnlpbmcgbWF0ZXJpYWxzXHJcbiAqIGFyZSBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxyXG4gKiAoTEdQTCkgdmVyc2lvbiAyLjEgd2hpY2ggYWNjb21wYW5pZXMgdGhpcyBkaXN0cmlidXRpb24sIGFuZCBpcyBhdmFpbGFibGUgYXRcclxuICogaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2xncGwtMi4xLmh0bWxcclxuICpcclxuICogVGhpcyBsaWJyYXJ5IGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXHJcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXHJcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlVcclxuICogTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogQ29udHJpYnV0b3JzOlxyXG4gKiAgICAgTmVsc29uIFNpbHZhIDxuZWxzb24uc2lsdmFAaW5ldm8ucHQ+XHJcbiAqL1xyXG5cclxuY2xhc3MgTG9nIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZWwpIHtcclxuICAgIHRoaXMuZWwgPSBlbDtcclxuICAgIHRoaXMuX2RlZmF1bHQgPSAnJztcclxuICB9XHJcblxyXG4gIGluZm8obXNnKSB7XHJcbiAgICB0aGlzLmVsLnRleHQobXNnKTtcclxuICB9XHJcblxyXG4gIGVycm9yKG1zZykge1xyXG4gICAgdGhpcy5lbC50ZXh0KG1zZyk7XHJcbiAgfVxyXG5cclxuICBkZWZhdWx0KG1zZykge1xyXG4gICAgaWYgKG1zZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuX2RlZmF1bHQgPSBtc2c7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVsLnRleHQodGhpcy5fZGVmYXVsdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge0xvZ307IiwiLypcclxuICogKEMpIENvcHlyaWdodCAyMDE0IE51eGVvIFNBIChodHRwOi8vbnV4ZW8uY29tLykgYW5kIGNvbnRyaWJ1dG9ycy5cclxuICpcclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC4gVGhpcyBwcm9ncmFtIGFuZCB0aGUgYWNjb21wYW55aW5nIG1hdGVyaWFsc1xyXG4gKiBhcmUgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcclxuICogKExHUEwpIHZlcnNpb24gMi4xIHdoaWNoIGFjY29tcGFuaWVzIHRoaXMgZGlzdHJpYnV0aW9uLCBhbmQgaXMgYXZhaWxhYmxlIGF0XHJcbiAqIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9sZ3BsLTIuMS5odG1sXHJcbiAqXHJcbiAqIFRoaXMgbGlicmFyeSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxyXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxyXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VXHJcbiAqIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIENvbnRyaWJ1dG9yczpcclxuICogICAgIE5lbHNvbiBTaWx2YSA8bmVsc29uLnNpbHZhQGluZXZvLnB0PlxyXG4gKi9cclxuaW1wb3J0IHtDb2x1bW59IGZyb20gJy4vY29sdW1uJztcclxuaW1wb3J0IHtMYXlvdXR9IGZyb20gJy4uL251eGVvL2xheW91dCc7XHJcbmltcG9ydCB7U2NoZW1hc30gZnJvbSAnLi4vbnV4ZW8vcmVzdC9zY2hlbWFzJztcclxuaW1wb3J0IHtEaXJlY3Rvcnl9IGZyb20gJy4uL251eGVvL3JwYy9kaXJlY3RvcnknO1xyXG5pbXBvcnQge1F1ZXJ5fSBmcm9tICcuLi9udXhlby9ycGMvcXVlcnknO1xyXG5pbXBvcnQge0RpcmVjdG9yeUVkaXRvcn0gZnJvbSAnLi4vdWkvZWRpdG9ycy9kaXJlY3RvcnknO1xyXG5cclxuLyoqXHJcbiAqIFNwcmVhZHNoZWV0IGJhY2tlZCBieSBIYW5zb250YWJsZVxyXG4gKi9cclxuY2xhc3MgU3ByZWFkc2hlZXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb250YWluZXIsIGNvbm5lY3Rpb24sIGxheW91dCwgY29sdW1ucywgcGFnZVByb3ZpZGVyLCBsYW5ndWFnZSkge1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICB0aGlzLmNvbm5lY3Rpb24gPSBjb25uZWN0aW9uO1xyXG4gICAgdGhpcy5fZGF0YSA9IFtdO1xyXG4gICAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgICBkYXRhOiB0aGlzLl9kYXRhLFxyXG4gICAgICBhdXRvQ29sdW1uU2l6ZTogZmFsc2UsXHJcbiAgICAgIGNvbFdpZHRoczogMjAwLFxyXG4gICAgICBzdHJldGNoSDogJ2FsbCcsXHJcbiAgICAgIHJvd0hlYWRlcnM6IHRydWUsXHJcbiAgICAgIG1hbnVhbENvbHVtblJlc2l6ZTogdHJ1ZSxcclxuICAgICAgc3RhcnRSb3dzOiAwLFxyXG4gICAgICBjdXJyZW50Um93Q2xhc3NOYW1lOiAnY3VycmVudFJvdycsXHJcbiAgICAgIGN1cnJlbnRDb2xDbGFzc05hbWU6ICdjdXJyZW50Q29sJyxcclxuICAgICAgY29udGV4dE1lbnU6IFsndW5kbycsICdyZWRvJ10sXHJcbiAgICAgIGFmdGVyQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyksXHJcbiAgICAgIGJlZm9yZUF1dG9maWxsOiB0aGlzLmJlZm9yZUF1dG9maWxsLmJpbmQodGhpcyksXHJcbiAgICAgIHNlYXJjaDogdHJ1ZSxcclxuICAgICAgY2VsbHM6IHRoaXMuY3JlYXRlQ2VsbC5iaW5kKHRoaXMpLFxyXG4gICAgICBsYW5ndWFnZTogbGFuZ3VhZ2VcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5xdWVyeSA9IG5ldyBRdWVyeShjb25uZWN0aW9uKTtcclxuICAgIC8vIGluY2x1ZGUgdGhlIHVzZXIncyBwZXJtaXNzaW9uIG9uIGVhY2ggZG9jdW1lbnRcclxuICAgIHRoaXMucXVlcnkuZW5yaWNoKCdkb2N1bWVudCcsICdwZXJtaXNzaW9ucycpO1xyXG4gICAgLy8gZmV0Y2ggZXZlcnkgcHJvcGVydHkgYW5kIHZlcnNpb25pbmcgaW5mb3JtYXRpb25cclxuICAgIHRoaXMucXVlcnkuZmV0Y2goJ2RvY3VtZW50JywgJ3Byb3BlcnRpZXMnLCAndmVyc2lvbkxhYmVsJyk7XHJcbiAgICAvLyBmZXRjaCBwYXJlbnQgZm9yIGRpcmVjdG9yeSBlbnRyaWVzXHJcbiAgICB0aGlzLnF1ZXJ5LmZldGNoKCdkaXJlY3RvcnlFbnRyeScsICdwYXJlbnQnKTtcclxuICAgIC8vIHJlcXVlc3Qgcm9vdCBkZXB0aFxyXG4gICAgdGhpcy5xdWVyeS5kZXB0aCA9ICdyb290JztcclxuICAgIC8vIHRyYW5zbGF0ZSBkaXJlY3RvcnkgbGFiZWxzXHJcbiAgICB0aGlzLnF1ZXJ5LnRyYW5zbGF0ZSgnZGlyZWN0b3J5RW50cnknLCAnbGFiZWwnKTtcclxuICAgIHRoaXMucXVlcnkucGFnZVByb3ZpZGVyID0gcGFnZVByb3ZpZGVyO1xyXG5cclxuICAgIC8vIHNldCBjb2x1bW5zIGJhc2VkIG9uIHJlc3VsdCBsYXlvdXRcclxuICAgIGlmIChsYXlvdXQpIHtcclxuICAgICAgbmV3IExheW91dChjb25uZWN0aW9uLCBsYXlvdXQsIGxhbmd1YWdlKS5mZXRjaCgpLnRoZW4oKGwpID0+IHtcclxuICAgICAgICAvLyBDaGVjayB3aGljaCBjb2x1bW5zIHRvIGRpc3BsYXlcclxuICAgICAgICBsZXQgY29scyA9IChjb2x1bW5zKSA/IGNvbHVtbnMubWFwKChuYW1lKSA9PiBsLmNvbHVtbnMuZmlsdGVyKChjKSA9PiBjLm5hbWUgPT09IG5hbWUpWzBdKVxyXG4gICAgICAgICAgOiBsLmNvbHVtbnMuZmlsdGVyKChjKSA9PiBjLnNlbGVjdGVkQnlEZWZhdWx0ICE9PSBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gY29sc1xyXG4gICAgICAgICAgLy8gRXhjbHVkZSBjb2x1bW5zIHdpdGhvdXQgd2lkZ2V0c1xyXG4gICAgICAgICAgLmZpbHRlcigoYykgPT4gYy53aWRnZXRzKVxyXG4gICAgICAgICAgLy8gQ3JlYXRlIG91ciBjb2x1bW5zIHdyYXBwZXJcclxuICAgICAgICAgIC5tYXAoKGMpID0+IG5ldyBDb2x1bW4oY29ubmVjdGlvbiwgYywgbC53aWRnZXRzW2Mud2lkZ2V0c1swXS5uYW1lXSwgdGhpcy5kaXJ0eVJlbmRlcmVyLmJpbmQodGhpcykpKVxyXG4gICAgICAgICAgLy8gT25seSBzaG93IGNvbHVtbnMgd2l0aCBhIGtub3duIHdpZGdldCB0eXBlIGFuZCB3aXRoIGEgZmllbGRcclxuICAgICAgICAgIC5maWx0ZXIoKGMpID0+IGMuaGFzU3VwcG9ydGVkV2lkZ2V0VHlwZSAmJiBjLmZpZWxkKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgLy8gb3IgYmFzZWQgb24gcmVzdWx0IGNvbHVtbnMgb25seVxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIC8vIGdldCBzY2hlbWFzIHByZWZpeGVzIGZyb20gY29sdW1uc1xyXG4gICAgICBsZXQgc2NoZW1hc1ByZWZpeGVzID0gW107XHJcbiAgICAgIGZvciAobGV0IGMgb2YgY29sdW1ucykge1xyXG4gICAgICAgIGxldCBzY2hlbWEgPSBjLmZpZWxkLmluZGV4T2YoJzonKSA+IC0xID8gYy5maWVsZC5zcGxpdCgnOicpWzBdIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmIChzY2hlbWEgJiYgc2NoZW1hc1ByZWZpeGVzLmluZGV4T2Yoc2NoZW1hKSA9PT0gLTEpIHtcclxuICAgICAgICAgIHNjaGVtYXNQcmVmaXhlcy5wdXNoKHNjaGVtYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBmZXRjaCBzY2hlbWFzIChiYXNlZCBvbiBwcmVmaXhlcylcclxuICAgICAgbmV3IFNjaGVtYXMoY29ubmVjdGlvbikuZmV0Y2goc2NoZW1hc1ByZWZpeGVzKS50aGVuKChzY2hlbWFzKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCBjb2xzID0gY29sdW1ucy5tYXAoKGMpID0+IHtcclxuXHJcbiAgICAgICAgICBsZXQgY29sdW1uID0ge1xyXG4gICAgICAgICAgICBkZWY6IHtwcm9wZXJ0aWVzOiB7YW55OiB7c29ydFByb3BlcnR5TmFtZTogYy5maWVsZCwgbGFiZWw6IGMubGFiZWx9fX0sXHJcbiAgICAgICAgICAgIHdpZGdldDoge2ZpZWxkOiBjLmZpZWxkfVxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAvLyBnZXQgZmllbGQgZGVmaW5pdGlvbiBmcm9tIHNjaGVtYXMgbWFwXHJcbiAgICAgICAgICBsZXQgZmllbGQgPSB1bmRlZmluZWQ7IC8vIDwtIGV4cGxpY2l0bHkgc2V0IGZpZWxkIGFzIHVuZGVmaW5lZCBpbiBlYWNoIGl0ZXJhdGlvblxyXG4gICAgICAgICAgaWYgKGMuZmllbGQuaW5kZXhPZignOicpID4gLTEpIHtcclxuICAgICAgICAgICAgbGV0IFtzLCBmXSA9IGMuZmllbGQuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgZmllbGQgPSBzY2hlbWFzW3NdLmZpZWxkc1tmXSB8fCB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGZpZWxkID0gKHR5cGVvZiBmaWVsZCA9PT0gJ3N0cmluZycpID8ge3R5cGU6IGZpZWxkfSA6IGZpZWxkO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIHNldCBjb2x1bW4gd2lkZ2V0IHR5cGUgYW5kIHByb3BlcnRpZXMgYmFzZWQgb24gZmllbGQgY29uc3RyYWludHNcclxuICAgICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICBpZiAoZmllbGQudHlwZS5lbmRzV2l0aCgnW10nKSkge1xyXG4gICAgICAgICAgICAgIGNvbHVtbi53aWRnZXQubXVsdGlwbGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBjb25zdHJhaW50cyA9IGZpZWxkLml0ZW1Db25zdHJhaW50cyB8fCBmaWVsZC5jb25zdHJhaW50cztcclxuICAgICAgICAgICAgaWYgKGNvbnN0cmFpbnRzKSB7XHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgY29uc3RyYWludCBvZiBjb25zdHJhaW50cykge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChjb25zdHJhaW50Lm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgY2FzZSAnZG9jdW1lbnRSZXNvbHZlcic6XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uLndpZGdldC50eXBlID0gKGZpZWxkLnR5cGUgPT09ICdzdHJpbmdbXScpID8gJ211bHRpcGxlRG9jdW1lbnRzU3VnZ2VzdGlvbicgOiAnc2luZ2xlRG9jdW1lbnRTdWdnZXN0aW9uJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgY2FzZSAnZGlyZWN0b3J5UmVzb2x2ZXInOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi53aWRnZXQudHlwZSA9IChmaWVsZC50eXBlID09PSAnc3RyaW5nW10nKSA/ICdzdWdnZXN0TWFueURpcmVjdG9yeScgOiAnc3VnZ2VzdE9uZURpcmVjdG9yeSc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uLndpZGdldC5wcm9wZXJ0aWVzID0ge2RibDEwbjogdHJ1ZSwgZGlyZWN0b3J5TmFtZTogY29uc3RyYWludC5wYXJhbWV0ZXJzLmRpcmVjdG9yeX07XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ3VzZXJNYW5hZ2VyUmVzb2x2ZXInOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi53aWRnZXQudHlwZSA9IChmaWVsZC50eXBlID09PSAnc3RyaW5nW10nKSA/ICdtdWx0aXBsZVVzZXJzU3VnZ2VzdGlvbicgOiAnc2luZ2xlVXNlclN1Z2dlc3Rpb24nO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWFyY2hUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25zdHJhaW50LnBhcmFtZXRlcnMuaW5jbHVkZUdyb3VwcyA9PT0gJ3RydWUnICYmIGNvbnN0cmFpbnQucGFyYW1ldGVycy5pbmNsdWRlVXNlcnMgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2VhcmNoVHlwZSA9ICdVU0VSX0dST1VQX1RZUEUnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29uc3RyYWludC5wYXJhbWV0ZXJzLmluY2x1ZGVVc2VycyA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hUeXBlID0gJ1VTRVJfVFlQRSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb25zdHJhaW50LnBhcmFtZXRlcnMuaW5jbHVkZUdyb3VwcyA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hUeXBlID0gJ0dST1VQX1RZUEUnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW4ud2lkZ2V0LnByb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclN1Z2dlc3Rpb25TZWFyY2hUeXBlOiBzZWFyY2hUeXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gY29sdW1uO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbHVtbnMgPSBjb2xzLm1hcCgoYykgPT4gbmV3IENvbHVtbihjb25uZWN0aW9uLCBjLmRlZiwgYy53aWRnZXQsIHRoaXMuZGlydHlSZW5kZXJlci5iaW5kKHRoaXMpKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29udGFpbmVyLmhhbmRzb250YWJsZSh0aGlzLm9wdGlvbnMpO1xyXG4gICAgdGhpcy5odCA9IHRoaXMuY29udGFpbmVyLmRhdGEoJ2hhbmRzb250YWJsZScpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRhdGEoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcclxuICB9XHJcblxyXG4gIHNldCBkYXRhKGQpIHtcclxuICAgIHRoaXMuX2RhdGEgPSBkO1xyXG4gICAgdGhpcy5odC5sb2FkRGF0YSh0aGlzLl9kYXRhKTtcclxuICB9XHJcblxyXG4gIC8vIFJldHVybnMgc291cmNlIGRhdGFcclxuICBnZXREYXRhQXRSb3cocm93KSB7XHJcbiAgICByZXR1cm4gKHRoaXMuaHQpID8gdGhpcy5odC5nZXRTb3VyY2VEYXRhQXRSb3cocm93KSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXQgY29sdW1ucygpIHsgcmV0dXJuIHRoaXMuX2NvbHVtbnM7IH1cclxuICBzZXQgY29sdW1ucyhjb2x1bW5zKSB7XHJcbiAgICB0aGlzLl9jb2x1bW5zID0gY29sdW1ucztcclxuICAgIHRoaXMuX2NvbHVtbnNCeUZpZWxkID0ge307XHJcbiAgICBmb3IgKHZhciBjIG9mIGNvbHVtbnMpIHtcclxuICAgICAgdGhpcy5fY29sdW1uc0J5RmllbGRbYy5kYXRhXSA9IGM7XHJcbiAgICB9XHJcbiAgICB0aGlzLl91cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNlbGwocm93LCBjb2wsIHByb3ApIHtcclxuICAgIHZhciBjZWxsID0ge307XHJcbiAgICB2YXIgZG9jID0gdGhpcy5nZXREYXRhQXRSb3cocm93KTtcclxuICAgIHZhciBwZXJtaXNzaW9ucyA9IGRvYyAmJiBkb2MuY29udGV4dFBhcmFtZXRlcnMgJiYgZG9jLmNvbnRleHRQYXJhbWV0ZXJzLnBlcm1pc3Npb25zO1xyXG4gICAgaWYgKHBlcm1pc3Npb25zICYmIChwZXJtaXNzaW9ucy5pbmRleE9mKCdXcml0ZScpID09PSAtMSkpIHtcclxuICAgICAgY2VsbC5yZWFkT25seSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2VsbDtcclxuICB9XHJcblxyXG4gIHNldCBueHFsKHEpIHtcclxuICAgIHRoaXMucXVlcnlQYXJhbWV0ZXJzID0gW3FdO1xyXG4gIH1cclxuXHJcbiAgc2V0IHF1ZXJ5UGFyYW1ldGVycyhwKSB7XHJcbiAgICB0aGlzLnF1ZXJ5LnF1ZXJ5UGFyYW1ldGVycyA9IHA7XHJcbiAgfVxyXG5cclxuICBzZXQgbmFtZWRQYXJhbWV0ZXJzKHApIHtcclxuICAgIHRoaXMucXVlcnkubmFtZWRQYXJhbWV0ZXJzID0gcDtcclxuICB9XHJcblxyXG4gIHNldCBzb3J0SW5mb3Moc29ydEluZm9zKSB7XHJcbiAgICB0aGlzLnF1ZXJ5LnNvcnRCeSA9IHNvcnRJbmZvcy5tYXAoKHMpID0+IHMuc29ydENvbHVtbik7XHJcbiAgICB0aGlzLnF1ZXJ5LnNvcnRPcmRlciA9IHNvcnRJbmZvcy5tYXAoKHMpID0+IHMuc29ydEFzY2VuZGluZyA/ICdhc2MnIDogJ2Rlc2MnKTtcclxuICB9XHJcblxyXG4gIF9mZXRjaCgpIHtcclxuICAgIHJldHVybiB0aGlzLnF1ZXJ5LnJ1bigpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseSh0aGlzLl9kYXRhLCByZXN1bHQuZW50cmllcyk7XHJcbiAgICAgIC8vIHByZXZlbnQgYWRkaW5nIG5ldyByb3dzXHJcbiAgICAgIHRoaXMuaHQudXBkYXRlU2V0dGluZ3Moe21heFJvd3M6IHRoaXMuX2RhdGEubGVuZ3RofSk7XHJcbiAgICAgIHRoaXMuaHQucmVuZGVyKCk7XHJcbiAgICAgIGlmIChyZXN1bHQuaXNOZXh0UGFnZUF2YWlsYWJsZSkge1xyXG4gICAgICAgIHRoaXMucXVlcnkucGFnZSsrO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9mZXRjaCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMuX2RhdGEubGVuZ3RoID0gMDtcclxuICAgIHRoaXMuX2RpcnR5ID0ge307XHJcbiAgICB0aGlzLnF1ZXJ5LnBhZ2UgPSAwO1xyXG4gICAgdGhpcy5odC5jbGVhclVuZG8oKTtcclxuICAgIHJldHVybiB0aGlzLl9mZXRjaCgpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZSgpIHtcclxuICAgIHJldHVybiBQcm9taXNlLmFsbChcclxuICAgICAgT2JqZWN0LmtleXModGhpcy5fZGlydHkpLm1hcCgodWlkKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIFRPRE8obmZncykgLSBNb3ZlIHJlcXVlc3QgZXhlY3V0aW9uIHRvIHRoZSBjb25uZWN0aW9uXHJcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbi5yZXF1ZXN0KCcvaWQvJyArIHVpZClcclxuICAgICAgICAgICAgICAucHV0KFxyXG4gICAgICAgICAgICAgIHtkYXRhOiB0aGlzLl9kaXJ0eVt1aWRdfSxcclxuICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLl9kaXJ0eVt1aWRdLl9lcnJvciA9IGVycm9yO1xyXG4gICAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IoZXJyb3IpKTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2RpcnR5W3VpZF07XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHVpZCk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RpcnR5W3VpZF0uX2Vycm9yID0gZTtcclxuICAgICAgICAgICAgcmVqZWN0KEVycm9yKGUpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgdGhpcy5odC5jbGVhclVuZG8oKTtcclxuICAgICAgdGhpcy5odC5yZW5kZXIoKTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoY2hhbmdlLCBzb3VyY2UpIHtcclxuICAgIGlmIChzb3VyY2UgPT09ICdsb2FkRGF0YScpIHtcclxuICAgICAgdGhpcy5fZGlydHkgPSB7fTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZSAhPT0gbnVsbCkge1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYW5nZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBbaWR4LCBmaWVsZCwgb2xkViwgbmV3Vl0gPSBjaGFuZ2VbaV07XHJcbiAgICAgICAgaWYgKG9sZFYgPT09IG5ld1YpIHtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdWlkID0gdGhpcy5kYXRhW2lkeF0udWlkO1xyXG4gICAgICAgIHZhciBkb2MgPSB0aGlzLl9kaXJ0eVt1aWRdID0gdGhpcy5fZGlydHlbdWlkXSB8fCB7J2VudGl0eS10eXBlJzogJ2RvY3VtZW50JywgdWlkOiB1aWR9O1xyXG5cclxuICAgICAgICAvLyBTcGxpdCBjc3YgdmFsdWVzIGludG8gYXJyYXlcclxuICAgICAgICB2YXIgY29sdW1uID0gdGhpcy5fY29sdW1uc0J5RmllbGRbZmllbGRdO1xyXG4gICAgICAgIGlmIChjb2x1bW4ubXVsdGlwbGUgJiYgIUFycmF5LmlzQXJyYXkobmV3VikpIHtcclxuICAgICAgICAgIG5ld1YgPSBuZXdWID8gbmV3Vi5zcGxpdCgnLCcpIDogW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc3NpZ24oZG9jLCBmaWVsZCwgbmV3Vik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuYXV0b3NhdmUpIHtcclxuICAgICAgICB0aGlzLnNhdmUoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmh0LnJlbmRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYmVmb3JlQXV0b2ZpbGwoc3RhcnQsIGVuZCwgZGF0YSkge1xyXG4gICAgdmFyIGh0ID0gdGhpcy5odC5nZXRJbnN0YW5jZSgpO1xyXG4gICAgdmFyIGVkaXRvciA9IGh0LmdldEFjdGl2ZUVkaXRvcigpO1xyXG4gICAgaWYgKCFlZGl0b3IgfHwgIShlZGl0b3IgaW5zdGFuY2VvZiBEaXJlY3RvcnlFZGl0b3IpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghZGF0YSAmJiAoZGF0YS5sZW5ndGggPT09IDAgfHwgZGF0YVswXS5sZW5ndGggPT09IDApKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignSXQgaXMgbm90IGV4cGVjdGVkIHRvIGhhdmUgYW4gZW1wdHkgZGF0YSBzZXQuJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZHJhZ2dpbmdEaXJlY3Rpb24gPSBuZXcgV2Fsa29udGFibGVDZWxsUmFuZ2UodW5kZWZpbmVkLCBodC5nZXRTZWxlY3RlZFJhbmdlKCkuaGlnaGxpZ2h0LCBzdGFydCkuZ2V0RGlyZWN0aW9uKCk7XHJcbiAgICBpZiAoZHJhZ2dpbmdEaXJlY3Rpb24uY2hhckF0KDApID09PSAnUycpIHtcclxuICAgICAgZGF0YSA9IGRhdGEucmV2ZXJzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBvcmlnaW5hbENvcm5lckNlbGwgPSB0aGlzLl9nZXRDb3JuZXJDZWxsKGh0LmdldFNlbGVjdGVkUmFuZ2UoKS5mcm9tLCBodC5nZXRTZWxlY3RlZFJhbmdlKCkudG8sIGRyYWdnaW5nRGlyZWN0aW9uKTtcclxuICAgIGZvciAodmFyIGkgPSBzdGFydC5yb3c7IGkgPD0gZW5kLnJvdzsgaSsrKSB7XHJcbiAgICAgIGZvciAodmFyIGogPSBzdGFydC5jb2w7IGogPD0gZW5kLmNvbDsgaisrKSB7XHJcbiAgICAgICAgdmFyIGRhdGFSb3dJbmRleCA9IChpIC0gc3RhcnQucm93KSAlIGRhdGEubGVuZ3RoO1xyXG4gICAgICAgIHZhciBkYXRhQ29sSW5kZXggPSAoaiAtIHN0YXJ0LmNvbCkgJSBkYXRhWzBdLmxlbmd0aDtcclxuICAgICAgICB2YXIgZGF0YUVudHJ5ID0gZGF0YVtkYXRhUm93SW5kZXhdW2RhdGFDb2xJbmRleF07XHJcbiAgICAgICAgdmFyIGZvcm1hdHRlZExhYmVsID0gZWRpdG9yLmZvcm1hdHRlcihkYXRhRW50cnkpO1xyXG4gICAgICAgIGlmICghZm9ybWF0dGVkTGFiZWwpIHtcclxuICAgICAgICAgIC8vIHJlc29sdmVkIHx8IHVucmVzb2x2ZWQgKHdoZW4ganVzdCBmaWxsZWQgaW4pXHJcbiAgICAgICAgICB2YXIgaWQgPSAoZGF0YUVudHJ5LnByb3BlcnRpZXMgJiYgZGF0YUVudHJ5LnByb3BlcnRpZXMuaWQpIHx8IGRhdGFFbnRyeTtcclxuICAgICAgICAgIHZhciBjZWxsID0gaHQuZ2V0Q2VsbE1ldGEoaSwgaik7XHJcbiAgICAgICAgICBpZiAoIWNlbGwuX2xhYmVscykge1xyXG4gICAgICAgICAgICBjZWxsLl9sYWJlbHMgPSB7fTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHZhciBvcmlnaW5hbENlbGwgPSBodC5nZXRDZWxsTWV0YShvcmlnaW5hbENvcm5lckNlbGwucm93ICsgZGF0YVJvd0luZGV4LCBvcmlnaW5hbENvcm5lckNlbGwuY29sICsgZGF0YUNvbEluZGV4KTtcclxuICAgICAgICAgIGlmIChvcmlnaW5hbENlbGwuX2xhYmVscykge1xyXG4gICAgICAgICAgICBjZWxsLl9sYWJlbHNbaWRdID0gb3JpZ2luYWxDZWxsLl9sYWJlbHNbaWRdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2dldENvcm5lckNlbGwoc3RhcnQsIGVuZCwgZHJhZ2dpbmdEaXJlY3Rpb24pIHtcclxuICAgIHZhciByYW5nZSA9IG5ldyBXYWxrb250YWJsZUNlbGxSYW5nZSh1bmRlZmluZWQsIHN0YXJ0LCBlbmQpO1xyXG4gICAgc3dpdGNoIChkcmFnZ2luZ0RpcmVjdGlvbikge1xyXG4gICAgICBjYXNlICdOVy1TRScgOlxyXG4gICAgICAgIHJldHVybiByYW5nZS5nZXRCb3R0b21SaWdodENvcm5lcigpO1xyXG4gICAgICBjYXNlICdORS1TVycgOlxyXG4gICAgICAgIHJldHVybiByYW5nZS5nZXRCb3R0b21MZWZ0Q29ybmVyKCk7XHJcbiAgICAgIGNhc2UgJ1NFLU5XJyA6XHJcbiAgICAgICAgcmV0dXJuIHJhbmdlLmdldFRvcExlZnRDb3JuZXIoKTtcclxuICAgICAgY2FzZSAnU1ctTkUnIDpcclxuICAgICAgICByZXR1cm4gcmFuZ2UuZ2V0VG9wUmlnaHRDb3JuZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRpcnR5UmVuZGVyZXIoaW5zdGFuY2UsIHRkLCByb3csIGNvbCwgcHJvcCwgdmFsdWUsIGNlbGxQcm9wZXJ0aWVzKSB7XHJcbiAgICBIYW5kc29udGFibGUucmVuZGVyZXJzLlRleHRSZW5kZXJlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgdmFyIGRvYyA9IHRoaXMuZ2V0RGF0YUF0Um93KHJvdyk7XHJcbiAgICBpZiAoZG9jICYmIHRoaXMuX2RpcnR5W2RvYy51aWRdKSB7XHJcbiAgICAgIC8vIGNvbG9yIGRpcnR5IHJvd3NcclxuICAgICAgdmFyIGNvbG9yID0gJyNlMmYxZmYnO1xyXG4gICAgICAvLyBjaGVjayBmb3IgZXJyb3JzXHJcbiAgICAgIGlmICh0aGlzLl9kaXJ0eVtkb2MudWlkXS5oYXNPd25Qcm9wZXJ0eSgnX2Vycm9yJykpIHtcclxuICAgICAgICBjb2xvciA9ICcjZjMzJztcclxuICAgICAgLy8gY2hlY2sgZm9yIGRpcnR5IHByb3BlcnR5XHJcbiAgICAgIH0gZWxzZSBpZiAoaGFzUHJvcCh0aGlzLl9kaXJ0eVtkb2MudWlkXSwgcHJvcCkpIHtcclxuICAgICAgICBjb2xvciA9ICcjYWZkOGZmJztcclxuICAgICAgfVxyXG4gICAgICAkKHRkKS5jc3Moe1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGNvbG9yXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuaHQuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZSgpIHtcclxuICAgIGxldCBvcHRpb25zID0gJC5leHRlbmQoe30sIHRoaXMub3B0aW9ucyk7XHJcbiAgICBvcHRpb25zLmNvbEhlYWRlcnMgPSB0aGlzLmNvbHVtbnMubWFwKChjKSA9PiBjLmhlYWRlcik7XHJcbiAgICBvcHRpb25zLmNvbHVtbnMgPSB0aGlzLmNvbHVtbnM7XHJcbiAgICB0aGlzLmh0LnVwZGF0ZVNldHRpbmdzKG9wdGlvbnMpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gUmVuZGVyZXJzXHJcbnZhciBSZWFkT25seVJlbmRlcmVyID0gZnVuY3Rpb24gKGluc3RhbmNlLCB0ZCwgcm93LCBjb2wsIHByb3AsIHZhbHVlLCBjZWxsUHJvcGVydGllcykge1xyXG4gIEhhbmRzb250YWJsZS5yZW5kZXJlcnMuVGV4dFJlbmRlcmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgdGQuc3R5bGUuY29sb3IgPSAnZ3JlZW4nO1xyXG4gIHRkLnN0eWxlLmJhY2tncm91bmQgPSAnI0NFQyc7XHJcbn07XHJcbkhhbmRzb250YWJsZS5yZW5kZXJlcnMucmVnaXN0ZXJSZW5kZXJlcigncmVhZE9ubHknLCBSZWFkT25seVJlbmRlcmVyKTtcclxuXHJcbi8vIFByb3BlcnR5IFV0aWxzXHJcblxyXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEzNzE5NTkzL2phdmFzY3JpcHQtaG93LXRvLXNldC1vYmplY3QtcHJvcGVydHktZ2l2ZW4taXRzLXN0cmluZy1uYW1lXHJcbmZ1bmN0aW9uIGFzc2lnbihvYmosIHByb3AsIHZhbHVlKSB7XHJcbiAgaWYgKHR5cGVvZiBwcm9wID09PSAnc3RyaW5nJykge1xyXG4gICAgcHJvcCA9IHByb3Auc3BsaXQoJy4nKTtcclxuICB9XHJcblxyXG4gIGlmIChwcm9wLmxlbmd0aCA+IDEpIHtcclxuICAgIHZhciBlID0gcHJvcC5zaGlmdCgpO1xyXG4gICAgYXNzaWduKG9ialtlXSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmpbZV0pID09PSAnW29iamVjdCBPYmplY3RdJyA/IG9ialtlXSA6IHt9LCBwcm9wLCB2YWx1ZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG9ialtwcm9wWzBdXSA9IHZhbHVlO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFzUHJvcChvYmosIHByb3ApIHtcclxuICBpZiAodHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSB7XHJcbiAgICBwcm9wID0gcHJvcC5zcGxpdCgnLicpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHByb3AubGVuZ3RoID4gMSkge1xyXG4gICAgdmFyIGUgPSBwcm9wLnNoaWZ0KCk7XHJcbiAgICByZXR1cm4gaGFzUHJvcChvYmpbZV0gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqW2VdKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyBvYmpbZV0gOiB7fSwgcHJvcCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBvYmouaGFzT3duUHJvcGVydHkocHJvcFswXSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1NwcmVhZHNoZWV0fTtcclxuIiwiLypcclxuICogKEMpIENvcHlyaWdodCAyMDE0IE51eGVvIFNBIChodHRwOi8vbnV4ZW8uY29tLykgYW5kIGNvbnRyaWJ1dG9ycy5cclxuICpcclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC4gVGhpcyBwcm9ncmFtIGFuZCB0aGUgYWNjb21wYW55aW5nIG1hdGVyaWFsc1xyXG4gKiBhcmUgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcclxuICogKExHUEwpIHZlcnNpb24gMi4xIHdoaWNoIGFjY29tcGFuaWVzIHRoaXMgZGlzdHJpYnV0aW9uLCBhbmQgaXMgYXZhaWxhYmxlIGF0XHJcbiAqIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9sZ3BsLTIuMS5odG1sXHJcbiAqXHJcbiAqIFRoaXMgbGlicmFyeSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxyXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxyXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VXHJcbiAqIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIENvbnRyaWJ1dG9yczpcclxuICogICAgIE5lbHNvbiBTaWx2YSA8bmVsc29uLnNpbHZhQGluZXZvLnB0PlxyXG4gKiAgICAgSmFja2llIEFsZGFtYSA8amFsZGFtYUBudXhlby5jb20+XHJcbiAqL1xyXG5pbXBvcnQge0RpcmVjdG9yeUVkaXRvciwgRGlyZWN0b3J5UmVuZGVyZXJ9IGZyb20gJy4vZWRpdG9ycy9kaXJlY3RvcnknO1xyXG5pbXBvcnQge0RvY3VtZW50RWRpdG9yLCBEb2N1bWVudFJlbmRlcmVyfSBmcm9tICcuL2VkaXRvcnMvZG9jdW1lbnQnO1xyXG5pbXBvcnQge1VzZXJFZGl0b3IsIFVzZXJSZW5kZXJlcn0gZnJvbSAnLi9lZGl0b3JzL3VzZXInO1xyXG5pbXBvcnQge0ltYWdlUmVuZGVyZXJ9IGZyb20gJy4vZWRpdG9ycy9pbWFnZSc7XHJcblxyXG5IYW5kc29udGFibGUuZWRpdG9ycy5yZWdpc3RlckVkaXRvcignZGlyZWN0b3J5JywgRGlyZWN0b3J5RWRpdG9yKTtcclxuSGFuZHNvbnRhYmxlLmVkaXRvcnMucmVnaXN0ZXJFZGl0b3IoJ2RvY3VtZW50JywgRG9jdW1lbnRFZGl0b3IpO1xyXG5IYW5kc29udGFibGUuZWRpdG9ycy5yZWdpc3RlckVkaXRvcigndXNlcicsIFVzZXJFZGl0b3IpO1xyXG5cclxuLyoqXHJcbiAqIE1peGluIGZvciB3aWRnZXRzIGJhc2VkIG9uIHRoZWlyIG5hbWUuXHJcbiAqIFVzZWQgdG8gb3ZlcnJpZGUgd2lkZ2V0IGRlZmluaXRpb25zIChleDogdGVtcGxhdGUgd2lkZ2V0cykuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgV0lER0VUUyA9IHtcclxuICBsaXN0aW5nX2NvdmVyYWdlOiB7XHJcbiAgICB0eXBlOiAnc3VnZ2VzdE9uZURpcmVjdG9yeScsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgIGFueToge1xyXG4gICAgICAgIGRibDEwbjogdHJ1ZSxcclxuICAgICAgICBkaXJlY3RvcnlOYW1lOiAnbDEwbmNvdmVyYWdlJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBsaXN0aW5nX3N1YmplY3RzOiB7XHJcbiAgICB0eXBlOiAnc3VnZ2VzdE1hbnlEaXJlY3RvcnknLFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICBhbnk6IHtcclxuICAgICAgICBkYmwxMG46IHRydWUsXHJcbiAgICAgICAgZGlyZWN0b3J5TmFtZTogJ2wxMG5zdWJqZWN0cydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbGlzdGluZ192ZXJzaW9uOiB7XHJcbiAgICB0eXBlOiAndGV4dCcsXHJcbiAgICBmaWVsZDogJ3ZlcnNpb25MYWJlbCdcclxuICB9LFxyXG4gIGxpc3RpbmdfbGFzdF9jb250cmlidXRvcjoge1xyXG4gICAgdHlwZTogJ3NpbmdsZVVzZXJTdWdnZXN0aW9uJyxcclxuICAgIHJlbmRlcmVyOiBVc2VyUmVuZGVyZXJcclxuICB9LFxyXG4gIGxpc3RpbmdfdGl0bGVfbGluazoge1xyXG4gICAgdHlwZTogJ3RleHQnXHJcbiAgfSxcclxuICBsaXN0aW5nX3RodW1ibmFpbDoge1xyXG4gICAgZmllbGQ6ICd0aHVtYjp0aHVtYm5haWwnXHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIE1hcHBpbmcgYmV0d2VlbiB3aWRnZXQgdHlwZXMgYW5kIGhhbmRzb250YWJsZSdzIGVkaXRvcnMgYW5kIHJlbmRlcmVyc1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFdJREdFVF9UWVBFUyA9IHtcclxuICB0ZXh0OiB7XHJcbiAgICB0eXBlOiAndGV4dCdcclxuICB9LFxyXG4gIHRleHRhcmVhOiB7XHJcbiAgICB0eXBlOiAndGV4dCdcclxuICB9LFxyXG4gIGRhdGU6IHtcclxuICAgIHR5cGU6ICdkYXRlJ1xyXG4gIH0sXHJcbiAgZGF0ZXRpbWU6IHtcclxuICAgIHR5cGU6ICdkYXRlJyxcclxuICAgIGRhdGVGb3JtYXQ6ICd5eS1tbS1kZFQwMDowMDowMC4wMDAnXHJcbiAgfSxcclxuICBudW1lcmljOiB7XHJcbiAgICB0eXBlOiAnbnVtZXJpYydcclxuICB9LFxyXG4gIGludDoge1xyXG4gICAgdHlwZTogJ251bWVyaWMnXHJcbiAgfSxcclxuICAvLyBTRUxFQ1RcclxuICBzZWxlY3RPbmVEaXJlY3Rvcnk6IHtcclxuICAgIHJlbmRlcmVyOiBEaXJlY3RvcnlSZW5kZXJlcixcclxuICAgIGVkaXRvcjogJ2RpcmVjdG9yeSdcclxuICB9LFxyXG4gIHNlbGVjdE1hbnlEaXJlY3Rvcnk6IHtcclxuICAgIHJlbmRlcmVyOiBEaXJlY3RvcnlSZW5kZXJlcixcclxuICAgIGVkaXRvcjogJ2RpcmVjdG9yeScsXHJcbiAgICBtdWx0aXBsZTogdHJ1ZVxyXG4gIH0sXHJcblxyXG4gIC8vIFNVR0dFU1RJT05cclxuICBzdWdnZXN0T25lRGlyZWN0b3J5OiB7XHJcbiAgICByZW5kZXJlcjogRGlyZWN0b3J5UmVuZGVyZXIsXHJcbiAgICBlZGl0b3I6ICdkaXJlY3RvcnknXHJcbiAgfSxcclxuICBzdWdnZXN0TWFueURpcmVjdG9yeToge1xyXG4gICAgcmVuZGVyZXI6IERpcmVjdG9yeVJlbmRlcmVyLFxyXG4gICAgZWRpdG9yOiAnZGlyZWN0b3J5JyxcclxuICAgIG11bHRpcGxlOiB0cnVlXHJcbiAgfSxcclxuICBzaW5nbGVVc2VyU3VnZ2VzdGlvbjoge1xyXG4gICAgcmVuZGVyZXI6IFVzZXJSZW5kZXJlcixcclxuICAgIGVkaXRvcjogJ3VzZXInXHJcbiAgfSxcclxuICBtdWx0aXBsZVVzZXJzU3VnZ2VzdGlvbjoge1xyXG4gICAgcmVuZGVyZXI6IFVzZXJSZW5kZXJlcixcclxuICAgIGVkaXRvcjogJ3VzZXInLFxyXG4gICAgbXVsdGlwbGU6IHRydWVcclxuICB9LFxyXG4gIHNpbmdsZURvY3VtZW50U3VnZ2VzdGlvbjoge1xyXG4gICAgcmVuZGVyZXI6IERvY3VtZW50UmVuZGVyZXIsXHJcbiAgICBlZGl0b3I6ICdkb2N1bWVudCcsXHJcbiAgICBtaW5pbXVtSW5wdXRMZW5ndGg6IDNcclxuICB9LFxyXG4gIG11bHRpcGxlRG9jdW1lbnRzU3VnZ2VzdGlvbjoge1xyXG4gICAgcmVuZGVyZXI6IERvY3VtZW50UmVuZGVyZXIsXHJcbiAgICBlZGl0b3I6ICdkb2N1bWVudCcsXHJcbiAgICBtdWx0aXBsZTogdHJ1ZSxcclxuICAgIG1pbmltdW1JbnB1dExlbmd0aDogM1xyXG4gIH0sXHJcblxyXG4gIC8vIElNQUdFXHJcbiAgaW1hZ2U6IHtcclxuICAgIHJlbmRlcmVyOiBJbWFnZVJlbmRlcmVyLFxyXG4gICAgaGVpZ2h0OiAnMTUwcHgnLFxyXG4gICAgcmVhZE9ubHk6IHRydWVcclxuICB9XHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLypcclxuICogKEMpIENvcHlyaWdodCAyMDE0IE51eGVvIFNBIChodHRwOi8vbnV4ZW8uY29tLykgYW5kIGNvbnRyaWJ1dG9ycy5cclxuICpcclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC4gVGhpcyBwcm9ncmFtIGFuZCB0aGUgYWNjb21wYW55aW5nIG1hdGVyaWFsc1xyXG4gKiBhcmUgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcclxuICogKExHUEwpIHZlcnNpb24gMi4xIHdoaWNoIGFjY29tcGFuaWVzIHRoaXMgZGlzdHJpYnV0aW9uLCBhbmQgaXMgYXZhaWxhYmxlIGF0XHJcbiAqIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9sZ3BsLTIuMS5odG1sXHJcbiAqXHJcbiAqIFRoaXMgbGlicmFyeSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxyXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxyXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VXHJcbiAqIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIENvbnRyaWJ1dG9yczpcclxuICogICAgIE5lbHNvbiBTaWx2YSA8bmVsc29uLnNpbHZhQGluZXZvLnB0PlxyXG4gKi9cclxuaW1wb3J0IHtDb25uZWN0aW9ufSBmcm9tICcuL251eGVvL2Nvbm5lY3Rpb24nO1xyXG5pbXBvcnQge0xvZ30gZnJvbSAnLi91aS9sb2cnO1xyXG5pbXBvcnQge1NwcmVhZHNoZWV0fSBmcm9tICcuL3VpL3NwcmVhZHNoZWV0JztcclxuaW1wb3J0IHtwYXJzZU5YUUx9IGZyb20gJy4vbnV4ZW8vdXRpbC9ueHFsJztcclxuaW1wb3J0IHtpMThufSBmcm9tICcuL3VpL2kxOG4nO1xyXG5cclxuLy8gRXh0cmFjdCB0aGUgcGFyYW1ldGVycyAoY29udGVudCB2aWV3IHN0YXRlIGFuZCBwYWdlIHByb3ZpZGVyKVxyXG52YXIgeyBjdiwgcHAgfSA9IHBhcnNlUGFyYW1zKCk7XHJcbi8vIFBhcnNlIHRoZSBjb250ZW50IHZpZXcgc3RhdGVcclxudmFyIGN2ID0gY3YgJiYgSlNPTi5wYXJzZShiNjREZWNvZGVVbmljb2RlKGN2KSk7XHJcblxyXG4vLyBDaGVjayBpZiB3ZSdyZSBpbiBzdGFuZGFsb25lIG1vZGVcclxudmFyIGlzU3RhbmRhbG9uZSA9ICFjdjtcclxuXHJcbi8vIE91ciBTcHJlYWRzaGVldCBpbnN0YW5jZVxyXG52YXIgc2hlZXQ7XHJcblxyXG52YXIgbG9nO1xyXG5cclxuZnVuY3Rpb24gc2V0dXBVSSgpIHtcclxuXHJcbiAgbG9nID0gbmV3IExvZygkKCcjY29uc29sZScpKTtcclxuXHJcbiAgLy8gU2V0dXAgcG9wdXAgVUlcclxuICBpZiAoIWlzU3RhbmRhbG9uZSkge1xyXG4gICAgJCgnI2Nsb3NlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmIChwYXJlbnQualF1ZXJ5ICYmIHBhcmVudC5qUXVlcnkuZmFuY3lib3gpIHtcclxuICAgICAgICBwYXJlbnQualF1ZXJ5LmZhbmN5Ym94LmNsb3NlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJCgnI2Nsb3NlJykudG9nZ2xlKHRydWUpO1xyXG5cclxuICAvLyBTZXR1cCBzdGFuZGFsb25lIFVJXHJcbiAgfSBlbHNlIHtcclxuICAgICQoJyNxdWVyeUFyZWEnKS50b2dnbGUodHJ1ZSk7XHJcbiAgICAkKCcjZXhlY3V0ZScpLmNsaWNrKGRvUXVlcnkpO1xyXG4gIH1cclxuXHJcbiAgJCgnI3NhdmUnKS5jbGljaygoKSA9PiB7XHJcbiAgICBsb2cuaW5mbyhpMThuKCdzYXZpbmcnKSk7XHJcbiAgICBzaGVldC5zYXZlKCkudGhlbigocmVzdWx0cykgPT4ge1xyXG4gICAgICBpZiAoIXJlc3VsdHMpIHtcclxuICAgICAgICBsb2cuZXJyb3IoaTE4bignZmFpbGVkU2F2ZScpKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdmFyIG1zZztcclxuICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgbXNnID0gaTE4bigndXBUb0RhdGUnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtc2cgPSBgJHtyZXN1bHRzLmxlbmd0aH0gJHtpMThuKCdyb3dzU2F2ZWQnKX1gO1xyXG4gICAgICB9XHJcbiAgICAgIGxvZy5pbmZvKG1zZyk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgJCgnaW5wdXRbbmFtZT1hdXRvc2F2ZV0nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgIHNoZWV0LmF1dG9zYXZlID0gJCh0aGlzKS5pcygnOmNoZWNrZWQnKTtcclxuICAgIGlmIChzaGVldC5hdXRvc2F2ZSkge1xyXG4gICAgICBsb2cuZGVmYXVsdChpMThuKCdhdXRvU2F2ZScpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvZy5kZWZhdWx0KCcnKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkuYWpheFN0YXJ0KCgpID0+ICQoJyNsb2FkaW5nJykuc2hvdygpKTtcclxuICAkKGRvY3VtZW50KS5hamF4U3RvcCgoKSA9PiAkKCcjbG9hZGluZycpLmhpZGUoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvUXVlcnkoKSB7XHJcbiAgLy8gT25seSBwYXJzZSBxdWVyaWVzIGluIHN0YW5kYWxvbmUgbW9kZVxyXG4gIGlmIChpc1N0YW5kYWxvbmUpIHtcclxuICAgIHZhciBxID0gJCgnI3F1ZXJ5JykudmFsKCk7XHJcbiAgICBzaGVldC5ueHFsID0gcGFyc2VOWFFMKHEpO1xyXG4gIH1cclxuICByZXR1cm4gc2hlZXQudXBkYXRlKCkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XHJcbiAgICBsb2cuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBydW4oYmFzZVVSTCA9ICcvbnV4ZW8nLCB1c2VybmFtZSA9IG51bGwsIHBhc3N3b3JkID0gbnVsbCkge1xyXG5cclxuICAvLyBTZXR1cCBvdXIgY29ubmVjdGlvblxyXG4gIHZhciBueCA9IG5ldyBDb25uZWN0aW9uKGJhc2VVUkwsIHVzZXJuYW1lLCBwYXNzd29yZCk7XHJcbiAgbnguc2NoZW1hcyhbJyonXSk7XHJcblxyXG4gIHNldHVwVUkoKTtcclxuXHJcbiAgcmV0dXJuIG54LmNvbm5lY3QoKS50aGVuKCgpID0+IHtcclxuXHJcbiAgICAvLyBTZXR1cCB0aGUgbGFuZ3VhZ2VcclxuICAgIGxldCBsYW5ndWFnZSA9IChudXhlbyAmJiBudXhlby5zcHJlYWRzaGVldCAmJiBudXhlby5zcHJlYWRzaGVldC5sYW5ndWFnZSkgPyBudXhlby5zcHJlYWRzaGVldC5sYW5ndWFnZS5zcGxpdCgnXycpWzBdIDogJ2VuJztcclxuXHJcbiAgICAvLyBFeHRyYWN0IGNvbnRlbnQgdmlldyBjb25maWd1cmF0aW9uXHJcbiAgICBsZXQgcmVzdWx0TGF5b3V0TmFtZSA9IGN2ICYmIGN2LnJlc3VsdExheW91dCAmJiBjdi5yZXN1bHRMYXlvdXQubmFtZTtcclxuICAgIGxldCByZXN1bHRDb2x1bW5zID0gY3YgJiYgY3YucmVzdWx0Q29sdW1ucztcclxuICAgIGxldCBwYWdlUHJvdmlkZXJOYW1lID0gY3YgPyBjdi5wYWdlUHJvdmlkZXJOYW1lIDogKHBwIHx8ICdzcHJlYWRzaGVldF9xdWVyeScpO1xyXG5cclxuICAgIC8vIGRlZmF1bHQgY29sdW1uc1xyXG4gICAgaWYgKCFyZXN1bHRMYXlvdXROYW1lICYmICghcmVzdWx0Q29sdW1ucyB8fCByZXN1bHRDb2x1bW5zLmxlbmd0aCA9PT0gMCkpIHtcclxuICAgICAgcmVzdWx0Q29sdW1ucyA9IFtcclxuICAgICAgICB7IGxhYmVsOiAnVGl0bGUnLCBmaWVsZDogJ2RjOnRpdGxlJyB9LFxyXG4gICAgICAgIHsgbGFiZWw6ICdNb2RpZmllZCcsIGZpZWxkOiAnZGM6bW9kaWZpZWQnfSxcclxuICAgICAgICB7IGxhYmVsOiAnTGFzdCBDb250cmlidXRvcicsIGZpZWxkOiAnZGM6bGFzdENvbnRyaWJ1dG9yJ30sXHJcbiAgICAgICAgeyBsYWJlbDogJ1N0YXRlJywgZmllbGQ6ICdjdXJyZW50TGlmZUN5Y2xlU3RhdGUnfVxyXG4gICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHVwIHRoZSBTcHJlYWRTaGVldFxyXG4gICAgc2hlZXQgPSBuZXcgU3ByZWFkc2hlZXQoJCgnI2dyaWQnKSwgbngsIHJlc3VsdExheW91dE5hbWUsIHJlc3VsdENvbHVtbnMsIHBhZ2VQcm92aWRlck5hbWUsIGxhbmd1YWdlKTtcclxuXHJcbiAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgY29udGVudCB2aWV3IHdlJ3JlIGRvbmUuLi5cclxuICAgIGlmIChpc1N0YW5kYWxvbmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gLi4uIG90aGVyd2lzZSBsZXQncyBzZXQgaXQgdXBcclxuXHJcbiAgICAvLyBBZGQgcXVlcnkgcGFyYW1ldGVyc1xyXG4gICAgaWYgKGN2LnF1ZXJ5UGFyYW1ldGVycykge1xyXG4gICAgICBzaGVldC5xdWVyeVBhcmFtZXRlcnMgPSBjdi5xdWVyeVBhcmFtZXRlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIHRoZSBzZWFyY2ggZG9jdW1lbnRcclxuICAgIGlmIChjdi5zZWFyY2hEb2N1bWVudCkge1xyXG4gICAgICB2YXIgbmFtZWRQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgIGZvciAodmFyIGsgaW4gY3Yuc2VhcmNoRG9jdW1lbnQucHJvcGVydGllcykge1xyXG4gICAgICAgIHZhciB2ID0gY3Yuc2VhcmNoRG9jdW1lbnQucHJvcGVydGllc1trXTtcclxuICAgICAgICAvLyBza2lwIG51bGwgb3IgZW1wdHkgdmFsdWVzXHJcbiAgICAgICAgaWYgKHYgPT0gbnVsbCB8fCAoKHR5cGVvZih2Lmxlbmd0aCkgIT09ICd1bmRlZmluZWQnKSAmJiAodi5sZW5ndGggPT09IDApKSkge1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5hbWVkUGFyYW1ldGVyc1trXSA9ICh0eXBlb2YgdiA9PT0gJ3N0cmluZycpID8gdiA6IEpTT04uc3RyaW5naWZ5KHYpO1xyXG4gICAgICB9XHJcbiAgICAgIHNoZWV0Lm5hbWVkUGFyYW1ldGVycyA9IG5hbWVkUGFyYW1ldGVycztcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgc29ydCBpbmZvc1xyXG4gICAgaWYgKGN2LnNvcnRJbmZvcyAmJiBjdi5zb3J0SW5mb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICBzaGVldC5zb3J0SW5mb3MgPSBjdi5zb3J0SW5mb3M7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUnVuIHRoZSBxdWVyeVxyXG4gICAgcmV0dXJuIGRvUXVlcnkoKTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gVXRpbHNcclxuZnVuY3Rpb24gcGFyc2VQYXJhbXMoKSB7XHJcbiAgdmFyIHBhcmFtZXRlcnMgPSB7fTtcclxuICB2YXIgcXVlcnkgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoJz8nLCAnJyk7XHJcbiAgaWYgKHF1ZXJ5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIHBhcmFtZXRlcnM7XHJcbiAgfVxyXG4gIHZhciBwYXJhbXMgPSBxdWVyeS5zcGxpdCgnJicpO1xyXG4gIGZvciAodmFyIHBhcmFtIG9mIHBhcmFtcykge1xyXG4gICAgdmFyIFtrLCB2XSA9IHBhcmFtLnNwbGl0KCc9Jyk7XHJcbiAgICB2ID0gdi5yZXBsYWNlKC9cXCsvZywgJyAnKTtcclxuICAgIHBhcmFtZXRlcnNba10gPSBkZWNvZGVVUklDb21wb25lbnQodik7XHJcbiAgfVxyXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xyXG59XHJcblxyXG4vLyBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd0Jhc2U2NC9CYXNlNjRfZW5jb2RpbmdfYW5kX2RlY29kaW5nXHJcbmZ1bmN0aW9uIGI2NERlY29kZVVuaWNvZGUoc3RyKSB7XHJcbiAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChhdG9iKHN0cikuc3BsaXQoJycpLm1hcChmdW5jdGlvbihjKSB7XHJcbiAgICAgIHJldHVybiAnJScgKyAoJzAwJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcclxuICB9KS5qb2luKCcnKSk7XHJcbn1cclxuXHJcbnJ1bigpO1xyXG5cclxuZXhwb3J0IHtydW59O1xyXG4iXSwibmFtZXMiOlsiQ29ubmVjdGlvbiIsIl9udXhlbyRDbGllbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJiYXNlVVJMIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIl9jbGFzc0NhbGxDaGVjayIsImNhbGwiLCJ0aW1lb3V0IiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiZ2V0IiwiX2Jhc2VVUkwiLCJ2YWx1ZSIsImNvbm5lY3QiLCJfdGhpcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaGVhZGVycyIsInhockZpZWxkcyIsIl91c2VybmFtZSIsIl9wYXNzd29yZCIsIkF1dGhvcml6YXRpb24iLCJidG9hIiwid2l0aENyZWRlbnRpYWxzIiwiJCIsImFqYXgiLCJ0eXBlIiwidXJsIiwiY29uY2F0IiwiX2F1dG9tYXRpb25VUkwiLCJkb25lIiwiZGF0YSIsInRleHRTdGF0dXMiLCJqcVhIUiIsImNvbm5lY3RlZCIsIkVycm9yIiwiZmFpbCIsImVycm9yVGhyb3duIiwibnV4ZW8iLCJDbGllbnQiLCJXaWRnZXQiLCJMYXlvdXQiLCJjb25uIiwibmFtZSIsImxhbmciLCJ3aWRnZXRzIiwiZmV0Y2giLCJyZXF1ZXN0IiwicmVwb3NpdG9yeU5hbWUiLCJfdXJsIiwiZXJyb3IiLCJkZWYiLCJmb3JFYWNoIiwid2lkZ2V0IiwiY29sdW1ucyIsInJvd3MiLCJSZXF1ZXN0IiwicGF0aCIsIl9wYXJhbXMiLCJfaGVhZGVycyIsInNldCIsImxzdCIsImpvaW4iLCJleGVjdXRlIiwibWV0aG9kIiwicXVlcnkiLCJQQVRIIiwiU2NoZW1hcyIsIl9SZXF1ZXN0IiwiY29ubmVjdGlvbiIsInNjaGVtYXMiLCJ0aGVuIiwiZW50cmllcyIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImVudHJ5IiwiaW5kZXhPZiIsImVyciIsImUiLCJmIiwicHJvbWlzZXMiLCJtYXAiLCJfZmV0Y2hGaWVsZHNCeVNjaGVtYSIsImFsbCIsInZhbHVlcyIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJmaWVsZHMiLCJzY2hlbWEiLCJPcGVyYXRpb24iLCJEaXJlY3RvcnkiLCJfT3BlcmF0aW9uIiwiZGlyZWN0b3J5TmFtZSIsImxhbmd1YWdlIiwicGFyYW1zIiwidHJhbnNsYXRlTGFiZWxzIiwiZmxhZyIsImRibDEwbiIsImxvY2FsaXplIiwic2VhcmNoIiwidGVybSIsInNlYXJjaFRlcm0iLCJvcElkIiwiZW5yaWNoIiwib2JqZWN0VHlwZSIsIl9sZW4iLCJlbnJpY2hlcnMiLCJBcnJheSIsIl9rZXkiLCJfbGVuMiIsInBhcnRzIiwiX2tleTIiLCJ0cmFuc2xhdGUiLCJfbGVuMyIsImVsZW1lbnRzIiwiX2tleTMiLCJvcGVyYXRpb24iLCJRdWVyeSIsInEiLCJwIiwibmFtZWRQYXJhbWV0ZXJzIiwicXVlcnlQYXJhbXMiLCJwcm92aWRlck5hbWUiLCJjdXJyZW50UGFnZUluZGV4IiwicGFnZVNpemUiLCJzb3J0QnkiLCJzb3J0T3JkZXIiLCJydW4iLCJOWFFMUXVlcnkiLCJueHFsIiwicmVzdWx0IiwiTlhRTFJFIiwiZXhlYyIsInNsaWNlIiwiYyIsImNsYXVzZSIsIndoZXJlQ2xhdXNlIiwidG9TdHJpbmciLCJSZWdFeHAiLCJRVUVSWV9GSVhFRF9QQVJUIiwicGFyc2VOWFFMIiwiYWRkV2hlcmVDbGF1c2UiLCJjb25zb2xlIiwibG9nIiwiZGVmaW5pdGlvbiIsImZpZWxkIiwiZmllbGROYW1lIiwicmVwbGFjZSIsInN0YXJ0c1dpdGgiLCJzdWJzdHIiLCJsYWJlbHMiLCJhbnkiLCJ0IiwicHJvcGVydGllcyIsIldJREdFVFMiLCJXSURHRVRfVFlQRVMiLCJDb2x1bW4iLCJkZWZhdWx0UmVuZGVyZXIiLCJIYW5kc29udGFibGUiLCJyZW5kZXJlcnMiLCJUZXh0UmVuZGVyZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJzb3J0UHJvcGVydHlOYW1lIiwiQ1VTVE9NX0ZJRUxEUyIsInJlbmRlcmVyIiwiYmluZCIsImhlYWRlciIsImxhYmVsIiwidXNlRmlyc3RXaWRnZXRMYWJlbEFzQ29sdW1uSGVhZGVyIiwicmVhZE9ubHkiLCJTZWxlY3QyRWRpdG9yIiwiRGlyZWN0b3J5RWRpdG9yIiwiX1NlbGVjdDJFZGl0b3IiLCJhcHBseSIsInByZXBhcmUiLCJyb3ciLCJjb2wiLCJwcm9wIiwidGQiLCJvcmlnaW5hbFZhbHVlIiwiY2VsbFByb3BlcnRpZXMiLCJfbGFiZWxzIiwiaXNBcnJheSIsInByZXBhcmVFbnRpdHkiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiZW50aXR5IiwiX2lzRGlyZWN0b3J5RW50cnkiLCJpZCIsInBhcmVudCIsImNlbGxMYWJlbHMiLCJnZXRFbnRyeUxhYmVsIiwic2F2ZVZhbHVlIiwidmFsIiwiY3RybERvd24iLCJzcGxpdCIsImNvbHVtbiIsIm11bHRpcGxlIiwiZGlyZWN0b3J5Iiwib25TZWxlY3RlZCIsImV2dCIsImNob2ljZSIsImNvbXB1dGVkSWQiLCJhYnNvbHV0ZUxhYmVsIiwiaW5zdGFuY2UiLCJnZXRDZWxsTWV0YSIsImNlbGxNZXRhIiwiZ2V0U2V0dGluZ3MiLCJnZXRTb3VyY2VEYXRhQXRSb3ciLCJyZXN1bHRGb3JtYXR0ZXIiLCJkaXNwbGF5TGFiZWwiLCJmb3JtYXR0ZXIiLCJpc0RibDEwbiIsInRleHQiLCJnZXRFbnRyeUlkIiwiaXRlbSIsIkRpcmVjdG9yeVJlbmRlcmVyIiwidiIsIkRvY3VtZW50RWRpdG9yIiwidSIsInBhZ2VQcm92aWRlciIsInBhZ2VQcm92aWRlck5hbWUiLCJwYWdlIiwiZG9jIiwidGl0bGUiLCJ1aWQiLCJEb2N1bWVudFJlbmRlcmVyIiwiZCIsIkltYWdlUmVuZGVyZXIiLCJpbWciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJ3aWR0aCIsInNldEF0dHJpYnV0ZSIsImhlaWdodCIsIkRvbSIsImVtcHR5IiwiYXBwZW5kQ2hpbGQiLCJfSGFuZHNvbnRhYmxlJGVkaXRvcnMiLCJlZGl0b3JzIiwiVGV4dEVkaXRvciIsImlzTXVsdGlwbGUiLCJvcHRpb25zIiwicmVzdWx0cyIsImNhbGxiYWNrIiwiZHJvcGRvd25BdXRvV2lkdGgiLCJhbGxvd0NsZWFyIiwibWluaW11bUlucHV0TGVuZ3RoIiwiZm9ybWF0UmVzdWx0IiwiZm9ybWF0U2VsZWN0aW9uIiwic2VsZWN0aW9uRm9ybWF0dGVyIiwicGxhY2Vob2xkZXIiLCJpbml0U2VsZWN0aW9uIiwib3BlbiIsIiR0ZXh0YXJlYSIsIm9uIiwib25SZW1vdmVkIiwiX3RoaXMyIiwiZWxlbWVudCIsImdldFNlbGVjdGlvblRleHQiLCJVc2VyRWRpdG9yIiwicHJlZml4ZWRfaWQiLCJvcCIsIndpZGdldFByb3BlcnRpZXMiLCJ1c2VyU3VnZ2VzdGlvblNlYXJjaFR5cGUiLCJzZWFyY2hUeXBlIiwiVXNlclJlbmRlcmVyIiwiaTE4biIsInNwcmVhZHNoZWV0IiwiTG9nIiwiZWwiLCJfZGVmYXVsdCIsImluZm8iLCJtc2ciLCJTcHJlYWRzaGVldCIsImNvbnRhaW5lciIsImxheW91dCIsIl9kYXRhIiwiYXV0b0NvbHVtblNpemUiLCJjb2xXaWR0aHMiLCJzdHJldGNoSCIsInJvd0hlYWRlcnMiLCJtYW51YWxDb2x1bW5SZXNpemUiLCJzdGFydFJvd3MiLCJjdXJyZW50Um93Q2xhc3NOYW1lIiwiY3VycmVudENvbENsYXNzTmFtZSIsImNvbnRleHRNZW51IiwiYWZ0ZXJDaGFuZ2UiLCJvbkNoYW5nZSIsImJlZm9yZUF1dG9maWxsIiwiY2VsbHMiLCJjcmVhdGVDZWxsIiwiZGVwdGgiLCJsIiwiY29scyIsImZpbHRlciIsInNlbGVjdGVkQnlEZWZhdWx0IiwiZGlydHlSZW5kZXJlciIsImhhc1N1cHBvcnRlZFdpZGdldFR5cGUiLCJzY2hlbWFzUHJlZml4ZXMiLCJwdXNoIiwiX2MkZmllbGQkc3BsaXQiLCJfYyRmaWVsZCRzcGxpdDIiLCJfc2xpY2VkVG9BcnJheSIsImVuZHNXaXRoIiwiY29uc3RyYWludHMiLCJpdGVtQ29uc3RyYWludHMiLCJjb25zdHJhaW50IiwicGFyYW1ldGVycyIsImluY2x1ZGVHcm91cHMiLCJpbmNsdWRlVXNlcnMiLCJoYW5kc29udGFibGUiLCJodCIsImxvYWREYXRhIiwiZ2V0RGF0YUF0Um93IiwiX2NvbHVtbnMiLCJfY29sdW1uc0J5RmllbGQiLCJfaXRlcmF0b3IzIiwiX3N0ZXAzIiwiX3VwZGF0ZSIsImNlbGwiLCJwZXJtaXNzaW9ucyIsImNvbnRleHRQYXJhbWV0ZXJzIiwicXVlcnlQYXJhbWV0ZXJzIiwic29ydEluZm9zIiwic29ydENvbHVtbiIsInNvcnRBc2NlbmRpbmciLCJfZmV0Y2giLCJ1cGRhdGVTZXR0aW5ncyIsIm1heFJvd3MiLCJyZW5kZXIiLCJpc05leHRQYWdlQXZhaWxhYmxlIiwidXBkYXRlIiwiX2RpcnR5IiwiY2xlYXJVbmRvIiwic2F2ZSIsIl90aGlzMyIsImtleXMiLCJwdXQiLCJfZXJyb3IiLCJjYXRjaCIsImNoYW5nZSIsInNvdXJjZSIsImkiLCJfY2hhbmdlJGkiLCJpZHgiLCJvbGRWIiwibmV3ViIsImF1dG9zYXZlIiwic3RhcnQiLCJlbmQiLCJnZXRJbnN0YW5jZSIsImVkaXRvciIsImdldEFjdGl2ZUVkaXRvciIsIndhcm4iLCJkcmFnZ2luZ0RpcmVjdGlvbiIsIldhbGtvbnRhYmxlQ2VsbFJhbmdlIiwiZ2V0U2VsZWN0ZWRSYW5nZSIsImhpZ2hsaWdodCIsImdldERpcmVjdGlvbiIsImNoYXJBdCIsInJldmVyc2UiLCJvcmlnaW5hbENvcm5lckNlbGwiLCJfZ2V0Q29ybmVyQ2VsbCIsImZyb20iLCJ0byIsImoiLCJkYXRhUm93SW5kZXgiLCJkYXRhQ29sSW5kZXgiLCJkYXRhRW50cnkiLCJmb3JtYXR0ZWRMYWJlbCIsIm9yaWdpbmFsQ2VsbCIsInJhbmdlIiwiZ2V0Qm90dG9tUmlnaHRDb3JuZXIiLCJnZXRCb3R0b21MZWZ0Q29ybmVyIiwiZ2V0VG9wTGVmdENvcm5lciIsImdldFRvcFJpZ2h0Q29ybmVyIiwiY29sb3IiLCJoYXNPd25Qcm9wZXJ0eSIsImhhc1Byb3AiLCJjc3MiLCJiYWNrZ3JvdW5kIiwiZGVzdHJveSIsImV4dGVuZCIsImNvbEhlYWRlcnMiLCJSZWFkT25seVJlbmRlcmVyIiwic3R5bGUiLCJyZWdpc3RlclJlbmRlcmVyIiwib2JqIiwic2hpZnQiLCJyZWdpc3RlckVkaXRvciIsImxpc3RpbmdfY292ZXJhZ2UiLCJsaXN0aW5nX3N1YmplY3RzIiwibGlzdGluZ192ZXJzaW9uIiwibGlzdGluZ19sYXN0X2NvbnRyaWJ1dG9yIiwibGlzdGluZ190aXRsZV9saW5rIiwibGlzdGluZ190aHVtYm5haWwiLCJ0ZXh0YXJlYSIsImRhdGUiLCJkYXRldGltZSIsImRhdGVGb3JtYXQiLCJudW1lcmljIiwiaW50Iiwic2VsZWN0T25lRGlyZWN0b3J5Iiwic2VsZWN0TWFueURpcmVjdG9yeSIsInN1Z2dlc3RPbmVEaXJlY3RvcnkiLCJzdWdnZXN0TWFueURpcmVjdG9yeSIsInNpbmdsZVVzZXJTdWdnZXN0aW9uIiwibXVsdGlwbGVVc2Vyc1N1Z2dlc3Rpb24iLCJzaW5nbGVEb2N1bWVudFN1Z2dlc3Rpb24iLCJtdWx0aXBsZURvY3VtZW50c1N1Z2dlc3Rpb24iLCJpbWFnZSIsIl9wYXJzZVBhcmFtcyIsInBhcnNlUGFyYW1zIiwiY3YiLCJwcCIsIkpTT04iLCJwYXJzZSIsImI2NERlY29kZVVuaWNvZGUiLCJpc1N0YW5kYWxvbmUiLCJzaGVldCIsInNldHVwVUkiLCJjbGljayIsImpRdWVyeSIsImZhbmN5Ym94IiwiY2xvc2UiLCJ0b2dnbGUiLCJkb1F1ZXJ5IiwiaXMiLCJkZWZhdWx0IiwiYWpheFN0YXJ0Iiwic2hvdyIsImFqYXhTdG9wIiwiaGlkZSIsIm1lc3NhZ2UiLCJueCIsInJlc3VsdExheW91dE5hbWUiLCJyZXN1bHRMYXlvdXQiLCJyZXN1bHRDb2x1bW5zIiwic2VhcmNoRG9jdW1lbnQiLCJrIiwic3RyaW5naWZ5Iiwid2luZG93IiwibG9jYXRpb24iLCJwYXJhbSIsIl9wYXJhbSRzcGxpdCIsIl9wYXJhbSRzcGxpdDIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzdHIiLCJhdG9iIiwiY2hhckNvZGVBdCJdLCJzb3VyY2VSb290IjoiIn0=