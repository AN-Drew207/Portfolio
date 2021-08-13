(this["webpackJsonpportfolio"] = this["webpackJsonpportfolio"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/SASS/main.scss":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/SASS/main.scss ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_up_arrow_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/up-arrow.png */ "./src/img/up-arrow.png");
/* harmony import */ var _img_32195_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/32195.png */ "./src/img/32195.png");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_up_arrow_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_32195_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*, *::after, *::before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden;\n  font-family: 'Russo One', sans-serif; }\n\n#nav .img-logo {\n  height: 30px; }\n\n#nav .nav-item {\n  border-bottom: solid transparent 3px; }\n  #nav .nav-item:hover {\n    border-bottom: solid #d50000 3px;\n    transition: linear 1s; }\n\n#main, #about {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh; }\n  #main .xd, #about .xd {\n    z-index: 0; }\n\n.row {\n  --bs-gutter-x: 0rem; }\n\n.accordion-item {\n  background-color: transparent;\n  border: none; }\n  .accordion-item .accordion-button {\n    background-color: transparent;\n    color: #fff;\n    text-align: center; }\n    .accordion-item .accordion-button:focus {\n      border: none;\n      box-shadow: none; }\n\n.accordion-button:not(.collapsed) {\n  color: #d50000; }\n\n.accordion-button:not(.collapsed)::after {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n\n.accordion-button::after {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "); }\n\n.accordion-body {\n  color: #fff; }\n\n.carousel-indicators [data-bs-target] {\n  background-color: transparent;\n  border-bottom: solid #d50000 2px;\n  height: auto;\n  margin: 0;\n  text-indent: 0px !important;\n  width: 100%; }\n\n#about .aver {\n  background-image: linear-gradient(to left, #fff, #ddd);\n  background-repeat: no-repeat; }\n\n#projects {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100vw; }\n  #projects .row {\n    width: 90%; }\n  #projects .col-left, #projects .col-right {\n    background-color: transparent;\n    height: 80vh; }\n  #projects .col-right {\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    border: solid 3px #d50000;\n    overflow-y: hidden; }\n  #projects .project-element {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    height: 100%; }\n    #projects .project-element .project-title {\n      color: #d50000;\n      text-align: center; }\n    #projects .project-element .carousel-container {\n      width: 65%; }\n    #projects .project-element .links-container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      width: 35%; }\n      #projects .project-element .links-container .link-out {\n        color: #fff;\n        text-decoration: none; }\n        #projects .project-element .links-container .link-out:hover {\n          color: #d50000; }\n  #projects .project-link-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: auto;\n    overflow-y: hidden; }\n    #projects .project-link-container .project-link {\n      color: #d50000;\n      font-size: 20px;\n      text-decoration: none;\n      text-align: center;\n      width: 100%; }\n      #projects .project-link-container .project-link:hover {\n        background-image: linear-gradient(62deg, #d50000, #d60000);\n        color: #fff;\n        transition: ease-out 0.5s; }\n    #projects .project-link-container .activo {\n      background-image: linear-gradient(62deg, #d50000, #d60000);\n      color: #fff; }\n\n#contact {\n  width: 100vw;\n  height: 100vh; }\n\n#tsparticles {\n  position: absolute;\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n  z-index: 0;\n  overflow-y: hidden; }\n", "",{"version":3,"sources":["webpack://src/SASS/_config.scss","webpack://src/SASS/_navbar.scss","webpack://src/SASS/_mainSection.scss","webpack://src/SASS/_slider.scss","webpack://src/SASS/_about.scss","webpack://src/SASS/_projects.scss","webpack://src/SASS/_contact.scss","webpack://src/SASS/main.scss"],"names":[],"mappings":"AAAA;EACI,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,oCAAoC,EAAA;;ACLxC;EAEQ,YAAY,EAAA;;AAFpB;EAKQ,oCAAoC,EAAA;EAL5C;IAOY,gCAAiC;IACjC,qBAAqB,EAAA;;ACRjC;EACI,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa,EAAA;EALjB;IAOQ,UAAU,EAAA;;AAGlB;EACI,mBAAc,EAAA;;AAElB;EACI,6BAA6B;EAC7B,YAAY,EAAA;EAFhB;IAIQ,6BAA6B;IAC7B,WAAW;IACX,kBAAkB,EAAA;IAN1B;MAQY,YAAY;MACZ,gBAAgB,EAAA;;AAI5B;EACI,cAAc,EAAA;;AAElB;EACI,yDAA2C,EAAA;;AAG/C;EACI,yDAAyC,EAAA;;AAG7C;EACI,WAAW,EAAA;;ACtCf;EAEQ,6BAA6B;EAC7B,gCAAyD;EACzD,YAAY;EACZ,SAAS;EACT,2BAA0B;EAC1B,WAAW,EAAA;;ACPnB;EAGQ,sDAAqD;EACrD,4BAA4B,EAAA;;ACJpC;EACI,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,YAAY,EAAA;EALhB;IAOQ,UAAU,EAAA;EAPlB;IAUQ,6BAA6B;IAC7B,YAAY,EAAA;EAXpB;IAcQ,4BAA4B;IAC5B,+BAA+B;IAC/B,yBAAyB;IACzB,kBAAkB,EAAA;EAjB1B;IAoBQ,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,YAAY,EAAA;IAxBpB;MA0BY,cAAc;MACd,kBAAkB,EAAA;IA3B9B;MA8BY,UAAU,EAAA;IA9BtB;MAiCY,aAAa;MACb,sBAAsB;MACtB,mBAAmB;MACnB,uBAAuB;MACvB,UAAU,EAAA;MArCtB;QAuCgB,WAAW;QACX,qBAAqB,EAAA;QAxCrC;UA0CoB,cAAc,EAAA;EA1ClC;IAiDQ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,kBAAkB,EAAA;IArD1B;MAuDY,cAAc;MACd,eAAe;MACf,qBAAqB;MACrB,kBAAkB;MAClB,WAAW,EAAA;MA3DvB;QA6DgB,0DAA0D;QAC1D,WAAW;QACX,yBAAyB,EAAA;IA/DzC;MAmEY,0DAA0D;MAC1D,WAAW,EAAA;;ACpEvB;EACI,YAAY;EACZ,aAAa,EAAA;;ACKjB;EACI,kBAAiB;EACjB,aAAa;EACb,YAAY;EACZ,SAAS;EACT,UAAU;EACV,UAAU;EACV,kBAAkB,EAAA","sourcesContent":["*,*::after,*::before{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n    font-family: 'Russo One', sans-serif;\n}","#nav{\n    .img-logo{\n        height: 30px;\n    }\n    .nav-item{\n        border-bottom: solid transparent 3px;\n        &:hover{\n            border-bottom: solid #d50000 3px ;\n            transition: linear 1s;\n        }\n    }\n}","#main{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n    height: 100vh;\n    .xd{\n        z-index: 0;\n    }\n}\n.row{\n    --bs-gutter-x: 0rem;\n}\n.accordion-item{\n    background-color: transparent;\n    border: none;\n    .accordion-button{\n        background-color: transparent;        \n        color: #fff;\n        text-align: center;\n        &:focus{\n            border: none;\n            box-shadow: none;\n        }\n    }\n}\n.accordion-button:not(.collapsed){\n    color: #d50000;\n}\n.accordion-button:not(.collapsed)::after{\n    background-image:url(\"../img/up-arrow.png\");\n}\n\n.accordion-button::after{\n    background-image: url(\"../img/32195.png\");\n}\n\n.accordion-body{\n    color: #fff;\n}",".carousel-indicators {\n    [data-bs-target]{\n        background-color: transparent;\n        border-bottom: solid rgba($color: #d50000, $alpha: 1) 2px;\n        height: auto;\n        margin: 0;\n        text-indent: 0px!important;\n        width: 100%;\n    }\n}","#about{\n    @extend #main;\n    .aver{\n        background-image: linear-gradient(to left, #fff,#ddd);\n        background-repeat: no-repeat;\n    }\n}","#projects{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n    width: 100vw;\n    .row{\n        width: 90%;\n    }\n    .col-left, .col-right{\n        background-color: transparent;\n        height: 80vh;\n    }\n    .col-right{\n        border-top-right-radius: 5px;\n        border-bottom-right-radius: 5px;\n        border: solid 3px #d50000;\n        overflow-y: hidden;\n    }\n    .project-element{\n        align-items: center;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        height: 100%;\n        .project-title{\n            color: #d50000;\n            text-align: center;\n        }\n        .carousel-container{\n            width: 65%;\n        }\n        .links-container{\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n            width: 35%;\n            .link-out{\n                color: #fff;\n                text-decoration: none;\n                &:hover{\n                    color: #d50000;\n                }\n            }\n        }\n    }\n\n    .project-link-container{\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: auto;\n        overflow-y: hidden;\n        .project-link{\n            color: #d50000;\n            font-size: 20px;\n            text-decoration: none;\n            text-align: center;\n            width: 100%;\n            &:hover{\n                background-image: linear-gradient(62deg, #d50000, #d60000);\n                color: #fff; \n                transition: ease-out 0.5s;\n            }\n        }\n        .activo{\n            background-image: linear-gradient(62deg, #d50000, #d60000);\n            color: #fff;\n        }\n    }\n}","#contact{\n    width: 100vw;\n    height: 100vh;\n}","@import 'config';\n@import 'navbar';\n@import 'mainSection';\n@import 'slider';\n@import 'about';\n@import 'projects';\n@import 'contact';\n#tsparticles{\n    position:absolute;\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    padding: 0;\n    z-index: 0;\n    overflow-y: hidden;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/SASS/main.scss":
/*!****************************!*\
  !*** ./src/SASS/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/SASS/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/SASS/main.scss",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/SASS/main.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/About.js":
/*!*********************************!*\
  !*** ./src/components/About.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loadbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loadbar */ "./node_modules/react-loadbar/dist/index.js");
