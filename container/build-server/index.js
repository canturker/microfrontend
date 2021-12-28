/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes */ \"./server/routes.js\");\n/* harmony import */ var _src_components_HTML__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/HTML */ \"./src/components/HTML.js\");\n\n\n\n\n\n\n\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar PORT = process.env.PORT || 5001;\nvar app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.use(\"/static\", express__WEBPACK_IMPORTED_MODULE_3___default()[\"static\"](path.join(__dirname, \"../build\")));\n_routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"].forEach(function (route) {\n  app.get(route.path, function (req, res) {\n    var html = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_2__.StaticRouter, {\n      location: req.url\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_HTML__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null))));\n    res.send(\"<!DOCTYPE html>\" + html);\n  });\n});\napp.use(function (req, res) {\n  res.status(404);\n  var html = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_2__.StaticRouter, {\n    location: req.url\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_components_HTML__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null))));\n  res.send(\"<!DOCTYPE html>\" + html);\n});\napp.listen(PORT, function () {\n  console.log(\"Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack://@microfrontend/product/./server/index.js?");

/***/ }),

/***/ "./server/routes.js":
/*!**************************!*\
  !*** ./server/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar routes = [{\n  path: \"/\",\n  element: \"Product\"\n}, {\n  path: \"/:id\",\n  element: \"Product\"\n}, {\n  path: \"/checkout/basket\",\n  element: \"Checkout\"\n}, {\n  path: \"/checkout/payment\",\n  element: \"Checkout\"\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);\n\n//# sourceURL=webpack://@microfrontend/product/./server/routes.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router_microfrontendRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router/microfrontendRoute */ \"./src/router/microfrontendRoute.js\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar */ \"./src/components/navbar.js\");\n/* harmony import */ var _components_notfound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/notfound */ \"./src/components/notfound.js\");\n\n\n\n\n\nvar productHost = \"http://localhost:3001\";\nvar checkoutHost = \"http://localhost:3002\";\n\nvar Product = function Product(_ref) {\n  var history = _ref.history;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_router_microfrontendRoute__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    history: history,\n    host: productHost,\n    name: \"Product\"\n  });\n};\n\nvar Checkout = function Checkout(_ref2) {\n  var history = _ref2.history;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_router_microfrontendRoute__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    history: history,\n    host: checkoutHost,\n    name: \"Checkout\"\n  });\n};\n\nvar App = function App(_ref3) {\n  var history = _ref3.history;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Product, {\n      history: history\n    })\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/:id\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Product, {\n      history: history\n    })\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/checkout/basket\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Checkout, {\n      history: history\n    })\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/checkout/payment\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Checkout, {\n      history: history\n    })\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"*\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_notfound__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://@microfrontend/product/./src/App.js?");

/***/ }),

/***/ "./src/components/HTML.js":
/*!********************************!*\
  !*** ./src/components/HTML.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _webpack_assets_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../webpack-assets.json */ \"./webpack-assets.json\");\n\n\n\nvar HTML = function HTML(_ref) {\n  var children = _ref.children;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"html\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"head\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"title\", null, \"Server Rendered Microfrontend Container\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"script\", {\n    crossOrigin: \"true\",\n    src: \"https://unpkg.com/react@17/umd/react.development.js\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"script\", {\n    crossOrigin: \"true\",\n    src: \"https://unpkg.com/react-dom@17/umd/react-dom.development.js\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"body\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"container\"\n  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"script\", {\n    src: \"/static\" + _webpack_assets_json__WEBPACK_IMPORTED_MODULE_1__.main.js\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTML);\n\n//# sourceURL=webpack://@microfrontend/product/./src/components/HTML.js?");

/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar Navbar = function Navbar() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      _useState2 = _slicedToArray(_useState, 2),\n      basketItemCount = _useState2[0],\n      setBasketItemCount = _useState2[1];\n\n  var addToCartListener = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setBasketItemCount(JSON.parse(window.localStorage.getItem(\"basket_items\") || \"[]\").length);\n    addToCartListener.current = window.addEventListener(\"add_to_cart\", function (e) {\n      setBasketItemCount(e.detail.items.length);\n    });\n    return function () {\n      window.removeEventListener(addToCartListener.current);\n    };\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: navbarStyle\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png\",\n    alt: \"\",\n    height: 36\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/checkout/basket\",\n    style: basketIconStyle\n  }, \"Basket\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    style: itemCount\n  }, basketItemCount)));\n};\n\nvar navbarStyle = {\n  padding: \"15px 30px\",\n  display: \"flex\",\n  alignItems: \"center\",\n  justifyContent: \"space-between\",\n  boxShadow: \"0px 3px 25px -4px rgba(0,0,0,0.49)\",\n  zIndex: \"9\"\n};\nvar basketIconStyle = {\n  color: \"black\",\n  padding: \"5px 10px\",\n  fontSize: \"20px\",\n  fontWeight: \"600\",\n  textDecoration: \"none\",\n  border: \"1px solid red\",\n  borderRadius: \"10px\",\n  position: \"relative\"\n};\nvar itemCount = {\n  position: \"absolute\",\n  top: \"-10px\",\n  right: \"-10px\",\n  width: \"20px\",\n  height: \"20px\",\n  background: \"red\",\n  color: \"white\",\n  fontSize: \"15px\",\n  textAlign: \"center\",\n  display: \"flex\",\n  alignItems: \"center\",\n  justifyContent: \"center\",\n  borderRadius: \"100px\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);\n\n//# sourceURL=webpack://@microfrontend/product/./src/components/navbar.js?");

/***/ }),

