/*! chatux v1.1.0 Copyright (c) 2019 Tom Misawa, riversun.org@gmail.com, https://github.com/riversun */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js ***!
  \********************************************************************/
/*! exports provided: icon, noAuto, config, toHtml, layer, text, counter, library, dom, parse, findIconDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noAuto", function() { return noAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHtml", function() { return toHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layer", function() { return layer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counter", function() { return counter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "library", function() { return library; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIconDefinition", function() { return findIconDefinition; });
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
var DATA_PREFIX = 'data-prefix';
var DATA_ICON = 'data-icon';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
var MUTATION_APPROACH_ASYNC = 'async';
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
var PRODUCTION = function () {
  try {
    return "development" === 'production';
  } catch (e) {
    return false;
  }
}();
var PREFIX_TO_STYLE = {
  'fas': 'solid',
  'far': 'regular',
  'fal': 'light',
  'fab': 'brands',
  'fa': 'solid'
};
var STYLE_TO_PREFIX = {
  'solid': 'fas',
  'regular': 'far',
  'light': 'fal',
  'brands': 'fab'
};
var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font Awesome 5 (Solid|Regular|Light|Brands|Free|Pro)/;
var FONT_WEIGHT_TO_PREFIX = {
  '900': 'fas',
  '400': 'far',
  'normal': 'far',
  '300': 'fal'
};
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'flip-both', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter'].concat(oneToTen.map(function (n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function (n) {
  return "w-".concat(n);
}));

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  // For example <script data-search-pseudo-elements src="..."></script>
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

var _config = _objectSpread({}, _default, initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;

var config = _objectSpread({}, _config);

WINDOW.FontAwesomeConfig = config;

var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

function domready (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

var PENDING = 'pending';
var SETTLED = 'settled';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

var NOOP = function NOOP() {};

var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
var asyncQueue = [];
var asyncTimer;

function asyncFlush() {
  // run promise callbacks
  for (var i = 0; i < asyncQueue.length; i++) {
    asyncQueue[i][0](asyncQueue[i][1]);
  } // reset async asyncQueue


  asyncQueue = [];
  asyncTimer = false;
}

function asyncCall(callback, arg) {
  asyncQueue.push([callback, arg]);

  if (!asyncTimer) {
    asyncTimer = true;
    asyncSetTimer(asyncFlush, 0);
  }
}

function invokeResolver(resolver, promise) {
  function resolvePromise(value) {
    resolve(promise, value);
  }

  function rejectPromise(reason) {
    reject(promise, reason);
  }

  try {
    resolver(resolvePromise, rejectPromise);
  } catch (e) {
    rejectPromise(e);
  }
}

function invokeCallback(subscriber) {
  var owner = subscriber.owner;
  var settled = owner._state;
  var value = owner._data;
  var callback = subscriber[settled];
  var promise = subscriber.then;

  if (typeof callback === 'function') {
    settled = FULFILLED;

    try {
      value = callback(value);
    } catch (e) {
      reject(promise, e);
    }
  }

  if (!handleThenable(promise, value)) {
    if (settled === FULFILLED) {
      resolve(promise, value);
    }

    if (settled === REJECTED) {
      reject(promise, value);
    }
  }
}

function handleThenable(promise, value) {
  var resolved;

  try {
    if (promise === value) {
      throw new TypeError('A promises callback cannot return that same promise.');
    }

    if (value && (typeof value === 'function' || _typeof(value) === 'object')) {
      // then should be retrieved only once
      var then = value.then;

      if (typeof then === 'function') {
        then.call(value, function (val) {
          if (!resolved) {
            resolved = true;

            if (value === val) {
              fulfill(promise, val);
            } else {
              resolve(promise, val);
            }
          }
        }, function (reason) {
          if (!resolved) {
            resolved = true;
            reject(promise, reason);
          }
        });
        return true;
      }
    }
  } catch (e) {
    if (!resolved) {
      reject(promise, e);
    }

    return true;
  }

  return false;
}

function resolve(promise, value) {
  if (promise === value || !handleThenable(promise, value)) {
    fulfill(promise, value);
  }
}

function fulfill(promise, value) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = value;
    asyncCall(publishFulfillment, promise);
  }
}

function reject(promise, reason) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = reason;
    asyncCall(publishRejection, promise);
  }
}

function publish(promise) {
  promise._then = promise._then.forEach(invokeCallback);
}

function publishFulfillment(promise) {
  promise._state = FULFILLED;
  publish(promise);
}

function publishRejection(promise) {
  promise._state = REJECTED;
  publish(promise);

  if (!promise._handled && isNode) {
    global.process.emit('unhandledRejection', promise._data, promise);
  }
}

function notifyRejectionHandled(promise) {
  global.process.emit('rejectionHandled', promise);
}
/**
 * @class
 */


function P(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('Promise resolver ' + resolver + ' is not a function');
  }

  if (this instanceof P === false) {
    throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
  }

  this._then = [];
  invokeResolver(resolver, this);
}

P.prototype = {
  constructor: P,
  _state: PENDING,
  _then: null,
  _data: undefined,
  _handled: false,
  then: function then(onFulfillment, onRejection) {
    var subscriber = {
      owner: this,
      then: new this.constructor(NOOP),
      fulfilled: onFulfillment,
      rejected: onRejection
    };

    if ((onRejection || onFulfillment) && !this._handled) {
      this._handled = true;

      if (this._state === REJECTED && isNode) {
        asyncCall(notifyRejectionHandled, this);
      }
    }

    if (this._state === FULFILLED || this._state === REJECTED) {
      // already resolved, call callback async
      asyncCall(invokeCallback, subscriber);
    } else {
      // subscribe
      this._then.push(subscriber);
    }

    return subscriber.then;
  },
  catch: function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

P.all = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.all().');
  }

  return new P(function (resolve, reject) {
    var results = [];
    var remaining = 0;

    function resolver(index) {
      remaining++;
      return function (value) {
        results[index] = value;

        if (! --remaining) {
          resolve(results);
        }
      };
    }

    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolver(i), reject);
      } else {
        results[i] = promise;
      }
    }

    if (!remaining) {
      resolve(results);
    }
  });
};

P.race = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.race().');
  }

  return new P(function (resolve, reject) {
    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolve, reject);
      } else {
        resolve(promise);
      }
    }
  });
};

P.resolve = function (value) {
  if (value && _typeof(value) === 'object' && value.constructor === P) {
    return value;
  }

  return new P(function (resolve) {
    resolve(value);
  });
};

P.reject = function (reason) {
  return new P(function (resolve, reject) {
    reject(reason);
  });
};

var picked = typeof Promise === 'function' ? Promise : P;

var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}
function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}
function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';

  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }

  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};
function makeIconMasking (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;
  var trans = transformForSvg({
    transform: transform,
    containerWidth: maskWidth,
    iconWidth: mainWidth
  });
  var maskRect = {
    tag: 'rect',
    attributes: _objectSpread({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.inner),
    children: [{
      tag: 'path',
      attributes: _objectSpread({}, mainPath.attributes, trans.path, {
        fill: 'black'
      })
    }]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = "mask-".concat(nextUniqueId());
  var clipId = "clip-".concat(nextUniqueId());
  var maskTag = {
    tag: 'mask',
    attributes: _objectSpread({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{
      tag: 'clipPath',
      attributes: {
        id: clipId
      },
      children: [maskPath]
    }, maskTag]
  };
  children.push(defs, {
    tag: 'rect',
    attributes: _objectSpread({
      fill: 'currentColor',
      'clip-path': "url(#".concat(clipId, ")"),
      mask: "url(#".concat(maskId, ")")
    }, ALL_SPACE)
  });
  return {
    children: children,
    attributes: attributes
  };
}

function makeIconStandard (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;
  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({
      transform: transform,
      containerWidth: main.width,
      iconWidth: main.width
    });
    children.push({
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _objectSpread({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _objectSpread({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
}

function asIcon (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread({}, styles, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread({}, attributes, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var widthClass = "fa-w-".concat(Math.ceil(width / height * 16));
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({
    tag: 'title',
    attributes: {
      id: content.attributes['aria-labelledby'] || "title-".concat(nextUniqueId())
    },
    children: [title]
  });

  var args = _objectSpread({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    transform: transform,
    symbol: symbol,
    styles: extra.styles
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _objectSpread({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content,
      title = params.title,
      extra = params.extra;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  var styleString = joinStyles(extra.styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

var noop$1 = function noop() {};

var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = "FA \"5.9.0\"";

var begin = function begin(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};

var perf = {
  begin: begin,
  end: end
};

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

function toHex(unicode) {
  var result = '';

  for (var i = 0; i < unicode.length; i++) {
    var hex = unicode.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }

  return result;
}

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var styles = namespace.styles,
    shims = namespace.shims;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];
    acc[iconName] = iconName;
    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });
    return acc;
  });
  var hasRegular = 'far' in styles;
  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = {
      prefix: prefix,
      iconName: iconName
    };
    return acc;
  }, {});
};
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}

var styles$1 = namespace.styles;
var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalIcon(values) {
  return values.reduce(function (acc, cls) {
    var iconName = getIconName(config.familyPrefix, cls);

    if (styles$1[cls]) {
      acc.prefix = cls;
    } else if (config.autoFetchSvg && ['fas', 'far', 'fal', 'fab', 'fa'].indexOf(cls) > -1) {
      acc.prefix = cls;
    } else if (iconName) {
      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};
      acc.iconName = shim.iconName || iconName;
      acc.prefix = shim.prefix || acc.prefix;
    } else if (cls !== config.replacementClass && cls.indexOf('fa-w-') !== 0) {
      acc.rest.push(cls);
    }

    return acc;
  }, emptyCanonicalIcon());
}
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

var noop$2 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}

function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    var newOuterHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');

    if (node.parentNode && node.outerHTML) {
      node.outerHTML = newOuterHTML + (config.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? "<!-- ".concat(node.outerHTML, " -->") : '');
    } else if (node.parentNode) {
      var newNode = document.createElement('span');
      node.parentNode.replaceChild(newNode, node);
      newNode.outerHTML = newOuterHTML;
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement

    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
    delete abstract[0].attributes.style;
    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
      if (cls === config.replacementClass || cls.match(forSvg)) {
        acc.toSvg.push(cls);
      } else {
        acc.toNode.push(cls);
      }

      return acc;
    }, {
      toNode: [],
      toSvg: []
    });
    abstract[0].attributes.class = splitClasses.toSvg.join(' ');
    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute('class', splitClasses.toNode.join(' '));
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function performOperationSync(op) {
  op();
}

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$2;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;

    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }

  if (!config.observeMutations) {
    return;
  }

  var treeCallback = options.treeCallback,
      nodeCallback = options.nodeCallback,
      pseudoElementsCallback = options.pseudoElementsCallback,
      _options$observeMutat = options.observeMutationsRoot,
      observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;
    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class') {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
        } else {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser (node) {
  var style = node.getAttribute('style');
  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
}

function classParser (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  var val = getCanonicalIcon(classArray(node));

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.prefix && innerText.length > 1) {
    val.iconName = byLigature(val.prefix, node.innerText);
  } else if (val.prefix && innerText.length === 1) {
    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
}

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;

        case 'shrink':
          acc.size = acc.size - rest;
          break;

        case 'left':
          acc.x = acc.x - rest;
          break;

        case 'right':
          acc.x = acc.x + rest;
          break;

        case 'up':
          acc.y = acc.y - rest;
          break;

        case 'down':
          acc.y = acc.y + rest;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};
function transformParser (node) {
  return parseTransformString(node.getAttribute('data-fa-transform'));
}

function symbolParser (node) {
  var symbol = node.getAttribute('data-fa-symbol');
  return symbol === null ? false : symbol === '' ? true : symbol;
}

function attributesParser (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }

    return acc;
  }, {});
  var title = node.getAttribute('title');

  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }

  return extraAttributes;
}

function maskParser (node) {
  var mask = node.getAttribute('data-fa-mask');

  if (!mask) {
    return emptyCanonicalIcon();
  } else {
    return getCanonicalIcon(mask.split(' ').map(function (i) {
      return i.trim();
    }));
  }
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraStyles = styleParser(node);
  var transform = transformParser(node);
  var symbol = symbolParser(node);
  var extraAttributes = attributesParser(node);
  var mask = maskParser(node);
  return {
    iconName: iconName,
    title: node.getAttribute('title'),
    prefix: prefix,
    transform: transform,
    symbol: symbol,
    mask: mask,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  };
}

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}
MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = {
  fill: 'currentColor'
};
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};

var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});

var DOT = {
  tag: 'circle',
  attributes: _objectSpread({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, ANIMATION_BASE, {
      attributeName: 'r',
      values: '28;14;28;28;14;28;'
    })
  }, {
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;1;1;0;1;'
    })
  }]
};
var QUESTION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;0;0;0;1;'
    })
  }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '0;0;1;1;0;0;'
    })
  }]
};
var missing = {
  tag: 'g',
  children: [RING, DOT, QUESTION, EXCLAMATION]
};

var styles$2 = namespace.styles;
function findIcon(iconName, prefix) {
  return new picked(function (resolve, reject) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: missing
    };

    if (iconName && prefix && styles$2[prefix] && styles$2[prefix][iconName]) {
      var icon = styles$2[prefix][iconName];
      var width = icon[0];
      var height = icon[1];
      var vectorData = icon.slice(4);
      val = {
        found: true,
        width: width,
        height: height,
        icon: {
          tag: 'path',
          attributes: {
            fill: 'currentColor',
            d: vectorData[0]
          }
        }
      };
      return resolve(val);
    }

    if (iconName && prefix && !config.showMissingIcons) {
      reject(new MissingIcon("Icon is missing for prefix ".concat(prefix, " with icon name ").concat(iconName)));
    } else {
      resolve(val);
    }
  });
}

var styles$3 = namespace.styles;

function generateSvgReplacementMutation(node, nodeMeta) {
  var iconName = nodeMeta.iconName,
      title = nodeMeta.title,
      prefix = nodeMeta.prefix,
      transform = nodeMeta.transform,
      symbol = nodeMeta.symbol,
      mask = nodeMeta.mask,
      extra = nodeMeta.extra;
  return new picked(function (resolve, reject) {
    picked.all([findIcon(iconName, prefix), findIcon(mask.iconName, mask.prefix)]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          main = _ref2[0],
          mask = _ref2[1];

      resolve([node, makeInlineSvgAbstract({
        icons: {
          main: main,
          mask: mask
        },
        prefix: prefix,
        iconName: iconName,
        transform: transform,
        symbol: symbol,
        mask: mask,
        title: title,
        extra: extra,
        watchable: true
      })]);
    });
  });
}

function generateLayersText(node, nodeMeta) {
  var title = nodeMeta.title,
      transform = nodeMeta.transform,
      extra = nodeMeta.extra;
  var width = null;
  var height = null;

  if (IS_IE) {
    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
    var boundingClientRect = node.getBoundingClientRect();
    width = boundingClientRect.width / computedFontSize;
    height = boundingClientRect.height / computedFontSize;
  }

  if (config.autoA11y && !title) {
    extra.attributes['aria-hidden'] = 'true';
  }

  return picked.resolve([node, makeLayersTextAbstract({
    content: node.innerHTML,
    width: width,
    height: height,
    transform: transform,
    title: title,
    extra: extra,
    watchable: true
  })]);
}

function generateMutation(node) {
  var nodeMeta = parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return generateLayersText(node, nodeMeta);
  } else {
    return generateSvgReplacementMutation(node, nodeMeta);
  }
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return;
  var htmlClassList = DOCUMENT.documentElement.classList;

  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$3);
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
    return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return;
  }

  var candidates = [];

  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {// noop
  }

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return;
  }

  var mark = perf.begin('onTree');
  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e instanceof MissingIcon) {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);
  return new picked(function (resolve, reject) {
    picked.all(mutations).then(function (resolvedMutations) {
      perform(resolvedMutations, function () {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(function () {
      mark();
      reject();
    });
  });
}
function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(function (mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}

function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new picked(function (resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }

    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function (c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
    var fontWeight = styles.getPropertyValue('font-weight');

    if (alreadyProcessedPseudoElement && !fontFamily) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily) {
      var content = styles.getPropertyValue('content');
      var prefix = ~['Light', 'Regular', 'Solid', 'Brands'].indexOf(fontFamily[1]) ? STYLE_TO_PREFIX[fontFamily[1].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];
      var hexValue = toHex(content.length === 3 ? content.substr(1, 1) : content);
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName; // Only convert the pseudo element in this :before/:after position into an icon if we haven't
      // already done so with the same prefix and iconName

      if (iconName && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);

        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }

        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function (main) {
          var abstract = makeInlineSvgAbstract(_objectSpread({}, meta, {
            icons: {
              main: main,
              mask: emptyCanonicalIcon()
            },
            prefix: prefix,
            iconName: iconIdentifier,
            extra: extra,
            watchable: true
          }));
          var element = DOCUMENT.createElement('svg');

          if (position === ':before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }

          element.outerHTML = abstract.map(function (a) {
            return toHtml(a);
          }).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

function replace(node) {
  return picked.all([replaceForPosition(node, ':before'), replaceForPosition(node, ':after')]);
}

function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}

function searchPseudoElements (root) {
  if (!IS_DOM) return;
  return new picked(function (resolve, reject) {
    var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    var end = perf.begin('searchPseudoElements');
    disableObservation();
    picked.all(operations).then(function () {
      end();
      enableObservation();
      resolve();
    }).catch(function () {
      end();
      enableObservation();
      reject();
    });
  });
}

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}";

function css () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var Library =
/*#__PURE__*/
function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
        defineIcons(key, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        if (!additions[prefix]) additions[prefix] = {};
        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

function prepIcon(icon) {
  var width = icon[0];
  var height = icon[1];
  var vectorData = icon.slice(4);
  return {
    found: true,
    width: width,
    height: height,
    icon: {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData[0]
      }
    }
  };
}

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());

    _cssInserted = true;
  }
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function findIconDefinition(iconLookup) {
  var _iconLookup$prefix = iconLookup.prefix,
      prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
      iconName = iconLookup.iconName;
  if (!iconName) return;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread({}, params, {
      mask: mask
    }));
  };
}

var library = new Library();
var noAuto = function noAuto() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  disconnect();
};
var _cssInserted = false;
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      ensureCss();
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === void 0 ? function () {} : _params$callback;

      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }

      return onTree(node, callback);
    } else {
      return picked.reject('Operation requires a DOM of some kind.');
    }
  },
  css: css,
  insertCss: function insertCss$$1() {
    if (!_cssInserted) {
      insertCss(css());

      _cssInserted = true;
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot,
        observeMutationsRoot = params.observeMutationsRoot;

    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }

    config.observeMutations = true;
    domready(function () {
      autoReplace({
        autoReplaceSvgRoot: autoReplaceSvgRoot
      });
      observe({
        treeCallback: onTree,
        nodeCallback: onNode,
        pseudoElementsCallback: searchPseudoElements,
        observeMutationsRoot: observeMutationsRoot
      });
    });
  }
};
var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};
var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return apiObject(_objectSpread({
    type: 'icon'
  }, iconDefinition), function () {
    ensureCss();

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: prepIcon(icon),
        mask: mask ? prepIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});