/* harmony import */ var react_loadbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loadbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_react_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/react.png */ "./src/img/react.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/andres/Documentos/React/portfolio/src/components/About.js",
    _s = __webpack_require__.$Refresh$.signature();






const About = () => {
  _s();

  const [styleBack, setStyleBack] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    backgroundSize: "100% 0px"
  });
  let charge = 0;
  const [finish] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(90);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setInterval(() => {
      charge += 1;

      if (charge < finish) {} else {
        clearInterval();
      }
    }, 1000);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("section", {
    id: "about",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "container-fluid h-100",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_loadbar__WEBPACK_IMPORTED_MODULE_1__["LoadBar"], {
        percent: charge
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, undefined);
};

_s(About, "BJwZfUNhE3RFLAFDFjz9QrsbbS8=");

_c = About;
/* harmony default export */ __webpack_exports__["default"] = (About);

var _c;

__webpack_require__.$Refresh$.register(_c, "About");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _SliderComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SliderComponent */ "./src/components/SliderComponent.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/andres/Documentos/React/portfolio/src/components/App.js";




function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_SliderComponent__WEBPACK_IMPORTED_MODULE_0__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Contact.js":
/*!***********************************!*\
  !*** ./src/components/Contact.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/andres/Documentos/React/portfolio/src/components/Contact.js";



const Contact = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    className: "row",
    id: "contact",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "col-sm-6",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          children: "Github"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          children: "Github"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          children: "Github"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          children: "Github"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "col-sm-6",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          children: "Github"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          children: "Github"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          children: "Github"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          children: "Github"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

_c = Contact;
/* harmony default export */ __webpack_exports__["default"] = (Contact);

var _c;

__webpack_require__.$Refresh$.register(_c, "Contact");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/MainSection.js":
/*!***************************************!*\
  !*** ./src/components/MainSection.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_AC_Logo_alternativo_transparente_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/AC-Logo-alternativo-transparente.png */ "./src/img/AC-Logo-alternativo-transparente.png");
/* harmony import */ var react_loadbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loadbar */ "./node_modules/react-loadbar/dist/index.js");
/* harmony import */ var react_loadbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loadbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/andres/Documentos/React/portfolio/src/components/MainSection.js",
    _s = __webpack_require__.$Refresh$.signature();






