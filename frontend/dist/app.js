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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/static/styles/styles.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/static/styles/styles.scss ***!
  \********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Robotoregular.ttf */ \"./src/static/fonts/Robotoregular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Robotomedium.ttf */ \"./src/static/fonts/Robotomedium.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Robotobold.ttf */ \"./src/static/fonts/Robotobold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: \"RobotoRegular\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n@font-face {\n  font-family: \"RobotoMedium\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n@font-face {\n  font-family: \"RobotoBold\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n}\n.login-box {\n  margin-top: 100px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.login-box form .input-group input {\n  width: 397px;\n}\n.login-box .card h1 {\n  margin-top: 60px;\n  font-family: \"RobotoMedium\", sans-serif;\n  font-size: 40px;\n  text-align: center;\n}\n.login-box .error {\n  display: none;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://homework19_lumincoin/./src/static/styles/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://homework19_lumincoin/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://homework19_lumincoin/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://homework19_lumincoin/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://homework19_lumincoin/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://homework19_lumincoin/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://homework19_lumincoin/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://homework19_lumincoin/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://homework19_lumincoin/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://homework19_lumincoin/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _static_styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static/styles/styles.scss */ \"./src/static/styles/styles.scss\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ \"./src/router.js\");\n\n\n\nclass App {\n    constructor() {\n        new _router__WEBPACK_IMPORTED_MODULE_1__.Router();\n    }\n}\n\n(new App());\n\n//# sourceURL=webpack://homework19_lumincoin/./src/app.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Router: () => (/* binding */ Router)\n/* harmony export */ });\n/* harmony import */ var _templates_components_incomes_incomes_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates/components/incomes/incomes-view */ \"./src/templates/components/incomes/incomes-view.js\");\n/* harmony import */ var _templates_components_incomes_incomes_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/components/incomes/incomes-create */ \"./src/templates/components/incomes/incomes-create.js\");\n/* harmony import */ var _templates_components_incomes_incomes_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/components/incomes/incomes-edit */ \"./src/templates/components/incomes/incomes-edit.js\");\n/* harmony import */ var _templates_components_expenses_expenses_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/components/expenses/expenses-edit */ \"./src/templates/components/expenses/expenses-edit.js\");\n/* harmony import */ var _templates_components_expenses_expenses_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/components/expenses/expenses-view */ \"./src/templates/components/expenses/expenses-view.js\");\n/* harmony import */ var _templates_components_expenses_expenses_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templates/components/expenses/expenses-create */ \"./src/templates/components/expenses/expenses-create.js\");\n/* harmony import */ var _templates_components_incomes_expenses_incomes_expenses_edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/components/incomes-expenses/incomes-expenses-edit */ \"./src/templates/components/incomes-expenses/incomes-expenses-edit.js\");\n/* harmony import */ var _templates_components_incomes_expenses_incomes_expenses_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./templates/components/incomes-expenses/incomes-expenses-view */ \"./src/templates/components/incomes-expenses/incomes-expenses-view.js\");\n/* harmony import */ var _templates_components_incomes_expenses_incomes_expenses_create__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templates/components/incomes-expenses/incomes-expenses-create */ \"./src/templates/components/incomes-expenses/incomes-expenses-create.js\");\n/* harmony import */ var _templates_components_auth_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./templates/components/auth/login */ \"./src/templates/components/auth/login.js\");\n/* harmony import */ var _templates_components_auth_sign_up__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./templates/components/auth/sign-up */ \"./src/templates/components/auth/sign-up.js\");\n/* harmony import */ var _templates_components_dashboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./templates/components/dashboard */ \"./src/templates/components/dashboard.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass Router {\n    constructor() {\n        this.titlePageElement = document.getElementById('title');\n        this.contentPageElement = document.getElementById('content');\n\n        this.initEvents();\n\n        this.routes = [\n            {\n                route: '/login',\n                title: 'Login',\n                filePathTemplate: '/templates/auth/login.html',\n                useLayout: false,\n                load: () => {\n                    new _templates_components_auth_login__WEBPACK_IMPORTED_MODULE_9__.Login();\n                },\n                styles: ['bootstrap.min.css'],\n                scripts: ['jquery.min.js', 'bootstrap.min.js']\n            },\n            {\n                route: '/sign-up',\n                title: 'Registration',\n                filePathTemplate: '/templates/auth/sign-up.html',\n                useLayout: false,\n                load: () => {\n                    new _templates_components_auth_sign_up__WEBPACK_IMPORTED_MODULE_10__.SignUp();\n                }\n            },\n            {\n                route: '/',\n                title: 'Dashboard',\n                filePathTemplate: '/templates/dashboard.html',\n                useLayout: '/templates/layout.html',\n                load: () => {\n                    new _templates_components_dashboard__WEBPACK_IMPORTED_MODULE_11__.Dashboard();\n                }\n            },\n            {\n                route: '/incomes',\n                title: 'Incomes',\n                filePathTemplate: '/templates/incomes/incomes.html',\n                useLayout: '/templates/layout.html',\n                load: () => {\n                    new _templates_components_incomes_incomes_view__WEBPACK_IMPORTED_MODULE_0__.IncomesView();\n                }\n            },\n            {\n                route: '/incomes/create',\n                title: 'Create an income category',\n                filePathTemplate: '/templates/incomes/create.html',\n                useLayout: '/templates/layout.html',\n                load: () => {\n                    new _templates_components_incomes_incomes_create__WEBPACK_IMPORTED_MODULE_1__.IncomesCreate();\n                }\n            },\n            {\n                route: '/incomes/edit',\n                title: 'Edit income category',\n                filePathTemplate: '/templates/incomes/edit.html',\n                useLayout: '/templates/layout.html',\n                load: () => {\n                    new _templates_components_incomes_incomes_edit__WEBPACK_IMPORTED_MODULE_2__.IncomesEdit();\n\n                }\n            },\n            {\n                route: '/expenses',\n                title: 'Create an expense category',\n                filePathTemplate: '/templates/expenses/expenses.html',\n                useLayout: '/templates/layout.html',\n                load: () => {\n                    new _templates_components_expenses_expenses_view__WEBPACK_IMPORTED_MODULE_4__.ExpensesView();\n                }\n            },\n            {\n                route: '/expenses/create',\n                title: 'Create expense category',\n                filePathTemplate: '/templates/expenses/create.html',\n                useLayout: '/templates/layout.html',\n                load: () => {\n                    new _templates_components_expenses_expenses_create__WEBPACK_IMPORTED_MODULE_5__.ExpensesCreate();\n                }\n            },\n            {\n                route: '/expenses/edit',\n                title: 'Edit expense category',\n                filePathTemplate: '/templates/expenses/edit.html',\n                useLayout: '/templates/layout.html',\n                load: () => {\n                    new _templates_components_expenses_expenses_edit__WEBPACK_IMPORTED_MODULE_3__.ExpensesEdit();\n                }\n            },\n            {\n                route: '/incomes-expenses',\n                title: 'Incomes & Expenses',\n                filePathTemplate: '/templates/incomes-expenses/incomes-expenses.html',\n                useLayout: '/templates/layout.html',\n                load: () => {\n                    new _templates_components_incomes_expenses_incomes_expenses_view__WEBPACK_IMPORTED_MODULE_7__.IncomesExpensesView();\n                }\n            },\n            {\n                route: '/incomes-expenses/create',\n                title: 'Create income/expense',\n                filePathTemplate: '/templates/incomes-expenses/create.html',\n                useLayout: '/templates/layout.html',\n                load: () => {\n                    new _templates_components_incomes_expenses_incomes_expenses_create__WEBPACK_IMPORTED_MODULE_8__.IncomesExpensesCreate();\n                }\n            },\n            {\n                route: '/incomes-expenses/edit',\n                title: 'Edit income/expense',\n                filePathTemplate: '/templates/incomes-expenses/edit.html',\n                useLayout: '/templates/layout.html',\n                load: () => {\n                    new _templates_components_incomes_expenses_incomes_expenses_edit__WEBPACK_IMPORTED_MODULE_6__.IncomesExpensesEdit();\n                }\n            },\n        ]\n    }\n\n    initEvents() {\n        window.addEventListener('DOMContentLoaded', this.activateRoute.bind(this));\n        window.addEventListener('popstate', this.activateRoute.bind(this));\n    }\n\n    async activateRoute() {\n        // Что находится в url-адресе и где находится пользователь\n        const urlRoute = window.location.pathname;\n        const newRoute = this.routes.find(item => item.route === urlRoute);\n\n        // Вставляется нужный заголовок страницы\n        if (newRoute.title) {\n            this.titlePageElement.innerText = newRoute.title + ' | Lumincoin Finance';\n        }\n\n        if (newRoute.filePathTemplate) {\n                this.contentPageElement.innerHTML = await fetch(newRoute.filePathTemplate).then(response => response.text());\n        }\n\n        // Загружаются компоненты страниц\n        if (newRoute.load && typeof newRoute.load === 'function') {\n            newRoute.load();\n        }\n    }\n}\n\n//# sourceURL=webpack://homework19_lumincoin/./src/router.js?");