var text = function text(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform2 = params.transform,
      transform = _params$transform2 === void 0 ? meaninglessTransform : _params$transform2,
      _params$title2 = params.title,
      title = _params$title2 === void 0 ? null : _params$title2,
      _params$classes2 = params.classes,
      classes = _params$classes2 === void 0 ? [] : _params$classes2,
      _params$attributes2 = params.attributes,
      attributes = _params$attributes2 === void 0 ? {} : _params$attributes2,
      _params$styles2 = params.styles,
      styles = _params$styles2 === void 0 ? {} : _params$styles2;
  return apiObject({
    type: 'text',
    content: content
  }, function () {
    ensureCss();
    return makeLayersTextAbstract({
      content: content,
      transform: _objectSpread({}, meaninglessTransform, transform),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var counter = function counter(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$title3 = params.title,
      title = _params$title3 === void 0 ? null : _params$title3,
      _params$classes3 = params.classes,
      classes = _params$classes3 === void 0 ? [] : _params$classes3,
      _params$attributes3 = params.attributes,
      attributes = _params$attributes3 === void 0 ? {} : _params$attributes3,
      _params$styles3 = params.styles,
      styles = _params$styles3 === void 0 ? {} : _params$styles3;
  return apiObject({
    type: 'counter',
    content: content
  }, function () {
    ensureCss();
    return makeLayersCounterAbstract({
      content: content.toString(),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var layer = function layer(assembler) {
  return apiObject({
    type: 'layer'
  }, function () {
    ensureCss();
    var children = [];
    assembler(function (args) {
      Array.isArray(args) ? args.map(function (a) {
        children = children.concat(a.abstract);
      }) : children = children.concat(args.abstract);
    });
    return [{
      tag: 'span',
      attributes: {
        class: "".concat(config.familyPrefix, "-layers")
      },
      children: children
    }];
  });
};
var api = {
  noAuto: noAuto,
  config: config,
  dom: dom,
  library: library,
  parse: parse,
  findIconDefinition: findIconDefinition,
  icon: icon,
  text: text,
  counter: counter,
  layer: layer,
  toHtml: toHtml
};

var autoReplace = function autoReplace() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
      autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faCommentAlt.js":
/*!************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faCommentAlt.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'comment-alt';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f27a';
var svgPathData = 'M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faCommentAlt = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faTimes.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faTimes.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'times';
var width = 352;
var height = 512;
var ligatures = [];
var unicode = 'f00d';
var svgPathData = 'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faTimes = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/botui/build/botui-theme-default.css":
/*!**********************************************************!*\
  !*** ./node_modules/botui/build/botui-theme-default.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./botui-theme-default.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/botui/build/botui-theme-default.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/botui/build/botui.min.css":
/*!************************************************!*\
  !*** ./node_modules/botui/build/botui.min.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./botui.min.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/botui/build/botui.min.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/botui/build/botui.min.js":
/*!***********************************************!*\
  !*** ./node_modules/botui/build/botui.min.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * botui 0.3.7
 * A JS library to build the UI for your bot
 * https://botui.org
 *
 * Copyright 2019, Moin Uddin
 * Released under the MIT license.
*/

!function(t,e){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return t.BotUI=e(t)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}("undefined"!=typeof window?window:this,function(t,e){"use strict";return function(e,n){function o(t,e,n,o){return"<a class='botui-message-content-link' target='"+(o?"blank":"")+"' href='"+n+"'>"+e+"</a>"}function i(t){return t.replace(b.image,"<img class='botui-message-content-image' src='$2' alt='$1' />").replace(b.icon,"<i class='botui-icon botui-message-content-icon fa fa-$1'></i>").replace(b.link,o)}function a(t,e){var n=document.createElement("script");n.type="text/javascript",n.src=t,e&&(n.onload=e),document.body.appendChild(n)}function s(t){x.action.addMessage&&m.message.human({delay:100,content:t}),x.action.show=!x.action.autoHide}function c(t){if(!t.loading&&!t.content)throw Error('BotUI: "content" is required in a non-loading message object.');t.type=t.type||"text",t.visible=!t.delay&&!t.loading,t.human&&m.opt.humanPhoto&&(t.humanPhoto=m.opt.humanPhoto),!t.human&&m.opt.botPhoto&&(t.botPhoto=m.opt.botPhoto),t.afterUpdate=!1;var e=x.messages.push(t)-1;return new Promise(function(n,o){setTimeout(function(){t.delay&&(t.visible=!0,t.loading&&(t.loading=!1)),n(e)},t.delay||0)})}function u(t){return"string"==typeof t&&(t={content:t}),t||{}}function r(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}function l(t){if(!t.action&&!t.actionButton&&!t.actionText)throw Error('BotUI: "action" property is required.')}function h(t){return l(t),r({type:"text",cssClass:"",autoHide:!0,addMessage:!0},t),x.action.type=t.type,x.action.cssClass=t.cssClass,x.action.autoHide=t.autoHide,x.action.addMessage=t.addMessage,new Promise(function(e,n){v=e,setTimeout(function(){x.action.show=!0},t.delay||0)})}if(n=n||{},!e)throw Error("BotUI: Container id is required as first argument.");if(!document.getElementById(e))throw Error("BotUI: Element with id #"+e+" does not exist.");if(!t.Vue&&!n.vue)throw Error("BotUI: Vue is required but not found.");var f,d,v,p={debug:!1,fontawesome:!0,searchselect:!0},m={},b={icon:/!\(([^\)]+)\)/gim,image:/!\[(.*?)\]\((.*?)\)/gim,link:/\[([^\[]+)\]\(([^\)]+)\)(\^?)/gim};t.Vue=t.Vue||n.vue;for(var g in p)n.hasOwnProperty(g)&&(p[g]=n[g]);t.Promise||"undefined"!=typeof Promise||n.promise||a("https://cdn.jsdelivr.net/es6-promise/4.1.0/es6-promise.min.js");var y={template:"<div class=\"botui botui-container\" v-botui-container><div class=\"botui-messages-container\"><div v-for=\"msg in messages\" class=\"botui-message\" :class=\"msg.cssClass\" v-botui-scroll><div v-if=\"msg.visible\"><div v-if=\"!msg.human && msg.botPhoto\"><div v-if=\"!msg.loading\" :class=\"[\'profil\', {human: msg.human, \'agent\': !msg.human}]\"> <img :src=\"msg.botPhoto\"></div></div><div v-if=\"msg.human && msg.humanPhoto\"><div v-if=\"!msg.loading\" :class=\"[\'profil\', {human: msg.human, \'agent\': !msg.human}]\"> <img :src=\"msg.humanPhoto\"></div></div><div v-if=\"!msg.human && !msg.botPhoto\"><div v-if=\"msg.photo && !msg.loading\" :class=\"[\'profil\', {human: msg.human, \'agent\': !msg.human}]\"> <img :class=\"[{human: msg.human, \'agent\': !msg.human}]\"></div></div></div><transition :name=\"msg.human? \'slide-fade-l2r\':\'slide-fade-r2l\'\"><div v-if=\"msg.visible\"><div :class=\"[{human: msg.human, \'botui-message-content\': true}, msg.type]\"><span v-if=\"msg.type == \'text\'\" v-text=\"msg.content\" v-botui-markdown></span><span v-if=\"msg.type == \'html\'\" v-html=\"msg.content\"></span> <iframe v-if=\"msg.type == \'embed\'\" :src=\"msg.content\" frameborder=\"0\" allowfullscreen></iframe></div></div></transition><div v-if=\"msg.loading\"><div v-if=\"!msg.human && msg.botPhoto\"><div :class=\"[\'profil\', {human: msg.human, \'agent\': !msg.human}]\"> <img :src=\"msg.botPhoto\"></div></div><div v-if=\"msg.human && msg.humanPhoto\"><div :class=\"[\'profil\', {human: msg.human, \'agent\': !msg.human}]\"> <img :src=\"msg.humanPhoto\"></div></div><div v-if=\"!msg.human && !msg.botPhoto\"><div v-if=\"msg.photo\" :class=\"[\'profil\', {human: msg.human, \'agent\': !msg.human}]\"> <img :class=\"[{human: msg.human, \'agent\': !msg.human}]\"></div></div></div><div v-if=\"msg.loading\" class=\"botui-message-content loading\"><i class=\"dot\"></i><i class=\"dot\"></i><i class=\"dot\"></i></div></div></div><div class=\"botui-actions-container\"><transition name=\"slide-fade\"><div v-if=\"action.show\" v-botui-scroll><form v-if=\"action.type == \'text\'\" class=\"botui-actions-text\" @submit.prevent=\"handle_action_text()\" :class=\"action.cssClass\"><i v-if=\"action.text.icon\" class=\"botui-icon botui-action-text-icon fa\" :class=\"\'fa-\' + action.text.icon\"></i> <input type=\"text\" ref=\"input\" :type=\"action.text.sub_type\" v-model=\"action.text.value\" class=\"botui-actions-text-input\" :placeholder=\"action.text.placeholder\" :size=\"action.text.size\" :value=\" action.text.value\" :class=\"action.text.cssClass\" required v-focus/> <button type=\"submit\" :class=\"{\'botui-actions-buttons-button\': !!action.text.button, \'botui-actions-text-submit\': !action.text.button}\"><i v-if=\"action.text.button && action.text.button.icon\" class=\"botui-icon botui-action-button-icon fa\" :class=\"\'fa-\' + action.text.button.icon\"></i> <span>{{(action.text.button && action.text.button.label) || \'Go\'}}</span></button></form><form v-if=\"action.type == \'select\'\" class=\"botui-actions-select\" @submit.prevent=\"handle_action_select()\" :class=\"action.cssClass\"><i v-if=\"action.select.icon\" class=\"botui-icon botui-action-select-icon fa\" :class=\"\'fa-\' + action.select.icon\"></i><v-select v-if=\"action.select.searchselect && !action.select.multipleselect\" v-model=\"action.select.value\" :value=\"action.select.value\" :placeholder=\"action.select.placeholder\" class=\"botui-actions-text-searchselect\" :label=\"action.select.label\" :options=\"action.select.options\"></v-select><v-select v-else-if=\"action.select.searchselect && action.select.multipleselect\" multiple v-model=\"action.select.value\" :value=\"action.select.value\" :placeholder=\"action.select.placeholder\" class=\"botui-actions-text-searchselect\" :label=\"action.select.label\" :options=\"action.select.options\"></v-select> <select v-else v-model=\"action.select.value\" class=\"botui-actions-text-select\" :placeholder=\"action.select.placeholder\" :size=\"action.select.size\" :class=\"action.select.cssClass\" required v-focus><option v-for=\"option in action.select.options\" :class=\"action.select.optionClass\" v-bind:value=\"option.value\" :disabled=\"(option.value == \'\')?true:false\" :selected=\"(action.select.value == option.value)?\'selected\':\'\'\"> {{ option.text }}</option></select> <button type=\"submit\" :class=\"{\'botui-actions-buttons-button\': !!action.select.button, \'botui-actions-select-submit\': !action.select.button}\"><i v-if=\"action.select.button && action.select.button.icon\" class=\"botui-icon botui-action-button-icon fa\" :class=\"\'fa-\' + action.select.button.icon\"></i> <span>{{(action.select.button && action.select.button.label) || \'Ok\'}}</span></button></form><div v-if=\"action.type == \'button\'\" class=\"botui-actions-buttons\" :class=\"action.cssClass\"> <button type=\"button\" :class=\"button.cssClass\" class=\"botui-actions-buttons-button\" v-for=\"button in action.button.buttons\" @click=\"handle_action_button(button)\"><i v-if=\"button.icon\" class=\"botui-icon botui-action-button-icon fa\" :class=\"\'fa-\' + button.icon\"></i> {{button.text}}</button></div><form v-if=\"action.type == \'buttontext\'\" class=\"botui-actions-text\" @submit.prevent=\"handle_action_text()\" :class=\"action.cssClass\"><i v-if=\"action.text.icon\" class=\"botui-icon botui-action-text-icon fa\" :class=\"\'fa-\' + action.text.icon\"></i> <input type=\"text\" ref=\"input\" :type=\"action.text.sub_type\" v-model=\"action.text.value\" class=\"botui-actions-text-input\" :placeholder=\"action.text.placeholder\" :size=\"action.text.size\" :value=\"action.text.value\" :class=\"action.text.cssClass\" required v-focus/> <button type=\"submit\" :class=\"{\'botui-actions-buttons-button\': !!action.text.button, \'botui-actions-text-submit\': !action.text.button}\"><i v-if=\"action.text.button && action.text.button.icon\" class=\"botui-icon botui-action-button-icon fa\" :class=\"\'fa-paper-plane\' +  action.text.button.icon\"></i> <span>{{(action.text.button && action.text.button.label) || \'Go\'}}</span></button><div class=\"botui-actions-buttons\" :class=\"action.cssClass\"> <button type=\"button\" :class=\"button.cssClass\" class=\"botui-actions-buttons-button\" v-for=\"button in action.button.buttons\" @click=\"handle_action_button(button)\" autofocus><i v-if=\"button.icon\" class=\"botui-icon botui-action-button-icon fa\" :class=\"\'fa-\' + button.icon\"></i> {{button.text}}</button></div></form></div></transition></div></div>",data:function(){return{action:{text:{size:30,placeholder:"Write here .."},button:{},show:!1,type:"text",autoHide:!0,addMessage:!0},messages:[]}},computed:{isMobile:function(){return t.innerWidth&&t.innerWidth<=768}},methods:{handle_action_button:function(t){for(var e=0;e<this.action.button.buttons.length;e++)if(this.action.button.buttons[e].value==t.value&&"function"==typeof this.action.button.buttons[e].event){if(this.action.button.buttons[e].event(t),this.action.button.buttons[e].actionStop)return!1;break}s(t.text);var n={type:"button",text:t.text,value:t.value};for(var o in t)t.hasOwnProperty(o)&&"type"!==o&&"text"!==o&&"value"!==o&&(n[o]=t[o]);v(n)},handle_action_text:function(){this.action.text.value&&(s(this.action.text.value),v({type:"text",value:this.action.text.value}),this.action.text.value="")},handle_action_select:function(){if(this.action.select.searchselect&&!this.action.select.multipleselect){if(!this.action.select.value.value)return;s(this.action.select.value[this.action.select.label]),v({type:"text",value:this.action.select.value.value,text:this.action.select.value.text,obj:this.action.select.value})}if(this.action.select.searchselect&&this.action.select.multipleselect){if(!this.action.select.value)return;for(var t=new Array,e=new Array,n=0;n<this.action.select.value.length;n++)t.push(this.action.select.value[n].value),e.push(this.action.select.value[n][this.action.select.label]);s(e.join(", ")),v({type:"text",value:t.join(", "),text:e.join(", "),obj:this.action.select.value})}else{if(!this.action.select.value)return;for(var n=0;n<this.action.select.options.length;n++)this.action.select.options[n].value==this.action.select.value&&(s(this.action.select.options[n].text),v({type:"text",value:this.action.select.value,text:this.action.select.options[n].text}))}}}};t.Vue.directive("botui-markdown",function(t,e){"false"!=e.value&&(t.innerHTML=i(t.textContent))}),t.Vue.directive("botui-scroll",{inserted:function(t){var e=document.querySelector(".botui-container");e.scrollTop=e.scrollHeight}}),t.Vue.directive("focus",{inserted:function(t){t.focus()}}),t.Vue.directive("botui-container",{inserted:function(t){d=t}}),f=new t.Vue({components:{"bot-ui":y}}).$mount("#"+e);var x=f.$children[0];return m.message={add:function(t){return c(u(t))},bot:function(t){return t=u(t),c(t)},human:function(t){return t=u(t),t.human=!0,c(t)},get:function(t){return Promise.resolve(x.messages[t])},remove:function(t){return x.messages.splice(t,1),Promise.resolve()},update:function(t,e){var n=x.messages[t];return n.content=e.content,n.visible=!e.loading,n.loading=!!e.loading,n.afterUpdate=!0,Promise.resolve(e.content)},removeAll:function(){return x.messages.splice(0,x.messages.length),Promise.resolve()}},m.opt={humanPhoto:null,botPhoto:null,setHumanPhoto:function(t){this.humanPhoto=t},setBotPhoto:function(t){this.botPhoto=t}},m.action={show:h,hide:function(){return x.action.show=!1,Promise.resolve()},text:function(t){return l(t),x.action.text=t.action,h(t)},button:function(t){return l(t),t.type="button",x.action.button.buttons=t.action,h(t)},select:function(t){if(l(t),t.type="select",t.action.label=t.action.label||"text",t.action.value=t.action.value||"",t.action.searchselect=void 0!==t.action.searchselect?t.action.searchselect:p.searchselect,t.action.multipleselect=t.action.multipleselect||!1,t.action.searchselect&&"string"==typeof t.action.value)if(t.action.multipleselect){var e=t.action.value.split(",");t.action.value=new Array;for(var n=0;n<t.action.options.length;n++)for(var o=0;o<e.length;o++)t.action.options[n].value==e[o]&&t.action.value.push(t.action.options[n])}else for(var n=0;n<t.action.options.length;n++)t.action.options[n].value==t.action.value&&(t.action.value=t.action.options[n]);return t.action.searchselect||t.action.options.unshift({value:"",text:t.action.placeholder}),x.action.button=t.action.button,x.action.select=t.action,h(t)},buttontext:function(t){return l(t),t.type="buttontext",x.action.button.buttons=t.actionButton,x.action.text=t.actionText,h(t)}},p.fontawesome&&a("https://use.fontawesome.com/ea731dcb6f.js"),p.searchselect&&a("https://unpkg.com/vue-select@2.4.0/dist/vue-select.js",function(){Vue.component("v-select",VueSelect.VueSelect)}),p.debug&&(m._botApp=f),m}});

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/botui/build/botui-theme-default.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/botui/build/botui-theme-default.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);", ""]);

// Module
exports.push([module.i, "/*\r\n  Default theme for BotUI\r\n*/\r\n.botui-container {\r\n  font-size: 14px;\r\n  background-color: #fff;\r\n  font-family: \"Open Sans\", sans-serif; }\r\n\r\n.botui-messages-container {\r\n  padding: 10px 20px; }\r\n\r\n.botui-actions-container {\r\n  padding: 10px 20px; }\r\n\r\n.botui-message {\r\n  min-height: 30px; }\r\n\r\n.botui-message-content {\r\n  padding: 7px 13px;\r\n  border-radius: 15px;\r\n  color: #595a5a;\r\n  background-color: #ebebeb; }\r\n  .botui-message-content.human {\r\n    color: #f7f8f8;\r\n    background-color: #919292; }\r\n  .botui-message-content.text {\r\n    line-height: 1.3; }\r\n  .botui-message-content.loading {\r\n    background-color: rgba(206, 206, 206, 0.5);\r\n    line-height: 1.3;\r\n    text-align: center; }\r\n  .botui-message-content.embed {\r\n    padding: 5px;\r\n    border-radius: 5px; }\r\n\r\n.botui-message-content-link {\r\n  color: #919292; }\r\n\r\n.botui-actions-text-input {\r\n  border: 0;\r\n  outline: none;\r\n  border-radius: 0;\r\n  padding: 5px 7px;\r\n  font-family: \"Open Sans\", sans-serif;\r\n  background-color: transparent;\r\n  color: #595a5a;\r\n  border-bottom: 1px solid #919292; }\r\n\r\n.botui-actions-text-submit {\r\n  color: #fff;\r\n  width: 30px;\r\n  padding: 5px;\r\n  height: 30px;\r\n  line-height: 1;\r\n  border-radius: 50%;\r\n  border: 1px solid #919292;\r\n  background: #777979; }\r\n\r\n.botui-actions-buttons-button {\r\n  border: 0;\r\n  color: #fff;\r\n  line-height: 1;\r\n  cursor: pointer;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  padding: 7px 15px;\r\n  border-radius: 4px;\r\n  font-family: \"Open Sans\", sans-serif;\r\n  background: #777979;\r\n  box-shadow: 2px 3px 4px 0 rgba(0, 0, 0, 0.25); }\r\n\r\n.botui-actions-text-select {\r\n  border: 0;\r\n  outline: 0;\r\n  border-radius: 0;\r\n  padding: 5px 7px;\r\n  font-family: \"Open Sans\",sans-serif;\r\n  background-color: transparent;\r\n  color: #595a5a;\r\n  border-bottom: 1px solid #919292; }\r\n\r\n.botui-actions-text-searchselect {\r\n  border: 0;\r\n  outline: 0;\r\n  border-radius: 0;\r\n  padding: 5px 7px;\r\n  font-family: \"Open Sans\",sans-serif;\r\n  background-color: transparent;\r\n  color: #595a5a;\r\n  border-bottom: 1px solid #919292; }\r\n\r\n.botui-actions-text-searchselect .dropdown-toggle {\r\n  border: none !important; }\r\n\r\n.botui-actions-text-searchselect .selected-tag {\r\n  background-color: transparent !important;\r\n  border: 0 !important; }\r\n\r\n/*\r\n  Animation of messages\r\n  For details on how to change, see: https://vuejs.org/v2/guide/transitions.html\r\n*/\r\n.slide-fade-enter-active {\r\n  transition: all .3s ease; }\r\n\r\n.slide-fade-enter,\r\n.slide-fade-leave-to {\r\n  opacity: 0;\r\n  transform: translateX(-10px); }\r\n\r\n/*\r\n  Animation of loading dots\r\n*/\r\n.dot {\r\n  width: .5rem;\r\n  height: .5rem;\r\n  border-radius: .5rem;\r\n  display: inline-block;\r\n  background-color: #919292; }\r\n  .dot:nth-last-child(1) {\r\n    margin-left: .3rem;\r\n    animation: loading .6s .3s linear infinite; }\r\n  .dot:nth-last-child(2) {\r\n    margin-left: .3rem;\r\n    animation: loading .6s .2s linear infinite; }\r\n  .dot:nth-last-child(3) {\r\n    animation: loading .6s .1s linear infinite; }\r\n\r\n@keyframes loading {\r\n  0% {\r\n    transform: translate(0, 0);\r\n    background-color: #ababab; }\r\n  25% {\r\n    transform: translate(0, -3px); }\r\n  50% {\r\n    transform: translate(0, 0px);\r\n    background-color: #ababab; }\r\n  75% {\r\n    transform: translate(0, 3px); }\r\n  100% {\r\n    transform: translate(0, 0px); } }\r\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/botui/build/botui.min.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/botui/build/botui.min.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*\r\n * botui 0.3.7\r\n * A JS library to build the UI for your bot\r\n * https://botui.org\r\n *\r\n * Copyright 2019, Moin Uddin\r\n * Released under the MIT license.\r\n*/\r\n\r\na.botui-message-content-link:focus{outline:thin dotted}a.botui-message-content-link:focus:active,a.botui-message-content-link:focus:hover{outline:0}form.botui-actions-text{margin:0}button.botui-actions-buttons-button,input.botui-actions-text-input{margin:0;font-size:100%;line-height:normal;vertical-align:baseline}button.botui-actions-buttons-button::-moz-focus-inner,input.botui-actions-text-input::-moz-focus-inner{border:0;padding:0}button.botui-actions-buttons-button{cursor:pointer;-webkit-appearance:button}\r\n.botui-app-container{width:100%;height:100%;margin:0 auto}.botui-container{width:100%;height:100%;overflow-y:auto;overflow-x:hidden}.botui-message{margin:10px 0;min-height:20px}.botui-message:after{display:block;content:\"\";clear:both}.botui-message-content{width:auto;max-width:75%;display:inline-block}.botui-message-content.human{float:right}.botui-message-content iframe{width:100%}.botui-message-content-image{margin:5px 0;display:block;max-width:200px;max-height:200px}.botui-message-content-link{text-decoration:underline}.profil{position:relative;border-radius:50%}.profil.human{float:right;margin-left:5px}.profil.agent{float:left;margin-right:5px}.profil>img{border-radius:50%;width:26px;height:26px;border:0}.profil>img.agent{content:url(http://decodemoji.com/img/logos/blue_moji_hat.svg)}button.botui-actions-buttons-button{margin-top:10px;margin-bottom:10px}button.botui-actions-buttons-button:not(:last-child){margin-right:10px}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\r\n.chatux-sp {\r\n    height: 100vh;\r\n}\r\n\r\n.chatux-btn-chat-pc {\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n}\r\n\r\n.chatux-btn-chat {\r\n    box-shadow: 2px 3px 6px rgba(0, 0, 0, .4);\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    position: fixed;\r\n    color: #fff;\r\n    background-color: #007bff;\r\n    border-color: #007bff;\r\n    transition: transform 0.2s linear, opacity 0.3s;\r\n    transform: scale(0.9);\r\n    opacity: 0;\r\n}\r\n\r\n.chatux-btn-chat:hover {\r\n    color: #fff;\r\n    background-color: #0069d9;\r\n    border-color: #0062cc;\r\n    transform: scale(1.0);\r\n\r\n}\r\n\r\n.chatux-btn-on {\r\n    opacity: 1;\r\n}\r\n\r\n.chatux-scrn-on {\r\n    transition: transform 0.2s linear, opacity 0.3s;\r\n    transform: scale(1.0);\r\n    opacity: 1;\r\n}\r\n\r\n.chatux-scrn-off {\r\n    transition: transform 0.2s linear, opacity 0.3s;\r\n    transform: scale(0.0);\r\n    opacity: 0;\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/botui-theme-riversun.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/botui-theme-riversun.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);", ""]);

// Module
exports.push([module.i, "/*\r\n  Default theme for BotUI\r\n*/\r\n\r\n\r\n\r\n\r\n.botui-container {\r\n    font-size: 14px;\r\n    background-color: #d7dbe4;\r\n    font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.botui-messages-container {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.botui-actions-container {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.botui-message {\r\n    min-height: 30px;\r\n}\r\n\r\n.botui-message-content {\r\n    padding: 7px 13px;\r\n    border-radius: 15px;\r\n    color: #314141;\r\n    background-color: #fff;\r\n}\r\n\r\n.botui-message-content.human {\r\n    color: #f8f8f8;\r\n    background-color: #36415d;\r\n}\r\n\r\n.botui-message-content.text {\r\n    line-height: 1.3;\r\n}\r\n\r\n.botui-message-content.loading {\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n    line-height: 1.3;\r\n    text-align: center;\r\n}\r\n\r\n.botui-message-content.embed {\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.botui-message-content-link {\r\n    color: #919292;\r\n}\r\n\r\n.botui-actions-text-input {\r\n    border: 0;\r\n    outline: none;\r\n    border-radius: 0;\r\n    padding: 5px 7px;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    background-color: transparent;\r\n    color: #595a5a;\r\n    width: 70%;\r\n    border-bottom: 1px solid #919292;\r\n}\r\n\r\n.botui-actions-text-submit {\r\n    color: #314141;\r\n    width: 40px;\r\n    padding: 5px;\r\n    height: 30px;\r\n    line-height: 1;\r\n    border-radius: 10%;\r\n    border: 1px solid #36415d;\r\n    background: #fff;\r\n}\r\n\r\n.botui-actions-buttons-button {\r\n    border: 0;\r\n    color: #36415d;\r\n    line-height: 1;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    padding: 7px 15px;\r\n    border-radius: 4px;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    background: #ffffff;\r\n    border: 1px solid #36415d;\r\n    box-shadow: 2px 3px 4px 0 rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.botui-actions-text-select {\r\n    border: 0;\r\n    outline: 0;\r\n    border-radius: 0;\r\n    padding: 5px 7px;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    background-color: transparent;\r\n    color: #595a5a;\r\n    border-bottom: 1px solid #919292;\r\n}\r\n\r\n.botui-actions-text-searchselect {\r\n    border: 0;\r\n    outline: 0;\r\n    border-radius: 0;\r\n    padding: 5px 7px;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    background-color: transparent;\r\n    color: #595a5a;\r\n    border-bottom: 1px solid #919292;\r\n}\r\n\r\n.botui-actions-text-searchselect .dropdown-toggle {\r\n    border: none !important;\r\n}\r\n\r\n.botui-actions-text-searchselect .selected-tag {\r\n    background-color: transparent !important;\r\n    border: 0 !important;\r\n}\r\n\r\n/*\r\n  Animation of messages\r\n  For details on how to change, see: https://vuejs.org/v2/guide/transitions.html\r\n*/\r\n.slide-fade-enter-active {\r\n    transition: all .3s ease;\r\n}\r\n\r\n.slide-fade-enter,\r\n.slide-fade-leave-to {\r\n    opacity: 0;\r\n    transform: translateX(-10px);\r\n}\r\n\r\n.slide-fade-l2r-enter-active {\r\n    transition: all .3s ease;\r\n}\r\n\r\n.slide-fade-l2r-enter,\r\n.slide-fade-l2r-leave-to {\r\n    opacity: 0;\r\n    transform: translateX(10px);\r\n}\r\n\r\n.slide-fade-r2l-enter-active {\r\n    transition: all .3s ease;\r\n}\r\n\r\n.slide-fade-r2l-enter,\r\n.slide-fade-r2l-leave-to {\r\n    opacity: 0;\r\n    transform: translateX(-10px);\r\n}\r\n\r\n/*\r\n  Animation of loading dots\r\n*/\r\n.dot {\r\n    width: .5rem;\r\n    height: .5rem;\r\n    border-radius: .5rem;\r\n    display: inline-block;\r\n    background-color: #cccccc;\r\n}\r\n\r\n.dot:nth-last-child(1) {\r\n    margin-left: .3rem;\r\n    animation: loading .6s .3s linear infinite;\r\n}\r\n\r\n.dot:nth-last-child(2) {\r\n    margin-left: .3rem;\r\n    animation: loading .6s .2s linear infinite;\r\n}\r\n\r\n.dot:nth-last-child(3) {\r\n    animation: loading .6s .1s linear infinite;\r\n}\r\n\r\n@keyframes loading {\r\n    0% {\r\n        transform: translate(0, 0);\r\n        background-color: #ababab;\r\n    }\r\n    25% {\r\n        transform: translate(0, -3px);\r\n    }\r\n    50% {\r\n        transform: translate(0, 0px);\r\n        background-color: #ababab;\r\n    }\r\n    75% {\r\n        transform: translate(0, 3px);\r\n    }\r\n    100% {\r\n        transform: translate(0, 0px);\r\n    }\r\n}\r\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/jsframe.js/dist/jsframe.min.js":
/*!*****************************************************!*\
  !*** ./node_modules/jsframe.js/dist/jsframe.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! jsframe v1.5.14 Copyright (c) 2019 Tom Misawa */
!function(e,t){if(true)module.exports=t();else { var o, r; }}(window,function(){return o={},n.m=r=[function(e,t,r){"use strict";e.exports=function(r){var i=[];return i.toString=function(){return this.map(function(e){var t=function(e,t){var r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var n=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(o),a=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[r].concat(a).concat([n]).join("\n")}return[r].join("\n")}(e,r);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},i.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var n=this[o][0];null!=n&&(r[n]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),i.push(a))}},i}},function(e,t,o){var r,n,a,s={},d=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===n&&(n=r.apply(this,arguments)),n}),i=(a={},function(e,t){if("function"==typeof e)return e();if(void 0===a[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}a[e]=r}return a[e]}),l=null,u=0,p=[],m=o(6);function c(e,t){for(var r=0;r<e.length;r++){var o=e[r],n=s[o.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](o.parts[a]);for(;a<o.parts.length;a++)n.parts.push(C(o.parts[a],t))}else{var i=[];for(a=0;a<o.parts.length;a++)i.push(C(o.parts[a],t));s[o.id]={id:o.id,refs:1,parts:i}}}}function h(e,t){for(var r=[],o={},n=0;n<e.length;n++){var a=e[n],i=t.base?a[0]+t.base:a[0],l={css:a[1],media:a[2],sourceMap:a[3]};o[i]?o[i].parts.push(l):r.push(o[i]={id:i,parts:[l]})}return r}function f(e,t){var r=i(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=p[p.length-1];if("top"===e.insertAt)o?o.nextSibling?r.insertBefore(t,o.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),p.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=i(e.insertAt.before,r);r.insertBefore(t,n)}}function y(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=p.indexOf(e);0<=t&&p.splice(t,1)}function b(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return o.nc}();r&&(e.attrs.nonce=r)}return g(t,e.attrs),f(e,t),t}function g(t,r){Object.keys(r).forEach(function(e){t.setAttribute(e,r[e])})}function C(t,e){var r,o,n,a;if(e.transform&&t.css){if(!(a="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=a}if(e.singleton){var i=u++;r=l=l||b(e),o=E.bind(null,r,i,!1),n=E.bind(null,r,i,!0)}else n=t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),f(e,t),t}(e),o=function(e,t,r){var o=r.css,n=r.sourceMap,a=void 0===t.convertToAbsoluteUrls&&n;(t.convertToAbsoluteUrls||a)&&(o=m(o));n&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var i=new Blob([o],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(i),l&&URL.revokeObjectURL(l)}.bind(null,r,e),function(){y(r),r.href&&URL.revokeObjectURL(r.href)}):(r=b(e),o=function(e,t){var r=t.css,o=t.media;o&&e.setAttribute("media",o);if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,r),function(){y(r)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else n()}}e.exports=function(e,i){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(i=i||{}).attrs="object"==typeof i.attrs?i.attrs:{},i.singleton||"boolean"==typeof i.singleton||(i.singleton=d()),i.insertInto||(i.insertInto="head"),i.insertAt||(i.insertAt="bottom");var l=h(e,i);return c(l,i),function(e){for(var t=[],r=0;r<l.length;r++){var o=l[r];(n=s[o.id]).refs--,t.push(n)}e&&c(h(e,i),i);for(r=0;r<t.length;r++){var n;if(0===(n=t[r]).refs){for(var a=0;a<n.parts.length;a++)n.parts[a]();delete s[n.id]}}}};var v,B=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function E(e,t,r,o){var n=r?"":o.css;if(e.styleSheet)e.styleSheet.cssText=B(t,n);else{var a=document.createTextNode(n),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},function(e,t,r){var a=r(8);function o(){this.fps=30,this.durationMillis=200,this.targetFrame=null,this._crrAlpha=1,this._toAlpha=1,this._crrWidth=0,this._crrHeight=0,this._toWidth=0,this._toHeight=0,this._toX=0,this._toY=0,this.pinnedAnimationEnabled=!1,this._pinX=0,this._pinY=0,this._pinAnchor=null}o.prototype.set=function(e){var t=this;t.targetFrame=e,t.fromWidth(e.getWidth()),t.fromHeight(e.getHeight()),t.toWidth(e.getWidth()),t.toHeight(e.getHeight());var r=e.getPosition();return t.fromPosition(r.x,r.y,r.anchor),t},o.prototype.get=function(){return this.targetFrame},o.prototype.setDuration=function(e){return this.durationMillis=e,this},o.prototype.setFPS=function(e){return this.fps=e,this},o.prototype.fromPosition=function(e,t,r){var o=this;return o.pinnedAnimationEnabled=!0,o._pinX=e,o._pinY=t,o.toPosition(e,t),r&&(o._pinAnchor=r),o},o.prototype.fromWidth=function(e){return this._crrWidth=e,this},o.prototype.fromHeight=function(e){return this._crrHeight=e,this},o.prototype.toWidth=function(e){return this._toWidth=e,this},o.prototype.toHeight=function(e){return this._toHeight=e,this},o.prototype.fromAlpha=function(e){return this._crrAlpha=e,this},o.prototype.toAlpha=function(e){return this._toAlpha=e,this},o.prototype.toPosition=function(e,t){return this._toX=e,this._toY=t,this},o.prototype.toX=function(e){return this._toX=e,this},o.prototype.toY=function(e){return this._toY=e,this},o.prototype.start=function(n,h){var f=this,y=f._crrWidth,b=f._crrHeight,g=f._pinX,C=f._pinY,v=f._crrAlpha;return new Promise(function(i,e){var l=parseInt(f.fps*(f.durationMillis/1e3));0==l&&(l=1);var s=(f._toWidth-y)/l,d=(f._toHeight-b)/l,u=(f._toX-g)/l,p=(f._toY-C)/l,m=(f._toAlpha-v)/l,t=f.durationMillis/l,c=0;function r(){var e=new a;e.setIntervalMillis(t),e.setCallback(function(e){if(c==l){var t=f._toWidth,r=f._toHeight,o=g+u*c,n=C+p*c,a=f._toAlpha;f.pinnedAnimationEnabled&&f.targetFrame._setPositionInternally(o,n,f._pinAnchor,t,r),f.targetFrame.htmlElement.style&&(f.targetFrame.htmlElement.style.opacity=a),f.targetFrame.setSize(t,r,!0),f._crrWidth=t,f._crrHeight=r,f._pinX=o,f._pinY=n}if(c==l+1)return e.stopTimer(),void i(f);t=y+s*c,r=b+d*c,o=g+u*c,n=C+p*c,a=v+m*c;f.pinnedAnimationEnabled&&f.targetFrame._setPositionInternally(o,n,f._pinAnchor,t,r),f.targetFrame.htmlElement.style&&(f.targetFrame.htmlElement.style.opacity=a),f.targetFrame.setSize(t,r,!0),0!=c||f.targetFrame.parentCanvas.getWindow(f.targetFrame.id)&&f.targetFrame.show({requestFocus:h});c++}),e.startTimer()}if(n){var o=new a;o.setIntervalMillis(n),o.setCallback(function(e){e.stopTimer(),r()}),o.startTimer()}else r()})},e.exports=o},function(e,t){CALIGN={LEFT_TOP:"LEFT_TOP",HCENTER_TOP:"CENTER_TOP",RIGHT_TOP:"RIGHT_TOP",LEFT_VCENTER:"LEFT_CENTER",HCENTER_VCENTER:"CENTER_CENTER"},CALIGN.CENTER=CALIGN.HCENTER_VCENTER,CALIGN.RIGHT_VCENTER="RIGHT_CENTER",CALIGN.LEFT_BOTTOM="LEFT_BOTTOM",CALIGN.HCENTER_BOTTOM="CENTER_BOTTOM",CALIGN.RIGHT_BOTTOM="RIGHT_BOTTOM",e.exports=CALIGN},function(e,t,r){var o=r(5);"string"==typeof o&&(o=[[e.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(1)(o,n);o.locals&&(e.exports=o.locals)},function(e,t,r){(e.exports=r(0)(!1)).push([e.i,".jsframe-titlebar-default {\r\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #f5f5f5, color-stop(1.0, #f8f7f2)));\r\n    background: -webkit-linear-gradient(top, #f5f5f5, #f8f7f2);\r\n    background: -moz-linear-gradient(top, #f5f5f5, #f8f7f2);\r\n    background: linear-gradient(top, #f5f5f5, #f8f7f2);\r\n    border-top-left-radius: 6px;\r\n    border-top-right-radius: 6px;\r\n}\r\n\r\n.jsframe-titlebar-focused {\r\n    /* (c)2015 Johannes Jakob\r\n       Made with <3 in Germany */\r\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #ebebeb, color-stop(1.0, #d5d5d5)));\r\n    background: -webkit-linear-gradient(top, #ebebeb, #d5d5d5);\r\n    background: -moz-linear-gradient(top, #ebebeb, #d5d5d5);\r\n    background: linear-gradient(top, #ebebeb, #d5d5d5);\r\n    border-top-left-radius: 6px;\r\n    border-top-right-radius: 6px;\r\n}\r\n\r\n.jsframe-modal-window-background {\r\n    background: rgba(0, 0, 0, 0.6);\r\n    height: 100%;\r\n    widdth: 100%\r\n}",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,a=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:a+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,r){"use strict";var n=r(2),p=r(3);function o(e){this.windowMode="default",this.styleDisplay="flex",this.horizontalAlign="left",this.verticalAlign="top",this.keyListener=null,this.minimizeButton=null,this.maximizeButton=null,this.demaximizeButton=null,this.deminimizeButton=null,e.styleDisplay&&(this.styleDisplay=e.styleDisplay),e.minimizeButton&&(this.minimizeButton=e.minimizeButton),e.deminimizeButton&&(this.deminimizeButton=e.deminimizeButton),e.maximizeButton&&(this.maximizeButton=e.maximizeButton),e.demaximizeButton&&(this.demaximizeButton=e.demaximizeButton),e.hideButton&&(this.hideButton=e.hideButton),e.horizontalAlign&&(this.horizontalAlign=e.horizontalAlign),e.verticalAlign&&(this.verticalAlign=e.verticalAlign),this.animationEnabled=!1,this.animationDuration=100,this.frame=e.frame,this.hideFrameBorder=!0,this.hideTitleBar=!0,this.restoreKey=null,this.restoreDuration=null,this.restoreCallback=null,this.statsStore={},e.animation&&(this.animationEnabled=e.animation),e.animationDuration&&(this.animationDuration=e.animationDuration),this.resizeListener=this.handleOnResize.bind(this),this.eventListeners={}}o.prototype.on=function(e,t){this.eventListeners[e]=t},o.prototype.doMaximize=function(e){var t=this,r=t.frame;window.addEventListener("resize",t.resizeListener),t.saveCurrentWindowStats("maximize_mode"),t.hideTitleBar=!!e&&e.hideTitleBar,t.hideTitleBar?r.hideAllVisibleFrameComponents():(t.maximizeButton&&r.hideFrameComponent(t.maximizeButton),t.demaximizeButton&&r.showFrameComponent(t.demaximizeButton,t.styleDisplay)),r.setMovable(!1),r.setResizable(!1),e&&e.restoreKey&&(t.restoreKey=e.restoreKey),e&&e.restoreDuration&&(t.restoreDuration=e.restoreDuration),e&&e.restoreCallback&&(t.restoreCallback=e.restoreCallback),t.renderMaximizedMode({animation:t.animationEnabled,callback:e&&e.callback?e.callback:null,duration:e&&e.duration?e.duration:null})},o.prototype.renderMaximizedMode=function(e){var t=this,r=t.frame,o=t.loadWindowStats("maximize_mode"),n=0,a=0,i=0,l=0;t.hideTitleBar&&(n=0,a=-o.titleBarHeight),l=t.hideFrameBorder?(i=window.innerWidth,window.innerHeight+(t.hideTitleBar?o.titleBarHeight:0)):(i=window.innerWidth-2*o.frameBorderWidthDefault,window.innerHeight-2*o.frameBorderWidthDefault+(t.hideTitleBar?o.titleBarHeight:0)),"right"==t.horizontalAlign&&(n=-i),"bottom"==t.verticalAlign&&(a=-l);function s(){r.setPosition(n,a),t.hideFrameBorder&&(r.frameBorderWidthDefault=0,r.frameBorderWidthFocused=0,r.htmlElement.style.borderWidth="0px"),r.setSize(i,l,!0),t.hideTitleBar&&(t.restoreKey&&(t.keyListener=function(e){e.key===t.restoreKey&&t.doDemaximize({duration:t.restoreDuration?t.restoreDuration:null,callback:t.restoreCallback?t.restoreCallback:null})}),window.addEventListener("keydown",t.keyListener),r.iframe&&r.iframe.contentWindow.addEventListener("keydown",t.keyListener)),t.windowMode="maximized",e&&e.callback&&e.callback(t.frame,{eventType:"maximized"}),t.eventListeners.maximized&&t.eventListeners.maximized(t.frame,{eventType:"maximized"})}e&&e.animation?t.animateFrame({frame:r,from:o,to:{left:n,top:a,width:i,height:l},duration:e.duration?e.duration:t.animationDuration,callback:s}):s()},o.prototype.doDemaximize=function(e){var t=this,r=t.frame;t.hasWindowStats("maximize_mode")&&(t.hideTitleBar||(t.maximizeButton&&r.showFrameComponent(t.maximizeButton,t.styleDisplay),t.demaximizeButton&&r.hideFrameComponent(t.demaximizeButton)),t.restoreWindow({restorePosition:!0,restoreMode:"maximize_mode",animation:t.animationEnabled,callback:e&&e.callback?e.callback:null,forceShowFrameComponents:t.animationEnabled&&t.hideTitleBar,duration:e&&e.duration?e.duration:null,eventType:"demaximized"}))},o.prototype.handleOnResize=function(){this.renderMaximizedMode()},o.prototype.doMinimize=function(e){var t=this.frame;this.saveCurrentWindowStats("minimize_mode"),t.setResizable(!1),this.renderMinimizedMode({animation:this.animationEnabled,callback:e&&e.callback?e.callback:null,duration:e&&e.duration?e.duration:null})},o.prototype.renderMinimizedMode=function(e){var t=this,r=t.frame,o=t.loadWindowStats("minimize_mode"),n=t.getCurrentWindowStats(),a=t.getCurrentWindowStats();a.height=o.titleBarHeight;function i(){r.setSize(a.width,a.height,!0),t.windowMode="minimized",t.minimizeButton&&r.hideFrameComponent(t.minimizeButton),t.deminimizeButton&&r.showFrameComponent(t.deminimizeButton,t.styleDisplay),e.callback&&e.callback(t.frame,{eventType:"minimized"}),t.eventListeners.minimized&&t.eventListeners.minimized(t.frame,{eventType:"minimized"})}e&&e.animation?t.animateFrame({toAlpha:1,duration:e.duration?e.duration:t.animationDuration,frame:r,from:n,to:a,callback:i}):i()},o.prototype.doDeminimize=function(e){var t=this,r=t.frame;t.hasWindowStats("minimize_mode")&&(t.minimizeButton&&r.showFrameComponent(t.minimizeButton,t.styleDisplay),t.deminimizeButton&&r.hideFrameComponent(t.deminimizeButton),t.restoreWindow({restorePosition:!1,restoreMode:"minimize_mode",animation:t.animationEnabled,duration:e&&e.duration?e.duration:null,callback:e&&e.callback?e.callback:null,eventType:"deminimized"}))},o.prototype.doHide=function(e){var t=this.frame;this.saveCurrentWindowStats("hide_mode"),t.setResizable(!1),this.renderHideMode({silent:e.silent,animation:this.animationEnabled,duration:e&&e.duration?e.duration:null,callback:e&&e.callback?e.callback:null,align:e&&e.align?e.align:null,offset:e.offset})},o.prototype.renderHideMode=function(e){var t=this,r=t.frame,o=t.loadWindowStats("hide_mode"),n=t.getCurrentWindowStats(),a={x:0,y:0};e.offset&&(a=e.offset);var i=0,l=0,s=e&&e.align?e.align:"LEFT_TOP";s&&p.LEFT_TOP!=s?p.HCENTER_TOP==s?(i=n.left+n.width/2,l=n.top):p.RIGHT_TOP==s?(i=n.left+n.width,l=n.top):p.LEFT_VCENTER==s?(i=n.left,l=n.top+n.height/2):p.HCENTER_VCENTER==s?(i=n.left+n.width/2,l=n.top+n.height/2):p.RIGHT_VCENTER==s?(i=n.left+n.width,l=n.top+n.height/2):p.LEFT_BOTTOM==s?(i=n.left,l=n.top+n.height):p.HCENTER_BOTTOM==s?(i=n.left+n.width/2,l=n.top+n.height):p.RIGHT_BOTTOM==s?(i=n.left+n.width,l=n.top+n.height):"ABSOLUTE"==s&&(i=a.x,l=a.y):(i=n.left,l=n.top);function d(){r.setSize(u.width,u.height,!0),t.windowMode="hid",e&&e.callback&&e.callback(t.frame,{eventType:"hid"}),t.eventListeners.hid&&t.eventListeners.hid(t.frame,{eventType:"hid"})}var u={left:i,top:l,width:0,height:o.titleBarHeight};r.hideAllVisibleFrameComponents(),e&&e.animation?t.animateFrame({fromAlpha:e.silent?0:1,toAlpha:0,duration:e.duration?e.duration:t.animationDuration,frame:r,from:n,to:u,callback:d}):d()},o.prototype.doDehide=function(e){this.frame;this.hasWindowStats("hide_mode")&&this.restoreWindow({duration:e&&e.duration?e.duration:null,restorePosition:!0,restoreMode:"hide_mode",animation:this.animationEnabled,forceShowFrameComponents:!0,callback:e&&e.callback?e.callback:null,eventType:"dehided"})},o.prototype.loadWindowStats=function(e){return this.statsStore[e]},o.prototype.saveCurrentWindowStats=function(e){this.statsStore[e]=this.getCurrentWindowStats()},o.prototype.clearWindowStats=function(e){this.statsStore[e]=null},o.prototype.hasWindowStats=function(e){return this.statsStore[e]},o.prototype.getCurrentWindowStats=function(){var e=this.frame,t=parseInt(e.titleBar.style.height,10),r=e.frameBorderWidthDefault,o=e.frameBorderWidthFocused;return{left:e.getLeft(),top:e.getTop(),width:e.getWidth(),height:e.getHeight(),titleBarHeight:t,frameBorderWidthDefault:r,frameBorderWidthFocused:o,resizable:e.resizable,movable:e.movable}},o.prototype.restoreWindow=function(t){var r=this,o=r.frame,n=r.loadWindowStats(t.restoreMode),a=r.getCurrentWindowStats();o.frameBorderWidthDefault=n.frameBorderWidthDefault,o.frameBorderWidthFocused=n.frameBorderWidthFocused,o.htmlElement.style.borderWidth=o.frameBorderWidthFocused;function e(){t&&0==t.restorePosition&&(n.left=a.left,n.top=a.top),o.setPosition(n.left,n.top),o.setSize(n.width,n.height,!0),o.setResizable(n.resizable),o.setMovable(n.movable),r.clearWindowStats(t.restoreMode),r.keyListener&&(window.removeEventListener("keydown",r.keyListener),o.iframe&&o.iframe.contentWindow.removeEventListener("keydown",r.keyListener),r.keyListener=null),r.windowMode="default",t&&t.forceShowFrameComponents&&o.showAllVisibleFrameComponents(),o.show();var e="restored";t&&t.eventType&&(e=t.eventType),t&&t.callback&&t.callback(r.frame,{eventType:e}),r.eventListeners[e]&&r.eventListeners[e](r.frame,{eventType:e})}t&&t.animation?r.animateFrame({duration:t.duration?t.duration:r.animationDuration,frame:o,from:a,to:n,callback:e}):e(),window.removeEventListener("resize",r.resizeListener)},o.prototype.animateFrame=function(t){var e=isNaN(t.fromAlpha)?1:t.fromAlpha,r=t.from,o=t.to;(new n).set(t.frame).setDuration(t.duration?t.duration:this.animationDuration).fromPosition(r.left,r.top,"LEFT_TOP").toPosition(o.left,o.top,"LEFT_TOP").fromWidth(r.width).fromHeight(r.height).toWidth(o.width).toHeight(o.height).fromAlpha(e).toAlpha(0==t.toAlpha?0:1).start(0,!1).then(function(e){t.callback()})},o.prototype.setupDefaultEvents=function(r){var e=this;e.maximizeButton&&e.frame.on(e.maximizeButton,"click",function(e,t){e.control.doMaximize({hideTitleBar:!0===r.maximizeWithoutTitleBar,duration:100,restoreKey:r.restoreKey?r.restoreKey:"Escape",restoreDuration:100,callback:function(e,t){},restoreCallback:function(e,t){jsFrame.showToast({text:e.getName()+" "+t.eventType})}})}),e.demaximizeButton&&e.frame.on(e.demaximizeButton,"click",function(e,t){e.control.doDemaximize({})}),e.minimizeButton&&e.frame.on(e.minimizeButton,"click",function(e,t){e.control.doMinimize({})}),e.deminimizeButton&&e.frame.on(e.deminimizeButton,"click",function(e,t){e.control.doDeminimize({})}),e.hideButton&&e.frame.on(e.hideButton,"click",function(e,t){e.control.doHide({align:"CENTER_BOTTOM"})})},e.exports=o},function(e,t){var r=(o.prototype.setCallback=function(e){return this._timerMethod=e,this},o.prototype.setIntervalMillis=function(e){return this._timerInterval=e,this},o.prototype.stopTimer=function(){return this._isRunning=!1,this},o.prototype.startTimer=function(){var e=this;return 0<e._timerInterval&&(e._timerId=setTimeout(e._internalCallback,e._timerInterval),e._isRunning=!0),e},o);function o(){var e=this;e._timerId=null,e._isRunning=!1,e._timerInterval=0,e._internalCallback=function(){e._timerMethod&&e._timerMethod(e);e._isRunning&&(clearTimeout(e._timerId),e._timerId=setTimeout(e._internalCallback,e._timerInterval))},e._timerMethod=null}e.exports=r},function(e,t,r){r(10),e.exports.getStyle=function(C){return C.showTitleBar=!0,C.showCloseButton=!0,C.titleBarCaptionFontSize="11px",C.titleBarCaptionFontWeight="normal",C.titleBarCaptionLeftMargin=null,C.titleBarCaptionColorDefault="#4d494d",C.titleBarCaptionColorFocused="#4d494d",C.titleBarHeight="26px",C.titleBarColorDefault="#f4f4f4",C.titleBarColorFocused="#f4f4f4",C.titleBarBorderBottomDefault="1px solid #b1aeb1",C.titleBarBorderBottomFocused=C.titleBarBorderBottomDefault,C.frameBorderRadius="6px",C.frameBorderWidthDefault="1px",C.frameBorderWidthFocused="1px",C.frameBorderColorDefault="#acacac",C.frameBorderColorFocused="#acacac",C.frameBorderStyle="solid",C.frameBoxShadow="0px 0px 20px rgba(0, 0, 0, 0.3)",C.frameBackgroundColor="transparent",C.frameComponents=new Array,C.getTitleBarStyle=function(){return C.focusedFrameOnly?{titleBarClassNameDefault:"jsframe-preset-style-yosemite-focused",titleBarClassNameFocused:"jsframe-preset-style-yosemite-focused"}:{titleBarClassNameDefault:"jsframe-preset-style-yosemite-default",titleBarClassNameFocused:"jsframe-preset-style-yosemite-focused"}},C.onInitialize=function(){var e=C.getPartsBuilder(),t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADxJREFUeNpiYEACyhKiU0AYWYyJARX4QDFOBRiAEWokTJc0lH4KpbcQNIEBzZEPQJgkN7Cg8begKwAIMAC1EQhm4CX95QAAAABJRU5ErkJggg==",r="margin:0px;padding:0px;width:6px;height:6px",o=document.createElement("img");o.src=t,o.setAttribute("style",r);var n=document.createElement("img");n.src=t,n.setAttribute("style",r);var a=document.createElement("img");a.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAChJREFUeNpi/P//PwM+wMRAABBUwKIiKTYFSPvgkN9C0ARG2jsSIMAAWWAH8lrycVkAAAAASUVORK5CYII=",a.setAttribute("style",r);var i=document.createElement("img");i.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFdJREFUeNpi/P//PwNeAFKgLCF6AIjnwMRAbJAYSI4FKnYHiJOBgjA1yUA8F24Ckq7/UDwHJsfEQACwwHSjGIuwLgXmBhWQ5N0Xr1OgGmBiDIyEvAkQYAB60iRIRtfWzQAAAABJRU5ErkJggg==",i.setAttribute("style",r);var l=document.createElement("img");l.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABBJREFUeNpi+P//PwNAgAEACPwC/tuiTRYAAAAASUVORK5CYII=",l.setAttribute("style","margin:0px;padding:0px;width:6px;height:6px");var s=e.buildTextButtonAppearance();s.size=8,s.borderRadius=4,s.borderWidth=1,s.borderColorDefault="#c6c6c6",s.borderColorFocused="#fc615c",s.borderColorHovered=s.borderColorFocused,s.borderColorPressed="#e64842",s.borderStyleDefault="solid",s.borderStyleFocused=s.borderStyleDefault,s.borderStyleHovered=s.borderStyleDefault,s.borderStylePressed=s.borderStyleDefault,s.backgroundColorDefault="#d0d0d0",s.backgroundColorFocused="#fc615c",s.backgroundColorHovered=s.backgroundColorFocused,s.backgroundColorPressed=s.backgroundColorDefault,s.imageDefault=l,s.imageHovered=i,s.imagePressed=i,s.imageFocused=l;var d=e.buildButton(s),u=8,p=-18,m="LEFT_TOP";C.addFrameComponent("closeButton",d,u,p,m);var c=e.buildTextButtonAppearance();c.size=8,c.borderRadius=4,c.borderWidth=1,c.borderColorDefault="#c6c6c6",c.borderColorFocused="#fdbe40",c.borderColorHovered=c.borderColorFocused,c.borderColorPressed="#e1a12d",c.borderStyleDefault="solid",c.borderStyleFocused=c.borderStyleDefault,c.borderStyleHovered=c.borderStyleDefault,c.borderStylePressed=c.borderStyleDefault,c.backgroundColorDefault="#d0d0d0",c.backgroundColorFocused="#fdbe40",c.backgroundColorHovered=c.backgroundColorFocused,c.backgroundColorPressed=c.backgroundColorDefault,c.imageDefault=l,c.imageHovered=a,c.imagePressed=a,c.imageFocused=l;var h=e.buildButton(c),f=e.buildButton(c);f.style.display="none";u=24,p=-18,m="LEFT_TOP";C.addFrameComponent("minimizeButton",h,u,p,m),C.addFrameComponent("deminimizeButton",f,u,p,m);var y=e.buildTextButtonAppearance();y.size=8,y.borderRadius=4,y.borderWidth=1,y.borderColorDefault="#c6c6c6",y.borderColorFocused="#34ca49",y.borderColorHovered=y.borderColorFocused,y.borderColorPressed="#00af38",y.borderStyleDefault="solid",y.borderStyleFocused=y.borderStyleDefault,y.borderStyleHovered=y.borderStyleDefault,y.borderStylePressed=y.borderStyleDefault,y.backgroundColorDefault="#d0d0d0",y.backgroundColorFocused="#34ca49",y.backgroundColorHovered=y.backgroundColorFocused,y.backgroundColorPressed=y.backgroundColorDefault,y.caption=null,y.imageDefault=l,y.imageHovered=o,y.imagePressed=o,y.imageFocused=l;var b=e.buildButton(y),g=e.buildButton(y);g.style.display="none";u=40,p=-18,m="LEFT_TOP";C.addFrameComponent("zoomButton",b,u,p,m),C.addFrameComponent("dezoomButton",g,u,p,m)},C}},function(e,t,r){var o=r(11);"string"==typeof o&&(o=[[e.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(1)(o,n);o.locals&&(e.exports=o.locals)},function(e,t,r){(e.exports=r(0)(!1)).push([e.i,"/**\r\n * JSFrame Examples\r\n *\r\n * Copyright 2007-2017 Tom Misawa, riversun.org@gmail.com\r\n * Copyright 2007-2017 web2driver.com*/\r\n\r\n.jsframe-preset-style-yosemite-default {\r\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #f5f5f5, color-stop(1.0, #f8f7f2)));\r\n    background: -webkit-linear-gradient(top, #f5f5f5, #f8f7f2);\r\n    background: -moz-linear-gradient(top, #f5f5f5, #f8f7f2);\r\n    background: linear-gradient(top, #f5f5f5, #f8f7f2);\r\n    border-top-left-radius: 6px;\r\n    border-top-right-radius: 6px;\r\n}\r\n\r\n.jsframe-preset-style-yosemite-focused {\r\n    /* (c)2015 Johannes Jakob\r\n       Made with <3 in Germany */\r\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #ebebeb, color-stop(1.0, #d5d5d5)));\r\n    background: -webkit-linear-gradient(top, #ebebeb, #d5d5d5);\r\n    background: -moz-linear-gradient(top, #ebebeb, #d5d5d5);\r\n    background: linear-gradient(top, #ebebeb, #d5d5d5);\r\n    border-top-left-radius: 6px;\r\n    border-top-right-radius: 6px;\r\n}\r\n",""])},function(e,t,r){r(13),e.exports.getStyle=function(h){return h.showTitleBar=!0,h.showCloseButton=!0,h.titleBarCaptionFontSize="12px",h.titleBarCaptionFontWeight="normal",h.titleBarCaptionLeftMargin="10px",h.titleBarCaptionColorDefault="#9b9a9b",h.titleBarCaptionColorFocused="#4d494d",h.titleBarHeight="30px",h.titleBarColorDefault="white",h.titleBarColorFocused="white",h.titleBarBorderBottomDefault="solid 1px #aaaaaa",h.titleBarBorderBottomFocused="solid 1px #1883d7",h.frameBorderRadius="0px",h.frameBorderWidthDefault="1px",h.frameBorderWidthFocused="1px",h.frameBorderColorDefault="#aaaaaa",h.frameBorderColorFocused="#1883d7",h.frameBorderStyle="solid",h.frameBoxShadow=null,h.frameBackgroundColor="transparent",h.frameComponents=new Array,h.frameHeightAdjust=0,h.getTitleBarStyle=function(){return h.focusedFrameOnly?{titleBarClassNameDefault:"jsframe-preset-style-redstone-focused",titleBarClassNameFocused:"jsframe-preset-style-redstone-focused"}:{titleBarClassNameDefault:"jsframe-preset-style-redstone-default",titleBarClassNameFocused:"jsframe-preset-style-redstone-focused"}},h.onInitialize=function(){var e=h.getPartsBuilder(),t=e.buildTextButtonAppearance();t.width=45,t.height=28,t.borderRadius=0,t.borderWidth=0,t.borderColorDefault="#c6c6c6",t.borderColorFocused="#fc615c",t.borderColorHovered=t.borderColorFocused,t.borderColorPressed="#e64842",t.borderStyleDefault="solid",t.borderStyleFocused=t.borderStyleDefault,t.borderStyleHovered=t.borderStyleDefault,t.borderStylePressed=t.borderStyleDefault,t.backgroundColorDefault="white",t.backgroundColorFocused="white",t.backgroundColorHovered="#e81123",t.backgroundColorPressed="#f1707a",t.caption="╳",t.captionColorDefault="#9b9a9b",t.captionColorFocused="black",t.captionColorHovered="white",t.captionColorPressed="white",t.captionShiftYpx=1,t.captionFontRatio=.6;var r=e.buildTextButton(t),o=0,n=-parseInt(h.titleBarHeight),a="RIGHT_TOP";h.addFrameComponent("closeButton",r,o,n,a);var i=e.buildTextButtonAppearance();i.width=45,i.height=28,i.borderRadius=0,i.borderWidth=0,i.borderColorDefault="#c6c6c6",i.borderColorFocused="#fc615c",i.borderColorHovered=i.borderColorFocused,i.borderColorPressed="#e64842",i.borderStyleDefault="solid",i.borderStyleFocused=i.borderStyleDefault,i.borderStyleHovered=i.borderStyleDefault,i.borderStylePressed=i.borderStyleDefault,i.backgroundColorDefault="white",i.backgroundColorFocused="white",i.backgroundColorHovered="#e5e5e5",i.backgroundColorPressed="#cccccc",i.caption="☐",i.captionColorDefault="#9b9a9b",i.captionColorFocused="black",i.captionColorHovered="black",i.captionColorPressed="black",i.captionShiftYpx=1,i.captionFontRatio=.55;var l=e.buildTextButton(i);o=-46,n=-parseInt(h.titleBarHeight),a="RIGHT_TOP";h.addFrameComponent("maximizeButton",l,o,n,a);var s=e.buildTextButtonAppearance();s.width=45,s.height=28,s.borderRadius=0,s.borderWidth=0,s.borderColorDefault="#c6c6c6",s.borderColorFocused="#fc615c",s.borderColorHovered=s.borderColorFocused,s.borderColorPressed="#e64842",s.borderStyleDefault="solid",s.borderStyleFocused=s.borderStyleDefault,s.borderStyleHovered=s.borderStyleDefault,s.borderStylePressed=s.borderStyleDefault,s.backgroundColorDefault="white",s.backgroundColorFocused="white",s.backgroundColorHovered="#e5e5e5",s.backgroundColorPressed="#cccccc",s.caption="＿",s.captionColorDefault="#9b9a9b",s.captionColorFocused="black",s.captionColorHovered="black",s.captionColorPressed="black",s.captionShiftYpx=-2,s.captionFontRatio=.3;var d=e.buildTextButton(s);o=-92,n=-parseInt(h.titleBarHeight),a="RIGHT_TOP";h.addFrameComponent("minimizeButton",d,o,n,a);var u=e.buildTextButtonAppearance();u.width=45,u.height=28,u.borderRadius=0,u.borderWidth=0,u.borderColorDefault="#c6c6c6",u.borderColorFocused="#fc615c",u.borderColorHovered=u.borderColorFocused,u.borderColorPressed="#e64842",u.borderStyleDefault="solid",u.borderStyleFocused=u.borderStyleDefault,u.borderStyleHovered=u.borderStyleDefault,u.borderStylePressed=u.borderStyleDefault,u.backgroundColorDefault="white",u.backgroundColorFocused="white",u.backgroundColorHovered="#e5e5e5",u.backgroundColorPressed="#cccccc",u.caption="▣",u.captionColorDefault="#9b9a9b",u.captionColorFocused="black",u.captionColorHovered="black",u.captionColorPressed="black",u.captionShiftYpx=1,u.captionFontRatio=.6;var p=e.buildTextButton(u);o=-92,n=-parseInt(h.titleBarHeight),a="RIGHT_TOP";p.style.display="none",h.addFrameComponent("deminimizeButton",p,o,n,a);var m=e.buildTextButtonAppearance();m.width=45,m.height=28,m.borderRadius=0,m.borderWidth=0,m.borderColorDefault="#c6c6c6",m.borderColorFocused="#fc615c",m.borderColorHovered=m.borderColorFocused,m.borderColorPressed="#e64842",m.borderStyleDefault="solid",m.borderStyleFocused=m.borderStyleDefault,m.borderStyleHovered=m.borderStyleDefault,m.borderStylePressed=m.borderStyleDefault,m.backgroundColorDefault="white",m.backgroundColorFocused="white",m.backgroundColorHovered="#e5e5e5",m.backgroundColorPressed="#cccccc",m.caption="❏",m.captionColorDefault="#9b9a9b",m.captionColorFocused="black",m.captionColorHovered="black",m.captionColorPressed="black",m.captionShiftYpx=1,m.captionFontRatio=.55;var c=e.buildTextButton(m);o=-46,n=-parseInt(h.titleBarHeight),a="RIGHT_TOP";c.style.display="none",h.addFrameComponent("restoreButton",c,o,n,a)},h}},function(e,t,r){var o=r(14);"string"==typeof o&&(o=[[e.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(1)(o,n);o.locals&&(e.exports=o.locals)},function(e,t,r){(e.exports=r(0)(!1)).push([e.i,".jsframe-preset-style-redstone-default {\r\n    background: white;\r\n    border-top-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n}\r\n\r\n.jsframe-preset-style-redstone-focused {\r\n    background: white;\r\n    border-top-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n}\r\n",""])},function(e,t,r){r(16),e.exports.getStyle=function(n){return n.showTitleBar=!1,n.showCloseButton=!0,n.titleBarCaptionFontSize="12px",n.titleBarCaptionFontWeight="normal",n.titleBarCaptionLeftMargin="10px",n.titleBarCaptionColorDefault="#4d494d",n.titleBarCaptionColorFocused="#4d494d",n.titleBarHeight="5px",n.titleBarColorDefault="white",n.titleBarColorFocused="white",n.titleBarBorderBottomDefault=null,n.titleBarBorderBottomFocused=null,n.frameBorderRadius="6px",n.frameBorderWidthDefault="1px",n.frameBorderWidthFocused="1px",n.frameBorderColorDefault="#aaaaaa",n.frameBorderColorFocused="#aaaaaa",n.frameBorderStyle="solid",n.frameBoxShadow="2px 2px 5px  rgba(0, 0, 0, 0.5)",n.frameBackgroundColor="white",n.frameComponents=new Array,n.frameHeightAdjust=2,n.getTitleBarStyle=function(){return n.focusedFrameOnly?{titleBarClassNameDefault:"jsframe-preset-style-popup-focused",titleBarClassNameFocused:"jsframe-preset-style-popup-focused"}:{titleBarClassNameDefault:"jsframe-preset-style-popup-default",titleBarClassNameFocused:"jsframe-preset-style-popup-focused"}},n.onInitialize=function(){var e=n.getPartsBuilder(),t=e.buildTextButtonAppearance();t.width=20,t.height=20,t.borderRadius=10,t.borderWidth=1,t.borderColorDefault="#cccccc",t.borderColorFocused="#cccccc",t.borderColorHovered="#dddddd",t.borderColorPressed="#eeeeee",t.borderStyleDefault="solid",t.borderStyleFocused=t.borderStyleDefault,t.borderStyleHovered=t.borderStyleDefault,t.borderStylePressed=t.borderStyleDefault,t.backgroundColorDefault="white",t.backgroundColorFocused="white",t.backgroundColorHovered="#eeeeee",t.backgroundColorPressed="#dddddd",t.backgroundBoxShadow="2px 2px 5px  rgba(0, 0, 0, 0.5)",t.caption="✖",t.captionColorDefault="black",t.captionColorFocused="black",t.captionColorHovered="white",t.captionColorPressed="white",t.captionShiftYpx=1,t.captionFontRatio=.6;var r=e.buildTextButton(t),o=-6-parseInt(n.titleBarHeight);n.addFrameComponent("closeButton",r,10,o,"RIGHT_TOP")},n}},function(e,t,r){var o=r(17);"string"==typeof o&&(o=[[e.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(1)(o,n);o.locals&&(e.exports=o.locals)},function(e,t,r){(e.exports=r(0)(!1)).push([e.i,".jsframe-preset-style-popup-default {\r\n    background: white;\r\n    border-top-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n}\r\n\r\n.jsframe-preset-style-popup-focused {\r\n    background: white;\r\n    border-top-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n}\r\n",""])},function(e,t){e.exports.getStyle=function(o){return o.showTitleBar=!1,o.showCloseButton=!0,o.titleBarCaptionFontSize="0px",o.titleBarCaptionFontWeight="normal",o.titleBarCaptionLeftMargin="0px",o.titleBarCaptionColorDefault="transparent",o.titleBarCaptionColorFocused="transparent",o.titleBarHeight="0px",o.titleBarColorDefault="transparent",o.titleBarColorFocused="transparent",o.titleBarBorderBottomDefault=null,o.titleBarBorderBottomFocused=null,o.frameBorderRadius="10px",o.frameBorderWidthDefault="0px",o.frameBorderWidthFocused="0px",o.frameBorderColorDefault="transparent",o.frameBorderColorFocused="transparent",o.frameBorderStyle="solid",o.frameBoxShadow="2px 2px 15px  rgba(0, 0, 0, 0.5)",o.frameBackgroundColor="transparent",o.frameComponents=[],o.frameHeightAdjust=2,o.captionClor="darkgray",o.pullUpDisabled=!1,o.getTitleBarStyle=function(){return o.focusedFrameOnly,{titleBarClassNameDefault:" ",titleBarClassNameFocused:" "}},o.onInitialize=function(){var e=o.getPartsBuilder(),t=e.buildTextButtonAppearance();t.width=20,t.height=20,t.borderRadius=10,t.borderWidth=0,t.borderColorDefault="#cccccc",t.borderColorFocused="#cccccc",t.borderColorHovered="#dddddd",t.borderColorPressed="#eeeeee",t.borderStyleDefault="solid",t.borderStyleFocused=t.borderStyleDefault,t.borderStyleHovered=t.borderStyleDefault,t.borderStylePressed=t.borderStyleDefault,t.backgroundColorDefault="transparent",t.backgroundColorFocused="transparent",t.backgroundColorHovered="transparent",t.backgroundColorPressed="transparent",t.backgroundBoxShadow=null,t.caption="✖",t.captionColorDefault=o.captionClor,t.captionColorFocused=o.captionClor,t.captionColorHovered=o.captionClor,t.captionColorPressed=o.captionClor,t.captionShiftYpx=1,t.captionFontRatio=.6;var r=e.buildTextButton(t);o.addFrameComponent("closeButton",r,-6,3,"RIGHT_TOP")},o}},function(e,t,r){r(20);var n=r(22);function a(e,t,r){var o,n=e.getPartsBuilder(),a=0;for(var i in o=r?t.titleBar.buttonsOnLeft:t.titleBar.buttons){var l=o[i],s=n.buildTextButtonAppearance();s.fa=l.fa,s.width=t.titleBar.buttonWidth,s.height=t.titleBar.buttonHeight,s.borderRadius=0,s.borderWidth=0,s.borderColorDefault="#c6c6c6",s.borderColorFocused="#fc615c",s.borderColorHovered=s.borderColorFocused,s.borderColorPressed="#e64842",s.borderStyleDefault="solid",s.borderStyleFocused=s.borderStyleDefault,s.borderStyleHovered=s.borderStyleDefault,s.borderStylePressed=s.borderStyleDefault,s.backgroundColorDefault="transparent",s.backgroundColorFocused="transparent",s.backgroundColorHovered="transparent",s.backgroundColorPressed="transparent";var d=y(t.titleBar.buttonColor);s.captionColorDefault=t.titleBar.buttonColor,s.captionColorFocused=t.titleBar.buttonColor,s.captionColorHovered=d.hovered,s.captionColorPressed=d.pressed,s.captionShiftYpx=0,s.captionFontRatio=1;var u=n.buildTextButton(s);l.visible?u.style.display="flex":(r?a-=t.titleBar.buttonWidth:a+=t.titleBar.buttonWidth,u.style.display="none");var p,m,c=parseInt(e.titleBarHeight),h=a,f=-c+(c-s.height)/2;p=r?"LEFT_TOP":"RIGHT_TOP",l.childMenuHTML&&((m=document.createElement("div")).id=l.name+"_child_menu",m.innerHTML=l.childMenuHTML,m.style.position="absolute",m.style.width=(l.childMenuWidth?l.childMenuWidth:200)+"px",m.style.top=parseInt(u.style.top,10)+parseInt(u.style.height,10)/2+c/2+"px",m.style.left=u.style.left,m.style.display="none",u.appendChild(m)),e.addFrameComponent(l.name,u,h,f,p,{childMenu:m}),a+=r?t.titleBar.buttonWidth:-t.titleBar.buttonWidth}}function y(e){var t=document.createElement("canvas");t.height=1,t.width=1;var r=t.getContext("2d");r.fillStyle=e,r.fillRect(0,0,1,1);var o=r.getImageData(0,0,1,1).data,n=o[0],a=o[1],i=o[2],l=o[3]/255,s=.85*l;return{src:"rgb("+n+","+a+","+i+","+s+")",hovered:"rgb("+n+","+a+","+i+","+s+")",pressed:"rgb("+n+","+a+","+i+","+.75*l+")"}}e.exports.getStyle=function(e,t){var r={border:{color:"transparent",width:0,radius:6},control:{maximizeWithoutTitleBar:!1,restoreKey:"Escape"},titleBar:{color:"white",background:"black",leftMargin:20,height:30,fontSize:12,buttonWidth:36,buttonHeight:16,buttonColor:"white",buttons:[{fa:"fas fa-times",name:"closeButton",visible:!0},{fa:"far fa-window-maximize",name:"maximizeButton",visible:!0},{fa:"far fa-window-restore",name:"restoreButton",visible:!1},{fa:"far fa-window-minimize",name:"minimizeButton",visible:!0},{fa:"fas fa-caret-up",name:"deminimizeButton",visible:!1}],buttonsOnLeft:[]}},o=r;return t&&n.objectAssign(r,t),e.showTitleBar=!0,e.showCloseButton=!0,e.titleBarCaptionFontSize=o.titleBar.fontSize+"px",e.titleBarCaptionFontWeight="normal",e.titleBarCaptionLeftMargin=o.titleBar.leftMargin+"px",e.titleBarCaptionColorDefault=o.titleBar.color,e.titleBarCaptionColorFocused=o.titleBar.color,e.titleBarCaptionTextShadow=null,e.titleBarCaptionTextAlign="left",e.titleBarHeight=o.titleBar.height+"px",e.titleBarColorDefault=o.titleBar.background,e.titleBarColorFocused=o.titleBar.background,e.titleBarBorderBottomDefault="solid 0px #aaaaaa",e.titleBarBorderBottomFocused="solid 0px #1883d7",e.frameBorderRadius=o.border.radius+"px",e.frameBorderWidthDefault=o.border.width+"px",e.frameBorderWidthFocused=o.border.width+"px",e.frameBorderColorDefault=o.border.color,e.frameBorderColorFocused=o.border.color,e.frameBorderStyle="solid",e.frameBoxShadow=o.border.shadow,e.frameBackgroundColor="transparent",e.frameComponents=new Array,e.frameHeightAdjust=0,e.getTitleBarStyle=function(){return e.focusedFrameOnly,{titleBarClassNameDefault:" ",titleBarClassNameFocused:" "}},e.onInitialize=function(){a(e,o,!1),a(e,o,!0)},e}},function(e,t,r){var o=r(21);"string"==typeof o&&(o=[[e.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(1)(o,n);o.locals&&(e.exports=o.locals)},function(e,t,r){(e.exports=r(0)(!1)).push([e.i,".jsframe-preset-style-material-default {\r\n    background: black;\r\n    border-top-left-radius: 6px;\r\n    border-top-right-radius: 6px;\r\n}\r\n\r\n.jsframe-preset-style-material-focused {\r\n    background: black;\r\n    border-top-left-radius: 36px;\r\n    border-top-right-radius: 36px;\r\n}\r\n",""])},function(e,t){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){return e&&"object"===(void 0===e?"undefined":r(e))&&!Array.isArray(e)}e.exports.objectAssign=function e(t){for(var r=arguments.length,o=Array(1<r?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];if(!o.length)return t;var a=o.shift();if(s(t)&&s(a))for(var i in a)s(a[i])?(t[i]||Object.assign(t,l({},i,{})),e(t[i],a[i])):Object.assign(t,l({},i,a[i]));return e.apply(void 0,[t].concat(o))}},function(e,t,r){"use strict";r.r(t),r(4);var o=r(7),E=r(3),n=r(2),a={yosemite:r(9),redstone:r(12),popup:r(15),toast:r(18),material:r(19)},x={};function i(){var o=this;this.showTitleBar=!0,this.showCloseButton=!0,this.titleBarCaption="",this.titleBarCaptionFontSize="12px",this.titleBarCaptionFontWeight="bold",this.titleBarHeight="24px",this.useIframe=!1,this.useFrame=!0,this.setUseIFrame=function(e){return o.useIframe=e,o.useFrame=!e,o},this.titleBarCaptionLeftMargin="5px",this.titleBarColorDefault="lightgray",this.titleBarColorFocused="#d3e1ee",this.titleBarCaptionColorDefault="",this.titleBarCaptionColorFocused="",this.titleBarCaptionTextShadow="0 1px 0 rgba(255,255,255,.7)",this.titleBarCaptionTextAlign="center",this.titleBarBorderBottomDefault="1px solid rgba(0,0,0,0.2)",this.titleBarBorderBottomFocused=null,this.frameBorderRadius="6px",this.frameBorderWidthDefault="1px",this.frameBorderWidthFocused=this.frameBorderWidthDefault,this.frameBorderColorDefault="rgba(1, 1, 1, 0.2)",this.frameBorderColorFocused=this.frameBorderColorDefault,this.frameBorderStyle="solid",this.frameBoxShadow="2px 3px 16px rgba(0,0,0,.6)",this.frameBackgroundColor="transparent",this._partsBuilder=null,this.frameComponents=[],this.frameHeightAdjust=1,this.getFrameInnerBorderRadius=function(e,t){if(e)return t?parseInt(e.frameBorderRadius,10)-parseInt(e.frameBorderWidthFocused,10)+"px":parseInt(e.frameBorderRadius,10)-parseInt(e.frameBorderWidthDefault,10)+"px"},this.onInitialize=function(){if(o.showCloseButton){var e=o.getPartsBuilder(),t=e.buildTextButtonAppearance();t.size=14,t.captionShiftYpx=0,t.captionFontRatio=1,t.borderRadius=2,t.backgroundColorPressed="transparent",t.backgroundColorDefault="transparent",t.caption="✖",t.captionColorDefault="gray",t.captionColorFocused="gray",t.captionColorHovered="silver",t.captionColorPressed="black",t.borderWidth=0,t.borderColorDefault="#aaaaaa",t.borderStyle="solid";var r=e.buildTextButton(t);o.addFrameComponent("closeButton",r,-10,-18,"RIGHT_TOP")}},this.onTitleBarStyleInitialize=function(){}}function l(e,t){function r(){}r.prototype=t.prototype,e.prototype=new r,(e.prototype.constructor=e).superConstructor=t,e.superClass=t.prototype}function s(e,t,r,o,n,a,i,l){var s=this;s.movable=!0,s.id=e,s.property={},s.extra={},s.parentCanvas=null,s.htmlElement=null,s.pullUpDisabled=!1,l&&(s.pullUpDisabled=l.pullUpDisabled),s.htmlElement=document.createElement(x.CBEAN.HTML_ELEMENT),s.htmlElement.id=x.CBEAN.HTML_ELEMENT_ID_PREFIX+e,s.htmlElement.style.position="absolute",s.htmlElement.style.left=parseInt(t,10)+"px",s.htmlElement.style.top=parseInt(r,10)+"px",s.htmlElement.style.width=parseInt(o,10)+"px",s.htmlElement.style.height=parseInt(n,10)+"px",null!==a&&(s.htmlElement.style.zIndex=a),s.htmlElement.style.borderColor="#000000",s.htmlElement.style.fontSize="1px",(s.htmlElement.parent=s).htmlElement.onmousedown=s.onmouseDown,s.htmlElement.typeName=x.CBEAN.TYPE_NAME,s.htmlElement.usage="nothing",s.htmlElement.isRangeLimited=!1,s.htmlElement.argX=1,s.htmlElement.argY=1,s.externalAreaClickedListener=null}function w(e,t,r,o,n,a){var i=this;i.currentObject=null,i.onTopObject=null,i.offsetX=0,i.offsetY=0,i.mouseDownSource=null,i.id=t,i.canvasElement=null,i.parentElement=e,i.beanList=new Array,i.beanIdName={},i.beanNameId={},i.eventData=new function(){this.x=0,this.y=0,this.screenX=0,this.screenY=0,this.deltaX=0,this.deltaY=0,this.isMoved=!1,this.targetTypeName=null,this.targetUsage=null,this.targetObject=null},i.baseZIndex=0,i.setBaseZIndex=function(e){i.baseZIndex=e},i.getBaseZIndex=function(){return i.baseZIndex},i.canvasElement=document.createElement(x.CANVAS.HTML_ELEMENT),i.canvasElement.style.zIndex=2e3,i.canvasElement.id=i.id,i.canvasElement.style.boxSizing="border-box",i.canvasElement.style.position="absolute",i.canvasElement.style.left=parseInt(r)+"px",i.canvasElement.style.top=parseInt(o)+"px",i.canvasElement.style.width=parseInt(n)+x.CANVAS.WIDTH_ADJUST_20180722+"px",i.canvasElement.style.height=parseInt(a)+x.CANVAS.HEIGHT_ADJUST_20180722+"px",i.canvasElement.style.backgroundColor="transparent",i.canvasElement.style.borderStyle="none",i.canvasElement.style.margin="0px",i.canvasElement.style.borderWidth="0px",i.canvasElement.style.borderColor="transparent",i.parentElement.appendChild(i.canvasElement)}function F(e,t,r,o,n,a,i,l){var s=this;F.superConstructor.call(this,e,t,r,o,n,a,i,l),s.anchor=E.LEFT_TOP,s.showTitleBar=l.showTitleBar,s.canvasNetHeight=null,s.canvasNetWidth=null,s.frameHeightAdjust=l.frameHeightAdjust,s.frameComponentMap={},s.canvas=null,s.myCanvasId=null,s.floatingButton=null,s.titleBarClassNameDefault="jsframe-titlebar-default",s.titleBarClassNameFocused="jsframe-titlebar-focused",s.titleBarHeight=l.titleBarHeight,s.titleBarCaption=l.titleBarCaption,s.titleBarCaptionLeftMargin=l.titleBarCaptionLeftMargin,s.titleBarCaptionFontSize=l.titleBarCaptionFontSize,s.titleBarCaptionFontWeight=l.titleBarCaptionFontWeight,s.titleBarBorderBottomDefault=l.titleBarBorderBottomDefault,s.titleBarBorderBottomFocused=l.titleBarBorderBottomFocused,s.titleBarCaptionTextShadow=l.titleBarCaptionTextShadow,s.titleBarCaptionTextAlign=l.titleBarCaptionTextAlign,s.titleAdjustWidth=2,s.windowId=e,s.exBorderWidth=0,s.myCanvasId=e+"_canvas";var d=document.createElement("img");if(d.src="",d.style.position="absolute",d.style.left="2px",d.style.top="2px",d.style.width="16px",d.style.height="16px",d.style.visibility="hidden",s.titleBar=document.createElement("div"),s.titleBar.className="jsframetitlebar",s.showTitleBar){if(s.titleBar.id=e+"_title",s.titleBar.style.position="absolute",s.titleBar.style.boxSizing="border-box",s.titleBar.style.top="0px",s.titleBar.style.left="0px",s.titleBar.style.width=o-s.titleAdjustWidth+x.CANVAS.WIDTH_ADJUST_20180722+"px",s.titleBar.style.userSelect="none",s.titleBarHeight){var u=0;s.titleBarBorderBottomDefault&&(u=0),s.titleBar.style.height=parseInt(s.titleBarHeight,10)+0+"px"}s.titleBar.style.backgroundColor=s.titleBarColorDefault,s.titleBar.style.zIndex=0,s.titleBar.style.color=s.titleBarCaptionColorDefault,s.titleBar.style.fontSize=s.titleBarCaptionFontSize,s.titleBar.style.fontWeight=s.titleBarCaptionFontWeight,s.titleBar.style.textShadow=s.titleBarCaptionTextShadow,s.titleBar.style.textAlign=s.titleBarCaptionTextAlign,s.titleBar.style.lineHeight=s.titleBar.style.height,s.titleBar.style.borderBottom=s.titleBarBorderBottomDefault,s.titleBar.style.overflow="hidden";var p=document.createTextNode(""),m=document.createElement("span");m.id=s.id+"_titleBarText",null!=s.titleBarCaptionLeftMargin?(m.style.position="absolute",m.style.left=parseInt(s.titleBarCaptionLeftMargin,10)+"px"):(m.style.position="absolute",m.style.left="0px",m.style.right="0px"),m.style.top="0px",m.appendChild(p),s.titleBar.appendChild(m)}s.htmlElement.appendChild(s.titleBar);var c=parseInt(s.titleBarHeight,10)-u,h=parseInt(s.titleAdjustWidth,10);s.showTitleBar||(u=h=c=0),s.canvasNetWidth=o-h,s.canvasNetHeight=n-c-h-1-u+s.frameHeightAdjust,s.htmlElement.style.cursor="move",s.canvas=new w(s.htmlElement,s.myCanvasId,0,c,o-h,n-c-h),s.canvas.canvasElement.style.backgroundColor=x.CFRAME.CANVAS_ELEMENT_BGCOLOR,s.canvas.canvasElement.style.cursor="default",s.canvas.canvasElement.onmousedown=s.canvasMouseDown,s.canvas.canvasElement.parentCFrame=s;var f=parseInt(s.canvas.canvasElement.style.width,10),y=parseInt(s.canvas.canvasElement.style.height,10),b=new T(s.myCanvasId+"_RD",f-16+16,y-16+16,16,16,0,"RD");b.htmlElement.style.cursor="se-resize",b.htmlElement.argX=0,b.htmlElement.argY=0;var g=new T(s.myCanvasId+"_DD",0,y-16+16,f-16+16,16,0,"DD");g.htmlElement.style.cursor="n-resize",g.htmlElement.argX=0,g.htmlElement.argY=0;var C=new T(s.myCanvasId+"_RR",f-16+16,0,16,y-16+16,0,"RR");for(var v in C.htmlElement.style.cursor="w-resize",C.htmlElement.argY=0,C.htmlElement.argX=0,s.canvas.addBean(b),s.canvas.addBean(g),s.canvas.addBean(C),s.removeMarkers=function(){s.canvas.removeBean(b.id),s.canvas.removeBean(g.id),s.canvas.removeBean(C.id),s.htmlElement.style.cursor="default"},s.removeMarkers2=function(){s.canvas.removeBean(b.id),s.canvas.removeBean(g.id),s.canvas.removeBean(C.id)},s.enableMarkers=function(e){e?(b.htmlElement.style.display="flex",g.htmlElement.style.display="flex",C.htmlElement.style.display="flex",b.htmlElement.style.cursor="se-resize",g.htmlElement.style.cursor="n-resize",C.htmlElement.style.cursor="w-resize"):(b.htmlElement.style.display="none",g.htmlElement.style.display="none",C.htmlElement.style.display="none")},l.frameComponents){var B=l.frameComponents[v];B.setFrame(s),"closeButton"==B.id&&(B.htmlElement.onclick=s.close),s.addFrameComponent(B)}s.htmlElement.style.backgroundColor="transparent",s.htmlElement.oncontextmenu=this.contextMenu;s.caribValue=0,s.htmlElement.style.borderWidth=s.exBorderWidth+"px",s.htmlElement.style.width=parseInt(s.htmlElement.style.width,10)-0+"px",s.htmlElement.style.height=parseInt(s.htmlElement.style.height,10)-0+1+"px",s.htmlElement.typeName="cwindow",s.htmlElement.overflow="auto",s.htmlElement.style.boxSizing="content-box",l.frameBorderStyle&&(s.htmlElement.style.borderStyle=l.frameBorderStyle),l.frameBoxShadow&&(s.htmlElement.style.boxShadow=l.frameBoxShadow),0<parseInt(l.frameBorderWidthDefault,10)&&(s.htmlElement.style.borderWidth=l.frameBorderWidthDefault,s.htmlElement.style.borderColor=l.frameBorderColorDefault),0<parseInt(l.frameBorderRadius,10)&&(s.htmlElement.style.borderRadius=l.frameBorderRadius),s.onCloseFrameListener=null}function c(e,t,r,o,n,a){var i=t,l=r,s=o,d=n,u=a.zindex,p=this;this.jsFrame=null,this.control=null,this.minFrameWidth=128,this.minWindowHeight=32,this.overrayTransparentScreenEnabled=!1,this.overrayTransparentScreenOnResize=!0,this.titleBarColorFocused=a.titleBarColorFocused,this.titleBarColorDefault=a.titleBarColorDefault,this.titleBarCaptionColorDefault=a.titleBarCaptionColorDefault,this.titleBarCaptionColorFocused=a.titleBarCaptionColorFocused,c.superConstructor.call(p,e,i,l,s,d,u,null,a),p.frameBorderColorDefault=a.frameBorderColorDefault,p.frameBorderColorFocused=a.frameBorderColorFocused,p.frameBorderWidthDefault=a.frameBorderWidthDefault,p.frameBorderWidthFocused=a.frameBorderWidthFocused,p.iframe=null,p.ifDelta=0,p.resizable=!0,p.onMouseMoveOnIframe=null,p.onMouseUpOnIframe=null,p._hasFocus=!1,p._hasFocusTime=0,p.htmlElement.typeName="cifwindow";var m="riversun_"+e;p.dframe=document.createElement("div"),p.iframe=document.createElement("iframe"),p.iframe.name=m,p.iframe.id=m,p.iframe.frameBorder="0",p.iframe.zIndex=-1,p.iframe.allowTransparency="true",p.iframe.width=p.canvasNetWidth-p.ifDelta+0,p.iframe.height=p.canvasNetHeight-p.ifDelta+0,p.showTitleBar=a.showTitleBar,p.getFrameInnerBorderRadius=a.getFrameInnerBorderRadius,p.frameBorderRadius=a.frameBorderRadius,p.adjustFrameBorderRadius(),p.useIframe=!1,p.canvas.canvasElement.appendChild(p.iframe),p.canvas.canvasElement.appendChild(p.dframe),this.setUseIframe=function(e){p.useIframe=e,p.iframe.style.visibility="hidden",p.iframe.style.position="absolute",p.iframe.style.left="0px",p.iframe.style.top="0px",p.iframe.style.width="100%",p.iframe.style.height="100%",p.dframe.style.visibility="hidden",p.dframe.style.position="absolute",p.dframe.style.left="0px",p.dframe.style.boxSizing="content-box",p.dframe.style.top="0px",p.dframe.style.width="100%",p.dframe.style.height="100%",p.dframe.style.backgroundColor="white",e?(p.iframe.style.visibility="visible",p.dframe.style.visibility="hidden"):(p.iframe.style.visibility="hidden",p.dframe.style.visibility="visible")},p.setUseIframe(a.useIframe),(p.overrayTransparentScreenEnabled||p.overrayTransparentScreenOnResize)&&(p.transparence=document.createElement("span"),p.transparence.style.position="absolute",p.transparence.style.left="0px",p.transparence.style.top="0px",p.transparence.style.width="0px",p.transparence.style.height="0px",p.transparence.style.zIndex=4,p.transparence.style.borderWidth="0px",p.transparence.style.borderColor="#ff00ee",p.transparence.style.borderStyle="none",p.transparence.style.cursor="default",p.transparence.style.pointerEvents="none",p.canvas.canvasElement.style.backgroundColor=a.frameBackgroundColor,p.canvas.canvasElement.appendChild(p.transparence))}function d(e,t,r,o,n,a){d.superConstructor.call(this,e,t,r,o,n,a);var i=this;document.body.addEventListener("click",function(e){for(var t in i.beanList){i.beanList[t].onBodyClicked(e)}})}function T(e,t,r,o,n,a,i){var l=this;T.superConstructor.call(this,e,t,r,o,n,a,i),l.htmlElement.typeName="cmarkerwindow",l.htmlElement.usage=i,l.htmlElement.isRangeLimited=!1,l.htmlElement.style.borderStyle="none",l.htmlElement.style.zIndex=1}function u(e){var t=this,r=null,o=!0;if(e&&0==e.fixed&&(o=!1),e&&e.parentElement&&(r=e.parentElement),t.hAlign="left",t.vAlign="top",e&&e.horizontalAlign&&(t.hAlign=e.horizontalAlign),e&&e.verticalAlign&&(t.vAlign=e.verticalAlign),!r&&o){var n=document.createElement("div");n.id="jsFrame_fixed_"+t.generateUUID(),n.setAttribute("style","position:fixed;"+t.hAlign+":0px;"+t.vAlign+":0px;margin:0px;padding:0px;"),document.body.appendChild(n),r=n}else r=document.body;document.onmouseup=function(e){t.windowManager.windowMouseUp(e)},document.onmousemove=function(e){t.windowManager.windowMouseMove(e);e.pageX,e.pageY},t.windowManager=new d(r,"windowManager_"+t.generateUUID(),0,0,0,0),t.domPartsBuilder=null}function p(e,t,r,o,n,a){var i=this;i.id=e,i.x=r,i.y=o,i.frame=null,i._focusTakingCallabck=null,i._focusReleasingCallabck=null,i.frameComponentAlign=n||E.LEFT_TOP,i.htmlElement=t,i.htmlElement.style.zIndex=50,a&&a.childMenu&&(i.childMenu=a.childMenu)}function m(){}function h(){this.size=14,this.width=null,this.height=null,this.borderRadius=2,this.borderWidth=0,this.borderColorDefault="#aaaaaa",this.borderColorFocused=this.borderColorDefault,this.borderColorHovered=null,this.borderColorPressed=this.borderColorDefault,this.borderStyleDefault="solid",this.borderStyleFocused=this.borderStyleDefault,this.borderStyleHovered=null,this.borderStylePressed=this.borderStyleDefault,this.backgroundBoxShadow=null,this.backgroundColorDefault="transparent",this.backgroundColorFocused=this.backgroundColorDefault,this.backgroundColorHovered=null,this.backgroundColorPressed=this.backgroundColorDefault,this.caption=null,this.captionColorDefault="white",this.captionColorFocused=this.captionColorDefault,this.captionColorHovered=null,this.captionColorPressed=this.captionColorDefault,this.captionShiftYpx=0,this.captionFontRatio=1}i.prototype.getPartsBuilder=function(){return null===this._partsBuilder&&(this._partsBuilder=new m),this._partsBuilder},i.prototype.initialize=function(){this.onInitialize()},i.prototype.addFrameComponent=function(e,t,r,o,n,a){var i=new p(e,t,r,o,n,a);return t._onTakeFocus&&t._onReleaseFocus&&i.setFocusCallback(t._onTakeFocus,t._onReleaseFocus),this.frameComponents.push(i),i},x.CBEAN={},x.CBEAN.HTML_ELEMENT="span",x.CBEAN.HTML_ELEMENT_ID_PREFIX="htmlElement_",x.CBEAN.TYPE_NAME="bean",s.prototype.setMovable=function(e){var t=this;return e?(t.htmlElement.argX=1,t.htmlElement.argY=1):(t.htmlElement.argX=0,t.htmlElement.argY=0),t.movable=e,t},s.prototype.setParentCanvas=function(e){this.parentCanvas=e,this.htmlElement.parentCanvas=this.parentCanvas},s.prototype.setOnExternalAreaClickedListener=function(e){this.externalAreaClickedListener=e},s.prototype.onBodyClicked=function(e){var t=this,r=e.pageX,o=e.pageY,n=parseInt(t.htmlElement.style.left),a=parseInt(t.htmlElement.style.top),i=parseInt(t.htmlElement.style.width),l=parseInt(t.htmlElement.style.height);n<r&&r<n+i&&a<o&&o<a+l||t.externalAreaClickedListener&&t.externalAreaClickedListener()},s.prototype.onmouseDown=function(e){var t=this,r=t.parent;if(0==e.button){if(r.pullUpDisabled)return!1;(t.parentCanvas.currentObject=t).parentCanvas.pullUp(r.id)}else if(2==e.button)return!1;return t.parentCanvas.currentObject&&(t.parentCanvas.offsetX=e.pageX-parseInt(t.parentCanvas.currentObject.style.left,10),t.parentCanvas.offsetY=e.pageY-parseInt(t.parentCanvas.currentObject.style.top,10)),!1},x.CANVAS={},x.CANVAS.HTML_ELEMENT="div",x.CANVAS.WIDTH_ADJUST_20180722=2,x.CANVAS.HEIGHT_ADJUST_20180722=3,w.prototype.mouseMove=function(e){var t=this;if(t.currentObject){t.eventData.targetTypeName=t.currentObject.typeName,t.eventData.targetUsage=t.currentObject.usage,t.eventData.targetObject=t.currentObject;var r=e.pageX-t.offsetX,o=e.pageY-t.offsetY,n=(e.pageX,e.pageY,t.currentObject.style.left),a=t.currentObject.style.top,i=parseInt(r,10),l=parseInt(o,10),s=i+parseInt(t.currentObject.style.width,10),d=l+parseInt(t.currentObject.style.height,10),u=parseInt(t.canvasElement.style.width,10),p=parseInt(t.canvasElement.style.height,10),m=0,c=0;return 1==t.currentObject.isRangeLimited&&(i<=0||u<s||l<=0||p<d)?c=m=0:(m=parseInt(r,10)-parseInt(n,10),c=parseInt(o,10)-parseInt(a,10),t.currentObject.style.left=parseInt(t.currentObject.style.left)+m*t.currentObject.argX+"px",t.currentObject.style.top=parseInt(t.currentObject.style.top)+c*t.currentObject.argY+"px"),t.eventData.deltaX=m,t.eventData.deltaY=c,t.eventData}return null},w.prototype.mouseUp=function(e){this.currentObject=null,this.mouseDownSource=null},w.prototype.pullUp=function(e){var t=[],r=this.beanList;for(var o in r)t.push(r[o]);var n=r[e];this.pullUpSort(n,t,this.baseZIndex),this.onTopObject=n},w.prototype.pullUpSort=function(e,t,r){for(var o in e.htmlElement.style.zIndex=t.length+r,t.sort(function(e,t){return-parseInt(e.htmlElement.style.zIndex,10)+parseInt(t.htmlElement.style.zIndex,10)}),t)t[o].htmlElement.style.zIndex=t.length-1-o+r},w.prototype.removeBean=function(e){var t=this.beanList,r=t[e];this.canvasElement.removeChild(r.htmlElement),delete t[e]},w.prototype.addBean=function(e){var t=this,r=t.beanList,o=t.beanIdName,n=t.beanNameId;(r[e.id]=e).property.name&&(n[e.property.name]=e.id,o[e.id]=e.property.name);var a=0;for(var i in r)a++;e.htmlElement.style.zIndex=a+t.baseZIndex,e.setParentCanvas(t),this.canvasElement.appendChild(e.htmlElement)},x.CFRAME={},x.CFRAME.CANVAS_ELEMENT_BGCOLOR="transparent",x.CFRAME.MODAL_BACKGROUND_FRAME_ID_PREFIX="window__modal_window_background_",l(F,s),F.prototype.setTitleBarClassName=function(e,t){return e&&(this.titleBarClassNameDefault=e,this.titleBarClassNameFocused=e),t&&(this.titleBarClassNameFocused=t),this},F.prototype.addFrameComponent=function(e){return this.frameComponentMap[e.id]=e,this.canvas.canvasElement.appendChild(e.htmlElement),this},F.prototype.getFrameComponentElement=function(e){return this.frameComponentMap[e]?this.frameComponentMap[e].htmlElement:null},F.prototype.removeFrameComponentById=function(e){var t=this.frameComponentMap[e];this.canvas.canvasElement.removeChild(t.htmlElement),delete this.frameComponentMap[e]},F.prototype.showFrameComponent=function(e,t){var r=this.getFrameComponentElement(e);return r&&(r.style.display=t||"flex"),this},F.prototype.hideFrameComponent=function(e){var t=this.getFrameComponentElement(e);return t&&(t.style.display="none"),this},F.prototype.hideAllVisibleFrameComponents=function(){var e=this.frameComponentMap;for(var t in e)if(e.hasOwnProperty(t)){var r=e[t].htmlElement;"none"===r.style.display&&(r._alreadyNone=!0),r.style.display="none"}},F.prototype.showAllVisibleFrameComponents=function(){var e=this.frameComponentMap;for(var t in e)if(e.hasOwnProperty(t)){var r=e[t].htmlElement;r._alreadyNone?r._alreadyNone=null:r.style.display="flex"}},F.prototype.hideFrameComponentChildMenus=function(){var e=this.frameComponentMap;for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];r.childMenu&&(r.childMenu.style.display="none")}},F.prototype.setTitle=function(e){var t=this;if(t.title=e,t.showTitleBar){var r=document.createTextNode(e);t.titleBar.firstChild.replaceChild(r,t.titleBar.firstChild.firstChild)}return t},F.prototype.resize=function(e,t,r,o){var n=this,a=parseInt(n.htmlElement.style.left,10),i=parseInt(n.htmlElement.style.top,10),l=parseInt(n.htmlElement.style.width,10),s=parseInt(n.htmlElement.style.height,10);n.htmlElement.style.left=parseInt(a+e,10)+"px",n.htmlElement.style.top=parseInt(i+t,10)+"px",n.htmlElement.style.width=parseInt(l+r,10)+"px",n.htmlElement.style.height=parseInt(s+o,10)+"px";var d=parseInt(n.canvas.canvasElement.style.width,10),u=parseInt(n.canvas.canvasElement.style.height,10);for(var p in n.canvas.canvasElement.style.width=d+r+"px",n.canvas.canvasElement.style.height=u+o+"px",n.showTitleBar&&(n.titleBar.style.width=d+r+"px"),n.canvas.beanList){var m=n.canvas.beanList[p];"cmarkerwindow"==m.htmlElement.typeName&&("RD"==m.htmlElement.usage?(m.htmlElement.style.left=parseInt(m.htmlElement.style.left,10)+r+"px",m.htmlElement.style.top=parseInt(m.htmlElement.style.top,10)+o+"px"):"DD"==m.htmlElement.usage?(m.htmlElement.style.width=parseInt(m.htmlElement.style.width,10)+r+"px",m.htmlElement.style.top=parseInt(m.htmlElement.style.top,10)+o+"px"):"RR"==m.htmlElement.usage&&(m.htmlElement.style.left=parseInt(m.htmlElement.style.left,10)+r+"px",m.htmlElement.style.height=parseInt(m.htmlElement.style.height,10)+o+"px"))}},F.prototype.canvasMouseDown=function(e){null==this.parentCFrame.parentCanvas.mouseDownSource&&(this.parentCFrame.parentCanvas.mouseDownSource="childcanvas")},F.prototype.mouseUp=function(e){this.canvas.mouseUp(e)},F.prototype.close=function(e){var t=this.parentObject.parentCanvas,r=this.parentObject,o=r.id;r.closeInternally(e,t,o)},F.prototype.closeFrame=function(e){var t=this,r=this.parentCanvas;t.closeInternally(e,r,t.windowId)},F.prototype.closeInternally=function(e,t,r){var o=this;t.removeBean(r),o.modalBackgroundWindowId&&(t.removeBean(o.modalBackgroundWindowId),o.modalBackgroundWindowId=null),o.onCloseFrameListener&&o.onCloseFrameListener(o)},F.prototype.setOnCloseFrameListener=function(e){this.onCloseFrameListener=e},F.prototype.contextMenu=function(){return!1},F.prototype.setTitleBarTextColor=function(e){this.titleBar.style.color=e},F.prototype.setPosition=function(e,t,r){var o=this.getWidth(),n=this.getHeight();return this._setPositionInternally(e,t,r,o,n),this},F.prototype._setPositionInternally=function(e,t,r,o,n){var a=this;r&&(a.anchor=r),r&&E.LEFT_TOP!=r?E.HCENTER_TOP==r?(a.htmlElement.style.left=-o/2+e+"px",a.htmlElement.style.top=t+"px"):E.RIGHT_TOP==r?(a.htmlElement.style.left=-o+e+"px",a.htmlElement.style.top=t+"px"):E.LEFT_VCENTER==r?(a.htmlElement.style.left=e+"px",a.htmlElement.style.top=-n/2+t+"px"):E.HCENTER_VCENTER==r?(a.htmlElement.style.left=-o/2+e+"px",a.htmlElement.style.top=-n/2+t+"px"):E.RIGHT_VCENTER==r?(a.htmlElement.style.left=-o+e+"px",a.htmlElement.style.top=-n/2+t+"px"):E.LEFT_BOTTOM==r?(a.htmlElement.style.left=e+"px",a.htmlElement.style.top=-n+t+"px"):E.HCENTER_BOTTOM==r?(a.htmlElement.style.left=-o/2+e+"px",a.htmlElement.style.top=-n+t+"px"):E.RIGHT_BOTTOM==r&&(a.htmlElement.style.left=-o+e+"px",a.htmlElement.style.top=-n+t+"px"):(a.htmlElement.style.left=e+"px",a.htmlElement.style.top=t+"px")},F.prototype.getPosition=function(){var e,t,r=this,o=r.getWidth(),n=r.getHeight(),a=r.anchor;return a&&E.LEFT_TOP!=a?E.HCENTER_TOP==a?(e=parseInt(r.htmlElement.style.left,10)+o/2,t=parseInt(r.htmlElement.style.top,10)):E.RIGHT_TOP==a?(e=parseInt(r.htmlElement.style.left,10)+o,t=parseInt(r.htmlElement.style.top,10)):E.LEFT_VCENTER==a?(e=parseInt(r.htmlElement.style.left,10),t=parseInt(r.htmlElement.style.top,10)+n/2):E.HCENTER_VCENTER==a?(e=parseInt(r.htmlElement.style.left,10)+o/2,t=parseInt(r.htmlElement.style.top,10)+n/2):E.RIGHT_VCENTER==a?(e=parseInt(r.htmlElement.style.left,10)+o,t=parseInt(r.htmlElement.style.top,10)+n/2):E.LEFT_BOTTOM==a?(e=parseInt(r.htmlElement.style.left,10),t=parseInt(r.htmlElement.style.top,10)+n):E.HCENTER_BOTTOM==a?(e=parseInt(r.htmlElement.style.left,10)+o/2,t=parseInt(r.htmlElement.style.top,10)+n):E.RIGHT_BOTTOM==a&&(e=parseInt(r.htmlElement.style.left,10)+o,t=parseInt(r.htmlElement.style.top,10)+n):(e=parseInt(r.htmlElement.style.left,10),t=parseInt(r.htmlElement.style.top,10)),{x:e,y:t,anchor:a}},F.prototype.getLeft=function(){return parseInt(this.htmlElement.style.left,10)},F.prototype.getTop=function(){return parseInt(this.htmlElement.style.top,10)},F.prototype.getWidth=function(){return parseInt(this.htmlElement.style.width,10)},F.prototype.getHeight=function(){return parseInt(this.htmlElement.style.height,10)},F.prototype.getSize=function(){return{width:this.getWidth(),height:this.getHeight()}},F.prototype.setSize=function(e,t,r){var o=!0;return r&&(o=!1),this.resize(0,0,e-this.getWidth(),t-this.getHeight(),o),this},F.prototype.getWindowId=function(){return this.windowId},F.prototype.getName=function(){return this.property.name},F.prototype.setName=function(e){this.property.name=e},l(c,F),c.prototype.getFrameView=function(){return this.dframe},c.prototype.setHTML=function(e){this.dframe.innerHTML=e},c.prototype.$=function(e){return this.useIframe?this.iframe.contentWindow.document.querySelector(e):this.dframe.querySelector(e)},c.prototype.on=function(r,o,n){var a=this,e=a.getFrameComponentElement(r);e&&(e["on"+o]=function(e){var t=document.getElementById(r+"_child_menu");t&&"click"===o&&("flex"==t.style.display?t.style.display="none":t.style.display="flex"),n(a,e,{type:"frameComponent",id:r,eventType:o,child:t})});var t=a.$(r);t&&t.addEventListener(o,function(e){n(a,e,{type:"dom",id:r,eventType:o})})},c.prototype.adjustFrameBorderRadius=function(){var e=this;if(0<parseInt(e.frameBorderRadius,10)){var t=e.getFrameInnerBorderRadius(e,e._hasFocus);e.showTitleBar?(e.canvas.canvasElement.style.borderBottomRightRadius=t,e.canvas.canvasElement.style.borderBottomLeftRadius=t,e.iframe.style.borderBottomRightRadius=t,e.iframe.style.borderBottomLeftRadius=t,e.titleBar.style.borderTopLeftRadius=t,e.titleBar.style.borderTopRightRadius=t):(e.canvas.canvasElement.style.borderRadius=t,e.iframe.style.borderRadius=t),e.dframe&&(e.dframe.style.borderBottomRightRadius=t,e.dframe.style.borderBottomLeftRadius=t)}},c.prototype.handleReleasingFocus=function(e){var t=this;for(var r in t._hasFocus=!1,t.titleBar.style.backgroundColor=t.titleBarColorDefault,t.titleBar.style.color=t.titleBarCaptionColorDefault,t.frameBorderColorDefault&&(t.htmlElement.style.borderColor=t.frameBorderColorDefault),t.frameBorderWidthDefault&&(t.htmlElement.style.borderWidth=t.frameBorderWidthDefault,t.adjustFrameBorderRadius()),"cifwindow"==t.htmlElement.typeName&&t.overrayTransparentScreenEnabled&&(t.transparence.style.width=parseInt(t.iframe.width,10)+"px",t.transparence.style.height=parseInt(t.iframe.height,10)+"px"),t.frameComponentMap){t.frameComponentMap[r].handleReleasingFocus()}return t.titleBarBorderBottomDefault&&(t.titleBar.style.borderBottom=t.titleBarBorderBottomDefault),t.titleBar.className=t.titleBarClassNameDefault,t},c.prototype.handleTakingFocus=function(e){var t=this;for(var r in t._hasFocus=!0,t._hasFocus=Date.now(),t.overrayTransparentScreenEnabled&&(t.transparence.style.width="0px",t.transparence.style.height="0px"),t.titleBar.style.backgroundColor=t.titleBarColorFocused,t.titleBar.style.color=t.titleBarCaptionColorFocused,t.frameBorderColorFocused&&(t.htmlElement.style.borderColor=t.frameBorderColorFocused),t.frameBorderWidthFocused&&(t.htmlElement.style.borderWidth=t.frameBorderWidthFocused,t.adjustFrameBorderRadius()),t.titleBarBorderBottomFocused&&(t.titleBar.style.borderBottom=t.titleBarBorderBottomFocused),t.frameComponentMap){t.frameComponentMap[r].handleTakingFocus()}return t.titleBar.className=t.titleBarClassNameFocused,t},F.prototype.show=function(e){return this.htmlElement.style.display="flex",e&&0==e.requestFocus||this.requestFocus(),this},F.prototype.showModal=function(e){var t=this,r=new i;r.showTitleBar=!0,r.showCloseButton=!1,r.frameBorderRadius="0px",r.frameBorderStyle="none",r.frameBorderWidthDefault="0px",r.frameBorderWidthFocused="0px",r.frameBoxShadow=null,r.frameBackgroundColor="transparent",r.frameComponents=[],r.frameHeightAdjust=0,r.titleBarHeight="0px",r.titleBarBorderBottomFocused=null,r.titleBarCaptionLeftMargin="0px",r.onInitialize=function(){},r.pullUpDisabled=!0;var o=t.parentCanvas,n=x.CFRAME.MODAL_BACKGROUND_FRAME_ID_PREFIX+t.id,a=new c(n,0,0,1,1,r);a.setSize(window.innerWidth,window.innerHeight,!0),a.setResizable(!1),window.addEventListener("resize",function(){a.setSize(window.innerWidth,window.innerHeight,!0)}),t.modalBackgroundWindowId=n,a.hide(),o.addWindow(a),a.setTitle("").getFrameView().innerHTML='<div class="jsframe-modal-window-background"></div>',a.getFrameView().style.backgroundColor="rgba(0,0,0,0.0)",a.show(),t.show(),e&&t.setOnCloseFrameListener(e)},c.prototype.hide=function(){return this.htmlElement.style.display="none",this},c.prototype.onmouseDown=function(e){document.body.ondrag=function(){return!1},this.decorator=F.prototype.onmouseDown,this.decorator(e);var t=this.parent,r=this.parentCanvas;for(var o in r.beanList){var n=r.beanList[o];o==t.getWindowId()||n.handleReleasingFocus()}t.handleTakingFocus()},c.prototype.mouseUp=function(e){var t=this;(t.overrayTransparentScreenEnabled||t.overrayTransparentScreenOnResize)&&(t.parentCanvas.onTopObject==t?(t.transparence.style.width="0px",t.transparence.style.height="0px"):t.overrayTransparentScreenEnabled&&(t.transparence.style.width=parseInt(t.iframe.width)+"px",t.transparence.style.height=parseInt(t.iframe.height)+"px")),t.decorator=F.prototype.mouseUp,t.decorator(e),document.body.ondrag=null,document.body.onselectstart=null,t.transparence.style.pointerEvents="none"},c.prototype.setMinFrameSize=function(e,t){this.minFrameWidth=e,this.minWindowHeight=t},c.prototype.resize=function(e,t,r,o,n){var a=this;if(!a.resizable&&n)return null;var i=parseInt(a.htmlElement.style.left,10),l=parseInt(a.htmlElement.style.top,10),s=parseInt(a.htmlElement.style.width,10),d=parseInt(a.htmlElement.style.height,10);n&&s+r<a.minFrameWidth&r<0&&(a.htmlElement.style.width=s+"px",r=0),n&&d+o<a.minWindowHeight&o<0&&(a.htmlElement.style.height=d+"px",o=0),a.htmlElement.style.left=i+e+"px",a.htmlElement.style.top=l+t+"px",a.htmlElement.style.width=s+r+"px",a.htmlElement.style.height=d+o+"px";var u=parseInt(a.canvas.canvasElement.style.width,10),p=parseInt(a.canvas.canvasElement.style.height,10);for(var m in a.canvas.canvasElement.style.width=u+r+"px",a.canvas.canvasElement.style.height=p+o+"px",a.titleBar.style.width=u-a.ifDelta+r+0+"px",a.iframe.width=u-a.ifDelta+r+0+"px",a.iframe.height=p-a.ifDelta+o+a.frameHeightAdjust+"px",(a.overrayTransparentScreenEnabled||a.overrayTransparentScreenOnResize)&&(a.transparence.style.width=parseInt(a.iframe.width)+"px",a.transparence.style.height=parseInt(a.iframe.height)+"px"),a.frameComponentMap){a.frameComponentMap[m].updateAlign()}for(var c in a.canvas.beanList){var h=a.canvas.beanList[c];"cmarkerwindow"==h.htmlElement.typeName&&("RD"==h.htmlElement.usage?(h.htmlElement.style.left=parseInt(h.htmlElement.style.left)+r+"px",h.htmlElement.style.top=parseInt(h.htmlElement.style.top)+o+"px"):"DD"==h.htmlElement.usage?(h.htmlElement.style.width=parseInt(h.htmlElement.style.width)+r+"px",h.htmlElement.style.top=parseInt(h.htmlElement.style.top)+o+"px"):"RR"==h.htmlElement.usage&&(h.htmlElement.style.left=parseInt(h.htmlElement.style.left)+r+"px",h.htmlElement.style.height=parseInt(h.htmlElement.style.height)+o+"px"))}},c.prototype.resizeDirect=function(e,t,r){var o=this;if(!o.resizable&&r)return null;o.htmlElement.style.width=e+"px",o.htmlElement.style.height=t+"px";parseInt(o.canvas.canvasElement.style.width),parseInt(o.canvas.canvasElement.style.height);for(var n in o.canvas.canvasElement.style.width=e+"px",o.canvas.canvasElement.style.height=t-o.titleBar.style.height+"px",o.titleBar.style.width=e-o.ifDelta+"px",o.iframe.width=e-o.ifDelta+"px",o.iframe.height=t-o.ifDelta+o.frameHeightAdjust+"px",(o.overrayTransparentScreenEnabled||o.overrayTransparentScreenOnResize)&&(o.transparence.style.width=parseInt(o.iframe.width)+"px",o.transparence.style.height=parseInt(o.iframe.height)+"px"),o.frameComponentMap){o.frameComponentMap[n].updateAlign()}for(var a in o.canvas.beanList){var i=o.canvas.beanList[a];"cmarkerwindow"==i.htmlElement.typeName&&("RD"==i.htmlElement.usage?(i.htmlElement.style.left=e+"px",i.htmlElement.style.top=t+"px"):"DD"==i.htmlElement.usage?(i.htmlElement.style.width=e+"px",i.htmlElement.style.top=t+"px"):"RR"==i.htmlElement.usage&&(i.htmlElement.style.left=e+"px",i.htmlElement.style.height=t+"px"))}},c.prototype.requestFocus=function(){var e=this.parentCanvas.beanList;for(var t in e){var r=e[t];t==this.getWindowId()?r.handleTakingFocus():r.handleReleasingFocus()}this.parentCanvas.pullUp(this.id)},c.prototype.setUrl=function(r){var n=this;return new Promise(function(e,t){r?n.setUseIframe(!0):(n.setUseIframe(!1),e()),n.iframe.src=r,n.iframe.onload=function(){n.iframe.contentWindow.document.onmousemove=function(e){var t=n.getLeft(),r=n.getTop(),o=document.createEvent("MouseEvents");o.initMouseEvent("mousemove",!0,!1,window,e.detail,e.screenX,e.screenY,e.pageX+t,e.pageY+r,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,null),n.parentCanvas.windowMouseMove(o),n.onMouseMoveOnIframe&&n.onMouseMoveOnIframe(o)},n.iframe.contentWindow.document.onmouseup=function(e){var t=n.getLeft(),r=n.getTop(),o=document.createEvent("MouseEvents");o.initMouseEvent("mouseup",!0,!1,window,e.detail,e.screenX,e.screenY,e.pageX+t,e.pageY+r,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,null),n.parentCanvas.windowMouseUp(o),n.onMouseUpOnIframe&&n.onMouseUpOnIframe(o)},e(n,n.iframe.contentWindow.document)}})},c.prototype.getIfDocument=function(){return this.iframe.contentWindow.document},c.prototype.setScrolling=function(e){this.iframe.scrolling=e},c.prototype.getScrolling=function(e){return this.iframe.scrolling},c.prototype.setResizable=function(e){return this.resizable=e,this.enableMarkers(e),this},c.prototype.setControl=function(e){e&&((e.frame=this).control=this.jsFrame.createWindowEventHelper(e),this.control.setupDefaultEvents(e))},l(d,w),d.prototype.getWindow=function(e){return this.beanList[e]},d.prototype.addWindow=function(e){var t=e.getWindowId(),r=e.getName();this.beanIdName[t]=r,this.beanNameId[r]=t,this.addBean(e)},d.prototype.containsWindowName=function(e){if(this.beanNameId[e])return!0},d.prototype.getWindowByName=function(e){var t=this.beanNameId[e];return t?this.getWindow(t):null},d.prototype.windowMouseMove=function(e){if(null==this.currentObject)return null;var t=!1,r=this.beanList;for(var o in r){var n=r[o],a=n.canvas.mouseMove(e);if(t|=null!=a,null!=a&&"cmarkerwindow"==a.targetTypeName){var i=a.targetObject;n.transparence.style.pointerEvents="auto","RD"==i.usage?n.resize(0,0,a.deltaX,a.deltaY,!0):"DD"==i.usage?n.resize(0,0,0,a.deltaY,!0):"RR"==i.usage&&n.resize(0,0,a.deltaX,0,!0)}}t||"childcanvas"==this.mouseDownSource||this.mouseMove(e)},d.prototype.windowMouseUp=function(e){this.mouseUp(e);var t=this.beanList;for(var r in t){t[r].mouseUp(e)}},d.prototype.removeBean=function(e){var t=this,r=t.beanList,o=r[e];if(null!=o){var n=o._hasFocus;t.canvasElement.removeChild(o.htmlElement),delete r[e];var a=t.beanIdName[e];a&&(delete t.beanIdName[e],delete t.beanNameId[a]);var i=0,l=null;if(n){for(var e in r){var s=r[e];i<=s._hasFocusTime&&!s.pullUpDisabled&&(i=s._hasFocusTime,l=s)}l&&l.requestFocus()}o.parentCanvas=null}},l(T,s),u.prototype.getDomPartsBuilder=function(){return this.domPartsBuilder||(this.domPartsBuilder=new m),this.domPartsBuilder},u.prototype.create=function(e){var t={};t.name=e.name;var r=e.title,o=e.left,n=e.top,a=e.width,i=e.height,l=e.appearance,s=e.appearanceName,d=e.appearanceParam,u=e.style,p=e.minWidth,m=e.minHeight,c=e.html,h=e.resizable,f=e.movable,y=e.url,b=e.urlLoaded;s&&(l=this.createPresetStyle(s,{appearanceParam:d}));var g=this.createFrame(o,n,a,i,l,t);if(r&&g.setTitle(r),c&&g.setHTML(c),y){var C=g.setUrl(y);b&&C.then(b)}if(0==h&&g.setResizable(!1),0==f&&g.setMovable(!1),p&&m&&(g.minFrameWidth=p),m&&(g.minWindowHeight=m),u){var v=g.getFrameView();for(var B in u)u.hasOwnProperty(B)&&(v.style[B]=u[B])}return g},u.prototype.createFrame=function(e,t,r,o,n,a){(n=n||this.createFrameAppearance()).initialize(),e=e||0;var i=new c("window_"+this.generateUUID(),e,t=t||0,r=r||128,o=o||128,n);if(i.jsFrame=this,a&&a.name&&i.setName(a.name),i.hide(),this.windowManager.addWindow(i),n.getTitleBarStyle){var l=n.getTitleBarStyle();l&&i.setTitleBarClassName(l.titleBarClassNameDefault,l.titleBarClassNameFocused)}return i},u.prototype.containsWindowName=function(e){return this.windowManager.containsWindowName(e)},u.prototype.getWindowByName=function(e){return this.windowManager.getWindowByName(e)},u.prototype.generateUUID=function(){var r=Date.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=(r+16*Math.random())%16|0;return r=Math.floor(r/16),("x"==e?t:3&t|8).toString(16)})},u.prototype.createFrameAppearance=function(){return new i},u.prototype.createAnimator=function(){return new n},u.prototype.createWindowEventHelper=function(e){return(e=e||{}).verticalAlign=this.vAlign,e.horizontalAlign=this.hAlign,new o(e)},u.prototype.createPresetStyle=function(e,t){var r=this.createFrameAppearance();if(t&&t.focusedFrameOnly&&(r.focusedFrameOnly=t.focusedFrameOnly),a[e]){var o=a[e],n=null;return t&&t.appearanceParam&&(n=t.appearanceParam),o.getStyle(r,n)}return r},u.prototype.showToast=function(e){if(e){var t=this,r=60,o=260,n=1e3,a=window.innerHeight-10-r/2,i=window.innerHeight-20-r/2,l="",s=!1,d={borderRadius:"10px",background:"rgba(0,0,0,0.8)"};e.style&&(d=e.style),e.height&&(r=e.height),e.width&&(o=e.width),e.duration&&(n=e.duration),e.align&&("top"==e.align?(a=10+r/2,i=20+r/2):"center"==e.align&&(a=window.innerHeight/2,i=window.innerHeight/2)),e.html&&(l=e.html),e.text&&(l=e.text),s=1==e.closeButton;var u=t.createPresetStyle("toast");d.borderRadius&&(u.frameBorderRadius=d.borderRadius),e.closeButtonColor&&(u.captionClor=e.closeButtonColor);var p=t.create({name:"toast_"+t.generateUUID(),width:o,height:r,movable:!1,resizable:!1,appearance:u,style:d,html:'<div id="my_element" style="box-sizing:border-box;display: flex;justify-content: center;align-items: center;padding:10px;font-size:16px;color:darkgray;height:'+r+'px">'+l+"</div>"});s||p.hideFrameComponent("closeButton");var m=window.innerWidth/2;"right"==t.hAlign&&(m=-m),"bottom"==t.vAlign&&(a-=window.innerHeight,i-=window.innerHeight),t.createAnimator().set(p).setDuration(300).fromPosition(m,a,"CENTER_CENTER").toPosition(m,i,"CENTER_CENTER").toAlpha(1).fromAlpha(0).start(0,!1).then(function(e){return e.setDuration(300).fromPosition(m,i,"CENTER_CENTER").toPosition(m,a,"CENTER_CENTER").fromAlpha(1).toAlpha(.5).start(n,!1)}).then(function(e){e.get().closeFrame()})}},p.prototype.setFocusCallback=function(e,t){this._focusTakingCallabck=e,this._focusReleasingCallabck=t},p.prototype.setFrame=function(e){this.frame=e,this.htmlElement.parentObject=e,this.updateAlign()},p.prototype.updateAlign=function(){var e=this,t=e.frameComponentAlign,r=e.frame,o=e.htmlElement.style;o.userSelect="none";var n=e.x,a=e.y,i=r.getWidth(),l=r.getHeight(),s=o.width,d=o.height;E.LEFT_TOP==t?(o.left=n+"px",o.top=a+"px"):E.HCENTER_TOP==t?(o.left=parseInt(i)/2-parseInt(s)/2+n+"px",o.top=a+"px"):E.RIGHT_TOP==t?(o.left=parseInt(i)-parseInt(s)+n+"px",o.top=a+"px"):E.LEFT_VCENTER==t?(o.left=n+"px",o.top=parseInt(l)/2-parseInt(d)/2+a+"px"):E.HCENTER_VCENTER==t?(o.left=parseInt(i)/2-parseInt(s)/2+n+"px",o.top=parseInt(l)/2-parseInt(d)/2+a+"px"):E.RIGHT_VCENTER==t?(o.left=parseInt(i)-parseInt(s)+n+"px",o.top=parseInt(l)/2-parseInt(d)/2+a+"px"):E.LEFT_BOTTOM==t?(o.left=n+"px",o.top=parseInt(l)-parseInt(d)+a+"px"):E.HCENTER_BOTTOM==t?(o.left=parseInt(i)/2-parseInt(s)/2+n+"px",o.top=parseInt(l)-parseInt(d)+a+"px"):E.RIGHT_BOTTOM==t&&(o.left=parseInt(i)-parseInt(s)+n+"px",o.top=parseInt(l)-parseInt(d)+a+"px")},p.prototype.handleTakingFocus=function(){this._focusTakingCallabck&&this._focusTakingCallabck()},p.prototype.handleReleasingFocus=function(){this._focusReleasingCallabck&&this._focusReleasingCallabck()},m.prototype.buildTextButtonAppearance=function(){return new h},m.prototype.buildButton=function(e){return this.buildTextButton(e)},m.prototype.buildTextButton=function(e){var t=e.size,r=t,o=t;null!=e.width&&(r=e.width),null!=e.height&&(o=e.height);var n=document.createElement("div"),a=e.borderWidth,i=e.borderRadius,l=e.borderColorDefault,s=e.borderColorFocused,d=e.borderColorHovered,u=e.borderColorPressed,p=e.borderStyleDefault,m=e.borderStyleFocused,c=e.borderStyleHovered,h=e.borderStylePressed,f=e.backgroundColorDefault,y=e.backgroundColorFocused,b=e.backgroundColorHovered,g=e.backgroundColorPressed,C=e.backgroundBoxShadow,v=e.fa,B=e.caption,E=e.imageDefault,x=e.imageFocused,w=e.imageHovered,F=e.imagePressed;E&&(E.style.pointerEvents="none"),x&&(x.style.pointerEvents="none"),w&&(w.style.pointerEvents="none"),F&&(F.style.pointerEvents="none");var T=e.captionColorDefault,A=e.captionColorFocused,D=e.captionColorHovered,I=e.captionColorPressed,S=e.captionShiftYpx,k=e.captionFontRatio;n._hasFrameFocus=!1,n._isMouseDown=!1,n.style.position="absolute",n.style.top="0px",n.style.left="0px",n.style.width=r+"px",n.style.height=o+"px",n.style.cursor="pointer",n.style.margin="0px",n.style.padding="0px",n.style.boxSizing="content-box",n.style.fontFamily="sans-serif",n.onmousedown=function(e){n._isMouseDown=!0,n._handleFocusDrawing("onmousedown")},n.onmouseout=function(e){n._isMouseDown=!1,n._handleFocusDrawing("onmouseout")},n.onmouseover=function(e){n._handleHoverDrawing()},n.onmouseup=function(e){n._isMouseDown=!1,n._handleFocusDrawing("onmouseup")},n._onTakeFocus=function(){n._hasFrameFocus=!0,n._handleFocusDrawing("_onTakeFocus")},n._onReleaseFocus=function(){n._hasFrameFocus=!1,n._handleFocusDrawing("_onReleaseFocus")},n._handleFocusDrawing=function(e){n._hasFrameFocus?n._isMouseDown?(n.style.borderColor=u,n.style.borderStyle=h,n.style.backgroundColor=g,n.style.color=I,F&&(n.innerHTML="",n.appendChild(F))):(n.style.borderColor=s,n.style.borderStyle=m,n.style.backgroundColor=y,n.style.color=A,x&&(n.innerHTML="",n.appendChild(x))):n._isMouseDown?(n.style.borderColor=u,n.style.borderStyle=h,n.style.backgroundColor=g,n.style.color=I,F&&(n.innerHTML="",n.appendChild(F))):(n.style.borderColor=l,n.style.borderStyle=p,n.style.backgroundColor=f,n.style.color=T,E&&(n.innerHTML="",n.appendChild(E)))},n._handleHoverDrawing=function(){n._hasFrameFocus,d&&(n.style.borderColor=d),c&&(n.style.borderStyle=c),b&&(n.style.backgroundColor=b),D&&(n.style.color=D),w&&(n.innerHTML="",n.appendChild(w))},n.style.textAlign="center",n.style.fontSize=o*k+"px",n.style.lineHeight=o+"px",n.style.borderWidth="1px",null!=a&&(n.style.borderWidth=a+"px"),null!=C&&(n.style.boxShadow=C),n.style.borderRadius=i+parseInt(n.style.borderWidth)+"px";if(E)n.innerHTML="",n.appendChild(E);else if(B){(_=document.createElement("span")).style.width="100%",_.style.marginTop=S+"px",_.style.display="inline-block",_.style.textAlign="center",_.style.fontFamily="sans-serif",_.appendChild(document.createTextNode(B)),n.appendChild(_)}else if(v){var _;(_=document.createElement("span")).style.width="100%",_.style.marginTop=S+"px",_.style.display="inline-block",_.style.textAlign="center",_.style.fontFamily="sans-serif",_.innerHTML='<i class="'+v+'"></i>',n.appendChild(_)}else 0;return n._handleFocusDrawing(),n},Object.freeze(x),r.d(t,"JSFrame",function(){return u})}],n.c=o,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=23);function n(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var r,o});

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css)
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue/dist/vue.min.js":
/*!******************************************!*\
  !*** ./node_modules/vue/dist/vue.min.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Vue.js v2.0.5
 * (c) 2014-2016 Evan You
 * Released under the MIT License.
 */
!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";function e(e){return null==e?"":"object"==typeof e?JSON.stringify(e,null,2):String(e)}function t(e){var t=parseFloat(e,10);return t||0===t?t:e}function n(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}function r(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}function i(e,t){return Er.call(e,t)}function o(e){return"string"==typeof e||"number"==typeof e}function a(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}function s(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function c(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function u(e,t){for(var n in t)e[n]=t[n];return e}function l(e){return null!==e&&"object"==typeof e}function f(e){return Pr.call(e)===Rr}function d(e){for(var t={},n=0;n<e.length;n++)e[n]&&u(t,e[n]);return t}function p(){}function v(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}function h(e,t){return e==t||!(!l(e)||!l(t))&&JSON.stringify(e)===JSON.stringify(t)}function m(e,t){for(var n=0;n<e.length;n++)if(h(e[n],t))return n;return-1}function g(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function y(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function _(e){if(!Fr.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}function b(e){return/native code/.test(e.toString())}function $(e){Qr.target&&Xr.push(Qr.target),Qr.target=e}function w(){Qr.target=Xr.pop()}function C(){ei.length=0,ti={},ni=ri=!1}function x(){for(ri=!0,ei.sort(function(e,t){return e.id-t.id}),ii=0;ii<ei.length;ii++){var e=ei[ii],t=e.id;ti[t]=null,e.run()}Zr&&Br.devtools&&Zr.emit("flush"),C()}function k(e){var t=e.id;if(null==ti[t]){if(ti[t]=!0,ri){for(var n=ei.length-1;n>=0&&ei[n].id>e.id;)n--;ei.splice(Math.max(n,ii)+1,0,e)}else ei.push(e);ni||(ni=!0,Gr(x))}}function A(e){si.clear(),O(e,si)}function O(e,t){var n,r,i=Array.isArray(e);if((i||l(e))&&Object.isExtensible(e)){if(e.__ob__){var o=e.__ob__.dep.id;if(t.has(o))return;t.add(o)}if(i)for(n=e.length;n--;)O(e[n],t);else for(r=Object.keys(e),n=r.length;n--;)O(e[r[n]],t)}}function T(e,t){e.__proto__=t}function S(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];y(e,o,t[o])}}function E(e){if(l(e)){var t;return i(e,"__ob__")&&e.__ob__ instanceof di?t=e.__ob__:fi.shouldConvert&&!Br._isServer&&(Array.isArray(e)||f(e))&&Object.isExtensible(e)&&!e._isVue&&(t=new di(e)),t}}function j(e,t,n,r){var i=new Qr,o=Object.getOwnPropertyDescriptor(e,t);if(!o||o.configurable!==!1){var a=o&&o.get,s=o&&o.set,c=E(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return Qr.target&&(i.depend(),c&&c.dep.depend(),Array.isArray(t)&&D(t)),t},set:function(t){var r=a?a.call(e):n;t!==r&&(s?s.call(e,t):n=t,c=E(t),i.notify())}})}}function L(e,t,n){if(Array.isArray(e))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(i(e,t))return void(e[t]=n);var r=e.__ob__;if(!(e._isVue||r&&r.vmCount))return r?(j(r.value,t,n),r.dep.notify(),n):void(e[t]=n)}function N(e,t){var n=e.__ob__;e._isVue||n&&n.vmCount||i(e,t)&&(delete e[t],n&&n.dep.notify())}function D(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&D(t)}function M(e){e._watchers=[],P(e),R(e),I(e),F(e),H(e)}function P(e){var t=e.$options.props;if(t){var n=e.$options.propsData||{},r=e.$options._propKeys=Object.keys(t),i=!e.$parent;fi.shouldConvert=i;for(var o=function(i){var o=r[i];j(e,o,De(o,t,n,e))},a=0;a<r.length;a++)o(a);fi.shouldConvert=!0}}function R(e){var t=e.$options.data;t=e._data="function"==typeof t?t.call(e):t||{},f(t)||(t={});for(var n=Object.keys(t),r=e.$options.props,o=n.length;o--;)r&&i(r,n[o])||V(e,n[o]);E(t),t.__ob__&&t.__ob__.vmCount++}function I(e){var t=e.$options.computed;if(t)for(var n in t){var r=t[n];"function"==typeof r?(pi.get=B(r,e),pi.set=p):(pi.get=r.get?r.cache!==!1?B(r.get,e):s(r.get,e):p,pi.set=r.set?s(r.set,e):p),Object.defineProperty(e,n,pi)}}function B(e,t){var n=new ai(t,e,p,{lazy:!0});return function(){return n.dirty&&n.evaluate(),Qr.target&&n.depend(),n.value}}function F(e){var t=e.$options.methods;if(t)for(var n in t)e[n]=null==t[n]?p:s(t[n],e)}function H(e){var t=e.$options.watch;if(t)for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)U(e,n,r[i]);else U(e,n,r)}}function U(e,t,n){var r;f(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}function z(e){var t={};t.get=function(){return this._data},Object.defineProperty(e.prototype,"$data",t),e.prototype.$set=L,e.prototype.$delete=N,e.prototype.$watch=function(e,t,n){var r=this;n=n||{},n.user=!0;var i=new ai(r,e,t,n);return n.immediate&&t.call(r,i.value),function(){i.teardown()}}}function V(e,t){g(t)||Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return e._data[t]},set:function(n){e._data[t]=n}})}function J(e){var t=new vi(e.tag,e.data,e.children,e.text,e.elm,e.ns,e.context,e.componentOptions);return t.isStatic=e.isStatic,t.key=e.key,t.isCloned=!0,t}function q(e){for(var t=new Array(e.length),n=0;n<e.length;n++)t[n]=J(e[n]);return t}function K(e,t,n,r){r+=t;var i=e.__injected||(e.__injected={});if(!i[r]){i[r]=!0;var o=e[t];o?e[t]=function(){o.apply(this,arguments),n.apply(this,arguments)}:e[t]=n}}function W(e,t,n,r,i){var o,a,s,c,u,l;for(o in e)if(a=e[o],s=t[o],a)if(s){if(a!==s)if(Array.isArray(s)){s.length=a.length;for(var f=0;f<s.length;f++)s[f]=a[f];e[o]=s}else s.fn=a,e[o]=s}else l="!"===o.charAt(0),u=l?o.slice(1):o,Array.isArray(a)?n(u,a.invoker=Z(a),l):(a.invoker||(c=a,a=e[o]={},a.fn=c,a.invoker=G(a)),n(u,a.invoker,l));else;for(o in t)e[o]||(u="!"===o.charAt(0)?o.slice(1):o,r(u,t[o].invoker))}function Z(e){return function(t){for(var n=arguments,r=1===arguments.length,i=0;i<e.length;i++)r?e[i](t):e[i].apply(null,n)}}function G(e){return function(t){var n=1===arguments.length;n?e.fn(t):e.fn.apply(null,arguments)}}function Y(e,t,n){if(o(e))return[Q(e)];if(Array.isArray(e)){for(var r=[],i=0,a=e.length;i<a;i++){var s=e[i],c=r[r.length-1];Array.isArray(s)?r.push.apply(r,Y(s,t,(n||"")+"_"+i)):o(s)?c&&c.text?c.text+=String(s):""!==s&&r.push(Q(s)):s instanceof vi&&(s.text&&c&&c.text?c.text+=s.text:(t&&X(s,t),s.tag&&null==s.key&&null!=n&&(s.key="__vlist"+n+"_"+i+"__"),r.push(s)))}return r}}function Q(e){return new vi(void 0,void 0,void 0,String(e))}function X(e,t){if(e.tag&&!e.ns&&(e.ns=t,e.children))for(var n=0,r=e.children.length;n<r;n++)X(e.children[n],t)}function ee(e){return e&&e.filter(function(e){return e&&e.componentOptions})[0]}function te(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function ne(e){e.prototype._mount=function(e,t){var n=this;return n.$el=e,n.$options.render||(n.$options.render=hi),re(n,"beforeMount"),n._watcher=new ai(n,function(){n._update(n._render(),t)},p),t=!1,null==n.$vnode&&(n._isMounted=!0,re(n,"mounted")),n},e.prototype._update=function(e,t){var n=this;n._isMounted&&re(n,"beforeUpdate");var r=n.$el,i=mi;mi=n;var o=n._vnode;n._vnode=e,o?n.$el=n.__patch__(o,e):n.$el=n.__patch__(n.$el,e,t),mi=i,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el),n._isMounted&&re(n,"updated")},e.prototype._updateFromParent=function(e,t,n,r){var i=this,o=!(!i.$options._renderChildren&&!r);if(i.$options._parentVnode=n,i.$options._renderChildren=r,e&&i.$options.props){fi.shouldConvert=!1;for(var a=i.$options._propKeys||[],s=0;s<a.length;s++){var c=a[s];i[c]=De(c,i.$options.props,e,i)}fi.shouldConvert=!0,i.$options.propsData=e}if(t){var u=i.$options._parentListeners;i.$options._parentListeners=t,i._updateListeners(t,u)}o&&(i.$slots=be(r,i._renderContext),i.$forceUpdate())},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){re(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||r(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,re(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.__patch__(e._vnode,null)}}}function re(e,t){var n=e.$options[t];if(n)for(var r=0,i=n.length;r<i;r++)n[r].call(e);e.$emit("hook:"+t)}function ie(e,t,n,r,i){if(e&&(l(e)&&(e=Ae.extend(e)),"function"==typeof e)){if(ke(e),!e.cid)if(e.resolved)e=e.resolved;else if(e=fe(e,function(){n.$forceUpdate()}),!e)return;t=t||{};var o=de(t,e);if(e.options.functional)return oe(e,o,t,n,r);var a=t.on;t.on=t.nativeOn,e.options.abstract&&(t={}),ve(t);var s=e.options.name||i,c=new vi("vue-component-"+e.cid+(s?"-"+s:""),t,void 0,void 0,void 0,void 0,n,{Ctor:e,propsData:o,listeners:a,tag:i,children:r});return c}}function oe(e,t,n,r,i){var o={},a=e.options.props;if(a)for(var c in a)o[c]=De(c,a,t);var u=e.options.render.call(null,s(me,{_self:Object.create(r)}),{props:o,data:n,parent:r,children:Y(i),slots:function(){return be(i,r)}});return u instanceof vi&&(u.functionalContext=r,n.slot&&((u.data||(u.data={})).slot=n.slot)),u}function ae(e,t){var n=e.componentOptions,r={_isComponent:!0,parent:t,propsData:n.propsData,_componentTag:n.tag,_parentVnode:e,_parentListeners:n.listeners,_renderChildren:n.children},i=e.data.inlineTemplate;return i&&(r.render=i.render,r.staticRenderFns=i.staticRenderFns),new n.Ctor(r)}function se(e,t){if(!e.child||e.child._isDestroyed){var n=e.child=ae(e,mi);n.$mount(t?e.elm:void 0,t)}}function ce(e,t){var n=t.componentOptions,r=t.child=e.child;r._updateFromParent(n.propsData,n.listeners,t,n.children)}function ue(e){e.child._isMounted||(e.child._isMounted=!0,re(e.child,"mounted")),e.data.keepAlive&&(e.child._inactive=!1,re(e.child,"activated"))}function le(e){e.child._isDestroyed||(e.data.keepAlive?(e.child._inactive=!0,re(e.child,"deactivated")):e.child.$destroy())}function fe(e,t){if(!e.requested){e.requested=!0;var n=e.pendingCallbacks=[t],r=!0,i=function(t){if(l(t)&&(t=Ae.extend(t)),e.resolved=t,!r)for(var i=0,o=n.length;i<o;i++)n[i](t)},o=function(e){},a=e(i,o);return a&&"function"==typeof a.then&&!e.resolved&&a.then(i,o),r=!1,e.resolved}e.pendingCallbacks.push(t)}function de(e,t){var n=t.options.props;if(n){var r={},i=e.attrs,o=e.props,a=e.domProps;if(i||o||a)for(var s in n){var c=Mr(s);pe(r,o,s,c,!0)||pe(r,i,s,c)||pe(r,a,s,c)}return r}}function pe(e,t,n,r,o){if(t){if(i(t,n))return e[n]=t[n],o||delete t[n],!0;if(i(t,r))return e[n]=t[r],o||delete t[r],!0}return!1}function ve(e){e.hook||(e.hook={});for(var t=0;t<yi.length;t++){var n=yi[t],r=e.hook[n],i=gi[n];e.hook[n]=r?he(i,r):i}}function he(e,t){return function(n,r){e(n,r),t(n,r)}}function me(e,t,n){return t&&(Array.isArray(t)||"object"!=typeof t)&&(n=t,t=void 0),ge(this._self,e,t,n)}function ge(e,t,n,r){if(!n||!n.__ob__){if(!t)return hi();if("string"==typeof t){var i,o=Br.getTagNamespace(t);if(Br.isReservedTag(t))return new vi(t,n,Y(r,o),void 0,void 0,o,e);if(i=Ne(e.$options,"components",t))return ie(i,n,e,r,t);var a="foreignObject"===t?"xhtml":o;return new vi(t,n,Y(r,a),void 0,void 0,o,e)}return ie(t,n,e,r)}}function ye(e){e.$vnode=null,e._vnode=null,e._staticTrees=null,e._renderContext=e.$options._parentVnode&&e.$options._parentVnode.context,e.$slots=be(e.$options._renderChildren,e._renderContext),e.$createElement=s(me,e),e.$options.el&&e.$mount(e.$options.el)}function _e(n){function r(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&i(e[r],t+"_"+r,n);else i(e,t,n)}function i(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}n.prototype.$nextTick=function(e){Gr(e,this)},n.prototype._render=function(){var e=this,t=e.$options,n=t.render,r=t.staticRenderFns,i=t._parentVnode;if(e._isMounted)for(var o in e.$slots)e.$slots[o]=q(e.$slots[o]);r&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=i;var a;try{a=n.call(e._renderProxy,e.$createElement)}catch(t){if(Br.errorHandler)Br.errorHandler.call(null,t,e);else{if(Br._isServer)throw t;console.error(t)}a=e._vnode}return a instanceof vi||(a=hi()),a.parent=i,a},n.prototype._h=me,n.prototype._s=e,n.prototype._n=t,n.prototype._e=hi,n.prototype._q=h,n.prototype._i=m,n.prototype._m=function(e,t){var n=this._staticTrees[e];return n&&!t?Array.isArray(n)?q(n):J(n):(n=this._staticTrees[e]=this.$options.staticRenderFns[e].call(this._renderProxy),r(n,"__static__"+e,!1),n)},n.prototype._o=function(e,t,n){return r(e,"__once__"+t+(n?"_"+n:""),!0),e};var o=function(e){return e};n.prototype._f=function(e){return Ne(this.$options,"filters",e,!0)||o},n.prototype._l=function(e,t){var n,r,i,o,a;if(Array.isArray(e))for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if("number"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(l(e))for(o=Object.keys(e),n=new Array(o.length),r=0,i=o.length;r<i;r++)a=o[r],n[r]=t(e[a],a,r);return n},n.prototype._t=function(e,t){var n=this.$slots[e];return n||t},n.prototype._b=function(e,t,n){if(t)if(l(t)){Array.isArray(t)&&(t=d(t));for(var r in t)if("class"===r||"style"===r)e[r]=t[r];else{var i=n||Br.mustUseProp(r)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={});i[r]=t[r]}}else;return e},n.prototype._k=function(e){return Br.keyCodes[e]}}function be(e,t){var n={};if(!e)return n;for(var r,i,o=Y(e)||[],a=[],s=0,c=o.length;s<c;s++)if(i=o[s],(i.context===t||i.functionalContext===t)&&i.data&&(r=i.data.slot)){var u=n[r]||(n[r]=[]);"template"===i.tag?u.push.apply(u,i.children):u.push(i)}else a.push(i);return a.length&&(1!==a.length||" "!==a[0].text&&!a[0].isComment)&&(n.default=a),n}function $e(e){e._events=Object.create(null);var t=e.$options._parentListeners,n=s(e.$on,e),r=s(e.$off,e);e._updateListeners=function(t,i){W(t,i||{},n,r,e)},t&&e._updateListeners(t)}function we(e){e.prototype.$on=function(e,t){var n=this;return(n._events[e]||(n._events[e]=[])).push(t),n},e.prototype.$once=function(e,t){function n(){r.$off(e,n),t.apply(r,arguments)}var r=this;return n.fn=t,r.$on(e,n),r},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;var r=n._events[e];if(!r)return n;if(1===arguments.length)return n._events[e]=null,n;for(var i,o=r.length;o--;)if(i=r[o],i===t||i.fn===t){r.splice(o,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?c(n):n;for(var r=c(arguments,1),i=0,o=n.length;i<o;i++)n[i].apply(t,r)}return t}}function Ce(e){e.prototype._init=function(e){var t=this;t._uid=_i++,t._isVue=!0,e&&e._isComponent?xe(t,e):t.$options=Le(ke(t.constructor),e||{},t),t._renderProxy=t,t._self=t,te(t),$e(t),re(t,"beforeCreate"),M(t),re(t,"created"),ye(t)}}function xe(e,t){var n=e.$options=Object.create(e.constructor.options);n.parent=t.parent,n.propsData=t.propsData,n._parentVnode=t._parentVnode,n._parentListeners=t._parentListeners,n._renderChildren=t._renderChildren,n._componentTag=t._componentTag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function ke(e){var t=e.options;if(e.super){var n=e.super.options,r=e.superOptions,i=e.extendOptions;n!==r&&(e.superOptions=n,i.render=t.render,i.staticRenderFns=t.staticRenderFns,t=e.options=Le(n,i),t.name&&(t.components[t.name]=e))}return t}function Ae(e){this._init(e)}function Oe(e,t){var n,r,o;for(n in t)r=e[n],o=t[n],i(e,n)?l(r)&&l(o)&&Oe(r,o):L(e,n,o);return e}function Te(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}function Se(e,t){var n=Object.create(e||null);return t?u(n,t):n}function Ee(e){var t=e.props;if(t){var n,r,i,o={};if(Array.isArray(t))for(n=t.length;n--;)r=t[n],"string"==typeof r&&(i=Lr(r),o[i]={type:null});else if(f(t))for(var a in t)r=t[a],i=Lr(a),o[i]=f(r)?r:{type:r};e.props=o}}function je(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}function Le(e,t,n){function r(r){var i=wi[r]||Ci;l[r]=i(e[r],t[r],n,r)}Ee(t),je(t);var o=t.extends;if(o&&(e="function"==typeof o?Le(e,o.options,n):Le(e,o,n)),t.mixins)for(var a=0,s=t.mixins.length;a<s;a++){var c=t.mixins[a];c.prototype instanceof Ae&&(c=c.options),e=Le(e,c,n)}var u,l={};for(u in e)r(u);for(u in t)i(e,u)||r(u);return l}function Ne(e,t,n,r){if("string"==typeof n){var i=e[t],o=i[n]||i[Lr(n)]||i[Nr(Lr(n))];return o}}function De(e,t,n,r){var o=t[e],a=!i(n,e),s=n[e];if(Re(o.type)&&(a&&!i(o,"default")?s=!1:""!==s&&s!==Mr(e)||(s=!0)),void 0===s){s=Me(r,o,e);var c=fi.shouldConvert;fi.shouldConvert=!0,E(s),fi.shouldConvert=c}return s}function Me(e,t,n){if(i(t,"default")){var r=t.default;return l(r),e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e[n]?e[n]:"function"==typeof r&&t.type!==Function?r.call(e):r}}function Pe(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t&&t[1]}function Re(e){if(!Array.isArray(e))return"Boolean"===Pe(e);for(var t=0,n=e.length;t<n;t++)if("Boolean"===Pe(e[t]))return!0;return!1}function Ie(e){e.use=function(e){if(!e.installed){var t=c(arguments,1);return t.unshift(this),"function"==typeof e.install?e.install.apply(e,t):e.apply(null,t),e.installed=!0,this}}}function Be(e){e.mixin=function(t){e.options=Le(e.options,t)}}function Fe(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=0===n.cid;if(r&&e._Ctor)return e._Ctor;var i=e.name||n.options.name,o=function(e){this._init(e)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=t++,o.options=Le(n.options,e),o.super=n,o.extend=n.extend,Br._assetTypes.forEach(function(e){o[e]=n[e]}),i&&(o.options.components[i]=o),o.superOptions=n.options,o.extendOptions=e,r&&(e._Ctor=o),o}}function He(e){Br._assetTypes.forEach(function(t){e[t]=function(n,r){return r?("component"===t&&f(r)&&(r.name=r.name||n,r=e.extend(r)),"directive"===t&&"function"==typeof r&&(r={bind:r,update:r}),this.options[t+"s"][n]=r,r):this.options[t+"s"][n]}})}function Ue(e){var t={};t.get=function(){return Br},Object.defineProperty(e,"config",t),e.util=xi,e.set=L,e.delete=N,e.nextTick=Gr,e.options=Object.create(null),Br._assetTypes.forEach(function(t){e.options[t+"s"]=Object.create(null)}),u(e.options.components,Ai),Ie(e),Be(e),Fe(e),He(e)}function ze(e){for(var t=e.data,n=e,r=e;r.child;)r=r.child._vnode,r.data&&(t=Ve(r.data,t));for(;n=n.parent;)n.data&&(t=Ve(t,n.data));return Je(t)}function Ve(e,t){return{staticClass:qe(e.staticClass,t.staticClass),class:e.class?[e.class,t.class]:t.class}}function Je(e){var t=e.class,n=e.staticClass;return n||t?qe(n,Ke(t)):""}function qe(e,t){return e?t?e+" "+t:e:t||""}function Ke(e){var t="";if(!e)return t;if("string"==typeof e)return e;if(Array.isArray(e)){for(var n,r=0,i=e.length;r<i;r++)e[r]&&(n=Ke(e[r]))&&(t+=n+" ");return t.slice(0,-1)}if(l(e)){for(var o in e)e[o]&&(t+=o+" ");return t.slice(0,-1)}return t}function We(e){return Fi(e)?"svg":"math"===e?"math":void 0}function Ze(e){if(!Ur)return!0;if(Ui(e))return!1;if(e=e.toLowerCase(),null!=zi[e])return zi[e];var t=document.createElement(e);return e.indexOf("-")>-1?zi[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:zi[e]=/HTMLUnknownElement/.test(t.toString())}function Ge(e){if("string"==typeof e){if(e=document.querySelector(e),!e)return document.createElement("div")}return e}function Ye(e,t){var n=document.createElement(e);return"select"!==e?n:(t.data&&t.data.attrs&&"multiple"in t.data.attrs&&n.setAttribute("multiple","multiple"),n)}function Qe(e,t){return document.createElementNS(Mi[e],t)}function Xe(e){return document.createTextNode(e)}function et(e){return document.createComment(e)}function tt(e,t,n){e.insertBefore(t,n)}function nt(e,t){e.removeChild(t)}function rt(e,t){e.appendChild(t)}function it(e){return e.parentNode}function ot(e){return e.nextSibling}function at(e){return e.tagName}function st(e,t){e.textContent=t}function ct(e){return e.childNodes}function ut(e,t,n){e.setAttribute(t,n)}function lt(e,t){var n=e.data.ref;if(n){var i=e.context,o=e.child||e.elm,a=i.$refs;t?Array.isArray(a[n])?r(a[n],o):a[n]===o&&(a[n]=void 0):e.data.refInFor?Array.isArray(a[n])?a[n].push(o):a[n]=[o]:a[n]=o}}function ft(e){return null==e}function dt(e){return null!=e}function pt(e,t){return e.key===t.key&&e.tag===t.tag&&e.isComment===t.isComment&&!e.data==!t.data}function vt(e,t,n){var r,i,o={};for(r=t;r<=n;++r)i=e[r].key,dt(i)&&(o[i]=r);return o}function ht(e){function t(e){return new vi(C.tagName(e).toLowerCase(),{},[],void 0,e)}function n(e,t){function n(){0===--n.listeners&&r(e)}return n.listeners=t,n}function r(e){var t=C.parentNode(e);t&&C.removeChild(t,e)}function i(e,t,n){var r,i=e.data;if(e.isRootInsert=!n,dt(i)&&(dt(r=i.hook)&&dt(r=r.init)&&r(e),dt(r=e.child)))return u(e,t),e.elm;var o=e.children,s=e.tag;return dt(s)?(e.elm=e.ns?C.createElementNS(e.ns,s):C.createElement(s,e),l(e),a(e,o,t),dt(i)&&c(e,t)):e.isComment?e.elm=C.createComment(e.text):e.elm=C.createTextNode(e.text),e.elm}function a(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)C.appendChild(e.elm,i(t[r],n,!0));else o(e.text)&&C.appendChild(e.elm,C.createTextNode(e.text))}function s(e){for(;e.child;)e=e.child._vnode;return dt(e.tag)}function c(e,t){for(var n=0;n<$.create.length;++n)$.create[n](qi,e);_=e.data.hook,dt(_)&&(_.create&&_.create(qi,e),_.insert&&t.push(e))}function u(e,t){e.data.pendingInsert&&t.push.apply(t,e.data.pendingInsert),e.elm=e.child.$el,s(e)?(c(e,t),l(e)):(lt(e),t.push(e))}function l(e){var t;dt(t=e.context)&&dt(t=t.$options._scopeId)&&C.setAttribute(e.elm,t,""),dt(t=mi)&&t!==e.context&&dt(t=t.$options._scopeId)&&C.setAttribute(e.elm,t,"")}function f(e,t,n,r,o,a){for(;r<=o;++r)C.insertBefore(e,i(n[r],a),t)}function d(e){var t,n,r=e.data;if(dt(r))for(dt(t=r.hook)&&dt(t=t.destroy)&&t(e),t=0;t<$.destroy.length;++t)$.destroy[t](e);if(dt(t=e.children))for(n=0;n<e.children.length;++n)d(e.children[n])}function p(e,t,n,r){for(;n<=r;++n){var i=t[n];dt(i)&&(dt(i.tag)?(v(i),d(i)):C.removeChild(e,i.elm))}}function v(e,t){if(t||dt(e.data)){var i=$.remove.length+1;for(t?t.listeners+=i:t=n(e.elm,i),dt(_=e.child)&&dt(_=_._vnode)&&dt(_.data)&&v(_,t),_=0;_<$.remove.length;++_)$.remove[_](e,t);dt(_=e.data.hook)&&dt(_=_.remove)?_(e,t):t()}else r(e.elm)}function h(e,t,n,r,o){for(var a,s,c,u,l=0,d=0,v=t.length-1,h=t[0],g=t[v],y=n.length-1,_=n[0],b=n[y],$=!o;l<=v&&d<=y;)ft(h)?h=t[++l]:ft(g)?g=t[--v]:pt(h,_)?(m(h,_,r),h=t[++l],_=n[++d]):pt(g,b)?(m(g,b,r),g=t[--v],b=n[--y]):pt(h,b)?(m(h,b,r),$&&C.insertBefore(e,h.elm,C.nextSibling(g.elm)),h=t[++l],b=n[--y]):pt(g,_)?(m(g,_,r),$&&C.insertBefore(e,g.elm,h.elm),g=t[--v],_=n[++d]):(ft(a)&&(a=vt(t,l,v)),s=dt(_.key)?a[_.key]:null,ft(s)?(C.insertBefore(e,i(_,r),h.elm),_=n[++d]):(c=t[s],c.tag!==_.tag?(C.insertBefore(e,i(_,r),h.elm),_=n[++d]):(m(c,_,r),t[s]=void 0,$&&C.insertBefore(e,_.elm,h.elm),_=n[++d])));l>v?(u=ft(n[y+1])?null:n[y+1].elm,f(e,u,n,d,y,r)):d>y&&p(e,t,l,v)}function m(e,t,n,r){if(e!==t){if(t.isStatic&&e.isStatic&&t.key===e.key&&(t.isCloned||t.isOnce))return void(t.elm=e.elm);var i,o=t.data,a=dt(o);a&&dt(i=o.hook)&&dt(i=i.prepatch)&&i(e,t);var c=t.elm=e.elm,u=e.children,l=t.children;if(a&&s(t)){for(i=0;i<$.update.length;++i)$.update[i](e,t);dt(i=o.hook)&&dt(i=i.update)&&i(e,t)}ft(t.text)?dt(u)&&dt(l)?u!==l&&h(c,u,l,n,r):dt(l)?(dt(e.text)&&C.setTextContent(c,""),f(c,null,l,0,l.length-1,n)):dt(u)?p(c,u,0,u.length-1):dt(e.text)&&C.setTextContent(c,""):e.text!==t.text&&C.setTextContent(c,t.text),a&&dt(i=o.hook)&&dt(i=i.postpatch)&&i(e,t)}}function g(e,t,n){if(n&&e.parent)e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}function y(e,t,n){t.elm=e;var r=t.tag,i=t.data,o=t.children;if(dt(i)&&(dt(_=i.hook)&&dt(_=_.init)&&_(t,!0),dt(_=t.child)))return u(t,n),!0;if(dt(r)){if(dt(o)){var s=C.childNodes(e);if(s.length){var l=!0;if(s.length!==o.length)l=!1;else for(var f=0;f<o.length;f++)if(!y(s[f],o[f],n)){l=!1;break}if(!l)return!1}else a(t,o,n)}dt(i)&&c(t,n)}return!0}var _,b,$={},w=e.modules,C=e.nodeOps;for(_=0;_<Ki.length;++_)for($[Ki[_]]=[],b=0;b<w.length;++b)void 0!==w[b][Ki[_]]&&$[Ki[_]].push(w[b][Ki[_]]);return function(e,n,r,o){if(!n)return void(e&&d(e));var a,c,u=!1,l=[];if(e){var f=dt(e.nodeType);if(!f&&pt(e,n))m(e,n,l,o);else{if(f){if(1===e.nodeType&&e.hasAttribute("server-rendered")&&(e.removeAttribute("server-rendered"),r=!0),r&&y(e,n,l))return g(n,l,!0),e;e=t(e)}if(a=e.elm,c=C.parentNode(a),i(n,l),n.parent&&(n.parent.elm=n.elm,s(n)))for(var v=0;v<$.create.length;++v)$.create[v](qi,n.parent);null!==c?(C.insertBefore(c,n.elm,C.nextSibling(a)),p(c,[e],0,0)):dt(e.tag)&&d(e)}}else u=!0,i(n,l);return g(n,l,u),n.elm}}function mt(e,t){if(e.data.directives||t.data.directives){var n,r,i,o=e===qi,a=gt(e.data.directives,e.context),s=gt(t.data.directives,t.context),c=[],u=[];for(n in s)r=a[n],i=s[n],r?(i.oldValue=r.value,_t(i,"update",t,e),i.def&&i.def.componentUpdated&&u.push(i)):(_t(i,"bind",t,e),i.def&&i.def.inserted&&c.push(i));if(c.length){var l=function(){c.forEach(function(n){_t(n,"inserted",t,e)})};o?K(t.data.hook||(t.data.hook={}),"insert",l,"dir-insert"):l()}if(u.length&&K(t.data.hook||(t.data.hook={}),"postpatch",function(){u.forEach(function(n){_t(n,"componentUpdated",t,e)})},"dir-postpatch"),!o)for(n in a)s[n]||_t(a[n],"unbind",e)}}function gt(e,t){var n=Object.create(null);if(!e)return n;var r,i;for(r=0;r<e.length;r++)i=e[r],i.modifiers||(i.modifiers=Zi),n[yt(i)]=i,i.def=Ne(t.$options,"directives",i.name,!0);return n}function yt(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function _t(e,t,n,r){var i=e.def&&e.def[t];i&&i(n.elm,e,n,r)}function bt(e,t){if(e.data.attrs||t.data.attrs){var n,r,i,o=t.elm,a=e.data.attrs||{},s=t.data.attrs||{};s.__ob__&&(s=t.data.attrs=u({},s));for(n in s)r=s[n],i=a[n],i!==r&&$t(o,n,r);for(n in a)null==s[n]&&(Li(n)?o.removeAttributeNS(ji,Ni(n)):Si(n)||o.removeAttribute(n))}}function $t(e,t,n){Ei(t)?Di(n)?e.removeAttribute(t):e.setAttribute(t,t):Si(t)?e.setAttribute(t,Di(n)||"false"===n?"false":"true"):Li(t)?Di(n)?e.removeAttributeNS(ji,Ni(t)):e.setAttributeNS(ji,t,n):Di(n)?e.removeAttribute(t):e.setAttribute(t,n)}function wt(e,t){var n=t.elm,r=t.data,i=e.data;if(r.staticClass||r.class||i&&(i.staticClass||i.class)){var o=ze(t),a=n._transitionClasses;a&&(o=qe(o,Ke(a))),o!==n._prevClass&&(n.setAttribute("class",o),n._prevClass=o)}}function Ct(e,t){if(e.data.on||t.data.on){var n=t.data.on||{},r=e.data.on||{},i=t.elm._v_add||(t.elm._v_add=function(e,n,r){t.elm.addEventListener(e,n,r)}),o=t.elm._v_remove||(t.elm._v_remove=function(e,n){t.elm.removeEventListener(e,n)});W(n,r,i,o,t.context)}}function xt(e,t){if(e.data.domProps||t.data.domProps){var n,r,i=t.elm,o=e.data.domProps||{},a=t.data.domProps||{};a.__ob__&&(a=t.data.domProps=u({},a));for(n in o)null==a[n]&&(i[n]="");for(n in a)if("textContent"!==n&&"innerHTML"!==n||!t.children||(t.children.length=0),r=a[n],"value"===n){i._value=r;var s=null==r?"":String(r);i.value===s||i.composing||(i.value=s)}else i[n]=r}}function kt(e,t){if(e.data&&e.data.style||t.data.style){var n,r,i=t.elm,o=e.data.style||{},a=t.data.style||{};if("string"==typeof a)return void(i.style.cssText=a);var s=a.__ob__;Array.isArray(a)&&(a=t.data.style=d(a)),s&&(a=t.data.style=u({},a));for(r in o)null==a[r]&&no(i,r,"");for(r in a)n=a[r],n!==o[r]&&no(i,r,null==n?"":n)}}function At(e,t){if(t&&t.trim())if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" "+e.getAttribute("class")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Ot(e,t){if(t&&t.trim())if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t);else{for(var n=" "+e.getAttribute("class")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");e.setAttribute("class",n.trim())}}function Tt(e){vo(function(){vo(e)})}function St(e,t){(e._transitionClasses||(e._transitionClasses=[])).push(t),At(e,t)}function Et(e,t){e._transitionClasses&&r(e._transitionClasses,t),Ot(e,t)}function jt(e,t,n){var r=Lt(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===so?lo:po,c=0,u=function(){e.removeEventListener(s,l),n()},l=function(t){t.target===e&&++c>=a&&u()};setTimeout(function(){c<a&&u()},o+1),e.addEventListener(s,l)}function Lt(e,t){var n,r=window.getComputedStyle(e),i=r[uo+"Delay"].split(", "),o=r[uo+"Duration"].split(", "),a=Nt(i,o),s=r[fo+"Delay"].split(", "),c=r[fo+"Duration"].split(", "),u=Nt(s,c),l=0,f=0;t===so?a>0&&(n=so,l=a,f=o.length):t===co?u>0&&(n=co,l=u,f=c.length):(l=Math.max(a,u),n=l>0?a>u?so:co:null,f=n?n===so?o.length:c.length:0);var d=n===so&&ho.test(r[uo+"Property"]);return{type:n,timeout:l,propCount:f,hasTransform:d}}function Nt(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return Dt(t)+Dt(e[n])}))}function Dt(e){return 1e3*Number(e.slice(0,-1))}function Mt(e){var t=e.elm;t._leaveCb&&(t._leaveCb.cancelled=!0,t._leaveCb());var n=Rt(e.data.transition);if(n&&!t._enterCb&&1===t.nodeType){var r=n.css,i=n.type,o=n.enterClass,a=n.enterActiveClass,s=n.appearClass,c=n.appearActiveClass,u=n.beforeEnter,l=n.enter,f=n.afterEnter,d=n.enterCancelled,p=n.beforeAppear,v=n.appear,h=n.afterAppear,m=n.appearCancelled,g=mi.$vnode,y=g&&g.parent?g.parent.context:mi,_=!y._isMounted||!e.isRootInsert;if(!_||v||""===v){var b=_?s:o,$=_?c:a,w=_?p||u:u,C=_&&"function"==typeof v?v:l,x=_?h||f:f,k=_?m||d:d,A=r!==!1&&!Jr,O=C&&(C._length||C.length)>1,T=t._enterCb=It(function(){A&&Et(t,$),T.cancelled?(A&&Et(t,b),k&&k(t)):x&&x(t),t._enterCb=null});e.data.show||K(e.data.hook||(e.data.hook={}),"insert",function(){var n=t.parentNode,r=n&&n._pending&&n._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),C&&C(t,T)},"transition-insert"),w&&w(t),A&&(St(t,b),St(t,$),Tt(function(){Et(t,b),T.cancelled||O||jt(t,i,T)})),e.data.show&&C&&C(t,T),A||O||T()}}}function Pt(e,t){function n(){m.cancelled||(e.data.show||((r.parentNode._pending||(r.parentNode._pending={}))[e.key]=e),u&&u(r),v&&(St(r,s),St(r,c),Tt(function(){Et(r,s),m.cancelled||h||jt(r,a,m)})),l&&l(r,m),v||h||m())}var r=e.elm;r._enterCb&&(r._enterCb.cancelled=!0,r._enterCb());var i=Rt(e.data.transition);if(!i)return t();if(!r._leaveCb&&1===r.nodeType){var o=i.css,a=i.type,s=i.leaveClass,c=i.leaveActiveClass,u=i.beforeLeave,l=i.leave,f=i.afterLeave,d=i.leaveCancelled,p=i.delayLeave,v=o!==!1&&!Jr,h=l&&(l._length||l.length)>1,m=r._leaveCb=It(function(){r.parentNode&&r.parentNode._pending&&(r.parentNode._pending[e.key]=null),v&&Et(r,c),m.cancelled?(v&&Et(r,s),d&&d(r)):(t(),f&&f(r)),r._leaveCb=null});p?p(n):n()}}function Rt(e){if(e){if("object"==typeof e){var t={};return e.css!==!1&&u(t,mo(e.name||"v")),u(t,e),t}return"string"==typeof e?mo(e):void 0}}function It(e){var t=!1;return function(){t||(t=!0,e())}}function Bt(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=m(r,Ht(a))>-1,a.selected!==o&&(a.selected=o);else if(h(Ht(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function Ft(e,t){for(var n=0,r=t.length;n<r;n++)if(h(Ht(t[n]),e))return!1;return!0}function Ht(e){return"_value"in e?e._value:e.value}function Ut(e){e.target.composing=!0}function zt(e){e.target.composing=!1,Vt(e.target,"input")}function Vt(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Jt(e){return!e.child||e.data&&e.data.transition?e:Jt(e.child._vnode)}function qt(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?qt(ee(t.children)):e}function Kt(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;
for(var o in i)t[Lr(o)]=i[o].fn;return t}function Wt(e,t){return/\d-keep-alive$/.test(t.tag)?e("keep-alive"):null}function Zt(e){for(;e=e.parent;)if(e.data.transition)return!0}function Gt(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Yt(e){e.data.newPos=e.elm.getBoundingClientRect()}function Qt(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}function Xt(e,t){var n=document.createElement("div");return n.innerHTML='<div a="'+e+'">',n.innerHTML.indexOf(t)>0}function en(e){return Eo.innerHTML=e,Eo.textContent}function tn(e,t){return t&&(e=e.replace(ba,"\n")),e.replace(ya,"<").replace(_a,">").replace($a,"&").replace(wa,'"')}function nn(e,t){function n(t){f+=t,e=e.substring(t)}function r(){var t=e.match(Ro);if(t){var r={tagName:t[1],attrs:[],start:f};n(t[0].length);for(var i,o;!(i=e.match(Io))&&(o=e.match(Do));)n(o[0].length),r.attrs.push(o);if(i)return r.unarySlash=i[1],n(i[0].length),r.end=f,r}}function i(e){var n=e.tagName,r=e.unarySlash;u&&("p"===s&&Bi(n)&&o("",s),Ii(n)&&s===n&&o("",n));for(var i=l(n)||"html"===n&&"head"===s||!!r,a=e.attrs.length,f=new Array(a),d=0;d<a;d++){var p=e.attrs[d];zo&&p[0].indexOf('""')===-1&&(""===p[3]&&delete p[3],""===p[4]&&delete p[4],""===p[5]&&delete p[5]);var v=p[3]||p[4]||p[5]||"";f[d]={name:p[1],value:tn(v,t.shouldDecodeNewlines)}}i||(c.push({tag:n,attrs:f}),s=n,r=""),t.start&&t.start(n,f,i,e.start,e.end)}function o(e,n,r,i){var o;if(null==r&&(r=f),null==i&&(i=f),n){var a=n.toLowerCase();for(o=c.length-1;o>=0&&c[o].tag.toLowerCase()!==a;o--);}else o=0;if(o>=0){for(var u=c.length-1;u>=o;u--)t.end&&t.end(c[u].tag,r,i);c.length=o,s=o&&c[o-1].tag}else"br"===n.toLowerCase()?t.start&&t.start(n,[],!0,r,i):"p"===n.toLowerCase()&&(t.start&&t.start(n,[],!1,r,i),t.end&&t.end(n,r,i))}for(var a,s,c=[],u=t.expectHTML,l=t.isUnaryTag||Ir,f=0;e;){if(a=e,s&&ma(s,t.sfc,c)){var d=s.toLowerCase(),p=ga[d]||(ga[d]=new RegExp("([\\s\\S]*?)(</"+d+"[^>]*>)","i")),v=0,h=e.replace(p,function(e,n,r){return v=r.length,"script"!==d&&"style"!==d&&"noscript"!==d&&(n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),t.chars&&t.chars(n),""});f+=e.length-h.length,e=h,o("</"+d+">",d,f-v,f)}else{var m=e.indexOf("<");if(0===m){if(Ho.test(e)){var g=e.indexOf("-->");if(g>=0){n(g+3);continue}}if(Uo.test(e)){var y=e.indexOf("]>");if(y>=0){n(y+2);continue}}var _=e.match(Fo);if(_){n(_[0].length);continue}var b=e.match(Bo);if(b){var $=f;n(b[0].length),o(b[0],b[1],$,f);continue}var w=r();if(w){i(w);continue}}var C=void 0,x=void 0,k=void 0;if(m>0){for(x=e.slice(m);!(Bo.test(x)||Ro.test(x)||Ho.test(x)||Uo.test(x)||(k=x.indexOf("<",1),k<0));)m+=k,x=e.slice(m);C=e.substring(0,m),n(m)}m<0&&(C=e,e=""),t.chars&&C&&t.chars(C)}if(e===a&&t.chars){t.chars(e);break}}o()}function rn(e){function t(){(a||(a=[])).push(e.slice(d,i).trim()),d=i+1}var n,r,i,o,a,s=!1,c=!1,u=0,l=0,f=0,d=0;for(i=0;i<e.length;i++)if(r=n,n=e.charCodeAt(i),s)39===n&&92!==r&&(s=!s);else if(c)34===n&&92!==r&&(c=!c);else if(124!==n||124===e.charCodeAt(i+1)||124===e.charCodeAt(i-1)||u||l||f)switch(n){case 34:c=!0;break;case 39:s=!0;break;case 40:f++;break;case 41:f--;break;case 91:l++;break;case 93:l--;break;case 123:u++;break;case 125:u--}else void 0===o?(d=i+1,o=e.slice(0,i).trim()):t();if(void 0===o?o=e.slice(0,i).trim():0!==d&&t(),a)for(i=0;i<a.length;i++)o=on(o,a[i]);return o}function on(e,t){var n=t.indexOf("(");if(n<0)return'_f("'+t+'")('+e+")";var r=t.slice(0,n),i=t.slice(n+1);return'_f("'+r+'")('+e+","+i}function an(e,t){var n=t?ka(t):Ca;if(n.test(e)){for(var r,i,o=[],a=n.lastIndex=0;r=n.exec(e);){i=r.index,i>a&&o.push(JSON.stringify(e.slice(a,i)));var s=rn(r[1].trim());o.push("_s("+s+")"),a=i+r[0].length}return a<e.length&&o.push(JSON.stringify(e.slice(a))),o.join("+")}}function sn(e){console.error("[Vue parser]: "+e)}function cn(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function un(e,t,n){(e.props||(e.props=[])).push({name:t,value:n})}function ln(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n})}function fn(e,t,n,r,i,o){(e.directives||(e.directives=[])).push({name:t,rawName:n,value:r,arg:i,modifiers:o})}function dn(e,t,n,r,i){r&&r.capture&&(delete r.capture,t="!"+t);var o;r&&r.native?(delete r.native,o=e.nativeEvents||(e.nativeEvents={})):o=e.events||(e.events={});var a={value:n,modifiers:r},s=o[t];Array.isArray(s)?i?s.unshift(a):s.push(a):s?o[t]=i?[a,s]:[s,a]:o[t]=a}function pn(e,t,n){var r=vn(e,":"+t)||vn(e,"v-bind:"+t);if(null!=r)return r;if(n!==!1){var i=vn(e,t);if(null!=i)return JSON.stringify(i)}}function vn(e,t){var n;if(null!=(n=e.attrsMap[t]))for(var r=e.attrsList,i=0,o=r.length;i<o;i++)if(r[i].name===t){r.splice(i,1);break}return n}function hn(e,t){Vo=t.warn||sn,Jo=t.getTagNamespace||Ir,qo=t.mustUseProp||Ir,Ko=t.isPreTag||Ir,Wo=cn(t.modules,"preTransformNode"),Zo=cn(t.modules,"transformNode"),Go=cn(t.modules,"postTransformNode"),Yo=t.delimiters;var n,r,i=[],o=t.preserveWhitespace!==!1,a=!1,s=!1;return nn(e,{expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,shouldDecodeNewlines:t.shouldDecodeNewlines,start:function(e,o,c){function u(e){}var l=r&&r.ns||Jo(e);t.isIE&&"svg"===l&&(o=Ln(o));var f={type:1,tag:e,attrsList:o,attrsMap:Sn(o,t.isIE),parent:r,children:[]};l&&(f.ns=l),jn(f)&&(f.forbidden=!0);for(var d=0;d<Wo.length;d++)Wo[d](f,t);if(a||(mn(f),f.pre&&(a=!0)),Ko(f.tag)&&(s=!0),a)gn(f);else{bn(f),$n(f),Cn(f),yn(f),f.plain=!f.key&&!o.length,_n(f),xn(f),kn(f);for(var p=0;p<Zo.length;p++)Zo[p](f,t);An(f)}n?i.length||n.if&&f.else&&(u(f),n.elseBlock=f):(n=f,u(n)),r&&!f.forbidden&&(f.else?wn(f,r):(r.children.push(f),f.parent=r)),c||(r=f,i.push(f));for(var v=0;v<Go.length;v++)Go[v](f,t)},end:function(){var e=i[i.length-1],t=e.children[e.children.length-1];t&&3===t.type&&" "===t.text&&e.children.pop(),i.length-=1,r=i[i.length-1],e.pre&&(a=!1),Ko(e.tag)&&(s=!1)},chars:function(e){if(r&&(e=s||e.trim()?Da(e):o&&r.children.length?" ":"")){var t;!a&&" "!==e&&(t=an(e,Yo))?r.children.push({type:2,expression:t,text:e}):(e=e.replace(Na,""),r.children.push({type:3,text:e}))}}}),n}function mn(e){null!=vn(e,"v-pre")&&(e.pre=!0)}function gn(e){var t=e.attrsList.length;if(t)for(var n=e.attrs=new Array(t),r=0;r<t;r++)n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)};else e.pre||(e.plain=!0)}function yn(e){var t=pn(e,"key");t&&(e.key=t)}function _n(e){var t=pn(e,"ref");t&&(e.ref=t,e.refInFor=On(e))}function bn(e){var t;if(t=vn(e,"v-for")){var n=t.match(Oa);if(!n)return;e.for=n[2].trim();var r=n[1].trim(),i=r.match(Ta);i?(e.alias=i[1].trim(),e.iterator1=i[2].trim(),i[3]&&(e.iterator2=i[3].trim())):e.alias=r}}function $n(e){var t=vn(e,"v-if");t&&(e.if=t),null!=vn(e,"v-else")&&(e.else=!0)}function wn(e,t){var n=En(t.children);n&&n.if&&(n.elseBlock=e)}function Cn(e){var t=vn(e,"v-once");null!=t&&(e.once=!0)}function xn(e){if("slot"===e.tag)e.slotName=pn(e,"name");else{var t=pn(e,"slot");t&&(e.slotTarget=t)}}function kn(e){var t;(t=pn(e,"is"))&&(e.component=t),null!=vn(e,"inline-template")&&(e.inlineTemplate=!0)}function An(e){var t,n,r,i,o,a,s,c,u=e.attrsList;for(t=0,n=u.length;t<n;t++)if(r=i=u[t].name,o=u[t].value,Aa.test(r))if(e.hasBindings=!0,s=Tn(r),s&&(r=r.replace(La,"")),Sa.test(r))r=r.replace(Sa,""),s&&s.prop&&(c=!0,r=Lr(r),"innerHtml"===r&&(r="innerHTML")),c||qo(r)?un(e,r,o):ln(e,r,o);else if(Ea.test(r))r=r.replace(Ea,""),dn(e,r,o,s);else{r=r.replace(Aa,"");var l=r.match(ja);l&&(a=l[1])&&(r=r.slice(0,-(a.length+1))),fn(e,r,i,o,a,s)}else ln(e,r,JSON.stringify(o))}function On(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}function Tn(e){var t=e.match(La);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function Sn(e,t){for(var n={},r=0,i=e.length;r<i;r++)n[e[r].name]=e[r].value;return n}function En(e){for(var t=e.length;t--;)if(e[t].tag)return e[t]}function jn(e){return"style"===e.tag||"script"===e.tag&&(!e.attrsMap.type||"text/javascript"===e.attrsMap.type)}function Ln(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];Ma.test(r.name)||(r.name=r.name.replace(Pa,""),t.push(r))}return t}function Nn(e,t){e&&(Qo=Ra(t.staticKeys||""),Xo=t.isReservedTag||function(){return!1},Mn(e),Pn(e,!1))}function Dn(e){return n("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(e?","+e:""))}function Mn(e){if(e.static=Rn(e),1===e.type)for(var t=0,n=e.children.length;t<n;t++){var r=e.children[t];Mn(r),r.static||(e.static=!1)}}function Pn(e,t){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=t),e.static)return void(e.staticRoot=!0);if(e.children)for(var n=0,r=e.children.length;n<r;n++)Pn(e.children[n],t||!!e.for)}}function Rn(e){return 2!==e.type&&(3===e.type||!(!e.pre&&(e.hasBindings||e.if||e.for||Sr(e.tag)||!Xo(e.tag)||In(e)||!Object.keys(e).every(Qo))))}function In(e){for(;e.parent;){if(e=e.parent,"template"!==e.tag)return!1;if(e.for)return!0}return!1}function Bn(e,t){var n=t?"nativeOn:{":"on:{";for(var r in e)n+='"'+r+'":'+Fn(e[r])+",";return n.slice(0,-1)+"}"}function Fn(e){if(e){if(Array.isArray(e))return"["+e.map(Fn).join(",")+"]";if(e.modifiers){var t="",n=[];for(var r in e.modifiers)Fa[r]?t+=Fa[r]:n.push(r);n.length&&(t=Hn(n)+t);var i=Ia.test(e.value)?e.value+"($event)":e.value;return"function($event){"+t+i+"}"}return Ia.test(e.value)?e.value:"function($event){"+e.value+"}"}return"function(){}"}function Hn(e){var t=1===e.length?Un(e[0]):Array.prototype.concat.apply([],e.map(Un));return Array.isArray(t)?"if("+t.map(function(e){return"$event.keyCode!=="+e}).join("&&")+")return;":"if($event.keyCode!=="+t+")return;"}function Un(e){return parseInt(e,10)||Ba[e]||"_k("+JSON.stringify(e)+")"}function zn(e,t){e.wrapData=function(e){return"_b("+e+","+t.value+(t.modifiers&&t.modifiers.prop?",true":"")+")"}}function Vn(e,t){var n=ia,r=ia=[],i=oa;oa=0,aa=t,ea=t.warn||sn,ta=cn(t.modules,"transformCode"),na=cn(t.modules,"genData"),ra=t.directives||{};var o=e?Jn(e):'_h("div")';return ia=n,oa=i,{render:"with(this){return "+o+"}",staticRenderFns:r}}function Jn(e){if(e.staticRoot&&!e.staticProcessed)return qn(e);if(e.once&&!e.onceProcessed)return Kn(e);if(e.for&&!e.forProcessed)return Gn(e);if(e.if&&!e.ifProcessed)return Wn(e);if("template"!==e.tag||e.slotTarget){if("slot"===e.tag)return nr(e);var t;if(e.component)t=rr(e.component,e);else{var n=e.plain?void 0:Yn(e),r=e.inlineTemplate?null:Xn(e);t="_h('"+e.tag+"'"+(n?","+n:"")+(r?","+r:"")+")"}for(var i=0;i<ta.length;i++)t=ta[i](e,t);return t}return Xn(e)||"void 0"}function qn(e){return e.staticProcessed=!0,ia.push("with(this){return "+Jn(e)+"}"),"_m("+(ia.length-1)+(e.staticInFor?",true":"")+")"}function Kn(e){if(e.onceProcessed=!0,e.staticInFor){for(var t="",n=e.parent;n;){if(n.for){t=n.key;break}n=n.parent}return t?"_o("+Jn(e)+","+oa++ +(t?","+t:"")+")":Jn(e)}return qn(e)}function Wn(e){var t=e.if;return e.ifProcessed=!0,"("+t+")?"+Jn(e)+":"+Zn(e)}function Zn(e){return e.elseBlock?Jn(e.elseBlock):"_e()"}function Gn(e){var t=e.for,n=e.alias,r=e.iterator1?","+e.iterator1:"",i=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,"_l(("+t+"),function("+n+r+i+"){return "+Jn(e)+"})"}function Yn(e){var t="{",n=Qn(e);n&&(t+=n+","),e.key&&(t+="key:"+e.key+","),e.ref&&(t+="ref:"+e.ref+","),e.refInFor&&(t+="refInFor:true,"),e.component&&(t+='tag:"'+e.tag+'",'),e.slotTarget&&(t+="slot:"+e.slotTarget+",");for(var r=0;r<na.length;r++)t+=na[r](e);if(e.attrs&&(t+="attrs:{"+ir(e.attrs)+"},"),e.props&&(t+="domProps:{"+ir(e.props)+"},"),e.events&&(t+=Bn(e.events)+","),e.nativeEvents&&(t+=Bn(e.nativeEvents,!0)+","),e.inlineTemplate){var i=e.children[0];if(1===i.type){var o=Vn(i,aa);t+="inlineTemplate:{render:function(){"+o.render+"},staticRenderFns:["+o.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}return t=t.replace(/,$/,"")+"}",e.wrapData&&(t=e.wrapData(t)),t}function Qn(e){var t=e.directives;if(t){var n,r,i,o,a="directives:[",s=!1;for(n=0,r=t.length;n<r;n++){i=t[n],o=!0;var c=ra[i.name]||Ha[i.name];c&&(o=!!c(e,i,ea)),o&&(s=!0,a+='{name:"'+i.name+'",rawName:"'+i.rawName+'"'+(i.value?",value:("+i.value+"),expression:"+JSON.stringify(i.value):"")+(i.arg?',arg:"'+i.arg+'"':"")+(i.modifiers?",modifiers:"+JSON.stringify(i.modifiers):"")+"},")}return s?a.slice(0,-1)+"]":void 0}}function Xn(e){if(e.children.length)return"["+e.children.map(er).join(",")+"]"}function er(e){return 1===e.type?Jn(e):tr(e)}function tr(e){return 2===e.type?e.expression:JSON.stringify(e.text)}function nr(e){var t=e.slotName||'"default"',n=Xn(e);return"_t("+t+(n?","+n:"")+")"}function rr(e,t){var n=t.inlineTemplate?null:Xn(t);return"_h("+e+","+Yn(t)+(n?","+n:"")+")"}function ir(e){for(var t="",n=0;n<e.length;n++){var r=e[n];t+='"'+r.name+'":'+r.value+","}return t.slice(0,-1)}function or(e,t){var n=hn(e.trim(),t);Nn(n,t);var r=Vn(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}}function ar(e,t){var n=(t.warn||sn,vn(e,"class"));n&&(e.staticClass=JSON.stringify(n));var r=pn(e,"class",!1);r&&(e.classBinding=r)}function sr(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}function cr(e){var t=pn(e,"style",!1);t&&(e.styleBinding=t)}function ur(e){return e.styleBinding?"style:("+e.styleBinding+"),":""}function lr(e){if(ca=e,sa=ca.length,la=fa=da=0,e.indexOf("[")<0)return{exp:e,idx:null};for(;!dr();)ua=fr(),pr(ua)?hr(ua):91===ua&&vr(ua);return{exp:e.substring(0,fa),idx:e.substring(fa+1,da)}}function fr(){return ca.charCodeAt(++la)}function dr(){return la>=sa}function pr(e){return 34===e||39===e}function vr(e){var t=1;for(fa=la;!dr();)if(e=fr(),pr(e))hr(e);else if(91===e&&t++,93===e&&t--,0===t){da=la;break}}function hr(e){for(var t=e;!dr()&&(e=fr(),e!==t););}function mr(e,t,n){pa=n;var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;return"select"===o?br(e,r,i):"input"===o&&"checkbox"===a?gr(e,r,i):"input"===o&&"radio"===a?yr(e,r,i):_r(e,r,i),!0}function gr(e,t,n){var r=n&&n.number,i=pn(e,"value")||"null",o=pn(e,"true-value")||"true",a=pn(e,"false-value")||"false";un(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1:_q("+t+","+o+")"),dn(e,"change","var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$c){$$i<0&&("+t+"=$$a.concat($$v))}else{$$i>-1&&("+t+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+t+"=$$c}",null,!0)}function yr(e,t,n){var r=n&&n.number,i=pn(e,"value")||"null";i=r?"_n("+i+")":i,un(e,"checked","_q("+t+","+i+")"),dn(e,"change",$r(t,i),null,!0)}function _r(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=o||Vr&&"range"===r?"change":"input",u=!o&&"range"!==r,l="input"===e.tag||"textarea"===e.tag,f=l?"$event.target.value"+(s?".trim()":""):"$event";f=a||"number"===r?"_n("+f+")":f;var d=$r(t,f);l&&u&&(d="if($event.target.composing)return;"+d),un(e,"value",l?"_s("+t+")":"("+t+")"),dn(e,c,d,null,!0)}function br(e,t,n){var r=n&&n.number,i='Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(r?"_n(val)":"val")+"})"+(null==e.attrsMap.multiple?"[0]":""),o=$r(t,i);dn(e,"change",o,null,!0)}function $r(e,t){var n=lr(e);return null===n.idx?e+"="+t:"var $$exp = "+n.exp+", $$idx = "+n.idx+";if (!Array.isArray($$exp)){"+e+"="+t+"}else{$$exp.splice($$idx, 1, "+t+")}"}function wr(e,t){t.value&&un(e,"textContent","_s("+t.value+")")}function Cr(e,t){t.value&&un(e,"innerHTML","_s("+t.value+")")}function xr(e,t){return t=t?u(u({},Ka),t):Ka,or(e,t)}function kr(e,t,n){var r=(t&&t.warn||$i,t&&t.delimiters?String(t.delimiters)+e:e);if(qa[r])return qa[r];var i={},o=xr(e,t);i.render=Ar(o.render);var a=o.staticRenderFns.length;i.staticRenderFns=new Array(a);for(var s=0;s<a;s++)i.staticRenderFns[s]=Ar(o.staticRenderFns[s]);return qa[r]=i}function Ar(e){try{return new Function(e)}catch(e){return p}}function Or(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}var Tr,Sr=n("slot,component",!0),Er=Object.prototype.hasOwnProperty,jr=/-(\w)/g,Lr=a(function(e){return e.replace(jr,function(e,t){return t?t.toUpperCase():""})}),Nr=a(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),Dr=/([^-])([A-Z])/g,Mr=a(function(e){return e.replace(Dr,"$1-$2").replace(Dr,"$1-$2").toLowerCase()}),Pr=Object.prototype.toString,Rr="[object Object]",Ir=function(){return!1},Br={optionMergeStrategies:Object.create(null),silent:!1,devtools:!1,errorHandler:null,ignoredElements:null,keyCodes:Object.create(null),isReservedTag:Ir,isUnknownElement:Ir,getTagNamespace:p,mustUseProp:Ir,_assetTypes:["component","directive","filter"],_lifecycleHooks:["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated"],_maxUpdateCount:100,_isServer:!1},Fr=/[^\w.$]/,Hr="__proto__"in{},Ur="undefined"!=typeof window&&"[object Object]"!==Object.prototype.toString.call(window),zr=Ur&&window.navigator.userAgent.toLowerCase(),Vr=zr&&/msie|trident/.test(zr),Jr=zr&&zr.indexOf("msie 9.0")>0,qr=zr&&zr.indexOf("edge/")>0,Kr=zr&&zr.indexOf("android")>0,Wr=zr&&/iphone|ipad|ipod|ios/.test(zr),Zr=Ur&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,Gr=function(){function e(){r=!1;var e=n.slice(0);n.length=0;for(var t=0;t<e.length;t++)e[t]()}var t,n=[],r=!1;if("undefined"!=typeof Promise&&b(Promise)){var i=Promise.resolve();t=function(){i.then(e),Wr&&setTimeout(p)}}else if("undefined"==typeof MutationObserver||!b(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())t=function(){setTimeout(e,0)};else{var o=1,a=new MutationObserver(e),s=document.createTextNode(String(o));a.observe(s,{characterData:!0}),t=function(){o=(o+1)%2,s.data=String(o)}}return function(e,i){var o=i?function(){e.call(i)}:e;n.push(o),r||(r=!0,t())}}();Tr="undefined"!=typeof Set&&b(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return void 0!==this.set[e]},e.prototype.add=function(e){this.set[e]=1},e.prototype.clear=function(){this.set=Object.create(null)},e}();var Yr=0,Qr=function(){this.id=Yr++,this.subs=[]};Qr.prototype.addSub=function(e){this.subs.push(e)},Qr.prototype.removeSub=function(e){r(this.subs,e)},Qr.prototype.depend=function(){Qr.target&&Qr.target.addDep(this)},Qr.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},Qr.target=null;var Xr=[],ei=[],ti={},ni=!1,ri=!1,ii=0,oi=0,ai=function(e,t,n,r){void 0===r&&(r={}),this.vm=e,e._watchers.push(this),this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.expression=t.toString(),this.cb=n,this.id=++oi,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Tr,this.newDepIds=new Tr,"function"==typeof t?this.getter=t:(this.getter=_(t),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};ai.prototype.get=function(){$(this);var e=this.getter.call(this.vm,this.vm);return this.deep&&A(e),w(),this.cleanupDeps(),e},ai.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},ai.prototype.cleanupDeps=function(){for(var e=this,t=this.deps.length;t--;){var n=e.deps[t];e.newDepIds.has(n.id)||n.removeSub(e)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},ai.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():k(this)},ai.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||l(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){if(!Br.errorHandler)throw e;Br.errorHandler.call(null,e,this.vm)}else this.cb.call(this.vm,e,t)}}},ai.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},ai.prototype.depend=function(){for(var e=this,t=this.deps.length;t--;)e.deps[t].depend()},ai.prototype.teardown=function(){var e=this;if(this.active){this.vm._isBeingDestroyed||this.vm._vForRemoving||r(this.vm._watchers,this);for(var t=this.deps.length;t--;)e.deps[t].removeSub(e);this.active=!1}};var si=new Tr,ci=Array.prototype,ui=Object.create(ci);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=ci[e];y(ui,e,function(){for(var n=arguments,r=arguments.length,i=new Array(r);r--;)i[r]=n[r];var o,a=t.apply(this,i),s=this.__ob__;switch(e){case"push":o=i;break;case"unshift":o=i;break;case"splice":o=i.slice(2)}return o&&s.observeArray(o),s.dep.notify(),a})});var li=Object.getOwnPropertyNames(ui),fi={shouldConvert:!0,isSettingProps:!1},di=function(e){if(this.value=e,this.dep=new Qr,this.vmCount=0,y(e,"__ob__",this),Array.isArray(e)){var t=Hr?T:S;t(e,ui,li),this.observeArray(e)}else this.walk(e)};di.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)j(e,t[n],e[t[n]])},di.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)E(e[t])};var pi={enumerable:!0,configurable:!0,get:p,set:p},vi=function(e,t,n,r,i,o,a,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=o,this.context=a,this.functionalContext=void 0,this.key=t&&t.key,this.componentOptions=s,this.child=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1},hi=function(){var e=new vi;return e.text="",e.isComment=!0,e},mi=null,gi={init:se,prepatch:ce,insert:ue,destroy:le},yi=Object.keys(gi),_i=0;Ce(Ae),z(Ae),we(Ae),ne(Ae),_e(Ae);var bi,$i=p,wi=Br.optionMergeStrategies;wi.data=function(e,t,n){return n?e||t?function(){var r="function"==typeof t?t.call(n):t,i="function"==typeof e?e.call(n):void 0;return r?Oe(r,i):i}:void 0:t?"function"!=typeof t?e:e?function(){return Oe(t.call(this),e.call(this))}:t:e},Br._lifecycleHooks.forEach(function(e){wi[e]=Te}),Br._assetTypes.forEach(function(e){wi[e+"s"]=Se}),wi.watch=function(e,t){if(!t)return e;if(!e)return t;var n={};u(n,e);for(var r in t){var i=n[r],o=t[r];i&&!Array.isArray(i)&&(i=[i]),n[r]=i?i.concat(o):[o]}return n},wi.props=wi.methods=wi.computed=function(e,t){if(!t)return e;if(!e)return t;var n=Object.create(null);return u(n,e),u(n,t),n};var Ci=function(e,t){return void 0===t?e:t},xi=Object.freeze({defineReactive:j,_toString:e,toNumber:t,makeMap:n,isBuiltInTag:Sr,remove:r,hasOwn:i,isPrimitive:o,cached:a,camelize:Lr,capitalize:Nr,hyphenate:Mr,bind:s,toArray:c,extend:u,isObject:l,isPlainObject:f,toObject:d,noop:p,no:Ir,genStaticKeys:v,looseEqual:h,looseIndexOf:m,isReserved:g,def:y,parsePath:_,hasProto:Hr,inBrowser:Ur,UA:zr,isIE:Vr,isIE9:Jr,isEdge:qr,isAndroid:Kr,isIOS:Wr,devtools:Zr,nextTick:Gr,get _Set(){return Tr},mergeOptions:Le,resolveAsset:Ne,warn:$i,formatComponentName:bi,validateProp:De}),ki={name:"keep-alive",abstract:!0,created:function(){this.cache=Object.create(null)},render:function(){var e=ee(this.$slots.default);if(e&&e.componentOptions){var t=e.componentOptions,n=null==e.key?t.Ctor.cid+"::"+t.tag:e.key;this.cache[n]?e.child=this.cache[n].child:this.cache[n]=e,e.data.keepAlive=!0}return e},destroyed:function(){var e=this;for(var t in this.cache){var n=e.cache[t];re(n.child,"deactivated"),n.child.$destroy()}}},Ai={KeepAlive:ki};Ue(Ae),Object.defineProperty(Ae.prototype,"$isServer",{get:function(){return Br._isServer}}),Ae.version="2.0.5";var Oi,Ti=n("value,selected,checked,muted"),Si=n("contenteditable,draggable,spellcheck"),Ei=n("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),ji="http://www.w3.org/1999/xlink",Li=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Ni=function(e){return Li(e)?e.slice(6,e.length):""},Di=function(e){return null==e||e===!1},Mi={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML",xhtml:"http://www.w3.org/1999/xhtm"},Pi=n("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),Ri=n("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr",!0),Ii=n("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source",!0),Bi=n("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track",!0),Fi=n("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Hi=function(e){return"pre"===e},Ui=function(e){return Pi(e)||Fi(e)},zi=Object.create(null),Vi=Object.freeze({createElement:Ye,createElementNS:Qe,createTextNode:Xe,createComment:et,insertBefore:tt,removeChild:nt,appendChild:rt,parentNode:it,nextSibling:ot,tagName:at,setTextContent:st,childNodes:ct,setAttribute:ut}),Ji={create:function(e,t){lt(t)},update:function(e,t){e.data.ref!==t.data.ref&&(lt(e,!0),lt(t))},destroy:function(e){lt(e,!0)}},qi=new vi("",{},[]),Ki=["create","update","remove","destroy"],Wi={create:mt,update:mt,destroy:function(e){mt(e,qi)}},Zi=Object.create(null),Gi=[Ji,Wi],Yi={create:bt,update:bt},Qi={create:wt,update:wt},Xi={create:Ct,update:Ct},eo={create:xt,update:xt},to=/^--/,no=function(e,t,n){to.test(t)?e.style.setProperty(t,n):e.style[io(t)]=n},ro=["Webkit","Moz","ms"],io=a(function(e){if(Oi=Oi||document.createElement("div"),e=Lr(e),"filter"!==e&&e in Oi.style)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<ro.length;n++){var r=ro[n]+t;if(r in Oi.style)return r}}),oo={create:kt,update:kt},ao=Ur&&!Jr,so="transition",co="animation",uo="transition",lo="transitionend",fo="animation",po="animationend";ao&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(uo="WebkitTransition",lo="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(fo="WebkitAnimation",po="webkitAnimationEnd"));var vo=Ur&&window.requestAnimationFrame||setTimeout,ho=/\b(transform|all)(,|$)/,mo=a(function(e){return{enterClass:e+"-enter",leaveClass:e+"-leave",appearClass:e+"-enter",enterActiveClass:e+"-enter-active",leaveActiveClass:e+"-leave-active",appearActiveClass:e+"-enter-active"}}),go=Ur?{create:function(e,t){t.data.show||Mt(t)},remove:function(e,t){e.data.show?t():Pt(e,t)}}:{},yo=[Yi,Qi,Xi,eo,oo,go],_o=yo.concat(Gi),bo=ht({nodeOps:Vi,modules:_o});Jr&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&Vt(e,"input")});var $o={inserted:function(e,t,n){if("select"===n.tag){var r=function(){Bt(e,t,n.context)};r(),(Vr||qr)&&setTimeout(r,0)}else"textarea"!==n.tag&&"text"!==e.type||t.modifiers.lazy||(Kr||(e.addEventListener("compositionstart",Ut),e.addEventListener("compositionend",zt)),Jr&&(e.vmodel=!0))},componentUpdated:function(e,t,n){if("select"===n.tag){Bt(e,t,n.context);var r=e.multiple?t.value.some(function(t){return Ft(t,e.options)}):t.value!==t.oldValue&&Ft(t.value,e.options);r&&Vt(e,"change")}}},wo={bind:function(e,t,n){var r=t.value;n=Jt(n);var i=n.data&&n.data.transition;r&&i&&!Jr&&Mt(n);var o="none"===e.style.display?"":e.style.display;e.style.display=r?o:"none",e.__vOriginalDisplay=o},update:function(e,t,n){var r=t.value,i=t.oldValue;if(r!==i){n=Jt(n);var o=n.data&&n.data.transition;o&&!Jr?r?(Mt(n),e.style.display=e.__vOriginalDisplay):Pt(n,function(){e.style.display="none"}):e.style.display=r?e.__vOriginalDisplay:"none"}}},Co={model:$o,show:wo},xo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String},ko={name:"transition",props:xo,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(function(e){return e.tag}),n.length)){var r=this.mode,i=n[0];if(Zt(this.$vnode))return i;var o=qt(i);if(!o)return i;if(this._leaving)return Wt(e,i);var a=o.key=null==o.key||o.isStatic?"__v"+(o.tag+this._uid)+"__":o.key,s=(o.data||(o.data={})).transition=Kt(this),c=this._vnode,l=qt(c);if(o.data.directives&&o.data.directives.some(function(e){return"show"===e.name})&&(o.data.show=!0),l&&l.data&&l.key!==a){var f=l.data.transition=u({},s);if("out-in"===r)return this._leaving=!0,K(f,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()},a),Wt(e,i);if("in-out"===r){var d,p=function(){d()};K(s,"afterEnter",p,a),K(s,"enterCancelled",p,a),K(f,"delayLeave",function(e){d=e},a)}}return i}}},Ao=u({tag:String,moveClass:String},xo);delete Ao.mode;var Oo={props:Ao,render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=Kt(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var d=r[f];d.data.transition=a,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var e=this.prevChildren,t=this.moveClass||this.name+"-move";if(e.length&&this.hasMove(e[0].elm,t)){e.forEach(Gt),e.forEach(Yt),e.forEach(Qt);document.body.offsetHeight;e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;St(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(lo,n._moveCb=function e(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(lo,e),n._moveCb=null,Et(n,t))})}})}},methods:{hasMove:function(e,t){if(!ao)return!1;if(null!=this._hasMove)return this._hasMove;St(e,t);var n=Lt(e);return Et(e,t),this._hasMove=n.hasTransform}}},To={Transition:ko,TransitionGroup:Oo};Ae.config.isUnknownElement=Ze,Ae.config.isReservedTag=Ui,Ae.config.getTagNamespace=We,Ae.config.mustUseProp=Ti,u(Ae.options.directives,Co),u(Ae.options.components,To),Ae.prototype.__patch__=Br._isServer?p:bo,Ae.prototype.$mount=function(e,t){return e=e&&!Br._isServer?Ge(e):void 0,this._mount(e,t)},setTimeout(function(){Br.devtools&&Zr&&Zr.emit("init",Ae)},0);var So=!!Ur&&Xt("\n","&#10;"),Eo=document.createElement("div"),jo=/([^\s"'<>\/=]+)/,Lo=/(?:=)/,No=[/"([^"]*)"+/.source,/'([^']*)'+/.source,/([^\s"'=<>`]+)/.source],Do=new RegExp("^\\s*"+jo.source+"(?:\\s*("+Lo.source+")\\s*(?:"+No.join("|")+"))?"),Mo="[a-zA-Z_][\\w\\-\\.]*",Po="((?:"+Mo+"\\:)?"+Mo+")",Ro=new RegExp("^<"+Po),Io=/^\s*(\/?)>/,Bo=new RegExp("^<\\/"+Po+"[^>]*>"),Fo=/^<!DOCTYPE [^>]+>/i,Ho=/^<!--/,Uo=/^<!\[/,zo=!1;"x".replace(/x(.)?/g,function(e,t){zo=""===t});var Vo,Jo,qo,Ko,Wo,Zo,Go,Yo,Qo,Xo,ea,ta,na,ra,ia,oa,aa,sa,ca,ua,la,fa,da,pa,va=n("script,style",!0),ha=function(e){return"lang"===e.name&&"html"!==e.value},ma=function(e,t,n){return!!va(e)||!(!t||"template"!==e||1!==n.length||!n[0].attrs.some(ha))},ga={},ya=/&lt;/g,_a=/&gt;/g,ba=/&#10;/g,$a=/&amp;/g,wa=/&quot;/g,Ca=/\{\{((?:.|\n)+?)\}\}/g,xa=/[-.*+?^${}()|[\]\/\\]/g,ka=a(function(e){var t=e[0].replace(xa,"\\$&"),n=e[1].replace(xa,"\\$&");
return new RegExp(t+"((?:.|\\n)+?)"+n,"g")}),Aa=/^v-|^@|^:/,Oa=/(.*?)\s+(?:in|of)\s+(.*)/,Ta=/\(([^,]*),([^,]*)(?:,([^,]*))?\)/,Sa=/^:|^v-bind:/,Ea=/^@|^v-on:/,ja=/:(.*)$/,La=/\.[^.]+/g,Na=/\u2028|\u2029/g,Da=a(en),Ma=/^xmlns:NS\d+/,Pa=/^NS\d+:/,Ra=a(Dn),Ia=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,Ba={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},Fa={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:"if($event.target !== $event.currentTarget)return;"},Ha={bind:zn,cloak:p},Ua=(new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),{staticKeys:["staticClass"],transformNode:ar,genData:sr}),za={transformNode:cr,genData:ur},Va=[Ua,za],Ja={model:mr,text:wr,html:Cr},qa=Object.create(null),Ka={isIE:Vr,expectHTML:!0,modules:Va,staticKeys:v(Va),directives:Ja,isReservedTag:Ui,isUnaryTag:Ri,mustUseProp:Ti,getTagNamespace:We,isPreTag:Hi},Wa=a(function(e){var t=Ge(e);return t&&t.innerHTML}),Za=Ae.prototype.$mount;return Ae.prototype.$mount=function(e,t){if(e=e&&Ge(e),e===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=Wa(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=Or(e));if(r){var i=kr(r,{warn:$i,shouldDecodeNewlines:So,delimiters:n.delimiters},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return Za.call(this,e,t)},Ae.compile=kr,Ae});

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/ajax-client.js":
/*!****************************!*\
  !*** ./src/ajax-client.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AjaxClient; });
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__);







function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * AjaxClient
 *
 * MIT License
 *
 * @author Tom Misawa (riversun.org@gmail.com,https://github.com/riversun)
 */
var AjaxClient =
/*#__PURE__*/
function () {
  function AjaxClient() {
    _classCallCheck(this, AjaxClient);
  }

  _createClass(AjaxClient, [{
    key: "ajax",
    value: function ajax(options) {
      var url = this._createUrl(options);

      var method = options.type;
      var dataType = options.dataType;
      var data = options.data;
      var headers = options.headers;
      var postBody = null;

      if (method === 'POST') {
        postBody = JSON.stringify(data);

        if (dataType === 'jsonp') {
          //POST and jsonp specified
          throw new Error("type:'POST' and 'dataType:jsonp' are specified together.\n                'POST' and 'jsonp' can not be specified together");
        }
      }

      if (headers && dataType === 'jsonp') {
        //http-headers and jsonp specified
        throw new Error("'headers' and 'dataType:jsonp' can not be specified together.\n           Http headers cannot be sent when using jsonp.");
      }

      var reqParam = {
        url: url,
        method: method,
        body: postBody
      };

      if (headers) {
        reqParam.headers = headers;
      }

      if (dataType === 'json') {
        return this._handleJson(reqParam);
      } else if (dataType === 'jsonp') {
        return this._handleJsonp(reqParam);
      } else {
        throw new Error("dataType must be 'json' or 'jsonp'");
      }
    }
  }, {
    key: "_handleJson",
    value: function _handleJson(reqParam) {
      var asyncResult = new AjaxResult();
      var fetchParam = {
        method: reqParam.method,
        mode: 'cors',
        cache: 'no-cache' //credentials:null,// 'include',
        //referrer: 'no-referrer',

      }; //populate credentials

      if (reqParam.credentials) {
        fetchParam.credentials = reqParam.credentials;
      } //populate headers


      if (reqParam.headers) {
        fetchParam.headers = reqParam.headers;
      } else {
        fetchParam.headers = {
          'Content-Type': 'application/json; charset=utf-8'
        };
      } //populate body


      if (reqParam.body) {
        fetchParam.body = reqParam.body;
      } //execute fetch


      fetch(reqParam.url, fetchParam).then(function (response) {
        if (!response.ok) {
          var errorObj = response.statusText;

          asyncResult._fail(errorObj);

          return;
        }

        return response.json();
      }).then(function (json) {
        asyncResult._success(json);
      }).catch(function (err) {
        var errorObj = err;

        asyncResult._fail(errorObj);
      });
      return asyncResult;
    }
  }, {
    key: "_handleJsonp",
    value: function _handleJsonp(reqParam) {
      var asyncResult = new AjaxResult();
      var scriptEle = document.createElement('script');
      var callbackFuncName = "chatux_".concat(this._createUUID());
      scriptEle.src = "".concat(reqParam.url, "&callback=").concat(callbackFuncName);
      scriptEle.addEventListener('error', function (errorObj) {
        asyncResult._fail(errorObj);
      }); //global object

      window[callbackFuncName] = function (res) {
        delete window[callbackFuncName];

        asyncResult._success(res);
      };

      var parentEle = document.getElementsByTagName('head') ? document.getElementsByTagName('head')[0] : document.body;
      parentEle.appendChild(scriptEle);
      return asyncResult;
    }
  }, {
    key: "_createUrl",
    value: function _createUrl(options) {
      if (options.type === 'POST') {
        //POST
        return options.url;
      } else {
        //GET
        var url = options.url;

        if (options.data) {
          url = url + '?';

          for (var _i = 0, _Object$keys = Object.keys(options.data); _i < _Object$keys.length; _i++) {
            var paramKey = _Object$keys[_i];
            var paramVal = options.data[paramKey];
            url += "".concat(paramKey, "=").concat(paramVal, "&");
          }

          url = url.substring(0, url.length - 1);
        }

        return url;
      }
    }
  }, {
    key: "_createUUID",
    value: function _createUUID() {
      var dateTime = new Date().getTime();
      var uuid = 'xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dateTime + Math.random() * 16) % 16 | 0;
        return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
      });
      return uuid;
    }
  }]);

  return AjaxClient;
}();



var AjaxResult =
/*#__PURE__*/
function () {
  function AjaxResult() {
    _classCallCheck(this, AjaxResult);

    this._successFunc = function () {};

    this._failFunc = function () {};
  }

  _createClass(AjaxResult, [{
    key: "done",
    value: function done(callbackFunc) {
      this._successFunc = callbackFunc;
      return this;
    }
  }, {
    key: "fail",
    value: function fail(callbackFunc) {
      this._failFunc = callbackFunc;
      return this;
    }
  }, {
    key: "_success",
    value: function _success(response) {
      if (this._successFunc) {
        this._successFunc(response);
      }
    }
  }, {
    key: "_fail",
    value: function _fail(response) {
      if (this._failFunc) {
        this._failFunc(response);
      }
    }
  }]);

  return AjaxResult;
}();

/***/ }),

/***/ "./src/app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/app.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/botui-theme-riversun.css":
/*!**************************************!*\
  !*** ./src/botui-theme-riversun.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./botui-theme-riversun.css */ "./node_modules/css-loader/dist/cjs.js!./src/botui-theme-riversun.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/chat-client.js":
/*!****************************!*\
  !*** ./src/chat-client.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatClient; });
/* harmony import */ var _ajax_client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax-client.js */ "./src/ajax-client.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * ChatClient
 *
 * MIT License
 *
 * @author Tom Misawa (riversun.org@gmail.com,https://github.com/riversun)
 */

var ChatClient =
/*#__PURE__*/
function () {
  function ChatClient(opts) {
    _classCallCheck(this, ChatClient);

    this.endpoint = opts.endpoint;
    this.method = 'GET';

    if (opts.method) {
      this.method = opts.method;
    }

    this.dataType = 'json';

    if (opts.dataType) {
      this.dataType = opts.dataType;
    }

    this.errorResponse = {
      output: [{
        type: 'text',
        value: 'An error occurred.'
      }]
    };

    if (opts.errorResponse) {
      this.errorResponse = opts.errorResponse;
    }

    if (opts.headers) {
      this.headers = opts.headers;
    }

    if (opts.params) {
      this.params = opts.params;
    }
  }

  _createClass(ChatClient, [{
    key: "sendMsgToChatServer",
    value: function sendMsgToChatServer(callbackFunc) {
      var _this = this;

      var ac = new _ajax_client_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
      var params;

      if (this.params) {
        params = this.params;
      } else {
        params = {};
      }

      ac.ajax({
        type: this.method,
        url: this.endpoint,
        dataType: this.dataType,
        data: params,
        headers: this.headers
      }).done(function (response) {
        callbackFunc(response);
      }).fail(function (err) {
        var errorResponse = _this.errorResponse;
        callbackFunc(errorResponse);
      });
    }
  }]);

  return ChatClient;
}();



/***/ }),

/***/ "./src/chat-frame.js":
/*!***************************!*\
  !*** ./src/chat-frame.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatFrame; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsframe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsframe */ "./node_modules/jsframe.js/dist/jsframe.min.js");