const MainSection = () => {
  _s();

  let charge = 90;
  const [finish] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(90);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("section", {
    id: "main",
    className: "row",
    style: {
      backgroundColor: 'transparent'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "xd col-sm-6 d-flex align-items-center justify-content-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
        className: "logo-main img-fluid w-100",
        src: _img_AC_Logo_alternativo_transparente_png__WEBPACK_IMPORTED_MODULE_1__["default"],
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "xd col-sm-4 d-flex flex-column aling-items-center justify-content-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
        className: "text-main text-center text-white",
        children: ["I'm ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
          style: {
            color: '#dd0000'
          },
          children: "Andr\xE9s Contreras"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
        className: "text-main text-center text-white",
        children: ["a ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
          style: {
            color: '#dd0000'
          },
          children: "Front-End"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 23
        }, undefined), " Developer"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_loadbar__WEBPACK_IMPORTED_MODULE_2__["LoadBar"], {
        percent: charge
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined);
};

_s(MainSection, "fCPVNMI5WlaSncgs6QGKwLFEwd0=");

_c = MainSection;
/* harmony default export */ __webpack_exports__["default"] = (MainSection);

var _c;

__webpack_require__.$Refresh$.register(_c, "MainSection");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Projects/Projects.js":
/*!*********************************************!*\
  !*** ./src/components/Projects/Projects.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SingleProjectComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleProjectComponent */ "./src/components/Projects/SingleProjectComponent.js");
/* harmony import */ var _img_AN_Drew_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/AN-Drew/1.png */ "./src/img/AN-Drew/1.png");
/* harmony import */ var _img_AN_Drew_2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/AN-Drew/2.png */ "./src/img/AN-Drew/2.png");
/* harmony import */ var _img_AN_Drew_3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/AN-Drew/3.png */ "./src/img/AN-Drew/3.png");
/* harmony import */ var _img_Calculator_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/Calculator/1.png */ "./src/img/Calculator/1.png");
/* harmony import */ var _img_Calculator_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/Calculator/2.png */ "./src/img/Calculator/2.png");
/* harmony import */ var _img_Calculator_3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/Calculator/3.png */ "./src/img/Calculator/3.png");
/* harmony import */ var _img_Documentation_1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../img/Documentation/1.png */ "./src/img/Documentation/1.png");
/* harmony import */ var _img_Documentation_2_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../img/Documentation/2.png */ "./src/img/Documentation/2.png");
/* harmony import */ var _img_Documentation_3_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../img/Documentation/3.png */ "./src/img/Documentation/3.png");
/* harmony import */ var _img_Ecommerce_1_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../img/Ecommerce/1.png */ "./src/img/Ecommerce/1.png");
/* harmony import */ var _img_Ecommerce_2_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../img/Ecommerce/2.png */ "./src/img/Ecommerce/2.png");
/* harmony import */ var _img_Ecommerce_3_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../img/Ecommerce/3.png */ "./src/img/Ecommerce/3.png");
/* harmony import */ var _img_To_do_1_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../img/To-do/1.png */ "./src/img/To-do/1.png");
/* harmony import */ var _img_To_do_2_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../img/To-do/2.png */ "./src/img/To-do/2.png");
/* harmony import */ var _img_To_do_3_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../img/To-do/3.png */ "./src/img/To-do/3.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/andres/Documentos/React/portfolio/src/components/Projects/Projects.js",
    _s = __webpack_require__.$Refresh$.signature();




