/***/ }),

/***/ "./src/static/fonts/Robotobold.ttf":
/*!*****************************************!*\
  !*** ./src/static/fonts/Robotobold.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1ac02c026895c20df570.ttf\";\n\n//# sourceURL=webpack://homework19_lumincoin/./src/static/fonts/Robotobold.ttf?");

/***/ }),

/***/ "./src/static/fonts/Robotomedium.ttf":
/*!*******************************************!*\
  !*** ./src/static/fonts/Robotomedium.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"704bba02385c62b5914c.ttf\";\n\n//# sourceURL=webpack://homework19_lumincoin/./src/static/fonts/Robotomedium.ttf?");

/***/ }),

/***/ "./src/static/fonts/Robotoregular.ttf":
/*!********************************************!*\
  !*** ./src/static/fonts/Robotoregular.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ecf539e1e3bc3e936f78.ttf\";\n\n//# sourceURL=webpack://homework19_lumincoin/./src/static/fonts/Robotoregular.ttf?");

/***/ }),

/***/ "./src/static/styles/styles.scss":
/*!***************************************!*\
  !*** ./src/static/styles/styles.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/static/styles/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://homework19_lumincoin/./src/static/styles/styles.scss?");

/***/ }),

/***/ "./src/templates/components/auth/login.js":
/*!************************************************!*\
  !*** ./src/templates/components/auth/login.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Login: () => (/* binding */ Login)\n/* harmony export */ });\nclass Login {\n    constructor(openNewRoute) {\n        this.openNewRoute = openNewRoute;\n        console.log('LOGIN');\n\n        this.findElements();\n    }\n\n    findElements() {\n        this.emailElement = document.getElementById(\"email\");\n        this.passwordElement = document.getElementById(\"password\");\n        this.rememberMeElement = document.getElementById(\"remember-me\");\n        this.commonErrorElement = document.getElementById(\"common-error\");\n    }\n}\n\n//# sourceURL=webpack://homework19_lumincoin/./src/templates/components/auth/login.js?");

/***/ }),