/* harmony import */ var jsframe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsframe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chat_ux_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-ux-util.js */ "./src/chat-ux-util.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * To show chatWindow/chatArea and start/end button for chat interface
 *
 * MIT License
 *
 * @author Tom Misawa (riversun.org@gmail.com,https://github.com/riversun)
 */

var ChatFrame =
/*#__PURE__*/
function () {
  function ChatFrame(opts) {
    _classCallCheck(this, ChatFrame);

    this.ICON_CROSSMARK = '<i class="fas fa-times"></i>';
    this.ICON_COMMENT = '<i class="fas fa-comment-alt"></i>'; //Setup initial parameters[begin]

    if (!opts) {
      opts = {};
    }

    this.renderMode = this.isMobileDevice() ? 'mobile' : 'pc';

    if (opts.renderMode) {
      if (opts.renderMode === 'auto') {//set render mode as-is.
      } else {
        //force setting specified mode
        this.renderMode = opts.renderMode;
      }
    }

    this.windowParam = {};

    if (opts.window) {
      this.windowParam = opts.window;
    } //Setup initial parameters[end]


    this.jsFrame = new jsframe__WEBPACK_IMPORTED_MODULE_1__["JSFrame"]({
      horizontalAlign: 'right',
      verticalAlign: 'bottom'
    });
    this.frameParam = {
      right: 20,
      bottom: 20,
      size: 60,
      fontSize: 25
    };

    if (opts.wakeupButton) {
      this.frameParam = opts.wakeupButton;
    }

    this.windowSizeParam = {
      width: 360,
      height: 600,
      minHeight: 300,
      minWidth: 200,
      titleHeight: 40
    };

    if (this.windowParam.size) {
      this.windowSizeParam = this.windowParam.size;
    }

    this.appearanceParam = {
      border: {
        shadow: '2px 2px 10px  rgba(0, 0, 0, 0.5)',
        width: 0,
        radius: 6
      },
      titleBar: {
        color: 'white',
        background: '#4784d4',
        leftMargin: this.windowParam.infoUrl ? 40 : 10,
        height: this.windowSizeParam.titleHeight,
        fontSize: 14,
        buttonWidth: 36,
        buttonHeight: 16,
        buttonColor: 'white',
        buttons: [{
          fa: 'fas fa-times',
          name: 'hideButton',
          visible: true
        }],
        buttonsOnLeft: [{
          fa: 'fas fa-comment-alt',
          name: 'info',
          visible: this.windowParam.infoUrl ? true : false
        }]
      }
    };

    if (this.windowParam.appearance) {
      this.appearanceParam = this.windowParam.appearance;
    }

    this.FRAME_NAME = 'chat_window';
    this.BUTTON_STATE_OPEN = 'open_chat_window';
    this.BUTTON_STATE_TRANSITION = 'transition';
    this.BUTTON_STATE_CLOSE = 'close_chat_window';
    this.BUTTON_ID = 'chat_wakeup'; //If true, chat button will disappear when opening the chat window
    //If false,chat button will be shown as a toggle button(OPEN/CLOSE)

    this.buttonOffWhenOpenFrame = false;
    this.buttonState = null;
    this.buttonVanishPoint = {};
    this.frame = null;
    this.showChatBtn = null;
    this.chatAreaEle = null; //Empty implementation for default

    this.onChatFrameCreate = function () {};

    this.onChatFramePause = function () {};

    this.onChatFrameResume = function () {};

    this.holderId = '';
  }
  /**
   * Build chat start button
   */


  _createClass(ChatFrame, [{
    key: "buildChatButton",
    value: function buildChatButton() {
      var p = this.frameParam;
      var btnRight = p.right;
      var btnBottom = p.bottom;
      var btnSize = p.size;
      var btnFontSize = p.fontSize;
      var showChatBtn = document.createElement('div');
      this.showChatBtn = showChatBtn;
      showChatBtn.id = this.BUTTON_ID;

      if (this.renderMode === 'mobile') {
        showChatBtn.className = 'chatux-btn-chat';
      } else {
        showChatBtn.className = 'chatux-btn-chat chatux-btn-chat-pc';
      }

      showChatBtn.onclick = this.toggleChatButtonState.bind(this);
      var style = showChatBtn.style;
      style.right = btnRight + 'px';
      style.bottom = btnBottom + 'px';
      style.width = btnSize + 'px';
      style.height = style.width;
      style.lineHeight = style.width;
      style.fontSize = btnFontSize + 'px';
      document.body.appendChild(showChatBtn); //first call for chat button initialization

      this.toggleChatButtonState();
    }
    /**
     * Toggle chat button state
     */

  }, {
    key: "toggleChatButtonState",
    value: function toggleChatButtonState() {
      var _this = this;

      var showChatBtn = document.querySelector("#".concat(this.BUTTON_ID));

      if (!this.buttonState) {
        //- buttonState not already set
        showChatBtn.innerHTML = this.ICON_COMMENT;
        this.buttonState = this.BUTTON_STATE_OPEN;
      } else if (this.buttonState === this.BUTTON_STATE_OPEN) {
        // - current buttonState is OPEN
        //- Set this state so that trouble does not occur even if the user hits buttons repeatedly
        this.buttonState = this.BUTTON_STATE_TRANSITION;
        this.show(function () {
          if (_this.buttonOffWhenOpenFrame && _this.renderMode === 'pc') {
            _this.setChatButtonVisible(false);
          } else {
            showChatBtn.innerHTML = _this.ICON_CROSSMARK;
          }

          _this.buttonState = _this.BUTTON_STATE_CLOSE;
        });
      } else if (this.buttonState === this.BUTTON_STATE_TRANSITION) {//- Maybe chat button is pressed during the transition
        //Do nothing
      } else {
        this.buttonState = this.BUTTON_STATE_TRANSITION;
        this.hide(function () {
          if (_this.buttonOffWhenOpenFrame && _this.renderMode === 'pc') {
            _this.setChatButtonVisible(true);
          } else {
            showChatBtn.innerHTML = _this.ICON_COMMENT;
          }

          _this.buttonState = _this.BUTTON_STATE_OPEN;
        });
      }
    }
    /**
     * Show Chat UI
     * @param callback
     */

  }, {
    key: "show",
    value: function show(_callback) {
      var _this2 = this;

      if (this.renderMode === 'mobile') {
        // on mobile device
        if (this.chatAreaEle) {
          this.chatAreaEle.classList.replace('chatux-scrn-off', 'chatux-scrn-on');
        }

        if (_callback) {
          _callback();
        }

        this.onChatFrameResume();
      } else {
        //on PC
        var frame = this.jsFrame.getWindowByName(this.FRAME_NAME); //Open minimized window

        frame.control.doDehide({
          callback: function callback(_frame, info) {
            if (_callback) {
              _callback();
            }

            _this2.onChatFrameResume(_frame);
          }
        });
      }
    }
    /**
     * Hide Chat-UI
     * @param callback
     */

  }, {
    key: "hide",
    value: function hide(_callback2) {
      var _this3 = this;

      if (this.renderMode === 'mobile') {
        // on mobile device
        if (this.chatAreaEle) {
          this.chatAreaEle.classList.replace('chatux-scrn-on', 'chatux-scrn-off');
        }

        if (_callback2) {
          _callback2();
        }

        this.onChatFramePause();
      } else {
        //on PC
        var frame = this.jsFrame.getWindowByName(this.FRAME_NAME); //Open minimized window

        frame.control.doHide({
          offset: this.buttonVanishPoint,
          align: 'ABSOLUTE',
          callback: function callback(_frame, info) {
            if (_callback2) {
              _callback2();
            }

            _this3.onChatFramePause(_frame);
          }
        });
      }
    }
    /**
     * Makes chat button visible or invisible.
     * @param isVisible
     */

  }, {
    key: "setChatButtonVisible",
    value: function setChatButtonVisible(isVisible) {
      var chatButton = document.querySelector("#".concat(this.BUTTON_ID));

      if (isVisible) {
        chatButton.classList.add('chatux-btn-on');
      } else {
        chatButton.classList.remove('chatux-btn-on');
      }
    }
    /**
     * Build chat area for mobile devices
     */

  }, {
    key: "buildChatArea",
    value: function buildChatArea() {
      this.chatAreaEle = document.createElement('div');
      document.body.appendChild(this.chatAreaEle);
      this.initializeChatArea();
    }
  }, {
    key: "initializeChatArea",
    value: function initializeChatArea() {
      this.chatAreaEle.style.position = 'fixed';
      this.chatAreaEle.style.left = '0px';
      this.chatAreaEle.style.top = '0px';
      this.chatAreaEle.style.bottom = '0px';
      this.chatAreaEle.style.right = '0px';
      this.chatAreaEle.style.backgroundColor = 'transparent';
      this.chatAreaEle.style.display = 'flex';
      this.chatAreaEle.classList.add('chatux-scrn-off');
      this.chatAreaEle.innerHTML = this.getBotUiInnterHtml();
    }
    /**
     * Returns innterHTML for BotUI
     * @returns {string}
     */

  }, {
    key: "getBotUiInnterHtml",
    value: function getBotUiInnterHtml() {
      return "<div class=\"botui-app-container\" id=\"".concat(this.holderId, "\"><bot-ui></bot-ui></div>");
    }
    /**
     *  Build chat window for PC
     */

  }, {
    key: "buildChatWindow",
    value: function buildChatWindow() {
      var _this4 = this;

      var param = this.frameParam;
      var size = this.windowSizeParam;
      var frmWidth = size.width;
      var frmHeight = size.height;
      var frmHeightMin = size.minHeight;
      var frmWidthMin = size.minWidth;
      var frmTitleHeight = size.titleHeight;
      var frmLeft = -(param.right + frmWidth);
      var frmTop = -(param.bottom + param.size + frmHeight);
      /**
       * Coordinate(left,top) where the window is minimzied
       * @type {{x: number, y: number}}
       */

      this.buttonVanishPoint = {
        x: frmLeft + frmWidth,
        y: frmTop + frmHeight - frmTitleHeight
      }; //Create chat window

      this.frame = this.jsFrame.create({
        name: this.FRAME_NAME,
        title: this.windowParam.title,
        left: frmLeft,
        top: frmTop,
        width: frmWidth,
        height: frmHeight,
        minWidth: frmWidthMin,
        minHeight: frmHeightMin,
        appearanceName: 'material',
        appearanceParam: this.appearanceParam,
        style: {
          backgroundColor: 'rgba(255,255,255,1.0)',
          overflow: 'auto'
        },
        html: '' // 'Chat UI Here'
        //url: // Chat URL here

      }); //Enable helper to act on window's common operations(maximization/minimization and something)

      this.frame.setControl({
        animation: true,
        animationDuration: 200
      }); //Set click event when the close button is clicked

      this.frame.on('hideButton', 'click', function (_frame, evt) {
        _this4.toggleChatButtonState();
      });
      this.frame.on('info', 'click', function (_frame, evt) {
        if (_this4.windowParam.infoUrl) {
          window.open(_this4.windowParam.infoUrl, '_blank');
        }
      }); //Minimize the window first to memory the  initial window position and size.

      this.frame.control.doHide({
        silent: true,
        //means invisible action
        duration: 0,
        align: 'ABSOLUTE',
        //need to set the offset point where window is minimized
        offset: this.buttonVanishPoint,
        callback: function callback(_frame, info) {
          _this4.onChatFrameCreate(_frame);
        }
      });
    }
    /**
     * Build Chat UI and related components like wakeup button
     * @param holderEleId
     */

  }, {
    key: "build",
    value: function build(holderEleId, isAutoOpen) {
      this.holderId = holderEleId;

      if (this.renderMode === 'mobile') {
        // on mobile device
        this.buildChatArea();
        this.buildChatButton();
        this.onChatFrameCreate();
      } else {
        //on PC
        this.buildChatWindow();
        this.frame.setHTML(this.getBotUiInnterHtml());
        this.buildChatButton();
      }

      this.setChatButtonVisible(true);
    }
  }, {
    key: "clear",
    value: function clear() {
      if (document.body.contains(this.chatAreaEle)) {
        document.body.removeChild(this.chatAreaEle);
      }

      if (document.body.contains(this.showChatBtn)) {
        document.body.removeChild(this.showChatBtn);
      }

      if (this.frame) {
        //close the window
        this.frame.closeFrame();
      }
    }
    /**
     * Returns true when app is running on mobile devices
     * @returns {boolean}
     */

  }, {
    key: "isMobileDevice",
    value: function isMobileDevice() {
      return Object(_chat_ux_util_js__WEBPACK_IMPORTED_MODULE_2__["isMobileDevice"])();
    }
  }]);

  return ChatFrame;
}();



/***/ }),

