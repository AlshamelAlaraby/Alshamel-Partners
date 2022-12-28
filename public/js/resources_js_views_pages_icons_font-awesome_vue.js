(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_icons_font-awesome_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/icons/font-awesome.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/icons/font-awesome.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/views/layouts/main.vue");
/* harmony import */ var _components_Page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Page-header */ "./resources/js/components/Page-header.vue");
/* harmony import */ var _data_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-fontawesome */ "./resources/js/views/pages/icons/data-fontawesome.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




/**
 * Font Awesome Icons Component
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  page: {
    title: "Font Awesome Icons",
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
      title: "Font Awesome Icons",
      items: [{
        text: "Minton",
        href: "/"
      }, {
        text: "Icons",
        href: "/"
      }, {
        text: "Font Awesome",
        active: true
      }],
      icons: _data_fontawesome__WEBPACK_IMPORTED_MODULE_2__.icons,
      solid: "",
      regular: "",
      brand: ""
    };
  },
  mounted: function mounted() {
    var _iterator = _createForOfIteratorHelper(_data_fontawesome__WEBPACK_IMPORTED_MODULE_2__.icons),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var entry = _step.value;
        if (entry.attributes.membership.free.length) {
          var _iterator2 = _createForOfIteratorHelper(entry.attributes.membership.free),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var value = _step2.value;
              switch (value) {
                case "brands":
                  this.brand += '<div class="col-xl-3 col-lg-4 col-sm-6">\
                          <i class="fab fa-' + entry.id + '"></i> fab fa-' + entry.id + "\
                      </div>";
                  break;
                case "solid":
                  this.solid += '<div class="col-xl-3 col-lg-4 col-sm-6">\
                    <i class="fas fa-' + entry.id + '"></i> fas fa-' + entry.id + "\
                </div>";
                  break;
                default:
                  this.regular += '<div class="col-xl-3 col-lg-4 col-sm-6">\
                          <i class="far fa-' + entry.id + '"></i> far fa-' + entry.id + "\
                      </div>";
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    document.getElementById("solid").innerHTML = this.solid;
    document.getElementById("brand").innerHTML = this.brand;
    document.getElementById("regular").innerHTML = this.regular;
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
    staticClass: "col-md-6 color"
  }, [_vm._v("\r\n                " + _vm._s(new Date().getFullYear()) + " © Al Shamel Al Araby\r\n            ")]), _vm._v(" "), _vm._m(0)])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-6"
  }, [_c("div", {
    staticClass: "text-md-right footer-links d-none d-sm-block"
  }, [_c("a", {
    staticClass: "color",
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_vm._v("About Us")]), _vm._v(" "), _c("a", {
    staticClass: "color",
    attrs: {
      href: "javascript:void(0);"
    }
  }, [_vm._v("Help")]), _vm._v(" "), _c("a", {
    staticClass: "color",
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
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
      src: "/images/shamel-logo-006.png",
      alt: "",
      height: "24"
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "logo-lg"
  }, [_c("img", {
    attrs: {
      src: "/images/shamel-logo-006.png",
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
      src: "/images/shamel-logo-006.png",
      alt: "",
      height: "24"
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "logo-lg"
  }, [_c("img", {
    attrs: {
      src: "/images/shamel-logo-006.png",
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
    }, [_vm._v("\n            " + _vm._s(_vm.$t(item.label)) + "\n          ")]) : _vm._e(), _vm._v(" "), !item.isTitle && !item.isLayout ? _c("li", {
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
      }, [_vm._v(_vm._s(_vm.$t(subitem.label)) + "\n                    "), _c("span", {
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
  }, [_vm._v("\n              " + _vm._s(_vm.$i18n.locale ? _vm.$store.getters["auth/partner"].name : _vm.$store.getters["auth/partner"].name_e) + "\n              "), _c("i", {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/icons/font-awesome.vue?vue&type=template&id=22421564&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/icons/font-awesome.vue?vue&type=template&id=22421564& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "header-title"
  }, [_vm._v("Solid")]), _vm._v(" "), _c("p", {
    staticClass: "sub-header"
  }, [_vm._v("\n            Use "), _c("code", [_vm._v('<i class="fas fa-ad"></i>')]), _vm._v(" "), _c("span", {
    staticClass: "badge badge-success"
  }, [_vm._v("v 5.13.0")]), _vm._v(".\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "row icons-list-demo",
    attrs: {
      id: "solid"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "header-title"
  }, [_vm._v("Regular")]), _vm._v(" "), _c("p", {
    staticClass: "sub-header"
  }, [_vm._v("\n            Use "), _c("code", [_vm._v('<i class="far fa-address-book"></i>')]), _vm._v(" "), _c("span", {
    staticClass: "badge badge-success"
  }, [_vm._v("v 5.13.0")]), _vm._v(".\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "row icons-list-demo",
    attrs: {
      id: "regular"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", {
    staticClass: "header-title"
  }, [_vm._v("Brands")]), _vm._v(" "), _c("p", {
    staticClass: "sub-header"
  }, [_vm._v("\n            Use "), _c("code", [_vm._v('<i class="fab fa-500px"></i>')]), _vm._v(" "), _c("span", {
    staticClass: "badge badge-success"
  }, [_vm._v("v 5.13.0")]), _vm._v(".\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "row icons-list-demo",
    attrs: {
      id: "brand"
    }
  })])])])])], 1);
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
  id: 100032,
  label: 'menuitems.company.text',
  icon: 'fas fa-city',
  link: '/company'
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
  id: 113872,
  label: "general.Properties",
  icon: "fas fa-hand-spock",
  isMenuCollapsed: false,
  subItems: [{
    id: 225,
    label: 'general.ScreenProperties',
    link: '/screen-properties'
  }, {
    id: 226,
    label: 'general.TreeProperty',
    link: '/tree-properties'
  }]
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
  id: 1000548,
  label: "menuitems.Banks.text",
  icon: "fas fa-piggy-bank",
  isMenuCollapsed: false,
  subItems: [{
    id: 112201,
    label: 'general.paymentTypes',
    link: '/paymentTypes'
  }, {
    id: 222,
    label: 'menuitems.Banks.text',
    link: '/banks'
  }, {
    id: 112202,
    label: 'general.bankAccounts',
    link: '/bankAccount'
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
  }, {
    id: 100043,
    label: 'menuitems.dashboard.list.roleWorkflow',
    link: '/role-workflow'
  }, {
    id: 100088,
    label: 'menuitems.dashboard.list.roleWorkflowButton',
    link: '/role-workflow-button'
  }, {
    id: 100134,
    label: 'menuitems.dashboard.list.RoleHotfieldScreen',
    link: '/role-hotfield-screen'
  }]
}, {
  id: 224,
  label: 'general.Workflowhotfields',
  icon: 'fas fa-hot-tub',
  link: '/workflow-hotfields'
}, {
  id: 223,
  label: 'general.Users',
  icon: 'fas fa-network-wired',
  link: '/users'
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

/***/ "./resources/js/views/pages/icons/data-fontawesome.js":
/*!************************************************************!*\
  !*** ./resources/js/views/pages/icons/data-fontawesome.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "icons": () => (/* binding */ icons)
/* harmony export */ });
var icons=[{"attributes":{"id":"500px","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f26e","voted":false},"id":"500px","links":{"self":"/api/icons/500px"},"type":"icon"},{"attributes":{"id":"abacus","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f640","voted":false},"id":"abacus","links":{"self":"/api/icons/abacus"},"type":"icon"},{"attributes":{"id":"accessible-icon","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f368","voted":false},"id":"accessible-icon","links":{"self":"/api/icons/accessible-icon"},"type":"icon"},{"attributes":{"id":"accusoft","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f369","voted":false},"id":"accusoft","links":{"self":"/api/icons/accusoft"},"type":"icon"},{"attributes":{"id":"acorn","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6ae","voted":false},"id":"acorn","links":{"self":"/api/icons/acorn"},"type":"icon"},{"attributes":{"id":"acquisitions-incorporated","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f6af","voted":false},"id":"acquisitions-incorporated","links":{"self":"/api/icons/acquisitions-incorporated"},"type":"icon"},{"attributes":{"id":"ad","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f641","voted":false},"id":"ad","links":{"self":"/api/icons/ad"},"type":"icon"},{"attributes":{"id":"address-book","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2b9","voted":false},"id":"address-book","links":{"self":"/api/icons/address-book"},"type":"icon"},{"attributes":{"id":"address-card","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2bb","voted":false},"id":"address-card","links":{"self":"/api/icons/address-card"},"type":"icon"},{"attributes":{"id":"adjust","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f042","voted":false},"id":"adjust","links":{"self":"/api/icons/adjust"},"type":"icon"},{"attributes":{"id":"adn","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f170","voted":false},"id":"adn","links":{"self":"/api/icons/adn"},"type":"icon"},{"attributes":{"id":"adobe","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f778","voted":false},"id":"adobe","links":{"self":"/api/icons/adobe"},"type":"icon"},{"attributes":{"id":"adversal","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f36a","voted":false},"id":"adversal","links":{"self":"/api/icons/adversal"},"type":"icon"},{"attributes":{"id":"affiliatetheme","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f36b","voted":false},"id":"affiliatetheme","links":{"self":"/api/icons/affiliatetheme"},"type":"icon"},{"attributes":{"id":"air-conditioner","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8f4","voted":false},"id":"air-conditioner","links":{"self":"/api/icons/air-conditioner"},"type":"icon"},{"attributes":{"id":"air-freshener","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5d0","voted":false},"id":"air-freshener","links":{"self":"/api/icons/air-freshener"},"type":"icon"},{"attributes":{"id":"airbnb","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f834","voted":false},"id":"airbnb","links":{"self":"/api/icons/airbnb"},"type":"icon"},{"attributes":{"id":"alarm-clock","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f34e","voted":false},"id":"alarm-clock","links":{"self":"/api/icons/alarm-clock"},"type":"icon"},{"attributes":{"id":"alarm-exclamation","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f843","voted":false},"id":"alarm-exclamation","links":{"self":"/api/icons/alarm-exclamation"},"type":"icon"},{"attributes":{"id":"alarm-plus","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f844","voted":false},"id":"alarm-plus","links":{"self":"/api/icons/alarm-plus"},"type":"icon"},{"attributes":{"id":"alarm-snooze","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f845","voted":true},"id":"alarm-snooze","links":{"self":"/api/icons/alarm-snooze"},"type":"icon"},{"attributes":{"id":"album","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f89f","voted":true},"id":"album","links":{"self":"/api/icons/album"},"type":"icon"},{"attributes":{"id":"album-collection","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8a0","voted":false},"id":"album-collection","links":{"self":"/api/icons/album-collection"},"type":"icon"},{"attributes":{"id":"algolia","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f36c","voted":false},"id":"algolia","links":{"self":"/api/icons/algolia"},"type":"icon"},{"attributes":{"id":"alicorn","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6b0","voted":false},"id":"alicorn","links":{"self":"/api/icons/alicorn"},"type":"icon"},{"attributes":{"id":"alien","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8f5","voted":false},"id":"alien","links":{"self":"/api/icons/alien"},"type":"icon"},{"attributes":{"id":"alien-monster","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8f6","voted":false},"id":"alien-monster","links":{"self":"/api/icons/alien-monster"},"type":"icon"},{"attributes":{"id":"align-center","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f037","voted":false},"id":"align-center","links":{"self":"/api/icons/align-center"},"type":"icon"},{"attributes":{"id":"align-justify","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f039","voted":false},"id":"align-justify","links":{"self":"/api/icons/align-justify"},"type":"icon"},{"attributes":{"id":"align-left","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f036","voted":false},"id":"align-left","links":{"self":"/api/icons/align-left"},"type":"icon"},{"attributes":{"id":"align-right","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f038","voted":false},"id":"align-right","links":{"self":"/api/icons/align-right"},"type":"icon"},{"attributes":{"id":"align-slash","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f846","voted":false},"id":"align-slash","links":{"self":"/api/icons/align-slash"},"type":"icon"},{"attributes":{"id":"alipay","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f642","voted":false},"id":"alipay","links":{"self":"/api/icons/alipay"},"type":"icon"},{"attributes":{"id":"allergies","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f461","voted":false},"id":"allergies","links":{"self":"/api/icons/allergies"},"type":"icon"},{"attributes":{"id":"amazon","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f270","voted":false},"id":"amazon","links":{"self":"/api/icons/amazon"},"type":"icon"},{"attributes":{"id":"amazon-pay","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f42c","voted":false},"id":"amazon-pay","links":{"self":"/api/icons/amazon-pay"},"type":"icon"},{"attributes":{"id":"ambulance","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0f9","voted":false},"id":"ambulance","links":{"self":"/api/icons/ambulance"},"type":"icon"},{"attributes":{"id":"american-sign-language-interpreting","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2a3","voted":false},"id":"american-sign-language-interpreting","links":{"self":"/api/icons/american-sign-language-interpreting"},"type":"icon"},{"attributes":{"id":"amilia","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f36d","voted":false},"id":"amilia","links":{"self":"/api/icons/amilia"},"type":"icon"},{"attributes":{"id":"amp-guitar","membership":{"free":[],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f8a1","voted":false},"id":"amp-guitar","links":{"self":"/api/icons/amp-guitar"},"type":"icon"},{"attributes":{"id":"analytics","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f643","voted":false},"id":"analytics","links":{"self":"/api/icons/analytics"},"type":"icon"},{"attributes":{"id":"anchor","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f13d","voted":false},"id":"anchor","links":{"self":"/api/icons/anchor"},"type":"icon"},{"attributes":{"id":"android","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f17b","voted":false},"id":"android","links":{"self":"/api/icons/android"},"type":"icon"},{"attributes":{"id":"angel","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f779","voted":false},"id":"angel","links":{"self":"/api/icons/angel"},"type":"icon"},{"attributes":{"id":"angellist","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f209","voted":false},"id":"angellist","links":{"self":"/api/icons/angellist"},"type":"icon"},{"attributes":{"id":"angle-double-down","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f103","voted":false},"id":"angle-double-down","links":{"self":"/api/icons/angle-double-down"},"type":"icon"},{"attributes":{"id":"angle-double-left","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f100","voted":false},"id":"angle-double-left","links":{"self":"/api/icons/angle-double-left"},"type":"icon"},{"attributes":{"id":"angle-double-right","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f101","voted":false},"id":"angle-double-right","links":{"self":"/api/icons/angle-double-right"},"type":"icon"},{"attributes":{"id":"angle-double-up","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f102","voted":false},"id":"angle-double-up","links":{"self":"/api/icons/angle-double-up"},"type":"icon"},{"attributes":{"id":"angle-down","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f107","voted":false},"id":"angle-down","links":{"self":"/api/icons/angle-down"},"type":"icon"},{"attributes":{"id":"angle-left","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f104","voted":false},"id":"angle-left","links":{"self":"/api/icons/angle-left"},"type":"icon"},{"attributes":{"id":"angle-right","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f105","voted":false},"id":"angle-right","links":{"self":"/api/icons/angle-right"},"type":"icon"},{"attributes":{"id":"angle-up","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f106","voted":false},"id":"angle-up","links":{"self":"/api/icons/angle-up"},"type":"icon"},{"attributes":{"id":"angry","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f556","voted":false},"id":"angry","links":{"self":"/api/icons/angry"},"type":"icon"},{"attributes":{"id":"angrycreative","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f36e","voted":false},"id":"angrycreative","links":{"self":"/api/icons/angrycreative"},"type":"icon"},{"attributes":{"id":"angular","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f420","voted":false},"id":"angular","links":{"self":"/api/icons/angular"},"type":"icon"},{"attributes":{"id":"ankh","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f644","voted":false},"id":"ankh","links":{"self":"/api/icons/ankh"},"type":"icon"},{"attributes":{"id":"app-store","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f36f","voted":false},"id":"app-store","links":{"self":"/api/icons/app-store"},"type":"icon"},{"attributes":{"id":"app-store-ios","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f370","voted":false},"id":"app-store-ios","links":{"self":"/api/icons/app-store-ios"},"type":"icon"},{"attributes":{"id":"apper","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f371","voted":false},"id":"apper","links":{"self":"/api/icons/apper"},"type":"icon"},{"attributes":{"id":"apple","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f179","voted":false},"id":"apple","links":{"self":"/api/icons/apple"},"type":"icon"},{"attributes":{"id":"apple-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5d1","voted":false},"id":"apple-alt","links":{"self":"/api/icons/apple-alt"},"type":"icon"},{"attributes":{"id":"apple-crate","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6b1","voted":false},"id":"apple-crate","links":{"self":"/api/icons/apple-crate"},"type":"icon"},{"attributes":{"id":"apple-pay","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f415","voted":true},"id":"apple-pay","links":{"self":"/api/icons/apple-pay"},"type":"icon"},{"attributes":{"id":"archive","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f187","voted":false},"id":"archive","links":{"self":"/api/icons/archive"},"type":"icon"},{"attributes":{"id":"archway","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f557","voted":false},"id":"archway","links":{"self":"/api/icons/archway"},"type":"icon"},{"attributes":{"id":"arrow-alt-circle-down","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f358","voted":false},"id":"arrow-alt-circle-down","links":{"self":"/api/icons/arrow-alt-circle-down"},"type":"icon"},{"attributes":{"id":"arrow-alt-circle-left","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f359","voted":false},"id":"arrow-alt-circle-left","links":{"self":"/api/icons/arrow-alt-circle-left"},"type":"icon"},{"attributes":{"id":"arrow-alt-circle-right","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f35a","voted":false},"id":"arrow-alt-circle-right","links":{"self":"/api/icons/arrow-alt-circle-right"},"type":"icon"},{"attributes":{"id":"arrow-alt-circle-up","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f35b","voted":false},"id":"arrow-alt-circle-up","links":{"self":"/api/icons/arrow-alt-circle-up"},"type":"icon"},{"attributes":{"id":"arrow-alt-down","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f354","voted":false},"id":"arrow-alt-down","links":{"self":"/api/icons/arrow-alt-down"},"type":"icon"},{"attributes":{"id":"arrow-alt-from-bottom","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f346","voted":false},"id":"arrow-alt-from-bottom","links":{"self":"/api/icons/arrow-alt-from-bottom"},"type":"icon"},{"attributes":{"id":"arrow-alt-from-left","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f347","voted":false},"id":"arrow-alt-from-left","links":{"self":"/api/icons/arrow-alt-from-left"},"type":"icon"},{"attributes":{"id":"arrow-alt-from-right","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f348","voted":false},"id":"arrow-alt-from-right","links":{"self":"/api/icons/arrow-alt-from-right"},"type":"icon"},{"attributes":{"id":"arrow-alt-from-top","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f349","voted":false},"id":"arrow-alt-from-top","links":{"self":"/api/icons/arrow-alt-from-top"},"type":"icon"},{"attributes":{"id":"arrow-alt-left","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f355","voted":false},"id":"arrow-alt-left","links":{"self":"/api/icons/arrow-alt-left"},"type":"icon"},{"attributes":{"id":"arrow-alt-right","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f356","voted":false},"id":"arrow-alt-right","links":{"self":"/api/icons/arrow-alt-right"},"type":"icon"},{"attributes":{"id":"arrow-alt-square-down","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f350","voted":false},"id":"arrow-alt-square-down","links":{"self":"/api/icons/arrow-alt-square-down"},"type":"icon"},{"attributes":{"id":"arrow-alt-square-left","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f351","voted":false},"id":"arrow-alt-square-left","links":{"self":"/api/icons/arrow-alt-square-left"},"type":"icon"},{"attributes":{"id":"arrow-alt-square-right","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f352","voted":false},"id":"arrow-alt-square-right","links":{"self":"/api/icons/arrow-alt-square-right"},"type":"icon"},{"attributes":{"id":"arrow-alt-square-up","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f353","voted":false},"id":"arrow-alt-square-up","links":{"self":"/api/icons/arrow-alt-square-up"},"type":"icon"},{"attributes":{"id":"arrow-alt-to-bottom","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f34a","voted":false},"id":"arrow-alt-to-bottom","links":{"self":"/api/icons/arrow-alt-to-bottom"},"type":"icon"},{"attributes":{"id":"arrow-alt-to-left","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f34b","voted":false},"id":"arrow-alt-to-left","links":{"self":"/api/icons/arrow-alt-to-left"},"type":"icon"},{"attributes":{"id":"arrow-alt-to-right","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f34c","voted":false},"id":"arrow-alt-to-right","links":{"self":"/api/icons/arrow-alt-to-right"},"type":"icon"},{"attributes":{"id":"arrow-alt-to-top","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f34d","voted":false},"id":"arrow-alt-to-top","links":{"self":"/api/icons/arrow-alt-to-top"},"type":"icon"},{"attributes":{"id":"arrow-alt-up","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f357","voted":false},"id":"arrow-alt-up","links":{"self":"/api/icons/arrow-alt-up"},"type":"icon"},{"attributes":{"id":"arrow-circle-down","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0ab","voted":false},"id":"arrow-circle-down","links":{"self":"/api/icons/arrow-circle-down"},"type":"icon"},{"attributes":{"id":"arrow-circle-left","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0a8","voted":false},"id":"arrow-circle-left","links":{"self":"/api/icons/arrow-circle-left"},"type":"icon"},{"attributes":{"id":"arrow-circle-right","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0a9","voted":false},"id":"arrow-circle-right","links":{"self":"/api/icons/arrow-circle-right"},"type":"icon"},{"attributes":{"id":"arrow-circle-up","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0aa","voted":false},"id":"arrow-circle-up","links":{"self":"/api/icons/arrow-circle-up"},"type":"icon"},{"attributes":{"id":"arrow-down","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f063","voted":false},"id":"arrow-down","links":{"self":"/api/icons/arrow-down"},"type":"icon"},{"attributes":{"id":"arrow-from-bottom","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f342","voted":false},"id":"arrow-from-bottom","links":{"self":"/api/icons/arrow-from-bottom"},"type":"icon"},{"attributes":{"id":"arrow-from-left","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f343","voted":false},"id":"arrow-from-left","links":{"self":"/api/icons/arrow-from-left"},"type":"icon"},{"attributes":{"id":"arrow-from-right","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f344","voted":false},"id":"arrow-from-right","links":{"self":"/api/icons/arrow-from-right"},"type":"icon"},{"attributes":{"id":"arrow-from-top","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f345","voted":false},"id":"arrow-from-top","links":{"self":"/api/icons/arrow-from-top"},"type":"icon"},{"attributes":{"id":"arrow-left","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f060","voted":false},"id":"arrow-left","links":{"self":"/api/icons/arrow-left"},"type":"icon"},{"attributes":{"id":"arrow-right","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f061","voted":false},"id":"arrow-right","links":{"self":"/api/icons/arrow-right"},"type":"icon"},{"attributes":{"id":"arrow-square-down","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f339","voted":false},"id":"arrow-square-down","links":{"self":"/api/icons/arrow-square-down"},"type":"icon"},{"attributes":{"id":"arrow-square-left","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f33a","voted":false},"id":"arrow-square-left","links":{"self":"/api/icons/arrow-square-left"},"type":"icon"},{"attributes":{"id":"arrow-square-right","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f33b","voted":false},"id":"arrow-square-right","links":{"self":"/api/icons/arrow-square-right"},"type":"icon"},{"attributes":{"id":"arrow-square-up","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f33c","voted":false},"id":"arrow-square-up","links":{"self":"/api/icons/arrow-square-up"},"type":"icon"},{"attributes":{"id":"arrow-to-bottom","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f33d","voted":false},"id":"arrow-to-bottom","links":{"self":"/api/icons/arrow-to-bottom"},"type":"icon"},{"attributes":{"id":"arrow-to-left","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f33e","voted":false},"id":"arrow-to-left","links":{"self":"/api/icons/arrow-to-left"},"type":"icon"},{"attributes":{"id":"arrow-to-right","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f340","voted":false},"id":"arrow-to-right","links":{"self":"/api/icons/arrow-to-right"},"type":"icon"},{"attributes":{"id":"arrow-to-top","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f341","voted":false},"id":"arrow-to-top","links":{"self":"/api/icons/arrow-to-top"},"type":"icon"},{"attributes":{"id":"arrow-up","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f062","voted":false},"id":"arrow-up","links":{"self":"/api/icons/arrow-up"},"type":"icon"},{"attributes":{"id":"arrows","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f047","voted":false},"id":"arrows","links":{"self":"/api/icons/arrows"},"type":"icon"},{"attributes":{"id":"arrows-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0b2","voted":false},"id":"arrows-alt","links":{"self":"/api/icons/arrows-alt"},"type":"icon"},{"attributes":{"id":"arrows-alt-h","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f337","voted":false},"id":"arrows-alt-h","links":{"self":"/api/icons/arrows-alt-h"},"type":"icon"},{"attributes":{"id":"arrows-alt-v","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f338","voted":false},"id":"arrows-alt-v","links":{"self":"/api/icons/arrows-alt-v"},"type":"icon"},{"attributes":{"id":"arrows-h","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f07e","voted":false},"id":"arrows-h","links":{"self":"/api/icons/arrows-h"},"type":"icon"},{"attributes":{"id":"arrows-v","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f07d","voted":false},"id":"arrows-v","links":{"self":"/api/icons/arrows-v"},"type":"icon"},{"attributes":{"id":"artstation","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f77a","voted":true},"id":"artstation","links":{"self":"/api/icons/artstation"},"type":"icon"},{"attributes":{"id":"assistive-listening-systems","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2a2","voted":false},"id":"assistive-listening-systems","links":{"self":"/api/icons/assistive-listening-systems"},"type":"icon"},{"attributes":{"id":"asterisk","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f069","voted":false},"id":"asterisk","links":{"self":"/api/icons/asterisk"},"type":"icon"},{"attributes":{"id":"asymmetrik","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f372","voted":false},"id":"asymmetrik","links":{"self":"/api/icons/asymmetrik"},"type":"icon"},{"attributes":{"id":"at","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1fa","voted":false},"id":"at","links":{"self":"/api/icons/at"},"type":"icon"},{"attributes":{"id":"atlas","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f558","voted":false},"id":"atlas","links":{"self":"/api/icons/atlas"},"type":"icon"},{"attributes":{"id":"atlassian","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f77b","voted":true},"id":"atlassian","links":{"self":"/api/icons/atlassian"},"type":"icon"},{"attributes":{"id":"atom","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5d2","voted":false},"id":"atom","links":{"self":"/api/icons/atom"},"type":"icon"},{"attributes":{"id":"atom-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5d3","voted":false},"id":"atom-alt","links":{"self":"/api/icons/atom-alt"},"type":"icon"},{"attributes":{"id":"audible","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f373","voted":false},"id":"audible","links":{"self":"/api/icons/audible"},"type":"icon"},{"attributes":{"id":"audio-description","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f29e","voted":false},"id":"audio-description","links":{"self":"/api/icons/audio-description"},"type":"icon"},{"attributes":{"id":"autoprefixer","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f41c","voted":false},"id":"autoprefixer","links":{"self":"/api/icons/autoprefixer"},"type":"icon"},{"attributes":{"id":"avianex","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f374","voted":false},"id":"avianex","links":{"self":"/api/icons/avianex"},"type":"icon"},{"attributes":{"id":"aviato","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f421","voted":false},"id":"aviato","links":{"self":"/api/icons/aviato"},"type":"icon"},{"attributes":{"id":"award","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f559","voted":true},"id":"award","links":{"self":"/api/icons/award"},"type":"icon"},{"attributes":{"id":"aws","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f375","voted":false},"id":"aws","links":{"self":"/api/icons/aws"},"type":"icon"},{"attributes":{"id":"axe","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6b2","voted":false},"id":"axe","links":{"self":"/api/icons/axe"},"type":"icon"},{"attributes":{"id":"axe-battle","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6b3","voted":false},"id":"axe-battle","links":{"self":"/api/icons/axe-battle"},"type":"icon"},{"attributes":{"id":"baby","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f77c","voted":true},"id":"baby","links":{"self":"/api/icons/baby"},"type":"icon"},{"attributes":{"id":"baby-carriage","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f77d","voted":true},"id":"baby-carriage","links":{"self":"/api/icons/baby-carriage"},"type":"icon"},{"attributes":{"id":"backpack","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5d4","voted":false},"id":"backpack","links":{"self":"/api/icons/backpack"},"type":"icon"},{"attributes":{"id":"backspace","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f55a","voted":true},"id":"backspace","links":{"self":"/api/icons/backspace"},"type":"icon"},{"attributes":{"id":"backward","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f04a","voted":false},"id":"backward","links":{"self":"/api/icons/backward"},"type":"icon"},{"attributes":{"id":"bacon","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7e5","voted":false},"id":"bacon","links":{"self":"/api/icons/bacon"},"type":"icon"},{"attributes":{"id":"bacteria","membership":{"free":[],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f959","voted":false},"id":"bacteria","links":{"self":"/api/icons/bacteria"},"type":"icon"},{"attributes":{"id":"bacterium","membership":{"free":[],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f95a","voted":false},"id":"bacterium","links":{"self":"/api/icons/bacterium"},"type":"icon"},{"attributes":{"id":"badge","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f335","voted":false},"id":"badge","links":{"self":"/api/icons/badge"},"type":"icon"},{"attributes":{"id":"badge-check","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f336","voted":false},"id":"badge-check","links":{"self":"/api/icons/badge-check"},"type":"icon"},{"attributes":{"id":"badge-dollar","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f645","voted":false},"id":"badge-dollar","links":{"self":"/api/icons/badge-dollar"},"type":"icon"},{"attributes":{"id":"badge-percent","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f646","voted":false},"id":"badge-percent","links":{"self":"/api/icons/badge-percent"},"type":"icon"},{"attributes":{"id":"badge-sheriff","membership":{"free":[],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f8a2","voted":false},"id":"badge-sheriff","links":{"self":"/api/icons/badge-sheriff"},"type":"icon"},{"attributes":{"id":"badger-honey","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6b4","voted":false},"id":"badger-honey","links":{"self":"/api/icons/badger-honey"},"type":"icon"},{"attributes":{"id":"bags-shopping","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f847","voted":false},"id":"bags-shopping","links":{"self":"/api/icons/bags-shopping"},"type":"icon"},{"attributes":{"id":"bahai","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f666","voted":false},"id":"bahai","links":{"self":"/api/icons/bahai"},"type":"icon"},{"attributes":{"id":"balance-scale","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f24e","voted":false},"id":"balance-scale","links":{"self":"/api/icons/balance-scale"},"type":"icon"},{"attributes":{"id":"balance-scale-left","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f515","voted":true},"id":"balance-scale-left","links":{"self":"/api/icons/balance-scale-left"},"type":"icon"},{"attributes":{"id":"balance-scale-right","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f516","voted":true},"id":"balance-scale-right","links":{"self":"/api/icons/balance-scale-right"},"type":"icon"},{"attributes":{"id":"ball-pile","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f77e","voted":false},"id":"ball-pile","links":{"self":"/api/icons/ball-pile"},"type":"icon"},{"attributes":{"id":"ballot","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f732","voted":false},"id":"ballot","links":{"self":"/api/icons/ballot"},"type":"icon"},{"attributes":{"id":"ballot-check","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f733","voted":false},"id":"ballot-check","links":{"self":"/api/icons/ballot-check"},"type":"icon"},{"attributes":{"id":"ban","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f05e","voted":false},"id":"ban","links":{"self":"/api/icons/ban"},"type":"icon"},{"attributes":{"id":"band-aid","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f462","voted":false},"id":"band-aid","links":{"self":"/api/icons/band-aid"},"type":"icon"},{"attributes":{"id":"bandcamp","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f2d5","voted":false},"id":"bandcamp","links":{"self":"/api/icons/bandcamp"},"type":"icon"},{"attributes":{"id":"banjo","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8a3","voted":false},"id":"banjo","links":{"self":"/api/icons/banjo"},"type":"icon"},{"attributes":{"id":"barcode","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f02a","voted":false},"id":"barcode","links":{"self":"/api/icons/barcode"},"type":"icon"},{"attributes":{"id":"barcode-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f463","voted":false},"id":"barcode-alt","links":{"self":"/api/icons/barcode-alt"},"type":"icon"},{"attributes":{"id":"barcode-read","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f464","voted":false},"id":"barcode-read","links":{"self":"/api/icons/barcode-read"},"type":"icon"},{"attributes":{"id":"barcode-scan","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f465","voted":false},"id":"barcode-scan","links":{"self":"/api/icons/barcode-scan"},"type":"icon"},{"attributes":{"id":"bars","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0c9","voted":false},"id":"bars","links":{"self":"/api/icons/bars"},"type":"icon"},{"attributes":{"id":"baseball","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f432","voted":false},"id":"baseball","links":{"self":"/api/icons/baseball"},"type":"icon"},{"attributes":{"id":"baseball-ball","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f433","voted":false},"id":"baseball-ball","links":{"self":"/api/icons/baseball-ball"},"type":"icon"},{"attributes":{"id":"basketball-ball","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f434","voted":false},"id":"basketball-ball","links":{"self":"/api/icons/basketball-ball"},"type":"icon"},{"attributes":{"id":"basketball-hoop","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f435","voted":false},"id":"basketball-hoop","links":{"self":"/api/icons/basketball-hoop"},"type":"icon"},{"attributes":{"id":"bat","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6b5","voted":false},"id":"bat","links":{"self":"/api/icons/bat"},"type":"icon"},{"attributes":{"id":"bath","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2cd","voted":false},"id":"bath","links":{"self":"/api/icons/bath"},"type":"icon"},{"attributes":{"id":"battery-bolt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f376","voted":false},"id":"battery-bolt","links":{"self":"/api/icons/battery-bolt"},"type":"icon"},{"attributes":{"id":"battery-empty","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f244","voted":false},"id":"battery-empty","links":{"self":"/api/icons/battery-empty"},"type":"icon"},{"attributes":{"id":"battery-full","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f240","voted":false},"id":"battery-full","links":{"self":"/api/icons/battery-full"},"type":"icon"},{"attributes":{"id":"battery-half","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f242","voted":false},"id":"battery-half","links":{"self":"/api/icons/battery-half"},"type":"icon"},{"attributes":{"id":"battery-quarter","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f243","voted":false},"id":"battery-quarter","links":{"self":"/api/icons/battery-quarter"},"type":"icon"},{"attributes":{"id":"battery-slash","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f377","voted":false},"id":"battery-slash","links":{"self":"/api/icons/battery-slash"},"type":"icon"},{"attributes":{"id":"battery-three-quarters","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f241","voted":false},"id":"battery-three-quarters","links":{"self":"/api/icons/battery-three-quarters"},"type":"icon"},{"attributes":{"id":"battle-net","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f835","voted":false},"id":"battle-net","links":{"self":"/api/icons/battle-net"},"type":"icon"},{"attributes":{"id":"bed","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f236","voted":false},"id":"bed","links":{"self":"/api/icons/bed"},"type":"icon"},{"attributes":{"id":"bed-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8f7","voted":false},"id":"bed-alt","links":{"self":"/api/icons/bed-alt"},"type":"icon"},{"attributes":{"id":"bed-bunk","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8f8","voted":false},"id":"bed-bunk","links":{"self":"/api/icons/bed-bunk"},"type":"icon"},{"attributes":{"id":"bed-empty","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8f9","voted":false},"id":"bed-empty","links":{"self":"/api/icons/bed-empty"},"type":"icon"},{"attributes":{"id":"beer","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0fc","voted":false},"id":"beer","links":{"self":"/api/icons/beer"},"type":"icon"},{"attributes":{"id":"behance","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1b4","voted":false},"id":"behance","links":{"self":"/api/icons/behance"},"type":"icon"},{"attributes":{"id":"behance-square","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1b5","voted":false},"id":"behance-square","links":{"self":"/api/icons/behance-square"},"type":"icon"},{"attributes":{"id":"bell","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0f3","voted":false},"id":"bell","links":{"self":"/api/icons/bell"},"type":"icon"},{"attributes":{"id":"bell-exclamation","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f848","voted":false},"id":"bell-exclamation","links":{"self":"/api/icons/bell-exclamation"},"type":"icon"},{"attributes":{"id":"bell-on","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8fa","voted":false},"id":"bell-on","links":{"self":"/api/icons/bell-on"},"type":"icon"},{"attributes":{"id":"bell-plus","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f849","voted":false},"id":"bell-plus","links":{"self":"/api/icons/bell-plus"},"type":"icon"},{"attributes":{"id":"bell-school","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5d5","voted":false},"id":"bell-school","links":{"self":"/api/icons/bell-school"},"type":"icon"},{"attributes":{"id":"bell-school-slash","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5d6","voted":false},"id":"bell-school-slash","links":{"self":"/api/icons/bell-school-slash"},"type":"icon"},{"attributes":{"id":"bell-slash","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1f6","voted":false},"id":"bell-slash","links":{"self":"/api/icons/bell-slash"},"type":"icon"},{"attributes":{"id":"bells","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f77f","voted":false},"id":"bells","links":{"self":"/api/icons/bells"},"type":"icon"},{"attributes":{"id":"betamax","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8a4","voted":false},"id":"betamax","links":{"self":"/api/icons/betamax"},"type":"icon"},{"attributes":{"id":"bezier-curve","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f55b","voted":false},"id":"bezier-curve","links":{"self":"/api/icons/bezier-curve"},"type":"icon"},{"attributes":{"id":"bible","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f647","voted":false},"id":"bible","links":{"self":"/api/icons/bible"},"type":"icon"},{"attributes":{"id":"bicycle","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f206","voted":false},"id":"bicycle","links":{"self":"/api/icons/bicycle"},"type":"icon"},{"attributes":{"id":"biking","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f84a","voted":false},"id":"biking","links":{"self":"/api/icons/biking"},"type":"icon"},{"attributes":{"id":"biking-mountain","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f84b","voted":false},"id":"biking-mountain","links":{"self":"/api/icons/biking-mountain"},"type":"icon"},{"attributes":{"id":"bimobject","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f378","voted":false},"id":"bimobject","links":{"self":"/api/icons/bimobject"},"type":"icon"},{"attributes":{"id":"binoculars","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1e5","voted":false},"id":"binoculars","links":{"self":"/api/icons/binoculars"},"type":"icon"},{"attributes":{"id":"biohazard","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f780","voted":true},"id":"biohazard","links":{"self":"/api/icons/biohazard"},"type":"icon"},{"attributes":{"id":"birthday-cake","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1fd","voted":false},"id":"birthday-cake","links":{"self":"/api/icons/birthday-cake"},"type":"icon"},{"attributes":{"id":"bitbucket","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f171","voted":false},"id":"bitbucket","links":{"self":"/api/icons/bitbucket"},"type":"icon"},{"attributes":{"id":"bitcoin","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f379","voted":false},"id":"bitcoin","links":{"self":"/api/icons/bitcoin"},"type":"icon"},{"attributes":{"id":"bity","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f37a","voted":false},"id":"bity","links":{"self":"/api/icons/bity"},"type":"icon"},{"attributes":{"id":"black-tie","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f27e","voted":false},"id":"black-tie","links":{"self":"/api/icons/black-tie"},"type":"icon"},{"attributes":{"id":"blackberry","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f37b","voted":false},"id":"blackberry","links":{"self":"/api/icons/blackberry"},"type":"icon"},{"attributes":{"id":"blanket","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f498","voted":false},"id":"blanket","links":{"self":"/api/icons/blanket"},"type":"icon"},{"attributes":{"id":"blender","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f517","voted":false},"id":"blender","links":{"self":"/api/icons/blender"},"type":"icon"},{"attributes":{"id":"blender-phone","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6b6","voted":false},"id":"blender-phone","links":{"self":"/api/icons/blender-phone"},"type":"icon"},{"attributes":{"id":"blind","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f29d","voted":false},"id":"blind","links":{"self":"/api/icons/blind"},"type":"icon"},{"attributes":{"id":"blinds","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8fb","voted":false},"id":"blinds","links":{"self":"/api/icons/blinds"},"type":"icon"},{"attributes":{"id":"blinds-open","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8fc","voted":false},"id":"blinds-open","links":{"self":"/api/icons/blinds-open"},"type":"icon"},{"attributes":{"id":"blinds-raised","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8fd","voted":false},"id":"blinds-raised","links":{"self":"/api/icons/blinds-raised"},"type":"icon"},{"attributes":{"id":"blog","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f781","voted":true},"id":"blog","links":{"self":"/api/icons/blog"},"type":"icon"},{"attributes":{"id":"blogger","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f37c","voted":false},"id":"blogger","links":{"self":"/api/icons/blogger"},"type":"icon"},{"attributes":{"id":"blogger-b","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f37d","voted":false},"id":"blogger-b","links":{"self":"/api/icons/blogger-b"},"type":"icon"},{"attributes":{"id":"bluetooth","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f293","voted":false},"id":"bluetooth","links":{"self":"/api/icons/bluetooth"},"type":"icon"},{"attributes":{"id":"bluetooth-b","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f294","voted":false},"id":"bluetooth-b","links":{"self":"/api/icons/bluetooth-b"},"type":"icon"},{"attributes":{"id":"bold","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f032","voted":false},"id":"bold","links":{"self":"/api/icons/bold"},"type":"icon"},{"attributes":{"id":"bolt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0e7","voted":false},"id":"bolt","links":{"self":"/api/icons/bolt"},"type":"icon"},{"attributes":{"id":"bomb","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1e2","voted":false},"id":"bomb","links":{"self":"/api/icons/bomb"},"type":"icon"},{"attributes":{"id":"bone","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5d7","voted":false},"id":"bone","links":{"self":"/api/icons/bone"},"type":"icon"},{"attributes":{"id":"bone-break","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5d8","voted":false},"id":"bone-break","links":{"self":"/api/icons/bone-break"},"type":"icon"},{"attributes":{"id":"bong","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f55c","voted":false},"id":"bong","links":{"self":"/api/icons/bong"},"type":"icon"},{"attributes":{"id":"book","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f02d","voted":false},"id":"book","links":{"self":"/api/icons/book"},"type":"icon"},{"attributes":{"id":"book-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5d9","voted":false},"id":"book-alt","links":{"self":"/api/icons/book-alt"},"type":"icon"},{"attributes":{"id":"book-dead","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6b7","voted":false},"id":"book-dead","links":{"self":"/api/icons/book-dead"},"type":"icon"},{"attributes":{"id":"book-heart","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f499","voted":false},"id":"book-heart","links":{"self":"/api/icons/book-heart"},"type":"icon"},{"attributes":{"id":"book-medical","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7e6","voted":false},"id":"book-medical","links":{"self":"/api/icons/book-medical"},"type":"icon"},{"attributes":{"id":"book-open","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f518","voted":true},"id":"book-open","links":{"self":"/api/icons/book-open"},"type":"icon"},{"attributes":{"id":"book-reader","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5da","voted":false},"id":"book-reader","links":{"self":"/api/icons/book-reader"},"type":"icon"},{"attributes":{"id":"book-spells","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6b8","voted":false},"id":"book-spells","links":{"self":"/api/icons/book-spells"},"type":"icon"},{"attributes":{"id":"book-user","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7e7","voted":false},"id":"book-user","links":{"self":"/api/icons/book-user"},"type":"icon"},{"attributes":{"id":"bookmark","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f02e","voted":false},"id":"bookmark","links":{"self":"/api/icons/bookmark"},"type":"icon"},{"attributes":{"id":"books","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5db","voted":false},"id":"books","links":{"self":"/api/icons/books"},"type":"icon"},{"attributes":{"id":"books-medical","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7e8","voted":false},"id":"books-medical","links":{"self":"/api/icons/books-medical"},"type":"icon"},{"attributes":{"id":"boombox","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8a5","voted":false},"id":"boombox","links":{"self":"/api/icons/boombox"},"type":"icon"},{"attributes":{"id":"boot","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f782","voted":false},"id":"boot","links":{"self":"/api/icons/boot"},"type":"icon"},{"attributes":{"id":"booth-curtain","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f734","voted":false},"id":"booth-curtain","links":{"self":"/api/icons/booth-curtain"},"type":"icon"},{"attributes":{"id":"bootstrap","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f836","voted":false},"id":"bootstrap","links":{"self":"/api/icons/bootstrap"},"type":"icon"},{"attributes":{"id":"border-all","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f84c","voted":false},"id":"border-all","links":{"self":"/api/icons/border-all"},"type":"icon"},{"attributes":{"id":"border-bottom","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f84d","voted":false},"id":"border-bottom","links":{"self":"/api/icons/border-bottom"},"type":"icon"},{"attributes":{"id":"border-center-h","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f89c","voted":false},"id":"border-center-h","links":{"self":"/api/icons/border-center-h"},"type":"icon"},{"attributes":{"id":"border-center-v","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f89d","voted":false},"id":"border-center-v","links":{"self":"/api/icons/border-center-v"},"type":"icon"},{"attributes":{"id":"border-inner","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f84e","voted":false},"id":"border-inner","links":{"self":"/api/icons/border-inner"},"type":"icon"},{"attributes":{"id":"border-left","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f84f","voted":false},"id":"border-left","links":{"self":"/api/icons/border-left"},"type":"icon"},{"attributes":{"id":"border-none","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f850","voted":false},"id":"border-none","links":{"self":"/api/icons/border-none"},"type":"icon"},{"attributes":{"id":"border-outer","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f851","voted":false},"id":"border-outer","links":{"self":"/api/icons/border-outer"},"type":"icon"},{"attributes":{"id":"border-right","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f852","voted":false},"id":"border-right","links":{"self":"/api/icons/border-right"},"type":"icon"},{"attributes":{"id":"border-style","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f853","voted":false},"id":"border-style","links":{"self":"/api/icons/border-style"},"type":"icon"},{"attributes":{"id":"border-style-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f854","voted":false},"id":"border-style-alt","links":{"self":"/api/icons/border-style-alt"},"type":"icon"},{"attributes":{"id":"border-top","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f855","voted":false},"id":"border-top","links":{"self":"/api/icons/border-top"},"type":"icon"},{"attributes":{"id":"bow-arrow","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6b9","voted":false},"id":"bow-arrow","links":{"self":"/api/icons/bow-arrow"},"type":"icon"},{"attributes":{"id":"bowling-ball","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f436","voted":false},"id":"bowling-ball","links":{"self":"/api/icons/bowling-ball"},"type":"icon"},{"attributes":{"id":"bowling-pins","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f437","voted":false},"id":"bowling-pins","links":{"self":"/api/icons/bowling-pins"},"type":"icon"},{"attributes":{"id":"box","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f466","voted":false},"id":"box","links":{"self":"/api/icons/box"},"type":"icon"},{"attributes":{"id":"box-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f49a","voted":false},"id":"box-alt","links":{"self":"/api/icons/box-alt"},"type":"icon"},{"attributes":{"id":"box-ballot","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f735","voted":false},"id":"box-ballot","links":{"self":"/api/icons/box-ballot"},"type":"icon"},{"attributes":{"id":"box-check","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f467","voted":false},"id":"box-check","links":{"self":"/api/icons/box-check"},"type":"icon"},{"attributes":{"id":"box-fragile","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f49b","voted":false},"id":"box-fragile","links":{"self":"/api/icons/box-fragile"},"type":"icon"},{"attributes":{"id":"box-full","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f49c","voted":false},"id":"box-full","links":{"self":"/api/icons/box-full"},"type":"icon"},{"attributes":{"id":"box-heart","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f49d","voted":false},"id":"box-heart","links":{"self":"/api/icons/box-heart"},"type":"icon"},{"attributes":{"id":"box-open","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f49e","voted":false},"id":"box-open","links":{"self":"/api/icons/box-open"},"type":"icon"},{"attributes":{"id":"box-tissue","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f95b","voted":false},"id":"box-tissue","links":{"self":"/api/icons/box-tissue"},"type":"icon"},{"attributes":{"id":"box-up","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f49f","voted":false},"id":"box-up","links":{"self":"/api/icons/box-up"},"type":"icon"},{"attributes":{"id":"box-usd","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4a0","voted":false},"id":"box-usd","links":{"self":"/api/icons/box-usd"},"type":"icon"},{"attributes":{"id":"boxes","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f468","voted":false},"id":"boxes","links":{"self":"/api/icons/boxes"},"type":"icon"},{"attributes":{"id":"boxes-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4a1","voted":false},"id":"boxes-alt","links":{"self":"/api/icons/boxes-alt"},"type":"icon"},{"attributes":{"id":"boxing-glove","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f438","voted":false},"id":"boxing-glove","links":{"self":"/api/icons/boxing-glove"},"type":"icon"},{"attributes":{"id":"brackets","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7e9","voted":false},"id":"brackets","links":{"self":"/api/icons/brackets"},"type":"icon"},{"attributes":{"id":"brackets-curly","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7ea","voted":true},"id":"brackets-curly","links":{"self":"/api/icons/brackets-curly"},"type":"icon"},{"attributes":{"id":"braille","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2a1","voted":false},"id":"braille","links":{"self":"/api/icons/braille"},"type":"icon"},{"attributes":{"id":"brain","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5dc","voted":false},"id":"brain","links":{"self":"/api/icons/brain"},"type":"icon"},{"attributes":{"id":"bread-loaf","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7eb","voted":false},"id":"bread-loaf","links":{"self":"/api/icons/bread-loaf"},"type":"icon"},{"attributes":{"id":"bread-slice","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7ec","voted":false},"id":"bread-slice","links":{"self":"/api/icons/bread-slice"},"type":"icon"},{"attributes":{"id":"briefcase","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0b1","voted":false},"id":"briefcase","links":{"self":"/api/icons/briefcase"},"type":"icon"},{"attributes":{"id":"briefcase-medical","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f469","voted":false},"id":"briefcase-medical","links":{"self":"/api/icons/briefcase-medical"},"type":"icon"},{"attributes":{"id":"bring-forward","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f856","voted":true},"id":"bring-forward","links":{"self":"/api/icons/bring-forward"},"type":"icon"},{"attributes":{"id":"bring-front","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f857","voted":true},"id":"bring-front","links":{"self":"/api/icons/bring-front"},"type":"icon"},{"attributes":{"id":"broadcast-tower","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f519","voted":true},"id":"broadcast-tower","links":{"self":"/api/icons/broadcast-tower"},"type":"icon"},{"attributes":{"id":"broom","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f51a","voted":true},"id":"broom","links":{"self":"/api/icons/broom"},"type":"icon"},{"attributes":{"id":"browser","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f37e","voted":false},"id":"browser","links":{"self":"/api/icons/browser"},"type":"icon"},{"attributes":{"id":"brush","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f55d","voted":false},"id":"brush","links":{"self":"/api/icons/brush"},"type":"icon"},{"attributes":{"id":"btc","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f15a","voted":false},"id":"btc","links":{"self":"/api/icons/btc"},"type":"icon"},{"attributes":{"id":"buffer","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f837","voted":false},"id":"buffer","links":{"self":"/api/icons/buffer"},"type":"icon"},{"attributes":{"id":"bug","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f188","voted":false},"id":"bug","links":{"self":"/api/icons/bug"},"type":"icon"},{"attributes":{"id":"building","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1ad","voted":false},"id":"building","links":{"self":"/api/icons/building"},"type":"icon"},{"attributes":{"id":"bullhorn","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0a1","voted":false},"id":"bullhorn","links":{"self":"/api/icons/bullhorn"},"type":"icon"},{"attributes":{"id":"bullseye","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f140","voted":false},"id":"bullseye","links":{"self":"/api/icons/bullseye"},"type":"icon"},{"attributes":{"id":"bullseye-arrow","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f648","voted":false},"id":"bullseye-arrow","links":{"self":"/api/icons/bullseye-arrow"},"type":"icon"},{"attributes":{"id":"bullseye-pointer","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f649","voted":false},"id":"bullseye-pointer","links":{"self":"/api/icons/bullseye-pointer"},"type":"icon"},{"attributes":{"id":"burger-soda","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f858","voted":false},"id":"burger-soda","links":{"self":"/api/icons/burger-soda"},"type":"icon"},{"attributes":{"id":"burn","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f46a","voted":false},"id":"burn","links":{"self":"/api/icons/burn"},"type":"icon"},{"attributes":{"id":"buromobelexperte","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f37f","voted":false},"id":"buromobelexperte","links":{"self":"/api/icons/buromobelexperte"},"type":"icon"},{"attributes":{"id":"burrito","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7ed","voted":false},"id":"burrito","links":{"self":"/api/icons/burrito"},"type":"icon"},{"attributes":{"id":"bus","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f207","voted":false},"id":"bus","links":{"self":"/api/icons/bus"},"type":"icon"},{"attributes":{"id":"bus-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f55e","voted":false},"id":"bus-alt","links":{"self":"/api/icons/bus-alt"},"type":"icon"},{"attributes":{"id":"bus-school","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5dd","voted":false},"id":"bus-school","links":{"self":"/api/icons/bus-school"},"type":"icon"},{"attributes":{"id":"business-time","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f64a","voted":false},"id":"business-time","links":{"self":"/api/icons/business-time"},"type":"icon"},{"attributes":{"id":"buy-n-large","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f8a6","voted":false},"id":"buy-n-large","links":{"self":"/api/icons/buy-n-large"},"type":"icon"},{"attributes":{"id":"buysellads","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f20d","voted":false},"id":"buysellads","links":{"self":"/api/icons/buysellads"},"type":"icon"},{"attributes":{"id":"cabinet-filing","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f64b","voted":false},"id":"cabinet-filing","links":{"self":"/api/icons/cabinet-filing"},"type":"icon"},{"attributes":{"id":"cactus","membership":{"free":[],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f8a7","voted":false},"id":"cactus","links":{"self":"/api/icons/cactus"},"type":"icon"},{"attributes":{"id":"calculator","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1ec","voted":false},"id":"calculator","links":{"self":"/api/icons/calculator"},"type":"icon"},{"attributes":{"id":"calculator-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f64c","voted":false},"id":"calculator-alt","links":{"self":"/api/icons/calculator-alt"},"type":"icon"},{"attributes":{"id":"calendar","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f133","voted":false},"id":"calendar","links":{"self":"/api/icons/calendar"},"type":"icon"},{"attributes":{"id":"calendar-alt","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f073","voted":false},"id":"calendar-alt","links":{"self":"/api/icons/calendar-alt"},"type":"icon"},{"attributes":{"id":"calendar-check","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f274","voted":false},"id":"calendar-check","links":{"self":"/api/icons/calendar-check"},"type":"icon"},{"attributes":{"id":"calendar-day","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f783","voted":true},"id":"calendar-day","links":{"self":"/api/icons/calendar-day"},"type":"icon"},{"attributes":{"id":"calendar-edit","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f333","voted":false},"id":"calendar-edit","links":{"self":"/api/icons/calendar-edit"},"type":"icon"},{"attributes":{"id":"calendar-exclamation","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f334","voted":false},"id":"calendar-exclamation","links":{"self":"/api/icons/calendar-exclamation"},"type":"icon"},{"attributes":{"id":"calendar-minus","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f272","voted":false},"id":"calendar-minus","links":{"self":"/api/icons/calendar-minus"},"type":"icon"},{"attributes":{"id":"calendar-plus","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f271","voted":false},"id":"calendar-plus","links":{"self":"/api/icons/calendar-plus"},"type":"icon"},{"attributes":{"id":"calendar-star","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f736","voted":false},"id":"calendar-star","links":{"self":"/api/icons/calendar-star"},"type":"icon"},{"attributes":{"id":"calendar-times","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f273","voted":false},"id":"calendar-times","links":{"self":"/api/icons/calendar-times"},"type":"icon"},{"attributes":{"id":"calendar-week","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f784","voted":true},"id":"calendar-week","links":{"self":"/api/icons/calendar-week"},"type":"icon"},{"attributes":{"id":"camcorder","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8a8","voted":false},"id":"camcorder","links":{"self":"/api/icons/camcorder"},"type":"icon"},{"attributes":{"id":"camera","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f030","voted":false},"id":"camera","links":{"self":"/api/icons/camera"},"type":"icon"},{"attributes":{"id":"camera-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f332","voted":false},"id":"camera-alt","links":{"self":"/api/icons/camera-alt"},"type":"icon"},{"attributes":{"id":"camera-home","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8fe","voted":false},"id":"camera-home","links":{"self":"/api/icons/camera-home"},"type":"icon"},{"attributes":{"id":"camera-movie","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8a9","voted":false},"id":"camera-movie","links":{"self":"/api/icons/camera-movie"},"type":"icon"},{"attributes":{"id":"camera-polaroid","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8aa","voted":false},"id":"camera-polaroid","links":{"self":"/api/icons/camera-polaroid"},"type":"icon"},{"attributes":{"id":"camera-retro","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f083","voted":false},"id":"camera-retro","links":{"self":"/api/icons/camera-retro"},"type":"icon"},{"attributes":{"id":"campfire","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6ba","voted":false},"id":"campfire","links":{"self":"/api/icons/campfire"},"type":"icon"},{"attributes":{"id":"campground","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6bb","voted":false},"id":"campground","links":{"self":"/api/icons/campground"},"type":"icon"},{"attributes":{"id":"canadian-maple-leaf","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f785","voted":false},"id":"canadian-maple-leaf","links":{"self":"/api/icons/canadian-maple-leaf"},"type":"icon"},{"attributes":{"id":"candle-holder","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6bc","voted":false},"id":"candle-holder","links":{"self":"/api/icons/candle-holder"},"type":"icon"},{"attributes":{"id":"candy-cane","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f786","voted":false},"id":"candy-cane","links":{"self":"/api/icons/candy-cane"},"type":"icon"},{"attributes":{"id":"candy-corn","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6bd","voted":false},"id":"candy-corn","links":{"self":"/api/icons/candy-corn"},"type":"icon"},{"attributes":{"id":"cannabis","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f55f","voted":false},"id":"cannabis","links":{"self":"/api/icons/cannabis"},"type":"icon"},{"attributes":{"id":"capsules","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f46b","voted":false},"id":"capsules","links":{"self":"/api/icons/capsules"},"type":"icon"},{"attributes":{"id":"car","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1b9","voted":false},"id":"car","links":{"self":"/api/icons/car"},"type":"icon"},{"attributes":{"id":"car-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5de","voted":false},"id":"car-alt","links":{"self":"/api/icons/car-alt"},"type":"icon"},{"attributes":{"id":"car-battery","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5df","voted":false},"id":"car-battery","links":{"self":"/api/icons/car-battery"},"type":"icon"},{"attributes":{"id":"car-building","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f859","voted":false},"id":"car-building","links":{"self":"/api/icons/car-building"},"type":"icon"},{"attributes":{"id":"car-bump","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5e0","voted":false},"id":"car-bump","links":{"self":"/api/icons/car-bump"},"type":"icon"},{"attributes":{"id":"car-bus","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f85a","voted":false},"id":"car-bus","links":{"self":"/api/icons/car-bus"},"type":"icon"},{"attributes":{"id":"car-crash","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5e1","voted":false},"id":"car-crash","links":{"self":"/api/icons/car-crash"},"type":"icon"},{"attributes":{"id":"car-garage","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5e2","voted":false},"id":"car-garage","links":{"self":"/api/icons/car-garage"},"type":"icon"},{"attributes":{"id":"car-mechanic","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5e3","voted":false},"id":"car-mechanic","links":{"self":"/api/icons/car-mechanic"},"type":"icon"},{"attributes":{"id":"car-side","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5e4","voted":false},"id":"car-side","links":{"self":"/api/icons/car-side"},"type":"icon"},{"attributes":{"id":"car-tilt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5e5","voted":false},"id":"car-tilt","links":{"self":"/api/icons/car-tilt"},"type":"icon"},{"attributes":{"id":"car-wash","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5e6","voted":false},"id":"car-wash","links":{"self":"/api/icons/car-wash"},"type":"icon"},{"attributes":{"id":"caravan","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8ff","voted":true},"id":"caravan","links":{"self":"/api/icons/caravan"},"type":"icon"},{"attributes":{"id":"caravan-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f900","voted":false},"id":"caravan-alt","links":{"self":"/api/icons/caravan-alt"},"type":"icon"},{"attributes":{"id":"caret-circle-down","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f32d","voted":false},"id":"caret-circle-down","links":{"self":"/api/icons/caret-circle-down"},"type":"icon"},{"attributes":{"id":"caret-circle-left","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f32e","voted":false},"id":"caret-circle-left","links":{"self":"/api/icons/caret-circle-left"},"type":"icon"},{"attributes":{"id":"caret-circle-right","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f330","voted":false},"id":"caret-circle-right","links":{"self":"/api/icons/caret-circle-right"},"type":"icon"},{"attributes":{"id":"caret-circle-up","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f331","voted":false},"id":"caret-circle-up","links":{"self":"/api/icons/caret-circle-up"},"type":"icon"},{"attributes":{"id":"caret-down","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0d7","voted":false},"id":"caret-down","links":{"self":"/api/icons/caret-down"},"type":"icon"},{"attributes":{"id":"caret-left","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0d9","voted":false},"id":"caret-left","links":{"self":"/api/icons/caret-left"},"type":"icon"},{"attributes":{"id":"caret-right","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0da","voted":false},"id":"caret-right","links":{"self":"/api/icons/caret-right"},"type":"icon"},{"attributes":{"id":"caret-square-down","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f150","voted":false},"id":"caret-square-down","links":{"self":"/api/icons/caret-square-down"},"type":"icon"},{"attributes":{"id":"caret-square-left","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f191","voted":false},"id":"caret-square-left","links":{"self":"/api/icons/caret-square-left"},"type":"icon"},{"attributes":{"id":"caret-square-right","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f152","voted":false},"id":"caret-square-right","links":{"self":"/api/icons/caret-square-right"},"type":"icon"},{"attributes":{"id":"caret-square-up","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f151","voted":false},"id":"caret-square-up","links":{"self":"/api/icons/caret-square-up"},"type":"icon"},{"attributes":{"id":"caret-up","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0d8","voted":false},"id":"caret-up","links":{"self":"/api/icons/caret-up"},"type":"icon"},{"attributes":{"id":"carrot","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f787","voted":false},"id":"carrot","links":{"self":"/api/icons/carrot"},"type":"icon"},{"attributes":{"id":"cars","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f85b","voted":false},"id":"cars","links":{"self":"/api/icons/cars"},"type":"icon"},{"attributes":{"id":"cart-arrow-down","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f218","voted":false},"id":"cart-arrow-down","links":{"self":"/api/icons/cart-arrow-down"},"type":"icon"},{"attributes":{"id":"cart-plus","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f217","voted":false},"id":"cart-plus","links":{"self":"/api/icons/cart-plus"},"type":"icon"},{"attributes":{"id":"cash-register","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f788","voted":true},"id":"cash-register","links":{"self":"/api/icons/cash-register"},"type":"icon"},{"attributes":{"id":"cassette-tape","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8ab","voted":false},"id":"cassette-tape","links":{"self":"/api/icons/cassette-tape"},"type":"icon"},{"attributes":{"id":"cat","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6be","voted":true},"id":"cat","links":{"self":"/api/icons/cat"},"type":"icon"},{"attributes":{"id":"cat-space","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f901","voted":false},"id":"cat-space","links":{"self":"/api/icons/cat-space"},"type":"icon"},{"attributes":{"id":"cauldron","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6bf","voted":false},"id":"cauldron","links":{"self":"/api/icons/cauldron"},"type":"icon"},{"attributes":{"id":"cc-amazon-pay","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f42d","voted":false},"id":"cc-amazon-pay","links":{"self":"/api/icons/cc-amazon-pay"},"type":"icon"},{"attributes":{"id":"cc-amex","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1f3","voted":false},"id":"cc-amex","links":{"self":"/api/icons/cc-amex"},"type":"icon"},{"attributes":{"id":"cc-apple-pay","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f416","voted":false},"id":"cc-apple-pay","links":{"self":"/api/icons/cc-apple-pay"},"type":"icon"},{"attributes":{"id":"cc-diners-club","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f24c","voted":false},"id":"cc-diners-club","links":{"self":"/api/icons/cc-diners-club"},"type":"icon"},{"attributes":{"id":"cc-discover","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1f2","voted":false},"id":"cc-discover","links":{"self":"/api/icons/cc-discover"},"type":"icon"},{"attributes":{"id":"cc-jcb","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f24b","voted":false},"id":"cc-jcb","links":{"self":"/api/icons/cc-jcb"},"type":"icon"},{"attributes":{"id":"cc-mastercard","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1f1","voted":false},"id":"cc-mastercard","links":{"self":"/api/icons/cc-mastercard"},"type":"icon"},{"attributes":{"id":"cc-paypal","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1f4","voted":false},"id":"cc-paypal","links":{"self":"/api/icons/cc-paypal"},"type":"icon"},{"attributes":{"id":"cc-stripe","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1f5","voted":false},"id":"cc-stripe","links":{"self":"/api/icons/cc-stripe"},"type":"icon"},{"attributes":{"id":"cc-visa","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1f0","voted":false},"id":"cc-visa","links":{"self":"/api/icons/cc-visa"},"type":"icon"},{"attributes":{"id":"cctv","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8ac","voted":false},"id":"cctv","links":{"self":"/api/icons/cctv"},"type":"icon"},{"attributes":{"id":"centercode","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f380","voted":false},"id":"centercode","links":{"self":"/api/icons/centercode"},"type":"icon"},{"attributes":{"id":"centos","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f789","voted":true},"id":"centos","links":{"self":"/api/icons/centos"},"type":"icon"},{"attributes":{"id":"certificate","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0a3","voted":false},"id":"certificate","links":{"self":"/api/icons/certificate"},"type":"icon"},{"attributes":{"id":"chair","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6c0","voted":true},"id":"chair","links":{"self":"/api/icons/chair"},"type":"icon"},{"attributes":{"id":"chair-office","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6c1","voted":true},"id":"chair-office","links":{"self":"/api/icons/chair-office"},"type":"icon"},{"attributes":{"id":"chalkboard","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f51b","voted":false},"id":"chalkboard","links":{"self":"/api/icons/chalkboard"},"type":"icon"},{"attributes":{"id":"chalkboard-teacher","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f51c","voted":false},"id":"chalkboard-teacher","links":{"self":"/api/icons/chalkboard-teacher"},"type":"icon"},{"attributes":{"id":"charging-station","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5e7","voted":false},"id":"charging-station","links":{"self":"/api/icons/charging-station"},"type":"icon"},{"attributes":{"id":"chart-area","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1fe","voted":false},"id":"chart-area","links":{"self":"/api/icons/chart-area"},"type":"icon"},{"attributes":{"id":"chart-bar","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f080","voted":false},"id":"chart-bar","links":{"self":"/api/icons/chart-bar"},"type":"icon"},{"attributes":{"id":"chart-line","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f201","voted":false},"id":"chart-line","links":{"self":"/api/icons/chart-line"},"type":"icon"},{"attributes":{"id":"chart-line-down","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f64d","voted":false},"id":"chart-line-down","links":{"self":"/api/icons/chart-line-down"},"type":"icon"},{"attributes":{"id":"chart-network","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f78a","voted":true},"id":"chart-network","links":{"self":"/api/icons/chart-network"},"type":"icon"},{"attributes":{"id":"chart-pie","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f200","voted":false},"id":"chart-pie","links":{"self":"/api/icons/chart-pie"},"type":"icon"},{"attributes":{"id":"chart-pie-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f64e","voted":false},"id":"chart-pie-alt","links":{"self":"/api/icons/chart-pie-alt"},"type":"icon"},{"attributes":{"id":"chart-scatter","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7ee","voted":true},"id":"chart-scatter","links":{"self":"/api/icons/chart-scatter"},"type":"icon"},{"attributes":{"id":"check","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f00c","voted":false},"id":"check","links":{"self":"/api/icons/check"},"type":"icon"},{"attributes":{"id":"check-circle","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f058","voted":false},"id":"check-circle","links":{"self":"/api/icons/check-circle"},"type":"icon"},{"attributes":{"id":"check-double","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f560","voted":true},"id":"check-double","links":{"self":"/api/icons/check-double"},"type":"icon"},{"attributes":{"id":"check-square","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f14a","voted":false},"id":"check-square","links":{"self":"/api/icons/check-square"},"type":"icon"},{"attributes":{"id":"cheese","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7ef","voted":false},"id":"cheese","links":{"self":"/api/icons/cheese"},"type":"icon"},{"attributes":{"id":"cheese-swiss","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7f0","voted":false},"id":"cheese-swiss","links":{"self":"/api/icons/cheese-swiss"},"type":"icon"},{"attributes":{"id":"cheeseburger","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7f1","voted":false},"id":"cheeseburger","links":{"self":"/api/icons/cheeseburger"},"type":"icon"},{"attributes":{"id":"chess","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f439","voted":false},"id":"chess","links":{"self":"/api/icons/chess"},"type":"icon"},{"attributes":{"id":"chess-bishop","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f43a","voted":false},"id":"chess-bishop","links":{"self":"/api/icons/chess-bishop"},"type":"icon"},{"attributes":{"id":"chess-bishop-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f43b","voted":false},"id":"chess-bishop-alt","links":{"self":"/api/icons/chess-bishop-alt"},"type":"icon"},{"attributes":{"id":"chess-board","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f43c","voted":false},"id":"chess-board","links":{"self":"/api/icons/chess-board"},"type":"icon"},{"attributes":{"id":"chess-clock","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f43d","voted":false},"id":"chess-clock","links":{"self":"/api/icons/chess-clock"},"type":"icon"},{"attributes":{"id":"chess-clock-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f43e","voted":false},"id":"chess-clock-alt","links":{"self":"/api/icons/chess-clock-alt"},"type":"icon"},{"attributes":{"id":"chess-king","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f43f","voted":false},"id":"chess-king","links":{"self":"/api/icons/chess-king"},"type":"icon"},{"attributes":{"id":"chess-king-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f440","voted":false},"id":"chess-king-alt","links":{"self":"/api/icons/chess-king-alt"},"type":"icon"},{"attributes":{"id":"chess-knight","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f441","voted":false},"id":"chess-knight","links":{"self":"/api/icons/chess-knight"},"type":"icon"},{"attributes":{"id":"chess-knight-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f442","voted":false},"id":"chess-knight-alt","links":{"self":"/api/icons/chess-knight-alt"},"type":"icon"},{"attributes":{"id":"chess-pawn","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f443","voted":false},"id":"chess-pawn","links":{"self":"/api/icons/chess-pawn"},"type":"icon"},{"attributes":{"id":"chess-pawn-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f444","voted":false},"id":"chess-pawn-alt","links":{"self":"/api/icons/chess-pawn-alt"},"type":"icon"},{"attributes":{"id":"chess-queen","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f445","voted":false},"id":"chess-queen","links":{"self":"/api/icons/chess-queen"},"type":"icon"},{"attributes":{"id":"chess-queen-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f446","voted":false},"id":"chess-queen-alt","links":{"self":"/api/icons/chess-queen-alt"},"type":"icon"},{"attributes":{"id":"chess-rook","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f447","voted":false},"id":"chess-rook","links":{"self":"/api/icons/chess-rook"},"type":"icon"},{"attributes":{"id":"chess-rook-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f448","voted":false},"id":"chess-rook-alt","links":{"self":"/api/icons/chess-rook-alt"},"type":"icon"},{"attributes":{"id":"chevron-circle-down","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f13a","voted":false},"id":"chevron-circle-down","links":{"self":"/api/icons/chevron-circle-down"},"type":"icon"},{"attributes":{"id":"chevron-circle-left","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f137","voted":false},"id":"chevron-circle-left","links":{"self":"/api/icons/chevron-circle-left"},"type":"icon"},{"attributes":{"id":"chevron-circle-right","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f138","voted":false},"id":"chevron-circle-right","links":{"self":"/api/icons/chevron-circle-right"},"type":"icon"},{"attributes":{"id":"chevron-circle-up","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f139","voted":false},"id":"chevron-circle-up","links":{"self":"/api/icons/chevron-circle-up"},"type":"icon"},{"attributes":{"id":"chevron-double-down","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f322","voted":false},"id":"chevron-double-down","links":{"self":"/api/icons/chevron-double-down"},"type":"icon"},{"attributes":{"id":"chevron-double-left","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f323","voted":false},"id":"chevron-double-left","links":{"self":"/api/icons/chevron-double-left"},"type":"icon"},{"attributes":{"id":"chevron-double-right","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f324","voted":false},"id":"chevron-double-right","links":{"self":"/api/icons/chevron-double-right"},"type":"icon"},{"attributes":{"id":"chevron-double-up","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f325","voted":false},"id":"chevron-double-up","links":{"self":"/api/icons/chevron-double-up"},"type":"icon"},{"attributes":{"id":"chevron-down","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f078","voted":false},"id":"chevron-down","links":{"self":"/api/icons/chevron-down"},"type":"icon"},{"attributes":{"id":"chevron-left","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f053","voted":false},"id":"chevron-left","links":{"self":"/api/icons/chevron-left"},"type":"icon"},{"attributes":{"id":"chevron-right","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f054","voted":false},"id":"chevron-right","links":{"self":"/api/icons/chevron-right"},"type":"icon"},{"attributes":{"id":"chevron-square-down","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f329","voted":false},"id":"chevron-square-down","links":{"self":"/api/icons/chevron-square-down"},"type":"icon"},{"attributes":{"id":"chevron-square-left","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f32a","voted":false},"id":"chevron-square-left","links":{"self":"/api/icons/chevron-square-left"},"type":"icon"},{"attributes":{"id":"chevron-square-right","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f32b","voted":false},"id":"chevron-square-right","links":{"self":"/api/icons/chevron-square-right"},"type":"icon"},{"attributes":{"id":"chevron-square-up","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f32c","voted":false},"id":"chevron-square-up","links":{"self":"/api/icons/chevron-square-up"},"type":"icon"},{"attributes":{"id":"chevron-up","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f077","voted":false},"id":"chevron-up","links":{"self":"/api/icons/chevron-up"},"type":"icon"},{"attributes":{"id":"child","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1ae","voted":false},"id":"child","links":{"self":"/api/icons/child"},"type":"icon"},{"attributes":{"id":"chimney","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f78b","voted":false},"id":"chimney","links":{"self":"/api/icons/chimney"},"type":"icon"},{"attributes":{"id":"chrome","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f268","voted":false},"id":"chrome","links":{"self":"/api/icons/chrome"},"type":"icon"},{"attributes":{"id":"chromecast","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f838","voted":false},"id":"chromecast","links":{"self":"/api/icons/chromecast"},"type":"icon"},{"attributes":{"id":"church","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f51d","voted":true},"id":"church","links":{"self":"/api/icons/church"},"type":"icon"},{"attributes":{"id":"circle","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f111","voted":false},"id":"circle","links":{"self":"/api/icons/circle"},"type":"icon"},{"attributes":{"id":"circle-notch","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1ce","voted":false},"id":"circle-notch","links":{"self":"/api/icons/circle-notch"},"type":"icon"},{"attributes":{"id":"city","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f64f","voted":false},"id":"city","links":{"self":"/api/icons/city"},"type":"icon"},{"attributes":{"id":"clarinet","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8ad","voted":false},"id":"clarinet","links":{"self":"/api/icons/clarinet"},"type":"icon"},{"attributes":{"id":"claw-marks","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6c2","voted":false},"id":"claw-marks","links":{"self":"/api/icons/claw-marks"},"type":"icon"},{"attributes":{"id":"clinic-medical","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7f2","voted":false},"id":"clinic-medical","links":{"self":"/api/icons/clinic-medical"},"type":"icon"},{"attributes":{"id":"clipboard","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f328","voted":false},"id":"clipboard","links":{"self":"/api/icons/clipboard"},"type":"icon"},{"attributes":{"id":"clipboard-check","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f46c","voted":false},"id":"clipboard-check","links":{"self":"/api/icons/clipboard-check"},"type":"icon"},{"attributes":{"id":"clipboard-list","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f46d","voted":false},"id":"clipboard-list","links":{"self":"/api/icons/clipboard-list"},"type":"icon"},{"attributes":{"id":"clipboard-list-check","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f737","voted":false},"id":"clipboard-list-check","links":{"self":"/api/icons/clipboard-list-check"},"type":"icon"},{"attributes":{"id":"clipboard-prescription","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5e8","voted":false},"id":"clipboard-prescription","links":{"self":"/api/icons/clipboard-prescription"},"type":"icon"},{"attributes":{"id":"clipboard-user","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7f3","voted":false},"id":"clipboard-user","links":{"self":"/api/icons/clipboard-user"},"type":"icon"},{"attributes":{"id":"clock","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f017","voted":false},"id":"clock","links":{"self":"/api/icons/clock"},"type":"icon"},{"attributes":{"id":"clone","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f24d","voted":false},"id":"clone","links":{"self":"/api/icons/clone"},"type":"icon"},{"attributes":{"id":"closed-captioning","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f20a","voted":false},"id":"closed-captioning","links":{"self":"/api/icons/closed-captioning"},"type":"icon"},{"attributes":{"id":"cloud","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0c2","voted":false},"id":"cloud","links":{"self":"/api/icons/cloud"},"type":"icon"},{"attributes":{"id":"cloud-download","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0ed","voted":false},"id":"cloud-download","links":{"self":"/api/icons/cloud-download"},"type":"icon"},{"attributes":{"id":"cloud-download-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f381","voted":false},"id":"cloud-download-alt","links":{"self":"/api/icons/cloud-download-alt"},"type":"icon"},{"attributes":{"id":"cloud-drizzle","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f738","voted":false},"id":"cloud-drizzle","links":{"self":"/api/icons/cloud-drizzle"},"type":"icon"},{"attributes":{"id":"cloud-hail","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f739","voted":false},"id":"cloud-hail","links":{"self":"/api/icons/cloud-hail"},"type":"icon"},{"attributes":{"id":"cloud-hail-mixed","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f73a","voted":false},"id":"cloud-hail-mixed","links":{"self":"/api/icons/cloud-hail-mixed"},"type":"icon"},{"attributes":{"id":"cloud-meatball","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f73b","voted":false},"id":"cloud-meatball","links":{"self":"/api/icons/cloud-meatball"},"type":"icon"},{"attributes":{"id":"cloud-moon","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6c3","voted":false},"id":"cloud-moon","links":{"self":"/api/icons/cloud-moon"},"type":"icon"},{"attributes":{"id":"cloud-moon-rain","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f73c","voted":false},"id":"cloud-moon-rain","links":{"self":"/api/icons/cloud-moon-rain"},"type":"icon"},{"attributes":{"id":"cloud-music","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8ae","voted":false},"id":"cloud-music","links":{"self":"/api/icons/cloud-music"},"type":"icon"},{"attributes":{"id":"cloud-rain","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f73d","voted":false},"id":"cloud-rain","links":{"self":"/api/icons/cloud-rain"},"type":"icon"},{"attributes":{"id":"cloud-rainbow","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f73e","voted":false},"id":"cloud-rainbow","links":{"self":"/api/icons/cloud-rainbow"},"type":"icon"},{"attributes":{"id":"cloud-showers","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f73f","voted":false},"id":"cloud-showers","links":{"self":"/api/icons/cloud-showers"},"type":"icon"},{"attributes":{"id":"cloud-showers-heavy","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f740","voted":false},"id":"cloud-showers-heavy","links":{"self":"/api/icons/cloud-showers-heavy"},"type":"icon"},{"attributes":{"id":"cloud-sleet","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f741","voted":false},"id":"cloud-sleet","links":{"self":"/api/icons/cloud-sleet"},"type":"icon"},{"attributes":{"id":"cloud-snow","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f742","voted":false},"id":"cloud-snow","links":{"self":"/api/icons/cloud-snow"},"type":"icon"},{"attributes":{"id":"cloud-sun","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6c4","voted":false},"id":"cloud-sun","links":{"self":"/api/icons/cloud-sun"},"type":"icon"},{"attributes":{"id":"cloud-sun-rain","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f743","voted":false},"id":"cloud-sun-rain","links":{"self":"/api/icons/cloud-sun-rain"},"type":"icon"},{"attributes":{"id":"cloud-upload","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0ee","voted":false},"id":"cloud-upload","links":{"self":"/api/icons/cloud-upload"},"type":"icon"},{"attributes":{"id":"cloud-upload-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f382","voted":false},"id":"cloud-upload-alt","links":{"self":"/api/icons/cloud-upload-alt"},"type":"icon"},{"attributes":{"id":"clouds","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f744","voted":false},"id":"clouds","links":{"self":"/api/icons/clouds"},"type":"icon"},{"attributes":{"id":"clouds-moon","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f745","voted":false},"id":"clouds-moon","links":{"self":"/api/icons/clouds-moon"},"type":"icon"},{"attributes":{"id":"clouds-sun","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f746","voted":false},"id":"clouds-sun","links":{"self":"/api/icons/clouds-sun"},"type":"icon"},{"attributes":{"id":"cloudscale","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f383","voted":false},"id":"cloudscale","links":{"self":"/api/icons/cloudscale"},"type":"icon"},{"attributes":{"id":"cloudsmith","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f384","voted":false},"id":"cloudsmith","links":{"self":"/api/icons/cloudsmith"},"type":"icon"},{"attributes":{"id":"cloudversify","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f385","voted":false},"id":"cloudversify","links":{"self":"/api/icons/cloudversify"},"type":"icon"},{"attributes":{"id":"club","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f327","voted":false},"id":"club","links":{"self":"/api/icons/club"},"type":"icon"},{"attributes":{"id":"cocktail","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f561","voted":false},"id":"cocktail","links":{"self":"/api/icons/cocktail"},"type":"icon"},{"attributes":{"id":"code","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f121","voted":false},"id":"code","links":{"self":"/api/icons/code"},"type":"icon"},{"attributes":{"id":"code-branch","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f126","voted":false},"id":"code-branch","links":{"self":"/api/icons/code-branch"},"type":"icon"},{"attributes":{"id":"code-commit","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f386","voted":false},"id":"code-commit","links":{"self":"/api/icons/code-commit"},"type":"icon"},{"attributes":{"id":"code-merge","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f387","voted":false},"id":"code-merge","links":{"self":"/api/icons/code-merge"},"type":"icon"},{"attributes":{"id":"codepen","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1cb","voted":false},"id":"codepen","links":{"self":"/api/icons/codepen"},"type":"icon"},{"attributes":{"id":"codiepie","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f284","voted":false},"id":"codiepie","links":{"self":"/api/icons/codiepie"},"type":"icon"},{"attributes":{"id":"coffee","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0f4","voted":false},"id":"coffee","links":{"self":"/api/icons/coffee"},"type":"icon"},{"attributes":{"id":"coffee-pot","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f902","voted":false},"id":"coffee-pot","links":{"self":"/api/icons/coffee-pot"},"type":"icon"},{"attributes":{"id":"coffee-togo","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6c5","voted":false},"id":"coffee-togo","links":{"self":"/api/icons/coffee-togo"},"type":"icon"},{"attributes":{"id":"coffin","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6c6","voted":false},"id":"coffin","links":{"self":"/api/icons/coffin"},"type":"icon"},{"attributes":{"id":"coffin-cross","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f951","voted":false},"id":"coffin-cross","links":{"self":"/api/icons/coffin-cross"},"type":"icon"},{"attributes":{"id":"cog","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f013","voted":false},"id":"cog","links":{"self":"/api/icons/cog"},"type":"icon"},{"attributes":{"id":"cogs","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f085","voted":false},"id":"cogs","links":{"self":"/api/icons/cogs"},"type":"icon"},{"attributes":{"id":"coin","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f85c","voted":true},"id":"coin","links":{"self":"/api/icons/coin"},"type":"icon"},{"attributes":{"id":"coins","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f51e","voted":true},"id":"coins","links":{"self":"/api/icons/coins"},"type":"icon"},{"attributes":{"id":"columns","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0db","voted":false},"id":"columns","links":{"self":"/api/icons/columns"},"type":"icon"},{"attributes":{"id":"comet","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f903","voted":false},"id":"comet","links":{"self":"/api/icons/comet"},"type":"icon"},{"attributes":{"id":"comment","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f075","voted":false},"id":"comment","links":{"self":"/api/icons/comment"},"type":"icon"},{"attributes":{"id":"comment-alt","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f27a","voted":false},"id":"comment-alt","links":{"self":"/api/icons/comment-alt"},"type":"icon"},{"attributes":{"id":"comment-alt-check","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4a2","voted":false},"id":"comment-alt-check","links":{"self":"/api/icons/comment-alt-check"},"type":"icon"},{"attributes":{"id":"comment-alt-dollar","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f650","voted":false},"id":"comment-alt-dollar","links":{"self":"/api/icons/comment-alt-dollar"},"type":"icon"},{"attributes":{"id":"comment-alt-dots","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4a3","voted":false},"id":"comment-alt-dots","links":{"self":"/api/icons/comment-alt-dots"},"type":"icon"},{"attributes":{"id":"comment-alt-edit","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4a4","voted":false},"id":"comment-alt-edit","links":{"self":"/api/icons/comment-alt-edit"},"type":"icon"},{"attributes":{"id":"comment-alt-exclamation","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4a5","voted":false},"id":"comment-alt-exclamation","links":{"self":"/api/icons/comment-alt-exclamation"},"type":"icon"},{"attributes":{"id":"comment-alt-lines","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4a6","voted":false},"id":"comment-alt-lines","links":{"self":"/api/icons/comment-alt-lines"},"type":"icon"},{"attributes":{"id":"comment-alt-medical","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7f4","voted":false},"id":"comment-alt-medical","links":{"self":"/api/icons/comment-alt-medical"},"type":"icon"},{"attributes":{"id":"comment-alt-minus","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4a7","voted":false},"id":"comment-alt-minus","links":{"self":"/api/icons/comment-alt-minus"},"type":"icon"},{"attributes":{"id":"comment-alt-music","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8af","voted":false},"id":"comment-alt-music","links":{"self":"/api/icons/comment-alt-music"},"type":"icon"},{"attributes":{"id":"comment-alt-plus","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4a8","voted":false},"id":"comment-alt-plus","links":{"self":"/api/icons/comment-alt-plus"},"type":"icon"},{"attributes":{"id":"comment-alt-slash","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4a9","voted":false},"id":"comment-alt-slash","links":{"self":"/api/icons/comment-alt-slash"},"type":"icon"},{"attributes":{"id":"comment-alt-smile","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4aa","voted":false},"id":"comment-alt-smile","links":{"self":"/api/icons/comment-alt-smile"},"type":"icon"},{"attributes":{"id":"comment-alt-times","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4ab","voted":false},"id":"comment-alt-times","links":{"self":"/api/icons/comment-alt-times"},"type":"icon"},{"attributes":{"id":"comment-check","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4ac","voted":false},"id":"comment-check","links":{"self":"/api/icons/comment-check"},"type":"icon"},{"attributes":{"id":"comment-dollar","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f651","voted":false},"id":"comment-dollar","links":{"self":"/api/icons/comment-dollar"},"type":"icon"},{"attributes":{"id":"comment-dots","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4ad","voted":false},"id":"comment-dots","links":{"self":"/api/icons/comment-dots"},"type":"icon"},{"attributes":{"id":"comment-edit","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4ae","voted":false},"id":"comment-edit","links":{"self":"/api/icons/comment-edit"},"type":"icon"},{"attributes":{"id":"comment-exclamation","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4af","voted":false},"id":"comment-exclamation","links":{"self":"/api/icons/comment-exclamation"},"type":"icon"},{"attributes":{"id":"comment-lines","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4b0","voted":false},"id":"comment-lines","links":{"self":"/api/icons/comment-lines"},"type":"icon"},{"attributes":{"id":"comment-medical","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7f5","voted":false},"id":"comment-medical","links":{"self":"/api/icons/comment-medical"},"type":"icon"},{"attributes":{"id":"comment-minus","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4b1","voted":false},"id":"comment-minus","links":{"self":"/api/icons/comment-minus"},"type":"icon"},{"attributes":{"id":"comment-music","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8b0","voted":false},"id":"comment-music","links":{"self":"/api/icons/comment-music"},"type":"icon"},{"attributes":{"id":"comment-plus","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4b2","voted":false},"id":"comment-plus","links":{"self":"/api/icons/comment-plus"},"type":"icon"},{"attributes":{"id":"comment-slash","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4b3","voted":false},"id":"comment-slash","links":{"self":"/api/icons/comment-slash"},"type":"icon"},{"attributes":{"id":"comment-smile","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4b4","voted":false},"id":"comment-smile","links":{"self":"/api/icons/comment-smile"},"type":"icon"},{"attributes":{"id":"comment-times","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4b5","voted":false},"id":"comment-times","links":{"self":"/api/icons/comment-times"},"type":"icon"},{"attributes":{"id":"comments","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f086","voted":false},"id":"comments","links":{"self":"/api/icons/comments"},"type":"icon"},{"attributes":{"id":"comments-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4b6","voted":false},"id":"comments-alt","links":{"self":"/api/icons/comments-alt"},"type":"icon"},{"attributes":{"id":"comments-alt-dollar","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f652","voted":false},"id":"comments-alt-dollar","links":{"self":"/api/icons/comments-alt-dollar"},"type":"icon"},{"attributes":{"id":"comments-dollar","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f653","voted":false},"id":"comments-dollar","links":{"self":"/api/icons/comments-dollar"},"type":"icon"},{"attributes":{"id":"compact-disc","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f51f","voted":true},"id":"compact-disc","links":{"self":"/api/icons/compact-disc"},"type":"icon"},{"attributes":{"id":"compass","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f14e","voted":false},"id":"compass","links":{"self":"/api/icons/compass"},"type":"icon"},{"attributes":{"id":"compass-slash","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5e9","voted":false},"id":"compass-slash","links":{"self":"/api/icons/compass-slash"},"type":"icon"},{"attributes":{"id":"compress","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f066","voted":false},"id":"compress","links":{"self":"/api/icons/compress"},"type":"icon"},{"attributes":{"id":"compress-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f422","voted":false},"id":"compress-alt","links":{"self":"/api/icons/compress-alt"},"type":"icon"},{"attributes":{"id":"compress-arrows-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f78c","voted":true},"id":"compress-arrows-alt","links":{"self":"/api/icons/compress-arrows-alt"},"type":"icon"},{"attributes":{"id":"compress-wide","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f326","voted":false},"id":"compress-wide","links":{"self":"/api/icons/compress-wide"},"type":"icon"},{"attributes":{"id":"computer-classic","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8b1","voted":false},"id":"computer-classic","links":{"self":"/api/icons/computer-classic"},"type":"icon"},{"attributes":{"id":"computer-speaker","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8b2","voted":false},"id":"computer-speaker","links":{"self":"/api/icons/computer-speaker"},"type":"icon"},{"attributes":{"id":"concierge-bell","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f562","voted":false},"id":"concierge-bell","links":{"self":"/api/icons/concierge-bell"},"type":"icon"},{"attributes":{"id":"confluence","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f78d","voted":true},"id":"confluence","links":{"self":"/api/icons/confluence"},"type":"icon"},{"attributes":{"id":"connectdevelop","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f20e","voted":false},"id":"connectdevelop","links":{"self":"/api/icons/connectdevelop"},"type":"icon"},{"attributes":{"id":"construction","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f85d","voted":true},"id":"construction","links":{"self":"/api/icons/construction"},"type":"icon"},{"attributes":{"id":"container-storage","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4b7","voted":false},"id":"container-storage","links":{"self":"/api/icons/container-storage"},"type":"icon"},{"attributes":{"id":"contao","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f26d","voted":false},"id":"contao","links":{"self":"/api/icons/contao"},"type":"icon"},{"attributes":{"id":"conveyor-belt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f46e","voted":false},"id":"conveyor-belt","links":{"self":"/api/icons/conveyor-belt"},"type":"icon"},{"attributes":{"id":"conveyor-belt-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f46f","voted":false},"id":"conveyor-belt-alt","links":{"self":"/api/icons/conveyor-belt-alt"},"type":"icon"},{"attributes":{"id":"cookie","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f563","voted":true},"id":"cookie","links":{"self":"/api/icons/cookie"},"type":"icon"},{"attributes":{"id":"cookie-bite","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f564","voted":true},"id":"cookie-bite","links":{"self":"/api/icons/cookie-bite"},"type":"icon"},{"attributes":{"id":"copy","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0c5","voted":false},"id":"copy","links":{"self":"/api/icons/copy"},"type":"icon"},{"attributes":{"id":"copyright","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1f9","voted":false},"id":"copyright","links":{"self":"/api/icons/copyright"},"type":"icon"},{"attributes":{"id":"corn","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6c7","voted":false},"id":"corn","links":{"self":"/api/icons/corn"},"type":"icon"},{"attributes":{"id":"cotton-bureau","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f89e","voted":false},"id":"cotton-bureau","links":{"self":"/api/icons/cotton-bureau"},"type":"icon"},{"attributes":{"id":"couch","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4b8","voted":false},"id":"couch","links":{"self":"/api/icons/couch"},"type":"icon"},{"attributes":{"id":"cow","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6c8","voted":false},"id":"cow","links":{"self":"/api/icons/cow"},"type":"icon"},{"attributes":{"id":"cowbell","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8b3","voted":false},"id":"cowbell","links":{"self":"/api/icons/cowbell"},"type":"icon"},{"attributes":{"id":"cowbell-more","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8b4","voted":false},"id":"cowbell-more","links":{"self":"/api/icons/cowbell-more"},"type":"icon"},{"attributes":{"id":"cpanel","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f388","voted":false},"id":"cpanel","links":{"self":"/api/icons/cpanel"},"type":"icon"},{"attributes":{"id":"creative-commons","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f25e","voted":false},"id":"creative-commons","links":{"self":"/api/icons/creative-commons"},"type":"icon"},{"attributes":{"id":"creative-commons-by","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f4e7","voted":false},"id":"creative-commons-by","links":{"self":"/api/icons/creative-commons-by"},"type":"icon"},{"attributes":{"id":"creative-commons-nc","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f4e8","voted":false},"id":"creative-commons-nc","links":{"self":"/api/icons/creative-commons-nc"},"type":"icon"},{"attributes":{"id":"creative-commons-nc-eu","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f4e9","voted":false},"id":"creative-commons-nc-eu","links":{"self":"/api/icons/creative-commons-nc-eu"},"type":"icon"},{"attributes":{"id":"creative-commons-nc-jp","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f4ea","voted":false},"id":"creative-commons-nc-jp","links":{"self":"/api/icons/creative-commons-nc-jp"},"type":"icon"},{"attributes":{"id":"creative-commons-nd","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f4eb","voted":false},"id":"creative-commons-nd","links":{"self":"/api/icons/creative-commons-nd"},"type":"icon"},{"attributes":{"id":"creative-commons-pd","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f4ec","voted":false},"id":"creative-commons-pd","links":{"self":"/api/icons/creative-commons-pd"},"type":"icon"},{"attributes":{"id":"creative-commons-pd-alt","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f4ed","voted":false},"id":"creative-commons-pd-alt","links":{"self":"/api/icons/creative-commons-pd-alt"},"type":"icon"},{"attributes":{"id":"creative-commons-remix","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f4ee","voted":false},"id":"creative-commons-remix","links":{"self":"/api/icons/creative-commons-remix"},"type":"icon"},{"attributes":{"id":"creative-commons-sa","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f4ef","voted":false},"id":"creative-commons-sa","links":{"self":"/api/icons/creative-commons-sa"},"type":"icon"},{"attributes":{"id":"creative-commons-sampling","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f4f0","voted":false},"id":"creative-commons-sampling","links":{"self":"/api/icons/creative-commons-sampling"},"type":"icon"},{"attributes":{"id":"creative-commons-sampling-plus","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f4f1","voted":false},"id":"creative-commons-sampling-plus","links":{"self":"/api/icons/creative-commons-sampling-plus"},"type":"icon"},{"attributes":{"id":"creative-commons-share","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f4f2","voted":false},"id":"creative-commons-share","links":{"self":"/api/icons/creative-commons-share"},"type":"icon"},{"attributes":{"id":"creative-commons-zero","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f4f3","voted":false},"id":"creative-commons-zero","links":{"self":"/api/icons/creative-commons-zero"},"type":"icon"},{"attributes":{"id":"credit-card","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f09d","voted":false},"id":"credit-card","links":{"self":"/api/icons/credit-card"},"type":"icon"},{"attributes":{"id":"credit-card-blank","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f389","voted":false},"id":"credit-card-blank","links":{"self":"/api/icons/credit-card-blank"},"type":"icon"},{"attributes":{"id":"credit-card-front","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f38a","voted":false},"id":"credit-card-front","links":{"self":"/api/icons/credit-card-front"},"type":"icon"},{"attributes":{"id":"cricket","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f449","voted":false},"id":"cricket","links":{"self":"/api/icons/cricket"},"type":"icon"},{"attributes":{"id":"critical-role","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f6c9","voted":false},"id":"critical-role","links":{"self":"/api/icons/critical-role"},"type":"icon"},{"attributes":{"id":"croissant","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7f6","voted":false},"id":"croissant","links":{"self":"/api/icons/croissant"},"type":"icon"},{"attributes":{"id":"crop","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f125","voted":false},"id":"crop","links":{"self":"/api/icons/crop"},"type":"icon"},{"attributes":{"id":"crop-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f565","voted":false},"id":"crop-alt","links":{"self":"/api/icons/crop-alt"},"type":"icon"},{"attributes":{"id":"cross","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f654","voted":false},"id":"cross","links":{"self":"/api/icons/cross"},"type":"icon"},{"attributes":{"id":"crosshairs","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f05b","voted":false},"id":"crosshairs","links":{"self":"/api/icons/crosshairs"},"type":"icon"},{"attributes":{"id":"crow","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f520","voted":false},"id":"crow","links":{"self":"/api/icons/crow"},"type":"icon"},{"attributes":{"id":"crown","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f521","voted":true},"id":"crown","links":{"self":"/api/icons/crown"},"type":"icon"},{"attributes":{"id":"crutch","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7f7","voted":false},"id":"crutch","links":{"self":"/api/icons/crutch"},"type":"icon"},{"attributes":{"id":"crutches","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7f8","voted":false},"id":"crutches","links":{"self":"/api/icons/crutches"},"type":"icon"},{"attributes":{"id":"css3","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f13c","voted":false},"id":"css3","links":{"self":"/api/icons/css3"},"type":"icon"},{"attributes":{"id":"css3-alt","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f38b","voted":false},"id":"css3-alt","links":{"self":"/api/icons/css3-alt"},"type":"icon"},{"attributes":{"id":"cube","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1b2","voted":false},"id":"cube","links":{"self":"/api/icons/cube"},"type":"icon"},{"attributes":{"id":"cubes","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1b3","voted":false},"id":"cubes","links":{"self":"/api/icons/cubes"},"type":"icon"},{"attributes":{"id":"curling","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f44a","voted":false},"id":"curling","links":{"self":"/api/icons/curling"},"type":"icon"},{"attributes":{"id":"cut","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0c4","voted":false},"id":"cut","links":{"self":"/api/icons/cut"},"type":"icon"},{"attributes":{"id":"cuttlefish","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f38c","voted":false},"id":"cuttlefish","links":{"self":"/api/icons/cuttlefish"},"type":"icon"},{"attributes":{"id":"d-and-d","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f38d","voted":false},"id":"d-and-d","links":{"self":"/api/icons/d-and-d"},"type":"icon"},{"attributes":{"id":"d-and-d-beyond","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f6ca","voted":false},"id":"d-and-d-beyond","links":{"self":"/api/icons/d-and-d-beyond"},"type":"icon"},{"attributes":{"id":"dagger","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6cb","voted":false},"id":"dagger","links":{"self":"/api/icons/dagger"},"type":"icon"},{"attributes":{"id":"dailymotion","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f952","voted":true},"id":"dailymotion","links":{"self":"/api/icons/dailymotion"},"type":"icon"},{"attributes":{"id":"dashcube","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f210","voted":false},"id":"dashcube","links":{"self":"/api/icons/dashcube"},"type":"icon"},{"attributes":{"id":"database","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1c0","voted":false},"id":"database","links":{"self":"/api/icons/database"},"type":"icon"},{"attributes":{"id":"deaf","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2a4","voted":false},"id":"deaf","links":{"self":"/api/icons/deaf"},"type":"icon"},{"attributes":{"id":"debug","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7f9","voted":false},"id":"debug","links":{"self":"/api/icons/debug"},"type":"icon"},{"attributes":{"id":"deer","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f78e","voted":false},"id":"deer","links":{"self":"/api/icons/deer"},"type":"icon"},{"attributes":{"id":"deer-rudolph","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f78f","voted":false},"id":"deer-rudolph","links":{"self":"/api/icons/deer-rudolph"},"type":"icon"},{"attributes":{"id":"delicious","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1a5","voted":false},"id":"delicious","links":{"self":"/api/icons/delicious"},"type":"icon"},{"attributes":{"id":"democrat","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f747","voted":false},"id":"democrat","links":{"self":"/api/icons/democrat"},"type":"icon"},{"attributes":{"id":"deploydog","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f38e","voted":false},"id":"deploydog","links":{"self":"/api/icons/deploydog"},"type":"icon"},{"attributes":{"id":"deskpro","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f38f","voted":false},"id":"deskpro","links":{"self":"/api/icons/deskpro"},"type":"icon"},{"attributes":{"id":"desktop","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f108","voted":false},"id":"desktop","links":{"self":"/api/icons/desktop"},"type":"icon"},{"attributes":{"id":"desktop-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f390","voted":false},"id":"desktop-alt","links":{"self":"/api/icons/desktop-alt"},"type":"icon"},{"attributes":{"id":"dev","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f6cc","voted":true},"id":"dev","links":{"self":"/api/icons/dev"},"type":"icon"},{"attributes":{"id":"deviantart","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1bd","voted":false},"id":"deviantart","links":{"self":"/api/icons/deviantart"},"type":"icon"},{"attributes":{"id":"dewpoint","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f748","voted":false},"id":"dewpoint","links":{"self":"/api/icons/dewpoint"},"type":"icon"},{"attributes":{"id":"dharmachakra","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f655","voted":false},"id":"dharmachakra","links":{"self":"/api/icons/dharmachakra"},"type":"icon"},{"attributes":{"id":"dhl","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f790","voted":false},"id":"dhl","links":{"self":"/api/icons/dhl"},"type":"icon"},{"attributes":{"id":"diagnoses","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f470","voted":false},"id":"diagnoses","links":{"self":"/api/icons/diagnoses"},"type":"icon"},{"attributes":{"id":"diamond","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f219","voted":false},"id":"diamond","links":{"self":"/api/icons/diamond"},"type":"icon"},{"attributes":{"id":"diaspora","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f791","voted":true},"id":"diaspora","links":{"self":"/api/icons/diaspora"},"type":"icon"},{"attributes":{"id":"dice","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f522","voted":true},"id":"dice","links":{"self":"/api/icons/dice"},"type":"icon"},{"attributes":{"id":"dice-d10","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6cd","voted":false},"id":"dice-d10","links":{"self":"/api/icons/dice-d10"},"type":"icon"},{"attributes":{"id":"dice-d12","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6ce","voted":false},"id":"dice-d12","links":{"self":"/api/icons/dice-d12"},"type":"icon"},{"attributes":{"id":"dice-d20","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6cf","voted":true},"id":"dice-d20","links":{"self":"/api/icons/dice-d20"},"type":"icon"},{"attributes":{"id":"dice-d4","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6d0","voted":false},"id":"dice-d4","links":{"self":"/api/icons/dice-d4"},"type":"icon"},{"attributes":{"id":"dice-d6","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6d1","voted":false},"id":"dice-d6","links":{"self":"/api/icons/dice-d6"},"type":"icon"},{"attributes":{"id":"dice-d8","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6d2","voted":false},"id":"dice-d8","links":{"self":"/api/icons/dice-d8"},"type":"icon"},{"attributes":{"id":"dice-five","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f523","voted":true},"id":"dice-five","links":{"self":"/api/icons/dice-five"},"type":"icon"},{"attributes":{"id":"dice-four","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f524","voted":true},"id":"dice-four","links":{"self":"/api/icons/dice-four"},"type":"icon"},{"attributes":{"id":"dice-one","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f525","voted":true},"id":"dice-one","links":{"self":"/api/icons/dice-one"},"type":"icon"},{"attributes":{"id":"dice-six","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f526","voted":true},"id":"dice-six","links":{"self":"/api/icons/dice-six"},"type":"icon"},{"attributes":{"id":"dice-three","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f527","voted":true},"id":"dice-three","links":{"self":"/api/icons/dice-three"},"type":"icon"},{"attributes":{"id":"dice-two","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f528","voted":true},"id":"dice-two","links":{"self":"/api/icons/dice-two"},"type":"icon"},{"attributes":{"id":"digg","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1a6","voted":false},"id":"digg","links":{"self":"/api/icons/digg"},"type":"icon"},{"attributes":{"id":"digging","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f85e","voted":false},"id":"digging","links":{"self":"/api/icons/digging"},"type":"icon"},{"attributes":{"id":"digital-ocean","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f391","voted":false},"id":"digital-ocean","links":{"self":"/api/icons/digital-ocean"},"type":"icon"},{"attributes":{"id":"digital-tachograph","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f566","voted":true},"id":"digital-tachograph","links":{"self":"/api/icons/digital-tachograph"},"type":"icon"},{"attributes":{"id":"diploma","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5ea","voted":false},"id":"diploma","links":{"self":"/api/icons/diploma"},"type":"icon"},{"attributes":{"id":"directions","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5eb","voted":false},"id":"directions","links":{"self":"/api/icons/directions"},"type":"icon"},{"attributes":{"id":"disc-drive","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8b5","voted":false},"id":"disc-drive","links":{"self":"/api/icons/disc-drive"},"type":"icon"},{"attributes":{"id":"discord","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f392","voted":false},"id":"discord","links":{"self":"/api/icons/discord"},"type":"icon"},{"attributes":{"id":"discourse","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f393","voted":false},"id":"discourse","links":{"self":"/api/icons/discourse"},"type":"icon"},{"attributes":{"id":"disease","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7fa","voted":false},"id":"disease","links":{"self":"/api/icons/disease"},"type":"icon"},{"attributes":{"id":"divide","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f529","voted":false},"id":"divide","links":{"self":"/api/icons/divide"},"type":"icon"},{"attributes":{"id":"dizzy","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f567","voted":false},"id":"dizzy","links":{"self":"/api/icons/dizzy"},"type":"icon"},{"attributes":{"id":"dna","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f471","voted":false},"id":"dna","links":{"self":"/api/icons/dna"},"type":"icon"},{"attributes":{"id":"do-not-enter","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5ec","voted":false},"id":"do-not-enter","links":{"self":"/api/icons/do-not-enter"},"type":"icon"},{"attributes":{"id":"dochub","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f394","voted":false},"id":"dochub","links":{"self":"/api/icons/dochub"},"type":"icon"},{"attributes":{"id":"docker","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f395","voted":false},"id":"docker","links":{"self":"/api/icons/docker"},"type":"icon"},{"attributes":{"id":"dog","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6d3","voted":false},"id":"dog","links":{"self":"/api/icons/dog"},"type":"icon"},{"attributes":{"id":"dog-leashed","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6d4","voted":false},"id":"dog-leashed","links":{"self":"/api/icons/dog-leashed"},"type":"icon"},{"attributes":{"id":"dollar-sign","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f155","voted":false},"id":"dollar-sign","links":{"self":"/api/icons/dollar-sign"},"type":"icon"},{"attributes":{"id":"dolly","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f472","voted":false},"id":"dolly","links":{"self":"/api/icons/dolly"},"type":"icon"},{"attributes":{"id":"dolly-empty","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f473","voted":false},"id":"dolly-empty","links":{"self":"/api/icons/dolly-empty"},"type":"icon"},{"attributes":{"id":"dolly-flatbed","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f474","voted":false},"id":"dolly-flatbed","links":{"self":"/api/icons/dolly-flatbed"},"type":"icon"},{"attributes":{"id":"dolly-flatbed-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f475","voted":false},"id":"dolly-flatbed-alt","links":{"self":"/api/icons/dolly-flatbed-alt"},"type":"icon"},{"attributes":{"id":"dolly-flatbed-empty","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f476","voted":false},"id":"dolly-flatbed-empty","links":{"self":"/api/icons/dolly-flatbed-empty"},"type":"icon"},{"attributes":{"id":"donate","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4b9","voted":false},"id":"donate","links":{"self":"/api/icons/donate"},"type":"icon"},{"attributes":{"id":"door-closed","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f52a","voted":true},"id":"door-closed","links":{"self":"/api/icons/door-closed"},"type":"icon"},{"attributes":{"id":"door-open","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f52b","voted":true},"id":"door-open","links":{"self":"/api/icons/door-open"},"type":"icon"},{"attributes":{"id":"dot-circle","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f192","voted":false},"id":"dot-circle","links":{"self":"/api/icons/dot-circle"},"type":"icon"},{"attributes":{"id":"dove","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4ba","voted":false},"id":"dove","links":{"self":"/api/icons/dove"},"type":"icon"},{"attributes":{"id":"download","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f019","voted":false},"id":"download","links":{"self":"/api/icons/download"},"type":"icon"},{"attributes":{"id":"draft2digital","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f396","voted":false},"id":"draft2digital","links":{"self":"/api/icons/draft2digital"},"type":"icon"},{"attributes":{"id":"drafting-compass","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f568","voted":false},"id":"drafting-compass","links":{"self":"/api/icons/drafting-compass"},"type":"icon"},{"attributes":{"id":"dragon","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6d5","voted":false},"id":"dragon","links":{"self":"/api/icons/dragon"},"type":"icon"},{"attributes":{"id":"draw-circle","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5ed","voted":false},"id":"draw-circle","links":{"self":"/api/icons/draw-circle"},"type":"icon"},{"attributes":{"id":"draw-polygon","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5ee","voted":false},"id":"draw-polygon","links":{"self":"/api/icons/draw-polygon"},"type":"icon"},{"attributes":{"id":"draw-square","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5ef","voted":false},"id":"draw-square","links":{"self":"/api/icons/draw-square"},"type":"icon"},{"attributes":{"id":"dreidel","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f792","voted":false},"id":"dreidel","links":{"self":"/api/icons/dreidel"},"type":"icon"},{"attributes":{"id":"dribbble","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f17d","voted":false},"id":"dribbble","links":{"self":"/api/icons/dribbble"},"type":"icon"},{"attributes":{"id":"dribbble-square","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f397","voted":false},"id":"dribbble-square","links":{"self":"/api/icons/dribbble-square"},"type":"icon"},{"attributes":{"id":"drone","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f85f","voted":true},"id":"drone","links":{"self":"/api/icons/drone"},"type":"icon"},{"attributes":{"id":"drone-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f860","voted":false},"id":"drone-alt","links":{"self":"/api/icons/drone-alt"},"type":"icon"},{"attributes":{"id":"dropbox","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f16b","voted":false},"id":"dropbox","links":{"self":"/api/icons/dropbox"},"type":"icon"},{"attributes":{"id":"drum","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f569","voted":true},"id":"drum","links":{"self":"/api/icons/drum"},"type":"icon"},{"attributes":{"id":"drum-steelpan","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f56a","voted":false},"id":"drum-steelpan","links":{"self":"/api/icons/drum-steelpan"},"type":"icon"},{"attributes":{"id":"drumstick","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6d6","voted":false},"id":"drumstick","links":{"self":"/api/icons/drumstick"},"type":"icon"},{"attributes":{"id":"drumstick-bite","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6d7","voted":false},"id":"drumstick-bite","links":{"self":"/api/icons/drumstick-bite"},"type":"icon"},{"attributes":{"id":"drupal","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1a9","voted":false},"id":"drupal","links":{"self":"/api/icons/drupal"},"type":"icon"},{"attributes":{"id":"dryer","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f861","voted":false},"id":"dryer","links":{"self":"/api/icons/dryer"},"type":"icon"},{"attributes":{"id":"dryer-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f862","voted":false},"id":"dryer-alt","links":{"self":"/api/icons/dryer-alt"},"type":"icon"},{"attributes":{"id":"duck","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6d8","voted":false},"id":"duck","links":{"self":"/api/icons/duck"},"type":"icon"},{"attributes":{"id":"dumbbell","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f44b","voted":false},"id":"dumbbell","links":{"self":"/api/icons/dumbbell"},"type":"icon"},{"attributes":{"id":"dumpster","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f793","voted":true},"id":"dumpster","links":{"self":"/api/icons/dumpster"},"type":"icon"},{"attributes":{"id":"dumpster-fire","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f794","voted":true},"id":"dumpster-fire","links":{"self":"/api/icons/dumpster-fire"},"type":"icon"},{"attributes":{"id":"dungeon","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6d9","voted":false},"id":"dungeon","links":{"self":"/api/icons/dungeon"},"type":"icon"},{"attributes":{"id":"dyalog","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f399","voted":false},"id":"dyalog","links":{"self":"/api/icons/dyalog"},"type":"icon"},{"attributes":{"id":"ear","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5f0","voted":false},"id":"ear","links":{"self":"/api/icons/ear"},"type":"icon"},{"attributes":{"id":"ear-muffs","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f795","voted":false},"id":"ear-muffs","links":{"self":"/api/icons/ear-muffs"},"type":"icon"},{"attributes":{"id":"earlybirds","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f39a","voted":false},"id":"earlybirds","links":{"self":"/api/icons/earlybirds"},"type":"icon"},{"attributes":{"id":"ebay","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f4f4","voted":true},"id":"ebay","links":{"self":"/api/icons/ebay"},"type":"icon"},{"attributes":{"id":"eclipse","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f749","voted":false},"id":"eclipse","links":{"self":"/api/icons/eclipse"},"type":"icon"},{"attributes":{"id":"eclipse-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f74a","voted":false},"id":"eclipse-alt","links":{"self":"/api/icons/eclipse-alt"},"type":"icon"},{"attributes":{"id":"edge","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f282","voted":false},"id":"edge","links":{"self":"/api/icons/edge"},"type":"icon"},{"attributes":{"id":"edit","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f044","voted":false},"id":"edit","links":{"self":"/api/icons/edit"},"type":"icon"},{"attributes":{"id":"egg","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7fb","voted":false},"id":"egg","links":{"self":"/api/icons/egg"},"type":"icon"},{"attributes":{"id":"egg-fried","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7fc","voted":false},"id":"egg-fried","links":{"self":"/api/icons/egg-fried"},"type":"icon"},{"attributes":{"id":"eject","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f052","voted":false},"id":"eject","links":{"self":"/api/icons/eject"},"type":"icon"},{"attributes":{"id":"elementor","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f430","voted":true},"id":"elementor","links":{"self":"/api/icons/elementor"},"type":"icon"},{"attributes":{"id":"elephant","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6da","voted":false},"id":"elephant","links":{"self":"/api/icons/elephant"},"type":"icon"},{"attributes":{"id":"ellipsis-h","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f141","voted":false},"id":"ellipsis-h","links":{"self":"/api/icons/ellipsis-h"},"type":"icon"},{"attributes":{"id":"ellipsis-h-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f39b","voted":false},"id":"ellipsis-h-alt","links":{"self":"/api/icons/ellipsis-h-alt"},"type":"icon"},{"attributes":{"id":"ellipsis-v","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f142","voted":false},"id":"ellipsis-v","links":{"self":"/api/icons/ellipsis-v"},"type":"icon"},{"attributes":{"id":"ellipsis-v-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f39c","voted":false},"id":"ellipsis-v-alt","links":{"self":"/api/icons/ellipsis-v-alt"},"type":"icon"},{"attributes":{"id":"ello","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f5f1","voted":true},"id":"ello","links":{"self":"/api/icons/ello"},"type":"icon"},{"attributes":{"id":"ember","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f423","voted":false},"id":"ember","links":{"self":"/api/icons/ember"},"type":"icon"},{"attributes":{"id":"empire","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1d1","voted":false},"id":"empire","links":{"self":"/api/icons/empire"},"type":"icon"},{"attributes":{"id":"empty-set","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f656","voted":false},"id":"empty-set","links":{"self":"/api/icons/empty-set"},"type":"icon"},{"attributes":{"id":"engine-warning","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5f2","voted":false},"id":"engine-warning","links":{"self":"/api/icons/engine-warning"},"type":"icon"},{"attributes":{"id":"envelope","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0e0","voted":false},"id":"envelope","links":{"self":"/api/icons/envelope"},"type":"icon"},{"attributes":{"id":"envelope-open","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2b6","voted":false},"id":"envelope-open","links":{"self":"/api/icons/envelope-open"},"type":"icon"},{"attributes":{"id":"envelope-open-dollar","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f657","voted":false},"id":"envelope-open-dollar","links":{"self":"/api/icons/envelope-open-dollar"},"type":"icon"},{"attributes":{"id":"envelope-open-text","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f658","voted":false},"id":"envelope-open-text","links":{"self":"/api/icons/envelope-open-text"},"type":"icon"},{"attributes":{"id":"envelope-square","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f199","voted":false},"id":"envelope-square","links":{"self":"/api/icons/envelope-square"},"type":"icon"},{"attributes":{"id":"envira","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f299","voted":false},"id":"envira","links":{"self":"/api/icons/envira"},"type":"icon"},{"attributes":{"id":"equals","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f52c","voted":false},"id":"equals","links":{"self":"/api/icons/equals"},"type":"icon"},{"attributes":{"id":"eraser","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f12d","voted":false},"id":"eraser","links":{"self":"/api/icons/eraser"},"type":"icon"},{"attributes":{"id":"erlang","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f39d","voted":false},"id":"erlang","links":{"self":"/api/icons/erlang"},"type":"icon"},{"attributes":{"id":"ethereum","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f42e","voted":true},"id":"ethereum","links":{"self":"/api/icons/ethereum"},"type":"icon"},{"attributes":{"id":"ethernet","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f796","voted":true},"id":"ethernet","links":{"self":"/api/icons/ethernet"},"type":"icon"},{"attributes":{"id":"etsy","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f2d7","voted":false},"id":"etsy","links":{"self":"/api/icons/etsy"},"type":"icon"},{"attributes":{"id":"euro-sign","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f153","voted":false},"id":"euro-sign","links":{"self":"/api/icons/euro-sign"},"type":"icon"},{"attributes":{"id":"evernote","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f839","voted":false},"id":"evernote","links":{"self":"/api/icons/evernote"},"type":"icon"},{"attributes":{"id":"exchange","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0ec","voted":false},"id":"exchange","links":{"self":"/api/icons/exchange"},"type":"icon"},{"attributes":{"id":"exchange-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f362","voted":false},"id":"exchange-alt","links":{"self":"/api/icons/exchange-alt"},"type":"icon"},{"attributes":{"id":"exclamation","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f12a","voted":false},"id":"exclamation","links":{"self":"/api/icons/exclamation"},"type":"icon"},{"attributes":{"id":"exclamation-circle","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f06a","voted":false},"id":"exclamation-circle","links":{"self":"/api/icons/exclamation-circle"},"type":"icon"},{"attributes":{"id":"exclamation-square","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f321","voted":false},"id":"exclamation-square","links":{"self":"/api/icons/exclamation-square"},"type":"icon"},{"attributes":{"id":"exclamation-triangle","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f071","voted":false},"id":"exclamation-triangle","links":{"self":"/api/icons/exclamation-triangle"},"type":"icon"},{"attributes":{"id":"expand","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f065","voted":false},"id":"expand","links":{"self":"/api/icons/expand"},"type":"icon"},{"attributes":{"id":"expand-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f424","voted":false},"id":"expand-alt","links":{"self":"/api/icons/expand-alt"},"type":"icon"},{"attributes":{"id":"expand-arrows","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f31d","voted":false},"id":"expand-arrows","links":{"self":"/api/icons/expand-arrows"},"type":"icon"},{"attributes":{"id":"expand-arrows-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f31e","voted":false},"id":"expand-arrows-alt","links":{"self":"/api/icons/expand-arrows-alt"},"type":"icon"},{"attributes":{"id":"expand-wide","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f320","voted":false},"id":"expand-wide","links":{"self":"/api/icons/expand-wide"},"type":"icon"},{"attributes":{"id":"expeditedssl","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f23e","voted":false},"id":"expeditedssl","links":{"self":"/api/icons/expeditedssl"},"type":"icon"},{"attributes":{"id":"external-link","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f08e","voted":false},"id":"external-link","links":{"self":"/api/icons/external-link"},"type":"icon"},{"attributes":{"id":"external-link-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f35d","voted":false},"id":"external-link-alt","links":{"self":"/api/icons/external-link-alt"},"type":"icon"},{"attributes":{"id":"external-link-square","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f14c","voted":false},"id":"external-link-square","links":{"self":"/api/icons/external-link-square"},"type":"icon"},{"attributes":{"id":"external-link-square-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f360","voted":false},"id":"external-link-square-alt","links":{"self":"/api/icons/external-link-square-alt"},"type":"icon"},{"attributes":{"id":"eye","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f06e","voted":false},"id":"eye","links":{"self":"/api/icons/eye"},"type":"icon"},{"attributes":{"id":"eye-dropper","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1fb","voted":false},"id":"eye-dropper","links":{"self":"/api/icons/eye-dropper"},"type":"icon"},{"attributes":{"id":"eye-evil","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6db","voted":false},"id":"eye-evil","links":{"self":"/api/icons/eye-evil"},"type":"icon"},{"attributes":{"id":"eye-slash","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f070","voted":false},"id":"eye-slash","links":{"self":"/api/icons/eye-slash"},"type":"icon"},{"attributes":{"id":"facebook","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f09a","voted":false},"id":"facebook","links":{"self":"/api/icons/facebook"},"type":"icon"},{"attributes":{"id":"facebook-f","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f39e","voted":false},"id":"facebook-f","links":{"self":"/api/icons/facebook-f"},"type":"icon"},{"attributes":{"id":"facebook-messenger","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f39f","voted":false},"id":"facebook-messenger","links":{"self":"/api/icons/facebook-messenger"},"type":"icon"},{"attributes":{"id":"facebook-square","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f082","voted":false},"id":"facebook-square","links":{"self":"/api/icons/facebook-square"},"type":"icon"},{"attributes":{"id":"fan","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f863","voted":true},"id":"fan","links":{"self":"/api/icons/fan"},"type":"icon"},{"attributes":{"id":"fan-table","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f904","voted":false},"id":"fan-table","links":{"self":"/api/icons/fan-table"},"type":"icon"},{"attributes":{"id":"fantasy-flight-games","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f6dc","voted":false},"id":"fantasy-flight-games","links":{"self":"/api/icons/fantasy-flight-games"},"type":"icon"},{"attributes":{"id":"farm","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f864","voted":false},"id":"farm","links":{"self":"/api/icons/farm"},"type":"icon"},{"attributes":{"id":"fast-backward","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f049","voted":false},"id":"fast-backward","links":{"self":"/api/icons/fast-backward"},"type":"icon"},{"attributes":{"id":"fast-forward","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f050","voted":false},"id":"fast-forward","links":{"self":"/api/icons/fast-forward"},"type":"icon"},{"attributes":{"id":"faucet","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f905","voted":false},"id":"faucet","links":{"self":"/api/icons/faucet"},"type":"icon"},{"attributes":{"id":"faucet-drip","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f906","voted":false},"id":"faucet-drip","links":{"self":"/api/icons/faucet-drip"},"type":"icon"},{"attributes":{"id":"fax","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1ac","voted":false},"id":"fax","links":{"self":"/api/icons/fax"},"type":"icon"},{"attributes":{"id":"feather","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f52d","voted":true},"id":"feather","links":{"self":"/api/icons/feather"},"type":"icon"},{"attributes":{"id":"feather-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f56b","voted":true},"id":"feather-alt","links":{"self":"/api/icons/feather-alt"},"type":"icon"},{"attributes":{"id":"fedex","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f797","voted":false},"id":"fedex","links":{"self":"/api/icons/fedex"},"type":"icon"},{"attributes":{"id":"fedora","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f798","voted":true},"id":"fedora","links":{"self":"/api/icons/fedora"},"type":"icon"},{"attributes":{"id":"female","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f182","voted":false},"id":"female","links":{"self":"/api/icons/female"},"type":"icon"},{"attributes":{"id":"field-hockey","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f44c","voted":false},"id":"field-hockey","links":{"self":"/api/icons/field-hockey"},"type":"icon"},{"attributes":{"id":"fighter-jet","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0fb","voted":false},"id":"fighter-jet","links":{"self":"/api/icons/fighter-jet"},"type":"icon"},{"attributes":{"id":"figma","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f799","voted":false},"id":"figma","links":{"self":"/api/icons/figma"},"type":"icon"},{"attributes":{"id":"file","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f15b","voted":false},"id":"file","links":{"self":"/api/icons/file"},"type":"icon"},{"attributes":{"id":"file-alt","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f15c","voted":false},"id":"file-alt","links":{"self":"/api/icons/file-alt"},"type":"icon"},{"attributes":{"id":"file-archive","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1c6","voted":false},"id":"file-archive","links":{"self":"/api/icons/file-archive"},"type":"icon"},{"attributes":{"id":"file-audio","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1c7","voted":false},"id":"file-audio","links":{"self":"/api/icons/file-audio"},"type":"icon"},{"attributes":{"id":"file-certificate","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5f3","voted":false},"id":"file-certificate","links":{"self":"/api/icons/file-certificate"},"type":"icon"},{"attributes":{"id":"file-chart-line","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f659","voted":false},"id":"file-chart-line","links":{"self":"/api/icons/file-chart-line"},"type":"icon"},{"attributes":{"id":"file-chart-pie","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f65a","voted":false},"id":"file-chart-pie","links":{"self":"/api/icons/file-chart-pie"},"type":"icon"},{"attributes":{"id":"file-check","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f316","voted":false},"id":"file-check","links":{"self":"/api/icons/file-check"},"type":"icon"},{"attributes":{"id":"file-code","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1c9","voted":false},"id":"file-code","links":{"self":"/api/icons/file-code"},"type":"icon"},{"attributes":{"id":"file-contract","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f56c","voted":false},"id":"file-contract","links":{"self":"/api/icons/file-contract"},"type":"icon"},{"attributes":{"id":"file-csv","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6dd","voted":false},"id":"file-csv","links":{"self":"/api/icons/file-csv"},"type":"icon"},{"attributes":{"id":"file-download","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f56d","voted":true},"id":"file-download","links":{"self":"/api/icons/file-download"},"type":"icon"},{"attributes":{"id":"file-edit","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f31c","voted":false},"id":"file-edit","links":{"self":"/api/icons/file-edit"},"type":"icon"},{"attributes":{"id":"file-excel","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1c3","voted":false},"id":"file-excel","links":{"self":"/api/icons/file-excel"},"type":"icon"},{"attributes":{"id":"file-exclamation","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f31a","voted":false},"id":"file-exclamation","links":{"self":"/api/icons/file-exclamation"},"type":"icon"},{"attributes":{"id":"file-export","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f56e","voted":true},"id":"file-export","links":{"self":"/api/icons/file-export"},"type":"icon"},{"attributes":{"id":"file-image","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1c5","voted":false},"id":"file-image","links":{"self":"/api/icons/file-image"},"type":"icon"},{"attributes":{"id":"file-import","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f56f","voted":true},"id":"file-import","links":{"self":"/api/icons/file-import"},"type":"icon"},{"attributes":{"id":"file-invoice","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f570","voted":true},"id":"file-invoice","links":{"self":"/api/icons/file-invoice"},"type":"icon"},{"attributes":{"id":"file-invoice-dollar","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f571","voted":true},"id":"file-invoice-dollar","links":{"self":"/api/icons/file-invoice-dollar"},"type":"icon"},{"attributes":{"id":"file-medical","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f477","voted":false},"id":"file-medical","links":{"self":"/api/icons/file-medical"},"type":"icon"},{"attributes":{"id":"file-medical-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f478","voted":false},"id":"file-medical-alt","links":{"self":"/api/icons/file-medical-alt"},"type":"icon"},{"attributes":{"id":"file-minus","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f318","voted":false},"id":"file-minus","links":{"self":"/api/icons/file-minus"},"type":"icon"},{"attributes":{"id":"file-music","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8b6","voted":false},"id":"file-music","links":{"self":"/api/icons/file-music"},"type":"icon"},{"attributes":{"id":"file-pdf","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1c1","voted":false},"id":"file-pdf","links":{"self":"/api/icons/file-pdf"},"type":"icon"},{"attributes":{"id":"file-plus","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f319","voted":false},"id":"file-plus","links":{"self":"/api/icons/file-plus"},"type":"icon"},{"attributes":{"id":"file-powerpoint","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1c4","voted":false},"id":"file-powerpoint","links":{"self":"/api/icons/file-powerpoint"},"type":"icon"},{"attributes":{"id":"file-prescription","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f572","voted":false},"id":"file-prescription","links":{"self":"/api/icons/file-prescription"},"type":"icon"},{"attributes":{"id":"file-search","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f865","voted":true},"id":"file-search","links":{"self":"/api/icons/file-search"},"type":"icon"},{"attributes":{"id":"file-signature","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f573","voted":true},"id":"file-signature","links":{"self":"/api/icons/file-signature"},"type":"icon"},{"attributes":{"id":"file-spreadsheet","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f65b","voted":false},"id":"file-spreadsheet","links":{"self":"/api/icons/file-spreadsheet"},"type":"icon"},{"attributes":{"id":"file-times","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f317","voted":false},"id":"file-times","links":{"self":"/api/icons/file-times"},"type":"icon"},{"attributes":{"id":"file-upload","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f574","voted":true},"id":"file-upload","links":{"self":"/api/icons/file-upload"},"type":"icon"},{"attributes":{"id":"file-user","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f65c","voted":true},"id":"file-user","links":{"self":"/api/icons/file-user"},"type":"icon"},{"attributes":{"id":"file-video","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1c8","voted":false},"id":"file-video","links":{"self":"/api/icons/file-video"},"type":"icon"},{"attributes":{"id":"file-word","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1c2","voted":false},"id":"file-word","links":{"self":"/api/icons/file-word"},"type":"icon"},{"attributes":{"id":"files-medical","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7fd","voted":false},"id":"files-medical","links":{"self":"/api/icons/files-medical"},"type":"icon"},{"attributes":{"id":"fill","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f575","voted":false},"id":"fill","links":{"self":"/api/icons/fill"},"type":"icon"},{"attributes":{"id":"fill-drip","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f576","voted":false},"id":"fill-drip","links":{"self":"/api/icons/fill-drip"},"type":"icon"},{"attributes":{"id":"film","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f008","voted":false},"id":"film","links":{"self":"/api/icons/film"},"type":"icon"},{"attributes":{"id":"film-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f3a0","voted":false},"id":"film-alt","links":{"self":"/api/icons/film-alt"},"type":"icon"},{"attributes":{"id":"film-canister","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8b7","voted":false},"id":"film-canister","links":{"self":"/api/icons/film-canister"},"type":"icon"},{"attributes":{"id":"filter","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0b0","voted":false},"id":"filter","links":{"self":"/api/icons/filter"},"type":"icon"},{"attributes":{"id":"fingerprint","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f577","voted":true},"id":"fingerprint","links":{"self":"/api/icons/fingerprint"},"type":"icon"},{"attributes":{"id":"fire","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f06d","voted":false},"id":"fire","links":{"self":"/api/icons/fire"},"type":"icon"},{"attributes":{"id":"fire-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7e4","voted":false},"id":"fire-alt","links":{"self":"/api/icons/fire-alt"},"type":"icon"},{"attributes":{"id":"fire-extinguisher","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f134","voted":false},"id":"fire-extinguisher","links":{"self":"/api/icons/fire-extinguisher"},"type":"icon"},{"attributes":{"id":"fire-smoke","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f74b","voted":false},"id":"fire-smoke","links":{"self":"/api/icons/fire-smoke"},"type":"icon"},{"attributes":{"id":"firefox","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f269","voted":false},"id":"firefox","links":{"self":"/api/icons/firefox"},"type":"icon"},{"attributes":{"id":"firefox-browser","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f907","voted":false},"id":"firefox-browser","links":{"self":"/api/icons/firefox-browser"},"type":"icon"},{"attributes":{"id":"fireplace","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f79a","voted":false},"id":"fireplace","links":{"self":"/api/icons/fireplace"},"type":"icon"},{"attributes":{"id":"first-aid","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f479","voted":false},"id":"first-aid","links":{"self":"/api/icons/first-aid"},"type":"icon"},{"attributes":{"id":"first-order","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f2b0","voted":false},"id":"first-order","links":{"self":"/api/icons/first-order"},"type":"icon"},{"attributes":{"id":"first-order-alt","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f50a","voted":false},"id":"first-order-alt","links":{"self":"/api/icons/first-order-alt"},"type":"icon"},{"attributes":{"id":"firstdraft","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3a1","voted":false},"id":"firstdraft","links":{"self":"/api/icons/firstdraft"},"type":"icon"},{"attributes":{"id":"fish","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f578","voted":true},"id":"fish","links":{"self":"/api/icons/fish"},"type":"icon"},{"attributes":{"id":"fish-cooked","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7fe","voted":false},"id":"fish-cooked","links":{"self":"/api/icons/fish-cooked"},"type":"icon"},{"attributes":{"id":"fist-raised","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6de","voted":false},"id":"fist-raised","links":{"self":"/api/icons/fist-raised"},"type":"icon"},{"attributes":{"id":"flag","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f024","voted":false},"id":"flag","links":{"self":"/api/icons/flag"},"type":"icon"},{"attributes":{"id":"flag-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f74c","voted":false},"id":"flag-alt","links":{"self":"/api/icons/flag-alt"},"type":"icon"},{"attributes":{"id":"flag-checkered","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f11e","voted":false},"id":"flag-checkered","links":{"self":"/api/icons/flag-checkered"},"type":"icon"},{"attributes":{"id":"flag-usa","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f74d","voted":false},"id":"flag-usa","links":{"self":"/api/icons/flag-usa"},"type":"icon"},{"attributes":{"id":"flame","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6df","voted":false},"id":"flame","links":{"self":"/api/icons/flame"},"type":"icon"},{"attributes":{"id":"flashlight","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8b8","voted":false},"id":"flashlight","links":{"self":"/api/icons/flashlight"},"type":"icon"},{"attributes":{"id":"flask","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0c3","voted":false},"id":"flask","links":{"self":"/api/icons/flask"},"type":"icon"},{"attributes":{"id":"flask-poison","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6e0","voted":false},"id":"flask-poison","links":{"self":"/api/icons/flask-poison"},"type":"icon"},{"attributes":{"id":"flask-potion","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6e1","voted":false},"id":"flask-potion","links":{"self":"/api/icons/flask-potion"},"type":"icon"},{"attributes":{"id":"flickr","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f16e","voted":false},"id":"flickr","links":{"self":"/api/icons/flickr"},"type":"icon"},{"attributes":{"id":"flipboard","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f44d","voted":true},"id":"flipboard","links":{"self":"/api/icons/flipboard"},"type":"icon"},{"attributes":{"id":"flower","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7ff","voted":true},"id":"flower","links":{"self":"/api/icons/flower"},"type":"icon"},{"attributes":{"id":"flower-daffodil","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f800","voted":false},"id":"flower-daffodil","links":{"self":"/api/icons/flower-daffodil"},"type":"icon"},{"attributes":{"id":"flower-tulip","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f801","voted":false},"id":"flower-tulip","links":{"self":"/api/icons/flower-tulip"},"type":"icon"},{"attributes":{"id":"flushed","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f579","voted":false},"id":"flushed","links":{"self":"/api/icons/flushed"},"type":"icon"},{"attributes":{"id":"flute","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8b9","voted":false},"id":"flute","links":{"self":"/api/icons/flute"},"type":"icon"},{"attributes":{"id":"flux-capacitor","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8ba","voted":false},"id":"flux-capacitor","links":{"self":"/api/icons/flux-capacitor"},"type":"icon"},{"attributes":{"id":"fly","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f417","voted":false},"id":"fly","links":{"self":"/api/icons/fly"},"type":"icon"},{"attributes":{"id":"fog","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f74e","voted":false},"id":"fog","links":{"self":"/api/icons/fog"},"type":"icon"},{"attributes":{"id":"folder","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f07b","voted":false},"id":"folder","links":{"self":"/api/icons/folder"},"type":"icon"},{"attributes":{"id":"folder-download","membership":{"free":[],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f953","voted":false},"id":"folder-download","links":{"self":"/api/icons/folder-download"},"type":"icon"},{"attributes":{"id":"folder-minus","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f65d","voted":false},"id":"folder-minus","links":{"self":"/api/icons/folder-minus"},"type":"icon"},{"attributes":{"id":"folder-open","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f07c","voted":false},"id":"folder-open","links":{"self":"/api/icons/folder-open"},"type":"icon"},{"attributes":{"id":"folder-plus","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f65e","voted":false},"id":"folder-plus","links":{"self":"/api/icons/folder-plus"},"type":"icon"},{"attributes":{"id":"folder-times","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f65f","voted":false},"id":"folder-times","links":{"self":"/api/icons/folder-times"},"type":"icon"},{"attributes":{"id":"folder-tree","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f802","voted":true},"id":"folder-tree","links":{"self":"/api/icons/folder-tree"},"type":"icon"},{"attributes":{"id":"folder-upload","membership":{"free":[],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f954","voted":false},"id":"folder-upload","links":{"self":"/api/icons/folder-upload"},"type":"icon"},{"attributes":{"id":"folders","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f660","voted":false},"id":"folders","links":{"self":"/api/icons/folders"},"type":"icon"},{"attributes":{"id":"font","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f031","voted":false},"id":"font","links":{"self":"/api/icons/font"},"type":"icon"},{"attributes":{"id":"font-awesome","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f2b4","voted":false},"id":"font-awesome","links":{"self":"/api/icons/font-awesome"},"type":"icon"},{"attributes":{"id":"font-awesome-alt","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f35c","voted":false},"id":"font-awesome-alt","links":{"self":"/api/icons/font-awesome-alt"},"type":"icon"},{"attributes":{"id":"font-awesome-flag","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f425","voted":false},"id":"font-awesome-flag","links":{"self":"/api/icons/font-awesome-flag"},"type":"icon"},{"attributes":{"id":"font-case","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f866","voted":false},"id":"font-case","links":{"self":"/api/icons/font-case"},"type":"icon"},{"attributes":{"id":"fonticons","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f280","voted":false},"id":"fonticons","links":{"self":"/api/icons/fonticons"},"type":"icon"},{"attributes":{"id":"fonticons-fi","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3a2","voted":false},"id":"fonticons-fi","links":{"self":"/api/icons/fonticons-fi"},"type":"icon"},{"attributes":{"id":"football-ball","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f44e","voted":false},"id":"football-ball","links":{"self":"/api/icons/football-ball"},"type":"icon"},{"attributes":{"id":"football-helmet","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f44f","voted":false},"id":"football-helmet","links":{"self":"/api/icons/football-helmet"},"type":"icon"},{"attributes":{"id":"forklift","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f47a","voted":false},"id":"forklift","links":{"self":"/api/icons/forklift"},"type":"icon"},{"attributes":{"id":"fort-awesome","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f286","voted":false},"id":"fort-awesome","links":{"self":"/api/icons/fort-awesome"},"type":"icon"},{"attributes":{"id":"fort-awesome-alt","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3a3","voted":false},"id":"fort-awesome-alt","links":{"self":"/api/icons/fort-awesome-alt"},"type":"icon"},{"attributes":{"id":"forumbee","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f211","voted":false},"id":"forumbee","links":{"self":"/api/icons/forumbee"},"type":"icon"},{"attributes":{"id":"forward","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f04e","voted":false},"id":"forward","links":{"self":"/api/icons/forward"},"type":"icon"},{"attributes":{"id":"foursquare","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f180","voted":false},"id":"foursquare","links":{"self":"/api/icons/foursquare"},"type":"icon"},{"attributes":{"id":"fragile","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4bb","voted":false},"id":"fragile","links":{"self":"/api/icons/fragile"},"type":"icon"},{"attributes":{"id":"free-code-camp","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f2c5","voted":false},"id":"free-code-camp","links":{"self":"/api/icons/free-code-camp"},"type":"icon"},{"attributes":{"id":"freebsd","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3a4","voted":false},"id":"freebsd","links":{"self":"/api/icons/freebsd"},"type":"icon"},{"attributes":{"id":"french-fries","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f803","voted":false},"id":"french-fries","links":{"self":"/api/icons/french-fries"},"type":"icon"},{"attributes":{"id":"frog","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f52e","voted":false},"id":"frog","links":{"self":"/api/icons/frog"},"type":"icon"},{"attributes":{"id":"frosty-head","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f79b","voted":false},"id":"frosty-head","links":{"self":"/api/icons/frosty-head"},"type":"icon"},{"attributes":{"id":"frown","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f119","voted":false},"id":"frown","links":{"self":"/api/icons/frown"},"type":"icon"},{"attributes":{"id":"frown-open","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f57a","voted":false},"id":"frown-open","links":{"self":"/api/icons/frown-open"},"type":"icon"},{"attributes":{"id":"fulcrum","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f50b","voted":false},"id":"fulcrum","links":{"self":"/api/icons/fulcrum"},"type":"icon"},{"attributes":{"id":"function","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f661","voted":false},"id":"function","links":{"self":"/api/icons/function"},"type":"icon"},{"attributes":{"id":"funnel-dollar","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f662","voted":false},"id":"funnel-dollar","links":{"self":"/api/icons/funnel-dollar"},"type":"icon"},{"attributes":{"id":"futbol","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1e3","voted":false},"id":"futbol","links":{"self":"/api/icons/futbol"},"type":"icon"},{"attributes":{"id":"galactic-republic","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f50c","voted":false},"id":"galactic-republic","links":{"self":"/api/icons/galactic-republic"},"type":"icon"},{"attributes":{"id":"galactic-senate","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f50d","voted":false},"id":"galactic-senate","links":{"self":"/api/icons/galactic-senate"},"type":"icon"},{"attributes":{"id":"galaxy","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f908","voted":false},"id":"galaxy","links":{"self":"/api/icons/galaxy"},"type":"icon"},{"attributes":{"id":"game-board","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f867","voted":false},"id":"game-board","links":{"self":"/api/icons/game-board"},"type":"icon"},{"attributes":{"id":"game-board-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f868","voted":false},"id":"game-board-alt","links":{"self":"/api/icons/game-board-alt"},"type":"icon"},{"attributes":{"id":"game-console-handheld","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8bb","voted":false},"id":"game-console-handheld","links":{"self":"/api/icons/game-console-handheld"},"type":"icon"},{"attributes":{"id":"gamepad","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f11b","voted":false},"id":"gamepad","links":{"self":"/api/icons/gamepad"},"type":"icon"},{"attributes":{"id":"gamepad-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8bc","voted":false},"id":"gamepad-alt","links":{"self":"/api/icons/gamepad-alt"},"type":"icon"},{"attributes":{"id":"garage","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f909","voted":false},"id":"garage","links":{"self":"/api/icons/garage"},"type":"icon"},{"attributes":{"id":"garage-car","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f90a","voted":false},"id":"garage-car","links":{"self":"/api/icons/garage-car"},"type":"icon"},{"attributes":{"id":"garage-open","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f90b","voted":false},"id":"garage-open","links":{"self":"/api/icons/garage-open"},"type":"icon"},{"attributes":{"id":"gas-pump","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f52f","voted":true},"id":"gas-pump","links":{"self":"/api/icons/gas-pump"},"type":"icon"},{"attributes":{"id":"gas-pump-slash","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5f4","voted":true},"id":"gas-pump-slash","links":{"self":"/api/icons/gas-pump-slash"},"type":"icon"},{"attributes":{"id":"gavel","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0e3","voted":false},"id":"gavel","links":{"self":"/api/icons/gavel"},"type":"icon"},{"attributes":{"id":"gem","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f3a5","voted":false},"id":"gem","links":{"self":"/api/icons/gem"},"type":"icon"},{"attributes":{"id":"genderless","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f22d","voted":false},"id":"genderless","links":{"self":"/api/icons/genderless"},"type":"icon"},{"attributes":{"id":"get-pocket","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f265","voted":false},"id":"get-pocket","links":{"self":"/api/icons/get-pocket"},"type":"icon"},{"attributes":{"id":"gg","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f260","voted":false},"id":"gg","links":{"self":"/api/icons/gg"},"type":"icon"},{"attributes":{"id":"gg-circle","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f261","voted":false},"id":"gg-circle","links":{"self":"/api/icons/gg-circle"},"type":"icon"},{"attributes":{"id":"ghost","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6e2","voted":false},"id":"ghost","links":{"self":"/api/icons/ghost"},"type":"icon"},{"attributes":{"id":"gift","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f06b","voted":false},"id":"gift","links":{"self":"/api/icons/gift"},"type":"icon"},{"attributes":{"id":"gift-card","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f663","voted":false},"id":"gift-card","links":{"self":"/api/icons/gift-card"},"type":"icon"},{"attributes":{"id":"gifts","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f79c","voted":false},"id":"gifts","links":{"self":"/api/icons/gifts"},"type":"icon"},{"attributes":{"id":"gingerbread-man","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f79d","voted":false},"id":"gingerbread-man","links":{"self":"/api/icons/gingerbread-man"},"type":"icon"},{"attributes":{"id":"git","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1d3","voted":false},"id":"git","links":{"self":"/api/icons/git"},"type":"icon"},{"attributes":{"id":"git-alt","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f841","voted":false},"id":"git-alt","links":{"self":"/api/icons/git-alt"},"type":"icon"},{"attributes":{"id":"git-square","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1d2","voted":false},"id":"git-square","links":{"self":"/api/icons/git-square"},"type":"icon"},{"attributes":{"id":"github","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f09b","voted":false},"id":"github","links":{"self":"/api/icons/github"},"type":"icon"},{"attributes":{"id":"github-alt","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f113","voted":false},"id":"github-alt","links":{"self":"/api/icons/github-alt"},"type":"icon"},{"attributes":{"id":"github-square","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f092","voted":false},"id":"github-square","links":{"self":"/api/icons/github-square"},"type":"icon"},{"attributes":{"id":"gitkraken","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3a6","voted":false},"id":"gitkraken","links":{"self":"/api/icons/gitkraken"},"type":"icon"},{"attributes":{"id":"gitlab","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f296","voted":false},"id":"gitlab","links":{"self":"/api/icons/gitlab"},"type":"icon"},{"attributes":{"id":"gitter","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f426","voted":false},"id":"gitter","links":{"self":"/api/icons/gitter"},"type":"icon"},{"attributes":{"id":"glass","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f804","voted":true},"id":"glass","links":{"self":"/api/icons/glass"},"type":"icon"},{"attributes":{"id":"glass-champagne","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f79e","voted":false},"id":"glass-champagne","links":{"self":"/api/icons/glass-champagne"},"type":"icon"},{"attributes":{"id":"glass-cheers","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f79f","voted":false},"id":"glass-cheers","links":{"self":"/api/icons/glass-cheers"},"type":"icon"},{"attributes":{"id":"glass-citrus","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f869","voted":false},"id":"glass-citrus","links":{"self":"/api/icons/glass-citrus"},"type":"icon"},{"attributes":{"id":"glass-martini","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f000","voted":false},"id":"glass-martini","links":{"self":"/api/icons/glass-martini"},"type":"icon"},{"attributes":{"id":"glass-martini-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f57b","voted":false},"id":"glass-martini-alt","links":{"self":"/api/icons/glass-martini-alt"},"type":"icon"},{"attributes":{"id":"glass-whiskey","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7a0","voted":false},"id":"glass-whiskey","links":{"self":"/api/icons/glass-whiskey"},"type":"icon"},{"attributes":{"id":"glass-whiskey-rocks","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7a1","voted":false},"id":"glass-whiskey-rocks","links":{"self":"/api/icons/glass-whiskey-rocks"},"type":"icon"},{"attributes":{"id":"glasses","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f530","voted":true},"id":"glasses","links":{"self":"/api/icons/glasses"},"type":"icon"},{"attributes":{"id":"glasses-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5f5","voted":false},"id":"glasses-alt","links":{"self":"/api/icons/glasses-alt"},"type":"icon"},{"attributes":{"id":"glide","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f2a5","voted":false},"id":"glide","links":{"self":"/api/icons/glide"},"type":"icon"},{"attributes":{"id":"glide-g","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f2a6","voted":false},"id":"glide-g","links":{"self":"/api/icons/glide-g"},"type":"icon"},{"attributes":{"id":"globe","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0ac","voted":false},"id":"globe","links":{"self":"/api/icons/globe"},"type":"icon"},{"attributes":{"id":"globe-africa","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f57c","voted":false},"id":"globe-africa","links":{"self":"/api/icons/globe-africa"},"type":"icon"},{"attributes":{"id":"globe-americas","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f57d","voted":false},"id":"globe-americas","links":{"self":"/api/icons/globe-americas"},"type":"icon"},{"attributes":{"id":"globe-asia","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f57e","voted":false},"id":"globe-asia","links":{"self":"/api/icons/globe-asia"},"type":"icon"},{"attributes":{"id":"globe-europe","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7a2","voted":true},"id":"globe-europe","links":{"self":"/api/icons/globe-europe"},"type":"icon"},{"attributes":{"id":"globe-snow","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7a3","voted":false},"id":"globe-snow","links":{"self":"/api/icons/globe-snow"},"type":"icon"},{"attributes":{"id":"globe-stand","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5f6","voted":false},"id":"globe-stand","links":{"self":"/api/icons/globe-stand"},"type":"icon"},{"attributes":{"id":"gofore","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3a7","voted":false},"id":"gofore","links":{"self":"/api/icons/gofore"},"type":"icon"},{"attributes":{"id":"golf-ball","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f450","voted":false},"id":"golf-ball","links":{"self":"/api/icons/golf-ball"},"type":"icon"},{"attributes":{"id":"golf-club","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f451","voted":false},"id":"golf-club","links":{"self":"/api/icons/golf-club"},"type":"icon"},{"attributes":{"id":"goodreads","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3a8","voted":false},"id":"goodreads","links":{"self":"/api/icons/goodreads"},"type":"icon"},{"attributes":{"id":"goodreads-g","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3a9","voted":false},"id":"goodreads-g","links":{"self":"/api/icons/goodreads-g"},"type":"icon"},{"attributes":{"id":"google","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1a0","voted":false},"id":"google","links":{"self":"/api/icons/google"},"type":"icon"},{"attributes":{"id":"google-drive","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3aa","voted":false},"id":"google-drive","links":{"self":"/api/icons/google-drive"},"type":"icon"},{"attributes":{"id":"google-play","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3ab","voted":false},"id":"google-play","links":{"self":"/api/icons/google-play"},"type":"icon"},{"attributes":{"id":"google-plus","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f2b3","voted":false},"id":"google-plus","links":{"self":"/api/icons/google-plus"},"type":"icon"},{"attributes":{"id":"google-plus-g","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f0d5","voted":false},"id":"google-plus-g","links":{"self":"/api/icons/google-plus-g"},"type":"icon"},{"attributes":{"id":"google-plus-square","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f0d4","voted":false},"id":"google-plus-square","links":{"self":"/api/icons/google-plus-square"},"type":"icon"},{"attributes":{"id":"google-wallet","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1ee","voted":false},"id":"google-wallet","links":{"self":"/api/icons/google-wallet"},"type":"icon"},{"attributes":{"id":"gopuram","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f664","voted":false},"id":"gopuram","links":{"self":"/api/icons/gopuram"},"type":"icon"},{"attributes":{"id":"graduation-cap","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f19d","voted":false},"id":"graduation-cap","links":{"self":"/api/icons/graduation-cap"},"type":"icon"},{"attributes":{"id":"gramophone","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8bd","voted":false},"id":"gramophone","links":{"self":"/api/icons/gramophone"},"type":"icon"},{"attributes":{"id":"gratipay","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f184","voted":false},"id":"gratipay","links":{"self":"/api/icons/gratipay"},"type":"icon"},{"attributes":{"id":"grav","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f2d6","voted":false},"id":"grav","links":{"self":"/api/icons/grav"},"type":"icon"},{"attributes":{"id":"greater-than","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f531","voted":true},"id":"greater-than","links":{"self":"/api/icons/greater-than"},"type":"icon"},{"attributes":{"id":"greater-than-equal","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f532","voted":true},"id":"greater-than-equal","links":{"self":"/api/icons/greater-than-equal"},"type":"icon"},{"attributes":{"id":"grimace","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f57f","voted":false},"id":"grimace","links":{"self":"/api/icons/grimace"},"type":"icon"},{"attributes":{"id":"grin","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f580","voted":false},"id":"grin","links":{"self":"/api/icons/grin"},"type":"icon"},{"attributes":{"id":"grin-alt","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f581","voted":false},"id":"grin-alt","links":{"self":"/api/icons/grin-alt"},"type":"icon"},{"attributes":{"id":"grin-beam","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f582","voted":false},"id":"grin-beam","links":{"self":"/api/icons/grin-beam"},"type":"icon"},{"attributes":{"id":"grin-beam-sweat","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f583","voted":false},"id":"grin-beam-sweat","links":{"self":"/api/icons/grin-beam-sweat"},"type":"icon"},{"attributes":{"id":"grin-hearts","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f584","voted":false},"id":"grin-hearts","links":{"self":"/api/icons/grin-hearts"},"type":"icon"},{"attributes":{"id":"grin-squint","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f585","voted":false},"id":"grin-squint","links":{"self":"/api/icons/grin-squint"},"type":"icon"},{"attributes":{"id":"grin-squint-tears","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f586","voted":false},"id":"grin-squint-tears","links":{"self":"/api/icons/grin-squint-tears"},"type":"icon"},{"attributes":{"id":"grin-stars","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f587","voted":false},"id":"grin-stars","links":{"self":"/api/icons/grin-stars"},"type":"icon"},{"attributes":{"id":"grin-tears","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f588","voted":false},"id":"grin-tears","links":{"self":"/api/icons/grin-tears"},"type":"icon"},{"attributes":{"id":"grin-tongue","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f589","voted":false},"id":"grin-tongue","links":{"self":"/api/icons/grin-tongue"},"type":"icon"},{"attributes":{"id":"grin-tongue-squint","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f58a","voted":false},"id":"grin-tongue-squint","links":{"self":"/api/icons/grin-tongue-squint"},"type":"icon"},{"attributes":{"id":"grin-tongue-wink","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f58b","voted":false},"id":"grin-tongue-wink","links":{"self":"/api/icons/grin-tongue-wink"},"type":"icon"},{"attributes":{"id":"grin-wink","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f58c","voted":false},"id":"grin-wink","links":{"self":"/api/icons/grin-wink"},"type":"icon"},{"attributes":{"id":"grip-horizontal","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f58d","voted":true},"id":"grip-horizontal","links":{"self":"/api/icons/grip-horizontal"},"type":"icon"},{"attributes":{"id":"grip-lines","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7a4","voted":true},"id":"grip-lines","links":{"self":"/api/icons/grip-lines"},"type":"icon"},{"attributes":{"id":"grip-lines-vertical","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7a5","voted":true},"id":"grip-lines-vertical","links":{"self":"/api/icons/grip-lines-vertical"},"type":"icon"},{"attributes":{"id":"grip-vertical","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f58e","voted":true},"id":"grip-vertical","links":{"self":"/api/icons/grip-vertical"},"type":"icon"},{"attributes":{"id":"gripfire","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3ac","voted":false},"id":"gripfire","links":{"self":"/api/icons/gripfire"},"type":"icon"},{"attributes":{"id":"grunt","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3ad","voted":false},"id":"grunt","links":{"self":"/api/icons/grunt"},"type":"icon"},{"attributes":{"id":"guitar","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7a6","voted":true},"id":"guitar","links":{"self":"/api/icons/guitar"},"type":"icon"},{"attributes":{"id":"guitar-electric","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8be","voted":false},"id":"guitar-electric","links":{"self":"/api/icons/guitar-electric"},"type":"icon"},{"attributes":{"id":"guitars","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8bf","voted":false},"id":"guitars","links":{"self":"/api/icons/guitars"},"type":"icon"},{"attributes":{"id":"gulp","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3ae","voted":false},"id":"gulp","links":{"self":"/api/icons/gulp"},"type":"icon"},{"attributes":{"id":"h-square","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0fd","voted":false},"id":"h-square","links":{"self":"/api/icons/h-square"},"type":"icon"},{"attributes":{"id":"h1","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f313","voted":false},"id":"h1","links":{"self":"/api/icons/h1"},"type":"icon"},{"attributes":{"id":"h2","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f314","voted":false},"id":"h2","links":{"self":"/api/icons/h2"},"type":"icon"},{"attributes":{"id":"h3","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f315","voted":false},"id":"h3","links":{"self":"/api/icons/h3"},"type":"icon"},{"attributes":{"id":"h4","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f86a","voted":false},"id":"h4","links":{"self":"/api/icons/h4"},"type":"icon"},{"attributes":{"id":"hacker-news","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1d4","voted":false},"id":"hacker-news","links":{"self":"/api/icons/hacker-news"},"type":"icon"},{"attributes":{"id":"hacker-news-square","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3af","voted":false},"id":"hacker-news-square","links":{"self":"/api/icons/hacker-news-square"},"type":"icon"},{"attributes":{"id":"hackerrank","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f5f7","voted":true},"id":"hackerrank","links":{"self":"/api/icons/hackerrank"},"type":"icon"},{"attributes":{"id":"hamburger","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f805","voted":false},"id":"hamburger","links":{"self":"/api/icons/hamburger"},"type":"icon"},{"attributes":{"id":"hammer","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6e3","voted":true},"id":"hammer","links":{"self":"/api/icons/hammer"},"type":"icon"},{"attributes":{"id":"hammer-war","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6e4","voted":false},"id":"hammer-war","links":{"self":"/api/icons/hammer-war"},"type":"icon"},{"attributes":{"id":"hamsa","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f665","voted":false},"id":"hamsa","links":{"self":"/api/icons/hamsa"},"type":"icon"},{"attributes":{"id":"hand-heart","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4bc","voted":false},"id":"hand-heart","links":{"self":"/api/icons/hand-heart"},"type":"icon"},{"attributes":{"id":"hand-holding","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4bd","voted":false},"id":"hand-holding","links":{"self":"/api/icons/hand-holding"},"type":"icon"},{"attributes":{"id":"hand-holding-box","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f47b","voted":false},"id":"hand-holding-box","links":{"self":"/api/icons/hand-holding-box"},"type":"icon"},{"attributes":{"id":"hand-holding-heart","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4be","voted":false},"id":"hand-holding-heart","links":{"self":"/api/icons/hand-holding-heart"},"type":"icon"},{"attributes":{"id":"hand-holding-magic","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6e5","voted":false},"id":"hand-holding-magic","links":{"self":"/api/icons/hand-holding-magic"},"type":"icon"},{"attributes":{"id":"hand-holding-medical","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f95c","voted":false},"id":"hand-holding-medical","links":{"self":"/api/icons/hand-holding-medical"},"type":"icon"},{"attributes":{"id":"hand-holding-seedling","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4bf","voted":false},"id":"hand-holding-seedling","links":{"self":"/api/icons/hand-holding-seedling"},"type":"icon"},{"attributes":{"id":"hand-holding-usd","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4c0","voted":false},"id":"hand-holding-usd","links":{"self":"/api/icons/hand-holding-usd"},"type":"icon"},{"attributes":{"id":"hand-holding-water","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4c1","voted":false},"id":"hand-holding-water","links":{"self":"/api/icons/hand-holding-water"},"type":"icon"},{"attributes":{"id":"hand-lizard","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f258","voted":false},"id":"hand-lizard","links":{"self":"/api/icons/hand-lizard"},"type":"icon"},{"attributes":{"id":"hand-middle-finger","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f806","voted":true},"id":"hand-middle-finger","links":{"self":"/api/icons/hand-middle-finger"},"type":"icon"},{"attributes":{"id":"hand-paper","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f256","voted":false},"id":"hand-paper","links":{"self":"/api/icons/hand-paper"},"type":"icon"},{"attributes":{"id":"hand-peace","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f25b","voted":false},"id":"hand-peace","links":{"self":"/api/icons/hand-peace"},"type":"icon"},{"attributes":{"id":"hand-point-down","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0a7","voted":false},"id":"hand-point-down","links":{"self":"/api/icons/hand-point-down"},"type":"icon"},{"attributes":{"id":"hand-point-left","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0a5","voted":false},"id":"hand-point-left","links":{"self":"/api/icons/hand-point-left"},"type":"icon"},{"attributes":{"id":"hand-point-right","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0a4","voted":false},"id":"hand-point-right","links":{"self":"/api/icons/hand-point-right"},"type":"icon"},{"attributes":{"id":"hand-point-up","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0a6","voted":false},"id":"hand-point-up","links":{"self":"/api/icons/hand-point-up"},"type":"icon"},{"attributes":{"id":"hand-pointer","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f25a","voted":false},"id":"hand-pointer","links":{"self":"/api/icons/hand-pointer"},"type":"icon"},{"attributes":{"id":"hand-receiving","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f47c","voted":false},"id":"hand-receiving","links":{"self":"/api/icons/hand-receiving"},"type":"icon"},{"attributes":{"id":"hand-rock","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f255","voted":false},"id":"hand-rock","links":{"self":"/api/icons/hand-rock"},"type":"icon"},{"attributes":{"id":"hand-scissors","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f257","voted":false},"id":"hand-scissors","links":{"self":"/api/icons/hand-scissors"},"type":"icon"},{"attributes":{"id":"hand-sparkles","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f95d","voted":false},"id":"hand-sparkles","links":{"self":"/api/icons/hand-sparkles"},"type":"icon"},{"attributes":{"id":"hand-spock","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f259","voted":false},"id":"hand-spock","links":{"self":"/api/icons/hand-spock"},"type":"icon"},{"attributes":{"id":"hands","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4c2","voted":false},"id":"hands","links":{"self":"/api/icons/hands"},"type":"icon"},{"attributes":{"id":"hands-heart","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4c3","voted":false},"id":"hands-heart","links":{"self":"/api/icons/hands-heart"},"type":"icon"},{"attributes":{"id":"hands-helping","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4c4","voted":false},"id":"hands-helping","links":{"self":"/api/icons/hands-helping"},"type":"icon"},{"attributes":{"id":"hands-usd","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4c5","voted":false},"id":"hands-usd","links":{"self":"/api/icons/hands-usd"},"type":"icon"},{"attributes":{"id":"hands-wash","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f95e","voted":false},"id":"hands-wash","links":{"self":"/api/icons/hands-wash"},"type":"icon"},{"attributes":{"id":"handshake","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2b5","voted":false},"id":"handshake","links":{"self":"/api/icons/handshake"},"type":"icon"},{"attributes":{"id":"handshake-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4c6","voted":false},"id":"handshake-alt","links":{"self":"/api/icons/handshake-alt"},"type":"icon"},{"attributes":{"id":"handshake-alt-slash","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f95f","voted":false},"id":"handshake-alt-slash","links":{"self":"/api/icons/handshake-alt-slash"},"type":"icon"},{"attributes":{"id":"handshake-slash","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f960","voted":false},"id":"handshake-slash","links":{"self":"/api/icons/handshake-slash"},"type":"icon"},{"attributes":{"id":"hanukiah","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6e6","voted":false},"id":"hanukiah","links":{"self":"/api/icons/hanukiah"},"type":"icon"},{"attributes":{"id":"hard-hat","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f807","voted":true},"id":"hard-hat","links":{"self":"/api/icons/hard-hat"},"type":"icon"},{"attributes":{"id":"hashtag","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f292","voted":false},"id":"hashtag","links":{"self":"/api/icons/hashtag"},"type":"icon"},{"attributes":{"id":"hat-chef","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f86b","voted":true},"id":"hat-chef","links":{"self":"/api/icons/hat-chef"},"type":"icon"},{"attributes":{"id":"hat-cowboy","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f8c0","voted":false},"id":"hat-cowboy","links":{"self":"/api/icons/hat-cowboy"},"type":"icon"},{"attributes":{"id":"hat-cowboy-side","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f8c1","voted":false},"id":"hat-cowboy-side","links":{"self":"/api/icons/hat-cowboy-side"},"type":"icon"},{"attributes":{"id":"hat-santa","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7a7","voted":false},"id":"hat-santa","links":{"self":"/api/icons/hat-santa"},"type":"icon"},{"attributes":{"id":"hat-winter","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7a8","voted":false},"id":"hat-winter","links":{"self":"/api/icons/hat-winter"},"type":"icon"},{"attributes":{"id":"hat-witch","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6e7","voted":false},"id":"hat-witch","links":{"self":"/api/icons/hat-witch"},"type":"icon"},{"attributes":{"id":"hat-wizard","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6e8","voted":false},"id":"hat-wizard","links":{"self":"/api/icons/hat-wizard"},"type":"icon"},{"attributes":{"id":"hdd","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0a0","voted":false},"id":"hdd","links":{"self":"/api/icons/hdd"},"type":"icon"},{"attributes":{"id":"head-side","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6e9","voted":false},"id":"head-side","links":{"self":"/api/icons/head-side"},"type":"icon"},{"attributes":{"id":"head-side-brain","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f808","voted":false},"id":"head-side-brain","links":{"self":"/api/icons/head-side-brain"},"type":"icon"},{"attributes":{"id":"head-side-cough","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f961","voted":false},"id":"head-side-cough","links":{"self":"/api/icons/head-side-cough"},"type":"icon"},{"attributes":{"id":"head-side-cough-slash","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f962","voted":false},"id":"head-side-cough-slash","links":{"self":"/api/icons/head-side-cough-slash"},"type":"icon"},{"attributes":{"id":"head-side-headphones","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8c2","voted":false},"id":"head-side-headphones","links":{"self":"/api/icons/head-side-headphones"},"type":"icon"},{"attributes":{"id":"head-side-mask","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f963","voted":false},"id":"head-side-mask","links":{"self":"/api/icons/head-side-mask"},"type":"icon"},{"attributes":{"id":"head-side-medical","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f809","voted":false},"id":"head-side-medical","links":{"self":"/api/icons/head-side-medical"},"type":"icon"},{"attributes":{"id":"head-side-virus","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f964","voted":false},"id":"head-side-virus","links":{"self":"/api/icons/head-side-virus"},"type":"icon"},{"attributes":{"id":"head-vr","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6ea","voted":true},"id":"head-vr","links":{"self":"/api/icons/head-vr"},"type":"icon"},{"attributes":{"id":"heading","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1dc","voted":false},"id":"heading","links":{"self":"/api/icons/heading"},"type":"icon"},{"attributes":{"id":"headphones","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f025","voted":false},"id":"headphones","links":{"self":"/api/icons/headphones"},"type":"icon"},{"attributes":{"id":"headphones-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f58f","voted":true},"id":"headphones-alt","links":{"self":"/api/icons/headphones-alt"},"type":"icon"},{"attributes":{"id":"headset","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f590","voted":true},"id":"headset","links":{"self":"/api/icons/headset"},"type":"icon"},{"attributes":{"id":"heart","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f004","voted":false},"id":"heart","links":{"self":"/api/icons/heart"},"type":"icon"},{"attributes":{"id":"heart-broken","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7a9","voted":true},"id":"heart-broken","links":{"self":"/api/icons/heart-broken"},"type":"icon"},{"attributes":{"id":"heart-circle","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4c7","voted":false},"id":"heart-circle","links":{"self":"/api/icons/heart-circle"},"type":"icon"},{"attributes":{"id":"heart-rate","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5f8","voted":false},"id":"heart-rate","links":{"self":"/api/icons/heart-rate"},"type":"icon"},{"attributes":{"id":"heart-square","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4c8","voted":false},"id":"heart-square","links":{"self":"/api/icons/heart-square"},"type":"icon"},{"attributes":{"id":"heartbeat","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f21e","voted":false},"id":"heartbeat","links":{"self":"/api/icons/heartbeat"},"type":"icon"},{"attributes":{"id":"heat","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f90c","voted":false},"id":"heat","links":{"self":"/api/icons/heat"},"type":"icon"},{"attributes":{"id":"helicopter","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f533","voted":true},"id":"helicopter","links":{"self":"/api/icons/helicopter"},"type":"icon"},{"attributes":{"id":"helmet-battle","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6eb","voted":false},"id":"helmet-battle","links":{"self":"/api/icons/helmet-battle"},"type":"icon"},{"attributes":{"id":"hexagon","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f312","voted":false},"id":"hexagon","links":{"self":"/api/icons/hexagon"},"type":"icon"},{"attributes":{"id":"highlighter","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f591","voted":true},"id":"highlighter","links":{"self":"/api/icons/highlighter"},"type":"icon"},{"attributes":{"id":"hiking","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6ec","voted":false},"id":"hiking","links":{"self":"/api/icons/hiking"},"type":"icon"},{"attributes":{"id":"hippo","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6ed","voted":false},"id":"hippo","links":{"self":"/api/icons/hippo"},"type":"icon"},{"attributes":{"id":"hips","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f452","voted":false},"id":"hips","links":{"self":"/api/icons/hips"},"type":"icon"},{"attributes":{"id":"hire-a-helper","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3b0","voted":false},"id":"hire-a-helper","links":{"self":"/api/icons/hire-a-helper"},"type":"icon"},{"attributes":{"id":"history","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1da","voted":false},"id":"history","links":{"self":"/api/icons/history"},"type":"icon"},{"attributes":{"id":"hockey-mask","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6ee","voted":false},"id":"hockey-mask","links":{"self":"/api/icons/hockey-mask"},"type":"icon"},{"attributes":{"id":"hockey-puck","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f453","voted":false},"id":"hockey-puck","links":{"self":"/api/icons/hockey-puck"},"type":"icon"},{"attributes":{"id":"hockey-sticks","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f454","voted":false},"id":"hockey-sticks","links":{"self":"/api/icons/hockey-sticks"},"type":"icon"},{"attributes":{"id":"holly-berry","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7aa","voted":false},"id":"holly-berry","links":{"self":"/api/icons/holly-berry"},"type":"icon"},{"attributes":{"id":"home","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f015","voted":false},"id":"home","links":{"self":"/api/icons/home"},"type":"icon"},{"attributes":{"id":"home-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f80a","voted":false},"id":"home-alt","links":{"self":"/api/icons/home-alt"},"type":"icon"},{"attributes":{"id":"home-heart","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4c9","voted":false},"id":"home-heart","links":{"self":"/api/icons/home-heart"},"type":"icon"},{"attributes":{"id":"home-lg","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f80b","voted":false},"id":"home-lg","links":{"self":"/api/icons/home-lg"},"type":"icon"},{"attributes":{"id":"home-lg-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f80c","voted":false},"id":"home-lg-alt","links":{"self":"/api/icons/home-lg-alt"},"type":"icon"},{"attributes":{"id":"hood-cloak","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6ef","voted":false},"id":"hood-cloak","links":{"self":"/api/icons/hood-cloak"},"type":"icon"},{"attributes":{"id":"hooli","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f427","voted":false},"id":"hooli","links":{"self":"/api/icons/hooli"},"type":"icon"},{"attributes":{"id":"horizontal-rule","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f86c","voted":false},"id":"horizontal-rule","links":{"self":"/api/icons/horizontal-rule"},"type":"icon"},{"attributes":{"id":"hornbill","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f592","voted":false},"id":"hornbill","links":{"self":"/api/icons/hornbill"},"type":"icon"},{"attributes":{"id":"horse","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6f0","voted":false},"id":"horse","links":{"self":"/api/icons/horse"},"type":"icon"},{"attributes":{"id":"horse-head","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7ab","voted":false},"id":"horse-head","links":{"self":"/api/icons/horse-head"},"type":"icon"},{"attributes":{"id":"horse-saddle","membership":{"free":[],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f8c3","voted":false},"id":"horse-saddle","links":{"self":"/api/icons/horse-saddle"},"type":"icon"},{"attributes":{"id":"hospital","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0f8","voted":false},"id":"hospital","links":{"self":"/api/icons/hospital"},"type":"icon"},{"attributes":{"id":"hospital-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f47d","voted":false},"id":"hospital-alt","links":{"self":"/api/icons/hospital-alt"},"type":"icon"},{"attributes":{"id":"hospital-symbol","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f47e","voted":false},"id":"hospital-symbol","links":{"self":"/api/icons/hospital-symbol"},"type":"icon"},{"attributes":{"id":"hospital-user","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f80d","voted":false},"id":"hospital-user","links":{"self":"/api/icons/hospital-user"},"type":"icon"},{"attributes":{"id":"hospitals","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f80e","voted":false},"id":"hospitals","links":{"self":"/api/icons/hospitals"},"type":"icon"},{"attributes":{"id":"hot-tub","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f593","voted":false},"id":"hot-tub","links":{"self":"/api/icons/hot-tub"},"type":"icon"},{"attributes":{"id":"hotdog","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f80f","voted":false},"id":"hotdog","links":{"self":"/api/icons/hotdog"},"type":"icon"},{"attributes":{"id":"hotel","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f594","voted":false},"id":"hotel","links":{"self":"/api/icons/hotel"},"type":"icon"},{"attributes":{"id":"hotjar","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3b1","voted":false},"id":"hotjar","links":{"self":"/api/icons/hotjar"},"type":"icon"},{"attributes":{"id":"hourglass","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f254","voted":false},"id":"hourglass","links":{"self":"/api/icons/hourglass"},"type":"icon"},{"attributes":{"id":"hourglass-end","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f253","voted":false},"id":"hourglass-end","links":{"self":"/api/icons/hourglass-end"},"type":"icon"},{"attributes":{"id":"hourglass-half","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f252","voted":false},"id":"hourglass-half","links":{"self":"/api/icons/hourglass-half"},"type":"icon"},{"attributes":{"id":"hourglass-start","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f251","voted":false},"id":"hourglass-start","links":{"self":"/api/icons/hourglass-start"},"type":"icon"},{"attributes":{"id":"house","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f90d","voted":false},"id":"house","links":{"self":"/api/icons/house"},"type":"icon"},{"attributes":{"id":"house-damage","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6f1","voted":false},"id":"house-damage","links":{"self":"/api/icons/house-damage"},"type":"icon"},{"attributes":{"id":"house-day","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f90e","voted":false},"id":"house-day","links":{"self":"/api/icons/house-day"},"type":"icon"},{"attributes":{"id":"house-flood","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f74f","voted":false},"id":"house-flood","links":{"self":"/api/icons/house-flood"},"type":"icon"},{"attributes":{"id":"house-leave","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f90f","voted":false},"id":"house-leave","links":{"self":"/api/icons/house-leave"},"type":"icon"},{"attributes":{"id":"house-night","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f910","voted":false},"id":"house-night","links":{"self":"/api/icons/house-night"},"type":"icon"},{"attributes":{"id":"house-return","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f911","voted":false},"id":"house-return","links":{"self":"/api/icons/house-return"},"type":"icon"},{"attributes":{"id":"house-signal","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f912","voted":false},"id":"house-signal","links":{"self":"/api/icons/house-signal"},"type":"icon"},{"attributes":{"id":"house-user","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f965","voted":false},"id":"house-user","links":{"self":"/api/icons/house-user"},"type":"icon"},{"attributes":{"id":"houzz","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f27c","voted":false},"id":"houzz","links":{"self":"/api/icons/houzz"},"type":"icon"},{"attributes":{"id":"hryvnia","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6f2","voted":true},"id":"hryvnia","links":{"self":"/api/icons/hryvnia"},"type":"icon"},{"attributes":{"id":"html5","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f13b","voted":false},"id":"html5","links":{"self":"/api/icons/html5"},"type":"icon"},{"attributes":{"id":"hubspot","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3b2","voted":false},"id":"hubspot","links":{"self":"/api/icons/hubspot"},"type":"icon"},{"attributes":{"id":"humidity","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f750","voted":false},"id":"humidity","links":{"self":"/api/icons/humidity"},"type":"icon"},{"attributes":{"id":"hurricane","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f751","voted":false},"id":"hurricane","links":{"self":"/api/icons/hurricane"},"type":"icon"},{"attributes":{"id":"i-cursor","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f246","voted":false},"id":"i-cursor","links":{"self":"/api/icons/i-cursor"},"type":"icon"},{"attributes":{"id":"ice-cream","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f810","voted":false},"id":"ice-cream","links":{"self":"/api/icons/ice-cream"},"type":"icon"},{"attributes":{"id":"ice-skate","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7ac","voted":false},"id":"ice-skate","links":{"self":"/api/icons/ice-skate"},"type":"icon"},{"attributes":{"id":"icicles","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7ad","voted":false},"id":"icicles","links":{"self":"/api/icons/icicles"},"type":"icon"},{"attributes":{"id":"icons","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f86d","voted":false},"id":"icons","links":{"self":"/api/icons/icons"},"type":"icon"},{"attributes":{"id":"icons-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f86e","voted":false},"id":"icons-alt","links":{"self":"/api/icons/icons-alt"},"type":"icon"},{"attributes":{"id":"id-badge","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2c1","voted":false},"id":"id-badge","links":{"self":"/api/icons/id-badge"},"type":"icon"},{"attributes":{"id":"id-card","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2c2","voted":false},"id":"id-card","links":{"self":"/api/icons/id-card"},"type":"icon"},{"attributes":{"id":"id-card-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f47f","voted":false},"id":"id-card-alt","links":{"self":"/api/icons/id-card-alt"},"type":"icon"},{"attributes":{"id":"ideal","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f913","voted":true},"id":"ideal","links":{"self":"/api/icons/ideal"},"type":"icon"},{"attributes":{"id":"igloo","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7ae","voted":false},"id":"igloo","links":{"self":"/api/icons/igloo"},"type":"icon"},{"attributes":{"id":"image","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f03e","voted":false},"id":"image","links":{"self":"/api/icons/image"},"type":"icon"},{"attributes":{"id":"image-polaroid","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8c4","voted":false},"id":"image-polaroid","links":{"self":"/api/icons/image-polaroid"},"type":"icon"},{"attributes":{"id":"images","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f302","voted":false},"id":"images","links":{"self":"/api/icons/images"},"type":"icon"},{"attributes":{"id":"imdb","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f2d8","voted":false},"id":"imdb","links":{"self":"/api/icons/imdb"},"type":"icon"},{"attributes":{"id":"inbox","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f01c","voted":false},"id":"inbox","links":{"self":"/api/icons/inbox"},"type":"icon"},{"attributes":{"id":"inbox-in","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f310","voted":false},"id":"inbox-in","links":{"self":"/api/icons/inbox-in"},"type":"icon"},{"attributes":{"id":"inbox-out","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f311","voted":false},"id":"inbox-out","links":{"self":"/api/icons/inbox-out"},"type":"icon"},{"attributes":{"id":"indent","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f03c","voted":false},"id":"indent","links":{"self":"/api/icons/indent"},"type":"icon"},{"attributes":{"id":"industry","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f275","voted":false},"id":"industry","links":{"self":"/api/icons/industry"},"type":"icon"},{"attributes":{"id":"industry-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f3b3","voted":false},"id":"industry-alt","links":{"self":"/api/icons/industry-alt"},"type":"icon"},{"attributes":{"id":"infinity","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f534","voted":true},"id":"infinity","links":{"self":"/api/icons/infinity"},"type":"icon"},{"attributes":{"id":"info","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f129","voted":false},"id":"info","links":{"self":"/api/icons/info"},"type":"icon"},{"attributes":{"id":"info-circle","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f05a","voted":false},"id":"info-circle","links":{"self":"/api/icons/info-circle"},"type":"icon"},{"attributes":{"id":"info-square","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f30f","voted":false},"id":"info-square","links":{"self":"/api/icons/info-square"},"type":"icon"},{"attributes":{"id":"inhaler","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5f9","voted":false},"id":"inhaler","links":{"self":"/api/icons/inhaler"},"type":"icon"},{"attributes":{"id":"instagram","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f16d","voted":false},"id":"instagram","links":{"self":"/api/icons/instagram"},"type":"icon"},{"attributes":{"id":"instagram-square","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f955","voted":true},"id":"instagram-square","links":{"self":"/api/icons/instagram-square"},"type":"icon"},{"attributes":{"id":"integral","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f667","voted":false},"id":"integral","links":{"self":"/api/icons/integral"},"type":"icon"},{"attributes":{"id":"intercom","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f7af","voted":false},"id":"intercom","links":{"self":"/api/icons/intercom"},"type":"icon"},{"attributes":{"id":"internet-explorer","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f26b","voted":false},"id":"internet-explorer","links":{"self":"/api/icons/internet-explorer"},"type":"icon"},{"attributes":{"id":"intersection","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f668","voted":false},"id":"intersection","links":{"self":"/api/icons/intersection"},"type":"icon"},{"attributes":{"id":"inventory","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f480","voted":false},"id":"inventory","links":{"self":"/api/icons/inventory"},"type":"icon"},{"attributes":{"id":"invision","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f7b0","voted":false},"id":"invision","links":{"self":"/api/icons/invision"},"type":"icon"},{"attributes":{"id":"ioxhost","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f208","voted":false},"id":"ioxhost","links":{"self":"/api/icons/ioxhost"},"type":"icon"},{"attributes":{"id":"island-tropical","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f811","voted":true},"id":"island-tropical","links":{"self":"/api/icons/island-tropical"},"type":"icon"},{"attributes":{"id":"italic","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f033","voted":false},"id":"italic","links":{"self":"/api/icons/italic"},"type":"icon"},{"attributes":{"id":"itch-io","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f83a","voted":false},"id":"itch-io","links":{"self":"/api/icons/itch-io"},"type":"icon"},{"attributes":{"id":"itunes","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3b4","voted":false},"id":"itunes","links":{"self":"/api/icons/itunes"},"type":"icon"},{"attributes":{"id":"itunes-note","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3b5","voted":false},"id":"itunes-note","links":{"self":"/api/icons/itunes-note"},"type":"icon"},{"attributes":{"id":"jack-o-lantern","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f30e","voted":false},"id":"jack-o-lantern","links":{"self":"/api/icons/jack-o-lantern"},"type":"icon"},{"attributes":{"id":"java","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f4e4","voted":false},"id":"java","links":{"self":"/api/icons/java"},"type":"icon"},{"attributes":{"id":"jedi","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f669","voted":false},"id":"jedi","links":{"self":"/api/icons/jedi"},"type":"icon"},{"attributes":{"id":"jedi-order","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f50e","voted":false},"id":"jedi-order","links":{"self":"/api/icons/jedi-order"},"type":"icon"},{"attributes":{"id":"jenkins","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3b6","voted":false},"id":"jenkins","links":{"self":"/api/icons/jenkins"},"type":"icon"},{"attributes":{"id":"jira","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f7b1","voted":true},"id":"jira","links":{"self":"/api/icons/jira"},"type":"icon"},{"attributes":{"id":"joget","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3b7","voted":false},"id":"joget","links":{"self":"/api/icons/joget"},"type":"icon"},{"attributes":{"id":"joint","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f595","voted":false},"id":"joint","links":{"self":"/api/icons/joint"},"type":"icon"},{"attributes":{"id":"joomla","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1aa","voted":false},"id":"joomla","links":{"self":"/api/icons/joomla"},"type":"icon"},{"attributes":{"id":"journal-whills","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f66a","voted":false},"id":"journal-whills","links":{"self":"/api/icons/journal-whills"},"type":"icon"},{"attributes":{"id":"joystick","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8c5","voted":false},"id":"joystick","links":{"self":"/api/icons/joystick"},"type":"icon"},{"attributes":{"id":"js","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3b8","voted":false},"id":"js","links":{"self":"/api/icons/js"},"type":"icon"},{"attributes":{"id":"js-square","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3b9","voted":false},"id":"js-square","links":{"self":"/api/icons/js-square"},"type":"icon"},{"attributes":{"id":"jsfiddle","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1cc","voted":false},"id":"jsfiddle","links":{"self":"/api/icons/jsfiddle"},"type":"icon"},{"attributes":{"id":"jug","membership":{"free":[],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f8c6","voted":false},"id":"jug","links":{"self":"/api/icons/jug"},"type":"icon"},{"attributes":{"id":"kaaba","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f66b","voted":false},"id":"kaaba","links":{"self":"/api/icons/kaaba"},"type":"icon"},{"attributes":{"id":"kaggle","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f5fa","voted":true},"id":"kaggle","links":{"self":"/api/icons/kaggle"},"type":"icon"},{"attributes":{"id":"kazoo","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8c7","voted":false},"id":"kazoo","links":{"self":"/api/icons/kazoo"},"type":"icon"},{"attributes":{"id":"kerning","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f86f","voted":false},"id":"kerning","links":{"self":"/api/icons/kerning"},"type":"icon"},{"attributes":{"id":"key","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f084","voted":false},"id":"key","links":{"self":"/api/icons/key"},"type":"icon"},{"attributes":{"id":"key-skeleton","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6f3","voted":false},"id":"key-skeleton","links":{"self":"/api/icons/key-skeleton"},"type":"icon"},{"attributes":{"id":"keybase","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f4f5","voted":true},"id":"keybase","links":{"self":"/api/icons/keybase"},"type":"icon"},{"attributes":{"id":"keyboard","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f11c","voted":false},"id":"keyboard","links":{"self":"/api/icons/keyboard"},"type":"icon"},{"attributes":{"id":"keycdn","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3ba","voted":false},"id":"keycdn","links":{"self":"/api/icons/keycdn"},"type":"icon"},{"attributes":{"id":"keynote","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f66c","voted":false},"id":"keynote","links":{"self":"/api/icons/keynote"},"type":"icon"},{"attributes":{"id":"khanda","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f66d","voted":false},"id":"khanda","links":{"self":"/api/icons/khanda"},"type":"icon"},{"attributes":{"id":"kickstarter","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3bb","voted":false},"id":"kickstarter","links":{"self":"/api/icons/kickstarter"},"type":"icon"},{"attributes":{"id":"kickstarter-k","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3bc","voted":false},"id":"kickstarter-k","links":{"self":"/api/icons/kickstarter-k"},"type":"icon"},{"attributes":{"id":"kidneys","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5fb","voted":false},"id":"kidneys","links":{"self":"/api/icons/kidneys"},"type":"icon"},{"attributes":{"id":"kiss","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f596","voted":false},"id":"kiss","links":{"self":"/api/icons/kiss"},"type":"icon"},{"attributes":{"id":"kiss-beam","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f597","voted":false},"id":"kiss-beam","links":{"self":"/api/icons/kiss-beam"},"type":"icon"},{"attributes":{"id":"kiss-wink-heart","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f598","voted":false},"id":"kiss-wink-heart","links":{"self":"/api/icons/kiss-wink-heart"},"type":"icon"},{"attributes":{"id":"kite","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6f4","voted":false},"id":"kite","links":{"self":"/api/icons/kite"},"type":"icon"},{"attributes":{"id":"kiwi-bird","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f535","voted":false},"id":"kiwi-bird","links":{"self":"/api/icons/kiwi-bird"},"type":"icon"},{"attributes":{"id":"knife-kitchen","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6f5","voted":false},"id":"knife-kitchen","links":{"self":"/api/icons/knife-kitchen"},"type":"icon"},{"attributes":{"id":"korvue","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f42f","voted":false},"id":"korvue","links":{"self":"/api/icons/korvue"},"type":"icon"},{"attributes":{"id":"lambda","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f66e","voted":false},"id":"lambda","links":{"self":"/api/icons/lambda"},"type":"icon"},{"attributes":{"id":"lamp","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4ca","voted":false},"id":"lamp","links":{"self":"/api/icons/lamp"},"type":"icon"},{"attributes":{"id":"lamp-desk","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f914","voted":false},"id":"lamp-desk","links":{"self":"/api/icons/lamp-desk"},"type":"icon"},{"attributes":{"id":"lamp-floor","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f915","voted":false},"id":"lamp-floor","links":{"self":"/api/icons/lamp-floor"},"type":"icon"},{"attributes":{"id":"landmark","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f66f","voted":false},"id":"landmark","links":{"self":"/api/icons/landmark"},"type":"icon"},{"attributes":{"id":"landmark-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f752","voted":false},"id":"landmark-alt","links":{"self":"/api/icons/landmark-alt"},"type":"icon"},{"attributes":{"id":"language","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1ab","voted":false},"id":"language","links":{"self":"/api/icons/language"},"type":"icon"},{"attributes":{"id":"laptop","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f109","voted":false},"id":"laptop","links":{"self":"/api/icons/laptop"},"type":"icon"},{"attributes":{"id":"laptop-code","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5fc","voted":false},"id":"laptop-code","links":{"self":"/api/icons/laptop-code"},"type":"icon"},{"attributes":{"id":"laptop-house","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f966","voted":false},"id":"laptop-house","links":{"self":"/api/icons/laptop-house"},"type":"icon"},{"attributes":{"id":"laptop-medical","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f812","voted":false},"id":"laptop-medical","links":{"self":"/api/icons/laptop-medical"},"type":"icon"},{"attributes":{"id":"laravel","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3bd","voted":false},"id":"laravel","links":{"self":"/api/icons/laravel"},"type":"icon"},{"attributes":{"id":"lasso","membership":{"free":[],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f8c8","voted":false},"id":"lasso","links":{"self":"/api/icons/lasso"},"type":"icon"},{"attributes":{"id":"lastfm","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f202","voted":false},"id":"lastfm","links":{"self":"/api/icons/lastfm"},"type":"icon"},{"attributes":{"id":"lastfm-square","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f203","voted":false},"id":"lastfm-square","links":{"self":"/api/icons/lastfm-square"},"type":"icon"},{"attributes":{"id":"laugh","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f599","voted":false},"id":"laugh","links":{"self":"/api/icons/laugh"},"type":"icon"},{"attributes":{"id":"laugh-beam","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f59a","voted":false},"id":"laugh-beam","links":{"self":"/api/icons/laugh-beam"},"type":"icon"},{"attributes":{"id":"laugh-squint","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f59b","voted":false},"id":"laugh-squint","links":{"self":"/api/icons/laugh-squint"},"type":"icon"},{"attributes":{"id":"laugh-wink","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f59c","voted":false},"id":"laugh-wink","links":{"self":"/api/icons/laugh-wink"},"type":"icon"},{"attributes":{"id":"layer-group","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5fd","voted":false},"id":"layer-group","links":{"self":"/api/icons/layer-group"},"type":"icon"},{"attributes":{"id":"layer-minus","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5fe","voted":false},"id":"layer-minus","links":{"self":"/api/icons/layer-minus"},"type":"icon"},{"attributes":{"id":"layer-plus","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5ff","voted":false},"id":"layer-plus","links":{"self":"/api/icons/layer-plus"},"type":"icon"},{"attributes":{"id":"leaf","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f06c","voted":false},"id":"leaf","links":{"self":"/api/icons/leaf"},"type":"icon"},{"attributes":{"id":"leaf-heart","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4cb","voted":false},"id":"leaf-heart","links":{"self":"/api/icons/leaf-heart"},"type":"icon"},{"attributes":{"id":"leaf-maple","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6f6","voted":false},"id":"leaf-maple","links":{"self":"/api/icons/leaf-maple"},"type":"icon"},{"attributes":{"id":"leaf-oak","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6f7","voted":false},"id":"leaf-oak","links":{"self":"/api/icons/leaf-oak"},"type":"icon"},{"attributes":{"id":"leanpub","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f212","voted":false},"id":"leanpub","links":{"self":"/api/icons/leanpub"},"type":"icon"},{"attributes":{"id":"lemon","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f094","voted":false},"id":"lemon","links":{"self":"/api/icons/lemon"},"type":"icon"},{"attributes":{"id":"less","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f41d","voted":false},"id":"less","links":{"self":"/api/icons/less"},"type":"icon"},{"attributes":{"id":"less-than","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f536","voted":true},"id":"less-than","links":{"self":"/api/icons/less-than"},"type":"icon"},{"attributes":{"id":"less-than-equal","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f537","voted":true},"id":"less-than-equal","links":{"self":"/api/icons/less-than-equal"},"type":"icon"},{"attributes":{"id":"level-down","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f149","voted":false},"id":"level-down","links":{"self":"/api/icons/level-down"},"type":"icon"},{"attributes":{"id":"level-down-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f3be","voted":false},"id":"level-down-alt","links":{"self":"/api/icons/level-down-alt"},"type":"icon"},{"attributes":{"id":"level-up","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f148","voted":false},"id":"level-up","links":{"self":"/api/icons/level-up"},"type":"icon"},{"attributes":{"id":"level-up-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f3bf","voted":false},"id":"level-up-alt","links":{"self":"/api/icons/level-up-alt"},"type":"icon"},{"attributes":{"id":"life-ring","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1cd","voted":false},"id":"life-ring","links":{"self":"/api/icons/life-ring"},"type":"icon"},{"attributes":{"id":"light-ceiling","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f916","voted":false},"id":"light-ceiling","links":{"self":"/api/icons/light-ceiling"},"type":"icon"},{"attributes":{"id":"light-switch","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f917","voted":false},"id":"light-switch","links":{"self":"/api/icons/light-switch"},"type":"icon"},{"attributes":{"id":"light-switch-off","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f918","voted":false},"id":"light-switch-off","links":{"self":"/api/icons/light-switch-off"},"type":"icon"},{"attributes":{"id":"light-switch-on","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f919","voted":false},"id":"light-switch-on","links":{"self":"/api/icons/light-switch-on"},"type":"icon"},{"attributes":{"id":"lightbulb","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0eb","voted":false},"id":"lightbulb","links":{"self":"/api/icons/lightbulb"},"type":"icon"},{"attributes":{"id":"lightbulb-dollar","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f670","voted":false},"id":"lightbulb-dollar","links":{"self":"/api/icons/lightbulb-dollar"},"type":"icon"},{"attributes":{"id":"lightbulb-exclamation","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f671","voted":false},"id":"lightbulb-exclamation","links":{"self":"/api/icons/lightbulb-exclamation"},"type":"icon"},{"attributes":{"id":"lightbulb-on","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f672","voted":false},"id":"lightbulb-on","links":{"self":"/api/icons/lightbulb-on"},"type":"icon"},{"attributes":{"id":"lightbulb-slash","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f673","voted":false},"id":"lightbulb-slash","links":{"self":"/api/icons/lightbulb-slash"},"type":"icon"},{"attributes":{"id":"lights-holiday","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7b2","voted":false},"id":"lights-holiday","links":{"self":"/api/icons/lights-holiday"},"type":"icon"},{"attributes":{"id":"line","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3c0","voted":false},"id":"line","links":{"self":"/api/icons/line"},"type":"icon"},{"attributes":{"id":"line-columns","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f870","voted":false},"id":"line-columns","links":{"self":"/api/icons/line-columns"},"type":"icon"},{"attributes":{"id":"line-height","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f871","voted":false},"id":"line-height","links":{"self":"/api/icons/line-height"},"type":"icon"},{"attributes":{"id":"link","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0c1","voted":false},"id":"link","links":{"self":"/api/icons/link"},"type":"icon"},{"attributes":{"id":"linkedin","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f08c","voted":false},"id":"linkedin","links":{"self":"/api/icons/linkedin"},"type":"icon"},{"attributes":{"id":"linkedin-in","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f0e1","voted":false},"id":"linkedin-in","links":{"self":"/api/icons/linkedin-in"},"type":"icon"},{"attributes":{"id":"linode","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f2b8","voted":false},"id":"linode","links":{"self":"/api/icons/linode"},"type":"icon"},{"attributes":{"id":"linux","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f17c","voted":false},"id":"linux","links":{"self":"/api/icons/linux"},"type":"icon"},{"attributes":{"id":"lips","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f600","voted":false},"id":"lips","links":{"self":"/api/icons/lips"},"type":"icon"},{"attributes":{"id":"lira-sign","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f195","voted":false},"id":"lira-sign","links":{"self":"/api/icons/lira-sign"},"type":"icon"},{"attributes":{"id":"list","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f03a","voted":false},"id":"list","links":{"self":"/api/icons/list"},"type":"icon"},{"attributes":{"id":"list-alt","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f022","voted":false},"id":"list-alt","links":{"self":"/api/icons/list-alt"},"type":"icon"},{"attributes":{"id":"list-music","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8c9","voted":false},"id":"list-music","links":{"self":"/api/icons/list-music"},"type":"icon"},{"attributes":{"id":"list-ol","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0cb","voted":false},"id":"list-ol","links":{"self":"/api/icons/list-ol"},"type":"icon"},{"attributes":{"id":"list-ul","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0ca","voted":false},"id":"list-ul","links":{"self":"/api/icons/list-ul"},"type":"icon"},{"attributes":{"id":"location","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f601","voted":false},"id":"location","links":{"self":"/api/icons/location"},"type":"icon"},{"attributes":{"id":"location-arrow","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f124","voted":false},"id":"location-arrow","links":{"self":"/api/icons/location-arrow"},"type":"icon"},{"attributes":{"id":"location-circle","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f602","voted":false},"id":"location-circle","links":{"self":"/api/icons/location-circle"},"type":"icon"},{"attributes":{"id":"location-slash","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f603","voted":false},"id":"location-slash","links":{"self":"/api/icons/location-slash"},"type":"icon"},{"attributes":{"id":"lock","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f023","voted":false},"id":"lock","links":{"self":"/api/icons/lock"},"type":"icon"},{"attributes":{"id":"lock-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f30d","voted":false},"id":"lock-alt","links":{"self":"/api/icons/lock-alt"},"type":"icon"},{"attributes":{"id":"lock-open","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f3c1","voted":false},"id":"lock-open","links":{"self":"/api/icons/lock-open"},"type":"icon"},{"attributes":{"id":"lock-open-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f3c2","voted":false},"id":"lock-open-alt","links":{"self":"/api/icons/lock-open-alt"},"type":"icon"},{"attributes":{"id":"long-arrow-alt-down","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f309","voted":false},"id":"long-arrow-alt-down","links":{"self":"/api/icons/long-arrow-alt-down"},"type":"icon"},{"attributes":{"id":"long-arrow-alt-left","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f30a","voted":false},"id":"long-arrow-alt-left","links":{"self":"/api/icons/long-arrow-alt-left"},"type":"icon"},{"attributes":{"id":"long-arrow-alt-right","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f30b","voted":false},"id":"long-arrow-alt-right","links":{"self":"/api/icons/long-arrow-alt-right"},"type":"icon"},{"attributes":{"id":"long-arrow-alt-up","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f30c","voted":false},"id":"long-arrow-alt-up","links":{"self":"/api/icons/long-arrow-alt-up"},"type":"icon"},{"attributes":{"id":"long-arrow-down","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f175","voted":false},"id":"long-arrow-down","links":{"self":"/api/icons/long-arrow-down"},"type":"icon"},{"attributes":{"id":"long-arrow-left","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f177","voted":false},"id":"long-arrow-left","links":{"self":"/api/icons/long-arrow-left"},"type":"icon"},{"attributes":{"id":"long-arrow-right","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f178","voted":false},"id":"long-arrow-right","links":{"self":"/api/icons/long-arrow-right"},"type":"icon"},{"attributes":{"id":"long-arrow-up","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f176","voted":false},"id":"long-arrow-up","links":{"self":"/api/icons/long-arrow-up"},"type":"icon"},{"attributes":{"id":"loveseat","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4cc","voted":false},"id":"loveseat","links":{"self":"/api/icons/loveseat"},"type":"icon"},{"attributes":{"id":"low-vision","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2a8","voted":false},"id":"low-vision","links":{"self":"/api/icons/low-vision"},"type":"icon"},{"attributes":{"id":"luchador","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f455","voted":false},"id":"luchador","links":{"self":"/api/icons/luchador"},"type":"icon"},{"attributes":{"id":"luggage-cart","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f59d","voted":false},"id":"luggage-cart","links":{"self":"/api/icons/luggage-cart"},"type":"icon"},{"attributes":{"id":"lungs","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f604","voted":false},"id":"lungs","links":{"self":"/api/icons/lungs"},"type":"icon"},{"attributes":{"id":"lungs-virus","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f967","voted":false},"id":"lungs-virus","links":{"self":"/api/icons/lungs-virus"},"type":"icon"},{"attributes":{"id":"lyft","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3c3","voted":false},"id":"lyft","links":{"self":"/api/icons/lyft"},"type":"icon"},{"attributes":{"id":"mace","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6f8","voted":false},"id":"mace","links":{"self":"/api/icons/mace"},"type":"icon"},{"attributes":{"id":"magento","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3c4","voted":false},"id":"magento","links":{"self":"/api/icons/magento"},"type":"icon"},{"attributes":{"id":"magic","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0d0","voted":false},"id":"magic","links":{"self":"/api/icons/magic"},"type":"icon"},{"attributes":{"id":"magnet","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f076","voted":false},"id":"magnet","links":{"self":"/api/icons/magnet"},"type":"icon"},{"attributes":{"id":"mail-bulk","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f674","voted":false},"id":"mail-bulk","links":{"self":"/api/icons/mail-bulk"},"type":"icon"},{"attributes":{"id":"mailbox","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f813","voted":true},"id":"mailbox","links":{"self":"/api/icons/mailbox"},"type":"icon"},{"attributes":{"id":"mailchimp","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f59e","voted":true},"id":"mailchimp","links":{"self":"/api/icons/mailchimp"},"type":"icon"},{"attributes":{"id":"male","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f183","voted":false},"id":"male","links":{"self":"/api/icons/male"},"type":"icon"},{"attributes":{"id":"mandalorian","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f50f","voted":false},"id":"mandalorian","links":{"self":"/api/icons/mandalorian"},"type":"icon"},{"attributes":{"id":"mandolin","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6f9","voted":false},"id":"mandolin","links":{"self":"/api/icons/mandolin"},"type":"icon"},{"attributes":{"id":"map","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f279","voted":false},"id":"map","links":{"self":"/api/icons/map"},"type":"icon"},{"attributes":{"id":"map-marked","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f59f","voted":false},"id":"map-marked","links":{"self":"/api/icons/map-marked"},"type":"icon"},{"attributes":{"id":"map-marked-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5a0","voted":false},"id":"map-marked-alt","links":{"self":"/api/icons/map-marked-alt"},"type":"icon"},{"attributes":{"id":"map-marker","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f041","voted":false},"id":"map-marker","links":{"self":"/api/icons/map-marker"},"type":"icon"},{"attributes":{"id":"map-marker-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f3c5","voted":false},"id":"map-marker-alt","links":{"self":"/api/icons/map-marker-alt"},"type":"icon"},{"attributes":{"id":"map-marker-alt-slash","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f605","voted":false},"id":"map-marker-alt-slash","links":{"self":"/api/icons/map-marker-alt-slash"},"type":"icon"},{"attributes":{"id":"map-marker-check","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f606","voted":false},"id":"map-marker-check","links":{"self":"/api/icons/map-marker-check"},"type":"icon"},{"attributes":{"id":"map-marker-edit","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f607","voted":false},"id":"map-marker-edit","links":{"self":"/api/icons/map-marker-edit"},"type":"icon"},{"attributes":{"id":"map-marker-exclamation","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f608","voted":false},"id":"map-marker-exclamation","links":{"self":"/api/icons/map-marker-exclamation"},"type":"icon"},{"attributes":{"id":"map-marker-minus","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f609","voted":false},"id":"map-marker-minus","links":{"self":"/api/icons/map-marker-minus"},"type":"icon"},{"attributes":{"id":"map-marker-plus","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f60a","voted":false},"id":"map-marker-plus","links":{"self":"/api/icons/map-marker-plus"},"type":"icon"},{"attributes":{"id":"map-marker-question","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f60b","voted":false},"id":"map-marker-question","links":{"self":"/api/icons/map-marker-question"},"type":"icon"},{"attributes":{"id":"map-marker-slash","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f60c","voted":false},"id":"map-marker-slash","links":{"self":"/api/icons/map-marker-slash"},"type":"icon"},{"attributes":{"id":"map-marker-smile","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f60d","voted":false},"id":"map-marker-smile","links":{"self":"/api/icons/map-marker-smile"},"type":"icon"},{"attributes":{"id":"map-marker-times","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f60e","voted":false},"id":"map-marker-times","links":{"self":"/api/icons/map-marker-times"},"type":"icon"},{"attributes":{"id":"map-pin","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f276","voted":false},"id":"map-pin","links":{"self":"/api/icons/map-pin"},"type":"icon"},{"attributes":{"id":"map-signs","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f277","voted":false},"id":"map-signs","links":{"self":"/api/icons/map-signs"},"type":"icon"},{"attributes":{"id":"markdown","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f60f","voted":true},"id":"markdown","links":{"self":"/api/icons/markdown"},"type":"icon"},{"attributes":{"id":"marker","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5a1","voted":true},"id":"marker","links":{"self":"/api/icons/marker"},"type":"icon"},{"attributes":{"id":"mars","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f222","voted":false},"id":"mars","links":{"self":"/api/icons/mars"},"type":"icon"},{"attributes":{"id":"mars-double","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f227","voted":false},"id":"mars-double","links":{"self":"/api/icons/mars-double"},"type":"icon"},{"attributes":{"id":"mars-stroke","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f229","voted":false},"id":"mars-stroke","links":{"self":"/api/icons/mars-stroke"},"type":"icon"},{"attributes":{"id":"mars-stroke-h","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f22b","voted":false},"id":"mars-stroke-h","links":{"self":"/api/icons/mars-stroke-h"},"type":"icon"},{"attributes":{"id":"mars-stroke-v","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f22a","voted":false},"id":"mars-stroke-v","links":{"self":"/api/icons/mars-stroke-v"},"type":"icon"},{"attributes":{"id":"mask","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6fa","voted":false},"id":"mask","links":{"self":"/api/icons/mask"},"type":"icon"},{"attributes":{"id":"mastodon","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f4f6","voted":true},"id":"mastodon","links":{"self":"/api/icons/mastodon"},"type":"icon"},{"attributes":{"id":"maxcdn","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f136","voted":false},"id":"maxcdn","links":{"self":"/api/icons/maxcdn"},"type":"icon"},{"attributes":{"id":"mdb","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f8ca","voted":false},"id":"mdb","links":{"self":"/api/icons/mdb"},"type":"icon"},{"attributes":{"id":"meat","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f814","voted":false},"id":"meat","links":{"self":"/api/icons/meat"},"type":"icon"},{"attributes":{"id":"medal","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5a2","voted":true},"id":"medal","links":{"self":"/api/icons/medal"},"type":"icon"},{"attributes":{"id":"medapps","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3c6","voted":false},"id":"medapps","links":{"self":"/api/icons/medapps"},"type":"icon"},{"attributes":{"id":"medium","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f23a","voted":false},"id":"medium","links":{"self":"/api/icons/medium"},"type":"icon"},{"attributes":{"id":"medium-m","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3c7","voted":false},"id":"medium-m","links":{"self":"/api/icons/medium-m"},"type":"icon"},{"attributes":{"id":"medkit","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0fa","voted":false},"id":"medkit","links":{"self":"/api/icons/medkit"},"type":"icon"},{"attributes":{"id":"medrt","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3c8","voted":false},"id":"medrt","links":{"self":"/api/icons/medrt"},"type":"icon"},{"attributes":{"id":"meetup","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f2e0","voted":false},"id":"meetup","links":{"self":"/api/icons/meetup"},"type":"icon"},{"attributes":{"id":"megaphone","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f675","voted":false},"id":"megaphone","links":{"self":"/api/icons/megaphone"},"type":"icon"},{"attributes":{"id":"megaport","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f5a3","voted":false},"id":"megaport","links":{"self":"/api/icons/megaport"},"type":"icon"},{"attributes":{"id":"meh","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f11a","voted":false},"id":"meh","links":{"self":"/api/icons/meh"},"type":"icon"},{"attributes":{"id":"meh-blank","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5a4","voted":false},"id":"meh-blank","links":{"self":"/api/icons/meh-blank"},"type":"icon"},{"attributes":{"id":"meh-rolling-eyes","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5a5","voted":false},"id":"meh-rolling-eyes","links":{"self":"/api/icons/meh-rolling-eyes"},"type":"icon"},{"attributes":{"id":"memory","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f538","voted":true},"id":"memory","links":{"self":"/api/icons/memory"},"type":"icon"},{"attributes":{"id":"mendeley","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f7b3","voted":true},"id":"mendeley","links":{"self":"/api/icons/mendeley"},"type":"icon"},{"attributes":{"id":"menorah","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f676","voted":false},"id":"menorah","links":{"self":"/api/icons/menorah"},"type":"icon"},{"attributes":{"id":"mercury","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f223","voted":false},"id":"mercury","links":{"self":"/api/icons/mercury"},"type":"icon"},{"attributes":{"id":"meteor","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f753","voted":false},"id":"meteor","links":{"self":"/api/icons/meteor"},"type":"icon"},{"attributes":{"id":"microblog","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f91a","voted":true},"id":"microblog","links":{"self":"/api/icons/microblog"},"type":"icon"},{"attributes":{"id":"microchip","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2db","voted":false},"id":"microchip","links":{"self":"/api/icons/microchip"},"type":"icon"},{"attributes":{"id":"microphone","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f130","voted":false},"id":"microphone","links":{"self":"/api/icons/microphone"},"type":"icon"},{"attributes":{"id":"microphone-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f3c9","voted":false},"id":"microphone-alt","links":{"self":"/api/icons/microphone-alt"},"type":"icon"},{"attributes":{"id":"microphone-alt-slash","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f539","voted":false},"id":"microphone-alt-slash","links":{"self":"/api/icons/microphone-alt-slash"},"type":"icon"},{"attributes":{"id":"microphone-slash","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f131","voted":false},"id":"microphone-slash","links":{"self":"/api/icons/microphone-slash"},"type":"icon"},{"attributes":{"id":"microphone-stand","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8cb","voted":false},"id":"microphone-stand","links":{"self":"/api/icons/microphone-stand"},"type":"icon"},{"attributes":{"id":"microscope","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f610","voted":false},"id":"microscope","links":{"self":"/api/icons/microscope"},"type":"icon"},{"attributes":{"id":"microsoft","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3ca","voted":true},"id":"microsoft","links":{"self":"/api/icons/microsoft"},"type":"icon"},{"attributes":{"id":"microwave","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f91b","voted":false},"id":"microwave","links":{"self":"/api/icons/microwave"},"type":"icon"},{"attributes":{"id":"mind-share","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f677","voted":false},"id":"mind-share","links":{"self":"/api/icons/mind-share"},"type":"icon"},{"attributes":{"id":"minus","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f068","voted":false},"id":"minus","links":{"self":"/api/icons/minus"},"type":"icon"},{"attributes":{"id":"minus-circle","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f056","voted":false},"id":"minus-circle","links":{"self":"/api/icons/minus-circle"},"type":"icon"},{"attributes":{"id":"minus-hexagon","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f307","voted":false},"id":"minus-hexagon","links":{"self":"/api/icons/minus-hexagon"},"type":"icon"},{"attributes":{"id":"minus-octagon","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f308","voted":false},"id":"minus-octagon","links":{"self":"/api/icons/minus-octagon"},"type":"icon"},{"attributes":{"id":"minus-square","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f146","voted":false},"id":"minus-square","links":{"self":"/api/icons/minus-square"},"type":"icon"},{"attributes":{"id":"mistletoe","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7b4","voted":false},"id":"mistletoe","links":{"self":"/api/icons/mistletoe"},"type":"icon"},{"attributes":{"id":"mitten","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7b5","voted":false},"id":"mitten","links":{"self":"/api/icons/mitten"},"type":"icon"},{"attributes":{"id":"mix","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3cb","voted":false},"id":"mix","links":{"self":"/api/icons/mix"},"type":"icon"},{"attributes":{"id":"mixcloud","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f289","voted":false},"id":"mixcloud","links":{"self":"/api/icons/mixcloud"},"type":"icon"},{"attributes":{"id":"mixer","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f956","voted":true},"id":"mixer","links":{"self":"/api/icons/mixer"},"type":"icon"},{"attributes":{"id":"mizuni","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3cc","voted":false},"id":"mizuni","links":{"self":"/api/icons/mizuni"},"type":"icon"},{"attributes":{"id":"mobile","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f10b","voted":false},"id":"mobile","links":{"self":"/api/icons/mobile"},"type":"icon"},{"attributes":{"id":"mobile-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f3cd","voted":false},"id":"mobile-alt","links":{"self":"/api/icons/mobile-alt"},"type":"icon"},{"attributes":{"id":"mobile-android","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f3ce","voted":false},"id":"mobile-android","links":{"self":"/api/icons/mobile-android"},"type":"icon"},{"attributes":{"id":"mobile-android-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f3cf","voted":false},"id":"mobile-android-alt","links":{"self":"/api/icons/mobile-android-alt"},"type":"icon"},{"attributes":{"id":"modx","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f285","voted":false},"id":"modx","links":{"self":"/api/icons/modx"},"type":"icon"},{"attributes":{"id":"monero","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3d0","voted":false},"id":"monero","links":{"self":"/api/icons/monero"},"type":"icon"},{"attributes":{"id":"money-bill","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0d6","voted":false},"id":"money-bill","links":{"self":"/api/icons/money-bill"},"type":"icon"},{"attributes":{"id":"money-bill-alt","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f3d1","voted":false},"id":"money-bill-alt","links":{"self":"/api/icons/money-bill-alt"},"type":"icon"},{"attributes":{"id":"money-bill-wave","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f53a","voted":true},"id":"money-bill-wave","links":{"self":"/api/icons/money-bill-wave"},"type":"icon"},{"attributes":{"id":"money-bill-wave-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f53b","voted":true},"id":"money-bill-wave-alt","links":{"self":"/api/icons/money-bill-wave-alt"},"type":"icon"},{"attributes":{"id":"money-check","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f53c","voted":true},"id":"money-check","links":{"self":"/api/icons/money-check"},"type":"icon"},{"attributes":{"id":"money-check-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f53d","voted":true},"id":"money-check-alt","links":{"self":"/api/icons/money-check-alt"},"type":"icon"},{"attributes":{"id":"money-check-edit","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f872","voted":true},"id":"money-check-edit","links":{"self":"/api/icons/money-check-edit"},"type":"icon"},{"attributes":{"id":"money-check-edit-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f873","voted":true},"id":"money-check-edit-alt","links":{"self":"/api/icons/money-check-edit-alt"},"type":"icon"},{"attributes":{"id":"monitor-heart-rate","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f611","voted":false},"id":"monitor-heart-rate","links":{"self":"/api/icons/monitor-heart-rate"},"type":"icon"},{"attributes":{"id":"monkey","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6fb","voted":false},"id":"monkey","links":{"self":"/api/icons/monkey"},"type":"icon"},{"attributes":{"id":"monument","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5a6","voted":false},"id":"monument","links":{"self":"/api/icons/monument"},"type":"icon"},{"attributes":{"id":"moon","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f186","voted":false},"id":"moon","links":{"self":"/api/icons/moon"},"type":"icon"},{"attributes":{"id":"moon-cloud","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f754","voted":false},"id":"moon-cloud","links":{"self":"/api/icons/moon-cloud"},"type":"icon"},{"attributes":{"id":"moon-stars","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f755","voted":false},"id":"moon-stars","links":{"self":"/api/icons/moon-stars"},"type":"icon"},{"attributes":{"id":"mortar-pestle","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5a7","voted":false},"id":"mortar-pestle","links":{"self":"/api/icons/mortar-pestle"},"type":"icon"},{"attributes":{"id":"mosque","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f678","voted":false},"id":"mosque","links":{"self":"/api/icons/mosque"},"type":"icon"},{"attributes":{"id":"motorcycle","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f21c","voted":false},"id":"motorcycle","links":{"self":"/api/icons/motorcycle"},"type":"icon"},{"attributes":{"id":"mountain","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6fc","voted":false},"id":"mountain","links":{"self":"/api/icons/mountain"},"type":"icon"},{"attributes":{"id":"mountains","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6fd","voted":false},"id":"mountains","links":{"self":"/api/icons/mountains"},"type":"icon"},{"attributes":{"id":"mouse","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8cc","voted":true},"id":"mouse","links":{"self":"/api/icons/mouse"},"type":"icon"},{"attributes":{"id":"mouse-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8cd","voted":false},"id":"mouse-alt","links":{"self":"/api/icons/mouse-alt"},"type":"icon"},{"attributes":{"id":"mouse-pointer","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f245","voted":false},"id":"mouse-pointer","links":{"self":"/api/icons/mouse-pointer"},"type":"icon"},{"attributes":{"id":"mp3-player","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8ce","voted":false},"id":"mp3-player","links":{"self":"/api/icons/mp3-player"},"type":"icon"},{"attributes":{"id":"mug","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f874","voted":false},"id":"mug","links":{"self":"/api/icons/mug"},"type":"icon"},{"attributes":{"id":"mug-hot","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7b6","voted":false},"id":"mug-hot","links":{"self":"/api/icons/mug-hot"},"type":"icon"},{"attributes":{"id":"mug-marshmallows","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7b7","voted":false},"id":"mug-marshmallows","links":{"self":"/api/icons/mug-marshmallows"},"type":"icon"},{"attributes":{"id":"mug-tea","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f875","voted":false},"id":"mug-tea","links":{"self":"/api/icons/mug-tea"},"type":"icon"},{"attributes":{"id":"music","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f001","voted":false},"id":"music","links":{"self":"/api/icons/music"},"type":"icon"},{"attributes":{"id":"music-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8cf","voted":false},"id":"music-alt","links":{"self":"/api/icons/music-alt"},"type":"icon"},{"attributes":{"id":"music-alt-slash","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8d0","voted":false},"id":"music-alt-slash","links":{"self":"/api/icons/music-alt-slash"},"type":"icon"},{"attributes":{"id":"music-slash","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8d1","voted":false},"id":"music-slash","links":{"self":"/api/icons/music-slash"},"type":"icon"},{"attributes":{"id":"napster","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3d2","voted":false},"id":"napster","links":{"self":"/api/icons/napster"},"type":"icon"},{"attributes":{"id":"narwhal","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6fe","voted":false},"id":"narwhal","links":{"self":"/api/icons/narwhal"},"type":"icon"},{"attributes":{"id":"neos","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f612","voted":true},"id":"neos","links":{"self":"/api/icons/neos"},"type":"icon"},{"attributes":{"id":"network-wired","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6ff","voted":true},"id":"network-wired","links":{"self":"/api/icons/network-wired"},"type":"icon"},{"attributes":{"id":"neuter","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f22c","voted":false},"id":"neuter","links":{"self":"/api/icons/neuter"},"type":"icon"},{"attributes":{"id":"newspaper","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1ea","voted":false},"id":"newspaper","links":{"self":"/api/icons/newspaper"},"type":"icon"},{"attributes":{"id":"nimblr","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f5a8","voted":false},"id":"nimblr","links":{"self":"/api/icons/nimblr"},"type":"icon"},{"attributes":{"id":"node","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f419","voted":true},"id":"node","links":{"self":"/api/icons/node"},"type":"icon"},{"attributes":{"id":"node-js","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3d3","voted":false},"id":"node-js","links":{"self":"/api/icons/node-js"},"type":"icon"},{"attributes":{"id":"not-equal","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f53e","voted":true},"id":"not-equal","links":{"self":"/api/icons/not-equal"},"type":"icon"},{"attributes":{"id":"notes-medical","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f481","voted":false},"id":"notes-medical","links":{"self":"/api/icons/notes-medical"},"type":"icon"},{"attributes":{"id":"npm","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3d4","voted":false},"id":"npm","links":{"self":"/api/icons/npm"},"type":"icon"},{"attributes":{"id":"ns8","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3d5","voted":false},"id":"ns8","links":{"self":"/api/icons/ns8"},"type":"icon"},{"attributes":{"id":"nutritionix","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3d6","voted":false},"id":"nutritionix","links":{"self":"/api/icons/nutritionix"},"type":"icon"},{"attributes":{"id":"object-group","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f247","voted":false},"id":"object-group","links":{"self":"/api/icons/object-group"},"type":"icon"},{"attributes":{"id":"object-ungroup","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f248","voted":false},"id":"object-ungroup","links":{"self":"/api/icons/object-ungroup"},"type":"icon"},{"attributes":{"id":"octagon","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f306","voted":false},"id":"octagon","links":{"self":"/api/icons/octagon"},"type":"icon"},{"attributes":{"id":"odnoklassniki","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f263","voted":false},"id":"odnoklassniki","links":{"self":"/api/icons/odnoklassniki"},"type":"icon"},{"attributes":{"id":"odnoklassniki-square","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f264","voted":false},"id":"odnoklassniki-square","links":{"self":"/api/icons/odnoklassniki-square"},"type":"icon"},{"attributes":{"id":"oil-can","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f613","voted":false},"id":"oil-can","links":{"self":"/api/icons/oil-can"},"type":"icon"},{"attributes":{"id":"oil-temp","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f614","voted":false},"id":"oil-temp","links":{"self":"/api/icons/oil-temp"},"type":"icon"},{"attributes":{"id":"old-republic","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f510","voted":false},"id":"old-republic","links":{"self":"/api/icons/old-republic"},"type":"icon"},{"attributes":{"id":"om","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f679","voted":false},"id":"om","links":{"self":"/api/icons/om"},"type":"icon"},{"attributes":{"id":"omega","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f67a","voted":false},"id":"omega","links":{"self":"/api/icons/omega"},"type":"icon"},{"attributes":{"id":"opencart","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f23d","voted":false},"id":"opencart","links":{"self":"/api/icons/opencart"},"type":"icon"},{"attributes":{"id":"openid","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f19b","voted":false},"id":"openid","links":{"self":"/api/icons/openid"},"type":"icon"},{"attributes":{"id":"opera","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f26a","voted":false},"id":"opera","links":{"self":"/api/icons/opera"},"type":"icon"},{"attributes":{"id":"optin-monster","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f23c","voted":false},"id":"optin-monster","links":{"self":"/api/icons/optin-monster"},"type":"icon"},{"attributes":{"id":"orcid","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f8d2","voted":false},"id":"orcid","links":{"self":"/api/icons/orcid"},"type":"icon"},{"attributes":{"id":"ornament","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7b8","voted":false},"id":"ornament","links":{"self":"/api/icons/ornament"},"type":"icon"},{"attributes":{"id":"osi","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f41a","voted":false},"id":"osi","links":{"self":"/api/icons/osi"},"type":"icon"},{"attributes":{"id":"otter","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f700","voted":false},"id":"otter","links":{"self":"/api/icons/otter"},"type":"icon"},{"attributes":{"id":"outdent","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f03b","voted":false},"id":"outdent","links":{"self":"/api/icons/outdent"},"type":"icon"},{"attributes":{"id":"outlet","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f91c","voted":false},"id":"outlet","links":{"self":"/api/icons/outlet"},"type":"icon"},{"attributes":{"id":"oven","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f91d","voted":false},"id":"oven","links":{"self":"/api/icons/oven"},"type":"icon"},{"attributes":{"id":"overline","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f876","voted":false},"id":"overline","links":{"self":"/api/icons/overline"},"type":"icon"},{"attributes":{"id":"page-break","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f877","voted":false},"id":"page-break","links":{"self":"/api/icons/page-break"},"type":"icon"},{"attributes":{"id":"page4","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3d7","voted":false},"id":"page4","links":{"self":"/api/icons/page4"},"type":"icon"},{"attributes":{"id":"pagelines","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f18c","voted":false},"id":"pagelines","links":{"self":"/api/icons/pagelines"},"type":"icon"},{"attributes":{"id":"pager","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f815","voted":false},"id":"pager","links":{"self":"/api/icons/pager"},"type":"icon"},{"attributes":{"id":"paint-brush","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1fc","voted":false},"id":"paint-brush","links":{"self":"/api/icons/paint-brush"},"type":"icon"},{"attributes":{"id":"paint-brush-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5a9","voted":false},"id":"paint-brush-alt","links":{"self":"/api/icons/paint-brush-alt"},"type":"icon"},{"attributes":{"id":"paint-roller","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5aa","voted":false},"id":"paint-roller","links":{"self":"/api/icons/paint-roller"},"type":"icon"},{"attributes":{"id":"palette","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f53f","voted":true},"id":"palette","links":{"self":"/api/icons/palette"},"type":"icon"},{"attributes":{"id":"palfed","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3d8","voted":false},"id":"palfed","links":{"self":"/api/icons/palfed"},"type":"icon"},{"attributes":{"id":"pallet","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f482","voted":false},"id":"pallet","links":{"self":"/api/icons/pallet"},"type":"icon"},{"attributes":{"id":"pallet-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f483","voted":false},"id":"pallet-alt","links":{"self":"/api/icons/pallet-alt"},"type":"icon"},{"attributes":{"id":"paper-plane","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1d8","voted":false},"id":"paper-plane","links":{"self":"/api/icons/paper-plane"},"type":"icon"},{"attributes":{"id":"paperclip","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0c6","voted":false},"id":"paperclip","links":{"self":"/api/icons/paperclip"},"type":"icon"},{"attributes":{"id":"parachute-box","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4cd","voted":false},"id":"parachute-box","links":{"self":"/api/icons/parachute-box"},"type":"icon"},{"attributes":{"id":"paragraph","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1dd","voted":false},"id":"paragraph","links":{"self":"/api/icons/paragraph"},"type":"icon"},{"attributes":{"id":"paragraph-rtl","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f878","voted":false},"id":"paragraph-rtl","links":{"self":"/api/icons/paragraph-rtl"},"type":"icon"},{"attributes":{"id":"parking","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f540","voted":true},"id":"parking","links":{"self":"/api/icons/parking"},"type":"icon"},{"attributes":{"id":"parking-circle","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f615","voted":false},"id":"parking-circle","links":{"self":"/api/icons/parking-circle"},"type":"icon"},{"attributes":{"id":"parking-circle-slash","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f616","voted":false},"id":"parking-circle-slash","links":{"self":"/api/icons/parking-circle-slash"},"type":"icon"},{"attributes":{"id":"parking-slash","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f617","voted":false},"id":"parking-slash","links":{"self":"/api/icons/parking-slash"},"type":"icon"},{"attributes":{"id":"passport","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5ab","voted":false},"id":"passport","links":{"self":"/api/icons/passport"},"type":"icon"},{"attributes":{"id":"pastafarianism","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f67b","voted":false},"id":"pastafarianism","links":{"self":"/api/icons/pastafarianism"},"type":"icon"},{"attributes":{"id":"paste","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0ea","voted":false},"id":"paste","links":{"self":"/api/icons/paste"},"type":"icon"},{"attributes":{"id":"patreon","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3d9","voted":false},"id":"patreon","links":{"self":"/api/icons/patreon"},"type":"icon"},{"attributes":{"id":"pause","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f04c","voted":false},"id":"pause","links":{"self":"/api/icons/pause"},"type":"icon"},{"attributes":{"id":"pause-circle","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f28b","voted":false},"id":"pause-circle","links":{"self":"/api/icons/pause-circle"},"type":"icon"},{"attributes":{"id":"paw","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1b0","voted":false},"id":"paw","links":{"self":"/api/icons/paw"},"type":"icon"},{"attributes":{"id":"paw-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f701","voted":false},"id":"paw-alt","links":{"self":"/api/icons/paw-alt"},"type":"icon"},{"attributes":{"id":"paw-claws","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f702","voted":false},"id":"paw-claws","links":{"self":"/api/icons/paw-claws"},"type":"icon"},{"attributes":{"id":"paypal","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1ed","voted":false},"id":"paypal","links":{"self":"/api/icons/paypal"},"type":"icon"},{"attributes":{"id":"peace","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f67c","voted":false},"id":"peace","links":{"self":"/api/icons/peace"},"type":"icon"},{"attributes":{"id":"pegasus","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f703","voted":false},"id":"pegasus","links":{"self":"/api/icons/pegasus"},"type":"icon"},{"attributes":{"id":"pen","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f304","voted":false},"id":"pen","links":{"self":"/api/icons/pen"},"type":"icon"},{"attributes":{"id":"pen-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f305","voted":false},"id":"pen-alt","links":{"self":"/api/icons/pen-alt"},"type":"icon"},{"attributes":{"id":"pen-fancy","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5ac","voted":false},"id":"pen-fancy","links":{"self":"/api/icons/pen-fancy"},"type":"icon"},{"attributes":{"id":"pen-nib","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5ad","voted":true},"id":"pen-nib","links":{"self":"/api/icons/pen-nib"},"type":"icon"},{"attributes":{"id":"pen-square","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f14b","voted":false},"id":"pen-square","links":{"self":"/api/icons/pen-square"},"type":"icon"},{"attributes":{"id":"pencil","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f040","voted":false},"id":"pencil","links":{"self":"/api/icons/pencil"},"type":"icon"},{"attributes":{"id":"pencil-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f303","voted":false},"id":"pencil-alt","links":{"self":"/api/icons/pencil-alt"},"type":"icon"},{"attributes":{"id":"pencil-paintbrush","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f618","voted":false},"id":"pencil-paintbrush","links":{"self":"/api/icons/pencil-paintbrush"},"type":"icon"},{"attributes":{"id":"pencil-ruler","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5ae","voted":false},"id":"pencil-ruler","links":{"self":"/api/icons/pencil-ruler"},"type":"icon"},{"attributes":{"id":"pennant","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f456","voted":false},"id":"pennant","links":{"self":"/api/icons/pennant"},"type":"icon"},{"attributes":{"id":"penny-arcade","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f704","voted":false},"id":"penny-arcade","links":{"self":"/api/icons/penny-arcade"},"type":"icon"},{"attributes":{"id":"people-arrows","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f968","voted":false},"id":"people-arrows","links":{"self":"/api/icons/people-arrows"},"type":"icon"},{"attributes":{"id":"people-carry","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4ce","voted":false},"id":"people-carry","links":{"self":"/api/icons/people-carry"},"type":"icon"},{"attributes":{"id":"pepper-hot","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f816","voted":true},"id":"pepper-hot","links":{"self":"/api/icons/pepper-hot"},"type":"icon"},{"attributes":{"id":"percent","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f295","voted":false},"id":"percent","links":{"self":"/api/icons/percent"},"type":"icon"},{"attributes":{"id":"percentage","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f541","voted":true},"id":"percentage","links":{"self":"/api/icons/percentage"},"type":"icon"},{"attributes":{"id":"periscope","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3da","voted":false},"id":"periscope","links":{"self":"/api/icons/periscope"},"type":"icon"},{"attributes":{"id":"person-booth","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f756","voted":false},"id":"person-booth","links":{"self":"/api/icons/person-booth"},"type":"icon"},{"attributes":{"id":"person-carry","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4cf","voted":false},"id":"person-carry","links":{"self":"/api/icons/person-carry"},"type":"icon"},{"attributes":{"id":"person-dolly","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4d0","voted":false},"id":"person-dolly","links":{"self":"/api/icons/person-dolly"},"type":"icon"},{"attributes":{"id":"person-dolly-empty","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4d1","voted":false},"id":"person-dolly-empty","links":{"self":"/api/icons/person-dolly-empty"},"type":"icon"},{"attributes":{"id":"person-sign","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f757","voted":false},"id":"person-sign","links":{"self":"/api/icons/person-sign"},"type":"icon"},{"attributes":{"id":"phabricator","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3db","voted":false},"id":"phabricator","links":{"self":"/api/icons/phabricator"},"type":"icon"},{"attributes":{"id":"phoenix-framework","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3dc","voted":false},"id":"phoenix-framework","links":{"self":"/api/icons/phoenix-framework"},"type":"icon"},{"attributes":{"id":"phoenix-squadron","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f511","voted":false},"id":"phoenix-squadron","links":{"self":"/api/icons/phoenix-squadron"},"type":"icon"},{"attributes":{"id":"phone","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f095","voted":false},"id":"phone","links":{"self":"/api/icons/phone"},"type":"icon"},{"attributes":{"id":"phone-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f879","voted":false},"id":"phone-alt","links":{"self":"/api/icons/phone-alt"},"type":"icon"},{"attributes":{"id":"phone-laptop","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f87a","voted":false},"id":"phone-laptop","links":{"self":"/api/icons/phone-laptop"},"type":"icon"},{"attributes":{"id":"phone-office","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f67d","voted":false},"id":"phone-office","links":{"self":"/api/icons/phone-office"},"type":"icon"},{"attributes":{"id":"phone-plus","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4d2","voted":false},"id":"phone-plus","links":{"self":"/api/icons/phone-plus"},"type":"icon"},{"attributes":{"id":"phone-rotary","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8d3","voted":false},"id":"phone-rotary","links":{"self":"/api/icons/phone-rotary"},"type":"icon"},{"attributes":{"id":"phone-slash","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f3dd","voted":false},"id":"phone-slash","links":{"self":"/api/icons/phone-slash"},"type":"icon"},{"attributes":{"id":"phone-square","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f098","voted":false},"id":"phone-square","links":{"self":"/api/icons/phone-square"},"type":"icon"},{"attributes":{"id":"phone-square-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f87b","voted":false},"id":"phone-square-alt","links":{"self":"/api/icons/phone-square-alt"},"type":"icon"},{"attributes":{"id":"phone-volume","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2a0","voted":false},"id":"phone-volume","links":{"self":"/api/icons/phone-volume"},"type":"icon"},{"attributes":{"id":"photo-video","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f87c","voted":false},"id":"photo-video","links":{"self":"/api/icons/photo-video"},"type":"icon"},{"attributes":{"id":"php","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f457","voted":true},"id":"php","links":{"self":"/api/icons/php"},"type":"icon"},{"attributes":{"id":"pi","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f67e","voted":false},"id":"pi","links":{"self":"/api/icons/pi"},"type":"icon"},{"attributes":{"id":"piano","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8d4","voted":false},"id":"piano","links":{"self":"/api/icons/piano"},"type":"icon"},{"attributes":{"id":"piano-keyboard","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8d5","voted":false},"id":"piano-keyboard","links":{"self":"/api/icons/piano-keyboard"},"type":"icon"},{"attributes":{"id":"pie","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f705","voted":false},"id":"pie","links":{"self":"/api/icons/pie"},"type":"icon"},{"attributes":{"id":"pied-piper","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f2ae","voted":false},"id":"pied-piper","links":{"self":"/api/icons/pied-piper"},"type":"icon"},{"attributes":{"id":"pied-piper-alt","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1a8","voted":false},"id":"pied-piper-alt","links":{"self":"/api/icons/pied-piper-alt"},"type":"icon"},{"attributes":{"id":"pied-piper-hat","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f4e5","voted":false},"id":"pied-piper-hat","links":{"self":"/api/icons/pied-piper-hat"},"type":"icon"},{"attributes":{"id":"pied-piper-pp","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1a7","voted":false},"id":"pied-piper-pp","links":{"self":"/api/icons/pied-piper-pp"},"type":"icon"},{"attributes":{"id":"pied-piper-square","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f91e","voted":false},"id":"pied-piper-square","links":{"self":"/api/icons/pied-piper-square"},"type":"icon"},{"attributes":{"id":"pig","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f706","voted":false},"id":"pig","links":{"self":"/api/icons/pig"},"type":"icon"},{"attributes":{"id":"piggy-bank","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4d3","voted":false},"id":"piggy-bank","links":{"self":"/api/icons/piggy-bank"},"type":"icon"},{"attributes":{"id":"pills","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f484","voted":false},"id":"pills","links":{"self":"/api/icons/pills"},"type":"icon"},{"attributes":{"id":"pinterest","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f0d2","voted":false},"id":"pinterest","links":{"self":"/api/icons/pinterest"},"type":"icon"},{"attributes":{"id":"pinterest-p","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f231","voted":false},"id":"pinterest-p","links":{"self":"/api/icons/pinterest-p"},"type":"icon"},{"attributes":{"id":"pinterest-square","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f0d3","voted":false},"id":"pinterest-square","links":{"self":"/api/icons/pinterest-square"},"type":"icon"},{"attributes":{"id":"pizza","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f817","voted":false},"id":"pizza","links":{"self":"/api/icons/pizza"},"type":"icon"},{"attributes":{"id":"pizza-slice","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f818","voted":true},"id":"pizza-slice","links":{"self":"/api/icons/pizza-slice"},"type":"icon"},{"attributes":{"id":"place-of-worship","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f67f","voted":false},"id":"place-of-worship","links":{"self":"/api/icons/place-of-worship"},"type":"icon"},{"attributes":{"id":"plane","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f072","voted":false},"id":"plane","links":{"self":"/api/icons/plane"},"type":"icon"},{"attributes":{"id":"plane-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f3de","voted":false},"id":"plane-alt","links":{"self":"/api/icons/plane-alt"},"type":"icon"},{"attributes":{"id":"plane-arrival","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5af","voted":false},"id":"plane-arrival","links":{"self":"/api/icons/plane-arrival"},"type":"icon"},{"attributes":{"id":"plane-departure","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5b0","voted":false},"id":"plane-departure","links":{"self":"/api/icons/plane-departure"},"type":"icon"},{"attributes":{"id":"plane-slash","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f969","voted":false},"id":"plane-slash","links":{"self":"/api/icons/plane-slash"},"type":"icon"},{"attributes":{"id":"planet-moon","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f91f","voted":false},"id":"planet-moon","links":{"self":"/api/icons/planet-moon"},"type":"icon"},{"attributes":{"id":"planet-ringed","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f920","voted":false},"id":"planet-ringed","links":{"self":"/api/icons/planet-ringed"},"type":"icon"},{"attributes":{"id":"play","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f04b","voted":false},"id":"play","links":{"self":"/api/icons/play"},"type":"icon"},{"attributes":{"id":"play-circle","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f144","voted":false},"id":"play-circle","links":{"self":"/api/icons/play-circle"},"type":"icon"},{"attributes":{"id":"playstation","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3df","voted":false},"id":"playstation","links":{"self":"/api/icons/playstation"},"type":"icon"},{"attributes":{"id":"plug","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1e6","voted":false},"id":"plug","links":{"self":"/api/icons/plug"},"type":"icon"},{"attributes":{"id":"plus","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f067","voted":false},"id":"plus","links":{"self":"/api/icons/plus"},"type":"icon"},{"attributes":{"id":"plus-circle","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f055","voted":false},"id":"plus-circle","links":{"self":"/api/icons/plus-circle"},"type":"icon"},{"attributes":{"id":"plus-hexagon","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f300","voted":false},"id":"plus-hexagon","links":{"self":"/api/icons/plus-hexagon"},"type":"icon"},{"attributes":{"id":"plus-octagon","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f301","voted":false},"id":"plus-octagon","links":{"self":"/api/icons/plus-octagon"},"type":"icon"},{"attributes":{"id":"plus-square","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0fe","voted":false},"id":"plus-square","links":{"self":"/api/icons/plus-square"},"type":"icon"},{"attributes":{"id":"podcast","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2ce","voted":false},"id":"podcast","links":{"self":"/api/icons/podcast"},"type":"icon"},{"attributes":{"id":"podium","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f680","voted":false},"id":"podium","links":{"self":"/api/icons/podium"},"type":"icon"},{"attributes":{"id":"podium-star","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f758","voted":false},"id":"podium-star","links":{"self":"/api/icons/podium-star"},"type":"icon"},{"attributes":{"id":"police-box","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f921","voted":false},"id":"police-box","links":{"self":"/api/icons/police-box"},"type":"icon"},{"attributes":{"id":"poll","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f681","voted":false},"id":"poll","links":{"self":"/api/icons/poll"},"type":"icon"},{"attributes":{"id":"poll-h","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f682","voted":false},"id":"poll-h","links":{"self":"/api/icons/poll-h"},"type":"icon"},{"attributes":{"id":"poll-people","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f759","voted":false},"id":"poll-people","links":{"self":"/api/icons/poll-people"},"type":"icon"},{"attributes":{"id":"poo","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2fe","voted":false},"id":"poo","links":{"self":"/api/icons/poo"},"type":"icon"},{"attributes":{"id":"poo-storm","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f75a","voted":false},"id":"poo-storm","links":{"self":"/api/icons/poo-storm"},"type":"icon"},{"attributes":{"id":"poop","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f619","voted":false},"id":"poop","links":{"self":"/api/icons/poop"},"type":"icon"},{"attributes":{"id":"popcorn","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f819","voted":false},"id":"popcorn","links":{"self":"/api/icons/popcorn"},"type":"icon"},{"attributes":{"id":"portal-enter","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f922","voted":false},"id":"portal-enter","links":{"self":"/api/icons/portal-enter"},"type":"icon"},{"attributes":{"id":"portal-exit","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f923","voted":false},"id":"portal-exit","links":{"self":"/api/icons/portal-exit"},"type":"icon"},{"attributes":{"id":"portrait","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f3e0","voted":false},"id":"portrait","links":{"self":"/api/icons/portrait"},"type":"icon"},{"attributes":{"id":"pound-sign","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f154","voted":false},"id":"pound-sign","links":{"self":"/api/icons/pound-sign"},"type":"icon"},{"attributes":{"id":"power-off","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f011","voted":false},"id":"power-off","links":{"self":"/api/icons/power-off"},"type":"icon"},{"attributes":{"id":"pray","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f683","voted":false},"id":"pray","links":{"self":"/api/icons/pray"},"type":"icon"},{"attributes":{"id":"praying-hands","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f684","voted":false},"id":"praying-hands","links":{"self":"/api/icons/praying-hands"},"type":"icon"},{"attributes":{"id":"prescription","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5b1","voted":false},"id":"prescription","links":{"self":"/api/icons/prescription"},"type":"icon"},{"attributes":{"id":"prescription-bottle","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f485","voted":false},"id":"prescription-bottle","links":{"self":"/api/icons/prescription-bottle"},"type":"icon"},{"attributes":{"id":"prescription-bottle-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f486","voted":false},"id":"prescription-bottle-alt","links":{"self":"/api/icons/prescription-bottle-alt"},"type":"icon"},{"attributes":{"id":"presentation","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f685","voted":false},"id":"presentation","links":{"self":"/api/icons/presentation"},"type":"icon"},{"attributes":{"id":"print","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f02f","voted":false},"id":"print","links":{"self":"/api/icons/print"},"type":"icon"},{"attributes":{"id":"print-search","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f81a","voted":true},"id":"print-search","links":{"self":"/api/icons/print-search"},"type":"icon"},{"attributes":{"id":"print-slash","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f686","voted":false},"id":"print-slash","links":{"self":"/api/icons/print-slash"},"type":"icon"},{"attributes":{"id":"procedures","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f487","voted":false},"id":"procedures","links":{"self":"/api/icons/procedures"},"type":"icon"},{"attributes":{"id":"product-hunt","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f288","voted":false},"id":"product-hunt","links":{"self":"/api/icons/product-hunt"},"type":"icon"},{"attributes":{"id":"project-diagram","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f542","voted":false},"id":"project-diagram","links":{"self":"/api/icons/project-diagram"},"type":"icon"},{"attributes":{"id":"projector","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8d6","voted":false},"id":"projector","links":{"self":"/api/icons/projector"},"type":"icon"},{"attributes":{"id":"pump-medical","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f96a","voted":false},"id":"pump-medical","links":{"self":"/api/icons/pump-medical"},"type":"icon"},{"attributes":{"id":"pump-soap","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f96b","voted":false},"id":"pump-soap","links":{"self":"/api/icons/pump-soap"},"type":"icon"},{"attributes":{"id":"pumpkin","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f707","voted":false},"id":"pumpkin","links":{"self":"/api/icons/pumpkin"},"type":"icon"},{"attributes":{"id":"pushed","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3e1","voted":false},"id":"pushed","links":{"self":"/api/icons/pushed"},"type":"icon"},{"attributes":{"id":"puzzle-piece","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f12e","voted":false},"id":"puzzle-piece","links":{"self":"/api/icons/puzzle-piece"},"type":"icon"},{"attributes":{"id":"python","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3e2","voted":false},"id":"python","links":{"self":"/api/icons/python"},"type":"icon"},{"attributes":{"id":"qq","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1d6","voted":false},"id":"qq","links":{"self":"/api/icons/qq"},"type":"icon"},{"attributes":{"id":"qrcode","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f029","voted":false},"id":"qrcode","links":{"self":"/api/icons/qrcode"},"type":"icon"},{"attributes":{"id":"question","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f128","voted":false},"id":"question","links":{"self":"/api/icons/question"},"type":"icon"},{"attributes":{"id":"question-circle","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f059","voted":false},"id":"question-circle","links":{"self":"/api/icons/question-circle"},"type":"icon"},{"attributes":{"id":"question-square","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2fd","voted":false},"id":"question-square","links":{"self":"/api/icons/question-square"},"type":"icon"},{"attributes":{"id":"quidditch","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f458","voted":false},"id":"quidditch","links":{"self":"/api/icons/quidditch"},"type":"icon"},{"attributes":{"id":"quinscape","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f459","voted":false},"id":"quinscape","links":{"self":"/api/icons/quinscape"},"type":"icon"},{"attributes":{"id":"quora","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f2c4","voted":false},"id":"quora","links":{"self":"/api/icons/quora"},"type":"icon"},{"attributes":{"id":"quote-left","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f10d","voted":false},"id":"quote-left","links":{"self":"/api/icons/quote-left"},"type":"icon"},{"attributes":{"id":"quote-right","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f10e","voted":false},"id":"quote-right","links":{"self":"/api/icons/quote-right"},"type":"icon"},{"attributes":{"id":"quran","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f687","voted":false},"id":"quran","links":{"self":"/api/icons/quran"},"type":"icon"},{"attributes":{"id":"r-project","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f4f7","voted":true},"id":"r-project","links":{"self":"/api/icons/r-project"},"type":"icon"},{"attributes":{"id":"rabbit","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f708","voted":true},"id":"rabbit","links":{"self":"/api/icons/rabbit"},"type":"icon"},{"attributes":{"id":"rabbit-fast","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f709","voted":true},"id":"rabbit-fast","links":{"self":"/api/icons/rabbit-fast"},"type":"icon"},{"attributes":{"id":"racquet","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f45a","voted":false},"id":"racquet","links":{"self":"/api/icons/racquet"},"type":"icon"},{"attributes":{"id":"radar","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f924","voted":false},"id":"radar","links":{"self":"/api/icons/radar"},"type":"icon"},{"attributes":{"id":"radiation","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7b9","voted":true},"id":"radiation","links":{"self":"/api/icons/radiation"},"type":"icon"},{"attributes":{"id":"radiation-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7ba","voted":true},"id":"radiation-alt","links":{"self":"/api/icons/radiation-alt"},"type":"icon"},{"attributes":{"id":"radio","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8d7","voted":false},"id":"radio","links":{"self":"/api/icons/radio"},"type":"icon"},{"attributes":{"id":"radio-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8d8","voted":false},"id":"radio-alt","links":{"self":"/api/icons/radio-alt"},"type":"icon"},{"attributes":{"id":"rainbow","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f75b","voted":false},"id":"rainbow","links":{"self":"/api/icons/rainbow"},"type":"icon"},{"attributes":{"id":"raindrops","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f75c","voted":false},"id":"raindrops","links":{"self":"/api/icons/raindrops"},"type":"icon"},{"attributes":{"id":"ram","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f70a","voted":false},"id":"ram","links":{"self":"/api/icons/ram"},"type":"icon"},{"attributes":{"id":"ramp-loading","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4d4","voted":false},"id":"ramp-loading","links":{"self":"/api/icons/ramp-loading"},"type":"icon"},{"attributes":{"id":"random","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f074","voted":false},"id":"random","links":{"self":"/api/icons/random"},"type":"icon"},{"attributes":{"id":"raspberry-pi","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f7bb","voted":true},"id":"raspberry-pi","links":{"self":"/api/icons/raspberry-pi"},"type":"icon"},{"attributes":{"id":"ravelry","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f2d9","voted":false},"id":"ravelry","links":{"self":"/api/icons/ravelry"},"type":"icon"},{"attributes":{"id":"raygun","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f925","voted":false},"id":"raygun","links":{"self":"/api/icons/raygun"},"type":"icon"},{"attributes":{"id":"react","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f41b","voted":false},"id":"react","links":{"self":"/api/icons/react"},"type":"icon"},{"attributes":{"id":"reacteurope","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f75d","voted":false},"id":"reacteurope","links":{"self":"/api/icons/reacteurope"},"type":"icon"},{"attributes":{"id":"readme","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f4d5","voted":false},"id":"readme","links":{"self":"/api/icons/readme"},"type":"icon"},{"attributes":{"id":"rebel","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1d0","voted":false},"id":"rebel","links":{"self":"/api/icons/rebel"},"type":"icon"},{"attributes":{"id":"receipt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f543","voted":true},"id":"receipt","links":{"self":"/api/icons/receipt"},"type":"icon"},{"attributes":{"id":"record-vinyl","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8d9","voted":false},"id":"record-vinyl","links":{"self":"/api/icons/record-vinyl"},"type":"icon"},{"attributes":{"id":"rectangle-landscape","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2fa","voted":false},"id":"rectangle-landscape","links":{"self":"/api/icons/rectangle-landscape"},"type":"icon"},{"attributes":{"id":"rectangle-portrait","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2fb","voted":false},"id":"rectangle-portrait","links":{"self":"/api/icons/rectangle-portrait"},"type":"icon"},{"attributes":{"id":"rectangle-wide","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2fc","voted":false},"id":"rectangle-wide","links":{"self":"/api/icons/rectangle-wide"},"type":"icon"},{"attributes":{"id":"recycle","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1b8","voted":false},"id":"recycle","links":{"self":"/api/icons/recycle"},"type":"icon"},{"attributes":{"id":"red-river","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3e3","voted":false},"id":"red-river","links":{"self":"/api/icons/red-river"},"type":"icon"},{"attributes":{"id":"reddit","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1a1","voted":false},"id":"reddit","links":{"self":"/api/icons/reddit"},"type":"icon"},{"attributes":{"id":"reddit-alien","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f281","voted":false},"id":"reddit-alien","links":{"self":"/api/icons/reddit-alien"},"type":"icon"},{"attributes":{"id":"reddit-square","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1a2","voted":false},"id":"reddit-square","links":{"self":"/api/icons/reddit-square"},"type":"icon"},{"attributes":{"id":"redhat","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f7bc","voted":true},"id":"redhat","links":{"self":"/api/icons/redhat"},"type":"icon"},{"attributes":{"id":"redo","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f01e","voted":false},"id":"redo","links":{"self":"/api/icons/redo"},"type":"icon"},{"attributes":{"id":"redo-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2f9","voted":false},"id":"redo-alt","links":{"self":"/api/icons/redo-alt"},"type":"icon"},{"attributes":{"id":"refrigerator","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f926","voted":false},"id":"refrigerator","links":{"self":"/api/icons/refrigerator"},"type":"icon"},{"attributes":{"id":"registered","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f25d","voted":false},"id":"registered","links":{"self":"/api/icons/registered"},"type":"icon"},{"attributes":{"id":"remove-format","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f87d","voted":false},"id":"remove-format","links":{"self":"/api/icons/remove-format"},"type":"icon"},{"attributes":{"id":"renren","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f18b","voted":false},"id":"renren","links":{"self":"/api/icons/renren"},"type":"icon"},{"attributes":{"id":"repeat","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f363","voted":false},"id":"repeat","links":{"self":"/api/icons/repeat"},"type":"icon"},{"attributes":{"id":"repeat-1","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f365","voted":false},"id":"repeat-1","links":{"self":"/api/icons/repeat-1"},"type":"icon"},{"attributes":{"id":"repeat-1-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f366","voted":false},"id":"repeat-1-alt","links":{"self":"/api/icons/repeat-1-alt"},"type":"icon"},{"attributes":{"id":"repeat-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f364","voted":false},"id":"repeat-alt","links":{"self":"/api/icons/repeat-alt"},"type":"icon"},{"attributes":{"id":"reply","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f3e5","voted":false},"id":"reply","links":{"self":"/api/icons/reply"},"type":"icon"},{"attributes":{"id":"reply-all","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f122","voted":false},"id":"reply-all","links":{"self":"/api/icons/reply-all"},"type":"icon"},{"attributes":{"id":"replyd","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3e6","voted":false},"id":"replyd","links":{"self":"/api/icons/replyd"},"type":"icon"},{"attributes":{"id":"republican","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f75e","voted":false},"id":"republican","links":{"self":"/api/icons/republican"},"type":"icon"},{"attributes":{"id":"researchgate","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f4f8","voted":true},"id":"researchgate","links":{"self":"/api/icons/researchgate"},"type":"icon"},{"attributes":{"id":"resolving","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3e7","voted":false},"id":"resolving","links":{"self":"/api/icons/resolving"},"type":"icon"},{"attributes":{"id":"restroom","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7bd","voted":true},"id":"restroom","links":{"self":"/api/icons/restroom"},"type":"icon"},{"attributes":{"id":"retweet","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f079","voted":false},"id":"retweet","links":{"self":"/api/icons/retweet"},"type":"icon"},{"attributes":{"id":"retweet-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f361","voted":false},"id":"retweet-alt","links":{"self":"/api/icons/retweet-alt"},"type":"icon"},{"attributes":{"id":"rev","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f5b2","voted":false},"id":"rev","links":{"self":"/api/icons/rev"},"type":"icon"},{"attributes":{"id":"ribbon","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4d6","voted":false},"id":"ribbon","links":{"self":"/api/icons/ribbon"},"type":"icon"},{"attributes":{"id":"ring","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f70b","voted":false},"id":"ring","links":{"self":"/api/icons/ring"},"type":"icon"},{"attributes":{"id":"rings-wedding","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f81b","voted":true},"id":"rings-wedding","links":{"self":"/api/icons/rings-wedding"},"type":"icon"},{"attributes":{"id":"road","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f018","voted":false},"id":"road","links":{"self":"/api/icons/road"},"type":"icon"},{"attributes":{"id":"robot","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f544","voted":true},"id":"robot","links":{"self":"/api/icons/robot"},"type":"icon"},{"attributes":{"id":"rocket","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f135","voted":false},"id":"rocket","links":{"self":"/api/icons/rocket"},"type":"icon"},{"attributes":{"id":"rocket-launch","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f927","voted":false},"id":"rocket-launch","links":{"self":"/api/icons/rocket-launch"},"type":"icon"},{"attributes":{"id":"rocketchat","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3e8","voted":false},"id":"rocketchat","links":{"self":"/api/icons/rocketchat"},"type":"icon"},{"attributes":{"id":"rockrms","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3e9","voted":false},"id":"rockrms","links":{"self":"/api/icons/rockrms"},"type":"icon"},{"attributes":{"id":"route","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4d7","voted":false},"id":"route","links":{"self":"/api/icons/route"},"type":"icon"},{"attributes":{"id":"route-highway","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f61a","voted":false},"id":"route-highway","links":{"self":"/api/icons/route-highway"},"type":"icon"},{"attributes":{"id":"route-interstate","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f61b","voted":false},"id":"route-interstate","links":{"self":"/api/icons/route-interstate"},"type":"icon"},{"attributes":{"id":"router","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8da","voted":false},"id":"router","links":{"self":"/api/icons/router"},"type":"icon"},{"attributes":{"id":"rss","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f09e","voted":false},"id":"rss","links":{"self":"/api/icons/rss"},"type":"icon"},{"attributes":{"id":"rss-square","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f143","voted":false},"id":"rss-square","links":{"self":"/api/icons/rss-square"},"type":"icon"},{"attributes":{"id":"ruble-sign","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f158","voted":false},"id":"ruble-sign","links":{"self":"/api/icons/ruble-sign"},"type":"icon"},{"attributes":{"id":"ruler","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f545","voted":true},"id":"ruler","links":{"self":"/api/icons/ruler"},"type":"icon"},{"attributes":{"id":"ruler-combined","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f546","voted":true},"id":"ruler-combined","links":{"self":"/api/icons/ruler-combined"},"type":"icon"},{"attributes":{"id":"ruler-horizontal","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f547","voted":true},"id":"ruler-horizontal","links":{"self":"/api/icons/ruler-horizontal"},"type":"icon"},{"attributes":{"id":"ruler-triangle","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f61c","voted":false},"id":"ruler-triangle","links":{"self":"/api/icons/ruler-triangle"},"type":"icon"},{"attributes":{"id":"ruler-vertical","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f548","voted":true},"id":"ruler-vertical","links":{"self":"/api/icons/ruler-vertical"},"type":"icon"},{"attributes":{"id":"running","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f70c","voted":true},"id":"running","links":{"self":"/api/icons/running"},"type":"icon"},{"attributes":{"id":"rupee-sign","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f156","voted":false},"id":"rupee-sign","links":{"self":"/api/icons/rupee-sign"},"type":"icon"},{"attributes":{"id":"rv","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7be","voted":false},"id":"rv","links":{"self":"/api/icons/rv"},"type":"icon"},{"attributes":{"id":"sack","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f81c","voted":false},"id":"sack","links":{"self":"/api/icons/sack"},"type":"icon"},{"attributes":{"id":"sack-dollar","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f81d","voted":true},"id":"sack-dollar","links":{"self":"/api/icons/sack-dollar"},"type":"icon"},{"attributes":{"id":"sad-cry","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5b3","voted":false},"id":"sad-cry","links":{"self":"/api/icons/sad-cry"},"type":"icon"},{"attributes":{"id":"sad-tear","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5b4","voted":false},"id":"sad-tear","links":{"self":"/api/icons/sad-tear"},"type":"icon"},{"attributes":{"id":"safari","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f267","voted":false},"id":"safari","links":{"self":"/api/icons/safari"},"type":"icon"},{"attributes":{"id":"salad","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f81e","voted":false},"id":"salad","links":{"self":"/api/icons/salad"},"type":"icon"},{"attributes":{"id":"salesforce","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f83b","voted":false},"id":"salesforce","links":{"self":"/api/icons/salesforce"},"type":"icon"},{"attributes":{"id":"sandwich","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f81f","voted":false},"id":"sandwich","links":{"self":"/api/icons/sandwich"},"type":"icon"},{"attributes":{"id":"sass","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f41e","voted":false},"id":"sass","links":{"self":"/api/icons/sass"},"type":"icon"},{"attributes":{"id":"satellite","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7bf","voted":true},"id":"satellite","links":{"self":"/api/icons/satellite"},"type":"icon"},{"attributes":{"id":"satellite-dish","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7c0","voted":true},"id":"satellite-dish","links":{"self":"/api/icons/satellite-dish"},"type":"icon"},{"attributes":{"id":"sausage","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f820","voted":false},"id":"sausage","links":{"self":"/api/icons/sausage"},"type":"icon"},{"attributes":{"id":"save","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0c7","voted":false},"id":"save","links":{"self":"/api/icons/save"},"type":"icon"},{"attributes":{"id":"sax-hot","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8db","voted":false},"id":"sax-hot","links":{"self":"/api/icons/sax-hot"},"type":"icon"},{"attributes":{"id":"saxophone","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8dc","voted":false},"id":"saxophone","links":{"self":"/api/icons/saxophone"},"type":"icon"},{"attributes":{"id":"scalpel","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f61d","voted":false},"id":"scalpel","links":{"self":"/api/icons/scalpel"},"type":"icon"},{"attributes":{"id":"scalpel-path","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f61e","voted":false},"id":"scalpel-path","links":{"self":"/api/icons/scalpel-path"},"type":"icon"},{"attributes":{"id":"scanner","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f488","voted":false},"id":"scanner","links":{"self":"/api/icons/scanner"},"type":"icon"},{"attributes":{"id":"scanner-image","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8f3","voted":false},"id":"scanner-image","links":{"self":"/api/icons/scanner-image"},"type":"icon"},{"attributes":{"id":"scanner-keyboard","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f489","voted":false},"id":"scanner-keyboard","links":{"self":"/api/icons/scanner-keyboard"},"type":"icon"},{"attributes":{"id":"scanner-touchscreen","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f48a","voted":false},"id":"scanner-touchscreen","links":{"self":"/api/icons/scanner-touchscreen"},"type":"icon"},{"attributes":{"id":"scarecrow","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f70d","voted":false},"id":"scarecrow","links":{"self":"/api/icons/scarecrow"},"type":"icon"},{"attributes":{"id":"scarf","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7c1","voted":false},"id":"scarf","links":{"self":"/api/icons/scarf"},"type":"icon"},{"attributes":{"id":"schlix","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3ea","voted":false},"id":"schlix","links":{"self":"/api/icons/schlix"},"type":"icon"},{"attributes":{"id":"school","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f549","voted":true},"id":"school","links":{"self":"/api/icons/school"},"type":"icon"},{"attributes":{"id":"screwdriver","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f54a","voted":true},"id":"screwdriver","links":{"self":"/api/icons/screwdriver"},"type":"icon"},{"attributes":{"id":"scribd","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f28a","voted":false},"id":"scribd","links":{"self":"/api/icons/scribd"},"type":"icon"},{"attributes":{"id":"scroll","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f70e","voted":false},"id":"scroll","links":{"self":"/api/icons/scroll"},"type":"icon"},{"attributes":{"id":"scroll-old","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f70f","voted":false},"id":"scroll-old","links":{"self":"/api/icons/scroll-old"},"type":"icon"},{"attributes":{"id":"scrubber","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2f8","voted":false},"id":"scrubber","links":{"self":"/api/icons/scrubber"},"type":"icon"},{"attributes":{"id":"scythe","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f710","voted":false},"id":"scythe","links":{"self":"/api/icons/scythe"},"type":"icon"},{"attributes":{"id":"sd-card","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7c2","voted":true},"id":"sd-card","links":{"self":"/api/icons/sd-card"},"type":"icon"},{"attributes":{"id":"search","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f002","voted":false},"id":"search","links":{"self":"/api/icons/search"},"type":"icon"},{"attributes":{"id":"search-dollar","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f688","voted":false},"id":"search-dollar","links":{"self":"/api/icons/search-dollar"},"type":"icon"},{"attributes":{"id":"search-location","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f689","voted":false},"id":"search-location","links":{"self":"/api/icons/search-location"},"type":"icon"},{"attributes":{"id":"search-minus","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f010","voted":false},"id":"search-minus","links":{"self":"/api/icons/search-minus"},"type":"icon"},{"attributes":{"id":"search-plus","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f00e","voted":false},"id":"search-plus","links":{"self":"/api/icons/search-plus"},"type":"icon"},{"attributes":{"id":"searchengin","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3eb","voted":false},"id":"searchengin","links":{"self":"/api/icons/searchengin"},"type":"icon"},{"attributes":{"id":"seedling","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4d8","voted":false},"id":"seedling","links":{"self":"/api/icons/seedling"},"type":"icon"},{"attributes":{"id":"sellcast","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f2da","voted":false},"id":"sellcast","links":{"self":"/api/icons/sellcast"},"type":"icon"},{"attributes":{"id":"sellsy","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f213","voted":false},"id":"sellsy","links":{"self":"/api/icons/sellsy"},"type":"icon"},{"attributes":{"id":"send-back","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f87e","voted":true},"id":"send-back","links":{"self":"/api/icons/send-back"},"type":"icon"},{"attributes":{"id":"send-backward","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f87f","voted":true},"id":"send-backward","links":{"self":"/api/icons/send-backward"},"type":"icon"},{"attributes":{"id":"sensor","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f928","voted":false},"id":"sensor","links":{"self":"/api/icons/sensor"},"type":"icon"},{"attributes":{"id":"sensor-alert","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f929","voted":false},"id":"sensor-alert","links":{"self":"/api/icons/sensor-alert"},"type":"icon"},{"attributes":{"id":"sensor-fire","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f92a","voted":false},"id":"sensor-fire","links":{"self":"/api/icons/sensor-fire"},"type":"icon"},{"attributes":{"id":"sensor-on","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f92b","voted":false},"id":"sensor-on","links":{"self":"/api/icons/sensor-on"},"type":"icon"},{"attributes":{"id":"sensor-smoke","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f92c","voted":false},"id":"sensor-smoke","links":{"self":"/api/icons/sensor-smoke"},"type":"icon"},{"attributes":{"id":"server","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f233","voted":false},"id":"server","links":{"self":"/api/icons/server"},"type":"icon"},{"attributes":{"id":"servicestack","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3ec","voted":false},"id":"servicestack","links":{"self":"/api/icons/servicestack"},"type":"icon"},{"attributes":{"id":"shapes","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f61f","voted":false},"id":"shapes","links":{"self":"/api/icons/shapes"},"type":"icon"},{"attributes":{"id":"share","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f064","voted":false},"id":"share","links":{"self":"/api/icons/share"},"type":"icon"},{"attributes":{"id":"share-all","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f367","voted":false},"id":"share-all","links":{"self":"/api/icons/share-all"},"type":"icon"},{"attributes":{"id":"share-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1e0","voted":false},"id":"share-alt","links":{"self":"/api/icons/share-alt"},"type":"icon"},{"attributes":{"id":"share-alt-square","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1e1","voted":false},"id":"share-alt-square","links":{"self":"/api/icons/share-alt-square"},"type":"icon"},{"attributes":{"id":"share-square","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f14d","voted":false},"id":"share-square","links":{"self":"/api/icons/share-square"},"type":"icon"},{"attributes":{"id":"sheep","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f711","voted":false},"id":"sheep","links":{"self":"/api/icons/sheep"},"type":"icon"},{"attributes":{"id":"shekel-sign","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f20b","voted":true},"id":"shekel-sign","links":{"self":"/api/icons/shekel-sign"},"type":"icon"},{"attributes":{"id":"shield","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f132","voted":false},"id":"shield","links":{"self":"/api/icons/shield"},"type":"icon"},{"attributes":{"id":"shield-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f3ed","voted":false},"id":"shield-alt","links":{"self":"/api/icons/shield-alt"},"type":"icon"},{"attributes":{"id":"shield-check","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2f7","voted":false},"id":"shield-check","links":{"self":"/api/icons/shield-check"},"type":"icon"},{"attributes":{"id":"shield-cross","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f712","voted":false},"id":"shield-cross","links":{"self":"/api/icons/shield-cross"},"type":"icon"},{"attributes":{"id":"shield-virus","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f96c","voted":false},"id":"shield-virus","links":{"self":"/api/icons/shield-virus"},"type":"icon"},{"attributes":{"id":"ship","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f21a","voted":false},"id":"ship","links":{"self":"/api/icons/ship"},"type":"icon"},{"attributes":{"id":"shipping-fast","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f48b","voted":false},"id":"shipping-fast","links":{"self":"/api/icons/shipping-fast"},"type":"icon"},{"attributes":{"id":"shipping-timed","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f48c","voted":false},"id":"shipping-timed","links":{"self":"/api/icons/shipping-timed"},"type":"icon"},{"attributes":{"id":"shirtsinbulk","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f214","voted":false},"id":"shirtsinbulk","links":{"self":"/api/icons/shirtsinbulk"},"type":"icon"},{"attributes":{"id":"shish-kebab","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f821","voted":false},"id":"shish-kebab","links":{"self":"/api/icons/shish-kebab"},"type":"icon"},{"attributes":{"id":"shoe-prints","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f54b","voted":true},"id":"shoe-prints","links":{"self":"/api/icons/shoe-prints"},"type":"icon"},{"attributes":{"id":"shopify","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f957","voted":false},"id":"shopify","links":{"self":"/api/icons/shopify"},"type":"icon"},{"attributes":{"id":"shopping-bag","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f290","voted":false},"id":"shopping-bag","links":{"self":"/api/icons/shopping-bag"},"type":"icon"},{"attributes":{"id":"shopping-basket","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f291","voted":false},"id":"shopping-basket","links":{"self":"/api/icons/shopping-basket"},"type":"icon"},{"attributes":{"id":"shopping-cart","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f07a","voted":false},"id":"shopping-cart","links":{"self":"/api/icons/shopping-cart"},"type":"icon"},{"attributes":{"id":"shopware","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f5b5","voted":false},"id":"shopware","links":{"self":"/api/icons/shopware"},"type":"icon"},{"attributes":{"id":"shovel","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f713","voted":false},"id":"shovel","links":{"self":"/api/icons/shovel"},"type":"icon"},{"attributes":{"id":"shovel-snow","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7c3","voted":false},"id":"shovel-snow","links":{"self":"/api/icons/shovel-snow"},"type":"icon"},{"attributes":{"id":"shower","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2cc","voted":false},"id":"shower","links":{"self":"/api/icons/shower"},"type":"icon"},{"attributes":{"id":"shredder","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f68a","voted":false},"id":"shredder","links":{"self":"/api/icons/shredder"},"type":"icon"},{"attributes":{"id":"shuttle-van","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5b6","voted":false},"id":"shuttle-van","links":{"self":"/api/icons/shuttle-van"},"type":"icon"},{"attributes":{"id":"shuttlecock","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f45b","voted":false},"id":"shuttlecock","links":{"self":"/api/icons/shuttlecock"},"type":"icon"},{"attributes":{"id":"sickle","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f822","voted":false},"id":"sickle","links":{"self":"/api/icons/sickle"},"type":"icon"},{"attributes":{"id":"sigma","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f68b","voted":false},"id":"sigma","links":{"self":"/api/icons/sigma"},"type":"icon"},{"attributes":{"id":"sign","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4d9","voted":false},"id":"sign","links":{"self":"/api/icons/sign"},"type":"icon"},{"attributes":{"id":"sign-in","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f090","voted":false},"id":"sign-in","links":{"self":"/api/icons/sign-in"},"type":"icon"},{"attributes":{"id":"sign-in-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2f6","voted":false},"id":"sign-in-alt","links":{"self":"/api/icons/sign-in-alt"},"type":"icon"},{"attributes":{"id":"sign-language","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2a7","voted":false},"id":"sign-language","links":{"self":"/api/icons/sign-language"},"type":"icon"},{"attributes":{"id":"sign-out","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f08b","voted":false},"id":"sign-out","links":{"self":"/api/icons/sign-out"},"type":"icon"},{"attributes":{"id":"sign-out-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2f5","voted":false},"id":"sign-out-alt","links":{"self":"/api/icons/sign-out-alt"},"type":"icon"},{"attributes":{"id":"signal","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f012","voted":false},"id":"signal","links":{"self":"/api/icons/signal"},"type":"icon"},{"attributes":{"id":"signal-1","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f68c","voted":true},"id":"signal-1","links":{"self":"/api/icons/signal-1"},"type":"icon"},{"attributes":{"id":"signal-2","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f68d","voted":true},"id":"signal-2","links":{"self":"/api/icons/signal-2"},"type":"icon"},{"attributes":{"id":"signal-3","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f68e","voted":true},"id":"signal-3","links":{"self":"/api/icons/signal-3"},"type":"icon"},{"attributes":{"id":"signal-4","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f68f","voted":true},"id":"signal-4","links":{"self":"/api/icons/signal-4"},"type":"icon"},{"attributes":{"id":"signal-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f690","voted":true},"id":"signal-alt","links":{"self":"/api/icons/signal-alt"},"type":"icon"},{"attributes":{"id":"signal-alt-1","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f691","voted":true},"id":"signal-alt-1","links":{"self":"/api/icons/signal-alt-1"},"type":"icon"},{"attributes":{"id":"signal-alt-2","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f692","voted":true},"id":"signal-alt-2","links":{"self":"/api/icons/signal-alt-2"},"type":"icon"},{"attributes":{"id":"signal-alt-3","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f693","voted":true},"id":"signal-alt-3","links":{"self":"/api/icons/signal-alt-3"},"type":"icon"},{"attributes":{"id":"signal-alt-slash","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f694","voted":true},"id":"signal-alt-slash","links":{"self":"/api/icons/signal-alt-slash"},"type":"icon"},{"attributes":{"id":"signal-slash","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f695","voted":true},"id":"signal-slash","links":{"self":"/api/icons/signal-slash"},"type":"icon"},{"attributes":{"id":"signal-stream","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8dd","voted":false},"id":"signal-stream","links":{"self":"/api/icons/signal-stream"},"type":"icon"},{"attributes":{"id":"signature","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5b7","voted":true},"id":"signature","links":{"self":"/api/icons/signature"},"type":"icon"},{"attributes":{"id":"sim-card","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7c4","voted":true},"id":"sim-card","links":{"self":"/api/icons/sim-card"},"type":"icon"},{"attributes":{"id":"simplybuilt","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f215","voted":false},"id":"simplybuilt","links":{"self":"/api/icons/simplybuilt"},"type":"icon"},{"attributes":{"id":"sink","membership":{"free":[],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f96d","voted":false},"id":"sink","links":{"self":"/api/icons/sink"},"type":"icon"},{"attributes":{"id":"siren","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f92d","voted":false},"id":"siren","links":{"self":"/api/icons/siren"},"type":"icon"},{"attributes":{"id":"siren-on","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f92e","voted":false},"id":"siren-on","links":{"self":"/api/icons/siren-on"},"type":"icon"},{"attributes":{"id":"sistrix","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3ee","voted":false},"id":"sistrix","links":{"self":"/api/icons/sistrix"},"type":"icon"},{"attributes":{"id":"sitemap","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0e8","voted":false},"id":"sitemap","links":{"self":"/api/icons/sitemap"},"type":"icon"},{"attributes":{"id":"sith","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f512","voted":false},"id":"sith","links":{"self":"/api/icons/sith"},"type":"icon"},{"attributes":{"id":"skating","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7c5","voted":false},"id":"skating","links":{"self":"/api/icons/skating"},"type":"icon"},{"attributes":{"id":"skeleton","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f620","voted":false},"id":"skeleton","links":{"self":"/api/icons/skeleton"},"type":"icon"},{"attributes":{"id":"sketch","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f7c6","voted":false},"id":"sketch","links":{"self":"/api/icons/sketch"},"type":"icon"},{"attributes":{"id":"ski-jump","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7c7","voted":false},"id":"ski-jump","links":{"self":"/api/icons/ski-jump"},"type":"icon"},{"attributes":{"id":"ski-lift","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7c8","voted":false},"id":"ski-lift","links":{"self":"/api/icons/ski-lift"},"type":"icon"},{"attributes":{"id":"skiing","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7c9","voted":false},"id":"skiing","links":{"self":"/api/icons/skiing"},"type":"icon"},{"attributes":{"id":"skiing-nordic","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7ca","voted":false},"id":"skiing-nordic","links":{"self":"/api/icons/skiing-nordic"},"type":"icon"},{"attributes":{"id":"skull","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f54c","voted":true},"id":"skull","links":{"self":"/api/icons/skull"},"type":"icon"},{"attributes":{"id":"skull-cow","membership":{"free":[],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f8de","voted":false},"id":"skull-cow","links":{"self":"/api/icons/skull-cow"},"type":"icon"},{"attributes":{"id":"skull-crossbones","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f714","voted":false},"id":"skull-crossbones","links":{"self":"/api/icons/skull-crossbones"},"type":"icon"},{"attributes":{"id":"skyatlas","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f216","voted":false},"id":"skyatlas","links":{"self":"/api/icons/skyatlas"},"type":"icon"},{"attributes":{"id":"skype","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f17e","voted":false},"id":"skype","links":{"self":"/api/icons/skype"},"type":"icon"},{"attributes":{"id":"slack","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f198","voted":false},"id":"slack","links":{"self":"/api/icons/slack"},"type":"icon"},{"attributes":{"id":"slack-hash","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3ef","voted":false},"id":"slack-hash","links":{"self":"/api/icons/slack-hash"},"type":"icon"},{"attributes":{"id":"slash","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f715","voted":true},"id":"slash","links":{"self":"/api/icons/slash"},"type":"icon"},{"attributes":{"id":"sledding","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7cb","voted":false},"id":"sledding","links":{"self":"/api/icons/sledding"},"type":"icon"},{"attributes":{"id":"sleigh","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7cc","voted":false},"id":"sleigh","links":{"self":"/api/icons/sleigh"},"type":"icon"},{"attributes":{"id":"sliders-h","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1de","voted":false},"id":"sliders-h","links":{"self":"/api/icons/sliders-h"},"type":"icon"},{"attributes":{"id":"sliders-h-square","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f3f0","voted":false},"id":"sliders-h-square","links":{"self":"/api/icons/sliders-h-square"},"type":"icon"},{"attributes":{"id":"sliders-v","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f3f1","voted":false},"id":"sliders-v","links":{"self":"/api/icons/sliders-v"},"type":"icon"},{"attributes":{"id":"sliders-v-square","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f3f2","voted":false},"id":"sliders-v-square","links":{"self":"/api/icons/sliders-v-square"},"type":"icon"},{"attributes":{"id":"slideshare","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1e7","voted":false},"id":"slideshare","links":{"self":"/api/icons/slideshare"},"type":"icon"},{"attributes":{"id":"smile","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f118","voted":false},"id":"smile","links":{"self":"/api/icons/smile"},"type":"icon"},{"attributes":{"id":"smile-beam","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5b8","voted":false},"id":"smile-beam","links":{"self":"/api/icons/smile-beam"},"type":"icon"},{"attributes":{"id":"smile-plus","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5b9","voted":false},"id":"smile-plus","links":{"self":"/api/icons/smile-plus"},"type":"icon"},{"attributes":{"id":"smile-wink","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4da","voted":false},"id":"smile-wink","links":{"self":"/api/icons/smile-wink"},"type":"icon"},{"attributes":{"id":"smog","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f75f","voted":false},"id":"smog","links":{"self":"/api/icons/smog"},"type":"icon"},{"attributes":{"id":"smoke","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f760","voted":false},"id":"smoke","links":{"self":"/api/icons/smoke"},"type":"icon"},{"attributes":{"id":"smoking","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f48d","voted":true},"id":"smoking","links":{"self":"/api/icons/smoking"},"type":"icon"},{"attributes":{"id":"smoking-ban","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f54d","voted":true},"id":"smoking-ban","links":{"self":"/api/icons/smoking-ban"},"type":"icon"},{"attributes":{"id":"sms","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7cd","voted":true},"id":"sms","links":{"self":"/api/icons/sms"},"type":"icon"},{"attributes":{"id":"snake","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f716","voted":false},"id":"snake","links":{"self":"/api/icons/snake"},"type":"icon"},{"attributes":{"id":"snapchat","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f2ab","voted":false},"id":"snapchat","links":{"self":"/api/icons/snapchat"},"type":"icon"},{"attributes":{"id":"snapchat-ghost","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f2ac","voted":false},"id":"snapchat-ghost","links":{"self":"/api/icons/snapchat-ghost"},"type":"icon"},{"attributes":{"id":"snapchat-square","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f2ad","voted":false},"id":"snapchat-square","links":{"self":"/api/icons/snapchat-square"},"type":"icon"},{"attributes":{"id":"snooze","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f880","voted":true},"id":"snooze","links":{"self":"/api/icons/snooze"},"type":"icon"},{"attributes":{"id":"snow-blowing","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f761","voted":false},"id":"snow-blowing","links":{"self":"/api/icons/snow-blowing"},"type":"icon"},{"attributes":{"id":"snowboarding","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7ce","voted":false},"id":"snowboarding","links":{"self":"/api/icons/snowboarding"},"type":"icon"},{"attributes":{"id":"snowflake","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2dc","voted":false},"id":"snowflake","links":{"self":"/api/icons/snowflake"},"type":"icon"},{"attributes":{"id":"snowflakes","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7cf","voted":false},"id":"snowflakes","links":{"self":"/api/icons/snowflakes"},"type":"icon"},{"attributes":{"id":"snowman","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7d0","voted":false},"id":"snowman","links":{"self":"/api/icons/snowman"},"type":"icon"},{"attributes":{"id":"snowmobile","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7d1","voted":false},"id":"snowmobile","links":{"self":"/api/icons/snowmobile"},"type":"icon"},{"attributes":{"id":"snowplow","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7d2","voted":false},"id":"snowplow","links":{"self":"/api/icons/snowplow"},"type":"icon"},{"attributes":{"id":"soap","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f96e","voted":false},"id":"soap","links":{"self":"/api/icons/soap"},"type":"icon"},{"attributes":{"id":"socks","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f696","voted":false},"id":"socks","links":{"self":"/api/icons/socks"},"type":"icon"},{"attributes":{"id":"solar-panel","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5ba","voted":false},"id":"solar-panel","links":{"self":"/api/icons/solar-panel"},"type":"icon"},{"attributes":{"id":"solar-system","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f92f","voted":false},"id":"solar-system","links":{"self":"/api/icons/solar-system"},"type":"icon"},{"attributes":{"id":"sort","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0dc","voted":false},"id":"sort","links":{"self":"/api/icons/sort"},"type":"icon"},{"attributes":{"id":"sort-alpha-down","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f15d","voted":false},"id":"sort-alpha-down","links":{"self":"/api/icons/sort-alpha-down"},"type":"icon"},{"attributes":{"id":"sort-alpha-down-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f881","voted":false},"id":"sort-alpha-down-alt","links":{"self":"/api/icons/sort-alpha-down-alt"},"type":"icon"},{"attributes":{"id":"sort-alpha-up","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f15e","voted":false},"id":"sort-alpha-up","links":{"self":"/api/icons/sort-alpha-up"},"type":"icon"},{"attributes":{"id":"sort-alpha-up-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f882","voted":false},"id":"sort-alpha-up-alt","links":{"self":"/api/icons/sort-alpha-up-alt"},"type":"icon"},{"attributes":{"id":"sort-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f883","voted":false},"id":"sort-alt","links":{"self":"/api/icons/sort-alt"},"type":"icon"},{"attributes":{"id":"sort-amount-down","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f160","voted":false},"id":"sort-amount-down","links":{"self":"/api/icons/sort-amount-down"},"type":"icon"},{"attributes":{"id":"sort-amount-down-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f884","voted":false},"id":"sort-amount-down-alt","links":{"self":"/api/icons/sort-amount-down-alt"},"type":"icon"},{"attributes":{"id":"sort-amount-up","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f161","voted":false},"id":"sort-amount-up","links":{"self":"/api/icons/sort-amount-up"},"type":"icon"},{"attributes":{"id":"sort-amount-up-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f885","voted":false},"id":"sort-amount-up-alt","links":{"self":"/api/icons/sort-amount-up-alt"},"type":"icon"},{"attributes":{"id":"sort-circle","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f930","voted":false},"id":"sort-circle","links":{"self":"/api/icons/sort-circle"},"type":"icon"},{"attributes":{"id":"sort-circle-down","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f931","voted":false},"id":"sort-circle-down","links":{"self":"/api/icons/sort-circle-down"},"type":"icon"},{"attributes":{"id":"sort-circle-up","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f932","voted":false},"id":"sort-circle-up","links":{"self":"/api/icons/sort-circle-up"},"type":"icon"},{"attributes":{"id":"sort-down","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0dd","voted":false},"id":"sort-down","links":{"self":"/api/icons/sort-down"},"type":"icon"},{"attributes":{"id":"sort-numeric-down","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f162","voted":false},"id":"sort-numeric-down","links":{"self":"/api/icons/sort-numeric-down"},"type":"icon"},{"attributes":{"id":"sort-numeric-down-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f886","voted":false},"id":"sort-numeric-down-alt","links":{"self":"/api/icons/sort-numeric-down-alt"},"type":"icon"},{"attributes":{"id":"sort-numeric-up","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f163","voted":false},"id":"sort-numeric-up","links":{"self":"/api/icons/sort-numeric-up"},"type":"icon"},{"attributes":{"id":"sort-numeric-up-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f887","voted":false},"id":"sort-numeric-up-alt","links":{"self":"/api/icons/sort-numeric-up-alt"},"type":"icon"},{"attributes":{"id":"sort-shapes-down","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f888","voted":false},"id":"sort-shapes-down","links":{"self":"/api/icons/sort-shapes-down"},"type":"icon"},{"attributes":{"id":"sort-shapes-down-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f889","voted":false},"id":"sort-shapes-down-alt","links":{"self":"/api/icons/sort-shapes-down-alt"},"type":"icon"},{"attributes":{"id":"sort-shapes-up","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f88a","voted":false},"id":"sort-shapes-up","links":{"self":"/api/icons/sort-shapes-up"},"type":"icon"},{"attributes":{"id":"sort-shapes-up-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f88b","voted":false},"id":"sort-shapes-up-alt","links":{"self":"/api/icons/sort-shapes-up-alt"},"type":"icon"},{"attributes":{"id":"sort-size-down","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f88c","voted":false},"id":"sort-size-down","links":{"self":"/api/icons/sort-size-down"},"type":"icon"},{"attributes":{"id":"sort-size-down-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f88d","voted":false},"id":"sort-size-down-alt","links":{"self":"/api/icons/sort-size-down-alt"},"type":"icon"},{"attributes":{"id":"sort-size-up","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f88e","voted":false},"id":"sort-size-up","links":{"self":"/api/icons/sort-size-up"},"type":"icon"},{"attributes":{"id":"sort-size-up-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f88f","voted":false},"id":"sort-size-up-alt","links":{"self":"/api/icons/sort-size-up-alt"},"type":"icon"},{"attributes":{"id":"sort-up","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0de","voted":false},"id":"sort-up","links":{"self":"/api/icons/sort-up"},"type":"icon"},{"attributes":{"id":"soundcloud","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1be","voted":false},"id":"soundcloud","links":{"self":"/api/icons/soundcloud"},"type":"icon"},{"attributes":{"id":"soup","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f823","voted":false},"id":"soup","links":{"self":"/api/icons/soup"},"type":"icon"},{"attributes":{"id":"sourcetree","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f7d3","voted":true},"id":"sourcetree","links":{"self":"/api/icons/sourcetree"},"type":"icon"},{"attributes":{"id":"spa","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5bb","voted":false},"id":"spa","links":{"self":"/api/icons/spa"},"type":"icon"},{"attributes":{"id":"space-shuttle","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f197","voted":false},"id":"space-shuttle","links":{"self":"/api/icons/space-shuttle"},"type":"icon"},{"attributes":{"id":"space-station-moon","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f933","voted":false},"id":"space-station-moon","links":{"self":"/api/icons/space-station-moon"},"type":"icon"},{"attributes":{"id":"space-station-moon-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f934","voted":false},"id":"space-station-moon-alt","links":{"self":"/api/icons/space-station-moon-alt"},"type":"icon"},{"attributes":{"id":"spade","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2f4","voted":false},"id":"spade","links":{"self":"/api/icons/spade"},"type":"icon"},{"attributes":{"id":"sparkles","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f890","voted":false},"id":"sparkles","links":{"self":"/api/icons/sparkles"},"type":"icon"},{"attributes":{"id":"speakap","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3f3","voted":false},"id":"speakap","links":{"self":"/api/icons/speakap"},"type":"icon"},{"attributes":{"id":"speaker","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8df","voted":false},"id":"speaker","links":{"self":"/api/icons/speaker"},"type":"icon"},{"attributes":{"id":"speaker-deck","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f83c","voted":false},"id":"speaker-deck","links":{"self":"/api/icons/speaker-deck"},"type":"icon"},{"attributes":{"id":"speakers","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8e0","voted":false},"id":"speakers","links":{"self":"/api/icons/speakers"},"type":"icon"},{"attributes":{"id":"spell-check","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f891","voted":false},"id":"spell-check","links":{"self":"/api/icons/spell-check"},"type":"icon"},{"attributes":{"id":"spider","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f717","voted":true},"id":"spider","links":{"self":"/api/icons/spider"},"type":"icon"},{"attributes":{"id":"spider-black-widow","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f718","voted":false},"id":"spider-black-widow","links":{"self":"/api/icons/spider-black-widow"},"type":"icon"},{"attributes":{"id":"spider-web","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f719","voted":false},"id":"spider-web","links":{"self":"/api/icons/spider-web"},"type":"icon"},{"attributes":{"id":"spinner","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f110","voted":false},"id":"spinner","links":{"self":"/api/icons/spinner"},"type":"icon"},{"attributes":{"id":"spinner-third","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f3f4","voted":false},"id":"spinner-third","links":{"self":"/api/icons/spinner-third"},"type":"icon"},{"attributes":{"id":"splotch","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5bc","voted":false},"id":"splotch","links":{"self":"/api/icons/splotch"},"type":"icon"},{"attributes":{"id":"spotify","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1bc","voted":false},"id":"spotify","links":{"self":"/api/icons/spotify"},"type":"icon"},{"attributes":{"id":"spray-can","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5bd","voted":false},"id":"spray-can","links":{"self":"/api/icons/spray-can"},"type":"icon"},{"attributes":{"id":"sprinkler","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f935","voted":false},"id":"sprinkler","links":{"self":"/api/icons/sprinkler"},"type":"icon"},{"attributes":{"id":"square","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0c8","voted":false},"id":"square","links":{"self":"/api/icons/square"},"type":"icon"},{"attributes":{"id":"square-full","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f45c","voted":false},"id":"square-full","links":{"self":"/api/icons/square-full"},"type":"icon"},{"attributes":{"id":"square-root","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f697","voted":false},"id":"square-root","links":{"self":"/api/icons/square-root"},"type":"icon"},{"attributes":{"id":"square-root-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f698","voted":false},"id":"square-root-alt","links":{"self":"/api/icons/square-root-alt"},"type":"icon"},{"attributes":{"id":"squarespace","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f5be","voted":true},"id":"squarespace","links":{"self":"/api/icons/squarespace"},"type":"icon"},{"attributes":{"id":"squirrel","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f71a","voted":false},"id":"squirrel","links":{"self":"/api/icons/squirrel"},"type":"icon"},{"attributes":{"id":"stack-exchange","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f18d","voted":false},"id":"stack-exchange","links":{"self":"/api/icons/stack-exchange"},"type":"icon"},{"attributes":{"id":"stack-overflow","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f16c","voted":false},"id":"stack-overflow","links":{"self":"/api/icons/stack-overflow"},"type":"icon"},{"attributes":{"id":"stackpath","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f842","voted":false},"id":"stackpath","links":{"self":"/api/icons/stackpath"},"type":"icon"},{"attributes":{"id":"staff","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f71b","voted":false},"id":"staff","links":{"self":"/api/icons/staff"},"type":"icon"},{"attributes":{"id":"stamp","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5bf","voted":false},"id":"stamp","links":{"self":"/api/icons/stamp"},"type":"icon"},{"attributes":{"id":"star","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f005","voted":false},"id":"star","links":{"self":"/api/icons/star"},"type":"icon"},{"attributes":{"id":"star-and-crescent","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f699","voted":false},"id":"star-and-crescent","links":{"self":"/api/icons/star-and-crescent"},"type":"icon"},{"attributes":{"id":"star-christmas","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7d4","voted":false},"id":"star-christmas","links":{"self":"/api/icons/star-christmas"},"type":"icon"},{"attributes":{"id":"star-exclamation","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2f3","voted":false},"id":"star-exclamation","links":{"self":"/api/icons/star-exclamation"},"type":"icon"},{"attributes":{"id":"star-half","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f089","voted":false},"id":"star-half","links":{"self":"/api/icons/star-half"},"type":"icon"},{"attributes":{"id":"star-half-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5c0","voted":true},"id":"star-half-alt","links":{"self":"/api/icons/star-half-alt"},"type":"icon"},{"attributes":{"id":"star-of-david","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f69a","voted":false},"id":"star-of-david","links":{"self":"/api/icons/star-of-david"},"type":"icon"},{"attributes":{"id":"star-of-life","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f621","voted":false},"id":"star-of-life","links":{"self":"/api/icons/star-of-life"},"type":"icon"},{"attributes":{"id":"star-shooting","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f936","voted":false},"id":"star-shooting","links":{"self":"/api/icons/star-shooting"},"type":"icon"},{"attributes":{"id":"starfighter","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f937","voted":false},"id":"starfighter","links":{"self":"/api/icons/starfighter"},"type":"icon"},{"attributes":{"id":"starfighter-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f938","voted":false},"id":"starfighter-alt","links":{"self":"/api/icons/starfighter-alt"},"type":"icon"},{"attributes":{"id":"stars","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f762","voted":false},"id":"stars","links":{"self":"/api/icons/stars"},"type":"icon"},{"attributes":{"id":"starship","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f939","voted":false},"id":"starship","links":{"self":"/api/icons/starship"},"type":"icon"},{"attributes":{"id":"starship-freighter","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f93a","voted":false},"id":"starship-freighter","links":{"self":"/api/icons/starship-freighter"},"type":"icon"},{"attributes":{"id":"staylinked","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3f5","voted":false},"id":"staylinked","links":{"self":"/api/icons/staylinked"},"type":"icon"},{"attributes":{"id":"steak","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f824","voted":false},"id":"steak","links":{"self":"/api/icons/steak"},"type":"icon"},{"attributes":{"id":"steam","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1b6","voted":false},"id":"steam","links":{"self":"/api/icons/steam"},"type":"icon"},{"attributes":{"id":"steam-square","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1b7","voted":false},"id":"steam-square","links":{"self":"/api/icons/steam-square"},"type":"icon"},{"attributes":{"id":"steam-symbol","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3f6","voted":false},"id":"steam-symbol","links":{"self":"/api/icons/steam-symbol"},"type":"icon"},{"attributes":{"id":"steering-wheel","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f622","voted":false},"id":"steering-wheel","links":{"self":"/api/icons/steering-wheel"},"type":"icon"},{"attributes":{"id":"step-backward","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f048","voted":false},"id":"step-backward","links":{"self":"/api/icons/step-backward"},"type":"icon"},{"attributes":{"id":"step-forward","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f051","voted":false},"id":"step-forward","links":{"self":"/api/icons/step-forward"},"type":"icon"},{"attributes":{"id":"stethoscope","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0f1","voted":false},"id":"stethoscope","links":{"self":"/api/icons/stethoscope"},"type":"icon"},{"attributes":{"id":"sticker-mule","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3f7","voted":false},"id":"sticker-mule","links":{"self":"/api/icons/sticker-mule"},"type":"icon"},{"attributes":{"id":"sticky-note","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f249","voted":false},"id":"sticky-note","links":{"self":"/api/icons/sticky-note"},"type":"icon"},{"attributes":{"id":"stocking","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7d5","voted":false},"id":"stocking","links":{"self":"/api/icons/stocking"},"type":"icon"},{"attributes":{"id":"stomach","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f623","voted":false},"id":"stomach","links":{"self":"/api/icons/stomach"},"type":"icon"},{"attributes":{"id":"stop","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f04d","voted":false},"id":"stop","links":{"self":"/api/icons/stop"},"type":"icon"},{"attributes":{"id":"stop-circle","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f28d","voted":false},"id":"stop-circle","links":{"self":"/api/icons/stop-circle"},"type":"icon"},{"attributes":{"id":"stopwatch","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2f2","voted":false},"id":"stopwatch","links":{"self":"/api/icons/stopwatch"},"type":"icon"},{"attributes":{"id":"stopwatch-20","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f96f","voted":false},"id":"stopwatch-20","links":{"self":"/api/icons/stopwatch-20"},"type":"icon"},{"attributes":{"id":"store","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f54e","voted":true},"id":"store","links":{"self":"/api/icons/store"},"type":"icon"},{"attributes":{"id":"store-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f54f","voted":true},"id":"store-alt","links":{"self":"/api/icons/store-alt"},"type":"icon"},{"attributes":{"id":"store-alt-slash","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f970","voted":false},"id":"store-alt-slash","links":{"self":"/api/icons/store-alt-slash"},"type":"icon"},{"attributes":{"id":"store-slash","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f971","voted":false},"id":"store-slash","links":{"self":"/api/icons/store-slash"},"type":"icon"},{"attributes":{"id":"strava","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f428","voted":false},"id":"strava","links":{"self":"/api/icons/strava"},"type":"icon"},{"attributes":{"id":"stream","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f550","voted":false},"id":"stream","links":{"self":"/api/icons/stream"},"type":"icon"},{"attributes":{"id":"street-view","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f21d","voted":false},"id":"street-view","links":{"self":"/api/icons/street-view"},"type":"icon"},{"attributes":{"id":"stretcher","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f825","voted":false},"id":"stretcher","links":{"self":"/api/icons/stretcher"},"type":"icon"},{"attributes":{"id":"strikethrough","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0cc","voted":false},"id":"strikethrough","links":{"self":"/api/icons/strikethrough"},"type":"icon"},{"attributes":{"id":"stripe","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f429","voted":false},"id":"stripe","links":{"self":"/api/icons/stripe"},"type":"icon"},{"attributes":{"id":"stripe-s","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f42a","voted":false},"id":"stripe-s","links":{"self":"/api/icons/stripe-s"},"type":"icon"},{"attributes":{"id":"stroopwafel","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f551","voted":false},"id":"stroopwafel","links":{"self":"/api/icons/stroopwafel"},"type":"icon"},{"attributes":{"id":"studiovinari","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3f8","voted":false},"id":"studiovinari","links":{"self":"/api/icons/studiovinari"},"type":"icon"},{"attributes":{"id":"stumbleupon","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1a4","voted":false},"id":"stumbleupon","links":{"self":"/api/icons/stumbleupon"},"type":"icon"},{"attributes":{"id":"stumbleupon-circle","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1a3","voted":false},"id":"stumbleupon-circle","links":{"self":"/api/icons/stumbleupon-circle"},"type":"icon"},{"attributes":{"id":"subscript","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f12c","voted":false},"id":"subscript","links":{"self":"/api/icons/subscript"},"type":"icon"},{"attributes":{"id":"subway","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f239","voted":false},"id":"subway","links":{"self":"/api/icons/subway"},"type":"icon"},{"attributes":{"id":"suitcase","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0f2","voted":false},"id":"suitcase","links":{"self":"/api/icons/suitcase"},"type":"icon"},{"attributes":{"id":"suitcase-rolling","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5c1","voted":false},"id":"suitcase-rolling","links":{"self":"/api/icons/suitcase-rolling"},"type":"icon"},{"attributes":{"id":"sun","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f185","voted":false},"id":"sun","links":{"self":"/api/icons/sun"},"type":"icon"},{"attributes":{"id":"sun-cloud","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f763","voted":false},"id":"sun-cloud","links":{"self":"/api/icons/sun-cloud"},"type":"icon"},{"attributes":{"id":"sun-dust","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f764","voted":false},"id":"sun-dust","links":{"self":"/api/icons/sun-dust"},"type":"icon"},{"attributes":{"id":"sun-haze","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f765","voted":false},"id":"sun-haze","links":{"self":"/api/icons/sun-haze"},"type":"icon"},{"attributes":{"id":"sunglasses","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f892","voted":true},"id":"sunglasses","links":{"self":"/api/icons/sunglasses"},"type":"icon"},{"attributes":{"id":"sunrise","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f766","voted":false},"id":"sunrise","links":{"self":"/api/icons/sunrise"},"type":"icon"},{"attributes":{"id":"sunset","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f767","voted":false},"id":"sunset","links":{"self":"/api/icons/sunset"},"type":"icon"},{"attributes":{"id":"superpowers","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f2dd","voted":false},"id":"superpowers","links":{"self":"/api/icons/superpowers"},"type":"icon"},{"attributes":{"id":"superscript","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f12b","voted":false},"id":"superscript","links":{"self":"/api/icons/superscript"},"type":"icon"},{"attributes":{"id":"supple","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3f9","voted":false},"id":"supple","links":{"self":"/api/icons/supple"},"type":"icon"},{"attributes":{"id":"surprise","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5c2","voted":false},"id":"surprise","links":{"self":"/api/icons/surprise"},"type":"icon"},{"attributes":{"id":"suse","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f7d6","voted":true},"id":"suse","links":{"self":"/api/icons/suse"},"type":"icon"},{"attributes":{"id":"swatchbook","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5c3","voted":false},"id":"swatchbook","links":{"self":"/api/icons/swatchbook"},"type":"icon"},{"attributes":{"id":"swift","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f8e1","voted":false},"id":"swift","links":{"self":"/api/icons/swift"},"type":"icon"},{"attributes":{"id":"swimmer","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5c4","voted":false},"id":"swimmer","links":{"self":"/api/icons/swimmer"},"type":"icon"},{"attributes":{"id":"swimming-pool","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5c5","voted":false},"id":"swimming-pool","links":{"self":"/api/icons/swimming-pool"},"type":"icon"},{"attributes":{"id":"sword","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f71c","voted":false},"id":"sword","links":{"self":"/api/icons/sword"},"type":"icon"},{"attributes":{"id":"sword-laser","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f93b","voted":false},"id":"sword-laser","links":{"self":"/api/icons/sword-laser"},"type":"icon"},{"attributes":{"id":"sword-laser-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f93c","voted":false},"id":"sword-laser-alt","links":{"self":"/api/icons/sword-laser-alt"},"type":"icon"},{"attributes":{"id":"swords","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f71d","voted":false},"id":"swords","links":{"self":"/api/icons/swords"},"type":"icon"},{"attributes":{"id":"swords-laser","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f93d","voted":false},"id":"swords-laser","links":{"self":"/api/icons/swords-laser"},"type":"icon"},{"attributes":{"id":"symfony","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f83d","voted":false},"id":"symfony","links":{"self":"/api/icons/symfony"},"type":"icon"},{"attributes":{"id":"synagogue","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f69b","voted":false},"id":"synagogue","links":{"self":"/api/icons/synagogue"},"type":"icon"},{"attributes":{"id":"sync","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f021","voted":false},"id":"sync","links":{"self":"/api/icons/sync"},"type":"icon"},{"attributes":{"id":"sync-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2f1","voted":false},"id":"sync-alt","links":{"self":"/api/icons/sync-alt"},"type":"icon"},{"attributes":{"id":"syringe","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f48e","voted":false},"id":"syringe","links":{"self":"/api/icons/syringe"},"type":"icon"},{"attributes":{"id":"table","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0ce","voted":false},"id":"table","links":{"self":"/api/icons/table"},"type":"icon"},{"attributes":{"id":"table-tennis","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f45d","voted":false},"id":"table-tennis","links":{"self":"/api/icons/table-tennis"},"type":"icon"},{"attributes":{"id":"tablet","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f10a","voted":false},"id":"tablet","links":{"self":"/api/icons/tablet"},"type":"icon"},{"attributes":{"id":"tablet-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f3fa","voted":false},"id":"tablet-alt","links":{"self":"/api/icons/tablet-alt"},"type":"icon"},{"attributes":{"id":"tablet-android","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f3fb","voted":false},"id":"tablet-android","links":{"self":"/api/icons/tablet-android"},"type":"icon"},{"attributes":{"id":"tablet-android-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f3fc","voted":false},"id":"tablet-android-alt","links":{"self":"/api/icons/tablet-android-alt"},"type":"icon"},{"attributes":{"id":"tablet-rugged","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f48f","voted":false},"id":"tablet-rugged","links":{"self":"/api/icons/tablet-rugged"},"type":"icon"},{"attributes":{"id":"tablets","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f490","voted":false},"id":"tablets","links":{"self":"/api/icons/tablets"},"type":"icon"},{"attributes":{"id":"tachometer","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0e4","voted":false},"id":"tachometer","links":{"self":"/api/icons/tachometer"},"type":"icon"},{"attributes":{"id":"tachometer-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f3fd","voted":false},"id":"tachometer-alt","links":{"self":"/api/icons/tachometer-alt"},"type":"icon"},{"attributes":{"id":"tachometer-alt-average","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f624","voted":false},"id":"tachometer-alt-average","links":{"self":"/api/icons/tachometer-alt-average"},"type":"icon"},{"attributes":{"id":"tachometer-alt-fast","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f625","voted":false},"id":"tachometer-alt-fast","links":{"self":"/api/icons/tachometer-alt-fast"},"type":"icon"},{"attributes":{"id":"tachometer-alt-fastest","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f626","voted":false},"id":"tachometer-alt-fastest","links":{"self":"/api/icons/tachometer-alt-fastest"},"type":"icon"},{"attributes":{"id":"tachometer-alt-slow","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f627","voted":false},"id":"tachometer-alt-slow","links":{"self":"/api/icons/tachometer-alt-slow"},"type":"icon"},{"attributes":{"id":"tachometer-alt-slowest","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f628","voted":false},"id":"tachometer-alt-slowest","links":{"self":"/api/icons/tachometer-alt-slowest"},"type":"icon"},{"attributes":{"id":"tachometer-average","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f629","voted":false},"id":"tachometer-average","links":{"self":"/api/icons/tachometer-average"},"type":"icon"},{"attributes":{"id":"tachometer-fast","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f62a","voted":false},"id":"tachometer-fast","links":{"self":"/api/icons/tachometer-fast"},"type":"icon"},{"attributes":{"id":"tachometer-fastest","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f62b","voted":false},"id":"tachometer-fastest","links":{"self":"/api/icons/tachometer-fastest"},"type":"icon"},{"attributes":{"id":"tachometer-slow","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f62c","voted":false},"id":"tachometer-slow","links":{"self":"/api/icons/tachometer-slow"},"type":"icon"},{"attributes":{"id":"tachometer-slowest","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f62d","voted":false},"id":"tachometer-slowest","links":{"self":"/api/icons/tachometer-slowest"},"type":"icon"},{"attributes":{"id":"taco","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f826","voted":false},"id":"taco","links":{"self":"/api/icons/taco"},"type":"icon"},{"attributes":{"id":"tag","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f02b","voted":false},"id":"tag","links":{"self":"/api/icons/tag"},"type":"icon"},{"attributes":{"id":"tags","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f02c","voted":false},"id":"tags","links":{"self":"/api/icons/tags"},"type":"icon"},{"attributes":{"id":"tally","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f69c","voted":false},"id":"tally","links":{"self":"/api/icons/tally"},"type":"icon"},{"attributes":{"id":"tanakh","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f827","voted":false},"id":"tanakh","links":{"self":"/api/icons/tanakh"},"type":"icon"},{"attributes":{"id":"tape","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4db","voted":false},"id":"tape","links":{"self":"/api/icons/tape"},"type":"icon"},{"attributes":{"id":"tasks","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0ae","voted":false},"id":"tasks","links":{"self":"/api/icons/tasks"},"type":"icon"},{"attributes":{"id":"tasks-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f828","voted":false},"id":"tasks-alt","links":{"self":"/api/icons/tasks-alt"},"type":"icon"},{"attributes":{"id":"taxi","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1ba","voted":false},"id":"taxi","links":{"self":"/api/icons/taxi"},"type":"icon"},{"attributes":{"id":"teamspeak","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f4f9","voted":true},"id":"teamspeak","links":{"self":"/api/icons/teamspeak"},"type":"icon"},{"attributes":{"id":"teeth","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f62e","voted":false},"id":"teeth","links":{"self":"/api/icons/teeth"},"type":"icon"},{"attributes":{"id":"teeth-open","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f62f","voted":false},"id":"teeth-open","links":{"self":"/api/icons/teeth-open"},"type":"icon"},{"attributes":{"id":"telegram","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f2c6","voted":false},"id":"telegram","links":{"self":"/api/icons/telegram"},"type":"icon"},{"attributes":{"id":"telegram-plane","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3fe","voted":false},"id":"telegram-plane","links":{"self":"/api/icons/telegram-plane"},"type":"icon"},{"attributes":{"id":"telescope","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f93e","voted":false},"id":"telescope","links":{"self":"/api/icons/telescope"},"type":"icon"},{"attributes":{"id":"temperature-down","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f93f","voted":false},"id":"temperature-down","links":{"self":"/api/icons/temperature-down"},"type":"icon"},{"attributes":{"id":"temperature-frigid","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f768","voted":false},"id":"temperature-frigid","links":{"self":"/api/icons/temperature-frigid"},"type":"icon"},{"attributes":{"id":"temperature-high","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f769","voted":false},"id":"temperature-high","links":{"self":"/api/icons/temperature-high"},"type":"icon"},{"attributes":{"id":"temperature-hot","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f76a","voted":false},"id":"temperature-hot","links":{"self":"/api/icons/temperature-hot"},"type":"icon"},{"attributes":{"id":"temperature-low","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f76b","voted":false},"id":"temperature-low","links":{"self":"/api/icons/temperature-low"},"type":"icon"},{"attributes":{"id":"temperature-up","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f940","voted":false},"id":"temperature-up","links":{"self":"/api/icons/temperature-up"},"type":"icon"},{"attributes":{"id":"tencent-weibo","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1d5","voted":false},"id":"tencent-weibo","links":{"self":"/api/icons/tencent-weibo"},"type":"icon"},{"attributes":{"id":"tenge","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7d7","voted":true},"id":"tenge","links":{"self":"/api/icons/tenge"},"type":"icon"},{"attributes":{"id":"tennis-ball","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f45e","voted":false},"id":"tennis-ball","links":{"self":"/api/icons/tennis-ball"},"type":"icon"},{"attributes":{"id":"terminal","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f120","voted":false},"id":"terminal","links":{"self":"/api/icons/terminal"},"type":"icon"},{"attributes":{"id":"text","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f893","voted":false},"id":"text","links":{"self":"/api/icons/text"},"type":"icon"},{"attributes":{"id":"text-height","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f034","voted":false},"id":"text-height","links":{"self":"/api/icons/text-height"},"type":"icon"},{"attributes":{"id":"text-size","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f894","voted":false},"id":"text-size","links":{"self":"/api/icons/text-size"},"type":"icon"},{"attributes":{"id":"text-width","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f035","voted":false},"id":"text-width","links":{"self":"/api/icons/text-width"},"type":"icon"},{"attributes":{"id":"th","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f00a","voted":false},"id":"th","links":{"self":"/api/icons/th"},"type":"icon"},{"attributes":{"id":"th-large","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f009","voted":false},"id":"th-large","links":{"self":"/api/icons/th-large"},"type":"icon"},{"attributes":{"id":"th-list","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f00b","voted":false},"id":"th-list","links":{"self":"/api/icons/th-list"},"type":"icon"},{"attributes":{"id":"the-red-yeti","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f69d","voted":false},"id":"the-red-yeti","links":{"self":"/api/icons/the-red-yeti"},"type":"icon"},{"attributes":{"id":"theater-masks","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f630","voted":false},"id":"theater-masks","links":{"self":"/api/icons/theater-masks"},"type":"icon"},{"attributes":{"id":"themeco","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f5c6","voted":false},"id":"themeco","links":{"self":"/api/icons/themeco"},"type":"icon"},{"attributes":{"id":"themeisle","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f2b2","voted":false},"id":"themeisle","links":{"self":"/api/icons/themeisle"},"type":"icon"},{"attributes":{"id":"thermometer","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f491","voted":false},"id":"thermometer","links":{"self":"/api/icons/thermometer"},"type":"icon"},{"attributes":{"id":"thermometer-empty","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2cb","voted":false},"id":"thermometer-empty","links":{"self":"/api/icons/thermometer-empty"},"type":"icon"},{"attributes":{"id":"thermometer-full","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2c7","voted":false},"id":"thermometer-full","links":{"self":"/api/icons/thermometer-full"},"type":"icon"},{"attributes":{"id":"thermometer-half","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2c9","voted":false},"id":"thermometer-half","links":{"self":"/api/icons/thermometer-half"},"type":"icon"},{"attributes":{"id":"thermometer-quarter","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2ca","voted":false},"id":"thermometer-quarter","links":{"self":"/api/icons/thermometer-quarter"},"type":"icon"},{"attributes":{"id":"thermometer-three-quarters","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2c8","voted":false},"id":"thermometer-three-quarters","links":{"self":"/api/icons/thermometer-three-quarters"},"type":"icon"},{"attributes":{"id":"theta","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f69e","voted":false},"id":"theta","links":{"self":"/api/icons/theta"},"type":"icon"},{"attributes":{"id":"think-peaks","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f731","voted":false},"id":"think-peaks","links":{"self":"/api/icons/think-peaks"},"type":"icon"},{"attributes":{"id":"thumbs-down","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f165","voted":false},"id":"thumbs-down","links":{"self":"/api/icons/thumbs-down"},"type":"icon"},{"attributes":{"id":"thumbs-up","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f164","voted":false},"id":"thumbs-up","links":{"self":"/api/icons/thumbs-up"},"type":"icon"},{"attributes":{"id":"thumbtack","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f08d","voted":false},"id":"thumbtack","links":{"self":"/api/icons/thumbtack"},"type":"icon"},{"attributes":{"id":"thunderstorm","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f76c","voted":false},"id":"thunderstorm","links":{"self":"/api/icons/thunderstorm"},"type":"icon"},{"attributes":{"id":"thunderstorm-moon","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f76d","voted":false},"id":"thunderstorm-moon","links":{"self":"/api/icons/thunderstorm-moon"},"type":"icon"},{"attributes":{"id":"thunderstorm-sun","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f76e","voted":false},"id":"thunderstorm-sun","links":{"self":"/api/icons/thunderstorm-sun"},"type":"icon"},{"attributes":{"id":"ticket","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f145","voted":false},"id":"ticket","links":{"self":"/api/icons/ticket"},"type":"icon"},{"attributes":{"id":"ticket-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f3ff","voted":false},"id":"ticket-alt","links":{"self":"/api/icons/ticket-alt"},"type":"icon"},{"attributes":{"id":"tilde","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f69f","voted":false},"id":"tilde","links":{"self":"/api/icons/tilde"},"type":"icon"},{"attributes":{"id":"times","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f00d","voted":false},"id":"times","links":{"self":"/api/icons/times"},"type":"icon"},{"attributes":{"id":"times-circle","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f057","voted":false},"id":"times-circle","links":{"self":"/api/icons/times-circle"},"type":"icon"},{"attributes":{"id":"times-hexagon","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2ee","voted":false},"id":"times-hexagon","links":{"self":"/api/icons/times-hexagon"},"type":"icon"},{"attributes":{"id":"times-octagon","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2f0","voted":false},"id":"times-octagon","links":{"self":"/api/icons/times-octagon"},"type":"icon"},{"attributes":{"id":"times-square","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2d3","voted":false},"id":"times-square","links":{"self":"/api/icons/times-square"},"type":"icon"},{"attributes":{"id":"tint","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f043","voted":false},"id":"tint","links":{"self":"/api/icons/tint"},"type":"icon"},{"attributes":{"id":"tint-slash","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5c7","voted":false},"id":"tint-slash","links":{"self":"/api/icons/tint-slash"},"type":"icon"},{"attributes":{"id":"tire","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f631","voted":false},"id":"tire","links":{"self":"/api/icons/tire"},"type":"icon"},{"attributes":{"id":"tire-flat","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f632","voted":false},"id":"tire-flat","links":{"self":"/api/icons/tire-flat"},"type":"icon"},{"attributes":{"id":"tire-pressure-warning","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f633","voted":false},"id":"tire-pressure-warning","links":{"self":"/api/icons/tire-pressure-warning"},"type":"icon"},{"attributes":{"id":"tire-rugged","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f634","voted":false},"id":"tire-rugged","links":{"self":"/api/icons/tire-rugged"},"type":"icon"},{"attributes":{"id":"tired","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5c8","voted":false},"id":"tired","links":{"self":"/api/icons/tired"},"type":"icon"},{"attributes":{"id":"toggle-off","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f204","voted":false},"id":"toggle-off","links":{"self":"/api/icons/toggle-off"},"type":"icon"},{"attributes":{"id":"toggle-on","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f205","voted":false},"id":"toggle-on","links":{"self":"/api/icons/toggle-on"},"type":"icon"},{"attributes":{"id":"toilet","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7d8","voted":true},"id":"toilet","links":{"self":"/api/icons/toilet"},"type":"icon"},{"attributes":{"id":"toilet-paper","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f71e","voted":false},"id":"toilet-paper","links":{"self":"/api/icons/toilet-paper"},"type":"icon"},{"attributes":{"id":"toilet-paper-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f71f","voted":false},"id":"toilet-paper-alt","links":{"self":"/api/icons/toilet-paper-alt"},"type":"icon"},{"attributes":{"id":"toilet-paper-slash","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f972","voted":false},"id":"toilet-paper-slash","links":{"self":"/api/icons/toilet-paper-slash"},"type":"icon"},{"attributes":{"id":"tombstone","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f720","voted":false},"id":"tombstone","links":{"self":"/api/icons/tombstone"},"type":"icon"},{"attributes":{"id":"tombstone-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f721","voted":false},"id":"tombstone-alt","links":{"self":"/api/icons/tombstone-alt"},"type":"icon"},{"attributes":{"id":"toolbox","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f552","voted":true},"id":"toolbox","links":{"self":"/api/icons/toolbox"},"type":"icon"},{"attributes":{"id":"tools","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7d9","voted":true},"id":"tools","links":{"self":"/api/icons/tools"},"type":"icon"},{"attributes":{"id":"tooth","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5c9","voted":true},"id":"tooth","links":{"self":"/api/icons/tooth"},"type":"icon"},{"attributes":{"id":"toothbrush","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f635","voted":false},"id":"toothbrush","links":{"self":"/api/icons/toothbrush"},"type":"icon"},{"attributes":{"id":"torah","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6a0","voted":false},"id":"torah","links":{"self":"/api/icons/torah"},"type":"icon"},{"attributes":{"id":"torii-gate","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6a1","voted":false},"id":"torii-gate","links":{"self":"/api/icons/torii-gate"},"type":"icon"},{"attributes":{"id":"tornado","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f76f","voted":false},"id":"tornado","links":{"self":"/api/icons/tornado"},"type":"icon"},{"attributes":{"id":"tractor","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f722","voted":false},"id":"tractor","links":{"self":"/api/icons/tractor"},"type":"icon"},{"attributes":{"id":"trade-federation","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f513","voted":false},"id":"trade-federation","links":{"self":"/api/icons/trade-federation"},"type":"icon"},{"attributes":{"id":"trademark","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f25c","voted":false},"id":"trademark","links":{"self":"/api/icons/trademark"},"type":"icon"},{"attributes":{"id":"traffic-cone","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f636","voted":false},"id":"traffic-cone","links":{"self":"/api/icons/traffic-cone"},"type":"icon"},{"attributes":{"id":"traffic-light","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f637","voted":false},"id":"traffic-light","links":{"self":"/api/icons/traffic-light"},"type":"icon"},{"attributes":{"id":"traffic-light-go","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f638","voted":false},"id":"traffic-light-go","links":{"self":"/api/icons/traffic-light-go"},"type":"icon"},{"attributes":{"id":"traffic-light-slow","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f639","voted":false},"id":"traffic-light-slow","links":{"self":"/api/icons/traffic-light-slow"},"type":"icon"},{"attributes":{"id":"traffic-light-stop","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f63a","voted":false},"id":"traffic-light-stop","links":{"self":"/api/icons/traffic-light-stop"},"type":"icon"},{"attributes":{"id":"trailer","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f941","voted":true},"id":"trailer","links":{"self":"/api/icons/trailer"},"type":"icon"},{"attributes":{"id":"train","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f238","voted":false},"id":"train","links":{"self":"/api/icons/train"},"type":"icon"},{"attributes":{"id":"tram","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7da","voted":false},"id":"tram","links":{"self":"/api/icons/tram"},"type":"icon"},{"attributes":{"id":"transgender","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f224","voted":false},"id":"transgender","links":{"self":"/api/icons/transgender"},"type":"icon"},{"attributes":{"id":"transgender-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f225","voted":false},"id":"transgender-alt","links":{"self":"/api/icons/transgender-alt"},"type":"icon"},{"attributes":{"id":"transporter","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f942","voted":false},"id":"transporter","links":{"self":"/api/icons/transporter"},"type":"icon"},{"attributes":{"id":"transporter-1","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f943","voted":false},"id":"transporter-1","links":{"self":"/api/icons/transporter-1"},"type":"icon"},{"attributes":{"id":"transporter-2","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f944","voted":false},"id":"transporter-2","links":{"self":"/api/icons/transporter-2"},"type":"icon"},{"attributes":{"id":"transporter-3","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f945","voted":false},"id":"transporter-3","links":{"self":"/api/icons/transporter-3"},"type":"icon"},{"attributes":{"id":"transporter-empty","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f946","voted":false},"id":"transporter-empty","links":{"self":"/api/icons/transporter-empty"},"type":"icon"},{"attributes":{"id":"trash","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1f8","voted":false},"id":"trash","links":{"self":"/api/icons/trash"},"type":"icon"},{"attributes":{"id":"trash-alt","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2ed","voted":false},"id":"trash-alt","links":{"self":"/api/icons/trash-alt"},"type":"icon"},{"attributes":{"id":"trash-restore","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f829","voted":true},"id":"trash-restore","links":{"self":"/api/icons/trash-restore"},"type":"icon"},{"attributes":{"id":"trash-restore-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f82a","voted":true},"id":"trash-restore-alt","links":{"self":"/api/icons/trash-restore-alt"},"type":"icon"},{"attributes":{"id":"trash-undo","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f895","voted":true},"id":"trash-undo","links":{"self":"/api/icons/trash-undo"},"type":"icon"},{"attributes":{"id":"trash-undo-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f896","voted":false},"id":"trash-undo-alt","links":{"self":"/api/icons/trash-undo-alt"},"type":"icon"},{"attributes":{"id":"treasure-chest","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f723","voted":false},"id":"treasure-chest","links":{"self":"/api/icons/treasure-chest"},"type":"icon"},{"attributes":{"id":"tree","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1bb","voted":false},"id":"tree","links":{"self":"/api/icons/tree"},"type":"icon"},{"attributes":{"id":"tree-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f400","voted":false},"id":"tree-alt","links":{"self":"/api/icons/tree-alt"},"type":"icon"},{"attributes":{"id":"tree-christmas","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7db","voted":false},"id":"tree-christmas","links":{"self":"/api/icons/tree-christmas"},"type":"icon"},{"attributes":{"id":"tree-decorated","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7dc","voted":false},"id":"tree-decorated","links":{"self":"/api/icons/tree-decorated"},"type":"icon"},{"attributes":{"id":"tree-large","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7dd","voted":false},"id":"tree-large","links":{"self":"/api/icons/tree-large"},"type":"icon"},{"attributes":{"id":"tree-palm","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f82b","voted":false},"id":"tree-palm","links":{"self":"/api/icons/tree-palm"},"type":"icon"},{"attributes":{"id":"trees","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f724","voted":false},"id":"trees","links":{"self":"/api/icons/trees"},"type":"icon"},{"attributes":{"id":"trello","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f181","voted":false},"id":"trello","links":{"self":"/api/icons/trello"},"type":"icon"},{"attributes":{"id":"triangle","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2ec","voted":false},"id":"triangle","links":{"self":"/api/icons/triangle"},"type":"icon"},{"attributes":{"id":"triangle-music","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8e2","voted":false},"id":"triangle-music","links":{"self":"/api/icons/triangle-music"},"type":"icon"},{"attributes":{"id":"tripadvisor","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f262","voted":false},"id":"tripadvisor","links":{"self":"/api/icons/tripadvisor"},"type":"icon"},{"attributes":{"id":"trophy","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f091","voted":false},"id":"trophy","links":{"self":"/api/icons/trophy"},"type":"icon"},{"attributes":{"id":"trophy-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2eb","voted":false},"id":"trophy-alt","links":{"self":"/api/icons/trophy-alt"},"type":"icon"},{"attributes":{"id":"truck","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0d1","voted":false},"id":"truck","links":{"self":"/api/icons/truck"},"type":"icon"},{"attributes":{"id":"truck-container","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4dc","voted":false},"id":"truck-container","links":{"self":"/api/icons/truck-container"},"type":"icon"},{"attributes":{"id":"truck-couch","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4dd","voted":false},"id":"truck-couch","links":{"self":"/api/icons/truck-couch"},"type":"icon"},{"attributes":{"id":"truck-loading","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4de","voted":false},"id":"truck-loading","links":{"self":"/api/icons/truck-loading"},"type":"icon"},{"attributes":{"id":"truck-monster","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f63b","voted":false},"id":"truck-monster","links":{"self":"/api/icons/truck-monster"},"type":"icon"},{"attributes":{"id":"truck-moving","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4df","voted":false},"id":"truck-moving","links":{"self":"/api/icons/truck-moving"},"type":"icon"},{"attributes":{"id":"truck-pickup","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f63c","voted":false},"id":"truck-pickup","links":{"self":"/api/icons/truck-pickup"},"type":"icon"},{"attributes":{"id":"truck-plow","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7de","voted":false},"id":"truck-plow","links":{"self":"/api/icons/truck-plow"},"type":"icon"},{"attributes":{"id":"truck-ramp","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4e0","voted":false},"id":"truck-ramp","links":{"self":"/api/icons/truck-ramp"},"type":"icon"},{"attributes":{"id":"trumpet","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8e3","voted":false},"id":"trumpet","links":{"self":"/api/icons/trumpet"},"type":"icon"},{"attributes":{"id":"tshirt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f553","voted":true},"id":"tshirt","links":{"self":"/api/icons/tshirt"},"type":"icon"},{"attributes":{"id":"tty","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1e4","voted":false},"id":"tty","links":{"self":"/api/icons/tty"},"type":"icon"},{"attributes":{"id":"tumblr","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f173","voted":false},"id":"tumblr","links":{"self":"/api/icons/tumblr"},"type":"icon"},{"attributes":{"id":"tumblr-square","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f174","voted":false},"id":"tumblr-square","links":{"self":"/api/icons/tumblr-square"},"type":"icon"},{"attributes":{"id":"turkey","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f725","voted":false},"id":"turkey","links":{"self":"/api/icons/turkey"},"type":"icon"},{"attributes":{"id":"turntable","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8e4","voted":false},"id":"turntable","links":{"self":"/api/icons/turntable"},"type":"icon"},{"attributes":{"id":"turtle","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f726","voted":true},"id":"turtle","links":{"self":"/api/icons/turtle"},"type":"icon"},{"attributes":{"id":"tv","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f26c","voted":false},"id":"tv","links":{"self":"/api/icons/tv"},"type":"icon"},{"attributes":{"id":"tv-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8e5","voted":false},"id":"tv-alt","links":{"self":"/api/icons/tv-alt"},"type":"icon"},{"attributes":{"id":"tv-music","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8e6","voted":false},"id":"tv-music","links":{"self":"/api/icons/tv-music"},"type":"icon"},{"attributes":{"id":"tv-retro","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f401","voted":true},"id":"tv-retro","links":{"self":"/api/icons/tv-retro"},"type":"icon"},{"attributes":{"id":"twitch","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1e8","voted":false},"id":"twitch","links":{"self":"/api/icons/twitch"},"type":"icon"},{"attributes":{"id":"twitter","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f099","voted":false},"id":"twitter","links":{"self":"/api/icons/twitter"},"type":"icon"},{"attributes":{"id":"twitter-square","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f081","voted":false},"id":"twitter-square","links":{"self":"/api/icons/twitter-square"},"type":"icon"},{"attributes":{"id":"typewriter","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8e7","voted":false},"id":"typewriter","links":{"self":"/api/icons/typewriter"},"type":"icon"},{"attributes":{"id":"typo3","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f42b","voted":false},"id":"typo3","links":{"self":"/api/icons/typo3"},"type":"icon"},{"attributes":{"id":"uber","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f402","voted":false},"id":"uber","links":{"self":"/api/icons/uber"},"type":"icon"},{"attributes":{"id":"ubuntu","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f7df","voted":true},"id":"ubuntu","links":{"self":"/api/icons/ubuntu"},"type":"icon"},{"attributes":{"id":"ufo","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f947","voted":false},"id":"ufo","links":{"self":"/api/icons/ufo"},"type":"icon"},{"attributes":{"id":"ufo-beam","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f948","voted":false},"id":"ufo-beam","links":{"self":"/api/icons/ufo-beam"},"type":"icon"},{"attributes":{"id":"uikit","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f403","voted":false},"id":"uikit","links":{"self":"/api/icons/uikit"},"type":"icon"},{"attributes":{"id":"umbraco","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f8e8","voted":false},"id":"umbraco","links":{"self":"/api/icons/umbraco"},"type":"icon"},{"attributes":{"id":"umbrella","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0e9","voted":false},"id":"umbrella","links":{"self":"/api/icons/umbrella"},"type":"icon"},{"attributes":{"id":"umbrella-beach","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5ca","voted":false},"id":"umbrella-beach","links":{"self":"/api/icons/umbrella-beach"},"type":"icon"},{"attributes":{"id":"underline","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0cd","voted":false},"id":"underline","links":{"self":"/api/icons/underline"},"type":"icon"},{"attributes":{"id":"undo","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0e2","voted":false},"id":"undo","links":{"self":"/api/icons/undo"},"type":"icon"},{"attributes":{"id":"undo-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2ea","voted":false},"id":"undo-alt","links":{"self":"/api/icons/undo-alt"},"type":"icon"},{"attributes":{"id":"unicorn","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f727","voted":true},"id":"unicorn","links":{"self":"/api/icons/unicorn"},"type":"icon"},{"attributes":{"id":"union","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6a2","voted":false},"id":"union","links":{"self":"/api/icons/union"},"type":"icon"},{"attributes":{"id":"uniregistry","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f404","voted":false},"id":"uniregistry","links":{"self":"/api/icons/uniregistry"},"type":"icon"},{"attributes":{"id":"unity","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f949","voted":true},"id":"unity","links":{"self":"/api/icons/unity"},"type":"icon"},{"attributes":{"id":"universal-access","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f29a","voted":false},"id":"universal-access","links":{"self":"/api/icons/universal-access"},"type":"icon"},{"attributes":{"id":"university","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f19c","voted":false},"id":"university","links":{"self":"/api/icons/university"},"type":"icon"},{"attributes":{"id":"unlink","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f127","voted":false},"id":"unlink","links":{"self":"/api/icons/unlink"},"type":"icon"},{"attributes":{"id":"unlock","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f09c","voted":false},"id":"unlock","links":{"self":"/api/icons/unlock"},"type":"icon"},{"attributes":{"id":"unlock-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f13e","voted":false},"id":"unlock-alt","links":{"self":"/api/icons/unlock-alt"},"type":"icon"},{"attributes":{"id":"untappd","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f405","voted":false},"id":"untappd","links":{"self":"/api/icons/untappd"},"type":"icon"},{"attributes":{"id":"upload","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f093","voted":false},"id":"upload","links":{"self":"/api/icons/upload"},"type":"icon"},{"attributes":{"id":"ups","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f7e0","voted":false},"id":"ups","links":{"self":"/api/icons/ups"},"type":"icon"},{"attributes":{"id":"usb","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f287","voted":false},"id":"usb","links":{"self":"/api/icons/usb"},"type":"icon"},{"attributes":{"id":"usb-drive","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8e9","voted":false},"id":"usb-drive","links":{"self":"/api/icons/usb-drive"},"type":"icon"},{"attributes":{"id":"usd-circle","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2e8","voted":false},"id":"usd-circle","links":{"self":"/api/icons/usd-circle"},"type":"icon"},{"attributes":{"id":"usd-square","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2e9","voted":false},"id":"usd-square","links":{"self":"/api/icons/usd-square"},"type":"icon"},{"attributes":{"id":"user","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f007","voted":false},"id":"user","links":{"self":"/api/icons/user"},"type":"icon"},{"attributes":{"id":"user-alien","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f94a","voted":false},"id":"user-alien","links":{"self":"/api/icons/user-alien"},"type":"icon"},{"attributes":{"id":"user-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f406","voted":false},"id":"user-alt","links":{"self":"/api/icons/user-alt"},"type":"icon"},{"attributes":{"id":"user-alt-slash","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4fa","voted":false},"id":"user-alt-slash","links":{"self":"/api/icons/user-alt-slash"},"type":"icon"},{"attributes":{"id":"user-astronaut","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4fb","voted":false},"id":"user-astronaut","links":{"self":"/api/icons/user-astronaut"},"type":"icon"},{"attributes":{"id":"user-chart","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6a3","voted":false},"id":"user-chart","links":{"self":"/api/icons/user-chart"},"type":"icon"},{"attributes":{"id":"user-check","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4fc","voted":false},"id":"user-check","links":{"self":"/api/icons/user-check"},"type":"icon"},{"attributes":{"id":"user-circle","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2bd","voted":false},"id":"user-circle","links":{"self":"/api/icons/user-circle"},"type":"icon"},{"attributes":{"id":"user-clock","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4fd","voted":false},"id":"user-clock","links":{"self":"/api/icons/user-clock"},"type":"icon"},{"attributes":{"id":"user-cog","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4fe","voted":false},"id":"user-cog","links":{"self":"/api/icons/user-cog"},"type":"icon"},{"attributes":{"id":"user-cowboy","membership":{"free":[],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f8ea","voted":false},"id":"user-cowboy","links":{"self":"/api/icons/user-cowboy"},"type":"icon"},{"attributes":{"id":"user-crown","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6a4","voted":false},"id":"user-crown","links":{"self":"/api/icons/user-crown"},"type":"icon"},{"attributes":{"id":"user-edit","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4ff","voted":false},"id":"user-edit","links":{"self":"/api/icons/user-edit"},"type":"icon"},{"attributes":{"id":"user-friends","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f500","voted":false},"id":"user-friends","links":{"self":"/api/icons/user-friends"},"type":"icon"},{"attributes":{"id":"user-graduate","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f501","voted":false},"id":"user-graduate","links":{"self":"/api/icons/user-graduate"},"type":"icon"},{"attributes":{"id":"user-hard-hat","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f82c","voted":false},"id":"user-hard-hat","links":{"self":"/api/icons/user-hard-hat"},"type":"icon"},{"attributes":{"id":"user-headset","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f82d","voted":true},"id":"user-headset","links":{"self":"/api/icons/user-headset"},"type":"icon"},{"attributes":{"id":"user-injured","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f728","voted":false},"id":"user-injured","links":{"self":"/api/icons/user-injured"},"type":"icon"},{"attributes":{"id":"user-lock","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f502","voted":false},"id":"user-lock","links":{"self":"/api/icons/user-lock"},"type":"icon"},{"attributes":{"id":"user-md","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0f0","voted":false},"id":"user-md","links":{"self":"/api/icons/user-md"},"type":"icon"},{"attributes":{"id":"user-md-chat","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f82e","voted":false},"id":"user-md-chat","links":{"self":"/api/icons/user-md-chat"},"type":"icon"},{"attributes":{"id":"user-minus","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f503","voted":false},"id":"user-minus","links":{"self":"/api/icons/user-minus"},"type":"icon"},{"attributes":{"id":"user-music","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8eb","voted":false},"id":"user-music","links":{"self":"/api/icons/user-music"},"type":"icon"},{"attributes":{"id":"user-ninja","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f504","voted":false},"id":"user-ninja","links":{"self":"/api/icons/user-ninja"},"type":"icon"},{"attributes":{"id":"user-nurse","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f82f","voted":false},"id":"user-nurse","links":{"self":"/api/icons/user-nurse"},"type":"icon"},{"attributes":{"id":"user-plus","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f234","voted":false},"id":"user-plus","links":{"self":"/api/icons/user-plus"},"type":"icon"},{"attributes":{"id":"user-robot","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f94b","voted":false},"id":"user-robot","links":{"self":"/api/icons/user-robot"},"type":"icon"},{"attributes":{"id":"user-secret","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f21b","voted":false},"id":"user-secret","links":{"self":"/api/icons/user-secret"},"type":"icon"},{"attributes":{"id":"user-shield","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f505","voted":false},"id":"user-shield","links":{"self":"/api/icons/user-shield"},"type":"icon"},{"attributes":{"id":"user-slash","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f506","voted":false},"id":"user-slash","links":{"self":"/api/icons/user-slash"},"type":"icon"},{"attributes":{"id":"user-tag","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f507","voted":false},"id":"user-tag","links":{"self":"/api/icons/user-tag"},"type":"icon"},{"attributes":{"id":"user-tie","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f508","voted":false},"id":"user-tie","links":{"self":"/api/icons/user-tie"},"type":"icon"},{"attributes":{"id":"user-times","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f235","voted":false},"id":"user-times","links":{"self":"/api/icons/user-times"},"type":"icon"},{"attributes":{"id":"user-unlock","membership":{"free":[],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f958","voted":false},"id":"user-unlock","links":{"self":"/api/icons/user-unlock"},"type":"icon"},{"attributes":{"id":"user-visor","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f94c","voted":false},"id":"user-visor","links":{"self":"/api/icons/user-visor"},"type":"icon"},{"attributes":{"id":"users","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0c0","voted":false},"id":"users","links":{"self":"/api/icons/users"},"type":"icon"},{"attributes":{"id":"users-class","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f63d","voted":false},"id":"users-class","links":{"self":"/api/icons/users-class"},"type":"icon"},{"attributes":{"id":"users-cog","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f509","voted":false},"id":"users-cog","links":{"self":"/api/icons/users-cog"},"type":"icon"},{"attributes":{"id":"users-crown","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6a5","voted":false},"id":"users-crown","links":{"self":"/api/icons/users-crown"},"type":"icon"},{"attributes":{"id":"users-medical","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f830","voted":false},"id":"users-medical","links":{"self":"/api/icons/users-medical"},"type":"icon"},{"attributes":{"id":"users-slash","membership":{"free":[],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f973","voted":false},"id":"users-slash","links":{"self":"/api/icons/users-slash"},"type":"icon"},{"attributes":{"id":"usps","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f7e1","voted":false},"id":"usps","links":{"self":"/api/icons/usps"},"type":"icon"},{"attributes":{"id":"ussunnah","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f407","voted":false},"id":"ussunnah","links":{"self":"/api/icons/ussunnah"},"type":"icon"},{"attributes":{"id":"utensil-fork","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2e3","voted":false},"id":"utensil-fork","links":{"self":"/api/icons/utensil-fork"},"type":"icon"},{"attributes":{"id":"utensil-knife","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2e4","voted":false},"id":"utensil-knife","links":{"self":"/api/icons/utensil-knife"},"type":"icon"},{"attributes":{"id":"utensil-spoon","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2e5","voted":false},"id":"utensil-spoon","links":{"self":"/api/icons/utensil-spoon"},"type":"icon"},{"attributes":{"id":"utensils","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2e7","voted":false},"id":"utensils","links":{"self":"/api/icons/utensils"},"type":"icon"},{"attributes":{"id":"utensils-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2e6","voted":false},"id":"utensils-alt","links":{"self":"/api/icons/utensils-alt"},"type":"icon"},{"attributes":{"id":"vaadin","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f408","voted":false},"id":"vaadin","links":{"self":"/api/icons/vaadin"},"type":"icon"},{"attributes":{"id":"vacuum","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f94d","voted":false},"id":"vacuum","links":{"self":"/api/icons/vacuum"},"type":"icon"},{"attributes":{"id":"vacuum-robot","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f94e","voted":false},"id":"vacuum-robot","links":{"self":"/api/icons/vacuum-robot"},"type":"icon"},{"attributes":{"id":"value-absolute","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6a6","voted":false},"id":"value-absolute","links":{"self":"/api/icons/value-absolute"},"type":"icon"},{"attributes":{"id":"vector-square","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5cb","voted":false},"id":"vector-square","links":{"self":"/api/icons/vector-square"},"type":"icon"},{"attributes":{"id":"venus","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f221","voted":false},"id":"venus","links":{"self":"/api/icons/venus"},"type":"icon"},{"attributes":{"id":"venus-double","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f226","voted":false},"id":"venus-double","links":{"self":"/api/icons/venus-double"},"type":"icon"},{"attributes":{"id":"venus-mars","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f228","voted":false},"id":"venus-mars","links":{"self":"/api/icons/venus-mars"},"type":"icon"},{"attributes":{"id":"vhs","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8ec","voted":false},"id":"vhs","links":{"self":"/api/icons/vhs"},"type":"icon"},{"attributes":{"id":"viacoin","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f237","voted":false},"id":"viacoin","links":{"self":"/api/icons/viacoin"},"type":"icon"},{"attributes":{"id":"viadeo","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f2a9","voted":false},"id":"viadeo","links":{"self":"/api/icons/viadeo"},"type":"icon"},{"attributes":{"id":"viadeo-square","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f2aa","voted":false},"id":"viadeo-square","links":{"self":"/api/icons/viadeo-square"},"type":"icon"},{"attributes":{"id":"vial","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f492","voted":false},"id":"vial","links":{"self":"/api/icons/vial"},"type":"icon"},{"attributes":{"id":"vials","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f493","voted":false},"id":"vials","links":{"self":"/api/icons/vials"},"type":"icon"},{"attributes":{"id":"viber","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f409","voted":false},"id":"viber","links":{"self":"/api/icons/viber"},"type":"icon"},{"attributes":{"id":"video","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f03d","voted":false},"id":"video","links":{"self":"/api/icons/video"},"type":"icon"},{"attributes":{"id":"video-plus","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4e1","voted":false},"id":"video-plus","links":{"self":"/api/icons/video-plus"},"type":"icon"},{"attributes":{"id":"video-slash","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4e2","voted":false},"id":"video-slash","links":{"self":"/api/icons/video-slash"},"type":"icon"},{"attributes":{"id":"vihara","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6a7","voted":false},"id":"vihara","links":{"self":"/api/icons/vihara"},"type":"icon"},{"attributes":{"id":"vimeo","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f40a","voted":false},"id":"vimeo","links":{"self":"/api/icons/vimeo"},"type":"icon"},{"attributes":{"id":"vimeo-square","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f194","voted":false},"id":"vimeo-square","links":{"self":"/api/icons/vimeo-square"},"type":"icon"},{"attributes":{"id":"vimeo-v","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f27d","voted":false},"id":"vimeo-v","links":{"self":"/api/icons/vimeo-v"},"type":"icon"},{"attributes":{"id":"vine","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1ca","voted":false},"id":"vine","links":{"self":"/api/icons/vine"},"type":"icon"},{"attributes":{"id":"violin","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8ed","voted":false},"id":"violin","links":{"self":"/api/icons/violin"},"type":"icon"},{"attributes":{"id":"virus","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f974","voted":false},"id":"virus","links":{"self":"/api/icons/virus"},"type":"icon"},{"attributes":{"id":"virus-slash","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f975","voted":false},"id":"virus-slash","links":{"self":"/api/icons/virus-slash"},"type":"icon"},{"attributes":{"id":"viruses","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f976","voted":false},"id":"viruses","links":{"self":"/api/icons/viruses"},"type":"icon"},{"attributes":{"id":"vk","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f189","voted":false},"id":"vk","links":{"self":"/api/icons/vk"},"type":"icon"},{"attributes":{"id":"vnv","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f40b","voted":false},"id":"vnv","links":{"self":"/api/icons/vnv"},"type":"icon"},{"attributes":{"id":"voicemail","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f897","voted":true},"id":"voicemail","links":{"self":"/api/icons/voicemail"},"type":"icon"},{"attributes":{"id":"volcano","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f770","voted":false},"id":"volcano","links":{"self":"/api/icons/volcano"},"type":"icon"},{"attributes":{"id":"volleyball-ball","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f45f","voted":false},"id":"volleyball-ball","links":{"self":"/api/icons/volleyball-ball"},"type":"icon"},{"attributes":{"id":"volume","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6a8","voted":false},"id":"volume","links":{"self":"/api/icons/volume"},"type":"icon"},{"attributes":{"id":"volume-down","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f027","voted":false},"id":"volume-down","links":{"self":"/api/icons/volume-down"},"type":"icon"},{"attributes":{"id":"volume-mute","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6a9","voted":true},"id":"volume-mute","links":{"self":"/api/icons/volume-mute"},"type":"icon"},{"attributes":{"id":"volume-off","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f026","voted":false},"id":"volume-off","links":{"self":"/api/icons/volume-off"},"type":"icon"},{"attributes":{"id":"volume-slash","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2e2","voted":false},"id":"volume-slash","links":{"self":"/api/icons/volume-slash"},"type":"icon"},{"attributes":{"id":"volume-up","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f028","voted":false},"id":"volume-up","links":{"self":"/api/icons/volume-up"},"type":"icon"},{"attributes":{"id":"vote-nay","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f771","voted":false},"id":"vote-nay","links":{"self":"/api/icons/vote-nay"},"type":"icon"},{"attributes":{"id":"vote-yea","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f772","voted":false},"id":"vote-yea","links":{"self":"/api/icons/vote-yea"},"type":"icon"},{"attributes":{"id":"vr-cardboard","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f729","voted":true},"id":"vr-cardboard","links":{"self":"/api/icons/vr-cardboard"},"type":"icon"},{"attributes":{"id":"vuejs","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f41f","voted":false},"id":"vuejs","links":{"self":"/api/icons/vuejs"},"type":"icon"},{"attributes":{"id":"wagon-covered","membership":{"free":[],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f8ee","voted":false},"id":"wagon-covered","links":{"self":"/api/icons/wagon-covered"},"type":"icon"},{"attributes":{"id":"walker","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f831","voted":false},"id":"walker","links":{"self":"/api/icons/walker"},"type":"icon"},{"attributes":{"id":"walkie-talkie","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8ef","voted":false},"id":"walkie-talkie","links":{"self":"/api/icons/walkie-talkie"},"type":"icon"},{"attributes":{"id":"walking","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f554","voted":true},"id":"walking","links":{"self":"/api/icons/walking"},"type":"icon"},{"attributes":{"id":"wallet","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f555","voted":true},"id":"wallet","links":{"self":"/api/icons/wallet"},"type":"icon"},{"attributes":{"id":"wand","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f72a","voted":false},"id":"wand","links":{"self":"/api/icons/wand"},"type":"icon"},{"attributes":{"id":"wand-magic","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f72b","voted":false},"id":"wand-magic","links":{"self":"/api/icons/wand-magic"},"type":"icon"},{"attributes":{"id":"warehouse","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f494","voted":false},"id":"warehouse","links":{"self":"/api/icons/warehouse"},"type":"icon"},{"attributes":{"id":"warehouse-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f495","voted":false},"id":"warehouse-alt","links":{"self":"/api/icons/warehouse-alt"},"type":"icon"},{"attributes":{"id":"washer","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f898","voted":true},"id":"washer","links":{"self":"/api/icons/washer"},"type":"icon"},{"attributes":{"id":"watch","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2e1","voted":false},"id":"watch","links":{"self":"/api/icons/watch"},"type":"icon"},{"attributes":{"id":"watch-calculator","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8f0","voted":false},"id":"watch-calculator","links":{"self":"/api/icons/watch-calculator"},"type":"icon"},{"attributes":{"id":"watch-fitness","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f63e","voted":false},"id":"watch-fitness","links":{"self":"/api/icons/watch-fitness"},"type":"icon"},{"attributes":{"id":"water","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f773","voted":false},"id":"water","links":{"self":"/api/icons/water"},"type":"icon"},{"attributes":{"id":"water-lower","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f774","voted":false},"id":"water-lower","links":{"self":"/api/icons/water-lower"},"type":"icon"},{"attributes":{"id":"water-rise","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f775","voted":false},"id":"water-rise","links":{"self":"/api/icons/water-rise"},"type":"icon"},{"attributes":{"id":"wave-sine","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f899","voted":false},"id":"wave-sine","links":{"self":"/api/icons/wave-sine"},"type":"icon"},{"attributes":{"id":"wave-square","membership":{"free":["solid"],"pro":["light","regular","solid","duotone"]},"styles":["light","regular","solid","duotone"],"unicode":"f83e","voted":false},"id":"wave-square","links":{"self":"/api/icons/wave-square"},"type":"icon"},{"attributes":{"id":"wave-triangle","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f89a","voted":false},"id":"wave-triangle","links":{"self":"/api/icons/wave-triangle"},"type":"icon"},{"attributes":{"id":"waveform","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8f1","voted":false},"id":"waveform","links":{"self":"/api/icons/waveform"},"type":"icon"},{"attributes":{"id":"waveform-path","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f8f2","voted":false},"id":"waveform-path","links":{"self":"/api/icons/waveform-path"},"type":"icon"},{"attributes":{"id":"waze","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f83f","voted":false},"id":"waze","links":{"self":"/api/icons/waze"},"type":"icon"},{"attributes":{"id":"webcam","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f832","voted":true},"id":"webcam","links":{"self":"/api/icons/webcam"},"type":"icon"},{"attributes":{"id":"webcam-slash","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f833","voted":true},"id":"webcam-slash","links":{"self":"/api/icons/webcam-slash"},"type":"icon"},{"attributes":{"id":"weebly","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f5cc","voted":true},"id":"weebly","links":{"self":"/api/icons/weebly"},"type":"icon"},{"attributes":{"id":"weibo","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f18a","voted":false},"id":"weibo","links":{"self":"/api/icons/weibo"},"type":"icon"},{"attributes":{"id":"weight","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f496","voted":false},"id":"weight","links":{"self":"/api/icons/weight"},"type":"icon"},{"attributes":{"id":"weight-hanging","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5cd","voted":false},"id":"weight-hanging","links":{"self":"/api/icons/weight-hanging"},"type":"icon"},{"attributes":{"id":"weixin","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1d7","voted":false},"id":"weixin","links":{"self":"/api/icons/weixin"},"type":"icon"},{"attributes":{"id":"whale","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f72c","voted":false},"id":"whale","links":{"self":"/api/icons/whale"},"type":"icon"},{"attributes":{"id":"whatsapp","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f232","voted":false},"id":"whatsapp","links":{"self":"/api/icons/whatsapp"},"type":"icon"},{"attributes":{"id":"whatsapp-square","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f40c","voted":false},"id":"whatsapp-square","links":{"self":"/api/icons/whatsapp-square"},"type":"icon"},{"attributes":{"id":"wheat","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f72d","voted":false},"id":"wheat","links":{"self":"/api/icons/wheat"},"type":"icon"},{"attributes":{"id":"wheelchair","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f193","voted":false},"id":"wheelchair","links":{"self":"/api/icons/wheelchair"},"type":"icon"},{"attributes":{"id":"whistle","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f460","voted":false},"id":"whistle","links":{"self":"/api/icons/whistle"},"type":"icon"},{"attributes":{"id":"whmcs","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f40d","voted":false},"id":"whmcs","links":{"self":"/api/icons/whmcs"},"type":"icon"},{"attributes":{"id":"wifi","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f1eb","voted":false},"id":"wifi","links":{"self":"/api/icons/wifi"},"type":"icon"},{"attributes":{"id":"wifi-1","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6aa","voted":true},"id":"wifi-1","links":{"self":"/api/icons/wifi-1"},"type":"icon"},{"attributes":{"id":"wifi-2","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6ab","voted":true},"id":"wifi-2","links":{"self":"/api/icons/wifi-2"},"type":"icon"},{"attributes":{"id":"wifi-slash","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6ac","voted":true},"id":"wifi-slash","links":{"self":"/api/icons/wifi-slash"},"type":"icon"},{"attributes":{"id":"wikipedia-w","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f266","voted":false},"id":"wikipedia-w","links":{"self":"/api/icons/wikipedia-w"},"type":"icon"},{"attributes":{"id":"wind","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f72e","voted":false},"id":"wind","links":{"self":"/api/icons/wind"},"type":"icon"},{"attributes":{"id":"wind-turbine","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f89b","voted":true},"id":"wind-turbine","links":{"self":"/api/icons/wind-turbine"},"type":"icon"},{"attributes":{"id":"wind-warning","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f776","voted":false},"id":"wind-warning","links":{"self":"/api/icons/wind-warning"},"type":"icon"},{"attributes":{"id":"window","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f40e","voted":false},"id":"window","links":{"self":"/api/icons/window"},"type":"icon"},{"attributes":{"id":"window-alt","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f40f","voted":false},"id":"window-alt","links":{"self":"/api/icons/window-alt"},"type":"icon"},{"attributes":{"id":"window-close","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f410","voted":false},"id":"window-close","links":{"self":"/api/icons/window-close"},"type":"icon"},{"attributes":{"id":"window-frame","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f94f","voted":false},"id":"window-frame","links":{"self":"/api/icons/window-frame"},"type":"icon"},{"attributes":{"id":"window-frame-open","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f950","voted":false},"id":"window-frame-open","links":{"self":"/api/icons/window-frame-open"},"type":"icon"},{"attributes":{"id":"window-maximize","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2d0","voted":false},"id":"window-maximize","links":{"self":"/api/icons/window-maximize"},"type":"icon"},{"attributes":{"id":"window-minimize","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2d1","voted":false},"id":"window-minimize","links":{"self":"/api/icons/window-minimize"},"type":"icon"},{"attributes":{"id":"window-restore","membership":{"free":["solid","regular"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f2d2","voted":false},"id":"window-restore","links":{"self":"/api/icons/window-restore"},"type":"icon"},{"attributes":{"id":"windows","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f17a","voted":false},"id":"windows","links":{"self":"/api/icons/windows"},"type":"icon"},{"attributes":{"id":"windsock","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f777","voted":false},"id":"windsock","links":{"self":"/api/icons/windsock"},"type":"icon"},{"attributes":{"id":"wine-bottle","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f72f","voted":false},"id":"wine-bottle","links":{"self":"/api/icons/wine-bottle"},"type":"icon"},{"attributes":{"id":"wine-glass","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f4e3","voted":false},"id":"wine-glass","links":{"self":"/api/icons/wine-glass"},"type":"icon"},{"attributes":{"id":"wine-glass-alt","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f5ce","voted":false},"id":"wine-glass-alt","links":{"self":"/api/icons/wine-glass-alt"},"type":"icon"},{"attributes":{"id":"wix","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f5cf","voted":true},"id":"wix","links":{"self":"/api/icons/wix"},"type":"icon"},{"attributes":{"id":"wizards-of-the-coast","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f730","voted":false},"id":"wizards-of-the-coast","links":{"self":"/api/icons/wizards-of-the-coast"},"type":"icon"},{"attributes":{"id":"wolf-pack-battalion","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f514","voted":false},"id":"wolf-pack-battalion","links":{"self":"/api/icons/wolf-pack-battalion"},"type":"icon"},{"attributes":{"id":"won-sign","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f159","voted":false},"id":"won-sign","links":{"self":"/api/icons/won-sign"},"type":"icon"},{"attributes":{"id":"wordpress","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f19a","voted":false},"id":"wordpress","links":{"self":"/api/icons/wordpress"},"type":"icon"},{"attributes":{"id":"wordpress-simple","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f411","voted":false},"id":"wordpress-simple","links":{"self":"/api/icons/wordpress-simple"},"type":"icon"},{"attributes":{"id":"wpbeginner","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f297","voted":false},"id":"wpbeginner","links":{"self":"/api/icons/wpbeginner"},"type":"icon"},{"attributes":{"id":"wpexplorer","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f2de","voted":false},"id":"wpexplorer","links":{"self":"/api/icons/wpexplorer"},"type":"icon"},{"attributes":{"id":"wpforms","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f298","voted":false},"id":"wpforms","links":{"self":"/api/icons/wpforms"},"type":"icon"},{"attributes":{"id":"wpressr","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f3e4","voted":false},"id":"wpressr","links":{"self":"/api/icons/wpressr"},"type":"icon"},{"attributes":{"id":"wreath","membership":{"free":[],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f7e2","voted":false},"id":"wreath","links":{"self":"/api/icons/wreath"},"type":"icon"},{"attributes":{"id":"wrench","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f0ad","voted":false},"id":"wrench","links":{"self":"/api/icons/wrench"},"type":"icon"},{"attributes":{"id":"x-ray","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f497","voted":false},"id":"x-ray","links":{"self":"/api/icons/x-ray"},"type":"icon"},{"attributes":{"id":"xbox","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f412","voted":false},"id":"xbox","links":{"self":"/api/icons/xbox"},"type":"icon"},{"attributes":{"id":"xing","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f168","voted":false},"id":"xing","links":{"self":"/api/icons/xing"},"type":"icon"},{"attributes":{"id":"xing-square","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f169","voted":false},"id":"xing-square","links":{"self":"/api/icons/xing-square"},"type":"icon"},{"attributes":{"id":"y-combinator","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f23b","voted":false},"id":"y-combinator","links":{"self":"/api/icons/y-combinator"},"type":"icon"},{"attributes":{"id":"yahoo","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f19e","voted":false},"id":"yahoo","links":{"self":"/api/icons/yahoo"},"type":"icon"},{"attributes":{"id":"yammer","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f840","voted":false},"id":"yammer","links":{"self":"/api/icons/yammer"},"type":"icon"},{"attributes":{"id":"yandex","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f413","voted":false},"id":"yandex","links":{"self":"/api/icons/yandex"},"type":"icon"},{"attributes":{"id":"yandex-international","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f414","voted":false},"id":"yandex-international","links":{"self":"/api/icons/yandex-international"},"type":"icon"},{"attributes":{"id":"yarn","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f7e3","voted":true},"id":"yarn","links":{"self":"/api/icons/yarn"},"type":"icon"},{"attributes":{"id":"yelp","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f1e9","voted":false},"id":"yelp","links":{"self":"/api/icons/yelp"},"type":"icon"},{"attributes":{"id":"yen-sign","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f157","voted":false},"id":"yen-sign","links":{"self":"/api/icons/yen-sign"},"type":"icon"},{"attributes":{"id":"yin-yang","membership":{"free":["solid"],"pro":["solid","regular","light","duotone"]},"styles":["solid","regular","light","duotone"],"unicode":"f6ad","voted":false},"id":"yin-yang","links":{"self":"/api/icons/yin-yang"},"type":"icon"},{"attributes":{"id":"yoast","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f2b1","voted":false},"id":"yoast","links":{"self":"/api/icons/yoast"},"type":"icon"},{"attributes":{"id":"youtube","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f167","voted":false},"id":"youtube","links":{"self":"/api/icons/youtube"},"type":"icon"},{"attributes":{"id":"youtube-square","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f431","voted":false},"id":"youtube-square","links":{"self":"/api/icons/youtube-square"},"type":"icon"},{"attributes":{"id":"zhihu","membership":{"free":["brands"],"pro":["brands"]},"styles":["brands"],"unicode":"f63f","voted":true},"id":"zhihu","links":{"self":"/api/icons/zhihu"},"type":"icon"}];

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Footer.vue?vue&type=style&index=0&id=61a7c374&scope=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Footer.vue?vue&type=style&index=0&id=61a7c374&scope=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.color {\r\n    color: #6c757d !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=style&index=0&id=81fbb27e&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=style&index=0&id=81fbb27e&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.logo-lg img[data-v-81fbb27e] {\r\n  width: 70px;\r\n  height: 45px;\n}\n.logo-sm img[data-v-81fbb27e] {\r\n  width: 70px;\r\n  height: 45px;\n}\r\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Footer.vue?vue&type=style&index=0&id=61a7c374&scope=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Footer.vue?vue&type=style&index=0&id=61a7c374&scope=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_61a7c374_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=style&index=0&id=61a7c374&scope=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Footer.vue?vue&type=style&index=0&id=61a7c374&scope=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_61a7c374_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_61a7c374_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=style&index=0&id=81fbb27e&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=style&index=0&id=81fbb27e&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_81fbb27e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=style&index=0&id=81fbb27e&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=style&index=0&id=81fbb27e&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_81fbb27e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_81fbb27e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _Footer_vue_vue_type_style_index_0_id_61a7c374_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.vue?vue&type=style&index=0&id=61a7c374&scope=true&lang=css& */ "./resources/js/components/Footer.vue?vue&type=style&index=0&id=61a7c374&scope=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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
/* harmony import */ var _Sidebar_vue_vue_type_template_id_81fbb27e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=81fbb27e&scoped=true& */ "./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&scoped=true&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/js/components/Sidebar.vue?vue&type=script&lang=js&");
/* harmony import */ var _Sidebar_vue_vue_type_style_index_0_id_81fbb27e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=style&index=0&id=81fbb27e&scoped=true&lang=css& */ "./resources/js/components/Sidebar.vue?vue&type=style&index=0&id=81fbb27e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_81fbb27e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Sidebar_vue_vue_type_template_id_81fbb27e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "81fbb27e",
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

/***/ "./resources/js/views/pages/icons/font-awesome.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/pages/icons/font-awesome.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _font_awesome_vue_vue_type_template_id_22421564___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./font-awesome.vue?vue&type=template&id=22421564& */ "./resources/js/views/pages/icons/font-awesome.vue?vue&type=template&id=22421564&");
/* harmony import */ var _font_awesome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./font-awesome.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/icons/font-awesome.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _font_awesome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _font_awesome_vue_vue_type_template_id_22421564___WEBPACK_IMPORTED_MODULE_0__.render,
  _font_awesome_vue_vue_type_template_id_22421564___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/icons/font-awesome.vue"
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

/***/ "./resources/js/views/pages/icons/font-awesome.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/pages/icons/font-awesome.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_font_awesome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./font-awesome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/icons/font-awesome.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_font_awesome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_81fbb27e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_81fbb27e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_81fbb27e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=template&id=81fbb27e&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&scoped=true&");


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

/***/ "./resources/js/views/pages/icons/font-awesome.vue?vue&type=template&id=22421564&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/pages/icons/font-awesome.vue?vue&type=template&id=22421564& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_font_awesome_vue_vue_type_template_id_22421564___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_font_awesome_vue_vue_type_template_id_22421564___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_font_awesome_vue_vue_type_template_id_22421564___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./font-awesome.vue?vue&type=template&id=22421564& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/icons/font-awesome.vue?vue&type=template&id=22421564&");


/***/ }),

/***/ "./resources/js/components/Footer.vue?vue&type=style&index=0&id=61a7c374&scope=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Footer.vue?vue&type=style&index=0&id=61a7c374&scope=true&lang=css& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_61a7c374_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=style&index=0&id=61a7c374&scope=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Footer.vue?vue&type=style&index=0&id=61a7c374&scope=true&lang=css&");


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

/***/ "./resources/js/components/Sidebar.vue?vue&type=style&index=0&id=81fbb27e&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Sidebar.vue?vue&type=style&index=0&id=81fbb27e&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_81fbb27e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=style&index=0&id=81fbb27e&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=style&index=0&id=81fbb27e&scoped=true&lang=css&");


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