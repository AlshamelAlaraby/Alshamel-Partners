(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_icons_mdi_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Footer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Footer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Footer Component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Horizontal-navbar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Horizontal-navbar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _horizontal_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horizontal-menu */ "./resources/js/components/horizontal-menu.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");



/**
 * Horiontal-navbar component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      menuItems: _horizontal_menu__WEBPACK_IMPORTED_MODULE_0__.menuItems
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["layout"]),
  props: {
    type: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: true
    },
    menu: {
      type: String,
      required: true
    }
  },
  watch: {
    type: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              document.body.setAttribute("data-topbar-color", "dark");
              break;
            case "light":
              document.body.setAttribute("data-topbar-color", "light");
              break;
            default:
              document.body.setAttribute("data-topbar-color", "dark");
              break;
          }
        }
      }
    },
    width: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "boxed":
              document.body.setAttribute("data-layout-width", "boxed");
              break;
            case "fluid":
              document.body.setAttribute("data-layout-mode", "horizontal");
              document.body.removeAttribute("data-layout-width");
              break;
            default:
              document.body.setAttribute("data-layout-mode", "fluid");
              break;
          }
        }
      }
    },
    menu: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "fixed":
              document.body.setAttribute("data-layout-menu-position", "fixed");
              break;
            case "scrollable":
              document.body.setAttribute("data-layout-menu-position", "scrollable");
              break;
            default:
              document.body.setAttribute("data-layout-menu-position", "fixed");
              break;
          }
        }
      }
    }
  },
  mounted: function mounted() {
    var _this = this;
    this.activateParentDropdown();
    this.$router.afterEach(function (routeTo, routeFrom) {
      _this.activateParentDropdown();
    });
  },
  methods: {
    activateParentDropdown: function activateParentDropdown() {
      var resetParent = function resetParent(el) {
        var parent = el.parentElement;
        if (parent) {
          parent.classList.remove("active");
          var parent2 = parent.parentElement;
          if (parent2) {
            parent2.classList.remove("active");
            var parent3 = parent2.parentElement;
            parent3.classList.remove("show");
            if (parent3) {
              parent3.classList.remove("active");
              var parent4 = parent3.parentElement;
              if (parent4) {
                parent4.classList.remove("active");
                var parent5 = parent4.parentElement;
                if (parent5) {
                  parent5.classList.remove("active");
                }
              }
            }
          }
        }
      };
      var links = document.getElementsByClassName("side-nav-link-ref");
      var matchingMenuItem = null;
      for (var _i = 0; _i < links.length; _i++) {
        // reset menu
        resetParent(links[_i]);
      }
      for (var i = 0; i < links.length; i++) {
        if (window.location.pathname === links[i].pathname) {
          matchingMenuItem = links[i];
          break;
        }
      }
      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");
        var parent = matchingMenuItem.parentElement;
        if (parent) {
          parent.classList.add("active");
          var parent2 = parent.parentElement;
          if (parent2) {
            parent2.classList.add("active");
            var parent3 = parent2.parentElement;
            if (parent3) {
              parent3.classList.add("active");
              var parent4 = parent3.parentElement;
              if (parent4) {
                parent4.classList.add("active");
                var parent5 = parent4.parentElement;
                if (parent5) {
                  parent5.classList.add("active");
                }
              }
            }
          }
        }
      }
    },
    /**
     * Returns true or false if given menu item has child or not
     * @param item menuItem
     */
    hasItems: function hasItems(item) {
      return item.subItems !== undefined ? item.subItems.length > 0 : false;
    },
    /**
     * Menu clicked show the submenu
     */
    onMenuClick: function onMenuClick(event) {
      event.preventDefault();
      var nextEl = event.target.nextSibling;
      var isHorizontal = document.getElementById("wrapper").hasAttribute("layout");
      if (isHorizontal) {
        nextEl.parentElement.classList.add("show");
        nextEl.nextSibling.classList.add("show");
      } else {
        if (nextEl && nextEl.classList && !nextEl.classList.contains("show")) {
          var parentEl = event.target.parentNode;
          if (parentEl) {
            parentEl.classList.remove("show");
          }
          nextEl.classList.add("show");
        } else if (nextEl && nextEl.classList) {
          nextEl.classList.remove("show");
        }
      }
      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Page-header.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Page-header.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/helpers */ "./resources/js/state/helpers.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/**
 * Page-header component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  computed: _objectSpread({}, _state_helpers__WEBPACK_IMPORTED_MODULE_0__.layoutComputed)
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Rightbar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Rightbar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/helpers */ "./resources/js/state/helpers.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/**
 * Right-sidebar component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      config: {
        handler: this.handleRightBarClick,
        middleware: this.middleware,
        events: ["click"]
      },
      checked: false,
      layout: this.$store ? this.$store.state.layout.layoutType : {} || {},
      width: this.$store ? this.$store.state.layout.layoutWidth : {} || {},
      topbar: this.$store ? this.$store.state.layout.topbar : {} || {},
      sidebarType: this.$store ? this.$store.state.layout.leftSidebarType : {} || {},
      sidebarSize: this.$store ? this.$store.state.layout.leftSidebarSize : {} || {},
      menu: this.$store ? this.$store.state.layout.menuPosition : {} || {}
    };
  },
  methods: _objectSpread(_objectSpread({}, _state_helpers__WEBPACK_IMPORTED_MODULE_0__.layoutMethods), {}, {
    handleRightBarClick: function handleRightBarClick(e, el) {
      this.$parent.hideRightSidebar();
    },
    middleware: function middleware(event, el) {
      return !event.target.classList.contains("toggle-right");
    },
    changeLayout: function changeLayout(layout) {
      this.$store.dispatch("layout/changeLayoutType", {
        layoutType: layout
      });
    },
    changeWidth: function changeWidth(width) {
      this.$store.dispatch("layout/changeLayoutWidth", {
        layoutWidth: width
      });
    },
    changeTopbartype: function changeTopbartype(value) {
      this.$store.dispatch("layout/changeTopbar", {
        topbar: value
      });
    },
    changeType: function changeType(type) {
      this.$store.dispatch("layout/changeLeftSidebarType", {
        leftSidebarType: type
      });
    },
    changeSize: function changeSize(size) {
      this.$store.dispatch("layout/changeLeftSidebarSize", {
        leftSidebarSize: size
      });
    },
    changemenuPosition: function changemenuPosition(position) {
      this.$store.dispatch("layout/changeMenuPosition", {
        menuPosition: position
      });
    },
    enableInfo: function enableInfo() {
      if (this.checked) document.body.setAttribute("data-sidebar-showuser", "true");else document.body.removeAttribute("data-sidebar-showuser");
    },
    reset: function reset() {
      this.width = "fluid";
      this.menu = "fixed";
      this.sidebarType = "light";
      this.sidebarSize = "default";
      this.topbar = "dark";
      this.checked = false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./resources/js/components/menu.js");



/**
 * Sidebar component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      menuItems: _menu__WEBPACK_IMPORTED_MODULE_0__.menuItems
    };
  },
  props: {
    type: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true
    },
    menu: {
      type: String,
      required: true
    },
    topbar: {
      type: String,
      required: true
    }
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["layout"]),
  watch: {
    type: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              document.body.setAttribute("data-sidebar-color", "dark");
              break;
            case "light":
              document.body.setAttribute("data-sidebar-color", "light");
              break;
            case "brand":
              document.body.setAttribute("data-sidebar-color", "brand");
              break;
            case "gradient":
              document.body.setAttribute("data-sidebar-color", "gradient");
              break;
            default:
              document.body.setAttribute("data-sidebar-color", "light");
              break;
          }
        }
      }
    },
    width: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "boxed":
              document.body.setAttribute("data-layout-width", "boxed");
              document.body.setAttribute("data-sidebar-size", "condensed");
              break;
            case "fluid":
              document.body.setAttribute("data-layout-width", "fluid");
              document.body.removeAttribute("data-sidebar-size");
              document.body.removeAttribute("data-layout-width");
              break;
            default:
              document.body.setAttribute("data-layout-mode", "fluid");
              break;
          }
        }
      }
    },
    size: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "default":
              document.body.setAttribute("data-sidebar-size", "default");
              break;
            case "condensed":
              document.body.setAttribute("data-sidebar-size", "condensed");
              break;
            case "compact":
              document.body.setAttribute("data-sidebar-size", "compact");
              break;
            default:
              document.body.setAttribute("data-sidebar-size", "default");
              break;
          }
        }
      }
    },
    menu: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "fixed":
              document.body.setAttribute("data-layout-menu-position", "fixed");
              break;
            case "scrollable":
              document.body.setAttribute("data-layout-menu-position", "scrollable");
              break;
            default:
              document.body.setAttribute("data-layout-menu-position", "fixed");
              break;
          }
        }
      }
    },
    topbar: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              document.body.setAttribute("data-topbar-color", "dark");
              break;
            case "light":
              document.body.setAttribute("data-topbar-color", "light");
              break;
            default:
              document.body.setAttribute("data-topbar-color", "dark");
              break;
          }
        }
      }
    }
  },
  mounted: function mounted() {
    var _this = this;
    this._activateMenuDropdown();
    this.$router.afterEach(function (routeTo, routeFrom) {
      _this._activateMenuDropdown();
    });
  },
  methods: {
    /**
     * Returns true or false if given menu item has child or not
     * @param item menuItem
     */
    hasItems: function hasItems(item) {
      return item.subItems !== undefined ? item.subItems.length > 0 : false;
    },
    _activateMenuDropdown: function _activateMenuDropdown() {
      var resetParent = function resetParent(el) {
        el.classList.remove("active");
        var parent = el.parentElement;
        if (parent) {
          parent.classList.remove("menuitem-active");
          var parent2 = parent.parentElement;
          if (parent2) {
            var parent3 = parent2.parentElement;
            if (parent3) {
              parent3.classList.remove("show");
              var parent4 = parent3.parentElement;
              if (parent4) {
                parent4.classList.remove("menuitem-active");
              }
            }
          }
        }
      };
      var links = document.getElementsByClassName("side-nav-link-ref");
      var matchingMenuItem = null;
      var paths = [];
      for (var _i = 0; _i < links.length; _i++) {
        // reset menu
        resetParent(links[_i]);
      }
      for (var i = 0; i < links.length; i++) {
        paths.push(links[i]["pathname"]);
      }
      var itemIndex = paths.indexOf(window.location.pathname);
      if (itemIndex === -1) {
        var strIndex = window.location.pathname.lastIndexOf("/");
        var item = window.location.pathname.substr(0, strIndex).toString();
        matchingMenuItem = links[paths.indexOf(item)];
      } else {
        matchingMenuItem = links[itemIndex];
      }
      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");
        var parent = matchingMenuItem.parentElement;

        /**
         * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
         * We should come up with non hard coded approach
         */
        if (parent) {
          parent.classList.add("menuitem-active");
          var parent2 = parent.parentElement;
          if (parent2) {
            var parent3 = parent2.parentElement;
            if (parent3) {
              parent3.classList.add("show");
              var parent4 = parent3.parentElement;
              if (parent4) {
                parent4.classList.add("menuitem-active");
              }
            }
          }
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Topbar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Topbar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_adminAxios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/adminAxios */ "./resources/js/api/adminAxios.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router */ "./resources/js/router/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/**
 * Topbar component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      languages: [{
        flag: "/assets/images/us.jpg",
        language: "en",
        title: "English"
      }, {
        flag: "/assets/images/arabic.png",
        language: "ar",
        title: "Arabic"
      }],
      current_language: this.$i18n.locale,
      text: null,
      flag: null,
      value: null
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.value = this.languages.find(function (x) {
      return x.language === _this.$i18n.locale;
    });
    this.text = this.value.title;
    this.flag = this.value.flag;
  },
  methods: {
    /**
     * Toggle menu
     */
    toggleMenu: function toggleMenu() {
      this.$parent.toggleMenu();
    },
    /**
     * Full screen
     */
    initFullScreen: function initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (!document.fullscreenElement && /* alternative standard method */
      !document.mozFullScreenElement && !document.webkitFullscreenElement) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    /**
     * Toggle rightbar
     */
    toggleRightSidebar: function toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
    /**
     * Set languages
     */
    setLanguage: function setLanguage(locale, country, flag) {
      this.$i18n.locale = locale;
      this.current_language = locale;
      this.text = country;
      this.flag = flag;
      localStorage.setItem("lang", locale);
      if (locale == 'ar') {
        document.body.style.textAlign = 'right';
        document.body.classList.add('rtl');
        document.querySelector('html').style.direction = 'rtl';
        document.querySelector('html').setAttribute('lang', locale || 'ar');
        var style_dashboard = document.getElementById('style_dashboard');
        style_dashboard.setAttribute('href', window.location.origin + "/css/custom.css");
      } else {
        document.body.style.textAlign = 'left';
        document.body.classList.remove('rtl');
        document.querySelector('html').style.direction = 'ltr';
        document.querySelector('html').setAttribute('lang', locale || 'ar');
        var _style_dashboard = document.getElementById('style_dashboard');
        _style_dashboard.setAttribute('href', '');
      }
    },
    /**
     * Horizontal-toggle menu
     */
    horizonalmenu: function horizonalmenu() {
      var element = document.getElementById("topnav-menu-content");
      element.classList.toggle("show");
    },
    /**
     *  Logout Dashboard
     */
    logout: function logout() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api_adminAxios__WEBPACK_IMPORTED_MODULE_0__["default"].post("/auth/logout").then(function (res) {
                  _this2.$store.commit('auth/logoutToken');
                  return _this2.$router.push({
                    name: 'login'
                  });
                })["catch"](function (err) {
                  _this2.$store.commit('auth/logoutToken');
                  return _this2.$router.push({
                    name: 'login'
                  });
                })["finally"](function () {});
              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Two-column-sidebar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Two-column-sidebar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      activetab: 1
    };
  },
  props: {
    type: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true
    },
    menu: {
      type: String,
      required: true
    },
    topbar: {
      type: String,
      required: true
    }
  },
  watch: {
    type: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              document.body.setAttribute("data-sidebar-color", "dark");
              break;
            case "light":
              document.body.setAttribute("data-sidebar-color", "light");
              break;
            case "brand":
              document.body.setAttribute("data-sidebar-color", "brand");
              break;
            case "gradient":
              document.body.setAttribute("data-sidebar-color", "gradient");
              break;
            default:
              document.body.setAttribute("data-sidebar-color", "light");
              break;
          }
        }
      }
    },
    width: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "boxed":
              document.body.setAttribute("data-layout-width", "boxed");
              document.body.setAttribute("data-sidebar-size", "condensed");
              break;
            case "fluid":
              document.body.setAttribute("data-layout-width", "fluid");
              document.body.removeAttribute("data-sidebar-size");
              document.body.removeAttribute("data-layout-width");
              break;
            default:
              document.body.setAttribute("data-layout-mode", "fluid");
              break;
          }
        }
      }
    },
    size: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "default":
              document.body.setAttribute("data-sidebar-size", "default");
              break;
            case "condensed":
              document.body.setAttribute("data-sidebar-size", "condensed");
              break;
            case "compact":
              document.body.setAttribute("data-sidebar-size", "compact");
              break;
            default:
              document.body.setAttribute("data-sidebar-size", "default");
              break;
          }
        }
      }
    },
    menu: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "fixed":
              document.body.setAttribute("data-layout-menu-position", "fixed");
              break;
            case "scrollable":
              document.body.setAttribute("data-layout-menu-position", "scrollable");
              break;
            default:
              document.body.setAttribute("data-layout-menu-position", "fixed");
              break;
          }
        }
      }
    },
    topbar: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              document.body.setAttribute("data-topbar-color", "dark");
              break;
            case "light":
              document.body.setAttribute("data-topbar-color", "light");
              break;
            default:
              document.body.setAttribute("data-topbar-color", "dark");
              break;
          }
        }
      }
    }
  },
  mounted: function mounted() {
    var _this = this;
    this._activateMenuDropdown();
    this.$router.afterEach(function (routeTo, routeFrom) {
      _this._activateMenuDropdown();
    });
  },
  methods: {
    /**
     * Returns true or false if given menu item has child or not
     * @param item menuItem
     */
    hasItems: function hasItems(item) {
      return item.subItems !== undefined ? item.subItems.length > 0 : false;
    },
    _activateMenuDropdown: function _activateMenuDropdown() {
      var resetParent = function resetParent(el) {
        el.classList.remove("active");
        var parent = el.parentElement;
        if (parent) {
          parent.classList.remove("menuitem-active");
          var parent2 = parent.parentElement;
          if (parent2) {
            var parent3 = parent2.parentElement;
            if (parent3) {
              parent3.classList.remove("show");
              var parent4 = parent3.parentElement;
              if (parent4) {
                parent4.classList.remove("menuitem-active");
              }
            }
          }
        }
      };
      var links = document.getElementsByClassName("side-nav-link-ref");
      var matchingMenuItem = null;
      var paths = [];
      for (var _i = 0; _i < links.length; _i++) {
        // reset menu
        resetParent(links[_i]);
      }
      for (var i = 0; i < links.length; i++) {
        paths.push(links[i]["pathname"]);
      }
      var itemIndex = paths.indexOf(window.location.pathname);
      if (itemIndex === -1) {
        var strIndex = window.location.pathname.lastIndexOf("/");
        var item = window.location.pathname.substr(0, strIndex).toString();
        matchingMenuItem = links[paths.indexOf(item)];
      } else {
        matchingMenuItem = links[itemIndex];
      }
      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");
        var parent = matchingMenuItem.parentElement;

        /**
         * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
         * We should come up with non hard coded approach
         */
        if (parent) {
          parent.classList.add("menuitem-active");
          var parent2 = parent.parentElement;
          if (parent2) {
            var parent3 = parent2.parentElement;
            if (parent3) {
              parent3.classList.add("show");
              var parent4 = parent3.parentElement;
              if (parent4) {
                parent4.classList.add("menuitem-active");
              }
            }
          }
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/detached.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/detached.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/helpers */ "./resources/js/state/helpers.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Sidebar */ "./resources/js/components/Sidebar.vue");
/* harmony import */ var _components_Topbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Topbar */ "./resources/js/components/Topbar.vue");
/* harmony import */ var _components_Rightbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Rightbar */ "./resources/js/components/Rightbar.vue");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Footer */ "./resources/js/components/Footer.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






/**
 * Detached layout
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {};
  },
  components: {
    Sidebar: _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"],
    Topbar: _components_Topbar__WEBPACK_IMPORTED_MODULE_2__["default"],
    Rightbar: _components_Rightbar__WEBPACK_IMPORTED_MODULE_3__["default"],
    Footer: _components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  computed: _objectSpread({}, _state_helpers__WEBPACK_IMPORTED_MODULE_0__.layoutComputed),
  methods: {
    toggleRightSidebar: function toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar: function hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    },
    toggleMenu: function toggleMenu() {
      this.isMenuCondensed = !this.isMenuCondensed;
      if (this.isMenuCondensed) document.body.setAttribute("data-sidebar-size", "condensed");else document.body.removeAttribute("data-sidebar-size", "condensed");
      if (window.screen.width >= 992) {
        this.$router.afterEach(function (routeTo, routeFrom) {
          document.body.classList.remove("sidebar-enable");
        });
      } else {
        document.body.setAttribute("data-sidebar-size", "default");
        document.body.classList.toggle("sidebar-enable");
        this.$router.afterEach(function (routeTo, routeFrom) {
          document.body.classList.remove("sidebar-enable");
        });
      }
    }
  },
  mounted: function mounted() {
    document.body.setAttribute("data-layout-mode", "detached");
    document.body.setAttribute("data-sidebar-showuser", "true");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/horizontal.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/horizontal.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/helpers */ "./resources/js/state/helpers.js");
/* harmony import */ var _components_Topbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Topbar */ "./resources/js/components/Topbar.vue");
/* harmony import */ var _components_Horizontal_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Horizontal-navbar */ "./resources/js/components/Horizontal-navbar.vue");
/* harmony import */ var _components_Rightbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Rightbar */ "./resources/js/components/Rightbar.vue");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Footer */ "./resources/js/components/Footer.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






/**
 * Horizontal layout
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {};
  },
  components: {
    Topbar: _components_Topbar__WEBPACK_IMPORTED_MODULE_1__["default"],
    HorizontalNavbar: _components_Horizontal_navbar__WEBPACK_IMPORTED_MODULE_2__["default"],
    Rightbar: _components_Rightbar__WEBPACK_IMPORTED_MODULE_3__["default"],
    Footer: _components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  computed: _objectSpread({}, _state_helpers__WEBPACK_IMPORTED_MODULE_0__.layoutComputed),
  mounted: function mounted() {
    document.body.setAttribute("data-layout-mode", "horizontal");
  },
  methods: {
    toggleRightSidebar: function toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar: function hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/main.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/main.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/helpers */ "./resources/js/state/helpers.js");
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertical */ "./resources/js/views/layouts/vertical.vue");
/* harmony import */ var _horizontal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./horizontal */ "./resources/js/views/layouts/horizontal.vue");
/* harmony import */ var _detached__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detached */ "./resources/js/views/layouts/detached.vue");
/* harmony import */ var _two_column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./two-column */ "./resources/js/views/layouts/two-column.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






/**
 * Main layout
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Vertical: _vertical__WEBPACK_IMPORTED_MODULE_1__["default"],
    Horizontal: _horizontal__WEBPACK_IMPORTED_MODULE_2__["default"],
    Detached: _detached__WEBPACK_IMPORTED_MODULE_3__["default"],
    TwoColumn: _two_column__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {};
  },
  computed: _objectSpread({}, _state_helpers__WEBPACK_IMPORTED_MODULE_0__.layoutComputed)
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/two-column.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/two-column.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/helpers */ "./resources/js/state/helpers.js");
/* harmony import */ var _components_Two_column_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Two-column-sidebar */ "./resources/js/components/Two-column-sidebar.vue");
/* harmony import */ var _components_Topbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Topbar */ "./resources/js/components/Topbar.vue");
/* harmony import */ var _components_Rightbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Rightbar */ "./resources/js/components/Rightbar.vue");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Footer */ "./resources/js/components/Footer.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






/**
 * Two-column layout
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    TwoColumnSidebar: _components_Two_column_sidebar__WEBPACK_IMPORTED_MODULE_1__["default"],
    Topbar: _components_Topbar__WEBPACK_IMPORTED_MODULE_2__["default"],
    Rightbar: _components_Rightbar__WEBPACK_IMPORTED_MODULE_3__["default"],
    Footer: _components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      isMenuCondensed: false
    };
  },
  computed: _objectSpread({}, _state_helpers__WEBPACK_IMPORTED_MODULE_0__.layoutComputed),
  methods: {
    toggleRightSidebar: function toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar: function hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    },
    toggleMenu: function toggleMenu() {
      this.isMenuCondensed = !this.isMenuCondensed;
      if (this.isMenuCondensed) document.body.setAttribute("data-sidebar-size", "condensed");else document.body.removeAttribute("data-sidebar-size", "condensed");
      if (window.screen.width >= 992) {
        this.$router.afterEach(function (routeTo, routeFrom) {
          document.body.classList.remove("sidebar-enable");
        });
      } else {
        document.body.setAttribute("data-sidebar-size", "default");
        document.body.classList.toggle("sidebar-enable");
        this.$router.afterEach(function (routeTo, routeFrom) {
          document.body.classList.remove("sidebar-enable");
        });
      }
    }
  },
  mounted: function mounted() {
    document.body.setAttribute("data-layout-mode", "two-column");
    document.body.setAttribute("data-topbar-color", "light");
    document.body.removeAttribute("data-sidebar-showuser");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/helpers */ "./resources/js/state/helpers.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Sidebar */ "./resources/js/components/Sidebar.vue");
/* harmony import */ var _components_Topbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Topbar */ "./resources/js/components/Topbar.vue");
/* harmony import */ var _components_Rightbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Rightbar */ "./resources/js/components/Rightbar.vue");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Footer */ "./resources/js/components/Footer.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






/**
 * Vertical layout
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Sidebar: _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"],
    Topbar: _components_Topbar__WEBPACK_IMPORTED_MODULE_2__["default"],
    Rightbar: _components_Rightbar__WEBPACK_IMPORTED_MODULE_3__["default"],
    Footer: _components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      isMenuCondensed: false
    };
  },
  computed: _objectSpread({}, _state_helpers__WEBPACK_IMPORTED_MODULE_0__.layoutComputed),
  mounted: function mounted() {
    document.body.removeAttribute("data-layout-mode");
    document.body.removeAttribute("data-sidebar-showuser");
  },
  methods: {
    toggleRightSidebar: function toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar: function hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    },
    toggleMenu: function toggleMenu() {
      this.isMenuCondensed = !this.isMenuCondensed;
      if (this.isMenuCondensed) document.body.setAttribute("data-sidebar-size", "condensed");else document.body.removeAttribute("data-sidebar-size", "condensed");
      if (window.screen.width >= 992) {
        this.$router.afterEach(function (routeTo, routeFrom) {
          document.body.classList.remove("sidebar-enable");
        });
      } else {
        document.body.setAttribute("data-sidebar-size", "default");
        document.body.classList.toggle("sidebar-enable");
        this.$router.afterEach(function (routeTo, routeFrom) {
          document.body.classList.remove("sidebar-enable");
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/icons/mdi.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/icons/mdi.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/views/layouts/main.vue");
/* harmony import */ var _components_Page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Page-header */ "./resources/js/components/Page-header.vue");
/* harmony import */ var _data_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-material */ "./resources/js/views/pages/icons/data-material.js");




/**
 * Mateial design icons component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  page: {
    title: "Mateial design icons",
    meta: [{
      name: "description",
      content: 'kdjsd'
    }]
  },
  components: {
    Layout: _layouts_main__WEBPACK_IMPORTED_MODULE_0__["default"],
    PageHeader: _components_Page_header__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      icons: _data_material__WEBPACK_IMPORTED_MODULE_2__.icons,
      title: "Material Design Icons",
      items: [{
        text: "Minton",
        href: "/"
      }, {
        text: "Icons",
        href: "/"
      }, {
        text: "Material Design",
        active: true
      }],
      iconsCount: 0,
      newIconsCount: 0
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.icons.push({
      name: "blank",
      hex: "f68c"
    });
    this.icons.forEach(function (icon) {
      var item = _this.getIconItem(icon, _this.isNew(icon));
      document.getElementById("icons").appendChild(item);
      if (_this.isNew(icon)) {
        var newItem = _this.getIconItem(icon, false);
        document.getElementById("newIcons").appendChild(newItem);
        _this.newIconsCount++;
      }
      _this.iconsCount++;
    });
  },
  methods: {
    isNew: function isNew(icon) {
      return icon.version === "5.0.45";
    },
    getIconItem: function getIconItem(icon) {
      var div = document.createElement("div"),
        i = document.createElement("i");
      div.className = "col-xl-3 col-lg-4 col-sm-6";
      i.className = "mdi mdi-" + icon.name;
      div.appendChild(i);
      var span = document.createElement("span");
      span.appendChild(document.createTextNode("mdi-" + icon.name));
      div.appendChild(span);
      return div;
    },
    isDeprecated: function isDeprecated(icon) {
      return typeof icon.deprecated == "undefined" ? false : icon.deprecated;
    }
  },
  middleware: "router-auth"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Footer.vue?vue&type=template&id=61a7c374&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Footer.vue?vue&type=template&id=61a7c374& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("footer", {
    staticClass: "footer"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_vm._v("\r\n                " + _vm._s(new Date().getFullYear()) + " © Minton theme by "), _c("a", {
    attrs: {
      href: ""
    }
  }, [_vm._v("Themesbrand")])]), _vm._v(" "), _vm._m(0)])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-6"
  }, [_c("div", {
    staticClass: "text-md-right footer-links d-none d-sm-block"
  }, [_c("a", {
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_vm._v("About Us")]), _vm._v(" "), _c("a", {
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_vm._v("Help")]), _vm._v(" "), _c("a", {
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_vm._v("Contact Us")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Horizontal-navbar.vue?vue&type=template&id=cea5fb04&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Horizontal-navbar.vue?vue&type=template&id=cea5fb04& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "topnav"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("nav", {
    staticClass: "navbar navbar-light navbar-expand-lg topnav-menu"
  }, [_c("div", {
    staticClass: "collapse navbar-collapse",
    attrs: {
      id: "topnav-menu-content"
    }
  }, [_c("ul", {
    staticClass: "navbar-nav"
  }, _vm._l(_vm.menuItems, function (item, index) {
    return _c("li", {
      key: index,
      staticClass: "nav-item dropdown"
    }, [!item.subItems ? _c("router-link", {
      staticClass: "nav-link dropdown-toggle arrow-none side-nav-link-ref",
      attrs: {
        tag: "a",
        to: item.link
      }
    }, [_c("i", {
      "class": "".concat(item.icon, " mr-1")
    }), _vm._v("\r\n                                " + _vm._s(_vm.$t(item.label)) + "\r\n                            ")]) : _vm._e(), _vm._v(" "), item.subItems ? _c("a", {
      staticClass: "nav-link dropdown-toggle arrow-none",
      attrs: {
        href: "javascript: void(0);",
        id: "topnav-components",
        role: "button"
      },
      on: {
        click: _vm.onMenuClick
      }
    }, [_c("i", {
      "class": "".concat(item.icon, " mr-1")
    }), _vm._v("\r\n                                " + _vm._s(_vm.$t(item.label)) + "\r\n                                "), _c("div", {
      staticClass: "arrow-down"
    })]) : _vm._e(), _vm._v(" "), _vm.hasItems(item) ? _c("div", {
      staticClass: "dropdown-menu row",
      attrs: {
        "aria-labelledby": "topnav-dashboard"
      }
    }, [_vm._l(item.subItems, function (subitem, index) {
      return [!_vm.hasItems(subitem) ? _c("router-link", {
        key: index,
        staticClass: "col dropdown-item side-nav-link-ref",
        attrs: {
          to: subitem.link
        }
      }, [_vm._v(_vm._s(_vm.$t(subitem.label)))]) : _vm._e(), _vm._v(" "), _vm.hasItems(subitem) ? _c("div", {
        key: index,
        staticClass: "dropdown"
      }, [_c("a", {
        staticClass: "dropdown-item dropdown-toggle",
        attrs: {
          href: "javascript: void(0);"
        },
        on: {
          click: _vm.onMenuClick
        }
      }, [_vm._v("\r\n                                            " + _vm._s(_vm.$t(subitem.label)) + "\r\n                                            "), _c("div", {
        staticClass: "arrow-down"
      })]), _vm._v(" "), _c("div", {
        staticClass: "dropdown-menu"
      }, _vm._l(subitem.subItems, function (subSubitem, index) {
        return _c("router-link", {
          key: index,
          staticClass: "dropdown-item side-nav-link-ref",
          attrs: {
            to: subSubitem.link
          }
        }, [_vm._v(_vm._s(_vm.$t(subSubitem.label)))]);
      }), 1)]) : _vm._e()];
    })], 2) : _vm._e()], 1);
  }), 0)])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Page-header.vue?vue&type=template&id=7182f8f0&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Page-header.vue?vue&type=template&id=7182f8f0& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "page-title-box",
    "class": {
      "page-title-box-alt": _vm.layoutType !== "vertical" && _vm.layoutType !== "two-column"
    }
  })])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Rightbar.vue?vue&type=template&id=1c913662&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Rightbar.vue?vue&type=template&id=1c913662& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    directives: [{
      name: "click-outside",
      rawName: "v-click-outside",
      value: _vm.config,
      expression: "config"
    }],
    staticClass: "right-bar"
  }, [_c("simplebar", {
    staticClass: "h-100"
  }, [_c("b-tabs", {
    staticClass: "nav-bordered",
    attrs: {
      "content-class": "pt-0",
      justified: ""
    }
  }, [_c("b-tab", {
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_c("i", {
          staticClass: "mdi mdi-message-text-outline d-block font-22 my-1"
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("form", {
    staticClass: "search-bar p-3"
  }, [_c("div", {
    staticClass: "position-relative"
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Search..."
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "mdi mdi-magnify"
  })])]), _vm._v(" "), _c("h6", {
    staticClass: "font-weight-medium px-3 mt-2 text-uppercase"
  }, [_vm._v("\n            Group Chats\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "p-2"
  }, [_c("a", {
    staticClass: "text-reset notification-item pl-3 mb-2 d-block",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("i", {
    staticClass: "mdi mdi-checkbox-blank-circle-outline mr-1 text-success"
  }), _vm._v(" "), _c("span", {
    staticClass: "mb-0 mt-1"
  }, [_vm._v("App Development")])]), _vm._v(" "), _c("a", {
    staticClass: "text-reset notification-item pl-3 mb-2 d-block",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("i", {
    staticClass: "mdi mdi-checkbox-blank-circle-outline mr-1 text-warning"
  }), _vm._v(" "), _c("span", {
    staticClass: "mb-0 mt-1"
  }, [_vm._v("Office Work")])]), _vm._v(" "), _c("a", {
    staticClass: "text-reset notification-item pl-3 mb-2 d-block",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("i", {
    staticClass: "mdi mdi-checkbox-blank-circle-outline mr-1 text-danger"
  }), _vm._v(" "), _c("span", {
    staticClass: "mb-0 mt-1"
  }, [_vm._v("Personal Group")])]), _vm._v(" "), _c("a", {
    staticClass: "text-reset notification-item pl-3 d-block",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("i", {
    staticClass: "mdi mdi-checkbox-blank-circle-outline mr-1"
  }), _vm._v(" "), _c("span", {
    staticClass: "mb-0 mt-1"
  }, [_vm._v("Freelance")])])]), _vm._v(" "), _c("h6", {
    staticClass: "font-weight-medium px-3 mt-3 text-uppercase"
  }, [_vm._v("\n            Favourites\n            "), _c("a", {
    staticClass: "font-18 text-danger",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("i", {
    staticClass: "float-right mdi mdi-plus-circle"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "p-2"
  }, [_c("a", {
    staticClass: "text-reset notification-item",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("div", {
    staticClass: "media"
  }, [_c("div", {
    staticClass: "position-relative mr-2"
  }, [_c("span", {
    staticClass: "user-status"
  }), _vm._v(" "), _c("img", {
    staticClass: "rounded-circle avatar-sm",
    attrs: {
      src: __webpack_require__(/*! ../assets/images/users/avatar-10.jpg */ "./resources/js/assets/images/users/avatar-10.jpg"),
      alt: "user-pic"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "media-body overflow-hidden"
  }, [_c("h6", {
    staticClass: "mt-0 mb-1 font-14"
  }, [_vm._v("Andrew Mackie")]), _vm._v(" "), _c("div", {
    staticClass: "font-13 text-muted"
  }, [_c("p", {
    staticClass: "mb-0 text-truncate"
  }, [_vm._v("\n                      It will seem like simplified English.\n                    ")])])])])]), _vm._v(" "), _c("a", {
    staticClass: "text-reset notification-item",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("div", {
    staticClass: "media"
  }, [_c("div", {
    staticClass: "position-relative mr-2"
  }, [_c("span", {
    staticClass: "user-status"
  }), _vm._v(" "), _c("img", {
    staticClass: "rounded-circle avatar-sm",
    attrs: {
      src: __webpack_require__(/*! ../assets/images/users/avatar-1.jpg */ "./resources/js/assets/images/users/avatar-1.jpg"),
      alt: "user-pic"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "media-body overflow-hidden"
  }, [_c("h6", {
    staticClass: "mt-0 mb-1 font-14"
  }, [_vm._v("Rory Dalyell")]), _vm._v(" "), _c("div", {
    staticClass: "font-13 text-muted"
  }, [_c("p", {
    staticClass: "mb-0 text-truncate"
  }, [_vm._v("\n                      To an English person, it will seem like simplified\n                    ")])])])])]), _vm._v(" "), _c("a", {
    staticClass: "text-reset notification-item",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("div", {
    staticClass: "media"
  }, [_c("div", {
    staticClass: "position-relative mr-2"
  }, [_c("span", {
    staticClass: "user-status busy"
  }), _vm._v(" "), _c("img", {
    staticClass: "rounded-circle avatar-sm",
    attrs: {
      src: __webpack_require__(/*! ../assets/images/users/avatar-9.jpg */ "./resources/js/assets/images/users/avatar-9.jpg"),
      alt: "user-pic"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "media-body overflow-hidden"
  }, [_c("h6", {
    staticClass: "mt-0 mb-1 font-14"
  }, [_vm._v("Jaxon Dunhill")]), _vm._v(" "), _c("div", {
    staticClass: "font-13 text-muted"
  }, [_c("p", {
    staticClass: "mb-0 text-truncate"
  }, [_vm._v("\n                      To achieve this, it would be necessary.\n                    ")])])])])])]), _vm._v(" "), _c("h6", {
    staticClass: "font-weight-medium px-3 mt-3 text-uppercase"
  }, [_vm._v("\n            Other Chats\n            "), _c("a", {
    staticClass: "font-18 text-danger",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("i", {
    staticClass: "float-right mdi mdi-plus-circle"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "p-2 pb-4"
  }, [_c("a", {
    staticClass: "text-reset notification-item",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("div", {
    staticClass: "media"
  }, [_c("div", {
    staticClass: "position-relative mr-2"
  }, [_c("span", {
    staticClass: "user-status online"
  }), _vm._v(" "), _c("img", {
    staticClass: "rounded-circle avatar-sm",
    attrs: {
      src: __webpack_require__(/*! ../assets/images/users/avatar-2.jpg */ "./resources/js/assets/images/users/avatar-2.jpg"),
      alt: "user-pic"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "media-body overflow-hidden"
  }, [_c("h6", {
    staticClass: "mt-0 mb-1 font-14"
  }, [_vm._v("Jackson Therry")]), _vm._v(" "), _c("div", {
    staticClass: "font-13 text-muted"
  }, [_c("p", {
    staticClass: "mb-0 text-truncate"
  }, [_vm._v("\n                      Everyone realizes why a new common language.\n                    ")])])])])]), _vm._v(" "), _c("a", {
    staticClass: "text-reset notification-item",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("div", {
    staticClass: "media"
  }, [_c("div", {
    staticClass: "position-relative mr-2"
  }, [_c("span", {
    staticClass: "user-status away"
  }), _vm._v(" "), _c("img", {
    staticClass: "rounded-circle avatar-sm",
    attrs: {
      src: __webpack_require__(/*! ../assets/images/users/avatar-4.jpg */ "./resources/js/assets/images/users/avatar-4.jpg"),
      alt: "user-pic"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "media-body overflow-hidden"
  }, [_c("h6", {
    staticClass: "mt-0 mb-1 font-14"
  }, [_vm._v("Charles Deakin")]), _vm._v(" "), _c("div", {
    staticClass: "font-13 text-muted"
  }, [_c("p", {
    staticClass: "mb-0 text-truncate"
  }, [_vm._v("\n                      The languages only differ in their grammar.\n                    ")])])])])]), _vm._v(" "), _c("a", {
    staticClass: "text-reset notification-item",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("div", {
    staticClass: "media"
  }, [_c("div", {
    staticClass: "position-relative mr-2"
  }, [_c("span", {
    staticClass: "user-status online"
  }), _vm._v(" "), _c("img", {
    staticClass: "rounded-circle avatar-sm",
    attrs: {
      src: __webpack_require__(/*! ../assets/images/users/avatar-5.jpg */ "./resources/js/assets/images/users/avatar-5.jpg"),
      alt: "user-pic"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "media-body overflow-hidden"
  }, [_c("h6", {
    staticClass: "mt-0 mb-1 font-14"
  }, [_vm._v("Ryan Salting")]), _vm._v(" "), _c("div", {
    staticClass: "font-13 text-muted"
  }, [_c("p", {
    staticClass: "mb-0 text-truncate"
  }, [_vm._v("\n                      If several languages coalesce the grammar of the\n                      resulting.\n                    ")])])])])]), _vm._v(" "), _c("a", {
    staticClass: "text-reset notification-item",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("div", {
    staticClass: "media"
  }, [_c("div", {
    staticClass: "position-relative mr-2"
  }, [_c("span", {
    staticClass: "user-status online"
  }), _vm._v(" "), _c("img", {
    staticClass: "rounded-circle avatar-sm",
    attrs: {
      src: __webpack_require__(/*! ../assets/images/users/avatar-6.jpg */ "./resources/js/assets/images/users/avatar-6.jpg"),
      alt: "user-pic"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "media-body overflow-hidden"
  }, [_c("h6", {
    staticClass: "mt-0 mb-1 font-14"
  }, [_vm._v("Sean Howse")]), _vm._v(" "), _c("div", {
    staticClass: "font-13 text-muted"
  }, [_c("p", {
    staticClass: "mb-0 text-truncate"
  }, [_vm._v("\n                      It will seem like simplified English.\n                    ")])])])])]), _vm._v(" "), _c("a", {
    staticClass: "text-reset notification-item",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("div", {
    staticClass: "media"
  }, [_c("div", {
    staticClass: "position-relative mr-2"
  }, [_c("span", {
    staticClass: "user-status busy"
  }), _vm._v(" "), _c("img", {
    staticClass: "rounded-circle avatar-sm",
    attrs: {
      src: __webpack_require__(/*! ../assets/images/users/avatar-7.jpg */ "./resources/js/assets/images/users/avatar-7.jpg"),
      alt: "user-pic"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "media-body overflow-hidden"
  }, [_c("h6", {
    staticClass: "mt-0 mb-1 font-14"
  }, [_vm._v("Dean Coward")]), _vm._v(" "), _c("div", {
    staticClass: "font-13 text-muted"
  }, [_c("p", {
    staticClass: "mb-0 text-truncate"
  }, [_vm._v("\n                      The new common language will be more simple.\n                    ")])])])])]), _vm._v(" "), _c("a", {
    staticClass: "text-reset notification-item",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("div", {
    staticClass: "media"
  }, [_c("div", {
    staticClass: "position-relative mr-2"
  }, [_c("span", {
    staticClass: "user-status away"
  }), _vm._v(" "), _c("img", {
    staticClass: "rounded-circle avatar-sm",
    attrs: {
      src: __webpack_require__(/*! ../assets/images/users/avatar-8.jpg */ "./resources/js/assets/images/users/avatar-8.jpg"),
      alt: "user-pic"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "media-body overflow-hidden"
  }, [_c("h6", {
    staticClass: "mt-0 mb-1 font-14"
  }, [_vm._v("Hayley East")]), _vm._v(" "), _c("div", {
    staticClass: "font-13 text-muted"
  }, [_c("p", {
    staticClass: "mb-0 text-truncate"
  }, [_vm._v("\n                      One could refuse to pay expensive translators.\n                    ")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "text-center mt-3"
  }, [_c("a", {
    staticClass: "btn btn-sm btn-white",
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_c("i", {
    staticClass: "mdi mdi-spin mdi-loading mr-2"
  }), _vm._v("\n                Load more\n              ")])])])]), _vm._v(" "), _c("b-tab", {
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_c("i", {
          staticClass: "mdi mdi-format-list-checkbox d-block font-22 my-1"
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("h6", {
    staticClass: "font-weight-medium p-3 m-0 text-uppercase"
  }, [_vm._v("\n            Working Tasks\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "px-2"
  }, [_c("a", {
    staticClass: "text-reset item-hovered d-block p-2",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("p", {
    staticClass: "text-muted mb-0"
  }, [_vm._v("\n                App Development"), _c("span", {
    staticClass: "float-right"
  }, [_vm._v("75%")])]), _vm._v(" "), _c("div", {
    staticClass: "progress mt-2",
    staticStyle: {
      height: "4px"
    }
  }, [_c("div", {
    staticClass: "progress-bar bg-success",
    staticStyle: {
      width: "75%"
    },
    attrs: {
      role: "progressbar",
      "aria-valuenow": "75",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])]), _vm._v(" "), _c("a", {
    staticClass: "text-reset item-hovered d-block p-2",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("p", {
    staticClass: "text-muted mb-0"
  }, [_vm._v("\n                Database Repair"), _c("span", {
    staticClass: "float-right"
  }, [_vm._v("37%")])]), _vm._v(" "), _c("div", {
    staticClass: "progress mt-2",
    staticStyle: {
      height: "4px"
    }
  }, [_c("div", {
    staticClass: "progress-bar bg-info",
    staticStyle: {
      width: "37%"
    },
    attrs: {
      role: "progressbar",
      "aria-valuenow": "37",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])]), _vm._v(" "), _c("a", {
    staticClass: "text-reset item-hovered d-block p-2",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("p", {
    staticClass: "text-muted mb-0"
  }, [_vm._v("\n                Backup Create"), _c("span", {
    staticClass: "float-right"
  }, [_vm._v("52%")])]), _vm._v(" "), _c("div", {
    staticClass: "progress mt-2",
    staticStyle: {
      height: "4px"
    }
  }, [_c("div", {
    staticClass: "progress-bar bg-warning",
    staticStyle: {
      width: "52%"
    },
    attrs: {
      role: "progressbar",
      "aria-valuenow": "52",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])]), _vm._v(" "), _c("h6", {
    staticClass: "font-weight-medium px-3 mb-0 mt-4 text-uppercase"
  }, [_vm._v("\n            Upcoming Tasks\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "p-2"
  }, [_c("a", {
    staticClass: "text-reset item-hovered d-block p-2",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("p", {
    staticClass: "text-muted mb-0"
  }, [_vm._v("\n                Sales Reporting"), _c("span", {
    staticClass: "float-right"
  }, [_vm._v("12%")])]), _vm._v(" "), _c("div", {
    staticClass: "progress mt-2",
    staticStyle: {
      height: "4px"
    }
  }, [_c("div", {
    staticClass: "progress-bar bg-danger",
    staticStyle: {
      width: "12%"
    },
    attrs: {
      role: "progressbar",
      "aria-valuenow": "12",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])]), _vm._v(" "), _c("a", {
    staticClass: "text-reset item-hovered d-block p-2",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("p", {
    staticClass: "text-muted mb-0"
  }, [_vm._v("\n                Redesign Website"), _c("span", {
    staticClass: "float-right"
  }, [_vm._v("67%")])]), _vm._v(" "), _c("div", {
    staticClass: "progress mt-2",
    staticStyle: {
      height: "4px"
    }
  }, [_c("div", {
    staticClass: "progress-bar bg-primary",
    staticStyle: {
      width: "67%"
    },
    attrs: {
      role: "progressbar",
      "aria-valuenow": "67",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])]), _vm._v(" "), _c("a", {
    staticClass: "text-reset item-hovered d-block p-2",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_c("p", {
    staticClass: "text-muted mb-0"
  }, [_vm._v("\n                New Admin Design"), _c("span", {
    staticClass: "float-right"
  }, [_vm._v("84%")])]), _vm._v(" "), _c("div", {
    staticClass: "progress mt-2",
    staticStyle: {
      height: "4px"
    }
  }, [_c("div", {
    staticClass: "progress-bar bg-success",
    staticStyle: {
      width: "84%"
    },
    attrs: {
      role: "progressbar",
      "aria-valuenow": "84",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "p-3 mt-2"
  }, [_c("a", {
    staticClass: "btn btn-success btn-block waves-effect waves-light",
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_vm._v("Create Task")])])]), _vm._v(" "), _c("b-tab", {
    attrs: {
      active: ""
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_c("i", {
          staticClass: "mdi mdi-cog-outline d-block font-22 my-1"
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("h6", {
    staticClass: "font-weight-medium px-3 m-0 py-2 font-13 text-uppercase bg-light"
  }, [_c("span", {
    staticClass: "d-block py-1"
  }, [_vm._v("Theme Settings")])]), _vm._v(" "), _c("div", {
    staticClass: "p-3"
  }, [_c("div", {
    staticClass: "alert alert-warning",
    attrs: {
      role: "alert"
    }
  }, [_c("strong", [_vm._v("Customize ")]), _vm._v(" the overall color scheme, sidebar\n              menu, etc.\n            ")]), _vm._v(" "), _c("h6", {
    staticClass: "font-weight-medium font-14 mt-4 mb-2 pb-1"
  }, [_vm._v("Layout")]), _vm._v(" "), _c("b-form-radio-group", {
    attrs: {
      stacked: ""
    },
    on: {
      input: function input($event) {
        return _vm.changeLayout($event);
      }
    },
    model: {
      value: _vm.layout,
      callback: function callback($$v) {
        _vm.layout = $$v;
      },
      expression: "layout"
    }
  }, [_c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "vertical"
    }
  }, [_vm._v("Vertical")]), _vm._v(" "), _c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "horizontal"
    }
  }, [_vm._v("Horizontal")]), _vm._v(" "), _c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "detached"
    }
  }, [_vm._v("Detached")]), _vm._v(" "), _c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "two-column"
    }
  }, [_vm._v("Two Column")])], 1), _vm._v(" "), _c("h6", {
    staticClass: "font-weight-medium font-14 mt-4 mb-2 pb-1"
  }, [_vm._v("Width")]), _vm._v(" "), _c("b-form-radio-group", {
    attrs: {
      stacked: ""
    },
    on: {
      input: function input($event) {
        return _vm.changeWidth($event);
      }
    },
    model: {
      value: _vm.width,
      callback: function callback($$v) {
        _vm.width = $$v;
      },
      expression: "width"
    }
  }, [_c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "fluid"
    }
  }, [_vm._v("Fluid")]), _vm._v(" "), _c("b-form-radio", {
    attrs: {
      value: "boxed"
    }
  }, [_vm._v("Boxed")])], 1), _vm._v(" "), _c("h6", {
    staticClass: "font-weight-medium font-14 mt-4 mb-2 pb-1"
  }, [_vm._v("Topbar")]), _vm._v(" "), _c("b-form-radio-group", {
    attrs: {
      stacked: ""
    },
    on: {
      input: function input($event) {
        return _vm.changeTopbartype($event);
      }
    },
    model: {
      value: _vm.topbar,
      callback: function callback($$v) {
        _vm.topbar = $$v;
      },
      expression: "topbar"
    }
  }, [_c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "dark"
    }
  }, [_vm._v("Dark")]), _vm._v(" "), _c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "light"
    }
  }, [_vm._v("Light")])], 1), _vm._v(" "), _c("h6", {
    staticClass: "font-weight-medium font-14 mt-4 mb-2 pb-1"
  }, [_vm._v("\n              Menus Positon "), _c("small", [_vm._v("(Leftsidebar and Topbar)")])]), _vm._v(" "), _c("b-form-radio-group", {
    attrs: {
      stacked: ""
    },
    on: {
      input: function input($event) {
        return _vm.changemenuPosition($event);
      }
    },
    model: {
      value: _vm.menu,
      callback: function callback($$v) {
        _vm.menu = $$v;
      },
      expression: "menu"
    }
  }, [_c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "fixed"
    }
  }, [_vm._v("Fixed")]), _vm._v(" "), _c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "scrollable"
    }
  }, [_vm._v("Scrollable")])], 1), _vm._v(" "), _vm.layout !== "horizontal" ? _c("div", [_c("h6", {
    staticClass: "font-weight-medium font-14 mt-4 mb-2 pb-1"
  }, [_vm._v("\n                Left Sidebar Color\n              ")]), _vm._v(" "), _c("b-form-radio-group", {
    attrs: {
      stacked: ""
    },
    on: {
      input: function input($event) {
        return _vm.changeType($event);
      }
    },
    model: {
      value: _vm.sidebarType,
      callback: function callback($$v) {
        _vm.sidebarType = $$v;
      },
      expression: "sidebarType"
    }
  }, [_c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "dark"
    }
  }, [_vm._v("Dark")]), _vm._v(" "), _c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "light"
    }
  }, [_vm._v("Light")]), _vm._v(" "), _c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "brand"
    }
  }, [_vm._v("Brand")]), _vm._v(" "), _c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "gradient"
    }
  }, [_vm._v("Gradient")])], 1), _vm._v(" "), _c("h6", {
    staticClass: "font-weight-medium font-14 mt-4 mb-2 pb-1"
  }, [_vm._v("\n                Left Sidebar Size\n              ")]), _vm._v(" "), _c("b-form-radio-group", {
    attrs: {
      stacked: ""
    },
    on: {
      input: function input($event) {
        return _vm.changeSize($event);
      }
    },
    model: {
      value: _vm.sidebarSize,
      callback: function callback($$v) {
        _vm.sidebarSize = $$v;
      },
      expression: "sidebarSize"
    }
  }, [_c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "default"
    }
  }, [_vm._v("Default")]), _vm._v(" "), _c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "condensed"
    }
  }, [_vm._v("Condensed "), _c("small", [_vm._v("(Extra Small size)")])]), _vm._v(" "), _c("b-form-radio", {
    staticClass: "mb-1",
    attrs: {
      value: "compact"
    }
  }, [_vm._v("Compact "), _c("small", [_vm._v("(Small size)")])])], 1)], 1) : _vm._e(), _vm._v(" "), _c("h6", {
    staticClass: "font-weight-medium font-14 mt-4 mb-2 pb-1"
  }, [_vm._v("\n              Sidebar User Info\n            ")]), _vm._v(" "), _c("b-form-checkbox", {
    attrs: {
      name: "check-button",
      "switch": ""
    },
    on: {
      input: function input($event) {
        return _vm.enableInfo();
      }
    },
    model: {
      value: _vm.checked,
      callback: function callback($$v) {
        _vm.checked = $$v;
      },
      expression: "checked"
    }
  }, [_vm._v("\n              Enable\n            ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary btn-block mt-4",
    attrs: {
      id: "resetBtn"
    },
    on: {
      click: function click($event) {
        return _vm.reset();
      }
    }
  }, [_vm._v("\n              Reset to Default\n            ")]), _vm._v(" "), _c("a", {
    staticClass: "btn btn-danger btn-block mt-2",
    attrs: {
      href: "https://wrapbootstrap.com/theme/minton-admin-dashboard-landing-template-WB0858DB6?ref=themesbrand",
      target: "_blank"
    }
  }, [_c("i", {
    staticClass: "mdi mdi-basket mr-1"
  }), _vm._v(" Purchase Now")])], 1)])], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "rightbar-overlay"
  })]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "left-side-menu"
  }, [_c("div", {
    staticClass: "logo-box"
  }, [_c("router-link", {
    staticClass: "logo logo-dark text-center",
    attrs: {
      to: "/"
    }
  }, [_c("span", {
    staticClass: "logo-sm"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! ../assets/images/logo-sm-dark.png */ "./resources/js/assets/images/logo-sm-dark.png"),
      alt: "",
      height: "24"
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "logo-lg"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! ../assets/images/logo-dark.png */ "./resources/js/assets/images/logo-dark.png"),
      alt: "",
      height: "20"
    }
  })])]), _vm._v(" "), _c("router-link", {
    staticClass: "logo logo-light text-center",
    attrs: {
      to: "/"
    }
  }, [_c("span", {
    staticClass: "logo-sm"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! ../assets/images/logo-sm.png */ "./resources/js/assets/images/logo-sm.png"),
      alt: "",
      height: "24"
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "logo-lg"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! ../assets/images/logo-light.png */ "./resources/js/assets/images/logo-light.png"),
      alt: "",
      height: "20"
    }
  })])])], 1), _vm._v(" "), _c("simplebar", {
    staticClass: "h-100",
    attrs: {
      "data-simplebar": ""
    }
  }, [_c("div", {
    staticClass: "user-box text-center"
  }, [_c("img", {
    staticClass: "rounded-circle avatar-md",
    attrs: {
      src: __webpack_require__(/*! ../assets/images/users/avatar-1.jpg */ "./resources/js/assets/images/users/avatar-1.jpg"),
      alt: "user-img",
      title: "Mat Helme"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "dropdown"
  }, [_c("a", {
    staticClass: "text-reset dropdown-toggle h5 mt-2 mb-1 d-block",
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "dropdown"
    }
  }, [_vm._v("Nik Patel")]), _vm._v(" "), _c("div", {
    staticClass: "dropdown-menu user-pro-dropdown"
  }, [_c("a", {
    staticClass: "dropdown-item notify-item",
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_c("i", {
    staticClass: "fe-user mr-1"
  }), _vm._v(" "), _c("span", [_vm._v("My Account")])]), _vm._v(" "), _c("a", {
    staticClass: "dropdown-item notify-item",
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_c("i", {
    staticClass: "fe-settings mr-1"
  }), _vm._v(" "), _c("span", [_vm._v("Settings")])]), _vm._v(" "), _c("a", {
    staticClass: "dropdown-item notify-item",
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_c("i", {
    staticClass: "fe-lock mr-1"
  }), _vm._v(" "), _c("span", [_vm._v("Lock Screen")])]), _vm._v(" "), _c("a", {
    staticClass: "dropdown-item notify-item",
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_c("i", {
    staticClass: "fe-log-out mr-1"
  }), _vm._v(" "), _c("span", [_vm._v("Logout")])])])]), _vm._v(" "), _c("p", {
    staticClass: "text-reset"
  }, [_vm._v("Admin Head")])]), _vm._v(" "), _c("div", {
    attrs: {
      id: "sidebar-menu"
    }
  }, [_c("ul", {
    staticClass: "list-unstyled",
    attrs: {
      id: "side-menu"
    }
  }, [_vm._l(_vm.menuItems, function (item) {
    return [item.isTitle ? _c("li", {
      key: item.id,
      staticClass: "menu-title"
    }, [_vm._v(_vm._s(_vm.$t(item.label)))]) : _vm._e(), _vm._v(" "), !item.isTitle && !item.isLayout ? _c("li", {
      key: item.id
    }, [_vm.hasItems(item) ? _c("a", {
      "class": {
        "has-arrow": !item.badge,
        "has-dropdown": item.badge
      },
      attrs: {
        href: "javascript:void(0);"
      },
      on: {
        click: function click($event) {
          item.isMenuCollapsed = !item.isMenuCollapsed;
        }
      }
    }, [item.icon ? _c("i", {
      "class": "".concat(item.icon)
    }) : _vm._e(), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t(item.label)))]), _vm._v(" "), !item.badge ? _c("span", {
      staticClass: "menu-arrow"
    }) : _vm._e(), _vm._v(" "), item.badge ? _c("span", {
      "class": "badge badge-pill badge-".concat(item.badge.variant, " float-right")
    }, [_vm._v(_vm._s(_vm.$t(item.badge.text)))]) : _vm._e()]) : _vm._e(), _vm._v(" "), !_vm.hasItems(item) ? _c("router-link", {
      staticClass: "side-nav-link-ref",
      attrs: {
        to: item.link
      }
    }, [item.icon ? _c("i", {
      "class": "".concat(item.icon)
    }) : _vm._e(), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t(item.label)))]), _vm._v(" "), item.badge ? _c("span", {
      "class": "badge badge-pill badge-".concat(item.badge.variant, " float-right")
    }, [_vm._v(_vm._s(_vm.$t(item.badge.text)))]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "collapse",
      "class": {
        show: item.isMenuCollapsed
      },
      attrs: {
        id: "sidebarTasks"
      }
    }, [_vm.hasItems(item) ? _c("ul", {
      staticClass: "sub-menu nav-second-level",
      attrs: {
        "aria-expanded": "false"
      }
    }, _vm._l(item.subItems, function (subitem, index) {
      return _c("li", {
        key: index
      }, [!_vm.hasItems(subitem) ? _c("router-link", {
        staticClass: "side-nav-link-ref",
        attrs: {
          to: subitem.link
        }
      }, [_vm._v(_vm._s(_vm.$t(subitem.label)))]) : _vm._e(), _vm._v(" "), _vm.hasItems(subitem) ? _c("a", {
        staticClass: "side-nav-link-a-ref has-arrow",
        attrs: {
          href: "javascript:void(0);"
        },
        on: {
          click: function click($event) {
            subitem.isMenuCollapsed = !subitem.isMenuCollapsed;
          }
        }
      }, [_vm._v(_vm._s(_vm.$t(subitem.label)) + "\n                                        "), _c("span", {
        staticClass: "menu-arrow"
      })]) : _vm._e(), _vm._v(" "), _c("div", {
        staticClass: "collapse",
        "class": {
          show: subitem.isMenuCollapsed
        }
      }, [_vm.hasItems(subitem) ? _c("ul", {
        staticClass: "sub-menu",
        attrs: {
          "aria-expanded": "false"
        }
      }, _vm._l(subitem.subItems, function (subSubitem, index) {
        return _c("li", {
          key: index
        }, [_c("router-link", {
          staticClass: "side-nav-link-ref",
          attrs: {
            to: subSubitem.link
          }
        }, [_vm._v(_vm._s(_vm.$t(subSubitem.label)))])], 1);
      }), 0) : _vm._e()])], 1);
    }), 0) : _vm._e()])], 1) : _vm._e()];
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  })])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Topbar.vue?vue&type=template&id=57e4246e&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Topbar.vue?vue&type=template&id=57e4246e& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "navbar-custom"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("ul", {
    staticClass: "list-unstyled topnav-menu float-right mb-0"
  }, [_c("li", {
    staticClass: "dropdown d-none d-lg-inline-block"
  }, [_c("a", {
    staticClass: "nav-link dropdown-toggle arrow-none waves-effect waves-light",
    attrs: {
      "data-toggle": "fullscreen",
      href: "#"
    },
    on: {
      click: _vm.initFullScreen
    }
  }, [_c("i", {
    staticClass: "fe-maximize noti-icon"
  })])]), _vm._v(" "), _c("b-nav-item-dropdown", {
    staticClass: "d-none d-lg-inline-block",
    attrs: {
      variant: "white",
      right: "",
      "toggle-class": "header-item"
    },
    scopedSlots: _vm._u([{
      key: "button-content",
      fn: function fn() {
        return [_c("img", {
          attrs: {
            src: _vm.flag,
            alt: "Header Language",
            height: "16"
          }
        }), _vm._v("\n          " + _vm._s(_vm.text) + "\n        ")];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _vm._l(_vm.languages, function (entry, i) {
    return _c("b-dropdown-item", {
      key: "Lang".concat(i),
      staticClass: "notify-item",
      attrs: {
        value: entry,
        "link-class": {
          active: entry.language === _vm.current_language
        }
      },
      on: {
        click: function click($event) {
          return _vm.setLanguage(entry.language, entry.title, entry.flag);
        }
      }
    }, [_c("img", {
      staticClass: "mr-1",
      attrs: {
        src: "".concat(entry.flag),
        alt: "user-image",
        height: "12"
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "align-middle"
    }, [_vm._v(_vm._s(entry.title))])]);
  })], 2), _vm._v(" "), _c("b-nav-item-dropdown", {
    staticClass: "notification-list",
    attrs: {
      right: "",
      "menu-class": "dropdown-lg"
    }
  }, [_c("template", {
    staticClass: "nav-link dropdown-toggle",
    slot: "button-content"
  }, [_c("i", {
    staticClass: "fe-bell noti-icon"
  }), _vm._v(" "), _c("span", {
    staticClass: "badge badge-danger rounded-circle noti-icon-badge"
  }, [_vm._v(_vm._s(_vm.$t("navbar.dropdown.notification.badge")))])]), _vm._v(" "), _c("a", {
    staticClass: "dropdown-item noti-title",
    attrs: {
      href: "#"
    }
  }, [_c("h5", {
    staticClass: "m-0"
  }, [_c("span", {
    staticClass: "float-right"
  }, [_c("a", {
    staticClass: "text-dark",
    attrs: {
      href: ""
    }
  }, [_c("small", [_vm._v(_vm._s(_vm.$t("navbar.dropdown.notification.subtext")))])])]), _vm._v("\n            " + _vm._s(_vm.$t("navbar.dropdown.notification.text")) + "\n          ")])]), _vm._v(" "), _c("simplebar", {
    staticStyle: {
      "max-height": "230px"
    }
  }, [_c("a", {
    staticClass: "dropdown-item notify-item active",
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_c("div", {
    staticClass: "notify-icon bg-soft-primary text-primary"
  }, [_c("i", {
    staticClass: "mdi mdi-comment-account-outline"
  })]), _vm._v(" "), _c("p", {
    staticClass: "notify-details"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("navbar.dropdown.notification.1.title")) + "\n              "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("navbar.dropdown.notification.1.text")))])])]), _vm._v(" "), _c("a", {
    staticClass: "dropdown-item notify-item",
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_c("div", {
    staticClass: "notify-icon"
  }, [_c("img", {
    staticClass: "img-fluid rounded-circle",
    attrs: {
      src: __webpack_require__(/*! ../assets/images/users/avatar-2.jpg */ "./resources/js/assets/images/users/avatar-2.jpg"),
      alt: ""
    }
  })]), _vm._v(" "), _c("p", {
    staticClass: "notify-details"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("navbar.dropdown.notification.2.title")) + "\n            ")]), _vm._v(" "), _c("p", {
    staticClass: "text-muted mb-0 user-msg"
  }, [_c("small", [_vm._v(_vm._s(_vm.$t("navbar.dropdown.notification.2.text")))])])]), _vm._v(" "), _c("a", {
    staticClass: "dropdown-item notify-item",
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_c("div", {
    staticClass: "notify-icon"
  }, [_c("img", {
    staticClass: "img-fluid rounded-circle",
    attrs: {
      src: __webpack_require__(/*! ../assets/images/users/avatar-4.jpg */ "./resources/js/assets/images/users/avatar-4.jpg"),
      alt: ""
    }
  })]), _vm._v(" "), _c("p", {
    staticClass: "notify-details"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("navbar.dropdown.notification.3.title")) + "\n            ")]), _vm._v(" "), _c("p", {
    staticClass: "text-muted mb-0 user-msg"
  }, [_c("small", [_vm._v(_vm._s(_vm.$t("navbar.dropdown.notification.3.text")))])])]), _vm._v(" "), _c("a", {
    staticClass: "dropdown-item notify-item",
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_c("div", {
    staticClass: "notify-icon bg-soft-warning text-warning"
  }, [_c("i", {
    staticClass: "mdi mdi-account-plus"
  })]), _vm._v(" "), _c("p", {
    staticClass: "notify-details"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("navbar.dropdown.notification.4.title")) + "\n              "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("navbar.dropdown.notification.4.text")))])])]), _vm._v(" "), _c("a", {
    staticClass: "dropdown-item notify-item",
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_c("div", {
    staticClass: "notify-icon bg-info"
  }, [_c("i", {
    staticClass: "mdi mdi-comment-account-outline"
  })]), _vm._v(" "), _c("p", {
    staticClass: "notify-details"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("navbar.dropdown.notification.5.title")) + "\n              "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("navbar.dropdown.notification.5.text")))])])]), _vm._v(" "), _c("a", {
    staticClass: "dropdown-item notify-item",
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_c("div", {
    staticClass: "notify-icon bg-secondary"
  }, [_c("i", {
    staticClass: "mdi mdi-heart"
  })]), _vm._v(" "), _c("p", {
    staticClass: "notify-details"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("navbar.dropdown.notification.6.title")) + "\n              "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("navbar.dropdown.notification.6.text")))])])])]), _vm._v(" "), _c("a", {
    staticClass: "dropdown-item text-center text-primary notify-item notify-all",
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t("navbar.dropdown.notification.button")) + "\n          "), _c("i", {
    staticClass: "fi-arrow-right"
  })])], 2), _vm._v(" "), _c("b-nav-item-dropdown", {
    staticClass: "notification-list topbar-dropdown",
    attrs: {
      right: "",
      "menu-class": "profile-dropdown",
      "toggle-class": "p-0"
    }
  }, [_c("template", {
    staticClass: "nav-link dropdown-toggle",
    slot: "button-content"
  }, [_c("div", {
    staticClass: "nav-user mr-0"
  }, [_c("img", {
    staticClass: "rounded-circle",
    attrs: {
      src: __webpack_require__(/*! ../assets/images/users/avatar-1.jpg */ "./resources/js/assets/images/users/avatar-1.jpg"),
      alt: "user-image"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "pro-user-name ml-1"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("navbar.dropdown.name.text")) + "\n              "), _c("i", {
    staticClass: "mdi mdi-chevron-down"
  })])])]), _vm._v(" "), _c("b-dropdown-header", [_c("h6", {
    staticClass: "text-overflow m-0 py-2"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("navbar.dropdown.name.list.greet")) + "\n          ")])]), _vm._v(" "), _c("b-dropdown-item", {
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "remixicon-account-circle-line"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("navbar.dropdown.name.list.account")))])]), _vm._v(" "), _c("b-dropdown-item", {
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "remixicon-settings-3-line"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("navbar.dropdown.name.list.settings")))])]), _vm._v(" "), _c("b-dropdown-item", {
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "remixicon-wallet-line"
  }), _vm._v(" "), _c("span", [_vm._v("\n            " + _vm._s(_vm.$t("navbar.dropdown.name.list.mywallet")) + "\n            "), _c("span", {
    staticClass: "badge badge-success float-right"
  }, [_vm._v("3")])])]), _vm._v(" "), _c("b-dropdown-item", {
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "remixicon-lock-line"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("navbar.dropdown.name.list.lockscreen")))])]), _vm._v(" "), _c("b-dropdown-divider"), _vm._v(" "), _c("a", {
    staticClass: "dropdown-item",
    attrs: {
      href: "javascript:void(0)"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.logout.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "fe-log-out mr-1"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("navbar.dropdown.name.list.logout")))])])], 2)], 1), _vm._v(" "), _c("div", {
    staticClass: "logo-box"
  }, [_c("router-link", {
    staticClass: "logo logo-dark text-center",
    attrs: {
      to: "/"
    }
  }, [_c("span", {
    staticClass: "logo-sm"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! ../assets/images/logo-sm-dark.png */ "./resources/js/assets/images/logo-sm-dark.png"),
      alt: "",
      height: "24"
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "logo-lg"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! ../assets/images/logo-dark.png */ "./resources/js/assets/images/logo-dark.png"),
      alt: "",
      height: "20"
    }
  })])]), _vm._v(" "), _c("router-link", {
    staticClass: "logo logo-light text-center",
    attrs: {
      to: "/"
    }
  }, [_c("span", {
    staticClass: "logo-sm"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! ../assets/images/logo-sm.png */ "./resources/js/assets/images/logo-sm.png"),
      alt: "",
      height: "24"
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "logo-lg"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! ../assets/images/logo-light.png */ "./resources/js/assets/images/logo-light.png"),
      alt: "",
      height: "20"
    }
  })])])], 1), _vm._v(" "), _c("ul", {
    staticClass: "list-unstyled topnav-menu topnav-menu-left m-0"
  }, [_c("li", [_c("button", {
    staticClass: "button-menu-mobile waves-effect waves-light",
    on: {
      click: _vm.toggleMenu
    }
  }, [_c("i", {
    staticClass: "fe-menu"
  })])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "navbar-toggle nav-link",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#topnav-menu-content"
    },
    on: {
      click: function click($event) {
        return _vm.horizonalmenu();
      }
    }
  }, [_vm._m(0)])]), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  })])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "lines"
  }, [_c("span"), _vm._v(" "), _c("span"), _vm._v(" "), _c("span")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("li", {
    staticClass: "nav-route-related d-none d-md-block"
  }, [_c("div", [_c("ul", {
    staticClass: "list-unstyled"
  }, [_c("li", {
    staticClass: "d-inline"
  }, [_c("a", {
    attrs: {
      href: "javascript:void(0)"
    }
  }, [_vm._v("Module")])]), _vm._v(" "), _c("li", {
    staticClass: "d-inline"
  }, [_c("a", {
    attrs: {
      href: "javascript:void(0)"
    }
  }, [_vm._v("Company")])]), _vm._v(" "), _c("li", {
    staticClass: "d-inline"
  }, [_c("a", {
    attrs: {
      href: "javascript:void(0)"
    }
  }, [_vm._v("Partner")])]), _vm._v(" "), _c("li", {
    staticClass: "d-inline"
  }, [_c("a", {
    attrs: {
      href: "javascript:void(0)"
    }
  }, [_vm._v("Accounting")])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Two-column-sidebar.vue?vue&type=template&id=174b4c31&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Two-column-sidebar.vue?vue&type=template&id=174b4c31& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "left-side-menu"
  }, [_c("div", {
    staticClass: "h-100"
  }, [_c("div", {
    staticClass: "sidebar-content"
  }, [_c("simplebar", {
    staticClass: "sidebar-icon-menu h-100",
    attrs: {
      "data-simplebar": ""
    }
  }, [_c("a", {
    staticClass: "logo",
    attrs: {
      href: "/"
    }
  }, [_c("span", [_c("img", {
    attrs: {
      src: __webpack_require__(/*! ../assets/images/logo-sm.png */ "./resources/js/assets/images/logo-sm.png"),
      alt: "",
      height: "28"
    }
  })])]), _vm._v(" "), _c("nav", {
    staticClass: "nav flex-column",
    attrs: {
      id: "two-col-sidenav-main"
    }
  }, [_c("a", {
    staticClass: "nav-link",
    "class": [_vm.activetab === 1 ? "active" : ""],
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "tooltip",
      "data-placement": "right",
      title: "Dashboard",
      "data-trigger": "hover"
    },
    on: {
      click: function click($event) {
        _vm.activetab = 1;
      }
    }
  }, [_c("i", {
    staticClass: "ri-dashboard-line"
  })]), _vm._v(" "), _c("a", {
    staticClass: "nav-link",
    "class": [_vm.activetab === 2 ? "active" : ""],
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "tooltip",
      "data-placement": "right",
      title: "Apps",
      "data-trigger": "hover"
    },
    on: {
      click: function click($event) {
        _vm.activetab = 2;
      }
    }
  }, [_c("i", {
    staticClass: "ri-apps-2-line"
  })]), _vm._v(" "), _c("a", {
    staticClass: "nav-link",
    "class": [_vm.activetab === 3 ? "active" : ""],
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "tooltip",
      "data-placement": "right",
      title: "Pages",
      "data-trigger": "hover"
    },
    on: {
      click: function click($event) {
        _vm.activetab = 3;
      }
    }
  }, [_c("i", {
    staticClass: "ri-pages-line"
  })]), _vm._v(" "), _c("a", {
    staticClass: "nav-link",
    "class": [_vm.activetab === 4 ? "active" : ""],
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "tooltip",
      "data-placement": "right",
      title: "UI Elements",
      "data-trigger": "hover"
    },
    on: {
      click: function click($event) {
        _vm.activetab = 4;
      }
    }
  }, [_c("i", {
    staticClass: "ri-pencil-ruler-2-line"
  })]), _vm._v(" "), _c("a", {
    staticClass: "nav-link",
    "class": [_vm.activetab === 5 ? "active" : ""],
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "tooltip",
      "data-placement": "right",
      title: "Components",
      "data-trigger": "hover"
    },
    on: {
      click: function click($event) {
        _vm.activetab = 5;
      }
    }
  }, [_c("i", {
    staticClass: "ri-stack-line"
  })]), _vm._v(" "), _c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: "/widgets"
    }
  }, [_c("i", {
    staticClass: "ri-honour-line align-middle"
  })])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "sidebar-main-menu"
  }, [_c("simplebar", {
    staticClass: "h-100",
    attrs: {
      id: "two-col-menu",
      "data-simplebar": ""
    }
  }, [_vm.activetab === 1 ? _c("div", {
    staticClass: "twocolumn-menu-item d-block",
    attrs: {
      id: "dashboard"
    }
  }, [_c("div", {
    staticClass: "title-box"
  }, [_c("h5", {
    staticClass: "menu-title"
  }, [_vm._v("Dashboards")]), _vm._v(" "), _c("ul", {
    staticClass: "nav flex-column"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "home"
      }
    }
  }, [_vm._v("\r\n                                        Sales\r\n                                    ")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: _defineProperty({
      to: {
        name: "crm-dashboard"
      }
    }, "to", "/dashboard/crm")
  }, [_vm._v("\r\n                                        CRM\r\n                                    ")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: _defineProperty({
      to: "/dashboard/analytics"
    }, "to", {
      name: "analytics-dashboard"
    })
  }, [_vm._v("\r\n                                        Analytics\r\n                                    ")])], 1)])])]) : _vm._e(), _vm._v(" "), _vm.activetab === 2 ? _c("div", {
    staticClass: "twocolumn-menu-item d-block",
    attrs: {
      id: "apps"
    }
  }, [_c("h5", {
    staticClass: "menu-title"
  }, [_vm._v("Apps")]), _vm._v(" "), _c("ul", {
    staticClass: "nav flex-column"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "calendar"
      }
    }
  }, [_vm._v("\r\n                                    Calendar\r\n                                ")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "chat"
      }
    }
  }, [_vm._v("\r\n                                    Chat\r\n                                ")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebarEcommerce",
      modifiers: {
        sidebarEcommerce: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "collapse"
    }
  }, [_c("span", [_vm._v("Ecommerce")]), _vm._v(" "), _c("span", {
    staticClass: "menu-arrow"
  })]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "sidebarEcommerce"
    }
  }, [_c("ul", {
    staticClass: "nav-second-level"
  }, [_c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "products"
      }
    }
  }, [_vm._v("\r\n                                                Products List\r\n                                            ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "products-grid"
      }
    }
  }, [_vm._v("\r\n                                                Products Grid\r\n                                            ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "product-detail"
      }
    }
  }, [_vm._v("\r\n                                                Product Detail\r\n                                            ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "product-create"
      }
    }
  }, [_vm._v("\r\n                                                Create Product\r\n                                            ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "customers"
      }
    }
  }, [_vm._v("\r\n                                                Customers\r\n                                            ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "orders"
      }
    }
  }, [_vm._v("\r\n                                                Orders\r\n                                            ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "order-detail"
      }
    }
  }, [_vm._v("\r\n                                                Order Detail\r\n                                            ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "sellers"
      }
    }
  }, [_vm._v("\r\n                                                Sellers\r\n                                            ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "cart"
      }
    }
  }, [_vm._v("\r\n                                                Shopping Cart\r\n                                            ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "checkout"
      }
    }
  }, [_vm._v("\r\n                                                Checkout\r\n                                            ")])], 1)])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebarEmail",
      modifiers: {
        sidebarEmail: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      href: "#sidebarEmail",
      "data-toggle": "collapse"
    }
  }, [_c("span", [_vm._v("Email")]), _vm._v(" "), _c("span", {
    staticClass: "menu-arrow"
  })]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "sidebarEmail"
    }
  }, [_c("ul", {
    staticClass: "nav-second-level"
  }, [_c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "email-inbox"
      }
    }
  }, [_vm._v("\r\n                                                Inbox\r\n                                            ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "reademail"
      }
    }
  }, [_vm._v("\r\n                                                Read Email\r\n                                            ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: _defineProperty({
      to: "/email/templates"
    }, "to", {
      name: "email-templates"
    })
  }, [_vm._v("\r\n                                                Email Templates\r\n                                            ")])], 1)])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: _defineProperty({
      to: "companies"
    }, "to", {
      name: ""
    })
  }, [_vm._v("\r\n                                    Companies\r\n                                ")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebarTasks",
      modifiers: {
        sidebarTasks: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      href: "#sidebarTasks",
      "data-toggle": "collapse"
    }
  }, [_c("span", [_vm._v("Tasks")]), _vm._v(" "), _c("span", {
    staticClass: "menu-arrow"
  })]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "sidebarTasks"
    }
  }, [_c("ul", {
    staticClass: "nav-second-level"
  }, [_c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "task-list"
      }
    }
  }, [_vm._v("\r\n                                                List\r\n                                            ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "task-detail"
      }
    }
  }, [_vm._v("\r\n                                                Details\r\n                                            ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "kanban-board"
      }
    }
  }, [_vm._v("\r\n                                                Kanban Board\r\n                                            ")])], 1)])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebarContacts",
      modifiers: {
        sidebarContacts: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "collapse"
    }
  }, [_c("span", [_vm._v("Contacts")]), _vm._v(" "), _c("span", {
    staticClass: "menu-arrow"
  })]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "sidebarContacts"
    }
  }, [_c("ul", {
    staticClass: "nav-second-level"
  }, [_c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "contacts-list"
      }
    }
  }, [_vm._v("\r\n                                                Members List\r\n                                            ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "contacts-profile"
      }
    }
  }, [_vm._v("\r\n                                                Profile\r\n                                            ")])], 1)])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "file-manager"
      }
    }
  }, [_vm._v("\r\n                                    File Manager\r\n                                ")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "tickets"
      }
    }
  }, [_vm._v("\r\n                                    Tickets\r\n                                ")])], 1)])]) : _vm._e(), _vm._v(" "), _vm.activetab === 3 ? _c("div", {
    staticClass: "twocolumn-menu-item d-block",
    attrs: {
      id: "pages"
    }
  }, [_c("div", {
    staticClass: "title-box"
  }, [_c("h5", {
    staticClass: "menu-title"
  }, [_vm._v("Pages")]), _vm._v(" "), _c("ul", {
    staticClass: "nav flex-column"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "extras-starter"
      }
    }
  }, [_vm._v("Starter")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "extras-timeline"
      }
    }
  }, [_vm._v("Timeline")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "extras-sitemap"
      }
    }
  }, [_vm._v("Sitemap")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "extras-invoice"
      }
    }
  }, [_vm._v("Invoice")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "extras-faqs"
      }
    }
  }, [_vm._v("FAQs")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "extras-search-results"
      }
    }
  }, [_vm._v("Search Results")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "extras-pricing"
      }
    }
  }, [_vm._v("Pricing")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "extras-maintenance"
      }
    }
  }, [_vm._v("Maintenance")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "extras-coming-soon"
      }
    }
  }, [_vm._v("Coming Soon")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "extras-lightbox"
      }
    }
  }, [_vm._v("Lightbox")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebarAuth",
      modifiers: {
        sidebarAuth: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "collapse"
    }
  }, [_c("span", [_vm._v("Auth Pages")]), _vm._v(" "), _c("span", {
    staticClass: "menu-arrow"
  })]), _vm._v(" "), _c("b-collapse", {
    staticClass: "collapse",
    attrs: {
      id: "sidebarAuth"
    }
  }, [_c("ul", {
    staticClass: "nav-second-level"
  }, [_c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "auth-login-1"
      }
    }
  }, [_vm._v("Log In")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "auth-login-2"
      }
    }
  }, [_vm._v("Log In 2")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "auth-register-1"
      }
    }
  }, [_vm._v("Register")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "auth-register-2"
      }
    }
  }, [_vm._v("Register 2")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "auth-signin-signup"
      }
    }
  }, [_vm._v("Signin - Signup")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "auth-signin-signup-2"
      }
    }
  }, [_vm._v("Signin - Signup 2")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "auth-recoverpwd"
      }
    }
  }, [_vm._v("Recover Password")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "auth-recoverpwd-2"
      }
    }
  }, [_vm._v("Recover Password 2")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "auth-lock-screen"
      }
    }
  }, [_vm._v("Lock Screen")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "auth-lock-screen-2"
      }
    }
  }, [_vm._v("Lock Screen 2")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "auth-logout-1"
      }
    }
  }, [_vm._v("Logout")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "auth-logout-2"
      }
    }
  }, [_vm._v("Logout 2")])], 1)])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebarErrors",
      modifiers: {
        sidebarErrors: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "collapse"
    }
  }, [_vm._v("\r\n                                        Error Pages\r\n                                        "), _c("span", {
    staticClass: "menu-arrow"
  })]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "sidebarErrors"
    }
  }, [_c("ul", {
    staticClass: "nav-second-level"
  }, [_c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "error-404"
      }
    }
  }, [_vm._v("Error 404")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "error-404-alt"
      }
    }
  }, [_vm._v("Error 404-alt")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "error-500"
      }
    }
  }, [_vm._v("Error 500")])], 1)])])], 1)])])]) : _vm._e(), _vm._v(" "), _vm.activetab === 4 ? _c("div", {
    staticClass: "twocolumn-menu-item d-block",
    attrs: {
      id: "uielements"
    }
  }, [_c("div", {
    staticClass: "title-box"
  }, [_c("h5", {
    staticClass: "menu-title"
  }, [_vm._v("UI Elements")]), _vm._v(" "), _c("ul", {
    staticClass: "nav flex-column"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-avatars"
      }
    }
  }, [_vm._v("Avatars")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-buttons"
      }
    }
  }, [_vm._v("Buttons")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-cards"
      }
    }
  }, [_vm._v("Cards")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-carousel"
      }
    }
  }, [_vm._v("Carousel")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-dropdowns"
      }
    }
  }, [_vm._v("Dropdowns")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-video"
      }
    }
  }, [_vm._v("Embed Video")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-general"
      }
    }
  }, [_vm._v("General UI")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-grid"
      }
    }
  }, [_vm._v("Grid")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-images"
      }
    }
  }, [_vm._v("Images")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-list-group"
      }
    }
  }, [_vm._v("List Group")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-modals"
      }
    }
  }, [_vm._v("Modals")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-notifications"
      }
    }
  }, [_vm._v("Notifications")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-portlets"
      }
    }
  }, [_vm._v("Portlets")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-progress"
      }
    }
  }, [_vm._v("Progress")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-ribbons"
      }
    }
  }, [_vm._v("Ribbons")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-spinners"
      }
    }
  }, [_vm._v("Spinners")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-tabs-accordions"
      }
    }
  }, [_vm._v("Tabs & Accordions")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-tooltips-popovers"
      }
    }
  }, [_vm._v("Tooltips & Popovers")])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-link side-nav-link-ref",
    attrs: {
      to: {
        name: "ui-typography"
      }
    }
  }, [_vm._v("Typography")])], 1)])])]) : _vm._e(), _vm._v(" "), _vm.activetab === 5 ? _c("div", {
    staticClass: "twocolumn-menu-item d-block",
    attrs: {
      id: "components"
    }
  }, [_c("div", {
    staticClass: "title-box"
  }, [_c("h5", {
    staticClass: "menu-title"
  }, [_vm._v("Components")]), _vm._v(" "), _c("ul", {
    staticClass: "nav flex-column"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebarExtendedui",
      modifiers: {
        sidebarExtendedui: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "collapse"
    }
  }, [_c("span", {
    staticClass: "badge badge-info float-right"
  }, [_vm._v("Hot")]), _vm._v(" "), _c("span", [_vm._v("Extended UI")])]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "sidebarExtendedui"
    }
  }, [_c("ul", {
    staticClass: "nav-second-level"
  }, [_c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "rangeslider"
      }
    }
  }, [_vm._v("Range Slider")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "sweet-alert"
      }
    }
  }, [_vm._v("Sweet Alert")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "tour"
      }
    }
  }, [_vm._v("Tour Page")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "scrollspy"
      }
    }
  }, [_vm._v("Scrollspy")])], 1)])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebarIcons",
      modifiers: {
        sidebarIcons: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "collapse"
    }
  }, [_c("span", [_vm._v("Icons")]), _vm._v(" "), _c("span", {
    staticClass: "menu-arrow"
  })]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "sidebarIcons"
    }
  }, [_c("ul", {
    staticClass: "nav-second-level"
  }, [_c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "feather"
      }
    }
  }, [_vm._v("Feather")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "remix"
      }
    }
  }, [_vm._v("Remix")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "boxicons"
      }
    }
  }, [_vm._v("Boxicons")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "mdi"
      }
    }
  }, [_vm._v("Material Design")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "font-awesome"
      }
    }
  }, [_vm._v("Font Awesome 5")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "weather"
      }
    }
  }, [_vm._v("Weather")])], 1)])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebarForms",
      modifiers: {
        sidebarForms: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "collapse"
    }
  }, [_c("span", [_vm._v("Forms")]), _vm._v(" "), _c("span", {
    staticClass: "menu-arrow"
  })]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "sidebarForms"
    }
  }, [_c("ul", {
    staticClass: "nav-second-level"
  }, [_c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "elements"
      }
    }
  }, [_vm._v("\r\n                                                    General Elements\r\n                                                ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "advanced-form"
      }
    }
  }, [_vm._v("\r\n                                                    Advanced\r\n                                                ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "validation"
      }
    }
  }, [_vm._v("\r\n                                                    Validation\r\n                                                ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "wizard"
      }
    }
  }, [_vm._v("\r\n                                                    Wizard\r\n                                                ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "mask"
      }
    }
  }, [_vm._v("\r\n                                                    Masks\r\n                                                ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "quill"
      }
    }
  }, [_vm._v("\r\n                                                    Quill Editor\r\n                                                ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: _defineProperty({
      to: "/forms/file-uploads"
    }, "to", {
      name: "file-uploads"
    })
  }, [_vm._v("\r\n                                                    File Uploads\r\n                                                ")])], 1)])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebarTables",
      modifiers: {
        sidebarTables: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "collapse"
    }
  }, [_c("span", [_vm._v("Tables")]), _vm._v(" "), _c("span", {
    staticClass: "menu-arrow"
  })]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "sidebarTables"
    }
  }, [_c("ul", {
    staticClass: "nav-second-level"
  }, [_c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "basic"
      }
    }
  }, [_vm._v("\r\n                                                    Basic Tables\r\n                                                ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "advanced"
      }
    }
  }, [_vm._v("\r\n                                                    Advanced Tables\r\n                                                ")])], 1)])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebarCharts",
      modifiers: {
        sidebarCharts: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "collapse"
    }
  }, [_c("span", [_vm._v("Charts")]), _vm._v(" "), _c("span", {
    staticClass: "menu-arrow"
  })]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "sidebarCharts"
    }
  }, [_c("ul", {
    staticClass: "nav-second-level"
  }, [_c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "charts-apex"
      }
    }
  }, [_vm._v("\r\n                                                    Apex Charts\r\n                                                ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "charts-chartjs"
      }
    }
  }, [_vm._v("\r\n                                                    Chartjs Charts\r\n                                                ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "charts-c3"
      }
    }
  }, [_vm._v("\r\n                                                    C3 Charts\r\n                                                ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "charts-chartist"
      }
    }
  }, [_vm._v("\r\n                                                    Chartist Charts\r\n                                                ")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "charts-knob"
      }
    }
  }, [_vm._v("\r\n                                                    Knob Charts\r\n                                                ")])], 1)])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebarMaps",
      modifiers: {
        sidebarMaps: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "collapse"
    }
  }, [_c("span", [_vm._v("Maps")]), _vm._v(" "), _c("span", {
    staticClass: "menu-arrow"
  })]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "sidebarMaps"
    }
  }, [_c("ul", {
    staticClass: "nav-second-level"
  }, [_c("li", [_c("router-link", {
    staticClass: "side-nav-link-ref",
    attrs: {
      to: {
        name: "maps-google"
      }
    }
  }, [_vm._v("\r\n                                                    Google Maps\r\n                                                ")])], 1)])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebarMultilevel",
      modifiers: {
        sidebarMultilevel: true
      }
    }],
    staticClass: "nav-link",
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "collapse"
    }
  }, [_c("span", [_vm._v("Multi Level")]), _vm._v(" "), _c("span", {
    staticClass: "menu-arrow"
  })]), _vm._v(" "), _c("b-collapse", {
    staticClass: "collapse",
    attrs: {
      id: "sidebarMultilevel"
    }
  }, [_c("ul", {
    staticClass: "nav-second-level"
  }, [_c("li", [_c("a", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebarMultilevel2",
      modifiers: {
        sidebarMultilevel2: true
      }
    }],
    attrs: {
      href: "javascript: void(0);",
      "data-toggle": "collapse"
    }
  }, [_vm._v("\r\n                                                    Second Level\r\n                                                    "), _c("span", {
    staticClass: "menu-arrow"
  })]), _vm._v(" "), _c("b-collapse", {
    attrs: {
      id: "sidebarMultilevel2"
    }
  }, [_c("ul", {
    staticClass: "nav-second-level"
  }, [_c("li", [_c("a", {
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_vm._v("Item 1")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "javascript: void(0);"
    }
  }, [_vm._v("Item 2")])])])])], 1), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#sidebarMultilevel3",
      "data-toggle": "collapse"
    }
  }, [_vm._v("Second Level 1")])])])])], 1)])])]) : _vm._e()])], 1), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  })], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/detached.vue?vue&type=template&id=7032c937&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/detached.vue?vue&type=template&id=7032c937& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    attrs: {
      id: "wrapper"
    }
  }, [_c("Sidebar", {
    attrs: {
      type: _vm.leftSidebarType,
      width: _vm.layoutWidth,
      size: _vm.leftSidebarSize,
      menu: _vm.menuPosition,
      topbar: _vm.topbar
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "content-page"
  }, [_c("div", {
    staticClass: "content"
  }, [_c("Topbar"), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_vm._t("default")], 2)], 1), _vm._v(" "), _c("Footer")], 1), _vm._v(" "), _c("Rightbar")], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/horizontal.vue?vue&type=template&id=29c46cae&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/horizontal.vue?vue&type=template&id=29c46cae& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    attrs: {
      id: "wrapper"
    }
  }, [_c("Topbar"), _vm._v(" "), _c("HorizontalNavbar", {
    attrs: {
      type: _vm.topbar,
      width: _vm.layoutWidth,
      menu: _vm.menuPosition
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "content-page"
  }, [_c("div", {
    staticClass: "content"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_vm._t("default")], 2)]), _vm._v(" "), _c("Footer")], 1), _vm._v(" "), _c("Rightbar")], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/main.vue?vue&type=template&id=de3c3304&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/main.vue?vue&type=template&id=de3c3304& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("Vertical", [_vm._t("default")], 2)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/two-column.vue?vue&type=template&id=ffe4ac08&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/two-column.vue?vue&type=template&id=ffe4ac08& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    attrs: {
      id: "wrapper"
    }
  }, [_c("Topbar"), _vm._v(" "), _c("TwoColumnSidebar", {
    attrs: {
      type: _vm.leftSidebarType,
      width: _vm.layoutWidth,
      size: _vm.leftSidebarSize,
      menu: _vm.menuPosition,
      topbar: _vm.topbar
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "content-page"
  }, [_c("div", {
    staticClass: "content"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_vm._t("default")], 2)]), _vm._v(" "), _c("Footer")], 1), _vm._v(" "), _c("Rightbar")], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=template&id=7397033b&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=template&id=7397033b& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    attrs: {
      id: "wrapper"
    }
  }, [_c("Sidebar", {
    attrs: {
      type: _vm.leftSidebarType,
      width: _vm.layoutWidth,
      size: _vm.leftSidebarSize,
      menu: _vm.menuPosition,
      topbar: _vm.topbar
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "content-page"
  }, [_c("div", {
    staticClass: "content"
  }, [_c("Topbar"), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_vm._t("default")], 2)], 1), _vm._v(" "), _c("Footer")], 1), _vm._v(" "), _c("Rightbar")], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/icons/mdi.vue?vue&type=template&id=36bb8303&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/icons/mdi.vue?vue&type=template&id=36bb8303& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("Layout", [_c("PageHeader", {
    attrs: {
      title: _vm.title,
      items: _vm.items
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "row icons-list-demo"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "header-title mb-4"
  }, [_vm._v("New Icons v5.0.45")]), _vm._v(" "), _c("div", {
    staticClass: "row icon-list-demo",
    attrs: {
      id: "newIcons"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "header-title mb-4"
  }, [_vm._v("All Icons")]), _vm._v(" "), _c("div", {
    staticClass: "row icon-list-demo",
    attrs: {
      id: "icons"
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "header-title mb-4"
  }, [_vm._v("Size")]), _vm._v(" "), _c("div", {
    staticClass: "row icons-list-demo"
  }, [_c("div", {
    staticClass: "col-xl-3 col-lg-4 col-sm-6"
  }, [_c("i", {
    staticClass: "mdi mdi-18px mdi-account"
  }), _vm._v(" mdi-18px\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-lg-4 col-sm-6"
  }, [_c("i", {
    staticClass: "mdi mdi-24px mdi-account"
  }), _vm._v(" mdi-24px\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-lg-4 col-sm-6"
  }, [_c("i", {
    staticClass: "mdi mdi-36px mdi-account"
  }), _vm._v(" mdi-36px\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-lg-4 col-sm-6"
  }, [_c("i", {
    staticClass: "mdi mdi-48px mdi-account"
  }), _vm._v(" mdi-48px\n            ")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "header-title mb-4"
  }, [_vm._v("Rotate")]), _vm._v(" "), _c("div", {
    staticClass: "row icons-list-demo"
  }, [_c("div", {
    staticClass: "col-xl-3 col-lg-4 col-sm-6"
  }, [_c("i", {
    staticClass: "mdi mdi-rotate-45 mdi-account"
  }), _vm._v(" mdi-rotate-45\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-lg-4 col-sm-6"
  }, [_c("i", {
    staticClass: "mdi mdi-rotate-90 mdi-account"
  }), _vm._v(" mdi-rotate-90\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-lg-4 col-sm-6"
  }, [_c("i", {
    staticClass: "mdi mdi-rotate-135 mdi-account"
  }), _vm._v(" mdi-rotate-135\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-lg-4 col-sm-6"
  }, [_c("i", {
    staticClass: "mdi mdi-rotate-180 mdi-account"
  }), _vm._v(" mdi-rotate-180\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-lg-4 col-sm-6"
  }, [_c("i", {
    staticClass: "mdi mdi-rotate-225 mdi-account"
  }), _vm._v(" mdi-rotate-225\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-lg-4 col-sm-6"
  }, [_c("i", {
    staticClass: "mdi mdi-rotate-270 mdi-account"
  }), _vm._v(" mdi-rotate-270\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-lg-4 col-sm-6"
  }, [_c("i", {
    staticClass: "mdi mdi-rotate-315 mdi-account"
  }), _vm._v(" mdi-rotate-315\n            ")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "header-title mb-4"
  }, [_vm._v("Spin")]), _vm._v(" "), _c("div", {
    staticClass: "row icons-list-demo"
  }, [_c("div", {
    staticClass: "col-xl-3 col-lg-4 col-sm-6"
  }, [_c("i", {
    staticClass: "mdi mdi-spin mdi-loading"
  }), _vm._v(" mdi-spin\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-lg-4 col-sm-6"
  }, [_c("i", {
    staticClass: "mdi mdi-spin mdi-star"
  }), _vm._v(" mdi-spin\n            ")])])])])])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/horizontal-menu.js":
/*!****************************************************!*\
  !*** ./resources/js/components/horizontal-menu.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuItems": () => (/* binding */ menuItems)
/* harmony export */ });
var menuItems = [{
  id: 1,
  label: 'menuitems.dashboard.text',
  icon: 'ri-dashboard-line',
  subItems: [{
    id: 2,
    label: 'menuitems.dashboard.list.sales',
    link: '/'
  }, {
    id: 3,
    label: 'menuitems.dashboard.list.crm',
    link: '/dashboard/crm'
  }, {
    id: 4,
    label: 'menuitems.dashboard.list.analytics',
    link: '/dashboard/analytics'
  }]
}, {
  id: 5,
  label: 'menuitems.apps.text',
  icon: 'ri-apps-2-line',
  subItems: [{
    id: 7,
    label: 'menuitems.calendar.text',
    icon: 'ri-calendar-2-line',
    link: '/apps/calendar'
  }, {
    id: 8,
    label: "menuitems.chat.text",
    icon: "ri-message-2-line",
    link: '/apps/chat'
  }, {
    id: 9,
    label: "menuitems.ecommerce.text",
    icon: "ri-shopping-cart-2-line",
    subItems: [{
      id: 10,
      label: "menuitems.ecommerce.list.products",
      link: "/ecommerce/products"
    }, {
      id: 11,
      label: "menuitems.ecommerce.list.productsgrid",
      link: "/ecommerce/products-grid"
    }, {
      id: 12,
      label: 'menuitems.ecommerce.list.productdetail',
      link: '/ecommerce/product-detail/1'
    }, {
      id: 13,
      label: 'menuitems.ecommerce.list.createproduct',
      link: '/ecommerce/product-create'
    }, {
      id: 14,
      label: "menuitems.ecommerce.list.customers",
      link: "/ecommerce/customers"
    }, {
      id: 15,
      label: "menuitems.ecommerce.list.orders",
      link: "/ecommerce/orders"
    }, {
      id: 16,
      label: "menuitems.ecommerce.list.orderdetail",
      link: "/ecommerce/order-detail"
    }, {
      id: 17,
      label: "menuitems.ecommerce.list.sellers",
      link: "/ecommerce/sellers"
    }, {
      id: 18,
      label: "menuitems.ecommerce.list.cart",
      link: "/ecommerce/cart"
    }, {
      id: 19,
      label: "menuitems.ecommerce.list.checkout",
      link: "/ecommerce/checkout"
    }]
  }, {
    id: 20,
    label: 'menuitems.email.text',
    icon: 'ri-mail-line',
    subItems: [{
      id: 21,
      label: 'menuitems.email.list.inbox',
      link: '/email/inbox'
    }, {
      id: 22,
      label: 'menuitems.email.list.reademail',
      link: '/email/reademail/1'
    }, {
      id: 23,
      label: 'menuitems.email.list.template',
      link: '/email/templates'
    }]
  }, {
    id: 24,
    label: 'menuitems.companies.text',
    icon: 'ri-building-4-line',
    link: '/apps/companies'
  }, {
    id: 25,
    label: 'menuitems.tasks.text',
    icon: 'ri-task-line',
    subItems: [{
      id: 26,
      label: 'menuitems.tasks.list.list',
      link: '/task/list'
    }, {
      id: 27,
      label: 'menuitems.tasks.list.detail',
      link: '/task/detail'
    }, {
      id: 28,
      label: 'menuitems.tasks.list.kanban',
      link: '/task/kanban'
    }]
  }, {
    id: 29,
    label: 'menuitems.contacts.text',
    icon: 'ri-profile-line',
    subItems: [{
      id: 30,
      label: 'menuitems.contacts.list.members',
      link: '/contacts/list'
    }, {
      id: 31,
      label: 'menuitems.contacts.list.profile',
      link: '/contacts/profile'
    }]
  }, {
    id: 32,
    label: 'menuitems.filemanager.text',
    icon: 'ri-folders-line',
    link: '/apps/file-manager'
  }, {
    id: 33,
    label: 'menuitems.ticket.text',
    icon: 'ri-customer-service-2-line',
    link: '/apps/tickets'
  }]
}, {
  id: 34,
  label: 'menuitems.ui.text',
  icon: 'ri-pencil-ruler-2-line',
  subItems: [{
    id: 35,
    label: 'menuitems.ui.list.avatars',
    link: '/ui/avatars'
  }, {
    id: 36,
    label: 'menuitems.ui.list.buttons',
    link: '/ui/buttons'
  }, {
    id: 37,
    label: 'menuitems.ui.list.cards',
    link: '/ui/cards'
  }, {
    id: 38,
    label: 'menuitems.ui.list.carousel',
    link: '/ui/carousel'
  }, {
    id: 39,
    label: 'menuitems.ui.list.dropdowns',
    link: '/ui/dropdowns'
  }, {
    id: 40,
    label: 'menuitems.ui.list.video',
    link: '/ui/video'
  }, {
    id: 41,
    label: 'menuitems.ui.list.general',
    link: '/ui/general'
  }, {
    id: 42,
    label: 'menuitems.ui.list.grid',
    link: '/ui/grid'
  }, {
    id: 43,
    label: 'menuitems.ui.list.images',
    link: '/ui/images'
  }, {
    id: 44,
    label: 'menuitems.ui.list.listgroup',
    link: '/ui/list-group'
  }, {
    id: 45,
    label: 'menuitems.ui.list.modals',
    link: '/ui/modals'
  }, {
    id: 46,
    label: 'menuitems.ui.list.notifications',
    link: '/ui/notifications'
  }, {
    id: 47,
    label: 'menuitems.ui.list.portlet',
    link: '/ui/portlets'
  }, {
    id: 48,
    label: 'menuitems.ui.list.progress',
    link: '/ui/progress'
  }, {
    id: 49,
    label: 'menuitems.ui.list.ribbons',
    link: '/ui/ribbons'
  }, {
    id: 50,
    label: 'menuitems.ui.list.spinners',
    link: '/ui/spinners'
  }, {
    id: 51,
    label: 'menuitems.ui.list.tabs',
    link: '/ui/tabs-accordions'
  }, {
    id: 52,
    label: 'menuitems.ui.list.tooltip',
    link: '/ui/tooltips-popovers'
  }, {
    id: 53,
    label: 'menuitems.ui.list.typography',
    link: '/ui/typography'
  }]
}, {
  id: 54,
  label: 'menuitems.components.text',
  icon: 'ri-stack-line',
  subItems: [{
    id: 55,
    label: 'menuitems.extendedui.text',
    icon: 'ri-stack-line',
    subItems: [{
      id: 56,
      label: 'menuitems.extendedui.list.rangeslider',
      link: '/extended/rangeslider'
    }, {
      id: 57,
      label: 'menuitems.extendedui.list.sweetalert',
      link: '/extended/sweet-alert'
    }, {
      id: 58,
      label: 'menuitems.extendedui.list.tour',
      link: '/extended/tour'
    }, {
      id: 59,
      label: 'menuitems.extendedui.list.scrollspy',
      link: '/extended/scrollspy'
    }]
  }, {
    id: 60,
    label: 'menuitems.widgets.text',
    icon: 'ri-honour-line',
    link: '/widgets'
  }, {
    id: 61,
    label: 'menuitems.forms.text',
    icon: 'ri-eraser-line',
    subItems: [{
      id: 62,
      label: 'menuitems.forms.list.elements',
      link: '/forms/elements'
    }, {
      id: 63,
      label: 'menuitems.forms.list.advanced',
      link: '/forms/advanced'
    }, {
      id: 64,
      label: 'menuitems.forms.list.validation',
      link: '/forms/validation'
    }, {
      id: 65,
      label: 'menuitems.forms.list.wizard',
      link: '/forms/wizard'
    }, {
      id: 66,
      label: 'menuitems.forms.list.mask',
      link: '/forms/mask'
    }, {
      id: 67,
      label: 'menuitems.forms.list.editor',
      link: '/forms/quill'
    }, {
      id: 68,
      label: 'menuitems.forms.list.fileupload',
      link: '/forms/file-uploads'
    }]
  }, {
    id: 69,
    label: 'menuitems.charts.text',
    icon: 'ri-bar-chart-line',
    subItems: [{
      id: 70,
      label: 'menuitems.charts.list.apex',
      link: '/charts/apex'
    }, {
      id: 71,
      label: 'menuitems.charts.list.chartjs',
      link: '/charts/chartjs'
    }, {
      id: 72,
      label: 'menuitems.charts.list.c3',
      link: '/charts/c3'
    }, {
      id: 73,
      label: 'menuitems.charts.list.chartist',
      link: '/charts/chartist'
    }, {
      id: 74,
      label: 'menuitems.charts.list.knob',
      link: '/charts/knob'
    }]
  }, {
    id: 75,
    label: 'menuitems.tables.text',
    icon: 'ri-table-line',
    subItems: [{
      id: 76,
      label: 'menuitems.tables.list.basic',
      link: '/tables/basic'
    }, {
      id: 77,
      label: 'menuitems.tables.list.advanced',
      link: '/tables/advanced'
    }]
  }, {
    id: 78,
    label: 'menuitems.icons.text',
    icon: 'ri-markup-line',
    subItems: [{
      id: 79,
      label: 'menuitems.icons.list.feather',
      link: '/icons/feather'
    }, {
      id: 80,
      label: 'menuitems.icons.list.remix',
      link: '/icons/remix'
    }, {
      id: 81,
      label: 'menuitems.icons.list.boxicons',
      link: '/icons/boxicons'
    }, {
      id: 82,
      label: 'menuitems.icons.list.materialdesign',
      link: '/icons/mdi'
    }, {
      id: 83,
      label: 'menuitems.icons.list.fontawesome',
      link: '/icons/font-awesome'
    }, {
      id: 84,
      label: 'menuitems.icons.list.weather',
      link: '/icons/weather'
    }]
  }, {
    id: 85,
    label: 'menuitems.maps.text',
    icon: 'ri-map-pin-line',
    subItems: [{
      id: 86,
      label: 'menuitems.maps.list.googlemap',
      link: '/maps/google'
    }]
  }]
}, {
  id: 87,
  label: 'menuitems.pages.text',
  icon: 'ri-pages-line',
  subItems: [{
    id: 88,
    label: 'menuitems.authstyle.text',
    subItems: [{
      id: 89,
      label: 'menuitems.auth.list.login',
      link: '/auth/login-1'
    }, {
      id: 90,
      label: 'menuitems.auth.list.register',
      link: '/auth/register-1'
    }, {
      id: 91,
      label: 'menuitems.auth.list.signin-signup',
      link: '/auth/signin-signup'
    }, {
      id: 92,
      label: 'menuitems.auth.list.recoverpwd',
      link: '/auth/recoverpwd'
    }, {
      id: 93,
      label: 'menuitems.auth.list.lock-screen',
      link: '/auth/lock-screen'
    }, {
      id: 94,
      label: 'menuitems.auth.list.logout',
      link: '/auth/logout-1'
    }, {
      id: 95,
      label: 'menuitems.auth.list.confirm-mail',
      link: '/auth/confirm-mail'
    }]
  }, {
    id: 96,
    label: 'menuitems.authstyle2.text',
    subItems: [{
      id: 97,
      label: 'menuitems.auth.list.login-2',
      link: '/auth/login-2'
    }, {
      id: 98,
      label: 'menuitems.auth.list.register-2',
      link: '/auth/register-2'
    }, {
      id: 99,
      label: 'menuitems.auth.list.signin-signup-2',
      link: '/auth/signin-signup-2'
    }, {
      id: 100,
      label: 'menuitems.auth.list.recoverpwd-2',
      link: '/auth/recoverpwd-2'
    }, {
      id: 101,
      label: 'menuitems.auth.list.lock-screen-2',
      link: '/auth/lock-screen-2'
    }, {
      id: 102,
      label: 'menuitems.auth.list.logout-2',
      link: '/auth/logout-2'
    }, {
      id: 103,
      label: 'menuitems.auth.list.confirm-mail',
      link: '/auth/confirm-mail-2'
    }]
  }, {
    id: 104,
    label: 'menuitems.errors.text',
    subItems: [{
      id: 105,
      label: 'menuitems.extrapages.list.error404',
      link: '/error/404'
    }, {
      id: 106,
      label: 'menuitems.extrapages.list.error404-alt',
      link: '/error/404-alt'
    }, {
      id: 107,
      label: 'menuitems.extrapages.list.error500',
      link: '/error/500'
    }]
  }, {
    id: 108,
    label: 'menuitems.utility.text',
    subItems: [{
      id: 109,
      label: 'menuitems.extrapages.list.starter',
      link: '/extras/starter'
    }, {
      id: 110,
      label: 'menuitems.extrapages.list.timeline',
      link: '/extras/timeline'
    }, {
      id: 111,
      label: 'menuitems.extrapages.list.sitemap',
      link: '/extras/sitemap'
    }, {
      id: 112,
      label: 'menuitems.extrapages.list.invoice',
      link: '/extras/invoice'
    }, {
      id: 113,
      label: 'menuitems.extrapages.list.faqs',
      link: '/extras/faqs'
    }, {
      id: 114,
      label: 'menuitems.extrapages.list.search-results',
      link: '/extras/search-results'
    }, {
      id: 115,
      label: 'menuitems.extrapages.list.pricing',
      link: '/extras/pricing'
    }, {
      id: 116,
      label: 'menuitems.extrapages.list.maintenance',
      link: '/extras/maintenance'
    }, {
      id: 117,
      label: 'menuitems.extrapages.list.comingsoon',
      link: '/extras/coming-soon'
    }, {
      id: 118,
      label: 'menuitems.extrapages.list.lightbox',
      link: '/extras/lightbox'
    }]
  }]
}];

/***/ }),

/***/ "./resources/js/components/menu.js":
/*!*****************************************!*\
  !*** ./resources/js/components/menu.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuItems": () => (/* binding */ menuItems)
/* harmony export */ });
var menuItems = [{
  id: 1,
  label: "menuitems.navigation.text",
  isTitle: true
}, {
  id: 10007,
  label: 'menuitems.branch.text',
  icon: 'fas fa-code-branch',
  link: '/branch'
}, {
  id: 10008,
  label: 'menuitems.store.text',
  icon: 'fas fa-store',
  link: '/store'
}, {
  id: 10009,
  label: 'menuitems.serial.text',
  icon: 'fas fa-eraser',
  link: '/serial'
}, {
  id: 10006,
  label: "menuitems.salesMen.text",
  icon: "fas fa-user-tag",
  isMenuCollapsed: false,
  subItems: [{
    id: 10027,
    label: 'menuitems.dashboard.list.salesMenType',
    link: '/salesmenTypes'
  }, {
    id: 100117,
    label: 'menuitems.dashboard.list.salesMen',
    link: '/salesmen'
  }, {
    id: 9,
    label: 'menuitems.dashboard.list.externalSalesmen',
    link: '/externalSalesmen'
  }, {
    id: 7636473,
    label: 'menuitems.dashboard.list.internalSalesmen',
    link: '/internalSalesman'
  }]
}, {
  id: 1000544,
  label: "menuitems.area.text",
  icon: "fas fa-flag",
  isMenuCollapsed: false,
  subItems: [{
    id: 2,
    label: 'menuitems.dashboard.list.country',
    link: '/country'
  }, {
    id: 3,
    label: 'menuitems.dashboard.list.governorate',
    link: '/governorate'
  }, {
    id: 4,
    label: 'menuitems.dashboard.list.city',
    link: '/city'
  }, {
    id: 8,
    label: 'menuitems.dashboard.list.avenue',
    link: '/avenue'
  }]
}, {
  id: 10001,
  label: "menuitems.role.text",
  icon: "ri-shield-user-line",
  isMenuCollapsed: false,
  subItems: [{
    id: 10002,
    label: 'menuitems.dashboard.list.rolesType',
    link: '/rolesType'
  }, {
    id: 10003,
    label: 'menuitems.dashboard.list.roles',
    link: '/roles'
  }]
}, {
  id: 5,
  label: 'menuitems.currency.text',
  icon: ' fas fa-dollar-sign',
  link: '/currency'
}, {
  id: 6,
  label: 'menuitems.employee.text',
  icon: 'fas fa-user-friends',
  link: '/employee'
}, {
  id: 7,
  label: 'menuitems.financialYear.text',
  icon: 'fas fa-file-invoice-dollar',
  link: '/financialYear'
}, {
  id: 10004,
  label: 'menuitems.units.text',
  icon: 'far fa-list-alt',
  link: '/units'
}, {
  id: 10005,
  label: 'menuitems.colors.text',
  icon: 'fas fa-palette',
  link: '/colors'
}

// {
//     id: 1115,
//     label: "menuitems.dashboard.text",
//     icon: "ri-dashboard-line",
//     badge: {
//         variant: "success",
//         text: "menuitems.dashboard.badge"
//     },
//     isMenuCollapsed: false,
//     subItems: [
//         {
//             id: 1114,
//             label: 'menuitems.dashboard.list.sales',
//             link: '/'
//         },
//         {
//             id: 1113,
//             label: 'menuitems.dashboard.list.crm',
//             link: '/dashboard/crm'
//         },
//         {
//             id: 1115,
//             label: 'menuitems.dashboard.list.analytics',
//             link: '/dashboard/analytics'
//         },
//     ]
// },
// {
//     id: 1114,
//     label: "menuitems.apps.text",
//     isTitle: true
// },
// {
//     id: 11113,
//     label: "menuitems.chat.text",
//     icon: "ri-message-2-line",
//     link: '/apps/chat'
// },
// {
//     id: 1112,
//     label: "menuitems.ecommerce.text",
//     icon: "ri-shopping-cart-2-line",
//     badge: {
//         variant: "danger",
//         text: "menuitems.ecommerce.badge"
//     },
//     isMenuCollapsed: false,
//     subItems: [
//         {
//             id: 1111,
//             label: "menuitems.ecommerce.list.products",
//             link: "/ecommerce/products"
//         },
//         {
//             id: 1110,
//             label: "menuitems.ecommerce.list.productsgrid",
//             link: "/ecommerce/products-grid"
//         },
//         {
//             id: 1109,
//             label: 'menuitems.ecommerce.list.productdetail',
//             link: '/ecommerce/product-detail/1'
//         },
//         {
//             id: 1108,
//             label: 'menuitems.ecommerce.list.createproduct',
//             link: '/ecommerce/product-create'
//         },
//         {
//             id: 1107,
//             label: "menuitems.ecommerce.list.customers",
//             link: "/ecommerce/customers"
//         },
//         {
//             id: 1106,
//             label: "menuitems.ecommerce.list.orders",
//             link: "/ecommerce/orders"
//         },
//         {
//             id: 1105,
//             label: "menuitems.ecommerce.list.orderdetail",
//             link: "/ecommerce/order-detail"
//         },
//         {
//             id: 1104,
//             label: "menuitems.ecommerce.list.sellers",
//             link: "/ecommerce/sellers"
//         },
//         {
//             id: 1103,
//             label: "menuitems.ecommerce.list.cart",
//             link: "/ecommerce/cart"
//         },
//         {
//             id: 1102,
//             label: "menuitems.ecommerce.list.checkout",
//             link: "/ecommerce/checkout"
//         }
//     ]
// },
// {
//     id: 1101,
//     label: 'menuitems.calendar.text',
//     icon: 'ri-calendar-2-line',
//     link: '/apps/calendar'
// },
// {
//     id: 1100,
//     label: 'menuitems.email.text',
//     icon: 'ri-mail-line',
//     isMenuCollapsed: false,
//     subItems: [
//         {
//             id: 1099,
//             label: 'menuitems.email.list.inbox',
//             link: '/email/inbox'
//         },
//         {
//             id: 1098,
//             label: 'menuitems.email.list.reademail',
//             link: '/email/reademail/1'
//         },
//         {
//             id: 1097,
//             label: 'menuitems.email.list.template',
//             link: '/email/templates'
//         }
//     ]
// },
// {
//     id: 1096,
//     label: 'menuitems.companies.text',
//     icon: 'ri-building-4-line',
//     link: '/apps/companies'
// },
// {
//     id: 1095,
//     label: 'menuitems.tasks.text',
//     icon: 'ri-task-line',
//     isMenuCollapsed: false,
//     subItems: [
//         {
//             id: 1093,
//             label: 'menuitems.tasks.list.list',
//             link: '/task/list'
//         },
//         {
//             id: 1092,
//             label: 'menuitems.tasks.list.detail',
//             link: '/task/detail'
//         },
//         {
//             id: 1091,
//             label: 'menuitems.tasks.list.kanban',
//             link: '/task/kanban'
//         }
//     ]
// },
// {
//     id: 1090,
//     label: 'menuitems.ticket.text',
//     icon: 'ri-customer-service-2-line',
//     link: '/apps/tickets'
// },
// {
//     id: 1089,
//     label: 'menuitems.contacts.text',
//     icon: 'ri-profile-line',
//     isMenuCollapsed: false,
//     subItems: [
//         {
//             id: 1088,
//             label: 'menuitems.contacts.list.members',
//             link: '/contacts/list'
//         },
//         {
//             id: 1087,
//             label: 'menuitems.contacts.list.profile',
//             link: '/contacts/profile'
//         }
//     ]
// },
// {
//     id: 1086,
//     label: 'menuitems.filemanager.text',
//     icon: 'ri-folders-line',
//     link: '/apps/file-manager'
// },
// {
//     id: 1085,
//     label: "menuitems.custom.text",
//     isTitle: true
// },
// {
//     id: 1084,
//     label: 'menuitems.auth.text',
//     icon: 'ri-shield-user-line',
//     isMenuCollapsed: false,
//     subItems: [
//         {
//             id: 1083,
//             label: 'menuitems.auth.list.login',
//             link: '/auth/login-1'
//         },
//         {
//             id: 1082,
//             label: 'menuitems.auth.list.login-2',
//             link: '/auth/login-2'
//         },
//         {
//             id: 1081,
//             label: 'menuitems.auth.list.register',
//             link: '/auth/register-1'
//         },
//         {
//             id: 1080,
//             label: 'menuitems.auth.list.register-2',
//             link: '/auth/register-2'
//         },
//         {
//             id: 1079,
//             label: 'menuitems.auth.list.signin-signup',
//             link: '/auth/signin-signup'
//         },
//         {
//             id: 1078,
//             label: 'menuitems.auth.list.signin-signup-2',
//             link: '/auth/signin-signup-2'
//         },
//         {
//             id: 1077,
//             label: 'menuitems.auth.list.recoverpwd',
//             link: '/auth/recoverpwd'
//         },
//         {
//             id: 1076,
//             label: 'menuitems.auth.list.recoverpwd-2',
//             link: '/auth/recoverpwd-2'
//         },
//         {
//             id: 1075,
//             label: 'menuitems.auth.list.lock-screen',
//             link: '/auth/lock-screen'
//         },
//         {
//             id: 1074,
//             label: 'menuitems.auth.list.lock-screen-2',
//             link: '/auth/lock-screen-2'
//         },
//         {
//             id: 1073,
//             label: 'menuitems.auth.list.logout',
//             link: '/auth/logout-1'
//         },
//         {
//             id: 1072,
//             label: 'menuitems.auth.list.logout-2',
//             link: '/auth/logout-2'
//         },
//         {
//             id: 1072,
//             label: 'menuitems.auth.list.confirm-mail',
//             link: '/auth/confirm-mail'
//         },
//         {
//             id: 1072,
//             label: 'menuitems.auth.list.confirm-mail-2',
//             link: '/auth/confirm-mail-2'
//         },
//     ]
// },
// {
//     id: 1071,
//     label: 'menuitems.extrapages.text',
//     icon: 'ri-pages-line',
//     isMenuCollapsed: false,
//     subItems: [
//         {
//             id: 1070,
//             label: 'menuitems.extrapages.list.starter',
//             link: '/extras/starter'
//         },
//         {
//             id: 1069,
//             label: 'menuitems.extrapages.list.timeline',
//             link: '/extras/timeline'
//         },
//         {
//             id: 1068,
//             label: 'menuitems.extrapages.list.sitemap',
//             link: '/extras/sitemap'
//         },
//         {
//             id: 1067,
//             label: 'menuitems.extrapages.list.invoice',
//             link: '/extras/invoice'
//         },
//         {
//             id: 1066,
//             label: 'menuitems.extrapages.list.faqs',
//             link: '/extras/faqs'
//         },
//         {
//             id: 1065,
//             label: 'menuitems.extrapages.list.search-results',
//             link: '/extras/search-results'
//         },
//         {
//             id: 1064,
//             label: 'menuitems.extrapages.list.pricing',
//             link: '/extras/pricing'
//         },
//         {
//             id: 1063,
//             label: 'menuitems.extrapages.list.maintenance',
//             link: '/extras/maintenance'
//         },
//         {
//             id: 1062,
//             label: 'menuitems.extrapages.list.comingsoon',
//             link: '/extras/coming-soon'
//         },
//         {
//             id: 1061,
//             label: 'menuitems.extrapages.list.lightbox',
//             link: '/extras/lightbox'
//         },
//         {
//             id: 1060,
//             label: 'menuitems.extrapages.list.error404',
//             link: '/error/404'
//         },
//         {
//             id: 1059,
//             label: 'menuitems.extrapages.list.error404-alt',
//             link: '/error/404-alt'
//         },
//         {
//             id: 1058,
//             label: 'menuitems.extrapages.list.error500',
//             link: '/error/500'
//         }
//     ]
// },
// {
//     id: 1057,
//     label: "menuitems.components.text",
//     isTitle: true
// },
// {
//     id: 1056,
//     label: 'menuitems.ui.text',
//     icon: 'ri-pencil-ruler-2-line',
//     isMenuCollapsed: false,
//     subItems: [
//         {
//             id: 1055,
//             label: 'menuitems.ui.list.avatars',
//             link: '/ui/avatars'
//         },
//         {
//             id: 1054,
//             label: 'menuitems.ui.list.buttons',
//             link: '/ui/buttons'
//         },
//         {
//             id: 1053,
//             label: 'menuitems.ui.list.cards',
//             link: '/ui/cards'
//         },
//         {
//             id: 1052,
//             label: 'menuitems.ui.list.carousel',
//             link: '/ui/carousel'
//         },
//         {
//             id: 1051,
//             label: 'menuitems.ui.list.dropdowns',
//             link: '/ui/dropdowns'
//         },
//         {
//             id: 1050,
//             label: 'menuitems.ui.list.video',
//             link: '/ui/video'
//         },
//         {
//             id: 1049,
//             label: 'menuitems.ui.list.general',
//             link: '/ui/general'
//         },
//         {
//             id: 1048,
//             label: 'menuitems.ui.list.grid',
//             link: '/ui/grid'
//         },
//         {
//             id: 1047,
//             label: 'menuitems.ui.list.images',
//             link: '/ui/images'
//         },
//         {
//             id: 1046,
//             label: 'menuitems.ui.list.listgroup',
//             link: '/ui/list-group'
//         },
//         {
//             id: 1045,
//             label: 'menuitems.ui.list.modals',
//             link: '/ui/modals'
//         },
//         {
//             id: 1044,
//             label: 'menuitems.ui.list.notifications',
//             link: '/ui/notifications'
//         },
//         {
//             id: 1043,
//             label: 'menuitems.ui.list.portlet',
//             link: '/ui/portlets'
//         },
//         {
//             id: 1042,
//             label: 'menuitems.ui.list.progress',
//             link: '/ui/progress'
//         },
//         {
//             id: 1041,
//             label: 'menuitems.ui.list.ribbons',
//             link: '/ui/ribbons'
//         },
//         {
//             id: 1040,
//             label: 'menuitems.ui.list.spinners',
//             link: '/ui/spinners'
//         },
//         {
//             id: 1039,
//             label: 'menuitems.ui.list.tabs',
//             link: '/ui/tabs-accordions'
//         },
//         {
//             id: 1038,
//             label: 'menuitems.ui.list.tooltip',
//             link: '/ui/tooltips-popovers'
//         },
//         {
//             id: 1037,
//             label: 'menuitems.ui.list.typography',
//             link: '/ui/typography'
//         }
//     ]
// },
// {
//     id: 1036,
//     label: 'menuitems.extendedui.text',
//     icon: 'ri-stack-line',
//     badge: {
//         variant: "primary",
//         text: "menuitems.extendedui.badge"
//     },
//     isMenuCollapsed: false,
//     subItems: [
//         {
//             id: 1035,
//             label: 'menuitems.extendedui.list.rangeslider',
//             link: '/extended/rangeslider'
//         },
//         {
//             id: 1034,
//             label: 'menuitems.extendedui.list.sweetalert',
//             link: '/extended/sweet-alert'
//         },
//         {
//             id: 1033,
//             label: 'menuitems.extendedui.list.tour',
//             link: '/extended/tour'
//         },
//         {
//             id: 1032,
//             label: 'menuitems.extendedui.list.scrollspy',
//             link: '/extended/scrollspy'
//         },
//     ]
// },
// {
//     id: 1031,
//     label: 'menuitems.widgets.text',
//     icon: 'ri-honour-line',
//     link: '/widgets'
// },
// {
//     id: 1024,
//     label: 'menuitems.icons.text',
//     icon: 'ri-markup-line',
//     isMenuCollapsed: false,
//     subItems: [
//         {
//             id: 1025,
//             label: 'menuitems.icons.list.feather',
//             link: '/icons/feather'
//         },
//         {
//             id: 1026,
//             label: 'menuitems.icons.list.remix',
//             link: '/icons/remix'
//         },
//         {
//             id: 1027,
//             label: 'menuitems.icons.list.boxicons',
//             link: '/icons/boxicons'
//         },
//         {
//             id: 1028,
//             label: 'menuitems.icons.list.materialdesign',
//             link: '/icons/mdi'
//         },
//         {
//             id: 1029,
//             label: 'menuitems.icons.list.fontawesome',
//             link: '/icons/font-awesome'
//         },
//         {
//             id: 1030,
//             label: 'menuitems.icons.list.weather',
//             link: '/icons/weather'
//         }
//     ]
// },
// {
//     id: 1023,
//     label: 'menuitems.forms.text',
//     icon: 'ri-eraser-line',
//     isMenuCollapsed: false,
//     subItems: [
//         {
//             id: 1022,
//             label: 'menuitems.forms.list.elements',
//             link: '/forms/elements'
//         },
//         {
//             id: 1021,
//             label: 'menuitems.forms.list.advanced',
//             link: '/forms/advanced'
//         },
//         {
//             id: 1020,
//             label: 'menuitems.forms.list.validation',
//             link: '/forms/validation'
//         },
//         {
//             id: 1019,
//             label: 'menuitems.forms.list.wizard',
//             link: '/forms/wizard'
//         },
//         {
//             id: 1018,
//             label: 'menuitems.forms.list.mask',
//             link: '/forms/mask'
//         },
//         {
//             id: 1017,
//             label: 'menuitems.forms.list.editor',
//             link: '/forms/quill'
//         },
//         {
//             id: 1016,
//             label: 'menuitems.forms.list.fileupload',
//             link: '/forms/file-uploads'
//         }
//     ]
// },
// {
//     id: 1015,
//     label: 'menuitems.tables.text',
//     icon: 'ri-table-line',
//     isMenuCollapsed: false,
//     subItems: [
//         {
//             id: 1014,
//             label: 'menuitems.tables.list.basic',
//             link: '/tables/basic'
//         },
//         {
//             id: 1013,
//             label: 'menuitems.tables.list.advanced',
//             link: '/tables/advanced'
//         },
//     ]
// },
// {
//     id: 1012,
//     label: 'menuitems.charts.text',
//     icon: 'ri-bar-chart-line',
//     isMenuCollapsed: false,
//     subItems: [
//         {
//             id: 1007,
//             label: 'menuitems.charts.list.apex',
//             link: '/charts/apex'
//         },
//         {
//             id: 1008,
//             label: 'menuitems.charts.list.chartjs',
//             link: '/charts/chartjs'
//         },
//         {
//             id: 1009,
//             label: 'menuitems.charts.list.c3',
//             link: '/charts/c3'
//         },
//         {
//             id: 1010,
//             label: 'menuitems.charts.list.chartist',
//             link: '/charts/chartist'
//         },
//         {
//             id: 1011,
//             label: 'menuitems.charts.list.knob',
//             link: '/charts/knob'
//         }
//     ]
// },
// {
//     id: 1006,
//     label: 'menuitems.maps.text',
//     icon: 'ri-map-pin-line',
//     isMenuCollapsed: false,
//     subItems: [
//         {
//             id: 1005,
//             label: 'menuitems.maps.list.googlemap',
//             link: '/maps/google'
//         }
//     ]
// },
// {
//     id: 1004,
//     label: "menuitems.multilevel.text",
//     icon: "ri-share-line",
//     isMenuCollapsed: false,
//     subItems: [
//         {
//             id: 1003,
//             label: "menuitems.multilevel.list.level1.1",
//             link: "javascript: void(0);",
//         },
//         {
//             id: 1002,
//             label: "menuitems.multilevel.list.level1.2",
//             isMenuCollapsed: false,
//             subItems: [
//                 {
//                     id: 1001,
//                     label: "menuitems.multilevel.list.level1.level2.1",
//                     link: "javascript: void(0);"
//                 },
//                 {
//                     id: 1000,
//                     label: "menuitems.multilevel.list.level1.level2.2",
//                     link: "javascript: void(0);"
//                 }
//             ]
//         }
//     ]
// }
];

/***/ }),

/***/ "./resources/js/state/helpers.js":
/*!***************************************!*\
  !*** ./resources/js/state/helpers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authComputed": () => (/* binding */ authComputed),
/* harmony export */   "authFackMethods": () => (/* binding */ authFackMethods),
/* harmony export */   "authMethods": () => (/* binding */ authMethods),
/* harmony export */   "layoutComputed": () => (/* binding */ layoutComputed),
/* harmony export */   "layoutMethods": () => (/* binding */ layoutMethods),
/* harmony export */   "notificationMethods": () => (/* binding */ notificationMethods)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var authComputed = _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)('auth', {
  currentUser: function currentUser(state) {
    return state.currentUser;
  }
})), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('auth', ['loggedIn']));
var layoutComputed = _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)('layout', {
  layoutType: function layoutType(state) {
    return state.layoutType;
  },
  leftSidebarType: function leftSidebarType(state) {
    return state.leftSidebarType;
  },
  layoutWidth: function layoutWidth(state) {
    return state.layoutWidth;
  },
  leftSidebarSize: function leftSidebarSize(state) {
    return state.leftSidebarSize;
  },
  menuPosition: function menuPosition(state) {
    return state.menuPosition;
  },
  topbar: function topbar(state) {
    return state.topbar;
  },
  loader: function loader(state) {
    return state.loader;
  }
}));
var authMethods = (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('auth', ['logIn', 'logOut', 'register', 'resetPassword']);
var layoutMethods = (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('layout', ['changeLayoutType', 'changeLayoutWidth', 'changeLeftSidebarType', 'changeLeftSidebarSize', 'changeTopbar', 'changeLoaderValue', 'changeMenuPosition']);
var authFackMethods = (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('authfack', ['login', 'registeruser', 'logout']);
var notificationMethods = (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('notification', ['success', 'error', 'clear']);

/***/ }),

/***/ "./resources/js/views/pages/icons/data-material.js":
/*!*********************************************************!*\
  !*** ./resources/js/views/pages/icons/data-material.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "icons": () => (/* binding */ icons)
/* harmony export */ });
var icons = [{
  name: "ab-testing",
  hex: "F01C9",
  version: "4.0.96"
}, {
  name: "abjad-arabic",
  hex: "F1328",
  version: "4.9.95"
}, {
  name: "abjad-hebrew",
  hex: "F1329",
  version: "4.9.95"
}, {
  name: "abugida-devanagari",
  hex: "F132A",
  version: "4.9.95"
}, {
  name: "abugida-thai",
  hex: "F132B",
  version: "4.9.95"
}, {
  name: "access-point",
  hex: "F0003",
  version: "1.5.54"
}, {
  name: "access-point-network",
  hex: "F0002",
  version: "1.5.54"
}, {
  name: "access-point-network-off",
  hex: "F0BE1",
  version: "3.2.89"
}, {
  name: "account",
  hex: "F0004",
  version: "1.5.54"
}, {
  name: "account-alert",
  hex: "F0005",
  version: "1.5.54"
}, {
  name: "account-alert-outline",
  hex: "F0B50",
  version: "3.0.39"
}, {
  name: "account-arrow-left",
  hex: "F0B51",
  version: "3.0.39"
}, {
  name: "account-arrow-left-outline",
  hex: "F0B52",
  version: "3.0.39"
}, {
  name: "account-arrow-right",
  hex: "F0B53",
  version: "3.0.39"
}, {
  name: "account-arrow-right-outline",
  hex: "F0B54",
  version: "3.0.39"
}, {
  name: "account-box",
  hex: "F0006",
  version: "1.5.54"
}, {
  name: "account-box-multiple",
  hex: "F0934",
  version: "2.4.85"
}, {
  name: "account-box-multiple-outline",
  hex: "F100A",
  version: "4.1.95"
}, {
  name: "account-box-outline",
  hex: "F0007",
  version: "1.5.54"
}, {
  name: "account-cancel",
  hex: "F12DF",
  version: "4.8.95"
}, {
  name: "account-cancel-outline",
  hex: "F12E0",
  version: "4.8.95"
}, {
  name: "account-cash",
  hex: "F1097",
  version: "4.2.95"
}, {
  name: "account-cash-outline",
  hex: "F1098",
  version: "4.2.95"
}, {
  name: "account-check",
  hex: "F0008",
  version: "1.5.54"
}, {
  name: "account-check-outline",
  hex: "F0BE2",
  version: "3.2.89"
}, {
  name: "account-child",
  hex: "F0A89",
  version: "2.7.94"
}, {
  name: "account-child-circle",
  hex: "F0A8A",
  version: "2.7.94"
}, {
  name: "account-child-outline",
  hex: "F10C8",
  version: "4.3.95"
}, {
  name: "account-circle",
  hex: "F0009",
  version: "1.5.54"
}, {
  name: "account-circle-outline",
  hex: "F0B55",
  version: "3.0.39"
}, {
  name: "account-clock",
  hex: "F0B56",
  version: "3.0.39"
}, {
  name: "account-clock-outline",
  hex: "F0B57",
  version: "3.0.39"
}, {
  name: "account-cog",
  hex: "F1370",
  version: "4.9.95"
}, {
  name: "account-cog-outline",
  hex: "F1371",
  version: "4.9.95"
}, {
  name: "account-convert",
  hex: "F000A",
  version: "1.5.54"
}, {
  name: "account-convert-outline",
  hex: "F1301",
  version: "4.8.95"
}, {
  name: "account-cowboy-hat",
  hex: "F0E9B",
  version: "3.7.94"
}, {
  name: "account-details",
  hex: "F0631",
  version: "1.6.50"
}, {
  name: "account-details-outline",
  hex: "F1372",
  version: "4.9.95"
}, {
  name: "account-edit",
  hex: "F06BC",
  version: "1.8.36"
}, {
  name: "account-edit-outline",
  hex: "F0FFB",
  version: "4.0.96"
}, {
  name: "account-group",
  hex: "F0849",
  version: "2.1.99"
}, {
  name: "account-group-outline",
  hex: "F0B58",
  version: "3.0.39"
}, {
  name: "account-hard-hat",
  hex: "F05B5",
  version: "1.5.54"
}, {
  name: "account-heart",
  hex: "F0899",
  version: "2.2.43"
}, {
  name: "account-heart-outline",
  hex: "F0BE3",
  version: "3.2.89"
}, {
  name: "account-key",
  hex: "F000B",
  version: "1.5.54"
}, {
  name: "account-key-outline",
  hex: "F0BE4",
  version: "3.2.89"
}, {
  name: "account-lock",
  hex: "F115E",
  version: "4.4.95"
}, {
  name: "account-lock-outline",
  hex: "F115F",
  version: "4.4.95"
}, {
  name: "account-minus",
  hex: "F000D",
  version: "1.5.54"
}, {
  name: "account-minus-outline",
  hex: "F0AEC",
  version: "2.8.94"
}, {
  name: "account-multiple",
  hex: "F000E",
  version: "1.5.54"
}, {
  name: "account-multiple-check",
  hex: "F08C5",
  version: "2.3.50"
}, {
  name: "account-multiple-check-outline",
  hex: "F11FE",
  version: "4.6.95"
}, {
  name: "account-multiple-minus",
  hex: "F05D3",
  version: "1.5.54"
}, {
  name: "account-multiple-minus-outline",
  hex: "F0BE5",
  version: "3.2.89"
}, {
  name: "account-multiple-outline",
  hex: "F000F",
  version: "1.5.54"
}, {
  name: "account-multiple-plus",
  hex: "F0010",
  version: "1.5.54"
}, {
  name: "account-multiple-plus-outline",
  hex: "F0800",
  version: "2.1.19"
}, {
  name: "account-multiple-remove",
  hex: "F120A",
  version: "4.6.95"
}, {
  name: "account-multiple-remove-outline",
  hex: "F120B",
  version: "4.6.95"
}, {
  name: "account-music",
  hex: "F0803",
  version: "2.1.19"
}, {
  name: "account-music-outline",
  hex: "F0CE9",
  version: "3.3.92"
}, {
  name: "account-network",
  hex: "F0011",
  version: "1.5.54"
}, {
  name: "account-network-outline",
  hex: "F0BE6",
  version: "3.2.89"
}, {
  name: "account-off",
  hex: "F0012",
  version: "1.5.54"
}, {
  name: "account-off-outline",
  hex: "F0BE7",
  version: "3.2.89"
}, {
  name: "account-outline",
  hex: "F0013",
  version: "1.5.54"
}, {
  name: "account-plus",
  hex: "F0014",
  version: "1.5.54"
}, {
  name: "account-plus-outline",
  hex: "F0801",
  version: "2.1.19"
}, {
  name: "account-question",
  hex: "F0B59",
  version: "3.0.39"
}, {
  name: "account-question-outline",
  hex: "F0B5A",
  version: "3.0.39"
}, {
  name: "account-remove",
  hex: "F0015",
  version: "1.5.54"
}, {
  name: "account-remove-outline",
  hex: "F0AED",
  version: "2.8.94"
}, {
  name: "account-search",
  hex: "F0016",
  version: "1.5.54"
}, {
  name: "account-search-outline",
  hex: "F0935",
  version: "2.4.85"
}, {
  name: "account-settings",
  hex: "F0630",
  version: "1.6.50"
}, {
  name: "account-settings-outline",
  hex: "F10C9",
  version: "4.3.95"
}, {
  name: "account-star",
  hex: "F0017",
  version: "1.5.54"
}, {
  name: "account-star-outline",
  hex: "F0BE8",
  version: "3.2.89"
}, {
  name: "account-supervisor",
  hex: "F0A8B",
  version: "2.7.94"
}, {
  name: "account-supervisor-circle",
  hex: "F0A8C",
  version: "2.7.94"
}, {
  name: "account-supervisor-outline",
  hex: "F112D",
  version: "4.4.95"
}, {
  name: "account-switch",
  hex: "F0019",
  version: "1.5.54"
}, {
  name: "account-switch-outline",
  hex: "F04CB",
  version: "1.5.54"
}, {
  name: "account-tie",
  hex: "F0CE3",
  version: "3.3.92"
}, {
  name: "account-tie-outline",
  hex: "F10CA",
  version: "4.3.95"
}, {
  name: "account-tie-voice",
  hex: "F1308",
  version: "4.8.95"
}, {
  name: "account-tie-voice-off",
  hex: "F130A",
  version: "4.8.95"
}, {
  name: "account-tie-voice-off-outline",
  hex: "F130B",
  version: "4.8.95"
}, {
  name: "account-tie-voice-outline",
  hex: "F1309",
  version: "4.8.95"
}, {
  name: "account-voice",
  hex: "F05CB",
  version: "1.5.54"
}, {
  name: "adjust",
  hex: "F001A",
  version: "1.5.54"
}, {
  name: "adobe",
  hex: "F0936",
  version: "2.4.85"
}, {
  name: "adobe-acrobat",
  hex: "F0F9D",
  version: "4.0.96"
}, {
  name: "air-conditioner",
  hex: "F001B",
  version: "1.5.54"
}, {
  name: "air-filter",
  hex: "F0D43",
  version: "3.4.93"
}, {
  name: "air-horn",
  hex: "F0DAC",
  version: "3.5.94"
}, {
  name: "air-humidifier",
  hex: "F1099",
  version: "4.2.95"
}, {
  name: "air-purifier",
  hex: "F0D44",
  version: "3.4.93"
}, {
  name: "airbag",
  hex: "F0BE9",
  version: "3.2.89"
}, {
  name: "airballoon",
  hex: "F001C",
  version: "1.5.54"
}, {
  name: "airballoon-outline",
  hex: "F100B",
  version: "4.1.95"
}, {
  name: "airplane",
  hex: "F001D",
  version: "1.5.54"
}, {
  name: "airplane-landing",
  hex: "F05D4",
  version: "1.5.54"
}, {
  name: "airplane-off",
  hex: "F001E",
  version: "1.5.54"
}, {
  name: "airplane-takeoff",
  hex: "F05D5",
  version: "1.5.54"
}, {
  name: "airport",
  hex: "F084B",
  version: "2.1.99"
}, {
  name: "alarm",
  hex: "F0020",
  version: "1.5.54"
}, {
  name: "alarm-bell",
  hex: "F078E",
  version: "2.0.46"
}, {
  name: "alarm-check",
  hex: "F0021",
  version: "1.5.54"
}, {
  name: "alarm-light",
  hex: "F078F",
  version: "2.0.46"
}, {
  name: "alarm-light-outline",
  hex: "F0BEA",
  version: "3.2.89"
}, {
  name: "alarm-multiple",
  hex: "F0022",
  version: "1.5.54"
}, {
  name: "alarm-note",
  hex: "F0E71",
  version: "3.7.94"
}, {
  name: "alarm-note-off",
  hex: "F0E72",
  version: "3.7.94"
}, {
  name: "alarm-off",
  hex: "F0023",
  version: "1.5.54"
}, {
  name: "alarm-plus",
  hex: "F0024",
  version: "1.5.54"
}, {
  name: "alarm-snooze",
  hex: "F068E",
  version: "1.7.12"
}, {
  name: "album",
  hex: "F0025",
  version: "1.5.54"
}, {
  name: "alert",
  hex: "F0026",
  version: "1.5.54"
}, {
  name: "alert-box",
  hex: "F0027",
  version: "1.5.54"
}, {
  name: "alert-box-outline",
  hex: "F0CE4",
  version: "3.3.92"
}, {
  name: "alert-circle",
  hex: "F0028",
  version: "1.5.54"
}, {
  name: "alert-circle-check",
  hex: "F11ED",
  version: "4.5.95"
}, {
  name: "alert-circle-check-outline",
  hex: "F11EE",
  version: "4.5.95"
}, {
  name: "alert-circle-outline",
  hex: "F05D6",
  version: "1.5.54"
}, {
  name: "alert-decagram",
  hex: "F06BD",
  version: "1.8.36"
}, {
  name: "alert-decagram-outline",
  hex: "F0CE5",
  version: "3.3.92"
}, {
  name: "alert-octagon",
  hex: "F0029",
  version: "1.5.54"
}, {
  name: "alert-octagon-outline",
  hex: "F0CE6",
  version: "3.3.92"
}, {
  name: "alert-octagram",
  hex: "F0767",
  version: "1.9.32"
}, {
  name: "alert-octagram-outline",
  hex: "F0CE7",
  version: "3.3.92"
}, {
  name: "alert-outline",
  hex: "F002A",
  version: "1.5.54"
}, {
  name: "alert-rhombus",
  hex: "F11CE",
  version: "4.5.95"
}, {
  name: "alert-rhombus-outline",
  hex: "F11CF",
  version: "4.5.95"
}, {
  name: "alien",
  hex: "F089A",
  version: "2.2.43"
}, {
  name: "alien-outline",
  hex: "F10CB",
  version: "4.3.95"
}, {
  name: "align-horizontal-center",
  hex: "F11C3",
  version: "4.5.95"
}, {
  name: "align-horizontal-left",
  hex: "F11C2",
  version: "4.5.95"
}, {
  name: "align-horizontal-right",
  hex: "F11C4",
  version: "4.5.95"
}, {
  name: "align-vertical-bottom",
  hex: "F11C5",
  version: "4.5.95"
}, {
  name: "align-vertical-center",
  hex: "F11C6",
  version: "4.5.95"
}, {
  name: "align-vertical-top",
  hex: "F11C7",
  version: "4.5.95"
}, {
  name: "all-inclusive",
  hex: "F06BE",
  version: "1.8.36"
}, {
  name: "allergy",
  hex: "F1258",
  version: "4.7.95"
}, {
  name: "alpha",
  hex: "F002B",
  version: "1.5.54"
}, {
  name: "alpha-a",
  hex: "F0AEE",
  version: "2.8.94"
}, {
  name: "alpha-a-box",
  hex: "F0B08",
  version: "2.8.94"
}, {
  name: "alpha-a-box-outline",
  hex: "F0BEB",
  version: "3.2.89"
}, {
  name: "alpha-a-circle",
  hex: "F0BEC",
  version: "3.2.89"
}, {
  name: "alpha-a-circle-outline",
  hex: "F0BED",
  version: "3.2.89"
}, {
  name: "alpha-b",
  hex: "F0AEF",
  version: "2.8.94"
}, {
  name: "alpha-b-box",
  hex: "F0B09",
  version: "2.8.94"
}, {
  name: "alpha-b-box-outline",
  hex: "F0BEE",
  version: "3.2.89"
}, {
  name: "alpha-b-circle",
  hex: "F0BEF",
  version: "3.2.89"
}, {
  name: "alpha-b-circle-outline",
  hex: "F0BF0",
  version: "3.2.89"
}, {
  name: "alpha-c",
  hex: "F0AF0",
  version: "2.8.94"
}, {
  name: "alpha-c-box",
  hex: "F0B0A",
  version: "2.8.94"
}, {
  name: "alpha-c-box-outline",
  hex: "F0BF1",
  version: "3.2.89"
}, {
  name: "alpha-c-circle",
  hex: "F0BF2",
  version: "3.2.89"
}, {
  name: "alpha-c-circle-outline",
  hex: "F0BF3",
  version: "3.2.89"
}, {
  name: "alpha-d",
  hex: "F0AF1",
  version: "2.8.94"
}, {
  name: "alpha-d-box",
  hex: "F0B0B",
  version: "2.8.94"
}, {
  name: "alpha-d-box-outline",
  hex: "F0BF4",
  version: "3.2.89"
}, {
  name: "alpha-d-circle",
  hex: "F0BF5",
  version: "3.2.89"
}, {
  name: "alpha-d-circle-outline",
  hex: "F0BF6",
  version: "3.2.89"
}, {
  name: "alpha-e",
  hex: "F0AF2",
  version: "2.8.94"
}, {
  name: "alpha-e-box",
  hex: "F0B0C",
  version: "2.8.94"
}, {
  name: "alpha-e-box-outline",
  hex: "F0BF7",
  version: "3.2.89"
}, {
  name: "alpha-e-circle",
  hex: "F0BF8",
  version: "3.2.89"
}, {
  name: "alpha-e-circle-outline",
  hex: "F0BF9",
  version: "3.2.89"
}, {
  name: "alpha-f",
  hex: "F0AF3",
  version: "2.8.94"
}, {
  name: "alpha-f-box",
  hex: "F0B0D",
  version: "2.8.94"
}, {
  name: "alpha-f-box-outline",
  hex: "F0BFA",
  version: "3.2.89"
}, {
  name: "alpha-f-circle",
  hex: "F0BFB",
  version: "3.2.89"
}, {
  name: "alpha-f-circle-outline",
  hex: "F0BFC",
  version: "3.2.89"
}, {
  name: "alpha-g",
  hex: "F0AF4",
  version: "2.8.94"
}, {
  name: "alpha-g-box",
  hex: "F0B0E",
  version: "2.8.94"
}, {
  name: "alpha-g-box-outline",
  hex: "F0BFD",
  version: "3.2.89"
}, {
  name: "alpha-g-circle",
  hex: "F0BFE",
  version: "3.2.89"
}, {
  name: "alpha-g-circle-outline",
  hex: "F0BFF",
  version: "3.2.89"
}, {
  name: "alpha-h",
  hex: "F0AF5",
  version: "2.8.94"
}, {
  name: "alpha-h-box",
  hex: "F0B0F",
  version: "2.8.94"
}, {
  name: "alpha-h-box-outline",
  hex: "F0C00",
  version: "3.2.89"
}, {
  name: "alpha-h-circle",
  hex: "F0C01",
  version: "3.2.89"
}, {
  name: "alpha-h-circle-outline",
  hex: "F0C02",
  version: "3.2.89"
}, {
  name: "alpha-i",
  hex: "F0AF6",
  version: "2.8.94"
}, {
  name: "alpha-i-box",
  hex: "F0B10",
  version: "2.8.94"
}, {
  name: "alpha-i-box-outline",
  hex: "F0C03",
  version: "3.2.89"
}, {
  name: "alpha-i-circle",
  hex: "F0C04",
  version: "3.2.89"
}, {
  name: "alpha-i-circle-outline",
  hex: "F0C05",
  version: "3.2.89"
}, {
  name: "alpha-j",
  hex: "F0AF7",
  version: "2.8.94"
}, {
  name: "alpha-j-box",
  hex: "F0B11",
  version: "2.8.94"
}, {
  name: "alpha-j-box-outline",
  hex: "F0C06",
  version: "3.2.89"
}, {
  name: "alpha-j-circle",
  hex: "F0C07",
  version: "3.2.89"
}, {
  name: "alpha-j-circle-outline",
  hex: "F0C08",
  version: "3.2.89"
}, {
  name: "alpha-k",
  hex: "F0AF8",
  version: "2.8.94"
}, {
  name: "alpha-k-box",
  hex: "F0B12",
  version: "2.8.94"
}, {
  name: "alpha-k-box-outline",
  hex: "F0C09",
  version: "3.2.89"
}, {
  name: "alpha-k-circle",
  hex: "F0C0A",
  version: "3.2.89"
}, {
  name: "alpha-k-circle-outline",
  hex: "F0C0B",
  version: "3.2.89"
}, {
  name: "alpha-l",
  hex: "F0AF9",
  version: "2.8.94"
}, {
  name: "alpha-l-box",
  hex: "F0B13",
  version: "2.8.94"
}, {
  name: "alpha-l-box-outline",
  hex: "F0C0C",
  version: "3.2.89"
}, {
  name: "alpha-l-circle",
  hex: "F0C0D",
  version: "3.2.89"
}, {
  name: "alpha-l-circle-outline",
  hex: "F0C0E",
  version: "3.2.89"
}, {
  name: "alpha-m",
  hex: "F0AFA",
  version: "2.8.94"
}, {
  name: "alpha-m-box",
  hex: "F0B14",
  version: "2.8.94"
}, {
  name: "alpha-m-box-outline",
  hex: "F0C0F",
  version: "3.2.89"
}, {
  name: "alpha-m-circle",
  hex: "F0C10",
  version: "3.2.89"
}, {
  name: "alpha-m-circle-outline",
  hex: "F0C11",
  version: "3.2.89"
}, {
  name: "alpha-n",
  hex: "F0AFB",
  version: "2.8.94"
}, {
  name: "alpha-n-box",
  hex: "F0B15",
  version: "2.8.94"
}, {
  name: "alpha-n-box-outline",
  hex: "F0C12",
  version: "3.2.89"
}, {
  name: "alpha-n-circle",
  hex: "F0C13",
  version: "3.2.89"
}, {
  name: "alpha-n-circle-outline",
  hex: "F0C14",
  version: "3.2.89"
}, {
  name: "alpha-o",
  hex: "F0AFC",
  version: "2.8.94"
}, {
  name: "alpha-o-box",
  hex: "F0B16",
  version: "2.8.94"
}, {
  name: "alpha-o-box-outline",
  hex: "F0C15",
  version: "3.2.89"
}, {
  name: "alpha-o-circle",
  hex: "F0C16",
  version: "3.2.89"
}, {
  name: "alpha-o-circle-outline",
  hex: "F0C17",
  version: "3.2.89"
}, {
  name: "alpha-p",
  hex: "F0AFD",
  version: "2.8.94"
}, {
  name: "alpha-p-box",
  hex: "F0B17",
  version: "2.8.94"
}, {
  name: "alpha-p-box-outline",
  hex: "F0C18",
  version: "3.2.89"
}, {
  name: "alpha-p-circle",
  hex: "F0C19",
  version: "3.2.89"
}, {
  name: "alpha-p-circle-outline",
  hex: "F0C1A",
  version: "3.2.89"
}, {
  name: "alpha-q",
  hex: "F0AFE",
  version: "2.8.94"
}, {
  name: "alpha-q-box",
  hex: "F0B18",
  version: "2.8.94"
}, {
  name: "alpha-q-box-outline",
  hex: "F0C1B",
  version: "3.2.89"
}, {
  name: "alpha-q-circle",
  hex: "F0C1C",
  version: "3.2.89"
}, {
  name: "alpha-q-circle-outline",
  hex: "F0C1D",
  version: "3.2.89"
}, {
  name: "alpha-r",
  hex: "F0AFF",
  version: "2.8.94"
}, {
  name: "alpha-r-box",
  hex: "F0B19",
  version: "2.8.94"
}, {
  name: "alpha-r-box-outline",
  hex: "F0C1E",
  version: "3.2.89"
}, {
  name: "alpha-r-circle",
  hex: "F0C1F",
  version: "3.2.89"
}, {
  name: "alpha-r-circle-outline",
  hex: "F0C20",
  version: "3.2.89"
}, {
  name: "alpha-s",
  hex: "F0B00",
  version: "2.8.94"
}, {
  name: "alpha-s-box",
  hex: "F0B1A",
  version: "2.8.94"
}, {
  name: "alpha-s-box-outline",
  hex: "F0C21",
  version: "3.2.89"
}, {
  name: "alpha-s-circle",
  hex: "F0C22",
  version: "3.2.89"
}, {
  name: "alpha-s-circle-outline",
  hex: "F0C23",
  version: "3.2.89"
}, {
  name: "alpha-t",
  hex: "F0B01",
  version: "2.8.94"
}, {
  name: "alpha-t-box",
  hex: "F0B1B",
  version: "2.8.94"
}, {
  name: "alpha-t-box-outline",
  hex: "F0C24",
  version: "3.2.89"
}, {
  name: "alpha-t-circle",
  hex: "F0C25",
  version: "3.2.89"
}, {
  name: "alpha-t-circle-outline",
  hex: "F0C26",
  version: "3.2.89"
}, {
  name: "alpha-u",
  hex: "F0B02",
  version: "2.8.94"
}, {
  name: "alpha-u-box",
  hex: "F0B1C",
  version: "2.8.94"
}, {
  name: "alpha-u-box-outline",
  hex: "F0C27",
  version: "3.2.89"
}, {
  name: "alpha-u-circle",
  hex: "F0C28",
  version: "3.2.89"
}, {
  name: "alpha-u-circle-outline",
  hex: "F0C29",
  version: "3.2.89"
}, {
  name: "alpha-v",
  hex: "F0B03",
  version: "2.8.94"
}, {
  name: "alpha-v-box",
  hex: "F0B1D",
  version: "2.8.94"
}, {
  name: "alpha-v-box-outline",
  hex: "F0C2A",
  version: "3.2.89"
}, {
  name: "alpha-v-circle",
  hex: "F0C2B",
  version: "3.2.89"
}, {
  name: "alpha-v-circle-outline",
  hex: "F0C2C",
  version: "3.2.89"
}, {
  name: "alpha-w",
  hex: "F0B04",
  version: "2.8.94"
}, {
  name: "alpha-w-box",
  hex: "F0B1E",
  version: "2.8.94"
}, {
  name: "alpha-w-box-outline",
  hex: "F0C2D",
  version: "3.2.89"
}, {
  name: "alpha-w-circle",
  hex: "F0C2E",
  version: "3.2.89"
}, {
  name: "alpha-w-circle-outline",
  hex: "F0C2F",
  version: "3.2.89"
}, {
  name: "alpha-x",
  hex: "F0B05",
  version: "2.8.94"
}, {
  name: "alpha-x-box",
  hex: "F0B1F",
  version: "2.8.94"
}, {
  name: "alpha-x-box-outline",
  hex: "F0C30",
  version: "3.2.89"
}, {
  name: "alpha-x-circle",
  hex: "F0C31",
  version: "3.2.89"
}, {
  name: "alpha-x-circle-outline",
  hex: "F0C32",
  version: "3.2.89"
}, {
  name: "alpha-y",
  hex: "F0B06",
  version: "2.8.94"
}, {
  name: "alpha-y-box",
  hex: "F0B20",
  version: "2.8.94"
}, {
  name: "alpha-y-box-outline",
  hex: "F0C33",
  version: "3.2.89"
}, {
  name: "alpha-y-circle",
  hex: "F0C34",
  version: "3.2.89"
}, {
  name: "alpha-y-circle-outline",
  hex: "F0C35",
  version: "3.2.89"
}, {
  name: "alpha-z",
  hex: "F0B07",
  version: "2.8.94"
}, {
  name: "alpha-z-box",
  hex: "F0B21",
  version: "2.8.94"
}, {
  name: "alpha-z-box-outline",
  hex: "F0C36",
  version: "3.2.89"
}, {
  name: "alpha-z-circle",
  hex: "F0C37",
  version: "3.2.89"
}, {
  name: "alpha-z-circle-outline",
  hex: "F0C38",
  version: "3.2.89"
}, {
  name: "alphabet-aurebesh",
  hex: "F132C",
  version: "4.9.95"
}, {
  name: "alphabet-cyrillic",
  hex: "F132D",
  version: "4.9.95"
}, {
  name: "alphabet-greek",
  hex: "F132E",
  version: "4.9.95"
}, {
  name: "alphabet-latin",
  hex: "F132F",
  version: "4.9.95"
}, {
  name: "alphabet-piqad",
  hex: "F1330",
  version: "4.9.95"
}, {
  name: "alphabet-tengwar",
  hex: "F1337",
  version: "4.9.95"
}, {
  name: "alphabetical",
  hex: "F002C",
  version: "1.5.54"
}, {
  name: "alphabetical-off",
  hex: "F100C",
  version: "4.1.95"
}, {
  name: "alphabetical-variant",
  hex: "F100D",
  version: "4.1.95"
}, {
  name: "alphabetical-variant-off",
  hex: "F100E",
  version: "4.1.95"
}, {
  name: "altimeter",
  hex: "F05D7",
  version: "1.5.54"
}, {
  name: "amazon",
  hex: "F002D",
  version: "1.5.54"
}, {
  name: "amazon-alexa",
  hex: "F08C6",
  version: "2.3.50"
}, {
  name: "ambulance",
  hex: "F002F",
  version: "1.5.54"
}, {
  name: "ammunition",
  hex: "F0CE8",
  version: "3.3.92"
}, {
  name: "ampersand",
  hex: "F0A8D",
  version: "2.7.94"
}, {
  name: "amplifier",
  hex: "F0030",
  version: "1.5.54"
}, {
  name: "amplifier-off",
  hex: "F11B5",
  version: "4.5.95"
}, {
  name: "anchor",
  hex: "F0031",
  version: "1.5.54"
}, {
  name: "android",
  hex: "F0032",
  version: "1.5.54"
}, {
  name: "android-auto",
  hex: "F0A8E",
  version: "2.7.94"
}, {
  name: "android-debug-bridge",
  hex: "F0033",
  version: "1.5.54"
}, {
  name: "android-messages",
  hex: "F0D45",
  version: "3.4.93"
}, {
  name: "android-studio",
  hex: "F0034",
  version: "1.5.54"
}, {
  name: "angle-acute",
  hex: "F0937",
  version: "2.4.85"
}, {
  name: "angle-obtuse",
  hex: "F0938",
  version: "2.4.85"
}, {
  name: "angle-right",
  hex: "F0939",
  version: "2.4.85"
}, {
  name: "angular",
  hex: "F06B2",
  version: "1.7.22"
}, {
  name: "angularjs",
  hex: "F06BF",
  version: "1.8.36"
}, {
  name: "animation",
  hex: "F05D8",
  version: "1.5.54"
}, {
  name: "animation-outline",
  hex: "F0A8F",
  version: "2.7.94"
}, {
  name: "animation-play",
  hex: "F093A",
  version: "2.4.85"
}, {
  name: "animation-play-outline",
  hex: "F0A90",
  version: "2.7.94"
}, {
  name: "ansible",
  hex: "F109A",
  version: "4.2.95"
}, {
  name: "antenna",
  hex: "F1119",
  version: "4.3.95"
}, {
  name: "anvil",
  hex: "F089B",
  version: "2.2.43"
}, {
  name: "apache-kafka",
  hex: "F100F",
  version: "4.1.95"
}, {
  name: "api",
  hex: "F109B",
  version: "4.2.95"
}, {
  name: "api-off",
  hex: "F1257",
  version: "4.6.95"
}, {
  name: "apple",
  hex: "F0035",
  version: "1.5.54"
}, {
  name: "apple-airplay",
  hex: "F001F",
  version: "1.5.54"
}, {
  name: "apple-finder",
  hex: "F0036",
  version: "1.5.54"
}, {
  name: "apple-icloud",
  hex: "F0038",
  version: "1.5.54"
}, {
  name: "apple-ios",
  hex: "F0037",
  version: "1.5.54"
}, {
  name: "apple-keyboard-caps",
  hex: "F0632",
  version: "1.6.50"
}, {
  name: "apple-keyboard-command",
  hex: "F0633",
  version: "1.6.50"
}, {
  name: "apple-keyboard-control",
  hex: "F0634",
  version: "1.6.50"
}, {
  name: "apple-keyboard-option",
  hex: "F0635",
  version: "1.6.50"
}, {
  name: "apple-keyboard-shift",
  hex: "F0636",
  version: "1.6.50"
}, {
  name: "apple-safari",
  hex: "F0039",
  version: "1.5.54"
}, {
  name: "application",
  hex: "F0614",
  version: "1.6.50"
}, {
  name: "application-export",
  hex: "F0DAD",
  version: "3.5.94"
}, {
  name: "application-import",
  hex: "F0DAE",
  version: "3.5.94"
}, {
  name: "approximately-equal",
  hex: "F0F9E",
  version: "4.0.96"
}, {
  name: "approximately-equal-box",
  hex: "F0F9F",
  version: "4.0.96"
}, {
  name: "apps",
  hex: "F003B",
  version: "1.5.54"
}, {
  name: "apps-box",
  hex: "F0D46",
  version: "3.4.93"
}, {
  name: "arch",
  hex: "F08C7",
  version: "2.3.50"
}, {
  name: "archive",
  hex: "F003C",
  version: "1.5.54"
}, {
  name: "archive-arrow-down",
  hex: "F1259",
  version: "4.7.95"
}, {
  name: "archive-arrow-down-outline",
  hex: "F125A",
  version: "4.7.95"
}, {
  name: "archive-arrow-up",
  hex: "F125B",
  version: "4.7.95"
}, {
  name: "archive-arrow-up-outline",
  hex: "F125C",
  version: "4.7.95"
}, {
  name: "archive-outline",
  hex: "F120E",
  version: "4.6.95"
}, {
  name: "arm-flex",
  hex: "F0FD7",
  version: "4.2.95"
}, {
  name: "arm-flex-outline",
  hex: "F0FD6",
  version: "4.2.95"
}, {
  name: "arrange-bring-forward",
  hex: "F003D",
  version: "1.5.54"
}, {
  name: "arrange-bring-to-front",
  hex: "F003E",
  version: "1.5.54"
}, {
  name: "arrange-send-backward",
  hex: "F003F",
  version: "1.5.54"
}, {
  name: "arrange-send-to-back",
  hex: "F0040",
  version: "1.5.54"
}, {
  name: "arrow-all",
  hex: "F0041",
  version: "1.5.54"
}, {
  name: "arrow-bottom-left",
  hex: "F0042",
  version: "1.5.54"
}, {
  name: "arrow-bottom-left-bold-outline",
  hex: "F09B7",
  version: "2.5.94"
}, {
  name: "arrow-bottom-left-thick",
  hex: "F09B8",
  version: "2.5.94"
}, {
  name: "arrow-bottom-right",
  hex: "F0043",
  version: "1.5.54"
}, {
  name: "arrow-bottom-right-bold-outline",
  hex: "F09B9",
  version: "2.5.94"
}, {
  name: "arrow-bottom-right-thick",
  hex: "F09BA",
  version: "2.5.94"
}, {
  name: "arrow-collapse",
  hex: "F0615",
  version: "1.6.50"
}, {
  name: "arrow-collapse-all",
  hex: "F0044",
  version: "1.5.54"
}, {
  name: "arrow-collapse-down",
  hex: "F0792",
  version: "2.0.46"
}, {
  name: "arrow-collapse-horizontal",
  hex: "F084C",
  version: "2.1.99"
}, {
  name: "arrow-collapse-left",
  hex: "F0793",
  version: "2.0.46"
}, {
  name: "arrow-collapse-right",
  hex: "F0794",
  version: "2.0.46"
}, {
  name: "arrow-collapse-up",
  hex: "F0795",
  version: "2.0.46"
}, {
  name: "arrow-collapse-vertical",
  hex: "F084D",
  version: "2.1.99"
}, {
  name: "arrow-decision",
  hex: "F09BB",
  version: "2.5.94"
}, {
  name: "arrow-decision-auto",
  hex: "F09BC",
  version: "2.5.94"
}, {
  name: "arrow-decision-auto-outline",
  hex: "F09BD",
  version: "2.5.94"
}, {
  name: "arrow-decision-outline",
  hex: "F09BE",
  version: "2.5.94"
}, {
  name: "arrow-down",
  hex: "F0045",
  version: "1.5.54"
}, {
  name: "arrow-down-bold",
  hex: "F072E",
  version: "1.9.32"
}, {
  name: "arrow-down-bold-box",
  hex: "F072F",
  version: "1.9.32"
}, {
  name: "arrow-down-bold-box-outline",
  hex: "F0730",
  version: "1.9.32"
}, {
  name: "arrow-down-bold-circle",
  hex: "F0047",
  version: "1.5.54"
}, {
  name: "arrow-down-bold-circle-outline",
  hex: "F0048",
  version: "1.5.54"
}, {
  name: "arrow-down-bold-hexagon-outline",
  hex: "F0049",
  version: "1.5.54"
}, {
  name: "arrow-down-bold-outline",
  hex: "F09BF",
  version: "2.5.94"
}, {
  name: "arrow-down-box",
  hex: "F06C0",
  version: "1.8.36"
}, {
  name: "arrow-down-circle",
  hex: "F0CDB",
  version: "3.3.92"
}, {
  name: "arrow-down-circle-outline",
  hex: "F0CDC",
  version: "3.3.92"
}, {
  name: "arrow-down-drop-circle",
  hex: "F004A",
  version: "1.5.54"
}, {
  name: "arrow-down-drop-circle-outline",
  hex: "F004B",
  version: "1.5.54"
}, {
  name: "arrow-down-thick",
  hex: "F0046",
  version: "1.5.54"
}, {
  name: "arrow-expand",
  hex: "F0616",
  version: "1.6.50"
}, {
  name: "arrow-expand-all",
  hex: "F004C",
  version: "1.5.54"
}, {
  name: "arrow-expand-down",
  hex: "F0796",
  version: "2.0.46"
}, {
  name: "arrow-expand-horizontal",
  hex: "F084E",
  version: "2.1.99"
}, {
  name: "arrow-expand-left",
  hex: "F0797",
  version: "2.0.46"
}, {
  name: "arrow-expand-right",
  hex: "F0798",
  version: "2.0.46"
}, {
  name: "arrow-expand-up",
  hex: "F0799",
  version: "2.0.46"
}, {
  name: "arrow-expand-vertical",
  hex: "F084F",
  version: "2.1.99"
}, {
  name: "arrow-horizontal-lock",
  hex: "F115B",
  version: "4.4.95"
}, {
  name: "arrow-left",
  hex: "F004D",
  version: "1.5.54"
}, {
  name: "arrow-left-bold",
  hex: "F0731",
  version: "1.9.32"
}, {
  name: "arrow-left-bold-box",
  hex: "F0732",
  version: "1.9.32"
}, {
  name: "arrow-left-bold-box-outline",
  hex: "F0733",
  version: "1.9.32"
}, {
  name: "arrow-left-bold-circle",
  hex: "F004F",
  version: "1.5.54"
}, {
  name: "arrow-left-bold-circle-outline",
  hex: "F0050",
  version: "1.5.54"
}, {
  name: "arrow-left-bold-hexagon-outline",
  hex: "F0051",
  version: "1.5.54"
}, {
  name: "arrow-left-bold-outline",
  hex: "F09C0",
  version: "2.5.94"
}, {
  name: "arrow-left-box",
  hex: "F06C1",
  version: "1.8.36"
}, {
  name: "arrow-left-circle",
  hex: "F0CDD",
  version: "3.3.92"
}, {
  name: "arrow-left-circle-outline",
  hex: "F0CDE",
  version: "3.3.92"
}, {
  name: "arrow-left-drop-circle",
  hex: "F0052",
  version: "1.5.54"
}, {
  name: "arrow-left-drop-circle-outline",
  hex: "F0053",
  version: "1.5.54"
}, {
  name: "arrow-left-right",
  hex: "F0E73",
  version: "3.7.94"
}, {
  name: "arrow-left-right-bold",
  hex: "F0E74",
  version: "3.7.94"
}, {
  name: "arrow-left-right-bold-outline",
  hex: "F09C1",
  version: "2.5.94"
}, {
  name: "arrow-left-thick",
  hex: "F004E",
  version: "1.5.54"
}, {
  name: "arrow-right",
  hex: "F0054",
  version: "1.5.54"
}, {
  name: "arrow-right-bold",
  hex: "F0734",
  version: "1.9.32"
}, {
  name: "arrow-right-bold-box",
  hex: "F0735",
  version: "1.9.32"
}, {
  name: "arrow-right-bold-box-outline",
  hex: "F0736",
  version: "1.9.32"
}, {
  name: "arrow-right-bold-circle",
  hex: "F0056",
  version: "1.5.54"
}, {
  name: "arrow-right-bold-circle-outline",
  hex: "F0057",
  version: "1.5.54"
}, {
  name: "arrow-right-bold-hexagon-outline",
  hex: "F0058",
  version: "1.5.54"
}, {
  name: "arrow-right-bold-outline",
  hex: "F09C2",
  version: "2.5.94"
}, {
  name: "arrow-right-box",
  hex: "F06C2",
  version: "1.8.36"
}, {
  name: "arrow-right-circle",
  hex: "F0CDF",
  version: "3.3.92"
}, {
  name: "arrow-right-circle-outline",
  hex: "F0CE0",
  version: "3.3.92"
}, {
  name: "arrow-right-drop-circle",
  hex: "F0059",
  version: "1.5.54"
}, {
  name: "arrow-right-drop-circle-outline",
  hex: "F005A",
  version: "1.5.54"
}, {
  name: "arrow-right-thick",
  hex: "F0055",
  version: "1.5.54"
}, {
  name: "arrow-split-horizontal",
  hex: "F093B",
  version: "2.4.85"
}, {
  name: "arrow-split-vertical",
  hex: "F093C",
  version: "2.4.85"
}, {
  name: "arrow-top-left",
  hex: "F005B",
  version: "1.5.54"
}, {
  name: "arrow-top-left-bold-outline",
  hex: "F09C3",
  version: "2.5.94"
}, {
  name: "arrow-top-left-bottom-right",
  hex: "F0E75",
  version: "3.7.94"
}, {
  name: "arrow-top-left-bottom-right-bold",
  hex: "F0E76",
  version: "3.7.94"
}, {
  name: "arrow-top-left-thick",
  hex: "F09C4",
  version: "2.5.94"
}, {
  name: "arrow-top-right",
  hex: "F005C",
  version: "1.5.54"
}, {
  name: "arrow-top-right-bold-outline",
  hex: "F09C5",
  version: "2.5.94"
}, {
  name: "arrow-top-right-bottom-left",
  hex: "F0E77",
  version: "3.7.94"
}, {
  name: "arrow-top-right-bottom-left-bold",
  hex: "F0E78",
  version: "3.7.94"
}, {
  name: "arrow-top-right-thick",
  hex: "F09C6",
  version: "2.5.94"
}, {
  name: "arrow-up",
  hex: "F005D",
  version: "1.5.54"
}, {
  name: "arrow-up-bold",
  hex: "F0737",
  version: "1.9.32"
}, {
  name: "arrow-up-bold-box",
  hex: "F0738",
  version: "1.9.32"
}, {
  name: "arrow-up-bold-box-outline",
  hex: "F0739",
  version: "1.9.32"
}, {
  name: "arrow-up-bold-circle",
  hex: "F005F",
  version: "1.5.54"
}, {
  name: "arrow-up-bold-circle-outline",
  hex: "F0060",
  version: "1.5.54"
}, {
  name: "arrow-up-bold-hexagon-outline",
  hex: "F0061",
  version: "1.5.54"
}, {
  name: "arrow-up-bold-outline",
  hex: "F09C7",
  version: "2.5.94"
}, {
  name: "arrow-up-box",
  hex: "F06C3",
  version: "1.8.36"
}, {
  name: "arrow-up-circle",
  hex: "F0CE1",
  version: "3.3.92"
}, {
  name: "arrow-up-circle-outline",
  hex: "F0CE2",
  version: "3.3.92"
}, {
  name: "arrow-up-down",
  hex: "F0E79",
  version: "3.7.94"
}, {
  name: "arrow-up-down-bold",
  hex: "F0E7A",
  version: "3.7.94"
}, {
  name: "arrow-up-down-bold-outline",
  hex: "F09C8",
  version: "2.5.94"
}, {
  name: "arrow-up-drop-circle",
  hex: "F0062",
  version: "1.5.54"
}, {
  name: "arrow-up-drop-circle-outline",
  hex: "F0063",
  version: "1.5.54"
}, {
  name: "arrow-up-thick",
  hex: "F005E",
  version: "1.5.54"
}, {
  name: "arrow-vertical-lock",
  hex: "F115C",
  version: "4.4.95"
}, {
  name: "artstation",
  hex: "F0B5B",
  version: "3.0.39"
}, {
  name: "aspect-ratio",
  hex: "F0A24",
  version: "2.6.95"
}, {
  name: "assistant",
  hex: "F0064",
  version: "1.5.54"
}, {
  name: "asterisk",
  hex: "F06C4",
  version: "1.8.36"
}, {
  name: "at",
  hex: "F0065",
  version: "1.5.54"
}, {
  name: "atlassian",
  hex: "F0804",
  version: "2.1.19"
}, {
  name: "atm",
  hex: "F0D47",
  version: "3.4.93"
}, {
  name: "atom",
  hex: "F0768",
  version: "1.9.32"
}, {
  name: "atom-variant",
  hex: "F0E7B",
  version: "3.7.94"
}, {
  name: "attachment",
  hex: "F0066",
  version: "1.5.54"
}, {
  name: "audio-video",
  hex: "F093D",
  version: "2.4.85"
}, {
  name: "audio-video-off",
  hex: "F11B6",
  version: "4.5.95"
}, {
  name: "augmented-reality",
  hex: "F0850",
  version: "2.1.99"
}, {
  name: "auto-download",
  hex: "F137E",
  version: "4.9.95"
}, {
  name: "auto-fix",
  hex: "F0068",
  version: "1.5.54"
}, {
  name: "auto-upload",
  hex: "F0069",
  version: "1.5.54"
}, {
  name: "autorenew",
  hex: "F006A",
  version: "1.5.54"
}, {
  name: "av-timer",
  hex: "F006B",
  version: "1.5.54"
}, {
  name: "aws",
  hex: "F0E0F",
  version: "3.6.95"
}, {
  name: "axe",
  hex: "F08C8",
  version: "2.3.50"
}, {
  name: "axis",
  hex: "F0D48",
  version: "3.4.93"
}, {
  name: "axis-arrow",
  hex: "F0D49",
  version: "3.4.93"
}, {
  name: "axis-arrow-lock",
  hex: "F0D4A",
  version: "3.4.93"
}, {
  name: "axis-lock",
  hex: "F0D4B",
  version: "3.4.93"
}, {
  name: "axis-x-arrow",
  hex: "F0D4C",
  version: "3.4.93"
}, {
  name: "axis-x-arrow-lock",
  hex: "F0D4D",
  version: "3.4.93"
}, {
  name: "axis-x-rotate-clockwise",
  hex: "F0D4E",
  version: "3.4.93"
}, {
  name: "axis-x-rotate-counterclockwise",
  hex: "F0D4F",
  version: "3.4.93"
}, {
  name: "axis-x-y-arrow-lock",
  hex: "F0D50",
  version: "3.4.93"
}, {
  name: "axis-y-arrow",
  hex: "F0D51",
  version: "3.4.93"
}, {
  name: "axis-y-arrow-lock",
  hex: "F0D52",
  version: "3.4.93"
}, {
  name: "axis-y-rotate-clockwise",
  hex: "F0D53",
  version: "3.4.93"
}, {
  name: "axis-y-rotate-counterclockwise",
  hex: "F0D54",
  version: "3.4.93"
}, {
  name: "axis-z-arrow",
  hex: "F0D55",
  version: "3.4.93"
}, {
  name: "axis-z-arrow-lock",
  hex: "F0D56",
  version: "3.4.93"
}, {
  name: "axis-z-rotate-clockwise",
  hex: "F0D57",
  version: "3.4.93"
}, {
  name: "axis-z-rotate-counterclockwise",
  hex: "F0D58",
  version: "3.4.93"
}, {
  name: "babel",
  hex: "F0A25",
  version: "2.6.95"
}, {
  name: "baby",
  hex: "F006C",
  version: "1.5.54"
}, {
  name: "baby-bottle",
  hex: "F0F39",
  version: "3.9.97"
}, {
  name: "baby-bottle-outline",
  hex: "F0F3A",
  version: "3.9.97"
}, {
  name: "baby-carriage",
  hex: "F068F",
  version: "1.7.12"
}, {
  name: "baby-carriage-off",
  hex: "F0FA0",
  version: "4.0.96"
}, {
  name: "baby-face",
  hex: "F0E7C",
  version: "3.7.94"
}, {
  name: "baby-face-outline",
  hex: "F0E7D",
  version: "3.7.94"
}, {
  name: "backburger",
  hex: "F006D",
  version: "1.5.54"
}, {
  name: "backspace",
  hex: "F006E",
  version: "1.5.54"
}, {
  name: "backspace-outline",
  hex: "F0B5C",
  version: "3.0.39"
}, {
  name: "backspace-reverse",
  hex: "F0E7E",
  version: "3.7.94"
}, {
  name: "backspace-reverse-outline",
  hex: "F0E7F",
  version: "3.7.94"
}, {
  name: "backup-restore",
  hex: "F006F",
  version: "1.5.54"
}, {
  name: "bacteria",
  hex: "F0ED5",
  version: "3.8.95"
}, {
  name: "bacteria-outline",
  hex: "F0ED6",
  version: "3.8.95"
}, {
  name: "badge-account",
  hex: "F0DA7",
  version: "3.5.94"
}, {
  name: "badge-account-alert",
  hex: "F0DA8",
  version: "3.5.94"
}, {
  name: "badge-account-alert-outline",
  hex: "F0DA9",
  version: "3.5.94"
}, {
  name: "badge-account-horizontal",
  hex: "F0E0D",
  version: "3.6.95"
}, {
  name: "badge-account-horizontal-outline",
  hex: "F0E0E",
  version: "3.6.95"
}, {
  name: "badge-account-outline",
  hex: "F0DAA",
  version: "3.5.94"
}, {
  name: "badminton",
  hex: "F0851",
  version: "2.1.99"
}, {
  name: "bag-carry-on",
  hex: "F0F3B",
  version: "3.9.97"
}, {
  name: "bag-carry-on-check",
  hex: "F0D65",
  version: "3.4.93"
}, {
  name: "bag-carry-on-off",
  hex: "F0F3C",
  version: "3.9.97"
}, {
  name: "bag-checked",
  hex: "F0F3D",
  version: "3.9.97"
}, {
  name: "bag-personal",
  hex: "F0E10",
  version: "3.6.95"
}, {
  name: "bag-personal-off",
  hex: "F0E11",
  version: "3.6.95"
}, {
  name: "bag-personal-off-outline",
  hex: "F0E12",
  version: "3.6.95"
}, {
  name: "bag-personal-outline",
  hex: "F0E13",
  version: "3.6.95"
}, {
  name: "baguette",
  hex: "F0F3E",
  version: "3.9.97"
}, {
  name: "balloon",
  hex: "F0A26",
  version: "2.6.95"
}, {
  name: "ballot",
  hex: "F09C9",
  version: "2.5.94"
}, {
  name: "ballot-outline",
  hex: "F09CA",
  version: "2.5.94"
}, {
  name: "ballot-recount",
  hex: "F0C39",
  version: "3.2.89"
}, {
  name: "ballot-recount-outline",
  hex: "F0C3A",
  version: "3.2.89"
}, {
  name: "bandage",
  hex: "F0DAF",
  version: "3.5.94"
}, {
  name: "bandcamp",
  hex: "F0675",
  version: "1.7.12"
}, {
  name: "bank",
  hex: "F0070",
  version: "1.5.54"
}, {
  name: "bank-minus",
  hex: "F0DB0",
  version: "3.5.94"
}, {
  name: "bank-outline",
  hex: "F0E80",
  version: "3.7.94"
}, {
  name: "bank-plus",
  hex: "F0DB1",
  version: "3.5.94"
}, {
  name: "bank-remove",
  hex: "F0DB2",
  version: "3.5.94"
}, {
  name: "bank-transfer",
  hex: "F0A27",
  version: "2.6.95"
}, {
  name: "bank-transfer-in",
  hex: "F0A28",
  version: "2.6.95"
}, {
  name: "bank-transfer-out",
  hex: "F0A29",
  version: "2.6.95"
}, {
  name: "barcode",
  hex: "F0071",
  version: "1.5.54"
}, {
  name: "barcode-off",
  hex: "F1236",
  version: "4.6.95"
}, {
  name: "barcode-scan",
  hex: "F0072",
  version: "1.5.54"
}, {
  name: "barley",
  hex: "F0073",
  version: "1.5.54"
}, {
  name: "barley-off",
  hex: "F0B5D",
  version: "3.0.39"
}, {
  name: "barn",
  hex: "F0B5E",
  version: "3.0.39"
}, {
  name: "barrel",
  hex: "F0074",
  version: "1.5.54"
}, {
  name: "baseball",
  hex: "F0852",
  version: "2.1.99"
}, {
  name: "baseball-bat",
  hex: "F0853",
  version: "2.1.99"
}, {
  name: "bash",
  hex: "F1183",
  version: "4.4.95"
}, {
  name: "basket",
  hex: "F0076",
  version: "1.5.54"
}, {
  name: "basket-fill",
  hex: "F0077",
  version: "1.5.54"
}, {
  name: "basket-outline",
  hex: "F1181",
  version: "4.4.95"
}, {
  name: "basket-unfill",
  hex: "F0078",
  version: "1.5.54"
}, {
  name: "basketball",
  hex: "F0806",
  version: "2.1.19"
}, {
  name: "basketball-hoop",
  hex: "F0C3B",
  version: "3.2.89"
}, {
  name: "basketball-hoop-outline",
  hex: "F0C3C",
  version: "3.2.89"
}, {
  name: "bat",
  hex: "F0B5F",
  version: "3.0.39"
}, {
  name: "battery",
  hex: "F0079",
  version: "1.5.54"
}, {
  name: "battery-10",
  hex: "F007A",
  version: "1.5.54"
}, {
  name: "battery-10-bluetooth",
  hex: "F093E",
  version: "2.4.85"
}, {
  name: "battery-20",
  hex: "F007B",
  version: "1.5.54"
}, {
  name: "battery-20-bluetooth",
  hex: "F093F",
  version: "2.4.85"
}, {
  name: "battery-30",
  hex: "F007C",
  version: "1.5.54"
}, {
  name: "battery-30-bluetooth",
  hex: "F0940",
  version: "2.4.85"
}, {
  name: "battery-40",
  hex: "F007D",
  version: "1.5.54"
}, {
  name: "battery-40-bluetooth",
  hex: "F0941",
  version: "2.4.85"
}, {
  name: "battery-50",
  hex: "F007E",
  version: "1.5.54"
}, {
  name: "battery-50-bluetooth",
  hex: "F0942",
  version: "2.4.85"
}, {
  name: "battery-60",
  hex: "F007F",
  version: "1.5.54"
}, {
  name: "battery-60-bluetooth",
  hex: "F0943",
  version: "2.4.85"
}, {
  name: "battery-70",
  hex: "F0080",
  version: "1.5.54"
}, {
  name: "battery-70-bluetooth",
  hex: "F0944",
  version: "2.4.85"
}, {
  name: "battery-80",
  hex: "F0081",
  version: "1.5.54"
}, {
  name: "battery-80-bluetooth",
  hex: "F0945",
  version: "2.4.85"
}, {
  name: "battery-90",
  hex: "F0082",
  version: "1.5.54"
}, {
  name: "battery-90-bluetooth",
  hex: "F0946",
  version: "2.4.85"
}, {
  name: "battery-alert",
  hex: "F0083",
  version: "1.5.54"
}, {
  name: "battery-alert-bluetooth",
  hex: "F0947",
  version: "2.4.85"
}, {
  name: "battery-alert-variant",
  hex: "F10CC",
  version: "4.3.95"
}, {
  name: "battery-alert-variant-outline",
  hex: "F10CD",
  version: "4.3.95"
}, {
  name: "battery-bluetooth",
  hex: "F0948",
  version: "2.4.85"
}, {
  name: "battery-bluetooth-variant",
  hex: "F0949",
  version: "2.4.85"
}, {
  name: "battery-charging",
  hex: "F0084",
  version: "1.5.54"
}, {
  name: "battery-charging-10",
  hex: "F089C",
  version: "2.2.43"
}, {
  name: "battery-charging-100",
  hex: "F0085",
  version: "1.5.54"
}, {
  name: "battery-charging-20",
  hex: "F0086",
  version: "1.5.54"
}, {
  name: "battery-charging-30",
  hex: "F0087",
  version: "1.5.54"
}, {
  name: "battery-charging-40",
  hex: "F0088",
  version: "1.5.54"
}, {
  name: "battery-charging-50",
  hex: "F089D",
  version: "2.2.43"
}, {
  name: "battery-charging-60",
  hex: "F0089",
  version: "1.5.54"
}, {
  name: "battery-charging-70",
  hex: "F089E",
  version: "2.2.43"
}, {
  name: "battery-charging-80",
  hex: "F008A",
  version: "1.5.54"
}, {
  name: "battery-charging-90",
  hex: "F008B",
  version: "1.5.54"
}, {
  name: "battery-charging-high",
  hex: "F12A6",
  version: "4.7.95"
}, {
  name: "battery-charging-low",
  hex: "F12A4",
  version: "4.7.95"
}, {
  name: "battery-charging-medium",
  hex: "F12A5",
  version: "4.7.95"
}, {
  name: "battery-charging-outline",
  hex: "F089F",
  version: "2.2.43"
}, {
  name: "battery-charging-wireless",
  hex: "F0807",
  version: "2.1.19"
}, {
  name: "battery-charging-wireless-10",
  hex: "F0808",
  version: "2.1.19"
}, {
  name: "battery-charging-wireless-20",
  hex: "F0809",
  version: "2.1.19"
}, {
  name: "battery-charging-wireless-30",
  hex: "F080A",
  version: "2.1.19"
}, {
  name: "battery-charging-wireless-40",
  hex: "F080B",
  version: "2.1.19"
}, {
  name: "battery-charging-wireless-50",
  hex: "F080C",
  version: "2.1.19"
}, {
  name: "battery-charging-wireless-60",
  hex: "F080D",
  version: "2.1.19"
}, {
  name: "battery-charging-wireless-70",
  hex: "F080E",
  version: "2.1.19"
}, {
  name: "battery-charging-wireless-80",
  hex: "F080F",
  version: "2.1.19"
}, {
  name: "battery-charging-wireless-90",
  hex: "F0810",
  version: "2.1.19"
}, {
  name: "battery-charging-wireless-alert",
  hex: "F0811",
  version: "2.1.19"
}, {
  name: "battery-charging-wireless-outline",
  hex: "F0812",
  version: "2.1.19"
}, {
  name: "battery-heart",
  hex: "F120F",
  version: "4.6.95"
}, {
  name: "battery-heart-outline",
  hex: "F1210",
  version: "4.6.95"
}, {
  name: "battery-heart-variant",
  hex: "F1211",
  version: "4.6.95"
}, {
  name: "battery-high",
  hex: "F12A3",
  version: "4.7.95"
}, {
  name: "battery-low",
  hex: "F12A1",
  version: "4.7.95"
}, {
  name: "battery-medium",
  hex: "F12A2",
  version: "4.7.95"
}, {
  name: "battery-minus",
  hex: "F008C",
  version: "1.5.54"
}, {
  name: "battery-negative",
  hex: "F008D",
  version: "1.5.54"
}, {
  name: "battery-off",
  hex: "F125D",
  version: "4.7.95"
}, {
  name: "battery-off-outline",
  hex: "F125E",
  version: "4.7.95"
}, {
  name: "battery-outline",
  hex: "F008E",
  version: "1.5.54"
}, {
  name: "battery-plus",
  hex: "F008F",
  version: "1.5.54"
}, {
  name: "battery-positive",
  hex: "F0090",
  version: "1.5.54"
}, {
  name: "battery-unknown",
  hex: "F0091",
  version: "1.5.54"
}, {
  name: "battery-unknown-bluetooth",
  hex: "F094A",
  version: "2.4.85"
}, {
  name: "battlenet",
  hex: "F0B60",
  version: "3.0.39"
}, {
  name: "beach",
  hex: "F0092",
  version: "1.5.54"
}, {
  name: "beaker",
  hex: "F0CEA",
  version: "3.3.92"
}, {
  name: "beaker-alert",
  hex: "F1229",
  version: "4.6.95"
}, {
  name: "beaker-alert-outline",
  hex: "F122A",
  version: "4.6.95"
}, {
  name: "beaker-check",
  hex: "F122B",
  version: "4.6.95"
}, {
  name: "beaker-check-outline",
  hex: "F122C",
  version: "4.6.95"
}, {
  name: "beaker-minus",
  hex: "F122D",
  version: "4.6.95"
}, {
  name: "beaker-minus-outline",
  hex: "F122E",
  version: "4.6.95"
}, {
  name: "beaker-outline",
  hex: "F0690",
  version: "1.7.12"
}, {
  name: "beaker-plus",
  hex: "F122F",
  version: "4.6.95"
}, {
  name: "beaker-plus-outline",
  hex: "F1230",
  version: "4.6.95"
}, {
  name: "beaker-question",
  hex: "F1231",
  version: "4.6.95"
}, {
  name: "beaker-question-outline",
  hex: "F1232",
  version: "4.6.95"
}, {
  name: "beaker-remove",
  hex: "F1233",
  version: "4.6.95"
}, {
  name: "beaker-remove-outline",
  hex: "F1234",
  version: "4.6.95"
}, {
  name: "bed",
  hex: "F02E3",
  version: "1.5.54"
}, {
  name: "bed-double",
  hex: "F0FD4",
  version: "4.2.95"
}, {
  name: "bed-double-outline",
  hex: "F0FD3",
  version: "4.2.95"
}, {
  name: "bed-empty",
  hex: "F08A0",
  version: "2.2.43"
}, {
  name: "bed-king",
  hex: "F0FD2",
  version: "4.2.95"
}, {
  name: "bed-king-outline",
  hex: "F0FD1",
  version: "4.2.95"
}, {
  name: "bed-outline",
  hex: "F0099",
  version: "1.5.54"
}, {
  name: "bed-queen",
  hex: "F0FD0",
  version: "4.2.95"
}, {
  name: "bed-queen-outline",
  hex: "F0FDB",
  version: "4.2.95"
}, {
  name: "bed-single",
  hex: "F106D",
  version: "4.2.95"
}, {
  name: "bed-single-outline",
  hex: "F106E",
  version: "4.2.95"
}, {
  name: "bee",
  hex: "F0FA1",
  version: "4.0.96"
}, {
  name: "bee-flower",
  hex: "F0FA2",
  version: "4.0.96"
}, {
  name: "beehive-outline",
  hex: "F10CE",
  version: "4.3.95"
}, {
  name: "beer",
  hex: "F0098",
  version: "1.5.54"
}, {
  name: "beer-outline",
  hex: "F130C",
  version: "4.8.95"
}, {
  name: "bell",
  hex: "F009A",
  version: "1.5.54"
}, {
  name: "bell-alert",
  hex: "F0D59",
  version: "3.4.93"
}, {
  name: "bell-alert-outline",
  hex: "F0E81",
  version: "3.7.94"
}, {
  name: "bell-check",
  hex: "F11E5",
  version: "4.5.95"
}, {
  name: "bell-check-outline",
  hex: "F11E6",
  version: "4.5.95"
}, {
  name: "bell-circle",
  hex: "F0D5A",
  version: "3.4.93"
}, {
  name: "bell-circle-outline",
  hex: "F0D5B",
  version: "3.4.93"
}, {
  name: "bell-off",
  hex: "F009B",
  version: "1.5.54"
}, {
  name: "bell-off-outline",
  hex: "F0A91",
  version: "2.7.94"
}, {
  name: "bell-outline",
  hex: "F009C",
  version: "1.5.54"
}, {
  name: "bell-plus",
  hex: "F009D",
  version: "1.5.54"
}, {
  name: "bell-plus-outline",
  hex: "F0A92",
  version: "2.7.94"
}, {
  name: "bell-ring",
  hex: "F009E",
  version: "1.5.54"
}, {
  name: "bell-ring-outline",
  hex: "F009F",
  version: "1.5.54"
}, {
  name: "bell-sleep",
  hex: "F00A0",
  version: "1.5.54"
}, {
  name: "bell-sleep-outline",
  hex: "F0A93",
  version: "2.7.94"
}, {
  name: "beta",
  hex: "F00A1",
  version: "1.5.54"
}, {
  name: "betamax",
  hex: "F09CB",
  version: "2.5.94"
}, {
  name: "biathlon",
  hex: "F0E14",
  version: "3.6.95"
}, {
  name: "bicycle",
  hex: "F109C",
  version: "4.2.95"
}, {
  name: "bicycle-basket",
  hex: "F1235",
  version: "4.6.95"
}, {
  name: "bike",
  hex: "F00A3",
  version: "1.5.54"
}, {
  name: "bike-fast",
  hex: "F111F",
  version: "4.3.95"
}, {
  name: "billboard",
  hex: "F1010",
  version: "4.1.95"
}, {
  name: "billiards",
  hex: "F0B61",
  version: "3.0.39"
}, {
  name: "billiards-rack",
  hex: "F0B62",
  version: "3.0.39"
}, {
  name: "binoculars",
  hex: "F00A5",
  version: "1.5.54"
}, {
  name: "bio",
  hex: "F00A6",
  version: "1.5.54"
}, {
  name: "biohazard",
  hex: "F00A7",
  version: "1.5.54"
}, {
  name: "bitbucket",
  hex: "F00A8",
  version: "1.5.54"
}, {
  name: "bitcoin",
  hex: "F0813",
  version: "2.1.19"
}, {
  name: "black-mesa",
  hex: "F00A9",
  version: "1.5.54"
}, {
  name: "blender",
  hex: "F0CEB",
  version: "3.3.92"
}, {
  name: "blender-software",
  hex: "F00AB",
  version: "1.5.54"
}, {
  name: "blinds",
  hex: "F00AC",
  version: "1.5.54"
}, {
  name: "blinds-open",
  hex: "F1011",
  version: "4.1.95"
}, {
  name: "block-helper",
  hex: "F00AD",
  version: "1.5.54"
}, {
  name: "blogger",
  hex: "F00AE",
  version: "1.5.54"
}, {
  name: "blood-bag",
  hex: "F0CEC",
  version: "3.3.92"
}, {
  name: "bluetooth",
  hex: "F00AF",
  version: "1.5.54"
}, {
  name: "bluetooth-audio",
  hex: "F00B0",
  version: "1.5.54"
}, {
  name: "bluetooth-connect",
  hex: "F00B1",
  version: "1.5.54"
}, {
  name: "bluetooth-off",
  hex: "F00B2",
  version: "1.5.54"
}, {
  name: "bluetooth-settings",
  hex: "F00B3",
  version: "1.5.54"
}, {
  name: "bluetooth-transfer",
  hex: "F00B4",
  version: "1.5.54"
}, {
  name: "blur",
  hex: "F00B5",
  version: "1.5.54"
}, {
  name: "blur-linear",
  hex: "F00B6",
  version: "1.5.54"
}, {
  name: "blur-off",
  hex: "F00B7",
  version: "1.5.54"
}, {
  name: "blur-radial",
  hex: "F00B8",
  version: "1.5.54"
}, {
  name: "bolnisi-cross",
  hex: "F0CED",
  version: "3.3.92"
}, {
  name: "bolt",
  hex: "F0DB3",
  version: "3.5.94"
}, {
  name: "bomb",
  hex: "F0691",
  version: "1.7.12"
}, {
  name: "bomb-off",
  hex: "F06C5",
  version: "1.8.36"
}, {
  name: "bone",
  hex: "F00B9",
  version: "1.5.54"
}, {
  name: "book",
  hex: "F00BA",
  version: "1.5.54"
}, {
  name: "book-account",
  hex: "F13AD",
  version: "5.0.45"
}, {
  name: "book-account-outline",
  hex: "F13AE",
  version: "5.0.45"
}, {
  name: "book-alphabet",
  hex: "F061D",
  version: "1.6.50"
}, {
  name: "book-cross",
  hex: "F00A2",
  version: "1.5.54"
}, {
  name: "book-information-variant",
  hex: "F106F",
  version: "4.2.95"
}, {
  name: "book-lock",
  hex: "F079A",
  version: "2.0.46"
}, {
  name: "book-lock-open",
  hex: "F079B",
  version: "2.0.46"
}, {
  name: "book-minus",
  hex: "F05D9",
  version: "1.5.54"
}, {
  name: "book-minus-multiple",
  hex: "F0A94",
  version: "2.7.94"
}, {
  name: "book-minus-multiple-outline",
  hex: "F090B",
  version: "2.3.50"
}, {
  name: "book-multiple",
  hex: "F00BB",
  version: "1.5.54"
}, {
  name: "book-multiple-outline",
  hex: "F0436",
  version: "1.5.54"
}, {
  name: "book-music",
  hex: "F0067",
  version: "1.5.54"
}, {
  name: "book-open",
  hex: "F00BD",
  version: "1.5.54"
}, {
  name: "book-open-outline",
  hex: "F0B63",
  version: "3.0.39"
}, {
  name: "book-open-page-variant",
  hex: "F05DA",
  version: "1.5.54"
}, {
  name: "book-open-variant",
  hex: "F00BE",
  version: "1.5.54"
}, {
  name: "book-outline",
  hex: "F0B64",
  version: "3.0.39"
}, {
  name: "book-play",
  hex: "F0E82",
  version: "3.7.94"
}, {
  name: "book-play-outline",
  hex: "F0E83",
  version: "3.7.94"
}, {
  name: "book-plus",
  hex: "F05DB",
  version: "1.5.54"
}, {
  name: "book-plus-multiple",
  hex: "F0A95",
  version: "2.7.94"
}, {
  name: "book-plus-multiple-outline",
  hex: "F0ADE",
  version: "2.7.94"
}, {
  name: "book-remove",
  hex: "F0A97",
  version: "2.7.94"
}, {
  name: "book-remove-multiple",
  hex: "F0A96",
  version: "2.7.94"
}, {
  name: "book-remove-multiple-outline",
  hex: "F04CA",
  version: "1.5.54"
}, {
  name: "book-search",
  hex: "F0E84",
  version: "3.7.94"
}, {
  name: "book-search-outline",
  hex: "F0E85",
  version: "3.7.94"
}, {
  name: "book-variant",
  hex: "F00BF",
  version: "1.5.54"
}, {
  name: "book-variant-multiple",
  hex: "F00BC",
  version: "1.5.54"
}, {
  name: "bookmark",
  hex: "F00C0",
  version: "1.5.54"
}, {
  name: "bookmark-check",
  hex: "F00C1",
  version: "1.5.54"
}, {
  name: "bookmark-check-outline",
  hex: "F137B",
  version: "4.9.95"
}, {
  name: "bookmark-minus",
  hex: "F09CC",
  version: "2.5.94"
}, {
  name: "bookmark-minus-outline",
  hex: "F09CD",
  version: "2.5.94"
}, {
  name: "bookmark-multiple",
  hex: "F0E15",
  version: "3.6.95"
}, {
  name: "bookmark-multiple-outline",
  hex: "F0E16",
  version: "3.6.95"
}, {
  name: "bookmark-music",
  hex: "F00C2",
  version: "1.5.54"
}, {
  name: "bookmark-music-outline",
  hex: "F1379",
  version: "4.9.95"
}, {
  name: "bookmark-off",
  hex: "F09CE",
  version: "2.5.94"
}, {
  name: "bookmark-off-outline",
  hex: "F09CF",
  version: "2.5.94"
}, {
  name: "bookmark-outline",
  hex: "F00C3",
  version: "1.5.54"
}, {
  name: "bookmark-plus",
  hex: "F00C5",
  version: "1.5.54"
}, {
  name: "bookmark-plus-outline",
  hex: "F00C4",
  version: "1.5.54"
}, {
  name: "bookmark-remove",
  hex: "F00C6",
  version: "1.5.54"
}, {
  name: "bookmark-remove-outline",
  hex: "F137A",
  version: "4.9.95"
}, {
  name: "bookshelf",
  hex: "F125F",
  version: "4.7.95"
}, {
  name: "boom-gate",
  hex: "F0E86",
  version: "3.7.94"
}, {
  name: "boom-gate-alert",
  hex: "F0E87",
  version: "3.7.94"
}, {
  name: "boom-gate-alert-outline",
  hex: "F0E88",
  version: "3.7.94"
}, {
  name: "boom-gate-down",
  hex: "F0E89",
  version: "3.7.94"
}, {
  name: "boom-gate-down-outline",
  hex: "F0E8A",
  version: "3.7.94"
}, {
  name: "boom-gate-outline",
  hex: "F0E8B",
  version: "3.7.94"
}, {
  name: "boom-gate-up",
  hex: "F0E8C",
  version: "3.7.94"
}, {
  name: "boom-gate-up-outline",
  hex: "F0E8D",
  version: "3.7.94"
}, {
  name: "boombox",
  hex: "F05DC",
  version: "1.5.54"
}, {
  name: "boomerang",
  hex: "F10CF",
  version: "4.3.95"
}, {
  name: "bootstrap",
  hex: "F06C6",
  version: "1.8.36"
}, {
  name: "border-all",
  hex: "F00C7",
  version: "1.5.54"
}, {
  name: "border-all-variant",
  hex: "F08A1",
  version: "2.2.43"
}, {
  name: "border-bottom",
  hex: "F00C8",
  version: "1.5.54"
}, {
  name: "border-bottom-variant",
  hex: "F08A2",
  version: "2.2.43"
}, {
  name: "border-color",
  hex: "F00C9",
  version: "1.5.54"
}, {
  name: "border-horizontal",
  hex: "F00CA",
  version: "1.5.54"
}, {
  name: "border-inside",
  hex: "F00CB",
  version: "1.5.54"
}, {
  name: "border-left",
  hex: "F00CC",
  version: "1.5.54"
}, {
  name: "border-left-variant",
  hex: "F08A3",
  version: "2.2.43"
}, {
  name: "border-none",
  hex: "F00CD",
  version: "1.5.54"
}, {
  name: "border-none-variant",
  hex: "F08A4",
  version: "2.2.43"
}, {
  name: "border-outside",
  hex: "F00CE",
  version: "1.5.54"
}, {
  name: "border-right",
  hex: "F00CF",
  version: "1.5.54"
}, {
  name: "border-right-variant",
  hex: "F08A5",
  version: "2.2.43"
}, {
  name: "border-style",
  hex: "F00D0",
  version: "1.5.54"
}, {
  name: "border-top",
  hex: "F00D1",
  version: "1.5.54"
}, {
  name: "border-top-variant",
  hex: "F08A6",
  version: "2.2.43"
}, {
  name: "border-vertical",
  hex: "F00D2",
  version: "1.5.54"
}, {
  name: "bottle-soda",
  hex: "F1070",
  version: "4.2.95"
}, {
  name: "bottle-soda-classic",
  hex: "F1071",
  version: "4.2.95"
}, {
  name: "bottle-soda-classic-outline",
  hex: "F1363",
  version: "4.9.95"
}, {
  name: "bottle-soda-outline",
  hex: "F1072",
  version: "4.2.95"
}, {
  name: "bottle-tonic",
  hex: "F112E",
  version: "4.4.95"
}, {
  name: "bottle-tonic-outline",
  hex: "F112F",
  version: "4.4.95"
}, {
  name: "bottle-tonic-plus",
  hex: "F1130",
  version: "4.4.95"
}, {
  name: "bottle-tonic-plus-outline",
  hex: "F1131",
  version: "4.4.95"
}, {
  name: "bottle-tonic-skull",
  hex: "F1132",
  version: "4.4.95"
}, {
  name: "bottle-tonic-skull-outline",
  hex: "F1133",
  version: "4.4.95"
}, {
  name: "bottle-wine",
  hex: "F0854",
  version: "2.1.99"
}, {
  name: "bottle-wine-outline",
  hex: "F1310",
  version: "4.8.95"
}, {
  name: "bow-tie",
  hex: "F0678",
  version: "1.7.12"
}, {
  name: "bowl",
  hex: "F028E",
  version: "1.5.54"
}, {
  name: "bowl-mix",
  hex: "F0617",
  version: "1.6.50"
}, {
  name: "bowl-mix-outline",
  hex: "F02E4",
  version: "1.5.54"
}, {
  name: "bowl-outline",
  hex: "F02A9",
  version: "1.5.54"
}, {
  name: "bowling",
  hex: "F00D3",
  version: "1.5.54"
}, {
  name: "box",
  hex: "F00D4",
  version: "1.5.54"
}, {
  name: "box-cutter",
  hex: "F00D5",
  version: "1.5.54"
}, {
  name: "box-cutter-off",
  hex: "F0B4A",
  version: "2.8.94"
}, {
  name: "box-shadow",
  hex: "F0637",
  version: "1.6.50"
}, {
  name: "boxing-glove",
  hex: "F0B65",
  version: "3.0.39"
}, {
  name: "braille",
  hex: "F09D0",
  version: "2.5.94"
}, {
  name: "brain",
  hex: "F09D1",
  version: "2.5.94"
}, {
  name: "bread-slice",
  hex: "F0CEE",
  version: "3.3.92"
}, {
  name: "bread-slice-outline",
  hex: "F0CEF",
  version: "3.3.92"
}, {
  name: "bridge",
  hex: "F0618",
  version: "1.6.50"
}, {
  name: "briefcase",
  hex: "F00D6",
  version: "1.5.54"
}, {
  name: "briefcase-account",
  hex: "F0CF0",
  version: "3.3.92"
}, {
  name: "briefcase-account-outline",
  hex: "F0CF1",
  version: "3.3.92"
}, {
  name: "briefcase-check",
  hex: "F00D7",
  version: "1.5.54"
}, {
  name: "briefcase-check-outline",
  hex: "F131E",
  version: "4.8.95"
}, {
  name: "briefcase-clock",
  hex: "F10D0",
  version: "4.3.95"
}, {
  name: "briefcase-clock-outline",
  hex: "F10D1",
  version: "4.3.95"
}, {
  name: "briefcase-download",
  hex: "F00D8",
  version: "1.5.54"
}, {
  name: "briefcase-download-outline",
  hex: "F0C3D",
  version: "3.2.89"
}, {
  name: "briefcase-edit",
  hex: "F0A98",
  version: "2.7.94"
}, {
  name: "briefcase-edit-outline",
  hex: "F0C3E",
  version: "3.2.89"
}, {
  name: "briefcase-minus",
  hex: "F0A2A",
  version: "2.6.95"
}, {
  name: "briefcase-minus-outline",
  hex: "F0C3F",
  version: "3.2.89"
}, {
  name: "briefcase-outline",
  hex: "F0814",
  version: "2.1.19"
}, {
  name: "briefcase-plus",
  hex: "F0A2B",
  version: "2.6.95"
}, {
  name: "briefcase-plus-outline",
  hex: "F0C40",
  version: "3.2.89"
}, {
  name: "briefcase-remove",
  hex: "F0A2C",
  version: "2.6.95"
}, {
  name: "briefcase-remove-outline",
  hex: "F0C41",
  version: "3.2.89"
}, {
  name: "briefcase-search",
  hex: "F0A2D",
  version: "2.6.95"
}, {
  name: "briefcase-search-outline",
  hex: "F0C42",
  version: "3.2.89"
}, {
  name: "briefcase-upload",
  hex: "F00D9",
  version: "1.5.54"
}, {
  name: "briefcase-upload-outline",
  hex: "F0C43",
  version: "3.2.89"
}, {
  name: "brightness-1",
  hex: "F00DA",
  version: "1.5.54"
}, {
  name: "brightness-2",
  hex: "F00DB",
  version: "1.5.54"
}, {
  name: "brightness-3",
  hex: "F00DC",
  version: "1.5.54"
}, {
  name: "brightness-4",
  hex: "F00DD",
  version: "1.5.54"
}, {
  name: "brightness-5",
  hex: "F00DE",
  version: "1.5.54"
}, {
  name: "brightness-6",
  hex: "F00DF",
  version: "1.5.54"
}, {
  name: "brightness-7",
  hex: "F00E0",
  version: "1.5.54"
}, {
  name: "brightness-auto",
  hex: "F00E1",
  version: "1.5.54"
}, {
  name: "brightness-percent",
  hex: "F0CF2",
  version: "3.3.92"
}, {
  name: "broom",
  hex: "F00E2",
  version: "1.5.54"
}, {
  name: "brush",
  hex: "F00E3",
  version: "1.5.54"
}, {
  name: "buddhism",
  hex: "F094B",
  version: "2.4.85"
}, {
  name: "buffer",
  hex: "F0619",
  version: "1.6.50"
}, {
  name: "buffet",
  hex: "F0578",
  version: "1.5.54"
}, {
  name: "bug",
  hex: "F00E4",
  version: "1.5.54"
}, {
  name: "bug-check",
  hex: "F0A2E",
  version: "2.6.95"
}, {
  name: "bug-check-outline",
  hex: "F0A2F",
  version: "2.6.95"
}, {
  name: "bug-outline",
  hex: "F0A30",
  version: "2.6.95"
}, {
  name: "bugle",
  hex: "F0DB4",
  version: "3.5.94"
}, {
  name: "bulldozer",
  hex: "F0B22",
  version: "2.8.94"
}, {
  name: "bullet",
  hex: "F0CF3",
  version: "3.3.92"
}, {
  name: "bulletin-board",
  hex: "F00E5",
  version: "1.5.54"
}, {
  name: "bullhorn",
  hex: "F00E6",
  version: "1.5.54"
}, {
  name: "bullhorn-outline",
  hex: "F0B23",
  version: "2.8.94"
}, {
  name: "bullseye",
  hex: "F05DD",
  version: "1.5.54"
}, {
  name: "bullseye-arrow",
  hex: "F08C9",
  version: "2.3.50"
}, {
  name: "bulma",
  hex: "F12E7",
  version: "4.8.95"
}, {
  name: "bunk-bed",
  hex: "F1302",
  version: "4.8.95"
}, {
  name: "bunk-bed-outline",
  hex: "F0097",
  version: "1.5.54"
}, {
  name: "bus",
  hex: "F00E7",
  version: "1.5.54"
}, {
  name: "bus-alert",
  hex: "F0A99",
  version: "2.7.94"
}, {
  name: "bus-articulated-end",
  hex: "F079C",
  version: "2.0.46"
}, {
  name: "bus-articulated-front",
  hex: "F079D",
  version: "2.0.46"
}, {
  name: "bus-clock",
  hex: "F08CA",
  version: "2.3.50"
}, {
  name: "bus-double-decker",
  hex: "F079E",
  version: "2.0.46"
}, {
  name: "bus-marker",
  hex: "F1212",
  version: "4.6.95"
}, {
  name: "bus-multiple",
  hex: "F0F3F",
  version: "3.9.97"
}, {
  name: "bus-school",
  hex: "F079F",
  version: "2.0.46"
}, {
  name: "bus-side",
  hex: "F07A0",
  version: "2.0.46"
}, {
  name: "bus-stop",
  hex: "F1012",
  version: "4.1.95"
}, {
  name: "bus-stop-covered",
  hex: "F1013",
  version: "4.1.95"
}, {
  name: "bus-stop-uncovered",
  hex: "F1014",
  version: "4.1.95"
}, {
  name: "cable-data",
  hex: "F1394",
  version: "5.0.45"
}, {
  name: "cached",
  hex: "F00E8",
  version: "1.5.54"
}, {
  name: "cactus",
  hex: "F0DB5",
  version: "3.5.94"
}, {
  name: "cake",
  hex: "F00E9",
  version: "1.5.54"
}, {
  name: "cake-layered",
  hex: "F00EA",
  version: "1.5.54"
}, {
  name: "cake-variant",
  hex: "F00EB",
  version: "1.5.54"
}, {
  name: "calculator",
  hex: "F00EC",
  version: "1.5.54"
}, {
  name: "calculator-variant",
  hex: "F0A9A",
  version: "2.7.94"
}, {
  name: "calendar",
  hex: "F00ED",
  version: "1.5.54"
}, {
  name: "calendar-account",
  hex: "F0ED7",
  version: "3.8.95"
}, {
  name: "calendar-account-outline",
  hex: "F0ED8",
  version: "3.8.95"
}, {
  name: "calendar-alert",
  hex: "F0A31",
  version: "2.6.95"
}, {
  name: "calendar-arrow-left",
  hex: "F1134",
  version: "4.4.95"
}, {
  name: "calendar-arrow-right",
  hex: "F1135",
  version: "4.4.95"
}, {
  name: "calendar-blank",
  hex: "F00EE",
  version: "1.5.54"
}, {
  name: "calendar-blank-multiple",
  hex: "F1073",
  version: "4.2.95"
}, {
  name: "calendar-blank-outline",
  hex: "F0B66",
  version: "3.0.39"
}, {
  name: "calendar-check",
  hex: "F00EF",
  version: "1.5.54"
}, {
  name: "calendar-check-outline",
  hex: "F0C44",
  version: "3.2.89"
}, {
  name: "calendar-clock",
  hex: "F00F0",
  version: "1.5.54"
}, {
  name: "calendar-edit",
  hex: "F08A7",
  version: "2.2.43"
}, {
  name: "calendar-export",
  hex: "F0B24",
  version: "2.8.94"
}, {
  name: "calendar-heart",
  hex: "F09D2",
  version: "2.5.94"
}, {
  name: "calendar-import",
  hex: "F0B25",
  version: "2.8.94"
}, {
  name: "calendar-minus",
  hex: "F0D5C",
  version: "3.4.93"
}, {
  name: "calendar-month",
  hex: "F0E17",
  version: "3.6.95"
}, {
  name: "calendar-month-outline",
  hex: "F0E18",
  version: "3.6.95"
}, {
  name: "calendar-multiple",
  hex: "F00F1",
  version: "1.5.54"
}, {
  name: "calendar-multiple-check",
  hex: "F00F2",
  version: "1.5.54"
}, {
  name: "calendar-multiselect",
  hex: "F0A32",
  version: "2.6.95"
}, {
  name: "calendar-outline",
  hex: "F0B67",
  version: "3.0.39"
}, {
  name: "calendar-plus",
  hex: "F00F3",
  version: "1.5.54"
}, {
  name: "calendar-question",
  hex: "F0692",
  version: "1.7.12"
}, {
  name: "calendar-range",
  hex: "F0679",
  version: "1.7.12"
}, {
  name: "calendar-range-outline",
  hex: "F0B68",
  version: "3.0.39"
}, {
  name: "calendar-refresh",
  hex: "F01E1",
  version: "1.5.54"
}, {
  name: "calendar-refresh-outline",
  hex: "F0203",
  version: "1.5.54"
}, {
  name: "calendar-remove",
  hex: "F00F4",
  version: "1.5.54"
}, {
  name: "calendar-remove-outline",
  hex: "F0C45",
  version: "3.2.89"
}, {
  name: "calendar-search",
  hex: "F094C",
  version: "2.4.85"
}, {
  name: "calendar-star",
  hex: "F09D3",
  version: "2.5.94"
}, {
  name: "calendar-sync",
  hex: "F0E8E",
  version: "3.7.94"
}, {
  name: "calendar-sync-outline",
  hex: "F0E8F",
  version: "3.7.94"
}, {
  name: "calendar-text",
  hex: "F00F5",
  version: "1.5.54"
}, {
  name: "calendar-text-outline",
  hex: "F0C46",
  version: "3.2.89"
}, {
  name: "calendar-today",
  hex: "F00F6",
  version: "1.5.54"
}, {
  name: "calendar-week",
  hex: "F0A33",
  version: "2.6.95"
}, {
  name: "calendar-week-begin",
  hex: "F0A34",
  version: "2.6.95"
}, {
  name: "calendar-weekend",
  hex: "F0ED9",
  version: "3.8.95"
}, {
  name: "calendar-weekend-outline",
  hex: "F0EDA",
  version: "3.8.95"
}, {
  name: "call-made",
  hex: "F00F7",
  version: "1.5.54"
}, {
  name: "call-merge",
  hex: "F00F8",
  version: "1.5.54"
}, {
  name: "call-missed",
  hex: "F00F9",
  version: "1.5.54"
}, {
  name: "call-received",
  hex: "F00FA",
  version: "1.5.54"
}, {
  name: "call-split",
  hex: "F00FB",
  version: "1.5.54"
}, {
  name: "camcorder",
  hex: "F00FC",
  version: "1.5.54"
}, {
  name: "camcorder-off",
  hex: "F00FF",
  version: "1.5.54"
}, {
  name: "camera",
  hex: "F0100",
  version: "1.5.54"
}, {
  name: "camera-account",
  hex: "F08CB",
  version: "2.3.50"
}, {
  name: "camera-burst",
  hex: "F0693",
  version: "1.7.12"
}, {
  name: "camera-control",
  hex: "F0B69",
  version: "3.0.39"
}, {
  name: "camera-enhance",
  hex: "F0101",
  version: "1.5.54"
}, {
  name: "camera-enhance-outline",
  hex: "F0B6A",
  version: "3.0.39"
}, {
  name: "camera-front",
  hex: "F0102",
  version: "1.5.54"
}, {
  name: "camera-front-variant",
  hex: "F0103",
  version: "1.5.54"
}, {
  name: "camera-gopro",
  hex: "F07A1",
  version: "2.0.46"
}, {
  name: "camera-image",
  hex: "F08CC",
  version: "2.3.50"
}, {
  name: "camera-iris",
  hex: "F0104",
  version: "1.5.54"
}, {
  name: "camera-metering-center",
  hex: "F07A2",
  version: "2.0.46"
}, {
  name: "camera-metering-matrix",
  hex: "F07A3",
  version: "2.0.46"
}, {
  name: "camera-metering-partial",
  hex: "F07A4",
  version: "2.0.46"
}, {
  name: "camera-metering-spot",
  hex: "F07A5",
  version: "2.0.46"
}, {
  name: "camera-off",
  hex: "F05DF",
  version: "1.5.54"
}, {
  name: "camera-outline",
  hex: "F0D5D",
  version: "3.4.93"
}, {
  name: "camera-party-mode",
  hex: "F0105",
  version: "1.5.54"
}, {
  name: "camera-plus",
  hex: "F0EDB",
  version: "3.8.95"
}, {
  name: "camera-plus-outline",
  hex: "F0EDC",
  version: "3.8.95"
}, {
  name: "camera-rear",
  hex: "F0106",
  version: "1.5.54"
}, {
  name: "camera-rear-variant",
  hex: "F0107",
  version: "1.5.54"
}, {
  name: "camera-retake",
  hex: "F0E19",
  version: "3.6.95"
}, {
  name: "camera-retake-outline",
  hex: "F0E1A",
  version: "3.6.95"
}, {
  name: "camera-switch",
  hex: "F0108",
  version: "1.5.54"
}, {
  name: "camera-switch-outline",
  hex: "F084A",
  version: "2.1.99"
}, {
  name: "camera-timer",
  hex: "F0109",
  version: "1.5.54"
}, {
  name: "camera-wireless",
  hex: "F0DB6",
  version: "3.5.94"
}, {
  name: "camera-wireless-outline",
  hex: "F0DB7",
  version: "3.5.94"
}, {
  name: "campfire",
  hex: "F0EDD",
  version: "3.8.95"
}, {
  name: "cancel",
  hex: "F073A",
  version: "1.9.32"
}, {
  name: "candle",
  hex: "F05E2",
  version: "1.5.54"
}, {
  name: "candycane",
  hex: "F010A",
  version: "1.5.54"
}, {
  name: "cannabis",
  hex: "F07A6",
  version: "2.0.46"
}, {
  name: "caps-lock",
  hex: "F0A9B",
  version: "2.7.94"
}, {
  name: "car",
  hex: "F010B",
  version: "1.5.54"
}, {
  name: "car-2-plus",
  hex: "F1015",
  version: "4.1.95"
}, {
  name: "car-3-plus",
  hex: "F1016",
  version: "4.1.95"
}, {
  name: "car-arrow-left",
  hex: "F13B2",
  version: "5.0.45"
}, {
  name: "car-arrow-right",
  hex: "F13B3",
  version: "5.0.45"
}, {
  name: "car-back",
  hex: "F0E1B",
  version: "3.6.95"
}, {
  name: "car-battery",
  hex: "F010C",
  version: "1.5.54"
}, {
  name: "car-brake-abs",
  hex: "F0C47",
  version: "3.2.89"
}, {
  name: "car-brake-alert",
  hex: "F0C48",
  version: "3.2.89"
}, {
  name: "car-brake-hold",
  hex: "F0D5E",
  version: "3.4.93"
}, {
  name: "car-brake-parking",
  hex: "F0D5F",
  version: "3.4.93"
}, {
  name: "car-brake-retarder",
  hex: "F1017",
  version: "4.1.95"
}, {
  name: "car-child-seat",
  hex: "F0FA3",
  version: "4.0.96"
}, {
  name: "car-clutch",
  hex: "F1018",
  version: "4.1.95"
}, {
  name: "car-connected",
  hex: "F010D",
  version: "1.5.54"
}, {
  name: "car-convertible",
  hex: "F07A7",
  version: "2.0.46"
}, {
  name: "car-coolant-level",
  hex: "F1019",
  version: "4.1.95"
}, {
  name: "car-cruise-control",
  hex: "F0D60",
  version: "3.4.93"
}, {
  name: "car-defrost-front",
  hex: "F0D61",
  version: "3.4.93"
}, {
  name: "car-defrost-rear",
  hex: "F0D62",
  version: "3.4.93"
}, {
  name: "car-door",
  hex: "F0B6B",
  version: "3.0.39"
}, {
  name: "car-door-lock",
  hex: "F109D",
  version: "4.2.95"
}, {
  name: "car-electric",
  hex: "F0B6C",
  version: "3.0.39"
}, {
  name: "car-esp",
  hex: "F0C49",
  version: "3.2.89"
}, {
  name: "car-estate",
  hex: "F07A8",
  version: "2.0.46"
}, {
  name: "car-hatchback",
  hex: "F07A9",
  version: "2.0.46"
}, {
  name: "car-info",
  hex: "F11BE",
  version: "4.5.95"
}, {
  name: "car-key",
  hex: "F0B6D",
  version: "3.0.39"
}, {
  name: "car-light-dimmed",
  hex: "F0C4A",
  version: "3.2.89"
}, {
  name: "car-light-fog",
  hex: "F0C4B",
  version: "3.2.89"
}, {
  name: "car-light-high",
  hex: "F0C4C",
  version: "3.2.89"
}, {
  name: "car-limousine",
  hex: "F08CD",
  version: "2.3.50"
}, {
  name: "car-multiple",
  hex: "F0B6E",
  version: "3.0.39"
}, {
  name: "car-off",
  hex: "F0E1C",
  version: "3.6.95"
}, {
  name: "car-parking-lights",
  hex: "F0D63",
  version: "3.4.93"
}, {
  name: "car-pickup",
  hex: "F07AA",
  version: "2.0.46"
}, {
  name: "car-seat",
  hex: "F0FA4",
  version: "4.0.96"
}, {
  name: "car-seat-cooler",
  hex: "F0FA5",
  version: "4.0.96"
}, {
  name: "car-seat-heater",
  hex: "F0FA6",
  version: "4.0.96"
}, {
  name: "car-shift-pattern",
  hex: "F0F40",
  version: "3.9.97"
}, {
  name: "car-side",
  hex: "F07AB",
  version: "2.0.46"
}, {
  name: "car-sports",
  hex: "F07AC",
  version: "2.0.46"
}, {
  name: "car-tire-alert",
  hex: "F0C4D",
  version: "3.2.89"
}, {
  name: "car-traction-control",
  hex: "F0D64",
  version: "3.4.93"
}, {
  name: "car-turbocharger",
  hex: "F101A",
  version: "4.1.95"
}, {
  name: "car-wash",
  hex: "F010E",
  version: "1.5.54"
}, {
  name: "car-windshield",
  hex: "F101B",
  version: "4.1.95"
}, {
  name: "car-windshield-outline",
  hex: "F101C",
  version: "4.1.95"
}, {
  name: "caravan",
  hex: "F07AD",
  version: "2.0.46"
}, {
  name: "card",
  hex: "F0B6F",
  version: "3.0.39"
}, {
  name: "card-account-details",
  hex: "F05D2",
  version: "1.5.54"
}, {
  name: "card-account-details-outline",
  hex: "F0DAB",
  version: "3.5.94"
}, {
  name: "card-account-details-star",
  hex: "F02A3",
  version: "1.5.54"
}, {
  name: "card-account-details-star-outline",
  hex: "F06DB",
  version: "1.8.36"
}, {
  name: "card-account-mail",
  hex: "F018E",
  version: "1.5.54"
}, {
  name: "card-account-mail-outline",
  hex: "F0E98",
  version: "3.7.94"
}, {
  name: "card-account-phone",
  hex: "F0E99",
  version: "3.7.94"
}, {
  name: "card-account-phone-outline",
  hex: "F0E9A",
  version: "3.7.94"
}, {
  name: "card-bulleted",
  hex: "F0B70",
  version: "3.0.39"
}, {
  name: "card-bulleted-off",
  hex: "F0B71",
  version: "3.0.39"
}, {
  name: "card-bulleted-off-outline",
  hex: "F0B72",
  version: "3.0.39"
}, {
  name: "card-bulleted-outline",
  hex: "F0B73",
  version: "3.0.39"
}, {
  name: "card-bulleted-settings",
  hex: "F0B74",
  version: "3.0.39"
}, {
  name: "card-bulleted-settings-outline",
  hex: "F0B75",
  version: "3.0.39"
}, {
  name: "card-outline",
  hex: "F0B76",
  version: "3.0.39"
}, {
  name: "card-plus",
  hex: "F11FF",
  version: "4.6.95"
}, {
  name: "card-plus-outline",
  hex: "F1200",
  version: "4.6.95"
}, {
  name: "card-search",
  hex: "F1074",
  version: "4.2.95"
}, {
  name: "card-search-outline",
  hex: "F1075",
  version: "4.2.95"
}, {
  name: "card-text",
  hex: "F0B77",
  version: "3.0.39"
}, {
  name: "card-text-outline",
  hex: "F0B78",
  version: "3.0.39"
}, {
  name: "cards",
  hex: "F0638",
  version: "1.6.50"
}, {
  name: "cards-club",
  hex: "F08CE",
  version: "2.3.50"
}, {
  name: "cards-diamond",
  hex: "F08CF",
  version: "2.3.50"
}, {
  name: "cards-diamond-outline",
  hex: "F101D",
  version: "4.1.95"
}, {
  name: "cards-heart",
  hex: "F08D0",
  version: "2.3.50"
}, {
  name: "cards-outline",
  hex: "F0639",
  version: "1.6.50"
}, {
  name: "cards-playing-outline",
  hex: "F063A",
  version: "1.6.50"
}, {
  name: "cards-spade",
  hex: "F08D1",
  version: "2.3.50"
}, {
  name: "cards-variant",
  hex: "F06C7",
  version: "1.8.36"
}, {
  name: "carrot",
  hex: "F010F",
  version: "1.5.54"
}, {
  name: "cart",
  hex: "F0110",
  version: "1.5.54"
}, {
  name: "cart-arrow-down",
  hex: "F0D66",
  version: "3.4.93"
}, {
  name: "cart-arrow-right",
  hex: "F0C4E",
  version: "3.2.89"
}, {
  name: "cart-arrow-up",
  hex: "F0D67",
  version: "3.4.93"
}, {
  name: "cart-minus",
  hex: "F0D68",
  version: "3.4.93"
}, {
  name: "cart-off",
  hex: "F066B",
  version: "1.6.50"
}, {
  name: "cart-outline",
  hex: "F0111",
  version: "1.5.54"
}, {
  name: "cart-plus",
  hex: "F0112",
  version: "1.5.54"
}, {
  name: "cart-remove",
  hex: "F0D69",
  version: "3.4.93"
}, {
  name: "case-sensitive-alt",
  hex: "F0113",
  version: "1.5.54"
}, {
  name: "cash",
  hex: "F0114",
  version: "1.5.54"
}, {
  name: "cash-100",
  hex: "F0115",
  version: "1.5.54"
}, {
  name: "cash-marker",
  hex: "F0DB8",
  version: "3.5.94"
}, {
  name: "cash-minus",
  hex: "F1260",
  version: "4.7.95"
}, {
  name: "cash-multiple",
  hex: "F0116",
  version: "1.5.54"
}, {
  name: "cash-plus",
  hex: "F1261",
  version: "4.7.95"
}, {
  name: "cash-refund",
  hex: "F0A9C",
  version: "2.7.94"
}, {
  name: "cash-register",
  hex: "F0CF4",
  version: "3.3.92"
}, {
  name: "cash-remove",
  hex: "F1262",
  version: "4.7.95"
}, {
  name: "cash-usd",
  hex: "F1176",
  version: "4.4.95"
}, {
  name: "cash-usd-outline",
  hex: "F0117",
  version: "1.5.54"
}, {
  name: "cassette",
  hex: "F09D4",
  version: "2.5.94"
}, {
  name: "cast",
  hex: "F0118",
  version: "1.5.54"
}, {
  name: "cast-audio",
  hex: "F101E",
  version: "4.1.95"
}, {
  name: "cast-connected",
  hex: "F0119",
  version: "1.5.54"
}, {
  name: "cast-education",
  hex: "F0E1D",
  version: "3.6.95"
}, {
  name: "cast-off",
  hex: "F078A",
  version: "1.9.32"
}, {
  name: "castle",
  hex: "F011A",
  version: "1.5.54"
}, {
  name: "cat",
  hex: "F011B",
  version: "1.5.54"
}, {
  name: "cctv",
  hex: "F07AE",
  version: "2.0.46"
}, {
  name: "ceiling-light",
  hex: "F0769",
  version: "1.9.32"
}, {
  name: "cellphone",
  hex: "F011C",
  version: "1.5.54"
}, {
  name: "cellphone-android",
  hex: "F011D",
  version: "1.5.54"
}, {
  name: "cellphone-arrow-down",
  hex: "F09D5",
  version: "2.5.94"
}, {
  name: "cellphone-basic",
  hex: "F011E",
  version: "1.5.54"
}, {
  name: "cellphone-charging",
  hex: "F1397",
  version: "5.0.45"
}, {
  name: "cellphone-cog",
  hex: "F0951",
  version: "2.4.85"
}, {
  name: "cellphone-dock",
  hex: "F011F",
  version: "1.5.54"
}, {
  name: "cellphone-erase",
  hex: "F094D",
  version: "2.4.85"
}, {
  name: "cellphone-information",
  hex: "F0F41",
  version: "3.9.97"
}, {
  name: "cellphone-iphone",
  hex: "F0120",
  version: "1.5.54"
}, {
  name: "cellphone-key",
  hex: "F094E",
  version: "2.4.85"
}, {
  name: "cellphone-link",
  hex: "F0121",
  version: "1.5.54"
}, {
  name: "cellphone-link-off",
  hex: "F0122",
  version: "1.5.54"
}, {
  name: "cellphone-lock",
  hex: "F094F",
  version: "2.4.85"
}, {
  name: "cellphone-message",
  hex: "F08D3",
  version: "2.3.50"
}, {
  name: "cellphone-message-off",
  hex: "F10D2",
  version: "4.3.95"
}, {
  name: "cellphone-nfc",
  hex: "F0E90",
  version: "3.7.94"
}, {
  name: "cellphone-nfc-off",
  hex: "F12D8",
  version: "4.8.95"
}, {
  name: "cellphone-off",
  hex: "F0950",
  version: "2.4.85"
}, {
  name: "cellphone-play",
  hex: "F101F",
  version: "4.1.95"
}, {
  name: "cellphone-screenshot",
  hex: "F0A35",
  version: "2.6.95"
}, {
  name: "cellphone-settings",
  hex: "F0123",
  version: "1.5.54"
}, {
  name: "cellphone-sound",
  hex: "F0952",
  version: "2.4.85"
}, {
  name: "cellphone-text",
  hex: "F08D2",
  version: "2.3.50"
}, {
  name: "cellphone-wireless",
  hex: "F0815",
  version: "2.1.19"
}, {
  name: "celtic-cross",
  hex: "F0CF5",
  version: "3.3.92"
}, {
  name: "centos",
  hex: "F111A",
  version: "4.3.95"
}, {
  name: "certificate",
  hex: "F0124",
  version: "1.5.54"
}, {
  name: "certificate-outline",
  hex: "F1188",
  version: "4.4.95"
}, {
  name: "chair-rolling",
  hex: "F0F48",
  version: "3.9.97"
}, {
  name: "chair-school",
  hex: "F0125",
  version: "1.5.54"
}, {
  name: "charity",
  hex: "F0C4F",
  version: "3.2.89"
}, {
  name: "chart-arc",
  hex: "F0126",
  version: "1.5.54"
}, {
  name: "chart-areaspline",
  hex: "F0127",
  version: "1.5.54"
}, {
  name: "chart-areaspline-variant",
  hex: "F0E91",
  version: "3.7.94"
}, {
  name: "chart-bar",
  hex: "F0128",
  version: "1.5.54"
}, {
  name: "chart-bar-stacked",
  hex: "F076A",
  version: "1.9.32"
}, {
  name: "chart-bell-curve",
  hex: "F0C50",
  version: "3.2.89"
}, {
  name: "chart-bell-curve-cumulative",
  hex: "F0FA7",
  version: "4.0.96"
}, {
  name: "chart-bubble",
  hex: "F05E3",
  version: "1.5.54"
}, {
  name: "chart-donut",
  hex: "F07AF",
  version: "2.0.46"
}, {
  name: "chart-donut-variant",
  hex: "F07B0",
  version: "2.0.46"
}, {
  name: "chart-gantt",
  hex: "F066C",
  version: "1.6.50"
}, {
  name: "chart-histogram",
  hex: "F0129",
  version: "1.5.54"
}, {
  name: "chart-line",
  hex: "F012A",
  version: "1.5.54"
}, {
  name: "chart-line-stacked",
  hex: "F076B",
  version: "1.9.32"
}, {
  name: "chart-line-variant",
  hex: "F07B1",
  version: "2.0.46"
}, {
  name: "chart-multiline",
  hex: "F08D4",
  version: "2.3.50"
}, {
  name: "chart-multiple",
  hex: "F1213",
  version: "4.6.95"
}, {
  name: "chart-pie",
  hex: "F012B",
  version: "1.5.54"
}, {
  name: "chart-ppf",
  hex: "F1380",
  version: "4.9.95"
}, {
  name: "chart-sankey",
  hex: "F11DF",
  version: "4.5.95"
}, {
  name: "chart-sankey-variant",
  hex: "F11E0",
  version: "4.5.95"
}, {
  name: "chart-scatter-plot",
  hex: "F0E92",
  version: "3.7.94"
}, {
  name: "chart-scatter-plot-hexbin",
  hex: "F066D",
  version: "1.6.50"
}, {
  name: "chart-timeline",
  hex: "F066E",
  version: "1.6.50"
}, {
  name: "chart-timeline-variant",
  hex: "F0E93",
  version: "3.7.94"
}, {
  name: "chart-tree",
  hex: "F0E94",
  version: "3.7.94"
}, {
  name: "chat",
  hex: "F0B79",
  version: "3.0.39"
}, {
  name: "chat-alert",
  hex: "F0B7A",
  version: "3.0.39"
}, {
  name: "chat-alert-outline",
  hex: "F12C9",
  version: "4.8.95"
}, {
  name: "chat-outline",
  hex: "F0EDE",
  version: "3.8.95"
}, {
  name: "chat-processing",
  hex: "F0B7B",
  version: "3.0.39"
}, {
  name: "chat-processing-outline",
  hex: "F12CA",
  version: "4.8.95"
}, {
  name: "chat-sleep",
  hex: "F12D1",
  version: "4.8.95"
}, {
  name: "chat-sleep-outline",
  hex: "F12D2",
  version: "4.8.95"
}, {
  name: "check",
  hex: "F012C",
  version: "1.5.54"
}, {
  name: "check-all",
  hex: "F012D",
  version: "1.5.54"
}, {
  name: "check-bold",
  hex: "F0E1E",
  version: "3.6.95"
}, {
  name: "check-box-multiple-outline",
  hex: "F0C51",
  version: "3.2.89"
}, {
  name: "check-box-outline",
  hex: "F0C52",
  version: "3.2.89"
}, {
  name: "check-circle",
  hex: "F05E0",
  version: "1.5.54"
}, {
  name: "check-circle-outline",
  hex: "F05E1",
  version: "1.5.54"
}, {
  name: "check-decagram",
  hex: "F0791",
  version: "2.0.46"
}, {
  name: "check-network",
  hex: "F0C53",
  version: "3.2.89"
}, {
  name: "check-network-outline",
  hex: "F0C54",
  version: "3.2.89"
}, {
  name: "check-outline",
  hex: "F0855",
  version: "2.1.99"
}, {
  name: "check-underline",
  hex: "F0E1F",
  version: "3.6.95"
}, {
  name: "check-underline-circle",
  hex: "F0E20",
  version: "3.6.95"
}, {
  name: "check-underline-circle-outline",
  hex: "F0E21",
  version: "3.6.95"
}, {
  name: "checkbook",
  hex: "F0A9D",
  version: "2.7.94"
}, {
  name: "checkbox-blank",
  hex: "F012E",
  version: "1.5.54"
}, {
  name: "checkbox-blank-circle",
  hex: "F012F",
  version: "1.5.54"
}, {
  name: "checkbox-blank-circle-outline",
  hex: "F0130",
  version: "1.5.54"
}, {
  name: "checkbox-blank-off",
  hex: "F12EC",
  version: "4.8.95"
}, {
  name: "checkbox-blank-off-outline",
  hex: "F12ED",
  version: "4.8.95"
}, {
  name: "checkbox-blank-outline",
  hex: "F0131",
  version: "1.5.54"
}, {
  name: "checkbox-intermediate",
  hex: "F0856",
  version: "2.1.99"
}, {
  name: "checkbox-marked",
  hex: "F0132",
  version: "1.5.54"
}, {
  name: "checkbox-marked-circle",
  hex: "F0133",
  version: "1.5.54"
}, {
  name: "checkbox-marked-circle-outline",
  hex: "F0134",
  version: "1.5.54"
}, {
  name: "checkbox-marked-outline",
  hex: "F0135",
  version: "1.5.54"
}, {
  name: "checkbox-multiple-blank",
  hex: "F0136",
  version: "1.5.54"
}, {
  name: "checkbox-multiple-blank-circle",
  hex: "F063B",
  version: "1.6.50"
}, {
  name: "checkbox-multiple-blank-circle-outline",
  hex: "F063C",
  version: "1.6.50"
}, {
  name: "checkbox-multiple-blank-outline",
  hex: "F0137",
  version: "1.5.54"
}, {
  name: "checkbox-multiple-marked",
  hex: "F0138",
  version: "1.5.54"
}, {
  name: "checkbox-multiple-marked-circle",
  hex: "F063D",
  version: "1.6.50"
}, {
  name: "checkbox-multiple-marked-circle-outline",
  hex: "F063E",
  version: "1.6.50"
}, {
  name: "checkbox-multiple-marked-outline",
  hex: "F0139",
  version: "1.5.54"
}, {
  name: "checkerboard",
  hex: "F013A",
  version: "1.5.54"
}, {
  name: "checkerboard-minus",
  hex: "F1202",
  version: "4.6.95"
}, {
  name: "checkerboard-plus",
  hex: "F1201",
  version: "4.6.95"
}, {
  name: "checkerboard-remove",
  hex: "F1203",
  version: "4.6.95"
}, {
  name: "cheese",
  hex: "F12B9",
  version: "4.7.95"
}, {
  name: "chef-hat",
  hex: "F0B7C",
  version: "3.0.39"
}, {
  name: "chemical-weapon",
  hex: "F013B",
  version: "1.5.54"
}, {
  name: "chess-bishop",
  hex: "F085C",
  version: "2.1.99"
}, {
  name: "chess-king",
  hex: "F0857",
  version: "2.1.99"
}, {
  name: "chess-knight",
  hex: "F0858",
  version: "2.1.99"
}, {
  name: "chess-pawn",
  hex: "F0859",
  version: "2.1.99"
}, {
  name: "chess-queen",
  hex: "F085A",
  version: "2.1.99"
}, {
  name: "chess-rook",
  hex: "F085B",
  version: "2.1.99"
}, {
  name: "chevron-double-down",
  hex: "F013C",
  version: "1.5.54"
}, {
  name: "chevron-double-left",
  hex: "F013D",
  version: "1.5.54"
}, {
  name: "chevron-double-right",
  hex: "F013E",
  version: "1.5.54"
}, {
  name: "chevron-double-up",
  hex: "F013F",
  version: "1.5.54"
}, {
  name: "chevron-down",
  hex: "F0140",
  version: "1.5.54"
}, {
  name: "chevron-down-box",
  hex: "F09D6",
  version: "2.5.94"
}, {
  name: "chevron-down-box-outline",
  hex: "F09D7",
  version: "2.5.94"
}, {
  name: "chevron-down-circle",
  hex: "F0B26",
  version: "2.8.94"
}, {
  name: "chevron-down-circle-outline",
  hex: "F0B27",
  version: "2.8.94"
}, {
  name: "chevron-left",
  hex: "F0141",
  version: "1.5.54"
}, {
  name: "chevron-left-box",
  hex: "F09D8",
  version: "2.5.94"
}, {
  name: "chevron-left-box-outline",
  hex: "F09D9",
  version: "2.5.94"
}, {
  name: "chevron-left-circle",
  hex: "F0B28",
  version: "2.8.94"
}, {
  name: "chevron-left-circle-outline",
  hex: "F0B29",
  version: "2.8.94"
}, {
  name: "chevron-right",
  hex: "F0142",
  version: "1.5.54"
}, {
  name: "chevron-right-box",
  hex: "F09DA",
  version: "2.5.94"
}, {
  name: "chevron-right-box-outline",
  hex: "F09DB",
  version: "2.5.94"
}, {
  name: "chevron-right-circle",
  hex: "F0B2A",
  version: "2.8.94"
}, {
  name: "chevron-right-circle-outline",
  hex: "F0B2B",
  version: "2.8.94"
}, {
  name: "chevron-triple-down",
  hex: "F0DB9",
  version: "3.5.94"
}, {
  name: "chevron-triple-left",
  hex: "F0DBA",
  version: "3.5.94"
}, {
  name: "chevron-triple-right",
  hex: "F0DBB",
  version: "3.5.94"
}, {
  name: "chevron-triple-up",
  hex: "F0DBC",
  version: "3.5.94"
}, {
  name: "chevron-up",
  hex: "F0143",
  version: "1.5.54"
}, {
  name: "chevron-up-box",
  hex: "F09DC",
  version: "2.5.94"
}, {
  name: "chevron-up-box-outline",
  hex: "F09DD",
  version: "2.5.94"
}, {
  name: "chevron-up-circle",
  hex: "F0B2C",
  version: "2.8.94"
}, {
  name: "chevron-up-circle-outline",
  hex: "F0B2D",
  version: "2.8.94"
}, {
  name: "chili-hot",
  hex: "F07B2",
  version: "2.0.46"
}, {
  name: "chili-medium",
  hex: "F07B3",
  version: "2.0.46"
}, {
  name: "chili-mild",
  hex: "F07B4",
  version: "2.0.46"
}, {
  name: "chip",
  hex: "F061A",
  version: "1.6.50"
}, {
  name: "christianity",
  hex: "F0953",
  version: "2.4.85"
}, {
  name: "christianity-outline",
  hex: "F0CF6",
  version: "3.3.92"
}, {
  name: "church",
  hex: "F0144",
  version: "1.5.54"
}, {
  name: "cigar",
  hex: "F1189",
  version: "4.4.95"
}, {
  name: "circle",
  hex: "F0765",
  version: "1.9.32"
}, {
  name: "circle-double",
  hex: "F0E95",
  version: "3.7.94"
}, {
  name: "circle-edit-outline",
  hex: "F08D5",
  version: "2.3.50"
}, {
  name: "circle-expand",
  hex: "F0E96",
  version: "3.7.94"
}, {
  name: "circle-half",
  hex: "F1395",
  version: "5.0.45"
}, {
  name: "circle-half-full",
  hex: "F1396",
  version: "5.0.45"
}, {
  name: "circle-medium",
  hex: "F09DE",
  version: "2.5.94"
}, {
  name: "circle-multiple",
  hex: "F0B38",
  version: "2.8.94"
}, {
  name: "circle-multiple-outline",
  hex: "F0695",
  version: "1.7.12"
}, {
  name: "circle-off-outline",
  hex: "F10D3",
  version: "4.3.95"
}, {
  name: "circle-outline",
  hex: "F0766",
  version: "1.9.32"
}, {
  name: "circle-slice-1",
  hex: "F0A9E",
  version: "2.7.94"
}, {
  name: "circle-slice-2",
  hex: "F0A9F",
  version: "2.7.94"
}, {
  name: "circle-slice-3",
  hex: "F0AA0",
  version: "2.7.94"
}, {
  name: "circle-slice-4",
  hex: "F0AA1",
  version: "2.7.94"
}, {
  name: "circle-slice-5",
  hex: "F0AA2",
  version: "2.7.94"
}, {
  name: "circle-slice-6",
  hex: "F0AA3",
  version: "2.7.94"
}, {
  name: "circle-slice-7",
  hex: "F0AA4",
  version: "2.7.94"
}, {
  name: "circle-slice-8",
  hex: "F0AA5",
  version: "2.7.94"
}, {
  name: "circle-small",
  hex: "F09DF",
  version: "2.5.94"
}, {
  name: "circular-saw",
  hex: "F0E22",
  version: "3.6.95"
}, {
  name: "city",
  hex: "F0146",
  version: "1.5.54"
}, {
  name: "city-variant",
  hex: "F0A36",
  version: "2.6.95"
}, {
  name: "city-variant-outline",
  hex: "F0A37",
  version: "2.6.95"
}, {
  name: "clipboard",
  hex: "F0147",
  version: "1.5.54"
}, {
  name: "clipboard-account",
  hex: "F0148",
  version: "1.5.54"
}, {
  name: "clipboard-account-outline",
  hex: "F0C55",
  version: "3.2.89"
}, {
  name: "clipboard-alert",
  hex: "F0149",
  version: "1.5.54"
}, {
  name: "clipboard-alert-outline",
  hex: "F0CF7",
  version: "3.3.92"
}, {
  name: "clipboard-arrow-down",
  hex: "F014A",
  version: "1.5.54"
}, {
  name: "clipboard-arrow-down-outline",
  hex: "F0C56",
  version: "3.2.89"
}, {
  name: "clipboard-arrow-left",
  hex: "F014B",
  version: "1.5.54"
}, {
  name: "clipboard-arrow-left-outline",
  hex: "F0CF8",
  version: "3.3.92"
}, {
  name: "clipboard-arrow-right",
  hex: "F0CF9",
  version: "3.3.92"
}, {
  name: "clipboard-arrow-right-outline",
  hex: "F0CFA",
  version: "3.3.92"
}, {
  name: "clipboard-arrow-up",
  hex: "F0C57",
  version: "3.2.89"
}, {
  name: "clipboard-arrow-up-outline",
  hex: "F0C58",
  version: "3.2.89"
}, {
  name: "clipboard-check",
  hex: "F014E",
  version: "1.5.54"
}, {
  name: "clipboard-check-multiple",
  hex: "F1263",
  version: "4.7.95"
}, {
  name: "clipboard-check-multiple-outline",
  hex: "F1264",
  version: "4.7.95"
}, {
  name: "clipboard-check-outline",
  hex: "F08A8",
  version: "2.2.43"
}, {
  name: "clipboard-file",
  hex: "F1265",
  version: "4.7.95"
}, {
  name: "clipboard-file-outline",
  hex: "F1266",
  version: "4.7.95"
}, {
  name: "clipboard-flow",
  hex: "F06C8",
  version: "1.8.36"
}, {
  name: "clipboard-flow-outline",
  hex: "F1117",
  version: "4.3.95"
}, {
  name: "clipboard-list",
  hex: "F10D4",
  version: "4.3.95"
}, {
  name: "clipboard-list-outline",
  hex: "F10D5",
  version: "4.3.95"
}, {
  name: "clipboard-multiple",
  hex: "F1267",
  version: "4.7.95"
}, {
  name: "clipboard-multiple-outline",
  hex: "F1268",
  version: "4.7.95"
}, {
  name: "clipboard-outline",
  hex: "F014C",
  version: "1.5.54"
}, {
  name: "clipboard-play",
  hex: "F0C59",
  version: "3.2.89"
}, {
  name: "clipboard-play-multiple",
  hex: "F1269",
  version: "4.7.95"
}, {
  name: "clipboard-play-multiple-outline",
  hex: "F126A",
  version: "4.7.95"
}, {
  name: "clipboard-play-outline",
  hex: "F0C5A",
  version: "3.2.89"
}, {
  name: "clipboard-plus",
  hex: "F0751",
  version: "1.9.32"
}, {
  name: "clipboard-plus-outline",
  hex: "F131F",
  version: "4.8.95"
}, {
  name: "clipboard-pulse",
  hex: "F085D",
  version: "2.1.99"
}, {
  name: "clipboard-pulse-outline",
  hex: "F085E",
  version: "2.1.99"
}, {
  name: "clipboard-text",
  hex: "F014D",
  version: "1.5.54"
}, {
  name: "clipboard-text-multiple",
  hex: "F126B",
  version: "4.7.95"
}, {
  name: "clipboard-text-multiple-outline",
  hex: "F126C",
  version: "4.7.95"
}, {
  name: "clipboard-text-outline",
  hex: "F0A38",
  version: "2.6.95"
}, {
  name: "clipboard-text-play",
  hex: "F0C5B",
  version: "3.2.89"
}, {
  name: "clipboard-text-play-outline",
  hex: "F0C5C",
  version: "3.2.89"
}, {
  name: "clippy",
  hex: "F014F",
  version: "1.5.54"
}, {
  name: "clock",
  hex: "F0954",
  version: "2.4.85"
}, {
  name: "clock-alert",
  hex: "F0955",
  version: "2.4.85"
}, {
  name: "clock-alert-outline",
  hex: "F05CE",
  version: "1.5.54"
}, {
  name: "clock-check",
  hex: "F0FA8",
  version: "4.0.96"
}, {
  name: "clock-check-outline",
  hex: "F0FA9",
  version: "4.0.96"
}, {
  name: "clock-digital",
  hex: "F0E97",
  version: "3.7.94"
}, {
  name: "clock-end",
  hex: "F0151",
  version: "1.5.54"
}, {
  name: "clock-fast",
  hex: "F0152",
  version: "1.5.54"
}, {
  name: "clock-in",
  hex: "F0153",
  version: "1.5.54"
}, {
  name: "clock-out",
  hex: "F0154",
  version: "1.5.54"
}, {
  name: "clock-outline",
  hex: "F0150",
  version: "1.5.54"
}, {
  name: "clock-start",
  hex: "F0155",
  version: "1.5.54"
}, {
  name: "close",
  hex: "F0156",
  version: "1.5.54"
}, {
  name: "close-box",
  hex: "F0157",
  version: "1.5.54"
}, {
  name: "close-box-multiple",
  hex: "F0C5D",
  version: "3.2.89"
}, {
  name: "close-box-multiple-outline",
  hex: "F0C5E",
  version: "3.2.89"
}, {
  name: "close-box-outline",
  hex: "F0158",
  version: "1.5.54"
}, {
  name: "close-circle",
  hex: "F0159",
  version: "1.5.54"
}, {
  name: "close-circle-multiple",
  hex: "F062A",
  version: "1.6.50"
}, {
  name: "close-circle-multiple-outline",
  hex: "F0883",
  version: "2.1.99"
}, {
  name: "close-circle-outline",
  hex: "F015A",
  version: "1.5.54"
}, {
  name: "close-network",
  hex: "F015B",
  version: "1.5.54"
}, {
  name: "close-network-outline",
  hex: "F0C5F",
  version: "3.2.89"
}, {
  name: "close-octagon",
  hex: "F015C",
  version: "1.5.54"
}, {
  name: "close-octagon-outline",
  hex: "F015D",
  version: "1.5.54"
}, {
  name: "close-outline",
  hex: "F06C9",
  version: "1.8.36"
}, {
  name: "close-thick",
  hex: "F1398",
  version: "5.0.45"
}, {
  name: "closed-caption",
  hex: "F015E",
  version: "1.5.54"
}, {
  name: "closed-caption-outline",
  hex: "F0DBD",
  version: "3.5.94"
}, {
  name: "cloud",
  hex: "F015F",
  version: "1.5.54"
}, {
  name: "cloud-alert",
  hex: "F09E0",
  version: "2.5.94"
}, {
  name: "cloud-braces",
  hex: "F07B5",
  version: "2.0.46"
}, {
  name: "cloud-check",
  hex: "F0160",
  version: "1.5.54"
}, {
  name: "cloud-check-outline",
  hex: "F12CC",
  version: "4.8.95"
}, {
  name: "cloud-circle",
  hex: "F0161",
  version: "1.5.54"
}, {
  name: "cloud-download",
  hex: "F0162",
  version: "1.5.54"
}, {
  name: "cloud-download-outline",
  hex: "F0B7D",
  version: "3.0.39"
}, {
  name: "cloud-lock",
  hex: "F11F1",
  version: "4.5.95"
}, {
  name: "cloud-lock-outline",
  hex: "F11F2",
  version: "4.5.95"
}, {
  name: "cloud-off-outline",
  hex: "F0164",
  version: "1.5.54"
}, {
  name: "cloud-outline",
  hex: "F0163",
  version: "1.5.54"
}, {
  name: "cloud-print",
  hex: "F0165",
  version: "1.5.54"
}, {
  name: "cloud-print-outline",
  hex: "F0166",
  version: "1.5.54"
}, {
  name: "cloud-question",
  hex: "F0A39",
  version: "2.6.95"
}, {
  name: "cloud-refresh",
  hex: "F052A",
  version: "1.5.54"
}, {
  name: "cloud-search",
  hex: "F0956",
  version: "2.4.85"
}, {
  name: "cloud-search-outline",
  hex: "F0957",
  version: "2.4.85"
}, {
  name: "cloud-sync",
  hex: "F063F",
  version: "1.6.50"
}, {
  name: "cloud-sync-outline",
  hex: "F12D6",
  version: "4.8.95"
}, {
  name: "cloud-tags",
  hex: "F07B6",
  version: "2.0.46"
}, {
  name: "cloud-upload",
  hex: "F0167",
  version: "1.5.54"
}, {
  name: "cloud-upload-outline",
  hex: "F0B7E",
  version: "3.0.39"
}, {
  name: "clover",
  hex: "F0816",
  version: "2.1.19"
}, {
  name: "coach-lamp",
  hex: "F1020",
  version: "4.1.95"
}, {
  name: "coat-rack",
  hex: "F109E",
  version: "4.2.95"
}, {
  name: "code-array",
  hex: "F0168",
  version: "1.5.54"
}, {
  name: "code-braces",
  hex: "F0169",
  version: "1.5.54"
}, {
  name: "code-braces-box",
  hex: "F10D6",
  version: "4.3.95"
}, {
  name: "code-brackets",
  hex: "F016A",
  version: "1.5.54"
}, {
  name: "code-equal",
  hex: "F016B",
  version: "1.5.54"
}, {
  name: "code-greater-than",
  hex: "F016C",
  version: "1.5.54"
}, {
  name: "code-greater-than-or-equal",
  hex: "F016D",
  version: "1.5.54"
}, {
  name: "code-json",
  hex: "F0626",
  version: "1.6.50"
}, {
  name: "code-less-than",
  hex: "F016E",
  version: "1.5.54"
}, {
  name: "code-less-than-or-equal",
  hex: "F016F",
  version: "1.5.54"
}, {
  name: "code-not-equal",
  hex: "F0170",
  version: "1.5.54"
}, {
  name: "code-not-equal-variant",
  hex: "F0171",
  version: "1.5.54"
}, {
  name: "code-parentheses",
  hex: "F0172",
  version: "1.5.54"
}, {
  name: "code-parentheses-box",
  hex: "F10D7",
  version: "4.3.95"
}, {
  name: "code-string",
  hex: "F0173",
  version: "1.5.54"
}, {
  name: "code-tags",
  hex: "F0174",
  version: "1.5.54"
}, {
  name: "code-tags-check",
  hex: "F0694",
  version: "1.7.12"
}, {
  name: "codepen",
  hex: "F0175",
  version: "1.5.54"
}, {
  name: "coffee",
  hex: "F0176",
  version: "1.5.54"
}, {
  name: "coffee-maker",
  hex: "F109F",
  version: "4.2.95"
}, {
  name: "coffee-off",
  hex: "F0FAA",
  version: "3.9.97"
}, {
  name: "coffee-off-outline",
  hex: "F0FAB",
  version: "3.9.97"
}, {
  name: "coffee-outline",
  hex: "F06CA",
  version: "1.8.36"
}, {
  name: "coffee-to-go",
  hex: "F0177",
  version: "1.5.54"
}, {
  name: "coffee-to-go-outline",
  hex: "F130E",
  version: "4.8.95"
}, {
  name: "coffin",
  hex: "F0B7F",
  version: "3.0.39"
}, {
  name: "cog",
  hex: "F0493",
  version: "1.5.54"
}, {
  name: "cog-box",
  hex: "F0494",
  version: "1.5.54"
}, {
  name: "cog-clockwise",
  hex: "F11DD",
  version: "4.5.95"
}, {
  name: "cog-counterclockwise",
  hex: "F11DE",
  version: "4.5.95"
}, {
  name: "cog-outline",
  hex: "F08BB",
  version: "2.2.43"
}, {
  name: "cog-transfer",
  hex: "F105B",
  version: "4.1.95"
}, {
  name: "cog-transfer-outline",
  hex: "F105C",
  version: "4.1.95"
}, {
  name: "cogs",
  hex: "F08D6",
  version: "2.3.50"
}, {
  name: "collage",
  hex: "F0640",
  version: "1.6.50"
}, {
  name: "collapse-all",
  hex: "F0AA6",
  version: "2.7.94"
}, {
  name: "collapse-all-outline",
  hex: "F0AA7",
  version: "2.7.94"
}, {
  name: "color-helper",
  hex: "F0179",
  version: "1.5.54"
}, {
  name: "comma",
  hex: "F0E23",
  version: "3.6.95"
}, {
  name: "comma-box",
  hex: "F0E2B",
  version: "3.6.95"
}, {
  name: "comma-box-outline",
  hex: "F0E24",
  version: "3.6.95"
}, {
  name: "comma-circle",
  hex: "F0E25",
  version: "3.6.95"
}, {
  name: "comma-circle-outline",
  hex: "F0E26",
  version: "3.6.95"
}, {
  name: "comment",
  hex: "F017A",
  version: "1.5.54"
}, {
  name: "comment-account",
  hex: "F017B",
  version: "1.5.54"
}, {
  name: "comment-account-outline",
  hex: "F017C",
  version: "1.5.54"
}, {
  name: "comment-alert",
  hex: "F017D",
  version: "1.5.54"
}, {
  name: "comment-alert-outline",
  hex: "F017E",
  version: "1.5.54"
}, {
  name: "comment-arrow-left",
  hex: "F09E1",
  version: "2.5.94"
}, {
  name: "comment-arrow-left-outline",
  hex: "F09E2",
  version: "2.5.94"
}, {
  name: "comment-arrow-right",
  hex: "F09E3",
  version: "2.5.94"
}, {
  name: "comment-arrow-right-outline",
  hex: "F09E4",
  version: "2.5.94"
}, {
  name: "comment-check",
  hex: "F017F",
  version: "1.5.54"
}, {
  name: "comment-check-outline",
  hex: "F0180",
  version: "1.5.54"
}, {
  name: "comment-edit",
  hex: "F11BF",
  version: "4.5.95"
}, {
  name: "comment-edit-outline",
  hex: "F12C4",
  version: "4.8.95"
}, {
  name: "comment-eye",
  hex: "F0A3A",
  version: "2.6.95"
}, {
  name: "comment-eye-outline",
  hex: "F0A3B",
  version: "2.6.95"
}, {
  name: "comment-multiple",
  hex: "F085F",
  version: "2.1.99"
}, {
  name: "comment-multiple-outline",
  hex: "F0181",
  version: "1.5.54"
}, {
  name: "comment-outline",
  hex: "F0182",
  version: "1.5.54"
}, {
  name: "comment-plus",
  hex: "F09E5",
  version: "2.5.94"
}, {
  name: "comment-plus-outline",
  hex: "F0183",
  version: "1.5.54"
}, {
  name: "comment-processing",
  hex: "F0184",
  version: "1.5.54"
}, {
  name: "comment-processing-outline",
  hex: "F0185",
  version: "1.5.54"
}, {
  name: "comment-question",
  hex: "F0817",
  version: "2.1.19"
}, {
  name: "comment-question-outline",
  hex: "F0186",
  version: "1.5.54"
}, {
  name: "comment-quote",
  hex: "F1021",
  version: "4.1.95"
}, {
  name: "comment-quote-outline",
  hex: "F1022",
  version: "4.1.95"
}, {
  name: "comment-remove",
  hex: "F05DE",
  version: "1.5.54"
}, {
  name: "comment-remove-outline",
  hex: "F0187",
  version: "1.5.54"
}, {
  name: "comment-search",
  hex: "F0A3C",
  version: "2.6.95"
}, {
  name: "comment-search-outline",
  hex: "F0A3D",
  version: "2.6.95"
}, {
  name: "comment-text",
  hex: "F0188",
  version: "1.5.54"
}, {
  name: "comment-text-multiple",
  hex: "F0860",
  version: "2.1.99"
}, {
  name: "comment-text-multiple-outline",
  hex: "F0861",
  version: "2.1.99"
}, {
  name: "comment-text-outline",
  hex: "F0189",
  version: "1.5.54"
}, {
  name: "compare",
  hex: "F018A",
  version: "1.5.54"
}, {
  name: "compass",
  hex: "F018B",
  version: "1.5.54"
}, {
  name: "compass-off",
  hex: "F0B80",
  version: "3.0.39"
}, {
  name: "compass-off-outline",
  hex: "F0B81",
  version: "3.0.39"
}, {
  name: "compass-outline",
  hex: "F018C",
  version: "1.5.54"
}, {
  name: "compass-rose",
  hex: "F1382",
  version: "4.9.95"
}, {
  name: "concourse-ci",
  hex: "F10A0",
  version: "4.2.95"
}, {
  name: "console",
  hex: "F018D",
  version: "1.5.54"
}, {
  name: "console-line",
  hex: "F07B7",
  version: "2.0.46"
}, {
  name: "console-network",
  hex: "F08A9",
  version: "2.2.43"
}, {
  name: "console-network-outline",
  hex: "F0C60",
  version: "3.2.89"
}, {
  name: "consolidate",
  hex: "F10D8",
  version: "4.3.95"
}, {
  name: "contactless-payment",
  hex: "F0D6A",
  version: "3.4.93"
}, {
  name: "contactless-payment-circle",
  hex: "F0321",
  version: "1.5.54"
}, {
  name: "contactless-payment-circle-outline",
  hex: "F0408",
  version: "1.5.54"
}, {
  name: "contacts",
  hex: "F06CB",
  version: "1.8.36"
}, {
  name: "contacts-outline",
  hex: "F05B8",
  version: "1.5.54"
}, {
  name: "contain",
  hex: "F0A3E",
  version: "2.6.95"
}, {
  name: "contain-end",
  hex: "F0A3F",
  version: "2.6.95"
}, {
  name: "contain-start",
  hex: "F0A40",
  version: "2.6.95"
}, {
  name: "content-copy",
  hex: "F018F",
  version: "1.5.54"
}, {
  name: "content-cut",
  hex: "F0190",
  version: "1.5.54"
}, {
  name: "content-duplicate",
  hex: "F0191",
  version: "1.5.54"
}, {
  name: "content-paste",
  hex: "F0192",
  version: "1.5.54"
}, {
  name: "content-save",
  hex: "F0193",
  version: "1.5.54"
}, {
  name: "content-save-alert",
  hex: "F0F42",
  version: "3.9.97"
}, {
  name: "content-save-alert-outline",
  hex: "F0F43",
  version: "3.9.97"
}, {
  name: "content-save-all",
  hex: "F0194",
  version: "1.5.54"
}, {
  name: "content-save-all-outline",
  hex: "F0F44",
  version: "3.9.97"
}, {
  name: "content-save-edit",
  hex: "F0CFB",
  version: "3.3.92"
}, {
  name: "content-save-edit-outline",
  hex: "F0CFC",
  version: "3.3.92"
}, {
  name: "content-save-move",
  hex: "F0E27",
  version: "3.6.95"
}, {
  name: "content-save-move-outline",
  hex: "F0E28",
  version: "3.6.95"
}, {
  name: "content-save-outline",
  hex: "F0818",
  version: "2.1.19"
}, {
  name: "content-save-settings",
  hex: "F061B",
  version: "1.6.50"
}, {
  name: "content-save-settings-outline",
  hex: "F0B2E",
  version: "2.8.94"
}, {
  name: "contrast",
  hex: "F0195",
  version: "1.5.54"
}, {
  name: "contrast-box",
  hex: "F0196",
  version: "1.5.54"
}, {
  name: "contrast-circle",
  hex: "F0197",
  version: "1.5.54"
}, {
  name: "controller-classic",
  hex: "F0B82",
  version: "3.0.39"
}, {
  name: "controller-classic-outline",
  hex: "F0B83",
  version: "3.0.39"
}, {
  name: "cookie",
  hex: "F0198",
  version: "1.5.54"
}, {
  name: "coolant-temperature",
  hex: "F03C8",
  version: "1.5.54"
}, {
  name: "copyright",
  hex: "F05E6",
  version: "1.5.54"
}, {
  name: "cordova",
  hex: "F0958",
  version: "2.4.85"
}, {
  name: "corn",
  hex: "F07B8",
  version: "2.0.46"
}, {
  name: "counter",
  hex: "F0199",
  version: "1.5.54"
}, {
  name: "cow",
  hex: "F019A",
  version: "1.5.54"
}, {
  name: "cpu-32-bit",
  hex: "F0EDF",
  version: "3.8.95"
}, {
  name: "cpu-64-bit",
  hex: "F0EE0",
  version: "3.8.95"
}, {
  name: "crane",
  hex: "F0862",
  version: "2.1.99"
}, {
  name: "creation",
  hex: "F0674",
  version: "1.7.12"
}, {
  name: "creative-commons",
  hex: "F0D6B",
  version: "3.4.93"
}, {
  name: "credit-card",
  hex: "F0FEF",
  version: "4.0.96"
}, {
  name: "credit-card-clock",
  hex: "F0EE1",
  version: "3.8.95"
}, {
  name: "credit-card-clock-outline",
  hex: "F0EE2",
  version: "3.8.95"
}, {
  name: "credit-card-marker",
  hex: "F06A8",
  version: "1.7.12"
}, {
  name: "credit-card-marker-outline",
  hex: "F0DBE",
  version: "3.5.94"
}, {
  name: "credit-card-minus",
  hex: "F0FAC",
  version: "4.0.96"
}, {
  name: "credit-card-minus-outline",
  hex: "F0FAD",
  version: "4.0.96"
}, {
  name: "credit-card-multiple",
  hex: "F0FF0",
  version: "4.0.96"
}, {
  name: "credit-card-multiple-outline",
  hex: "F019C",
  version: "1.5.54"
}, {
  name: "credit-card-off",
  hex: "F0FF1",
  version: "4.0.96"
}, {
  name: "credit-card-off-outline",
  hex: "F05E4",
  version: "1.5.54"
}, {
  name: "credit-card-outline",
  hex: "F019B",
  version: "1.5.54"
}, {
  name: "credit-card-plus",
  hex: "F0FF2",
  version: "4.0.96"
}, {
  name: "credit-card-plus-outline",
  hex: "F0676",
  version: "1.7.12"
}, {
  name: "credit-card-refund",
  hex: "F0FF3",
  version: "4.0.96"
}, {
  name: "credit-card-refund-outline",
  hex: "F0AA8",
  version: "2.7.94"
}, {
  name: "credit-card-remove",
  hex: "F0FAE",
  version: "4.0.96"
}, {
  name: "credit-card-remove-outline",
  hex: "F0FAF",
  version: "4.0.96"
}, {
  name: "credit-card-scan",
  hex: "F0FF4",
  version: "4.0.96"
}, {
  name: "credit-card-scan-outline",
  hex: "F019D",
  version: "1.5.54"
}, {
  name: "credit-card-settings",
  hex: "F0FF5",
  version: "4.0.96"
}, {
  name: "credit-card-settings-outline",
  hex: "F08D7",
  version: "2.3.50"
}, {
  name: "credit-card-wireless",
  hex: "F0802",
  version: "2.1.19"
}, {
  name: "credit-card-wireless-off",
  hex: "F057A",
  version: "1.5.54"
}, {
  name: "credit-card-wireless-off-outline",
  hex: "F057B",
  version: "1.5.54"
}, {
  name: "credit-card-wireless-outline",
  hex: "F0D6C",
  version: "3.4.93"
}, {
  name: "cricket",
  hex: "F0D6D",
  version: "3.4.93"
}, {
  name: "crop",
  hex: "F019E",
  version: "1.5.54"
}, {
  name: "crop-free",
  hex: "F019F",
  version: "1.5.54"
}, {
  name: "crop-landscape",
  hex: "F01A0",
  version: "1.5.54"
}, {
  name: "crop-portrait",
  hex: "F01A1",
  version: "1.5.54"
}, {
  name: "crop-rotate",
  hex: "F0696",
  version: "1.7.12"
}, {
  name: "crop-square",
  hex: "F01A2",
  version: "1.5.54"
}, {
  name: "crosshairs",
  hex: "F01A3",
  version: "1.5.54"
}, {
  name: "crosshairs-gps",
  hex: "F01A4",
  version: "1.5.54"
}, {
  name: "crosshairs-off",
  hex: "F0F45",
  version: "3.9.97"
}, {
  name: "crosshairs-question",
  hex: "F1136",
  version: "4.4.95"
}, {
  name: "crown",
  hex: "F01A5",
  version: "1.5.54"
}, {
  name: "crown-outline",
  hex: "F11D0",
  version: "4.5.95"
}, {
  name: "cryengine",
  hex: "F0959",
  version: "2.4.85"
}, {
  name: "crystal-ball",
  hex: "F0B2F",
  version: "2.8.94"
}, {
  name: "cube",
  hex: "F01A6",
  version: "1.5.54"
}, {
  name: "cube-outline",
  hex: "F01A7",
  version: "1.5.54"
}, {
  name: "cube-scan",
  hex: "F0B84",
  version: "3.0.39"
}, {
  name: "cube-send",
  hex: "F01A8",
  version: "1.5.54"
}, {
  name: "cube-unfolded",
  hex: "F01A9",
  version: "1.5.54"
}, {
  name: "cup",
  hex: "F01AA",
  version: "1.5.54"
}, {
  name: "cup-off",
  hex: "F05E5",
  version: "1.5.54"
}, {
  name: "cup-off-outline",
  hex: "F137D",
  version: "4.9.95"
}, {
  name: "cup-outline",
  hex: "F130F",
  version: "4.8.95"
}, {
  name: "cup-water",
  hex: "F01AB",
  version: "1.5.54"
}, {
  name: "cupboard",
  hex: "F0F46",
  version: "3.9.97"
}, {
  name: "cupboard-outline",
  hex: "F0F47",
  version: "3.9.97"
}, {
  name: "cupcake",
  hex: "F095A",
  version: "2.4.85"
}, {
  name: "curling",
  hex: "F0863",
  version: "2.1.99"
}, {
  name: "currency-bdt",
  hex: "F0864",
  version: "2.1.99"
}, {
  name: "currency-brl",
  hex: "F0B85",
  version: "3.0.39"
}, {
  name: "currency-btc",
  hex: "F01AC",
  version: "1.5.54"
}, {
  name: "currency-cny",
  hex: "F07BA",
  version: "2.0.46"
}, {
  name: "currency-eth",
  hex: "F07BB",
  version: "2.0.46"
}, {
  name: "currency-eur",
  hex: "F01AD",
  version: "1.5.54"
}, {
  name: "currency-eur-off",
  hex: "F1315",
  version: "4.8.95"
}, {
  name: "currency-gbp",
  hex: "F01AE",
  version: "1.5.54"
}, {
  name: "currency-ils",
  hex: "F0C61",
  version: "3.2.89"
}, {
  name: "currency-inr",
  hex: "F01AF",
  version: "1.5.54"
}, {
  name: "currency-jpy",
  hex: "F07BC",
  version: "2.0.46"
}, {
  name: "currency-krw",
  hex: "F07BD",
  version: "2.0.46"
}, {
  name: "currency-kzt",
  hex: "F0865",
  version: "2.1.99"
}, {
  name: "currency-ngn",
  hex: "F01B0",
  version: "1.5.54"
}, {
  name: "currency-php",
  hex: "F09E6",
  version: "2.5.94"
}, {
  name: "currency-rial",
  hex: "F0E9C",
  version: "3.7.94"
}, {
  name: "currency-rub",
  hex: "F01B1",
  version: "1.5.54"
}, {
  name: "currency-sign",
  hex: "F07BE",
  version: "2.0.46"
}, {
  name: "currency-try",
  hex: "F01B2",
  version: "1.5.54"
}, {
  name: "currency-twd",
  hex: "F07BF",
  version: "2.0.46"
}, {
  name: "currency-usd",
  hex: "F01C1",
  version: "1.5.54"
}, {
  name: "currency-usd-circle",
  hex: "F116B",
  version: "4.4.95"
}, {
  name: "currency-usd-circle-outline",
  hex: "F0178",
  version: "1.5.54"
}, {
  name: "currency-usd-off",
  hex: "F067A",
  version: "1.7.12"
}, {
  name: "current-ac",
  hex: "F095B",
  version: "2.4.85"
}, {
  name: "current-dc",
  hex: "F095C",
  version: "2.4.85"
}, {
  name: "cursor-default",
  hex: "F01C0",
  version: "1.5.54"
}, {
  name: "cursor-default-click",
  hex: "F0CFD",
  version: "3.3.92"
}, {
  name: "cursor-default-click-outline",
  hex: "F0CFE",
  version: "3.3.92"
}, {
  name: "cursor-default-gesture",
  hex: "F1127",
  version: "4.3.95"
}, {
  name: "cursor-default-gesture-outline",
  hex: "F1128",
  version: "4.3.95"
}, {
  name: "cursor-default-outline",
  hex: "F01BF",
  version: "1.5.54"
}, {
  name: "cursor-move",
  hex: "F01BE",
  version: "1.5.54"
}, {
  name: "cursor-pointer",
  hex: "F01BD",
  version: "1.5.54"
}, {
  name: "cursor-text",
  hex: "F05E7",
  version: "1.5.54"
}, {
  name: "database",
  hex: "F01BC",
  version: "1.5.54"
}, {
  name: "database-check",
  hex: "F0AA9",
  version: "2.7.94"
}, {
  name: "database-edit",
  hex: "F0B86",
  version: "3.0.39"
}, {
  name: "database-export",
  hex: "F095E",
  version: "2.4.85"
}, {
  name: "database-import",
  hex: "F095D",
  version: "2.4.85"
}, {
  name: "database-lock",
  hex: "F0AAA",
  version: "2.7.94"
}, {
  name: "database-marker",
  hex: "F12F6",
  version: "4.8.95"
}, {
  name: "database-minus",
  hex: "F01BB",
  version: "1.5.54"
}, {
  name: "database-plus",
  hex: "F01BA",
  version: "1.5.54"
}, {
  name: "database-refresh",
  hex: "F05C2",
  version: "1.5.54"
}, {
  name: "database-remove",
  hex: "F0D00",
  version: "3.3.92"
}, {
  name: "database-search",
  hex: "F0866",
  version: "2.1.99"
}, {
  name: "database-settings",
  hex: "F0D01",
  version: "3.3.92"
}, {
  name: "database-sync",
  hex: "F0CFF",
  version: "3.3.92"
}, {
  name: "death-star",
  hex: "F08D8",
  version: "2.3.50"
}, {
  name: "death-star-variant",
  hex: "F08D9",
  version: "2.3.50"
}, {
  name: "deathly-hallows",
  hex: "F0B87",
  version: "3.0.39"
}, {
  name: "debian",
  hex: "F08DA",
  version: "2.3.50"
}, {
  name: "debug-step-into",
  hex: "F01B9",
  version: "1.5.54"
}, {
  name: "debug-step-out",
  hex: "F01B8",
  version: "1.5.54"
}, {
  name: "debug-step-over",
  hex: "F01B7",
  version: "1.5.54"
}, {
  name: "decagram",
  hex: "F076C",
  version: "1.9.32"
}, {
  name: "decagram-outline",
  hex: "F076D",
  version: "1.9.32"
}, {
  name: "decimal",
  hex: "F10A1",
  version: "4.2.95"
}, {
  name: "decimal-comma",
  hex: "F10A2",
  version: "4.2.95"
}, {
  name: "decimal-comma-decrease",
  hex: "F10A3",
  version: "4.2.95"
}, {
  name: "decimal-comma-increase",
  hex: "F10A4",
  version: "4.2.95"
}, {
  name: "decimal-decrease",
  hex: "F01B6",
  version: "1.5.54"
}, {
  name: "decimal-increase",
  hex: "F01B5",
  version: "1.5.54"
}, {
  name: "delete",
  hex: "F01B4",
  version: "1.5.54"
}, {
  name: "delete-alert",
  hex: "F10A5",
  version: "4.2.95"
}, {
  name: "delete-alert-outline",
  hex: "F10A6",
  version: "4.2.95"
}, {
  name: "delete-circle",
  hex: "F0683",
  version: "1.7.12"
}, {
  name: "delete-circle-outline",
  hex: "F0B88",
  version: "3.0.39"
}, {
  name: "delete-empty",
  hex: "F06CC",
  version: "1.8.36"
}, {
  name: "delete-empty-outline",
  hex: "F0E9D",
  version: "3.7.94"
}, {
  name: "delete-forever",
  hex: "F05E8",
  version: "1.5.54"
}, {
  name: "delete-forever-outline",
  hex: "F0B89",
  version: "3.0.39"
}, {
  name: "delete-off",
  hex: "F10A7",
  version: "4.2.95"
}, {
  name: "delete-off-outline",
  hex: "F10A8",
  version: "4.2.95"
}, {
  name: "delete-outline",
  hex: "F09E7",
  version: "2.5.94"
}, {
  name: "delete-restore",
  hex: "F0819",
  version: "2.1.19"
}, {
  name: "delete-sweep",
  hex: "F05E9",
  version: "1.5.54"
}, {
  name: "delete-sweep-outline",
  hex: "F0C62",
  version: "3.2.89"
}, {
  name: "delete-variant",
  hex: "F01B3",
  version: "1.5.54"
}, {
  name: "delta",
  hex: "F01C2",
  version: "1.5.54"
}, {
  name: "desk",
  hex: "F1239",
  version: "4.6.95"
}, {
  name: "desk-lamp",
  hex: "F095F",
  version: "2.4.85"
}, {
  name: "deskphone",
  hex: "F01C3",
  version: "1.5.54"
}, {
  name: "desktop-classic",
  hex: "F07C0",
  version: "2.0.46"
}, {
  name: "desktop-mac",
  hex: "F01C4",
  version: "1.5.54"
}, {
  name: "desktop-mac-dashboard",
  hex: "F09E8",
  version: "2.5.94"
}, {
  name: "desktop-tower",
  hex: "F01C5",
  version: "1.5.54"
}, {
  name: "desktop-tower-monitor",
  hex: "F0AAB",
  version: "2.7.94"
}, {
  name: "details",
  hex: "F01C6",
  version: "1.5.54"
}, {
  name: "dev-to",
  hex: "F0D6E",
  version: "3.4.93"
}, {
  name: "developer-board",
  hex: "F0697",
  version: "1.7.12"
}, {
  name: "deviantart",
  hex: "F01C7",
  version: "1.5.54"
}, {
  name: "devices",
  hex: "F0FB0",
  version: "4.0.96"
}, {
  name: "diabetes",
  hex: "F1126",
  version: "4.3.95"
}, {
  name: "dialpad",
  hex: "F061C",
  version: "1.6.50"
}, {
  name: "diameter",
  hex: "F0C63",
  version: "3.2.89"
}, {
  name: "diameter-outline",
  hex: "F0C64",
  version: "3.2.89"
}, {
  name: "diameter-variant",
  hex: "F0C65",
  version: "3.2.89"
}, {
  name: "diamond",
  hex: "F0B8A",
  version: "3.0.39"
}, {
  name: "diamond-outline",
  hex: "F0B8B",
  version: "3.0.39"
}, {
  name: "diamond-stone",
  hex: "F01C8",
  version: "1.5.54"
}, {
  name: "dice-1",
  hex: "F01CA",
  version: "1.5.54"
}, {
  name: "dice-1-outline",
  hex: "F114A",
  version: "4.4.95"
}, {
  name: "dice-2",
  hex: "F01CB",
  version: "1.5.54"
}, {
  name: "dice-2-outline",
  hex: "F114B",
  version: "4.4.95"
}, {
  name: "dice-3",
  hex: "F01CC",
  version: "1.5.54"
}, {
  name: "dice-3-outline",
  hex: "F114C",
  version: "4.4.95"
}, {
  name: "dice-4",
  hex: "F01CD",
  version: "1.5.54"
}, {
  name: "dice-4-outline",
  hex: "F114D",
  version: "4.4.95"
}, {
  name: "dice-5",
  hex: "F01CE",
  version: "1.5.54"
}, {
  name: "dice-5-outline",
  hex: "F114E",
  version: "4.4.95"
}, {
  name: "dice-6",
  hex: "F01CF",
  version: "1.5.54"
}, {
  name: "dice-6-outline",
  hex: "F114F",
  version: "4.4.95"
}, {
  name: "dice-d10",
  hex: "F1153",
  version: "4.4.95"
}, {
  name: "dice-d10-outline",
  hex: "F076F",
  version: "1.9.32"
}, {
  name: "dice-d12",
  hex: "F1154",
  version: "4.4.95"
}, {
  name: "dice-d12-outline",
  hex: "F0867",
  version: "2.1.99"
}, {
  name: "dice-d20",
  hex: "F1155",
  version: "4.4.95"
}, {
  name: "dice-d20-outline",
  hex: "F05EA",
  version: "1.5.54"
}, {
  name: "dice-d4",
  hex: "F1150",
  version: "4.4.95"
}, {
  name: "dice-d4-outline",
  hex: "F05EB",
  version: "1.5.54"
}, {
  name: "dice-d6",
  hex: "F1151",
  version: "4.4.95"
}, {
  name: "dice-d6-outline",
  hex: "F05ED",
  version: "1.5.54"
}, {
  name: "dice-d8",
  hex: "F1152",
  version: "4.4.95"
}, {
  name: "dice-d8-outline",
  hex: "F05EC",
  version: "1.5.54"
}, {
  name: "dice-multiple",
  hex: "F076E",
  version: "1.9.32"
}, {
  name: "dice-multiple-outline",
  hex: "F1156",
  version: "4.4.95"
}, {
  name: "digital-ocean",
  hex: "F1237",
  version: "4.6.95"
}, {
  name: "dip-switch",
  hex: "F07C1",
  version: "2.0.46"
}, {
  name: "directions",
  hex: "F01D0",
  version: "1.5.54"
}, {
  name: "directions-fork",
  hex: "F0641",
  version: "1.6.50"
}, {
  name: "disc",
  hex: "F05EE",
  version: "1.5.54"
}, {
  name: "disc-alert",
  hex: "F01D1",
  version: "1.5.54"
}, {
  name: "disc-player",
  hex: "F0960",
  version: "2.4.85"
}, {
  name: "discord",
  hex: "F066F",
  version: "1.6.50"
}, {
  name: "dishwasher",
  hex: "F0AAC",
  version: "2.7.94"
}, {
  name: "dishwasher-alert",
  hex: "F11B8",
  version: "4.5.95"
}, {
  name: "dishwasher-off",
  hex: "F11B9",
  version: "4.5.95"
}, {
  name: "disqus",
  hex: "F01D2",
  version: "1.5.54"
}, {
  name: "distribute-horizontal-center",
  hex: "F11C9",
  version: "4.5.95"
}, {
  name: "distribute-horizontal-left",
  hex: "F11C8",
  version: "4.5.95"
}, {
  name: "distribute-horizontal-right",
  hex: "F11CA",
  version: "4.5.95"
}, {
  name: "distribute-vertical-bottom",
  hex: "F11CB",
  version: "4.5.95"
}, {
  name: "distribute-vertical-center",
  hex: "F11CC",
  version: "4.5.95"
}, {
  name: "distribute-vertical-top",
  hex: "F11CD",
  version: "4.5.95"
}, {
  name: "diving-flippers",
  hex: "F0DBF",
  version: "3.5.94"
}, {
  name: "diving-helmet",
  hex: "F0DC0",
  version: "3.5.94"
}, {
  name: "diving-scuba",
  hex: "F0DC1",
  version: "3.5.94"
}, {
  name: "diving-scuba-flag",
  hex: "F0DC2",
  version: "3.5.94"
}, {
  name: "diving-scuba-tank",
  hex: "F0DC3",
  version: "3.5.94"
}, {
  name: "diving-scuba-tank-multiple",
  hex: "F0DC4",
  version: "3.5.94"
}, {
  name: "diving-snorkel",
  hex: "F0DC5",
  version: "3.5.94"
}, {
  name: "division",
  hex: "F01D4",
  version: "1.5.54"
}, {
  name: "division-box",
  hex: "F01D5",
  version: "1.5.54"
}, {
  name: "dlna",
  hex: "F0A41",
  version: "2.6.95"
}, {
  name: "dna",
  hex: "F0684",
  version: "1.7.12"
}, {
  name: "dns",
  hex: "F01D6",
  version: "1.5.54"
}, {
  name: "dns-outline",
  hex: "F0B8C",
  version: "3.0.39"
}, {
  name: "do-not-disturb",
  hex: "F0698",
  version: "1.7.12"
}, {
  name: "do-not-disturb-off",
  hex: "F0699",
  version: "1.7.12"
}, {
  name: "dock-bottom",
  hex: "F10A9",
  version: "4.2.95"
}, {
  name: "dock-left",
  hex: "F10AA",
  version: "4.2.95"
}, {
  name: "dock-right",
  hex: "F10AB",
  version: "4.2.95"
}, {
  name: "dock-window",
  hex: "F10AC",
  version: "4.2.95"
}, {
  name: "docker",
  hex: "F0868",
  version: "2.1.99"
}, {
  name: "doctor",
  hex: "F0A42",
  version: "2.6.95"
}, {
  name: "dog",
  hex: "F0A43",
  version: "2.6.95"
}, {
  name: "dog-service",
  hex: "F0AAD",
  version: "2.7.94"
}, {
  name: "dog-side",
  hex: "F0A44",
  version: "2.6.95"
}, {
  name: "dolby",
  hex: "F06B3",
  version: "1.7.22"
}, {
  name: "dolly",
  hex: "F0E9E",
  version: "3.7.94"
}, {
  name: "domain",
  hex: "F01D7",
  version: "1.5.54"
}, {
  name: "domain-off",
  hex: "F0D6F",
  version: "3.4.93"
}, {
  name: "domain-plus",
  hex: "F10AD",
  version: "4.2.95"
}, {
  name: "domain-remove",
  hex: "F10AE",
  version: "4.2.95"
}, {
  name: "domino-mask",
  hex: "F1023",
  version: "4.1.95"
}, {
  name: "donkey",
  hex: "F07C2",
  version: "2.0.46"
}, {
  name: "door",
  hex: "F081A",
  version: "2.1.19"
}, {
  name: "door-closed",
  hex: "F081B",
  version: "2.1.19"
}, {
  name: "door-closed-lock",
  hex: "F10AF",
  version: "4.2.95"
}, {
  name: "door-open",
  hex: "F081C",
  version: "2.1.19"
}, {
  name: "doorbell",
  hex: "F12E6",
  version: "4.8.95"
}, {
  name: "doorbell-video",
  hex: "F0869",
  version: "2.1.99"
}, {
  name: "dot-net",
  hex: "F0AAE",
  version: "2.7.94"
}, {
  name: "dots-horizontal",
  hex: "F01D8",
  version: "1.5.54"
}, {
  name: "dots-horizontal-circle",
  hex: "F07C3",
  version: "2.0.46"
}, {
  name: "dots-horizontal-circle-outline",
  hex: "F0B8D",
  version: "3.0.39"
}, {
  name: "dots-vertical",
  hex: "F01D9",
  version: "1.5.54"
}, {
  name: "dots-vertical-circle",
  hex: "F07C4",
  version: "2.0.46"
}, {
  name: "dots-vertical-circle-outline",
  hex: "F0B8E",
  version: "3.0.39"
}, {
  name: "douban",
  hex: "F069A",
  version: "1.7.12"
}, {
  name: "download",
  hex: "F01DA",
  version: "1.5.54"
}, {
  name: "download-lock",
  hex: "F1320",
  version: "4.9.95"
}, {
  name: "download-lock-outline",
  hex: "F1321",
  version: "4.9.95"
}, {
  name: "download-multiple",
  hex: "F09E9",
  version: "2.5.94"
}, {
  name: "download-network",
  hex: "F06F4",
  version: "1.8.36"
}, {
  name: "download-network-outline",
  hex: "F0C66",
  version: "3.2.89"
}, {
  name: "download-off",
  hex: "F10B0",
  version: "4.2.95"
}, {
  name: "download-off-outline",
  hex: "F10B1",
  version: "4.2.95"
}, {
  name: "download-outline",
  hex: "F0B8F",
  version: "3.0.39"
}, {
  name: "drag",
  hex: "F01DB",
  version: "1.5.54"
}, {
  name: "drag-horizontal",
  hex: "F01DC",
  version: "1.5.54"
}, {
  name: "drag-horizontal-variant",
  hex: "F12F0",
  version: "4.8.95"
}, {
  name: "drag-variant",
  hex: "F0B90",
  version: "3.0.39"
}, {
  name: "drag-vertical",
  hex: "F01DD",
  version: "1.5.54"
}, {
  name: "drag-vertical-variant",
  hex: "F12F1",
  version: "4.8.95"
}, {
  name: "drama-masks",
  hex: "F0D02",
  version: "3.3.92"
}, {
  name: "draw",
  hex: "F0F49",
  version: "3.9.97"
}, {
  name: "drawing",
  hex: "F01DE",
  version: "1.5.54"
}, {
  name: "drawing-box",
  hex: "F01DF",
  version: "1.5.54"
}, {
  name: "dresser",
  hex: "F0F4A",
  version: "3.9.97"
}, {
  name: "dresser-outline",
  hex: "F0F4B",
  version: "3.9.97"
}, {
  name: "drone",
  hex: "F01E2",
  version: "1.5.54"
}, {
  name: "dropbox",
  hex: "F01E3",
  version: "1.5.54"
}, {
  name: "drupal",
  hex: "F01E4",
  version: "1.5.54"
}, {
  name: "duck",
  hex: "F01E5",
  version: "1.5.54"
}, {
  name: "dumbbell",
  hex: "F01E6",
  version: "1.5.54"
}, {
  name: "dump-truck",
  hex: "F0C67",
  version: "3.2.89"
}, {
  name: "ear-hearing",
  hex: "F07C5",
  version: "2.0.46"
}, {
  name: "ear-hearing-off",
  hex: "F0A45",
  version: "2.6.95"
}, {
  name: "earth",
  hex: "F01E7",
  version: "1.5.54"
}, {
  name: "earth-arrow-right",
  hex: "F1311",
  version: "4.8.95"
}, {
  name: "earth-box",
  hex: "F06CD",
  version: "1.8.36"
}, {
  name: "earth-box-off",
  hex: "F06CE",
  version: "1.8.36"
}, {
  name: "earth-off",
  hex: "F01E8",
  version: "1.5.54"
}, {
  name: "egg",
  hex: "F0AAF",
  version: "2.7.94"
}, {
  name: "egg-easter",
  hex: "F0AB0",
  version: "2.7.94"
}, {
  name: "eight-track",
  hex: "F09EA",
  version: "2.5.94"
}, {
  name: "eject",
  hex: "F01EA",
  version: "1.5.54"
}, {
  name: "eject-outline",
  hex: "F0B91",
  version: "3.0.39"
}, {
  name: "electric-switch",
  hex: "F0E9F",
  version: "3.7.94"
}, {
  name: "electric-switch-closed",
  hex: "F10D9",
  version: "4.3.95"
}, {
  name: "electron-framework",
  hex: "F1024",
  version: "4.1.95"
}, {
  name: "elephant",
  hex: "F07C6",
  version: "2.0.46"
}, {
  name: "elevation-decline",
  hex: "F01EB",
  version: "1.5.54"
}, {
  name: "elevation-rise",
  hex: "F01EC",
  version: "1.5.54"
}, {
  name: "elevator",
  hex: "F01ED",
  version: "1.5.54"
}, {
  name: "elevator-down",
  hex: "F12C2",
  version: "4.8.95"
}, {
  name: "elevator-passenger",
  hex: "F1381",
  version: "4.9.95"
}, {
  name: "elevator-up",
  hex: "F12C1",
  version: "4.8.95"
}, {
  name: "ellipse",
  hex: "F0EA0",
  version: "3.7.94"
}, {
  name: "ellipse-outline",
  hex: "F0EA1",
  version: "3.7.94"
}, {
  name: "email",
  hex: "F01EE",
  version: "1.5.54"
}, {
  name: "email-alert",
  hex: "F06CF",
  version: "1.8.36"
}, {
  name: "email-alert-outline",
  hex: "F0D42",
  version: "3.4.93"
}, {
  name: "email-box",
  hex: "F0D03",
  version: "3.3.92"
}, {
  name: "email-check",
  hex: "F0AB1",
  version: "2.7.94"
}, {
  name: "email-check-outline",
  hex: "F0AB2",
  version: "2.7.94"
}, {
  name: "email-edit",
  hex: "F0EE3",
  version: "3.8.95"
}, {
  name: "email-edit-outline",
  hex: "F0EE4",
  version: "3.8.95"
}, {
  name: "email-lock",
  hex: "F01F1",
  version: "1.5.54"
}, {
  name: "email-mark-as-unread",
  hex: "F0B92",
  version: "3.0.39"
}, {
  name: "email-minus",
  hex: "F0EE5",
  version: "3.8.95"
}, {
  name: "email-minus-outline",
  hex: "F0EE6",
  version: "3.8.95"
}, {
  name: "email-multiple",
  hex: "F0EE7",
  version: "3.8.95"
}, {
  name: "email-multiple-outline",
  hex: "F0EE8",
  version: "3.8.95"
}, {
  name: "email-newsletter",
  hex: "F0FB1",
  version: "4.0.96"
}, {
  name: "email-open",
  hex: "F01EF",
  version: "1.5.54"
}, {
  name: "email-open-multiple",
  hex: "F0EE9",
  version: "3.8.95"
}, {
  name: "email-open-multiple-outline",
  hex: "F0EEA",
  version: "3.8.95"
}, {
  name: "email-open-outline",
  hex: "F05EF",
  version: "1.5.54"
}, {
  name: "email-outline",
  hex: "F01F0",
  version: "1.5.54"
}, {
  name: "email-plus",
  hex: "F09EB",
  version: "2.5.94"
}, {
  name: "email-plus-outline",
  hex: "F09EC",
  version: "2.5.94"
}, {
  name: "email-receive",
  hex: "F10DA",
  version: "4.3.95"
}, {
  name: "email-receive-outline",
  hex: "F10DB",
  version: "4.3.95"
}, {
  name: "email-search",
  hex: "F0961",
  version: "2.4.85"
}, {
  name: "email-search-outline",
  hex: "F0962",
  version: "2.4.85"
}, {
  name: "email-send",
  hex: "F10DC",
  version: "4.3.95"
}, {
  name: "email-send-outline",
  hex: "F10DD",
  version: "4.3.95"
}, {
  name: "email-sync",
  hex: "F12C7",
  version: "4.8.95"
}, {
  name: "email-sync-outline",
  hex: "F12C8",
  version: "4.8.95"
}, {
  name: "email-variant",
  hex: "F05F0",
  version: "1.5.54"
}, {
  name: "ember",
  hex: "F0B30",
  version: "2.8.94"
}, {
  name: "emby",
  hex: "F06B4",
  version: "1.7.22"
}, {
  name: "emoticon",
  hex: "F0C68",
  version: "3.2.89"
}, {
  name: "emoticon-angry",
  hex: "F0C69",
  version: "3.2.89"
}, {
  name: "emoticon-angry-outline",
  hex: "F0C6A",
  version: "3.2.89"
}, {
  name: "emoticon-confused",
  hex: "F10DE",
  version: "4.3.95"
}, {
  name: "emoticon-confused-outline",
  hex: "F10DF",
  version: "4.3.95"
}, {
  name: "emoticon-cool",
  hex: "F0C6B",
  version: "3.2.89"
}, {
  name: "emoticon-cool-outline",
  hex: "F01F3",
  version: "1.5.54"
}, {
  name: "emoticon-cry",
  hex: "F0C6C",
  version: "3.2.89"
}, {
  name: "emoticon-cry-outline",
  hex: "F0C6D",
  version: "3.2.89"
}, {
  name: "emoticon-dead",
  hex: "F0C6E",
  version: "3.2.89"
}, {
  name: "emoticon-dead-outline",
  hex: "F069B",
  version: "1.7.12"
}, {
  name: "emoticon-devil",
  hex: "F0C6F",
  version: "3.2.89"
}, {
  name: "emoticon-devil-outline",
  hex: "F01F4",
  version: "1.5.54"
}, {
  name: "emoticon-excited",
  hex: "F0C70",
  version: "3.2.89"
}, {
  name: "emoticon-excited-outline",
  hex: "F069C",
  version: "1.7.12"
}, {
  name: "emoticon-frown",
  hex: "F0F4C",
  version: "3.9.97"
}, {
  name: "emoticon-frown-outline",
  hex: "F0F4D",
  version: "3.9.97"
}, {
  name: "emoticon-happy",
  hex: "F0C71",
  version: "3.2.89"
}, {
  name: "emoticon-happy-outline",
  hex: "F01F5",
  version: "1.5.54"
}, {
  name: "emoticon-kiss",
  hex: "F0C72",
  version: "3.2.89"
}, {
  name: "emoticon-kiss-outline",
  hex: "F0C73",
  version: "3.2.89"
}, {
  name: "emoticon-lol",
  hex: "F1214",
  version: "4.6.95"
}, {
  name: "emoticon-lol-outline",
  hex: "F1215",
  version: "4.6.95"
}, {
  name: "emoticon-neutral",
  hex: "F0C74",
  version: "3.2.89"
}, {
  name: "emoticon-neutral-outline",
  hex: "F01F6",
  version: "1.5.54"
}, {
  name: "emoticon-outline",
  hex: "F01F2",
  version: "1.5.54"
}, {
  name: "emoticon-poop",
  hex: "F01F7",
  version: "1.5.54"
}, {
  name: "emoticon-poop-outline",
  hex: "F0C75",
  version: "3.2.89"
}, {
  name: "emoticon-sad",
  hex: "F0C76",
  version: "3.2.89"
}, {
  name: "emoticon-sad-outline",
  hex: "F01F8",
  version: "1.5.54"
}, {
  name: "emoticon-tongue",
  hex: "F01F9",
  version: "1.5.54"
}, {
  name: "emoticon-tongue-outline",
  hex: "F0C77",
  version: "3.2.89"
}, {
  name: "emoticon-wink",
  hex: "F0C78",
  version: "3.2.89"
}, {
  name: "emoticon-wink-outline",
  hex: "F0C79",
  version: "3.2.89"
}, {
  name: "engine",
  hex: "F01FA",
  version: "1.5.54"
}, {
  name: "engine-off",
  hex: "F0A46",
  version: "2.6.95"
}, {
  name: "engine-off-outline",
  hex: "F0A47",
  version: "2.6.95"
}, {
  name: "engine-outline",
  hex: "F01FB",
  version: "1.5.54"
}, {
  name: "epsilon",
  hex: "F10E0",
  version: "4.3.95"
}, {
  name: "equal",
  hex: "F01FC",
  version: "1.5.54"
}, {
  name: "equal-box",
  hex: "F01FD",
  version: "1.5.54"
}, {
  name: "equalizer",
  hex: "F0EA2",
  version: "3.7.94"
}, {
  name: "equalizer-outline",
  hex: "F0EA3",
  version: "3.7.94"
}, {
  name: "eraser",
  hex: "F01FE",
  version: "1.5.54"
}, {
  name: "eraser-variant",
  hex: "F0642",
  version: "1.6.50"
}, {
  name: "escalator",
  hex: "F01FF",
  version: "1.5.54"
}, {
  name: "escalator-box",
  hex: "F1399",
  version: "5.0.45"
}, {
  name: "escalator-down",
  hex: "F12C0",
  version: "4.8.95"
}, {
  name: "escalator-up",
  hex: "F12BF",
  version: "4.8.95"
}, {
  name: "eslint",
  hex: "F0C7A",
  version: "3.2.89"
}, {
  name: "et",
  hex: "F0AB3",
  version: "2.7.94"
}, {
  name: "ethereum",
  hex: "F086A",
  version: "2.1.99"
}, {
  name: "ethernet",
  hex: "F0200",
  version: "1.5.54"
}, {
  name: "ethernet-cable",
  hex: "F0201",
  version: "1.5.54"
}, {
  name: "ethernet-cable-off",
  hex: "F0202",
  version: "1.5.54"
}, {
  name: "ev-station",
  hex: "F05F1",
  version: "1.5.54"
}, {
  name: "evernote",
  hex: "F0204",
  version: "1.5.54"
}, {
  name: "excavator",
  hex: "F1025",
  version: "4.1.95"
}, {
  name: "exclamation",
  hex: "F0205",
  version: "1.5.54"
}, {
  name: "exclamation-thick",
  hex: "F1238",
  version: "4.6.95"
}, {
  name: "exit-run",
  hex: "F0A48",
  version: "2.6.95"
}, {
  name: "exit-to-app",
  hex: "F0206",
  version: "1.5.54"
}, {
  name: "expand-all",
  hex: "F0AB4",
  version: "2.7.94"
}, {
  name: "expand-all-outline",
  hex: "F0AB5",
  version: "2.7.94"
}, {
  name: "expansion-card",
  hex: "F08AE",
  version: "2.2.43"
}, {
  name: "expansion-card-variant",
  hex: "F0FB2",
  version: "4.0.96"
}, {
  name: "exponent",
  hex: "F0963",
  version: "2.4.85"
}, {
  name: "exponent-box",
  hex: "F0964",
  version: "2.4.85"
}, {
  name: "export",
  hex: "F0207",
  version: "1.5.54"
}, {
  name: "export-variant",
  hex: "F0B93",
  version: "3.0.39"
}, {
  name: "eye",
  hex: "F0208",
  version: "1.5.54"
}, {
  name: "eye-check",
  hex: "F0D04",
  version: "3.3.92"
}, {
  name: "eye-check-outline",
  hex: "F0D05",
  version: "3.3.92"
}, {
  name: "eye-circle",
  hex: "F0B94",
  version: "3.0.39"
}, {
  name: "eye-circle-outline",
  hex: "F0B95",
  version: "3.0.39"
}, {
  name: "eye-minus",
  hex: "F1026",
  version: "4.1.95"
}, {
  name: "eye-minus-outline",
  hex: "F1027",
  version: "4.1.95"
}, {
  name: "eye-off",
  hex: "F0209",
  version: "1.5.54"
}, {
  name: "eye-off-outline",
  hex: "F06D1",
  version: "1.8.36"
}, {
  name: "eye-outline",
  hex: "F06D0",
  version: "1.8.36"
}, {
  name: "eye-plus",
  hex: "F086B",
  version: "2.1.99"
}, {
  name: "eye-plus-outline",
  hex: "F086C",
  version: "2.1.99"
}, {
  name: "eye-settings",
  hex: "F086D",
  version: "2.1.99"
}, {
  name: "eye-settings-outline",
  hex: "F086E",
  version: "2.1.99"
}, {
  name: "eyedropper",
  hex: "F020A",
  version: "1.5.54"
}, {
  name: "eyedropper-variant",
  hex: "F020B",
  version: "1.5.54"
}, {
  name: "face",
  hex: "F0643",
  version: "1.6.50"
}, {
  name: "face-agent",
  hex: "F0D70",
  version: "3.4.93"
}, {
  name: "face-outline",
  hex: "F0B96",
  version: "3.0.39"
}, {
  name: "face-profile",
  hex: "F0644",
  version: "1.6.50"
}, {
  name: "face-profile-woman",
  hex: "F1076",
  version: "4.2.95"
}, {
  name: "face-recognition",
  hex: "F0C7B",
  version: "3.2.89"
}, {
  name: "face-woman",
  hex: "F1077",
  version: "4.2.95"
}, {
  name: "face-woman-outline",
  hex: "F1078",
  version: "4.2.95"
}, {
  name: "facebook",
  hex: "F020C",
  version: "1.5.54"
}, {
  name: "facebook-messenger",
  hex: "F020E",
  version: "1.5.54"
}, {
  name: "facebook-workplace",
  hex: "F0B31",
  version: "2.8.94"
}, {
  name: "factory",
  hex: "F020F",
  version: "1.5.54"
}, {
  name: "fan",
  hex: "F0210",
  version: "1.5.54"
}, {
  name: "fan-off",
  hex: "F081D",
  version: "2.1.19"
}, {
  name: "fast-forward",
  hex: "F0211",
  version: "1.5.54"
}, {
  name: "fast-forward-10",
  hex: "F0D71",
  version: "3.4.93"
}, {
  name: "fast-forward-30",
  hex: "F0D06",
  version: "3.3.92"
}, {
  name: "fast-forward-5",
  hex: "F11F8",
  version: "4.6.95"
}, {
  name: "fast-forward-outline",
  hex: "F06D2",
  version: "1.8.36"
}, {
  name: "fax",
  hex: "F0212",
  version: "1.5.54"
}, {
  name: "feather",
  hex: "F06D3",
  version: "1.8.36"
}, {
  name: "feature-search",
  hex: "F0A49",
  version: "2.6.95"
}, {
  name: "feature-search-outline",
  hex: "F0A4A",
  version: "2.6.95"
}, {
  name: "fedora",
  hex: "F08DB",
  version: "2.3.50"
}, {
  name: "ferris-wheel",
  hex: "F0EA4",
  version: "3.7.94"
}, {
  name: "ferry",
  hex: "F0213",
  version: "1.5.54"
}, {
  name: "file",
  hex: "F0214",
  version: "1.5.54"
}, {
  name: "file-account",
  hex: "F073B",
  version: "1.9.32"
}, {
  name: "file-account-outline",
  hex: "F1028",
  version: "4.1.95"
}, {
  name: "file-alert",
  hex: "F0A4B",
  version: "2.6.95"
}, {
  name: "file-alert-outline",
  hex: "F0A4C",
  version: "2.6.95"
}, {
  name: "file-cabinet",
  hex: "F0AB6",
  version: "2.7.94"
}, {
  name: "file-cad",
  hex: "F0EEB",
  version: "3.8.95"
}, {
  name: "file-cad-box",
  hex: "F0EEC",
  version: "3.8.95"
}, {
  name: "file-cancel",
  hex: "F0DC6",
  version: "3.5.94"
}, {
  name: "file-cancel-outline",
  hex: "F0DC7",
  version: "3.5.94"
}, {
  name: "file-certificate",
  hex: "F1186",
  version: "4.4.95"
}, {
  name: "file-certificate-outline",
  hex: "F1187",
  version: "4.4.95"
}, {
  name: "file-chart",
  hex: "F0215",
  version: "1.5.54"
}, {
  name: "file-chart-outline",
  hex: "F1029",
  version: "4.1.95"
}, {
  name: "file-check",
  hex: "F0216",
  version: "1.5.54"
}, {
  name: "file-check-outline",
  hex: "F0E29",
  version: "3.6.95"
}, {
  name: "file-clock",
  hex: "F12E1",
  version: "4.8.95"
}, {
  name: "file-clock-outline",
  hex: "F12E2",
  version: "4.8.95"
}, {
  name: "file-cloud",
  hex: "F0217",
  version: "1.5.54"
}, {
  name: "file-cloud-outline",
  hex: "F102A",
  version: "4.1.95"
}, {
  name: "file-code",
  hex: "F022E",
  version: "1.5.54"
}, {
  name: "file-code-outline",
  hex: "F102B",
  version: "4.1.95"
}, {
  name: "file-cog",
  hex: "F107B",
  version: "4.2.95"
}, {
  name: "file-cog-outline",
  hex: "F107C",
  version: "4.2.95"
}, {
  name: "file-compare",
  hex: "F08AA",
  version: "2.2.43"
}, {
  name: "file-delimited",
  hex: "F0218",
  version: "1.5.54"
}, {
  name: "file-delimited-outline",
  hex: "F0EA5",
  version: "3.7.94"
}, {
  name: "file-document",
  hex: "F0219",
  version: "1.5.54"
}, {
  name: "file-document-edit",
  hex: "F0DC8",
  version: "3.5.94"
}, {
  name: "file-document-edit-outline",
  hex: "F0DC9",
  version: "3.5.94"
}, {
  name: "file-document-outline",
  hex: "F09EE",
  version: "2.5.94"
}, {
  name: "file-download",
  hex: "F0965",
  version: "2.4.85"
}, {
  name: "file-download-outline",
  hex: "F0966",
  version: "2.4.85"
}, {
  name: "file-edit",
  hex: "F11E7",
  version: "4.5.95"
}, {
  name: "file-edit-outline",
  hex: "F11E8",
  version: "4.5.95"
}, {
  name: "file-excel",
  hex: "F021B",
  version: "1.5.54"
}, {
  name: "file-excel-box",
  hex: "F021C",
  version: "1.5.54"
}, {
  name: "file-excel-box-outline",
  hex: "F102C",
  version: "4.1.95"
}, {
  name: "file-excel-outline",
  hex: "F102D",
  version: "4.1.95"
}, {
  name: "file-export",
  hex: "F021D",
  version: "1.5.54"
}, {
  name: "file-export-outline",
  hex: "F102E",
  version: "4.1.95"
}, {
  name: "file-eye",
  hex: "F0DCA",
  version: "3.5.94"
}, {
  name: "file-eye-outline",
  hex: "F0DCB",
  version: "3.5.94"
}, {
  name: "file-find",
  hex: "F021E",
  version: "1.5.54"
}, {
  name: "file-find-outline",
  hex: "F0B97",
  version: "3.0.39"
}, {
  name: "file-hidden",
  hex: "F0613",
  version: "1.5.54"
}, {
  name: "file-image",
  hex: "F021F",
  version: "1.5.54"
}, {
  name: "file-image-outline",
  hex: "F0EB0",
  version: "3.7.94"
}, {
  name: "file-import",
  hex: "F0220",
  version: "1.5.54"
}, {
  name: "file-import-outline",
  hex: "F102F",
  version: "4.1.95"
}, {
  name: "file-key",
  hex: "F1184",
  version: "4.4.95"
}, {
  name: "file-key-outline",
  hex: "F1185",
  version: "4.4.95"
}, {
  name: "file-link",
  hex: "F1177",
  version: "4.4.95"
}, {
  name: "file-link-outline",
  hex: "F1178",
  version: "4.4.95"
}, {
  name: "file-lock",
  hex: "F0221",
  version: "1.5.54"
}, {
  name: "file-lock-outline",
  hex: "F1030",
  version: "4.1.95"
}, {
  name: "file-move",
  hex: "F0AB9",
  version: "2.7.94"
}, {
  name: "file-move-outline",
  hex: "F1031",
  version: "4.1.95"
}, {
  name: "file-multiple",
  hex: "F0222",
  version: "1.5.54"
}, {
  name: "file-multiple-outline",
  hex: "F1032",
  version: "4.1.95"
}, {
  name: "file-music",
  hex: "F0223",
  version: "1.5.54"
}, {
  name: "file-music-outline",
  hex: "F0E2A",
  version: "3.6.95"
}, {
  name: "file-outline",
  hex: "F0224",
  version: "1.5.54"
}, {
  name: "file-pdf",
  hex: "F0225",
  version: "1.5.54"
}, {
  name: "file-pdf-box",
  hex: "F0226",
  version: "1.5.54"
}, {
  name: "file-pdf-box-outline",
  hex: "F0FB3",
  version: "4.0.96"
}, {
  name: "file-pdf-outline",
  hex: "F0E2D",
  version: "3.6.95"
}, {
  name: "file-percent",
  hex: "F081E",
  version: "2.1.19"
}, {
  name: "file-percent-outline",
  hex: "F1033",
  version: "4.1.95"
}, {
  name: "file-phone",
  hex: "F1179",
  version: "4.4.95"
}, {
  name: "file-phone-outline",
  hex: "F117A",
  version: "4.4.95"
}, {
  name: "file-plus",
  hex: "F0752",
  version: "1.9.32"
}, {
  name: "file-plus-outline",
  hex: "F0EED",
  version: "3.8.95"
}, {
  name: "file-powerpoint",
  hex: "F0227",
  version: "1.5.54"
}, {
  name: "file-powerpoint-box",
  hex: "F0228",
  version: "1.5.54"
}, {
  name: "file-powerpoint-box-outline",
  hex: "F1034",
  version: "4.1.95"
}, {
  name: "file-powerpoint-outline",
  hex: "F1035",
  version: "4.1.95"
}, {
  name: "file-presentation-box",
  hex: "F0229",
  version: "1.5.54"
}, {
  name: "file-question",
  hex: "F086F",
  version: "2.1.99"
}, {
  name: "file-question-outline",
  hex: "F1036",
  version: "4.1.95"
}, {
  name: "file-refresh",
  hex: "F0918",
  version: "2.3.50"
}, {
  name: "file-refresh-outline",
  hex: "F0541",
  version: "1.5.54"
}, {
  name: "file-remove",
  hex: "F0B98",
  version: "3.0.39"
}, {
  name: "file-remove-outline",
  hex: "F1037",
  version: "4.1.95"
}, {
  name: "file-replace",
  hex: "F0B32",
  version: "2.8.94"
}, {
  name: "file-replace-outline",
  hex: "F0B33",
  version: "2.8.94"
}, {
  name: "file-restore",
  hex: "F0670",
  version: "1.6.50"
}, {
  name: "file-restore-outline",
  hex: "F1038",
  version: "4.1.95"
}, {
  name: "file-search",
  hex: "F0C7C",
  version: "3.2.89"
}, {
  name: "file-search-outline",
  hex: "F0C7D",
  version: "3.2.89"
}, {
  name: "file-send",
  hex: "F022A",
  version: "1.5.54"
}, {
  name: "file-send-outline",
  hex: "F1039",
  version: "4.1.95"
}, {
  name: "file-settings",
  hex: "F1079",
  version: "4.2.95"
}, {
  name: "file-settings-outline",
  hex: "F107A",
  version: "4.2.95"
}, {
  name: "file-star",
  hex: "F103A",
  version: "4.1.95"
}, {
  name: "file-star-outline",
  hex: "F103B",
  version: "4.1.95"
}, {
  name: "file-swap",
  hex: "F0FB4",
  version: "4.0.96"
}, {
  name: "file-swap-outline",
  hex: "F0FB5",
  version: "4.0.96"
}, {
  name: "file-sync",
  hex: "F1216",
  version: "4.6.95"
}, {
  name: "file-sync-outline",
  hex: "F1217",
  version: "4.6.95"
}, {
  name: "file-table",
  hex: "F0C7E",
  version: "3.2.89"
}, {
  name: "file-table-box",
  hex: "F10E1",
  version: "4.3.95"
}, {
  name: "file-table-box-multiple",
  hex: "F10E2",
  version: "4.3.95"
}, {
  name: "file-table-box-multiple-outline",
  hex: "F10E3",
  version: "4.3.95"
}, {
  name: "file-table-box-outline",
  hex: "F10E4",
  version: "4.3.95"
}, {
  name: "file-table-outline",
  hex: "F0C7F",
  version: "3.2.89"
}, {
  name: "file-tree",
  hex: "F0645",
  version: "1.6.50"
}, {
  name: "file-undo",
  hex: "F08DC",
  version: "2.3.50"
}, {
  name: "file-undo-outline",
  hex: "F103C",
  version: "4.1.95"
}, {
  name: "file-upload",
  hex: "F0A4D",
  version: "2.6.95"
}, {
  name: "file-upload-outline",
  hex: "F0A4E",
  version: "2.6.95"
}, {
  name: "file-video",
  hex: "F022B",
  version: "1.5.54"
}, {
  name: "file-video-outline",
  hex: "F0E2C",
  version: "3.6.95"
}, {
  name: "file-word",
  hex: "F022C",
  version: "1.5.54"
}, {
  name: "file-word-box",
  hex: "F022D",
  version: "1.5.54"
}, {
  name: "file-word-box-outline",
  hex: "F103D",
  version: "4.1.95"
}, {
  name: "file-word-outline",
  hex: "F103E",
  version: "4.1.95"
}, {
  name: "film",
  hex: "F022F",
  version: "1.5.54"
}, {
  name: "filmstrip",
  hex: "F0230",
  version: "1.5.54"
}, {
  name: "filmstrip-box",
  hex: "F0332",
  version: "1.5.54"
}, {
  name: "filmstrip-box-multiple",
  hex: "F0D18",
  version: "3.3.92"
}, {
  name: "filmstrip-off",
  hex: "F0231",
  version: "1.5.54"
}, {
  name: "filter",
  hex: "F0232",
  version: "1.5.54"
}, {
  name: "filter-menu",
  hex: "F10E5",
  version: "4.3.95"
}, {
  name: "filter-menu-outline",
  hex: "F10E6",
  version: "4.3.95"
}, {
  name: "filter-minus",
  hex: "F0EEE",
  version: "3.8.95"
}, {
  name: "filter-minus-outline",
  hex: "F0EEF",
  version: "3.8.95"
}, {
  name: "filter-outline",
  hex: "F0233",
  version: "1.5.54"
}, {
  name: "filter-plus",
  hex: "F0EF0",
  version: "3.8.95"
}, {
  name: "filter-plus-outline",
  hex: "F0EF1",
  version: "3.8.95"
}, {
  name: "filter-remove",
  hex: "F0234",
  version: "1.5.54"
}, {
  name: "filter-remove-outline",
  hex: "F0235",
  version: "1.5.54"
}, {
  name: "filter-variant",
  hex: "F0236",
  version: "1.5.54"
}, {
  name: "filter-variant-minus",
  hex: "F1112",
  version: "4.3.95"
}, {
  name: "filter-variant-plus",
  hex: "F1113",
  version: "4.3.95"
}, {
  name: "filter-variant-remove",
  hex: "F103F",
  version: "4.1.95"
}, {
  name: "finance",
  hex: "F081F",
  version: "2.1.19"
}, {
  name: "find-replace",
  hex: "F06D4",
  version: "1.8.36"
}, {
  name: "fingerprint",
  hex: "F0237",
  version: "1.5.54"
}, {
  name: "fingerprint-off",
  hex: "F0EB1",
  version: "3.7.94"
}, {
  name: "fire",
  hex: "F0238",
  version: "1.5.54"
}, {
  name: "fire-extinguisher",
  hex: "F0EF2",
  version: "3.8.95"
}, {
  name: "fire-hydrant",
  hex: "F1137",
  version: "4.4.95"
}, {
  name: "fire-hydrant-alert",
  hex: "F1138",
  version: "4.4.95"
}, {
  name: "fire-hydrant-off",
  hex: "F1139",
  version: "4.4.95"
}, {
  name: "fire-truck",
  hex: "F08AB",
  version: "2.2.43"
}, {
  name: "firebase",
  hex: "F0967",
  version: "2.4.85"
}, {
  name: "firefox",
  hex: "F0239",
  version: "1.5.54"
}, {
  name: "fireplace",
  hex: "F0E2E",
  version: "3.6.95"
}, {
  name: "fireplace-off",
  hex: "F0E2F",
  version: "3.6.95"
}, {
  name: "firework",
  hex: "F0E30",
  version: "3.6.95"
}, {
  name: "fish",
  hex: "F023A",
  version: "1.5.54"
}, {
  name: "fishbowl",
  hex: "F0EF3",
  version: "3.8.95"
}, {
  name: "fishbowl-outline",
  hex: "F0EF4",
  version: "3.8.95"
}, {
  name: "fit-to-page",
  hex: "F0EF5",
  version: "3.8.95"
}, {
  name: "fit-to-page-outline",
  hex: "F0EF6",
  version: "3.8.95"
}, {
  name: "flag",
  hex: "F023B",
  version: "1.5.54"
}, {
  name: "flag-checkered",
  hex: "F023C",
  version: "1.5.54"
}, {
  name: "flag-minus",
  hex: "F0B99",
  version: "3.0.39"
}, {
  name: "flag-minus-outline",
  hex: "F10B2",
  version: "4.2.95"
}, {
  name: "flag-outline",
  hex: "F023D",
  version: "1.5.54"
}, {
  name: "flag-plus",
  hex: "F0B9A",
  version: "3.0.39"
}, {
  name: "flag-plus-outline",
  hex: "F10B3",
  version: "4.2.95"
}, {
  name: "flag-remove",
  hex: "F0B9B",
  version: "3.0.39"
}, {
  name: "flag-remove-outline",
  hex: "F10B4",
  version: "4.2.95"
}, {
  name: "flag-triangle",
  hex: "F023F",
  version: "1.5.54"
}, {
  name: "flag-variant",
  hex: "F0240",
  version: "1.5.54"
}, {
  name: "flag-variant-outline",
  hex: "F023E",
  version: "1.5.54"
}, {
  name: "flare",
  hex: "F0D72",
  version: "3.4.93"
}, {
  name: "flash",
  hex: "F0241",
  version: "1.5.54"
}, {
  name: "flash-alert",
  hex: "F0EF7",
  version: "3.8.95"
}, {
  name: "flash-alert-outline",
  hex: "F0EF8",
  version: "3.8.95"
}, {
  name: "flash-auto",
  hex: "F0242",
  version: "1.5.54"
}, {
  name: "flash-circle",
  hex: "F0820",
  version: "2.1.19"
}, {
  name: "flash-off",
  hex: "F0243",
  version: "1.5.54"
}, {
  name: "flash-outline",
  hex: "F06D5",
  version: "1.8.36"
}, {
  name: "flash-red-eye",
  hex: "F067B",
  version: "1.7.12"
}, {
  name: "flashlight",
  hex: "F0244",
  version: "1.5.54"
}, {
  name: "flashlight-off",
  hex: "F0245",
  version: "1.5.54"
}, {
  name: "flask",
  hex: "F0093",
  version: "1.5.54"
}, {
  name: "flask-empty",
  hex: "F0094",
  version: "1.5.54"
}, {
  name: "flask-empty-minus",
  hex: "F123A",
  version: "4.6.95"
}, {
  name: "flask-empty-minus-outline",
  hex: "F123B",
  version: "4.6.95"
}, {
  name: "flask-empty-outline",
  hex: "F0095",
  version: "1.5.54"
}, {
  name: "flask-empty-plus",
  hex: "F123C",
  version: "4.6.95"
}, {
  name: "flask-empty-plus-outline",
  hex: "F123D",
  version: "4.6.95"
}, {
  name: "flask-empty-remove",
  hex: "F123E",
  version: "4.6.95"
}, {
  name: "flask-empty-remove-outline",
  hex: "F123F",
  version: "4.6.95"
}, {
  name: "flask-minus",
  hex: "F1240",
  version: "4.6.95"
}, {
  name: "flask-minus-outline",
  hex: "F1241",
  version: "4.6.95"
}, {
  name: "flask-outline",
  hex: "F0096",
  version: "1.5.54"
}, {
  name: "flask-plus",
  hex: "F1242",
  version: "4.6.95"
}, {
  name: "flask-plus-outline",
  hex: "F1243",
  version: "4.6.95"
}, {
  name: "flask-remove",
  hex: "F1244",
  version: "4.6.95"
}, {
  name: "flask-remove-outline",
  hex: "F1245",
  version: "4.6.95"
}, {
  name: "flask-round-bottom",
  hex: "F124B",
  version: "4.6.95"
}, {
  name: "flask-round-bottom-empty",
  hex: "F124C",
  version: "4.6.95"
}, {
  name: "flask-round-bottom-empty-outline",
  hex: "F124D",
  version: "4.6.95"
}, {
  name: "flask-round-bottom-outline",
  hex: "F124E",
  version: "4.6.95"
}, {
  name: "fleur-de-lis",
  hex: "F1303",
  version: "4.8.95"
}, {
  name: "flip-horizontal",
  hex: "F10E7",
  version: "4.3.95"
}, {
  name: "flip-to-back",
  hex: "F0247",
  version: "1.5.54"
}, {
  name: "flip-to-front",
  hex: "F0248",
  version: "1.5.54"
}, {
  name: "flip-vertical",
  hex: "F10E8",
  version: "4.3.95"
}, {
  name: "floor-lamp",
  hex: "F08DD",
  version: "2.3.50"
}, {
  name: "floor-lamp-dual",
  hex: "F1040",
  version: "4.1.95"
}, {
  name: "floor-lamp-variant",
  hex: "F1041",
  version: "4.1.95"
}, {
  name: "floor-plan",
  hex: "F0821",
  version: "2.1.19"
}, {
  name: "floppy",
  hex: "F0249",
  version: "1.5.54"
}, {
  name: "floppy-variant",
  hex: "F09EF",
  version: "2.5.94"
}, {
  name: "flower",
  hex: "F024A",
  version: "1.5.54"
}, {
  name: "flower-outline",
  hex: "F09F0",
  version: "2.5.94"
}, {
  name: "flower-poppy",
  hex: "F0D08",
  version: "3.3.92"
}, {
  name: "flower-tulip",
  hex: "F09F1",
  version: "2.5.94"
}, {
  name: "flower-tulip-outline",
  hex: "F09F2",
  version: "2.5.94"
}, {
  name: "focus-auto",
  hex: "F0F4E",
  version: "3.9.97"
}, {
  name: "focus-field",
  hex: "F0F4F",
  version: "3.9.97"
}, {
  name: "focus-field-horizontal",
  hex: "F0F50",
  version: "3.9.97"
}, {
  name: "focus-field-vertical",
  hex: "F0F51",
  version: "3.9.97"
}, {
  name: "folder",
  hex: "F024B",
  version: "1.5.54"
}, {
  name: "folder-account",
  hex: "F024C",
  version: "1.5.54"
}, {
  name: "folder-account-outline",
  hex: "F0B9C",
  version: "3.0.39"
}, {
  name: "folder-alert",
  hex: "F0DCC",
  version: "3.5.94"
}, {
  name: "folder-alert-outline",
  hex: "F0DCD",
  version: "3.5.94"
}, {
  name: "folder-clock",
  hex: "F0ABA",
  version: "2.7.94"
}, {
  name: "folder-clock-outline",
  hex: "F0ABB",
  version: "2.7.94"
}, {
  name: "folder-cog",
  hex: "F107F",
  version: "4.2.95"
}, {
  name: "folder-cog-outline",
  hex: "F1080",
  version: "4.2.95"
}, {
  name: "folder-download",
  hex: "F024D",
  version: "1.5.54"
}, {
  name: "folder-download-outline",
  hex: "F10E9",
  version: "4.3.95"
}, {
  name: "folder-edit",
  hex: "F08DE",
  version: "2.3.50"
}, {
  name: "folder-edit-outline",
  hex: "F0DCE",
  version: "3.5.94"
}, {
  name: "folder-google-drive",
  hex: "F024E",
  version: "1.5.54"
}, {
  name: "folder-heart",
  hex: "F10EA",
  version: "4.3.95"
}, {
  name: "folder-heart-outline",
  hex: "F10EB",
  version: "4.3.95"
}, {
  name: "folder-home",
  hex: "F10B5",
  version: "4.2.95"
}, {
  name: "folder-home-outline",
  hex: "F10B6",
  version: "4.2.95"
}, {
  name: "folder-image",
  hex: "F024F",
  version: "1.5.54"
}, {
  name: "folder-information",
  hex: "F10B7",
  version: "4.2.95"
}, {
  name: "folder-information-outline",
  hex: "F10B8",
  version: "4.2.95"
}, {
  name: "folder-key",
  hex: "F08AC",
  version: "2.2.43"
}, {
  name: "folder-key-network",
  hex: "F08AD",
  version: "2.2.43"
}, {
  name: "folder-key-network-outline",
  hex: "F0C80",
  version: "3.2.89"
}, {
  name: "folder-key-outline",
  hex: "F10EC",
  version: "4.3.95"
}, {
  name: "folder-lock",
  hex: "F0250",
  version: "1.5.54"
}, {
  name: "folder-lock-open",
  hex: "F0251",
  version: "1.5.54"
}, {
  name: "folder-marker",
  hex: "F126D",
  version: "4.7.95"
}, {
  name: "folder-marker-outline",
  hex: "F126E",
  version: "4.7.95"
}, {
  name: "folder-move",
  hex: "F0252",
  version: "1.5.54"
}, {
  name: "folder-move-outline",
  hex: "F1246",
  version: "4.6.95"
}, {
  name: "folder-multiple",
  hex: "F0253",
  version: "1.5.54"
}, {
  name: "folder-multiple-image",
  hex: "F0254",
  version: "1.5.54"
}, {
  name: "folder-multiple-outline",
  hex: "F0255",
  version: "1.5.54"
}, {
  name: "folder-music",
  hex: "F1359",
  version: "4.9.95"
}, {
  name: "folder-music-outline",
  hex: "F135A",
  version: "4.9.95"
}, {
  name: "folder-network",
  hex: "F0870",
  version: "2.1.99"
}, {
  name: "folder-network-outline",
  hex: "F0C81",
  version: "3.2.89"
}, {
  name: "folder-open",
  hex: "F0770",
  version: "1.9.32"
}, {
  name: "folder-open-outline",
  hex: "F0DCF",
  version: "3.5.94"
}, {
  name: "folder-outline",
  hex: "F0256",
  version: "1.5.54"
}, {
  name: "folder-plus",
  hex: "F0257",
  version: "1.5.54"
}, {
  name: "folder-plus-outline",
  hex: "F0B9D",
  version: "3.0.39"
}, {
  name: "folder-pound",
  hex: "F0D09",
  version: "3.3.92"
}, {
  name: "folder-pound-outline",
  hex: "F0D0A",
  version: "3.3.92"
}, {
  name: "folder-refresh",
  hex: "F0749",
  version: "1.9.32"
}, {
  name: "folder-refresh-outline",
  hex: "F0542",
  version: "1.5.54"
}, {
  name: "folder-remove",
  hex: "F0258",
  version: "1.5.54"
}, {
  name: "folder-remove-outline",
  hex: "F0B9E",
  version: "3.0.39"
}, {
  name: "folder-search",
  hex: "F0968",
  version: "2.4.85"
}, {
  name: "folder-search-outline",
  hex: "F0969",
  version: "2.4.85"
}, {
  name: "folder-settings",
  hex: "F107D",
  version: "4.2.95"
}, {
  name: "folder-settings-outline",
  hex: "F107E",
  version: "4.2.95"
}, {
  name: "folder-star",
  hex: "F069D",
  version: "1.7.12"
}, {
  name: "folder-star-outline",
  hex: "F0B9F",
  version: "3.0.39"
}, {
  name: "folder-swap",
  hex: "F0FB6",
  version: "4.0.96"
}, {
  name: "folder-swap-outline",
  hex: "F0FB7",
  version: "4.0.96"
}, {
  name: "folder-sync",
  hex: "F0D0B",
  version: "3.3.92"
}, {
  name: "folder-sync-outline",
  hex: "F0D0C",
  version: "3.3.92"
}, {
  name: "folder-table",
  hex: "F12E3",
  version: "4.8.95"
}, {
  name: "folder-table-outline",
  hex: "F12E4",
  version: "4.8.95"
}, {
  name: "folder-text",
  hex: "F0C82",
  version: "3.2.89"
}, {
  name: "folder-text-outline",
  hex: "F0C83",
  version: "3.2.89"
}, {
  name: "folder-upload",
  hex: "F0259",
  version: "1.5.54"
}, {
  name: "folder-upload-outline",
  hex: "F10ED",
  version: "4.3.95"
}, {
  name: "folder-zip",
  hex: "F06EB",
  version: "1.8.36"
}, {
  name: "folder-zip-outline",
  hex: "F07B9",
  version: "2.0.46"
}, {
  name: "font-awesome",
  hex: "F003A",
  version: "1.5.54"
}, {
  name: "food",
  hex: "F025A",
  version: "1.5.54"
}, {
  name: "food-apple",
  hex: "F025B",
  version: "1.5.54"
}, {
  name: "food-apple-outline",
  hex: "F0C84",
  version: "3.2.89"
}, {
  name: "food-croissant",
  hex: "F07C8",
  version: "2.0.46"
}, {
  name: "food-fork-drink",
  hex: "F05F2",
  version: "1.5.54"
}, {
  name: "food-off",
  hex: "F05F3",
  version: "1.5.54"
}, {
  name: "food-variant",
  hex: "F025C",
  version: "1.5.54"
}, {
  name: "foot-print",
  hex: "F0F52",
  version: "3.9.97"
}, {
  name: "football",
  hex: "F025D",
  version: "1.5.54"
}, {
  name: "football-australian",
  hex: "F025E",
  version: "1.5.54"
}, {
  name: "football-helmet",
  hex: "F025F",
  version: "1.5.54"
}, {
  name: "forklift",
  hex: "F07C9",
  version: "2.0.46"
}, {
  name: "format-align-bottom",
  hex: "F0753",
  version: "1.9.32"
}, {
  name: "format-align-center",
  hex: "F0260",
  version: "1.5.54"
}, {
  name: "format-align-justify",
  hex: "F0261",
  version: "1.5.54"
}, {
  name: "format-align-left",
  hex: "F0262",
  version: "1.5.54"
}, {
  name: "format-align-middle",
  hex: "F0754",
  version: "1.9.32"
}, {
  name: "format-align-right",
  hex: "F0263",
  version: "1.5.54"
}, {
  name: "format-align-top",
  hex: "F0755",
  version: "1.9.32"
}, {
  name: "format-annotation-minus",
  hex: "F0ABC",
  version: "2.7.94"
}, {
  name: "format-annotation-plus",
  hex: "F0646",
  version: "1.6.50"
}, {
  name: "format-bold",
  hex: "F0264",
  version: "1.5.54"
}, {
  name: "format-clear",
  hex: "F0265",
  version: "1.5.54"
}, {
  name: "format-color-fill",
  hex: "F0266",
  version: "1.5.54"
}, {
  name: "format-color-highlight",
  hex: "F0E31",
  version: "3.6.95"
}, {
  name: "format-color-marker-cancel",
  hex: "F1313",
  version: "4.8.95"
}, {
  name: "format-color-text",
  hex: "F069E",
  version: "1.7.12"
}, {
  name: "format-columns",
  hex: "F08DF",
  version: "2.3.50"
}, {
  name: "format-float-center",
  hex: "F0267",
  version: "1.5.54"
}, {
  name: "format-float-left",
  hex: "F0268",
  version: "1.5.54"
}, {
  name: "format-float-none",
  hex: "F0269",
  version: "1.5.54"
}, {
  name: "format-float-right",
  hex: "F026A",
  version: "1.5.54"
}, {
  name: "format-font",
  hex: "F06D6",
  version: "1.8.36"
}, {
  name: "format-font-size-decrease",
  hex: "F09F3",
  version: "2.5.94"
}, {
  name: "format-font-size-increase",
  hex: "F09F4",
  version: "2.5.94"
}, {
  name: "format-header-1",
  hex: "F026B",
  version: "1.5.54"
}, {
  name: "format-header-2",
  hex: "F026C",
  version: "1.5.54"
}, {
  name: "format-header-3",
  hex: "F026D",
  version: "1.5.54"
}, {
  name: "format-header-4",
  hex: "F026E",
  version: "1.5.54"
}, {
  name: "format-header-5",
  hex: "F026F",
  version: "1.5.54"
}, {
  name: "format-header-6",
  hex: "F0270",
  version: "1.5.54"
}, {
  name: "format-header-decrease",
  hex: "F0271",
  version: "1.5.54"
}, {
  name: "format-header-equal",
  hex: "F0272",
  version: "1.5.54"
}, {
  name: "format-header-increase",
  hex: "F0273",
  version: "1.5.54"
}, {
  name: "format-header-pound",
  hex: "F0274",
  version: "1.5.54"
}, {
  name: "format-horizontal-align-center",
  hex: "F061E",
  version: "1.6.50"
}, {
  name: "format-horizontal-align-left",
  hex: "F061F",
  version: "1.6.50"
}, {
  name: "format-horizontal-align-right",
  hex: "F0620",
  version: "1.6.50"
}, {
  name: "format-indent-decrease",
  hex: "F0275",
  version: "1.5.54"
}, {
  name: "format-indent-increase",
  hex: "F0276",
  version: "1.5.54"
}, {
  name: "format-italic",
  hex: "F0277",
  version: "1.5.54"
}, {
  name: "format-letter-case",
  hex: "F0B34",
  version: "2.8.94"
}, {
  name: "format-letter-case-lower",
  hex: "F0B35",
  version: "2.8.94"
}, {
  name: "format-letter-case-upper",
  hex: "F0B36",
  version: "2.8.94"
}, {
  name: "format-letter-ends-with",
  hex: "F0FB8",
  version: "4.0.96"
}, {
  name: "format-letter-matches",
  hex: "F0FB9",
  version: "4.0.96"
}, {
  name: "format-letter-starts-with",
  hex: "F0FBA",
  version: "4.0.96"
}, {
  name: "format-line-spacing",
  hex: "F0278",
  version: "1.5.54"
}, {
  name: "format-line-style",
  hex: "F05C8",
  version: "1.5.54"
}, {
  name: "format-line-weight",
  hex: "F05C9",
  version: "1.5.54"
}, {
  name: "format-list-bulleted",
  hex: "F0279",
  version: "1.5.54"
}, {
  name: "format-list-bulleted-square",
  hex: "F0DD0",
  version: "3.5.94"
}, {
  name: "format-list-bulleted-triangle",
  hex: "F0EB2",
  version: "3.7.94"
}, {
  name: "format-list-bulleted-type",
  hex: "F027A",
  version: "1.5.54"
}, {
  name: "format-list-checkbox",
  hex: "F096A",
  version: "2.4.85"
}, {
  name: "format-list-checks",
  hex: "F0756",
  version: "1.9.32"
}, {
  name: "format-list-numbered",
  hex: "F027B",
  version: "1.5.54"
}, {
  name: "format-list-numbered-rtl",
  hex: "F0D0D",
  version: "3.3.92"
}, {
  name: "format-list-text",
  hex: "F126F",
  version: "4.7.95"
}, {
  name: "format-overline",
  hex: "F0EB3",
  version: "3.7.94"
}, {
  name: "format-page-break",
  hex: "F06D7",
  version: "1.8.36"
}, {
  name: "format-paint",
  hex: "F027C",
  version: "1.5.54"
}, {
  name: "format-paragraph",
  hex: "F027D",
  version: "1.5.54"
}, {
  name: "format-pilcrow",
  hex: "F06D8",
  version: "1.8.36"
}, {
  name: "format-quote-close",
  hex: "F027E",
  version: "1.5.54"
}, {
  name: "format-quote-close-outline",
  hex: "F11A8",
  version: "4.5.95"
}, {
  name: "format-quote-open",
  hex: "F0757",
  version: "1.9.32"
}, {
  name: "format-quote-open-outline",
  hex: "F11A7",
  version: "4.5.95"
}, {
  name: "format-rotate-90",
  hex: "F06AA",
  version: "1.7.12"
}, {
  name: "format-section",
  hex: "F069F",
  version: "1.7.12"
}, {
  name: "format-size",
  hex: "F027F",
  version: "1.5.54"
}, {
  name: "format-strikethrough",
  hex: "F0280",
  version: "1.5.54"
}, {
  name: "format-strikethrough-variant",
  hex: "F0281",
  version: "1.5.54"
}, {
  name: "format-subscript",
  hex: "F0282",
  version: "1.5.54"
}, {
  name: "format-superscript",
  hex: "F0283",
  version: "1.5.54"
}, {
  name: "format-text",
  hex: "F0284",
  version: "1.5.54"
}, {
  name: "format-text-rotation-angle-down",
  hex: "F0FBB",
  version: "4.0.96"
}, {
  name: "format-text-rotation-angle-up",
  hex: "F0FBC",
  version: "4.0.96"
}, {
  name: "format-text-rotation-down",
  hex: "F0D73",
  version: "3.4.93"
}, {
  name: "format-text-rotation-down-vertical",
  hex: "F0FBD",
  version: "4.0.96"
}, {
  name: "format-text-rotation-none",
  hex: "F0D74",
  version: "3.4.93"
}, {
  name: "format-text-rotation-up",
  hex: "F0FBE",
  version: "4.0.96"
}, {
  name: "format-text-rotation-vertical",
  hex: "F0FBF",
  version: "4.0.96"
}, {
  name: "format-text-variant",
  hex: "F0E32",
  version: "3.6.95"
}, {
  name: "format-text-wrapping-clip",
  hex: "F0D0E",
  version: "3.3.92"
}, {
  name: "format-text-wrapping-overflow",
  hex: "F0D0F",
  version: "3.3.92"
}, {
  name: "format-text-wrapping-wrap",
  hex: "F0D10",
  version: "3.3.92"
}, {
  name: "format-textbox",
  hex: "F0D11",
  version: "3.3.92"
}, {
  name: "format-textdirection-l-to-r",
  hex: "F0285",
  version: "1.5.54"
}, {
  name: "format-textdirection-r-to-l",
  hex: "F0286",
  version: "1.5.54"
}, {
  name: "format-title",
  hex: "F05F4",
  version: "1.5.54"
}, {
  name: "format-underline",
  hex: "F0287",
  version: "1.5.54"
}, {
  name: "format-vertical-align-bottom",
  hex: "F0621",
  version: "1.6.50"
}, {
  name: "format-vertical-align-center",
  hex: "F0622",
  version: "1.6.50"
}, {
  name: "format-vertical-align-top",
  hex: "F0623",
  version: "1.6.50"
}, {
  name: "format-wrap-inline",
  hex: "F0288",
  version: "1.5.54"
}, {
  name: "format-wrap-square",
  hex: "F0289",
  version: "1.5.54"
}, {
  name: "format-wrap-tight",
  hex: "F028A",
  version: "1.5.54"
}, {
  name: "format-wrap-top-bottom",
  hex: "F028B",
  version: "1.5.54"
}, {
  name: "forum",
  hex: "F028C",
  version: "1.5.54"
}, {
  name: "forum-outline",
  hex: "F0822",
  version: "2.1.19"
}, {
  name: "forward",
  hex: "F028D",
  version: "1.5.54"
}, {
  name: "forwardburger",
  hex: "F0D75",
  version: "3.4.93"
}, {
  name: "fountain",
  hex: "F096B",
  version: "2.4.85"
}, {
  name: "fountain-pen",
  hex: "F0D12",
  version: "3.3.92"
}, {
  name: "fountain-pen-tip",
  hex: "F0D13",
  version: "3.3.92"
}, {
  name: "freebsd",
  hex: "F08E0",
  version: "2.3.50"
}, {
  name: "frequently-asked-questions",
  hex: "F0EB4",
  version: "3.7.94"
}, {
  name: "fridge",
  hex: "F0290",
  version: "1.5.54"
}, {
  name: "fridge-alert",
  hex: "F11B1",
  version: "4.5.95"
}, {
  name: "fridge-alert-outline",
  hex: "F11B2",
  version: "4.5.95"
}, {
  name: "fridge-bottom",
  hex: "F0292",
  version: "1.5.54"
}, {
  name: "fridge-off",
  hex: "F11AF",
  version: "4.5.95"
}, {
  name: "fridge-off-outline",
  hex: "F11B0",
  version: "4.5.95"
}, {
  name: "fridge-outline",
  hex: "F028F",
  version: "1.5.54"
}, {
  name: "fridge-top",
  hex: "F0291",
  version: "1.5.54"
}, {
  name: "fruit-cherries",
  hex: "F1042",
  version: "4.1.95"
}, {
  name: "fruit-citrus",
  hex: "F1043",
  version: "4.1.95"
}, {
  name: "fruit-grapes",
  hex: "F1044",
  version: "4.1.95"
}, {
  name: "fruit-grapes-outline",
  hex: "F1045",
  version: "4.1.95"
}, {
  name: "fruit-pineapple",
  hex: "F1046",
  version: "4.1.95"
}, {
  name: "fruit-watermelon",
  hex: "F1047",
  version: "4.1.95"
}, {
  name: "fuel",
  hex: "F07CA",
  version: "2.0.46"
}, {
  name: "fullscreen",
  hex: "F0293",
  version: "1.5.54"
}, {
  name: "fullscreen-exit",
  hex: "F0294",
  version: "1.5.54"
}, {
  name: "function",
  hex: "F0295",
  version: "1.5.54"
}, {
  name: "function-variant",
  hex: "F0871",
  version: "2.1.99"
}, {
  name: "furigana-horizontal",
  hex: "F1081",
  version: "4.2.95"
}, {
  name: "furigana-vertical",
  hex: "F1082",
  version: "4.2.95"
}, {
  name: "fuse",
  hex: "F0C85",
  version: "3.2.89"
}, {
  name: "fuse-blade",
  hex: "F0C86",
  version: "3.2.89"
}, {
  name: "gamepad",
  hex: "F0296",
  version: "1.5.54"
}, {
  name: "gamepad-circle",
  hex: "F0E33",
  version: "3.6.95"
}, {
  name: "gamepad-circle-down",
  hex: "F0E34",
  version: "3.6.95"
}, {
  name: "gamepad-circle-left",
  hex: "F0E35",
  version: "3.6.95"
}, {
  name: "gamepad-circle-outline",
  hex: "F0E36",
  version: "3.6.95"
}, {
  name: "gamepad-circle-right",
  hex: "F0E37",
  version: "3.6.95"
}, {
  name: "gamepad-circle-up",
  hex: "F0E38",
  version: "3.6.95"
}, {
  name: "gamepad-down",
  hex: "F0E39",
  version: "3.6.95"
}, {
  name: "gamepad-left",
  hex: "F0E3A",
  version: "3.6.95"
}, {
  name: "gamepad-right",
  hex: "F0E3B",
  version: "3.6.95"
}, {
  name: "gamepad-round",
  hex: "F0E3C",
  version: "3.6.95"
}, {
  name: "gamepad-round-down",
  hex: "F0E3D",
  version: "3.6.95"
}, {
  name: "gamepad-round-left",
  hex: "F0E3E",
  version: "3.6.95"
}, {
  name: "gamepad-round-outline",
  hex: "F0E3F",
  version: "3.6.95"
}, {
  name: "gamepad-round-right",
  hex: "F0E40",
  version: "3.6.95"
}, {
  name: "gamepad-round-up",
  hex: "F0E41",
  version: "3.6.95"
}, {
  name: "gamepad-square",
  hex: "F0EB5",
  version: "3.7.94"
}, {
  name: "gamepad-square-outline",
  hex: "F0EB6",
  version: "3.7.94"
}, {
  name: "gamepad-up",
  hex: "F0E42",
  version: "3.6.95"
}, {
  name: "gamepad-variant",
  hex: "F0297",
  version: "1.5.54"
}, {
  name: "gamepad-variant-outline",
  hex: "F0EB7",
  version: "3.7.94"
}, {
  name: "gamma",
  hex: "F10EE",
  version: "4.3.95"
}, {
  name: "gantry-crane",
  hex: "F0DD1",
  version: "3.5.94"
}, {
  name: "garage",
  hex: "F06D9",
  version: "1.8.36"
}, {
  name: "garage-alert",
  hex: "F0872",
  version: "2.1.99"
}, {
  name: "garage-alert-variant",
  hex: "F12D5",
  version: "4.8.95"
}, {
  name: "garage-open",
  hex: "F06DA",
  version: "1.8.36"
}, {
  name: "garage-open-variant",
  hex: "F12D4",
  version: "4.8.95"
}, {
  name: "garage-variant",
  hex: "F12D3",
  version: "4.8.95"
}, {
  name: "gas-cylinder",
  hex: "F0647",
  version: "1.6.50"
}, {
  name: "gas-station",
  hex: "F0298",
  version: "1.5.54"
}, {
  name: "gas-station-outline",
  hex: "F0EB8",
  version: "3.7.94"
}, {
  name: "gate",
  hex: "F0299",
  version: "1.5.54"
}, {
  name: "gate-and",
  hex: "F08E1",
  version: "2.3.50"
}, {
  name: "gate-arrow-right",
  hex: "F1169",
  version: "4.4.95"
}, {
  name: "gate-nand",
  hex: "F08E2",
  version: "2.3.50"
}, {
  name: "gate-nor",
  hex: "F08E3",
  version: "2.3.50"
}, {
  name: "gate-not",
  hex: "F08E4",
  version: "2.3.50"
}, {
  name: "gate-open",
  hex: "F116A",
  version: "4.4.95"
}, {
  name: "gate-or",
  hex: "F08E5",
  version: "2.3.50"
}, {
  name: "gate-xnor",
  hex: "F08E6",
  version: "2.3.50"
}, {
  name: "gate-xor",
  hex: "F08E7",
  version: "2.3.50"
}, {
  name: "gatsby",
  hex: "F0E43",
  version: "3.6.95"
}, {
  name: "gauge",
  hex: "F029A",
  version: "1.5.54"
}, {
  name: "gauge-empty",
  hex: "F0873",
  version: "2.1.99"
}, {
  name: "gauge-full",
  hex: "F0874",
  version: "2.1.99"
}, {
  name: "gauge-low",
  hex: "F0875",
  version: "2.1.99"
}, {
  name: "gavel",
  hex: "F029B",
  version: "1.5.54"
}, {
  name: "gender-female",
  hex: "F029C",
  version: "1.5.54"
}, {
  name: "gender-male",
  hex: "F029D",
  version: "1.5.54"
}, {
  name: "gender-male-female",
  hex: "F029E",
  version: "1.5.54"
}, {
  name: "gender-male-female-variant",
  hex: "F113F",
  version: "4.4.95"
}, {
  name: "gender-non-binary",
  hex: "F1140",
  version: "4.4.95"
}, {
  name: "gender-transgender",
  hex: "F029F",
  version: "1.5.54"
}, {
  name: "gentoo",
  hex: "F08E8",
  version: "2.3.50"
}, {
  name: "gesture",
  hex: "F07CB",
  version: "2.0.46"
}, {
  name: "gesture-double-tap",
  hex: "F073C",
  version: "1.9.32"
}, {
  name: "gesture-pinch",
  hex: "F0ABD",
  version: "2.7.94"
}, {
  name: "gesture-spread",
  hex: "F0ABE",
  version: "2.7.94"
}, {
  name: "gesture-swipe",
  hex: "F0D76",
  version: "3.4.93"
}, {
  name: "gesture-swipe-down",
  hex: "F073D",
  version: "1.9.32"
}, {
  name: "gesture-swipe-horizontal",
  hex: "F0ABF",
  version: "2.7.94"
}, {
  name: "gesture-swipe-left",
  hex: "F073E",
  version: "1.9.32"
}, {
  name: "gesture-swipe-right",
  hex: "F073F",
  version: "1.9.32"
}, {
  name: "gesture-swipe-up",
  hex: "F0740",
  version: "1.9.32"
}, {
  name: "gesture-swipe-vertical",
  hex: "F0AC0",
  version: "2.7.94"
}, {
  name: "gesture-tap",
  hex: "F0741",
  version: "1.9.32"
}, {
  name: "gesture-tap-box",
  hex: "F12A9",
  version: "4.7.95"
}, {
  name: "gesture-tap-button",
  hex: "F12A8",
  version: "4.7.95"
}, {
  name: "gesture-tap-hold",
  hex: "F0D77",
  version: "3.4.93"
}, {
  name: "gesture-two-double-tap",
  hex: "F0742",
  version: "1.9.32"
}, {
  name: "gesture-two-tap",
  hex: "F0743",
  version: "1.9.32"
}, {
  name: "ghost",
  hex: "F02A0",
  version: "1.5.54"
}, {
  name: "ghost-off",
  hex: "F09F5",
  version: "2.5.94"
}, {
  name: "gif",
  hex: "F0D78",
  version: "3.4.93"
}, {
  name: "gift",
  hex: "F0E44",
  version: "3.6.95"
}, {
  name: "gift-outline",
  hex: "F02A1",
  version: "1.5.54"
}, {
  name: "git",
  hex: "F02A2",
  version: "1.5.54"
}, {
  name: "github",
  hex: "F02A4",
  version: "1.5.54"
}, {
  name: "gitlab",
  hex: "F0BA0",
  version: "3.0.39"
}, {
  name: "glass-cocktail",
  hex: "F0356",
  version: "1.5.54"
}, {
  name: "glass-flute",
  hex: "F02A5",
  version: "1.5.54"
}, {
  name: "glass-mug",
  hex: "F02A6",
  version: "1.5.54"
}, {
  name: "glass-mug-variant",
  hex: "F1116",
  version: "4.3.95"
}, {
  name: "glass-pint-outline",
  hex: "F130D",
  version: "4.8.95"
}, {
  name: "glass-stange",
  hex: "F02A7",
  version: "1.5.54"
}, {
  name: "glass-tulip",
  hex: "F02A8",
  version: "1.5.54"
}, {
  name: "glass-wine",
  hex: "F0876",
  version: "2.1.99"
}, {
  name: "glasses",
  hex: "F02AA",
  version: "1.5.54"
}, {
  name: "globe-light",
  hex: "F12D7",
  version: "4.8.95"
}, {
  name: "globe-model",
  hex: "F08E9",
  version: "2.3.50"
}, {
  name: "gmail",
  hex: "F02AB",
  version: "1.5.54"
}, {
  name: "gnome",
  hex: "F02AC",
  version: "1.5.54"
}, {
  name: "go-kart",
  hex: "F0D79",
  version: "3.4.93"
}, {
  name: "go-kart-track",
  hex: "F0D7A",
  version: "3.4.93"
}, {
  name: "gog",
  hex: "F0BA1",
  version: "3.0.39"
}, {
  name: "gold",
  hex: "F124F",
  version: "4.6.95"
}, {
  name: "golf",
  hex: "F0823",
  version: "2.1.19"
}, {
  name: "golf-cart",
  hex: "F11A4",
  version: "4.5.95"
}, {
  name: "golf-tee",
  hex: "F1083",
  version: "4.2.95"
}, {
  name: "gondola",
  hex: "F0686",
  version: "1.7.12"
}, {
  name: "goodreads",
  hex: "F0D7B",
  version: "3.4.93"
}, {
  name: "google",
  hex: "F02AD",
  version: "1.5.54"
}, {
  name: "google-ads",
  hex: "F0C87",
  version: "3.2.89"
}, {
  name: "google-analytics",
  hex: "F07CC",
  version: "2.0.46"
}, {
  name: "google-assistant",
  hex: "F07CD",
  version: "2.0.46"
}, {
  name: "google-cardboard",
  hex: "F02AE",
  version: "1.5.54"
}, {
  name: "google-chrome",
  hex: "F02AF",
  version: "1.5.54"
}, {
  name: "google-circles",
  hex: "F02B0",
  version: "1.5.54"
}, {
  name: "google-circles-communities",
  hex: "F02B1",
  version: "1.5.54"
}, {
  name: "google-circles-extended",
  hex: "F02B2",
  version: "1.5.54"
}, {
  name: "google-circles-group",
  hex: "F02B3",
  version: "1.5.54"
}, {
  name: "google-classroom",
  hex: "F02C0",
  version: "1.5.54"
}, {
  name: "google-cloud",
  hex: "F11F6",
  version: "4.6.95"
}, {
  name: "google-controller",
  hex: "F02B4",
  version: "1.5.54"
}, {
  name: "google-controller-off",
  hex: "F02B5",
  version: "1.5.54"
}, {
  name: "google-downasaur",
  hex: "F1362",
  version: "4.9.95"
}, {
  name: "google-drive",
  hex: "F02B6",
  version: "1.5.54"
}, {
  name: "google-earth",
  hex: "F02B7",
  version: "1.5.54"
}, {
  name: "google-fit",
  hex: "F096C",
  version: "2.4.85"
}, {
  name: "google-glass",
  hex: "F02B8",
  version: "1.5.54"
}, {
  name: "google-hangouts",
  hex: "F02C9",
  version: "1.5.54"
}, {
  name: "google-home",
  hex: "F0824",
  version: "2.1.19"
}, {
  name: "google-keep",
  hex: "F06DC",
  version: "1.8.36"
}, {
  name: "google-lens",
  hex: "F09F6",
  version: "2.5.94"
}, {
  name: "google-maps",
  hex: "F05F5",
  version: "1.5.54"
}, {
  name: "google-my-business",
  hex: "F1048",
  version: "4.1.95"
}, {
  name: "google-nearby",
  hex: "F02B9",
  version: "1.5.54"
}, {
  name: "google-photos",
  hex: "F06DD",
  version: "1.8.36"
}, {
  name: "google-play",
  hex: "F02BC",
  version: "1.5.54"
}, {
  name: "google-plus",
  hex: "F02BD",
  version: "1.5.54"
}, {
  name: "google-podcast",
  hex: "F0EB9",
  version: "3.7.94"
}, {
  name: "google-spreadsheet",
  hex: "F09F7",
  version: "2.5.94"
}, {
  name: "google-street-view",
  hex: "F0C88",
  version: "3.2.89"
}, {
  name: "google-translate",
  hex: "F02BF",
  version: "1.5.54"
}, {
  name: "gradient",
  hex: "F06A0",
  version: "1.7.12"
}, {
  name: "grain",
  hex: "F0D7C",
  version: "3.4.93"
}, {
  name: "graph",
  hex: "F1049",
  version: "4.1.95"
}, {
  name: "graph-outline",
  hex: "F104A",
  version: "4.1.95"
}, {
  name: "graphql",
  hex: "F0877",
  version: "2.1.99"
}, {
  name: "grave-stone",
  hex: "F0BA2",
  version: "3.0.39"
}, {
  name: "grease-pencil",
  hex: "F0648",
  version: "1.6.50"
}, {
  name: "greater-than",
  hex: "F096D",
  version: "2.4.85"
}, {
  name: "greater-than-or-equal",
  hex: "F096E",
  version: "2.4.85"
}, {
  name: "grid",
  hex: "F02C1",
  version: "1.5.54"
}, {
  name: "grid-large",
  hex: "F0758",
  version: "1.9.32"
}, {
  name: "grid-off",
  hex: "F02C2",
  version: "1.5.54"
}, {
  name: "grill",
  hex: "F0E45",
  version: "3.6.95"
}, {
  name: "grill-outline",
  hex: "F118A",
  version: "4.4.95"
}, {
  name: "group",
  hex: "F02C3",
  version: "1.5.54"
}, {
  name: "guitar-acoustic",
  hex: "F0771",
  version: "1.9.32"
}, {
  name: "guitar-electric",
  hex: "F02C4",
  version: "1.5.54"
}, {
  name: "guitar-pick",
  hex: "F02C5",
  version: "1.5.54"
}, {
  name: "guitar-pick-outline",
  hex: "F02C6",
  version: "1.5.54"
}, {
  name: "guy-fawkes-mask",
  hex: "F0825",
  version: "2.1.19"
}, {
  name: "hail",
  hex: "F0AC1",
  version: "2.7.94"
}, {
  name: "hair-dryer",
  hex: "F10EF",
  version: "4.3.95"
}, {
  name: "hair-dryer-outline",
  hex: "F10F0",
  version: "4.3.95"
}, {
  name: "halloween",
  hex: "F0BA3",
  version: "3.0.39"
}, {
  name: "hamburger",
  hex: "F0685",
  version: "1.7.12"
}, {
  name: "hammer",
  hex: "F08EA",
  version: "2.3.50"
}, {
  name: "hammer-screwdriver",
  hex: "F1322",
  version: "4.9.95"
}, {
  name: "hammer-wrench",
  hex: "F1323",
  version: "4.9.95"
}, {
  name: "hand",
  hex: "F0A4F",
  version: "2.6.95"
}, {
  name: "hand-heart",
  hex: "F10F1",
  version: "4.3.95"
}, {
  name: "hand-left",
  hex: "F0E46",
  version: "3.6.95"
}, {
  name: "hand-okay",
  hex: "F0A50",
  version: "2.6.95"
}, {
  name: "hand-peace",
  hex: "F0A51",
  version: "2.6.95"
}, {
  name: "hand-peace-variant",
  hex: "F0A52",
  version: "2.6.95"
}, {
  name: "hand-pointing-down",
  hex: "F0A53",
  version: "2.6.95"
}, {
  name: "hand-pointing-left",
  hex: "F0A54",
  version: "2.6.95"
}, {
  name: "hand-pointing-right",
  hex: "F02C7",
  version: "1.5.54"
}, {
  name: "hand-pointing-up",
  hex: "F0A55",
  version: "2.6.95"
}, {
  name: "hand-right",
  hex: "F0E47",
  version: "3.6.95"
}, {
  name: "hand-saw",
  hex: "F0E48",
  version: "3.6.95"
}, {
  name: "hand-water",
  hex: "F139F",
  version: "5.0.45"
}, {
  name: "handball",
  hex: "F0F53",
  version: "3.9.97"
}, {
  name: "handcuffs",
  hex: "F113E",
  version: "4.4.95"
}, {
  name: "handshake",
  hex: "F1218",
  version: "4.6.95"
}, {
  name: "hanger",
  hex: "F02C8",
  version: "1.5.54"
}, {
  name: "hard-hat",
  hex: "F096F",
  version: "2.4.85"
}, {
  name: "harddisk",
  hex: "F02CA",
  version: "1.5.54"
}, {
  name: "harddisk-plus",
  hex: "F104B",
  version: "4.1.95"
}, {
  name: "harddisk-remove",
  hex: "F104C",
  version: "4.1.95"
}, {
  name: "hat-fedora",
  hex: "F0BA4",
  version: "3.0.39"
}, {
  name: "hazard-lights",
  hex: "F0C89",
  version: "3.2.89"
}, {
  name: "hdr",
  hex: "F0D7D",
  version: "3.4.93"
}, {
  name: "hdr-off",
  hex: "F0D7E",
  version: "3.4.93"
}, {
  name: "head",
  hex: "F135E",
  version: "4.9.95"
}, {
  name: "head-alert",
  hex: "F1338",
  version: "4.9.95"
}, {
  name: "head-alert-outline",
  hex: "F1339",
  version: "4.9.95"
}, {
  name: "head-check",
  hex: "F133A",
  version: "4.9.95"
}, {
  name: "head-check-outline",
  hex: "F133B",
  version: "4.9.95"
}, {
  name: "head-cog",
  hex: "F133C",
  version: "4.9.95"
}, {
  name: "head-cog-outline",
  hex: "F133D",
  version: "4.9.95"
}, {
  name: "head-dots-horizontal",
  hex: "F133E",
  version: "4.9.95"
}, {
  name: "head-dots-horizontal-outline",
  hex: "F133F",
  version: "4.9.95"
}, {
  name: "head-flash",
  hex: "F1340",
  version: "4.9.95"
}, {
  name: "head-flash-outline",
  hex: "F1341",
  version: "4.9.95"
}, {
  name: "head-heart",
  hex: "F1342",
  version: "4.9.95"
}, {
  name: "head-heart-outline",
  hex: "F1343",
  version: "4.9.95"
}, {
  name: "head-lightbulb",
  hex: "F1344",
  version: "4.9.95"
}, {
  name: "head-lightbulb-outline",
  hex: "F1345",
  version: "4.9.95"
}, {
  name: "head-minus",
  hex: "F1346",
  version: "4.9.95"
}, {
  name: "head-minus-outline",
  hex: "F1347",
  version: "4.9.95"
}, {
  name: "head-outline",
  hex: "F135F",
  version: "4.9.95"
}, {
  name: "head-plus",
  hex: "F1348",
  version: "4.9.95"
}, {
  name: "head-plus-outline",
  hex: "F1349",
  version: "4.9.95"
}, {
  name: "head-question",
  hex: "F134A",
  version: "4.9.95"
}, {
  name: "head-question-outline",
  hex: "F134B",
  version: "4.9.95"
}, {
  name: "head-remove",
  hex: "F134C",
  version: "4.9.95"
}, {
  name: "head-remove-outline",
  hex: "F134D",
  version: "4.9.95"
}, {
  name: "head-snowflake",
  hex: "F134E",
  version: "4.9.95"
}, {
  name: "head-snowflake-outline",
  hex: "F134F",
  version: "4.9.95"
}, {
  name: "head-sync",
  hex: "F1350",
  version: "4.9.95"
}, {
  name: "head-sync-outline",
  hex: "F1351",
  version: "4.9.95"
}, {
  name: "headphones",
  hex: "F02CB",
  version: "1.5.54"
}, {
  name: "headphones-bluetooth",
  hex: "F0970",
  version: "2.4.85"
}, {
  name: "headphones-box",
  hex: "F02CC",
  version: "1.5.54"
}, {
  name: "headphones-off",
  hex: "F07CE",
  version: "2.0.46"
}, {
  name: "headphones-settings",
  hex: "F02CD",
  version: "1.5.54"
}, {
  name: "headset",
  hex: "F02CE",
  version: "1.5.54"
}, {
  name: "headset-dock",
  hex: "F02CF",
  version: "1.5.54"
}, {
  name: "headset-off",
  hex: "F02D0",
  version: "1.5.54"
}, {
  name: "heart",
  hex: "F02D1",
  version: "1.5.54"
}, {
  name: "heart-box",
  hex: "F02D2",
  version: "1.5.54"
}, {
  name: "heart-box-outline",
  hex: "F02D3",
  version: "1.5.54"
}, {
  name: "heart-broken",
  hex: "F02D4",
  version: "1.5.54"
}, {
  name: "heart-broken-outline",
  hex: "F0D14",
  version: "3.3.92"
}, {
  name: "heart-circle",
  hex: "F0971",
  version: "2.4.85"
}, {
  name: "heart-circle-outline",
  hex: "F0972",
  version: "2.4.85"
}, {
  name: "heart-flash",
  hex: "F0EF9",
  version: "3.8.95"
}, {
  name: "heart-half",
  hex: "F06DF",
  version: "1.8.36"
}, {
  name: "heart-half-full",
  hex: "F06DE",
  version: "1.8.36"
}, {
  name: "heart-half-outline",
  hex: "F06E0",
  version: "1.8.36"
}, {
  name: "heart-multiple",
  hex: "F0A56",
  version: "2.6.95"
}, {
  name: "heart-multiple-outline",
  hex: "F0A57",
  version: "2.6.95"
}, {
  name: "heart-off",
  hex: "F0759",
  version: "1.9.32"
}, {
  name: "heart-outline",
  hex: "F02D5",
  version: "1.5.54"
}, {
  name: "heart-pulse",
  hex: "F05F6",
  version: "1.5.54"
}, {
  name: "helicopter",
  hex: "F0AC2",
  version: "2.7.94"
}, {
  name: "help",
  hex: "F02D6",
  version: "1.5.54"
}, {
  name: "help-box",
  hex: "F078B",
  version: "1.9.32"
}, {
  name: "help-circle",
  hex: "F02D7",
  version: "1.5.54"
}, {
  name: "help-circle-outline",
  hex: "F0625",
  version: "1.6.50"
}, {
  name: "help-network",
  hex: "F06F5",
  version: "1.8.36"
}, {
  name: "help-network-outline",
  hex: "F0C8A",
  version: "3.2.89"
}, {
  name: "help-rhombus",
  hex: "F0BA5",
  version: "3.0.39"
}, {
  name: "help-rhombus-outline",
  hex: "F0BA6",
  version: "3.0.39"
}, {
  name: "hexadecimal",
  hex: "F12A7",
  version: "4.7.95"
}, {
  name: "hexagon",
  hex: "F02D8",
  version: "1.5.54"
}, {
  name: "hexagon-multiple",
  hex: "F06E1",
  version: "1.8.36"
}, {
  name: "hexagon-multiple-outline",
  hex: "F10F2",
  version: "4.3.95"
}, {
  name: "hexagon-outline",
  hex: "F02D9",
  version: "1.5.54"
}, {
  name: "hexagon-slice-1",
  hex: "F0AC3",
  version: "2.7.94"
}, {
  name: "hexagon-slice-2",
  hex: "F0AC4",
  version: "2.7.94"
}, {
  name: "hexagon-slice-3",
  hex: "F0AC5",
  version: "2.7.94"
}, {
  name: "hexagon-slice-4",
  hex: "F0AC6",
  version: "2.7.94"
}, {
  name: "hexagon-slice-5",
  hex: "F0AC7",
  version: "2.7.94"
}, {
  name: "hexagon-slice-6",
  hex: "F0AC8",
  version: "2.7.94"
}, {
  name: "hexagram",
  hex: "F0AC9",
  version: "2.7.94"
}, {
  name: "hexagram-outline",
  hex: "F0ACA",
  version: "2.7.94"
}, {
  name: "high-definition",
  hex: "F07CF",
  version: "2.0.46"
}, {
  name: "high-definition-box",
  hex: "F0878",
  version: "2.1.99"
}, {
  name: "highway",
  hex: "F05F7",
  version: "1.5.54"
}, {
  name: "hiking",
  hex: "F0D7F",
  version: "3.4.93"
}, {
  name: "hinduism",
  hex: "F0973",
  version: "2.4.85"
}, {
  name: "history",
  hex: "F02DA",
  version: "1.5.54"
}, {
  name: "hockey-puck",
  hex: "F0879",
  version: "2.1.99"
}, {
  name: "hockey-sticks",
  hex: "F087A",
  version: "2.1.99"
}, {
  name: "hololens",
  hex: "F02DB",
  version: "1.5.54"
}, {
  name: "home",
  hex: "F02DC",
  version: "1.5.54"
}, {
  name: "home-account",
  hex: "F0826",
  version: "2.1.19"
}, {
  name: "home-alert",
  hex: "F087B",
  version: "2.1.99"
}, {
  name: "home-analytics",
  hex: "F0EBA",
  version: "3.7.94"
}, {
  name: "home-assistant",
  hex: "F07D0",
  version: "2.0.46"
}, {
  name: "home-automation",
  hex: "F07D1",
  version: "2.0.46"
}, {
  name: "home-circle",
  hex: "F07D2",
  version: "2.0.46"
}, {
  name: "home-circle-outline",
  hex: "F104D",
  version: "4.1.95"
}, {
  name: "home-city",
  hex: "F0D15",
  version: "3.3.92"
}, {
  name: "home-city-outline",
  hex: "F0D16",
  version: "3.3.92"
}, {
  name: "home-currency-usd",
  hex: "F08AF",
  version: "2.2.43"
}, {
  name: "home-edit",
  hex: "F1159",
  version: "4.4.95"
}, {
  name: "home-edit-outline",
  hex: "F115A",
  version: "4.4.95"
}, {
  name: "home-export-outline",
  hex: "F0F9B",
  version: "3.9.97"
}, {
  name: "home-flood",
  hex: "F0EFA",
  version: "3.8.95"
}, {
  name: "home-floor-0",
  hex: "F0DD2",
  version: "3.5.94"
}, {
  name: "home-floor-1",
  hex: "F0D80",
  version: "3.4.93"
}, {
  name: "home-floor-2",
  hex: "F0D81",
  version: "3.4.93"
}, {
  name: "home-floor-3",
  hex: "F0D82",
  version: "3.4.93"
}, {
  name: "home-floor-a",
  hex: "F0D83",
  version: "3.4.93"
}, {
  name: "home-floor-b",
  hex: "F0D84",
  version: "3.4.93"
}, {
  name: "home-floor-g",
  hex: "F0D85",
  version: "3.4.93"
}, {
  name: "home-floor-l",
  hex: "F0D86",
  version: "3.4.93"
}, {
  name: "home-floor-negative-1",
  hex: "F0DD3",
  version: "3.5.94"
}, {
  name: "home-group",
  hex: "F0DD4",
  version: "3.5.94"
}, {
  name: "home-heart",
  hex: "F0827",
  version: "2.1.19"
}, {
  name: "home-import-outline",
  hex: "F0F9C",
  version: "3.9.97"
}, {
  name: "home-lightbulb",
  hex: "F1251",
  version: "4.6.95"
}, {
  name: "home-lightbulb-outline",
  hex: "F1252",
  version: "4.6.95"
}, {
  name: "home-lock",
  hex: "F08EB",
  version: "2.3.50"
}, {
  name: "home-lock-open",
  hex: "F08EC",
  version: "2.3.50"
}, {
  name: "home-map-marker",
  hex: "F05F8",
  version: "1.5.54"
}, {
  name: "home-minus",
  hex: "F0974",
  version: "2.4.85"
}, {
  name: "home-modern",
  hex: "F02DD",
  version: "1.5.54"
}, {
  name: "home-outline",
  hex: "F06A1",
  version: "1.7.12"
}, {
  name: "home-plus",
  hex: "F0975",
  version: "2.4.85"
}, {
  name: "home-remove",
  hex: "F1247",
  version: "4.6.95"
}, {
  name: "home-roof",
  hex: "F112B",
  version: "4.3.95"
}, {
  name: "home-search",
  hex: "F13B0",
  version: "5.0.45"
}, {
  name: "home-search-outline",
  hex: "F13B1",
  version: "5.0.45"
}, {
  name: "home-thermometer",
  hex: "F0F54",
  version: "3.9.97"
}, {
  name: "home-thermometer-outline",
  hex: "F0F55",
  version: "3.9.97"
}, {
  name: "home-variant",
  hex: "F02DE",
  version: "1.5.54"
}, {
  name: "home-variant-outline",
  hex: "F0BA7",
  version: "3.0.39"
}, {
  name: "hook",
  hex: "F06E2",
  version: "1.8.36"
}, {
  name: "hook-off",
  hex: "F06E3",
  version: "1.8.36"
}, {
  name: "hops",
  hex: "F02DF",
  version: "1.5.54"
}, {
  name: "horizontal-rotate-clockwise",
  hex: "F10F3",
  version: "4.3.95"
}, {
  name: "horizontal-rotate-counterclockwise",
  hex: "F10F4",
  version: "4.3.95"
}, {
  name: "horseshoe",
  hex: "F0A58",
  version: "2.6.95"
}, {
  name: "hospital",
  hex: "F0FF6",
  version: "4.0.96"
}, {
  name: "hospital-box",
  hex: "F02E0",
  version: "1.5.54"
}, {
  name: "hospital-box-outline",
  hex: "F0FF7",
  version: "4.0.96"
}, {
  name: "hospital-building",
  hex: "F02E1",
  version: "1.5.54"
}, {
  name: "hospital-marker",
  hex: "F02E2",
  version: "1.5.54"
}, {
  name: "hot-tub",
  hex: "F0828",
  version: "2.1.19"
}, {
  name: "hubspot",
  hex: "F0D17",
  version: "3.3.92"
}, {
  name: "hulu",
  hex: "F0829",
  version: "2.1.19"
}, {
  name: "human",
  hex: "F02E6",
  version: "1.5.54"
}, {
  name: "human-baby-changing-table",
  hex: "F138B",
  version: "5.0.45"
}, {
  name: "human-child",
  hex: "F02E7",
  version: "1.5.54"
}, {
  name: "human-female",
  hex: "F0649",
  version: "1.6.50"
}, {
  name: "human-female-boy",
  hex: "F0A59",
  version: "2.6.95"
}, {
  name: "human-female-female",
  hex: "F0A5A",
  version: "2.6.95"
}, {
  name: "human-female-girl",
  hex: "F0A5B",
  version: "2.6.95"
}, {
  name: "human-greeting",
  hex: "F064A",
  version: "1.6.50"
}, {
  name: "human-handsdown",
  hex: "F064B",
  version: "1.6.50"
}, {
  name: "human-handsup",
  hex: "F064C",
  version: "1.6.50"
}, {
  name: "human-male",
  hex: "F064D",
  version: "1.6.50"
}, {
  name: "human-male-boy",
  hex: "F0A5C",
  version: "2.6.95"
}, {
  name: "human-male-child",
  hex: "F138C",
  version: "5.0.45"
}, {
  name: "human-male-female",
  hex: "F02E8",
  version: "1.5.54"
}, {
  name: "human-male-girl",
  hex: "F0A5D",
  version: "2.6.95"
}, {
  name: "human-male-height",
  hex: "F0EFB",
  version: "3.8.95"
}, {
  name: "human-male-height-variant",
  hex: "F0EFC",
  version: "3.8.95"
}, {
  name: "human-male-male",
  hex: "F0A5E",
  version: "2.6.95"
}, {
  name: "human-pregnant",
  hex: "F05CF",
  version: "1.5.54"
}, {
  name: "human-wheelchair",
  hex: "F138D",
  version: "5.0.45"
}, {
  name: "humble-bundle",
  hex: "F0744",
  version: "1.9.32"
}, {
  name: "hvac",
  hex: "F1352",
  version: "4.9.95"
}, {
  name: "hydraulic-oil-level",
  hex: "F1324",
  version: "4.9.95"
}, {
  name: "hydraulic-oil-temperature",
  hex: "F1325",
  version: "4.9.95"
}, {
  name: "hydro-power",
  hex: "F12E5",
  version: "4.8.95"
}, {
  name: "ice-cream",
  hex: "F082A",
  version: "2.1.19"
}, {
  name: "ice-cream-off",
  hex: "F0E52",
  version: "3.6.95"
}, {
  name: "ice-pop",
  hex: "F0EFD",
  version: "3.8.95"
}, {
  name: "id-card",
  hex: "F0FC0",
  version: "4.0.96"
}, {
  name: "identifier",
  hex: "F0EFE",
  version: "3.8.95"
}, {
  name: "ideogram-cjk",
  hex: "F1331",
  version: "4.9.95"
}, {
  name: "ideogram-cjk-variant",
  hex: "F1332",
  version: "4.9.95"
}, {
  name: "iframe",
  hex: "F0C8B",
  version: "3.2.89"
}, {
  name: "iframe-array",
  hex: "F10F5",
  version: "4.3.95"
}, {
  name: "iframe-array-outline",
  hex: "F10F6",
  version: "4.3.95"
}, {
  name: "iframe-braces",
  hex: "F10F7",
  version: "4.3.95"
}, {
  name: "iframe-braces-outline",
  hex: "F10F8",
  version: "4.3.95"
}, {
  name: "iframe-outline",
  hex: "F0C8C",
  version: "3.2.89"
}, {
  name: "iframe-parentheses",
  hex: "F10F9",
  version: "4.3.95"
}, {
  name: "iframe-parentheses-outline",
  hex: "F10FA",
  version: "4.3.95"
}, {
  name: "iframe-variable",
  hex: "F10FB",
  version: "4.3.95"
}, {
  name: "iframe-variable-outline",
  hex: "F10FC",
  version: "4.3.95"
}, {
  name: "image",
  hex: "F02E9",
  version: "1.5.54"
}, {
  name: "image-album",
  hex: "F02EA",
  version: "1.5.54"
}, {
  name: "image-area",
  hex: "F02EB",
  version: "1.5.54"
}, {
  name: "image-area-close",
  hex: "F02EC",
  version: "1.5.54"
}, {
  name: "image-auto-adjust",
  hex: "F0FC1",
  version: "4.0.96"
}, {
  name: "image-broken",
  hex: "F02ED",
  version: "1.5.54"
}, {
  name: "image-broken-variant",
  hex: "F02EE",
  version: "1.5.54"
}, {
  name: "image-edit",
  hex: "F11E3",
  version: "4.5.95"
}, {
  name: "image-edit-outline",
  hex: "F11E4",
  version: "4.5.95"
}, {
  name: "image-filter-black-white",
  hex: "F02F0",
  version: "1.5.54"
}, {
  name: "image-filter-center-focus",
  hex: "F02F1",
  version: "1.5.54"
}, {
  name: "image-filter-center-focus-strong",
  hex: "F0EFF",
  version: "3.8.95"
}, {
  name: "image-filter-center-focus-strong-outline",
  hex: "F0F00",
  version: "3.8.95"
}, {
  name: "image-filter-center-focus-weak",
  hex: "F02F2",
  version: "1.5.54"
}, {
  name: "image-filter-drama",
  hex: "F02F3",
  version: "1.5.54"
}, {
  name: "image-filter-frames",
  hex: "F02F4",
  version: "1.5.54"
}, {
  name: "image-filter-hdr",
  hex: "F02F5",
  version: "1.5.54"
}, {
  name: "image-filter-none",
  hex: "F02F6",
  version: "1.5.54"
}, {
  name: "image-filter-tilt-shift",
  hex: "F02F7",
  version: "1.5.54"
}, {
  name: "image-filter-vintage",
  hex: "F02F8",
  version: "1.5.54"
}, {
  name: "image-frame",
  hex: "F0E49",
  version: "3.6.95"
}, {
  name: "image-move",
  hex: "F09F8",
  version: "2.5.94"
}, {
  name: "image-multiple",
  hex: "F02F9",
  version: "1.5.54"
}, {
  name: "image-multiple-outline",
  hex: "F02EF",
  version: "1.5.54"
}, {
  name: "image-off",
  hex: "F082B",
  version: "2.1.19"
}, {
  name: "image-off-outline",
  hex: "F11D1",
  version: "4.5.95"
}, {
  name: "image-outline",
  hex: "F0976",
  version: "2.4.85"
}, {
  name: "image-plus",
  hex: "F087C",
  version: "2.1.99"
}, {
  name: "image-search",
  hex: "F0977",
  version: "2.4.85"
}, {
  name: "image-search-outline",
  hex: "F0978",
  version: "2.4.85"
}, {
  name: "image-size-select-actual",
  hex: "F0C8D",
  version: "3.2.89"
}, {
  name: "image-size-select-large",
  hex: "F0C8E",
  version: "3.2.89"
}, {
  name: "image-size-select-small",
  hex: "F0C8F",
  version: "3.2.89"
}, {
  name: "import",
  hex: "F02FA",
  version: "1.5.54"
}, {
  name: "inbox",
  hex: "F0687",
  version: "1.7.12"
}, {
  name: "inbox-arrow-down",
  hex: "F02FB",
  version: "1.5.54"
}, {
  name: "inbox-arrow-down-outline",
  hex: "F1270",
  version: "4.7.95"
}, {
  name: "inbox-arrow-up",
  hex: "F03D1",
  version: "1.5.54"
}, {
  name: "inbox-arrow-up-outline",
  hex: "F1271",
  version: "4.7.95"
}, {
  name: "inbox-full",
  hex: "F1272",
  version: "4.7.95"
}, {
  name: "inbox-full-outline",
  hex: "F1273",
  version: "4.7.95"
}, {
  name: "inbox-multiple",
  hex: "F08B0",
  version: "2.2.43"
}, {
  name: "inbox-multiple-outline",
  hex: "F0BA8",
  version: "3.0.39"
}, {
  name: "inbox-outline",
  hex: "F1274",
  version: "4.7.95"
}, {
  name: "incognito",
  hex: "F05F9",
  version: "1.5.54"
}, {
  name: "incognito-off",
  hex: "F0075",
  version: "1.5.54"
}, {
  name: "infinity",
  hex: "F06E4",
  version: "1.8.36"
}, {
  name: "information",
  hex: "F02FC",
  version: "1.5.54"
}, {
  name: "information-outline",
  hex: "F02FD",
  version: "1.5.54"
}, {
  name: "information-variant",
  hex: "F064E",
  version: "1.6.50"
}, {
  name: "instagram",
  hex: "F02FE",
  version: "1.5.54"
}, {
  name: "instrument-triangle",
  hex: "F104E",
  version: "4.1.95"
}, {
  name: "invert-colors",
  hex: "F0301",
  version: "1.5.54"
}, {
  name: "invert-colors-off",
  hex: "F0E4A",
  version: "3.6.95"
}, {
  name: "iobroker",
  hex: "F12E8",
  version: "4.8.95"
}, {
  name: "ip",
  hex: "F0A5F",
  version: "2.6.95"
}, {
  name: "ip-network",
  hex: "F0A60",
  version: "2.6.95"
}, {
  name: "ip-network-outline",
  hex: "F0C90",
  version: "3.2.89"
}, {
  name: "ipod",
  hex: "F0C91",
  version: "3.2.89"
}, {
  name: "islam",
  hex: "F0979",
  version: "2.4.85"
}, {
  name: "island",
  hex: "F104F",
  version: "4.1.95"
}, {
  name: "iv-bag",
  hex: "F10B9",
  version: "4.2.95"
}, {
  name: "jabber",
  hex: "F0DD5",
  version: "3.5.94"
}, {
  name: "jeepney",
  hex: "F0302",
  version: "1.5.54"
}, {
  name: "jellyfish",
  hex: "F0F01",
  version: "3.8.95"
}, {
  name: "jellyfish-outline",
  hex: "F0F02",
  version: "3.8.95"
}, {
  name: "jira",
  hex: "F0303",
  version: "1.5.54"
}, {
  name: "jquery",
  hex: "F087D",
  version: "2.1.99"
}, {
  name: "jsfiddle",
  hex: "F0304",
  version: "1.5.54"
}, {
  name: "judaism",
  hex: "F097A",
  version: "2.4.85"
}, {
  name: "jump-rope",
  hex: "F12FF",
  version: "4.8.95"
}, {
  name: "kabaddi",
  hex: "F0D87",
  version: "3.4.93"
}, {
  name: "karate",
  hex: "F082C",
  version: "2.1.19"
}, {
  name: "keg",
  hex: "F0305",
  version: "1.5.54"
}, {
  name: "kettle",
  hex: "F05FA",
  version: "1.5.54"
}, {
  name: "kettle-alert",
  hex: "F1317",
  version: "4.8.95"
}, {
  name: "kettle-alert-outline",
  hex: "F1318",
  version: "4.8.95"
}, {
  name: "kettle-off",
  hex: "F131B",
  version: "4.8.95"
}, {
  name: "kettle-off-outline",
  hex: "F131C",
  version: "4.8.95"
}, {
  name: "kettle-outline",
  hex: "F0F56",
  version: "3.9.97"
}, {
  name: "kettle-steam",
  hex: "F1319",
  version: "4.8.95"
}, {
  name: "kettle-steam-outline",
  hex: "F131A",
  version: "4.8.95"
}, {
  name: "kettlebell",
  hex: "F1300",
  version: "4.8.95"
}, {
  name: "key",
  hex: "F0306",
  version: "1.5.54"
}, {
  name: "key-arrow-right",
  hex: "F1312",
  version: "4.8.95"
}, {
  name: "key-change",
  hex: "F0307",
  version: "1.5.54"
}, {
  name: "key-link",
  hex: "F119F",
  version: "4.4.95"
}, {
  name: "key-minus",
  hex: "F0308",
  version: "1.5.54"
}, {
  name: "key-outline",
  hex: "F0DD6",
  version: "3.5.94"
}, {
  name: "key-plus",
  hex: "F0309",
  version: "1.5.54"
}, {
  name: "key-remove",
  hex: "F030A",
  version: "1.5.54"
}, {
  name: "key-star",
  hex: "F119E",
  version: "4.4.95"
}, {
  name: "key-variant",
  hex: "F030B",
  version: "1.5.54"
}, {
  name: "key-wireless",
  hex: "F0FC2",
  version: "4.0.96"
}, {
  name: "keyboard",
  hex: "F030C",
  version: "1.5.54"
}, {
  name: "keyboard-backspace",
  hex: "F030D",
  version: "1.5.54"
}, {
  name: "keyboard-caps",
  hex: "F030E",
  version: "1.5.54"
}, {
  name: "keyboard-close",
  hex: "F030F",
  version: "1.5.54"
}, {
  name: "keyboard-esc",
  hex: "F12B7",
  version: "4.7.95"
}, {
  name: "keyboard-f1",
  hex: "F12AB",
  version: "4.7.95"
}, {
  name: "keyboard-f10",
  hex: "F12B4",
  version: "4.7.95"
}, {
  name: "keyboard-f11",
  hex: "F12B5",
  version: "4.7.95"
}, {
  name: "keyboard-f12",
  hex: "F12B6",
  version: "4.7.95"
}, {
  name: "keyboard-f2",
  hex: "F12AC",
  version: "4.7.95"
}, {
  name: "keyboard-f3",
  hex: "F12AD",
  version: "4.7.95"
}, {
  name: "keyboard-f4",
  hex: "F12AE",
  version: "4.7.95"
}, {
  name: "keyboard-f5",
  hex: "F12AF",
  version: "4.7.95"
}, {
  name: "keyboard-f6",
  hex: "F12B0",
  version: "4.7.95"
}, {
  name: "keyboard-f7",
  hex: "F12B1",
  version: "4.7.95"
}, {
  name: "keyboard-f8",
  hex: "F12B2",
  version: "4.7.95"
}, {
  name: "keyboard-f9",
  hex: "F12B3",
  version: "4.7.95"
}, {
  name: "keyboard-off",
  hex: "F0310",
  version: "1.5.54"
}, {
  name: "keyboard-off-outline",
  hex: "F0E4B",
  version: "3.6.95"
}, {
  name: "keyboard-outline",
  hex: "F097B",
  version: "2.4.85"
}, {
  name: "keyboard-return",
  hex: "F0311",
  version: "1.5.54"
}, {
  name: "keyboard-settings",
  hex: "F09F9",
  version: "2.5.94"
}, {
  name: "keyboard-settings-outline",
  hex: "F09FA",
  version: "2.5.94"
}, {
  name: "keyboard-space",
  hex: "F1050",
  version: "4.1.95"
}, {
  name: "keyboard-tab",
  hex: "F0312",
  version: "1.5.54"
}, {
  name: "keyboard-variant",
  hex: "F0313",
  version: "1.5.54"
}, {
  name: "khanda",
  hex: "F10FD",
  version: "4.3.95"
}, {
  name: "kickstarter",
  hex: "F0745",
  version: "1.9.32"
}, {
  name: "klingon",
  hex: "F135B",
  version: "4.9.95"
}, {
  name: "knife",
  hex: "F09FB",
  version: "2.5.94"
}, {
  name: "knife-military",
  hex: "F09FC",
  version: "2.5.94"
}, {
  name: "kodi",
  hex: "F0314",
  version: "1.5.54"
}, {
  name: "kubernetes",
  hex: "F10FE",
  version: "4.3.95"
}, {
  name: "label",
  hex: "F0315",
  version: "1.5.54"
}, {
  name: "label-multiple",
  hex: "F1375",
  version: "4.9.95"
}, {
  name: "label-multiple-outline",
  hex: "F1376",
  version: "4.9.95"
}, {
  name: "label-off",
  hex: "F0ACB",
  version: "2.7.94"
}, {
  name: "label-off-outline",
  hex: "F0ACC",
  version: "2.7.94"
}, {
  name: "label-outline",
  hex: "F0316",
  version: "1.5.54"
}, {
  name: "label-percent",
  hex: "F12EA",
  version: "4.8.95"
}, {
  name: "label-percent-outline",
  hex: "F12EB",
  version: "4.8.95"
}, {
  name: "label-variant",
  hex: "F0ACD",
  version: "2.7.94"
}, {
  name: "label-variant-outline",
  hex: "F0ACE",
  version: "2.7.94"
}, {
  name: "ladybug",
  hex: "F082D",
  version: "2.1.19"
}, {
  name: "lambda",
  hex: "F0627",
  version: "1.6.50"
}, {
  name: "lamp",
  hex: "F06B5",
  version: "1.7.22"
}, {
  name: "lan",
  hex: "F0317",
  version: "1.5.54"
}, {
  name: "lan-check",
  hex: "F12AA",
  version: "4.7.95"
}, {
  name: "lan-connect",
  hex: "F0318",
  version: "1.5.54"
}, {
  name: "lan-disconnect",
  hex: "F0319",
  version: "1.5.54"
}, {
  name: "lan-pending",
  hex: "F031A",
  version: "1.5.54"
}, {
  name: "language-c",
  hex: "F0671",
  version: "1.6.50"
}, {
  name: "language-cpp",
  hex: "F0672",
  version: "1.6.50"
}, {
  name: "language-csharp",
  hex: "F031B",
  version: "1.5.54"
}, {
  name: "language-css3",
  hex: "F031C",
  version: "1.5.54"
}, {
  name: "language-fortran",
  hex: "F121A",
  version: "4.6.95"
}, {
  name: "language-go",
  hex: "F07D3",
  version: "2.0.46"
}, {
  name: "language-haskell",
  hex: "F0C92",
  version: "3.2.89"
}, {
  name: "language-html5",
  hex: "F031D",
  version: "1.5.54"
}, {
  name: "language-java",
  hex: "F0B37",
  version: "2.8.94"
}, {
  name: "language-javascript",
  hex: "F031E",
  version: "1.5.54"
}, {
  name: "language-kotlin",
  hex: "F1219",
  version: "4.6.95"
}, {
  name: "language-lua",
  hex: "F08B1",
  version: "2.2.43"
}, {
  name: "language-markdown",
  hex: "F0354",
  version: "1.5.54"
}, {
  name: "language-markdown-outline",
  hex: "F0F5B",
  version: "3.9.97"
}, {
  name: "language-php",
  hex: "F031F",
  version: "1.5.54"
}, {
  name: "language-python",
  hex: "F0320",
  version: "1.5.54"
}, {
  name: "language-r",
  hex: "F07D4",
  version: "2.0.46"
}, {
  name: "language-ruby",
  hex: "F0D2D",
  version: "3.3.92"
}, {
  name: "language-ruby-on-rails",
  hex: "F0ACF",
  version: "2.7.94"
}, {
  name: "language-swift",
  hex: "F06E5",
  version: "1.8.36"
}, {
  name: "language-typescript",
  hex: "F06E6",
  version: "1.8.36"
}, {
  name: "language-xaml",
  hex: "F0673",
  version: "1.6.50"
}, {
  name: "laptop",
  hex: "F0322",
  version: "1.5.54"
}, {
  name: "laptop-chromebook",
  hex: "F0323",
  version: "1.5.54"
}, {
  name: "laptop-mac",
  hex: "F0324",
  version: "1.5.54"
}, {
  name: "laptop-off",
  hex: "F06E7",
  version: "1.8.36"
}, {
  name: "laptop-windows",
  hex: "F0325",
  version: "1.5.54"
}, {
  name: "laravel",
  hex: "F0AD0",
  version: "2.7.94"
}, {
  name: "lasso",
  hex: "F0F03",
  version: "3.8.95"
}, {
  name: "lastpass",
  hex: "F0446",
  version: "1.5.54"
}, {
  name: "latitude",
  hex: "F0F57",
  version: "3.9.97"
}, {
  name: "launch",
  hex: "F0327",
  version: "1.5.54"
}, {
  name: "lava-lamp",
  hex: "F07D5",
  version: "2.0.46"
}, {
  name: "layers",
  hex: "F0328",
  version: "1.5.54"
}, {
  name: "layers-minus",
  hex: "F0E4C",
  version: "3.6.95"
}, {
  name: "layers-off",
  hex: "F0329",
  version: "1.5.54"
}, {
  name: "layers-off-outline",
  hex: "F09FD",
  version: "2.5.94"
}, {
  name: "layers-outline",
  hex: "F09FE",
  version: "2.5.94"
}, {
  name: "layers-plus",
  hex: "F0E4D",
  version: "3.6.95"
}, {
  name: "layers-remove",
  hex: "F0E4E",
  version: "3.6.95"
}, {
  name: "layers-search",
  hex: "F1206",
  version: "4.6.95"
}, {
  name: "layers-search-outline",
  hex: "F1207",
  version: "4.6.95"
}, {
  name: "layers-triple",
  hex: "F0F58",
  version: "3.9.97"
}, {
  name: "layers-triple-outline",
  hex: "F0F59",
  version: "3.9.97"
}, {
  name: "lead-pencil",
  hex: "F064F",
  version: "1.6.50"
}, {
  name: "leaf",
  hex: "F032A",
  version: "1.5.54"
}, {
  name: "leaf-maple",
  hex: "F0C93",
  version: "3.2.89"
}, {
  name: "leaf-maple-off",
  hex: "F12DA",
  version: "4.8.95"
}, {
  name: "leaf-off",
  hex: "F12D9",
  version: "4.8.95"
}, {
  name: "leak",
  hex: "F0DD7",
  version: "3.5.94"
}, {
  name: "leak-off",
  hex: "F0DD8",
  version: "3.5.94"
}, {
  name: "led-off",
  hex: "F032B",
  version: "1.5.54"
}, {
  name: "led-on",
  hex: "F032C",
  version: "1.5.54"
}, {
  name: "led-outline",
  hex: "F032D",
  version: "1.5.54"
}, {
  name: "led-strip",
  hex: "F07D6",
  version: "2.0.46"
}, {
  name: "led-strip-variant",
  hex: "F1051",
  version: "4.1.95"
}, {
  name: "led-variant-off",
  hex: "F032E",
  version: "1.5.54"
}, {
  name: "led-variant-on",
  hex: "F032F",
  version: "1.5.54"
}, {
  name: "led-variant-outline",
  hex: "F0330",
  version: "1.5.54"
}, {
  name: "leek",
  hex: "F117D",
  version: "4.4.95"
}, {
  name: "less-than",
  hex: "F097C",
  version: "2.4.85"
}, {
  name: "less-than-or-equal",
  hex: "F097D",
  version: "2.4.85"
}, {
  name: "library",
  hex: "F0331",
  version: "1.5.54"
}, {
  name: "library-shelves",
  hex: "F0BA9",
  version: "3.0.39"
}, {
  name: "license",
  hex: "F0FC3",
  version: "4.0.96"
}, {
  name: "lifebuoy",
  hex: "F087E",
  version: "2.1.99"
}, {
  name: "light-switch",
  hex: "F097E",
  version: "2.4.85"
}, {
  name: "lightbulb",
  hex: "F0335",
  version: "1.5.54"
}, {
  name: "lightbulb-cfl",
  hex: "F1208",
  version: "4.6.95"
}, {
  name: "lightbulb-cfl-off",
  hex: "F1209",
  version: "4.6.95"
}, {
  name: "lightbulb-cfl-spiral",
  hex: "F1275",
  version: "4.7.95"
}, {
  name: "lightbulb-cfl-spiral-off",
  hex: "F12C3",
  version: "4.8.95"
}, {
  name: "lightbulb-group",
  hex: "F1253",
  version: "4.6.95"
}, {
  name: "lightbulb-group-off",
  hex: "F12CD",
  version: "4.8.95"
}, {
  name: "lightbulb-group-off-outline",
  hex: "F12CE",
  version: "4.8.95"
}, {
  name: "lightbulb-group-outline",
  hex: "F1254",
  version: "4.6.95"
}, {
  name: "lightbulb-multiple",
  hex: "F1255",
  version: "4.6.95"
}, {
  name: "lightbulb-multiple-off",
  hex: "F12CF",
  version: "4.8.95"
}, {
  name: "lightbulb-multiple-off-outline",
  hex: "F12D0",
  version: "4.8.95"
}, {
  name: "lightbulb-multiple-outline",
  hex: "F1256",
  version: "4.6.95"
}, {
  name: "lightbulb-off",
  hex: "F0E4F",
  version: "3.6.95"
}, {
  name: "lightbulb-off-outline",
  hex: "F0E50",
  version: "3.6.95"
}, {
  name: "lightbulb-on",
  hex: "F06E8",
  version: "1.8.36"
}, {
  name: "lightbulb-on-outline",
  hex: "F06E9",
  version: "1.8.36"
}, {
  name: "lightbulb-outline",
  hex: "F0336",
  version: "1.5.54"
}, {
  name: "lighthouse",
  hex: "F09FF",
  version: "2.5.94"
}, {
  name: "lighthouse-on",
  hex: "F0A00",
  version: "2.5.94"
}, {
  name: "link",
  hex: "F0337",
  version: "1.5.54"
}, {
  name: "link-box",
  hex: "F0D1A",
  version: "3.3.92"
}, {
  name: "link-box-outline",
  hex: "F0D1B",
  version: "3.3.92"
}, {
  name: "link-box-variant",
  hex: "F0D1C",
  version: "3.3.92"
}, {
  name: "link-box-variant-outline",
  hex: "F0D1D",
  version: "3.3.92"
}, {
  name: "link-lock",
  hex: "F10BA",
  version: "4.2.95"
}, {
  name: "link-off",
  hex: "F0338",
  version: "1.5.54"
}, {
  name: "link-plus",
  hex: "F0C94",
  version: "3.2.89"
}, {
  name: "link-variant",
  hex: "F0339",
  version: "1.5.54"
}, {
  name: "link-variant-minus",
  hex: "F10FF",
  version: "4.3.95"
}, {
  name: "link-variant-off",
  hex: "F033A",
  version: "1.5.54"
}, {
  name: "link-variant-plus",
  hex: "F1100",
  version: "4.3.95"
}, {
  name: "link-variant-remove",
  hex: "F1101",
  version: "4.3.95"
}, {
  name: "linkedin",
  hex: "F033B",
  version: "1.5.54"
}, {
  name: "linux",
  hex: "F033D",
  version: "1.5.54"
}, {
  name: "linux-mint",
  hex: "F08ED",
  version: "2.3.50"
}, {
  name: "lipstick",
  hex: "F13B5",
  version: "5.0.45"
}, {
  name: "litecoin",
  hex: "F0A61",
  version: "2.6.95"
}, {
  name: "loading",
  hex: "F0772",
  version: "1.9.32"
}, {
  name: "location-enter",
  hex: "F0FC4",
  version: "4.0.96"
}, {
  name: "location-exit",
  hex: "F0FC5",
  version: "4.0.96"
}, {
  name: "lock",
  hex: "F033E",
  version: "1.5.54"
}, {
  name: "lock-alert",
  hex: "F08EE",
  version: "2.3.50"
}, {
  name: "lock-check",
  hex: "F139A",
  version: "5.0.45"
}, {
  name: "lock-clock",
  hex: "F097F",
  version: "2.4.85"
}, {
  name: "lock-open",
  hex: "F033F",
  version: "1.5.54"
}, {
  name: "lock-open-alert",
  hex: "F139B",
  version: "5.0.45"
}, {
  name: "lock-open-check",
  hex: "F139C",
  version: "5.0.45"
}, {
  name: "lock-open-outline",
  hex: "F0340",
  version: "1.5.54"
}, {
  name: "lock-open-variant",
  hex: "F0FC6",
  version: "4.0.96"
}, {
  name: "lock-open-variant-outline",
  hex: "F0FC7",
  version: "4.0.96"
}, {
  name: "lock-outline",
  hex: "F0341",
  version: "1.5.54"
}, {
  name: "lock-pattern",
  hex: "F06EA",
  version: "1.8.36"
}, {
  name: "lock-plus",
  hex: "F05FB",
  version: "1.5.54"
}, {
  name: "lock-question",
  hex: "F08EF",
  version: "2.3.50"
}, {
  name: "lock-reset",
  hex: "F0773",
  version: "1.9.32"
}, {
  name: "lock-smart",
  hex: "F08B2",
  version: "2.2.43"
}, {
  name: "locker",
  hex: "F07D7",
  version: "2.0.46"
}, {
  name: "locker-multiple",
  hex: "F07D8",
  version: "2.0.46"
}, {
  name: "login",
  hex: "F0342",
  version: "1.5.54"
}, {
  name: "login-variant",
  hex: "F05FC",
  version: "1.5.54"
}, {
  name: "logout",
  hex: "F0343",
  version: "1.5.54"
}, {
  name: "logout-variant",
  hex: "F05FD",
  version: "1.5.54"
}, {
  name: "longitude",
  hex: "F0F5A",
  version: "3.9.97"
}, {
  name: "looks",
  hex: "F0344",
  version: "1.5.54"
}, {
  name: "loupe",
  hex: "F0345",
  version: "1.5.54"
}, {
  name: "lumx",
  hex: "F0346",
  version: "1.5.54"
}, {
  name: "lungs",
  hex: "F1084",
  version: "4.2.95"
}, {
  name: "magnet",
  hex: "F0347",
  version: "1.5.54"
}, {
  name: "magnet-on",
  hex: "F0348",
  version: "1.5.54"
}, {
  name: "magnify",
  hex: "F0349",
  version: "1.5.54"
}, {
  name: "magnify-close",
  hex: "F0980",
  version: "2.4.85"
}, {
  name: "magnify-minus",
  hex: "F034A",
  version: "1.5.54"
}, {
  name: "magnify-minus-cursor",
  hex: "F0A62",
  version: "2.6.95"
}, {
  name: "magnify-minus-outline",
  hex: "F06EC",
  version: "1.8.36"
}, {
  name: "magnify-plus",
  hex: "F034B",
  version: "1.5.54"
}, {
  name: "magnify-plus-cursor",
  hex: "F0A63",
  version: "2.6.95"
}, {
  name: "magnify-plus-outline",
  hex: "F06ED",
  version: "1.8.36"
}, {
  name: "magnify-remove-cursor",
  hex: "F120C",
  version: "4.6.95"
}, {
  name: "magnify-remove-outline",
  hex: "F120D",
  version: "4.6.95"
}, {
  name: "magnify-scan",
  hex: "F1276",
  version: "4.7.95"
}, {
  name: "mail",
  hex: "F0EBB",
  version: "3.7.94"
}, {
  name: "mailbox",
  hex: "F06EE",
  version: "1.8.36"
}, {
  name: "mailbox-open",
  hex: "F0D88",
  version: "3.4.93"
}, {
  name: "mailbox-open-outline",
  hex: "F0D89",
  version: "3.4.93"
}, {
  name: "mailbox-open-up",
  hex: "F0D8A",
  version: "3.4.93"
}, {
  name: "mailbox-open-up-outline",
  hex: "F0D8B",
  version: "3.4.93"
}, {
  name: "mailbox-outline",
  hex: "F0D8C",
  version: "3.4.93"
}, {
  name: "mailbox-up",
  hex: "F0D8D",
  version: "3.4.93"
}, {
  name: "mailbox-up-outline",
  hex: "F0D8E",
  version: "3.4.93"
}, {
  name: "map",
  hex: "F034D",
  version: "1.5.54"
}, {
  name: "map-check",
  hex: "F0EBC",
  version: "3.7.94"
}, {
  name: "map-check-outline",
  hex: "F0EBD",
  version: "3.7.94"
}, {
  name: "map-clock",
  hex: "F0D1E",
  version: "3.3.92"
}, {
  name: "map-clock-outline",
  hex: "F0D1F",
  version: "3.3.92"
}, {
  name: "map-legend",
  hex: "F0A01",
  version: "2.5.94"
}, {
  name: "map-marker",
  hex: "F034E",
  version: "1.5.54"
}, {
  name: "map-marker-alert",
  hex: "F0F05",
  version: "3.8.95"
}, {
  name: "map-marker-alert-outline",
  hex: "F0F06",
  version: "3.8.95"
}, {
  name: "map-marker-check",
  hex: "F0C95",
  version: "3.2.89"
}, {
  name: "map-marker-check-outline",
  hex: "F12FB",
  version: "4.8.95"
}, {
  name: "map-marker-circle",
  hex: "F034F",
  version: "1.5.54"
}, {
  name: "map-marker-distance",
  hex: "F08F0",
  version: "2.3.50"
}, {
  name: "map-marker-down",
  hex: "F1102",
  version: "4.3.95"
}, {
  name: "map-marker-left",
  hex: "F12DB",
  version: "4.8.95"
}, {
  name: "map-marker-left-outline",
  hex: "F12DD",
  version: "4.8.95"
}, {
  name: "map-marker-minus",
  hex: "F0650",
  version: "1.6.50"
}, {
  name: "map-marker-minus-outline",
  hex: "F12F9",
  version: "4.8.95"
}, {
  name: "map-marker-multiple",
  hex: "F0350",
  version: "1.5.54"
}, {
  name: "map-marker-multiple-outline",
  hex: "F1277",
  version: "4.7.95"
}, {
  name: "map-marker-off",
  hex: "F0351",
  version: "1.5.54"
}, {
  name: "map-marker-off-outline",
  hex: "F12FD",
  version: "4.8.95"
}, {
  name: "map-marker-outline",
  hex: "F07D9",
  version: "2.0.46"
}, {
  name: "map-marker-path",
  hex: "F0D20",
  version: "3.3.92"
}, {
  name: "map-marker-plus",
  hex: "F0651",
  version: "1.6.50"
}, {
  name: "map-marker-plus-outline",
  hex: "F12F8",
  version: "4.8.95"
}, {
  name: "map-marker-question",
  hex: "F0F07",
  version: "3.8.95"
}, {
  name: "map-marker-question-outline",
  hex: "F0F08",
  version: "3.8.95"
}, {
  name: "map-marker-radius",
  hex: "F0352",
  version: "1.5.54"
}, {
  name: "map-marker-radius-outline",
  hex: "F12FC",
  version: "4.8.95"
}, {
  name: "map-marker-remove",
  hex: "F0F09",
  version: "3.8.95"
}, {
  name: "map-marker-remove-outline",
  hex: "F12FA",
  version: "4.8.95"
}, {
  name: "map-marker-remove-variant",
  hex: "F0F0A",
  version: "3.8.95"
}, {
  name: "map-marker-right",
  hex: "F12DC",
  version: "4.8.95"
}, {
  name: "map-marker-right-outline",
  hex: "F12DE",
  version: "4.8.95"
}, {
  name: "map-marker-up",
  hex: "F1103",
  version: "4.3.95"
}, {
  name: "map-minus",
  hex: "F0981",
  version: "2.4.85"
}, {
  name: "map-outline",
  hex: "F0982",
  version: "2.4.85"
}, {
  name: "map-plus",
  hex: "F0983",
  version: "2.4.85"
}, {
  name: "map-search",
  hex: "F0984",
  version: "2.4.85"
}, {
  name: "map-search-outline",
  hex: "F0985",
  version: "2.4.85"
}, {
  name: "mapbox",
  hex: "F0BAA",
  version: "3.0.39"
}, {
  name: "margin",
  hex: "F0353",
  version: "1.5.54"
}, {
  name: "marker",
  hex: "F0652",
  version: "1.6.50"
}, {
  name: "marker-cancel",
  hex: "F0DD9",
  version: "3.5.94"
}, {
  name: "marker-check",
  hex: "F0355",
  version: "1.5.54"
}, {
  name: "mastodon",
  hex: "F0AD1",
  version: "2.7.94"
}, {
  name: "material-design",
  hex: "F0986",
  version: "2.4.85"
}, {
  name: "material-ui",
  hex: "F0357",
  version: "1.5.54"
}, {
  name: "math-compass",
  hex: "F0358",
  version: "1.5.54"
}, {
  name: "math-cos",
  hex: "F0C96",
  version: "3.2.89"
}, {
  name: "math-integral",
  hex: "F0FC8",
  version: "4.0.96"
}, {
  name: "math-integral-box",
  hex: "F0FC9",
  version: "4.0.96"
}, {
  name: "math-log",
  hex: "F1085",
  version: "4.2.95"
}, {
  name: "math-norm",
  hex: "F0FCA",
  version: "4.0.96"
}, {
  name: "math-norm-box",
  hex: "F0FCB",
  version: "4.0.96"
}, {
  name: "math-sin",
  hex: "F0C97",
  version: "3.2.89"
}, {
  name: "math-tan",
  hex: "F0C98",
  version: "3.2.89"
}, {
  name: "matrix",
  hex: "F0628",
  version: "1.6.50"
}, {
  name: "medal",
  hex: "F0987",
  version: "2.4.85"
}, {
  name: "medal-outline",
  hex: "F1326",
  version: "4.9.95"
}, {
  name: "medical-bag",
  hex: "F06EF",
  version: "1.8.36"
}, {
  name: "meditation",
  hex: "F117B",
  version: "4.4.95"
}, {
  name: "memory",
  hex: "F035B",
  version: "1.5.54"
}, {
  name: "menu",
  hex: "F035C",
  version: "1.5.54"
}, {
  name: "menu-down",
  hex: "F035D",
  version: "1.5.54"
}, {
  name: "menu-down-outline",
  hex: "F06B6",
  version: "1.7.22"
}, {
  name: "menu-left",
  hex: "F035E",
  version: "1.5.54"
}, {
  name: "menu-left-outline",
  hex: "F0A02",
  version: "2.5.94"
}, {
  name: "menu-open",
  hex: "F0BAB",
  version: "3.0.39"
}, {
  name: "menu-right",
  hex: "F035F",
  version: "1.5.54"
}, {
  name: "menu-right-outline",
  hex: "F0A03",
  version: "2.5.94"
}, {
  name: "menu-swap",
  hex: "F0A64",
  version: "2.6.95"
}, {
  name: "menu-swap-outline",
  hex: "F0A65",
  version: "2.6.95"
}, {
  name: "menu-up",
  hex: "F0360",
  version: "1.5.54"
}, {
  name: "menu-up-outline",
  hex: "F06B7",
  version: "1.7.22"
}, {
  name: "merge",
  hex: "F0F5C",
  version: "3.9.97"
}, {
  name: "message",
  hex: "F0361",
  version: "1.5.54"
}, {
  name: "message-alert",
  hex: "F0362",
  version: "1.5.54"
}, {
  name: "message-alert-outline",
  hex: "F0A04",
  version: "2.5.94"
}, {
  name: "message-arrow-left",
  hex: "F12F2",
  version: "4.8.95"
}, {
  name: "message-arrow-left-outline",
  hex: "F12F3",
  version: "4.8.95"
}, {
  name: "message-arrow-right",
  hex: "F12F4",
  version: "4.8.95"
}, {
  name: "message-arrow-right-outline",
  hex: "F12F5",
  version: "4.8.95"
}, {
  name: "message-bulleted",
  hex: "F06A2",
  version: "1.7.12"
}, {
  name: "message-bulleted-off",
  hex: "F06A3",
  version: "1.7.12"
}, {
  name: "message-cog",
  hex: "F06F1",
  version: "1.8.36"
}, {
  name: "message-cog-outline",
  hex: "F1172",
  version: "4.4.95"
}, {
  name: "message-draw",
  hex: "F0363",
  version: "1.5.54"
}, {
  name: "message-image",
  hex: "F0364",
  version: "1.5.54"
}, {
  name: "message-image-outline",
  hex: "F116C",
  version: "4.4.95"
}, {
  name: "message-lock",
  hex: "F0FCC",
  version: "4.0.96"
}, {
  name: "message-lock-outline",
  hex: "F116D",
  version: "4.4.95"
}, {
  name: "message-minus",
  hex: "F116E",
  version: "4.4.95"
}, {
  name: "message-minus-outline",
  hex: "F116F",
  version: "4.4.95"
}, {
  name: "message-outline",
  hex: "F0365",
  version: "1.5.54"
}, {
  name: "message-plus",
  hex: "F0653",
  version: "1.6.50"
}, {
  name: "message-plus-outline",
  hex: "F10BB",
  version: "4.2.95"
}, {
  name: "message-processing",
  hex: "F0366",
  version: "1.5.54"
}, {
  name: "message-processing-outline",
  hex: "F1170",
  version: "4.4.95"
}, {
  name: "message-reply",
  hex: "F0367",
  version: "1.5.54"
}, {
  name: "message-reply-text",
  hex: "F0368",
  version: "1.5.54"
}, {
  name: "message-settings",
  hex: "F06F0",
  version: "1.8.36"
}, {
  name: "message-settings-outline",
  hex: "F1171",
  version: "4.4.95"
}, {
  name: "message-text",
  hex: "F0369",
  version: "1.5.54"
}, {
  name: "message-text-clock",
  hex: "F1173",
  version: "4.4.95"
}, {
  name: "message-text-clock-outline",
  hex: "F1174",
  version: "4.4.95"
}, {
  name: "message-text-lock",
  hex: "F0FCD",
  version: "4.0.96"
}, {
  name: "message-text-lock-outline",
  hex: "F1175",
  version: "4.4.95"
}, {
  name: "message-text-outline",
  hex: "F036A",
  version: "1.5.54"
}, {
  name: "message-video",
  hex: "F036B",
  version: "1.5.54"
}, {
  name: "meteor",
  hex: "F0629",
  version: "1.6.50"
}, {
  name: "metronome",
  hex: "F07DA",
  version: "2.0.46"
}, {
  name: "metronome-tick",
  hex: "F07DB",
  version: "2.0.46"
}, {
  name: "micro-sd",
  hex: "F07DC",
  version: "2.0.46"
}, {
  name: "microphone",
  hex: "F036C",
  version: "1.5.54"
}, {
  name: "microphone-minus",
  hex: "F08B3",
  version: "2.2.43"
}, {
  name: "microphone-off",
  hex: "F036D",
  version: "1.5.54"
}, {
  name: "microphone-outline",
  hex: "F036E",
  version: "1.5.54"
}, {
  name: "microphone-plus",
  hex: "F08B4",
  version: "2.2.43"
}, {
  name: "microphone-settings",
  hex: "F036F",
  version: "1.5.54"
}, {
  name: "microphone-variant",
  hex: "F0370",
  version: "1.5.54"
}, {
  name: "microphone-variant-off",
  hex: "F0371",
  version: "1.5.54"
}, {
  name: "microscope",
  hex: "F0654",
  version: "1.6.50"
}, {
  name: "microsoft",
  hex: "F0372",
  version: "1.5.54"
}, {
  name: "microsoft-access",
  hex: "F138E",
  version: "5.0.45"
}, {
  name: "microsoft-azure",
  hex: "F0805",
  version: "2.1.19"
}, {
  name: "microsoft-azure-devops",
  hex: "F0FD5",
  version: "4.2.95"
}, {
  name: "microsoft-bing",
  hex: "F00A4",
  version: "1.5.54"
}, {
  name: "microsoft-dynamics-365",
  hex: "F0988",
  version: "2.4.85"
}, {
  name: "microsoft-edge",
  hex: "F01E9",
  version: "1.5.54"
}, {
  name: "microsoft-edge-legacy",
  hex: "F1250",
  version: "4.6.95"
}, {
  name: "microsoft-excel",
  hex: "F138F",
  version: "5.0.45"
}, {
  name: "microsoft-internet-explorer",
  hex: "F0300",
  version: "1.5.54"
}, {
  name: "microsoft-office",
  hex: "F03C6",
  version: "1.5.54"
}, {
  name: "microsoft-onedrive",
  hex: "F03CA",
  version: "1.5.54"
}, {
  name: "microsoft-onenote",
  hex: "F0747",
  version: "1.9.32"
}, {
  name: "microsoft-outlook",
  hex: "F0D22",
  version: "3.3.92"
}, {
  name: "microsoft-powerpoint",
  hex: "F1390",
  version: "5.0.45"
}, {
  name: "microsoft-sharepoint",
  hex: "F1391",
  version: "5.0.45"
}, {
  name: "microsoft-teams",
  hex: "F02BB",
  version: "1.5.54"
}, {
  name: "microsoft-visual-studio",
  hex: "F0610",
  version: "1.5.54"
}, {
  name: "microsoft-visual-studio-code",
  hex: "F0A1E",
  version: "2.5.94"
}, {
  name: "microsoft-windows",
  hex: "F05B3",
  version: "1.5.54"
}, {
  name: "microsoft-windows-classic",
  hex: "F0A21",
  version: "2.5.94"
}, {
  name: "microsoft-word",
  hex: "F1392",
  version: "5.0.45"
}, {
  name: "microsoft-xbox",
  hex: "F05B9",
  version: "1.5.54"
}, {
  name: "microsoft-xbox-controller",
  hex: "F05BA",
  version: "1.5.54"
}, {
  name: "microsoft-xbox-controller-battery-alert",
  hex: "F074B",
  version: "1.9.32"
}, {
  name: "microsoft-xbox-controller-battery-charging",
  hex: "F0A22",
  version: "2.5.94"
}, {
  name: "microsoft-xbox-controller-battery-empty",
  hex: "F074C",
  version: "1.9.32"
}, {
  name: "microsoft-xbox-controller-battery-full",
  hex: "F074D",
  version: "1.9.32"
}, {
  name: "microsoft-xbox-controller-battery-low",
  hex: "F074E",
  version: "1.9.32"
}, {
  name: "microsoft-xbox-controller-battery-medium",
  hex: "F074F",
  version: "1.9.32"
}, {
  name: "microsoft-xbox-controller-battery-unknown",
  hex: "F0750",
  version: "1.9.32"
}, {
  name: "microsoft-xbox-controller-menu",
  hex: "F0E6F",
  version: "3.6.95"
}, {
  name: "microsoft-xbox-controller-off",
  hex: "F05BB",
  version: "1.5.54"
}, {
  name: "microsoft-xbox-controller-view",
  hex: "F0E70",
  version: "3.6.95"
}, {
  name: "microsoft-yammer",
  hex: "F0789",
  version: "1.9.32"
}, {
  name: "microwave",
  hex: "F0C99",
  version: "3.2.89"
}, {
  name: "middleware",
  hex: "F0F5D",
  version: "3.9.97"
}, {
  name: "middleware-outline",
  hex: "F0F5E",
  version: "3.9.97"
}, {
  name: "midi",
  hex: "F08F1",
  version: "2.3.50"
}, {
  name: "midi-port",
  hex: "F08F2",
  version: "2.3.50"
}, {
  name: "mine",
  hex: "F0DDA",
  version: "3.5.94"
}, {
  name: "minecraft",
  hex: "F0373",
  version: "1.5.54"
}, {
  name: "mini-sd",
  hex: "F0A05",
  version: "2.5.94"
}, {
  name: "minidisc",
  hex: "F0A06",
  version: "2.5.94"
}, {
  name: "minus",
  hex: "F0374",
  version: "1.5.54"
}, {
  name: "minus-box",
  hex: "F0375",
  version: "1.5.54"
}, {
  name: "minus-box-multiple",
  hex: "F1141",
  version: "4.4.95"
}, {
  name: "minus-box-multiple-outline",
  hex: "F1142",
  version: "4.4.95"
}, {
  name: "minus-box-outline",
  hex: "F06F2",
  version: "1.8.36"
}, {
  name: "minus-circle",
  hex: "F0376",
  version: "1.5.54"
}, {
  name: "minus-circle-multiple",
  hex: "F035A",
  version: "1.5.54"
}, {
  name: "minus-circle-multiple-outline",
  hex: "F0AD3",
  version: "2.7.94"
}, {
  name: "minus-circle-outline",
  hex: "F0377",
  version: "1.5.54"
}, {
  name: "minus-network",
  hex: "F0378",
  version: "1.5.54"
}, {
  name: "minus-network-outline",
  hex: "F0C9A",
  version: "3.2.89"
}, {
  name: "mirror",
  hex: "F11FD",
  version: "4.6.95"
}, {
  name: "mixed-martial-arts",
  hex: "F0D8F",
  version: "3.4.93"
}, {
  name: "mixed-reality",
  hex: "F087F",
  version: "2.1.99"
}, {
  name: "mixer",
  hex: "F07DD",
  version: "2.0.46"
}, {
  name: "molecule",
  hex: "F0BAC",
  version: "3.0.39"
}, {
  name: "molecule-co",
  hex: "F12FE",
  version: "4.8.95"
}, {
  name: "molecule-co2",
  hex: "F07E4",
  version: "2.0.46"
}, {
  name: "monitor",
  hex: "F0379",
  version: "1.5.54"
}, {
  name: "monitor-cellphone",
  hex: "F0989",
  version: "2.4.85"
}, {
  name: "monitor-cellphone-star",
  hex: "F098A",
  version: "2.4.85"
}, {
  name: "monitor-clean",
  hex: "F1104",
  version: "4.3.95"
}, {
  name: "monitor-dashboard",
  hex: "F0A07",
  version: "2.5.94"
}, {
  name: "monitor-edit",
  hex: "F12C6",
  version: "4.8.95"
}, {
  name: "monitor-eye",
  hex: "F13B4",
  version: "5.0.45"
}, {
  name: "monitor-lock",
  hex: "F0DDB",
  version: "3.5.94"
}, {
  name: "monitor-multiple",
  hex: "F037A",
  version: "1.5.54"
}, {
  name: "monitor-off",
  hex: "F0D90",
  version: "3.4.93"
}, {
  name: "monitor-screenshot",
  hex: "F0E51",
  version: "3.6.95"
}, {
  name: "monitor-speaker",
  hex: "F0F5F",
  version: "3.9.97"
}, {
  name: "monitor-speaker-off",
  hex: "F0F60",
  version: "3.9.97"
}, {
  name: "monitor-star",
  hex: "F0DDC",
  version: "3.5.94"
}, {
  name: "moon-first-quarter",
  hex: "F0F61",
  version: "3.9.97"
}, {
  name: "moon-full",
  hex: "F0F62",
  version: "3.9.97"
}, {
  name: "moon-last-quarter",
  hex: "F0F63",
  version: "3.9.97"
}, {
  name: "moon-new",
  hex: "F0F64",
  version: "3.9.97"
}, {
  name: "moon-waning-crescent",
  hex: "F0F65",
  version: "3.9.97"
}, {
  name: "moon-waning-gibbous",
  hex: "F0F66",
  version: "3.9.97"
}, {
  name: "moon-waxing-crescent",
  hex: "F0F67",
  version: "3.9.97"
}, {
  name: "moon-waxing-gibbous",
  hex: "F0F68",
  version: "3.9.97"
}, {
  name: "moped",
  hex: "F1086",
  version: "4.2.95"
}, {
  name: "more",
  hex: "F037B",
  version: "1.5.54"
}, {
  name: "mother-heart",
  hex: "F1314",
  version: "4.8.95"
}, {
  name: "mother-nurse",
  hex: "F0D21",
  version: "3.3.92"
}, {
  name: "motion-sensor",
  hex: "F0D91",
  version: "3.4.93"
}, {
  name: "motorbike",
  hex: "F037C",
  version: "1.5.54"
}, {
  name: "mouse",
  hex: "F037D",
  version: "1.5.54"
}, {
  name: "mouse-bluetooth",
  hex: "F098B",
  version: "2.4.85"
}, {
  name: "mouse-off",
  hex: "F037E",
  version: "1.5.54"
}, {
  name: "mouse-variant",
  hex: "F037F",
  version: "1.5.54"
}, {
  name: "mouse-variant-off",
  hex: "F0380",
  version: "1.5.54"
}, {
  name: "move-resize",
  hex: "F0655",
  version: "1.6.50"
}, {
  name: "move-resize-variant",
  hex: "F0656",
  version: "1.6.50"
}, {
  name: "movie",
  hex: "F0381",
  version: "1.5.54"
}, {
  name: "movie-edit",
  hex: "F1122",
  version: "4.3.95"
}, {
  name: "movie-edit-outline",
  hex: "F1123",
  version: "4.3.95"
}, {
  name: "movie-filter",
  hex: "F1124",
  version: "4.3.95"
}, {
  name: "movie-filter-outline",
  hex: "F1125",
  version: "4.3.95"
}, {
  name: "movie-open",
  hex: "F0FCE",
  version: "4.0.96"
}, {
  name: "movie-open-outline",
  hex: "F0FCF",
  version: "4.0.96"
}, {
  name: "movie-outline",
  hex: "F0DDD",
  version: "3.5.94"
}, {
  name: "movie-roll",
  hex: "F07DE",
  version: "2.0.46"
}, {
  name: "movie-search",
  hex: "F11D2",
  version: "4.5.95"
}, {
  name: "movie-search-outline",
  hex: "F11D3",
  version: "4.5.95"
}, {
  name: "muffin",
  hex: "F098C",
  version: "2.4.85"
}, {
  name: "multiplication",
  hex: "F0382",
  version: "1.5.54"
}, {
  name: "multiplication-box",
  hex: "F0383",
  version: "1.5.54"
}, {
  name: "mushroom",
  hex: "F07DF",
  version: "2.0.46"
}, {
  name: "mushroom-outline",
  hex: "F07E0",
  version: "2.0.46"
}, {
  name: "music",
  hex: "F075A",
  version: "1.9.32"
}, {
  name: "music-accidental-double-flat",
  hex: "F0F69",
  version: "3.9.97"
}, {
  name: "music-accidental-double-sharp",
  hex: "F0F6A",
  version: "3.9.97"
}, {
  name: "music-accidental-flat",
  hex: "F0F6B",
  version: "3.9.97"
}, {
  name: "music-accidental-natural",
  hex: "F0F6C",
  version: "3.9.97"
}, {
  name: "music-accidental-sharp",
  hex: "F0F6D",
  version: "3.9.97"
}, {
  name: "music-box",
  hex: "F0384",
  version: "1.5.54"
}, {
  name: "music-box-multiple",
  hex: "F0333",
  version: "1.5.54"
}, {
  name: "music-box-multiple-outline",
  hex: "F0F04",
  version: "3.8.95"
}, {
  name: "music-box-outline",
  hex: "F0385",
  version: "1.5.54"
}, {
  name: "music-circle",
  hex: "F0386",
  version: "1.5.54"
}, {
  name: "music-circle-outline",
  hex: "F0AD4",
  version: "2.7.94"
}, {
  name: "music-clef-alto",
  hex: "F0F6E",
  version: "3.9.97"
}, {
  name: "music-clef-bass",
  hex: "F0F6F",
  version: "3.9.97"
}, {
  name: "music-clef-treble",
  hex: "F0F70",
  version: "3.9.97"
}, {
  name: "music-note",
  hex: "F0387",
  version: "1.5.54"
}, {
  name: "music-note-bluetooth",
  hex: "F05FE",
  version: "1.5.54"
}, {
  name: "music-note-bluetooth-off",
  hex: "F05FF",
  version: "1.5.54"
}, {
  name: "music-note-eighth",
  hex: "F0388",
  version: "1.5.54"
}, {
  name: "music-note-eighth-dotted",
  hex: "F0F71",
  version: "3.9.97"
}, {
  name: "music-note-half",
  hex: "F0389",
  version: "1.5.54"
}, {
  name: "music-note-half-dotted",
  hex: "F0F72",
  version: "3.9.97"
}, {
  name: "music-note-off",
  hex: "F038A",
  version: "1.5.54"
}, {
  name: "music-note-off-outline",
  hex: "F0F73",
  version: "3.9.97"
}, {
  name: "music-note-outline",
  hex: "F0F74",
  version: "3.9.97"
}, {
  name: "music-note-plus",
  hex: "F0DDE",
  version: "3.5.94"
}, {
  name: "music-note-quarter",
  hex: "F038B",
  version: "1.5.54"
}, {
  name: "music-note-quarter-dotted",
  hex: "F0F75",
  version: "3.9.97"
}, {
  name: "music-note-sixteenth",
  hex: "F038C",
  version: "1.5.54"
}, {
  name: "music-note-sixteenth-dotted",
  hex: "F0F76",
  version: "3.9.97"
}, {
  name: "music-note-whole",
  hex: "F038D",
  version: "1.5.54"
}, {
  name: "music-note-whole-dotted",
  hex: "F0F77",
  version: "3.9.97"
}, {
  name: "music-off",
  hex: "F075B",
  version: "1.9.32"
}, {
  name: "music-rest-eighth",
  hex: "F0F78",
  version: "3.9.97"
}, {
  name: "music-rest-half",
  hex: "F0F79",
  version: "3.9.97"
}, {
  name: "music-rest-quarter",
  hex: "F0F7A",
  version: "3.9.97"
}, {
  name: "music-rest-sixteenth",
  hex: "F0F7B",
  version: "3.9.97"
}, {
  name: "music-rest-whole",
  hex: "F0F7C",
  version: "3.9.97"
}, {
  name: "nail",
  hex: "F0DDF",
  version: "3.5.94"
}, {
  name: "nas",
  hex: "F08F3",
  version: "2.3.50"
}, {
  name: "nativescript",
  hex: "F0880",
  version: "2.1.99"
}, {
  name: "nature",
  hex: "F038E",
  version: "1.5.54"
}, {
  name: "nature-people",
  hex: "F038F",
  version: "1.5.54"
}, {
  name: "navigation",
  hex: "F0390",
  version: "1.5.54"
}, {
  name: "near-me",
  hex: "F05CD",
  version: "1.5.54"
}, {
  name: "necklace",
  hex: "F0F0B",
  version: "3.8.95"
}, {
  name: "needle",
  hex: "F0391",
  version: "1.5.54"
}, {
  name: "netflix",
  hex: "F0746",
  version: "1.9.32"
}, {
  name: "network",
  hex: "F06F3",
  version: "1.8.36"
}, {
  name: "network-off",
  hex: "F0C9B",
  version: "3.2.89"
}, {
  name: "network-off-outline",
  hex: "F0C9C",
  version: "3.2.89"
}, {
  name: "network-outline",
  hex: "F0C9D",
  version: "3.2.89"
}, {
  name: "network-strength-1",
  hex: "F08F4",
  version: "2.3.50"
}, {
  name: "network-strength-1-alert",
  hex: "F08F5",
  version: "2.3.50"
}, {
  name: "network-strength-2",
  hex: "F08F6",
  version: "2.3.50"
}, {
  name: "network-strength-2-alert",
  hex: "F08F7",
  version: "2.3.50"
}, {
  name: "network-strength-3",
  hex: "F08F8",
  version: "2.3.50"
}, {
  name: "network-strength-3-alert",
  hex: "F08F9",
  version: "2.3.50"
}, {
  name: "network-strength-4",
  hex: "F08FA",
  version: "2.3.50"
}, {
  name: "network-strength-4-alert",
  hex: "F08FB",
  version: "2.3.50"
}, {
  name: "network-strength-off",
  hex: "F08FC",
  version: "2.3.50"
}, {
  name: "network-strength-off-outline",
  hex: "F08FD",
  version: "2.3.50"
}, {
  name: "network-strength-outline",
  hex: "F08FE",
  version: "2.3.50"
}, {
  name: "new-box",
  hex: "F0394",
  version: "1.5.54"
}, {
  name: "newspaper",
  hex: "F0395",
  version: "1.5.54"
}, {
  name: "newspaper-minus",
  hex: "F0F0C",
  version: "3.8.95"
}, {
  name: "newspaper-plus",
  hex: "F0F0D",
  version: "3.8.95"
}, {
  name: "newspaper-variant",
  hex: "F1001",
  version: "4.0.96"
}, {
  name: "newspaper-variant-multiple",
  hex: "F1002",
  version: "4.0.96"
}, {
  name: "newspaper-variant-multiple-outline",
  hex: "F1003",
  version: "4.0.96"
}, {
  name: "newspaper-variant-outline",
  hex: "F1004",
  version: "4.0.96"
}, {
  name: "nfc",
  hex: "F0396",
  version: "1.5.54"
}, {
  name: "nfc-search-variant",
  hex: "F0E53",
  version: "3.6.95"
}, {
  name: "nfc-tap",
  hex: "F0397",
  version: "1.5.54"
}, {
  name: "nfc-variant",
  hex: "F0398",
  version: "1.5.54"
}, {
  name: "nfc-variant-off",
  hex: "F0E54",
  version: "3.6.95"
}, {
  name: "ninja",
  hex: "F0774",
  version: "1.9.32"
}, {
  name: "nintendo-game-boy",
  hex: "F1393",
  version: "5.0.45"
}, {
  name: "nintendo-switch",
  hex: "F07E1",
  version: "2.0.46"
}, {
  name: "nintendo-wii",
  hex: "F05AB",
  version: "1.5.54"
}, {
  name: "nintendo-wiiu",
  hex: "F072D",
  version: "1.8.36"
}, {
  name: "nix",
  hex: "F1105",
  version: "4.3.95"
}, {
  name: "nodejs",
  hex: "F0399",
  version: "1.5.54"
}, {
  name: "noodles",
  hex: "F117E",
  version: "4.4.95"
}, {
  name: "not-equal",
  hex: "F098D",
  version: "2.4.85"
}, {
  name: "not-equal-variant",
  hex: "F098E",
  version: "2.4.85"
}, {
  name: "note",
  hex: "F039A",
  version: "1.5.54"
}, {
  name: "note-multiple",
  hex: "F06B8",
  version: "1.7.22"
}, {
  name: "note-multiple-outline",
  hex: "F06B9",
  version: "1.7.22"
}, {
  name: "note-outline",
  hex: "F039B",
  version: "1.5.54"
}, {
  name: "note-plus",
  hex: "F039C",
  version: "1.5.54"
}, {
  name: "note-plus-outline",
  hex: "F039D",
  version: "1.5.54"
}, {
  name: "note-text",
  hex: "F039E",
  version: "1.5.54"
}, {
  name: "note-text-outline",
  hex: "F11D7",
  version: "4.5.95"
}, {
  name: "notebook",
  hex: "F082E",
  version: "2.1.19"
}, {
  name: "notebook-multiple",
  hex: "F0E55",
  version: "3.6.95"
}, {
  name: "notebook-outline",
  hex: "F0EBF",
  version: "3.7.94"
}, {
  name: "notification-clear-all",
  hex: "F039F",
  version: "1.5.54"
}, {
  name: "npm",
  hex: "F06F7",
  version: "1.8.36"
}, {
  name: "nuke",
  hex: "F06A4",
  version: "1.7.12"
}, {
  name: "null",
  hex: "F07E2",
  version: "2.0.46"
}, {
  name: "numeric",
  hex: "F03A0",
  version: "1.5.54"
}, {
  name: "numeric-0",
  hex: "F0B39",
  version: "2.8.94"
}, {
  name: "numeric-0-box",
  hex: "F03A1",
  version: "1.5.54"
}, {
  name: "numeric-0-box-multiple",
  hex: "F0F0E",
  version: "3.8.95"
}, {
  name: "numeric-0-box-multiple-outline",
  hex: "F03A2",
  version: "1.5.54"
}, {
  name: "numeric-0-box-outline",
  hex: "F03A3",
  version: "1.5.54"
}, {
  name: "numeric-0-circle",
  hex: "F0C9E",
  version: "3.2.89"
}, {
  name: "numeric-0-circle-outline",
  hex: "F0C9F",
  version: "3.2.89"
}, {
  name: "numeric-1",
  hex: "F0B3A",
  version: "2.8.94"
}, {
  name: "numeric-1-box",
  hex: "F03A4",
  version: "1.5.54"
}, {
  name: "numeric-1-box-multiple",
  hex: "F0F0F",
  version: "3.8.95"
}, {
  name: "numeric-1-box-multiple-outline",
  hex: "F03A5",
  version: "1.5.54"
}, {
  name: "numeric-1-box-outline",
  hex: "F03A6",
  version: "1.5.54"
}, {
  name: "numeric-1-circle",
  hex: "F0CA0",
  version: "3.2.89"
}, {
  name: "numeric-1-circle-outline",
  hex: "F0CA1",
  version: "3.2.89"
}, {
  name: "numeric-10",
  hex: "F0FE9",
  version: "4.0.96"
}, {
  name: "numeric-10-box",
  hex: "F0F7D",
  version: "3.9.97"
}, {
  name: "numeric-10-box-multiple",
  hex: "F0FEA",
  version: "4.0.96"
}, {
  name: "numeric-10-box-multiple-outline",
  hex: "F0FEB",
  version: "4.0.96"
}, {
  name: "numeric-10-box-outline",
  hex: "F0F7E",
  version: "3.9.97"
}, {
  name: "numeric-10-circle",
  hex: "F0FEC",
  version: "4.0.96"
}, {
  name: "numeric-10-circle-outline",
  hex: "F0FED",
  version: "4.0.96"
}, {
  name: "numeric-2",
  hex: "F0B3B",
  version: "2.8.94"
}, {
  name: "numeric-2-box",
  hex: "F03A7",
  version: "1.5.54"
}, {
  name: "numeric-2-box-multiple",
  hex: "F0F10",
  version: "3.8.95"
}, {
  name: "numeric-2-box-multiple-outline",
  hex: "F03A8",
  version: "1.5.54"
}, {
  name: "numeric-2-box-outline",
  hex: "F03A9",
  version: "1.5.54"
}, {
  name: "numeric-2-circle",
  hex: "F0CA2",
  version: "3.2.89"
}, {
  name: "numeric-2-circle-outline",
  hex: "F0CA3",
  version: "3.2.89"
}, {
  name: "numeric-3",
  hex: "F0B3C",
  version: "2.8.94"
}, {
  name: "numeric-3-box",
  hex: "F03AA",
  version: "1.5.54"
}, {
  name: "numeric-3-box-multiple",
  hex: "F0F11",
  version: "3.8.95"
}, {
  name: "numeric-3-box-multiple-outline",
  hex: "F03AB",
  version: "1.5.54"
}, {
  name: "numeric-3-box-outline",
  hex: "F03AC",
  version: "1.5.54"
}, {
  name: "numeric-3-circle",
  hex: "F0CA4",
  version: "3.2.89"
}, {
  name: "numeric-3-circle-outline",
  hex: "F0CA5",
  version: "3.2.89"
}, {
  name: "numeric-4",
  hex: "F0B3D",
  version: "2.8.94"
}, {
  name: "numeric-4-box",
  hex: "F03AD",
  version: "1.5.54"
}, {
  name: "numeric-4-box-multiple",
  hex: "F0F12",
  version: "3.8.95"
}, {
  name: "numeric-4-box-multiple-outline",
  hex: "F03B2",
  version: "1.5.54"
}, {
  name: "numeric-4-box-outline",
  hex: "F03AE",
  version: "1.5.54"
}, {
  name: "numeric-4-circle",
  hex: "F0CA6",
  version: "3.2.89"
}, {
  name: "numeric-4-circle-outline",
  hex: "F0CA7",
  version: "3.2.89"
}, {
  name: "numeric-5",
  hex: "F0B3E",
  version: "2.8.94"
}, {
  name: "numeric-5-box",
  hex: "F03B1",
  version: "1.5.54"
}, {
  name: "numeric-5-box-multiple",
  hex: "F0F13",
  version: "3.8.95"
}, {
  name: "numeric-5-box-multiple-outline",
  hex: "F03AF",
  version: "1.5.54"
}, {
  name: "numeric-5-box-outline",
  hex: "F03B0",
  version: "1.5.54"
}, {
  name: "numeric-5-circle",
  hex: "F0CA8",
  version: "3.2.89"
}, {
  name: "numeric-5-circle-outline",
  hex: "F0CA9",
  version: "3.2.89"
}, {
  name: "numeric-6",
  hex: "F0B3F",
  version: "2.8.94"
}, {
  name: "numeric-6-box",
  hex: "F03B3",
  version: "1.5.54"
}, {
  name: "numeric-6-box-multiple",
  hex: "F0F14",
  version: "3.8.95"
}, {
  name: "numeric-6-box-multiple-outline",
  hex: "F03B4",
  version: "1.5.54"
}, {
  name: "numeric-6-box-outline",
  hex: "F03B5",
  version: "1.5.54"
}, {
  name: "numeric-6-circle",
  hex: "F0CAA",
  version: "3.2.89"
}, {
  name: "numeric-6-circle-outline",
  hex: "F0CAB",
  version: "3.2.89"
}, {
  name: "numeric-7",
  hex: "F0B40",
  version: "2.8.94"
}, {
  name: "numeric-7-box",
  hex: "F03B6",
  version: "1.5.54"
}, {
  name: "numeric-7-box-multiple",
  hex: "F0F15",
  version: "3.8.95"
}, {
  name: "numeric-7-box-multiple-outline",
  hex: "F03B7",
  version: "1.5.54"
}, {
  name: "numeric-7-box-outline",
  hex: "F03B8",
  version: "1.5.54"
}, {
  name: "numeric-7-circle",
  hex: "F0CAC",
  version: "3.2.89"
}, {
  name: "numeric-7-circle-outline",
  hex: "F0CAD",
  version: "3.2.89"
}, {
  name: "numeric-8",
  hex: "F0B41",
  version: "2.8.94"
}, {
  name: "numeric-8-box",
  hex: "F03B9",
  version: "1.5.54"
}, {
  name: "numeric-8-box-multiple",
  hex: "F0F16",
  version: "3.8.95"
}, {
  name: "numeric-8-box-multiple-outline",
  hex: "F03BA",
  version: "1.5.54"
}, {
  name: "numeric-8-box-outline",
  hex: "F03BB",
  version: "1.5.54"
}, {
  name: "numeric-8-circle",
  hex: "F0CAE",
  version: "3.2.89"
}, {
  name: "numeric-8-circle-outline",
  hex: "F0CAF",
  version: "3.2.89"
}, {
  name: "numeric-9",
  hex: "F0B42",
  version: "2.8.94"
}, {
  name: "numeric-9-box",
  hex: "F03BC",
  version: "1.5.54"
}, {
  name: "numeric-9-box-multiple",
  hex: "F0F17",
  version: "3.8.95"
}, {
  name: "numeric-9-box-multiple-outline",
  hex: "F03BD",
  version: "1.5.54"
}, {
  name: "numeric-9-box-outline",
  hex: "F03BE",
  version: "1.5.54"
}, {
  name: "numeric-9-circle",
  hex: "F0CB0",
  version: "3.2.89"
}, {
  name: "numeric-9-circle-outline",
  hex: "F0CB1",
  version: "3.2.89"
}, {
  name: "numeric-9-plus",
  hex: "F0FEE",
  version: "4.0.96"
}, {
  name: "numeric-9-plus-box",
  hex: "F03BF",
  version: "1.5.54"
}, {
  name: "numeric-9-plus-box-multiple",
  hex: "F0F18",
  version: "3.8.95"
}, {
  name: "numeric-9-plus-box-multiple-outline",
  hex: "F03C0",
  version: "1.5.54"
}, {
  name: "numeric-9-plus-box-outline",
  hex: "F03C1",
  version: "1.5.54"
}, {
  name: "numeric-9-plus-circle",
  hex: "F0CB2",
  version: "3.2.89"
}, {
  name: "numeric-9-plus-circle-outline",
  hex: "F0CB3",
  version: "3.2.89"
}, {
  name: "numeric-negative-1",
  hex: "F1052",
  version: "4.1.95"
}, {
  name: "nut",
  hex: "F06F8",
  version: "1.8.36"
}, {
  name: "nutrition",
  hex: "F03C2",
  version: "1.5.54"
}, {
  name: "nuxt",
  hex: "F1106",
  version: "4.3.95"
}, {
  name: "oar",
  hex: "F067C",
  version: "1.7.12"
}, {
  name: "ocarina",
  hex: "F0DE0",
  version: "3.5.94"
}, {
  name: "oci",
  hex: "F12E9",
  version: "4.8.95"
}, {
  name: "ocr",
  hex: "F113A",
  version: "4.4.95"
}, {
  name: "octagon",
  hex: "F03C3",
  version: "1.5.54"
}, {
  name: "octagon-outline",
  hex: "F03C4",
  version: "1.5.54"
}, {
  name: "octagram",
  hex: "F06F9",
  version: "1.8.36"
}, {
  name: "octagram-outline",
  hex: "F0775",
  version: "1.9.32"
}, {
  name: "odnoklassniki",
  hex: "F03C5",
  version: "1.5.54"
}, {
  name: "offer",
  hex: "F121B",
  version: "4.6.95"
}, {
  name: "office-building",
  hex: "F0991",
  version: "2.4.85"
}, {
  name: "oil",
  hex: "F03C7",
  version: "1.5.54"
}, {
  name: "oil-lamp",
  hex: "F0F19",
  version: "3.8.95"
}, {
  name: "oil-level",
  hex: "F1053",
  version: "4.1.95"
}, {
  name: "oil-temperature",
  hex: "F0FF8",
  version: "4.0.96"
}, {
  name: "omega",
  hex: "F03C9",
  version: "1.5.54"
}, {
  name: "one-up",
  hex: "F0BAD",
  version: "3.0.39"
}, {
  name: "onepassword",
  hex: "F0881",
  version: "2.1.99"
}, {
  name: "opacity",
  hex: "F05CC",
  version: "1.5.54"
}, {
  name: "open-in-app",
  hex: "F03CB",
  version: "1.5.54"
}, {
  name: "open-in-new",
  hex: "F03CC",
  version: "1.5.54"
}, {
  name: "open-source-initiative",
  hex: "F0BAE",
  version: "3.0.39"
}, {
  name: "openid",
  hex: "F03CD",
  version: "1.5.54"
}, {
  name: "opera",
  hex: "F03CE",
  version: "1.5.54"
}, {
  name: "orbit",
  hex: "F0018",
  version: "1.5.54"
}, {
  name: "order-alphabetical-ascending",
  hex: "F020D",
  version: "1.5.54"
}, {
  name: "order-alphabetical-descending",
  hex: "F0D07",
  version: "3.3.92"
}, {
  name: "order-bool-ascending",
  hex: "F02BE",
  version: "1.5.54"
}, {
  name: "order-bool-ascending-variant",
  hex: "F098F",
  version: "2.4.85"
}, {
  name: "order-bool-descending",
  hex: "F1384",
  version: "5.0.45"
}, {
  name: "order-bool-descending-variant",
  hex: "F0990",
  version: "2.4.85"
}, {
  name: "order-numeric-ascending",
  hex: "F0545",
  version: "1.5.54"
}, {
  name: "order-numeric-descending",
  hex: "F0546",
  version: "1.5.54"
}, {
  name: "origin",
  hex: "F0B43",
  version: "2.8.94"
}, {
  name: "ornament",
  hex: "F03CF",
  version: "1.5.54"
}, {
  name: "ornament-variant",
  hex: "F03D0",
  version: "1.5.54"
}, {
  name: "outdoor-lamp",
  hex: "F1054",
  version: "4.1.95"
}, {
  name: "overscan",
  hex: "F1005",
  version: "4.0.96"
}, {
  name: "owl",
  hex: "F03D2",
  version: "1.5.54"
}, {
  name: "pac-man",
  hex: "F0BAF",
  version: "3.0.39"
}, {
  name: "package",
  hex: "F03D3",
  version: "1.5.54"
}, {
  name: "package-down",
  hex: "F03D4",
  version: "1.5.54"
}, {
  name: "package-up",
  hex: "F03D5",
  version: "1.5.54"
}, {
  name: "package-variant",
  hex: "F03D6",
  version: "1.5.54"
}, {
  name: "package-variant-closed",
  hex: "F03D7",
  version: "1.5.54"
}, {
  name: "page-first",
  hex: "F0600",
  version: "1.5.54"
}, {
  name: "page-last",
  hex: "F0601",
  version: "1.5.54"
}, {
  name: "page-layout-body",
  hex: "F06FA",
  version: "1.8.36"
}, {
  name: "page-layout-footer",
  hex: "F06FB",
  version: "1.8.36"
}, {
  name: "page-layout-header",
  hex: "F06FC",
  version: "1.8.36"
}, {
  name: "page-layout-header-footer",
  hex: "F0F7F",
  version: "3.9.97"
}, {
  name: "page-layout-sidebar-left",
  hex: "F06FD",
  version: "1.8.36"
}, {
  name: "page-layout-sidebar-right",
  hex: "F06FE",
  version: "1.8.36"
}, {
  name: "page-next",
  hex: "F0BB0",
  version: "3.0.39"
}, {
  name: "page-next-outline",
  hex: "F0BB1",
  version: "3.0.39"
}, {
  name: "page-previous",
  hex: "F0BB2",
  version: "3.0.39"
}, {
  name: "page-previous-outline",
  hex: "F0BB3",
  version: "3.0.39"
}, {
  name: "palette",
  hex: "F03D8",
  version: "1.5.54"
}, {
  name: "palette-advanced",
  hex: "F03D9",
  version: "1.5.54"
}, {
  name: "palette-outline",
  hex: "F0E0C",
  version: "3.5.95"
}, {
  name: "palette-swatch",
  hex: "F08B5",
  version: "2.2.43"
}, {
  name: "palette-swatch-outline",
  hex: "F135C",
  version: "4.9.95"
}, {
  name: "palm-tree",
  hex: "F1055",
  version: "4.1.95"
}, {
  name: "pan",
  hex: "F0BB4",
  version: "3.0.39"
}, {
  name: "pan-bottom-left",
  hex: "F0BB5",
  version: "3.0.39"
}, {
  name: "pan-bottom-right",
  hex: "F0BB6",
  version: "3.0.39"
}, {
  name: "pan-down",
  hex: "F0BB7",
  version: "3.0.39"
}, {
  name: "pan-horizontal",
  hex: "F0BB8",
  version: "3.0.39"
}, {
  name: "pan-left",
  hex: "F0BB9",
  version: "3.0.39"
}, {
  name: "pan-right",
  hex: "F0BBA",
  version: "3.0.39"
}, {
  name: "pan-top-left",
  hex: "F0BBB",
  version: "3.0.39"
}, {
  name: "pan-top-right",
  hex: "F0BBC",
  version: "3.0.39"
}, {
  name: "pan-up",
  hex: "F0BBD",
  version: "3.0.39"
}, {
  name: "pan-vertical",
  hex: "F0BBE",
  version: "3.0.39"
}, {
  name: "panda",
  hex: "F03DA",
  version: "1.5.54"
}, {
  name: "pandora",
  hex: "F03DB",
  version: "1.5.54"
}, {
  name: "panorama",
  hex: "F03DC",
  version: "1.5.54"
}, {
  name: "panorama-fisheye",
  hex: "F03DD",
  version: "1.5.54"
}, {
  name: "panorama-horizontal",
  hex: "F03DE",
  version: "1.5.54"
}, {
  name: "panorama-vertical",
  hex: "F03DF",
  version: "1.5.54"
}, {
  name: "panorama-wide-angle",
  hex: "F03E0",
  version: "1.5.54"
}, {
  name: "paper-cut-vertical",
  hex: "F03E1",
  version: "1.5.54"
}, {
  name: "paper-roll",
  hex: "F1157",
  version: "4.4.95"
}, {
  name: "paper-roll-outline",
  hex: "F1158",
  version: "4.4.95"
}, {
  name: "paperclip",
  hex: "F03E2",
  version: "1.5.54"
}, {
  name: "parachute",
  hex: "F0CB4",
  version: "3.2.89"
}, {
  name: "parachute-outline",
  hex: "F0CB5",
  version: "3.2.89"
}, {
  name: "parking",
  hex: "F03E3",
  version: "1.5.54"
}, {
  name: "party-popper",
  hex: "F1056",
  version: "4.1.95"
}, {
  name: "passport",
  hex: "F07E3",
  version: "2.0.46"
}, {
  name: "passport-biometric",
  hex: "F0DE1",
  version: "3.5.94"
}, {
  name: "pasta",
  hex: "F1160",
  version: "4.4.95"
}, {
  name: "patio-heater",
  hex: "F0F80",
  version: "3.9.97"
}, {
  name: "patreon",
  hex: "F0882",
  version: "2.1.99"
}, {
  name: "pause",
  hex: "F03E4",
  version: "1.5.54"
}, {
  name: "pause-circle",
  hex: "F03E5",
  version: "1.5.54"
}, {
  name: "pause-circle-outline",
  hex: "F03E6",
  version: "1.5.54"
}, {
  name: "pause-octagon",
  hex: "F03E7",
  version: "1.5.54"
}, {
  name: "pause-octagon-outline",
  hex: "F03E8",
  version: "1.5.54"
}, {
  name: "paw",
  hex: "F03E9",
  version: "1.5.54"
}, {
  name: "paw-off",
  hex: "F0657",
  version: "1.6.50"
}, {
  name: "pdf-box",
  hex: "F0E56",
  version: "3.6.95"
}, {
  name: "peace",
  hex: "F0884",
  version: "2.1.99"
}, {
  name: "peanut",
  hex: "F0FFC",
  version: "4.0.96"
}, {
  name: "peanut-off",
  hex: "F0FFD",
  version: "4.0.96"
}, {
  name: "peanut-off-outline",
  hex: "F0FFF",
  version: "4.0.96"
}, {
  name: "peanut-outline",
  hex: "F0FFE",
  version: "4.0.96"
}, {
  name: "pen",
  hex: "F03EA",
  version: "1.5.54"
}, {
  name: "pen-lock",
  hex: "F0DE2",
  version: "3.5.94"
}, {
  name: "pen-minus",
  hex: "F0DE3",
  version: "3.5.94"
}, {
  name: "pen-off",
  hex: "F0DE4",
  version: "3.5.94"
}, {
  name: "pen-plus",
  hex: "F0DE5",
  version: "3.5.94"
}, {
  name: "pen-remove",
  hex: "F0DE6",
  version: "3.5.94"
}, {
  name: "pencil",
  hex: "F03EB",
  version: "1.5.54"
}, {
  name: "pencil-box",
  hex: "F03EC",
  version: "1.5.54"
}, {
  name: "pencil-box-multiple",
  hex: "F1144",
  version: "4.4.95"
}, {
  name: "pencil-box-multiple-outline",
  hex: "F1145",
  version: "4.4.95"
}, {
  name: "pencil-box-outline",
  hex: "F03ED",
  version: "1.5.54"
}, {
  name: "pencil-circle",
  hex: "F06FF",
  version: "1.8.36"
}, {
  name: "pencil-circle-outline",
  hex: "F0776",
  version: "1.9.32"
}, {
  name: "pencil-lock",
  hex: "F03EE",
  version: "1.5.54"
}, {
  name: "pencil-lock-outline",
  hex: "F0DE7",
  version: "3.5.94"
}, {
  name: "pencil-minus",
  hex: "F0DE8",
  version: "3.5.94"
}, {
  name: "pencil-minus-outline",
  hex: "F0DE9",
  version: "3.5.94"
}, {
  name: "pencil-off",
  hex: "F03EF",
  version: "1.5.54"
}, {
  name: "pencil-off-outline",
  hex: "F0DEA",
  version: "3.5.94"
}, {
  name: "pencil-outline",
  hex: "F0CB6",
  version: "3.2.89"
}, {
  name: "pencil-plus",
  hex: "F0DEB",
  version: "3.5.94"
}, {
  name: "pencil-plus-outline",
  hex: "F0DEC",
  version: "3.5.94"
}, {
  name: "pencil-remove",
  hex: "F0DED",
  version: "3.5.94"
}, {
  name: "pencil-remove-outline",
  hex: "F0DEE",
  version: "3.5.94"
}, {
  name: "pencil-ruler",
  hex: "F1353",
  version: "4.9.95"
}, {
  name: "penguin",
  hex: "F0EC0",
  version: "3.7.94"
}, {
  name: "pentagon",
  hex: "F0701",
  version: "1.8.36"
}, {
  name: "pentagon-outline",
  hex: "F0700",
  version: "1.8.36"
}, {
  name: "percent",
  hex: "F03F0",
  version: "1.5.54"
}, {
  name: "percent-outline",
  hex: "F1278",
  version: "4.7.95"
}, {
  name: "periodic-table",
  hex: "F08B6",
  version: "2.2.43"
}, {
  name: "perspective-less",
  hex: "F0D23",
  version: "3.3.92"
}, {
  name: "perspective-more",
  hex: "F0D24",
  version: "3.3.92"
}, {
  name: "pharmacy",
  hex: "F03F1",
  version: "1.5.54"
}, {
  name: "phone",
  hex: "F03F2",
  version: "1.5.54"
}, {
  name: "phone-alert",
  hex: "F0F1A",
  version: "3.8.95"
}, {
  name: "phone-alert-outline",
  hex: "F118E",
  version: "4.5.95"
}, {
  name: "phone-bluetooth",
  hex: "F03F3",
  version: "1.5.54"
}, {
  name: "phone-bluetooth-outline",
  hex: "F118F",
  version: "4.5.95"
}, {
  name: "phone-cancel",
  hex: "F10BC",
  version: "4.2.95"
}, {
  name: "phone-cancel-outline",
  hex: "F1190",
  version: "4.5.95"
}, {
  name: "phone-check",
  hex: "F11A9",
  version: "4.5.95"
}, {
  name: "phone-check-outline",
  hex: "F11AA",
  version: "4.5.95"
}, {
  name: "phone-classic",
  hex: "F0602",
  version: "1.5.54"
}, {
  name: "phone-classic-off",
  hex: "F1279",
  version: "4.7.95"
}, {
  name: "phone-forward",
  hex: "F03F4",
  version: "1.5.54"
}, {
  name: "phone-forward-outline",
  hex: "F1191",
  version: "4.5.95"
}, {
  name: "phone-hangup",
  hex: "F03F5",
  version: "1.5.54"
}, {
  name: "phone-hangup-outline",
  hex: "F1192",
  version: "4.5.95"
}, {
  name: "phone-in-talk",
  hex: "F03F6",
  version: "1.5.54"
}, {
  name: "phone-in-talk-outline",
  hex: "F1182",
  version: "4.4.95"
}, {
  name: "phone-incoming",
  hex: "F03F7",
  version: "1.5.54"
}, {
  name: "phone-incoming-outline",
  hex: "F1193",
  version: "4.5.95"
}, {
  name: "phone-lock",
  hex: "F03F8",
  version: "1.5.54"
}, {
  name: "phone-lock-outline",
  hex: "F1194",
  version: "4.5.95"
}, {
  name: "phone-log",
  hex: "F03F9",
  version: "1.5.54"
}, {
  name: "phone-log-outline",
  hex: "F1195",
  version: "4.5.95"
}, {
  name: "phone-message",
  hex: "F1196",
  version: "4.5.95"
}, {
  name: "phone-message-outline",
  hex: "F1197",
  version: "4.5.95"
}, {
  name: "phone-minus",
  hex: "F0658",
  version: "1.6.50"
}, {
  name: "phone-minus-outline",
  hex: "F1198",
  version: "4.5.95"
}, {
  name: "phone-missed",
  hex: "F03FA",
  version: "1.5.54"
}, {
  name: "phone-missed-outline",
  hex: "F11A5",
  version: "4.5.95"
}, {
  name: "phone-off",
  hex: "F0DEF",
  version: "3.5.94"
}, {
  name: "phone-off-outline",
  hex: "F11A6",
  version: "4.5.95"
}, {
  name: "phone-outgoing",
  hex: "F03FB",
  version: "1.5.54"
}, {
  name: "phone-outgoing-outline",
  hex: "F1199",
  version: "4.5.95"
}, {
  name: "phone-outline",
  hex: "F0DF0",
  version: "3.5.94"
}, {
  name: "phone-paused",
  hex: "F03FC",
  version: "1.5.54"
}, {
  name: "phone-paused-outline",
  hex: "F119A",
  version: "4.5.95"
}, {
  name: "phone-plus",
  hex: "F0659",
  version: "1.6.50"
}, {
  name: "phone-plus-outline",
  hex: "F119B",
  version: "4.5.95"
}, {
  name: "phone-return",
  hex: "F082F",
  version: "2.1.19"
}, {
  name: "phone-return-outline",
  hex: "F119C",
  version: "4.5.95"
}, {
  name: "phone-ring",
  hex: "F11AB",
  version: "4.5.95"
}, {
  name: "phone-ring-outline",
  hex: "F11AC",
  version: "4.5.95"
}, {
  name: "phone-rotate-landscape",
  hex: "F0885",
  version: "2.1.99"
}, {
  name: "phone-rotate-portrait",
  hex: "F0886",
  version: "2.1.99"
}, {
  name: "phone-settings",
  hex: "F03FD",
  version: "1.5.54"
}, {
  name: "phone-settings-outline",
  hex: "F119D",
  version: "4.5.95"
}, {
  name: "phone-voip",
  hex: "F03FE",
  version: "1.5.54"
}, {
  name: "pi",
  hex: "F03FF",
  version: "1.5.54"
}, {
  name: "pi-box",
  hex: "F0400",
  version: "1.5.54"
}, {
  name: "pi-hole",
  hex: "F0DF1",
  version: "3.5.94"
}, {
  name: "piano",
  hex: "F067D",
  version: "1.7.12"
}, {
  name: "pickaxe",
  hex: "F08B7",
  version: "2.2.43"
}, {
  name: "picture-in-picture-bottom-right",
  hex: "F0E57",
  version: "3.6.95"
}, {
  name: "picture-in-picture-bottom-right-outline",
  hex: "F0E58",
  version: "3.6.95"
}, {
  name: "picture-in-picture-top-right",
  hex: "F0E59",
  version: "3.6.95"
}, {
  name: "picture-in-picture-top-right-outline",
  hex: "F0E5A",
  version: "3.6.95"
}, {
  name: "pier",
  hex: "F0887",
  version: "2.1.99"
}, {
  name: "pier-crane",
  hex: "F0888",
  version: "2.1.99"
}, {
  name: "pig",
  hex: "F0401",
  version: "1.5.54"
}, {
  name: "pig-variant",
  hex: "F1006",
  version: "4.0.96"
}, {
  name: "piggy-bank",
  hex: "F1007",
  version: "4.0.96"
}, {
  name: "pill",
  hex: "F0402",
  version: "1.5.54"
}, {
  name: "pillar",
  hex: "F0702",
  version: "1.8.36"
}, {
  name: "pin",
  hex: "F0403",
  version: "1.5.54"
}, {
  name: "pin-off",
  hex: "F0404",
  version: "1.5.54"
}, {
  name: "pin-off-outline",
  hex: "F0930",
  version: "2.3.54"
}, {
  name: "pin-outline",
  hex: "F0931",
  version: "2.3.54"
}, {
  name: "pine-tree",
  hex: "F0405",
  version: "1.5.54"
}, {
  name: "pine-tree-box",
  hex: "F0406",
  version: "1.5.54"
}, {
  name: "pinterest",
  hex: "F0407",
  version: "1.5.54"
}, {
  name: "pinwheel",
  hex: "F0AD5",
  version: "2.7.94"
}, {
  name: "pinwheel-outline",
  hex: "F0AD6",
  version: "2.7.94"
}, {
  name: "pipe",
  hex: "F07E5",
  version: "2.0.46"
}, {
  name: "pipe-disconnected",
  hex: "F07E6",
  version: "2.0.46"
}, {
  name: "pipe-leak",
  hex: "F0889",
  version: "2.1.99"
}, {
  name: "pipe-wrench",
  hex: "F1354",
  version: "4.9.95"
}, {
  name: "pirate",
  hex: "F0A08",
  version: "2.5.94"
}, {
  name: "pistol",
  hex: "F0703",
  version: "1.8.36"
}, {
  name: "piston",
  hex: "F088A",
  version: "2.1.99"
}, {
  name: "pizza",
  hex: "F0409",
  version: "1.5.54"
}, {
  name: "play",
  hex: "F040A",
  version: "1.5.54"
}, {
  name: "play-box",
  hex: "F127A",
  version: "4.7.95"
}, {
  name: "play-box-multiple",
  hex: "F0D19",
  version: "3.3.92"
}, {
  name: "play-box-outline",
  hex: "F040B",
  version: "1.5.54"
}, {
  name: "play-circle",
  hex: "F040C",
  version: "1.5.54"
}, {
  name: "play-circle-outline",
  hex: "F040D",
  version: "1.5.54"
}, {
  name: "play-network",
  hex: "F088B",
  version: "2.1.99"
}, {
  name: "play-network-outline",
  hex: "F0CB7",
  version: "3.2.89"
}, {
  name: "play-outline",
  hex: "F0F1B",
  version: "3.8.95"
}, {
  name: "play-pause",
  hex: "F040E",
  version: "1.5.54"
}, {
  name: "play-protected-content",
  hex: "F040F",
  version: "1.5.54"
}, {
  name: "play-speed",
  hex: "F08FF",
  version: "2.3.50"
}, {
  name: "playlist-check",
  hex: "F05C7",
  version: "1.5.54"
}, {
  name: "playlist-edit",
  hex: "F0900",
  version: "2.3.50"
}, {
  name: "playlist-minus",
  hex: "F0410",
  version: "1.5.54"
}, {
  name: "playlist-music",
  hex: "F0CB8",
  version: "3.2.89"
}, {
  name: "playlist-music-outline",
  hex: "F0CB9",
  version: "3.2.89"
}, {
  name: "playlist-play",
  hex: "F0411",
  version: "1.5.54"
}, {
  name: "playlist-plus",
  hex: "F0412",
  version: "1.5.54"
}, {
  name: "playlist-remove",
  hex: "F0413",
  version: "1.5.54"
}, {
  name: "playlist-star",
  hex: "F0DF2",
  version: "3.5.94"
}, {
  name: "plex",
  hex: "F06BA",
  version: "1.7.22"
}, {
  name: "plus",
  hex: "F0415",
  version: "1.5.54"
}, {
  name: "plus-box",
  hex: "F0416",
  version: "1.5.54"
}, {
  name: "plus-box-multiple",
  hex: "F0334",
  version: "1.5.54"
}, {
  name: "plus-box-multiple-outline",
  hex: "F1143",
  version: "4.4.95"
}, {
  name: "plus-box-outline",
  hex: "F0704",
  version: "1.8.36"
}, {
  name: "plus-circle",
  hex: "F0417",
  version: "1.5.54"
}, {
  name: "plus-circle-multiple",
  hex: "F034C",
  version: "1.5.54"
}, {
  name: "plus-circle-multiple-outline",
  hex: "F0418",
  version: "1.5.54"
}, {
  name: "plus-circle-outline",
  hex: "F0419",
  version: "1.5.54"
}, {
  name: "plus-minus",
  hex: "F0992",
  version: "2.4.85"
}, {
  name: "plus-minus-box",
  hex: "F0993",
  version: "2.4.85"
}, {
  name: "plus-network",
  hex: "F041A",
  version: "1.5.54"
}, {
  name: "plus-network-outline",
  hex: "F0CBA",
  version: "3.2.89"
}, {
  name: "plus-one",
  hex: "F041B",
  version: "1.5.54"
}, {
  name: "plus-outline",
  hex: "F0705",
  version: "1.8.36"
}, {
  name: "plus-thick",
  hex: "F11EC",
  version: "4.5.95"
}, {
  name: "podcast",
  hex: "F0994",
  version: "2.4.85"
}, {
  name: "podium",
  hex: "F0D25",
  version: "3.3.92"
}, {
  name: "podium-bronze",
  hex: "F0D26",
  version: "3.3.92"
}, {
  name: "podium-gold",
  hex: "F0D27",
  version: "3.3.92"
}, {
  name: "podium-silver",
  hex: "F0D28",
  version: "3.3.92"
}, {
  name: "point-of-sale",
  hex: "F0D92",
  version: "3.4.93"
}, {
  name: "pokeball",
  hex: "F041D",
  version: "1.5.54"
}, {
  name: "pokemon-go",
  hex: "F0A09",
  version: "2.5.94"
}, {
  name: "poker-chip",
  hex: "F0830",
  version: "2.1.19"
}, {
  name: "polaroid",
  hex: "F041E",
  version: "1.5.54"
}, {
  name: "police-badge",
  hex: "F1167",
  version: "4.4.95"
}, {
  name: "police-badge-outline",
  hex: "F1168",
  version: "4.4.95"
}, {
  name: "poll",
  hex: "F041F",
  version: "1.5.54"
}, {
  name: "poll-box",
  hex: "F0420",
  version: "1.5.54"
}, {
  name: "poll-box-outline",
  hex: "F127B",
  version: "4.7.95"
}, {
  name: "polymer",
  hex: "F0421",
  version: "1.5.54"
}, {
  name: "pool",
  hex: "F0606",
  version: "1.5.54"
}, {
  name: "popcorn",
  hex: "F0422",
  version: "1.5.54"
}, {
  name: "post",
  hex: "F1008",
  version: "4.0.96"
}, {
  name: "post-outline",
  hex: "F1009",
  version: "4.0.96"
}, {
  name: "postage-stamp",
  hex: "F0CBB",
  version: "3.2.89"
}, {
  name: "pot",
  hex: "F02E5",
  version: "1.5.54"
}, {
  name: "pot-mix",
  hex: "F065B",
  version: "1.6.50"
}, {
  name: "pot-mix-outline",
  hex: "F0677",
  version: "1.7.12"
}, {
  name: "pot-outline",
  hex: "F02FF",
  version: "1.5.54"
}, {
  name: "pot-steam",
  hex: "F065A",
  version: "1.6.50"
}, {
  name: "pot-steam-outline",
  hex: "F0326",
  version: "1.5.54"
}, {
  name: "pound",
  hex: "F0423",
  version: "1.5.54"
}, {
  name: "pound-box",
  hex: "F0424",
  version: "1.5.54"
}, {
  name: "pound-box-outline",
  hex: "F117F",
  version: "4.4.95"
}, {
  name: "power",
  hex: "F0425",
  version: "1.5.54"
}, {
  name: "power-cycle",
  hex: "F0901",
  version: "2.3.50"
}, {
  name: "power-off",
  hex: "F0902",
  version: "2.3.50"
}, {
  name: "power-on",
  hex: "F0903",
  version: "2.3.50"
}, {
  name: "power-plug",
  hex: "F06A5",
  version: "1.7.12"
}, {
  name: "power-plug-off",
  hex: "F06A6",
  version: "1.7.12"
}, {
  name: "power-settings",
  hex: "F0426",
  version: "1.5.54"
}, {
  name: "power-sleep",
  hex: "F0904",
  version: "2.3.50"
}, {
  name: "power-socket",
  hex: "F0427",
  version: "1.5.54"
}, {
  name: "power-socket-au",
  hex: "F0905",
  version: "2.3.50"
}, {
  name: "power-socket-de",
  hex: "F1107",
  version: "4.3.95"
}, {
  name: "power-socket-eu",
  hex: "F07E7",
  version: "2.0.46"
}, {
  name: "power-socket-fr",
  hex: "F1108",
  version: "4.3.95"
}, {
  name: "power-socket-jp",
  hex: "F1109",
  version: "4.3.95"
}, {
  name: "power-socket-uk",
  hex: "F07E8",
  version: "2.0.46"
}, {
  name: "power-socket-us",
  hex: "F07E9",
  version: "2.0.46"
}, {
  name: "power-standby",
  hex: "F0906",
  version: "2.3.50"
}, {
  name: "powershell",
  hex: "F0A0A",
  version: "2.5.94"
}, {
  name: "prescription",
  hex: "F0706",
  version: "1.8.36"
}, {
  name: "presentation",
  hex: "F0428",
  version: "1.5.54"
}, {
  name: "presentation-play",
  hex: "F0429",
  version: "1.5.54"
}, {
  name: "printer",
  hex: "F042A",
  version: "1.5.54"
}, {
  name: "printer-3d",
  hex: "F042B",
  version: "1.5.54"
}, {
  name: "printer-3d-nozzle",
  hex: "F0E5B",
  version: "3.6.95"
}, {
  name: "printer-3d-nozzle-alert",
  hex: "F11C0",
  version: "4.5.95"
}, {
  name: "printer-3d-nozzle-alert-outline",
  hex: "F11C1",
  version: "4.5.95"
}, {
  name: "printer-3d-nozzle-outline",
  hex: "F0E5C",
  version: "3.6.95"
}, {
  name: "printer-alert",
  hex: "F042C",
  version: "1.5.54"
}, {
  name: "printer-check",
  hex: "F1146",
  version: "4.4.95"
}, {
  name: "printer-off",
  hex: "F0E5D",
  version: "3.6.95"
}, {
  name: "printer-pos",
  hex: "F1057",
  version: "4.1.95"
}, {
  name: "printer-settings",
  hex: "F0707",
  version: "1.8.36"
}, {
  name: "printer-wireless",
  hex: "F0A0B",
  version: "2.5.94"
}, {
  name: "priority-high",
  hex: "F0603",
  version: "1.5.54"
}, {
  name: "priority-low",
  hex: "F0604",
  version: "1.5.54"
}, {
  name: "professional-hexagon",
  hex: "F042D",
  version: "1.5.54"
}, {
  name: "progress-alert",
  hex: "F0CBC",
  version: "3.2.89"
}, {
  name: "progress-check",
  hex: "F0995",
  version: "2.4.85"
}, {
  name: "progress-clock",
  hex: "F0996",
  version: "2.4.85"
}, {
  name: "progress-close",
  hex: "F110A",
  version: "4.3.95"
}, {
  name: "progress-download",
  hex: "F0997",
  version: "2.4.85"
}, {
  name: "progress-upload",
  hex: "F0998",
  version: "2.4.85"
}, {
  name: "progress-wrench",
  hex: "F0CBD",
  version: "3.2.89"
}, {
  name: "projector",
  hex: "F042E",
  version: "1.5.54"
}, {
  name: "projector-screen",
  hex: "F042F",
  version: "1.5.54"
}, {
  name: "propane-tank",
  hex: "F1357",
  version: "4.9.95"
}, {
  name: "propane-tank-outline",
  hex: "F1358",
  version: "4.9.95"
}, {
  name: "protocol",
  hex: "F0FD8",
  version: "4.0.96"
}, {
  name: "publish",
  hex: "F06A7",
  version: "1.7.12"
}, {
  name: "pulse",
  hex: "F0430",
  version: "1.5.54"
}, {
  name: "pumpkin",
  hex: "F0BBF",
  version: "3.0.39"
}, {
  name: "purse",
  hex: "F0F1C",
  version: "3.8.95"
}, {
  name: "purse-outline",
  hex: "F0F1D",
  version: "3.8.95"
}, {
  name: "puzzle",
  hex: "F0431",
  version: "1.5.54"
}, {
  name: "puzzle-outline",
  hex: "F0A66",
  version: "2.6.95"
}, {
  name: "qi",
  hex: "F0999",
  version: "2.4.85"
}, {
  name: "qqchat",
  hex: "F0605",
  version: "1.5.54"
}, {
  name: "qrcode",
  hex: "F0432",
  version: "1.5.54"
}, {
  name: "qrcode-edit",
  hex: "F08B8",
  version: "2.2.43"
}, {
  name: "qrcode-minus",
  hex: "F118C",
  version: "4.4.95"
}, {
  name: "qrcode-plus",
  hex: "F118B",
  version: "4.4.95"
}, {
  name: "qrcode-remove",
  hex: "F118D",
  version: "4.4.95"
}, {
  name: "qrcode-scan",
  hex: "F0433",
  version: "1.5.54"
}, {
  name: "quadcopter",
  hex: "F0434",
  version: "1.5.54"
}, {
  name: "quality-high",
  hex: "F0435",
  version: "1.5.54"
}, {
  name: "quality-low",
  hex: "F0A0C",
  version: "2.5.94"
}, {
  name: "quality-medium",
  hex: "F0A0D",
  version: "2.5.94"
}, {
  name: "quora",
  hex: "F0D29",
  version: "3.3.92"
}, {
  name: "rabbit",
  hex: "F0907",
  version: "2.3.50"
}, {
  name: "racing-helmet",
  hex: "F0D93",
  version: "3.4.93"
}, {
  name: "racquetball",
  hex: "F0D94",
  version: "3.4.93"
}, {
  name: "radar",
  hex: "F0437",
  version: "1.5.54"
}, {
  name: "radiator",
  hex: "F0438",
  version: "1.5.54"
}, {
  name: "radiator-disabled",
  hex: "F0AD7",
  version: "2.7.94"
}, {
  name: "radiator-off",
  hex: "F0AD8",
  version: "2.7.94"
}, {
  name: "radio",
  hex: "F0439",
  version: "1.5.54"
}, {
  name: "radio-am",
  hex: "F0CBE",
  version: "3.2.89"
}, {
  name: "radio-fm",
  hex: "F0CBF",
  version: "3.2.89"
}, {
  name: "radio-handheld",
  hex: "F043A",
  version: "1.5.54"
}, {
  name: "radio-off",
  hex: "F121C",
  version: "4.6.95"
}, {
  name: "radio-tower",
  hex: "F043B",
  version: "1.5.54"
}, {
  name: "radioactive",
  hex: "F043C",
  version: "1.5.54"
}, {
  name: "radioactive-off",
  hex: "F0EC1",
  version: "3.7.94"
}, {
  name: "radiobox-blank",
  hex: "F043D",
  version: "1.5.54"
}, {
  name: "radiobox-marked",
  hex: "F043E",
  version: "1.5.54"
}, {
  name: "radius",
  hex: "F0CC0",
  version: "3.2.89"
}, {
  name: "radius-outline",
  hex: "F0CC1",
  version: "3.2.89"
}, {
  name: "railroad-light",
  hex: "F0F1E",
  version: "3.8.95"
}, {
  name: "raspberry-pi",
  hex: "F043F",
  version: "1.5.54"
}, {
  name: "ray-end",
  hex: "F0440",
  version: "1.5.54"
}, {
  name: "ray-end-arrow",
  hex: "F0441",
  version: "1.5.54"
}, {
  name: "ray-start",
  hex: "F0442",
  version: "1.5.54"
}, {
  name: "ray-start-arrow",
  hex: "F0443",
  version: "1.5.54"
}, {
  name: "ray-start-end",
  hex: "F0444",
  version: "1.5.54"
}, {
  name: "ray-vertex",
  hex: "F0445",
  version: "1.5.54"
}, {
  name: "react",
  hex: "F0708",
  version: "1.8.36"
}, {
  name: "read",
  hex: "F0447",
  version: "1.5.54"
}, {
  name: "receipt",
  hex: "F0449",
  version: "1.5.54"
}, {
  name: "record",
  hex: "F044A",
  version: "1.5.54"
}, {
  name: "record-circle",
  hex: "F0EC2",
  version: "3.7.94"
}, {
  name: "record-circle-outline",
  hex: "F0EC3",
  version: "3.7.94"
}, {
  name: "record-player",
  hex: "F099A",
  version: "2.4.85"
}, {
  name: "record-rec",
  hex: "F044B",
  version: "1.5.54"
}, {
  name: "rectangle",
  hex: "F0E5E",
  version: "3.6.95"
}, {
  name: "rectangle-outline",
  hex: "F0E5F",
  version: "3.6.95"
}, {
  name: "recycle",
  hex: "F044C",
  version: "1.5.54"
}, {
  name: "recycle-variant",
  hex: "F139D",
  version: "5.0.45"
}, {
  name: "reddit",
  hex: "F044D",
  version: "1.5.54"
}, {
  name: "redhat",
  hex: "F111B",
  version: "4.3.95"
}, {
  name: "redo",
  hex: "F044E",
  version: "1.5.54"
}, {
  name: "redo-variant",
  hex: "F044F",
  version: "1.5.54"
}, {
  name: "reflect-horizontal",
  hex: "F0A0E",
  version: "2.5.94"
}, {
  name: "reflect-vertical",
  hex: "F0A0F",
  version: "2.5.94"
}, {
  name: "refresh",
  hex: "F0450",
  version: "1.5.54"
}, {
  name: "refresh-circle",
  hex: "F1377",
  version: "4.9.95"
}, {
  name: "regex",
  hex: "F0451",
  version: "1.5.54"
}, {
  name: "registered-trademark",
  hex: "F0A67",
  version: "2.6.95"
}, {
  name: "relative-scale",
  hex: "F0452",
  version: "1.5.54"
}, {
  name: "reload",
  hex: "F0453",
  version: "1.5.54"
}, {
  name: "reload-alert",
  hex: "F110B",
  version: "4.3.95"
}, {
  name: "reminder",
  hex: "F088C",
  version: "2.1.99"
}, {
  name: "remote",
  hex: "F0454",
  version: "1.5.54"
}, {
  name: "remote-desktop",
  hex: "F08B9",
  version: "2.2.43"
}, {
  name: "remote-off",
  hex: "F0EC4",
  version: "3.7.94"
}, {
  name: "remote-tv",
  hex: "F0EC5",
  version: "3.7.94"
}, {
  name: "remote-tv-off",
  hex: "F0EC6",
  version: "3.7.94"
}, {
  name: "rename-box",
  hex: "F0455",
  version: "1.5.54"
}, {
  name: "reorder-horizontal",
  hex: "F0688",
  version: "1.7.12"
}, {
  name: "reorder-vertical",
  hex: "F0689",
  version: "1.7.12"
}, {
  name: "repeat",
  hex: "F0456",
  version: "1.5.54"
}, {
  name: "repeat-off",
  hex: "F0457",
  version: "1.5.54"
}, {
  name: "repeat-once",
  hex: "F0458",
  version: "1.5.54"
}, {
  name: "replay",
  hex: "F0459",
  version: "1.5.54"
}, {
  name: "reply",
  hex: "F045A",
  version: "1.5.54"
}, {
  name: "reply-all",
  hex: "F045B",
  version: "1.5.54"
}, {
  name: "reply-all-outline",
  hex: "F0F1F",
  version: "3.8.95"
}, {
  name: "reply-circle",
  hex: "F11AE",
  version: "4.5.95"
}, {
  name: "reply-outline",
  hex: "F0F20",
  version: "3.8.95"
}, {
  name: "reproduction",
  hex: "F045C",
  version: "1.5.54"
}, {
  name: "resistor",
  hex: "F0B44",
  version: "2.8.94"
}, {
  name: "resistor-nodes",
  hex: "F0B45",
  version: "2.8.94"
}, {
  name: "resize",
  hex: "F0A68",
  version: "2.6.95"
}, {
  name: "resize-bottom-right",
  hex: "F045D",
  version: "1.5.54"
}, {
  name: "responsive",
  hex: "F045E",
  version: "1.5.54"
}, {
  name: "restart",
  hex: "F0709",
  version: "1.8.36"
}, {
  name: "restart-alert",
  hex: "F110C",
  version: "4.3.95"
}, {
  name: "restart-off",
  hex: "F0D95",
  version: "3.4.93"
}, {
  name: "restore",
  hex: "F099B",
  version: "2.4.85"
}, {
  name: "restore-alert",
  hex: "F110D",
  version: "4.3.95"
}, {
  name: "rewind",
  hex: "F045F",
  version: "1.5.54"
}, {
  name: "rewind-10",
  hex: "F0D2A",
  version: "3.3.92"
}, {
  name: "rewind-30",
  hex: "F0D96",
  version: "3.4.93"
}, {
  name: "rewind-5",
  hex: "F11F9",
  version: "4.6.95"
}, {
  name: "rewind-outline",
  hex: "F070A",
  version: "1.8.36"
}, {
  name: "rhombus",
  hex: "F070B",
  version: "1.8.36"
}, {
  name: "rhombus-medium",
  hex: "F0A10",
  version: "2.5.94"
}, {
  name: "rhombus-outline",
  hex: "F070C",
  version: "1.8.36"
}, {
  name: "rhombus-split",
  hex: "F0A11",
  version: "2.5.94"
}, {
  name: "ribbon",
  hex: "F0460",
  version: "1.5.54"
}, {
  name: "rice",
  hex: "F07EA",
  version: "2.0.46"
}, {
  name: "ring",
  hex: "F07EB",
  version: "2.0.46"
}, {
  name: "rivet",
  hex: "F0E60",
  version: "3.6.95"
}, {
  name: "road",
  hex: "F0461",
  version: "1.5.54"
}, {
  name: "road-variant",
  hex: "F0462",
  version: "1.5.54"
}, {
  name: "robber",
  hex: "F1058",
  version: "4.1.95"
}, {
  name: "robot",
  hex: "F06A9",
  version: "1.7.12"
}, {
  name: "robot-industrial",
  hex: "F0B46",
  version: "2.8.94"
}, {
  name: "robot-mower",
  hex: "F11F7",
  version: "4.6.95"
}, {
  name: "robot-mower-outline",
  hex: "F11F3",
  version: "4.5.95"
}, {
  name: "robot-vacuum",
  hex: "F070D",
  version: "1.8.36"
}, {
  name: "robot-vacuum-variant",
  hex: "F0908",
  version: "2.3.50"
}, {
  name: "rocket",
  hex: "F0463",
  version: "1.5.54"
}, {
  name: "rocket-outline",
  hex: "F13AF",
  version: "5.0.45"
}, {
  name: "rodent",
  hex: "F1327",
  version: "4.9.95"
}, {
  name: "roller-skate",
  hex: "F0D2B",
  version: "3.3.92"
}, {
  name: "roller-skate-off",
  hex: "F0145",
  version: "1.5.54"
}, {
  name: "rollerblade",
  hex: "F0D2C",
  version: "3.3.92"
}, {
  name: "rollerblade-off",
  hex: "F002E",
  version: "1.5.54"
}, {
  name: "rollupjs",
  hex: "F0BC0",
  version: "3.0.39"
}, {
  name: "roman-numeral-1",
  hex: "F1088",
  version: "4.2.95"
}, {
  name: "roman-numeral-10",
  hex: "F1091",
  version: "4.2.95"
}, {
  name: "roman-numeral-2",
  hex: "F1089",
  version: "4.2.95"
}, {
  name: "roman-numeral-3",
  hex: "F108A",
  version: "4.2.95"
}, {
  name: "roman-numeral-4",
  hex: "F108B",
  version: "4.2.95"
}, {
  name: "roman-numeral-5",
  hex: "F108C",
  version: "4.2.95"
}, {
  name: "roman-numeral-6",
  hex: "F108D",
  version: "4.2.95"
}, {
  name: "roman-numeral-7",
  hex: "F108E",
  version: "4.2.95"
}, {
  name: "roman-numeral-8",
  hex: "F108F",
  version: "4.2.95"
}, {
  name: "roman-numeral-9",
  hex: "F1090",
  version: "4.2.95"
}, {
  name: "room-service",
  hex: "F088D",
  version: "2.1.99"
}, {
  name: "room-service-outline",
  hex: "F0D97",
  version: "3.4.93"
}, {
  name: "rotate-3d",
  hex: "F0EC7",
  version: "3.7.94"
}, {
  name: "rotate-3d-variant",
  hex: "F0464",
  version: "1.5.54"
}, {
  name: "rotate-left",
  hex: "F0465",
  version: "1.5.54"
}, {
  name: "rotate-left-variant",
  hex: "F0466",
  version: "1.5.54"
}, {
  name: "rotate-orbit",
  hex: "F0D98",
  version: "3.4.93"
}, {
  name: "rotate-right",
  hex: "F0467",
  version: "1.5.54"
}, {
  name: "rotate-right-variant",
  hex: "F0468",
  version: "1.5.54"
}, {
  name: "rounded-corner",
  hex: "F0607",
  version: "1.5.54"
}, {
  name: "router",
  hex: "F11E2",
  version: "4.5.95"
}, {
  name: "router-network",
  hex: "F1087",
  version: "4.2.95"
}, {
  name: "router-wireless",
  hex: "F0469",
  version: "1.5.54"
}, {
  name: "router-wireless-settings",
  hex: "F0A69",
  version: "2.6.95"
}, {
  name: "routes",
  hex: "F046A",
  version: "1.5.54"
}, {
  name: "routes-clock",
  hex: "F1059",
  version: "4.1.95"
}, {
  name: "rowing",
  hex: "F0608",
  version: "1.5.54"
}, {
  name: "rss",
  hex: "F046B",
  version: "1.5.54"
}, {
  name: "rss-box",
  hex: "F046C",
  version: "1.5.54"
}, {
  name: "rss-off",
  hex: "F0F21",
  version: "3.8.95"
}, {
  name: "rugby",
  hex: "F0D99",
  version: "3.4.93"
}, {
  name: "ruler",
  hex: "F046D",
  version: "1.5.54"
}, {
  name: "ruler-square",
  hex: "F0CC2",
  version: "3.2.89"
}, {
  name: "ruler-square-compass",
  hex: "F0EBE",
  version: "3.7.94"
}, {
  name: "run",
  hex: "F070E",
  version: "1.8.36"
}, {
  name: "run-fast",
  hex: "F046E",
  version: "1.5.54"
}, {
  name: "rv-truck",
  hex: "F11D4",
  version: "4.5.95"
}, {
  name: "sack",
  hex: "F0D2E",
  version: "3.3.92"
}, {
  name: "sack-percent",
  hex: "F0D2F",
  version: "3.3.92"
}, {
  name: "safe",
  hex: "F0A6A",
  version: "2.6.95"
}, {
  name: "safe-square",
  hex: "F127C",
  version: "4.7.95"
}, {
  name: "safe-square-outline",
  hex: "F127D",
  version: "4.7.95"
}, {
  name: "safety-goggles",
  hex: "F0D30",
  version: "3.3.92"
}, {
  name: "sail-boat",
  hex: "F0EC8",
  version: "3.7.94"
}, {
  name: "sale",
  hex: "F046F",
  version: "1.5.54"
}, {
  name: "salesforce",
  hex: "F088E",
  version: "2.1.99"
}, {
  name: "sass",
  hex: "F07EC",
  version: "2.0.46"
}, {
  name: "satellite",
  hex: "F0470",
  version: "1.5.54"
}, {
  name: "satellite-uplink",
  hex: "F0909",
  version: "2.3.50"
}, {
  name: "satellite-variant",
  hex: "F0471",
  version: "1.5.54"
}, {
  name: "sausage",
  hex: "F08BA",
  version: "2.2.43"
}, {
  name: "saw-blade",
  hex: "F0E61",
  version: "3.6.95"
}, {
  name: "saxophone",
  hex: "F0609",
  version: "1.5.54"
}, {
  name: "scale",
  hex: "F0472",
  version: "1.5.54"
}, {
  name: "scale-balance",
  hex: "F05D1",
  version: "1.5.54"
}, {
  name: "scale-bathroom",
  hex: "F0473",
  version: "1.5.54"
}, {
  name: "scale-off",
  hex: "F105A",
  version: "4.1.95"
}, {
  name: "scanner",
  hex: "F06AB",
  version: "1.7.12"
}, {
  name: "scanner-off",
  hex: "F090A",
  version: "2.3.50"
}, {
  name: "scatter-plot",
  hex: "F0EC9",
  version: "3.7.94"
}, {
  name: "scatter-plot-outline",
  hex: "F0ECA",
  version: "3.7.94"
}, {
  name: "school",
  hex: "F0474",
  version: "1.5.54"
}, {
  name: "school-outline",
  hex: "F1180",
  version: "4.4.95"
}, {
  name: "scissors-cutting",
  hex: "F0A6B",
  version: "2.6.95"
}, {
  name: "scooter",
  hex: "F11E9",
  version: "4.5.95"
}, {
  name: "scoreboard",
  hex: "F127E",
  version: "4.7.95"
}, {
  name: "scoreboard-outline",
  hex: "F127F",
  version: "4.7.95"
}, {
  name: "screen-rotation",
  hex: "F0475",
  version: "1.5.54"
}, {
  name: "screen-rotation-lock",
  hex: "F0478",
  version: "1.5.54"
}, {
  name: "screw-flat-top",
  hex: "F0DF3",
  version: "3.5.94"
}, {
  name: "screw-lag",
  hex: "F0DF4",
  version: "3.5.94"
}, {
  name: "screw-machine-flat-top",
  hex: "F0DF5",
  version: "3.5.94"
}, {
  name: "screw-machine-round-top",
  hex: "F0DF6",
  version: "3.5.94"
}, {
  name: "screw-round-top",
  hex: "F0DF7",
  version: "3.5.94"
}, {
  name: "screwdriver",
  hex: "F0476",
  version: "1.5.54"
}, {
  name: "script",
  hex: "F0BC1",
  version: "3.0.39"
}, {
  name: "script-outline",
  hex: "F0477",
  version: "1.5.54"
}, {
  name: "script-text",
  hex: "F0BC2",
  version: "3.0.39"
}, {
  name: "script-text-outline",
  hex: "F0BC3",
  version: "3.0.39"
}, {
  name: "sd",
  hex: "F0479",
  version: "1.5.54"
}, {
  name: "seal",
  hex: "F047A",
  version: "1.5.54"
}, {
  name: "seal-variant",
  hex: "F0FD9",
  version: "4.0.96"
}, {
  name: "search-web",
  hex: "F070F",
  version: "1.8.36"
}, {
  name: "seat",
  hex: "F0CC3",
  version: "3.2.89"
}, {
  name: "seat-flat",
  hex: "F047B",
  version: "1.5.54"
}, {
  name: "seat-flat-angled",
  hex: "F047C",
  version: "1.5.54"
}, {
  name: "seat-individual-suite",
  hex: "F047D",
  version: "1.5.54"
}, {
  name: "seat-legroom-extra",
  hex: "F047E",
  version: "1.5.54"
}, {
  name: "seat-legroom-normal",
  hex: "F047F",
  version: "1.5.54"
}, {
  name: "seat-legroom-reduced",
  hex: "F0480",
  version: "1.5.54"
}, {
  name: "seat-outline",
  hex: "F0CC4",
  version: "3.2.89"
}, {
  name: "seat-passenger",
  hex: "F1249",
  version: "4.6.95"
}, {
  name: "seat-recline-extra",
  hex: "F0481",
  version: "1.5.54"
}, {
  name: "seat-recline-normal",
  hex: "F0482",
  version: "1.5.54"
}, {
  name: "seatbelt",
  hex: "F0CC5",
  version: "3.2.89"
}, {
  name: "security",
  hex: "F0483",
  version: "1.5.54"
}, {
  name: "security-network",
  hex: "F0484",
  version: "1.5.54"
}, {
  name: "seed",
  hex: "F0E62",
  version: "3.6.95"
}, {
  name: "seed-outline",
  hex: "F0E63",
  version: "3.6.95"
}, {
  name: "segment",
  hex: "F0ECB",
  version: "3.7.94"
}, {
  name: "select",
  hex: "F0485",
  version: "1.5.54"
}, {
  name: "select-all",
  hex: "F0486",
  version: "1.5.54"
}, {
  name: "select-color",
  hex: "F0D31",
  version: "3.3.92"
}, {
  name: "select-compare",
  hex: "F0AD9",
  version: "2.7.94"
}, {
  name: "select-drag",
  hex: "F0A6C",
  version: "2.6.95"
}, {
  name: "select-group",
  hex: "F0F82",
  version: "3.9.97"
}, {
  name: "select-inverse",
  hex: "F0487",
  version: "1.5.54"
}, {
  name: "select-marker",
  hex: "F1280",
  version: "4.7.95"
}, {
  name: "select-multiple",
  hex: "F1281",
  version: "4.7.95"
}, {
  name: "select-multiple-marker",
  hex: "F1282",
  version: "4.7.95"
}, {
  name: "select-off",
  hex: "F0488",
  version: "1.5.54"
}, {
  name: "select-place",
  hex: "F0FDA",
  version: "4.0.96"
}, {
  name: "select-search",
  hex: "F1204",
  version: "4.6.95"
}, {
  name: "selection",
  hex: "F0489",
  version: "1.5.54"
}, {
  name: "selection-drag",
  hex: "F0A6D",
  version: "2.6.95"
}, {
  name: "selection-ellipse",
  hex: "F0D32",
  version: "3.3.92"
}, {
  name: "selection-ellipse-arrow-inside",
  hex: "F0F22",
  version: "3.8.95"
}, {
  name: "selection-marker",
  hex: "F1283",
  version: "4.7.95"
}, {
  name: "selection-multiple-marker",
  hex: "F1284",
  version: "4.7.95"
}, {
  name: "selection-mutliple",
  hex: "F1285",
  version: "4.7.95"
}, {
  name: "selection-off",
  hex: "F0777",
  version: "1.9.32"
}, {
  name: "selection-search",
  hex: "F1205",
  version: "4.6.95"
}, {
  name: "semantic-web",
  hex: "F1316",
  version: "4.8.95"
}, {
  name: "send",
  hex: "F048A",
  version: "1.5.54"
}, {
  name: "send-check",
  hex: "F1161",
  version: "4.4.95"
}, {
  name: "send-check-outline",
  hex: "F1162",
  version: "4.4.95"
}, {
  name: "send-circle",
  hex: "F0DF8",
  version: "3.5.94"
}, {
  name: "send-circle-outline",
  hex: "F0DF9",
  version: "3.5.94"
}, {
  name: "send-clock",
  hex: "F1163",
  version: "4.4.95"
}, {
  name: "send-clock-outline",
  hex: "F1164",
  version: "4.4.95"
}, {
  name: "send-lock",
  hex: "F07ED",
  version: "2.0.46"
}, {
  name: "send-lock-outline",
  hex: "F1166",
  version: "4.4.95"
}, {
  name: "send-outline",
  hex: "F1165",
  version: "4.4.95"
}, {
  name: "serial-port",
  hex: "F065C",
  version: "1.6.50"
}, {
  name: "server",
  hex: "F048B",
  version: "1.5.54"
}, {
  name: "server-minus",
  hex: "F048C",
  version: "1.5.54"
}, {
  name: "server-network",
  hex: "F048D",
  version: "1.5.54"
}, {
  name: "server-network-off",
  hex: "F048E",
  version: "1.5.54"
}, {
  name: "server-off",
  hex: "F048F",
  version: "1.5.54"
}, {
  name: "server-plus",
  hex: "F0490",
  version: "1.5.54"
}, {
  name: "server-remove",
  hex: "F0491",
  version: "1.5.54"
}, {
  name: "server-security",
  hex: "F0492",
  version: "1.5.54"
}, {
  name: "set-all",
  hex: "F0778",
  version: "1.9.32"
}, {
  name: "set-center",
  hex: "F0779",
  version: "1.9.32"
}, {
  name: "set-center-right",
  hex: "F077A",
  version: "1.9.32"
}, {
  name: "set-left",
  hex: "F077B",
  version: "1.9.32"
}, {
  name: "set-left-center",
  hex: "F077C",
  version: "1.9.32"
}, {
  name: "set-left-right",
  hex: "F077D",
  version: "1.9.32"
}, {
  name: "set-none",
  hex: "F077E",
  version: "1.9.32"
}, {
  name: "set-right",
  hex: "F077F",
  version: "1.9.32"
}, {
  name: "set-top-box",
  hex: "F099F",
  version: "2.4.85"
}, {
  name: "settings-helper",
  hex: "F0A6E",
  version: "2.6.95"
}, {
  name: "shaker",
  hex: "F110E",
  version: "4.3.95"
}, {
  name: "shaker-outline",
  hex: "F110F",
  version: "4.3.95"
}, {
  name: "shape",
  hex: "F0831",
  version: "2.1.19"
}, {
  name: "shape-circle-plus",
  hex: "F065D",
  version: "1.6.50"
}, {
  name: "shape-outline",
  hex: "F0832",
  version: "2.1.19"
}, {
  name: "shape-oval-plus",
  hex: "F11FA",
  version: "4.6.95"
}, {
  name: "shape-plus",
  hex: "F0495",
  version: "1.5.54"
}, {
  name: "shape-polygon-plus",
  hex: "F065E",
  version: "1.6.50"
}, {
  name: "shape-rectangle-plus",
  hex: "F065F",
  version: "1.6.50"
}, {
  name: "shape-square-plus",
  hex: "F0660",
  version: "1.6.50"
}, {
  name: "share",
  hex: "F0496",
  version: "1.5.54"
}, {
  name: "share-all",
  hex: "F11F4",
  version: "4.6.95"
}, {
  name: "share-all-outline",
  hex: "F11F5",
  version: "4.6.95"
}, {
  name: "share-circle",
  hex: "F11AD",
  version: "4.5.95"
}, {
  name: "share-off",
  hex: "F0F23",
  version: "3.8.95"
}, {
  name: "share-off-outline",
  hex: "F0F24",
  version: "3.8.95"
}, {
  name: "share-outline",
  hex: "F0932",
  version: "2.3.54"
}, {
  name: "share-variant",
  hex: "F0497",
  version: "1.5.54"
}, {
  name: "sheep",
  hex: "F0CC6",
  version: "3.2.89"
}, {
  name: "shield",
  hex: "F0498",
  version: "1.5.54"
}, {
  name: "shield-account",
  hex: "F088F",
  version: "2.1.99"
}, {
  name: "shield-account-outline",
  hex: "F0A12",
  version: "2.5.94"
}, {
  name: "shield-airplane",
  hex: "F06BB",
  version: "1.7.22"
}, {
  name: "shield-airplane-outline",
  hex: "F0CC7",
  version: "3.2.89"
}, {
  name: "shield-alert",
  hex: "F0ECC",
  version: "3.7.94"
}, {
  name: "shield-alert-outline",
  hex: "F0ECD",
  version: "3.7.94"
}, {
  name: "shield-car",
  hex: "F0F83",
  version: "3.9.97"
}, {
  name: "shield-check",
  hex: "F0565",
  version: "1.5.54"
}, {
  name: "shield-check-outline",
  hex: "F0CC8",
  version: "3.2.89"
}, {
  name: "shield-cross",
  hex: "F0CC9",
  version: "3.2.89"
}, {
  name: "shield-cross-outline",
  hex: "F0CCA",
  version: "3.2.89"
}, {
  name: "shield-edit",
  hex: "F11A0",
  version: "4.5.95"
}, {
  name: "shield-edit-outline",
  hex: "F11A1",
  version: "4.5.95"
}, {
  name: "shield-half",
  hex: "F1360",
  version: "4.9.95"
}, {
  name: "shield-half-full",
  hex: "F0780",
  version: "1.9.32"
}, {
  name: "shield-home",
  hex: "F068A",
  version: "1.7.12"
}, {
  name: "shield-home-outline",
  hex: "F0CCB",
  version: "3.2.89"
}, {
  name: "shield-key",
  hex: "F0BC4",
  version: "3.0.39"
}, {
  name: "shield-key-outline",
  hex: "F0BC5",
  version: "3.0.39"
}, {
  name: "shield-link-variant",
  hex: "F0D33",
  version: "3.3.92"
}, {
  name: "shield-link-variant-outline",
  hex: "F0D34",
  version: "3.3.92"
}, {
  name: "shield-lock",
  hex: "F099D",
  version: "2.4.85"
}, {
  name: "shield-lock-outline",
  hex: "F0CCC",
  version: "3.2.89"
}, {
  name: "shield-off",
  hex: "F099E",
  version: "2.4.85"
}, {
  name: "shield-off-outline",
  hex: "F099C",
  version: "2.4.85"
}, {
  name: "shield-outline",
  hex: "F0499",
  version: "1.5.54"
}, {
  name: "shield-plus",
  hex: "F0ADA",
  version: "2.7.94"
}, {
  name: "shield-plus-outline",
  hex: "F0ADB",
  version: "2.7.94"
}, {
  name: "shield-refresh",
  hex: "F00AA",
  version: "1.5.54"
}, {
  name: "shield-refresh-outline",
  hex: "F01E0",
  version: "1.5.54"
}, {
  name: "shield-remove",
  hex: "F0ADC",
  version: "2.7.94"
}, {
  name: "shield-remove-outline",
  hex: "F0ADD",
  version: "2.7.94"
}, {
  name: "shield-search",
  hex: "F0D9A",
  version: "3.4.93"
}, {
  name: "shield-star",
  hex: "F113B",
  version: "4.4.95"
}, {
  name: "shield-star-outline",
  hex: "F113C",
  version: "4.4.95"
}, {
  name: "shield-sun",
  hex: "F105D",
  version: "4.1.95"
}, {
  name: "shield-sun-outline",
  hex: "F105E",
  version: "4.1.95"
}, {
  name: "shield-sync",
  hex: "F11A2",
  version: "4.5.95"
}, {
  name: "shield-sync-outline",
  hex: "F11A3",
  version: "4.5.95"
}, {
  name: "ship-wheel",
  hex: "F0833",
  version: "2.1.19"
}, {
  name: "shoe-formal",
  hex: "F0B47",
  version: "2.8.94"
}, {
  name: "shoe-heel",
  hex: "F0B48",
  version: "2.8.94"
}, {
  name: "shoe-print",
  hex: "F0DFA",
  version: "3.5.94"
}, {
  name: "shopping",
  hex: "F049A",
  version: "1.5.54"
}, {
  name: "shopping-music",
  hex: "F049B",
  version: "1.5.54"
}, {
  name: "shopping-outline",
  hex: "F11D5",
  version: "4.5.95"
}, {
  name: "shopping-search",
  hex: "F0F84",
  version: "3.9.97"
}, {
  name: "shovel",
  hex: "F0710",
  version: "1.8.36"
}, {
  name: "shovel-off",
  hex: "F0711",
  version: "1.8.36"
}, {
  name: "shower",
  hex: "F09A0",
  version: "2.4.85"
}, {
  name: "shower-head",
  hex: "F09A1",
  version: "2.4.85"
}, {
  name: "shredder",
  hex: "F049C",
  version: "1.5.54"
}, {
  name: "shuffle",
  hex: "F049D",
  version: "1.5.54"
}, {
  name: "shuffle-disabled",
  hex: "F049E",
  version: "1.5.54"
}, {
  name: "shuffle-variant",
  hex: "F049F",
  version: "1.5.54"
}, {
  name: "shuriken",
  hex: "F137F",
  version: "4.9.95"
}, {
  name: "sigma",
  hex: "F04A0",
  version: "1.5.54"
}, {
  name: "sigma-lower",
  hex: "F062B",
  version: "1.6.50"
}, {
  name: "sign-caution",
  hex: "F04A1",
  version: "1.5.54"
}, {
  name: "sign-direction",
  hex: "F0781",
  version: "1.9.32"
}, {
  name: "sign-direction-minus",
  hex: "F1000",
  version: "4.0.96"
}, {
  name: "sign-direction-plus",
  hex: "F0FDC",
  version: "4.0.96"
}, {
  name: "sign-direction-remove",
  hex: "F0FDD",
  version: "4.0.96"
}, {
  name: "sign-real-estate",
  hex: "F1118",
  version: "4.3.95"
}, {
  name: "sign-text",
  hex: "F0782",
  version: "1.9.32"
}, {
  name: "signal",
  hex: "F04A2",
  version: "1.5.54"
}, {
  name: "signal-2g",
  hex: "F0712",
  version: "1.8.36"
}, {
  name: "signal-3g",
  hex: "F0713",
  version: "1.8.36"
}, {
  name: "signal-4g",
  hex: "F0714",
  version: "1.8.36"
}, {
  name: "signal-5g",
  hex: "F0A6F",
  version: "2.6.95"
}, {
  name: "signal-cellular-1",
  hex: "F08BC",
  version: "2.2.43"
}, {
  name: "signal-cellular-2",
  hex: "F08BD",
  version: "2.2.43"
}, {
  name: "signal-cellular-3",
  hex: "F08BE",
  version: "2.2.43"
}, {
  name: "signal-cellular-outline",
  hex: "F08BF",
  version: "2.2.43"
}, {
  name: "signal-distance-variant",
  hex: "F0E64",
  version: "3.6.95"
}, {
  name: "signal-hspa",
  hex: "F0715",
  version: "1.8.36"
}, {
  name: "signal-hspa-plus",
  hex: "F0716",
  version: "1.8.36"
}, {
  name: "signal-off",
  hex: "F0783",
  version: "1.9.32"
}, {
  name: "signal-variant",
  hex: "F060A",
  version: "1.5.54"
}, {
  name: "signature",
  hex: "F0DFB",
  version: "3.5.94"
}, {
  name: "signature-freehand",
  hex: "F0DFC",
  version: "3.5.94"
}, {
  name: "signature-image",
  hex: "F0DFD",
  version: "3.5.94"
}, {
  name: "signature-text",
  hex: "F0DFE",
  version: "3.5.94"
}, {
  name: "silo",
  hex: "F0B49",
  version: "2.8.94"
}, {
  name: "silverware",
  hex: "F04A3",
  version: "1.5.54"
}, {
  name: "silverware-clean",
  hex: "F0FDE",
  version: "4.0.96"
}, {
  name: "silverware-fork",
  hex: "F04A4",
  version: "1.5.54"
}, {
  name: "silverware-fork-knife",
  hex: "F0A70",
  version: "2.6.95"
}, {
  name: "silverware-spoon",
  hex: "F04A5",
  version: "1.5.54"
}, {
  name: "silverware-variant",
  hex: "F04A6",
  version: "1.5.54"
}, {
  name: "sim",
  hex: "F04A7",
  version: "1.5.54"
}, {
  name: "sim-alert",
  hex: "F04A8",
  version: "1.5.54"
}, {
  name: "sim-off",
  hex: "F04A9",
  version: "1.5.54"
}, {
  name: "simple-icons",
  hex: "F131D",
  version: "4.8.95"
}, {
  name: "sina-weibo",
  hex: "F0ADF",
  version: "2.7.94"
}, {
  name: "sitemap",
  hex: "F04AA",
  version: "1.5.54"
}, {
  name: "size-l",
  hex: "F13A6",
  version: "5.0.45"
}, {
  name: "size-m",
  hex: "F13A5",
  version: "5.0.45"
}, {
  name: "size-s",
  hex: "F13A4",
  version: "5.0.45"
}, {
  name: "size-xl",
  hex: "F13A7",
  version: "5.0.45"
}, {
  name: "size-xs",
  hex: "F13A3",
  version: "5.0.45"
}, {
  name: "size-xxl",
  hex: "F13A8",
  version: "5.0.45"
}, {
  name: "size-xxs",
  hex: "F13A2",
  version: "5.0.45"
}, {
  name: "size-xxxl",
  hex: "F13A9",
  version: "5.0.45"
}, {
  name: "skate",
  hex: "F0D35",
  version: "3.3.92"
}, {
  name: "skew-less",
  hex: "F0D36",
  version: "3.3.92"
}, {
  name: "skew-more",
  hex: "F0D37",
  version: "3.3.92"
}, {
  name: "ski",
  hex: "F1304",
  version: "4.8.95"
}, {
  name: "ski-cross-country",
  hex: "F1305",
  version: "4.8.95"
}, {
  name: "ski-water",
  hex: "F1306",
  version: "4.8.95"
}, {
  name: "skip-backward",
  hex: "F04AB",
  version: "1.5.54"
}, {
  name: "skip-backward-outline",
  hex: "F0F25",
  version: "3.8.95"
}, {
  name: "skip-forward",
  hex: "F04AC",
  version: "1.5.54"
}, {
  name: "skip-forward-outline",
  hex: "F0F26",
  version: "3.8.95"
}, {
  name: "skip-next",
  hex: "F04AD",
  version: "1.5.54"
}, {
  name: "skip-next-circle",
  hex: "F0661",
  version: "1.6.50"
}, {
  name: "skip-next-circle-outline",
  hex: "F0662",
  version: "1.6.50"
}, {
  name: "skip-next-outline",
  hex: "F0F27",
  version: "3.8.95"
}, {
  name: "skip-previous",
  hex: "F04AE",
  version: "1.5.54"
}, {
  name: "skip-previous-circle",
  hex: "F0663",
  version: "1.6.50"
}, {
  name: "skip-previous-circle-outline",
  hex: "F0664",
  version: "1.6.50"
}, {
  name: "skip-previous-outline",
  hex: "F0F28",
  version: "3.8.95"
}, {
  name: "skull",
  hex: "F068C",
  version: "1.7.12"
}, {
  name: "skull-crossbones",
  hex: "F0BC6",
  version: "3.0.39"
}, {
  name: "skull-crossbones-outline",
  hex: "F0BC7",
  version: "3.0.39"
}, {
  name: "skull-outline",
  hex: "F0BC8",
  version: "3.0.39"
}, {
  name: "skype",
  hex: "F04AF",
  version: "1.5.54"
}, {
  name: "skype-business",
  hex: "F04B0",
  version: "1.5.54"
}, {
  name: "slack",
  hex: "F04B1",
  version: "1.5.54"
}, {
  name: "slash-forward",
  hex: "F0FDF",
  version: "4.0.96"
}, {
  name: "slash-forward-box",
  hex: "F0FE0",
  version: "4.0.96"
}, {
  name: "sleep",
  hex: "F04B2",
  version: "1.5.54"
}, {
  name: "sleep-off",
  hex: "F04B3",
  version: "1.5.54"
}, {
  name: "slope-downhill",
  hex: "F0DFF",
  version: "3.5.94"
}, {
  name: "slope-uphill",
  hex: "F0E00",
  version: "3.5.94"
}, {
  name: "slot-machine",
  hex: "F1114",
  version: "4.3.95"
}, {
  name: "slot-machine-outline",
  hex: "F1115",
  version: "4.3.95"
}, {
  name: "smart-card",
  hex: "F10BD",
  version: "4.2.95"
}, {
  name: "smart-card-outline",
  hex: "F10BE",
  version: "4.2.95"
}, {
  name: "smart-card-reader",
  hex: "F10BF",
  version: "4.2.95"
}, {
  name: "smart-card-reader-outline",
  hex: "F10C0",
  version: "4.2.95"
}, {
  name: "smog",
  hex: "F0A71",
  version: "2.6.95"
}, {
  name: "smoke-detector",
  hex: "F0392",
  version: "1.5.54"
}, {
  name: "smoking",
  hex: "F04B4",
  version: "1.5.54"
}, {
  name: "smoking-off",
  hex: "F04B5",
  version: "1.5.54"
}, {
  name: "snapchat",
  hex: "F04B6",
  version: "1.5.54"
}, {
  name: "snowboard",
  hex: "F1307",
  version: "4.8.95"
}, {
  name: "snowflake",
  hex: "F0717",
  version: "1.8.36"
}, {
  name: "snowflake-alert",
  hex: "F0F29",
  version: "3.8.95"
}, {
  name: "snowflake-melt",
  hex: "F12CB",
  version: "4.8.95"
}, {
  name: "snowflake-variant",
  hex: "F0F2A",
  version: "3.8.95"
}, {
  name: "snowman",
  hex: "F04B7",
  version: "1.5.54"
}, {
  name: "soccer",
  hex: "F04B8",
  version: "1.5.54"
}, {
  name: "soccer-field",
  hex: "F0834",
  version: "2.1.19"
}, {
  name: "sofa",
  hex: "F04B9",
  version: "1.5.54"
}, {
  name: "solar-panel",
  hex: "F0D9B",
  version: "3.4.93"
}, {
  name: "solar-panel-large",
  hex: "F0D9C",
  version: "3.4.93"
}, {
  name: "solar-power",
  hex: "F0A72",
  version: "2.6.95"
}, {
  name: "soldering-iron",
  hex: "F1092",
  version: "4.2.95"
}, {
  name: "solid",
  hex: "F068D",
  version: "1.7.12"
}, {
  name: "sony-playstation",
  hex: "F0414",
  version: "1.5.54"
}, {
  name: "sort",
  hex: "F04BA",
  version: "1.5.54"
}, {
  name: "sort-alphabetical-ascending",
  hex: "F05BD",
  version: "1.5.54"
}, {
  name: "sort-alphabetical-ascending-variant",
  hex: "F1148",
  version: "4.4.95"
}, {
  name: "sort-alphabetical-descending",
  hex: "F05BF",
  version: "1.5.54"
}, {
  name: "sort-alphabetical-descending-variant",
  hex: "F1149",
  version: "4.4.95"
}, {
  name: "sort-alphabetical-variant",
  hex: "F04BB",
  version: "1.5.54"
}, {
  name: "sort-ascending",
  hex: "F04BC",
  version: "1.5.54"
}, {
  name: "sort-bool-ascending",
  hex: "F1385",
  version: "5.0.45"
}, {
  name: "sort-bool-ascending-variant",
  hex: "F1386",
  version: "5.0.45"
}, {
  name: "sort-bool-descending",
  hex: "F1387",
  version: "5.0.45"
}, {
  name: "sort-bool-descending-variant",
  hex: "F1388",
  version: "5.0.45"
}, {
  name: "sort-descending",
  hex: "F04BD",
  version: "1.5.54"
}, {
  name: "sort-numeric-ascending",
  hex: "F1389",
  version: "5.0.45"
}, {
  name: "sort-numeric-ascending-variant",
  hex: "F090D",
  version: "2.3.50"
}, {
  name: "sort-numeric-descending",
  hex: "F138A",
  version: "5.0.45"
}, {
  name: "sort-numeric-descending-variant",
  hex: "F0AD2",
  version: "2.7.94"
}, {
  name: "sort-numeric-variant",
  hex: "F04BE",
  version: "1.5.54"
}, {
  name: "sort-reverse-variant",
  hex: "F033C",
  version: "1.5.54"
}, {
  name: "sort-variant",
  hex: "F04BF",
  version: "1.5.54"
}, {
  name: "sort-variant-lock",
  hex: "F0CCD",
  version: "3.2.89"
}, {
  name: "sort-variant-lock-open",
  hex: "F0CCE",
  version: "3.2.89"
}, {
  name: "sort-variant-remove",
  hex: "F1147",
  version: "4.4.95"
}, {
  name: "soundcloud",
  hex: "F04C0",
  version: "1.5.54"
}, {
  name: "source-branch",
  hex: "F062C",
  version: "1.6.50"
}, {
  name: "source-commit",
  hex: "F0718",
  version: "1.8.36"
}, {
  name: "source-commit-end",
  hex: "F0719",
  version: "1.8.36"
}, {
  name: "source-commit-end-local",
  hex: "F071A",
  version: "1.8.36"
}, {
  name: "source-commit-local",
  hex: "F071B",
  version: "1.8.36"
}, {
  name: "source-commit-next-local",
  hex: "F071C",
  version: "1.8.36"
}, {
  name: "source-commit-start",
  hex: "F071D",
  version: "1.8.36"
}, {
  name: "source-commit-start-next-local",
  hex: "F071E",
  version: "1.8.36"
}, {
  name: "source-fork",
  hex: "F04C1",
  version: "1.5.54"
}, {
  name: "source-merge",
  hex: "F062D",
  version: "1.6.50"
}, {
  name: "source-pull",
  hex: "F04C2",
  version: "1.5.54"
}, {
  name: "source-repository",
  hex: "F0CCF",
  version: "3.2.89"
}, {
  name: "source-repository-multiple",
  hex: "F0CD0",
  version: "3.2.89"
}, {
  name: "soy-sauce",
  hex: "F07EE",
  version: "2.0.46"
}, {
  name: "spa",
  hex: "F0CD1",
  version: "3.2.89"
}, {
  name: "spa-outline",
  hex: "F0CD2",
  version: "3.2.89"
}, {
  name: "space-invaders",
  hex: "F0BC9",
  version: "3.0.39"
}, {
  name: "space-station",
  hex: "F1383",
  version: "4.9.95"
}, {
  name: "spade",
  hex: "F0E65",
  version: "3.6.95"
}, {
  name: "speaker",
  hex: "F04C3",
  version: "1.5.54"
}, {
  name: "speaker-bluetooth",
  hex: "F09A2",
  version: "2.4.85"
}, {
  name: "speaker-multiple",
  hex: "F0D38",
  version: "3.3.92"
}, {
  name: "speaker-off",
  hex: "F04C4",
  version: "1.5.54"
}, {
  name: "speaker-wireless",
  hex: "F071F",
  version: "1.8.36"
}, {
  name: "speedometer",
  hex: "F04C5",
  version: "1.5.54"
}, {
  name: "speedometer-medium",
  hex: "F0F85",
  version: "3.9.97"
}, {
  name: "speedometer-slow",
  hex: "F0F86",
  version: "3.9.97"
}, {
  name: "spellcheck",
  hex: "F04C6",
  version: "1.5.54"
}, {
  name: "spider",
  hex: "F11EA",
  version: "4.5.95"
}, {
  name: "spider-thread",
  hex: "F11EB",
  version: "4.5.95"
}, {
  name: "spider-web",
  hex: "F0BCA",
  version: "3.0.39"
}, {
  name: "spotify",
  hex: "F04C7",
  version: "1.5.54"
}, {
  name: "spotlight",
  hex: "F04C8",
  version: "1.5.54"
}, {
  name: "spotlight-beam",
  hex: "F04C9",
  version: "1.5.54"
}, {
  name: "spray",
  hex: "F0665",
  version: "1.6.50"
}, {
  name: "spray-bottle",
  hex: "F0AE0",
  version: "2.7.94"
}, {
  name: "sprinkler",
  hex: "F105F",
  version: "4.1.95"
}, {
  name: "sprinkler-variant",
  hex: "F1060",
  version: "4.1.95"
}, {
  name: "sprout",
  hex: "F0E66",
  version: "3.6.95"
}, {
  name: "sprout-outline",
  hex: "F0E67",
  version: "3.6.95"
}, {
  name: "square",
  hex: "F0764",
  version: "1.9.32"
}, {
  name: "square-edit-outline",
  hex: "F090C",
  version: "2.3.50"
}, {
  name: "square-medium",
  hex: "F0A13",
  version: "2.5.94"
}, {
  name: "square-medium-outline",
  hex: "F0A14",
  version: "2.5.94"
}, {
  name: "square-off",
  hex: "F12EE",
  version: "4.8.95"
}, {
  name: "square-off-outline",
  hex: "F12EF",
  version: "4.8.95"
}, {
  name: "square-outline",
  hex: "F0763",
  version: "1.9.32"
}, {
  name: "square-root",
  hex: "F0784",
  version: "1.9.32"
}, {
  name: "square-root-box",
  hex: "F09A3",
  version: "2.4.85"
}, {
  name: "square-small",
  hex: "F0A15",
  version: "2.5.94"
}, {
  name: "squeegee",
  hex: "F0AE1",
  version: "2.7.94"
}, {
  name: "ssh",
  hex: "F08C0",
  version: "2.2.43"
}, {
  name: "stack-exchange",
  hex: "F060B",
  version: "1.5.54"
}, {
  name: "stack-overflow",
  hex: "F04CC",
  version: "1.5.54"
}, {
  name: "stackpath",
  hex: "F0359",
  version: "1.5.54"
}, {
  name: "stadium",
  hex: "F0FF9",
  version: "4.0.96"
}, {
  name: "stadium-variant",
  hex: "F0720",
  version: "1.8.36"
}, {
  name: "stairs",
  hex: "F04CD",
  version: "1.5.54"
}, {
  name: "stairs-box",
  hex: "F139E",
  version: "5.0.45"
}, {
  name: "stairs-down",
  hex: "F12BE",
  version: "4.8.95"
}, {
  name: "stairs-up",
  hex: "F12BD",
  version: "4.8.95"
}, {
  name: "stamper",
  hex: "F0D39",
  version: "3.3.92"
}, {
  name: "standard-definition",
  hex: "F07EF",
  version: "2.0.46"
}, {
  name: "star",
  hex: "F04CE",
  version: "1.5.54"
}, {
  name: "star-box",
  hex: "F0A73",
  version: "2.6.95"
}, {
  name: "star-box-multiple",
  hex: "F1286",
  version: "4.7.95"
}, {
  name: "star-box-multiple-outline",
  hex: "F1287",
  version: "4.7.95"
}, {
  name: "star-box-outline",
  hex: "F0A74",
  version: "2.6.95"
}, {
  name: "star-circle",
  hex: "F04CF",
  version: "1.5.54"
}, {
  name: "star-circle-outline",
  hex: "F09A4",
  version: "2.4.85"
}, {
  name: "star-face",
  hex: "F09A5",
  version: "2.4.85"
}, {
  name: "star-four-points",
  hex: "F0AE2",
  version: "2.7.94"
}, {
  name: "star-four-points-outline",
  hex: "F0AE3",
  version: "2.7.94"
}, {
  name: "star-half",
  hex: "F0246",
  version: "1.5.54"
}, {
  name: "star-half-full",
  hex: "F04D0",
  version: "1.5.54"
}, {
  name: "star-off",
  hex: "F04D1",
  version: "1.5.54"
}, {
  name: "star-outline",
  hex: "F04D2",
  version: "1.5.54"
}, {
  name: "star-three-points",
  hex: "F0AE4",
  version: "2.7.94"
}, {
  name: "star-three-points-outline",
  hex: "F0AE5",
  version: "2.7.94"
}, {
  name: "state-machine",
  hex: "F11EF",
  version: "4.5.95"
}, {
  name: "steam",
  hex: "F04D3",
  version: "1.5.54"
}, {
  name: "steering",
  hex: "F04D4",
  version: "1.5.54"
}, {
  name: "steering-off",
  hex: "F090E",
  version: "2.3.50"
}, {
  name: "step-backward",
  hex: "F04D5",
  version: "1.5.54"
}, {
  name: "step-backward-2",
  hex: "F04D6",
  version: "1.5.54"
}, {
  name: "step-forward",
  hex: "F04D7",
  version: "1.5.54"
}, {
  name: "step-forward-2",
  hex: "F04D8",
  version: "1.5.54"
}, {
  name: "stethoscope",
  hex: "F04D9",
  version: "1.5.54"
}, {
  name: "sticker",
  hex: "F1364",
  version: "4.9.95"
}, {
  name: "sticker-alert",
  hex: "F1365",
  version: "4.9.95"
}, {
  name: "sticker-alert-outline",
  hex: "F1366",
  version: "4.9.95"
}, {
  name: "sticker-check",
  hex: "F1367",
  version: "4.9.95"
}, {
  name: "sticker-check-outline",
  hex: "F1368",
  version: "4.9.95"
}, {
  name: "sticker-circle-outline",
  hex: "F05D0",
  version: "1.5.54"
}, {
  name: "sticker-emoji",
  hex: "F0785",
  version: "1.9.32"
}, {
  name: "sticker-minus",
  hex: "F1369",
  version: "4.9.95"
}, {
  name: "sticker-minus-outline",
  hex: "F136A",
  version: "4.9.95"
}, {
  name: "sticker-outline",
  hex: "F136B",
  version: "4.9.95"
}, {
  name: "sticker-plus",
  hex: "F136C",
  version: "4.9.95"
}, {
  name: "sticker-plus-outline",
  hex: "F136D",
  version: "4.9.95"
}, {
  name: "sticker-remove",
  hex: "F136E",
  version: "4.9.95"
}, {
  name: "sticker-remove-outline",
  hex: "F136F",
  version: "4.9.95"
}, {
  name: "stocking",
  hex: "F04DA",
  version: "1.5.54"
}, {
  name: "stomach",
  hex: "F1093",
  version: "4.2.95"
}, {
  name: "stop",
  hex: "F04DB",
  version: "1.5.54"
}, {
  name: "stop-circle",
  hex: "F0666",
  version: "1.6.50"
}, {
  name: "stop-circle-outline",
  hex: "F0667",
  version: "1.6.50"
}, {
  name: "store",
  hex: "F04DC",
  version: "1.5.54"
}, {
  name: "store-24-hour",
  hex: "F04DD",
  version: "1.5.54"
}, {
  name: "store-outline",
  hex: "F1361",
  version: "4.9.95"
}, {
  name: "storefront",
  hex: "F07C7",
  version: "2.0.46"
}, {
  name: "storefront-outline",
  hex: "F10C1",
  version: "4.2.95"
}, {
  name: "stove",
  hex: "F04DE",
  version: "1.5.54"
}, {
  name: "strategy",
  hex: "F11D6",
  version: "4.5.95"
}, {
  name: "stretch-to-page",
  hex: "F0F2B",
  version: "3.8.95"
}, {
  name: "stretch-to-page-outline",
  hex: "F0F2C",
  version: "3.8.95"
}, {
  name: "string-lights",
  hex: "F12BA",
  version: "4.7.95"
}, {
  name: "string-lights-off",
  hex: "F12BB",
  version: "4.7.95"
}, {
  name: "subdirectory-arrow-left",
  hex: "F060C",
  version: "1.5.54"
}, {
  name: "subdirectory-arrow-right",
  hex: "F060D",
  version: "1.5.54"
}, {
  name: "subtitles",
  hex: "F0A16",
  version: "2.5.94"
}, {
  name: "subtitles-outline",
  hex: "F0A17",
  version: "2.5.94"
}, {
  name: "subway",
  hex: "F06AC",
  version: "1.7.12"
}, {
  name: "subway-alert-variant",
  hex: "F0D9D",
  version: "3.4.93"
}, {
  name: "subway-variant",
  hex: "F04DF",
  version: "1.5.54"
}, {
  name: "summit",
  hex: "F0786",
  version: "1.9.32"
}, {
  name: "sunglasses",
  hex: "F04E0",
  version: "1.5.54"
}, {
  name: "surround-sound",
  hex: "F05C5",
  version: "1.5.54"
}, {
  name: "surround-sound-2-0",
  hex: "F07F0",
  version: "2.0.46"
}, {
  name: "surround-sound-3-1",
  hex: "F07F1",
  version: "2.0.46"
}, {
  name: "surround-sound-5-1",
  hex: "F07F2",
  version: "2.0.46"
}, {
  name: "surround-sound-7-1",
  hex: "F07F3",
  version: "2.0.46"
}, {
  name: "svg",
  hex: "F0721",
  version: "1.8.36"
}, {
  name: "swap-horizontal",
  hex: "F04E1",
  version: "1.5.54"
}, {
  name: "swap-horizontal-bold",
  hex: "F0BCD",
  version: "3.0.39"
}, {
  name: "swap-horizontal-circle",
  hex: "F0FE1",
  version: "4.0.96"
}, {
  name: "swap-horizontal-circle-outline",
  hex: "F0FE2",
  version: "4.0.96"
}, {
  name: "swap-horizontal-variant",
  hex: "F08C1",
  version: "2.2.43"
}, {
  name: "swap-vertical",
  hex: "F04E2",
  version: "1.5.54"
}, {
  name: "swap-vertical-bold",
  hex: "F0BCE",
  version: "3.0.39"
}, {
  name: "swap-vertical-circle",
  hex: "F0FE3",
  version: "4.0.96"
}, {
  name: "swap-vertical-circle-outline",
  hex: "F0FE4",
  version: "4.0.96"
}, {
  name: "swap-vertical-variant",
  hex: "F08C2",
  version: "2.2.43"
}, {
  name: "swim",
  hex: "F04E3",
  version: "1.5.54"
}, {
  name: "switch",
  hex: "F04E4",
  version: "1.5.54"
}, {
  name: "sword",
  hex: "F04E5",
  version: "1.5.54"
}, {
  name: "sword-cross",
  hex: "F0787",
  version: "1.9.32"
}, {
  name: "syllabary-hangul",
  hex: "F1333",
  version: "4.9.95"
}, {
  name: "syllabary-hiragana",
  hex: "F1334",
  version: "4.9.95"
}, {
  name: "syllabary-katakana",
  hex: "F1335",
  version: "4.9.95"
}, {
  name: "syllabary-katakana-half-width",
  hex: "F1336",
  version: "4.9.95"
}, {
  name: "symfony",
  hex: "F0AE6",
  version: "2.7.94"
}, {
  name: "sync",
  hex: "F04E6",
  version: "1.5.54"
}, {
  name: "sync-alert",
  hex: "F04E7",
  version: "1.5.54"
}, {
  name: "sync-circle",
  hex: "F1378",
  version: "4.9.95"
}, {
  name: "sync-off",
  hex: "F04E8",
  version: "1.5.54"
}, {
  name: "tab",
  hex: "F04E9",
  version: "1.5.54"
}, {
  name: "tab-minus",
  hex: "F0B4B",
  version: "2.8.94"
}, {
  name: "tab-plus",
  hex: "F075C",
  version: "1.9.32"
}, {
  name: "tab-remove",
  hex: "F0B4C",
  version: "2.8.94"
}, {
  name: "tab-unselected",
  hex: "F04EA",
  version: "1.5.54"
}, {
  name: "table",
  hex: "F04EB",
  version: "1.5.54"
}, {
  name: "table-border",
  hex: "F0A18",
  version: "2.5.94"
}, {
  name: "table-chair",
  hex: "F1061",
  version: "4.1.95"
}, {
  name: "table-column",
  hex: "F0835",
  version: "2.1.19"
}, {
  name: "table-column-plus-after",
  hex: "F04EC",
  version: "1.5.54"
}, {
  name: "table-column-plus-before",
  hex: "F04ED",
  version: "1.5.54"
}, {
  name: "table-column-remove",
  hex: "F04EE",
  version: "1.5.54"
}, {
  name: "table-column-width",
  hex: "F04EF",
  version: "1.5.54"
}, {
  name: "table-edit",
  hex: "F04F0",
  version: "1.5.54"
}, {
  name: "table-eye",
  hex: "F1094",
  version: "4.2.95"
}, {
  name: "table-furniture",
  hex: "F05BC",
  version: "1.5.54"
}, {
  name: "table-headers-eye",
  hex: "F121D",
  version: "4.6.95"
}, {
  name: "table-headers-eye-off",
  hex: "F121E",
  version: "4.6.95"
}, {
  name: "table-large",
  hex: "F04F1",
  version: "1.5.54"
}, {
  name: "table-large-plus",
  hex: "F0F87",
  version: "3.9.97"
}, {
  name: "table-large-remove",
  hex: "F0F88",
  version: "3.9.97"
}, {
  name: "table-merge-cells",
  hex: "F09A6",
  version: "2.4.85"
}, {
  name: "table-of-contents",
  hex: "F0836",
  version: "2.1.19"
}, {
  name: "table-plus",
  hex: "F0A75",
  version: "2.6.95"
}, {
  name: "table-refresh",
  hex: "F13A0",
  version: "5.0.45"
}, {
  name: "table-remove",
  hex: "F0A76",
  version: "2.6.95"
}, {
  name: "table-row",
  hex: "F0837",
  version: "2.1.19"
}, {
  name: "table-row-height",
  hex: "F04F2",
  version: "1.5.54"
}, {
  name: "table-row-plus-after",
  hex: "F04F3",
  version: "1.5.54"
}, {
  name: "table-row-plus-before",
  hex: "F04F4",
  version: "1.5.54"
}, {
  name: "table-row-remove",
  hex: "F04F5",
  version: "1.5.54"
}, {
  name: "table-search",
  hex: "F090F",
  version: "2.3.50"
}, {
  name: "table-settings",
  hex: "F0838",
  version: "2.1.19"
}, {
  name: "table-sync",
  hex: "F13A1",
  version: "5.0.45"
}, {
  name: "table-tennis",
  hex: "F0E68",
  version: "3.6.95"
}, {
  name: "tablet",
  hex: "F04F6",
  version: "1.5.54"
}, {
  name: "tablet-android",
  hex: "F04F7",
  version: "1.5.54"
}, {
  name: "tablet-cellphone",
  hex: "F09A7",
  version: "2.4.85"
}, {
  name: "tablet-dashboard",
  hex: "F0ECE",
  version: "3.7.94"
}, {
  name: "tablet-ipad",
  hex: "F04F8",
  version: "1.5.54"
}, {
  name: "taco",
  hex: "F0762",
  version: "1.9.32"
}, {
  name: "tag",
  hex: "F04F9",
  version: "1.5.54"
}, {
  name: "tag-faces",
  hex: "F04FA",
  version: "1.5.54"
}, {
  name: "tag-heart",
  hex: "F068B",
  version: "1.7.12"
}, {
  name: "tag-heart-outline",
  hex: "F0BCF",
  version: "3.0.39"
}, {
  name: "tag-minus",
  hex: "F0910",
  version: "2.3.50"
}, {
  name: "tag-minus-outline",
  hex: "F121F",
  version: "4.6.95"
}, {
  name: "tag-multiple",
  hex: "F04FB",
  version: "1.5.54"
}, {
  name: "tag-multiple-outline",
  hex: "F12F7",
  version: "4.8.95"
}, {
  name: "tag-off",
  hex: "F1220",
  version: "4.6.95"
}, {
  name: "tag-off-outline",
  hex: "F1221",
  version: "4.6.95"
}, {
  name: "tag-outline",
  hex: "F04FC",
  version: "1.5.54"
}, {
  name: "tag-plus",
  hex: "F0722",
  version: "1.8.36"
}, {
  name: "tag-plus-outline",
  hex: "F1222",
  version: "4.6.95"
}, {
  name: "tag-remove",
  hex: "F0723",
  version: "1.8.36"
}, {
  name: "tag-remove-outline",
  hex: "F1223",
  version: "4.6.95"
}, {
  name: "tag-text",
  hex: "F1224",
  version: "4.6.95"
}, {
  name: "tag-text-outline",
  hex: "F04FD",
  version: "1.5.54"
}, {
  name: "tank",
  hex: "F0D3A",
  version: "3.3.92"
}, {
  name: "tanker-truck",
  hex: "F0FE5",
  version: "4.0.96"
}, {
  name: "tape-measure",
  hex: "F0B4D",
  version: "2.8.94"
}, {
  name: "target",
  hex: "F04FE",
  version: "1.5.54"
}, {
  name: "target-account",
  hex: "F0BD0",
  version: "3.0.39"
}, {
  name: "target-variant",
  hex: "F0A77",
  version: "2.6.95"
}, {
  name: "taxi",
  hex: "F04FF",
  version: "1.5.54"
}, {
  name: "tea",
  hex: "F0D9E",
  version: "3.4.93"
}, {
  name: "tea-outline",
  hex: "F0D9F",
  version: "3.4.93"
}, {
  name: "teach",
  hex: "F0890",
  version: "2.1.99"
}, {
  name: "teamviewer",
  hex: "F0500",
  version: "1.5.54"
}, {
  name: "telegram",
  hex: "F0501",
  version: "1.5.54"
}, {
  name: "telescope",
  hex: "F0B4E",
  version: "2.8.94"
}, {
  name: "television",
  hex: "F0502",
  version: "1.5.54"
}, {
  name: "television-ambient-light",
  hex: "F1356",
  version: "4.9.95"
}, {
  name: "television-box",
  hex: "F0839",
  version: "2.1.19"
}, {
  name: "television-classic",
  hex: "F07F4",
  version: "2.0.46"
}, {
  name: "television-classic-off",
  hex: "F083A",
  version: "2.1.19"
}, {
  name: "television-clean",
  hex: "F1110",
  version: "4.3.95"
}, {
  name: "television-guide",
  hex: "F0503",
  version: "1.5.54"
}, {
  name: "television-off",
  hex: "F083B",
  version: "2.1.19"
}, {
  name: "television-pause",
  hex: "F0F89",
  version: "3.9.97"
}, {
  name: "television-play",
  hex: "F0ECF",
  version: "3.7.94"
}, {
  name: "television-stop",
  hex: "F0F8A",
  version: "3.9.97"
}, {
  name: "temperature-celsius",
  hex: "F0504",
  version: "1.5.54"
}, {
  name: "temperature-fahrenheit",
  hex: "F0505",
  version: "1.5.54"
}, {
  name: "temperature-kelvin",
  hex: "F0506",
  version: "1.5.54"
}, {
  name: "tennis",
  hex: "F0DA0",
  version: "3.4.93"
}, {
  name: "tennis-ball",
  hex: "F0507",
  version: "1.5.54"
}, {
  name: "tent",
  hex: "F0508",
  version: "1.5.54"
}, {
  name: "terraform",
  hex: "F1062",
  version: "4.1.95"
}, {
  name: "terrain",
  hex: "F0509",
  version: "1.5.54"
}, {
  name: "test-tube",
  hex: "F0668",
  version: "1.6.50"
}, {
  name: "test-tube-empty",
  hex: "F0911",
  version: "2.3.50"
}, {
  name: "test-tube-off",
  hex: "F0912",
  version: "2.3.50"
}, {
  name: "text",
  hex: "F09A8",
  version: "2.4.85"
}, {
  name: "text-box",
  hex: "F021A",
  version: "1.5.54"
}, {
  name: "text-box-check",
  hex: "F0EA6",
  version: "3.7.94"
}, {
  name: "text-box-check-outline",
  hex: "F0EA7",
  version: "3.7.94"
}, {
  name: "text-box-minus",
  hex: "F0EA8",
  version: "3.7.94"
}, {
  name: "text-box-minus-outline",
  hex: "F0EA9",
  version: "3.7.94"
}, {
  name: "text-box-multiple",
  hex: "F0AB7",
  version: "2.7.94"
}, {
  name: "text-box-multiple-outline",
  hex: "F0AB8",
  version: "2.7.94"
}, {
  name: "text-box-outline",
  hex: "F09ED",
  version: "2.5.94"
}, {
  name: "text-box-plus",
  hex: "F0EAA",
  version: "3.7.94"
}, {
  name: "text-box-plus-outline",
  hex: "F0EAB",
  version: "3.7.94"
}, {
  name: "text-box-remove",
  hex: "F0EAC",
  version: "3.7.94"
}, {
  name: "text-box-remove-outline",
  hex: "F0EAD",
  version: "3.7.94"
}, {
  name: "text-box-search",
  hex: "F0EAE",
  version: "3.7.94"
}, {
  name: "text-box-search-outline",
  hex: "F0EAF",
  version: "3.7.94"
}, {
  name: "text-recognition",
  hex: "F113D",
  version: "4.4.95"
}, {
  name: "text-shadow",
  hex: "F0669",
  version: "1.6.50"
}, {
  name: "text-short",
  hex: "F09A9",
  version: "2.4.85"
}, {
  name: "text-subject",
  hex: "F09AA",
  version: "2.4.85"
}, {
  name: "text-to-speech",
  hex: "F050A",
  version: "1.5.54"
}, {
  name: "text-to-speech-off",
  hex: "F050B",
  version: "1.5.54"
}, {
  name: "textarea",
  hex: "F1095",
  version: "4.2.95"
}, {
  name: "textbox",
  hex: "F060E",
  version: "1.5.54"
}, {
  name: "textbox-lock",
  hex: "F135D",
  version: "4.9.95"
}, {
  name: "textbox-password",
  hex: "F07F5",
  version: "2.0.46"
}, {
  name: "texture",
  hex: "F050C",
  version: "1.5.54"
}, {
  name: "texture-box",
  hex: "F0FE6",
  version: "4.0.96"
}, {
  name: "theater",
  hex: "F050D",
  version: "1.5.54"
}, {
  name: "theme-light-dark",
  hex: "F050E",
  version: "1.5.54"
}, {
  name: "thermometer",
  hex: "F050F",
  version: "1.5.54"
}, {
  name: "thermometer-alert",
  hex: "F0E01",
  version: "3.5.94"
}, {
  name: "thermometer-chevron-down",
  hex: "F0E02",
  version: "3.5.94"
}, {
  name: "thermometer-chevron-up",
  hex: "F0E03",
  version: "3.5.94"
}, {
  name: "thermometer-high",
  hex: "F10C2",
  version: "4.2.95"
}, {
  name: "thermometer-lines",
  hex: "F0510",
  version: "1.5.54"
}, {
  name: "thermometer-low",
  hex: "F10C3",
  version: "4.2.95"
}, {
  name: "thermometer-minus",
  hex: "F0E04",
  version: "3.5.94"
}, {
  name: "thermometer-plus",
  hex: "F0E05",
  version: "3.5.94"
}, {
  name: "thermostat",
  hex: "F0393",
  version: "1.5.54"
}, {
  name: "thermostat-box",
  hex: "F0891",
  version: "2.1.99"
}, {
  name: "thought-bubble",
  hex: "F07F6",
  version: "2.0.46"
}, {
  name: "thought-bubble-outline",
  hex: "F07F7",
  version: "2.0.46"
}, {
  name: "thumb-down",
  hex: "F0511",
  version: "1.5.54"
}, {
  name: "thumb-down-outline",
  hex: "F0512",
  version: "1.5.54"
}, {
  name: "thumb-up",
  hex: "F0513",
  version: "1.5.54"
}, {
  name: "thumb-up-outline",
  hex: "F0514",
  version: "1.5.54"
}, {
  name: "thumbs-up-down",
  hex: "F0515",
  version: "1.5.54"
}, {
  name: "ticket",
  hex: "F0516",
  version: "1.5.54"
}, {
  name: "ticket-account",
  hex: "F0517",
  version: "1.5.54"
}, {
  name: "ticket-confirmation",
  hex: "F0518",
  version: "1.5.54"
}, {
  name: "ticket-confirmation-outline",
  hex: "F13AA",
  version: "5.0.45"
}, {
  name: "ticket-outline",
  hex: "F0913",
  version: "2.3.50"
}, {
  name: "ticket-percent",
  hex: "F0724",
  version: "1.8.36"
}, {
  name: "tie",
  hex: "F0519",
  version: "1.5.54"
}, {
  name: "tilde",
  hex: "F0725",
  version: "1.8.36"
}, {
  name: "timelapse",
  hex: "F051A",
  version: "1.5.54"
}, {
  name: "timeline",
  hex: "F0BD1",
  version: "3.0.39"
}, {
  name: "timeline-alert",
  hex: "F0F95",
  version: "3.9.97"
}, {
  name: "timeline-alert-outline",
  hex: "F0F98",
  version: "3.9.97"
}, {
  name: "timeline-clock",
  hex: "F11FB",
  version: "4.6.95"
}, {
  name: "timeline-clock-outline",
  hex: "F11FC",
  version: "4.6.95"
}, {
  name: "timeline-help",
  hex: "F0F99",
  version: "3.9.97"
}, {
  name: "timeline-help-outline",
  hex: "F0F9A",
  version: "3.9.97"
}, {
  name: "timeline-outline",
  hex: "F0BD2",
  version: "3.0.39"
}, {
  name: "timeline-plus",
  hex: "F0F96",
  version: "3.9.97"
}, {
  name: "timeline-plus-outline",
  hex: "F0F97",
  version: "3.9.97"
}, {
  name: "timeline-text",
  hex: "F0BD3",
  version: "3.0.39"
}, {
  name: "timeline-text-outline",
  hex: "F0BD4",
  version: "3.0.39"
}, {
  name: "timer",
  hex: "F13AB",
  version: "5.0.45"
}, {
  name: "timer-10",
  hex: "F051C",
  version: "1.5.54"
}, {
  name: "timer-3",
  hex: "F051D",
  version: "1.5.54"
}, {
  name: "timer-off",
  hex: "F13AC",
  version: "5.0.45"
}, {
  name: "timer-off-outline",
  hex: "F051E",
  version: "1.5.54"
}, {
  name: "timer-outline",
  hex: "F051B",
  version: "1.5.54"
}, {
  name: "timer-sand",
  hex: "F051F",
  version: "1.5.54"
}, {
  name: "timer-sand-empty",
  hex: "F06AD",
  version: "1.7.12"
}, {
  name: "timer-sand-full",
  hex: "F078C",
  version: "1.9.32"
}, {
  name: "timetable",
  hex: "F0520",
  version: "1.5.54"
}, {
  name: "toaster",
  hex: "F1063",
  version: "4.1.95"
}, {
  name: "toaster-off",
  hex: "F11B7",
  version: "4.5.95"
}, {
  name: "toaster-oven",
  hex: "F0CD3",
  version: "3.2.89"
}, {
  name: "toggle-switch",
  hex: "F0521",
  version: "1.5.54"
}, {
  name: "toggle-switch-off",
  hex: "F0522",
  version: "1.5.54"
}, {
  name: "toggle-switch-off-outline",
  hex: "F0A19",
  version: "2.5.94"
}, {
  name: "toggle-switch-outline",
  hex: "F0A1A",
  version: "2.5.94"
}, {
  name: "toilet",
  hex: "F09AB",
  version: "2.4.85"
}, {
  name: "toolbox",
  hex: "F09AC",
  version: "2.4.85"
}, {
  name: "toolbox-outline",
  hex: "F09AD",
  version: "2.4.85"
}, {
  name: "tools",
  hex: "F1064",
  version: "4.1.95"
}, {
  name: "tooltip",
  hex: "F0523",
  version: "1.5.54"
}, {
  name: "tooltip-account",
  hex: "F000C",
  version: "1.5.54"
}, {
  name: "tooltip-edit",
  hex: "F0524",
  version: "1.5.54"
}, {
  name: "tooltip-edit-outline",
  hex: "F12C5",
  version: "4.8.95"
}, {
  name: "tooltip-image",
  hex: "F0525",
  version: "1.5.54"
}, {
  name: "tooltip-image-outline",
  hex: "F0BD5",
  version: "3.0.39"
}, {
  name: "tooltip-outline",
  hex: "F0526",
  version: "1.5.54"
}, {
  name: "tooltip-plus",
  hex: "F0BD6",
  version: "3.0.39"
}, {
  name: "tooltip-plus-outline",
  hex: "F0527",
  version: "1.5.54"
}, {
  name: "tooltip-text",
  hex: "F0528",
  version: "1.5.54"
}, {
  name: "tooltip-text-outline",
  hex: "F0BD7",
  version: "3.0.39"
}, {
  name: "tooth",
  hex: "F08C3",
  version: "2.2.43"
}, {
  name: "tooth-outline",
  hex: "F0529",
  version: "1.5.54"
}, {
  name: "toothbrush",
  hex: "F1129",
  version: "4.3.95"
}, {
  name: "toothbrush-electric",
  hex: "F112C",
  version: "4.4.95"
}, {
  name: "toothbrush-paste",
  hex: "F112A",
  version: "4.3.95"
}, {
  name: "tortoise",
  hex: "F0D3B",
  version: "3.3.92"
}, {
  name: "toslink",
  hex: "F12B8",
  version: "4.7.95"
}, {
  name: "tournament",
  hex: "F09AE",
  version: "2.4.85"
}, {
  name: "tow-truck",
  hex: "F083C",
  version: "2.1.19"
}, {
  name: "tower-beach",
  hex: "F0681",
  version: "1.7.12"
}, {
  name: "tower-fire",
  hex: "F0682",
  version: "1.7.12"
}, {
  name: "toy-brick",
  hex: "F1288",
  version: "4.7.95"
}, {
  name: "toy-brick-marker",
  hex: "F1289",
  version: "4.7.95"
}, {
  name: "toy-brick-marker-outline",
  hex: "F128A",
  version: "4.7.95"
}, {
  name: "toy-brick-minus",
  hex: "F128B",
  version: "4.7.95"
}, {
  name: "toy-brick-minus-outline",
  hex: "F128C",
  version: "4.7.95"
}, {
  name: "toy-brick-outline",
  hex: "F128D",
  version: "4.7.95"
}, {
  name: "toy-brick-plus",
  hex: "F128E",
  version: "4.7.95"
}, {
  name: "toy-brick-plus-outline",
  hex: "F128F",
  version: "4.7.95"
}, {
  name: "toy-brick-remove",
  hex: "F1290",
  version: "4.7.95"
}, {
  name: "toy-brick-remove-outline",
  hex: "F1291",
  version: "4.7.95"
}, {
  name: "toy-brick-search",
  hex: "F1292",
  version: "4.7.95"
}, {
  name: "toy-brick-search-outline",
  hex: "F1293",
  version: "4.7.95"
}, {
  name: "track-light",
  hex: "F0914",
  version: "2.3.50"
}, {
  name: "trackpad",
  hex: "F07F8",
  version: "2.0.46"
}, {
  name: "trackpad-lock",
  hex: "F0933",
  version: "2.3.54"
}, {
  name: "tractor",
  hex: "F0892",
  version: "2.1.99"
}, {
  name: "trademark",
  hex: "F0A78",
  version: "2.6.95"
}, {
  name: "traffic-cone",
  hex: "F137C",
  version: "4.9.95"
}, {
  name: "traffic-light",
  hex: "F052B",
  version: "1.5.54"
}, {
  name: "train",
  hex: "F052C",
  version: "1.5.54"
}, {
  name: "train-car",
  hex: "F0BD8",
  version: "3.0.39"
}, {
  name: "train-variant",
  hex: "F08C4",
  version: "2.2.43"
}, {
  name: "tram",
  hex: "F052D",
  version: "1.5.54"
}, {
  name: "tram-side",
  hex: "F0FE7",
  version: "4.0.96"
}, {
  name: "transcribe",
  hex: "F052E",
  version: "1.5.54"
}, {
  name: "transcribe-close",
  hex: "F052F",
  version: "1.5.54"
}, {
  name: "transfer",
  hex: "F1065",
  version: "4.1.95"
}, {
  name: "transfer-down",
  hex: "F0DA1",
  version: "3.4.93"
}, {
  name: "transfer-left",
  hex: "F0DA2",
  version: "3.4.93"
}, {
  name: "transfer-right",
  hex: "F0530",
  version: "1.5.54"
}, {
  name: "transfer-up",
  hex: "F0DA3",
  version: "3.4.93"
}, {
  name: "transit-connection",
  hex: "F0D3C",
  version: "3.3.92"
}, {
  name: "transit-connection-variant",
  hex: "F0D3D",
  version: "3.3.92"
}, {
  name: "transit-detour",
  hex: "F0F8B",
  version: "3.9.97"
}, {
  name: "transit-transfer",
  hex: "F06AE",
  version: "1.7.12"
}, {
  name: "transition",
  hex: "F0915",
  version: "2.3.50"
}, {
  name: "transition-masked",
  hex: "F0916",
  version: "2.3.50"
}, {
  name: "translate",
  hex: "F05CA",
  version: "1.5.54"
}, {
  name: "translate-off",
  hex: "F0E06",
  version: "3.5.94"
}, {
  name: "transmission-tower",
  hex: "F0D3E",
  version: "3.3.92"
}, {
  name: "trash-can",
  hex: "F0A79",
  version: "2.6.95"
}, {
  name: "trash-can-outline",
  hex: "F0A7A",
  version: "2.6.95"
}, {
  name: "tray",
  hex: "F1294",
  version: "4.7.95"
}, {
  name: "tray-alert",
  hex: "F1295",
  version: "4.7.95"
}, {
  name: "tray-full",
  hex: "F1296",
  version: "4.7.95"
}, {
  name: "tray-minus",
  hex: "F1297",
  version: "4.7.95"
}, {
  name: "tray-plus",
  hex: "F1298",
  version: "4.7.95"
}, {
  name: "tray-remove",
  hex: "F1299",
  version: "4.7.95"
}, {
  name: "treasure-chest",
  hex: "F0726",
  version: "1.8.36"
}, {
  name: "tree",
  hex: "F0531",
  version: "1.5.54"
}, {
  name: "tree-outline",
  hex: "F0E69",
  version: "3.6.95"
}, {
  name: "trello",
  hex: "F0532",
  version: "1.5.54"
}, {
  name: "trending-down",
  hex: "F0533",
  version: "1.5.54"
}, {
  name: "trending-neutral",
  hex: "F0534",
  version: "1.5.54"
}, {
  name: "trending-up",
  hex: "F0535",
  version: "1.5.54"
}, {
  name: "triangle",
  hex: "F0536",
  version: "1.5.54"
}, {
  name: "triangle-outline",
  hex: "F0537",
  version: "1.5.54"
}, {
  name: "triforce",
  hex: "F0BD9",
  version: "3.0.39"
}, {
  name: "trophy",
  hex: "F0538",
  version: "1.5.54"
}, {
  name: "trophy-award",
  hex: "F0539",
  version: "1.5.54"
}, {
  name: "trophy-broken",
  hex: "F0DA4",
  version: "3.4.93"
}, {
  name: "trophy-outline",
  hex: "F053A",
  version: "1.5.54"
}, {
  name: "trophy-variant",
  hex: "F053B",
  version: "1.5.54"
}, {
  name: "trophy-variant-outline",
  hex: "F053C",
  version: "1.5.54"
}, {
  name: "truck",
  hex: "F053D",
  version: "1.5.54"
}, {
  name: "truck-check",
  hex: "F0CD4",
  version: "3.2.89"
}, {
  name: "truck-check-outline",
  hex: "F129A",
  version: "4.7.95"
}, {
  name: "truck-delivery",
  hex: "F053E",
  version: "1.5.54"
}, {
  name: "truck-delivery-outline",
  hex: "F129B",
  version: "4.7.95"
}, {
  name: "truck-fast",
  hex: "F0788",
  version: "1.9.32"
}, {
  name: "truck-fast-outline",
  hex: "F129C",
  version: "4.7.95"
}, {
  name: "truck-outline",
  hex: "F129D",
  version: "4.7.95"
}, {
  name: "truck-trailer",
  hex: "F0727",
  version: "1.8.36"
}, {
  name: "trumpet",
  hex: "F1096",
  version: "4.2.95"
}, {
  name: "tshirt-crew",
  hex: "F0A7B",
  version: "2.6.95"
}, {
  name: "tshirt-crew-outline",
  hex: "F053F",
  version: "1.5.54"
}, {
  name: "tshirt-v",
  hex: "F0A7C",
  version: "2.6.95"
}, {
  name: "tshirt-v-outline",
  hex: "F0540",
  version: "1.5.54"
}, {
  name: "tumble-dryer",
  hex: "F0917",
  version: "2.3.50"
}, {
  name: "tumble-dryer-alert",
  hex: "F11BA",
  version: "4.5.95"
}, {
  name: "tumble-dryer-off",
  hex: "F11BB",
  version: "4.5.95"
}, {
  name: "tune",
  hex: "F062E",
  version: "1.6.50"
}, {
  name: "tune-vertical",
  hex: "F066A",
  version: "1.6.50"
}, {
  name: "turnstile",
  hex: "F0CD5",
  version: "3.2.89"
}, {
  name: "turnstile-outline",
  hex: "F0CD6",
  version: "3.2.89"
}, {
  name: "turtle",
  hex: "F0CD7",
  version: "3.2.89"
}, {
  name: "twitch",
  hex: "F0543",
  version: "1.5.54"
}, {
  name: "twitter",
  hex: "F0544",
  version: "1.5.54"
}, {
  name: "twitter-retweet",
  hex: "F0547",
  version: "1.5.54"
}, {
  name: "two-factor-authentication",
  hex: "F09AF",
  version: "2.4.85"
}, {
  name: "typewriter",
  hex: "F0F2D",
  version: "3.8.95"
}, {
  name: "ubisoft",
  hex: "F0BDA",
  version: "3.0.39"
}, {
  name: "ubuntu",
  hex: "F0548",
  version: "1.5.54"
}, {
  name: "ufo",
  hex: "F10C4",
  version: "4.2.95"
}, {
  name: "ufo-outline",
  hex: "F10C5",
  version: "4.2.95"
}, {
  name: "ultra-high-definition",
  hex: "F07F9",
  version: "2.0.46"
}, {
  name: "umbraco",
  hex: "F0549",
  version: "1.5.54"
}, {
  name: "umbrella",
  hex: "F054A",
  version: "1.5.54"
}, {
  name: "umbrella-closed",
  hex: "F09B0",
  version: "2.4.85"
}, {
  name: "umbrella-outline",
  hex: "F054B",
  version: "1.5.54"
}, {
  name: "undo",
  hex: "F054C",
  version: "1.5.54"
}, {
  name: "undo-variant",
  hex: "F054D",
  version: "1.5.54"
}, {
  name: "unfold-less-horizontal",
  hex: "F054E",
  version: "1.5.54"
}, {
  name: "unfold-less-vertical",
  hex: "F0760",
  version: "1.9.32"
}, {
  name: "unfold-more-horizontal",
  hex: "F054F",
  version: "1.5.54"
}, {
  name: "unfold-more-vertical",
  hex: "F0761",
  version: "1.9.32"
}, {
  name: "ungroup",
  hex: "F0550",
  version: "1.5.54"
}, {
  name: "unicode",
  hex: "F0ED0",
  version: "3.7.94"
}, {
  name: "unity",
  hex: "F06AF",
  version: "1.7.12"
}, {
  name: "unreal",
  hex: "F09B1",
  version: "2.4.85"
}, {
  name: "untappd",
  hex: "F0551",
  version: "1.5.54"
}, {
  name: "update",
  hex: "F06B0",
  version: "1.7.12"
}, {
  name: "upload",
  hex: "F0552",
  version: "1.5.54"
}, {
  name: "upload-lock",
  hex: "F1373",
  version: "4.9.95"
}, {
  name: "upload-lock-outline",
  hex: "F1374",
  version: "4.9.95"
}, {
  name: "upload-multiple",
  hex: "F083D",
  version: "2.1.19"
}, {
  name: "upload-network",
  hex: "F06F6",
  version: "1.8.36"
}, {
  name: "upload-network-outline",
  hex: "F0CD8",
  version: "3.2.89"
}, {
  name: "upload-off",
  hex: "F10C6",
  version: "4.2.95"
}, {
  name: "upload-off-outline",
  hex: "F10C7",
  version: "4.2.95"
}, {
  name: "upload-outline",
  hex: "F0E07",
  version: "3.5.94"
}, {
  name: "usb",
  hex: "F0553",
  version: "1.5.54"
}, {
  name: "usb-flash-drive",
  hex: "F129E",
  version: "4.7.95"
}, {
  name: "usb-flash-drive-outline",
  hex: "F129F",
  version: "4.7.95"
}, {
  name: "usb-port",
  hex: "F11F0",
  version: "4.5.95"
}, {
  name: "valve",
  hex: "F1066",
  version: "4.1.95"
}, {
  name: "valve-closed",
  hex: "F1067",
  version: "4.1.95"
}, {
  name: "valve-open",
  hex: "F1068",
  version: "4.1.95"
}, {
  name: "van-passenger",
  hex: "F07FA",
  version: "2.0.46"
}, {
  name: "van-utility",
  hex: "F07FB",
  version: "2.0.46"
}, {
  name: "vanish",
  hex: "F07FC",
  version: "2.0.46"
}, {
  name: "vanity-light",
  hex: "F11E1",
  version: "4.5.95"
}, {
  name: "variable",
  hex: "F0AE7",
  version: "2.7.94"
}, {
  name: "variable-box",
  hex: "F1111",
  version: "4.3.95"
}, {
  name: "vector-arrange-above",
  hex: "F0554",
  version: "1.5.54"
}, {
  name: "vector-arrange-below",
  hex: "F0555",
  version: "1.5.54"
}, {
  name: "vector-bezier",
  hex: "F0AE8",
  version: "2.7.94"
}, {
  name: "vector-circle",
  hex: "F0556",
  version: "1.5.54"
}, {
  name: "vector-circle-variant",
  hex: "F0557",
  version: "1.5.54"
}, {
  name: "vector-combine",
  hex: "F0558",
  version: "1.5.54"
}, {
  name: "vector-curve",
  hex: "F0559",
  version: "1.5.54"
}, {
  name: "vector-difference",
  hex: "F055A",
  version: "1.5.54"
}, {
  name: "vector-difference-ab",
  hex: "F055B",
  version: "1.5.54"
}, {
  name: "vector-difference-ba",
  hex: "F055C",
  version: "1.5.54"
}, {
  name: "vector-ellipse",
  hex: "F0893",
  version: "2.1.99"
}, {
  name: "vector-intersection",
  hex: "F055D",
  version: "1.5.54"
}, {
  name: "vector-line",
  hex: "F055E",
  version: "1.5.54"
}, {
  name: "vector-link",
  hex: "F0FE8",
  version: "4.0.96"
}, {
  name: "vector-point",
  hex: "F055F",
  version: "1.5.54"
}, {
  name: "vector-polygon",
  hex: "F0560",
  version: "1.5.54"
}, {
  name: "vector-polyline",
  hex: "F0561",
  version: "1.5.54"
}, {
  name: "vector-polyline-edit",
  hex: "F1225",
  version: "4.6.95"
}, {
  name: "vector-polyline-minus",
  hex: "F1226",
  version: "4.6.95"
}, {
  name: "vector-polyline-plus",
  hex: "F1227",
  version: "4.6.95"
}, {
  name: "vector-polyline-remove",
  hex: "F1228",
  version: "4.6.95"
}, {
  name: "vector-radius",
  hex: "F074A",
  version: "1.9.32"
}, {
  name: "vector-rectangle",
  hex: "F05C6",
  version: "1.5.54"
}, {
  name: "vector-selection",
  hex: "F0562",
  version: "1.5.54"
}, {
  name: "vector-square",
  hex: "F0001",
  version: "1.5.54"
}, {
  name: "vector-triangle",
  hex: "F0563",
  version: "1.5.54"
}, {
  name: "vector-union",
  hex: "F0564",
  version: "1.5.54"
}, {
  name: "vhs",
  hex: "F0A1B",
  version: "2.5.94"
}, {
  name: "vibrate",
  hex: "F0566",
  version: "1.5.54"
}, {
  name: "vibrate-off",
  hex: "F0CD9",
  version: "3.2.89"
}, {
  name: "video",
  hex: "F0567",
  version: "1.5.54"
}, {
  name: "video-3d",
  hex: "F07FD",
  version: "2.0.46"
}, {
  name: "video-3d-variant",
  hex: "F0ED1",
  version: "3.7.94"
}, {
  name: "video-4k-box",
  hex: "F083E",
  version: "2.1.19"
}, {
  name: "video-account",
  hex: "F0919",
  version: "2.3.50"
}, {
  name: "video-box",
  hex: "F00FD",
  version: "1.5.54"
}, {
  name: "video-box-off",
  hex: "F00FE",
  version: "1.5.54"
}, {
  name: "video-check",
  hex: "F1069",
  version: "4.1.95"
}, {
  name: "video-check-outline",
  hex: "F106A",
  version: "4.1.95"
}, {
  name: "video-image",
  hex: "F091A",
  version: "2.3.50"
}, {
  name: "video-input-antenna",
  hex: "F083F",
  version: "2.1.19"
}, {
  name: "video-input-component",
  hex: "F0840",
  version: "2.1.19"
}, {
  name: "video-input-hdmi",
  hex: "F0841",
  version: "2.1.19"
}, {
  name: "video-input-scart",
  hex: "F0F8C",
  version: "3.9.97"
}, {
  name: "video-input-svideo",
  hex: "F0842",
  version: "2.1.19"
}, {
  name: "video-minus",
  hex: "F09B2",
  version: "2.4.85"
}, {
  name: "video-minus-outline",
  hex: "F02BA",
  version: "1.5.54"
}, {
  name: "video-off",
  hex: "F0568",
  version: "1.5.54"
}, {
  name: "video-off-outline",
  hex: "F0BDB",
  version: "3.0.39"
}, {
  name: "video-outline",
  hex: "F0BDC",
  version: "3.0.39"
}, {
  name: "video-plus",
  hex: "F09B3",
  version: "2.4.85"
}, {
  name: "video-plus-outline",
  hex: "F01D3",
  version: "1.5.54"
}, {
  name: "video-stabilization",
  hex: "F091B",
  version: "2.3.50"
}, {
  name: "video-switch",
  hex: "F0569",
  version: "1.5.54"
}, {
  name: "video-switch-outline",
  hex: "F0790",
  version: "2.0.46"
}, {
  name: "video-vintage",
  hex: "F0A1C",
  version: "2.5.94"
}, {
  name: "video-wireless",
  hex: "F0ED2",
  version: "3.7.94"
}, {
  name: "video-wireless-outline",
  hex: "F0ED3",
  version: "3.7.94"
}, {
  name: "view-agenda",
  hex: "F056A",
  version: "1.5.54"
}, {
  name: "view-agenda-outline",
  hex: "F11D8",
  version: "4.5.95"
}, {
  name: "view-array",
  hex: "F056B",
  version: "1.5.54"
}, {
  name: "view-carousel",
  hex: "F056C",
  version: "1.5.54"
}, {
  name: "view-column",
  hex: "F056D",
  version: "1.5.54"
}, {
  name: "view-comfy",
  hex: "F0E6A",
  version: "3.6.95"
}, {
  name: "view-compact",
  hex: "F0E6B",
  version: "3.6.95"
}, {
  name: "view-compact-outline",
  hex: "F0E6C",
  version: "3.6.95"
}, {
  name: "view-dashboard",
  hex: "F056E",
  version: "1.5.54"
}, {
  name: "view-dashboard-outline",
  hex: "F0A1D",
  version: "2.5.94"
}, {
  name: "view-dashboard-variant",
  hex: "F0843",
  version: "2.1.19"
}, {
  name: "view-day",
  hex: "F056F",
  version: "1.5.54"
}, {
  name: "view-grid",
  hex: "F0570",
  version: "1.5.54"
}, {
  name: "view-grid-outline",
  hex: "F11D9",
  version: "4.5.95"
}, {
  name: "view-grid-plus",
  hex: "F0F8D",
  version: "3.9.97"
}, {
  name: "view-grid-plus-outline",
  hex: "F11DA",
  version: "4.5.95"
}, {
  name: "view-headline",
  hex: "F0571",
  version: "1.5.54"
}, {
  name: "view-list",
  hex: "F0572",
  version: "1.5.54"
}, {
  name: "view-module",
  hex: "F0573",
  version: "1.5.54"
}, {
  name: "view-parallel",
  hex: "F0728",
  version: "1.8.36"
}, {
  name: "view-quilt",
  hex: "F0574",
  version: "1.5.54"
}, {
  name: "view-sequential",
  hex: "F0729",
  version: "1.8.36"
}, {
  name: "view-split-horizontal",
  hex: "F0BCB",
  version: "3.0.39"
}, {
  name: "view-split-vertical",
  hex: "F0BCC",
  version: "3.0.39"
}, {
  name: "view-stream",
  hex: "F0575",
  version: "1.5.54"
}, {
  name: "view-week",
  hex: "F0576",
  version: "1.5.54"
}, {
  name: "vimeo",
  hex: "F0577",
  version: "1.5.54"
}, {
  name: "violin",
  hex: "F060F",
  version: "1.5.54"
}, {
  name: "virtual-reality",
  hex: "F0894",
  version: "2.1.99"
}, {
  name: "vk",
  hex: "F0579",
  version: "1.5.54"
}, {
  name: "vlc",
  hex: "F057C",
  version: "1.5.54"
}, {
  name: "voice-off",
  hex: "F0ED4",
  version: "3.7.95"
}, {
  name: "voicemail",
  hex: "F057D",
  version: "1.5.54"
}, {
  name: "volleyball",
  hex: "F09B4",
  version: "2.4.85"
}, {
  name: "volume-high",
  hex: "F057E",
  version: "1.5.54"
}, {
  name: "volume-low",
  hex: "F057F",
  version: "1.5.54"
}, {
  name: "volume-medium",
  hex: "F0580",
  version: "1.5.54"
}, {
  name: "volume-minus",
  hex: "F075E",
  version: "1.9.32"
}, {
  name: "volume-mute",
  hex: "F075F",
  version: "1.9.32"
}, {
  name: "volume-off",
  hex: "F0581",
  version: "1.5.54"
}, {
  name: "volume-plus",
  hex: "F075D",
  version: "1.9.32"
}, {
  name: "volume-source",
  hex: "F1120",
  version: "4.3.95"
}, {
  name: "volume-variant-off",
  hex: "F0E08",
  version: "3.5.94"
}, {
  name: "volume-vibrate",
  hex: "F1121",
  version: "4.3.95"
}, {
  name: "vote",
  hex: "F0A1F",
  version: "2.5.94"
}, {
  name: "vote-outline",
  hex: "F0A20",
  version: "2.5.94"
}, {
  name: "vpn",
  hex: "F0582",
  version: "1.5.54"
}, {
  name: "vuejs",
  hex: "F0844",
  version: "2.1.19"
}, {
  name: "vuetify",
  hex: "F0E6D",
  version: "3.6.95"
}, {
  name: "walk",
  hex: "F0583",
  version: "1.5.54"
}, {
  name: "wall",
  hex: "F07FE",
  version: "2.0.46"
}, {
  name: "wall-sconce",
  hex: "F091C",
  version: "2.3.50"
}, {
  name: "wall-sconce-flat",
  hex: "F091D",
  version: "2.3.50"
}, {
  name: "wall-sconce-flat-variant",
  hex: "F041C",
  version: "1.5.54"
}, {
  name: "wall-sconce-round",
  hex: "F0748",
  version: "1.9.32"
}, {
  name: "wall-sconce-round-variant",
  hex: "F091E",
  version: "2.3.50"
}, {
  name: "wallet",
  hex: "F0584",
  version: "1.5.54"
}, {
  name: "wallet-giftcard",
  hex: "F0585",
  version: "1.5.54"
}, {
  name: "wallet-membership",
  hex: "F0586",
  version: "1.5.54"
}, {
  name: "wallet-outline",
  hex: "F0BDD",
  version: "3.0.39"
}, {
  name: "wallet-plus",
  hex: "F0F8E",
  version: "3.9.97"
}, {
  name: "wallet-plus-outline",
  hex: "F0F8F",
  version: "3.9.97"
}, {
  name: "wallet-travel",
  hex: "F0587",
  version: "1.5.54"
}, {
  name: "wallpaper",
  hex: "F0E09",
  version: "3.5.94"
}, {
  name: "wan",
  hex: "F0588",
  version: "1.5.54"
}, {
  name: "wardrobe",
  hex: "F0F90",
  version: "3.9.97"
}, {
  name: "wardrobe-outline",
  hex: "F0F91",
  version: "3.9.97"
}, {
  name: "warehouse",
  hex: "F0F81",
  version: "3.9.97"
}, {
  name: "washing-machine",
  hex: "F072A",
  version: "1.8.36"
}, {
  name: "washing-machine-alert",
  hex: "F11BC",
  version: "4.5.95"
}, {
  name: "washing-machine-off",
  hex: "F11BD",
  version: "4.5.95"
}, {
  name: "watch",
  hex: "F0589",
  version: "1.5.54"
}, {
  name: "watch-export",
  hex: "F058A",
  version: "1.5.54"
}, {
  name: "watch-export-variant",
  hex: "F0895",
  version: "2.1.99"
}, {
  name: "watch-import",
  hex: "F058B",
  version: "1.5.54"
}, {
  name: "watch-import-variant",
  hex: "F0896",
  version: "2.1.99"
}, {
  name: "watch-variant",
  hex: "F0897",
  version: "2.1.99"
}, {
  name: "watch-vibrate",
  hex: "F06B1",
  version: "1.7.12"
}, {
  name: "watch-vibrate-off",
  hex: "F0CDA",
  version: "3.2.89"
}, {
  name: "water",
  hex: "F058C",
  version: "1.5.54"
}, {
  name: "water-boiler",
  hex: "F0F92",
  version: "3.9.97"
}, {
  name: "water-boiler-alert",
  hex: "F11B3",
  version: "4.5.95"
}, {
  name: "water-boiler-off",
  hex: "F11B4",
  version: "4.5.95"
}, {
  name: "water-off",
  hex: "F058D",
  version: "1.5.54"
}, {
  name: "water-outline",
  hex: "F0E0A",
  version: "3.5.94"
}, {
  name: "water-percent",
  hex: "F058E",
  version: "1.5.54"
}, {
  name: "water-polo",
  hex: "F12A0",
  version: "4.7.95"
}, {
  name: "water-pump",
  hex: "F058F",
  version: "1.5.54"
}, {
  name: "water-pump-off",
  hex: "F0F93",
  version: "3.9.97"
}, {
  name: "water-well",
  hex: "F106B",
  version: "4.1.95"
}, {
  name: "water-well-outline",
  hex: "F106C",
  version: "4.1.95"
}, {
  name: "watermark",
  hex: "F0612",
  version: "1.5.54"
}, {
  name: "wave",
  hex: "F0F2E",
  version: "3.8.95"
}, {
  name: "waves",
  hex: "F078D",
  version: "1.9.32"
}, {
  name: "waze",
  hex: "F0BDE",
  version: "3.0.39"
}, {
  name: "weather-cloudy",
  hex: "F0590",
  version: "1.5.54"
}, {
  name: "weather-cloudy-alert",
  hex: "F0F2F",
  version: "3.8.95"
}, {
  name: "weather-cloudy-arrow-right",
  hex: "F0E6E",
  version: "3.6.95"
}, {
  name: "weather-fog",
  hex: "F0591",
  version: "1.5.54"
}, {
  name: "weather-hail",
  hex: "F0592",
  version: "1.5.54"
}, {
  name: "weather-hazy",
  hex: "F0F30",
  version: "3.8.95"
}, {
  name: "weather-hurricane",
  hex: "F0898",
  version: "2.1.99"
}, {
  name: "weather-lightning",
  hex: "F0593",
  version: "1.5.54"
}, {
  name: "weather-lightning-rainy",
  hex: "F067E",
  version: "1.7.12"
}, {
  name: "weather-night",
  hex: "F0594",
  version: "1.5.54"
}, {
  name: "weather-night-partly-cloudy",
  hex: "F0F31",
  version: "3.8.95"
}, {
  name: "weather-partly-cloudy",
  hex: "F0595",
  version: "1.5.54"
}, {
  name: "weather-partly-lightning",
  hex: "F0F32",
  version: "3.8.95"
}, {
  name: "weather-partly-rainy",
  hex: "F0F33",
  version: "3.8.95"
}, {
  name: "weather-partly-snowy",
  hex: "F0F34",
  version: "3.8.95"
}, {
  name: "weather-partly-snowy-rainy",
  hex: "F0F35",
  version: "3.8.95"
}, {
  name: "weather-pouring",
  hex: "F0596",
  version: "1.5.54"
}, {
  name: "weather-rainy",
  hex: "F0597",
  version: "1.5.54"
}, {
  name: "weather-snowy",
  hex: "F0598",
  version: "1.5.54"
}, {
  name: "weather-snowy-heavy",
  hex: "F0F36",
  version: "3.8.95"
}, {
  name: "weather-snowy-rainy",
  hex: "F067F",
  version: "1.7.12"
}, {
  name: "weather-sunny",
  hex: "F0599",
  version: "1.5.54"
}, {
  name: "weather-sunny-alert",
  hex: "F0F37",
  version: "3.8.95"
}, {
  name: "weather-sunset",
  hex: "F059A",
  version: "1.5.54"
}, {
  name: "weather-sunset-down",
  hex: "F059B",
  version: "1.5.54"
}, {
  name: "weather-sunset-up",
  hex: "F059C",
  version: "1.5.54"
}, {
  name: "weather-tornado",
  hex: "F0F38",
  version: "3.8.95"
}, {
  name: "weather-windy",
  hex: "F059D",
  version: "1.5.54"
}, {
  name: "weather-windy-variant",
  hex: "F059E",
  version: "1.5.54"
}, {
  name: "web",
  hex: "F059F",
  version: "1.5.54"
}, {
  name: "web-box",
  hex: "F0F94",
  version: "3.9.97"
}, {
  name: "web-clock",
  hex: "F124A",
  version: "4.6.95"
}, {
  name: "webcam",
  hex: "F05A0",
  version: "1.5.54"
}, {
  name: "webhook",
  hex: "F062F",
  version: "1.6.50"
}, {
  name: "webpack",
  hex: "F072B",
  version: "1.8.36"
}, {
  name: "webrtc",
  hex: "F1248",
  version: "4.6.95"
}, {
  name: "wechat",
  hex: "F0611",
  version: "1.5.54"
}, {
  name: "weight",
  hex: "F05A1",
  version: "1.5.54"
}, {
  name: "weight-gram",
  hex: "F0D3F",
  version: "3.3.92"
}, {
  name: "weight-kilogram",
  hex: "F05A2",
  version: "1.5.54"
}, {
  name: "weight-lifter",
  hex: "F115D",
  version: "4.4.95"
}, {
  name: "weight-pound",
  hex: "F09B5",
  version: "2.4.85"
}, {
  name: "whatsapp",
  hex: "F05A3",
  version: "1.5.54"
}, {
  name: "wheelchair-accessibility",
  hex: "F05A4",
  version: "1.5.54"
}, {
  name: "whistle",
  hex: "F09B6",
  version: "2.4.85"
}, {
  name: "whistle-outline",
  hex: "F12BC",
  version: "4.8.95"
}, {
  name: "white-balance-auto",
  hex: "F05A5",
  version: "1.5.54"
}, {
  name: "white-balance-incandescent",
  hex: "F05A6",
  version: "1.5.54"
}, {
  name: "white-balance-iridescent",
  hex: "F05A7",
  version: "1.5.54"
}, {
  name: "white-balance-sunny",
  hex: "F05A8",
  version: "1.5.54"
}, {
  name: "widgets",
  hex: "F072C",
  version: "1.8.36"
}, {
  name: "widgets-outline",
  hex: "F1355",
  version: "4.9.95"
}, {
  name: "wifi",
  hex: "F05A9",
  version: "1.5.54"
}, {
  name: "wifi-off",
  hex: "F05AA",
  version: "1.5.54"
}, {
  name: "wifi-star",
  hex: "F0E0B",
  version: "3.5.94"
}, {
  name: "wifi-strength-1",
  hex: "F091F",
  version: "2.3.50"
}, {
  name: "wifi-strength-1-alert",
  hex: "F0920",
  version: "2.3.50"
}, {
  name: "wifi-strength-1-lock",
  hex: "F0921",
  version: "2.3.50"
}, {
  name: "wifi-strength-2",
  hex: "F0922",
  version: "2.3.50"
}, {
  name: "wifi-strength-2-alert",
  hex: "F0923",
  version: "2.3.50"
}, {
  name: "wifi-strength-2-lock",
  hex: "F0924",
  version: "2.3.50"
}, {
  name: "wifi-strength-3",
  hex: "F0925",
  version: "2.3.50"
}, {
  name: "wifi-strength-3-alert",
  hex: "F0926",
  version: "2.3.50"
}, {
  name: "wifi-strength-3-lock",
  hex: "F0927",
  version: "2.3.50"
}, {
  name: "wifi-strength-4",
  hex: "F0928",
  version: "2.3.50"
}, {
  name: "wifi-strength-4-alert",
  hex: "F0929",
  version: "2.3.50"
}, {
  name: "wifi-strength-4-lock",
  hex: "F092A",
  version: "2.3.50"
}, {
  name: "wifi-strength-alert-outline",
  hex: "F092B",
  version: "2.3.50"
}, {
  name: "wifi-strength-lock-outline",
  hex: "F092C",
  version: "2.3.50"
}, {
  name: "wifi-strength-off",
  hex: "F092D",
  version: "2.3.50"
}, {
  name: "wifi-strength-off-outline",
  hex: "F092E",
  version: "2.3.50"
}, {
  name: "wifi-strength-outline",
  hex: "F092F",
  version: "2.3.50"
}, {
  name: "wikipedia",
  hex: "F05AC",
  version: "1.5.54"
}, {
  name: "wind-turbine",
  hex: "F0DA5",
  version: "3.4.93"
}, {
  name: "window-close",
  hex: "F05AD",
  version: "1.5.54"
}, {
  name: "window-closed",
  hex: "F05AE",
  version: "1.5.54"
}, {
  name: "window-closed-variant",
  hex: "F11DB",
  version: "4.5.95"
}, {
  name: "window-maximize",
  hex: "F05AF",
  version: "1.5.54"
}, {
  name: "window-minimize",
  hex: "F05B0",
  version: "1.5.54"
}, {
  name: "window-open",
  hex: "F05B1",
  version: "1.5.54"
}, {
  name: "window-open-variant",
  hex: "F11DC",
  version: "4.5.95"
}, {
  name: "window-restore",
  hex: "F05B2",
  version: "1.5.54"
}, {
  name: "window-shutter",
  hex: "F111C",
  version: "4.3.95"
}, {
  name: "window-shutter-alert",
  hex: "F111D",
  version: "4.3.95"
}, {
  name: "window-shutter-open",
  hex: "F111E",
  version: "4.3.95"
}, {
  name: "wiper",
  hex: "F0AE9",
  version: "2.7.94"
}, {
  name: "wiper-wash",
  hex: "F0DA6",
  version: "3.4.93"
}, {
  name: "wordpress",
  hex: "F05B4",
  version: "1.5.54"
}, {
  name: "wrap",
  hex: "F05B6",
  version: "1.5.54"
}, {
  name: "wrap-disabled",
  hex: "F0BDF",
  version: "3.0.39"
}, {
  name: "wrench",
  hex: "F05B7",
  version: "1.5.54"
}, {
  name: "wrench-outline",
  hex: "F0BE0",
  version: "3.0.39"
}, {
  name: "xamarin",
  hex: "F0845",
  version: "2.1.19"
}, {
  name: "xamarin-outline",
  hex: "F0846",
  version: "2.1.19"
}, {
  name: "xing",
  hex: "F05BE",
  version: "1.5.54"
}, {
  name: "xml",
  hex: "F05C0",
  version: "1.5.54"
}, {
  name: "xmpp",
  hex: "F07FF",
  version: "2.0.46"
}, {
  name: "y-combinator",
  hex: "F0624",
  version: "1.6.50"
}, {
  name: "yahoo",
  hex: "F0B4F",
  version: "2.8.94"
}, {
  name: "yeast",
  hex: "F05C1",
  version: "1.5.54"
}, {
  name: "yin-yang",
  hex: "F0680",
  version: "1.7.12"
}, {
  name: "yoga",
  hex: "F117C",
  version: "4.4.95"
}, {
  name: "youtube",
  hex: "F05C3",
  version: "1.5.54"
}, {
  name: "youtube-gaming",
  hex: "F0848",
  version: "2.1.19"
}, {
  name: "youtube-studio",
  hex: "F0847",
  version: "2.1.19"
}, {
  name: "youtube-subscription",
  hex: "F0D40",
  version: "3.3.92"
}, {
  name: "youtube-tv",
  hex: "F0448",
  version: "1.5.54"
}, {
  name: "z-wave",
  hex: "F0AEA",
  version: "2.7.94"
}, {
  name: "zend",
  hex: "F0AEB",
  version: "2.7.94"
}, {
  name: "zigbee",
  hex: "F0D41",
  version: "3.3.92"
}, {
  name: "zip-box",
  hex: "F05C4",
  version: "1.5.54"
}, {
  name: "zip-box-outline",
  hex: "F0FFA",
  version: "4.0.96"
}, {
  name: "zip-disk",
  hex: "F0A23",
  version: "2.5.94"
}, {
  name: "zodiac-aquarius",
  hex: "F0A7D",
  version: "2.6.95"
}, {
  name: "zodiac-aries",
  hex: "F0A7E",
  version: "2.6.95"
}, {
  name: "zodiac-cancer",
  hex: "F0A7F",
  version: "2.6.95"
}, {
  name: "zodiac-capricorn",
  hex: "F0A80",
  version: "2.6.95"
}, {
  name: "zodiac-gemini",
  hex: "F0A81",
  version: "2.6.95"
}, {
  name: "zodiac-leo",
  hex: "F0A82",
  version: "2.6.95"
}, {
  name: "zodiac-libra",
  hex: "F0A83",
  version: "2.6.95"
}, {
  name: "zodiac-pisces",
  hex: "F0A84",
  version: "2.6.95"
}, {
  name: "zodiac-sagittarius",
  hex: "F0A85",
  version: "2.6.95"
}, {
  name: "zodiac-scorpio",
  hex: "F0A86",
  version: "2.6.95"
}, {
  name: "zodiac-taurus",
  hex: "F0A87",
  version: "2.6.95"
}, {
  name: "zodiac-virgo",
  hex: "F0A88",
  version: "2.6.95"
}];


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Page-header.vue?vue&type=style&index=0&id=7182f8f0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Page-header.vue?vue&type=style&index=0&id=7182f8f0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.page-title-box {\n    margin: 0 !important;\n    padding: 0 !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=style&index=0&id=7397033b&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=style&index=0&id=7397033b&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.container-fluid {\n    padding: unset;\n    margin: unset;\n}\n.content-page {\n    padding: 70px 0 65px !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/assets/images/logo-dark.png":
/*!**************************************************!*\
  !*** ./resources/js/assets/images/logo-dark.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/logo-dark.png?f85dba6d884d32a2f6b6c5404bb19748";

/***/ }),

/***/ "./resources/js/assets/images/logo-light.png":
/*!***************************************************!*\
  !*** ./resources/js/assets/images/logo-light.png ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/images/logo-light.png?3f7305d328f1b7c3f96726eaf20a45d3";

/***/ }),

/***/ "./resources/js/assets/images/logo-sm-dark.png":
/*!*****************************************************!*\
  !*** ./resources/js/assets/images/logo-sm-dark.png ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/logo-sm-dark.png?3acb546899038322f9b0bf5fc0f038ba";

/***/ }),

/***/ "./resources/js/assets/images/logo-sm.png":
/*!************************************************!*\
  !*** ./resources/js/assets/images/logo-sm.png ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/logo-sm.png?d0b4aaf8358a778085086603d32d666e";

/***/ }),

/***/ "./resources/js/assets/images/users/avatar-1.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/assets/images/users/avatar-1.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/avatar-1.jpg?cefbe3d21660cf096fd067ef2dc5b773";

/***/ }),

/***/ "./resources/js/assets/images/users/avatar-10.jpg":
/*!********************************************************!*\
  !*** ./resources/js/assets/images/users/avatar-10.jpg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/avatar-10.jpg?36fcf292e489198725b24e95176ced89";

/***/ }),

/***/ "./resources/js/assets/images/users/avatar-2.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/assets/images/users/avatar-2.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/avatar-2.jpg?d8247dbf6a9e498e033f445ef6992b64";

/***/ }),

/***/ "./resources/js/assets/images/users/avatar-4.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/assets/images/users/avatar-4.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/avatar-4.jpg?a2e1eb529e4e11f36fb1765321c57ec0";

/***/ }),

/***/ "./resources/js/assets/images/users/avatar-5.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/assets/images/users/avatar-5.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/avatar-5.jpg?59af67849fd28e58abe9dfc634772192";

/***/ }),

/***/ "./resources/js/assets/images/users/avatar-6.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/assets/images/users/avatar-6.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/avatar-6.jpg?d98a113b0a21674ffd70a754735b7ecc";

/***/ }),

/***/ "./resources/js/assets/images/users/avatar-7.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/assets/images/users/avatar-7.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/avatar-7.jpg?3fec102cae56f3caa3f62758767a5763";

/***/ }),

/***/ "./resources/js/assets/images/users/avatar-8.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/assets/images/users/avatar-8.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/avatar-8.jpg?40b8158c02ea476b9c54cac14387b8cb";

/***/ }),

/***/ "./resources/js/assets/images/users/avatar-9.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/assets/images/users/avatar-9.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/avatar-9.jpg?effcd89f3d82672513777065799fcfec";

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Page-header.vue?vue&type=style&index=0&id=7182f8f0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Page-header.vue?vue&type=style&index=0&id=7182f8f0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_header_vue_vue_type_style_index_0_id_7182f8f0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Page-header.vue?vue&type=style&index=0&id=7182f8f0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Page-header.vue?vue&type=style&index=0&id=7182f8f0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_header_vue_vue_type_style_index_0_id_7182f8f0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_header_vue_vue_type_style_index_0_id_7182f8f0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=style&index=0&id=7397033b&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=style&index=0&id=7397033b&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vertical_vue_vue_type_style_index_0_id_7397033b_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vertical.vue?vue&type=style&index=0&id=7397033b&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=style&index=0&id=7397033b&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vertical_vue_vue_type_style_index_0_id_7397033b_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vertical_vue_vue_type_style_index_0_id_7397033b_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Footer.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Footer.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=61a7c374& */ "./resources/js/components/Footer.vue?vue&type=template&id=61a7c374&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/components/Footer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__.render,
  _Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Footer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Horizontal-navbar.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Horizontal-navbar.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Horizontal_navbar_vue_vue_type_template_id_cea5fb04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Horizontal-navbar.vue?vue&type=template&id=cea5fb04& */ "./resources/js/components/Horizontal-navbar.vue?vue&type=template&id=cea5fb04&");
/* harmony import */ var _Horizontal_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Horizontal-navbar.vue?vue&type=script&lang=js& */ "./resources/js/components/Horizontal-navbar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Horizontal_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Horizontal_navbar_vue_vue_type_template_id_cea5fb04___WEBPACK_IMPORTED_MODULE_0__.render,
  _Horizontal_navbar_vue_vue_type_template_id_cea5fb04___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Horizontal-navbar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Page-header.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Page-header.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Page_header_vue_vue_type_template_id_7182f8f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page-header.vue?vue&type=template&id=7182f8f0& */ "./resources/js/components/Page-header.vue?vue&type=template&id=7182f8f0&");
/* harmony import */ var _Page_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page-header.vue?vue&type=script&lang=js& */ "./resources/js/components/Page-header.vue?vue&type=script&lang=js&");
/* harmony import */ var _Page_header_vue_vue_type_style_index_0_id_7182f8f0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page-header.vue?vue&type=style&index=0&id=7182f8f0&lang=css& */ "./resources/js/components/Page-header.vue?vue&type=style&index=0&id=7182f8f0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Page_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Page_header_vue_vue_type_template_id_7182f8f0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Page_header_vue_vue_type_template_id_7182f8f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Page-header.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Rightbar.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Rightbar.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Rightbar_vue_vue_type_template_id_1c913662___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rightbar.vue?vue&type=template&id=1c913662& */ "./resources/js/components/Rightbar.vue?vue&type=template&id=1c913662&");
/* harmony import */ var _Rightbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rightbar.vue?vue&type=script&lang=js& */ "./resources/js/components/Rightbar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Rightbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Rightbar_vue_vue_type_template_id_1c913662___WEBPACK_IMPORTED_MODULE_0__.render,
  _Rightbar_vue_vue_type_template_id_1c913662___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Rightbar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Sidebar.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Sidebar.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=81fbb27e& */ "./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/js/components/Sidebar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Sidebar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Topbar.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Topbar.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Topbar_vue_vue_type_template_id_57e4246e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Topbar.vue?vue&type=template&id=57e4246e& */ "./resources/js/components/Topbar.vue?vue&type=template&id=57e4246e&");
/* harmony import */ var _Topbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Topbar.vue?vue&type=script&lang=js& */ "./resources/js/components/Topbar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Topbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Topbar_vue_vue_type_template_id_57e4246e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Topbar_vue_vue_type_template_id_57e4246e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Topbar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Two-column-sidebar.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Two-column-sidebar.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Two_column_sidebar_vue_vue_type_template_id_174b4c31___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Two-column-sidebar.vue?vue&type=template&id=174b4c31& */ "./resources/js/components/Two-column-sidebar.vue?vue&type=template&id=174b4c31&");
/* harmony import */ var _Two_column_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Two-column-sidebar.vue?vue&type=script&lang=js& */ "./resources/js/components/Two-column-sidebar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Two_column_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Two_column_sidebar_vue_vue_type_template_id_174b4c31___WEBPACK_IMPORTED_MODULE_0__.render,
  _Two_column_sidebar_vue_vue_type_template_id_174b4c31___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Two-column-sidebar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/detached.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/layouts/detached.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _detached_vue_vue_type_template_id_7032c937___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detached.vue?vue&type=template&id=7032c937& */ "./resources/js/views/layouts/detached.vue?vue&type=template&id=7032c937&");
/* harmony import */ var _detached_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detached.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/detached.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detached_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detached_vue_vue_type_template_id_7032c937___WEBPACK_IMPORTED_MODULE_0__.render,
  _detached_vue_vue_type_template_id_7032c937___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/detached.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/horizontal.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/layouts/horizontal.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _horizontal_vue_vue_type_template_id_29c46cae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horizontal.vue?vue&type=template&id=29c46cae& */ "./resources/js/views/layouts/horizontal.vue?vue&type=template&id=29c46cae&");
/* harmony import */ var _horizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horizontal.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/horizontal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _horizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _horizontal_vue_vue_type_template_id_29c46cae___WEBPACK_IMPORTED_MODULE_0__.render,
  _horizontal_vue_vue_type_template_id_29c46cae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/horizontal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/main.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/layouts/main.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_vue_vue_type_template_id_de3c3304___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=de3c3304& */ "./resources/js/views/layouts/main.vue?vue&type=template&id=de3c3304&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/main.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_de3c3304___WEBPACK_IMPORTED_MODULE_0__.render,
  _main_vue_vue_type_template_id_de3c3304___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/main.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/two-column.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/layouts/two-column.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _two_column_vue_vue_type_template_id_ffe4ac08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./two-column.vue?vue&type=template&id=ffe4ac08& */ "./resources/js/views/layouts/two-column.vue?vue&type=template&id=ffe4ac08&");
/* harmony import */ var _two_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./two-column.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/two-column.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _two_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _two_column_vue_vue_type_template_id_ffe4ac08___WEBPACK_IMPORTED_MODULE_0__.render,
  _two_column_vue_vue_type_template_id_ffe4ac08___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/two-column.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/vertical.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/layouts/vertical.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vertical_vue_vue_type_template_id_7397033b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vertical.vue?vue&type=template&id=7397033b& */ "./resources/js/views/layouts/vertical.vue?vue&type=template&id=7397033b&");
/* harmony import */ var _vertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertical.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/vertical.vue?vue&type=script&lang=js&");
/* harmony import */ var _vertical_vue_vue_type_style_index_0_id_7397033b_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vertical.vue?vue&type=style&index=0&id=7397033b&lang=css& */ "./resources/js/views/layouts/vertical.vue?vue&type=style&index=0&id=7397033b&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _vertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vertical_vue_vue_type_template_id_7397033b___WEBPACK_IMPORTED_MODULE_0__.render,
  _vertical_vue_vue_type_template_id_7397033b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/vertical.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/icons/mdi.vue":
/*!************************************************!*\
  !*** ./resources/js/views/pages/icons/mdi.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mdi_vue_vue_type_template_id_36bb8303___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mdi.vue?vue&type=template&id=36bb8303& */ "./resources/js/views/pages/icons/mdi.vue?vue&type=template&id=36bb8303&");
/* harmony import */ var _mdi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdi.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/icons/mdi.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _mdi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mdi_vue_vue_type_template_id_36bb8303___WEBPACK_IMPORTED_MODULE_0__.render,
  _mdi_vue_vue_type_template_id_36bb8303___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/icons/mdi.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Footer.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Footer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Footer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Horizontal-navbar.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Horizontal-navbar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Horizontal_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Horizontal-navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Horizontal-navbar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Horizontal_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Page-header.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Page-header.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Page-header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Page-header.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Rightbar.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Rightbar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rightbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Rightbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Rightbar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rightbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Sidebar.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Sidebar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Topbar.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Topbar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Topbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Topbar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Two-column-sidebar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Two-column-sidebar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Two_column_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Two-column-sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Two-column-sidebar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Two_column_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/detached.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/layouts/detached.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detached_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detached.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/detached.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detached_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/horizontal.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/layouts/horizontal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_horizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./horizontal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/horizontal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_horizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/main.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/layouts/main.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/main.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/two-column.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/layouts/two-column.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_two_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./two-column.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/two-column.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_two_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/vertical.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/layouts/vertical.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vertical.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/icons/mdi.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/pages/icons/mdi.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mdi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./mdi.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/icons/mdi.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mdi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Footer.vue?vue&type=template&id=61a7c374&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Footer.vue?vue&type=template&id=61a7c374& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_61a7c374___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=template&id=61a7c374& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Footer.vue?vue&type=template&id=61a7c374&");


/***/ }),

/***/ "./resources/js/components/Horizontal-navbar.vue?vue&type=template&id=cea5fb04&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Horizontal-navbar.vue?vue&type=template&id=cea5fb04& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Horizontal_navbar_vue_vue_type_template_id_cea5fb04___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Horizontal_navbar_vue_vue_type_template_id_cea5fb04___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Horizontal_navbar_vue_vue_type_template_id_cea5fb04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Horizontal-navbar.vue?vue&type=template&id=cea5fb04& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Horizontal-navbar.vue?vue&type=template&id=cea5fb04&");


/***/ }),

/***/ "./resources/js/components/Page-header.vue?vue&type=template&id=7182f8f0&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Page-header.vue?vue&type=template&id=7182f8f0& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_header_vue_vue_type_template_id_7182f8f0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_header_vue_vue_type_template_id_7182f8f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_header_vue_vue_type_template_id_7182f8f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Page-header.vue?vue&type=template&id=7182f8f0& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Page-header.vue?vue&type=template&id=7182f8f0&");


/***/ }),

/***/ "./resources/js/components/Rightbar.vue?vue&type=template&id=1c913662&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Rightbar.vue?vue&type=template&id=1c913662& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Rightbar_vue_vue_type_template_id_1c913662___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Rightbar_vue_vue_type_template_id_1c913662___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Rightbar_vue_vue_type_template_id_1c913662___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Rightbar.vue?vue&type=template&id=1c913662& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Rightbar.vue?vue&type=template&id=1c913662&");


/***/ }),

/***/ "./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=template&id=81fbb27e& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&");


/***/ }),

/***/ "./resources/js/components/Topbar.vue?vue&type=template&id=57e4246e&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Topbar.vue?vue&type=template&id=57e4246e& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_template_id_57e4246e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_template_id_57e4246e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_template_id_57e4246e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Topbar.vue?vue&type=template&id=57e4246e& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Topbar.vue?vue&type=template&id=57e4246e&");


/***/ }),

/***/ "./resources/js/components/Two-column-sidebar.vue?vue&type=template&id=174b4c31&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Two-column-sidebar.vue?vue&type=template&id=174b4c31& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Two_column_sidebar_vue_vue_type_template_id_174b4c31___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Two_column_sidebar_vue_vue_type_template_id_174b4c31___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Two_column_sidebar_vue_vue_type_template_id_174b4c31___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Two-column-sidebar.vue?vue&type=template&id=174b4c31& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Two-column-sidebar.vue?vue&type=template&id=174b4c31&");


/***/ }),

/***/ "./resources/js/views/layouts/detached.vue?vue&type=template&id=7032c937&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/layouts/detached.vue?vue&type=template&id=7032c937& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detached_vue_vue_type_template_id_7032c937___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detached_vue_vue_type_template_id_7032c937___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detached_vue_vue_type_template_id_7032c937___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detached.vue?vue&type=template&id=7032c937& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/detached.vue?vue&type=template&id=7032c937&");


/***/ }),

/***/ "./resources/js/views/layouts/horizontal.vue?vue&type=template&id=29c46cae&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/layouts/horizontal.vue?vue&type=template&id=29c46cae& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_horizontal_vue_vue_type_template_id_29c46cae___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_horizontal_vue_vue_type_template_id_29c46cae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_horizontal_vue_vue_type_template_id_29c46cae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./horizontal.vue?vue&type=template&id=29c46cae& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/horizontal.vue?vue&type=template&id=29c46cae&");


/***/ }),

/***/ "./resources/js/views/layouts/main.vue?vue&type=template&id=de3c3304&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/layouts/main.vue?vue&type=template&id=de3c3304& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_de3c3304___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_de3c3304___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_de3c3304___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./main.vue?vue&type=template&id=de3c3304& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/main.vue?vue&type=template&id=de3c3304&");


/***/ }),

/***/ "./resources/js/views/layouts/two-column.vue?vue&type=template&id=ffe4ac08&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/layouts/two-column.vue?vue&type=template&id=ffe4ac08& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_two_column_vue_vue_type_template_id_ffe4ac08___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_two_column_vue_vue_type_template_id_ffe4ac08___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_two_column_vue_vue_type_template_id_ffe4ac08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./two-column.vue?vue&type=template&id=ffe4ac08& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/two-column.vue?vue&type=template&id=ffe4ac08&");


/***/ }),

/***/ "./resources/js/views/layouts/vertical.vue?vue&type=template&id=7397033b&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/layouts/vertical.vue?vue&type=template&id=7397033b& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vertical_vue_vue_type_template_id_7397033b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vertical_vue_vue_type_template_id_7397033b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vertical_vue_vue_type_template_id_7397033b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vertical.vue?vue&type=template&id=7397033b& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=template&id=7397033b&");


/***/ }),

/***/ "./resources/js/views/pages/icons/mdi.vue?vue&type=template&id=36bb8303&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/pages/icons/mdi.vue?vue&type=template&id=36bb8303& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mdi_vue_vue_type_template_id_36bb8303___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mdi_vue_vue_type_template_id_36bb8303___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mdi_vue_vue_type_template_id_36bb8303___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./mdi.vue?vue&type=template&id=36bb8303& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/icons/mdi.vue?vue&type=template&id=36bb8303&");


/***/ }),

/***/ "./resources/js/components/Page-header.vue?vue&type=style&index=0&id=7182f8f0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Page-header.vue?vue&type=style&index=0&id=7182f8f0&lang=css& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_header_vue_vue_type_style_index_0_id_7182f8f0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Page-header.vue?vue&type=style&index=0&id=7182f8f0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Page-header.vue?vue&type=style&index=0&id=7182f8f0&lang=css&");


/***/ }),

/***/ "./resources/js/views/layouts/vertical.vue?vue&type=style&index=0&id=7397033b&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/layouts/vertical.vue?vue&type=style&index=0&id=7397033b&lang=css& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vertical_vue_vue_type_style_index_0_id_7397033b_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vertical.vue?vue&type=style&index=0&id=7397033b&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/vertical.vue?vue&type=style&index=0&id=7397033b&lang=css&");


/***/ })

}]);