/***/ "./src/chat-ui.js":
/*!************************!*\
  !*** ./src/chat-ui.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatUI; });
/* harmony import */ var _chat_client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-client.js */ "./src/chat-client.js");
/* harmony import */ var botui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! botui */ "./node_modules/botui/build/botui.min.js");
/* harmony import */ var botui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(botui__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * Chat user interface powered by BotUI (forked ver. on https://github.com/riversun/botui)
 *
 * MIT License
 *
 * @author Tom Misawa (riversun.org@gmail.com,https://github.com/riversun)
 */

var ChatUI =
/*#__PURE__*/
function () {
  function ChatUI(opts) {
    _classCallCheck(this, ChatUI);

    this.opts = opts;
    this.isStarted = false;
    this.botui = null;
    this.botInfo = opts.botInfo;

    if (!this.botInfo.widget) {
      this.botInfo.widget = {
        sendLabel: 'SEND',
        placeHolder: 'Please input text.'
      };
    }
  }

  _createClass(ChatUI, [{
    key: "initialize",
    value: function initialize() {
      if (!this.botui) {
        this.botui = new botui__WEBPACK_IMPORTED_MODULE_1___default.a(this.opts.holderId, {
          vue: this.opts.vue
        });

        if (this.opts) {
          if (this.opts.api) {
            this.chatClient = new _chat_client_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.opts.api);
          } else {
            this.chatClient = new _chat_client_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
          }

          if (this.botInfo.botPhoto) {
            this.botui.opt.setBotPhoto(this.botInfo.botPhoto);
          }

          if (this.botInfo.humanPhoto) {
            this.botui.opt.setHumanPhoto(this.botInfo.humanPhoto);
          }
        }
      }
    }
  }, {
    key: "startChatbot",
    value: function startChatbot(wakeupInput) {
      if (this.isStarted) {
        //pass if started
        return;
      }

      this.isStarted = true;

      if (wakeupInput) {
        this.handleUserInput({
          value: wakeupInput
        });
      } else {
        this.showInputPrompt();
      }
    }
  }, {
    key: "showInputPrompt",
    value: function showInputPrompt() {
      this.botui.action.text({
        action: {
          button: {
            //icon:'paper-plane',
            label: this.botInfo.widget.sendLabel
          },
          placeholder: this.botInfo.widget.placeHolder
        }
      }).then(this.handleUserInput.bind(this));
    }
    /**
     * To handle user input text
     * @param userInput
     */

  }, {
    key: "handleUserInput",
    value: function handleUserInput(userInput) {
      var _this = this;

      if (!this.botui) {
        return;
      } //A loading icon is displayed before the display of the user input box is finished
      //Just put wait to prevent it.


      var delayMs4LoadingIcon = 500;

      if (this.opts.methods) {
        if (this.opts.methods.onUserInput) {
          var consumed = this.opts.methods.onUserInput(userInput.value);

          if (consumed) {
            return;
          }
        }
      }

      setTimeout(function () {
        //Show loading icon
        _this.botui.message.add({
          photo: true,
          loading: true
        }).then(function (loadingIconMsgIdx) {
          if (_this.opts.methods && _this.opts.methods.onServerProcess) {
            var serverResponse = _this.opts.methods.onServerProcess(userInput.value);

            _this.handleChatServerResponse(serverResponse, loadingIconMsgIdx);
          } else {
            if (!_this.chatClient.params) {
              _this.chatClient.params = {};
            }

            _this.chatClient.params.text = userInput.value; //You can intercept request headers/params before sending a request to server

            if (_this.opts.methods && _this.opts.methods.onPrepareRequest) {
              _this.opts.methods.onPrepareRequest(_this.chatClient);
            } //Finish showing loading icon


            _this.chatClient.sendMsgToChatServer(function (serverResponse) {
              //Handling response from ChatServer
              _this.handleChatServerResponse(serverResponse, loadingIconMsgIdx); //You can intercept request headers/params after sending a request to server


              if (_this.opts.methods && _this.opts.methods.onFinishRequest) {
                _this.opts.methods.onFinishRequest(_this.chatClient);
              }
            });
          }
        });
      }, delayMs4LoadingIcon);
    }
    /**
     * Handling response from ChatServer
     * @param serverResponse
     * @param loadingIconMsgIdx
     */

  }, {
    key: "handleChatServerResponse",
    value: function handleChatServerResponse(serverResponse, loadingIconMsgIdx) {
      var _this2 = this;

      if (!this.botui) {
        return;
      }

      if (this.opts.methods) {
        if (this.opts.methods.onServerResponse) {
          serverResponse = this.opts.methods.onServerResponse(serverResponse);
        }
      }

      var msgInterval = this.opts.msgInterval ? this.opts.msgInterval : 500;
      var out = serverResponse.output;
      var isUserInputConsumed = false;
      var delayMs = 0;

      var _loop = function _loop(outIdx) {
        var message = out[outIdx];
        var resType = message.type;
        delayMs += msgInterval;

        if (message.delayMs) {
          delayMs += message.delayMs;
        }

        if (resType == 'text') {
          if (outIdx == 0) {
            //In the case of the first message,
            // remove the loading icon and show message
            _this2.botui.message.update(loadingIconMsgIdx, {
              loading: false,
              photo: true,
              content: message.value
            });
          } else {
            _this2.botui.message.add({
              delay: delayMs,
              photo: true,
              content: message.value
            });
          }
        } else if (resType == 'image') {
          var type = null;
          var contentValue = '![image](' + message.value + ')';

          _this2.handleContent(outIdx, loadingIconMsgIdx, type, contentValue, delayMs);
        } else if (resType == 'youtube') {
          var _type = 'embed';
          var youtubeId = message.value;

          var _contentValue = "<iframe src=\"https://www.youtube.com/embed/".concat(youtubeId, "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>");

          _this2.handleContent(outIdx, loadingIconMsgIdx, _type, _contentValue, delayMs);
        } else if (resType == 'embed') {
          var _type2 = 'embed';
          var _contentValue2 = message.value;

          _this2.handleContent(outIdx, loadingIconMsgIdx, _type2, _contentValue2, delayMs);
        } else if (resType == 'html') {
          var _type3 = 'html';
          var _contentValue3 = message.value;

          _this2.handleContent(outIdx, loadingIconMsgIdx, _type3, _contentValue3, delayMs);
        } else if (resType == 'window' && _this2.opts.parent && _this2.opts.parent.getRenderMode() === 'pc') {
          var _delayMs = delayMs;

          if (!_delayMs) {
            _delayMs = 1;
          }

          if (_this2.opts.parent) {
            var func = function func(callback) {
              setTimeout(function () {
                _this2.opts.parent.createWindowFromServerMessage(message);

                if (callback) {
                  callback();
                }
              }, _delayMs);
            };

            if (outIdx == 0) {
              //In the case of the first message,
              // remove the loading icon and show message
              _this2.botui.message.remove(loadingIconMsgIdx).then(function () {
                func();
              });
            } else {
              func();
            }
          }
        } else if (resType == 'window' && _this2.opts.parent && _this2.opts.parent.getRenderMode() === 'mobile') {
          var _type4 = 'html';
          var _contentValue4 = null;
          var title = null;

          if (message.url || message.mobileUrl) {
            if (message.url) {
              //url
              title = "".concat(message.url);
              _contentValue4 = "<a href=\"".concat(message.url, "\" target=\"_blank\">").concat(title, "</a>");
            }

            if (message.mobileUrl) {
              //mobileUrl
              title = "".concat(message.mobileUrl);
              _contentValue4 = "<a href=\"".concat(message.mobileUrl, "\" target=\"_blank\">").concat(title, "</a>");
            }

            if (message.title) {
              title = message.title;
            }

            _this2.handleContent(outIdx, loadingIconMsgIdx, _type4, _contentValue4, delayMs);
          } else {
            //html
            _contentValue4 = message.html ? message.html : 'No data';

            _this2.handleContent(outIdx, loadingIconMsgIdx, _type4, _contentValue4, delayMs);
          }
        } else if (resType == 'option') {
          var opts = message.options;
          var aboutOption = '';

          if (aboutOption.length > 0) {
            if (outIdx == 0) {
              _this2.botui.message.update(loadingIconMsgIdx, {
                loading: false,
                delay: delayMs,
                photo: true,
                content: aboutOption
              });
            } else {
              _this2.botui.message.add({
                delay: delayMs,
                photo: true,
                content: aboutOption
              });
            }
          }

          var optActions = new Array();

          for (var optIdx in opts) {
            var opt = opts[optIdx];
            var label = opt.label;
            var text = opt.value;
            optActions.push({
              text: label,
              value: text
            });
          }

          isUserInputConsumed = true;

          if (outIdx == 0) {
            //In the case of the first message,
            // remove the loading icon and show message
            _this2.botui.message.remove(loadingIconMsgIdx).then(function () {
              return _this2.botui.action.button({
                autoHide: true,
                //true:Automatically hide when pushing the button
                delay: delayMs,
                action: optActions
              });
            }).then( //Handling of pushing of action button
            _this2.handleUserInput.bind(_this2));
          } else {
            //Show action buttons
            _this2.botui.action.button({
              autoHide: true,
              //true:Automatically hide when pushing the button
              delay: delayMs,
              action: optActions
            }).then( //Handling of pushing of action button
            _this2.handleUserInput.bind(_this2));
          }
        }
      };

      for (var outIdx in out) {
        _loop(outIdx);
      } //If the user input has not been consumed due to an action button press or the like,
      // display user input box


      if (!isUserInputConsumed) {
        this.showInputPrompt();
      }
    }
  }, {
    key: "handleContent",
    value: function handleContent(outIdx, loadingIconMsgIdx, type, contentValue, delayMs) {
      if (outIdx == 0) {
        //In the case of the first message,
        // remove the loading icon and show message
        this.botui.message.update(loadingIconMsgIdx, {
          type: type,
          loading: false,
          photo: true,
          content: contentValue
        });
      } else {
        this.botui.message.add({
          type: type,
          delay: delayMs,
          photo: true,
          content: contentValue
        });
      }
    }
  }]);

  return ChatUI;
}();



/***/ }),

