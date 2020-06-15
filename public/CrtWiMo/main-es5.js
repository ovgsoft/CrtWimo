function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "       <router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/barras/barras.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/barras/barras.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBarrasBarrasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <div style=\"display: block\">\n    <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\" legend=\"true\"\n      chartType=\"bar\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n  </div>\n\n  <button class=\"btn btn-primary btn-block\" (click)=\"datos()\">Update</button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat/chat.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat/chat.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsChatChatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <footer class=\"fter\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-2\" style=\"top:10px\">\n        </div>\n\n        <div class=\"col-5 recuadro\">\n          <div class=\"app-mensajes\" id=\"app-mensajes\">\n\n            <div *ngFor=\"let chat of _cs.chats\">\n              <img src=\"../../../assets/images/CWtitle.ico\" width=\"20px;\" alt=\"\">\n              <span class=\"badge\">\n                {{ chat.mensaje }} </span>\n              <p>\n                {{ chat.fecha_enviado }} | {{ chat.uid }}\n              </p>\n            </div>\n          </div>\n\n\n        </div>\n        <div class=\"col-2 recuadro\">\n          <textarea type=\"text\" name=\"mensaje\" [(ngModel)]=\"mensaje\" class=\"form-control\"\n            (keyup.enter)=\"enviar_mensaje()\" placeholder=\"Enviar mensaje\" cols=\"30\" rows=\"5\"\n            style=\"background: none; border: none; color: white;\">\n          </textarea>\n        </div>\n\n        <div class=\"col-2\" style=\"top:20px\">\n          <button class=\"btn btnFormulario btn-block waves-effect waves-light\">\n            AGREGAR </button>\n          <button class=\"btn btnFormulario btn-block waves-effect waves-light\">\n            AGREGAR </button>\n        </div>\n      </div>\n    </div>\n  </footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <section id=\"wrapper\" class=\"login-register login-sidebar\"\n      style=\"background-image:url(../assets/images/background/login-register.jpg);\">\n      <div class=\"login-box card\">\n        <div class=\"card-body\">\n          <form class=\"form-horizontal form-material\" id=\"loginform\" action=\"index.html\">\n            <a href=\"javascript:void(0)\" class=\"text-center db\"><img src=\"../assets/images/logo-icon.png\"\n                alt=\"Home\" /><br /><img src=\"../assets/images/logo-text.png\" alt=\"Home\" /></a>\n            <div class=\"form-group m-t-40\">\n              <div class=\"col-xs-12\">\n                <input class=\"form-control\" type=\"text\" required=\"\" placeholder=\"Username\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"col-xs-12\">\n                <input class=\"form-control\" type=\"password\" required=\"\" placeholder=\"Password\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"checkbox checkbox-primary pull-left p-t-0\">\n                  <input id=\"checkbox-signup\" type=\"checkbox\" class=\"filled-in chk-col-light-blue\">\n                  <label for=\"checkbox-signup\"> Remember me </label>\n                </div>\n                <a href=\"javascript:void(0)\" id=\"to-recover\" class=\"text-dark pull-right\"><i\n                    class=\"fa fa-lock m-r-5\"></i> Forgot pwd?</a>\n              </div>\n            </div>\n            <div class=\"form-group text-center m-t-20\">\n              <div class=\"col-xs-12\">\n                <button class=\"btn btn-info btn-lg btn-block text-uppercase btn-rounded\" type=\"submit\">Log In</button>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-12 col-md-12 m-t-10 text-center\">\n                <div class=\"social\"><a href=\"javascript:void(0)\" class=\"btn  btn-facebook\" data-toggle=\"tooltip\"\n                    title=\"Login with Facebook\"> <i aria-hidden=\"true\" class=\"fa fa-facebook\"></i> </a> <a\n                    href=\"javascript:void(0)\" class=\"btn btn-googleplus\" data-toggle=\"tooltip\"\n                    title=\"Login with Google\"> <i aria-hidden=\"true\" class=\"fa fa-google-plus\"></i> </a> </div>\n              </div>\n            </div>\n            <div class=\"form-group m-b-0\">\n              <div class=\"col-sm-12 text-center\">\n                Don't have an account? <a href=\"pages-register2.html\" class=\"text-primary m-l-5\"><b>Sign Up</b></a>\n              </div>\n            </div>\n          </form>\n          <form class=\"form-horizontal\" id=\"recoverform\" action=\"index.html\">\n            <div class=\"form-group \">\n              <div class=\"col-xs-12\">\n                <h3>Recover Password</h3>\n                <p class=\"text-muted\">Enter your Email and instructions will be sent to you! </p>\n              </div>\n            </div>\n            <div class=\"form-group \">\n              <div class=\"col-xs-12\">\n                <input class=\"form-control\" type=\"text\" required=\"\" placeholder=\"Email\">\n              </div>\n            </div>\n            <div class=\"form-group text-center m-t-20\">\n              <div class=\"col-xs-12\">\n                <button class=\"btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light\"\n                  type=\"submit\">Reset</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/register.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/register.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <div class=\"container-fluid\">\n      <div class=\"row\">\n\n        <div class=\"col-md-4 col-lg-4 col-sm-12\">\n          <div class=\"card-body\">\n            <h1>Campos requeridos</h1>\n            <div class=\"row\">\n              <div class=\"col-md-5 col-lg-5 col-sm-12\">\n                <label class=\"inputsEstilos2\">Imagen</label>\n              </div>\n              <div class=\"col-md-7 col-lg-7 col-sm-12\">\n                <img src=\"https://ovgsoft.com/android/{{producto.imagen}}\" style=\"width:60px;\" alt=\"\">\n                <!-- <input class=\" inputsEstilos\" type=\"text\" [(ngModel)]=\"producto.imagen\" /> -->\n              </div>\n\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-5 col-lg-5 col-sm-12\">\n                <label class=\"inputsEstilos2\">Codigo</label>\n              </div>\n              <div class=\"col-md-7 col-lg-7 col-sm-12\">\n                <input class=\"inputsEstilos\" type=\"number\" [(ngModel)]=\"producto.codigo\" />\n              </div>\n            </div>\n            <div class=\"row\">\n\n              <div class=\"col-md-5 col-lg-5 col-sm-12\">\n                <label class=\"inputsEstilos2\">Descripcion</label>\n              </div>\n              <div class=\"col-md-7 col-lg-7 col-sm-12\">\n                <textarea rows=\"3\" class=\"inputsEstilos\" type=\"text\" [(ngModel)]=\"producto.descripcion\"></textarea>\n              </div>\n\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-5 col-lg-5 col-sm-12\">\n                <label class=\"inputsEstilos2\">Categoria</label>\n              </div>\n              <div class=\"col-md-7 col-lg-7 col-sm-12\">\n                <select class=\"inputsEstilos\">\n                  <option>{{producto.id_categoria}}</option>\n                  <option [value]=\"categ.id\" *ngFor=\"let categ of categorias\">{{categ.categoria}}</option>\n                </select>\n\n              </div>\n\n            </div>\n\n\n            <div class=\"row\">\n              <div class=\"col-md-5 col-lg-5 col-sm-12\">\n                <label class=\"inputsEstilos2\">Precio de compra</label>\n              </div>\n              <div class=\"col-md-7 col-lg-7 col-sm-12\">\n                <input class=\"inputsEstilos\" type=\"number\" [(ngModel)]=\"producto.precio_compra\" />\n              </div>\n\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-5 col-lg-5 col-sm-12\">\n                <label class=\"inputsEstilos2\">Precio de venta</label>\n              </div>\n              <div class=\"col-md-7 col-lg-7 col-sm-12\">\n                <input class=\"inputsEstilos\" type=\"number\" [(ngModel)]=\"producto.precio_venta\" />\n              </div>\n\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-5 col-lg-5 col-sm-12\">\n                <label class=\"inputsEstilos2\">Stock</label>\n              </div>\n              <div class=\"col-md-7 col-lg-7 col-sm-12\">\n                <input class=\"inputsEstilos\" type=\"number\" [(ngModel)]=\"producto.stock\" />\n              </div>\n\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-5 col-lg-5 col-sm-12\">\n                <label class=\"inputsEstilos2\"> Ventas</label>\n              </div>\n              <div class=\"col-md-7 col-lg-7 col-sm-12\">\n                <input class=\"inputsEstilos\" type=\"number\" [(ngModel)]=\"producto.ventas\" />\n              </div>\n\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-5 col-lg-5 col-sm-12\">\n                <label class=\"inputsEstilos2\">Fecha</label>\n              </div>\n              <div class=\"col-md-7 col-lg-7 col-sm-12\">\n                <input class=\"inputsEstilos\" type=\"date\" [value]=\"producto.fecha\" [(ngModel)]=\"producto.fecha\" />\n              </div>\n\n            </div>\n            <hr>\n\n            <div class=\"row\">\n              <div class=\"col-md-12 col-lg-6 col-sm-12\">\n                <button style=\"z-index: 0;\" class=\"btn btnFormulario m-b-20 p-10 btn-block waves-effect waves-light\"\n                  (click)=\"altaProducto();\">\n                  AGREGAR </button>\n              </div>\n              <div class=\"col-md-12 col-lg-6 col-sm-12\">\n                <button style=\"z-index: 0;\" class=\"btn btnFormulario m-b-20 p-10 btn-block waves-effect waves-light\"\n                  (click)=\"editarProducto();\">\n                  MODIFICAR </button>\n              </div>\n\n            </div>\n          </div>\n\n          <app-barras></app-barras>\n        </div>\n\n\n\n        <div class=\"col-md-8 col-lg-8 col-sm-12\">\n          <ng-template #sin>\n            <p>No hay productos registrados.</p>\n          </ng-template>\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <div class=\"my-custom-scrollbar table-wrapper-scroll-y table-responsive m-t-40\">\n                <table class=\"display nowrap table table-hover table-striped table-bordered dataTable\" id=\"example23\"\n                  *ngIf=\"hayProductos(); else sin\">\n                  <thead>\n                    <tr>\n                      <th style=\"width:150px !important;\">Descripcion</th>\n                      <th style=\"width:30px !important;\">Foto</th>\n                      <th style=\"width:20px !important;\">Stock</th>\n                      <th style=\"width:30px !important;\">Precio compra</th>\n                      <th style=\"width:30px !important;\">Precio venta</th>\n                      <th style=\"width:30px !important;\">Ventas (pza)</th>\n                      <th style=\"width:30px !important;\">Monto venta</th>\n                      <th style=\"width:30px !important;\">Borrar</th>\n                    </tr>\n                  </thead>\n\n                  <tbody style=\"color: black; font-size: 12px; font-weight: bold;\">\n                    <tr *ngFor=\"let producto of productos\">\n                      <td (click)=\"seleccionarProducto(producto.id)\"> {{producto.descripcion }} </td>\n                      <td (click)=\"seleccionarProducto(producto.id)\"><img style=\"width: 30px;\"\n                          src=\"https://ovgsoft.com/android/{{producto.imagen }}\"></td>\n                      <td (click)=\"seleccionarProducto(producto.id)\"> {{producto.stock }} </td>\n                      <td (click)=\"seleccionarProducto(producto.id)\"> {{producto.precio_compra | currency }} </td>\n                      <td (click)=\"seleccionarProducto(producto.id)\"> {{producto.precio_venta | currency }}</td>\n                      <td (click)=\"seleccionarProducto(producto.id)\"> {{producto.ventas}} PZA</td>\n                      <td> {{producto.ganancia | currency}}</td>\n                      <td>\n                        <button class=\"btn btn-danger m-b-20 p-10 btn-block waves-effect waves-light\"\n                          (click)=\"bajaProducto(producto.id)\">\n                          Borrar\n                        </button>\n                      </td>\n                    </tr>\n                  </tbody>\n                  <tfoot>\n\n                  </tfoot>\n\n                </table>\n\n              </div>\n              <div class=\"col-12 my-custom-scrollbar2 table-wrapper-scroll-y table-responsive m-t-40\">\n                <div class=\"row\">\n\n                  <div class=\"col-4\">\n\n                  </div>\n                  <div class=\"col-7\">\n\n                    <table class=\"display nowrap table table-hover table-striped table-bordered dataTable\" width=\"100%\">\n                      <thead>\n                        <tr>\n                          <th>Stock</th>\n                          <th>Precio compra</th>\n                          <th>Precio venta</th>\n                          <th>Ventas (pza)</th>\n                          <th>Monto venta</th>\n                        </tr>\n                      </thead>\n                      <tbody style=\"color: black; font-size: 12px; font-weight: bold;\">\n                        <tr *ngFor=\"let suma of sumas\">\n                          <td>{{suma.stock}}</td>\n                          <td>{{suma.costoAlmacen | currency }}</td>\n                          <td>{{suma.montoVenta | currency }}</td>\n                          <td>{{suma.ventas }}</td>\n                          <td>{{suma.ganancia | currency }}</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                  <div class=\"col-1\">\n\n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n\n\n      </div>\n\n    </div>\n\n    <div class=\"col-12\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <div class=\"row\">\n\n\n          </div>\n        </div>\n        <div class=\"col-6\"></div>\n\n      </div>\n    </div>\n    <div class=\"col-12\">\n      <div class=\"row\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-3\"></div>\n        <div class=\"col-3\"></div>\n        <div class=\"col-3\"></div>\n      </div>\n    </div>\n\n\n\n    <app-chat></app-chat>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dasboard/dasboard.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dasboard/dasboard.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDasboardDasboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/graficas1/graficas1.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/graficas1/graficas1.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesGraficas1Graficas1ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>graficas1 works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <div id=\"main-wrapper\">\n   <app-header></app-header>\n   <app-slidebar></app-slidebar>\n\n   <!-- ============================================================== -->\n   <!-- Page wrapper  -->\n   <!-- ============================================================== -->\n   <div class=\"page-wrapper\">\n     <div class=\"container-fluid\">\n\n       <app-breadcrumbs></app-breadcrumbs>\n       <router-outlet></router-outlet>\n\n     </div>\n\n     <!-- <footer class=\"fter\">\n       <div class=\"container-fluid\">\n         <div class=\"row\">\n           <div class=\"col-6 recuadro\">\n             <textarea style=\"width: 100%; height: 100%; background: none; border:none; color: white;\" name=\"chat\"\n               id=\"chat\" cols=\"30\" rows=\"4\"></textarea>\n           </div>\n           <div class=\"col-2 recuadro\">\n             <textarea style=\"width: 100%; height: 100%; background: none; border:none; color: white;\" name=\"chat2\"\n               id=\"chat2\" cols=\"30\" rows=\"4\"></textarea>\n           </div>\n\n           <div class=\"col-2\" style=\"top:10px\">\n             <button class=\"btn btnFormulario btn-block waves-effect waves-light\">\n               AGREGAR </button>\n             <button class=\"btn btnFormulario btn-block waves-effect waves-light\">\n               AGREGAR </button>\n           </div>\n         </div>\n       </div>\n     </footer> -->\n   </div>\n </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/progress/progress.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/progress/progress.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProgressProgressComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">\n          Barra de progreso\n        </h4>\n        <div class=\"progress\">\n          <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"75\"\n            aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 75%\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <button class=\"btn btn-outline-secondary\" type=\"button\">Button</button>\n          </div>\n          <input type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"\" aria-describedby=\"basic-addon1\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/breadcrumbs/breadcrumbs.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/breadcrumbs/breadcrumbs.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedBreadcrumbsBreadcrumbsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "                <!-- ============================================================== -->\n                <!-- Bread crumb and right sidebar toggle -->\n                <!-- ============================================================== -->\n                <div class=\"row page-titles\">\n                  <div class=\"col-md-5 align-self-center\">\n                    <h3 class=\"text-themecolor\"></h3>\n                  </div>\n                  <div class=\"col-md-7\">\n                    <ol class=\"breadcrumb\">\n                      <li class=\"breadcrumb-item\">\n                        <a href=\"javascript:void(0)\"></a>\n                      </li>\n                    </ol>\n                  </div>\n                </div>\n                <!-- ============================================================== -->\n                <!-- End Bread crumb and right sidebar toggle -->\n                <!-- ============================================================== -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <header class=\"topbar\">\n    <nav class=\"navbar top-navbar navbar-expand-md navbar-light\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\">\n          <b class=\"imgLogo\">\n            <img src=\"assets/images/CWtitle.ico\" alt=\"homepage\" class=\"dark-logo sidebartoggler\" />\n            <img src=\"assets/images/CWtitle.ico\" alt=\"homepage\" class=\"light-logo sidebartoggler\" />\n          </b>\n        </a>\n      </div>\n      <div class=\"navbar-collapse\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item hidden-sm-down\"></li>\n        </ul>\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item navItem\">\n            <a href=\"#\">\n              <i class=\"fa fa-home\"></i>\n            </a>\n          </li>\n\n          <li class=\"nav-item navItem\">\n            <a href=\"#\">\n              <i class=\"fa fa-arrow-left\"></i>\n            </a>\n          </li>\n          <li class=\"nav-item navItem\">\n            <a href=\"#\">\n              <i class=\"fa fa-arrow-right\"></i>\n            </a>\n          </li>\n\n        </ul>\n      </div>\n    </nav>\n  </header>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/nopagefound/nopagefound.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/nopagefound/nopagefound.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedNopagefoundNopagefoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>nopagefound works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/slidebar/slidebar.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/slidebar/slidebar.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedSlidebarSlidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<aside id=\"aside\" class=\"left-sidebar\">\n  <a class=\"navbar-brand\" href=\"#\"\n    style=\"background:url('./assets/images/CWtitle.ico'); background-repeat: no-repeat; background-size: 100%; opacity: 0.3; top:-50px; position: absolute; left: 0; width: 100%; overflow: hidden;  height: 150px;\">\n  </a>\n  <div class=\"scroll-sidebar\">\n    <nav class=\"sidebar-nav\">\n      <ul id=\"sidebarnav\">\n\n        <li class=\"nav-devider\"></li>\n        <li class=\"nav-small-cap\">Modulo</li>\n        <li>\n          <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\">\n            <img src=\"assets/images/CWtitle.ico\" alt=\"assets/images/CWtitle.ico\" width=\"25px\"\n              style=\"border-radius: 50%;\">\n            <!-- <i class=\"iconosMenu fa fa-list\"></i> -->\n            <span class=\"hide-menu\"> Lista de registros </span></a>\n          <ul aria-expanded=\"false\" class=\"collapse\">\n            <li><a href=\"#\"> Ventas </a></li>\n            <li><a href=\"#\"> Pagos</a></li>\n            <li><a href=\"#\"> Ventas de contado</a></li>\n          </ul>\n        </li>\n        <li>\n          <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\">\n            <img src=\"assets/images/CWtitle.ico\" alt=\"assets/images/CWtitle.ico\" width=\"25px\"\n              style=\"border-radius: 50%;\">\n            <!-- <i class=\"iconosMenu fa fa-list\"></i> -->\n            <span class=\"hide-menu\"> Nuevo registro </span>\n          </a>\n          <ul aria-expanded=\"false\" class=\"collapse\">\n            <li><a href=\"#/vista1\"> Venta </a></li>\n            <li><a href=\"#\">Pago</a></li>\n            <li><a href=\"#\">Venta de contado</a></li>\n          </ul>\n        </li>\n        <li>\n          <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\">\n            <img src=\"assets/images/CWtitle.ico\" alt=\"assets/images/CWtitle.ico\" width=\"25px\"\n              style=\"border-radius: 50%;\">\n            <!-- <i class=\"iconosMenu fa fa-list\"></i> -->\n            <span class=\"hide-menu\"> Nuevo registro </span>\n          </a>\n          <ul aria-expanded=\"false\" class=\"collapse\">\n            <li><a href=\"#/vista1\"> Venta </a></li>\n            <li><a href=\"#\">Pago</a></li>\n            <li><a href=\"#\">Venta de contado</a></li>\n          </ul>\n        </li>\n        <li>\n          <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\">\n            <img src=\"assets/images/CWtitle.ico\" alt=\"assets/images/CWtitle.ico\" width=\"25px\"\n              style=\"border-radius: 50%;\">\n            <!-- <i class=\"iconosMenu fa fa-list\"></i> -->\n            <span class=\"hide-menu\"> Nuevo registro </span>\n          </a>\n          <ul aria-expanded=\"false\" class=\"collapse\">\n            <li><a href=\"#/vista1\"> Venta </a></li>\n            <li><a href=\"#\">Pago</a></li>\n            <li><a href=\"#\">Venta de contado</a></li>\n          </ul>\n        </li>\n        <li>\n          <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\">\n            <img src=\"assets/images/CWtitle.ico\" alt=\"assets/images/CWtitle.ico\" width=\"25px\"\n              style=\"border-radius: 50%;\">\n            <!-- <i class=\"iconosMenu fa fa-list\"></i> -->\n            <span class=\"hide-menu\"> Nuevo registro </span>\n          </a>\n          <ul aria-expanded=\"false\" class=\"collapse\">\n            <li><a href=\"#/vista1\"> Venta </a></li>\n            <li><a href=\"#\">Pago</a></li>\n            <li><a href=\"#\">Venta de contado</a></li>\n          </ul>\n        </li>\n\n      </ul>\n    </nav>\n  </div>\n</aside>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./service/chat.service */
    "./src/app/service/chat.service.ts");

    var AppComponent = function AppComponent(_cs) {
      _classCallCheck(this, AppComponent);

      this._cs = _cs;
      this.title = 'CrtWiMo';
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _service_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.routes */
    "./src/app/app.routes.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _login_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/register.component */
    "./src/app/login/register.component.ts");
    /* harmony import */


    var _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/pages.module */
    "./src/app/pages/pages.module.ts");
    /* harmony import */


    var _service_service_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./service/service.module */
    "./src/app/service/service.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _service_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./service/usuario/usuario.service */
    "./src/app/service/usuario/usuario.service.ts");
    /* harmony import */


    var angularfire2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! angularfire2 */
    "./node_modules/angularfire2/index.js");
    /* harmony import */


    var angularfire2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/chat/chat.component */
    "./src/app/components/chat/chat.component.ts");
    /* harmony import */


    var _service_chat_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./service/chat.service */
    "./src/app/service/chat.service.ts");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
    /* harmony import */


    var _components_barras_barras_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/barras/barras.component */
    "./src/app/components/barras/barras.component.ts"); // Servicios


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _login_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_14__["ChatComponent"], _components_barras_barras_component__WEBPACK_IMPORTED_MODULE_18__["BarrasComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routes__WEBPACK_IMPORTED_MODULE_4__["APP_ROUTES"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__["PagesModule"], _service_service_module__WEBPACK_IMPORTED_MODULE_8__["ServiceModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], angularfire2__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase), angularfire2_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestoreModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_17__["ChartsModule"]],
      providers: [_service_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_11__["UsuarioService"], _service_chat_service__WEBPACK_IMPORTED_MODULE_15__["ChatService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routes.ts":
  /*!*******************************!*\
    !*** ./src/app/app.routes.ts ***!
    \*******************************/

  /*! exports provided: APP_ROUTES */

  /***/
  function srcAppAppRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function () {
      return APP_ROUTES;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _shared_nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/nopagefound/nopagefound.component */
    "./src/app/shared/nopagefound/nopagefound.component.ts");
    /* harmony import */


    var _login_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/register.component */
    "./src/app/login/register.component.ts");
    /* harmony import */


    var _pages_pages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/pages.component */
    "./src/app/pages/pages.component.ts");

    var appRoutes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: 'register',
      component: _login_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    }, {
      path: '',
      component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_5__["PagesComponent"]
    }, {
      path: '**',
      component: _shared_nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_3__["NopagefoundComponent"]
    }];

    var APP_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
      useHash: true
    });
    /***/

  },

  /***/
  "./src/app/components/barras/barras.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/barras/barras.component.ts ***!
    \*******************************************************/

  /*! exports provided: BarrasComponent */

  /***/
  function srcAppComponentsBarrasBarrasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BarrasComponent", function () {
      return BarrasComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/usuario/usuario.service */
    "./src/app/service/usuario/usuario.service.ts");

    var BarrasComponent = /*#__PURE__*/function () {
      // 
      // public barChartData: any[] = [
      //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Tamales' },
      //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Chorizo' }
      // ];
      function BarrasComponent(us) {
        _classCallCheck(this, BarrasComponent);

        this.us = us;
        this.barChartOptions = {
          scaleShowVerticalLines: false,
          responsive: true
        };
        this.sumas = null;
        this.suma = {
          ventas: null,
          stock: null,
          costoAlmacen: null,
          montoVenta: null,
          ganancia: null
        }; // public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010'];

        this.barChartLabels = null; // public barChartType: string = 'bar';
        // public barChartLegend: boolean = true;

        this.barChartData = null;
      }

      _createClass(BarrasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.datos();
        }
      }, {
        key: "obtenerSuuma",
        value: function obtenerSuuma() {
          var _this = this;

          this.us.obtenerGraficas().subscribe(function (result) {
            return _this.sumas = result;
          });
        }
      }, {
        key: "graficas",
        value: function graficas() {
          var _this2 = this;

          this.us.obtenerGraficas().subscribe( // result => this.sumas = result
          function (datos) {
            _this2.obtenerSuuma();

            _this2.suma = datos[0];
            localStorage.setItem('stock', _this2.suma.stock);
            localStorage.setItem('venta', _this2.suma.ventas);
          });
        }
      }, {
        key: "datos",
        value: function datos() {
          if (localStorage.getItem('producto') == null) {
            this.graficas();
            this.barChartLabels = ['Ventas', 'Stock'];
            this.barChartData = [{
              data: [localStorage.getItem('venta'), localStorage.getItem('stock')],
              label: 'Venstas VS Stock'
            }];
          } else {
            // localStorage.getItem('producto')
            this.barChartLabels = ['Ventas', 'Stock'];
            this.barChartData = [{
              data: [localStorage.getItem('venta_'), localStorage.getItem('stock_')],
              label: 'Venstas VS Stock'
            }];
          }
        } // events

      }, {
        key: "chartClicked",
        value: function chartClicked(e) {
          console.log(e);
        }
      }, {
        key: "chartHovered",
        value: function chartHovered(e) {
          console.log(e);
        }
      }, {
        key: "randomize",
        value: function randomize() {
          // Only Change 3 values
          var data = [Math.round(Math.random() * 100), 59, 80, Math.random() * 100, 56, Math.random() * 100, 40];
          var clone = JSON.parse(JSON.stringify(this.barChartData));
          clone[0].data = data;
          this.barChartData = clone;
          /**
           * (My guess), for Angular to recognize the change in the dataset
           * it has to change the dataset variable directly,
           * so one way around it, is to clone the data, change it and then
           * assign it;
           */
        }
      }]);

      return BarrasComponent;
    }();

    BarrasComponent.ctorParameters = function () {
      return [{
        type: src_app_service_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]
      }];
    };

    BarrasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-barras',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./barras.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/barras/barras.component.html"))["default"]
    })], BarrasComponent);
    /***/
  },

  /***/
  "./src/app/components/chat/chat.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/chat/chat.component.ts ***!
    \***************************************************/

  /*! exports provided: ChatComponent */

  /***/
  function srcAppComponentsChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
      return ChatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/chat.service */
    "./src/app/service/chat.service.ts");

    var ChatComponent = /*#__PURE__*/function () {
      function ChatComponent(_cs) {
        var _this3 = this;

        _classCallCheck(this, ChatComponent);

        this._cs = _cs;
        this.mensaje = null;

        this._cs.cargarMensajes().subscribe(function () {
          setTimeout(function () {
            _this3.elemento.scrollTop = _this3.elemento.scrollHeight;
          }, 20);
        });
      }

      _createClass(ChatComponent, [{
        key: "enviar_mensaje",
        value: function enviar_mensaje() {
          var _this4 = this;

          console.log(this.mensaje);

          if (this.mensaje.length === 0) {
            return;
          }

          this._cs.agregarMensaje(this.mensaje).then(function () {
            return _this4.mensaje = '';
          })["catch"](function (err) {
            return console.error('Error al enviar', err);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          // this._cs.cargarMensajes();
          this.elemento = document.getElementById('app-mensajes');
        }
      }]);

      return ChatComponent;
    }();

    ChatComponent.ctorParameters = function () {
      return [{
        type: _service_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
      }];
    };

    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat/chat.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../login/login.component.css */
      "./src/app/login/login.component.css"))["default"]]
    })], ChatComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inputsEstilos2 {\r\n  background: rgb(219, 231, 245, 0.3);\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  color: black;\r\n  padding: 5px;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  text-align: left;\r\n\r\n\r\n}\r\n\r\n.btnFormulario {\r\n  background: rgb(52, 76, 114);\r\n  color: #fff;\r\n}\r\n\r\n.inputsEstilos {\r\n  background: rgb(219, 231, 245, 0.4);\r\n  width: 100%;\r\n  border: none;\r\n  margin: 0;\r\n}\r\n\r\n.login-register {\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 10% 0;\r\n  position: fixed;\r\n}\r\n\r\n.login-box {\r\n  width: 400px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.login-box .footer {\r\n  width: 100%;\r\n  left: 0px;\r\n  right: 0px;\r\n}\r\n\r\n.login-box .social {\r\n  display: block;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#recoverform {\r\n  display: none;\r\n\r\n}\r\n\r\n.login-sidebar {\r\n  padding: 0px;\r\n  margin-top: 0px;\r\n}\r\n\r\n.login-sidebar .login-box {\r\n  right: 0px;\r\n  position: absolute;\r\n  height: 100%;\r\n}\r\n\r\n.my-custom-scrollbar {\r\n  position: relative;\r\n  height: 400px;\r\n  overflow: scroll;\r\n}\r\n\r\n.my-custom-scrollbar2 {\r\n  position: relative;\r\n  height: 150px;\r\n\r\n}\r\n\r\n.table-wrapper-scroll-y {\r\n  display: block;\r\n}\r\n\r\n.table tbody tr td {\r\n  margin-top: 25%;\r\n  font-size: 0.8rem;\r\n\r\n}\r\n\r\n.table tbody tr:hover {\r\n  cursor: pointer;\r\n  background: rgb(54, 96, 146, 0.3);\r\n\r\n}\r\n\r\nthead th {\r\n  position: -webkit-sticky;\r\n  /* for Safari */\r\n  position: sticky;\r\n  top: 0;\r\n  background: rgb(54, 96, 146);\r\n  font-size: 0.8rem;\r\n  color: #FFF;\r\n  z-index: 999;\r\n}\r\n\r\nthead th:first-child {\r\n  left: 0;\r\n  z-index: 1;\r\n}\r\n\r\ntbody th {\r\n  position: -webkit-sticky;\r\n  /* for Safari */\r\n  position: sticky;\r\n  left: 0;\r\n  background: #FFF;\r\n  border-right: 1px solid #CCC;\r\n}\r\n\r\ntfoot tr {\r\n  position: -webkit-sticky;\r\n  /* for Safari */\r\n  position: sticky;\r\n  bottom: 0;\r\n  background: rgb(54, 96, 146);\r\n  font-size: 0.8rem;\r\n  color: #FFF;\r\n  z-index: 999;\r\n}\r\n\r\ntfoot tr:first-child {\r\n  left: 0;\r\n  z-index: 1;\r\n}\r\n\r\nfooter {\r\n  width: 100%;\r\n  background: rgb(54, 96, 146);\r\n  color: #ffffff;\r\n  text-align: center;\r\n  z-index: 0;\r\n  height: 200px;\r\n  position: fixed;\r\n  bottom: -170px;\r\n  left: 0;\r\n  right: 0;\r\n  transition-duration: 0.4s;\r\n}\r\n\r\nfooter:hover {\r\n  bottom: 0px;\r\n}\r\n\r\nfooter:after {\r\n  content: \"\\ea43\";\r\n  font-family: 'icomoon';\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 45%;\r\n  width: 50px;\r\n  height: 50px;\r\n  background: rgb(54, 96, 146);\r\n  margin-top: -15px;\r\n  border-radius: 50%;\r\n  color: white;\r\n  font-size: 2rem;\r\n  transition-duration: 0.6s;\r\n}\r\n\r\nfooter:hover:after {\r\n  transform: rotate(180deg);\r\n  background: rgb(54, 96, 146);\r\n  color: white;\r\n  margin-top: -10px;\r\n  font-size: 2rem;\r\n}\r\n\r\nfooter .rrss {\r\n  margin-top: 70px;\r\n  width: 100%;\r\n  height: 40px;\r\n}\r\n\r\nfooter .rrss a {\r\n  width: 40px;\r\n  height: 40px;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n\r\nfooter .rrss a:before {\r\n  color: white;\r\n  text-decoration: none;\r\n  position: absolute;\r\n  font-size: 2em;\r\n  top: 5px;\r\n  left: 5px;\r\n  font-family: 'icomoon';\r\n}\r\n\r\nfooter .rrss a:nth-child(1):before {\r\n  content: \"\\ea96\";\r\n}\r\n\r\nfooter .rrss a:nth-child(2):before {\r\n  content: \"\\ea90\";\r\n}\r\n\r\nfooter .rrss a:nth-child(3):before {\r\n  content: \"\\ea9e\";\r\n}\r\n\r\nfooter p {\r\n  font-size: 0.7em;\r\n  font-weight: lighter;\r\n}\r\n\r\n.fter {\r\n  background: rgb(54, 96, 146);\r\n}\r\n\r\n.navbar-header {\r\n  background: rgb(52, 79, 114);\r\n}\r\n\r\n.recuadro {\r\n  border: 1px solid white;\r\n  height: 120px;\r\n  background: rgb(52, 76, 114);\r\n  margin: 30px 10px 10px 10px;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n\r\n  footer {\r\n    width: 100%;\r\n    background: rgb(54, 96, 146);\r\n    color: #ffffff;\r\n    text-align: center;\r\n    z-index: 0;\r\n    height: 200px;\r\n    position: fixed;\r\n    bottom: -160px;\r\n    transition-duration: 0.4s;\r\n  }\r\n\r\n  .recuadro {\r\n    border: 1px solid white;\r\n    height: 60px;\r\n    background: rgb(52, 76, 114);\r\n    margin: 30px 10px 10px 10px;\r\n  }\r\n}\r\n\r\n.main-container {\r\n  margin-top: 40px;\r\n  margin-bottom: 150px;\r\n}\r\n\r\n.puntero {\r\n  cursor: pointer;\r\n}\r\n\r\n.chat-window {\r\n  padding: 5px;\r\n  width: 100%;\r\n  height: 120px;\r\n  text-align: left;\r\n  overflow: hidden;\r\n  border: 1px solid #4080FF;\r\n  border-radius: 20px;\r\n}\r\n\r\n.app-mensajes {\r\n  -moz-text-align-last: left;\r\n       text-align-last: left;\r\n  overflow-y: scroll;\r\n  height: 120px;\r\n  /*background:gray;*/\r\n  padding: 5px;\r\n}\r\n\r\n/* Animaciones */\r\n\r\n.animated {\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\r\n\r\n.fast {\r\n  -webkit-animation-duration: 0.3s;\r\n  animation-duration: 0.3s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\r\n\r\n@-webkit-keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.fadeIn {\r\n  -webkit-animation-name: fadeIn;\r\n          animation-name: fadeIn;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFtQztFQUNuQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCOzs7QUFHbEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztBQUNYOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTs7QUFFZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhOztBQUVmOztBQUlBO0VBQ0UsY0FBYztBQUNoQjs7QUFHQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7O0FBRW5COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlDQUFpQzs7QUFFbkM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsT0FBTztFQUNQLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsNEJBQTRCO0FBQzlCOztBQUtBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLE9BQU87RUFDUCxVQUFVO0FBQ1o7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixlQUFlO0VBQ2YsY0FBYztFQUNkLE9BQU87RUFDUCxRQUFRO0VBQ1IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxRQUFRO0VBQ1IsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7O0FBR0E7O0VBRUU7SUFDRSxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7SUFDYixlQUFlO0lBQ2YsY0FBYztJQUNkLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLDJCQUEyQjtFQUM3QjtBQUNGOztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBR0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwwQkFBcUI7T0FBckIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFHQSxnQkFBZ0I7O0FBQ2hCO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixpQ0FBaUM7RUFDakMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtFQUN4QixpQ0FBaUM7RUFDakMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFSQTtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dHNFc3RpbG9zMiB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIxOSwgMjMxLCAyNDUsIDAuMyk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuXHJcbn1cclxuXHJcbi5idG5Gb3JtdWxhcmlvIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoNTIsIDc2LCAxMTQpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uaW5wdXRzRXN0aWxvcyB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIxOSwgMjMxLCAyNDUsIDAuNCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmxvZ2luLXJlZ2lzdGVyIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTAlIDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG4ubG9naW4tYm94IHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5sb2dpbi1ib3ggLmZvb3RlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1ib3ggLnNvY2lhbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuI3JlY292ZXJmb3JtIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG5cclxufVxyXG5cclxuLmxvZ2luLXNpZGViYXIge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1zaWRlYmFyIC5sb2dpbi1ib3gge1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm15LWN1c3RvbS1zY3JvbGxiYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5teS1jdXN0b20tc2Nyb2xsYmFyMiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTUwcHg7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuXHJcbi50YWJsZSB0Ym9keSB0ciB0ZCB7XHJcbiAgbWFyZ2luLXRvcDogMjUlO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG5cclxufVxyXG5cclxuLnRhYmxlIHRib2R5IHRyOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiKDU0LCA5NiwgMTQ2LCAwLjMpO1xyXG5cclxufVxyXG5cclxudGhlYWQgdGgge1xyXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcclxuICAvKiBmb3IgU2FmYXJpICovXHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiKDU0LCA5NiwgMTQ2KTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBjb2xvcjogI0ZGRjtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbnRoZWFkIHRoOmZpcnN0LWNoaWxkIHtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbnRib2R5IHRoIHtcclxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgLyogZm9yIFNhZmFyaSAqL1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNDQ0M7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbnRmb290IHRyIHtcclxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgLyogZm9yIFNhZmFyaSAqL1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYig1NCwgOTYsIDE0Nik7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG50Zm9vdCB0cjpmaXJzdC1jaGlsZCB7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG5cclxuZm9vdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoNTQsIDk2LCAxNDYpO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB6LWluZGV4OiAwO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogLTE3MHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxufVxyXG5cclxuZm9vdGVyOmhvdmVyIHtcclxuICBib3R0b206IDBweDtcclxufVxyXG5cclxuZm9vdGVyOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlxcZWE0M1wiO1xyXG4gIGZvbnQtZmFtaWx5OiAnaWNvbW9vbic7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDQ1JTtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiKDU0LCA5NiwgMTQ2KTtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xyXG59XHJcblxyXG5mb290ZXI6aG92ZXI6YWZ0ZXIge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgYmFja2dyb3VuZDogcmdiKDU0LCA5NiwgMTQ2KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG5mb290ZXIgLnJyc3Mge1xyXG4gIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG5mb290ZXIgLnJyc3MgYSB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmZvb3RlciAucnJzcyBhOmJlZm9yZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgdG9wOiA1cHg7XHJcbiAgbGVmdDogNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnaWNvbW9vbic7XHJcbn1cclxuXHJcbmZvb3RlciAucnJzcyBhOm50aC1jaGlsZCgxKTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlYTk2XCI7XHJcbn1cclxuXHJcbmZvb3RlciAucnJzcyBhOm50aC1jaGlsZCgyKTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlYTkwXCI7XHJcbn1cclxuXHJcbmZvb3RlciAucnJzcyBhOm50aC1jaGlsZCgzKTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlYTllXCI7XHJcbn1cclxuXHJcbmZvb3RlciBwIHtcclxuICBmb250LXNpemU6IDAuN2VtO1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG59XHJcblxyXG4uZnRlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDU0LCA5NiwgMTQ2KTtcclxufVxyXG5cclxuLm5hdmJhci1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYig1MiwgNzksIDExNCk7XHJcbn1cclxuXHJcbi5yZWN1YWRybyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoNTIsIDc2LCAxMTQpO1xyXG4gIG1hcmdpbjogMzBweCAxMHB4IDEwcHggMTBweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcblxyXG4gIGZvb3RlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYig1NCwgOTYsIDE0Nik7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAtMTYwcHg7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIH1cclxuXHJcbiAgLnJlY3VhZHJvIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDUyLCA3NiwgMTE0KTtcclxuICAgIG1hcmdpbjogMzBweCAxMHB4IDEwcHggMTBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4ubWFpbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XHJcbn1cclxuXHJcbi5wdW50ZXJvIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4uY2hhdC13aW5kb3cge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNDA4MEZGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5hcHAtbWVuc2FqZXMge1xyXG4gIHRleHQtYWxpZ24tbGFzdDogbGVmdDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICAvKmJhY2tncm91bmQ6Z3JheTsqL1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuXHJcbi8qIEFuaW1hY2lvbmVzICovXHJcbi5hbmltYXRlZCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbn1cclxuXHJcbi5mYXN0IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLmZhZGVJbiB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/login/register.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/login/register.component.ts ***!
    \*********************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppLoginRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/usuario/usuario.service */
    "./src/app/service/usuario/usuario.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(us) {
        _classCallCheck(this, RegisterComponent);

        this.us = us;
        this.usuarios = null;
        this.productos = null;
        this.sumas = null;
        this.categorias = null;
        this.categ = {
          id: null,
          categoria: null,
          fecha: null
        };
        this.producto = {
          id: null,
          codigo: null,
          descripcion: null,
          stock: null,
          imagen: null,
          precio_compra: null,
          precio_venta: null,
          ventas: null,
          id_categoria: null,
          fecha: null,
          costoAlmacen: null,
          montoVenta: null,
          ganancia: null
        };
        this.suma = {
          ventas: null,
          stock: null,
          costoAlmacen: null,
          montoVenta: null,
          ganancia: null
        };
        this.usuario = {
          id: null,
          nombre: null,
          documento: null,
          email: null,
          telefono: null,
          direccion: null,
          fecha_nacimiento: null,
          compras: null,
          ultima_compra: null,
          fecha: null
        };
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.obtenerUsuarios();
          this.obtenerProductos();
          this.obtenerSuma();
          this.obtenerCategorias();
          this.graficas();
        }
      }, {
        key: "obtenerUsuarios",
        value: function obtenerUsuarios() {
          var _this5 = this;

          this.us.obtenerUsuarios().subscribe(function (result) {
            return _this5.usuarios = result;
          });
        }
      }, {
        key: "obtenerSuma",
        value: function obtenerSuma() {
          var _this6 = this;

          this.us.obtenerSuma().subscribe(function (result) {
            return _this6.sumas = result;
          });
        }
      }, {
        key: "obtenerCategorias",
        value: function obtenerCategorias() {
          var _this7 = this;

          this.us.obtenerCategorias().subscribe(function (result) {
            return _this7.categorias = result;
          });
        }
      }, {
        key: "altaUsuario",
        value: function altaUsuario() {
          var _this8 = this;

          if (this.usuario.nombre == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Alerta del sistema', 'No debe dejar ningun campo requerido en blanco', 'error');
          } else {
            this.us.altaUsuario(this.usuario).subscribe(function (datos) {
              if (datos['resultado'] == 'OK') {
                _this8.obtenerUsuarios();
              }
            });
          }
        }
      }, {
        key: "bajaUsuario",
        value: function bajaUsuario(id) {
          var _this9 = this;

          this.us.bajaUsuario(id).subscribe(function (datos) {
            if (datos['resultado'] == 'OK') {
              _this9.obtenerUsuarios();
            }
          });
        }
      }, {
        key: "editarUsuario",
        value: function editarUsuario() {
          var _this10 = this;

          if (this.usuario.nombre == null || this.usuario.email == null || this.usuario.telefono == null || this.usuario.direccion == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Alerta del sistema', 'Debe seleccionar un registro', 'error');
          } else {
            this.us.editarUsuario(this.usuario).subscribe(function (datos) {
              if (datos['resultado'] == 'OK') {
                _this10.obtenerUsuarios();
              }
            });
          }
        }
      }, {
        key: "seleccionarUsuario",
        value: function seleccionarUsuario(id) {
          var _this11 = this;

          this.us.seleccionarUsuario(id).subscribe(function (result) {
            return _this11.usuario = result[0];
          });
        }
      }, {
        key: "hayRegistros",
        value: function hayRegistros() {
          if (this.usuarios == null) {
            return false;
          } else {
            return true;
          }
        } // Productos

      }, {
        key: "obtenerProductos",
        value: function obtenerProductos() {
          var _this12 = this;

          this.us.obtenerProductos().subscribe(function (result) {
            return _this12.productos = result;
          });
        }
      }, {
        key: "altaProducto",
        value: function altaProducto() {
          var _this13 = this;

          if (this.producto.codigo == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Alerta del sistema', 'No debe dejar ningun campo requerido en blanco', 'error');
          } else {
            this.us.altaProducto(this.productos).subscribe(function (datos) {
              if (datos['resultado'] == 'OK') {
                _this13.obtenerProductos();
              }
            });
          }
        }
      }, {
        key: "bajaProducto",
        value: function bajaProducto(id) {
          var _this14 = this;

          this.us.bajaProducto(id).subscribe(function (datos) {
            if (datos['resultado'] == 'OK') {
              _this14.obtenerProductos();
            }
          });
        }
      }, {
        key: "editarProducto",
        value: function editarProducto() {
          var _this15 = this;

          // tslint:disable-next-line: max-line-length
          if (this.producto.codigo == null || this.producto.descripcion == null || this.producto.imagen == null || this.producto.precio_venta == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Alerta del sistema', 'Debe seleccionar un producto', 'error');
          } else {
            // console.log(this.producto);
            this.us.editarProducto(this.producto).subscribe(function (datos) {
              if (datos['resultado'] == 'OK') {
                _this15.obtenerProductos();

                _this15.obtenerSuma();
              }
            });
          }
        }
      }, {
        key: "seleccionarProducto",
        value: function seleccionarProducto(id) {
          var _this16 = this;

          this.us.seleccionarProducto(id).subscribe(function (result) {
            return _this16.producto = result[0];
          });
          localStorage.setItem('stock_', this.producto.stock);
          localStorage.setItem('venta_', this.producto.ventas);
          localStorage.setItem('producto', this.producto.descripcion); // this.us.datos();
        }
      }, {
        key: "hayProductos",
        value: function hayProductos() {
          if (this.productos == null) {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "graficas",
        value: function graficas() {
          var _this17 = this;

          this.us.obtenerGraficas().subscribe(function (result) {
            return _this17.sumas = result;
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _service_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/register.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css"))["default"]]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/pages/dasboard/dasboard.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/dasboard/dasboard.component.ts ***!
    \******************************************************/

  /*! exports provided: DasboardComponent */

  /***/
  function srcAppPagesDasboardDasboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DasboardComponent", function () {
      return DasboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DasboardComponent = /*#__PURE__*/function () {
      function DasboardComponent() {
        _classCallCheck(this, DasboardComponent);
      }

      _createClass(DasboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DasboardComponent;
    }();

    DasboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dasboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dasboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dasboard/dasboard.component.html"))["default"]
    })], DasboardComponent);
    /***/
  },

  /***/
  "./src/app/pages/graficas1/graficas1.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/graficas1/graficas1.component.ts ***!
    \********************************************************/

  /*! exports provided: Graficas1Component */

  /***/
  function srcAppPagesGraficas1Graficas1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Graficas1Component", function () {
      return Graficas1Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Graficas1Component = /*#__PURE__*/function () {
      function Graficas1Component() {
        _classCallCheck(this, Graficas1Component);
      }

      _createClass(Graficas1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Graficas1Component;
    }();

    Graficas1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-graficas1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./graficas1.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/graficas1/graficas1.component.html"))["default"]
    })], Graficas1Component);
    /***/
  },

  /***/
  "./src/app/pages/pages.component.css":
  /*!*******************************************!*\
    !*** ./src/app/pages/pages.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPagesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btnFormulario {\r\n  background: rgb(52, 76, 114);\r\n  color: #fff;\r\n  border: 0.2px solid white;\r\n  margin-top: 5%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bkZvcm11bGFyaW8ge1xyXG4gIGJhY2tncm91bmQ6IHJnYig1MiwgNzYsIDExNCk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAwLjJweCBzb2xpZCB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/pages.component.ts":
  /*!******************************************!*\
    !*** ./src/app/pages/pages.component.ts ***!
    \******************************************/

  /*! exports provided: PagesComponent */

  /***/
  function srcAppPagesPagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesComponent", function () {
      return PagesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PagesComponent = /*#__PURE__*/function () {
      function PagesComponent() {
        _classCallCheck(this, PagesComponent);
      }

      _createClass(PagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PagesComponent;
    }();

    PagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pages.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pages.component.css */
      "./src/app/pages/pages.component.css"))["default"]]
    })], PagesComponent);
    /***/
  },

  /***/
  "./src/app/pages/pages.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pages/pages.module.ts ***!
    \***************************************/

  /*! exports provided: PagesModule */

  /***/
  function srcAppPagesPagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesModule", function () {
      return PagesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _progress_progress_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./progress/progress.component */
    "./src/app/pages/progress/progress.component.ts");
    /* harmony import */


    var _graficas1_graficas1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./graficas1/graficas1.component */
    "./src/app/pages/graficas1/graficas1.component.ts");
    /* harmony import */


    var _dasboard_dasboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dasboard/dasboard.component */
    "./src/app/pages/dasboard/dasboard.component.ts");
    /* harmony import */


    var _pages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages.component */
    "./src/app/pages/pages.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _pages_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages.routes */
    "./src/app/pages/pages.routes.ts");

    var PagesModule = function PagesModule() {
      _classCallCheck(this, PagesModule);
    };

    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_dasboard_dasboard_component__WEBPACK_IMPORTED_MODULE_4__["DasboardComponent"], _pages_component__WEBPACK_IMPORTED_MODULE_5__["PagesComponent"], _progress_progress_component__WEBPACK_IMPORTED_MODULE_2__["ProgressComponent"], _graficas1_graficas1_component__WEBPACK_IMPORTED_MODULE_3__["Graficas1Component"]],
      exports: [_dasboard_dasboard_component__WEBPACK_IMPORTED_MODULE_4__["DasboardComponent"], _progress_progress_component__WEBPACK_IMPORTED_MODULE_2__["ProgressComponent"], _graficas1_graficas1_component__WEBPACK_IMPORTED_MODULE_3__["Graficas1Component"]],
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _pages_routes__WEBPACK_IMPORTED_MODULE_7__["PAGES_ROUTES"]]
    })], PagesModule);
    /***/
  },

  /***/
  "./src/app/pages/pages.routes.ts":
  /*!***************************************!*\
    !*** ./src/app/pages/pages.routes.ts ***!
    \***************************************/

  /*! exports provided: PAGES_ROUTES */

  /***/
  function srcAppPagesPagesRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PAGES_ROUTES", function () {
      return PAGES_ROUTES;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages.component */
    "./src/app/pages/pages.component.ts");
    /* harmony import */


    var _dasboard_dasboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dasboard/dasboard.component */
    "./src/app/pages/dasboard/dasboard.component.ts");
    /* harmony import */


    var _progress_progress_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./progress/progress.component */
    "./src/app/pages/progress/progress.component.ts");
    /* harmony import */


    var _graficas1_graficas1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./graficas1/graficas1.component */
    "./src/app/pages/graficas1/graficas1.component.ts");
    /* harmony import */


    var _login_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../login/register.component */
    "./src/app/login/register.component.ts");

    var pagesRoutes = [{
      path: '',
      component: _pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"],
      children: [{
        path: 'dashboard',
        component: _dasboard_dasboard_component__WEBPACK_IMPORTED_MODULE_3__["DasboardComponent"],
        data: {
          titulo: 'Dashboard'
        }
      }, {
        path: 'progress',
        component: _progress_progress_component__WEBPACK_IMPORTED_MODULE_4__["ProgressComponent"],
        data: {
          titulo: 'Progress'
        }
      }, {
        path: 'graficas1',
        component: _graficas1_graficas1_component__WEBPACK_IMPORTED_MODULE_5__["Graficas1Component"],
        data: {
          titulo: 'Gráficas'
        }
      }, {
        path: 'vista1',
        component: _login_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
        data: {
          titulo: 'Registro'
        }
      }, {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }]
    }];

    var PAGES_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(pagesRoutes);
    /***/

  },

  /***/
  "./src/app/pages/progress/progress.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/progress/progress.component.ts ***!
    \******************************************************/

  /*! exports provided: ProgressComponent */

  /***/
  function srcAppPagesProgressProgressComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressComponent", function () {
      return ProgressComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProgressComponent = /*#__PURE__*/function () {
      function ProgressComponent() {
        _classCallCheck(this, ProgressComponent);
      }

      _createClass(ProgressComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProgressComponent;
    }();

    ProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-progress',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./progress.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/progress/progress.component.html"))["default"]
    })], ProgressComponent);
    /***/
  },

  /***/
  "./src/app/service/chat.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/chat.service.ts ***!
    \*****************************************/

  /*! exports provided: ChatService */

  /***/
  function srcAppServiceChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ChatService = /*#__PURE__*/function () {
      function ChatService(afs) {
        _classCallCheck(this, ChatService);

        this.afs = afs;
        this.chats = [];
        this.usuario = {};
      }

      _createClass(ChatService, [{
        key: "cargarMensajes",
        value: function cargarMensajes() {
          var _this18 = this;

          this.itemCollections = this.afs.collection('chats', function (ref) {
            return ref.orderBy('fecha', 'desc').limit(5);
          });
          return this.itemCollections.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (mensajes) {
            console.log(mensajes);
            _this18.chats = [];

            var _iterator = _createForOfIteratorHelper(mensajes),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var mensaje = _step.value;

                _this18.chats.unshift(mensaje);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return _this18.chats;
          }));
        }
      }, {
        key: "agregarMensaje",
        value: function agregarMensaje(texto) {
          // TODO falta el UID del usuario
          var mensaje = {
            nombre: 'Sistema',
            mensaje: texto,
            fecha: new Date().getTime(),
            uid: new Date().toLocaleTimeString(),
            fecha_enviado: new Date().toLocaleDateString()
          };
          return this.itemCollections.add(mensaje);
        }
      }]);

      return ChatService;
    }();

    ChatService.ctorParameters = function () {
      return [{
        type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ChatService);
    /***/
  },

  /***/
  "./src/app/service/service.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/service/service.module.ts ***!
    \*******************************************/

  /*! exports provided: ServiceModule */

  /***/
  function srcAppServiceServiceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceModule", function () {
      return ServiceModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./usuario/usuario.service */
    "./src/app/service/usuario/usuario.service.ts");

    var ServiceModule = function ServiceModule() {
      _classCallCheck(this, ServiceModule);
    };

    ServiceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]],
      providers: [_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]],
      declarations: []
    })], ServiceModule);
    /***/
  },

  /***/
  "./src/app/service/usuario/usuario.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/service/usuario/usuario.service.ts ***!
    \****************************************************/

  /*! exports provided: UsuarioService */

  /***/
  function srcAppServiceUsuarioUsuarioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioService", function () {
      return UsuarioService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var UsuarioService = /*#__PURE__*/function () {
      function UsuarioService(http) {
        _classCallCheck(this, UsuarioService);

        this.http = http;
        this.URL = "https://ovgsoft.com/android/apiwimo/";
      }

      _createClass(UsuarioService, [{
        key: "obtenerUsuarios",
        value: function obtenerUsuarios() {
          return this.http.get("".concat(this.URL, "ObtenerUsuarios.php"));
        }
      }, {
        key: "obtenerSuma",
        value: function obtenerSuma() {
          return this.http.get("".concat(this.URL, "ObtenerSuma.php"));
        }
      }, {
        key: "obtenerGraficas",
        value: function obtenerGraficas() {
          return this.http.get("".concat(this.URL, "ObtenerGrafica.php"));
        }
      }, {
        key: "obtenerCategorias",
        value: function obtenerCategorias() {
          return this.http.get("".concat(this.URL, "Categorias.php"));
        }
      }, {
        key: "obtenerProductos",
        value: function obtenerProductos() {
          return this.http.get("".concat(this.URL, "ObtenerProductos.php"));
        }
      }, {
        key: "altaUsuario",
        value: function altaUsuario(usuario) {
          return this.http.post("".concat(this.URL, "AltaUsuario.php"), JSON.stringify(usuario));
        }
      }, {
        key: "altaProducto",
        value: function altaProducto(producto) {
          return this.http.post("".concat(this.URL, "AltaProducto.php"), JSON.stringify(producto));
        }
      }, {
        key: "bajaUsuario",
        value: function bajaUsuario(id) {
          return this.http.get("".concat(this.URL, "BajaUsuario.php?id=").concat(id));
        }
      }, {
        key: "bajaProducto",
        value: function bajaProducto(id) {
          return this.http.get("".concat(this.URL, "BajaProducto.php?id=").concat(id));
        }
      }, {
        key: "seleccionarUsuario",
        value: function seleccionarUsuario(id) {
          return this.http.get("".concat(this.URL, "SeleccionarUsuario.php?id=").concat(id));
        }
      }, {
        key: "seleccionarProducto",
        value: function seleccionarProducto(id) {
          return this.http.get("".concat(this.URL, "SeleccionarProductos.php?id=").concat(id));
        }
      }, {
        key: "editarUsuario",
        value: function editarUsuario(usuario) {
          return this.http.post("".concat(this.URL, "EditarUsuario.php"), JSON.stringify(usuario));
        }
      }, {
        key: "editarProducto",
        value: function editarProducto(prosucto) {
          return this.http.post("".concat(this.URL, "EditarProducto.php"), JSON.stringify(prosucto));
        }
      }]);

      return UsuarioService;
    }();

    UsuarioService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], UsuarioService);
    /***/
  },

  /***/
  "./src/app/shared/breadcrumbs/breadcrumbs.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/breadcrumbs/breadcrumbs.component.ts ***!
    \*************************************************************/

  /*! exports provided: BreadcrumbsComponent */

  /***/
  function srcAppSharedBreadcrumbsBreadcrumbsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function () {
      return BreadcrumbsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BreadcrumbsComponent = /*#__PURE__*/function () {
      function BreadcrumbsComponent() {
        _classCallCheck(this, BreadcrumbsComponent);
      }

      _createClass(BreadcrumbsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BreadcrumbsComponent;
    }();

    BreadcrumbsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-breadcrumbs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./breadcrumbs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/breadcrumbs/breadcrumbs.component.html"))["default"]
    })], BreadcrumbsComponent);
    /***/
  },

  /***/
  "./src/app/shared/header/header.component.css":
  /*!****************************************************!*\
    !*** ./src/app/shared/header/header.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navbar-header,\r\n.navbar-collapse {\r\n  background: rgb(54, 96, 146);\r\n}\r\n\r\n.navItem a i {\r\n  color: white;\r\n  font-size: 2rem;\r\n  margin: 20px;\r\n\r\n}\r\n\r\n.navItem a {\r\n  position: relative;\r\n  width: 70px;\r\n  height: 70px;\r\n\r\n\r\n}\r\n\r\n.navItem {\r\n  width: 70px;\r\n  height: 70px;\r\n  margin-right: 30px;\r\n}\r\n\r\n.navItem:hover {\r\n  background: rgb(52, 79, 114);\r\n  color: rgb(54, 96, 146);\r\n  width: 70px;\r\n\r\n}\r\n\r\n.navItem a i:hover {\r\n  color: rgb(54, 96, 146);\r\n\r\n}\r\n\r\n.navItemDos a i {\r\n  font-size: 1rem;\r\n}\r\n\r\n.imgLogo img {\r\n  width: 50px;\r\n  overflow: hidden;\r\n\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n\r\n  .navItem {\r\n    width: 70px;\r\n    height: 70px;\r\n    margin-right: 5px;\r\n  }\r\n\r\n  .navItem a i {\r\n    color: white;\r\n    font-size: 1.5rem;\r\n\r\n  }\r\n\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7O0FBRWQ7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7OztBQUdkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLFdBQVc7O0FBRWI7O0FBRUE7RUFDRSx1QkFBdUI7O0FBRXpCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7O0FBRWxCOztBQUdBOztFQUVFO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osaUJBQWlCOztFQUVuQjs7O0FBR0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1oZWFkZXIsXHJcbi5uYXZiYXItY29sbGFwc2Uge1xyXG4gIGJhY2tncm91bmQ6IHJnYig1NCwgOTYsIDE0Nik7XHJcbn1cclxuXHJcbi5uYXZJdGVtIGEgaSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBtYXJnaW46IDIwcHg7XHJcblxyXG59XHJcblxyXG5cclxuLm5hdkl0ZW0gYSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuXHJcblxyXG59XHJcblxyXG4ubmF2SXRlbSB7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuLm5hdkl0ZW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYig1MiwgNzksIDExNCk7XHJcbiAgY29sb3I6IHJnYig1NCwgOTYsIDE0Nik7XHJcbiAgd2lkdGg6IDcwcHg7XHJcblxyXG59XHJcblxyXG4ubmF2SXRlbSBhIGk6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoNTQsIDk2LCAxNDYpO1xyXG5cclxufVxyXG5cclxuLm5hdkl0ZW1Eb3MgYSBpIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5pbWdMb2dvIGltZyB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cclxuICAubmF2SXRlbSB7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxuXHJcbiAgLm5hdkl0ZW0gYSBpIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG5cclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/shared/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/nopagefound/nopagefound.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/nopagefound/nopagefound.component.ts ***!
    \*************************************************************/

  /*! exports provided: NopagefoundComponent */

  /***/
  function srcAppSharedNopagefoundNopagefoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NopagefoundComponent", function () {
      return NopagefoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NopagefoundComponent = /*#__PURE__*/function () {
      function NopagefoundComponent() {
        _classCallCheck(this, NopagefoundComponent);
      }

      _createClass(NopagefoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NopagefoundComponent;
    }();

    NopagefoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nopagefound',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nopagefound.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/nopagefound/nopagefound.component.html"))["default"]
    })], NopagefoundComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./nopagefound/nopagefound.component */
    "./src/app/shared/nopagefound/nopagefound.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./breadcrumbs/breadcrumbs.component */
    "./src/app/shared/breadcrumbs/breadcrumbs.component.ts");
    /* harmony import */


    var _slidebar_slidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./slidebar/slidebar.component */
    "./src/app/shared/slidebar/slidebar.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [_nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_4__["NopagefoundComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _slidebar_slidebar_component__WEBPACK_IMPORTED_MODULE_7__["SlidebarComponent"], _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsComponent"], _nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_4__["NopagefoundComponent"]],
      exports: [_nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_4__["NopagefoundComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _slidebar_slidebar_component__WEBPACK_IMPORTED_MODULE_7__["SlidebarComponent"], _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsComponent"], _nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_4__["NopagefoundComponent"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/shared/slidebar/slidebar.component.css":
  /*!********************************************************!*\
    !*** ./src/app/shared/slidebar/slidebar.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSlidebarSlidebarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#sidebarnav li {\r\n  color: white;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n#sidebarnav li a {\r\n  color: white;\r\n  font-size: 1rem;\r\n}\r\n\r\n.navItemDos a i {\r\n  font-size: 2rem;\r\n}\r\n\r\n.iconosMenu {\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NsaWRlYmFyL3NsaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NsaWRlYmFyL3NsaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2lkZWJhcm5hdiBsaSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4jc2lkZWJhcm5hdiBsaSBhIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4ubmF2SXRlbURvcyBhIGkge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLmljb25vc01lbnUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/slidebar/slidebar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/slidebar/slidebar.component.ts ***!
    \*******************************************************/

  /*! exports provided: SlidebarComponent */

  /***/
  function srcAppSharedSlidebarSlidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlidebarComponent", function () {
      return SlidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SlidebarComponent = /*#__PURE__*/function () {
      function SlidebarComponent() {
        _classCallCheck(this, SlidebarComponent);
      }

      _createClass(SlidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SlidebarComponent;
    }();

    SlidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-slidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./slidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/slidebar/slidebar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./slidebar.component.css */
      "./src/app/shared/slidebar/slidebar.component.css"))["default"]]
    })], SlidebarComponent);
    /***/
  },

  /***/
  "./src/environments/environment.prod.ts":
  /*!**********************************************!*\
    !*** ./src/environments/environment.prod.ts ***!
    \**********************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var environment = {
      production: false,
      firebase: {
        apiKey: 'AIzaSyARAlR5yeT-tRXc4j88kT_ZhQ1F503qbJc',
        authDomain: 'wimo-6a128.firebaseapp.com',
        databaseURL: 'https://wimo-6a128.firebaseio.com',
        projectId: 'wimo-6a128',
        storageBucket: 'wimo-6a128.appspot.com',
        messagingSenderId: '810484723263',
        appId: '1:810484723263:web:d1aeeabeea7807005b128a',
        measurementId: 'G-8M9JBK0MRN'
      }
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Chau\Desktop\wimo\CrtWiMo\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map