const Projects = () => {
  _s();

  const [projects] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    id: 1,
    title: "ROPA Ecommerce WebSide",
    images: {
      image1: _img_Ecommerce_1_png__WEBPACK_IMPORTED_MODULE_11__["default"],
      image2: _img_Ecommerce_2_png__WEBPACK_IMPORTED_MODULE_12__["default"],
      image3: _img_Ecommerce_3_png__WEBPACK_IMPORTED_MODULE_13__["default"]
    },
    description: "ROPA Ecommerce WebSide is an Ecommerce Example with all the features that an Ecommerce needs, Products setions, Cart, Single Products-Page.",
    repository: "https://github.com/AN-Drew207/ROPA-Ecommerce"
  }, {
    id: 2,
    title: "AN-Drew Official WebPage",
    images: {
      image1: _img_AN_Drew_1_png__WEBPACK_IMPORTED_MODULE_2__["default"],
      image2: _img_AN_Drew_2_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      image3: _img_AN_Drew_3_png__WEBPACK_IMPORTED_MODULE_4__["default"]
    },
    description: "This is my page as a singer, in that I show all my songs and some things about me as an artist.",
    repository: "https://github.com/AN-Drew207/AN-Drew-Web"
  }, {
    id: 3,
    title: "To-do List",
    images: {
      image1: _img_To_do_1_png__WEBPACK_IMPORTED_MODULE_14__["default"],
      image2: _img_To_do_2_png__WEBPACK_IMPORTED_MODULE_15__["default"],
      image3: _img_To_do_3_png__WEBPACK_IMPORTED_MODULE_16__["default"]
    },
    description: "This is a to-do list where you can save your tasks that you have to do in the day. Don't worry if you have to close your browser, your tasks will be waiting for you when you open the page again.",
    repository: "https://github.com/AN-Drew207/To-do-list"
  }, {
    id: 4,
    title: "Calculator",
    images: {
      image1: _img_Calculator_1_png__WEBPACK_IMPORTED_MODULE_5__["default"],
      image2: _img_Calculator_2_png__WEBPACK_IMPORTED_MODULE_6__["default"],
      image3: _img_Calculator_3_png__WEBPACK_IMPORTED_MODULE_7__["default"]
    },
    description: "Calculator with all the basics calculations.",
    repository: "https://github.com/AN-Drew207/Calculator-Js"
  }, {
    id: 5,
    title: "Documentation Page",
    images: {
      image1: _img_Documentation_1_png__WEBPACK_IMPORTED_MODULE_8__["default"],
      image2: _img_Documentation_2_png__WEBPACK_IMPORTED_MODULE_9__["default"],
      image3: _img_Documentation_3_png__WEBPACK_IMPORTED_MODULE_10__["default"]
    },
    description: "Documentation Page Example based in C++ Documentation",
    repository: "https://github.com/AN-Drew207/Documentation-Page"
  }]);

  const activo = e => {
    projects.forEach(project => {
      if (e.target.innerText === project.title) {
        e.target.classList.add("activo");
      } else {
        var xd = document.getElementById(`${project.title}link`);
        xd.classList.remove("activo");
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])("section", {
    id: "projects",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])("div", {
      className: "container-fluid row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])("div", {
        className: "col-md-2 col-left d-flex flex-column",
        children: projects.map(project => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])("div", {
            className: "project-link-container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])("a", {
              onClick: activo,
              id: project.title + "link",
              href: "#" + project.title,
              className: "project-link p-1",
              children: project.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 37
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 33
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])("div", {
        className: "col-md-10 col-right",
        children: projects.map(project => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_SingleProjectComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
            id: project.id,
            title: project.title,
            description: project.description,
            images: project.images,
            repository: project.repository
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 34
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 9
  }, undefined);
};

_s(Projects, "vUJ0+r+77RobO6ChpvYIRQlAn68=");

_c = Projects;
/* harmony default export */ __webpack_exports__["default"] = (Projects);

var _c;

__webpack_require__.$Refresh$.register(_c, "Projects");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Projects/SingleProjectComponent.js":
/*!***********************************************************!*\
  !*** ./src/components/Projects/SingleProjectComponent.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.min.js */ "./node_modules/bootstrap/dist/js/bootstrap.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/andres/Documentos/React/portfolio/src/components/Projects/SingleProjectComponent.js";




const SingleProjectComponent = props => {
  const {
    id,
    title,
    images,
    description,
    repository
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    id: title,
    className: "container-fluid project-element p-3",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
      className: "project-title",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 14
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "d-flex flex-row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        id: "carouselExampleControls" + id,
        class: "carousel slide carousel-container",
        "data-bs-interval": "false",
        "data-bs-ride": "carousel",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "carousel-inner",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "carousel-item active",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
              src: images.image1,
              className: "d-block w-100",
              alt: "..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "carousel-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
              src: images.image2,
              className: "d-block w-100",
              alt: "..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "carousel-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
              src: images.image3,
              className: "d-block w-100",
              alt: "..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
          className: "carousel-control-prev",
          type: "button",
          "data-bs-target": "#carouselExampleControls" + id,
          "data-bs-slide": "prev",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "carousel-control-prev-icon",
            "aria-hidden": "true"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "visually-hidden",
            children: "Previous"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
          className: "carousel-control-next",
          type: "button",
          "data-bs-target": "#carouselExampleControls" + id,
          "data-bs-slide": "next",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "carousel-control-next-icon",
            "aria-hidden": "true"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "visually-hidden",
            children: "Next"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "links-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          className: "project-title",
          children: "Links"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "d-flex flex-column",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            target: "_blank",
            rel: "noreferrer",
            className: "link-out",
            href: repository,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
              class: "bi bi-braces"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 101
            }, undefined), " Repository"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            target: "_blank",
            rel: "noreferrer",
            className: "link-out",
            href: repository,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
              class: "bi bi-file-post-fill"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 101
            }, undefined), " Web-Side"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 14
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "row w-100",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "col-sm-6 p-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          className: "project-title",
          children: "Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          className: "text-white m-0 text-center",
          children: description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "col-sm-6 p-2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          className: "project-title",
          children: "Technologies"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 8
  }, undefined);
};

_c = SingleProjectComponent;
/* harmony default export */ __webpack_exports__["default"] = (SingleProjectComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SingleProjectComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/SliderComponent.js":
/*!*******************************************!*\
  !*** ./src/components/SliderComponent.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainSection */ "./src/components/MainSection.js");
/* harmony import */ var _Projects_Projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projects/Projects */ "./src/components/Projects/Projects.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.min.js */ "./node_modules/bootstrap/dist/js/bootstrap.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tsparticles */ "./node_modules/react-tsparticles/index.js");
/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_tsparticles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Contact */ "./src/components/Contact.js");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./About */ "./src/components/About.js");
/* harmony import */ var pathseg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pathseg */ "./node_modules/pathseg/pathseg.js");
/* harmony import */ var pathseg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pathseg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/andres/Documentos/React/portfolio/src/components/SliderComponent.js";










const SliderComponent = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("section", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_tsparticles__WEBPACK_IMPORTED_MODULE_4___default.a, {
      id: "tsparticles",
      options: {
        background: {
          color: {
            value: "transparent"
          }
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 2,
              opacity: 0.8,
              size: 20
            },
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: ["#d50000", "#fff"]
          },
          links: {
            color: "#d50000",
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 0.5
          },
          collisions: {
            enable: true
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 4,
            straight: true
          },
          number: {
            density: {
              enable: true,
              value_area: 1000
            },
            value: 100
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: "circle"
          },
          size: {
            random: true,
            value: 4
          },
          push: {
            particles_nb: 4
          }
        },
        detectRetina: true
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      id: "mainSlider",
      "data-bs-interval": "false",
      className: "carousel slide",
      "data-bs-ride": "carousel",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: "carousel-indicators",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "mx-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
            "data-bs-target": "#mainSlider",
            "data-bs-slide-to": "0",
            className: "d-flex aling-items-center active",
            "aria-current": "true",
            "aria-label": "Slide 1",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h6", {
              className: "text-white text-center",
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "mx-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
            "data-bs-target": "#mainSlider",
            className: "d-flex aling-items-center",
            "data-bs-slide-to": "1",
            "aria-label": "Slide 2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h6", {
              className: "text-white text-center",
              children: "About"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "mx-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
            "data-bs-target": "#mainSlider",
            className: "d-flex aling-items-center",
            "data-bs-slide-to": "2",
            "aria-label": "Slide 3",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h6", {
              className: "text-white text-center",
              children: "Contact"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "mx-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
            "data-bs-target": "#mainSlider",
            className: "d-flex aling-items-center",
            "data-bs-slide-to": "3",
            "aria-label": "Slide 4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h6", {
              className: "text-white text-center",
              children: "Projects"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: "carousel-inner",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "carousel-item active",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_MainSection__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "carousel-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_About__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "carousel-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_Contact__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "carousel-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_Projects_Projects__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, undefined);
};

_c = SliderComponent;
/* harmony default export */ __webpack_exports__["default"] = (SliderComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SliderComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/img/32195.png":
/*!***************************!*\
  !*** ./src/img/32195.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/AC-Logo-alternativo-transparente.png":
/*!******************************************************!*\
  !*** ./src/img/AC-Logo-alternativo-transparente.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/AC-Logo-alternativo-transparente.8d4503a2.png");

/***/ }),

/***/ "./src/img/AN-Drew/1.png":
/*!*******************************!*\
  !*** ./src/img/AN-Drew/1.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/1.9a4db95a.png");

/***/ }),