/***/ "./src/chat-ux-util.js":
/*!*****************************!*\
  !*** ./src/chat-ux-util.js ***!
  \*****************************/
/*! exports provided: isMobileDevice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobileDevice", function() { return isMobileDevice; });
/**
 * Returns true when app is running on mobile devices
 * @returns {boolean}
 */
function isMobileDevice() {
  var userAgent = navigator.userAgent;

  if (userAgent.indexOf('iPhone') > 0 || userAgent.indexOf('iPod') > 0 || userAgent.indexOf('Android') > 0 && userAgent.indexOf('Mobile') > 0) {
    //is smartphone
    return true;
  } else if (userAgent.indexOf('iPad') > 0 || userAgent.indexOf('Android') > 0) {
    //is tablet
    return true;
  } else {
    //is pc
    return false;
  }
}

/***/ }),

/***/ "./src/chat-ux.js":
/*!************************!*\
  !*** ./src/chat-ux.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatUx; });
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faTimes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faTimes */ "./node_modules/@fortawesome/free-solid-svg-icons/faTimes.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faTimes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faTimes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCommentAlt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCommentAlt */ "./node_modules/@fortawesome/free-solid-svg-icons/faCommentAlt.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCommentAlt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faCommentAlt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsframe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsframe */ "./node_modules/jsframe.js/dist/jsframe.min.js");
/* harmony import */ var jsframe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsframe__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.min.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _chat_ui_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-ui.js */ "./src/chat-ui.js");
/* harmony import */ var _chat_frame_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-frame.js */ "./src/chat-frame.js");
/* harmony import */ var _chat_ux_util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat-ux-util.js */ "./src/chat-ux-util.js");
/* harmony import */ var _node_modules_botui_build_botui_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../node_modules/botui/build/botui.min.css */ "./node_modules/botui/build/botui.min.css");
/* harmony import */ var _node_modules_botui_build_botui_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_node_modules_botui_build_botui_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _node_modules_botui_build_botui_theme_default_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../node_modules/botui/build/botui-theme-default.css */ "./node_modules/botui/build/botui-theme-default.css");
/* harmony import */ var _node_modules_botui_build_botui_theme_default_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_node_modules_botui_build_botui_theme_default_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _botui_theme_riversun_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./botui-theme-riversun.css */ "./src/botui-theme-riversun.css");
/* harmony import */ var _botui_theme_riversun_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_botui_theme_riversun_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.css */ "./src/app.css");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_11__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




 // Add specific icons from font awesome