/***/ "./src/components/notfound.js":
/*!************************************!*\
  !*** ./src/components/notfound.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar NotFound = function NotFound() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginTop: \"100px\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"404\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);\n\n//# sourceURL=webpack://@microfrontend/product/./src/components/notfound.js?");

/***/ }),

/***/ "./src/helpers/identifier.js":
/*!***********************************!*\
  !*** ./src/helpers/identifier.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isServer\": () => (/* binding */ isServer)\n/* harmony export */ });\nvar isServer = function isServer() {\n  return !(typeof window != \"undefined\" && window.document);\n};\n\n\n\n//# sourceURL=webpack://@microfrontend/product/./src/helpers/identifier.js?");

/***/ }),

/***/ "./src/router/microfrontendRoute.js":
/*!******************************************!*\
  !*** ./src/router/microfrontendRoute.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_identifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/identifier */ \"./src/helpers/identifier.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } Object.defineProperty(subClass, \"prototype\", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar MicroFrontendRoute = /*#__PURE__*/function (_React$Component) {\n  _inherits(MicroFrontendRoute, _React$Component);\n\n  var _super = _createSuper(MicroFrontendRoute);\n\n  function MicroFrontendRoute() {\n    var _this;\n\n    _classCallCheck(this, MicroFrontendRoute);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this), \"renderMicroFrontend\", function () {\n      var _this$props = _this.props,\n          name = _this$props.name,\n          window = _this$props.window,\n          history = _this$props.history;\n      window[\"render\".concat(name)](\"\".concat(name, \"-container\"), history);\n    });\n\n    return _this;\n  }\n\n  _createClass(MicroFrontendRoute, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      if ((0,_helpers_identifier__WEBPACK_IMPORTED_MODULE_1__.isServer)()) {\n        return;\n      }\n\n      var _this$props2 = this.props,\n          name = _this$props2.name,\n          host = _this$props2.host,\n          document = _this$props2.document;\n      var scriptId = \"micro-frontend-script-\".concat(name);\n      var styleId = \"micro-frontend-style-\".concat(name);\n\n      if (document.getElementById(scriptId)) {\n        this.renderMicroFrontend();\n        return;\n      }\n\n      fetch(\"\".concat(host, \"/assets-manifest.json\")).then(function (res) {\n        return res.json();\n      }).then(function (manifest) {\n        var style = document.createElement(\"link\");\n        style.id = styleId;\n        style.crossOrigin = \"\";\n        style.rel = \"stylesheet\";\n        style.href = \"\".concat(host, \"/\").concat(manifest[\"main.css\"]);\n        document.head.appendChild(style);\n        var script = document.createElement(\"script\");\n        script.id = scriptId;\n        script.crossOrigin = \"\";\n        script.src = \"\".concat(host, \"/\").concat(manifest[\"main.js\"]);\n        script.onload = _this2.renderMicroFrontend;\n        document.head.appendChild(script);\n      });\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      var _this$props3 = this.props,\n          name = _this$props3.name,\n          window = _this$props3.window;\n      window[\"unmount\".concat(name)](\"\".concat(name, \"-container\"));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"main\", {\n        id: \"\".concat(this.props.name, \"-container\")\n      }));\n    }\n  }]);\n\n  return MicroFrontendRoute;\n}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));\n\nMicroFrontendRoute.defaultProps = {\n  document: (0,_helpers_identifier__WEBPACK_IMPORTED_MODULE_1__.isServer)() ? {} : document,\n  window: (0,_helpers_identifier__WEBPACK_IMPORTED_MODULE_1__.isServer)() ? {} : window\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MicroFrontendRoute);\n\n//# sourceURL=webpack://@microfrontend/product/./src/router/microfrontendRoute.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("react-router-dom/server");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "./webpack-assets.json":
/*!*****************************!*\
  !*** ./webpack-assets.json ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"main\":{\"js\":\"/container-ce33587ee4e56fc8e7cf.js\"},\"\":{\"html\":\"/index.html\"}}');\n\n//# sourceURL=webpack://@microfrontend/product/./webpack-assets.json?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	
/******/ })()
;