/***/ "./src/templates/components/auth/sign-up.js":
/*!**************************************************!*\
  !*** ./src/templates/components/auth/sign-up.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SignUp: () => (/* binding */ SignUp)\n/* harmony export */ });\nclass SignUp {\n    constructor() {\n        console.log('REGISTRATION');\n    }\n}\n\n//# sourceURL=webpack://homework19_lumincoin/./src/templates/components/auth/sign-up.js?");

/***/ }),

/***/ "./src/templates/components/dashboard.js":
/*!***********************************************!*\
  !*** ./src/templates/components/dashboard.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Dashboard: () => (/* binding */ Dashboard)\n/* harmony export */ });\nclass Dashboard {\n    constructor() {\n        console.log('DASHBOARD');\n    }\n}\n\n//# sourceURL=webpack://homework19_lumincoin/./src/templates/components/dashboard.js?");

/***/ }),

/***/ "./src/templates/components/expenses/expenses-create.js":
/*!**************************************************************!*\
  !*** ./src/templates/components/expenses/expenses-create.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ExpensesCreate: () => (/* binding */ ExpensesCreate)\n/* harmony export */ });\nclass ExpensesCreate {\n    constructor() {\n        console.log('CREATE EXPENSES');\n    }\n}\n\n//# sourceURL=webpack://homework19_lumincoin/./src/templates/components/expenses/expenses-create.js?");

/***/ }),