_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons_faTimes__WEBPACK_IMPORTED_MODULE_1__["faTimes"], _fortawesome_free_solid_svg_icons_faCommentAlt__WEBPACK_IMPORTED_MODULE_2__["faCommentAlt"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["dom"].watch();








/**
 * Easy to create Chat UI
 *
 * MIT License
 *
 * @author Tom Misawa (riversun.org@gmail.com,https://github.com/riversun)
 */

var ChatUx =
/*#__PURE__*/
function () {
  function ChatUx(opts) {
    _classCallCheck(this, ChatUx);

    if (opts) {
      this.init(opts);
    } //flag for opening chat automatically


    this.autoOpen = false;
  }

  _createClass(ChatUx, [{
    key: "init",
    value: function init(opts) {
      var _this = this;

      this.holderEleId = 'my-chat-bot';
      this.ui = null;
      this.chatFrame = null;
      var botInfo = opts.bot;

      if (!botInfo) {
        botInfo = {};
      }

      var paramWin = opts.window;

      if (!paramWin) {
        paramWin = {};
      }

      var paramWakeupButton = opts.wakeupButton;
      var methods = opts.methods;

      if (!methods) {
        methods = {};
      } // if (!botInfo.botPhoto) {
      //     botInfo.botPhoto = png_icon_operator;
      // }


      this.ui = new _chat_ui_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
        holderId: this.holderEleId,
        botInfo: botInfo,
        vue: vue__WEBPACK_IMPORTED_MODULE_4___default.a,
        api: opts.api,
        methods: methods,
        parent: this
      });
      this.chatFrame = new _chat_frame_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
        renderMode: opts.renderMode,
        window: paramWin,
        wakeupButton: paramWakeupButton
      });
      this.chatFrame.buttonOffWhenOpenFrame = opts.buttonOffWhenOpenFrame;

      this.chatFrame.onChatFrameCreate = function (frame) {
        _this.ui.initialize();

        if (opts.open || _this.autoOpen) {
          _this.chatFrame.toggleChatButtonState();
        }

        if (methods.onChatWindowCreate) {
          methods.onChatWindowCreate(frame);
        }
      };

      this.chatFrame.onChatFrameResume = function (frame) {
        if (botInfo.wakeupText) {
          _this.ui.startChatbot(botInfo.wakeupText);
        } else {
          _this.ui.startChatbot();
        }

        if (methods.onChatWindowResume) {
          methods.onChatWindowResume(frame);
        }
      };

      this.chatFrame.onChatFramePause = function (frame) {
        if (methods.onChatWindowPause) {
          methods.onChatWindowPause(frame);
        }
      };
    }
  }, {
    key: "getRenderMode",
    value: function getRenderMode() {
      return this.chatFrame.renderMode;
    }
  }, {
    key: "createWindowFromServerMessage",
    value: function createWindowFromServerMessage(message) {
      var _this2 = this;

      //get jsFrame instance
      var jsFrameForChatWindow = this.chatFrame.jsFrame;

      if (!this.jsFrame) {
        this.jsFrame = new jsframe__WEBPACK_IMPORTED_MODULE_3__["JSFrame"]({
          horizontalAlign: 'left',
          verticalAlign: 'top',
          fixed: false
        });
      } //override jsframe mouse intercepter for supporting multiple jsframe


      document.onmouseup = function (e) {
        jsFrameForChatWindow.windowManager.windowMouseUp(e);

        _this2.jsFrame.windowManager.windowMouseUp(e);
      };

      document.onmousemove = function (e) {
        jsFrameForChatWindow.windowManager.windowMouseMove(e);

        _this2.jsFrame.windowManager.windowMouseMove(e);
      }; //get chat window instance


      var chatWin = this.chatFrame.frame;
      var chatWinStyle = this.chatFrame.appearanceParam;
      chatWinStyle.titleBar.leftMargin = '10px';
      chatWinStyle.titleBar.buttonsOnLeft[0].visible = false;
      var chatWinPos = chatWin.getPosition(); //prepare detailed window

      var browserWidth = window.innerWidth;
      var dtWinWidth = message.width ? message.width : 400;
      var dtWinHeight = message.height ? message.height : 400;
      var dtWinLeft = message.left ? message.left : 32;
      var dtWinYOffset = message.addYOffset;
      var dtWinTop = message.top ? message.top + (dtWinYOffset ? parseInt(window.pageYOffset) : 0) : 32 + (dtWinYOffset ? parseInt(window.pageYOffset) : 0);
      var dtWinBackgroundColor = message.backgroundColor ? message.backgroundColor : 'rgba(255,255,255,1.0)';
      var dtWinOverflow = message.overflow ? message.overflow : 'auto';
      var detailWin = this.jsFrame.create({
        name: 'new',
        title: message.title ? message.title : '',
        left: dtWinLeft,
        top: dtWinTop,
        width: dtWinWidth,
        height: dtWinHeight,
        minWidth: 100,
        minHeight: 100,
        appearanceName: 'material',
        appearanceParam: chatWinStyle,
        style: {
          backgroundColor: dtWinBackgroundColor,
          overflow: dtWinOverflow
        },
        url: message.url,
        html: message.html
      }); //set cross mark click handler

      detailWin.on('hideButton', 'click', function (_frame, evt) {
        detailWin.closeFrame();
      });
      detailWin.show();
    }
  }, {
    key: "start",
    value: function start(openFlag) {
      if (openFlag) {
        this.autoOpen = openFlag;
      }

      this.chatFrame.build(this.holderEleId);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.chatFrame.clear();
    }
  }, {
    key: "isMobileDevice",
    value: function isMobileDevice() {
      return Object(_chat_ux_util_js__WEBPACK_IMPORTED_MODULE_7__["isMobileDevice"])();
    }
  }]);

  return ChatUx;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: ChatUx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_ux_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-ux.js */ "./src/chat-ux.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChatUx", function() { return _chat_ux_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ })

/******/ });
});