/***/ "./src/img/AN-Drew/2.png":
/*!*******************************!*\
  !*** ./src/img/AN-Drew/2.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/2.376572ce.png");

/***/ }),

/***/ "./src/img/AN-Drew/3.png":
/*!*******************************!*\
  !*** ./src/img/AN-Drew/3.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/3.e0cc0621.png");

/***/ }),

/***/ "./src/img/Calculator/1.png":
/*!**********************************!*\
  !*** ./src/img/Calculator/1.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/1.0e058514.png");

/***/ }),

/***/ "./src/img/Calculator/2.png":
/*!**********************************!*\
  !*** ./src/img/Calculator/2.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/2.cda93c75.png");

/***/ }),

/***/ "./src/img/Calculator/3.png":
/*!**********************************!*\
  !*** ./src/img/Calculator/3.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/3.d16c04c6.png");

/***/ }),

/***/ "./src/img/Documentation/1.png":
/*!*************************************!*\
  !*** ./src/img/Documentation/1.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/1.dad1c8ed.png");

/***/ }),

/***/ "./src/img/Documentation/2.png":
/*!*************************************!*\
  !*** ./src/img/Documentation/2.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/2.97e53247.png");

/***/ }),

/***/ "./src/img/Documentation/3.png":
/*!*************************************!*\
  !*** ./src/img/Documentation/3.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/3.15886503.png");

/***/ }),

/***/ "./src/img/Ecommerce/1.png":
/*!*********************************!*\
  !*** ./src/img/Ecommerce/1.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/1.ee9266b4.png");

/***/ }),

/***/ "./src/img/Ecommerce/2.png":
/*!*********************************!*\
  !*** ./src/img/Ecommerce/2.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/2.e85d511c.png");

/***/ }),

/***/ "./src/img/Ecommerce/3.png":
/*!*********************************!*\
  !*** ./src/img/Ecommerce/3.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/3.b8507eb5.png");

/***/ }),

/***/ "./src/img/To-do/1.png":
/*!*****************************!*\
  !*** ./src/img/To-do/1.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/1.b091c90f.png");

/***/ }),

/***/ "./src/img/To-do/2.png":
/*!*****************************!*\
  !*** ./src/img/To-do/2.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/2.75fc8215.png");

/***/ }),

/***/ "./src/img/To-do/3.png":
/*!*****************************!*\
  !*** ./src/img/To-do/3.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/3.3b5bd3ec.png");

/***/ }),

/***/ "./src/img/react.png":
/*!***************************!*\
  !*** ./src/img/react.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/react.bcfc48d8.png");

/***/ }),