/***/ "./src/templates/components/expenses/expenses-edit.js":
/*!************************************************************!*\
  !*** ./src/templates/components/expenses/expenses-edit.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ExpensesEdit: () => (/* binding */ ExpensesEdit)\n/* harmony export */ });\nclass ExpensesEdit {\n    constructor() {\n        console.log('EDIT EXPENSES');\n    }\n}\n\n//# sourceURL=webpack://homework19_lumincoin/./src/templates/components/expenses/expenses-edit.js?");

/***/ }),

/***/ "./src/templates/components/expenses/expenses-view.js":
/*!************************************************************!*\
  !*** ./src/templates/components/expenses/expenses-view.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ExpensesView: () => (/* binding */ ExpensesView)\n/* harmony export */ });\nclass ExpensesView {\n    constructor() {\n        console.log('VIEW EXPENSES');\n    }\n}\n\n//# sourceURL=webpack://homework19_lumincoin/./src/templates/components/expenses/expenses-view.js?");

/***/ }),

/***/ "./src/templates/components/incomes-expenses/incomes-expenses-create.js":
/*!******************************************************************************!*\
  !*** ./src/templates/components/incomes-expenses/incomes-expenses-create.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IncomesExpensesCreate: () => (/* binding */ IncomesExpensesCreate)\n/* harmony export */ });\nclass IncomesExpensesCreate {\n    constructor() {\n        console.log('CREATE INCOMES/EXPENSES');\n    }\n}\n\n//# sourceURL=webpack://homework19_lumincoin/./src/templates/components/incomes-expenses/incomes-expenses-create.js?");

/***/ }),

/***/ "./src/templates/components/incomes-expenses/incomes-expenses-edit.js":
/*!****************************************************************************!*\
  !*** ./src/templates/components/incomes-expenses/incomes-expenses-edit.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IncomesExpensesEdit: () => (/* binding */ IncomesExpensesEdit)\n/* harmony export */ });\nclass IncomesExpensesEdit {\n    constructor() {\n        console.log('EDIT INCOMES/EXPENSES');\n    }\n}\n\n//# sourceURL=webpack://homework19_lumincoin/./src/templates/components/incomes-expenses/incomes-expenses-edit.js?");

/***/ }),

/***/ "./src/templates/components/incomes-expenses/incomes-expenses-view.js":
/*!****************************************************************************!*\
  !*** ./src/templates/components/incomes-expenses/incomes-expenses-view.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IncomesExpensesView: () => (/* binding */ IncomesExpensesView)\n/* harmony export */ });\nclass IncomesExpensesView {\n    constructor() {\n        console.log('VIEW INCOMES/EXPENSES');\n    }\n}\n\n//# sourceURL=webpack://homework19_lumincoin/./src/templates/components/incomes-expenses/incomes-expenses-view.js?");

/***/ }),

/***/ "./src/templates/components/incomes/incomes-create.js":
/*!************************************************************!*\
  !*** ./src/templates/components/incomes/incomes-create.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IncomesCreate: () => (/* binding */ IncomesCreate)\n/* harmony export */ });\nclass IncomesCreate {\n    constructor() {\n        console.log('CREATE INCOMES');\n    }\n}\n\n//# sourceURL=webpack://homework19_lumincoin/./src/templates/components/incomes/incomes-create.js?");

/***/ }),

/***/ "./src/templates/components/incomes/incomes-edit.js":
/*!**********************************************************!*\
  !*** ./src/templates/components/incomes/incomes-edit.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IncomesEdit: () => (/* binding */ IncomesEdit)\n/* harmony export */ });\nclass IncomesEdit {\n    constructor() {\n        console.log('EDIT INCOMES');\n    }\n}\n\n//# sourceURL=webpack://homework19_lumincoin/./src/templates/components/incomes/incomes-edit.js?");

/***/ }),

/***/ "./src/templates/components/incomes/incomes-view.js":
/*!**********************************************************!*\
  !*** ./src/templates/components/incomes/incomes-view.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IncomesView: () => (/* binding */ IncomesView)\n/* harmony export */ });\nclass IncomesView {\n    constructor() {\n        console.log('VIEW INCOMES');\n    }\n}\n\n//# sourceURL=webpack://homework19_lumincoin/./src/templates/components/incomes/incomes-view.js?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;