/***/ "./src/img/up-arrow.png":
/*!******************************!*\
  !*** ./src/img/up-arrow.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf8AAAEqCAYAAAAbAlkiAAAOlnpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjarZpZdiM7DkT/uYpeAudhORzAc3oHvfy+YKbHsi253rPKyrSUSpIIRCBAlZH//Xeb//CTfM0mplJzy9nyE1tsvnNS7fXTz7Oz8Tyfn73vM/fxdcMHr1PPMXAM1xs13zcTXvdc7+/X53V0+rn07kZN7jfGxzf6fSNf7wHu118GCu4awK77Rv2+UfD3yPH6e9wj51bL+yXcn9Plu/t4fo0+xVB8TtmVyHP0tpTcOK/exkLclk7Uh2suLwN9/tu8XOqZk5fggj3P9Zpl0F8XOsfKs77LokLiPIR8Xo8nvtYAGVPgzu2O7b1UjeaH2Lwcv/kxzyzrTocPcL+e3WlgXt5o6X77Uxpkua8In9DLr8fzuvn8hktfw30wfTejEl/zz3+YkZ8ufFh0ffvde9W95Vpdj5kl53tRL0t05kr7NTQJzscyj8Jv4rycR+NRocsE6mWnHTyma84z9HbRLdfdNk7OyXSTOUYvvnD0foK6vlbBovkZFPSoD7d9CS0s0sGHSaoEXvV7m3su7ozbznjTVUZejku942aOjzx8mGcu+umxt3LJuUORlk7AmJdXGjINRU6fuQxE3L6Dmk6AXx4fE/IGNgBhOmGuLLDbcd1iJPeWW+EAHbgucbw45sq6Pq83ioydmIwLQGAzVHLZ2eJ9cY5AVgDqzlYfoh8g4FLyi0n6CN3ABhIwtOEzxZ1rffLX66gkSCRIWcCmhQ5YMSbyp8RKDvUUUkwp5VRSTS31HHI0MCznklVuewklllRyKaWWVnoNNdZUcy211lZ78y2gxqlBx1Zba70zZufOPZvO9Z1Xhh9hxJFGHmXU0UafpM+MM808y6yzzb78Cgser7zKqqutLk5IJYmSjGQpUqVJ3+TaDjvutPMuu+62+ytqN6p/PH6BmrtR8wcpva68osarpVxHc/KFmyhmIOajA/GiCJDQXjGz1cXoFTnFzDYPK5JnkkmxWc52l300IYrzabtX7N6Q+xVuJscfcfPPImcUun+I3MHNSHqH2xeoLS3b8yB2sVBjagPs2xk1yqWOzGCwvycu7sLnWhgSo8sMyzrT2FTlNfWuHrjEu76AUrYLmTFnk7R2IEZjuN1M9iOFYXudEsvEItgykK1RNwFLMcwS+o5NvGf4JGu1gljFLNmOsjrk9GBYnIGLXUrLe+bBgrfPQ6hPhDS5AkoCltSpRYXCvUzps7Sed1qll+Z14BBKXtvMzGhlpLZyroRnxdSAi3QR12PaM6XabCE/kjQnVnYdKKzPVRSH6jz3IXbGbx2ZSW1p3QpZIxKqcCs3V6krudSQj8ktpLW1ap9920EmFM+LLYgMZrtN32QrmeZm7VzPWtwgpFT67OqIcRGNqYEZGnTGW7FwodvCYDw7Yhl3FqOy1lTFxsqdXCVympSi+E+b0kTHdi5kOcCOmlxkjr1REqKeqx05R2M/vfCLo5q42UI9Z+Y6TeLDJm4CaVecc8C52lDSOUgokjyGLWOvlOLehdTeG7UGb9bQwWtmI1Nkoh++i+bZCL0M2Eb2x+1YXRKXd4gtU0mHUh+21V26jNFKUPgZt8RgJgPM4patksdcQHYnRCerMtmkCZGgXa1CQvA3UYtVSeLIakxxC6RsMG2MkTXtarpwzYorhWGI7JSnTKDbtS1SZzkB6LnAZWzmvQcFGd4K6mCYHikELiytQdlQO2Bu2/bFxrQuMrJSloLXBetJPhBCyFgDPqXsTLCrKvUiR2ogi5ovkJBj5qJq5yKn+xg1wlrIRlCjJRiYL7dCs/C0O0Qp+mQIw7JCFgefeqi1IyqRQtW66FymakkJVmJdgoIybfLOo70EjhXZ3oDZOTEjIk2M4VlLcixtOzukI+9EbroikmNC/Ml57wS6NO6rGC7u0Ef1iB8aMI2P4udOmCekNJM9k8QIOV95R1YBjnQwWvskWbAzkWSjcM0k09FSTQMxPSxgPDrEGvVoN5mGYEOFEoU62sjKTknAVGEdBwa4LY8wxz1JGIdkVA32hPBOeySADTAM4sUZHKj0BToDOcmkVzqi1+uO8HEjnARhgjISvSYOA6NFIFMZLnZyHacJN6cUt3GNGoFB6ve8GLjY7lUhEnVFT2rXluflaD6/8N0R2Qat8v7siI5HoFV0DJWpoDrO55la8aM46iOqQ/703o7q8OxRHTK/r1SxoZrNiyxTlclLVSZuk6lCw+pdT3hSCF4Ij4+rEp6UqVoJDLpGiNp6wsPzTIRnUEdUngQ5MJCZf5IbUheoVIqL1VJKdiguUOtWM0axelYgmaVeencwbi4TS52ReAvPUws0eVYlhoou3QUVBMo1I4exEv2OFM+NUOA2I456RVXUnidsG0v7NdR7JUZvwEZRTADKjUl4grF5ICCdutp3W4UrxNYxNk0vkj1TkDZCwPlTDWc+AuW4iPEIR6LA2t1ZXSepCTP2YPUyF+5k0bXsDDNlwUlBOATw0GxKWuGjUjVXJyGhVpCvHsHAXKAJa7HQMa9SKGSbH31sSk2l49xEqgOyi2azSLRSuAHKuhHLQfNQZFB2isXBUHwJDVmRVf+0xi0t4kQNoZB2I+ENK32KlI84aZ4l5SNOmmdJ+YiT5llSPuKg+Y6Ev+Wg+Y6Ev+Wg+Y6Ev+Wg7h9BLVu3jVjCOjbjCKaYkVPF2+kGh45adRm4GSBv1HgcnKcFwen2oeYtGk81bnCieUaN5UrXtK90dWQrBlmWO9mK+SBUaBKmjIJJwyG14zeVrWZ5AlIzRpoOvfpFfi5q46Aus2o8c8Qx0B4wk4WXWAEvwaM6zCi2ErOHTaW+GqhF/MMSIg/pAF6DoKQTTMghXeidxsBj2wCAdPN3nuA+cP03rc1jXiutJ0CQzlcc6S41jg3CtVb3UtfpzBXIwPThDq2EiC3LtwQG7iwncW8cjxs4llxGJr/y6KGUYx6C+oiOTzebvirRRpSONwPtRDeNg58Ot7p5o9ARbAo9oYNzWH/6KAwrsIVdO66NjiiQeWbUia0hKaVCLRWCUd3s+CfnK6YP+dsxqkSgjwgcHVaBrRdH8GFWdRC0ztLwkghLpokLiZ4o5DQ9qCEKJ28dIDPaaEJOIFVAh8msfRBkn+hnkQgcW3ENaqU6Okxnlb1ow0Qr8jsDbr514O8MeP1gwMOXBtx868C/M9Tf+Gnzk6E+snqOn0z1F57aXKY6/I0ObS8K3XYYvGhaiog7qrPw4+WEPaqOgwdhLwT0Qpp36iEGtegrcpsf2Z17YEJFO/EkWoZcXEgVrRowoONXduKKcf6kpyU9HSU215fsHNooonS0E1h8ygFdgNbbRjAwmDx0lzAvi/WNkQZVthGhraZjWA6K00Y2TSeqXF1V99vwBH7oxgYdCm4fmaC/pSM4csaaiAD0klIMDaoSzC0Iph02BNNmrdkrL0jny8zoLvF9dF8R2nzPaAGXP0r8pwp/onpqvHkp8kKVhz1VzvK4t7b0a0eLXRlxsjxgZXF7OLX6AiQIoSUndggrTXraANjV0VWJ3UxC39koJFWkdpXE7xzRR0Nk3jkiSZATv5FoiRCh7lUjosKeEjVi9Jd2oHWdzUcPYH5hzLXoJS1HvkN3PohbmdMtz8DeFEJD/HV/JZalFe72Cxcvn3U7xVxm51idQf2/7UuSSUkdRM6B5g4NoJSiBFcp2gaCsm7yrIjydnP+0O9kmrU5tvn+bDtElJqtCkq6gVuIsQ2HghIOnk4NTsyrd3MktBO0oaLMLAgNhlg3tbLuGiXyBH1AXtfQxsR909Wbhyq01dypU9vqHzrVExZRq9GeE2ivut2b8QSax1ujFw81tPZ8YPcjchuqGFrewgAstckNSmdVKsRDx3RXNjptBshGugPdqd+DbNNsdGiS5gkxSnTc5KQfj43Cq0+otwV550DM9xZkHDEDRTIQPm3K7wqHT6K7FIwBn4bySaVT4Sd9fX1kOx8R2nxk9AalHwr8l/V9a5eUzPpFezQpluo8S2P1wgFM1AUKDtOMTvoUKkwus6XLUf7shL4yQr6ZJHgNj9lFgqhmqg+FJKCGUTDg6jFnPS5tZn6q/+aHHTitf10LE5qutU99R84YFwwt9UR3jxt533qAFW+bdfXiaN77J5fzlcdZRNya27ig+XiaumLVtqRNOTtWhdAqYSOEDSI/2Qnz3P7cJyK3NzeBQJz+yKyzaQHg2oPYh/Jzic9H7Tn2zaD35VgG/uGqUec8dUu2Zaf79Si9RnRD1Qs/xjhnWl/eM9p8RWktMDepL073yoTaaq4dUy8VR4o6IRnR3X2M+UUjQ56lbw2C+dMhxCe8x6v1SP30+vT96rOohtRZHIByp2B4YdRAFxPBkXhpZ5bS4g/7t+bLN6iDv93qMM9V9sdbHeaHnii7t52O9Gijw3y90/H7jQ7z9U7H7zc6zN/uPuowf+v875rr3lVc91puzam3/0K5NbeZ/kflVlPEfCDnPyi45mHP/2TBNXfFfbbgfns0T1bkhwXZPFmRH5LYPFmRHxZk80VF/rMeP1GOzV2P38Xuux7x5xbRPN8j/uwizfM94s8tonm+R/y5RTRf9oh/cTSPm8znekzzuMl8rsc0j5vMBz3mCJM+jwI59Mu0RPnxfbZCvsRagl2z8hpySkpXOLA7I2iXCVFeuszTkrxscJuPul8gkAVTv7Z+bQ4tWstxQEcfApWYwrMXzpBco0TxviXLpm2uGtXFqHfV7c233U33nC6+yaL5VxoRZNH8K42I9iL/TBffjubHC6pAXNrjSrhGrc2nigkeSb+JjMETsOgt3iLNaLIWZv0KfxWa6ZYDEtSnfoY/Vk9YHcEh15BRN5KUFZ3ap6U4k8h+tMVN4VraVrBpPYMbwKz7ttmFCvJ62x2ZFo5YMqSMOSxyR2IZbm74sEpGvpyxq5MH9nw5q3eui15/qomgPOr/0rtMrNfWG/eMqfdD9ItA7xZTX2iAj7dCTrm/gND+/7kjaYQym/8Dk7UTG7lZMfIAAAGFaUNDUElDQyBwcm9maWxlAAB4nH2RPUjDQBzFX1PFUioO7SDiELA6iAVREUetQhEqlFqhVQeTS7+gSUOS4uIouBYc/FisOrg46+rgKgiCHyBubk6KLlLi/5JCixgPjvvx7t7j7h0gNCpMNbvGAVWzjHQiLmZzq2LPKwIIIowhjErM1OdSqSQ8x9c9fHy9i/Es73N/jl4lbzLAJxLPMt2wiDeIpzctnfM+cYSVJIX4nHjMoAsSP3JddvmNc9FhgWdGjEx6njhCLBY7WO5gVjJU4iniqKJqlC9kXVY4b3FWKzXWuid/YSivrSxzneYgEljEElIQIaOGMiqwEKNVI8VEmvbjHv4Bx58il0yuMhg5FlCFCsnxg//B727NwuSEmxSKA90vtv0xDPTsAs26bX8f23bzBPA/A1da219tADOfpNfbWvQI6NsGLq7bmrwHXO4A/U+6ZEiO5KcpFArA+xl9Uw4I3wLBNbe31j5OH4AMdZW8AQ4OgZEiZa97vDvQ2du/Z1r9/QCJXnKwZXOFLAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAPrwAAD68B1qQibQAAAAd0SU1FB+UIChMkBD11s6IAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAKAUlEQVR42u3dQXLcOhIEUDHDp9H9r2JdB1p551Com2Q3gHxvOZtxA1WZoOdP/GOM8QEA9IgjAIAuf179X/h1HKf+quFzjMO1ATCblfrtuPuv/c8ehocAALsW/rs67pbyv/MwPAQA2LXwX9Vxl5b/Ow7EIwCAXUv/rn67rPxnKH6PAAB2K/07+u10+c92KB4BAOxY+lf229PlP/uheAAAsGvxn+247H4oK/55AdAZd/55H/7yX71I/S0AAO39lqaD8bcAAOi3B8p/p9L0AACgud/SdjAeAAC091saD8YDAIDmfkt7OXoAACj+tt8YpegBAKD4u35rjIEHAICs7xKH43cDyPiu3+3L33AAyPb2L38H5AwAZPreZxAHZFgAZHnXWfhrf0MDIMPLxCEZHgDZ3XUuvvwNEYDMbv3yxzAByOoOxxjDYT3gkX9fMgCK35e/4QJANit/QwaATFb+hg0AWXyj4+/Hh4M7wT8DAKD4ffkbPgBkr/I3hADIXOVvGAGQtcrfUAIgY5W/4QRAtip/QwogU1H+hhVAlqL8DS2ADEX5G14A2YnyN8QAMlP5Y5gBZKXyx1ADyEjlj+EGkI3KH0MOIBOVP4YdQBbOWf7+ffSGHkAG+vLH8APIPuWPJQCQecofywAg69Ytf/+7v6UAkHEdPsc4fPlbDgDZ1vjl7+vfkgDItMLyx7IAyLK9/fvQz//+QywNgAzbs/h9+VseANlVKD+9DLBEADJrr69+X/6WCUBW+fL39W+pAGTUzl/9P375ewBYLgDZtF/x/1j+WDIAmbSnPPNiwLIByKI1v/p/9eXvAWDpAGTQPsX/q/L3ALB8ALJnn+L/dfl7AFhCAJmzR/E/VP4eAJYRQNasX/wPl78HgKUEZAxrF/9T5e8BYDkB2cK6xf90+XsAWFJAprBm8Z8qfw8AywrIEtYr/tPl7wFgaQEZwlrFf0n5ewBYXkB2sE7xX1b+HgCWGJAZrFH8l5a/B4BlBmQF8xf/5eXvAWCpARnB3MV/S/l7AFhuQDYwd6dmpT8slhyQCYp/4vL3ALDsgCxgzg7Nyn94LD0gAxT/hOXvAWD5AbvPXJ2ZnX4MQgCw84p/ovL3ABAGgF1njo7Mzj8OoQDYccU/Qfl7AAgHwG7z3k5M049FSICdpr3431r+HgDCArDLiv890vzjERpgh2nsvjgEhAfYXbo6Lw4DIQJ2lq6ui0NBmIBdpavj4nAQKmBH6eq2OCSEC9hNujotDgshA3aSri6LQ0PYgF2kq8Pi8BA6YAfp6q44RIQP2D26OisOEyEEdo6uropDRRiBXaOro+JwEUpgx+jqpjhkhBPYLbo6KQ4bIQV2iq4uikNHWIFdoquD4vARWmCH6OqeuASEF9gdujonLgMhBnaGrq6JS0GYgV2hq2PichBqYEfo6pa4JIQb2A26OiUuCyEHdoKuLolLQ9iBXaCrQ+LyEHpgB+jqjrhEhB+Yfbo6Iy4TIQhmnq6uiEtFGIJZp6sj4nIRimDGFX9XN8QlIxzBbCv+LnHZCEkw07pA+bt0hCWYZR2g/F0+QhPMsOxX/oYA4QlmV+Yrf8OAEAUzK+uVv6FAmGJWkfHK33AgVDGjyHblb0gQrphNZLryNywIWcwkslz5GxqELWYRGa78DY/QBTOI7Fb+hkj4gtmT2Sh/wySEwczJapS/oRLGYNZktPLHcAllMGOyWfljyIQzmC2ZrPwxbEIaM4UsVv6GDmGNWUIGK3/Dh9DGDCF7lb8hRHhjdpC5yt8wIsQxM8ha5W8oEeaYFWSs8jecCHXMCLJV+RtShDtmQ6ai/A0rQh4zIUtR/oYWYY9ZkKEof8OL0McMyE6UvyEW/sLf3SMzlT+GWQngzpGVyh9DrQxw18hI5Y/hVgq4Y2Sj8seQKwfcLTJR+WPYlQTuFFmo/DH0ygJ3iQxU/obfKSgN3KHsQ/lbApQH7k7mofwtA0oEdybrUP6WAmWCu5JxKH/LgVJxR8g2lL8lQbm4G2Qayt+yoGTcCbJM+WNpUDbuAhmm/LE8KB13gOxS/lgilI+zR2YpfywTSsiZI6uUP5ZKGeGsZRTKH8ullHDGsgnljyVTTjhbmYTyx7IpKZypLEL5Y+mUlbN0ljII5Y/lU1rOENmD8reEllB5OTtkDsrfMqLEnBmyBuVvKVFmzgoZg/K3nCg1Z4RsUf5YUpSbs0GmKH8sK0rOmcgSlD+WFmXnLGQIyh/Li9JzBrID5Y8lRvn57TID5Y9lRgkqflmB8sdSU1aGil9GoPyx3BSVouKXDSh/LDlF5aj4ZQLKH8tOUUkqflmA8sfSU1SWil8GoPyx/BSVpuK3+yh/hABF5an47TzKH2FAUYkqfruO8kcoUFSmit+Oo/wRDhSVquK32yh/hARF5ar47TTKH2FBUckqfruM8kdoUFS2it8Oo/wRHhSVruK3uyh/hAhF5av47SzKH2FCUQkrfruK8keoUPQAUPx2FOWPcKHoAaD47SbKHyFD0QNA8dtJlD/CRtgUPQAUv11E+YPQKXoAKH47iPIH4VP0AFD8dg/lD0Ko6AGg+O0cyh+EUdEDQPHbNZQ/CKWiB4Dit2MofxBORQ8AxW+3UP4gpIoeAIrfTqH8QVgVPQAUv11C+YPQKnoAKH47RJ9jDHvP6780AcWPL3+EGGBnUP4IM7AroPwRamBHQPkj3MBugPJHyIGdAOWPsAO7AMofoQd2AOUPwg/MPsofhCCYeZQ/CEMw6yh/EIpgxlH+IBzBbKP8QUhipkH5g7DELIPyB6GJGQblj/AEswvKHyEKZhaUP8IUzCoof4QqmFFQ/ghXMJug/BGyYCZR/iBswSyi/EHoghlE+YPwxeyB8gchjJkD5Q/CGLMGyh+EMmYMlD8IZ8wWKH8Q0pgpUP4grDFLoPxBaGOGQPmD8MbsgPJHiAtxzAwof4Q5mBWUPwh1zIgZQfmDcMdsgPIHIY+ZAOUPwh6zAMofhD5mAJQ/CH/cPSh/UAK4c1D+oAxw16D8QSngjkH5g3LA3YLyByWBOwXlD8oCdwnKH5SGOwSUPygPdwfKH1Ai7gyUP6BM3BUof1AquCNQ/qBccDeg/EHJ4E5A+YOywV2A8gelgzsA5Q/KB2cPyh+UEM4clD8oI2cNKH9QSs4YUP6gnJwtoPxBSTlTUP6AsnKWoPwBpeUMQfkDysvZgfIHlJgzA+UPKDNnBcofUGrOCJQ/KDecDSh/UHLOBFD+oOycBaD8Qek5A0D5g/Lz2wHlD0rQbwaUPyhDvxVQ/qAU/UZQ/oBy9NtA+QNK0m8C5Q8oS8UPyh9QmooflD/QXZ6KH+Z1jDGcAizg6ziWWFalD778gaJSVfzgyx8o+VsApQ/KHyh5BCh9UP5AySNA6YPyB0oeAUoflD+w+WNA2YPyBwA24P/qBwDKHwBQ/gDANr4BbSp79UM/95cAAAAASUVORK5CYII=");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SASS_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SASS/main.scss */ "./src/SASS/main.scss");
/* harmony import */ var _SASS_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SASS_main_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/andres/Documentos/React/portfolio/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined), document.getElementById('root'));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/andres/Documentos/React/portfolio/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/andres/Documentos/React/portfolio/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /home/andres/Documentos/React/portfolio/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/andres/Documentos/React/portfolio/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map