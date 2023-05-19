/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _stylesheets_application_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stylesheets/application.scss */ "./app/javascript/stylesheets/application.scss");
/* harmony import */ var _stylesheets_application_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_application_scss__WEBPACK_IMPORTED_MODULE_1__);
// app/javascript/packs/application.js

__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '@rails/ujs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())).start();
__webpack_require__(/*! turbolinks */ "./node_modules/turbolinks/dist/turbolinks.js").start();
__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'channels'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
__webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.esm.js").start();


__webpack_require__(/*! trix */ "./node_modules/trix/dist/trix.esm.min.js");
__webpack_require__(/*! @rails/actiontext */ "./node_modules/@rails/actiontext/app/assets/javascripts/actiontext.js");

/***/ }),

/***/ "./app/javascript/stylesheets/application.scss":
/*!*****************************************************!*\
  !*** ./app/javascript/stylesheets/application.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./application.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./app/javascript/stylesheets/application.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/@rails/actiontext/app/assets/javascripts/actiontext.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@rails/actiontext/app/assets/javascripts/actiontext.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
var activestorage = {
  exports: {}
};
(function (module, exports) {
  (function (global, factory) {
    factory(exports);
  })(commonjsGlobal, function (exports) {
    var sparkMd5 = {
      exports: {}
    };
    (function (module, exports) {
      (function (factory) {
        {
          module.exports = factory();
        }
      })(function (undefined$1) {
        var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        function md5cycle(x, k) {
          var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
          a += (b & c | ~b & d) + k[0] - 680876936 | 0;
          a = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[1] - 389564586 | 0;
          d = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[2] + 606105819 | 0;
          c = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
          b = (b << 22 | b >>> 10) + c | 0;
          a += (b & c | ~b & d) + k[4] - 176418897 | 0;
          a = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
          d = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
          c = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[7] - 45705983 | 0;
          b = (b << 22 | b >>> 10) + c | 0;
          a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
          a = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
          d = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[10] - 42063 | 0;
          c = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
          b = (b << 22 | b >>> 10) + c | 0;
          a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
          a = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[13] - 40341101 | 0;
          d = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
          c = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
          b = (b << 22 | b >>> 10) + c | 0;
          a += (b & d | c & ~d) + k[1] - 165796510 | 0;
          a = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
          d = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[11] + 643717713 | 0;
          c = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[0] - 373897302 | 0;
          b = (b << 20 | b >>> 12) + c | 0;
          a += (b & d | c & ~d) + k[5] - 701558691 | 0;
          a = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[10] + 38016083 | 0;
          d = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[15] - 660478335 | 0;
          c = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[4] - 405537848 | 0;
          b = (b << 20 | b >>> 12) + c | 0;
          a += (b & d | c & ~d) + k[9] + 568446438 | 0;
          a = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
          d = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[3] - 187363961 | 0;
          c = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
          b = (b << 20 | b >>> 12) + c | 0;
          a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
          a = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[2] - 51403784 | 0;
          d = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
          c = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
          b = (b << 20 | b >>> 12) + c | 0;
          a += (b ^ c ^ d) + k[5] - 378558 | 0;
          a = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
          d = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
          c = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[14] - 35309556 | 0;
          b = (b << 23 | b >>> 9) + c | 0;
          a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
          a = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
          d = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[7] - 155497632 | 0;
          c = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
          b = (b << 23 | b >>> 9) + c | 0;
          a += (b ^ c ^ d) + k[13] + 681279174 | 0;
          a = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[0] - 358537222 | 0;
          d = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[3] - 722521979 | 0;
          c = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[6] + 76029189 | 0;
          b = (b << 23 | b >>> 9) + c | 0;
          a += (b ^ c ^ d) + k[9] - 640364487 | 0;
          a = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[12] - 421815835 | 0;
          d = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[15] + 530742520 | 0;
          c = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[2] - 995338651 | 0;
          b = (b << 23 | b >>> 9) + c | 0;
          a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
          a = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
          d = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
          c = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
          b = (b << 21 | b >>> 11) + c | 0;
          a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
          a = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
          d = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
          c = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
          b = (b << 21 | b >>> 11) + c | 0;
          a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
          a = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
          d = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
          c = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
          b = (b << 21 | b >>> 11) + c | 0;
          a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
          a = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
          d = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
          c = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
          b = (b << 21 | b >>> 11) + c | 0;
          x[0] = a + x[0] | 0;
          x[1] = b + x[1] | 0;
          x[2] = c + x[2] | 0;
          x[3] = d + x[3] | 0;
        }
        function md5blk(s) {
          var md5blks = [],
            i;
          for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
          }
          return md5blks;
        }
        function md5blk_array(a) {
          var md5blks = [],
            i;
          for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
          }
          return md5blks;
        }
        function md51(s) {
          var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;
          for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)));
          }
          s = s.substring(i - 64);
          length = s.length;
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
          }
          tail[i >> 2] |= 128 << (i % 4 << 3);
          if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
              tail[i] = 0;
            }
          }
          tmp = n * 8;
          tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
          lo = parseInt(tmp[2], 16);
          hi = parseInt(tmp[1], 16) || 0;
          tail[14] = lo;
          tail[15] = hi;
          md5cycle(state, tail);
          return state;
        }
        function md51_array(a) {
          var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;
          for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
          }
          a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
          length = a.length;
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << (i % 4 << 3);
          }
          tail[i >> 2] |= 128 << (i % 4 << 3);
          if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
              tail[i] = 0;
            }
          }
          tmp = n * 8;
          tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
          lo = parseInt(tmp[2], 16);
          hi = parseInt(tmp[1], 16) || 0;
          tail[14] = lo;
          tail[15] = hi;
          md5cycle(state, tail);
          return state;
        }
        function rhex(n) {
          var s = "",
            j;
          for (j = 0; j < 4; j += 1) {
            s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
          }
          return s;
        }
        function hex(x) {
          var i;
          for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i]);
          }
          return x.join("");
        }
        if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;
        if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
          (function () {
            function clamp(val, length) {
              val = val | 0 || 0;
              if (val < 0) {
                return Math.max(val + length, 0);
              }
              return Math.min(val, length);
            }
            ArrayBuffer.prototype.slice = function (from, to) {
              var length = this.byteLength,
                begin = clamp(from, length),
                end = length,
                num,
                target,
                targetArray,
                sourceArray;
              if (to !== undefined$1) {
                end = clamp(to, length);
              }
              if (begin > end) {
                return new ArrayBuffer(0);
              }
              num = end - begin;
              target = new ArrayBuffer(num);
              targetArray = new Uint8Array(target);
              sourceArray = new Uint8Array(this, begin, num);
              targetArray.set(sourceArray);
              return target;
            };
          })();
        }
        function toUtf8(str) {
          if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str));
          }
          return str;
        }
        function utf8Str2ArrayBuffer(str, returnUInt8Array) {
          var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;
          for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i);
          }
          return returnUInt8Array ? arr : buff;
        }
        function arrayBuffer2Utf8Str(buff) {
          return String.fromCharCode.apply(null, new Uint8Array(buff));
        }
        function concatenateArrayBuffers(first, second, returnUInt8Array) {
          var result = new Uint8Array(first.byteLength + second.byteLength);
          result.set(new Uint8Array(first));
          result.set(new Uint8Array(second), first.byteLength);
          return returnUInt8Array ? result : result.buffer;
        }
        function hexToBinaryString(hex) {
          var bytes = [],
            length = hex.length,
            x;
          for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16));
          }
          return String.fromCharCode.apply(String, bytes);
        }
        function SparkMD5() {
          this.reset();
        }
        SparkMD5.prototype.append = function (str) {
          this.appendBinary(toUtf8(str));
          return this;
        };
        SparkMD5.prototype.appendBinary = function (contents) {
          this._buff += contents;
          this._length += contents.length;
          var length = this._buff.length,
            i;
          for (i = 64; i <= length; i += 64) {
            md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
          }
          this._buff = this._buff.substring(i - 64);
          return this;
        };
        SparkMD5.prototype.end = function (raw) {
          var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;
          for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
          }
          this._finish(tail, length);
          ret = hex(this._hash);
          if (raw) {
            ret = hexToBinaryString(ret);
          }
          this.reset();
          return ret;
        };
        SparkMD5.prototype.reset = function () {
          this._buff = "";
          this._length = 0;
          this._hash = [1732584193, -271733879, -1732584194, 271733878];
          return this;
        };
        SparkMD5.prototype.getState = function () {
          return {
            buff: this._buff,
            length: this._length,
            hash: this._hash.slice()
          };
        };
        SparkMD5.prototype.setState = function (state) {
          this._buff = state.buff;
          this._length = state.length;
          this._hash = state.hash;
          return this;
        };
        SparkMD5.prototype.destroy = function () {
          delete this._hash;
          delete this._buff;
          delete this._length;
        };
        SparkMD5.prototype._finish = function (tail, length) {
          var i = length,
            tmp,
            lo,
            hi;
          tail[i >> 2] |= 128 << (i % 4 << 3);
          if (i > 55) {
            md5cycle(this._hash, tail);
            for (i = 0; i < 16; i += 1) {
              tail[i] = 0;
            }
          }
          tmp = this._length * 8;
          tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
          lo = parseInt(tmp[2], 16);
          hi = parseInt(tmp[1], 16) || 0;
          tail[14] = lo;
          tail[15] = hi;
          md5cycle(this._hash, tail);
        };
        SparkMD5.hash = function (str, raw) {
          return SparkMD5.hashBinary(toUtf8(str), raw);
        };
        SparkMD5.hashBinary = function (content, raw) {
          var hash = md51(content),
            ret = hex(hash);
          return raw ? hexToBinaryString(ret) : ret;
        };
        SparkMD5.ArrayBuffer = function () {
          this.reset();
        };
        SparkMD5.ArrayBuffer.prototype.append = function (arr) {
          var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;
          this._length += arr.byteLength;
          for (i = 64; i <= length; i += 64) {
            md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
          }
          this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
          return this;
        };
        SparkMD5.ArrayBuffer.prototype.end = function (raw) {
          var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;
          for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << (i % 4 << 3);
          }
          this._finish(tail, length);
          ret = hex(this._hash);
          if (raw) {
            ret = hexToBinaryString(ret);
          }
          this.reset();
          return ret;
        };
        SparkMD5.ArrayBuffer.prototype.reset = function () {
          this._buff = new Uint8Array(0);
          this._length = 0;
          this._hash = [1732584193, -271733879, -1732584194, 271733878];
          return this;
        };
        SparkMD5.ArrayBuffer.prototype.getState = function () {
          var state = SparkMD5.prototype.getState.call(this);
          state.buff = arrayBuffer2Utf8Str(state.buff);
          return state;
        };
        SparkMD5.ArrayBuffer.prototype.setState = function (state) {
          state.buff = utf8Str2ArrayBuffer(state.buff, true);
          return SparkMD5.prototype.setState.call(this, state);
        };
        SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
        SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
        SparkMD5.ArrayBuffer.hash = function (arr, raw) {
          var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
          return raw ? hexToBinaryString(ret) : ret;
        };
        return SparkMD5;
      });
    })(sparkMd5);
    var SparkMD5 = sparkMd5.exports;
    const fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
    class FileChecksum {
      static create(file, callback) {
        const instance = new FileChecksum(file);
        instance.create(callback);
      }
      constructor(file) {
        this.file = file;
        this.chunkSize = 2097152;
        this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
        this.chunkIndex = 0;
      }
      create(callback) {
        this.callback = callback;
        this.md5Buffer = new SparkMD5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", event => this.fileReaderDidLoad(event));
        this.fileReader.addEventListener("error", event => this.fileReaderDidError(event));
        this.readNextChunk();
      }
      fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);
        if (!this.readNextChunk()) {
          const binaryDigest = this.md5Buffer.end(true);
          const base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
      fileReaderDidError(event) {
        this.callback(`Error reading ${this.file.name}`);
      }
      readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          const start = this.chunkIndex * this.chunkSize;
          const end = Math.min(start + this.chunkSize, this.file.size);
          const bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    }
    function getMetaValue(name) {
      const element = findElement(document.head, `meta[name="${name}"]`);
      if (element) {
        return element.getAttribute("content");
      }
    }
    function findElements(root, selector) {
      if (typeof root == "string") {
        selector = root;
        root = document;
      }
      const elements = root.querySelectorAll(selector);
      return toArray(elements);
    }
    function findElement(root, selector) {
      if (typeof root == "string") {
        selector = root;
        root = document;
      }
      return root.querySelector(selector);
    }
    function dispatchEvent(element, type) {
      let eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      const disabled = element.disabled;
      const bubbles = eventInit.bubbles,
        cancelable = eventInit.cancelable,
        detail = eventInit.detail;
      const event = document.createEvent("Event");
      event.initEvent(type, bubbles || true, cancelable || true);
      event.detail = detail || {};
      try {
        element.disabled = false;
        element.dispatchEvent(event);
      } finally {
        element.disabled = disabled;
      }
      return event;
    }
    function toArray(value) {
      if (Array.isArray(value)) {
        return value;
      } else if (Array.from) {
        return Array.from(value);
      } else {
        return [].slice.call(value);
      }
    }
    class BlobRecord {
      constructor(file, checksum, url) {
        this.file = file;
        this.attributes = {
          filename: file.name,
          content_type: file.type || "application/octet-stream",
          byte_size: file.size,
          checksum: checksum
        };
        this.xhr = new XMLHttpRequest();
        this.xhr.open("POST", url, true);
        this.xhr.responseType = "json";
        this.xhr.setRequestHeader("Content-Type", "application/json");
        this.xhr.setRequestHeader("Accept", "application/json");
        this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        const csrfToken = getMetaValue("csrf-token");
        if (csrfToken != undefined) {
          this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
        }
        this.xhr.addEventListener("load", event => this.requestDidLoad(event));
        this.xhr.addEventListener("error", event => this.requestDidError(event));
      }
      get status() {
        return this.xhr.status;
      }
      get response() {
        const _this$xhr = this.xhr,
          responseType = _this$xhr.responseType,
          response = _this$xhr.response;
        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
      create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
      requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          const response = this.response;
          const direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
      requestDidError(event) {
        this.callback(`Error creating Blob for "${this.file.name}". Status: ${this.status}`);
      }
      toJSON() {
        const result = {};
        for (const key in this.attributes) {
          result[key] = this.attributes[key];
        }
        return result;
      }
    }
    class BlobUpload {
      constructor(blob) {
        this.blob = blob;
        this.file = blob.file;
        const _blob$directUploadDat = blob.directUploadData,
          url = _blob$directUploadDat.url,
          headers = _blob$directUploadDat.headers;
        this.xhr = new XMLHttpRequest();
        this.xhr.open("PUT", url, true);
        this.xhr.responseType = "text";
        for (const key in headers) {
          this.xhr.setRequestHeader(key, headers[key]);
        }
        this.xhr.addEventListener("load", event => this.requestDidLoad(event));
        this.xhr.addEventListener("error", event => this.requestDidError(event));
      }
      create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
      requestDidLoad(event) {
        const _this$xhr2 = this.xhr,
          status = _this$xhr2.status,
          response = _this$xhr2.response;
        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
      requestDidError(event) {
        this.callback(`Error storing "${this.file.name}". Status: ${this.xhr.status}`);
      }
    }
    let id = 0;
    class DirectUpload {
      constructor(file, url, delegate) {
        this.id = ++id;
        this.file = file;
        this.url = url;
        this.delegate = delegate;
      }
      create(callback) {
        FileChecksum.create(this.file, (error, checksum) => {
          if (error) {
            callback(error);
            return;
          }
          const blob = new BlobRecord(this.file, checksum, this.url);
          notify(this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(error => {
            if (error) {
              callback(error);
            } else {
              const upload = new BlobUpload(blob);
              notify(this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(error => {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    }
    function notify(object, methodName) {
      if (object && typeof object[methodName] == "function") {
        for (var _len = arguments.length, messages = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          messages[_key - 2] = arguments[_key];
        }
        return object[methodName](...messages);
      }
    }
    class DirectUploadController {
      constructor(input, file) {
        this.input = input;
        this.file = file;
        this.directUpload = new DirectUpload(this.file, this.url, this);
        this.dispatch("initialize");
      }
      start(callback) {
        const hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create((error, attributes) => {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);
            this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }
          this.dispatch("end");
          callback(error);
        });
      }
      uploadRequestDidProgress(event) {
        const progress = event.loaded / event.total * 100;
        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
      get url() {
        return this.input.getAttribute("data-direct-upload-url");
      }
      dispatch(name) {
        let detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, `direct-upload:${name}`, {
          detail: detail
        });
      }
      dispatchError(error) {
        const event = this.dispatch("error", {
          error: error
        });
        if (!event.defaultPrevented) {
          alert(error);
        }
      }
      directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
      directUploadWillStoreFileWithXHR(xhr) {
        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", event => this.uploadRequestDidProgress(event));
      }
    }
    const inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";
    class DirectUploadsController {
      constructor(form) {
        this.form = form;
        this.inputs = findElements(form, inputSelector).filter(input => input.files.length);
      }
      start(callback) {
        const controllers = this.createDirectUploadControllers();
        const startNextController = () => {
          const controller = controllers.shift();
          if (controller) {
            controller.start(error => {
              if (error) {
                callback(error);
                this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();
            this.dispatch("end");
          }
        };
        this.dispatch("start");
        startNextController();
      }
      createDirectUploadControllers() {
        const controllers = [];
        this.inputs.forEach(input => {
          toArray(input.files).forEach(file => {
            const controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
      dispatch(name) {
        let detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, `direct-uploads:${name}`, {
          detail: detail
        });
      }
    }
    const processingAttribute = "data-direct-uploads-processing";
    const submitButtonsByForm = new WeakMap();
    let started = false;
    function start() {
      if (!started) {
        started = true;
        document.addEventListener("click", didClick, true);
        document.addEventListener("submit", didSubmitForm, true);
        document.addEventListener("ajax:before", didSubmitRemoteElement);
      }
    }
    function didClick(event) {
      const target = event.target;
      if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
        submitButtonsByForm.set(target.form, target);
      }
    }
    function didSubmitForm(event) {
      handleFormSubmissionEvent(event);
    }
    function didSubmitRemoteElement(event) {
      if (event.target.tagName == "FORM") {
        handleFormSubmissionEvent(event);
      }
    }
    function handleFormSubmissionEvent(event) {
      const form = event.target;
      if (form.hasAttribute(processingAttribute)) {
        event.preventDefault();
        return;
      }
      const controller = new DirectUploadsController(form);
      const inputs = controller.inputs;
      if (inputs.length) {
        event.preventDefault();
        form.setAttribute(processingAttribute, "");
        inputs.forEach(disable);
        controller.start(error => {
          form.removeAttribute(processingAttribute);
          if (error) {
            inputs.forEach(enable);
          } else {
            submitForm(form);
          }
        });
      }
    }
    function submitForm(form) {
      let button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");
      if (button) {
        const _button = button,
          disabled = _button.disabled;
        button.disabled = false;
        button.focus();
        button.click();
        button.disabled = disabled;
      } else {
        button = document.createElement("input");
        button.type = "submit";
        button.style.display = "none";
        form.appendChild(button);
        button.click();
        form.removeChild(button);
      }
      submitButtonsByForm.delete(form);
    }
    function disable(input) {
      input.disabled = true;
    }
    function enable(input) {
      input.disabled = false;
    }
    function autostart() {
      if (window.ActiveStorage) {
        start();
      }
    }
    setTimeout(autostart, 1);
    exports.DirectUpload = DirectUpload;
    exports.start = start;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  });
})(activestorage, activestorage.exports);
class AttachmentUpload {
  constructor(attachment, element) {
    this.attachment = attachment;
    this.element = element;
    this.directUpload = new activestorage.exports.DirectUpload(attachment.file, this.directUploadUrl, this);
  }
  start() {
    this.directUpload.create(this.directUploadDidComplete.bind(this));
  }
  directUploadWillStoreFileWithXHR(xhr) {
    xhr.upload.addEventListener("progress", event => {
      const progress = event.loaded / event.total * 100;
      this.attachment.setUploadProgress(progress);
    });
  }
  directUploadDidComplete(error, attributes) {
    if (error) {
      throw new Error(`Direct upload failed: ${error}`);
    }
    this.attachment.setAttributes({
      sgid: attributes.attachable_sgid,
      url: this.createBlobUrl(attributes.signed_id, attributes.filename)
    });
  }
  createBlobUrl(signedId, filename) {
    return this.blobUrlTemplate.replace(":signed_id", signedId).replace(":filename", encodeURIComponent(filename));
  }
  get directUploadUrl() {
    return this.element.dataset.directUploadUrl;
  }
  get blobUrlTemplate() {
    return this.element.dataset.blobUrlTemplate;
  }
}
addEventListener("trix-attachment-add", event => {
  const attachment = event.attachment,
    target = event.target;
  if (attachment.file) {
    const upload = new AttachmentUpload(attachment, target);
    upload.start();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.esm.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.esm.js ***!
  \***************************************************************************************/
/*! exports provided: DirectUpload, start */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectUpload", function() { return DirectUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
var sparkMd5 = {
  exports: {}
};
(function (module, exports) {
  (function (factory) {
    {
      module.exports = factory();
    }
  })(function (undefined$1) {
    var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    function md5cycle(x, k) {
      var a = x[0],
        b = x[1],
        c = x[2],
        d = x[3];
      a += (b & c | ~b & d) + k[0] - 680876936 | 0;
      a = (a << 7 | a >>> 25) + b | 0;
      d += (a & b | ~a & c) + k[1] - 389564586 | 0;
      d = (d << 12 | d >>> 20) + a | 0;
      c += (d & a | ~d & b) + k[2] + 606105819 | 0;
      c = (c << 17 | c >>> 15) + d | 0;
      b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
      b = (b << 22 | b >>> 10) + c | 0;
      a += (b & c | ~b & d) + k[4] - 176418897 | 0;
      a = (a << 7 | a >>> 25) + b | 0;
      d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
      d = (d << 12 | d >>> 20) + a | 0;
      c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
      c = (c << 17 | c >>> 15) + d | 0;
      b += (c & d | ~c & a) + k[7] - 45705983 | 0;
      b = (b << 22 | b >>> 10) + c | 0;
      a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
      a = (a << 7 | a >>> 25) + b | 0;
      d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
      d = (d << 12 | d >>> 20) + a | 0;
      c += (d & a | ~d & b) + k[10] - 42063 | 0;
      c = (c << 17 | c >>> 15) + d | 0;
      b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
      b = (b << 22 | b >>> 10) + c | 0;
      a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
      a = (a << 7 | a >>> 25) + b | 0;
      d += (a & b | ~a & c) + k[13] - 40341101 | 0;
      d = (d << 12 | d >>> 20) + a | 0;
      c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
      c = (c << 17 | c >>> 15) + d | 0;
      b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
      b = (b << 22 | b >>> 10) + c | 0;
      a += (b & d | c & ~d) + k[1] - 165796510 | 0;
      a = (a << 5 | a >>> 27) + b | 0;
      d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
      d = (d << 9 | d >>> 23) + a | 0;
      c += (d & b | a & ~b) + k[11] + 643717713 | 0;
      c = (c << 14 | c >>> 18) + d | 0;
      b += (c & a | d & ~a) + k[0] - 373897302 | 0;
      b = (b << 20 | b >>> 12) + c | 0;
      a += (b & d | c & ~d) + k[5] - 701558691 | 0;
      a = (a << 5 | a >>> 27) + b | 0;
      d += (a & c | b & ~c) + k[10] + 38016083 | 0;
      d = (d << 9 | d >>> 23) + a | 0;
      c += (d & b | a & ~b) + k[15] - 660478335 | 0;
      c = (c << 14 | c >>> 18) + d | 0;
      b += (c & a | d & ~a) + k[4] - 405537848 | 0;
      b = (b << 20 | b >>> 12) + c | 0;
      a += (b & d | c & ~d) + k[9] + 568446438 | 0;
      a = (a << 5 | a >>> 27) + b | 0;
      d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
      d = (d << 9 | d >>> 23) + a | 0;
      c += (d & b | a & ~b) + k[3] - 187363961 | 0;
      c = (c << 14 | c >>> 18) + d | 0;
      b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
      b = (b << 20 | b >>> 12) + c | 0;
      a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
      a = (a << 5 | a >>> 27) + b | 0;
      d += (a & c | b & ~c) + k[2] - 51403784 | 0;
      d = (d << 9 | d >>> 23) + a | 0;
      c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
      c = (c << 14 | c >>> 18) + d | 0;
      b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
      b = (b << 20 | b >>> 12) + c | 0;
      a += (b ^ c ^ d) + k[5] - 378558 | 0;
      a = (a << 4 | a >>> 28) + b | 0;
      d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
      d = (d << 11 | d >>> 21) + a | 0;
      c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
      c = (c << 16 | c >>> 16) + d | 0;
      b += (c ^ d ^ a) + k[14] - 35309556 | 0;
      b = (b << 23 | b >>> 9) + c | 0;
      a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
      a = (a << 4 | a >>> 28) + b | 0;
      d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
      d = (d << 11 | d >>> 21) + a | 0;
      c += (d ^ a ^ b) + k[7] - 155497632 | 0;
      c = (c << 16 | c >>> 16) + d | 0;
      b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
      b = (b << 23 | b >>> 9) + c | 0;
      a += (b ^ c ^ d) + k[13] + 681279174 | 0;
      a = (a << 4 | a >>> 28) + b | 0;
      d += (a ^ b ^ c) + k[0] - 358537222 | 0;
      d = (d << 11 | d >>> 21) + a | 0;
      c += (d ^ a ^ b) + k[3] - 722521979 | 0;
      c = (c << 16 | c >>> 16) + d | 0;
      b += (c ^ d ^ a) + k[6] + 76029189 | 0;
      b = (b << 23 | b >>> 9) + c | 0;
      a += (b ^ c ^ d) + k[9] - 640364487 | 0;
      a = (a << 4 | a >>> 28) + b | 0;
      d += (a ^ b ^ c) + k[12] - 421815835 | 0;
      d = (d << 11 | d >>> 21) + a | 0;
      c += (d ^ a ^ b) + k[15] + 530742520 | 0;
      c = (c << 16 | c >>> 16) + d | 0;
      b += (c ^ d ^ a) + k[2] - 995338651 | 0;
      b = (b << 23 | b >>> 9) + c | 0;
      a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
      a = (a << 6 | a >>> 26) + b | 0;
      d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
      d = (d << 10 | d >>> 22) + a | 0;
      c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
      c = (c << 15 | c >>> 17) + d | 0;
      b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
      b = (b << 21 | b >>> 11) + c | 0;
      a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
      a = (a << 6 | a >>> 26) + b | 0;
      d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
      d = (d << 10 | d >>> 22) + a | 0;
      c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
      c = (c << 15 | c >>> 17) + d | 0;
      b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
      b = (b << 21 | b >>> 11) + c | 0;
      a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
      a = (a << 6 | a >>> 26) + b | 0;
      d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
      d = (d << 10 | d >>> 22) + a | 0;
      c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
      c = (c << 15 | c >>> 17) + d | 0;
      b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
      b = (b << 21 | b >>> 11) + c | 0;
      a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
      a = (a << 6 | a >>> 26) + b | 0;
      d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
      d = (d << 10 | d >>> 22) + a | 0;
      c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
      c = (c << 15 | c >>> 17) + d | 0;
      b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
      b = (b << 21 | b >>> 11) + c | 0;
      x[0] = a + x[0] | 0;
      x[1] = b + x[1] | 0;
      x[2] = c + x[2] | 0;
      x[3] = d + x[3] | 0;
    }
    function md5blk(s) {
      var md5blks = [],
        i;
      for (i = 0; i < 64; i += 4) {
        md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
      }
      return md5blks;
    }
    function md5blk_array(a) {
      var md5blks = [],
        i;
      for (i = 0; i < 64; i += 4) {
        md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
      }
      return md5blks;
    }
    function md51(s) {
      var n = s.length,
        state = [1732584193, -271733879, -1732584194, 271733878],
        i,
        length,
        tail,
        tmp,
        lo,
        hi;
      for (i = 64; i <= n; i += 64) {
        md5cycle(state, md5blk(s.substring(i - 64, i)));
      }
      s = s.substring(i - 64);
      length = s.length;
      tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (i = 0; i < length; i += 1) {
        tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
      }
      tail[i >> 2] |= 128 << (i % 4 << 3);
      if (i > 55) {
        md5cycle(state, tail);
        for (i = 0; i < 16; i += 1) {
          tail[i] = 0;
        }
      }
      tmp = n * 8;
      tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
      lo = parseInt(tmp[2], 16);
      hi = parseInt(tmp[1], 16) || 0;
      tail[14] = lo;
      tail[15] = hi;
      md5cycle(state, tail);
      return state;
    }
    function md51_array(a) {
      var n = a.length,
        state = [1732584193, -271733879, -1732584194, 271733878],
        i,
        length,
        tail,
        tmp,
        lo,
        hi;
      for (i = 64; i <= n; i += 64) {
        md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
      }
      a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
      length = a.length;
      tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (i = 0; i < length; i += 1) {
        tail[i >> 2] |= a[i] << (i % 4 << 3);
      }
      tail[i >> 2] |= 128 << (i % 4 << 3);
      if (i > 55) {
        md5cycle(state, tail);
        for (i = 0; i < 16; i += 1) {
          tail[i] = 0;
        }
      }
      tmp = n * 8;
      tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
      lo = parseInt(tmp[2], 16);
      hi = parseInt(tmp[1], 16) || 0;
      tail[14] = lo;
      tail[15] = hi;
      md5cycle(state, tail);
      return state;
    }
    function rhex(n) {
      var s = "",
        j;
      for (j = 0; j < 4; j += 1) {
        s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
      }
      return s;
    }
    function hex(x) {
      var i;
      for (i = 0; i < x.length; i += 1) {
        x[i] = rhex(x[i]);
      }
      return x.join("");
    }
    if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;
    if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
      (function () {
        function clamp(val, length) {
          val = val | 0 || 0;
          if (val < 0) {
            return Math.max(val + length, 0);
          }
          return Math.min(val, length);
        }
        ArrayBuffer.prototype.slice = function (from, to) {
          var length = this.byteLength,
            begin = clamp(from, length),
            end = length,
            num,
            target,
            targetArray,
            sourceArray;
          if (to !== undefined$1) {
            end = clamp(to, length);
          }
          if (begin > end) {
            return new ArrayBuffer(0);
          }
          num = end - begin;
          target = new ArrayBuffer(num);
          targetArray = new Uint8Array(target);
          sourceArray = new Uint8Array(this, begin, num);
          targetArray.set(sourceArray);
          return target;
        };
      })();
    }
    function toUtf8(str) {
      if (/[\u0080-\uFFFF]/.test(str)) {
        str = unescape(encodeURIComponent(str));
      }
      return str;
    }
    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
      var length = str.length,
        buff = new ArrayBuffer(length),
        arr = new Uint8Array(buff),
        i;
      for (i = 0; i < length; i += 1) {
        arr[i] = str.charCodeAt(i);
      }
      return returnUInt8Array ? arr : buff;
    }
    function arrayBuffer2Utf8Str(buff) {
      return String.fromCharCode.apply(null, new Uint8Array(buff));
    }
    function concatenateArrayBuffers(first, second, returnUInt8Array) {
      var result = new Uint8Array(first.byteLength + second.byteLength);
      result.set(new Uint8Array(first));
      result.set(new Uint8Array(second), first.byteLength);
      return returnUInt8Array ? result : result.buffer;
    }
    function hexToBinaryString(hex) {
      var bytes = [],
        length = hex.length,
        x;
      for (x = 0; x < length - 1; x += 2) {
        bytes.push(parseInt(hex.substr(x, 2), 16));
      }
      return String.fromCharCode.apply(String, bytes);
    }
    function SparkMD5() {
      this.reset();
    }
    SparkMD5.prototype.append = function (str) {
      this.appendBinary(toUtf8(str));
      return this;
    };
    SparkMD5.prototype.appendBinary = function (contents) {
      this._buff += contents;
      this._length += contents.length;
      var length = this._buff.length,
        i;
      for (i = 64; i <= length; i += 64) {
        md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
      }
      this._buff = this._buff.substring(i - 64);
      return this;
    };
    SparkMD5.prototype.end = function (raw) {
      var buff = this._buff,
        length = buff.length,
        i,
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ret;
      for (i = 0; i < length; i += 1) {
        tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
      }
      this._finish(tail, length);
      ret = hex(this._hash);
      if (raw) {
        ret = hexToBinaryString(ret);
      }
      this.reset();
      return ret;
    };
    SparkMD5.prototype.reset = function () {
      this._buff = "";
      this._length = 0;
      this._hash = [1732584193, -271733879, -1732584194, 271733878];
      return this;
    };
    SparkMD5.prototype.getState = function () {
      return {
        buff: this._buff,
        length: this._length,
        hash: this._hash.slice()
      };
    };
    SparkMD5.prototype.setState = function (state) {
      this._buff = state.buff;
      this._length = state.length;
      this._hash = state.hash;
      return this;
    };
    SparkMD5.prototype.destroy = function () {
      delete this._hash;
      delete this._buff;
      delete this._length;
    };
    SparkMD5.prototype._finish = function (tail, length) {
      var i = length,
        tmp,
        lo,
        hi;
      tail[i >> 2] |= 128 << (i % 4 << 3);
      if (i > 55) {
        md5cycle(this._hash, tail);
        for (i = 0; i < 16; i += 1) {
          tail[i] = 0;
        }
      }
      tmp = this._length * 8;
      tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
      lo = parseInt(tmp[2], 16);
      hi = parseInt(tmp[1], 16) || 0;
      tail[14] = lo;
      tail[15] = hi;
      md5cycle(this._hash, tail);
    };
    SparkMD5.hash = function (str, raw) {
      return SparkMD5.hashBinary(toUtf8(str), raw);
    };
    SparkMD5.hashBinary = function (content, raw) {
      var hash = md51(content),
        ret = hex(hash);
      return raw ? hexToBinaryString(ret) : ret;
    };
    SparkMD5.ArrayBuffer = function () {
      this.reset();
    };
    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
      var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
        length = buff.length,
        i;
      this._length += arr.byteLength;
      for (i = 64; i <= length; i += 64) {
        md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
      }
      this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
      return this;
    };
    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
      var buff = this._buff,
        length = buff.length,
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        i,
        ret;
      for (i = 0; i < length; i += 1) {
        tail[i >> 2] |= buff[i] << (i % 4 << 3);
      }
      this._finish(tail, length);
      ret = hex(this._hash);
      if (raw) {
        ret = hexToBinaryString(ret);
      }
      this.reset();
      return ret;
    };
    SparkMD5.ArrayBuffer.prototype.reset = function () {
      this._buff = new Uint8Array(0);
      this._length = 0;
      this._hash = [1732584193, -271733879, -1732584194, 271733878];
      return this;
    };
    SparkMD5.ArrayBuffer.prototype.getState = function () {
      var state = SparkMD5.prototype.getState.call(this);
      state.buff = arrayBuffer2Utf8Str(state.buff);
      return state;
    };
    SparkMD5.ArrayBuffer.prototype.setState = function (state) {
      state.buff = utf8Str2ArrayBuffer(state.buff, true);
      return SparkMD5.prototype.setState.call(this, state);
    };
    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
      var hash = md51_array(new Uint8Array(arr)),
        ret = hex(hash);
      return raw ? hexToBinaryString(ret) : ret;
    };
    return SparkMD5;
  });
})(sparkMd5);
var SparkMD5 = sparkMd5.exports;
const fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
class FileChecksum {
  static create(file, callback) {
    const instance = new FileChecksum(file);
    instance.create(callback);
  }
  constructor(file) {
    this.file = file;
    this.chunkSize = 2097152;
    this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
    this.chunkIndex = 0;
  }
  create(callback) {
    this.callback = callback;
    this.md5Buffer = new SparkMD5.ArrayBuffer();
    this.fileReader = new FileReader();
    this.fileReader.addEventListener("load", event => this.fileReaderDidLoad(event));
    this.fileReader.addEventListener("error", event => this.fileReaderDidError(event));
    this.readNextChunk();
  }
  fileReaderDidLoad(event) {
    this.md5Buffer.append(event.target.result);
    if (!this.readNextChunk()) {
      const binaryDigest = this.md5Buffer.end(true);
      const base64digest = btoa(binaryDigest);
      this.callback(null, base64digest);
    }
  }
  fileReaderDidError(event) {
    this.callback(`Error reading ${this.file.name}`);
  }
  readNextChunk() {
    if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
      const start = this.chunkIndex * this.chunkSize;
      const end = Math.min(start + this.chunkSize, this.file.size);
      const bytes = fileSlice.call(this.file, start, end);
      this.fileReader.readAsArrayBuffer(bytes);
      this.chunkIndex++;
      return true;
    } else {
      return false;
    }
  }
}
function getMetaValue(name) {
  const element = findElement(document.head, `meta[name="${name}"]`);
  if (element) {
    return element.getAttribute("content");
  }
}
function findElements(root, selector) {
  if (typeof root == "string") {
    selector = root;
    root = document;
  }
  const elements = root.querySelectorAll(selector);
  return toArray(elements);
}
function findElement(root, selector) {
  if (typeof root == "string") {
    selector = root;
    root = document;
  }
  return root.querySelector(selector);
}
function dispatchEvent(element, type) {
  let eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const disabled = element.disabled;
  const bubbles = eventInit.bubbles,
    cancelable = eventInit.cancelable,
    detail = eventInit.detail;
  const event = document.createEvent("Event");
  event.initEvent(type, bubbles || true, cancelable || true);
  event.detail = detail || {};
  try {
    element.disabled = false;
    element.dispatchEvent(event);
  } finally {
    element.disabled = disabled;
  }
  return event;
}
function toArray(value) {
  if (Array.isArray(value)) {
    return value;
  } else if (Array.from) {
    return Array.from(value);
  } else {
    return [].slice.call(value);
  }
}
class BlobRecord {
  constructor(file, checksum, url) {
    this.file = file;
    this.attributes = {
      filename: file.name,
      content_type: file.type || "application/octet-stream",
      byte_size: file.size,
      checksum: checksum
    };
    this.xhr = new XMLHttpRequest();
    this.xhr.open("POST", url, true);
    this.xhr.responseType = "json";
    this.xhr.setRequestHeader("Content-Type", "application/json");
    this.xhr.setRequestHeader("Accept", "application/json");
    this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    const csrfToken = getMetaValue("csrf-token");
    if (csrfToken != undefined) {
      this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
    }
    this.xhr.addEventListener("load", event => this.requestDidLoad(event));
    this.xhr.addEventListener("error", event => this.requestDidError(event));
  }
  get status() {
    return this.xhr.status;
  }
  get response() {
    const _this$xhr = this.xhr,
      responseType = _this$xhr.responseType,
      response = _this$xhr.response;
    if (responseType == "json") {
      return response;
    } else {
      return JSON.parse(response);
    }
  }
  create(callback) {
    this.callback = callback;
    this.xhr.send(JSON.stringify({
      blob: this.attributes
    }));
  }
  requestDidLoad(event) {
    if (this.status >= 200 && this.status < 300) {
      const response = this.response;
      const direct_upload = response.direct_upload;
      delete response.direct_upload;
      this.attributes = response;
      this.directUploadData = direct_upload;
      this.callback(null, this.toJSON());
    } else {
      this.requestDidError(event);
    }
  }
  requestDidError(event) {
    this.callback(`Error creating Blob for "${this.file.name}". Status: ${this.status}`);
  }
  toJSON() {
    const result = {};
    for (const key in this.attributes) {
      result[key] = this.attributes[key];
    }
    return result;
  }
}
class BlobUpload {
  constructor(blob) {
    this.blob = blob;
    this.file = blob.file;
    const _blob$directUploadDat = blob.directUploadData,
      url = _blob$directUploadDat.url,
      headers = _blob$directUploadDat.headers;
    this.xhr = new XMLHttpRequest();
    this.xhr.open("PUT", url, true);
    this.xhr.responseType = "text";
    for (const key in headers) {
      this.xhr.setRequestHeader(key, headers[key]);
    }
    this.xhr.addEventListener("load", event => this.requestDidLoad(event));
    this.xhr.addEventListener("error", event => this.requestDidError(event));
  }
  create(callback) {
    this.callback = callback;
    this.xhr.send(this.file.slice());
  }
  requestDidLoad(event) {
    const _this$xhr2 = this.xhr,
      status = _this$xhr2.status,
      response = _this$xhr2.response;
    if (status >= 200 && status < 300) {
      this.callback(null, response);
    } else {
      this.requestDidError(event);
    }
  }
  requestDidError(event) {
    this.callback(`Error storing "${this.file.name}". Status: ${this.xhr.status}`);
  }
}
let id = 0;
class DirectUpload {
  constructor(file, url, delegate) {
    this.id = ++id;
    this.file = file;
    this.url = url;
    this.delegate = delegate;
  }
  create(callback) {
    FileChecksum.create(this.file, (error, checksum) => {
      if (error) {
        callback(error);
        return;
      }
      const blob = new BlobRecord(this.file, checksum, this.url);
      notify(this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
      blob.create(error => {
        if (error) {
          callback(error);
        } else {
          const upload = new BlobUpload(blob);
          notify(this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
          upload.create(error => {
            if (error) {
              callback(error);
            } else {
              callback(null, blob.toJSON());
            }
          });
        }
      });
    });
  }
}
function notify(object, methodName) {
  if (object && typeof object[methodName] == "function") {
    for (var _len = arguments.length, messages = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      messages[_key - 2] = arguments[_key];
    }
    return object[methodName](...messages);
  }
}
class DirectUploadController {
  constructor(input, file) {
    this.input = input;
    this.file = file;
    this.directUpload = new DirectUpload(this.file, this.url, this);
    this.dispatch("initialize");
  }
  start(callback) {
    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.name = this.input.name;
    this.input.insertAdjacentElement("beforebegin", hiddenInput);
    this.dispatch("start");
    this.directUpload.create((error, attributes) => {
      if (error) {
        hiddenInput.parentNode.removeChild(hiddenInput);
        this.dispatchError(error);
      } else {
        hiddenInput.value = attributes.signed_id;
      }
      this.dispatch("end");
      callback(error);
    });
  }
  uploadRequestDidProgress(event) {
    const progress = event.loaded / event.total * 100;
    if (progress) {
      this.dispatch("progress", {
        progress: progress
      });
    }
  }
  get url() {
    return this.input.getAttribute("data-direct-upload-url");
  }
  dispatch(name) {
    let detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    detail.file = this.file;
    detail.id = this.directUpload.id;
    return dispatchEvent(this.input, `direct-upload:${name}`, {
      detail: detail
    });
  }
  dispatchError(error) {
    const event = this.dispatch("error", {
      error: error
    });
    if (!event.defaultPrevented) {
      alert(error);
    }
  }
  directUploadWillCreateBlobWithXHR(xhr) {
    this.dispatch("before-blob-request", {
      xhr: xhr
    });
  }
  directUploadWillStoreFileWithXHR(xhr) {
    this.dispatch("before-storage-request", {
      xhr: xhr
    });
    xhr.upload.addEventListener("progress", event => this.uploadRequestDidProgress(event));
  }
}
const inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";
class DirectUploadsController {
  constructor(form) {
    this.form = form;
    this.inputs = findElements(form, inputSelector).filter(input => input.files.length);
  }
  start(callback) {
    const controllers = this.createDirectUploadControllers();
    const startNextController = () => {
      const controller = controllers.shift();
      if (controller) {
        controller.start(error => {
          if (error) {
            callback(error);
            this.dispatch("end");
          } else {
            startNextController();
          }
        });
      } else {
        callback();
        this.dispatch("end");
      }
    };
    this.dispatch("start");
    startNextController();
  }
  createDirectUploadControllers() {
    const controllers = [];
    this.inputs.forEach(input => {
      toArray(input.files).forEach(file => {
        const controller = new DirectUploadController(input, file);
        controllers.push(controller);
      });
    });
    return controllers;
  }
  dispatch(name) {
    let detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return dispatchEvent(this.form, `direct-uploads:${name}`, {
      detail: detail
    });
  }
}
const processingAttribute = "data-direct-uploads-processing";
const submitButtonsByForm = new WeakMap();
let started = false;
function start() {
  if (!started) {
    started = true;
    document.addEventListener("click", didClick, true);
    document.addEventListener("submit", didSubmitForm, true);
    document.addEventListener("ajax:before", didSubmitRemoteElement);
  }
}
function didClick(event) {
  const target = event.target;
  if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
    submitButtonsByForm.set(target.form, target);
  }
}
function didSubmitForm(event) {
  handleFormSubmissionEvent(event);
}
function didSubmitRemoteElement(event) {
  if (event.target.tagName == "FORM") {
    handleFormSubmissionEvent(event);
  }
}
function handleFormSubmissionEvent(event) {
  const form = event.target;
  if (form.hasAttribute(processingAttribute)) {
    event.preventDefault();
    return;
  }
  const controller = new DirectUploadsController(form);
  const inputs = controller.inputs;
  if (inputs.length) {
    event.preventDefault();
    form.setAttribute(processingAttribute, "");
    inputs.forEach(disable);
    controller.start(error => {
      form.removeAttribute(processingAttribute);
      if (error) {
        inputs.forEach(enable);
      } else {
        submitForm(form);
      }
    });
  }
}
function submitForm(form) {
  let button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");
  if (button) {
    const _button = button,
      disabled = _button.disabled;
    button.disabled = false;
    button.focus();
    button.click();
    button.disabled = disabled;
  } else {
    button = document.createElement("input");
    button.type = "submit";
    button.style.display = "none";
    form.appendChild(button);
    button.click();
    form.removeChild(button);
  }
  submitButtonsByForm.delete(form);
}
function disable(input) {
  input.disabled = true;
}
function enable(input) {
  input.disabled = false;
}
function autostart() {
  if (window.ActiveStorage) {
    start();
  }
}
setTimeout(autostart, 1);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./app/javascript/stylesheets/application.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./app/javascript/stylesheets/application.scss ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n   ╷\n21 │ @import \"bootstrap-sprockets\";\r\n   │         ^^^^^^^^^^^^^^^^^^^^^\n   ╵\n  app\\javascript\\stylesheets\\application.scss 21:9  root stylesheet");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/trix/dist/trix.esm.min.js":
/*!************************************************!*\
  !*** ./node_modules/trix/dist/trix.esm.min.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return kn; });
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/*
Trix 2.0.4
Copyright © 2022 37signals, LLC
 */
const t = {
    preview: {
      presentation: "gallery",
      caption: {
        name: !0,
        size: !0
      }
    },
    file: {
      caption: {
        size: !0
      }
    }
  },
  e = {
    default: {
      tagName: "div",
      parse: !1
    },
    quote: {
      tagName: "blockquote",
      nestable: !0
    },
    heading1: {
      tagName: "h1",
      terminal: !0,
      breakOnReturn: !0,
      group: !1
    },
    code: {
      tagName: "pre",
      terminal: !0,
      text: {
        plaintext: !0
      }
    },
    bulletList: {
      tagName: "ul",
      parse: !1
    },
    bullet: {
      tagName: "li",
      listAttribute: "bulletList",
      group: !1,
      nestable: !0,
      test(t) {
        return i(t.parentNode) === e[this.listAttribute].tagName;
      }
    },
    numberList: {
      tagName: "ol",
      parse: !1
    },
    number: {
      tagName: "li",
      listAttribute: "numberList",
      group: !1,
      nestable: !0,
      test(t) {
        return i(t.parentNode) === e[this.listAttribute].tagName;
      }
    },
    attachmentGallery: {
      tagName: "div",
      exclusive: !0,
      terminal: !0,
      parse: !1,
      group: !1
    }
  },
  i = t => {
    var e;
    return null == t || null === (e = t.tagName) || void 0 === e ? void 0 : e.toLowerCase();
  },
  n = navigator.userAgent.match(/android\s([0-9]+.*Chrome)/i),
  r = n && parseInt(n[1]);
var o = {
    composesExistingText: /Android.*Chrome/.test(navigator.userAgent),
    recentAndroid: r && r > 12,
    samsungAndroid: r && navigator.userAgent.match(/Android.*SM-/),
    forcesObjectResizing: /Trident.*rv:11/.test(navigator.userAgent),
    supportsInputEvents: "undefined" != typeof InputEvent && ["data", "getTargetRanges", "inputType"].every(t => t in InputEvent.prototype)
  },
  s = {
    attachFiles: "Attach Files",
    bold: "Bold",
    bullets: "Bullets",
    byte: "Byte",
    bytes: "Bytes",
    captionPlaceholder: "Add a caption…",
    code: "Code",
    heading1: "Heading",
    indent: "Increase Level",
    italic: "Italic",
    link: "Link",
    numbers: "Numbers",
    outdent: "Decrease Level",
    quote: "Quote",
    redo: "Redo",
    remove: "Remove",
    strike: "Strikethrough",
    undo: "Undo",
    unlink: "Unlink",
    url: "URL",
    urlPlaceholder: "Enter a URL…",
    GB: "GB",
    KB: "KB",
    MB: "MB",
    PB: "PB",
    TB: "TB"
  };
const a = [s.bytes, s.KB, s.MB, s.GB, s.TB, s.PB];
var l = {
  prefix: "IEC",
  precision: 2,
  formatter(t) {
    switch (t) {
      case 0:
        return "0 ".concat(s.bytes);
      case 1:
        return "1 ".concat(s.byte);
      default:
        let e;
        "SI" === this.prefix ? e = 1e3 : "IEC" === this.prefix && (e = 1024);
        const i = Math.floor(Math.log(t) / Math.log(e)),
          n = (t / Math.pow(e, i)).toFixed(this.precision).replace(/0*$/, "").replace(/\.$/, "");
        return "".concat(n, " ").concat(a[i]);
    }
  }
};
const c = function (t) {
    for (const e in t) {
      const i = t[e];
      this[e] = i;
    }
    return this;
  },
  h = document.documentElement,
  u = h.matches,
  d = function (t) {
    let _ref = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      e = _ref.onElement,
      i = _ref.matchingSelector,
      n = _ref.withCallback,
      r = _ref.inPhase,
      o = _ref.preventDefault,
      s = _ref.times;
    const a = e || h,
      l = i,
      c = "capturing" === r,
      u = function (t) {
        null != s && 0 == --s && u.destroy();
        const e = p(t.target, {
          matchingSelector: l
        });
        null != e && (null == n || n.call(e, t, e), o && t.preventDefault());
      };
    return u.destroy = () => a.removeEventListener(t, u, c), a.addEventListener(t, u, c), u;
  },
  g = function (t) {
    let _ref2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      e = _ref2.onElement,
      i = _ref2.bubbles,
      n = _ref2.cancelable,
      r = _ref2.attributes;
    const o = null != e ? e : h;
    i = !1 !== i, n = !1 !== n;
    const s = document.createEvent("Events");
    return s.initEvent(t, i, n), null != r && c.call(s, r), o.dispatchEvent(s);
  },
  m = function (t, e) {
    if (1 === (null == t ? void 0 : t.nodeType)) return u.call(t, e);
  },
  p = function (t) {
    let _ref3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      e = _ref3.matchingSelector,
      i = _ref3.untilNode;
    for (; t && t.nodeType !== Node.ELEMENT_NODE;) t = t.parentNode;
    if (null != t) {
      if (null == e) return t;
      if (t.closest && null == i) return t.closest(e);
      for (; t && t !== i;) {
        if (m(t, e)) return t;
        t = t.parentNode;
      }
    }
  },
  f = t => document.activeElement !== t && b(t, document.activeElement),
  b = function (t, e) {
    if (t && e) for (; e;) {
      if (e === t) return !0;
      e = e.parentNode;
    }
  },
  v = function (t) {
    var e;
    if (null === (e = t) || void 0 === e || !e.parentNode) return;
    let i = 0;
    for (t = t.previousSibling; t;) i++, t = t.previousSibling;
    return i;
  },
  A = t => {
    var e;
    return null == t || null === (e = t.parentNode) || void 0 === e ? void 0 : e.removeChild(t);
  },
  x = function (t) {
    let _ref4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      e = _ref4.onlyNodesOfType,
      i = _ref4.usingFilter,
      n = _ref4.expandEntityReferences;
    const r = (() => {
      switch (e) {
        case "element":
          return NodeFilter.SHOW_ELEMENT;
        case "text":
          return NodeFilter.SHOW_TEXT;
        case "comment":
          return NodeFilter.SHOW_COMMENT;
        default:
          return NodeFilter.SHOW_ALL;
      }
    })();
    return document.createTreeWalker(t, r, null != i ? i : null, !0 === n);
  },
  y = t => {
    var e;
    return null == t || null === (e = t.tagName) || void 0 === e ? void 0 : e.toLowerCase();
  },
  C = function (t) {
    let e,
      i,
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    "object" == typeof t ? (n = t, t = n.tagName) : n = {
      attributes: n
    };
    const r = document.createElement(t);
    if (null != n.editable && (null == n.attributes && (n.attributes = {}), n.attributes.contenteditable = n.editable), n.attributes) for (e in n.attributes) i = n.attributes[e], r.setAttribute(e, i);
    if (n.style) for (e in n.style) i = n.style[e], r.style[e] = i;
    if (n.data) for (e in n.data) i = n.data[e], r.dataset[e] = i;
    return n.className && n.className.split(" ").forEach(t => {
      r.classList.add(t);
    }), n.textContent && (r.textContent = n.textContent), n.childNodes && [].concat(n.childNodes).forEach(t => {
      r.appendChild(t);
    }), r;
  };
let R;
const E = function () {
    if (null != R) return R;
    R = [];
    for (const t in e) {
      const i = e[t];
      i.tagName && R.push(i.tagName);
    }
    return R;
  },
  S = t => D(null == t ? void 0 : t.firstChild),
  k = function (t) {
    return E().includes(y(t)) && !E().includes(y(t.firstChild));
  },
  L = function (t) {
    let _ref5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        strict: !0
      },
      e = _ref5.strict;
    return e ? D(t) : D(t) || !D(t.firstChild) && k(t);
  },
  D = t => w(t) && "block" === (null == t ? void 0 : t.data),
  w = t => (null == t ? void 0 : t.nodeType) === Node.COMMENT_NODE,
  T = function (t) {
    let _ref6 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      e = _ref6.name;
    if (t) return I(t) ? "\ufeff" === t.data ? !e || t.parentNode.dataset.trixCursorTarget === e : void 0 : T(t.firstChild);
  },
  F = t => m(t, "[data-trix-attachment]"),
  B = t => I(t) && "" === (null == t ? void 0 : t.data),
  I = t => (null == t ? void 0 : t.nodeType) === Node.TEXT_NODE,
  P = {
    level2Enabled: !0,
    getLevel() {
      return this.level2Enabled && o.supportsInputEvents ? 2 : 0;
    },
    pickFiles(t) {
      const e = C("input", {
        type: "file",
        multiple: !0,
        hidden: !0,
        id: this.fileInputId
      });
      e.addEventListener("change", () => {
        t(e.files), A(e);
      }), A(document.getElementById(this.fileInputId)), document.body.appendChild(e), e.click();
    }
  };
var N = {
    removeBlankTableCells: !1,
    tableCellSeparator: " | ",
    tableRowSeparator: "\n"
  },
  O = {
    bold: {
      tagName: "strong",
      inheritable: !0,
      parser(t) {
        const e = window.getComputedStyle(t);
        return "bold" === e.fontWeight || e.fontWeight >= 600;
      }
    },
    italic: {
      tagName: "em",
      inheritable: !0,
      parser: t => "italic" === window.getComputedStyle(t).fontStyle
    },
    href: {
      groupTagName: "a",
      parser(t) {
        const e = "a:not(".concat("[data-trix-attachment]", ")"),
          i = t.closest(e);
        if (i) return i.getAttribute("href");
      }
    },
    strike: {
      tagName: "del",
      inheritable: !0
    },
    frozen: {
      style: {
        backgroundColor: "highlight"
      }
    }
  },
  M = {
    getDefaultHTML: () => '<div class="trix-button-row">\n      <span class="trix-button-group trix-button-group--text-tools" data-trix-button-group="text-tools">\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-bold" data-trix-attribute="bold" data-trix-key="b" title="'.concat(s.bold, '" tabindex="-1">').concat(s.bold, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-italic" data-trix-attribute="italic" data-trix-key="i" title="').concat(s.italic, '" tabindex="-1">').concat(s.italic, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-strike" data-trix-attribute="strike" title="').concat(s.strike, '" tabindex="-1">').concat(s.strike, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-link" data-trix-attribute="href" data-trix-action="link" data-trix-key="k" title="').concat(s.link, '" tabindex="-1">').concat(s.link, '</button>\n      </span>\n\n      <span class="trix-button-group trix-button-group--block-tools" data-trix-button-group="block-tools">\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-1" data-trix-attribute="heading1" title="').concat(s.heading1, '" tabindex="-1">').concat(s.heading1, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-quote" data-trix-attribute="quote" title="').concat(s.quote, '" tabindex="-1">').concat(s.quote, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-code" data-trix-attribute="code" title="').concat(s.code, '" tabindex="-1">').concat(s.code, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" title="').concat(s.bullets, '" tabindex="-1">').concat(s.bullets, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" title="').concat(s.numbers, '" tabindex="-1">').concat(s.numbers, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-decrease-nesting-level" data-trix-action="decreaseNestingLevel" title="').concat(s.outdent, '" tabindex="-1">').concat(s.outdent, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-increase-nesting-level" data-trix-action="increaseNestingLevel" title="').concat(s.indent, '" tabindex="-1">').concat(s.indent, '</button>\n      </span>\n\n      <span class="trix-button-group trix-button-group--file-tools" data-trix-button-group="file-tools">\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-attach" data-trix-action="attachFiles" title="').concat(s.attachFiles, '" tabindex="-1">').concat(s.attachFiles, '</button>\n      </span>\n\n      <span class="trix-button-group-spacer"></span>\n\n      <span class="trix-button-group trix-button-group--history-tools" data-trix-button-group="history-tools">\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-undo" data-trix-action="undo" data-trix-key="z" title="').concat(s.undo, '" tabindex="-1">').concat(s.undo, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-redo" data-trix-action="redo" data-trix-key="shift+z" title="').concat(s.redo, '" tabindex="-1">').concat(s.redo, '</button>\n      </span>\n    </div>\n\n    <div class="trix-dialogs" data-trix-dialogs>\n      <div class="trix-dialog trix-dialog--link" data-trix-dialog="href" data-trix-dialog-attribute="href">\n        <div class="trix-dialog__link-fields">\n          <input type="url" name="href" class="trix-input trix-input--dialog" placeholder="').concat(s.urlPlaceholder, '" aria-label="').concat(s.url, '" required data-trix-input>\n          <div class="trix-button-group">\n            <input type="button" class="trix-button trix-button--dialog" value="').concat(s.link, '" data-trix-method="setAttribute">\n            <input type="button" class="trix-button trix-button--dialog" value="').concat(s.unlink, '" data-trix-method="removeAttribute">\n          </div>\n        </div>\n      </div>\n    </div>')
  };
const j = {
  interval: 5e3
};
var W = Object.freeze({
  __proto__: null,
  attachments: t,
  blockAttributes: e,
  browser: o,
  css: {
    attachment: "attachment",
    attachmentCaption: "attachment__caption",
    attachmentCaptionEditor: "attachment__caption-editor",
    attachmentMetadata: "attachment__metadata",
    attachmentMetadataContainer: "attachment__metadata-container",
    attachmentName: "attachment__name",
    attachmentProgress: "attachment__progress",
    attachmentSize: "attachment__size",
    attachmentToolbar: "attachment__toolbar",
    attachmentGallery: "attachment-gallery"
  },
  fileSize: l,
  input: P,
  keyNames: {
    8: "backspace",
    9: "tab",
    13: "return",
    27: "escape",
    37: "left",
    39: "right",
    46: "delete",
    68: "d",
    72: "h",
    79: "o"
  },
  lang: s,
  parser: N,
  textAttributes: O,
  toolbar: M,
  undo: j
});
class U {
  static proxyMethod(t) {
    const _q = q(t),
      e = _q.name,
      i = _q.toMethod,
      n = _q.toProperty,
      r = _q.optional;
    this.prototype[e] = function () {
      let t, o;
      var s, a;
      i ? o = r ? null === (s = this[i]) || void 0 === s ? void 0 : s.call(this) : this[i]() : n && (o = this[n]);
      return r ? (t = null === (a = o) || void 0 === a ? void 0 : a[e], t ? V.call(t, o, arguments) : void 0) : (t = o[e], V.call(t, o, arguments));
    };
  }
}
const q = function (t) {
    const e = t.match(z);
    if (!e) throw new Error("can't parse @proxyMethod expression: ".concat(t));
    const i = {
      name: e[4]
    };
    return null != e[2] ? i.toMethod = e[1] : i.toProperty = e[1], null != e[3] && (i.optional = !0), i;
  },
  V = Function.prototype.apply,
  z = new RegExp("^(.+?)(\\(\\))?(\\?)?\\.(.+?)$");
var _, H, J;
class K extends U {
  static box() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return t instanceof this ? t : this.fromUCS2String(null == t ? void 0 : t.toString());
  }
  static fromUCS2String(t) {
    return new this(t, Y(t));
  }
  static fromCodepoints(t) {
    return new this(Q(t), t);
  }
  constructor(t, e) {
    super(...arguments), this.ucs2String = t, this.codepoints = e, this.length = this.codepoints.length, this.ucs2Length = this.ucs2String.length;
  }
  offsetToUCS2Offset(t) {
    return Q(this.codepoints.slice(0, Math.max(0, t))).length;
  }
  offsetFromUCS2Offset(t) {
    return Y(this.ucs2String.slice(0, Math.max(0, t))).length;
  }
  slice() {
    return this.constructor.fromCodepoints(this.codepoints.slice(...arguments));
  }
  charAt(t) {
    return this.slice(t, t + 1);
  }
  isEqualTo(t) {
    return this.constructor.box(t).ucs2String === this.ucs2String;
  }
  toJSON() {
    return this.ucs2String;
  }
  getCacheKey() {
    return this.ucs2String;
  }
  toString() {
    return this.ucs2String;
  }
}
const G = 1 === (null === (_ = Array.from) || void 0 === _ ? void 0 : _.call(Array, "👼").length),
  $ = null != (null === (H = " ".codePointAt) || void 0 === H ? void 0 : H.call(" ", 0)),
  X = " 👼" === (null === (J = String.fromCodePoint) || void 0 === J ? void 0 : J.call(String, 32, 128124));
let Y, Q;
Y = G && $ ? t => Array.from(t).map(t => t.codePointAt(0)) : function (t) {
  const e = [];
  let i = 0;
  const n = t.length;
  for (; i < n;) {
    let r = t.charCodeAt(i++);
    if (55296 <= r && r <= 56319 && i < n) {
      const e = t.charCodeAt(i++);
      56320 == (64512 & e) ? r = ((1023 & r) << 10) + (1023 & e) + 65536 : i--;
    }
    e.push(r);
  }
  return e;
}, Q = X ? t => String.fromCodePoint(...Array.from(t || [])) : function (t) {
  return (() => {
    const e = [];
    return Array.from(t).forEach(t => {
      let i = "";
      t > 65535 && (t -= 65536, i += String.fromCharCode(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e.push(i + String.fromCharCode(t));
    }), e;
  })().join("");
};
let Z = 0;
class tt extends U {
  static fromJSONString(t) {
    return this.fromJSON(JSON.parse(t));
  }
  constructor() {
    super(...arguments), this.id = ++Z;
  }
  hasSameConstructorAs(t) {
    return this.constructor === (null == t ? void 0 : t.constructor);
  }
  isEqualTo(t) {
    return this === t;
  }
  inspect() {
    const t = [],
      e = this.contentsForInspection() || {};
    for (const i in e) {
      const n = e[i];
      t.push("".concat(i, "=").concat(n));
    }
    return "#<".concat(this.constructor.name, ":").concat(this.id).concat(t.length ? " ".concat(t.join(", ")) : "", ">");
  }
  contentsForInspection() {}
  toJSONString() {
    return JSON.stringify(this);
  }
  toUTF16String() {
    return K.box(this);
  }
  getCacheKey() {
    return this.id.toString();
  }
}
const et = function () {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    if (t.length !== e.length) return !1;
    for (let i = 0; i < t.length; i++) {
      if (t[i] !== e[i]) return !1;
    }
    return !0;
  },
  it = function (t) {
    const e = t.slice(0);
    for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
    return e.splice(...n), e;
  },
  nt = /[\u05BE\u05C0\u05C3\u05D0-\u05EA\u05F0-\u05F4\u061B\u061F\u0621-\u063A\u0640-\u064A\u066D\u0671-\u06B7\u06BA-\u06BE\u06C0-\u06CE\u06D0-\u06D5\u06E5\u06E6\u200F\u202B\u202E\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE72\uFE74\uFE76-\uFEFC]/,
  rt = function () {
    const t = C("input", {
        dir: "auto",
        name: "x",
        dirName: "x.dir"
      }),
      e = C("form");
    e.appendChild(t);
    const i = function () {
        try {
          return new FormData(e).has(t.dirName);
        } catch (t) {
          return !1;
        }
      }(),
      n = function () {
        try {
          return t.matches(":dir(ltr),:dir(rtl)");
        } catch (t) {
          return !1;
        }
      }();
    return i ? function (i) {
      return t.value = i, new FormData(e).get(t.dirName);
    } : n ? function (e) {
      return t.value = e, t.matches(":dir(rtl)") ? "rtl" : "ltr";
    } : function (t) {
      const e = t.trim().charAt(0);
      return nt.test(e) ? "rtl" : "ltr";
    };
  }();
let ot = null,
  st = null,
  at = null,
  lt = null;
const ct = () => (ot || (ot = gt().concat(ut())), ot),
  ht = t => e[t],
  ut = () => (st || (st = Object.keys(e)), st),
  dt = t => O[t],
  gt = () => (at || (at = Object.keys(O)), at),
  mt = function (t, e) {
    pt(t).textContent = e.replace(/%t/g, t);
  },
  pt = function (t) {
    const e = document.createElement("style");
    e.setAttribute("type", "text/css"), e.setAttribute("data-tag-name", t.toLowerCase());
    const i = ft();
    return i && e.setAttribute("nonce", i), document.head.insertBefore(e, document.head.firstChild), e;
  },
  ft = function () {
    const t = bt("trix-csp-nonce") || bt("csp-nonce");
    if (t) return t.getAttribute("content");
  },
  bt = t => document.head.querySelector("meta[name=".concat(t, "]")),
  vt = {
    "application/x-trix-feature-detection": "test"
  },
  At = function (t) {
    const e = t.getData("text/plain"),
      i = t.getData("text/html");
    if (!e || !i) return null == e ? void 0 : e.length;
    {
      const _DOMParser$parseFromS = new DOMParser().parseFromString(i, "text/html"),
        t = _DOMParser$parseFromS.body;
      if (t.textContent === e) return !t.querySelector("*");
    }
  },
  xt = /Mac|^iP/.test(navigator.platform) ? t => t.metaKey : t => t.ctrlKey,
  yt = t => setTimeout(t, 1),
  Ct = function () {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const e = {};
    for (const i in t) {
      const n = t[i];
      e[i] = n;
    }
    return e;
  },
  Rt = function () {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (Object.keys(t).length !== Object.keys(e).length) return !1;
    for (const i in t) {
      if (t[i] !== e[i]) return !1;
    }
    return !0;
  },
  Et = function (t) {
    if (null != t) return Array.isArray(t) || (t = [t, t]), [Lt(t[0]), Lt(null != t[1] ? t[1] : t[0])];
  },
  St = function (t) {
    if (null == t) return;
    const _Et = Et(t),
      _Et2 = _slicedToArray(_Et, 2),
      e = _Et2[0],
      i = _Et2[1];
    return Dt(e, i);
  },
  kt = function (t, e) {
    if (null == t || null == e) return;
    const _Et3 = Et(t),
      _Et4 = _slicedToArray(_Et3, 2),
      i = _Et4[0],
      n = _Et4[1],
      _Et5 = Et(e),
      _Et6 = _slicedToArray(_Et5, 2),
      r = _Et6[0],
      o = _Et6[1];
    return Dt(i, r) && Dt(n, o);
  },
  Lt = function (t) {
    return "number" == typeof t ? t : Ct(t);
  },
  Dt = function (t, e) {
    return "number" == typeof t ? t === e : Rt(t, e);
  };
class wt extends U {
  constructor() {
    super(...arguments), this.update = this.update.bind(this), this.run = this.run.bind(this), this.selectionManagers = [];
  }
  start() {
    if (!this.started) return this.started = !0, "onselectionchange" in document ? document.addEventListener("selectionchange", this.update, !0) : this.run();
  }
  stop() {
    if (this.started) return this.started = !1, document.removeEventListener("selectionchange", this.update, !0);
  }
  registerSelectionManager(t) {
    if (!this.selectionManagers.includes(t)) return this.selectionManagers.push(t), this.start();
  }
  unregisterSelectionManager(t) {
    if (this.selectionManagers = this.selectionManagers.filter(e => e !== t), 0 === this.selectionManagers.length) return this.stop();
  }
  notifySelectionManagersOfSelectionChange() {
    return this.selectionManagers.map(t => t.selectionDidChange());
  }
  update() {
    const t = It();
    if (!Tt(t, this.domRange)) return this.domRange = t, this.notifySelectionManagersOfSelectionChange();
  }
  reset() {
    return this.domRange = null, this.update();
  }
  run() {
    if (this.started) return this.update(), requestAnimationFrame(this.run);
  }
}
const Tt = (t, e) => (null == t ? void 0 : t.startContainer) === (null == e ? void 0 : e.startContainer) && (null == t ? void 0 : t.startOffset) === (null == e ? void 0 : e.startOffset) && (null == t ? void 0 : t.endContainer) === (null == e ? void 0 : e.endContainer) && (null == t ? void 0 : t.endOffset) === (null == e ? void 0 : e.endOffset),
  Ft = new wt(),
  Bt = function () {
    const t = window.getSelection();
    if (t.rangeCount > 0) return t;
  },
  It = function () {
    var t;
    const e = null === (t = Bt()) || void 0 === t ? void 0 : t.getRangeAt(0);
    if (e && !Nt(e)) return e;
  },
  Pt = function (t) {
    const e = window.getSelection();
    return e.removeAllRanges(), e.addRange(t), Ft.update();
  },
  Nt = t => Ot(t.startContainer) || Ot(t.endContainer),
  Ot = t => !Object.getPrototypeOf(t),
  Mt = t => t.replace(new RegExp("".concat("\ufeff"), "g"), "").replace(new RegExp("".concat(" "), "g"), " "),
  jt = new RegExp("[^\\S".concat(" ", "]")),
  Wt = t => t.replace(new RegExp("".concat(jt.source), "g"), " ").replace(/\ {2,}/g, " "),
  Ut = function (t, e) {
    if (t.isEqualTo(e)) return ["", ""];
    const i = qt(t, e),
      n = i.utf16String.length;
    let r;
    if (n) {
      const o = i.offset,
        s = t.codepoints.slice(0, o).concat(t.codepoints.slice(o + n));
      r = qt(e, K.fromCodepoints(s));
    } else r = qt(e, t);
    return [i.utf16String.toString(), r.utf16String.toString()];
  },
  qt = function (t, e) {
    let i = 0,
      n = t.length,
      r = e.length;
    for (; i < n && t.charAt(i).isEqualTo(e.charAt(i));) i++;
    for (; n > i + 1 && t.charAt(n - 1).isEqualTo(e.charAt(r - 1));) n--, r--;
    return {
      utf16String: t.slice(i, n),
      offset: i
    };
  };
class Vt extends tt {
  static fromCommonAttributesOfObjects() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    if (!t.length) return new this();
    let e = Jt(t[0]),
      i = e.getKeys();
    return t.slice(1).forEach(t => {
      i = e.getKeysCommonToHash(Jt(t)), e = e.slice(i);
    }), e;
  }
  static box(t) {
    return Jt(t);
  }
  constructor() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    super(...arguments), this.values = Ht(t);
  }
  add(t, e) {
    return this.merge(zt(t, e));
  }
  remove(t) {
    return new Vt(Ht(this.values, t));
  }
  get(t) {
    return this.values[t];
  }
  has(t) {
    return t in this.values;
  }
  merge(t) {
    return new Vt(_t(this.values, Kt(t)));
  }
  slice(t) {
    const e = {};
    return Array.from(t).forEach(t => {
      this.has(t) && (e[t] = this.values[t]);
    }), new Vt(e);
  }
  getKeys() {
    return Object.keys(this.values);
  }
  getKeysCommonToHash(t) {
    return t = Jt(t), this.getKeys().filter(e => this.values[e] === t.values[e]);
  }
  isEqualTo(t) {
    return et(this.toArray(), Jt(t).toArray());
  }
  isEmpty() {
    return 0 === this.getKeys().length;
  }
  toArray() {
    if (!this.array) {
      const t = [];
      for (const e in this.values) {
        const i = this.values[e];
        t.push(t.push(e, i));
      }
      this.array = t.slice(0);
    }
    return this.array;
  }
  toObject() {
    return Ht(this.values);
  }
  toJSON() {
    return this.toObject();
  }
  contentsForInspection() {
    return {
      values: JSON.stringify(this.values)
    };
  }
}
const zt = function (t, e) {
    const i = {};
    return i[t] = e, i;
  },
  _t = function (t, e) {
    const i = Ht(t);
    for (const t in e) {
      const n = e[t];
      i[t] = n;
    }
    return i;
  },
  Ht = function (t, e) {
    const i = {};
    return Object.keys(t).sort().forEach(n => {
      n !== e && (i[n] = t[n]);
    }), i;
  },
  Jt = function (t) {
    return t instanceof Vt ? t : new Vt(t);
  },
  Kt = function (t) {
    return t instanceof Vt ? t.values : t;
  };
class Gt {
  static groupObjects() {
    let t,
      e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      _ref7 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      i = _ref7.depth,
      n = _ref7.asTree;
    n && null == i && (i = 0);
    const r = [];
    return Array.from(e).forEach(e => {
      var o;
      if (t) {
        var s, a, l;
        if (null !== (s = e.canBeGrouped) && void 0 !== s && s.call(e, i) && null !== (a = (l = t[t.length - 1]).canBeGroupedWith) && void 0 !== a && a.call(l, e, i)) return void t.push(e);
        r.push(new this(t, {
          depth: i,
          asTree: n
        })), t = null;
      }
      null !== (o = e.canBeGrouped) && void 0 !== o && o.call(e, i) ? t = [e] : r.push(e);
    }), t && r.push(new this(t, {
      depth: i,
      asTree: n
    })), r;
  }
  constructor() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      _ref8 = arguments.length > 1 ? arguments[1] : void 0,
      e = _ref8.depth,
      i = _ref8.asTree;
    this.objects = t, i && (this.depth = e, this.objects = this.constructor.groupObjects(this.objects, {
      asTree: i,
      depth: this.depth + 1
    }));
  }
  getObjects() {
    return this.objects;
  }
  getDepth() {
    return this.depth;
  }
  getCacheKey() {
    const t = ["objectGroup"];
    return Array.from(this.getObjects()).forEach(e => {
      t.push(e.getCacheKey());
    }), t.join("/");
  }
}
class $t extends U {
  constructor() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    super(...arguments), this.objects = {}, Array.from(t).forEach(t => {
      const e = JSON.stringify(t);
      null == this.objects[e] && (this.objects[e] = t);
    });
  }
  find(t) {
    const e = JSON.stringify(t);
    return this.objects[e];
  }
}
class Xt {
  constructor(t) {
    this.reset(t);
  }
  add(t) {
    const e = Yt(t);
    this.elements[e] = t;
  }
  remove(t) {
    const e = Yt(t),
      i = this.elements[e];
    if (i) return delete this.elements[e], i;
  }
  reset() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return this.elements = {}, Array.from(t).forEach(t => {
      this.add(t);
    }), t;
  }
}
const Yt = t => t.dataset.trixStoreKey;
class Qt extends U {
  isPerforming() {
    return !0 === this.performing;
  }
  hasPerformed() {
    return !0 === this.performed;
  }
  hasSucceeded() {
    return this.performed && this.succeeded;
  }
  hasFailed() {
    return this.performed && !this.succeeded;
  }
  getPromise() {
    return this.promise || (this.promise = new Promise((t, e) => (this.performing = !0, this.perform((i, n) => {
      this.succeeded = i, this.performing = !1, this.performed = !0, this.succeeded ? t(n) : e(n);
    })))), this.promise;
  }
  perform(t) {
    return t(!1);
  }
  release() {
    var t, e;
    null === (t = this.promise) || void 0 === t || null === (e = t.cancel) || void 0 === e || e.call(t), this.promise = null, this.performing = null, this.performed = null, this.succeeded = null;
  }
}
Qt.proxyMethod("getPromise().then"), Qt.proxyMethod("getPromise().catch");
class Zt extends U {
  constructor(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(...arguments), this.object = t, this.options = e, this.childViews = [], this.rootView = this;
  }
  getNodes() {
    return this.nodes || (this.nodes = this.createNodes()), this.nodes.map(t => t.cloneNode(!0));
  }
  invalidate() {
    var t;
    return this.nodes = null, this.childViews = [], null === (t = this.parentView) || void 0 === t ? void 0 : t.invalidate();
  }
  invalidateViewForObject(t) {
    var e;
    return null === (e = this.findViewForObject(t)) || void 0 === e ? void 0 : e.invalidate();
  }
  findOrCreateCachedChildView(t, e, i) {
    let n = this.getCachedViewForObject(e);
    return n ? this.recordChildView(n) : (n = this.createChildView(...arguments), this.cacheViewForObject(n, e)), n;
  }
  createChildView(t, e) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    e instanceof Gt && (i.viewClass = t, t = te);
    const n = new t(e, i);
    return this.recordChildView(n);
  }
  recordChildView(t) {
    return t.parentView = this, t.rootView = this.rootView, this.childViews.push(t), t;
  }
  getAllChildViews() {
    let t = [];
    return this.childViews.forEach(e => {
      t.push(e), t = t.concat(e.getAllChildViews());
    }), t;
  }
  findElement() {
    return this.findElementForObject(this.object);
  }
  findElementForObject(t) {
    const e = null == t ? void 0 : t.id;
    if (e) return this.rootView.element.querySelector("[data-trix-id='".concat(e, "']"));
  }
  findViewForObject(t) {
    for (const e of this.getAllChildViews()) if (e.object === t) return e;
  }
  getViewCache() {
    return this.rootView !== this ? this.rootView.getViewCache() : this.isViewCachingEnabled() ? (this.viewCache || (this.viewCache = {}), this.viewCache) : void 0;
  }
  isViewCachingEnabled() {
    return !1 !== this.shouldCacheViews;
  }
  enableViewCaching() {
    this.shouldCacheViews = !0;
  }
  disableViewCaching() {
    this.shouldCacheViews = !1;
  }
  getCachedViewForObject(t) {
    var e;
    return null === (e = this.getViewCache()) || void 0 === e ? void 0 : e[t.getCacheKey()];
  }
  cacheViewForObject(t, e) {
    const i = this.getViewCache();
    i && (i[e.getCacheKey()] = t);
  }
  garbageCollectCachedViews() {
    const t = this.getViewCache();
    if (t) {
      const e = this.getAllChildViews().concat(this).map(t => t.object.getCacheKey());
      for (const i in t) e.includes(i) || delete t[i];
    }
  }
}
class te extends Zt {
  constructor() {
    super(...arguments), this.objectGroup = this.object, this.viewClass = this.options.viewClass, delete this.options.viewClass;
  }
  getChildViews() {
    return this.childViews.length || Array.from(this.objectGroup.getObjects()).forEach(t => {
      this.findOrCreateCachedChildView(this.viewClass, t, this.options);
    }), this.childViews;
  }
  createNodes() {
    const t = this.createContainerElement();
    return this.getChildViews().forEach(e => {
      Array.from(e.getNodes()).forEach(e => {
        t.appendChild(e);
      });
    }), [t];
  }
  createContainerElement() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.objectGroup.getDepth();
    return this.getChildViews()[0].createContainerElement(t);
  }
}
const ee = W.css;
class ie extends Zt {
  constructor() {
    super(...arguments), this.attachment = this.object, this.attachment.uploadProgressDelegate = this, this.attachmentPiece = this.options.piece;
  }
  createContentNodes() {
    return [];
  }
  createNodes() {
    let t;
    const e = t = C({
        tagName: "figure",
        className: this.getClassName(),
        data: this.getData(),
        editable: !1
      }),
      i = this.getHref();
    return i && (t = C({
      tagName: "a",
      editable: !1,
      attributes: {
        href: i,
        tabindex: -1
      }
    }), e.appendChild(t)), this.attachment.hasContent() ? t.innerHTML = this.attachment.getContent() : this.createContentNodes().forEach(e => {
      t.appendChild(e);
    }), t.appendChild(this.createCaptionElement()), this.attachment.isPending() && (this.progressElement = C({
      tagName: "progress",
      attributes: {
        class: ee.attachmentProgress,
        value: this.attachment.getUploadProgress(),
        max: 100
      },
      data: {
        trixMutable: !0,
        trixStoreKey: ["progressElement", this.attachment.id].join("/")
      }
    }), e.appendChild(this.progressElement)), [ne("left"), e, ne("right")];
  }
  createCaptionElement() {
    const t = C({
        tagName: "figcaption",
        className: ee.attachmentCaption
      }),
      e = this.attachmentPiece.getCaption();
    if (e) t.classList.add("".concat(ee.attachmentCaption, "--edited")), t.textContent = e;else {
      let e, i;
      const n = this.getCaptionConfig();
      if (n.name && (e = this.attachment.getFilename()), n.size && (i = this.attachment.getFormattedFilesize()), e) {
        const i = C({
          tagName: "span",
          className: ee.attachmentName,
          textContent: e
        });
        t.appendChild(i);
      }
      if (i) {
        e && t.appendChild(document.createTextNode(" "));
        const n = C({
          tagName: "span",
          className: ee.attachmentSize,
          textContent: i
        });
        t.appendChild(n);
      }
    }
    return t;
  }
  getClassName() {
    const t = [ee.attachment, "".concat(ee.attachment, "--").concat(this.attachment.getType())],
      e = this.attachment.getExtension();
    return e && t.push("".concat(ee.attachment, "--").concat(e)), t.join(" ");
  }
  getData() {
    const t = {
        trixAttachment: JSON.stringify(this.attachment),
        trixContentType: this.attachment.getContentType(),
        trixId: this.attachment.id
      },
      e = this.attachmentPiece.attributes;
    return e.isEmpty() || (t.trixAttributes = JSON.stringify(e)), this.attachment.isPending() && (t.trixSerialize = !1), t;
  }
  getHref() {
    if (!re(this.attachment.getContent(), "a")) return this.attachment.getHref();
  }
  getCaptionConfig() {
    var e;
    const i = this.attachment.getType(),
      n = Ct(null === (e = t[i]) || void 0 === e ? void 0 : e.caption);
    return "file" === i && (n.name = !0), n;
  }
  findProgressElement() {
    var t;
    return null === (t = this.findElement()) || void 0 === t ? void 0 : t.querySelector("progress");
  }
  attachmentDidChangeUploadProgress() {
    const t = this.attachment.getUploadProgress(),
      e = this.findProgressElement();
    e && (e.value = t);
  }
}
const ne = t => C({
    tagName: "span",
    textContent: "\ufeff",
    data: {
      trixCursorTarget: t,
      trixSerialize: !1
    }
  }),
  re = function (t, e) {
    const i = C("div");
    return i.innerHTML = t || "", i.querySelector(e);
  };
class oe extends ie {
  constructor() {
    super(...arguments), this.attachment.previewDelegate = this;
  }
  createContentNodes() {
    return this.image = C({
      tagName: "img",
      attributes: {
        src: ""
      },
      data: {
        trixMutable: !0
      }
    }), this.refresh(this.image), [this.image];
  }
  createCaptionElement() {
    const t = super.createCaptionElement(...arguments);
    return t.textContent || t.setAttribute("data-trix-placeholder", s.captionPlaceholder), t;
  }
  refresh(t) {
    var e;
    t || (t = null === (e = this.findElement()) || void 0 === e ? void 0 : e.querySelector("img"));
    if (t) return this.updateAttributesForImage(t);
  }
  updateAttributesForImage(t) {
    const e = this.attachment.getURL(),
      i = this.attachment.getPreviewURL();
    if (t.src = i || e, i === e) t.removeAttribute("data-trix-serialized-attributes");else {
      const i = JSON.stringify({
        src: e
      });
      t.setAttribute("data-trix-serialized-attributes", i);
    }
    const n = this.attachment.getWidth(),
      r = this.attachment.getHeight();
    null != n && (t.width = n), null != r && (t.height = r);
    const o = ["imageElement", this.attachment.id, t.src, t.width, t.height].join("/");
    t.dataset.trixStoreKey = o;
  }
  attachmentDidChangeAttributes() {
    return this.refresh(this.image), this.refresh();
  }
}
class se extends Zt {
  constructor() {
    super(...arguments), this.piece = this.object, this.attributes = this.piece.getAttributes(), this.textConfig = this.options.textConfig, this.context = this.options.context, this.piece.attachment ? this.attachment = this.piece.attachment : this.string = this.piece.toString();
  }
  createNodes() {
    let t = this.attachment ? this.createAttachmentNodes() : this.createStringNodes();
    const e = this.createElement();
    if (e) {
      const i = function (t) {
        for (; null !== (e = t) && void 0 !== e && e.firstElementChild;) {
          var e;
          t = t.firstElementChild;
        }
        return t;
      }(e);
      Array.from(t).forEach(t => {
        i.appendChild(t);
      }), t = [e];
    }
    return t;
  }
  createAttachmentNodes() {
    const t = this.attachment.isPreviewable() ? oe : ie;
    return this.createChildView(t, this.piece.attachment, {
      piece: this.piece
    }).getNodes();
  }
  createStringNodes() {
    var t;
    if (null !== (t = this.textConfig) && void 0 !== t && t.plaintext) return [document.createTextNode(this.string)];
    {
      const t = [],
        e = this.string.split("\n");
      for (let i = 0; i < e.length; i++) {
        const n = e[i];
        if (i > 0) {
          const e = C("br");
          t.push(e);
        }
        if (n.length) {
          const e = document.createTextNode(this.preserveSpaces(n));
          t.push(e);
        }
      }
      return t;
    }
  }
  createElement() {
    let t, e, i;
    const n = {};
    for (e in this.attributes) {
      i = this.attributes[e];
      const o = dt(e);
      if (o) {
        if (o.tagName) {
          var r;
          const e = C(o.tagName);
          r ? (r.appendChild(e), r = e) : t = r = e;
        }
        if (o.styleProperty && (n[o.styleProperty] = i), o.style) for (e in o.style) i = o.style[e], n[e] = i;
      }
    }
    if (Object.keys(n).length) for (e in t || (t = C("span")), n) i = n[e], t.style[e] = i;
    return t;
  }
  createContainerElement() {
    for (const t in this.attributes) {
      const e = this.attributes[t],
        i = dt(t);
      if (i && i.groupTagName) {
        const n = {};
        return n[t] = e, C(i.groupTagName, n);
      }
    }
  }
  preserveSpaces(t) {
    return this.context.isLast && (t = t.replace(/\ $/, " ")), t = t.replace(/(\S)\ {3}(\S)/g, "$1 ".concat(" ", " $2")).replace(/\ {2}/g, "".concat(" ", " ")).replace(/\ {2}/g, " ".concat(" ")), (this.context.isFirst || this.context.followsWhitespace) && (t = t.replace(/^\ /, " ")), t;
  }
}
class ae extends Zt {
  constructor() {
    super(...arguments), this.text = this.object, this.textConfig = this.options.textConfig;
  }
  createNodes() {
    const t = [],
      e = Gt.groupObjects(this.getPieces()),
      i = e.length - 1;
    for (let r = 0; r < e.length; r++) {
      const o = e[r],
        s = {};
      0 === r && (s.isFirst = !0), r === i && (s.isLast = !0), le(n) && (s.followsWhitespace = !0);
      const a = this.findOrCreateCachedChildView(se, o, {
        textConfig: this.textConfig,
        context: s
      });
      t.push(...Array.from(a.getNodes() || []));
      var n = o;
    }
    return t;
  }
  getPieces() {
    return Array.from(this.text.getPieces()).filter(t => !t.hasAttribute("blockBreak"));
  }
}
const le = t => /\s$/.test(null == t ? void 0 : t.toString()),
  ce = W.css;
class he extends Zt {
  constructor() {
    super(...arguments), this.block = this.object, this.attributes = this.block.getAttributes();
  }
  createNodes() {
    const t = [document.createComment("block")];
    if (this.block.isEmpty()) t.push(C("br"));else {
      var i;
      const e = null === (i = ht(this.block.getLastAttribute())) || void 0 === i ? void 0 : i.text,
        n = this.findOrCreateCachedChildView(ae, this.block.text, {
          textConfig: e
        });
      t.push(...Array.from(n.getNodes() || [])), this.shouldAddExtraNewlineElement() && t.push(C("br"));
    }
    if (this.attributes.length) return t;
    {
      let i;
      const n = e.default.tagName;
      this.block.isRTL() && (i = {
        dir: "rtl"
      });
      const r = C({
        tagName: n,
        attributes: i
      });
      return t.forEach(t => r.appendChild(t)), [r];
    }
  }
  createContainerElement(t) {
    let e, i;
    const n = this.attributes[t],
      _ht = ht(n),
      r = _ht.tagName;
    if (0 === t && this.block.isRTL() && (e = {
      dir: "rtl"
    }), "attachmentGallery" === n) {
      const t = this.block.getBlockBreakPosition();
      i = "".concat(ce.attachmentGallery, " ").concat(ce.attachmentGallery, "--").concat(t);
    }
    return C({
      tagName: r,
      className: i,
      attributes: e
    });
  }
  shouldAddExtraNewlineElement() {
    return /\n\n$/.test(this.block.toString());
  }
}
class ue extends Zt {
  static render(t) {
    const e = C("div"),
      i = new this(t, {
        element: e
      });
    return i.render(), i.sync(), e;
  }
  constructor() {
    super(...arguments), this.element = this.options.element, this.elementStore = new Xt(), this.setDocument(this.object);
  }
  setDocument(t) {
    t.isEqualTo(this.document) || (this.document = this.object = t);
  }
  render() {
    if (this.childViews = [], this.shadowElement = C("div"), !this.document.isEmpty()) {
      const t = Gt.groupObjects(this.document.getBlocks(), {
        asTree: !0
      });
      Array.from(t).forEach(t => {
        const e = this.findOrCreateCachedChildView(he, t);
        Array.from(e.getNodes()).map(t => this.shadowElement.appendChild(t));
      });
    }
  }
  isSynced() {
    return ge(this.shadowElement, this.element);
  }
  sync() {
    const t = this.createDocumentFragmentForSync();
    for (; this.element.lastChild;) this.element.removeChild(this.element.lastChild);
    return this.element.appendChild(t), this.didSync();
  }
  didSync() {
    return this.elementStore.reset(de(this.element)), yt(() => this.garbageCollectCachedViews());
  }
  createDocumentFragmentForSync() {
    const t = document.createDocumentFragment();
    return Array.from(this.shadowElement.childNodes).forEach(e => {
      t.appendChild(e.cloneNode(!0));
    }), Array.from(de(t)).forEach(t => {
      const e = this.elementStore.remove(t);
      e && t.parentNode.replaceChild(e, t);
    }), t;
  }
}
const de = t => t.querySelectorAll("[data-trix-store-key]"),
  ge = (t, e) => me(t.innerHTML) === me(e.innerHTML),
  me = t => t.replace(/&nbsp;/g, " ");
function pe(t) {
  this.wrapped = t;
}
function fe(t) {
  var e, i;
  function n(e, i) {
    try {
      var o = t[e](i),
        s = o.value,
        a = s instanceof pe;
      Promise.resolve(a ? s.wrapped : s).then(function (t) {
        a ? n("return" === e ? "return" : "next", t) : r(o.done ? "return" : "normal", t);
      }, function (t) {
        n("throw", t);
      });
    } catch (t) {
      r("throw", t);
    }
  }
  function r(t, r) {
    switch (t) {
      case "return":
        e.resolve({
          value: r,
          done: !0
        });
        break;
      case "throw":
        e.reject(r);
        break;
      default:
        e.resolve({
          value: r,
          done: !1
        });
    }
    (e = e.next) ? n(e.key, e.arg) : i = null;
  }
  this._invoke = function (t, r) {
    return new Promise(function (o, s) {
      var a = {
        key: t,
        arg: r,
        resolve: o,
        reject: s,
        next: null
      };
      i ? i = i.next = a : (e = i = a, n(t, r));
    });
  }, "function" != typeof t.return && (this.return = void 0);
}
function be(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = i, t;
}
fe.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function () {
  return this;
}, fe.prototype.next = function (t) {
  return this._invoke("next", t);
}, fe.prototype.throw = function (t) {
  return this._invoke("throw", t);
}, fe.prototype.return = function (t) {
  return this._invoke("return", t);
};
class ve extends tt {
  static registerType(t, e) {
    e.type = t, this.types[t] = e;
  }
  static fromJSON(t) {
    const e = this.types[t.type];
    if (e) return e.fromJSON(t);
  }
  constructor(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(...arguments), this.attributes = Vt.box(e);
  }
  copyWithAttributes(t) {
    return new this.constructor(this.getValue(), t);
  }
  copyWithAdditionalAttributes(t) {
    return this.copyWithAttributes(this.attributes.merge(t));
  }
  copyWithoutAttribute(t) {
    return this.copyWithAttributes(this.attributes.remove(t));
  }
  copy() {
    return this.copyWithAttributes(this.attributes);
  }
  getAttribute(t) {
    return this.attributes.get(t);
  }
  getAttributesHash() {
    return this.attributes;
  }
  getAttributes() {
    return this.attributes.toObject();
  }
  hasAttribute(t) {
    return this.attributes.has(t);
  }
  hasSameStringValueAsPiece(t) {
    return t && this.toString() === t.toString();
  }
  hasSameAttributesAsPiece(t) {
    return t && (this.attributes === t.attributes || this.attributes.isEqualTo(t.attributes));
  }
  isBlockBreak() {
    return !1;
  }
  isEqualTo(t) {
    return super.isEqualTo(...arguments) || this.hasSameConstructorAs(t) && this.hasSameStringValueAsPiece(t) && this.hasSameAttributesAsPiece(t);
  }
  isEmpty() {
    return 0 === this.length;
  }
  isSerializable() {
    return !0;
  }
  toJSON() {
    return {
      type: this.constructor.type,
      attributes: this.getAttributes()
    };
  }
  contentsForInspection() {
    return {
      type: this.constructor.type,
      attributes: this.attributes.inspect()
    };
  }
  canBeGrouped() {
    return this.hasAttribute("href");
  }
  canBeGroupedWith(t) {
    return this.getAttribute("href") === t.getAttribute("href");
  }
  getLength() {
    return this.length;
  }
  canBeConsolidatedWith(t) {
    return !1;
  }
}
be(ve, "types", {});
class Ae extends Qt {
  constructor(t) {
    super(...arguments), this.url = t;
  }
  perform(t) {
    const e = new Image();
    e.onload = () => (e.width = this.width = e.naturalWidth, e.height = this.height = e.naturalHeight, t(!0, e)), e.onerror = () => t(!1), e.src = this.url;
  }
}
class xe extends tt {
  static attachmentForFile(t) {
    const e = new this(this.attributesForFile(t));
    return e.setFile(t), e;
  }
  static attributesForFile(t) {
    return new Vt({
      filename: t.name,
      filesize: t.size,
      contentType: t.type
    });
  }
  static fromJSON(t) {
    return new this(t);
  }
  constructor() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    super(t), this.releaseFile = this.releaseFile.bind(this), this.attributes = Vt.box(t), this.didChangeAttributes();
  }
  getAttribute(t) {
    return this.attributes.get(t);
  }
  hasAttribute(t) {
    return this.attributes.has(t);
  }
  getAttributes() {
    return this.attributes.toObject();
  }
  setAttributes() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const e = this.attributes.merge(t);
    var i, n, r, o;
    if (!this.attributes.isEqualTo(e)) return this.attributes = e, this.didChangeAttributes(), null === (i = this.previewDelegate) || void 0 === i || null === (n = i.attachmentDidChangeAttributes) || void 0 === n || n.call(i, this), null === (r = this.delegate) || void 0 === r || null === (o = r.attachmentDidChangeAttributes) || void 0 === o ? void 0 : o.call(r, this);
  }
  didChangeAttributes() {
    if (this.isPreviewable()) return this.preloadURL();
  }
  isPending() {
    return null != this.file && !(this.getURL() || this.getHref());
  }
  isPreviewable() {
    return this.attributes.has("previewable") ? this.attributes.get("previewable") : xe.previewablePattern.test(this.getContentType());
  }
  getType() {
    return this.hasContent() ? "content" : this.isPreviewable() ? "preview" : "file";
  }
  getURL() {
    return this.attributes.get("url");
  }
  getHref() {
    return this.attributes.get("href");
  }
  getFilename() {
    return this.attributes.get("filename") || "";
  }
  getFilesize() {
    return this.attributes.get("filesize");
  }
  getFormattedFilesize() {
    const t = this.attributes.get("filesize");
    return "number" == typeof t ? l.formatter(t) : "";
  }
  getExtension() {
    var t;
    return null === (t = this.getFilename().match(/\.(\w+)$/)) || void 0 === t ? void 0 : t[1].toLowerCase();
  }
  getContentType() {
    return this.attributes.get("contentType");
  }
  hasContent() {
    return this.attributes.has("content");
  }
  getContent() {
    return this.attributes.get("content");
  }
  getWidth() {
    return this.attributes.get("width");
  }
  getHeight() {
    return this.attributes.get("height");
  }
  getFile() {
    return this.file;
  }
  setFile(t) {
    if (this.file = t, this.isPreviewable()) return this.preloadFile();
  }
  releaseFile() {
    this.releasePreloadedFile(), this.file = null;
  }
  getUploadProgress() {
    return null != this.uploadProgress ? this.uploadProgress : 0;
  }
  setUploadProgress(t) {
    var e, i;
    if (this.uploadProgress !== t) return this.uploadProgress = t, null === (e = this.uploadProgressDelegate) || void 0 === e || null === (i = e.attachmentDidChangeUploadProgress) || void 0 === i ? void 0 : i.call(e, this);
  }
  toJSON() {
    return this.getAttributes();
  }
  getCacheKey() {
    return [super.getCacheKey(...arguments), this.attributes.getCacheKey(), this.getPreviewURL()].join("/");
  }
  getPreviewURL() {
    return this.previewURL || this.preloadingURL;
  }
  setPreviewURL(t) {
    var e, i, n, r;
    if (t !== this.getPreviewURL()) return this.previewURL = t, null === (e = this.previewDelegate) || void 0 === e || null === (i = e.attachmentDidChangeAttributes) || void 0 === i || i.call(e, this), null === (n = this.delegate) || void 0 === n || null === (r = n.attachmentDidChangePreviewURL) || void 0 === r ? void 0 : r.call(n, this);
  }
  preloadURL() {
    return this.preload(this.getURL(), this.releaseFile);
  }
  preloadFile() {
    if (this.file) return this.fileObjectURL = URL.createObjectURL(this.file), this.preload(this.fileObjectURL);
  }
  releasePreloadedFile() {
    this.fileObjectURL && (URL.revokeObjectURL(this.fileObjectURL), this.fileObjectURL = null);
  }
  preload(t, e) {
    if (t && t !== this.getPreviewURL()) {
      this.preloadingURL = t;
      return new Ae(t).then(i => {
        let n = i.width,
          r = i.height;
        return this.getWidth() && this.getHeight() || this.setAttributes({
          width: n,
          height: r
        }), this.preloadingURL = null, this.setPreviewURL(t), null == e ? void 0 : e();
      }).catch(() => (this.preloadingURL = null, null == e ? void 0 : e()));
    }
  }
}
be(xe, "previewablePattern", /^image(\/(gif|png|jpe?g)|$)/);
class ye extends ve {
  static fromJSON(t) {
    return new this(xe.fromJSON(t.attachment), t.attributes);
  }
  constructor(t) {
    super(...arguments), this.attachment = t, this.length = 1, this.ensureAttachmentExclusivelyHasAttribute("href"), this.attachment.hasContent() || this.removeProhibitedAttributes();
  }
  ensureAttachmentExclusivelyHasAttribute(t) {
    this.hasAttribute(t) && (this.attachment.hasAttribute(t) || this.attachment.setAttributes(this.attributes.slice([t])), this.attributes = this.attributes.remove(t));
  }
  removeProhibitedAttributes() {
    const t = this.attributes.slice(ye.permittedAttributes);
    t.isEqualTo(this.attributes) || (this.attributes = t);
  }
  getValue() {
    return this.attachment;
  }
  isSerializable() {
    return !this.attachment.isPending();
  }
  getCaption() {
    return this.attributes.get("caption") || "";
  }
  isEqualTo(t) {
    var e;
    return super.isEqualTo(t) && this.attachment.id === (null == t || null === (e = t.attachment) || void 0 === e ? void 0 : e.id);
  }
  toString() {
    return "￼";
  }
  toJSON() {
    const t = super.toJSON(...arguments);
    return t.attachment = this.attachment, t;
  }
  getCacheKey() {
    return [super.getCacheKey(...arguments), this.attachment.getCacheKey()].join("/");
  }
  toConsole() {
    return JSON.stringify(this.toString());
  }
}
be(ye, "permittedAttributes", ["caption", "presentation"]), ve.registerType("attachment", ye);
class Ce extends ve {
  static fromJSON(t) {
    return new this(t.string, t.attributes);
  }
  constructor(t) {
    super(...arguments), this.string = (t => t.replace(/\r\n/g, "\n"))(t), this.length = this.string.length;
  }
  getValue() {
    return this.string;
  }
  toString() {
    return this.string.toString();
  }
  isBlockBreak() {
    return "\n" === this.toString() && !0 === this.getAttribute("blockBreak");
  }
  toJSON() {
    const t = super.toJSON(...arguments);
    return t.string = this.string, t;
  }
  canBeConsolidatedWith(t) {
    return t && this.hasSameConstructorAs(t) && this.hasSameAttributesAsPiece(t);
  }
  consolidateWith(t) {
    return new this.constructor(this.toString() + t.toString(), this.attributes);
  }
  splitAtOffset(t) {
    let e, i;
    return 0 === t ? (e = null, i = this) : t === this.length ? (e = this, i = null) : (e = new this.constructor(this.string.slice(0, t), this.attributes), i = new this.constructor(this.string.slice(t), this.attributes)), [e, i];
  }
  toConsole() {
    let t = this.string;
    return t.length > 15 && (t = t.slice(0, 14) + "…"), JSON.stringify(t.toString());
  }
}
ve.registerType("string", Ce);
class Re extends tt {
  static box(t) {
    return t instanceof this ? t : new this(t);
  }
  constructor() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    super(...arguments), this.objects = t.slice(0), this.length = this.objects.length;
  }
  indexOf(t) {
    return this.objects.indexOf(t);
  }
  splice() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
    return new this.constructor(it(this.objects, ...e));
  }
  eachObject(t) {
    return this.objects.map((e, i) => t(e, i));
  }
  insertObjectAtIndex(t, e) {
    return this.splice(e, 0, t);
  }
  insertSplittableListAtIndex(t, e) {
    return this.splice(e, 0, ...t.objects);
  }
  insertSplittableListAtPosition(t, e) {
    const _this$splitObjectAtPo = this.splitObjectAtPosition(e),
      _this$splitObjectAtPo2 = _slicedToArray(_this$splitObjectAtPo, 2),
      i = _this$splitObjectAtPo2[0],
      n = _this$splitObjectAtPo2[1];
    return new this.constructor(i).insertSplittableListAtIndex(t, n);
  }
  editObjectAtIndex(t, e) {
    return this.replaceObjectAtIndex(e(this.objects[t]), t);
  }
  replaceObjectAtIndex(t, e) {
    return this.splice(e, 1, t);
  }
  removeObjectAtIndex(t) {
    return this.splice(t, 1);
  }
  getObjectAtIndex(t) {
    return this.objects[t];
  }
  getSplittableListInRange(t) {
    const _this$splitObjectsAtR = this.splitObjectsAtRange(t),
      _this$splitObjectsAtR2 = _slicedToArray(_this$splitObjectsAtR, 3),
      e = _this$splitObjectsAtR2[0],
      i = _this$splitObjectsAtR2[1],
      n = _this$splitObjectsAtR2[2];
    return new this.constructor(e.slice(i, n + 1));
  }
  selectSplittableList(t) {
    const e = this.objects.filter(e => t(e));
    return new this.constructor(e);
  }
  removeObjectsInRange(t) {
    const _this$splitObjectsAtR3 = this.splitObjectsAtRange(t),
      _this$splitObjectsAtR4 = _slicedToArray(_this$splitObjectsAtR3, 3),
      e = _this$splitObjectsAtR4[0],
      i = _this$splitObjectsAtR4[1],
      n = _this$splitObjectsAtR4[2];
    return new this.constructor(e).splice(i, n - i + 1);
  }
  transformObjectsInRange(t, e) {
    const _this$splitObjectsAtR5 = this.splitObjectsAtRange(t),
      _this$splitObjectsAtR6 = _slicedToArray(_this$splitObjectsAtR5, 3),
      i = _this$splitObjectsAtR6[0],
      n = _this$splitObjectsAtR6[1],
      r = _this$splitObjectsAtR6[2],
      o = i.map((t, i) => n <= i && i <= r ? e(t) : t);
    return new this.constructor(o);
  }
  splitObjectsAtRange(t) {
    var _this$constructor$spl, _this$constructor$spl2;
    let e,
      _this$splitObjectAtPo3 = this.splitObjectAtPosition(Se(t)),
      _this$splitObjectAtPo4 = _slicedToArray(_this$splitObjectAtPo3, 3),
      i = _this$splitObjectAtPo4[0],
      n = _this$splitObjectAtPo4[1],
      r = _this$splitObjectAtPo4[2];
    return (_this$constructor$spl = new this.constructor(i).splitObjectAtPosition(ke(t) + r), _this$constructor$spl2 = _slicedToArray(_this$constructor$spl, 2), i = _this$constructor$spl2[0], e = _this$constructor$spl2[1]), [i, n, e - 1];
  }
  getObjectAtPosition(t) {
    const _this$findIndexAndOff = this.findIndexAndOffsetAtPosition(t),
      e = _this$findIndexAndOff.index;
    return this.objects[e];
  }
  splitObjectAtPosition(t) {
    let e, i;
    const _this$findIndexAndOff2 = this.findIndexAndOffsetAtPosition(t),
      n = _this$findIndexAndOff2.index,
      r = _this$findIndexAndOff2.offset,
      o = this.objects.slice(0);
    if (null != n) {
      if (0 === r) e = n, i = 0;else {
        const t = this.getObjectAtIndex(n),
          _t$splitAtOffset = t.splitAtOffset(r),
          _t$splitAtOffset2 = _slicedToArray(_t$splitAtOffset, 2),
          s = _t$splitAtOffset2[0],
          a = _t$splitAtOffset2[1];
        o.splice(n, 1, s, a), e = n + 1, i = s.getLength() - r;
      }
    } else e = o.length, i = 0;
    return [o, e, i];
  }
  consolidate() {
    const t = [];
    let e = this.objects[0];
    return this.objects.slice(1).forEach(i => {
      var n, r;
      null !== (n = (r = e).canBeConsolidatedWith) && void 0 !== n && n.call(r, i) ? e = e.consolidateWith(i) : (t.push(e), e = i);
    }), e && t.push(e), new this.constructor(t);
  }
  consolidateFromIndexToIndex(t, e) {
    const i = this.objects.slice(0).slice(t, e + 1),
      n = new this.constructor(i).consolidate().toArray();
    return this.splice(t, i.length, ...n);
  }
  findIndexAndOffsetAtPosition(t) {
    let e,
      i = 0;
    for (e = 0; e < this.objects.length; e++) {
      const n = i + this.objects[e].getLength();
      if (i <= t && t < n) return {
        index: e,
        offset: t - i
      };
      i = n;
    }
    return {
      index: null,
      offset: null
    };
  }
  findPositionAtIndexAndOffset(t, e) {
    let i = 0;
    for (let n = 0; n < this.objects.length; n++) {
      const r = this.objects[n];
      if (n < t) i += r.getLength();else if (n === t) {
        i += e;
        break;
      }
    }
    return i;
  }
  getEndPosition() {
    return null == this.endPosition && (this.endPosition = 0, this.objects.forEach(t => this.endPosition += t.getLength())), this.endPosition;
  }
  toString() {
    return this.objects.join("");
  }
  toArray() {
    return this.objects.slice(0);
  }
  toJSON() {
    return this.toArray();
  }
  isEqualTo(t) {
    return super.isEqualTo(...arguments) || Ee(this.objects, null == t ? void 0 : t.objects);
  }
  contentsForInspection() {
    return {
      objects: "[".concat(this.objects.map(t => t.inspect()).join(", "), "]")
    };
  }
}
const Ee = function (t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    if (t.length !== e.length) return !1;
    let i = !0;
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      i && !r.isEqualTo(e[n]) && (i = !1);
    }
    return i;
  },
  Se = t => t[0],
  ke = t => t[1];
class Le extends tt {
  static textForAttachmentWithAttributes(t, e) {
    return new this([new ye(t, e)]);
  }
  static textForStringWithAttributes(t, e) {
    return new this([new Ce(t, e)]);
  }
  static fromJSON(t) {
    return new this(Array.from(t).map(t => ve.fromJSON(t)));
  }
  constructor() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    super(...arguments);
    const e = t.filter(t => !t.isEmpty());
    this.pieceList = new Re(e);
  }
  copy() {
    return this.copyWithPieceList(this.pieceList);
  }
  copyWithPieceList(t) {
    return new this.constructor(t.consolidate().toArray());
  }
  copyUsingObjectMap(t) {
    const e = this.getPieces().map(e => t.find(e) || e);
    return new this.constructor(e);
  }
  appendText(t) {
    return this.insertTextAtPosition(t, this.getLength());
  }
  insertTextAtPosition(t, e) {
    return this.copyWithPieceList(this.pieceList.insertSplittableListAtPosition(t.pieceList, e));
  }
  removeTextAtRange(t) {
    return this.copyWithPieceList(this.pieceList.removeObjectsInRange(t));
  }
  replaceTextAtRange(t, e) {
    return this.removeTextAtRange(e).insertTextAtPosition(t, e[0]);
  }
  moveTextFromRangeToPosition(t, e) {
    if (t[0] <= e && e <= t[1]) return;
    const i = this.getTextAtRange(t),
      n = i.getLength();
    return t[0] < e && (e -= n), this.removeTextAtRange(t).insertTextAtPosition(i, e);
  }
  addAttributeAtRange(t, e, i) {
    const n = {};
    return n[t] = e, this.addAttributesAtRange(n, i);
  }
  addAttributesAtRange(t, e) {
    return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e, e => e.copyWithAdditionalAttributes(t)));
  }
  removeAttributeAtRange(t, e) {
    return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e, e => e.copyWithoutAttribute(t)));
  }
  setAttributesAtRange(t, e) {
    return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e, e => e.copyWithAttributes(t)));
  }
  getAttributesAtPosition(t) {
    var e;
    return (null === (e = this.pieceList.getObjectAtPosition(t)) || void 0 === e ? void 0 : e.getAttributes()) || {};
  }
  getCommonAttributes() {
    const t = Array.from(this.pieceList.toArray()).map(t => t.getAttributes());
    return Vt.fromCommonAttributesOfObjects(t).toObject();
  }
  getCommonAttributesAtRange(t) {
    return this.getTextAtRange(t).getCommonAttributes() || {};
  }
  getExpandedRangeForAttributeAtOffset(t, e) {
    let i,
      n = i = e;
    const r = this.getLength();
    for (; n > 0 && this.getCommonAttributesAtRange([n - 1, i])[t];) n--;
    for (; i < r && this.getCommonAttributesAtRange([e, i + 1])[t];) i++;
    return [n, i];
  }
  getTextAtRange(t) {
    return this.copyWithPieceList(this.pieceList.getSplittableListInRange(t));
  }
  getStringAtRange(t) {
    return this.pieceList.getSplittableListInRange(t).toString();
  }
  getStringAtPosition(t) {
    return this.getStringAtRange([t, t + 1]);
  }
  startsWithString(t) {
    return this.getStringAtRange([0, t.length]) === t;
  }
  endsWithString(t) {
    const e = this.getLength();
    return this.getStringAtRange([e - t.length, e]) === t;
  }
  getAttachmentPieces() {
    return this.pieceList.toArray().filter(t => !!t.attachment);
  }
  getAttachments() {
    return this.getAttachmentPieces().map(t => t.attachment);
  }
  getAttachmentAndPositionById(t) {
    let e = 0;
    for (const n of this.pieceList.toArray()) {
      var i;
      if ((null === (i = n.attachment) || void 0 === i ? void 0 : i.id) === t) return {
        attachment: n.attachment,
        position: e
      };
      e += n.length;
    }
    return {
      attachment: null,
      position: null
    };
  }
  getAttachmentById(t) {
    const _this$getAttachmentAn = this.getAttachmentAndPositionById(t),
      e = _this$getAttachmentAn.attachment;
    return e;
  }
  getRangeOfAttachment(t) {
    const e = this.getAttachmentAndPositionById(t.id),
      i = e.position;
    if (t = e.attachment) return [i, i + 1];
  }
  updateAttributesForAttachment(t, e) {
    const i = this.getRangeOfAttachment(e);
    return i ? this.addAttributesAtRange(t, i) : this;
  }
  getLength() {
    return this.pieceList.getEndPosition();
  }
  isEmpty() {
    return 0 === this.getLength();
  }
  isEqualTo(t) {
    var e;
    return super.isEqualTo(t) || (null == t || null === (e = t.pieceList) || void 0 === e ? void 0 : e.isEqualTo(this.pieceList));
  }
  isBlockBreak() {
    return 1 === this.getLength() && this.pieceList.getObjectAtIndex(0).isBlockBreak();
  }
  eachPiece(t) {
    return this.pieceList.eachObject(t);
  }
  getPieces() {
    return this.pieceList.toArray();
  }
  getPieceAtPosition(t) {
    return this.pieceList.getObjectAtPosition(t);
  }
  contentsForInspection() {
    return {
      pieceList: this.pieceList.inspect()
    };
  }
  toSerializableText() {
    const t = this.pieceList.selectSplittableList(t => t.isSerializable());
    return this.copyWithPieceList(t);
  }
  toString() {
    return this.pieceList.toString();
  }
  toJSON() {
    return this.pieceList.toJSON();
  }
  toConsole() {
    return JSON.stringify(this.pieceList.toArray().map(t => JSON.parse(t.toConsole())));
  }
  getDirection() {
    return rt(this.toString());
  }
  isRTL() {
    return "rtl" === this.getDirection();
  }
}
class De extends tt {
  static fromJSON(t) {
    return new this(Le.fromJSON(t.text), t.attributes);
  }
  constructor(t, e) {
    super(...arguments), this.text = we(t || new Le()), this.attributes = e || [];
  }
  isEmpty() {
    return this.text.isBlockBreak();
  }
  isEqualTo(t) {
    return !!super.isEqualTo(t) || this.text.isEqualTo(null == t ? void 0 : t.text) && et(this.attributes, null == t ? void 0 : t.attributes);
  }
  copyWithText(t) {
    return new De(t, this.attributes);
  }
  copyWithoutText() {
    return this.copyWithText(null);
  }
  copyWithAttributes(t) {
    return new De(this.text, t);
  }
  copyWithoutAttributes() {
    return this.copyWithAttributes(null);
  }
  copyUsingObjectMap(t) {
    const e = t.find(this.text);
    return e ? this.copyWithText(e) : this.copyWithText(this.text.copyUsingObjectMap(t));
  }
  addAttribute(t) {
    const e = this.attributes.concat(Ne(t));
    return this.copyWithAttributes(e);
  }
  removeAttribute(t) {
    const _ht2 = ht(t),
      e = _ht2.listAttribute,
      i = Me(Me(this.attributes, t), e);
    return this.copyWithAttributes(i);
  }
  removeLastAttribute() {
    return this.removeAttribute(this.getLastAttribute());
  }
  getLastAttribute() {
    return Oe(this.attributes);
  }
  getAttributes() {
    return this.attributes.slice(0);
  }
  getAttributeLevel() {
    return this.attributes.length;
  }
  getAttributeAtLevel(t) {
    return this.attributes[t - 1];
  }
  hasAttribute(t) {
    return this.attributes.includes(t);
  }
  hasAttributes() {
    return this.getAttributeLevel() > 0;
  }
  getLastNestableAttribute() {
    return Oe(this.getNestableAttributes());
  }
  getNestableAttributes() {
    return this.attributes.filter(t => ht(t).nestable);
  }
  getNestingLevel() {
    return this.getNestableAttributes().length;
  }
  decreaseNestingLevel() {
    const t = this.getLastNestableAttribute();
    return t ? this.removeAttribute(t) : this;
  }
  increaseNestingLevel() {
    const t = this.getLastNestableAttribute();
    if (t) {
      const e = this.attributes.lastIndexOf(t),
        i = it(this.attributes, e + 1, 0, ...Ne(t));
      return this.copyWithAttributes(i);
    }
    return this;
  }
  getListItemAttributes() {
    return this.attributes.filter(t => ht(t).listAttribute);
  }
  isListItem() {
    var t;
    return null === (t = ht(this.getLastAttribute())) || void 0 === t ? void 0 : t.listAttribute;
  }
  isTerminalBlock() {
    var t;
    return null === (t = ht(this.getLastAttribute())) || void 0 === t ? void 0 : t.terminal;
  }
  breaksOnReturn() {
    var t;
    return null === (t = ht(this.getLastAttribute())) || void 0 === t ? void 0 : t.breakOnReturn;
  }
  findLineBreakInDirectionFromPosition(t, e) {
    const i = this.toString();
    let n;
    switch (t) {
      case "forward":
        n = i.indexOf("\n", e);
        break;
      case "backward":
        n = i.slice(0, e).lastIndexOf("\n");
    }
    if (-1 !== n) return n;
  }
  contentsForInspection() {
    return {
      text: this.text.inspect(),
      attributes: this.attributes
    };
  }
  toString() {
    return this.text.toString();
  }
  toJSON() {
    return {
      text: this.text,
      attributes: this.attributes
    };
  }
  getDirection() {
    return this.text.getDirection();
  }
  isRTL() {
    return this.text.isRTL();
  }
  getLength() {
    return this.text.getLength();
  }
  canBeConsolidatedWith(t) {
    return !this.hasAttributes() && !t.hasAttributes() && this.getDirection() === t.getDirection();
  }
  consolidateWith(t) {
    const e = Le.textForStringWithAttributes("\n"),
      i = this.getTextWithoutBlockBreak().appendText(e);
    return this.copyWithText(i.appendText(t.text));
  }
  splitAtOffset(t) {
    let e, i;
    return 0 === t ? (e = null, i = this) : t === this.getLength() ? (e = this, i = null) : (e = this.copyWithText(this.text.getTextAtRange([0, t])), i = this.copyWithText(this.text.getTextAtRange([t, this.getLength()]))), [e, i];
  }
  getBlockBreakPosition() {
    return this.text.getLength() - 1;
  }
  getTextWithoutBlockBreak() {
    return Ie(this.text) ? this.text.getTextAtRange([0, this.getBlockBreakPosition()]) : this.text.copy();
  }
  canBeGrouped(t) {
    return this.attributes[t];
  }
  canBeGroupedWith(t, i) {
    const n = t.getAttributes(),
      r = n[i],
      o = this.attributes[i];
    return o === r && !(!1 === ht(o).group && !(() => {
      if (!lt) {
        lt = [];
        for (const t in e) {
          const i = e[t].listAttribute;
          null != i && lt.push(i);
        }
      }
      return lt;
    })().includes(n[i + 1])) && (this.getDirection() === t.getDirection() || t.isEmpty());
  }
}
const we = function (t) {
    return t = Te(t), t = Be(t);
  },
  Te = function (t) {
    let e = !1;
    const i = t.getPieces();
    let n = i.slice(0, i.length - 1);
    const r = i[i.length - 1];
    return r ? (n = n.map(t => t.isBlockBreak() ? (e = !0, Pe(t)) : t), e ? new Le([...n, r]) : t) : t;
  },
  Fe = Le.textForStringWithAttributes("\n", {
    blockBreak: !0
  }),
  Be = function (t) {
    return Ie(t) ? t : t.appendText(Fe);
  },
  Ie = function (t) {
    const e = t.getLength();
    if (0 === e) return !1;
    return t.getTextAtRange([e - 1, e]).isBlockBreak();
  },
  Pe = t => t.copyWithoutAttribute("blockBreak"),
  Ne = function (t) {
    const _ht3 = ht(t),
      e = _ht3.listAttribute;
    return e ? [e, t] : [t];
  },
  Oe = t => t.slice(-1)[0],
  Me = function (t, e) {
    const i = t.lastIndexOf(e);
    return -1 === i ? t : it(t, i, 1);
  };
class je extends tt {
  static fromJSON(t) {
    return new this(Array.from(t).map(t => De.fromJSON(t)));
  }
  static fromString(t, e) {
    const i = Le.textForStringWithAttributes(t, e);
    return new this([new De(i)]);
  }
  constructor() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    super(...arguments), 0 === t.length && (t = [new De()]), this.blockList = Re.box(t);
  }
  isEmpty() {
    const t = this.getBlockAtIndex(0);
    return 1 === this.blockList.length && t.isEmpty() && !t.hasAttributes();
  }
  copy() {
    const t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).consolidateBlocks ? this.blockList.consolidate().toArray() : this.blockList.toArray();
    return new this.constructor(t);
  }
  copyUsingObjectsFromDocument(t) {
    const e = new $t(t.getObjects());
    return this.copyUsingObjectMap(e);
  }
  copyUsingObjectMap(t) {
    const e = this.getBlocks().map(e => t.find(e) || e.copyUsingObjectMap(t));
    return new this.constructor(e);
  }
  copyWithBaseBlockAttributes() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    const e = this.getBlocks().map(e => {
      const i = t.concat(e.getAttributes());
      return e.copyWithAttributes(i);
    });
    return new this.constructor(e);
  }
  replaceBlock(t, e) {
    const i = this.blockList.indexOf(t);
    return -1 === i ? this : new this.constructor(this.blockList.replaceObjectAtIndex(e, i));
  }
  insertDocumentAtRange(t, e) {
    const i = t.blockList;
    e = Et(e);
    let _e2 = e,
      _e3 = _slicedToArray(_e2, 1),
      n = _e3[0];
    const _this$locationFromPos = this.locationFromPosition(n),
      r = _this$locationFromPos.index,
      o = _this$locationFromPos.offset;
    let s = this;
    const a = this.getBlockAtPosition(n);
    return St(e) && a.isEmpty() && !a.hasAttributes() ? s = new this.constructor(s.blockList.removeObjectAtIndex(r)) : a.getBlockBreakPosition() === o && n++, s = s.removeTextAtRange(e), new this.constructor(s.blockList.insertSplittableListAtPosition(i, n));
  }
  mergeDocumentAtRange(t, e) {
    let i, n;
    e = Et(e);
    const _e4 = e,
      _e5 = _slicedToArray(_e4, 1),
      r = _e5[0],
      o = this.locationFromPosition(r),
      s = this.getBlockAtIndex(o.index).getAttributes(),
      a = t.getBaseBlockAttributes(),
      l = s.slice(-a.length);
    if (et(a, l)) {
      const e = s.slice(0, -a.length);
      i = t.copyWithBaseBlockAttributes(e);
    } else i = t.copy({
      consolidateBlocks: !0
    }).copyWithBaseBlockAttributes(s);
    const c = i.getBlockCount(),
      h = i.getBlockAtIndex(0);
    if (et(s, h.getAttributes())) {
      const t = h.getTextWithoutBlockBreak();
      if (n = this.insertTextAtRange(t, e), c > 1) {
        i = new this.constructor(i.getBlocks().slice(1));
        const e = r + t.getLength();
        n = n.insertDocumentAtRange(i, e);
      }
    } else n = this.insertDocumentAtRange(i, e);
    return n;
  }
  insertTextAtRange(t, e) {
    e = Et(e);
    const _e6 = e,
      _e7 = _slicedToArray(_e6, 1),
      i = _e7[0],
      _this$locationFromPos2 = this.locationFromPosition(i),
      n = _this$locationFromPos2.index,
      r = _this$locationFromPos2.offset,
      o = this.removeTextAtRange(e);
    return new this.constructor(o.blockList.editObjectAtIndex(n, e => e.copyWithText(e.text.insertTextAtPosition(t, r))));
  }
  removeTextAtRange(t) {
    let e;
    t = Et(t);
    const _t2 = t,
      _t3 = _slicedToArray(_t2, 2),
      i = _t3[0],
      n = _t3[1];
    if (St(t)) return this;
    const _Array$from = Array.from(this.locationRangeFromRange(t)),
      _Array$from2 = _slicedToArray(_Array$from, 2),
      r = _Array$from2[0],
      o = _Array$from2[1],
      s = r.index,
      a = r.offset,
      l = this.getBlockAtIndex(s),
      c = o.index,
      h = o.offset,
      u = this.getBlockAtIndex(c);
    if (n - i == 1 && l.getBlockBreakPosition() === a && u.getBlockBreakPosition() !== h && "\n" === u.text.getStringAtPosition(h)) e = this.blockList.editObjectAtIndex(c, t => t.copyWithText(t.text.removeTextAtRange([h, h + 1])));else {
      let t;
      const i = l.text.getTextAtRange([0, a]),
        n = u.text.getTextAtRange([h, u.getLength()]),
        r = i.appendText(n);
      t = s !== c && 0 === a && l.getAttributeLevel() >= u.getAttributeLevel() ? u.copyWithText(r) : l.copyWithText(r);
      const o = c + 1 - s;
      e = this.blockList.splice(s, o, t);
    }
    return new this.constructor(e);
  }
  moveTextFromRangeToPosition(t, e) {
    let i;
    t = Et(t);
    const _t4 = t,
      _t5 = _slicedToArray(_t4, 2),
      n = _t5[0],
      r = _t5[1];
    if (n <= e && e <= r) return this;
    let o = this.getDocumentAtRange(t),
      s = this.removeTextAtRange(t);
    const a = n < e;
    a && (e -= o.getLength());
    const _o$getBlocks = o.getBlocks(),
      _o$getBlocks2 = _toArray(_o$getBlocks),
      l = _o$getBlocks2[0],
      c = _o$getBlocks2.slice(1);
    return 0 === c.length ? (i = l.getTextWithoutBlockBreak(), a && (e += 1)) : i = l.text, s = s.insertTextAtRange(i, e), 0 === c.length ? s : (o = new this.constructor(c), e += i.getLength(), s.insertDocumentAtRange(o, e));
  }
  addAttributeAtRange(t, e, i) {
    let n = this.blockList;
    return this.eachBlockAtRange(i, (i, r, o) => n = n.editObjectAtIndex(o, function () {
      return ht(t) ? i.addAttribute(t, e) : r[0] === r[1] ? i : i.copyWithText(i.text.addAttributeAtRange(t, e, r));
    })), new this.constructor(n);
  }
  addAttribute(t, e) {
    let i = this.blockList;
    return this.eachBlock((n, r) => i = i.editObjectAtIndex(r, () => n.addAttribute(t, e))), new this.constructor(i);
  }
  removeAttributeAtRange(t, e) {
    let i = this.blockList;
    return this.eachBlockAtRange(e, function (e, n, r) {
      ht(t) ? i = i.editObjectAtIndex(r, () => e.removeAttribute(t)) : n[0] !== n[1] && (i = i.editObjectAtIndex(r, () => e.copyWithText(e.text.removeAttributeAtRange(t, n))));
    }), new this.constructor(i);
  }
  updateAttributesForAttachment(t, e) {
    const i = this.getRangeOfAttachment(e),
      _Array$from3 = Array.from(i),
      _Array$from4 = _slicedToArray(_Array$from3, 1),
      n = _Array$from4[0],
      _this$locationFromPos3 = this.locationFromPosition(n),
      r = _this$locationFromPos3.index,
      o = this.getTextAtIndex(r);
    return new this.constructor(this.blockList.editObjectAtIndex(r, i => i.copyWithText(o.updateAttributesForAttachment(t, e))));
  }
  removeAttributeForAttachment(t, e) {
    const i = this.getRangeOfAttachment(e);
    return this.removeAttributeAtRange(t, i);
  }
  insertBlockBreakAtRange(t) {
    let e;
    t = Et(t);
    const _t6 = t,
      _t7 = _slicedToArray(_t6, 1),
      i = _t7[0],
      _this$locationFromPos4 = this.locationFromPosition(i),
      n = _this$locationFromPos4.offset,
      r = this.removeTextAtRange(t);
    return 0 === n && (e = [new De()]), new this.constructor(r.blockList.insertSplittableListAtPosition(new Re(e), i));
  }
  applyBlockAttributeAtRange(t, e, i) {
    const n = this.expandRangeToLineBreaksAndSplitBlocks(i);
    let r = n.document;
    i = n.range;
    const o = ht(t);
    if (o.listAttribute) {
      r = r.removeLastListAttributeAtRange(i, {
        exceptAttributeName: t
      });
      const e = r.convertLineBreaksToBlockBreaksInRange(i);
      r = e.document, i = e.range;
    } else r = o.exclusive ? r.removeBlockAttributesAtRange(i) : o.terminal ? r.removeLastTerminalAttributeAtRange(i) : r.consolidateBlocksAtRange(i);
    return r.addAttributeAtRange(t, e, i);
  }
  removeLastListAttributeAtRange(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      i = this.blockList;
    return this.eachBlockAtRange(t, function (t, n, r) {
      const o = t.getLastAttribute();
      o && ht(o).listAttribute && o !== e.exceptAttributeName && (i = i.editObjectAtIndex(r, () => t.removeAttribute(o)));
    }), new this.constructor(i);
  }
  removeLastTerminalAttributeAtRange(t) {
    let e = this.blockList;
    return this.eachBlockAtRange(t, function (t, i, n) {
      const r = t.getLastAttribute();
      r && ht(r).terminal && (e = e.editObjectAtIndex(n, () => t.removeAttribute(r)));
    }), new this.constructor(e);
  }
  removeBlockAttributesAtRange(t) {
    let e = this.blockList;
    return this.eachBlockAtRange(t, function (t, i, n) {
      t.hasAttributes() && (e = e.editObjectAtIndex(n, () => t.copyWithoutAttributes()));
    }), new this.constructor(e);
  }
  expandRangeToLineBreaksAndSplitBlocks(t) {
    let e;
    t = Et(t);
    let _t8 = t,
      _t9 = _slicedToArray(_t8, 2),
      i = _t9[0],
      n = _t9[1];
    const r = this.locationFromPosition(i),
      o = this.locationFromPosition(n);
    let s = this;
    const a = s.getBlockAtIndex(r.index);
    if (r.offset = a.findLineBreakInDirectionFromPosition("backward", r.offset), null != r.offset && (e = s.positionFromLocation(r), s = s.insertBlockBreakAtRange([e, e + 1]), o.index += 1, o.offset -= s.getBlockAtIndex(r.index).getLength(), r.index += 1), r.offset = 0, 0 === o.offset && o.index > r.index) o.index -= 1, o.offset = s.getBlockAtIndex(o.index).getBlockBreakPosition();else {
      const t = s.getBlockAtIndex(o.index);
      "\n" === t.text.getStringAtRange([o.offset - 1, o.offset]) ? o.offset -= 1 : o.offset = t.findLineBreakInDirectionFromPosition("forward", o.offset), o.offset !== t.getBlockBreakPosition() && (e = s.positionFromLocation(o), s = s.insertBlockBreakAtRange([e, e + 1]));
    }
    return i = s.positionFromLocation(r), n = s.positionFromLocation(o), {
      document: s,
      range: t = Et([i, n])
    };
  }
  convertLineBreaksToBlockBreaksInRange(t) {
    t = Et(t);
    let _t10 = t,
      _t11 = _slicedToArray(_t10, 1),
      e = _t11[0];
    const i = this.getStringAtRange(t).slice(0, -1);
    let n = this;
    return i.replace(/.*?\n/g, function (t) {
      e += t.length, n = n.insertBlockBreakAtRange([e - 1, e]);
    }), {
      document: n,
      range: t
    };
  }
  consolidateBlocksAtRange(t) {
    t = Et(t);
    const _t12 = t,
      _t13 = _slicedToArray(_t12, 2),
      e = _t13[0],
      i = _t13[1],
      n = this.locationFromPosition(e).index,
      r = this.locationFromPosition(i).index;
    return new this.constructor(this.blockList.consolidateFromIndexToIndex(n, r));
  }
  getDocumentAtRange(t) {
    t = Et(t);
    const e = this.blockList.getSplittableListInRange(t).toArray();
    return new this.constructor(e);
  }
  getStringAtRange(t) {
    let e;
    const i = t = Et(t);
    return i[i.length - 1] !== this.getLength() && (e = -1), this.getDocumentAtRange(t).toString().slice(0, e);
  }
  getBlockAtIndex(t) {
    return this.blockList.getObjectAtIndex(t);
  }
  getBlockAtPosition(t) {
    const _this$locationFromPos5 = this.locationFromPosition(t),
      e = _this$locationFromPos5.index;
    return this.getBlockAtIndex(e);
  }
  getTextAtIndex(t) {
    var e;
    return null === (e = this.getBlockAtIndex(t)) || void 0 === e ? void 0 : e.text;
  }
  getTextAtPosition(t) {
    const _this$locationFromPos6 = this.locationFromPosition(t),
      e = _this$locationFromPos6.index;
    return this.getTextAtIndex(e);
  }
  getPieceAtPosition(t) {
    const _this$locationFromPos7 = this.locationFromPosition(t),
      e = _this$locationFromPos7.index,
      i = _this$locationFromPos7.offset;
    return this.getTextAtIndex(e).getPieceAtPosition(i);
  }
  getCharacterAtPosition(t) {
    const _this$locationFromPos8 = this.locationFromPosition(t),
      e = _this$locationFromPos8.index,
      i = _this$locationFromPos8.offset;
    return this.getTextAtIndex(e).getStringAtRange([i, i + 1]);
  }
  getLength() {
    return this.blockList.getEndPosition();
  }
  getBlocks() {
    return this.blockList.toArray();
  }
  getBlockCount() {
    return this.blockList.length;
  }
  getEditCount() {
    return this.editCount;
  }
  eachBlock(t) {
    return this.blockList.eachObject(t);
  }
  eachBlockAtRange(t, e) {
    let i, n;
    t = Et(t);
    const _t14 = t,
      _t15 = _slicedToArray(_t14, 2),
      r = _t15[0],
      o = _t15[1],
      s = this.locationFromPosition(r),
      a = this.locationFromPosition(o);
    if (s.index === a.index) return i = this.getBlockAtIndex(s.index), n = [s.offset, a.offset], e(i, n, s.index);
    for (let t = s.index; t <= a.index; t++) if (i = this.getBlockAtIndex(t), i) {
      switch (t) {
        case s.index:
          n = [s.offset, i.text.getLength()];
          break;
        case a.index:
          n = [0, a.offset];
          break;
        default:
          n = [0, i.text.getLength()];
      }
      e(i, n, t);
    }
  }
  getCommonAttributesAtRange(t) {
    t = Et(t);
    const _t16 = t,
      _t17 = _slicedToArray(_t16, 1),
      e = _t17[0];
    if (St(t)) return this.getCommonAttributesAtPosition(e);
    {
      const e = [],
        i = [];
      return this.eachBlockAtRange(t, function (t, n) {
        if (n[0] !== n[1]) return e.push(t.text.getCommonAttributesAtRange(n)), i.push(We(t));
      }), Vt.fromCommonAttributesOfObjects(e).merge(Vt.fromCommonAttributesOfObjects(i)).toObject();
    }
  }
  getCommonAttributesAtPosition(t) {
    let e, i;
    const _this$locationFromPos9 = this.locationFromPosition(t),
      n = _this$locationFromPos9.index,
      r = _this$locationFromPos9.offset,
      o = this.getBlockAtIndex(n);
    if (!o) return {};
    const s = We(o),
      a = o.text.getAttributesAtPosition(r),
      l = o.text.getAttributesAtPosition(r - 1),
      c = Object.keys(O).filter(t => O[t].inheritable);
    for (e in l) i = l[e], (i === a[e] || c.includes(e)) && (s[e] = i);
    return s;
  }
  getRangeOfCommonAttributeAtPosition(t, e) {
    const _this$locationFromPos10 = this.locationFromPosition(e),
      i = _this$locationFromPos10.index,
      n = _this$locationFromPos10.offset,
      r = this.getTextAtIndex(i),
      _Array$from5 = Array.from(r.getExpandedRangeForAttributeAtOffset(t, n)),
      _Array$from6 = _slicedToArray(_Array$from5, 2),
      o = _Array$from6[0],
      s = _Array$from6[1],
      a = this.positionFromLocation({
        index: i,
        offset: o
      }),
      l = this.positionFromLocation({
        index: i,
        offset: s
      });
    return Et([a, l]);
  }
  getBaseBlockAttributes() {
    let t = this.getBlockAtIndex(0).getAttributes();
    for (let e = 1; e < this.getBlockCount(); e++) {
      const i = this.getBlockAtIndex(e).getAttributes(),
        n = Math.min(t.length, i.length);
      t = (() => {
        const e = [];
        for (let r = 0; r < n && i[r] === t[r]; r++) e.push(i[r]);
        return e;
      })();
    }
    return t;
  }
  getAttachmentById(t) {
    for (const e of this.getAttachments()) if (e.id === t) return e;
  }
  getAttachmentPieces() {
    let t = [];
    return this.blockList.eachObject(e => {
      let i = e.text;
      return t = t.concat(i.getAttachmentPieces());
    }), t;
  }
  getAttachments() {
    return this.getAttachmentPieces().map(t => t.attachment);
  }
  getRangeOfAttachment(t) {
    let e = 0;
    const i = this.blockList.toArray();
    for (let n = 0; n < i.length; n++) {
      const r = i[n].text,
        o = r.getRangeOfAttachment(t);
      if (o) return Et([e + o[0], e + o[1]]);
      e += r.getLength();
    }
  }
  getLocationRangeOfAttachment(t) {
    const e = this.getRangeOfAttachment(t);
    return this.locationRangeFromRange(e);
  }
  getAttachmentPieceForAttachment(t) {
    for (const e of this.getAttachmentPieces()) if (e.attachment === t) return e;
  }
  findRangesForBlockAttribute(t) {
    let e = 0;
    const i = [];
    return this.getBlocks().forEach(n => {
      const r = n.getLength();
      n.hasAttribute(t) && i.push([e, e + r]), e += r;
    }), i;
  }
  findRangesForTextAttribute(t) {
    let _ref9 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      e = _ref9.withValue,
      i = 0,
      n = [];
    const r = [];
    return this.getPieces().forEach(o => {
      const s = o.getLength();
      (function (i) {
        return e ? i.getAttribute(t) === e : i.hasAttribute(t);
      })(o) && (n[1] === i ? n[1] = i + s : r.push(n = [i, i + s])), i += s;
    }), r;
  }
  locationFromPosition(t) {
    const e = this.blockList.findIndexAndOffsetAtPosition(Math.max(0, t));
    if (null != e.index) return e;
    {
      const t = this.getBlocks();
      return {
        index: t.length - 1,
        offset: t[t.length - 1].getLength()
      };
    }
  }
  positionFromLocation(t) {
    return this.blockList.findPositionAtIndexAndOffset(t.index, t.offset);
  }
  locationRangeFromPosition(t) {
    return Et(this.locationFromPosition(t));
  }
  locationRangeFromRange(t) {
    if (!(t = Et(t))) return;
    const _Array$from7 = Array.from(t),
      _Array$from8 = _slicedToArray(_Array$from7, 2),
      e = _Array$from8[0],
      i = _Array$from8[1],
      n = this.locationFromPosition(e),
      r = this.locationFromPosition(i);
    return Et([n, r]);
  }
  rangeFromLocationRange(t) {
    let e;
    t = Et(t);
    const i = this.positionFromLocation(t[0]);
    return St(t) || (e = this.positionFromLocation(t[1])), Et([i, e]);
  }
  isEqualTo(t) {
    return this.blockList.isEqualTo(null == t ? void 0 : t.blockList);
  }
  getTexts() {
    return this.getBlocks().map(t => t.text);
  }
  getPieces() {
    const t = [];
    return Array.from(this.getTexts()).forEach(e => {
      t.push(...Array.from(e.getPieces() || []));
    }), t;
  }
  getObjects() {
    return this.getBlocks().concat(this.getTexts()).concat(this.getPieces());
  }
  toSerializableDocument() {
    const t = [];
    return this.blockList.eachObject(e => t.push(e.copyWithText(e.text.toSerializableText()))), new this.constructor(t);
  }
  toString() {
    return this.blockList.toString();
  }
  toJSON() {
    return this.blockList.toJSON();
  }
  toConsole() {
    return JSON.stringify(this.blockList.toArray()).map(t => JSON.parse(t.text.toConsole()));
  }
}
const We = function (t) {
    const e = {},
      i = t.getLastAttribute();
    return i && (e[i] = !0), e;
  },
  Ue = "style href src width height class".split(" "),
  qe = "javascript:".split(" "),
  Ve = "script iframe".split(" ");
class ze extends U {
  static sanitize(t, e) {
    const i = new this(t, e);
    return i.sanitize(), i;
  }
  constructor(t) {
    let _ref10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      e = _ref10.allowedAttributes,
      i = _ref10.forbiddenProtocols,
      n = _ref10.forbiddenElements;
    super(...arguments), this.allowedAttributes = e || Ue, this.forbiddenProtocols = i || qe, this.forbiddenElements = n || Ve, this.body = _e(t);
  }
  sanitize() {
    return this.sanitizeElements(), this.normalizeListElementNesting();
  }
  getHTML() {
    return this.body.innerHTML;
  }
  getBody() {
    return this.body;
  }
  sanitizeElements() {
    const t = x(this.body),
      e = [];
    for (; t.nextNode();) {
      const i = t.currentNode;
      switch (i.nodeType) {
        case Node.ELEMENT_NODE:
          this.elementIsRemovable(i) ? e.push(i) : this.sanitizeElement(i);
          break;
        case Node.COMMENT_NODE:
          e.push(i);
      }
    }
    return e.forEach(t => A(t)), this.body;
  }
  sanitizeElement(t) {
    return t.hasAttribute("href") && this.forbiddenProtocols.includes(t.protocol) && t.removeAttribute("href"), Array.from(t.attributes).forEach(e => {
      let i = e.name;
      this.allowedAttributes.includes(i) || 0 === i.indexOf("data-trix") || t.removeAttribute(i);
    }), t;
  }
  normalizeListElementNesting() {
    return Array.from(this.body.querySelectorAll("ul,ol")).forEach(t => {
      const e = t.previousElementSibling;
      e && "li" === y(e) && e.appendChild(t);
    }), this.body;
  }
  elementIsRemovable(t) {
    if ((null == t ? void 0 : t.nodeType) === Node.ELEMENT_NODE) return this.elementIsForbidden(t) || this.elementIsntSerializable(t);
  }
  elementIsForbidden(t) {
    return this.forbiddenElements.includes(y(t));
  }
  elementIsntSerializable(t) {
    return "false" === t.getAttribute("data-trix-serialize") && !F(t);
  }
}
const _e = function () {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    t = t.replace(/<\/html[^>]*>[^]*$/i, "</html>");
    const e = document.implementation.createHTMLDocument("");
    return e.documentElement.innerHTML = t, Array.from(e.head.querySelectorAll("style")).forEach(t => {
      e.body.appendChild(t);
    }), e.body;
  },
  He = function (t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const i = "string";
    return {
      string: t = Mt(t),
      attributes: e,
      type: i
    };
  },
  Je = (t, e) => {
    try {
      return JSON.parse(t.getAttribute("data-trix-".concat(e)));
    } catch (t) {
      return {};
    }
  };
class Ke extends U {
  static parse(t, e) {
    const i = new this(t, e);
    return i.parse(), i;
  }
  constructor(t) {
    let _ref11 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      e = _ref11.referenceElement;
    super(...arguments), this.html = t, this.referenceElement = e, this.blocks = [], this.blockElements = [], this.processedElements = [];
  }
  getDocument() {
    return je.fromJSON(this.blocks);
  }
  parse() {
    try {
      this.createHiddenContainer();
      const t = ze.sanitize(this.html).getHTML();
      this.containerElement.innerHTML = t;
      const e = x(this.containerElement, {
        usingFilter: Ye
      });
      for (; e.nextNode();) this.processNode(e.currentNode);
      return this.translateBlockElementMarginsToNewlines();
    } finally {
      this.removeHiddenContainer();
    }
  }
  createHiddenContainer() {
    return this.referenceElement ? (this.containerElement = this.referenceElement.cloneNode(!1), this.containerElement.removeAttribute("id"), this.containerElement.setAttribute("data-trix-internal", ""), this.containerElement.style.display = "none", this.referenceElement.parentNode.insertBefore(this.containerElement, this.referenceElement.nextSibling)) : (this.containerElement = C({
      tagName: "div",
      style: {
        display: "none"
      }
    }), document.body.appendChild(this.containerElement));
  }
  removeHiddenContainer() {
    return A(this.containerElement);
  }
  processNode(t) {
    switch (t.nodeType) {
      case Node.TEXT_NODE:
        if (!this.isInsignificantTextNode(t)) return this.appendBlockForTextNode(t), this.processTextNode(t);
        break;
      case Node.ELEMENT_NODE:
        return this.appendBlockForElement(t), this.processElement(t);
    }
  }
  appendBlockForTextNode(t) {
    const e = t.parentNode;
    if (e === this.currentBlockElement && this.isBlockElement(t.previousSibling)) return this.appendStringWithAttributes("\n");
    if (e === this.containerElement || this.isBlockElement(e)) {
      var i;
      const t = this.getBlockAttributes(e);
      et(t, null === (i = this.currentBlock) || void 0 === i ? void 0 : i.attributes) || (this.currentBlock = this.appendBlockForAttributesWithElement(t, e), this.currentBlockElement = e);
    }
  }
  appendBlockForElement(t) {
    const e = this.isBlockElement(t),
      i = b(this.currentBlockElement, t);
    if (e && !this.isBlockElement(t.firstChild)) {
      if (!this.isInsignificantTextNode(t.firstChild) || !this.isBlockElement(t.firstElementChild)) {
        const e = this.getBlockAttributes(t);
        if (t.firstChild) {
          if (i && et(e, this.currentBlock.attributes)) return this.appendStringWithAttributes("\n");
          this.currentBlock = this.appendBlockForAttributesWithElement(e, t), this.currentBlockElement = t;
        }
      }
    } else if (this.currentBlockElement && !i && !e) {
      const e = this.findParentBlockElement(t);
      if (e) return this.appendBlockForElement(e);
      this.currentBlock = this.appendEmptyBlock(), this.currentBlockElement = null;
    }
  }
  findParentBlockElement(t) {
    let e = t.parentElement;
    for (; e && e !== this.containerElement;) {
      if (this.isBlockElement(e) && this.blockElements.includes(e)) return e;
      e = e.parentElement;
    }
    return null;
  }
  processTextNode(t) {
    let e = t.data;
    var i;
    Ge(t.parentNode) || (e = Wt(e), ti(null === (i = t.previousSibling) || void 0 === i ? void 0 : i.textContent) && (e = Qe(e)));
    return this.appendStringWithAttributes(e, this.getTextAttributes(t.parentNode));
  }
  processElement(t) {
    let e;
    if (F(t)) {
      if (e = Je(t, "attachment"), Object.keys(e).length) {
        const i = this.getTextAttributes(t);
        this.appendAttachmentWithAttributes(e, i), t.innerHTML = "";
      }
      return this.processedElements.push(t);
    }
    switch (y(t)) {
      case "br":
        return this.isExtraBR(t) || this.isBlockElement(t.nextSibling) || this.appendStringWithAttributes("\n", this.getTextAttributes(t)), this.processedElements.push(t);
      case "img":
        e = {
          url: t.getAttribute("src"),
          contentType: "image"
        };
        const i = (t => {
          const e = t.getAttribute("width"),
            i = t.getAttribute("height"),
            n = {};
          return e && (n.width = parseInt(e, 10)), i && (n.height = parseInt(i, 10)), n;
        })(t);
        for (const t in i) {
          const n = i[t];
          e[t] = n;
        }
        return this.appendAttachmentWithAttributes(e, this.getTextAttributes(t)), this.processedElements.push(t);
      case "tr":
        if (this.needsTableSeparator(t)) return this.appendStringWithAttributes(N.tableRowSeparator);
        break;
      case "td":
        if (this.needsTableSeparator(t)) return this.appendStringWithAttributes(N.tableCellSeparator);
    }
  }
  appendBlockForAttributesWithElement(t, e) {
    this.blockElements.push(e);
    const i = function () {
      return {
        text: [],
        attributes: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
      };
    }(t);
    return this.blocks.push(i), i;
  }
  appendEmptyBlock() {
    return this.appendBlockForAttributesWithElement([], null);
  }
  appendStringWithAttributes(t, e) {
    return this.appendPiece(He(t, e));
  }
  appendAttachmentWithAttributes(t, e) {
    return this.appendPiece(function (t) {
      return {
        attachment: t,
        attributes: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        type: "attachment"
      };
    }(t, e));
  }
  appendPiece(t) {
    return 0 === this.blocks.length && this.appendEmptyBlock(), this.blocks[this.blocks.length - 1].text.push(t);
  }
  appendStringToTextAtIndex(t, e) {
    const i = this.blocks[e].text,
      n = i[i.length - 1];
    if ("string" !== (null == n ? void 0 : n.type)) return i.push(He(t));
    n.string += t;
  }
  prependStringToTextAtIndex(t, e) {
    const i = this.blocks[e].text,
      n = i[0];
    if ("string" !== (null == n ? void 0 : n.type)) return i.unshift(He(t));
    n.string = t + n.string;
  }
  getTextAttributes(t) {
    let e;
    const i = {};
    for (const n in O) {
      const r = O[n];
      if (r.tagName && p(t, {
        matchingSelector: r.tagName,
        untilNode: this.containerElement
      })) i[n] = !0;else if (r.parser) {
        if (e = r.parser(t), e) {
          let o = !1;
          for (const i of this.findBlockElementAncestors(t)) if (r.parser(i) === e) {
            o = !0;
            break;
          }
          o || (i[n] = e);
        }
      } else r.styleProperty && (e = t.style[r.styleProperty], e && (i[n] = e));
    }
    if (F(t)) {
      const n = Je(t, "attributes");
      for (const t in n) e = n[t], i[t] = e;
    }
    return i;
  }
  getBlockAttributes(t) {
    const i = [];
    for (; t && t !== this.containerElement;) {
      for (const r in e) {
        const o = e[r];
        var n;
        if (!1 !== o.parse) if (y(t) === o.tagName) (null !== (n = o.test) && void 0 !== n && n.call(o, t) || !o.test) && (i.push(r), o.listAttribute && i.push(o.listAttribute));
      }
      t = t.parentNode;
    }
    return i.reverse();
  }
  findBlockElementAncestors(t) {
    const e = [];
    for (; t && t !== this.containerElement;) {
      const i = y(t);
      E().includes(i) && e.push(t), t = t.parentNode;
    }
    return e;
  }
  isBlockElement(t) {
    if ((null == t ? void 0 : t.nodeType) === Node.ELEMENT_NODE && !F(t) && !p(t, {
      matchingSelector: "td",
      untilNode: this.containerElement
    })) return E().includes(y(t)) || "block" === window.getComputedStyle(t).display;
  }
  isInsignificantTextNode(t) {
    if ((null == t ? void 0 : t.nodeType) !== Node.TEXT_NODE) return;
    if (!Ze(t.data)) return;
    const e = t.parentNode,
      i = t.previousSibling,
      n = t.nextSibling;
    return $e(e.previousSibling) && !this.isBlockElement(e.previousSibling) || Ge(e) ? void 0 : !i || this.isBlockElement(i) || !n || this.isBlockElement(n);
  }
  isExtraBR(t) {
    return "br" === y(t) && this.isBlockElement(t.parentNode) && t.parentNode.lastChild === t;
  }
  needsTableSeparator(t) {
    if (N.removeBlankTableCells) {
      var e;
      const i = null === (e = t.previousSibling) || void 0 === e ? void 0 : e.textContent;
      return i && /\S/.test(i);
    }
    return t.previousSibling;
  }
  translateBlockElementMarginsToNewlines() {
    const t = this.getMarginOfDefaultBlockElement();
    for (let e = 0; e < this.blocks.length; e++) {
      const i = this.getMarginOfBlockElementAtIndex(e);
      i && (i.top > 2 * t.top && this.prependStringToTextAtIndex("\n", e), i.bottom > 2 * t.bottom && this.appendStringToTextAtIndex("\n", e));
    }
  }
  getMarginOfBlockElementAtIndex(t) {
    const e = this.blockElements[t];
    if (e && e.textContent && !E().includes(y(e)) && !this.processedElements.includes(e)) return Xe(e);
  }
  getMarginOfDefaultBlockElement() {
    const t = C(e.default.tagName);
    return this.containerElement.appendChild(t), Xe(t);
  }
}
const Ge = function (t) {
    const _window$getComputedSt = window.getComputedStyle(t),
      e = _window$getComputedSt.whiteSpace;
    return ["pre", "pre-wrap", "pre-line"].includes(e);
  },
  $e = t => t && !ti(t.textContent),
  Xe = function (t) {
    const e = window.getComputedStyle(t);
    if ("block" === e.display) return {
      top: parseInt(e.marginTop),
      bottom: parseInt(e.marginBottom)
    };
  },
  Ye = function (t) {
    return "style" === y(t) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
  },
  Qe = t => t.replace(new RegExp("^".concat(jt.source, "+")), ""),
  Ze = t => new RegExp("^".concat(jt.source, "*$")).test(t),
  ti = t => /\s$/.test(t),
  ei = ["contenteditable", "data-trix-id", "data-trix-store-key", "data-trix-mutable", "data-trix-placeholder", "tabindex"],
  ii = "[".concat("data-trix-serialized-attributes", "]"),
  ni = new RegExp("\x3c!--block--\x3e", "g"),
  ri = {
    "application/json": function (t) {
      let e;
      if (t instanceof je) e = t;else {
        if (!(t instanceof HTMLElement)) throw new Error("unserializable object");
        e = Ke.parse(t.innerHTML).getDocument();
      }
      return e.toSerializableDocument().toJSONString();
    },
    "text/html": function (t) {
      let e;
      if (t instanceof je) e = ue.render(t);else {
        if (!(t instanceof HTMLElement)) throw new Error("unserializable object");
        e = t.cloneNode(!0);
      }
      return Array.from(e.querySelectorAll("[data-trix-serialize=false]")).forEach(t => {
        A(t);
      }), ei.forEach(t => {
        Array.from(e.querySelectorAll("[".concat(t, "]"))).forEach(e => {
          e.removeAttribute(t);
        });
      }), Array.from(e.querySelectorAll(ii)).forEach(t => {
        try {
          const e = JSON.parse(t.getAttribute("data-trix-serialized-attributes"));
          t.removeAttribute("data-trix-serialized-attributes");
          for (const i in e) {
            const n = e[i];
            t.setAttribute(i, n);
          }
        } catch (t) {}
      }), e.innerHTML.replace(ni, "");
    }
  };
var oi = Object.freeze({
  __proto__: null
});
class si extends U {
  constructor(t, e) {
    super(...arguments), this.attachmentManager = t, this.attachment = e, this.id = this.attachment.id, this.file = this.attachment.file;
  }
  remove() {
    return this.attachmentManager.requestRemovalOfAttachment(this.attachment);
  }
}
si.proxyMethod("attachment.getAttribute"), si.proxyMethod("attachment.hasAttribute"), si.proxyMethod("attachment.setAttribute"), si.proxyMethod("attachment.getAttributes"), si.proxyMethod("attachment.setAttributes"), si.proxyMethod("attachment.isPending"), si.proxyMethod("attachment.isPreviewable"), si.proxyMethod("attachment.getURL"), si.proxyMethod("attachment.getHref"), si.proxyMethod("attachment.getFilename"), si.proxyMethod("attachment.getFilesize"), si.proxyMethod("attachment.getFormattedFilesize"), si.proxyMethod("attachment.getExtension"), si.proxyMethod("attachment.getContentType"), si.proxyMethod("attachment.getFile"), si.proxyMethod("attachment.setFile"), si.proxyMethod("attachment.releaseFile"), si.proxyMethod("attachment.getUploadProgress"), si.proxyMethod("attachment.setUploadProgress");
class ai extends U {
  constructor() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    super(...arguments), this.managedAttachments = {}, Array.from(t).forEach(t => {
      this.manageAttachment(t);
    });
  }
  getAttachments() {
    const t = [];
    for (const e in this.managedAttachments) {
      const i = this.managedAttachments[e];
      t.push(i);
    }
    return t;
  }
  manageAttachment(t) {
    return this.managedAttachments[t.id] || (this.managedAttachments[t.id] = new si(this, t)), this.managedAttachments[t.id];
  }
  attachmentIsManaged(t) {
    return t.id in this.managedAttachments;
  }
  requestRemovalOfAttachment(t) {
    var e, i;
    if (this.attachmentIsManaged(t)) return null === (e = this.delegate) || void 0 === e || null === (i = e.attachmentManagerDidRequestRemovalOfAttachment) || void 0 === i ? void 0 : i.call(e, t);
  }
  unmanageAttachment(t) {
    const e = this.managedAttachments[t.id];
    return delete this.managedAttachments[t.id], e;
  }
}
class li {
  constructor(t) {
    this.composition = t, this.document = this.composition.document;
    const e = this.composition.getSelectedRange();
    this.startPosition = e[0], this.endPosition = e[1], this.startLocation = this.document.locationFromPosition(this.startPosition), this.endLocation = this.document.locationFromPosition(this.endPosition), this.block = this.document.getBlockAtIndex(this.endLocation.index), this.breaksOnReturn = this.block.breaksOnReturn(), this.previousCharacter = this.block.text.getStringAtPosition(this.endLocation.offset - 1), this.nextCharacter = this.block.text.getStringAtPosition(this.endLocation.offset);
  }
  shouldInsertBlockBreak() {
    return this.block.hasAttributes() && this.block.isListItem() && !this.block.isEmpty() ? 0 !== this.startLocation.offset : this.breaksOnReturn && "\n" !== this.nextCharacter;
  }
  shouldBreakFormattedBlock() {
    return this.block.hasAttributes() && !this.block.isListItem() && (this.breaksOnReturn && "\n" === this.nextCharacter || "\n" === this.previousCharacter);
  }
  shouldDecreaseListLevel() {
    return this.block.hasAttributes() && this.block.isListItem() && this.block.isEmpty();
  }
  shouldPrependListItem() {
    return this.block.isListItem() && 0 === this.startLocation.offset && !this.block.isEmpty();
  }
  shouldRemoveLastBlockAttribute() {
    return this.block.hasAttributes() && !this.block.isListItem() && this.block.isEmpty();
  }
}
class ci extends U {
  constructor() {
    super(...arguments), this.document = new je(), this.attachments = [], this.currentAttributes = {}, this.revision = 0;
  }
  setDocument(t) {
    var e, i;
    if (!t.isEqualTo(this.document)) return this.document = t, this.refreshAttachments(), this.revision++, null === (e = this.delegate) || void 0 === e || null === (i = e.compositionDidChangeDocument) || void 0 === i ? void 0 : i.call(e, t);
  }
  getSnapshot() {
    return {
      document: this.document,
      selectedRange: this.getSelectedRange()
    };
  }
  loadSnapshot(t) {
    var e, i, n, r;
    let o = t.document,
      s = t.selectedRange;
    return null === (e = this.delegate) || void 0 === e || null === (i = e.compositionWillLoadSnapshot) || void 0 === i || i.call(e), this.setDocument(null != o ? o : new je()), this.setSelection(null != s ? s : [0, 0]), null === (n = this.delegate) || void 0 === n || null === (r = n.compositionDidLoadSnapshot) || void 0 === r ? void 0 : r.call(n);
  }
  insertText(t) {
    let _ref12 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        updatePosition: !0
      },
      e = _ref12.updatePosition;
    const i = this.getSelectedRange();
    this.setDocument(this.document.insertTextAtRange(t, i));
    const n = i[0],
      r = n + t.getLength();
    return e && this.setSelection(r), this.notifyDelegateOfInsertionAtRange([n, r]);
  }
  insertBlock() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new De();
    const e = new je([t]);
    return this.insertDocument(e);
  }
  insertDocument() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new je();
    const e = this.getSelectedRange();
    this.setDocument(this.document.insertDocumentAtRange(t, e));
    const i = e[0],
      n = i + t.getLength();
    return this.setSelection(n), this.notifyDelegateOfInsertionAtRange([i, n]);
  }
  insertString(t, e) {
    const i = this.getCurrentTextAttributes(),
      n = Le.textForStringWithAttributes(t, i);
    return this.insertText(n, e);
  }
  insertBlockBreak() {
    const t = this.getSelectedRange();
    this.setDocument(this.document.insertBlockBreakAtRange(t));
    const e = t[0],
      i = e + 1;
    return this.setSelection(i), this.notifyDelegateOfInsertionAtRange([e, i]);
  }
  insertLineBreak() {
    const t = new li(this);
    if (t.shouldDecreaseListLevel()) return this.decreaseListLevel(), this.setSelection(t.startPosition);
    if (t.shouldPrependListItem()) {
      const e = new je([t.block.copyWithoutText()]);
      return this.insertDocument(e);
    }
    return t.shouldInsertBlockBreak() ? this.insertBlockBreak() : t.shouldRemoveLastBlockAttribute() ? this.removeLastBlockAttribute() : t.shouldBreakFormattedBlock() ? this.breakFormattedBlock(t) : this.insertString("\n");
  }
  insertHTML(t) {
    const e = Ke.parse(t).getDocument(),
      i = this.getSelectedRange();
    this.setDocument(this.document.mergeDocumentAtRange(e, i));
    const n = i[0],
      r = n + e.getLength() - 1;
    return this.setSelection(r), this.notifyDelegateOfInsertionAtRange([n, r]);
  }
  replaceHTML(t) {
    const e = Ke.parse(t).getDocument().copyUsingObjectsFromDocument(this.document),
      i = this.getLocationRange({
        strict: !1
      }),
      n = this.document.rangeFromLocationRange(i);
    return this.setDocument(e), this.setSelection(n);
  }
  insertFile(t) {
    return this.insertFiles([t]);
  }
  insertFiles(t) {
    const e = [];
    return Array.from(t).forEach(t => {
      var i;
      if (null !== (i = this.delegate) && void 0 !== i && i.compositionShouldAcceptFile(t)) {
        const i = xe.attachmentForFile(t);
        e.push(i);
      }
    }), this.insertAttachments(e);
  }
  insertAttachment(t) {
    return this.insertAttachments([t]);
  }
  insertAttachments(e) {
    let i = new Le();
    return Array.from(e).forEach(e => {
      var n;
      const r = e.getType(),
        o = null === (n = t[r]) || void 0 === n ? void 0 : n.presentation,
        s = this.getCurrentTextAttributes();
      o && (s.presentation = o);
      const a = Le.textForAttachmentWithAttributes(e, s);
      i = i.appendText(a);
    }), this.insertText(i);
  }
  shouldManageDeletingInDirection(t) {
    const e = this.getLocationRange();
    if (St(e)) {
      if ("backward" === t && 0 === e[0].offset) return !0;
      if (this.shouldManageMovingCursorInDirection(t)) return !0;
    } else if (e[0].index !== e[1].index) return !0;
    return !1;
  }
  deleteInDirection(t) {
    let e,
      i,
      n,
      _ref13 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      r = _ref13.length;
    const o = this.getLocationRange();
    let s = this.getSelectedRange();
    const a = St(s);
    if (a ? i = "backward" === t && 0 === o[0].offset : n = o[0].index !== o[1].index, i && this.canDecreaseBlockAttributeLevel()) {
      const t = this.getBlock();
      if (t.isListItem() ? this.decreaseListLevel() : this.decreaseBlockAttributeLevel(), this.setSelection(s[0]), t.isEmpty()) return !1;
    }
    return a && (s = this.getExpandedRangeInDirection(t, {
      length: r
    }), "backward" === t && (e = this.getAttachmentAtRange(s))), e ? (this.editAttachment(e), !1) : (this.setDocument(this.document.removeTextAtRange(s)), this.setSelection(s[0]), !i && !n && void 0);
  }
  moveTextFromRange(t) {
    const _Array$from9 = Array.from(this.getSelectedRange()),
      _Array$from10 = _slicedToArray(_Array$from9, 1),
      e = _Array$from10[0];
    return this.setDocument(this.document.moveTextFromRangeToPosition(t, e)), this.setSelection(e);
  }
  removeAttachment(t) {
    const e = this.document.getRangeOfAttachment(t);
    if (e) return this.stopEditingAttachment(), this.setDocument(this.document.removeTextAtRange(e)), this.setSelection(e[0]);
  }
  removeLastBlockAttribute() {
    const _Array$from11 = Array.from(this.getSelectedRange()),
      _Array$from12 = _slicedToArray(_Array$from11, 2),
      t = _Array$from12[0],
      e = _Array$from12[1],
      i = this.document.getBlockAtPosition(e);
    return this.removeCurrentAttribute(i.getLastAttribute()), this.setSelection(t);
  }
  insertPlaceholder() {
    return this.placeholderPosition = this.getPosition(), this.insertString(" ");
  }
  selectPlaceholder() {
    if (null != this.placeholderPosition) return this.setSelectedRange([this.placeholderPosition, this.placeholderPosition + " ".length]), this.getSelectedRange();
  }
  forgetPlaceholder() {
    this.placeholderPosition = null;
  }
  hasCurrentAttribute(t) {
    const e = this.currentAttributes[t];
    return null != e && !1 !== e;
  }
  toggleCurrentAttribute(t) {
    const e = !this.currentAttributes[t];
    return e ? this.setCurrentAttribute(t, e) : this.removeCurrentAttribute(t);
  }
  canSetCurrentAttribute(t) {
    return ht(t) ? this.canSetCurrentBlockAttribute(t) : this.canSetCurrentTextAttribute(t);
  }
  canSetCurrentTextAttribute(t) {
    const e = this.getSelectedDocument();
    if (e) {
      for (const t of Array.from(e.getAttachments())) if (!t.hasContent()) return !1;
      return !0;
    }
  }
  canSetCurrentBlockAttribute(t) {
    const e = this.getBlock();
    if (e) return !e.isTerminalBlock();
  }
  setCurrentAttribute(t, e) {
    return ht(t) ? this.setBlockAttribute(t, e) : (this.setTextAttribute(t, e), this.currentAttributes[t] = e, this.notifyDelegateOfCurrentAttributesChange());
  }
  setTextAttribute(t, e) {
    const i = this.getSelectedRange();
    if (!i) return;
    const _Array$from13 = Array.from(i),
      _Array$from14 = _slicedToArray(_Array$from13, 2),
      n = _Array$from14[0],
      r = _Array$from14[1];
    if (n !== r) return this.setDocument(this.document.addAttributeAtRange(t, e, i));
    if ("href" === t) {
      const t = Le.textForStringWithAttributes(e, {
        href: e
      });
      return this.insertText(t);
    }
  }
  setBlockAttribute(t, e) {
    const i = this.getSelectedRange();
    if (this.canSetCurrentAttribute(t)) return this.setDocument(this.document.applyBlockAttributeAtRange(t, e, i)), this.setSelection(i);
  }
  removeCurrentAttribute(t) {
    return ht(t) ? (this.removeBlockAttribute(t), this.updateCurrentAttributes()) : (this.removeTextAttribute(t), delete this.currentAttributes[t], this.notifyDelegateOfCurrentAttributesChange());
  }
  removeTextAttribute(t) {
    const e = this.getSelectedRange();
    if (e) return this.setDocument(this.document.removeAttributeAtRange(t, e));
  }
  removeBlockAttribute(t) {
    const e = this.getSelectedRange();
    if (e) return this.setDocument(this.document.removeAttributeAtRange(t, e));
  }
  canDecreaseNestingLevel() {
    var t;
    return (null === (t = this.getBlock()) || void 0 === t ? void 0 : t.getNestingLevel()) > 0;
  }
  canIncreaseNestingLevel() {
    var t;
    const e = this.getBlock();
    if (e) {
      if (null === (t = ht(e.getLastNestableAttribute())) || void 0 === t || !t.listAttribute) return e.getNestingLevel() > 0;
      {
        const t = this.getPreviousBlock();
        if (t) return function () {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          return et((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).slice(0, t.length), t);
        }(t.getListItemAttributes(), e.getListItemAttributes());
      }
    }
  }
  decreaseNestingLevel() {
    const t = this.getBlock();
    if (t) return this.setDocument(this.document.replaceBlock(t, t.decreaseNestingLevel()));
  }
  increaseNestingLevel() {
    const t = this.getBlock();
    if (t) return this.setDocument(this.document.replaceBlock(t, t.increaseNestingLevel()));
  }
  canDecreaseBlockAttributeLevel() {
    var t;
    return (null === (t = this.getBlock()) || void 0 === t ? void 0 : t.getAttributeLevel()) > 0;
  }
  decreaseBlockAttributeLevel() {
    var t;
    const e = null === (t = this.getBlock()) || void 0 === t ? void 0 : t.getLastAttribute();
    if (e) return this.removeCurrentAttribute(e);
  }
  decreaseListLevel() {
    let _Array$from15 = Array.from(this.getSelectedRange()),
      _Array$from16 = _slicedToArray(_Array$from15, 1),
      t = _Array$from16[0];
    const _this$document$locati = this.document.locationFromPosition(t),
      e = _this$document$locati.index;
    let i = e;
    const n = this.getBlock().getAttributeLevel();
    let r = this.document.getBlockAtIndex(i + 1);
    for (; r && r.isListItem() && !(r.getAttributeLevel() <= n);) i++, r = this.document.getBlockAtIndex(i + 1);
    t = this.document.positionFromLocation({
      index: e,
      offset: 0
    });
    const o = this.document.positionFromLocation({
      index: i,
      offset: 0
    });
    return this.setDocument(this.document.removeLastListAttributeAtRange([t, o]));
  }
  updateCurrentAttributes() {
    const t = this.getSelectedRange({
      ignoreLock: !0
    });
    if (t) {
      const e = this.document.getCommonAttributesAtRange(t);
      if (Array.from(ct()).forEach(t => {
        e[t] || this.canSetCurrentAttribute(t) || (e[t] = !1);
      }), !Rt(e, this.currentAttributes)) return this.currentAttributes = e, this.notifyDelegateOfCurrentAttributesChange();
    }
  }
  getCurrentAttributes() {
    return c.call({}, this.currentAttributes);
  }
  getCurrentTextAttributes() {
    const t = {};
    for (const e in this.currentAttributes) {
      const i = this.currentAttributes[e];
      !1 !== i && dt(e) && (t[e] = i);
    }
    return t;
  }
  freezeSelection() {
    return this.setCurrentAttribute("frozen", !0);
  }
  thawSelection() {
    return this.removeCurrentAttribute("frozen");
  }
  hasFrozenSelection() {
    return this.hasCurrentAttribute("frozen");
  }
  setSelection(t) {
    var e;
    const i = this.document.locationRangeFromRange(t);
    return null === (e = this.delegate) || void 0 === e ? void 0 : e.compositionDidRequestChangingSelectionToLocationRange(i);
  }
  getSelectedRange() {
    const t = this.getLocationRange();
    if (t) return this.document.rangeFromLocationRange(t);
  }
  setSelectedRange(t) {
    const e = this.document.locationRangeFromRange(t);
    return this.getSelectionManager().setLocationRange(e);
  }
  getPosition() {
    const t = this.getLocationRange();
    if (t) return this.document.positionFromLocation(t[0]);
  }
  getLocationRange(t) {
    return this.targetLocationRange ? this.targetLocationRange : this.getSelectionManager().getLocationRange(t) || Et({
      index: 0,
      offset: 0
    });
  }
  withTargetLocationRange(t, e) {
    let i;
    this.targetLocationRange = t;
    try {
      i = e();
    } finally {
      this.targetLocationRange = null;
    }
    return i;
  }
  withTargetRange(t, e) {
    const i = this.document.locationRangeFromRange(t);
    return this.withTargetLocationRange(i, e);
  }
  withTargetDOMRange(t, e) {
    const i = this.createLocationRangeFromDOMRange(t, {
      strict: !1
    });
    return this.withTargetLocationRange(i, e);
  }
  getExpandedRangeInDirection(t) {
    let _ref14 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      e = _ref14.length,
      _Array$from17 = Array.from(this.getSelectedRange()),
      _Array$from18 = _slicedToArray(_Array$from17, 2),
      i = _Array$from18[0],
      n = _Array$from18[1];
    return "backward" === t ? e ? i -= e : i = this.translateUTF16PositionFromOffset(i, -1) : e ? n += e : n = this.translateUTF16PositionFromOffset(n, 1), Et([i, n]);
  }
  shouldManageMovingCursorInDirection(t) {
    if (this.editingAttachment) return !0;
    const e = this.getExpandedRangeInDirection(t);
    return null != this.getAttachmentAtRange(e);
  }
  moveCursorInDirection(t) {
    let e, i;
    if (this.editingAttachment) i = this.document.getRangeOfAttachment(this.editingAttachment);else {
      const n = this.getSelectedRange();
      i = this.getExpandedRangeInDirection(t), e = !kt(n, i);
    }
    if ("backward" === t ? this.setSelectedRange(i[0]) : this.setSelectedRange(i[1]), e) {
      const t = this.getAttachmentAtRange(i);
      if (t) return this.editAttachment(t);
    }
  }
  expandSelectionInDirection(t) {
    let _ref15 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      e = _ref15.length;
    const i = this.getExpandedRangeInDirection(t, {
      length: e
    });
    return this.setSelectedRange(i);
  }
  expandSelectionForEditing() {
    if (this.hasCurrentAttribute("href")) return this.expandSelectionAroundCommonAttribute("href");
  }
  expandSelectionAroundCommonAttribute(t) {
    const e = this.getPosition(),
      i = this.document.getRangeOfCommonAttributeAtPosition(t, e);
    return this.setSelectedRange(i);
  }
  selectionContainsAttachments() {
    var t;
    return (null === (t = this.getSelectedAttachments()) || void 0 === t ? void 0 : t.length) > 0;
  }
  selectionIsInCursorTarget() {
    return this.editingAttachment || this.positionIsCursorTarget(this.getPosition());
  }
  positionIsCursorTarget(t) {
    const e = this.document.locationFromPosition(t);
    if (e) return this.locationIsCursorTarget(e);
  }
  positionIsBlockBreak(t) {
    var e;
    return null === (e = this.document.getPieceAtPosition(t)) || void 0 === e ? void 0 : e.isBlockBreak();
  }
  getSelectedDocument() {
    const t = this.getSelectedRange();
    if (t) return this.document.getDocumentAtRange(t);
  }
  getSelectedAttachments() {
    var t;
    return null === (t = this.getSelectedDocument()) || void 0 === t ? void 0 : t.getAttachments();
  }
  getAttachments() {
    return this.attachments.slice(0);
  }
  refreshAttachments() {
    const t = this.document.getAttachments(),
      _ref16 = function () {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        const i = [],
          n = [],
          r = new Set();
        t.forEach(t => {
          r.add(t);
        });
        const o = new Set();
        return e.forEach(t => {
          o.add(t), r.has(t) || i.push(t);
        }), t.forEach(t => {
          o.has(t) || n.push(t);
        }), {
          added: i,
          removed: n
        };
      }(this.attachments, t),
      e = _ref16.added,
      i = _ref16.removed;
    return this.attachments = t, Array.from(i).forEach(t => {
      var e, i;
      t.delegate = null, null === (e = this.delegate) || void 0 === e || null === (i = e.compositionDidRemoveAttachment) || void 0 === i || i.call(e, t);
    }), (() => {
      const t = [];
      return Array.from(e).forEach(e => {
        var i, n;
        e.delegate = this, t.push(null === (i = this.delegate) || void 0 === i || null === (n = i.compositionDidAddAttachment) || void 0 === n ? void 0 : n.call(i, e));
      }), t;
    })();
  }
  attachmentDidChangeAttributes(t) {
    var e, i;
    return this.revision++, null === (e = this.delegate) || void 0 === e || null === (i = e.compositionDidEditAttachment) || void 0 === i ? void 0 : i.call(e, t);
  }
  attachmentDidChangePreviewURL(t) {
    var e, i;
    return this.revision++, null === (e = this.delegate) || void 0 === e || null === (i = e.compositionDidChangeAttachmentPreviewURL) || void 0 === i ? void 0 : i.call(e, t);
  }
  editAttachment(t, e) {
    var i, n;
    if (t !== this.editingAttachment) return this.stopEditingAttachment(), this.editingAttachment = t, null === (i = this.delegate) || void 0 === i || null === (n = i.compositionDidStartEditingAttachment) || void 0 === n ? void 0 : n.call(i, this.editingAttachment, e);
  }
  stopEditingAttachment() {
    var t, e;
    this.editingAttachment && (null === (t = this.delegate) || void 0 === t || null === (e = t.compositionDidStopEditingAttachment) || void 0 === e || e.call(t, this.editingAttachment), this.editingAttachment = null);
  }
  updateAttributesForAttachment(t, e) {
    return this.setDocument(this.document.updateAttributesForAttachment(t, e));
  }
  removeAttributeForAttachment(t, e) {
    return this.setDocument(this.document.removeAttributeForAttachment(t, e));
  }
  breakFormattedBlock(t) {
    let e = t.document;
    const i = t.block;
    let n = t.startPosition,
      r = [n - 1, n];
    i.getBlockBreakPosition() === t.startLocation.offset ? (i.breaksOnReturn() && "\n" === t.nextCharacter ? n += 1 : e = e.removeTextAtRange(r), r = [n, n]) : "\n" === t.nextCharacter ? "\n" === t.previousCharacter ? r = [n - 1, n + 1] : (r = [n, n + 1], n += 1) : t.startLocation.offset - 1 != 0 && (n += 1);
    const o = new je([i.removeLastAttribute().copyWithoutText()]);
    return this.setDocument(e.insertDocumentAtRange(o, r)), this.setSelection(n);
  }
  getPreviousBlock() {
    const t = this.getLocationRange();
    if (t) {
      const e = t[0].index;
      if (e > 0) return this.document.getBlockAtIndex(e - 1);
    }
  }
  getBlock() {
    const t = this.getLocationRange();
    if (t) return this.document.getBlockAtIndex(t[0].index);
  }
  getAttachmentAtRange(t) {
    const e = this.document.getDocumentAtRange(t);
    if (e.toString() === "".concat("￼", "\n")) return e.getAttachments()[0];
  }
  notifyDelegateOfCurrentAttributesChange() {
    var t, e;
    return null === (t = this.delegate) || void 0 === t || null === (e = t.compositionDidChangeCurrentAttributes) || void 0 === e ? void 0 : e.call(t, this.currentAttributes);
  }
  notifyDelegateOfInsertionAtRange(t) {
    var e, i;
    return null === (e = this.delegate) || void 0 === e || null === (i = e.compositionDidPerformInsertionAtRange) || void 0 === i ? void 0 : i.call(e, t);
  }
  translateUTF16PositionFromOffset(t, e) {
    const i = this.document.toUTF16String(),
      n = i.offsetFromUCS2Offset(t);
    return i.offsetToUCS2Offset(n + e);
  }
}
ci.proxyMethod("getSelectionManager().getPointRange"), ci.proxyMethod("getSelectionManager().setLocationRangeFromPointRange"), ci.proxyMethod("getSelectionManager().createLocationRangeFromDOMRange"), ci.proxyMethod("getSelectionManager().locationIsCursorTarget"), ci.proxyMethod("getSelectionManager().selectionIsExpanded"), ci.proxyMethod("delegate?.getSelectionManager");
class hi extends U {
  constructor(t) {
    super(...arguments), this.composition = t, this.undoEntries = [], this.redoEntries = [];
  }
  recordUndoEntry(t) {
    let _ref17 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      e = _ref17.context,
      i = _ref17.consolidatable;
    const n = this.undoEntries.slice(-1)[0];
    if (!i || !ui(n, t, e)) {
      const i = this.createEntry({
        description: t,
        context: e
      });
      this.undoEntries.push(i), this.redoEntries = [];
    }
  }
  undo() {
    const t = this.undoEntries.pop();
    if (t) {
      const e = this.createEntry(t);
      return this.redoEntries.push(e), this.composition.loadSnapshot(t.snapshot);
    }
  }
  redo() {
    const t = this.redoEntries.pop();
    if (t) {
      const e = this.createEntry(t);
      return this.undoEntries.push(e), this.composition.loadSnapshot(t.snapshot);
    }
  }
  canUndo() {
    return this.undoEntries.length > 0;
  }
  canRedo() {
    return this.redoEntries.length > 0;
  }
  createEntry() {
    let _ref18 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = _ref18.description,
      e = _ref18.context;
    return {
      description: null == t ? void 0 : t.toString(),
      context: JSON.stringify(e),
      snapshot: this.composition.getSnapshot()
    };
  }
}
const ui = (t, e, i) => (null == t ? void 0 : t.description) === (null == e ? void 0 : e.toString()) && (null == t ? void 0 : t.context) === JSON.stringify(i);
class di {
  constructor(t) {
    this.document = t.document, this.selectedRange = t.selectedRange;
  }
  perform() {
    return this.removeBlockAttribute(), this.applyBlockAttribute();
  }
  getSnapshot() {
    return {
      document: this.document,
      selectedRange: this.selectedRange
    };
  }
  removeBlockAttribute() {
    return this.findRangesOfBlocks().map(t => this.document = this.document.removeAttributeAtRange("attachmentGallery", t));
  }
  applyBlockAttribute() {
    let t = 0;
    this.findRangesOfPieces().forEach(e => {
      e[1] - e[0] > 1 && (e[0] += t, e[1] += t, "\n" !== this.document.getCharacterAtPosition(e[1]) && (this.document = this.document.insertBlockBreakAtRange(e[1]), e[1] < this.selectedRange[1] && this.moveSelectedRangeForward(), e[1]++, t++), 0 !== e[0] && "\n" !== this.document.getCharacterAtPosition(e[0] - 1) && (this.document = this.document.insertBlockBreakAtRange(e[0]), e[0] < this.selectedRange[0] && this.moveSelectedRangeForward(), e[0]++, t++), this.document = this.document.applyBlockAttributeAtRange("attachmentGallery", !0, e));
    });
  }
  findRangesOfBlocks() {
    return this.document.findRangesForBlockAttribute("attachmentGallery");
  }
  findRangesOfPieces() {
    return this.document.findRangesForTextAttribute("presentation", {
      withValue: "gallery"
    });
  }
  moveSelectedRangeForward() {
    this.selectedRange[0] += 1, this.selectedRange[1] += 1;
  }
}
const gi = function (t) {
    const e = new di(t);
    return e.perform(), e.getSnapshot();
  },
  mi = [gi];
class pi {
  constructor(t, e, i) {
    this.insertFiles = this.insertFiles.bind(this), this.composition = t, this.selectionManager = e, this.element = i, this.undoManager = new hi(this.composition), this.filters = mi.slice(0);
  }
  loadDocument(t) {
    return this.loadSnapshot({
      document: t,
      selectedRange: [0, 0]
    });
  }
  loadHTML() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    const e = Ke.parse(t, {
      referenceElement: this.element
    }).getDocument();
    return this.loadDocument(e);
  }
  loadJSON(t) {
    let e = t.document,
      i = t.selectedRange;
    return e = je.fromJSON(e), this.loadSnapshot({
      document: e,
      selectedRange: i
    });
  }
  loadSnapshot(t) {
    return this.undoManager = new hi(this.composition), this.composition.loadSnapshot(t);
  }
  getDocument() {
    return this.composition.document;
  }
  getSelectedDocument() {
    return this.composition.getSelectedDocument();
  }
  getSnapshot() {
    return this.composition.getSnapshot();
  }
  toJSON() {
    return this.getSnapshot();
  }
  deleteInDirection(t) {
    return this.composition.deleteInDirection(t);
  }
  insertAttachment(t) {
    return this.composition.insertAttachment(t);
  }
  insertAttachments(t) {
    return this.composition.insertAttachments(t);
  }
  insertDocument(t) {
    return this.composition.insertDocument(t);
  }
  insertFile(t) {
    return this.composition.insertFile(t);
  }
  insertFiles(t) {
    return this.composition.insertFiles(t);
  }
  insertHTML(t) {
    return this.composition.insertHTML(t);
  }
  insertString(t) {
    return this.composition.insertString(t);
  }
  insertText(t) {
    return this.composition.insertText(t);
  }
  insertLineBreak() {
    return this.composition.insertLineBreak();
  }
  getSelectedRange() {
    return this.composition.getSelectedRange();
  }
  getPosition() {
    return this.composition.getPosition();
  }
  getClientRectAtPosition(t) {
    const e = this.getDocument().locationRangeFromRange([t, t + 1]);
    return this.selectionManager.getClientRectAtLocationRange(e);
  }
  expandSelectionInDirection(t) {
    return this.composition.expandSelectionInDirection(t);
  }
  moveCursorInDirection(t) {
    return this.composition.moveCursorInDirection(t);
  }
  setSelectedRange(t) {
    return this.composition.setSelectedRange(t);
  }
  activateAttribute(t) {
    let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return this.composition.setCurrentAttribute(t, e);
  }
  attributeIsActive(t) {
    return this.composition.hasCurrentAttribute(t);
  }
  canActivateAttribute(t) {
    return this.composition.canSetCurrentAttribute(t);
  }
  deactivateAttribute(t) {
    return this.composition.removeCurrentAttribute(t);
  }
  canDecreaseNestingLevel() {
    return this.composition.canDecreaseNestingLevel();
  }
  canIncreaseNestingLevel() {
    return this.composition.canIncreaseNestingLevel();
  }
  decreaseNestingLevel() {
    if (this.canDecreaseNestingLevel()) return this.composition.decreaseNestingLevel();
  }
  increaseNestingLevel() {
    if (this.canIncreaseNestingLevel()) return this.composition.increaseNestingLevel();
  }
  canRedo() {
    return this.undoManager.canRedo();
  }
  canUndo() {
    return this.undoManager.canUndo();
  }
  recordUndoEntry(t) {
    let _ref19 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      e = _ref19.context,
      i = _ref19.consolidatable;
    return this.undoManager.recordUndoEntry(t, {
      context: e,
      consolidatable: i
    });
  }
  redo() {
    if (this.canRedo()) return this.undoManager.redo();
  }
  undo() {
    if (this.canUndo()) return this.undoManager.undo();
  }
}
class fi {
  constructor(t) {
    this.element = t;
  }
  findLocationFromContainerAndOffset(t, e) {
    let _ref20 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
        strict: !0
      },
      i = _ref20.strict,
      n = 0,
      r = !1;
    const o = {
        index: 0,
        offset: 0
      },
      s = this.findAttachmentElementParentForNode(t);
    s && (t = s.parentNode, e = v(s));
    const a = x(this.element, {
      usingFilter: xi
    });
    for (; a.nextNode();) {
      const s = a.currentNode;
      if (s === t && I(t)) {
        T(s) || (o.offset += e);
        break;
      }
      if (s.parentNode === t) {
        if (n++ === e) break;
      } else if (!b(t, s) && n > 0) break;
      L(s, {
        strict: i
      }) ? (r && o.index++, o.offset = 0, r = !0) : o.offset += bi(s);
    }
    return o;
  }
  findContainerAndOffsetFromLocation(t) {
    let e, i;
    if (0 === t.index && 0 === t.offset) {
      for (e = this.element, i = 0; e.firstChild;) if (e = e.firstChild, S(e)) {
        i = 1;
        break;
      }
      return [e, i];
    }
    let _this$findNodeAndOffs = this.findNodeAndOffsetFromLocation(t),
      _this$findNodeAndOffs2 = _slicedToArray(_this$findNodeAndOffs, 2),
      n = _this$findNodeAndOffs2[0],
      r = _this$findNodeAndOffs2[1];
    if (n) {
      if (I(n)) 0 === bi(n) ? (e = n.parentNode.parentNode, i = v(n.parentNode), T(n, {
        name: "right"
      }) && i++) : (e = n, i = t.offset - r);else {
        if (e = n.parentNode, !L(n.previousSibling) && !S(e)) for (; n === e.lastChild && (n = e, e = e.parentNode, !S(e)););
        i = v(n), 0 !== t.offset && i++;
      }
      return [e, i];
    }
  }
  findNodeAndOffsetFromLocation(t) {
    let e,
      i,
      n = 0;
    for (const r of this.getSignificantNodesForIndex(t.index)) {
      const o = bi(r);
      if (t.offset <= n + o) if (I(r)) {
        if (e = r, i = n, t.offset === i && T(e)) break;
      } else e || (e = r, i = n);
      if (n += o, n > t.offset) break;
    }
    return [e, i];
  }
  findAttachmentElementParentForNode(t) {
    for (; t && t !== this.element;) {
      if (F(t)) return t;
      t = t.parentNode;
    }
  }
  getSignificantNodesForIndex(t) {
    const e = [],
      i = x(this.element, {
        usingFilter: vi
      });
    let n = !1;
    for (; i.nextNode();) {
      const o = i.currentNode;
      var r;
      if (D(o)) {
        if (null != r ? r++ : r = 0, r === t) n = !0;else if (n) break;
      } else n && e.push(o);
    }
    return e;
  }
}
const bi = function (t) {
    if (t.nodeType === Node.TEXT_NODE) {
      if (T(t)) return 0;
      return t.textContent.length;
    }
    return "br" === y(t) || F(t) ? 1 : 0;
  },
  vi = function (t) {
    return Ai(t) === NodeFilter.FILTER_ACCEPT ? xi(t) : NodeFilter.FILTER_REJECT;
  },
  Ai = function (t) {
    return B(t) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
  },
  xi = function (t) {
    return F(t.parentNode) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
  };
class yi {
  createDOMRangeFromPoint(t) {
    let e,
      i = t.x,
      n = t.y;
    if (document.caretPositionFromPoint) {
      const _document$caretPositi = document.caretPositionFromPoint(i, n),
        t = _document$caretPositi.offsetNode,
        r = _document$caretPositi.offset;
      return e = document.createRange(), e.setStart(t, r), e;
    }
    if (document.caretRangeFromPoint) return document.caretRangeFromPoint(i, n);
    if (document.body.createTextRange) {
      const t = It();
      try {
        const t = document.body.createTextRange();
        t.moveToPoint(i, n), t.select();
      } catch (t) {}
      return e = It(), Pt(t), e;
    }
  }
  getClientRectsForDOMRange(t) {
    const e = Array.from(t.getClientRects());
    return [e[0], e[e.length - 1]];
  }
}
class Ci extends U {
  constructor(t) {
    super(...arguments), this.didMouseDown = this.didMouseDown.bind(this), this.selectionDidChange = this.selectionDidChange.bind(this), this.element = t, this.locationMapper = new fi(this.element), this.pointMapper = new yi(), this.lockCount = 0, d("mousedown", {
      onElement: this.element,
      withCallback: this.didMouseDown
    });
  }
  getLocationRange() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return !1 === t.strict ? this.createLocationRangeFromDOMRange(It()) : t.ignoreLock ? this.currentLocationRange : this.lockedLocationRange ? this.lockedLocationRange : this.currentLocationRange;
  }
  setLocationRange(t) {
    if (this.lockedLocationRange) return;
    t = Et(t);
    const e = this.createDOMRangeFromLocationRange(t);
    e && (Pt(e), this.updateCurrentLocationRange(t));
  }
  setLocationRangeFromPointRange(t) {
    t = Et(t);
    const e = this.getLocationAtPoint(t[0]),
      i = this.getLocationAtPoint(t[1]);
    this.setLocationRange([e, i]);
  }
  getClientRectAtLocationRange(t) {
    const e = this.createDOMRangeFromLocationRange(t);
    if (e) return this.getClientRectsForDOMRange(e)[1];
  }
  locationIsCursorTarget(t) {
    const e = Array.from(this.findNodeAndOffsetFromLocation(t))[0];
    return T(e);
  }
  lock() {
    0 == this.lockCount++ && (this.updateCurrentLocationRange(), this.lockedLocationRange = this.getLocationRange());
  }
  unlock() {
    if (0 == --this.lockCount) {
      const t = this.lockedLocationRange;
      if (this.lockedLocationRange = null, null != t) return this.setLocationRange(t);
    }
  }
  clearSelection() {
    var t;
    return null === (t = Bt()) || void 0 === t ? void 0 : t.removeAllRanges();
  }
  selectionIsCollapsed() {
    var t;
    return !0 === (null === (t = It()) || void 0 === t ? void 0 : t.collapsed);
  }
  selectionIsExpanded() {
    return !this.selectionIsCollapsed();
  }
  createLocationRangeFromDOMRange(t, e) {
    if (null == t || !this.domRangeWithinElement(t)) return;
    const i = this.findLocationFromContainerAndOffset(t.startContainer, t.startOffset, e);
    if (!i) return;
    const n = t.collapsed ? void 0 : this.findLocationFromContainerAndOffset(t.endContainer, t.endOffset, e);
    return Et([i, n]);
  }
  didMouseDown() {
    return this.pauseTemporarily();
  }
  pauseTemporarily() {
    let t;
    this.paused = !0;
    const e = () => {
        if (this.paused = !1, clearTimeout(i), Array.from(t).forEach(t => {
          t.destroy();
        }), b(document, this.element)) return this.selectionDidChange();
      },
      i = setTimeout(e, 200);
    t = ["mousemove", "keydown"].map(t => d(t, {
      onElement: document,
      withCallback: e
    }));
  }
  selectionDidChange() {
    if (!this.paused && !f(this.element)) return this.updateCurrentLocationRange();
  }
  updateCurrentLocationRange(t) {
    var e, i;
    if ((null != t ? t : t = this.createLocationRangeFromDOMRange(It())) && !kt(t, this.currentLocationRange)) return this.currentLocationRange = t, null === (e = this.delegate) || void 0 === e || null === (i = e.locationRangeDidChange) || void 0 === i ? void 0 : i.call(e, this.currentLocationRange.slice(0));
  }
  createDOMRangeFromLocationRange(t) {
    const e = this.findContainerAndOffsetFromLocation(t[0]),
      i = St(t) ? e : this.findContainerAndOffsetFromLocation(t[1]) || e;
    if (null != e && null != i) {
      const t = document.createRange();
      return t.setStart(...Array.from(e || [])), t.setEnd(...Array.from(i || [])), t;
    }
  }
  getLocationAtPoint(t) {
    const e = this.createDOMRangeFromPoint(t);
    var i;
    if (e) return null === (i = this.createLocationRangeFromDOMRange(e)) || void 0 === i ? void 0 : i[0];
  }
  domRangeWithinElement(t) {
    return t.collapsed ? b(this.element, t.startContainer) : b(this.element, t.startContainer) && b(this.element, t.endContainer);
  }
}
Ci.proxyMethod("locationMapper.findLocationFromContainerAndOffset"), Ci.proxyMethod("locationMapper.findContainerAndOffsetFromLocation"), Ci.proxyMethod("locationMapper.findNodeAndOffsetFromLocation"), Ci.proxyMethod("pointMapper.createDOMRangeFromPoint"), Ci.proxyMethod("pointMapper.getClientRectsForDOMRange");
var Ri = Object.freeze({
    __proto__: null,
    Attachment: xe,
    AttachmentManager: ai,
    AttachmentPiece: ye,
    Block: De,
    Composition: ci,
    Document: je,
    Editor: pi,
    HTMLParser: Ke,
    HTMLSanitizer: ze,
    LineBreakInsertion: li,
    LocationMapper: fi,
    ManagedAttachment: si,
    Piece: ve,
    PointMapper: yi,
    SelectionManager: Ci,
    SplittableList: Re,
    StringPiece: Ce,
    Text: Le,
    UndoManager: hi
  }),
  Ei = Object.freeze({
    __proto__: null
  });
const Si = W.lang,
  ki = W.css,
  Li = W.keyNames,
  Di = function (t) {
    return function () {
      const e = t.apply(this, arguments);
      e.do(), this.undos || (this.undos = []), this.undos.push(e.undo);
    };
  };
class wi extends U {
  constructor(t, e, i) {
    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    super(...arguments), be(this, "makeElementMutable", Di(() => ({
      do: () => {
        this.element.dataset.trixMutable = !0;
      },
      undo: () => delete this.element.dataset.trixMutable
    }))), be(this, "addToolbar", Di(() => {
      const t = C({
        tagName: "div",
        className: ki.attachmentToolbar,
        data: {
          trixMutable: !0
        },
        childNodes: C({
          tagName: "div",
          className: "trix-button-row",
          childNodes: C({
            tagName: "span",
            className: "trix-button-group trix-button-group--actions",
            childNodes: C({
              tagName: "button",
              className: "trix-button trix-button--remove",
              textContent: Si.remove,
              attributes: {
                title: Si.remove
              },
              data: {
                trixAction: "remove"
              }
            })
          })
        })
      });
      return this.attachment.isPreviewable() && t.appendChild(C({
        tagName: "div",
        className: ki.attachmentMetadataContainer,
        childNodes: C({
          tagName: "span",
          className: ki.attachmentMetadata,
          childNodes: [C({
            tagName: "span",
            className: ki.attachmentName,
            textContent: this.attachment.getFilename(),
            attributes: {
              title: this.attachment.getFilename()
            }
          }), C({
            tagName: "span",
            className: ki.attachmentSize,
            textContent: this.attachment.getFormattedFilesize()
          })]
        })
      })), d("click", {
        onElement: t,
        withCallback: this.didClickToolbar
      }), d("click", {
        onElement: t,
        matchingSelector: "[data-trix-action]",
        withCallback: this.didClickActionButton
      }), g("trix-attachment-before-toolbar", {
        onElement: this.element,
        attributes: {
          toolbar: t,
          attachment: this.attachment
        }
      }), {
        do: () => this.element.appendChild(t),
        undo: () => A(t)
      };
    })), be(this, "installCaptionEditor", Di(() => {
      const t = C({
        tagName: "textarea",
        className: ki.attachmentCaptionEditor,
        attributes: {
          placeholder: Si.captionPlaceholder
        },
        data: {
          trixMutable: !0
        }
      });
      t.value = this.attachmentPiece.getCaption();
      const e = t.cloneNode();
      e.classList.add("trix-autoresize-clone"), e.tabIndex = -1;
      const i = function () {
        e.value = t.value, t.style.height = e.scrollHeight + "px";
      };
      d("input", {
        onElement: t,
        withCallback: i
      }), d("input", {
        onElement: t,
        withCallback: this.didInputCaption
      }), d("keydown", {
        onElement: t,
        withCallback: this.didKeyDownCaption
      }), d("change", {
        onElement: t,
        withCallback: this.didChangeCaption
      }), d("blur", {
        onElement: t,
        withCallback: this.didBlurCaption
      });
      const n = this.element.querySelector("figcaption"),
        r = n.cloneNode();
      return {
        do: () => {
          if (n.style.display = "none", r.appendChild(t), r.appendChild(e), r.classList.add("".concat(ki.attachmentCaption, "--editing")), n.parentElement.insertBefore(r, n), i(), this.options.editCaption) return yt(() => t.focus());
        },
        undo() {
          A(r), n.style.display = null;
        }
      };
    })), this.didClickToolbar = this.didClickToolbar.bind(this), this.didClickActionButton = this.didClickActionButton.bind(this), this.didKeyDownCaption = this.didKeyDownCaption.bind(this), this.didInputCaption = this.didInputCaption.bind(this), this.didChangeCaption = this.didChangeCaption.bind(this), this.didBlurCaption = this.didBlurCaption.bind(this), this.attachmentPiece = t, this.element = e, this.container = i, this.options = n, this.attachment = this.attachmentPiece.attachment, "a" === y(this.element) && (this.element = this.element.firstChild), this.install();
  }
  install() {
    this.makeElementMutable(), this.addToolbar(), this.attachment.isPreviewable() && this.installCaptionEditor();
  }
  uninstall() {
    var t;
    let e = this.undos.pop();
    for (this.savePendingCaption(); e;) e(), e = this.undos.pop();
    null === (t = this.delegate) || void 0 === t || t.didUninstallAttachmentEditor(this);
  }
  savePendingCaption() {
    if (this.pendingCaption) {
      const r = this.pendingCaption;
      var t, e, i, n;
      if (this.pendingCaption = null, r) null === (t = this.delegate) || void 0 === t || null === (e = t.attachmentEditorDidRequestUpdatingAttributesForAttachment) || void 0 === e || e.call(t, {
        caption: r
      }, this.attachment);else null === (i = this.delegate) || void 0 === i || null === (n = i.attachmentEditorDidRequestRemovingAttributeForAttachment) || void 0 === n || n.call(i, "caption", this.attachment);
    }
  }
  didClickToolbar(t) {
    return t.preventDefault(), t.stopPropagation();
  }
  didClickActionButton(t) {
    var e;
    if ("remove" === t.target.getAttribute("data-trix-action")) return null === (e = this.delegate) || void 0 === e ? void 0 : e.attachmentEditorDidRequestRemovalOfAttachment(this.attachment);
  }
  didKeyDownCaption(t) {
    var e, i;
    if ("return" === Li[t.keyCode]) return t.preventDefault(), this.savePendingCaption(), null === (e = this.delegate) || void 0 === e || null === (i = e.attachmentEditorDidRequestDeselectingAttachment) || void 0 === i ? void 0 : i.call(e, this.attachment);
  }
  didInputCaption(t) {
    this.pendingCaption = t.target.value.replace(/\s/g, " ").trim();
  }
  didChangeCaption(t) {
    return this.savePendingCaption();
  }
  didBlurCaption(t) {
    return this.savePendingCaption();
  }
}
class Ti extends U {
  constructor(t, e) {
    super(...arguments), this.didFocus = this.didFocus.bind(this), this.didBlur = this.didBlur.bind(this), this.didClickAttachment = this.didClickAttachment.bind(this), this.element = t, this.composition = e, this.documentView = new ue(this.composition.document, {
      element: this.element
    }), d("focus", {
      onElement: this.element,
      withCallback: this.didFocus
    }), d("blur", {
      onElement: this.element,
      withCallback: this.didBlur
    }), d("click", {
      onElement: this.element,
      matchingSelector: "a[contenteditable=false]",
      preventDefault: !0
    }), d("mousedown", {
      onElement: this.element,
      matchingSelector: "[data-trix-attachment]",
      withCallback: this.didClickAttachment
    }), d("click", {
      onElement: this.element,
      matchingSelector: "a".concat("[data-trix-attachment]"),
      preventDefault: !0
    });
  }
  didFocus(t) {
    var e;
    const i = () => {
      var t, e;
      if (!this.focused) return this.focused = !0, null === (t = this.delegate) || void 0 === t || null === (e = t.compositionControllerDidFocus) || void 0 === e ? void 0 : e.call(t);
    };
    return (null === (e = this.blurPromise) || void 0 === e ? void 0 : e.then(i)) || i();
  }
  didBlur(t) {
    this.blurPromise = new Promise(t => yt(() => {
      var e, i;
      f(this.element) || (this.focused = null, null === (e = this.delegate) || void 0 === e || null === (i = e.compositionControllerDidBlur) || void 0 === i || i.call(e));
      return this.blurPromise = null, t();
    }));
  }
  didClickAttachment(t, e) {
    var i, n;
    const r = this.findAttachmentForElement(e),
      o = !!p(t.target, {
        matchingSelector: "figcaption"
      });
    return null === (i = this.delegate) || void 0 === i || null === (n = i.compositionControllerDidSelectAttachment) || void 0 === n ? void 0 : n.call(i, r, {
      editCaption: o
    });
  }
  getSerializableElement() {
    return this.isEditingAttachment() ? this.documentView.shadowElement : this.element;
  }
  render() {
    var t, e, i, n, r, o;
    (this.revision !== this.composition.revision && (this.documentView.setDocument(this.composition.document), this.documentView.render(), this.revision = this.composition.revision), this.canSyncDocumentView() && !this.documentView.isSynced()) && (null === (i = this.delegate) || void 0 === i || null === (n = i.compositionControllerWillSyncDocumentView) || void 0 === n || n.call(i), this.documentView.sync(), null === (r = this.delegate) || void 0 === r || null === (o = r.compositionControllerDidSyncDocumentView) || void 0 === o || o.call(r));
    return null === (t = this.delegate) || void 0 === t || null === (e = t.compositionControllerDidRender) || void 0 === e ? void 0 : e.call(t);
  }
  rerenderViewForObject(t) {
    return this.invalidateViewForObject(t), this.render();
  }
  invalidateViewForObject(t) {
    return this.documentView.invalidateViewForObject(t);
  }
  isViewCachingEnabled() {
    return this.documentView.isViewCachingEnabled();
  }
  enableViewCaching() {
    return this.documentView.enableViewCaching();
  }
  disableViewCaching() {
    return this.documentView.disableViewCaching();
  }
  refreshViewCache() {
    return this.documentView.garbageCollectCachedViews();
  }
  isEditingAttachment() {
    return !!this.attachmentEditor;
  }
  installAttachmentEditorForAttachment(t, e) {
    var i;
    if ((null === (i = this.attachmentEditor) || void 0 === i ? void 0 : i.attachment) === t) return;
    const n = this.documentView.findElementForObject(t);
    if (!n) return;
    this.uninstallAttachmentEditor();
    const r = this.composition.document.getAttachmentPieceForAttachment(t);
    this.attachmentEditor = new wi(r, n, this.element, e), this.attachmentEditor.delegate = this;
  }
  uninstallAttachmentEditor() {
    var t;
    return null === (t = this.attachmentEditor) || void 0 === t ? void 0 : t.uninstall();
  }
  didUninstallAttachmentEditor() {
    return this.attachmentEditor = null, this.render();
  }
  attachmentEditorDidRequestUpdatingAttributesForAttachment(t, e) {
    var i, n;
    return null === (i = this.delegate) || void 0 === i || null === (n = i.compositionControllerWillUpdateAttachment) || void 0 === n || n.call(i, e), this.composition.updateAttributesForAttachment(t, e);
  }
  attachmentEditorDidRequestRemovingAttributeForAttachment(t, e) {
    var i, n;
    return null === (i = this.delegate) || void 0 === i || null === (n = i.compositionControllerWillUpdateAttachment) || void 0 === n || n.call(i, e), this.composition.removeAttributeForAttachment(t, e);
  }
  attachmentEditorDidRequestRemovalOfAttachment(t) {
    var e, i;
    return null === (e = this.delegate) || void 0 === e || null === (i = e.compositionControllerDidRequestRemovalOfAttachment) || void 0 === i ? void 0 : i.call(e, t);
  }
  attachmentEditorDidRequestDeselectingAttachment(t) {
    var e, i;
    return null === (e = this.delegate) || void 0 === e || null === (i = e.compositionControllerDidRequestDeselectingAttachment) || void 0 === i ? void 0 : i.call(e, t);
  }
  canSyncDocumentView() {
    return !this.isEditingAttachment();
  }
  findAttachmentForElement(t) {
    return this.composition.document.getAttachmentById(parseInt(t.dataset.trixId, 10));
  }
}
class Fi extends U {}
const Bi = "[".concat("data-trix-mutable", "]"),
  Ii = {
    attributes: !0,
    childList: !0,
    characterData: !0,
    characterDataOldValue: !0,
    subtree: !0
  };
class Pi extends U {
  constructor(t) {
    super(t), this.didMutate = this.didMutate.bind(this), this.element = t, this.observer = new window.MutationObserver(this.didMutate), this.start();
  }
  start() {
    return this.reset(), this.observer.observe(this.element, Ii);
  }
  stop() {
    return this.observer.disconnect();
  }
  didMutate(t) {
    var e, i;
    if (this.mutations.push(...Array.from(this.findSignificantMutations(t) || [])), this.mutations.length) return null === (e = this.delegate) || void 0 === e || null === (i = e.elementDidMutate) || void 0 === i || i.call(e, this.getMutationSummary()), this.reset();
  }
  reset() {
    this.mutations = [];
  }
  findSignificantMutations(t) {
    return t.filter(t => this.mutationIsSignificant(t));
  }
  mutationIsSignificant(t) {
    if (this.nodeIsMutable(t.target)) return !1;
    for (const e of Array.from(this.nodesModifiedByMutation(t))) if (this.nodeIsSignificant(e)) return !0;
    return !1;
  }
  nodeIsSignificant(t) {
    return t !== this.element && !this.nodeIsMutable(t) && !B(t);
  }
  nodeIsMutable(t) {
    return p(t, {
      matchingSelector: Bi
    });
  }
  nodesModifiedByMutation(t) {
    const e = [];
    switch (t.type) {
      case "attributes":
        "data-trix-mutable" !== t.attributeName && e.push(t.target);
        break;
      case "characterData":
        e.push(t.target.parentNode), e.push(t.target);
        break;
      case "childList":
        e.push(...Array.from(t.addedNodes || [])), e.push(...Array.from(t.removedNodes || []));
    }
    return e;
  }
  getMutationSummary() {
    return this.getTextMutationSummary();
  }
  getTextMutationSummary() {
    const _this$getTextChangesF = this.getTextChangesFromCharacterData(),
      t = _this$getTextChangesF.additions,
      e = _this$getTextChangesF.deletions,
      i = this.getTextChangesFromChildList();
    Array.from(i.additions).forEach(e => {
      Array.from(t).includes(e) || t.push(e);
    }), e.push(...Array.from(i.deletions || []));
    const n = {},
      r = t.join("");
    r && (n.textAdded = r);
    const o = e.join("");
    return o && (n.textDeleted = o), n;
  }
  getMutationsByType(t) {
    return Array.from(this.mutations).filter(e => e.type === t);
  }
  getTextChangesFromChildList() {
    let t, e;
    const i = [],
      n = [];
    Array.from(this.getMutationsByType("childList")).forEach(t => {
      i.push(...Array.from(t.addedNodes || [])), n.push(...Array.from(t.removedNodes || []));
    });
    0 === i.length && 1 === n.length && D(n[0]) ? (t = [], e = ["\n"]) : (t = Ni(i), e = Ni(n));
    return {
      additions: t.filter((t, i) => t !== e[i]).map(Mt),
      deletions: e.filter((e, i) => e !== t[i]).map(Mt)
    };
  }
  getTextChangesFromCharacterData() {
    let t, e;
    const i = this.getMutationsByType("characterData");
    if (i.length) {
      const n = i[0],
        r = i[i.length - 1],
        o = function (t, e) {
          var _Ut, _Ut2, _Ut3, _Ut4;
          let i, n;
          return t = K.box(t), (e = K.box(e)).length < t.length ? (_Ut = Ut(t, e), _Ut2 = _slicedToArray(_Ut, 2), n = _Ut2[0], i = _Ut2[1], _Ut) : (_Ut3 = Ut(e, t), _Ut4 = _slicedToArray(_Ut3, 2), i = _Ut4[0], n = _Ut4[1], _Ut3), {
            added: i,
            removed: n
          };
        }(Mt(n.oldValue), Mt(r.target.data));
      t = o.added, e = o.removed;
    }
    return {
      additions: t ? [t] : [],
      deletions: e ? [e] : []
    };
  }
}
const Ni = function () {
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
  const e = [];
  for (const i of Array.from(t)) switch (i.nodeType) {
    case Node.TEXT_NODE:
      e.push(i.data);
      break;
    case Node.ELEMENT_NODE:
      "br" === y(i) ? e.push("\n") : e.push(...Array.from(Ni(i.childNodes) || []));
  }
  return e;
};
class Oi extends Qt {
  constructor(t) {
    super(...arguments), this.file = t;
  }
  perform(t) {
    const e = new FileReader();
    return e.onerror = () => t(!1), e.onload = () => {
      e.onerror = null;
      try {
        e.abort();
      } catch (t) {}
      return t(!0, this.file);
    }, e.readAsArrayBuffer(this.file);
  }
}
class Mi {
  constructor(t) {
    this.element = t;
  }
  shouldIgnore(t) {
    return !!o.samsungAndroid && (this.previousEvent = this.event, this.event = t, this.checkSamsungKeyboardBuggyModeStart(), this.checkSamsungKeyboardBuggyModeEnd(), this.buggyMode);
  }
  checkSamsungKeyboardBuggyModeStart() {
    this.insertingLongTextAfterUnidentifiedChar() && ji(this.element.innerText, this.event.data) && (this.buggyMode = !0, this.event.preventDefault());
  }
  checkSamsungKeyboardBuggyModeEnd() {
    this.buggyMode && "insertText" !== this.event.inputType && (this.buggyMode = !1);
  }
  insertingLongTextAfterUnidentifiedChar() {
    var t;
    return this.isBeforeInputInsertText() && this.previousEventWasUnidentifiedKeydown() && (null === (t = this.event.data) || void 0 === t ? void 0 : t.length) > 50;
  }
  isBeforeInputInsertText() {
    return "beforeinput" === this.event.type && "insertText" === this.event.inputType;
  }
  previousEventWasUnidentifiedKeydown() {
    var t, e;
    return "keydown" === (null === (t = this.previousEvent) || void 0 === t ? void 0 : t.type) && "Unidentified" === (null === (e = this.previousEvent) || void 0 === e ? void 0 : e.key);
  }
}
const ji = (t, e) => Ui(t) === Ui(e),
  Wi = new RegExp("(".concat("￼", "|").concat("\ufeff", "|").concat(" ", "|\\s)+"), "g"),
  Ui = t => t.replace(Wi, " ").trim();
class qi extends U {
  constructor(t) {
    super(...arguments), this.element = t, this.mutationObserver = new Pi(this.element), this.mutationObserver.delegate = this, this.flakyKeyboardDetector = new Mi(this.element);
    for (const t in this.constructor.events) d(t, {
      onElement: this.element,
      withCallback: this.handlerFor(t)
    });
  }
  elementDidMutate(t) {}
  editorWillSyncDocumentView() {
    return this.mutationObserver.stop();
  }
  editorDidSyncDocumentView() {
    return this.mutationObserver.start();
  }
  requestRender() {
    var t, e;
    return null === (t = this.delegate) || void 0 === t || null === (e = t.inputControllerDidRequestRender) || void 0 === e ? void 0 : e.call(t);
  }
  requestReparse() {
    var t, e;
    return null === (t = this.delegate) || void 0 === t || null === (e = t.inputControllerDidRequestReparse) || void 0 === e || e.call(t), this.requestRender();
  }
  attachFiles(t) {
    const e = Array.from(t).map(t => new Oi(t));
    return Promise.all(e).then(t => {
      this.handleInput(function () {
        var e, i;
        return null === (e = this.delegate) || void 0 === e || e.inputControllerWillAttachFiles(), null === (i = this.responder) || void 0 === i || i.insertFiles(t), this.requestRender();
      });
    });
  }
  handlerFor(t) {
    return e => {
      e.defaultPrevented || this.handleInput(() => {
        if (!f(this.element)) {
          if (this.flakyKeyboardDetector.shouldIgnore(e)) return;
          this.eventName = t, this.constructor.events[t].call(this, e);
        }
      });
    };
  }
  handleInput(t) {
    try {
      var e;
      null === (e = this.delegate) || void 0 === e || e.inputControllerWillHandleInput(), t.call(this);
    } finally {
      var i;
      null === (i = this.delegate) || void 0 === i || i.inputControllerDidHandleInput();
    }
  }
  createLinkHTML(t, e) {
    const i = document.createElement("a");
    return i.href = t, i.textContent = e || t, i.outerHTML;
  }
}
var Vi;
be(qi, "events", {});
const zi = W.browser,
  _i = W.keyNames;
let Hi = 0;
class Ji extends qi {
  constructor() {
    super(...arguments), this.resetInputSummary();
  }
  setInputSummary() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    this.inputSummary.eventName = this.eventName;
    for (const e in t) {
      const i = t[e];
      this.inputSummary[e] = i;
    }
    return this.inputSummary;
  }
  resetInputSummary() {
    this.inputSummary = {};
  }
  reset() {
    return this.resetInputSummary(), Ft.reset();
  }
  elementDidMutate(t) {
    var e, i;
    return this.isComposing() ? null === (e = this.delegate) || void 0 === e || null === (i = e.inputControllerDidAllowUnhandledInput) || void 0 === i ? void 0 : i.call(e) : this.handleInput(function () {
      return this.mutationIsSignificant(t) && (this.mutationIsExpected(t) ? this.requestRender() : this.requestReparse()), this.reset();
    });
  }
  mutationIsExpected(t) {
    let e = t.textAdded,
      i = t.textDeleted;
    if (this.inputSummary.preferDocument) return !0;
    const n = null != e ? e === this.inputSummary.textAdded : !this.inputSummary.textAdded,
      r = null != i ? this.inputSummary.didDelete : !this.inputSummary.didDelete,
      o = ["\n", " \n"].includes(e) && !n,
      s = "\n" === i && !r;
    if (o && !s || s && !o) {
      const t = this.getSelectedRange();
      if (t) {
        var a;
        const i = o ? e.replace(/\n$/, "").length || -1 : (null == e ? void 0 : e.length) || 1;
        if (null !== (a = this.responder) && void 0 !== a && a.positionIsBlockBreak(t[1] + i)) return !0;
      }
    }
    return n && r;
  }
  mutationIsSignificant(t) {
    var e;
    const i = Object.keys(t).length > 0,
      n = "" === (null === (e = this.compositionInput) || void 0 === e ? void 0 : e.getEndData());
    return i || !n;
  }
  getCompositionInput() {
    if (this.isComposing()) return this.compositionInput;
    this.compositionInput = new Yi(this);
  }
  isComposing() {
    return this.compositionInput && !this.compositionInput.isEnded();
  }
  deleteInDirection(t, e) {
    var i;
    return !1 !== (null === (i = this.responder) || void 0 === i ? void 0 : i.deleteInDirection(t)) ? this.setInputSummary({
      didDelete: !0
    }) : e ? (e.preventDefault(), this.requestRender()) : void 0;
  }
  serializeSelectionToDataTransfer(t) {
    var e;
    if (!function (t) {
      if (null == t || !t.setData) return !1;
      for (const e in vt) {
        const i = vt[e];
        try {
          if (t.setData(e, i), !t.getData(e) === i) return !1;
        } catch (t) {
          return !1;
        }
      }
      return !0;
    }(t)) return;
    const i = null === (e = this.responder) || void 0 === e ? void 0 : e.getSelectedDocument().toSerializableDocument();
    return t.setData("application/x-trix-document", JSON.stringify(i)), t.setData("text/html", ue.render(i).innerHTML), t.setData("text/plain", i.toString().replace(/\n$/, "")), !0;
  }
  canAcceptDataTransfer(t) {
    const e = {};
    return Array.from((null == t ? void 0 : t.types) || []).forEach(t => {
      e[t] = !0;
    }), e.Files || e["application/x-trix-document"] || e["text/html"] || e["text/plain"];
  }
  getPastedHTMLUsingHiddenElement(t) {
    const e = this.getSelectedRange(),
      i = {
        position: "absolute",
        left: "".concat(window.pageXOffset, "px"),
        top: "".concat(window.pageYOffset, "px"),
        opacity: 0
      },
      n = C({
        style: i,
        tagName: "div",
        editable: !0
      });
    return document.body.appendChild(n), n.focus(), requestAnimationFrame(() => {
      const i = n.innerHTML;
      return A(n), this.setSelectedRange(e), t(i);
    });
  }
}
be(Ji, "events", {
  keydown(t) {
    this.isComposing() || this.resetInputSummary(), this.inputSummary.didInput = !0;
    const e = _i[t.keyCode];
    if (e) {
      var i;
      let n = this.keys;
      ["ctrl", "alt", "shift", "meta"].forEach(e => {
        var i;
        t["".concat(e, "Key")] && ("ctrl" === e && (e = "control"), n = null === (i = n) || void 0 === i ? void 0 : i[e]);
      }), null != (null === (i = n) || void 0 === i ? void 0 : i[e]) && (this.setInputSummary({
        keyName: e
      }), Ft.reset(), n[e].call(this, t));
    }
    if (xt(t)) {
      const e = String.fromCharCode(t.keyCode).toLowerCase();
      if (e) {
        var n;
        const i = ["alt", "shift"].map(e => {
          if (t["".concat(e, "Key")]) return e;
        }).filter(t => t);
        i.push(e), null !== (n = this.delegate) && void 0 !== n && n.inputControllerDidReceiveKeyboardCommand(i) && t.preventDefault();
      }
    }
  },
  keypress(t) {
    if (null != this.inputSummary.eventName) return;
    if (t.metaKey) return;
    if (t.ctrlKey && !t.altKey) return;
    const e = $i(t);
    var i, n;
    return e ? (null === (i = this.delegate) || void 0 === i || i.inputControllerWillPerformTyping(), null === (n = this.responder) || void 0 === n || n.insertString(e), this.setInputSummary({
      textAdded: e,
      didDelete: this.selectionIsExpanded()
    })) : void 0;
  },
  textInput(t) {
    const e = t.data,
      i = this.inputSummary.textAdded;
    if (i && i !== e && i.toUpperCase() === e) {
      var n;
      const t = this.getSelectedRange();
      return this.setSelectedRange([t[0], t[1] + i.length]), null === (n = this.responder) || void 0 === n || n.insertString(e), this.setInputSummary({
        textAdded: e
      }), this.setSelectedRange(t);
    }
  },
  dragenter(t) {
    t.preventDefault();
  },
  dragstart(t) {
    var e, i;
    return this.serializeSelectionToDataTransfer(t.dataTransfer), this.draggedRange = this.getSelectedRange(), null === (e = this.delegate) || void 0 === e || null === (i = e.inputControllerDidStartDrag) || void 0 === i ? void 0 : i.call(e);
  },
  dragover(t) {
    if (this.draggedRange || this.canAcceptDataTransfer(t.dataTransfer)) {
      t.preventDefault();
      const n = {
        x: t.clientX,
        y: t.clientY
      };
      var e, i;
      if (!Rt(n, this.draggingPoint)) return this.draggingPoint = n, null === (e = this.delegate) || void 0 === e || null === (i = e.inputControllerDidReceiveDragOverPoint) || void 0 === i ? void 0 : i.call(e, this.draggingPoint);
    }
  },
  dragend(t) {
    var e, i;
    null === (e = this.delegate) || void 0 === e || null === (i = e.inputControllerDidCancelDrag) || void 0 === i || i.call(e), this.draggedRange = null, this.draggingPoint = null;
  },
  drop(t) {
    var e, i;
    t.preventDefault();
    const n = null === (e = t.dataTransfer) || void 0 === e ? void 0 : e.files,
      r = t.dataTransfer.getData("application/x-trix-document"),
      o = {
        x: t.clientX,
        y: t.clientY
      };
    if (null === (i = this.responder) || void 0 === i || i.setLocationRangeFromPointRange(o), null != n && n.length) this.attachFiles(n);else if (this.draggedRange) {
      var s, a;
      null === (s = this.delegate) || void 0 === s || s.inputControllerWillMoveText(), null === (a = this.responder) || void 0 === a || a.moveTextFromRange(this.draggedRange), this.draggedRange = null, this.requestRender();
    } else if (r) {
      var l;
      const t = je.fromJSONString(r);
      null === (l = this.responder) || void 0 === l || l.insertDocument(t), this.requestRender();
    }
    this.draggedRange = null, this.draggingPoint = null;
  },
  cut(t) {
    var e, i;
    if (null !== (e = this.responder) && void 0 !== e && e.selectionIsExpanded() && (this.serializeSelectionToDataTransfer(t.clipboardData) && t.preventDefault(), null === (i = this.delegate) || void 0 === i || i.inputControllerWillCutText(), this.deleteInDirection("backward"), t.defaultPrevented)) return this.requestRender();
  },
  copy(t) {
    var e;
    null !== (e = this.responder) && void 0 !== e && e.selectionIsExpanded() && this.serializeSelectionToDataTransfer(t.clipboardData) && t.preventDefault();
  },
  paste(t) {
    const e = t.clipboardData || t.testClipboardData,
      i = {
        clipboard: e
      };
    if (!e || Xi(t)) return void this.getPastedHTMLUsingHiddenElement(t => {
      var e, n, r;
      return i.type = "text/html", i.html = t, null === (e = this.delegate) || void 0 === e || e.inputControllerWillPaste(i), null === (n = this.responder) || void 0 === n || n.insertHTML(i.html), this.requestRender(), null === (r = this.delegate) || void 0 === r ? void 0 : r.inputControllerDidPaste(i);
    });
    const n = e.getData("URL"),
      r = e.getData("text/html"),
      o = e.getData("public.url-name");
    if (n) {
      var s, a, l;
      let t;
      i.type = "text/html", t = o ? Wt(o).trim() : n, i.html = this.createLinkHTML(n, t), null === (s = this.delegate) || void 0 === s || s.inputControllerWillPaste(i), this.setInputSummary({
        textAdded: t,
        didDelete: this.selectionIsExpanded()
      }), null === (a = this.responder) || void 0 === a || a.insertHTML(i.html), this.requestRender(), null === (l = this.delegate) || void 0 === l || l.inputControllerDidPaste(i);
    } else if (At(e)) {
      var c, h, u;
      i.type = "text/plain", i.string = e.getData("text/plain"), null === (c = this.delegate) || void 0 === c || c.inputControllerWillPaste(i), this.setInputSummary({
        textAdded: i.string,
        didDelete: this.selectionIsExpanded()
      }), null === (h = this.responder) || void 0 === h || h.insertString(i.string), this.requestRender(), null === (u = this.delegate) || void 0 === u || u.inputControllerDidPaste(i);
    } else if (r) {
      var d, g, m;
      i.type = "text/html", i.html = r, null === (d = this.delegate) || void 0 === d || d.inputControllerWillPaste(i), null === (g = this.responder) || void 0 === g || g.insertHTML(i.html), this.requestRender(), null === (m = this.delegate) || void 0 === m || m.inputControllerDidPaste(i);
    } else if (Array.from(e.types).includes("Files")) {
      var p, f, b;
      const t = null === (p = e.items) || void 0 === p || null === (f = p[0]) || void 0 === f || null === (b = f.getAsFile) || void 0 === b ? void 0 : b.call(f);
      if (t) {
        var v, A, x;
        const e = Ki(t);
        !t.name && e && (t.name = "pasted-file-".concat(++Hi, ".").concat(e)), i.type = "File", i.file = t, null === (v = this.delegate) || void 0 === v || v.inputControllerWillAttachFiles(), null === (A = this.responder) || void 0 === A || A.insertFile(i.file), this.requestRender(), null === (x = this.delegate) || void 0 === x || x.inputControllerDidPaste(i);
      }
    }
    t.preventDefault();
  },
  compositionstart(t) {
    return this.getCompositionInput().start(t.data);
  },
  compositionupdate(t) {
    return this.getCompositionInput().update(t.data);
  },
  compositionend(t) {
    return this.getCompositionInput().end(t.data);
  },
  beforeinput(t) {
    this.inputSummary.didInput = !0;
  },
  input(t) {
    return this.inputSummary.didInput = !0, t.stopPropagation();
  }
}), be(Ji, "keys", {
  backspace(t) {
    var e;
    return null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformTyping(), this.deleteInDirection("backward", t);
  },
  delete(t) {
    var e;
    return null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformTyping(), this.deleteInDirection("forward", t);
  },
  return(t) {
    var e, i;
    return this.setInputSummary({
      preferDocument: !0
    }), null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformTyping(), null === (i = this.responder) || void 0 === i ? void 0 : i.insertLineBreak();
  },
  tab(t) {
    var e, i;
    null !== (e = this.responder) && void 0 !== e && e.canIncreaseNestingLevel() && (null === (i = this.responder) || void 0 === i || i.increaseNestingLevel(), this.requestRender(), t.preventDefault());
  },
  left(t) {
    var e;
    if (this.selectionIsInCursorTarget()) return t.preventDefault(), null === (e = this.responder) || void 0 === e ? void 0 : e.moveCursorInDirection("backward");
  },
  right(t) {
    var e;
    if (this.selectionIsInCursorTarget()) return t.preventDefault(), null === (e = this.responder) || void 0 === e ? void 0 : e.moveCursorInDirection("forward");
  },
  control: {
    d(t) {
      var e;
      return null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformTyping(), this.deleteInDirection("forward", t);
    },
    h(t) {
      var e;
      return null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformTyping(), this.deleteInDirection("backward", t);
    },
    o(t) {
      var e, i;
      return t.preventDefault(), null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformTyping(), null === (i = this.responder) || void 0 === i || i.insertString("\n", {
        updatePosition: !1
      }), this.requestRender();
    }
  },
  shift: {
    return(t) {
      var e, i;
      null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformTyping(), null === (i = this.responder) || void 0 === i || i.insertString("\n"), this.requestRender(), t.preventDefault();
    },
    tab(t) {
      var e, i;
      null !== (e = this.responder) && void 0 !== e && e.canDecreaseNestingLevel() && (null === (i = this.responder) || void 0 === i || i.decreaseNestingLevel(), this.requestRender(), t.preventDefault());
    },
    left(t) {
      if (this.selectionIsInCursorTarget()) return t.preventDefault(), this.expandSelectionInDirection("backward");
    },
    right(t) {
      if (this.selectionIsInCursorTarget()) return t.preventDefault(), this.expandSelectionInDirection("forward");
    }
  },
  alt: {
    backspace(t) {
      var e;
      return this.setInputSummary({
        preferDocument: !1
      }), null === (e = this.delegate) || void 0 === e ? void 0 : e.inputControllerWillPerformTyping();
    }
  },
  meta: {
    backspace(t) {
      var e;
      return this.setInputSummary({
        preferDocument: !1
      }), null === (e = this.delegate) || void 0 === e ? void 0 : e.inputControllerWillPerformTyping();
    }
  }
}), Ji.proxyMethod("responder?.getSelectedRange"), Ji.proxyMethod("responder?.setSelectedRange"), Ji.proxyMethod("responder?.expandSelectionInDirection"), Ji.proxyMethod("responder?.selectionIsInCursorTarget"), Ji.proxyMethod("responder?.selectionIsExpanded");
const Ki = t => {
    var e, i;
    return null === (e = t.type) || void 0 === e || null === (i = e.match(/\/(\w+)$/)) || void 0 === i ? void 0 : i[1];
  },
  Gi = !(null === (Vi = " ".codePointAt) || void 0 === Vi || !Vi.call(" ", 0)),
  $i = function (t) {
    if (t.key && Gi && t.key.codePointAt(0) === t.keyCode) return t.key;
    {
      let e;
      if (null === t.which ? e = t.keyCode : 0 !== t.which && 0 !== t.charCode && (e = t.charCode), null != e && "escape" !== _i[e]) return K.fromCodepoints([e]).toString();
    }
  },
  Xi = function (t) {
    const e = t.clipboardData;
    if (e) {
      if (e.types.includes("text/html")) {
        for (const t of e.types) {
          const i = /^CorePasteboardFlavorType/.test(t),
            n = /^dyn\./.test(t) && e.getData(t);
          if (i || n) return !0;
        }
        return !1;
      }
      {
        const t = e.types.includes("com.apple.webarchive"),
          i = e.types.includes("com.apple.flat-rtfd");
        return t || i;
      }
    }
  };
class Yi extends U {
  constructor(t) {
    super(...arguments), this.inputController = t, this.responder = this.inputController.responder, this.delegate = this.inputController.delegate, this.inputSummary = this.inputController.inputSummary, this.data = {};
  }
  start(t) {
    if (this.data.start = t, this.isSignificant()) {
      var e, i;
      if ("keypress" === this.inputSummary.eventName && this.inputSummary.textAdded) null === (i = this.responder) || void 0 === i || i.deleteInDirection("left");
      this.selectionIsExpanded() || (this.insertPlaceholder(), this.requestRender()), this.range = null === (e = this.responder) || void 0 === e ? void 0 : e.getSelectedRange();
    }
  }
  update(t) {
    if (this.data.update = t, this.isSignificant()) {
      const t = this.selectPlaceholder();
      t && (this.forgetPlaceholder(), this.range = t);
    }
  }
  end(t) {
    return this.data.end = t, this.isSignificant() ? (this.forgetPlaceholder(), this.canApplyToDocument() ? (this.setInputSummary({
      preferDocument: !0,
      didInput: !1
    }), null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformTyping(), null === (i = this.responder) || void 0 === i || i.setSelectedRange(this.range), null === (n = this.responder) || void 0 === n || n.insertString(this.data.end), null === (r = this.responder) || void 0 === r ? void 0 : r.setSelectedRange(this.range[0] + this.data.end.length)) : null != this.data.start || null != this.data.update ? (this.requestReparse(), this.inputController.reset()) : void 0) : this.inputController.reset();
    var e, i, n, r;
  }
  getEndData() {
    return this.data.end;
  }
  isEnded() {
    return null != this.getEndData();
  }
  isSignificant() {
    return !zi.composesExistingText || this.inputSummary.didInput;
  }
  canApplyToDocument() {
    var t, e;
    return 0 === (null === (t = this.data.start) || void 0 === t ? void 0 : t.length) && (null === (e = this.data.end) || void 0 === e ? void 0 : e.length) > 0 && this.range;
  }
}
Yi.proxyMethod("inputController.setInputSummary"), Yi.proxyMethod("inputController.requestRender"), Yi.proxyMethod("inputController.requestReparse"), Yi.proxyMethod("responder?.selectionIsExpanded"), Yi.proxyMethod("responder?.insertPlaceholder"), Yi.proxyMethod("responder?.selectPlaceholder"), Yi.proxyMethod("responder?.forgetPlaceholder");
class Qi extends qi {
  constructor() {
    super(...arguments), this.render = this.render.bind(this);
  }
  elementDidMutate() {
    return this.scheduledRender ? this.composing ? null === (t = this.delegate) || void 0 === t || null === (e = t.inputControllerDidAllowUnhandledInput) || void 0 === e ? void 0 : e.call(t) : void 0 : this.reparse();
    var t, e;
  }
  scheduleRender() {
    return this.scheduledRender ? this.scheduledRender : this.scheduledRender = requestAnimationFrame(this.render);
  }
  render() {
    var t, e;
    (cancelAnimationFrame(this.scheduledRender), this.scheduledRender = null, this.composing) || null === (e = this.delegate) || void 0 === e || e.render();
    null === (t = this.afterRender) || void 0 === t || t.call(this), this.afterRender = null;
  }
  reparse() {
    var t;
    return null === (t = this.delegate) || void 0 === t ? void 0 : t.reparse();
  }
  insertString() {
    var t;
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      i = arguments.length > 1 ? arguments[1] : void 0;
    return null === (t = this.delegate) || void 0 === t || t.inputControllerWillPerformTyping(), this.withTargetDOMRange(function () {
      var t;
      return null === (t = this.responder) || void 0 === t ? void 0 : t.insertString(e, i);
    });
  }
  toggleAttributeIfSupported(t) {
    var e;
    if (ct().includes(t)) return null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformFormatting(t), this.withTargetDOMRange(function () {
      var e;
      return null === (e = this.responder) || void 0 === e ? void 0 : e.toggleCurrentAttribute(t);
    });
  }
  activateAttributeIfSupported(t, e) {
    var i;
    if (ct().includes(t)) return null === (i = this.delegate) || void 0 === i || i.inputControllerWillPerformFormatting(t), this.withTargetDOMRange(function () {
      var i;
      return null === (i = this.responder) || void 0 === i ? void 0 : i.setCurrentAttribute(t, e);
    });
  }
  deleteInDirection(t) {
    let _ref21 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        recordUndoEntry: !0
      },
      e = _ref21.recordUndoEntry;
    var i;
    e && (null === (i = this.delegate) || void 0 === i || i.inputControllerWillPerformTyping());
    const n = () => {
        var e;
        return null === (e = this.responder) || void 0 === e ? void 0 : e.deleteInDirection(t);
      },
      r = this.getTargetDOMRange({
        minLength: 2
      });
    return r ? this.withTargetDOMRange(r, n) : n();
  }
  withTargetDOMRange(t, e) {
    var i;
    return "function" == typeof t && (e = t, t = this.getTargetDOMRange()), t ? null === (i = this.responder) || void 0 === i ? void 0 : i.withTargetDOMRange(t, e.bind(this)) : (Ft.reset(), e.call(this));
  }
  getTargetDOMRange() {
    var t, e;
    let _ref22 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
        minLength: 0
      },
      i = _ref22.minLength;
    const n = null === (t = (e = this.event).getTargetRanges) || void 0 === t ? void 0 : t.call(e);
    if (n && n.length) {
      const t = Zi(n[0]);
      if (0 === i || t.toString().length >= i) return t;
    }
  }
  withEvent(t, e) {
    let i;
    this.event = t;
    try {
      i = e.call(this);
    } finally {
      this.event = null;
    }
    return i;
  }
}
be(Qi, "events", {
  keydown(t) {
    if (xt(t)) {
      var e;
      const i = rn(t);
      null !== (e = this.delegate) && void 0 !== e && e.inputControllerDidReceiveKeyboardCommand(i) && t.preventDefault();
    } else {
      let e = t.key;
      t.altKey && (e += "+Alt"), t.shiftKey && (e += "+Shift");
      const i = this.constructor.keys[e];
      if (i) return this.withEvent(t, i);
    }
  },
  paste(t) {
    var e;
    let i;
    const n = null === (e = t.clipboardData) || void 0 === e ? void 0 : e.getData("URL");
    return en(t) ? (t.preventDefault(), this.attachFiles(t.clipboardData.files)) : nn(t) ? (t.preventDefault(), i = {
      type: "text/plain",
      string: t.clipboardData.getData("text/plain")
    }, null === (r = this.delegate) || void 0 === r || r.inputControllerWillPaste(i), null === (o = this.responder) || void 0 === o || o.insertString(i.string), this.render(), null === (s = this.delegate) || void 0 === s ? void 0 : s.inputControllerDidPaste(i)) : n ? (t.preventDefault(), i = {
      type: "text/html",
      html: this.createLinkHTML(n)
    }, null === (a = this.delegate) || void 0 === a || a.inputControllerWillPaste(i), null === (l = this.responder) || void 0 === l || l.insertHTML(i.html), this.render(), null === (c = this.delegate) || void 0 === c ? void 0 : c.inputControllerDidPaste(i)) : void 0;
    var r, o, s, a, l, c;
  },
  beforeinput(t) {
    const e = this.constructor.inputTypes[t.inputType];
    e && (this.withEvent(t, e), this.scheduleRender());
  },
  input(t) {
    Ft.reset();
  },
  dragstart(t) {
    var e, i;
    null !== (e = this.responder) && void 0 !== e && e.selectionContainsAttachments() && (t.dataTransfer.setData("application/x-trix-dragging", !0), this.dragging = {
      range: null === (i = this.responder) || void 0 === i ? void 0 : i.getSelectedRange(),
      point: on(t)
    });
  },
  dragenter(t) {
    tn(t) && t.preventDefault();
  },
  dragover(t) {
    if (this.dragging) {
      t.preventDefault();
      const i = on(t);
      var e;
      if (!Rt(i, this.dragging.point)) return this.dragging.point = i, null === (e = this.responder) || void 0 === e ? void 0 : e.setLocationRangeFromPointRange(i);
    } else tn(t) && t.preventDefault();
  },
  drop(t) {
    var e, i;
    if (this.dragging) return t.preventDefault(), null === (e = this.delegate) || void 0 === e || e.inputControllerWillMoveText(), null === (i = this.responder) || void 0 === i || i.moveTextFromRange(this.dragging.range), this.dragging = null, this.scheduleRender();
    if (tn(t)) {
      var n;
      t.preventDefault();
      const e = on(t);
      return null === (n = this.responder) || void 0 === n || n.setLocationRangeFromPointRange(e), this.attachFiles(t.dataTransfer.files);
    }
  },
  dragend() {
    var t;
    this.dragging && (null === (t = this.responder) || void 0 === t || t.setSelectedRange(this.dragging.range), this.dragging = null);
  },
  compositionend(t) {
    this.composing && (this.composing = !1, o.recentAndroid || this.scheduleRender());
  }
}), be(Qi, "keys", {
  ArrowLeft() {
    var t, e;
    if (null !== (t = this.responder) && void 0 !== t && t.shouldManageMovingCursorInDirection("backward")) return this.event.preventDefault(), null === (e = this.responder) || void 0 === e ? void 0 : e.moveCursorInDirection("backward");
  },
  ArrowRight() {
    var t, e;
    if (null !== (t = this.responder) && void 0 !== t && t.shouldManageMovingCursorInDirection("forward")) return this.event.preventDefault(), null === (e = this.responder) || void 0 === e ? void 0 : e.moveCursorInDirection("forward");
  },
  Backspace() {
    var t, e, i;
    if (null !== (t = this.responder) && void 0 !== t && t.shouldManageDeletingInDirection("backward")) return this.event.preventDefault(), null === (e = this.delegate) || void 0 === e || e.inputControllerWillPerformTyping(), null === (i = this.responder) || void 0 === i || i.deleteInDirection("backward"), this.render();
  },
  Tab() {
    var t, e;
    if (null !== (t = this.responder) && void 0 !== t && t.canIncreaseNestingLevel()) return this.event.preventDefault(), null === (e = this.responder) || void 0 === e || e.increaseNestingLevel(), this.render();
  },
  "Tab+Shift"() {
    var t, e;
    if (null !== (t = this.responder) && void 0 !== t && t.canDecreaseNestingLevel()) return this.event.preventDefault(), null === (e = this.responder) || void 0 === e || e.decreaseNestingLevel(), this.render();
  }
}), be(Qi, "inputTypes", {
  deleteByComposition() {
    return this.deleteInDirection("backward", {
      recordUndoEntry: !1
    });
  },
  deleteByCut() {
    return this.deleteInDirection("backward");
  },
  deleteByDrag() {
    return this.event.preventDefault(), this.withTargetDOMRange(function () {
      var t;
      this.deleteByDragRange = null === (t = this.responder) || void 0 === t ? void 0 : t.getSelectedRange();
    });
  },
  deleteCompositionText() {
    return this.deleteInDirection("backward", {
      recordUndoEntry: !1
    });
  },
  deleteContent() {
    return this.deleteInDirection("backward");
  },
  deleteContentBackward() {
    return this.deleteInDirection("backward");
  },
  deleteContentForward() {
    return this.deleteInDirection("forward");
  },
  deleteEntireSoftLine() {
    return this.deleteInDirection("forward");
  },
  deleteHardLineBackward() {
    return this.deleteInDirection("backward");
  },
  deleteHardLineForward() {
    return this.deleteInDirection("forward");
  },
  deleteSoftLineBackward() {
    return this.deleteInDirection("backward");
  },
  deleteSoftLineForward() {
    return this.deleteInDirection("forward");
  },
  deleteWordBackward() {
    return this.deleteInDirection("backward");
  },
  deleteWordForward() {
    return this.deleteInDirection("forward");
  },
  formatBackColor() {
    return this.activateAttributeIfSupported("backgroundColor", this.event.data);
  },
  formatBold() {
    return this.toggleAttributeIfSupported("bold");
  },
  formatFontColor() {
    return this.activateAttributeIfSupported("color", this.event.data);
  },
  formatFontName() {
    return this.activateAttributeIfSupported("font", this.event.data);
  },
  formatIndent() {
    var t;
    if (null !== (t = this.responder) && void 0 !== t && t.canIncreaseNestingLevel()) return this.withTargetDOMRange(function () {
      var t;
      return null === (t = this.responder) || void 0 === t ? void 0 : t.increaseNestingLevel();
    });
  },
  formatItalic() {
    return this.toggleAttributeIfSupported("italic");
  },
  formatJustifyCenter() {
    return this.toggleAttributeIfSupported("justifyCenter");
  },
  formatJustifyFull() {
    return this.toggleAttributeIfSupported("justifyFull");
  },
  formatJustifyLeft() {
    return this.toggleAttributeIfSupported("justifyLeft");
  },
  formatJustifyRight() {
    return this.toggleAttributeIfSupported("justifyRight");
  },
  formatOutdent() {
    var t;
    if (null !== (t = this.responder) && void 0 !== t && t.canDecreaseNestingLevel()) return this.withTargetDOMRange(function () {
      var t;
      return null === (t = this.responder) || void 0 === t ? void 0 : t.decreaseNestingLevel();
    });
  },
  formatRemove() {
    this.withTargetDOMRange(function () {
      for (const i in null === (t = this.responder) || void 0 === t ? void 0 : t.getCurrentAttributes()) {
        var t, e;
        null === (e = this.responder) || void 0 === e || e.removeCurrentAttribute(i);
      }
    });
  },
  formatSetBlockTextDirection() {
    return this.activateAttributeIfSupported("blockDir", this.event.data);
  },
  formatSetInlineTextDirection() {
    return this.activateAttributeIfSupported("textDir", this.event.data);
  },
  formatStrikeThrough() {
    return this.toggleAttributeIfSupported("strike");
  },
  formatSubscript() {
    return this.toggleAttributeIfSupported("sub");
  },
  formatSuperscript() {
    return this.toggleAttributeIfSupported("sup");
  },
  formatUnderline() {
    return this.toggleAttributeIfSupported("underline");
  },
  historyRedo() {
    var t;
    return null === (t = this.delegate) || void 0 === t ? void 0 : t.inputControllerWillPerformRedo();
  },
  historyUndo() {
    var t;
    return null === (t = this.delegate) || void 0 === t ? void 0 : t.inputControllerWillPerformUndo();
  },
  insertCompositionText() {
    return this.composing = !0, this.insertString(this.event.data);
  },
  insertFromComposition() {
    return this.composing = !1, this.insertString(this.event.data);
  },
  insertFromDrop() {
    const t = this.deleteByDragRange;
    var e;
    if (t) return this.deleteByDragRange = null, null === (e = this.delegate) || void 0 === e || e.inputControllerWillMoveText(), this.withTargetDOMRange(function () {
      var e;
      return null === (e = this.responder) || void 0 === e ? void 0 : e.moveTextFromRange(t);
    });
  },
  insertFromPaste() {
    var t;
    const e = this.event.dataTransfer,
      i = {
        dataTransfer: e
      },
      n = e.getData("URL"),
      r = e.getData("text/html");
    if (n) {
      var o;
      let t;
      this.event.preventDefault(), i.type = "text/html";
      const r = e.getData("public.url-name");
      t = r ? Wt(r).trim() : n, i.html = this.createLinkHTML(n, t), null === (o = this.delegate) || void 0 === o || o.inputControllerWillPaste(i), this.withTargetDOMRange(function () {
        var t;
        return null === (t = this.responder) || void 0 === t ? void 0 : t.insertHTML(i.html);
      }), this.afterRender = () => {
        var t;
        return null === (t = this.delegate) || void 0 === t ? void 0 : t.inputControllerDidPaste(i);
      };
    } else if (At(e)) {
      var s;
      i.type = "text/plain", i.string = e.getData("text/plain"), null === (s = this.delegate) || void 0 === s || s.inputControllerWillPaste(i), this.withTargetDOMRange(function () {
        var t;
        return null === (t = this.responder) || void 0 === t ? void 0 : t.insertString(i.string);
      }), this.afterRender = () => {
        var t;
        return null === (t = this.delegate) || void 0 === t ? void 0 : t.inputControllerDidPaste(i);
      };
    } else if (r) {
      var a;
      this.event.preventDefault(), i.type = "text/html", i.html = r, null === (a = this.delegate) || void 0 === a || a.inputControllerWillPaste(i), this.withTargetDOMRange(function () {
        var t;
        return null === (t = this.responder) || void 0 === t ? void 0 : t.insertHTML(i.html);
      }), this.afterRender = () => {
        var t;
        return null === (t = this.delegate) || void 0 === t ? void 0 : t.inputControllerDidPaste(i);
      };
    } else if (null !== (t = e.files) && void 0 !== t && t.length) {
      var l;
      i.type = "File", i.file = e.files[0], null === (l = this.delegate) || void 0 === l || l.inputControllerWillPaste(i), this.withTargetDOMRange(function () {
        var t;
        return null === (t = this.responder) || void 0 === t ? void 0 : t.insertFile(i.file);
      }), this.afterRender = () => {
        var t;
        return null === (t = this.delegate) || void 0 === t ? void 0 : t.inputControllerDidPaste(i);
      };
    }
  },
  insertFromYank() {
    return this.insertString(this.event.data);
  },
  insertLineBreak() {
    return this.insertString("\n");
  },
  insertLink() {
    return this.activateAttributeIfSupported("href", this.event.data);
  },
  insertOrderedList() {
    return this.toggleAttributeIfSupported("number");
  },
  insertParagraph() {
    var t;
    return null === (t = this.delegate) || void 0 === t || t.inputControllerWillPerformTyping(), this.withTargetDOMRange(function () {
      var t;
      return null === (t = this.responder) || void 0 === t ? void 0 : t.insertLineBreak();
    });
  },
  insertReplacementText() {
    return this.insertString(this.event.dataTransfer.getData("text/plain"), {
      updatePosition: !1
    });
  },
  insertText() {
    var t;
    return this.insertString(this.event.data || (null === (t = this.event.dataTransfer) || void 0 === t ? void 0 : t.getData("text/plain")));
  },
  insertTranspose() {
    return this.insertString(this.event.data);
  },
  insertUnorderedList() {
    return this.toggleAttributeIfSupported("bullet");
  }
});
const Zi = function (t) {
    const e = document.createRange();
    return e.setStart(t.startContainer, t.startOffset), e.setEnd(t.endContainer, t.endOffset), e;
  },
  tn = t => {
    var e;
    return Array.from((null === (e = t.dataTransfer) || void 0 === e ? void 0 : e.types) || []).includes("Files");
  },
  en = function (t) {
    const e = t.clipboardData;
    if (e) return e.types.includes("Files") && 1 === e.types.length && e.files.length >= 1;
  },
  nn = function (t) {
    const e = t.clipboardData;
    if (e) return e.types.includes("text/plain") && 1 === e.types.length;
  },
  rn = function (t) {
    const e = [];
    return t.altKey && e.push("alt"), t.shiftKey && e.push("shift"), e.push(t.key), e;
  },
  on = t => ({
    x: t.clientX,
    y: t.clientY
  }),
  sn = "".concat("[data-trix-attribute]", ", ").concat("[data-trix-action]"),
  an = "".concat("[data-trix-dialog]", "[data-trix-active]"),
  ln = "".concat("[data-trix-dialog]", " [data-trix-method]"),
  cn = "".concat("[data-trix-dialog]", " [data-trix-input]"),
  hn = (t, e) => (e || (e = dn(t)), t.querySelector("[data-trix-input][name='".concat(e, "']"))),
  un = t => t.getAttribute("data-trix-action"),
  dn = t => t.getAttribute("data-trix-attribute") || t.getAttribute("data-trix-dialog-attribute");
class gn extends U {
  constructor(t) {
    super(t), this.didClickActionButton = this.didClickActionButton.bind(this), this.didClickAttributeButton = this.didClickAttributeButton.bind(this), this.didClickDialogButton = this.didClickDialogButton.bind(this), this.didKeyDownDialogInput = this.didKeyDownDialogInput.bind(this), this.element = t, this.attributes = {}, this.actions = {}, this.resetDialogInputs(), d("mousedown", {
      onElement: this.element,
      matchingSelector: "[data-trix-action]",
      withCallback: this.didClickActionButton
    }), d("mousedown", {
      onElement: this.element,
      matchingSelector: "[data-trix-attribute]",
      withCallback: this.didClickAttributeButton
    }), d("click", {
      onElement: this.element,
      matchingSelector: sn,
      preventDefault: !0
    }), d("click", {
      onElement: this.element,
      matchingSelector: ln,
      withCallback: this.didClickDialogButton
    }), d("keydown", {
      onElement: this.element,
      matchingSelector: cn,
      withCallback: this.didKeyDownDialogInput
    });
  }
  didClickActionButton(t, e) {
    var i;
    null === (i = this.delegate) || void 0 === i || i.toolbarDidClickButton(), t.preventDefault();
    const n = un(e);
    return this.getDialog(n) ? this.toggleDialog(n) : null === (r = this.delegate) || void 0 === r ? void 0 : r.toolbarDidInvokeAction(n);
    var r;
  }
  didClickAttributeButton(t, e) {
    var i;
    null === (i = this.delegate) || void 0 === i || i.toolbarDidClickButton(), t.preventDefault();
    const n = dn(e);
    var r;
    this.getDialog(n) ? this.toggleDialog(n) : null === (r = this.delegate) || void 0 === r || r.toolbarDidToggleAttribute(n);
    return this.refreshAttributeButtons();
  }
  didClickDialogButton(t, e) {
    const i = p(e, {
      matchingSelector: "[data-trix-dialog]"
    });
    return this[e.getAttribute("data-trix-method")].call(this, i);
  }
  didKeyDownDialogInput(t, e) {
    if (13 === t.keyCode) {
      t.preventDefault();
      const i = e.getAttribute("name"),
        n = this.getDialog(i);
      this.setAttribute(n);
    }
    if (27 === t.keyCode) return t.preventDefault(), this.hideDialog();
  }
  updateActions(t) {
    return this.actions = t, this.refreshActionButtons();
  }
  refreshActionButtons() {
    return this.eachActionButton((t, e) => {
      t.disabled = !1 === this.actions[e];
    });
  }
  eachActionButton(t) {
    return Array.from(this.element.querySelectorAll("[data-trix-action]")).map(e => t(e, un(e)));
  }
  updateAttributes(t) {
    return this.attributes = t, this.refreshAttributeButtons();
  }
  refreshAttributeButtons() {
    return this.eachAttributeButton((t, e) => (t.disabled = !1 === this.attributes[e], this.attributes[e] || this.dialogIsVisible(e) ? (t.setAttribute("data-trix-active", ""), t.classList.add("trix-active")) : (t.removeAttribute("data-trix-active"), t.classList.remove("trix-active"))));
  }
  eachAttributeButton(t) {
    return Array.from(this.element.querySelectorAll("[data-trix-attribute]")).map(e => t(e, dn(e)));
  }
  applyKeyboardCommand(t) {
    const e = JSON.stringify(t.sort());
    for (const t of Array.from(this.element.querySelectorAll("[data-trix-key]"))) {
      const i = t.getAttribute("data-trix-key").split("+");
      if (JSON.stringify(i.sort()) === e) return g("mousedown", {
        onElement: t
      }), !0;
    }
    return !1;
  }
  dialogIsVisible(t) {
    const e = this.getDialog(t);
    if (e) return e.hasAttribute("data-trix-active");
  }
  toggleDialog(t) {
    return this.dialogIsVisible(t) ? this.hideDialog() : this.showDialog(t);
  }
  showDialog(t) {
    var e, i;
    this.hideDialog(), null === (e = this.delegate) || void 0 === e || e.toolbarWillShowDialog();
    const n = this.getDialog(t);
    n.setAttribute("data-trix-active", ""), n.classList.add("trix-active"), Array.from(n.querySelectorAll("input[disabled]")).forEach(t => {
      t.removeAttribute("disabled");
    });
    const r = dn(n);
    if (r) {
      const e = hn(n, t);
      e && (e.value = this.attributes[r] || "", e.select());
    }
    return null === (i = this.delegate) || void 0 === i ? void 0 : i.toolbarDidShowDialog(t);
  }
  setAttribute(t) {
    const e = dn(t),
      i = hn(t, e);
    return i.willValidate && !i.checkValidity() ? (i.setAttribute("data-trix-validate", ""), i.classList.add("trix-validate"), i.focus()) : (null === (n = this.delegate) || void 0 === n || n.toolbarDidUpdateAttribute(e, i.value), this.hideDialog());
    var n;
  }
  removeAttribute(t) {
    var e;
    const i = dn(t);
    return null === (e = this.delegate) || void 0 === e || e.toolbarDidRemoveAttribute(i), this.hideDialog();
  }
  hideDialog() {
    const t = this.element.querySelector(an);
    var e;
    if (t) return t.removeAttribute("data-trix-active"), t.classList.remove("trix-active"), this.resetDialogInputs(), null === (e = this.delegate) || void 0 === e ? void 0 : e.toolbarDidHideDialog((t => t.getAttribute("data-trix-dialog"))(t));
  }
  resetDialogInputs() {
    Array.from(this.element.querySelectorAll(cn)).forEach(t => {
      t.setAttribute("disabled", "disabled"), t.removeAttribute("data-trix-validate"), t.classList.remove("trix-validate");
    });
  }
  getDialog(t) {
    return this.element.querySelector("[data-trix-dialog=".concat(t, "]"));
  }
}
class mn extends Fi {
  constructor(t) {
    let e = t.editorElement,
      i = t.document,
      n = t.html;
    super(...arguments), this.editorElement = e, this.selectionManager = new Ci(this.editorElement), this.selectionManager.delegate = this, this.composition = new ci(), this.composition.delegate = this, this.attachmentManager = new ai(this.composition.getAttachments()), this.attachmentManager.delegate = this, this.inputController = 2 === P.getLevel() ? new Qi(this.editorElement) : new Ji(this.editorElement), this.inputController.delegate = this, this.inputController.responder = this.composition, this.compositionController = new Ti(this.editorElement, this.composition), this.compositionController.delegate = this, this.toolbarController = new gn(this.editorElement.toolbarElement), this.toolbarController.delegate = this, this.editor = new pi(this.composition, this.selectionManager, this.editorElement), i ? this.editor.loadDocument(i) : this.editor.loadHTML(n);
  }
  registerSelectionManager() {
    return Ft.registerSelectionManager(this.selectionManager);
  }
  unregisterSelectionManager() {
    return Ft.unregisterSelectionManager(this.selectionManager);
  }
  render() {
    return this.compositionController.render();
  }
  reparse() {
    return this.composition.replaceHTML(this.editorElement.innerHTML);
  }
  compositionDidChangeDocument(t) {
    if (this.notifyEditorElement("document-change"), !this.handlingInput) return this.render();
  }
  compositionDidChangeCurrentAttributes(t) {
    return this.currentAttributes = t, this.toolbarController.updateAttributes(this.currentAttributes), this.updateCurrentActions(), this.notifyEditorElement("attributes-change", {
      attributes: this.currentAttributes
    });
  }
  compositionDidPerformInsertionAtRange(t) {
    this.pasting && (this.pastedRange = t);
  }
  compositionShouldAcceptFile(t) {
    return this.notifyEditorElement("file-accept", {
      file: t
    });
  }
  compositionDidAddAttachment(t) {
    const e = this.attachmentManager.manageAttachment(t);
    return this.notifyEditorElement("attachment-add", {
      attachment: e
    });
  }
  compositionDidEditAttachment(t) {
    this.compositionController.rerenderViewForObject(t);
    const e = this.attachmentManager.manageAttachment(t);
    return this.notifyEditorElement("attachment-edit", {
      attachment: e
    }), this.notifyEditorElement("change");
  }
  compositionDidChangeAttachmentPreviewURL(t) {
    return this.compositionController.invalidateViewForObject(t), this.notifyEditorElement("change");
  }
  compositionDidRemoveAttachment(t) {
    const e = this.attachmentManager.unmanageAttachment(t);
    return this.notifyEditorElement("attachment-remove", {
      attachment: e
    });
  }
  compositionDidStartEditingAttachment(t, e) {
    return this.attachmentLocationRange = this.composition.document.getLocationRangeOfAttachment(t), this.compositionController.installAttachmentEditorForAttachment(t, e), this.selectionManager.setLocationRange(this.attachmentLocationRange);
  }
  compositionDidStopEditingAttachment(t) {
    this.compositionController.uninstallAttachmentEditor(), this.attachmentLocationRange = null;
  }
  compositionDidRequestChangingSelectionToLocationRange(t) {
    if (!this.loadingSnapshot || this.isFocused()) return this.requestedLocationRange = t, this.compositionRevisionWhenLocationRangeRequested = this.composition.revision, this.handlingInput ? void 0 : this.render();
  }
  compositionWillLoadSnapshot() {
    this.loadingSnapshot = !0;
  }
  compositionDidLoadSnapshot() {
    this.compositionController.refreshViewCache(), this.render(), this.loadingSnapshot = !1;
  }
  getSelectionManager() {
    return this.selectionManager;
  }
  attachmentManagerDidRequestRemovalOfAttachment(t) {
    return this.removeAttachment(t);
  }
  compositionControllerWillSyncDocumentView() {
    return this.inputController.editorWillSyncDocumentView(), this.selectionManager.lock(), this.selectionManager.clearSelection();
  }
  compositionControllerDidSyncDocumentView() {
    return this.inputController.editorDidSyncDocumentView(), this.selectionManager.unlock(), this.updateCurrentActions(), this.notifyEditorElement("sync");
  }
  compositionControllerDidRender() {
    this.requestedLocationRange && (this.compositionRevisionWhenLocationRangeRequested === this.composition.revision && this.selectionManager.setLocationRange(this.requestedLocationRange), this.requestedLocationRange = null, this.compositionRevisionWhenLocationRangeRequested = null), this.renderedCompositionRevision !== this.composition.revision && (this.runEditorFilters(), this.composition.updateCurrentAttributes(), this.notifyEditorElement("render")), this.renderedCompositionRevision = this.composition.revision;
  }
  compositionControllerDidFocus() {
    return this.isFocusedInvisibly() && this.setLocationRange({
      index: 0,
      offset: 0
    }), this.toolbarController.hideDialog(), this.notifyEditorElement("focus");
  }
  compositionControllerDidBlur() {
    return this.notifyEditorElement("blur");
  }
  compositionControllerDidSelectAttachment(t, e) {
    return this.toolbarController.hideDialog(), this.composition.editAttachment(t, e);
  }
  compositionControllerDidRequestDeselectingAttachment(t) {
    const e = this.attachmentLocationRange || this.composition.document.getLocationRangeOfAttachment(t);
    return this.selectionManager.setLocationRange(e[1]);
  }
  compositionControllerWillUpdateAttachment(t) {
    return this.editor.recordUndoEntry("Edit Attachment", {
      context: t.id,
      consolidatable: !0
    });
  }
  compositionControllerDidRequestRemovalOfAttachment(t) {
    return this.removeAttachment(t);
  }
  inputControllerWillHandleInput() {
    this.handlingInput = !0, this.requestedRender = !1;
  }
  inputControllerDidRequestRender() {
    this.requestedRender = !0;
  }
  inputControllerDidHandleInput() {
    if (this.handlingInput = !1, this.requestedRender) return this.requestedRender = !1, this.render();
  }
  inputControllerDidAllowUnhandledInput() {
    return this.notifyEditorElement("change");
  }
  inputControllerDidRequestReparse() {
    return this.reparse();
  }
  inputControllerWillPerformTyping() {
    return this.recordTypingUndoEntry();
  }
  inputControllerWillPerformFormatting(t) {
    return this.recordFormattingUndoEntry(t);
  }
  inputControllerWillCutText() {
    return this.editor.recordUndoEntry("Cut");
  }
  inputControllerWillPaste(t) {
    return this.editor.recordUndoEntry("Paste"), this.pasting = !0, this.notifyEditorElement("before-paste", {
      paste: t
    });
  }
  inputControllerDidPaste(t) {
    return t.range = this.pastedRange, this.pastedRange = null, this.pasting = null, this.notifyEditorElement("paste", {
      paste: t
    });
  }
  inputControllerWillMoveText() {
    return this.editor.recordUndoEntry("Move");
  }
  inputControllerWillAttachFiles() {
    return this.editor.recordUndoEntry("Drop Files");
  }
  inputControllerWillPerformUndo() {
    return this.editor.undo();
  }
  inputControllerWillPerformRedo() {
    return this.editor.redo();
  }
  inputControllerDidReceiveKeyboardCommand(t) {
    return this.toolbarController.applyKeyboardCommand(t);
  }
  inputControllerDidStartDrag() {
    this.locationRangeBeforeDrag = this.selectionManager.getLocationRange();
  }
  inputControllerDidReceiveDragOverPoint(t) {
    return this.selectionManager.setLocationRangeFromPointRange(t);
  }
  inputControllerDidCancelDrag() {
    this.selectionManager.setLocationRange(this.locationRangeBeforeDrag), this.locationRangeBeforeDrag = null;
  }
  locationRangeDidChange(t) {
    return this.composition.updateCurrentAttributes(), this.updateCurrentActions(), this.attachmentLocationRange && !kt(this.attachmentLocationRange, t) && this.composition.stopEditingAttachment(), this.notifyEditorElement("selection-change");
  }
  toolbarDidClickButton() {
    if (!this.getLocationRange()) return this.setLocationRange({
      index: 0,
      offset: 0
    });
  }
  toolbarDidInvokeAction(t) {
    return this.invokeAction(t);
  }
  toolbarDidToggleAttribute(t) {
    if (this.recordFormattingUndoEntry(t), this.composition.toggleCurrentAttribute(t), this.render(), !this.selectionFrozen) return this.editorElement.focus();
  }
  toolbarDidUpdateAttribute(t, e) {
    if (this.recordFormattingUndoEntry(t), this.composition.setCurrentAttribute(t, e), this.render(), !this.selectionFrozen) return this.editorElement.focus();
  }
  toolbarDidRemoveAttribute(t) {
    if (this.recordFormattingUndoEntry(t), this.composition.removeCurrentAttribute(t), this.render(), !this.selectionFrozen) return this.editorElement.focus();
  }
  toolbarWillShowDialog(t) {
    return this.composition.expandSelectionForEditing(), this.freezeSelection();
  }
  toolbarDidShowDialog(t) {
    return this.notifyEditorElement("toolbar-dialog-show", {
      dialogName: t
    });
  }
  toolbarDidHideDialog(t) {
    return this.thawSelection(), this.editorElement.focus(), this.notifyEditorElement("toolbar-dialog-hide", {
      dialogName: t
    });
  }
  freezeSelection() {
    if (!this.selectionFrozen) return this.selectionManager.lock(), this.composition.freezeSelection(), this.selectionFrozen = !0, this.render();
  }
  thawSelection() {
    if (this.selectionFrozen) return this.composition.thawSelection(), this.selectionManager.unlock(), this.selectionFrozen = !1, this.render();
  }
  canInvokeAction(t) {
    return !!this.actionIsExternal(t) || !(null === (e = this.actions[t]) || void 0 === e || null === (i = e.test) || void 0 === i || !i.call(this));
    var e, i;
  }
  invokeAction(t) {
    return this.actionIsExternal(t) ? this.notifyEditorElement("action-invoke", {
      actionName: t
    }) : null === (e = this.actions[t]) || void 0 === e || null === (i = e.perform) || void 0 === i ? void 0 : i.call(this);
    var e, i;
  }
  actionIsExternal(t) {
    return /^x-./.test(t);
  }
  getCurrentActions() {
    const t = {};
    for (const e in this.actions) t[e] = this.canInvokeAction(e);
    return t;
  }
  updateCurrentActions() {
    const t = this.getCurrentActions();
    if (!Rt(t, this.currentActions)) return this.currentActions = t, this.toolbarController.updateActions(this.currentActions), this.notifyEditorElement("actions-change", {
      actions: this.currentActions
    });
  }
  runEditorFilters() {
    let t = this.composition.getSnapshot();
    if (Array.from(this.editor.filters).forEach(e => {
      const _t18 = t,
        i = _t18.document,
        n = _t18.selectedRange;
      t = e.call(this.editor, t) || {}, t.document || (t.document = i), t.selectedRange || (t.selectedRange = n);
    }), e = t, i = this.composition.getSnapshot(), !kt(e.selectedRange, i.selectedRange) || !e.document.isEqualTo(i.document)) return this.composition.loadSnapshot(t);
    var e, i;
  }
  updateInputElement() {
    const t = function (t, e) {
      const i = ri[e];
      if (i) return i(t);
      throw new Error("unknown content type: ".concat(e));
    }(this.compositionController.getSerializableElement(), "text/html");
    return this.editorElement.setInputElementValue(t);
  }
  notifyEditorElement(t, e) {
    switch (t) {
      case "document-change":
        this.documentChangedSinceLastRender = !0;
        break;
      case "render":
        this.documentChangedSinceLastRender && (this.documentChangedSinceLastRender = !1, this.notifyEditorElement("change"));
        break;
      case "change":
      case "attachment-add":
      case "attachment-edit":
      case "attachment-remove":
        this.updateInputElement();
    }
    return this.editorElement.notify(t, e);
  }
  removeAttachment(t) {
    return this.editor.recordUndoEntry("Delete Attachment"), this.composition.removeAttachment(t), this.render();
  }
  recordFormattingUndoEntry(t) {
    const e = ht(t),
      i = this.selectionManager.getLocationRange();
    if (e || !St(i)) return this.editor.recordUndoEntry("Formatting", {
      context: this.getUndoContext(),
      consolidatable: !0
    });
  }
  recordTypingUndoEntry() {
    return this.editor.recordUndoEntry("Typing", {
      context: this.getUndoContext(this.currentAttributes),
      consolidatable: !0
    });
  }
  getUndoContext() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
    return [this.getLocationContext(), this.getTimeContext(), ...Array.from(e)];
  }
  getLocationContext() {
    const t = this.selectionManager.getLocationRange();
    return St(t) ? t[0].index : t;
  }
  getTimeContext() {
    return j.interval > 0 ? Math.floor(new Date().getTime() / j.interval) : 0;
  }
  isFocused() {
    var t;
    return this.editorElement === (null === (t = this.editorElement.ownerDocument) || void 0 === t ? void 0 : t.activeElement);
  }
  isFocusedInvisibly() {
    return this.isFocused() && !this.getLocationRange();
  }
  get actions() {
    return this.constructor.actions;
  }
}
be(mn, "actions", {
  undo: {
    test() {
      return this.editor.canUndo();
    },
    perform() {
      return this.editor.undo();
    }
  },
  redo: {
    test() {
      return this.editor.canRedo();
    },
    perform() {
      return this.editor.redo();
    }
  },
  link: {
    test() {
      return this.editor.canActivateAttribute("href");
    }
  },
  increaseNestingLevel: {
    test() {
      return this.editor.canIncreaseNestingLevel();
    },
    perform() {
      return this.editor.increaseNestingLevel() && this.render();
    }
  },
  decreaseNestingLevel: {
    test() {
      return this.editor.canDecreaseNestingLevel();
    },
    perform() {
      return this.editor.decreaseNestingLevel() && this.render();
    }
  },
  attachFiles: {
    test: () => !0,
    perform() {
      return P.pickFiles(this.editor.insertFiles);
    }
  }
}), mn.proxyMethod("getSelectionManager().setLocationRange"), mn.proxyMethod("getSelectionManager().getLocationRange");
var pn = Object.freeze({
    __proto__: null,
    AttachmentEditorController: wi,
    CompositionController: Ti,
    Controller: Fi,
    EditorController: mn,
    InputController: qi,
    Level0InputController: Ji,
    Level2InputController: Qi,
    ToolbarController: gn
  }),
  fn = Object.freeze({
    __proto__: null,
    MutationObserver: Pi,
    SelectionChangeObserver: wt
  }),
  bn = Object.freeze({
    __proto__: null,
    FileVerificationOperation: Oi,
    ImagePreloadOperation: Ae
  });
mt("trix-toolbar", "%t {\n  display: block;\n}\n\n%t {\n  white-space: nowrap;\n}\n\n%t [data-trix-dialog] {\n  display: none;\n}\n\n%t [data-trix-dialog][data-trix-active] {\n  display: block;\n}\n\n%t [data-trix-dialog] [data-trix-validate]:invalid {\n  background-color: #ffdddd;\n}");
class vn extends HTMLElement {
  connectedCallback() {
    "" === this.innerHTML && (this.innerHTML = M.getDefaultHTML());
  }
}
let An = 0;
const xn = function (t) {
    if (!t.hasAttribute("contenteditable")) return t.setAttribute("contenteditable", ""), function (t) {
      let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return e.times = 1, d(t, e);
    }("focus", {
      onElement: t,
      withCallback: () => yn(t)
    });
  },
  yn = function (t) {
    return Cn(t), Rn(t);
  },
  Cn = function (t) {
    var e, i;
    if (null !== (e = (i = document).queryCommandSupported) && void 0 !== e && e.call(i, "enableObjectResizing")) return document.execCommand("enableObjectResizing", !1, !1), d("mscontrolselect", {
      onElement: t,
      preventDefault: !0
    });
  },
  Rn = function (t) {
    var i, n;
    if (null !== (i = (n = document).queryCommandSupported) && void 0 !== i && i.call(n, "DefaultParagraphSeparator")) {
      const t = e.default.tagName;
      if (["div", "p"].includes(t)) return document.execCommand("DefaultParagraphSeparator", !1, t);
    }
  },
  En = o.forcesObjectResizing ? {
    display: "inline",
    width: "auto"
  } : {
    display: "inline-block",
    width: "1px"
  };
mt("trix-editor", "%t {\n    display: block;\n}\n\n%t:empty:not(:focus)::before {\n    content: attr(placeholder);\n    color: graytext;\n    cursor: text;\n    pointer-events: none;\n    white-space: pre-line;\n}\n\n%t a[contenteditable=false] {\n    cursor: text;\n}\n\n%t img {\n    max-width: 100%;\n    height: auto;\n}\n\n%t ".concat("[data-trix-attachment]", " figcaption textarea {\n    resize: none;\n}\n\n%t ").concat("[data-trix-attachment]", " figcaption textarea.trix-autoresize-clone {\n    position: absolute;\n    left: -9999px;\n    max-height: 0px;\n}\n\n%t ").concat("[data-trix-attachment]", " figcaption[data-trix-placeholder]:empty::before {\n    content: attr(data-trix-placeholder);\n    color: graytext;\n}\n\n%t [data-trix-cursor-target] {\n    display: ").concat(En.display, " !important;\n    width: ").concat(En.width, " !important;\n    padding: 0 !important;\n    margin: 0 !important;\n    border: none !important;\n}\n\n%t [data-trix-cursor-target=left] {\n    vertical-align: top !important;\n    margin-left: -1px !important;\n}\n\n%t [data-trix-cursor-target=right] {\n    vertical-align: bottom !important;\n    margin-right: -1px !important;\n}"));
class Sn extends HTMLElement {
  get trixId() {
    return this.hasAttribute("trix-id") ? this.getAttribute("trix-id") : (this.setAttribute("trix-id", ++An), this.trixId);
  }
  get labels() {
    const t = [];
    this.id && this.ownerDocument && t.push(...Array.from(this.ownerDocument.querySelectorAll("label[for='".concat(this.id, "']")) || []));
    const e = p(this, {
      matchingSelector: "label"
    });
    return e && [this, null].includes(e.control) && t.push(e), t;
  }
  get toolbarElement() {
    var t;
    if (this.hasAttribute("toolbar")) return null === (t = this.ownerDocument) || void 0 === t ? void 0 : t.getElementById(this.getAttribute("toolbar"));
    if (this.parentNode) {
      const t = "trix-toolbar-".concat(this.trixId);
      this.setAttribute("toolbar", t);
      const e = C("trix-toolbar", {
        id: t
      });
      return this.parentNode.insertBefore(e, this), e;
    }
  }
  get form() {
    var t;
    return null === (t = this.inputElement) || void 0 === t ? void 0 : t.form;
  }
  get inputElement() {
    var t;
    if (this.hasAttribute("input")) return null === (t = this.ownerDocument) || void 0 === t ? void 0 : t.getElementById(this.getAttribute("input"));
    if (this.parentNode) {
      const t = "trix-input-".concat(this.trixId);
      this.setAttribute("input", t);
      const e = C("input", {
        type: "hidden",
        id: t
      });
      return this.parentNode.insertBefore(e, this.nextElementSibling), e;
    }
  }
  get editor() {
    var t;
    return null === (t = this.editorController) || void 0 === t ? void 0 : t.editor;
  }
  get name() {
    var t;
    return null === (t = this.inputElement) || void 0 === t ? void 0 : t.name;
  }
  get value() {
    var t;
    return null === (t = this.inputElement) || void 0 === t ? void 0 : t.value;
  }
  set value(t) {
    var e;
    this.defaultValue = t, null === (e = this.editor) || void 0 === e || e.loadHTML(this.defaultValue);
  }
  notify(t, e) {
    if (this.editorController) return g("trix-".concat(t), {
      onElement: this,
      attributes: e
    });
  }
  setInputElementValue(t) {
    this.inputElement && (this.inputElement.value = t);
  }
  connectedCallback() {
    this.hasAttribute("data-trix-internal") || (xn(this), function (t) {
      if (!t.hasAttribute("role")) t.setAttribute("role", "textbox");
    }(this), function (t) {
      if (t.hasAttribute("aria-label") || t.hasAttribute("aria-labelledby")) return;
      const e = function () {
        const e = Array.from(t.labels).map(e => {
            if (!e.contains(t)) return e.textContent;
          }).filter(t => t),
          i = e.join(" ");
        return i ? t.setAttribute("aria-label", i) : t.removeAttribute("aria-label");
      };
      e(), d("focus", {
        onElement: t,
        withCallback: e
      });
    }(this), this.editorController || (g("trix-before-initialize", {
      onElement: this
    }), this.editorController = new mn({
      editorElement: this,
      html: this.defaultValue = this.value
    }), requestAnimationFrame(() => g("trix-initialize", {
      onElement: this
    }))), this.editorController.registerSelectionManager(), this.registerResetListener(), this.registerClickListener(), function (t) {
      if (!document.querySelector(":focus") && t.hasAttribute("autofocus") && document.querySelector("[autofocus]") === t) t.focus();
    }(this));
  }
  disconnectedCallback() {
    var t;
    return null === (t = this.editorController) || void 0 === t || t.unregisterSelectionManager(), this.unregisterResetListener(), this.unregisterClickListener();
  }
  registerResetListener() {
    return this.resetListener = this.resetBubbled.bind(this), window.addEventListener("reset", this.resetListener, !1);
  }
  unregisterResetListener() {
    return window.removeEventListener("reset", this.resetListener, !1);
  }
  registerClickListener() {
    return this.clickListener = this.clickBubbled.bind(this), window.addEventListener("click", this.clickListener, !1);
  }
  unregisterClickListener() {
    return window.removeEventListener("click", this.clickListener, !1);
  }
  resetBubbled(t) {
    if (!t.defaultPrevented && t.target === this.form) return this.reset();
  }
  clickBubbled(t) {
    if (t.defaultPrevented) return;
    if (this.contains(t.target)) return;
    const e = p(t.target, {
      matchingSelector: "label"
    });
    return e && Array.from(this.labels).includes(e) ? this.focus() : void 0;
  }
  reset() {
    this.value = this.defaultValue;
  }
}
const kn = {
  VERSION: "2.0.4",
  config: W,
  core: oi,
  models: Ri,
  views: Ei,
  controllers: pn,
  observers: fn,
  operations: bn,
  elements: Object.freeze({
    __proto__: null,
    TrixEditorElement: Sn,
    TrixToolbarElement: vn
  }),
  filters: Object.freeze({
    __proto__: null,
    Filter: di,
    attachmentGalleryFilter: gi
  })
};
Object.assign(kn, Ri), window.Trix = kn, setTimeout(function () {
  customElements.get("trix-toolbar") || customElements.define("trix-toolbar", vn), customElements.get("trix-editor") || customElements.define("trix-editor", Sn);
}, 0);


/***/ }),

/***/ "./node_modules/turbolinks/dist/turbolinks.js":
/*!****************************************************!*\
  !*** ./node_modules/turbolinks/dist/turbolinks.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */
(function () {
  var t = this;
  (function () {
    (function () {
      this.Turbolinks = {
        supported: function () {
          return null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener;
        }(),
        visit: function (t, r) {
          return e.controller.visit(t, r);
        },
        clearCache: function () {
          return e.controller.clearCache();
        },
        setProgressBarDelay: function (t) {
          return e.controller.setProgressBarDelay(t);
        }
      };
    }).call(this);
  }).call(t);
  var e = t.Turbolinks;
  (function () {
    (function () {
      var t,
        r,
        n,
        o = [].slice;
      e.copyObject = function (t) {
        var e, r, n;
        r = {};
        for (e in t) n = t[e], r[e] = n;
        return r;
      }, e.closest = function (e, r) {
        return t.call(e, r);
      }, t = function () {
        var t, e;
        return t = document.documentElement, null != (e = t.closest) ? e : function (t) {
          var e;
          for (e = this; e;) {
            if (e.nodeType === Node.ELEMENT_NODE && r.call(e, t)) return e;
            e = e.parentNode;
          }
        };
      }(), e.defer = function (t) {
        return setTimeout(t, 1);
      }, e.throttle = function (t) {
        var e;
        return e = null, function () {
          var r;
          return r = 1 <= arguments.length ? o.call(arguments, 0) : [], null != e ? e : e = requestAnimationFrame(function (n) {
            return function () {
              return e = null, t.apply(n, r);
            };
          }(this));
        };
      }, e.dispatch = function (t, e) {
        var r, o, i, s, a, u;
        return a = null != e ? e : {}, u = a.target, r = a.cancelable, o = a.data, i = document.createEvent("Events"), i.initEvent(t, !0, r === !0), i.data = null != o ? o : {}, i.cancelable && !n && (s = i.preventDefault, i.preventDefault = function () {
          return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
            get: function () {
              return !0;
            }
          }), s.call(this);
        }), (null != u ? u : document).dispatchEvent(i), i;
      }, n = function () {
        var t;
        return t = document.createEvent("Events"), t.initEvent("test", !0, !0), t.preventDefault(), t.defaultPrevented;
      }(), e.match = function (t, e) {
        return r.call(t, e);
      }, r = function () {
        var t, e, r, n;
        return t = document.documentElement, null != (e = null != (r = null != (n = t.matchesSelector) ? n : t.webkitMatchesSelector) ? r : t.msMatchesSelector) ? e : t.mozMatchesSelector;
      }(), e.uuid = function () {
        var t, e, r;
        for (r = "", t = e = 1; 36 >= e; t = ++e) r += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
        return r;
      };
    }).call(this), function () {
      e.Location = function () {
        function t(t) {
          var e, r;
          null == t && (t = ""), r = document.createElement("a"), r.href = t.toString(), this.absoluteURL = r.href, e = r.hash.length, 2 > e ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = r.hash.slice(1));
        }
        var e, r, n, o;
        return t.wrap = function (t) {
          return t instanceof this ? t : new this(t);
        }, t.prototype.getOrigin = function () {
          return this.absoluteURL.split("/", 3).join("/");
        }, t.prototype.getPath = function () {
          var t, e;
          return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/";
        }, t.prototype.getPathComponents = function () {
          return this.getPath().split("/").slice(1);
        }, t.prototype.getLastPathComponent = function () {
          return this.getPathComponents().slice(-1)[0];
        }, t.prototype.getExtension = function () {
          var t, e;
          return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : "";
        }, t.prototype.isHTML = function () {
          return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/);
        }, t.prototype.isPrefixedBy = function (t) {
          var e;
          return e = r(t), this.isEqualTo(t) || o(this.absoluteURL, e);
        }, t.prototype.isEqualTo = function (t) {
          return this.absoluteURL === (null != t ? t.absoluteURL : void 0);
        }, t.prototype.toCacheKey = function () {
          return this.requestURL;
        }, t.prototype.toJSON = function () {
          return this.absoluteURL;
        }, t.prototype.toString = function () {
          return this.absoluteURL;
        }, t.prototype.valueOf = function () {
          return this.absoluteURL;
        }, r = function (t) {
          return e(t.getOrigin() + t.getPath());
        }, e = function (t) {
          return n(t, "/") ? t : t + "/";
        }, o = function (t, e) {
          return t.slice(0, e.length) === e;
        }, n = function (t, e) {
          return t.slice(-e.length) === e;
        }, t;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };
      e.HttpRequest = function () {
        function r(r, n, o) {
          this.delegate = r, this.requestCanceled = t(this.requestCanceled, this), this.requestTimedOut = t(this.requestTimedOut, this), this.requestFailed = t(this.requestFailed, this), this.requestLoaded = t(this.requestLoaded, this), this.requestProgressed = t(this.requestProgressed, this), this.url = e.Location.wrap(n).requestURL, this.referrer = e.Location.wrap(o).absoluteURL, this.createXHR();
        }
        return r.NETWORK_FAILURE = 0, r.TIMEOUT_FAILURE = -1, r.timeout = 60, r.prototype.send = function () {
          var t;
          return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof (t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0;
        }, r.prototype.cancel = function () {
          return this.xhr && this.sent ? this.xhr.abort() : void 0;
        }, r.prototype.requestProgressed = function (t) {
          return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0;
        }, r.prototype.requestLoaded = function () {
          return this.endRequest(function (t) {
            return function () {
              var e;
              return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText));
            };
          }(this));
        }, r.prototype.requestFailed = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE);
            };
          }(this));
        }, r.prototype.requestTimedOut = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE);
            };
          }(this));
        }, r.prototype.requestCanceled = function () {
          return this.endRequest();
        }, r.prototype.notifyApplicationBeforeRequestStart = function () {
          return e.dispatch("turbolinks:request-start", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.notifyApplicationAfterRequestEnd = function () {
          return e.dispatch("turbolinks:request-end", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.createXHR = function () {
          return this.xhr = new XMLHttpRequest(), this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled;
        }, r.prototype.endRequest = function (t) {
          return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0;
        }, r.prototype.setProgress = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0;
        }, r.prototype.destroy = function () {
          var t;
          return this.setProgress(1), "function" == typeof (t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null;
        }, r;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };
      e.ProgressBar = function () {
        function e() {
          this.trickle = t(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement();
        }
        var r;
        return r = 300, e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + r + "ms ease-out, opacity " + r / 2 + "ms " + r / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", e.prototype.show = function () {
          return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling());
        }, e.prototype.hide = function () {
          return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement(function (t) {
            return function () {
              return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1;
            };
          }(this))) : void 0;
        }, e.prototype.setValue = function (t) {
          return this.value = t, this.refresh();
        }, e.prototype.installStylesheetElement = function () {
          return document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
        }, e.prototype.installProgressElement = function () {
          return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh();
        }, e.prototype.fadeProgressElement = function (t) {
          return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * r);
        }, e.prototype.uninstallProgressElement = function () {
          return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0;
        }, e.prototype.startTrickling = function () {
          return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, r);
        }, e.prototype.stopTrickling = function () {
          return clearInterval(this.trickleInterval), this.trickleInterval = null;
        }, e.prototype.trickle = function () {
          return this.setValue(this.value + Math.random() / 100);
        }, e.prototype.refresh = function () {
          return requestAnimationFrame(function (t) {
            return function () {
              return t.progressElement.style.width = 10 + 90 * t.value + "%";
            };
          }(this));
        }, e.prototype.createStylesheetElement = function () {
          var t;
          return t = document.createElement("style"), t.type = "text/css", t.textContent = this.constructor.defaultCSS, t;
        }, e.prototype.createProgressElement = function () {
          var t;
          return t = document.createElement("div"), t.className = "turbolinks-progress-bar", t;
        }, e;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };
      e.BrowserAdapter = function () {
        function r(r) {
          this.controller = r, this.showProgressBar = t(this.showProgressBar, this), this.progressBar = new e.ProgressBar();
        }
        var n, o, i;
        return i = e.HttpRequest, n = i.NETWORK_FAILURE, o = i.TIMEOUT_FAILURE, r.prototype.visitProposedToLocationWithAction = function (t, e) {
          return this.controller.startVisitToLocationWithAction(t, e);
        }, r.prototype.visitStarted = function (t) {
          return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot();
        }, r.prototype.visitRequestStarted = function (t) {
          return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar();
        }, r.prototype.visitRequestProgressed = function (t) {
          return this.progressBar.setValue(t.progress);
        }, r.prototype.visitRequestCompleted = function (t) {
          return t.loadResponse();
        }, r.prototype.visitRequestFailedWithStatusCode = function (t, e) {
          switch (e) {
            case n:
            case o:
              return this.reload();
            default:
              return t.loadResponse();
          }
        }, r.prototype.visitRequestFinished = function (t) {
          return this.hideProgressBar();
        }, r.prototype.visitCompleted = function (t) {
          return t.followRedirect();
        }, r.prototype.pageInvalidated = function () {
          return this.reload();
        }, r.prototype.showProgressBarAfterDelay = function () {
          return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay);
        }, r.prototype.showProgressBar = function () {
          return this.progressBar.show();
        }, r.prototype.hideProgressBar = function () {
          return this.progressBar.hide(), clearTimeout(this.progressBarTimeout);
        }, r.prototype.reload = function () {
          return window.location.reload();
        }, r;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };
      e.History = function () {
        function r(e) {
          this.delegate = e, this.onPageLoad = t(this.onPageLoad, this), this.onPopState = t(this.onPopState, this);
        }
        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0;
        }, r.prototype.push = function (t, r) {
          return t = e.Location.wrap(t), this.update("push", t, r);
        }, r.prototype.replace = function (t, r) {
          return t = e.Location.wrap(t), this.update("replace", t, r);
        }, r.prototype.onPopState = function (t) {
          var r, n, o, i;
          return this.shouldHandlePopState() && (i = null != (n = t.state) ? n.turbolinks : void 0) ? (r = e.Location.wrap(window.location), o = i.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(r, o)) : void 0;
        }, r.prototype.onPageLoad = function (t) {
          return e.defer(function (t) {
            return function () {
              return t.pageLoaded = !0;
            };
          }(this));
        }, r.prototype.shouldHandlePopState = function () {
          return this.pageIsLoaded();
        }, r.prototype.pageIsLoaded = function () {
          return this.pageLoaded || "complete" === document.readyState;
        }, r.prototype.update = function (t, e, r) {
          var n;
          return n = {
            turbolinks: {
              restorationIdentifier: r
            }
          }, history[t + "State"](n, null, e);
        }, r;
      }();
    }.call(this), function () {
      e.HeadDetails = function () {
        function t(t) {
          var e, r, n, s, a, u;
          for (this.elements = {}, n = 0, a = t.length; a > n; n++) u = t[n], u.nodeType === Node.ELEMENT_NODE && (s = u.outerHTML, r = null != (e = this.elements)[s] ? e[s] : e[s] = {
            type: i(u),
            tracked: o(u),
            elements: []
          }, r.elements.push(u));
        }
        var e, r, n, o, i;
        return t.fromHeadElement = function (t) {
          var e;
          return new this(null != (e = null != t ? t.childNodes : void 0) ? e : []);
        }, t.prototype.hasElementWithKey = function (t) {
          return t in this.elements;
        }, t.prototype.getTrackedElementSignature = function () {
          var t, e;
          return function () {
            var r, n;
            r = this.elements, n = [];
            for (t in r) e = r[t].tracked, e && n.push(t);
            return n;
          }.call(this).join("");
        }, t.prototype.getScriptElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("script", t);
        }, t.prototype.getStylesheetElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("stylesheet", t);
        }, t.prototype.getElementsMatchingTypeNotInDetails = function (t, e) {
          var r, n, o, i, s, a;
          o = this.elements, s = [];
          for (n in o) i = o[n], a = i.type, r = i.elements, a !== t || e.hasElementWithKey(n) || s.push(r[0]);
          return s;
        }, t.prototype.getProvisionalElements = function () {
          var t, e, r, n, o, i, s;
          r = [], n = this.elements;
          for (e in n) o = n[e], s = o.type, i = o.tracked, t = o.elements, null != s || i ? t.length > 1 && r.push.apply(r, t.slice(1)) : r.push.apply(r, t);
          return r;
        }, t.prototype.getMetaValue = function (t) {
          var e;
          return null != (e = this.findMetaElementByName(t)) ? e.getAttribute("content") : void 0;
        }, t.prototype.findMetaElementByName = function (t) {
          var r, n, o, i;
          r = void 0, i = this.elements;
          for (o in i) n = i[o].elements, e(n[0], t) && (r = n[0]);
          return r;
        }, i = function (t) {
          return r(t) ? "script" : n(t) ? "stylesheet" : void 0;
        }, o = function (t) {
          return "reload" === t.getAttribute("data-turbolinks-track");
        }, r = function (t) {
          var e;
          return e = t.tagName.toLowerCase(), "script" === e;
        }, n = function (t) {
          var e;
          return e = t.tagName.toLowerCase(), "style" === e || "link" === e && "stylesheet" === t.getAttribute("rel");
        }, e = function (t, e) {
          var r;
          return r = t.tagName.toLowerCase(), "meta" === r && t.getAttribute("name") === e;
        }, t;
      }();
    }.call(this), function () {
      e.Snapshot = function () {
        function t(t, e) {
          this.headDetails = t, this.bodyElement = e;
        }
        return t.wrap = function (t) {
          return t instanceof this ? t : "string" == typeof t ? this.fromHTMLString(t) : this.fromHTMLElement(t);
        }, t.fromHTMLString = function (t) {
          var e;
          return e = document.createElement("html"), e.innerHTML = t, this.fromHTMLElement(e);
        }, t.fromHTMLElement = function (t) {
          var r, n, o, i;
          return o = t.querySelector("head"), r = null != (i = t.querySelector("body")) ? i : document.createElement("body"), n = e.HeadDetails.fromHeadElement(o), new this(n, r);
        }, t.prototype.clone = function () {
          return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0));
        }, t.prototype.getRootLocation = function () {
          var t, r;
          return r = null != (t = this.getSetting("root")) ? t : "/", new e.Location(r);
        }, t.prototype.getCacheControlValue = function () {
          return this.getSetting("cache-control");
        }, t.prototype.getElementForAnchor = function (t) {
          try {
            return this.bodyElement.querySelector("[id='" + t + "'], a[name='" + t + "']");
          } catch (e) {}
        }, t.prototype.getPermanentElements = function () {
          return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementById = function (t) {
          return this.bodyElement.querySelector("#" + t + "[data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementsPresentInSnapshot = function (t) {
          var e, r, n, o, i;
          for (o = this.getPermanentElements(), i = [], r = 0, n = o.length; n > r; r++) e = o[r], t.getPermanentElementById(e.id) && i.push(e);
          return i;
        }, t.prototype.findFirstAutofocusableElement = function () {
          return this.bodyElement.querySelector("[autofocus]");
        }, t.prototype.hasAnchor = function (t) {
          return null != this.getElementForAnchor(t);
        }, t.prototype.isPreviewable = function () {
          return "no-preview" !== this.getCacheControlValue();
        }, t.prototype.isCacheable = function () {
          return "no-cache" !== this.getCacheControlValue();
        }, t.prototype.isVisitable = function () {
          return "reload" !== this.getSetting("visit-control");
        }, t.prototype.getSetting = function (t) {
          return this.headDetails.getMetaValue("turbolinks-" + t);
        }, t;
      }();
    }.call(this), function () {
      var t = [].slice;
      e.Renderer = function () {
        function e() {}
        var r;
        return e.render = function () {
          var e, r, n, o;
          return n = arguments[0], r = arguments[1], e = 3 <= arguments.length ? t.call(arguments, 2) : [], o = function (t, e, r) {
            r.prototype = t.prototype;
            var n = new r(),
              o = t.apply(n, e);
            return Object(o) === o ? o : n;
          }(this, e, function () {}), o.delegate = n, o.render(r), o;
        }, e.prototype.renderView = function (t) {
          return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody);
        }, e.prototype.invalidateView = function () {
          return this.delegate.viewInvalidated();
        }, e.prototype.createScriptElement = function (t) {
          var e;
          return "false" === t.getAttribute("data-turbolinks-eval") ? t : (e = document.createElement("script"), e.textContent = t.textContent, e.async = !1, r(e, t), e);
        }, r = function (t, e) {
          var r, n, o, i, s, a, u;
          for (i = e.attributes, a = [], r = 0, n = i.length; n > r; r++) s = i[r], o = s.name, u = s.value, a.push(t.setAttribute(o, u));
          return a;
        }, e;
      }();
    }.call(this), function () {
      var t,
        r,
        n = function (t, e) {
          function r() {
            this.constructor = t;
          }
          for (var n in e) o.call(e, n) && (t[n] = e[n]);
          return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
        },
        o = {}.hasOwnProperty;
      e.SnapshotRenderer = function (e) {
        function o(t, e, r) {
          this.currentSnapshot = t, this.newSnapshot = e, this.isPreview = r, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement;
        }
        return n(o, e), o.prototype.render = function (t) {
          return this.shouldRender() ? (this.mergeHead(), this.renderView(function (e) {
            return function () {
              return e.replaceBody(), e.isPreview || e.focusFirstAutofocusableElement(), t();
            };
          }(this))) : this.invalidateView();
        }, o.prototype.mergeHead = function () {
          return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements();
        }, o.prototype.replaceBody = function () {
          var t;
          return t = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(t);
        }, o.prototype.shouldRender = function () {
          return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical();
        }, o.prototype.trackedElementsAreIdentical = function () {
          return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature();
        }, o.prototype.copyNewHeadStylesheetElements = function () {
          var t, e, r, n, o;
          for (n = this.getNewHeadStylesheetElements(), o = [], e = 0, r = n.length; r > e; e++) t = n[e], o.push(document.head.appendChild(t));
          return o;
        }, o.prototype.copyNewHeadScriptElements = function () {
          var t, e, r, n, o;
          for (n = this.getNewHeadScriptElements(), o = [], e = 0, r = n.length; r > e; e++) t = n[e], o.push(document.head.appendChild(this.createScriptElement(t)));
          return o;
        }, o.prototype.removeCurrentHeadProvisionalElements = function () {
          var t, e, r, n, o;
          for (n = this.getCurrentHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) t = n[e], o.push(document.head.removeChild(t));
          return o;
        }, o.prototype.copyNewHeadProvisionalElements = function () {
          var t, e, r, n, o;
          for (n = this.getNewHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) t = n[e], o.push(document.head.appendChild(t));
          return o;
        }, o.prototype.relocateCurrentBodyPermanentElements = function () {
          var e, n, o, i, s, a, u;
          for (a = this.getCurrentBodyPermanentElements(), u = [], e = 0, n = a.length; n > e; e++) i = a[e], s = t(i), o = this.newSnapshot.getPermanentElementById(i.id), r(i, s.element), r(o, i), u.push(s);
          return u;
        }, o.prototype.replacePlaceholderElementsWithClonedPermanentElements = function (t) {
          var e, n, o, i, s, a, u;
          for (u = [], o = 0, i = t.length; i > o; o++) a = t[o], n = a.element, s = a.permanentElement, e = s.cloneNode(!0), u.push(r(n, e));
          return u;
        }, o.prototype.activateNewBodyScriptElements = function () {
          var t, e, n, o, i, s;
          for (i = this.getNewBodyScriptElements(), s = [], e = 0, o = i.length; o > e; e++) n = i[e], t = this.createScriptElement(n), s.push(r(n, t));
          return s;
        }, o.prototype.assignNewBody = function () {
          return document.body = this.newBody;
        }, o.prototype.focusFirstAutofocusableElement = function () {
          var t;
          return null != (t = this.newSnapshot.findFirstAutofocusableElement()) ? t.focus() : void 0;
        }, o.prototype.getNewHeadStylesheetElements = function () {
          return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getNewHeadScriptElements = function () {
          return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getCurrentHeadProvisionalElements = function () {
          return this.currentHeadDetails.getProvisionalElements();
        }, o.prototype.getNewHeadProvisionalElements = function () {
          return this.newHeadDetails.getProvisionalElements();
        }, o.prototype.getCurrentBodyPermanentElements = function () {
          return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot);
        }, o.prototype.getNewBodyScriptElements = function () {
          return this.newBody.querySelectorAll("script");
        }, o;
      }(e.Renderer), t = function (t) {
        var e;
        return e = document.createElement("meta"), e.setAttribute("name", "turbolinks-permanent-placeholder"), e.setAttribute("content", t.id), {
          element: e,
          permanentElement: t
        };
      }, r = function (t, e) {
        var r;
        return (r = t.parentNode) ? r.replaceChild(e, t) : void 0;
      };
    }.call(this), function () {
      var t = function (t, e) {
          function n() {
            this.constructor = t;
          }
          for (var o in e) r.call(e, o) && (t[o] = e[o]);
          return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
        },
        r = {}.hasOwnProperty;
      e.ErrorRenderer = function (e) {
        function r(t) {
          var e;
          e = document.createElement("html"), e.innerHTML = t, this.newHead = e.querySelector("head"), this.newBody = e.querySelector("body");
        }
        return t(r, e), r.prototype.render = function (t) {
          return this.renderView(function (e) {
            return function () {
              return e.replaceHeadAndBody(), e.activateBodyScriptElements(), t();
            };
          }(this));
        }, r.prototype.replaceHeadAndBody = function () {
          var t, e;
          return e = document.head, t = document.body, e.parentNode.replaceChild(this.newHead, e), t.parentNode.replaceChild(this.newBody, t);
        }, r.prototype.activateBodyScriptElements = function () {
          var t, e, r, n, o, i;
          for (n = this.getScriptElements(), i = [], e = 0, r = n.length; r > e; e++) o = n[e], t = this.createScriptElement(o), i.push(o.parentNode.replaceChild(t, o));
          return i;
        }, r.prototype.getScriptElements = function () {
          return document.documentElement.querySelectorAll("script");
        }, r;
      }(e.Renderer);
    }.call(this), function () {
      e.View = function () {
        function t(t) {
          this.delegate = t, this.htmlElement = document.documentElement;
        }
        return t.prototype.getRootLocation = function () {
          return this.getSnapshot().getRootLocation();
        }, t.prototype.getElementForAnchor = function (t) {
          return this.getSnapshot().getElementForAnchor(t);
        }, t.prototype.getSnapshot = function () {
          return e.Snapshot.fromHTMLElement(this.htmlElement);
        }, t.prototype.render = function (t, e) {
          var r, n, o;
          return o = t.snapshot, r = t.error, n = t.isPreview, this.markAsPreview(n), null != o ? this.renderSnapshot(o, n, e) : this.renderError(r, e);
        }, t.prototype.markAsPreview = function (t) {
          return t ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview");
        }, t.prototype.renderSnapshot = function (t, r, n) {
          return e.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), e.Snapshot.wrap(t), r);
        }, t.prototype.renderError = function (t, r) {
          return e.ErrorRenderer.render(this.delegate, r, t);
        }, t;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };
      e.ScrollManager = function () {
        function r(r) {
          this.delegate = r, this.onScroll = t(this.onScroll, this), this.onScroll = e.throttle(this.onScroll);
        }
        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0;
        }, r.prototype.scrollToElement = function (t) {
          return t.scrollIntoView();
        }, r.prototype.scrollToPosition = function (t) {
          var e, r;
          return e = t.x, r = t.y, window.scrollTo(e, r);
        }, r.prototype.onScroll = function (t) {
          return this.updatePosition({
            x: window.pageXOffset,
            y: window.pageYOffset
          });
        }, r.prototype.updatePosition = function (t) {
          var e;
          return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0;
        }, r;
      }();
    }.call(this), function () {
      e.SnapshotCache = function () {
        function t(t) {
          this.size = t, this.keys = [], this.snapshots = {};
        }
        var r;
        return t.prototype.has = function (t) {
          var e;
          return e = r(t), e in this.snapshots;
        }, t.prototype.get = function (t) {
          var e;
          if (this.has(t)) return e = this.read(t), this.touch(t), e;
        }, t.prototype.put = function (t, e) {
          return this.write(t, e), this.touch(t), e;
        }, t.prototype.read = function (t) {
          var e;
          return e = r(t), this.snapshots[e];
        }, t.prototype.write = function (t, e) {
          var n;
          return n = r(t), this.snapshots[n] = e;
        }, t.prototype.touch = function (t) {
          var e, n;
          return n = r(t), e = this.keys.indexOf(n), e > -1 && this.keys.splice(e, 1), this.keys.unshift(n), this.trim();
        }, t.prototype.trim = function () {
          var t, e, r, n, o;
          for (n = this.keys.splice(this.size), o = [], t = 0, r = n.length; r > t; t++) e = n[t], o.push(delete this.snapshots[e]);
          return o;
        }, r = function (t) {
          return e.Location.wrap(t).toCacheKey();
        }, t;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };
      e.Visit = function () {
        function r(r, n, o) {
          this.controller = r, this.action = o, this.performScroll = t(this.performScroll, this), this.identifier = e.uuid(), this.location = e.Location.wrap(n), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {};
        }
        var n;
        return r.prototype.start = function () {
          return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0;
        }, r.prototype.cancel = function () {
          var t;
          return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0;
        }, r.prototype.complete = function () {
          var t;
          return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof (t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0;
        }, r.prototype.fail = function () {
          var t;
          return "started" === this.state ? (this.state = "failed", "function" == typeof (t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0;
        }, r.prototype.changeHistory = function () {
          var t, e;
          return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = n(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0);
        }, r.prototype.issueRequest = function () {
          return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new e.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0;
        }, r.prototype.getCachedSnapshot = function () {
          var t;
          return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t;
        }, r.prototype.hasCachedSnapshot = function () {
          return null != this.getCachedSnapshot();
        }, r.prototype.loadCachedSnapshot = function () {
          var t, e;
          return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(), this.render(function () {
            var r;
            return this.cacheSnapshot(), this.controller.render({
              snapshot: e,
              isPreview: t
            }, this.performScroll), "function" == typeof (r = this.adapter).visitRendered && r.visitRendered(this), t ? void 0 : this.complete();
          })) : void 0;
        }, r.prototype.loadResponse = function () {
          return null != this.response ? this.render(function () {
            var t, e;
            return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
              error: this.response
            }, this.performScroll), "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({
              snapshot: this.response
            }, this.performScroll), "function" == typeof (e = this.adapter).visitRendered && e.visitRendered(this), this.complete());
          }) : void 0;
        }, r.prototype.followRedirect = function () {
          return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0;
        }, r.prototype.requestStarted = function () {
          var t;
          return this.recordTimingMetric("requestStart"), "function" == typeof (t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0;
        }, r.prototype.requestProgressed = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0;
        }, r.prototype.requestCompletedWithResponse = function (t, r) {
          return this.response = t, null != r && (this.redirectedToLocation = e.Location.wrap(r)), this.adapter.visitRequestCompleted(this);
        }, r.prototype.requestFailedWithStatusCode = function (t, e) {
          return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t);
        }, r.prototype.requestFinished = function () {
          var t;
          return this.recordTimingMetric("requestEnd"), "function" == typeof (t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0;
        }, r.prototype.performScroll = function () {
          return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0);
        }, r.prototype.scrollToRestoredPosition = function () {
          var t, e;
          return t = null != (e = this.restorationData) ? e.scrollPosition : void 0, null != t ? (this.controller.scrollToPosition(t), !0) : void 0;
        }, r.prototype.scrollToAnchor = function () {
          return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0;
        }, r.prototype.scrollToTop = function () {
          return this.controller.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.recordTimingMetric = function (t) {
          var e;
          return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = new Date().getTime();
        }, r.prototype.getTimingMetrics = function () {
          return e.copyObject(this.timingMetrics);
        }, n = function (t) {
          switch (t) {
            case "replace":
              return "replaceHistoryWithLocationAndRestorationIdentifier";
            case "advance":
            case "restore":
              return "pushHistoryWithLocationAndRestorationIdentifier";
          }
        }, r.prototype.shouldIssueRequest = function () {
          return "restore" === this.action ? !this.hasCachedSnapshot() : !0;
        }, r.prototype.cacheSnapshot = function () {
          return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0);
        }, r.prototype.render = function (t) {
          return this.cancelRender(), this.frame = requestAnimationFrame(function (e) {
            return function () {
              return e.frame = null, t.call(e);
            };
          }(this));
        }, r.prototype.cancelRender = function () {
          return this.frame ? cancelAnimationFrame(this.frame) : void 0;
        }, r;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };
      e.Controller = function () {
        function r() {
          this.clickBubbled = t(this.clickBubbled, this), this.clickCaptured = t(this.clickCaptured, this), this.pageLoaded = t(this.pageLoaded, this), this.history = new e.History(this), this.view = new e.View(this), this.scrollManager = new e.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500);
        }
        return r.prototype.start = function () {
          return e.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0;
        }, r.prototype.disable = function () {
          return this.enabled = !1;
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0;
        }, r.prototype.clearCache = function () {
          return this.cache = new e.SnapshotCache(10);
        }, r.prototype.visit = function (t, r) {
          var n, o;
          return null == r && (r = {}), t = e.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (n = null != (o = r.action) ? o : "advance", this.adapter.visitProposedToLocationWithAction(t, n)) : window.location = t : void 0;
        }, r.prototype.startVisitToLocationWithAction = function (t, r, n) {
          var o;
          return e.supported ? (o = this.getRestorationDataForIdentifier(n), this.startVisit(t, r, {
            restorationData: o
          })) : window.location = t;
        }, r.prototype.setProgressBarDelay = function (t) {
          return this.progressBarDelay = t;
        }, r.prototype.startHistory = function () {
          return this.location = e.Location.wrap(window.location), this.restorationIdentifier = e.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.stopHistory = function () {
          return this.history.stop();
        }, r.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier);
        }, r.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.historyPoppedToLocationWithRestorationIdentifier = function (t, r) {
          var n;
          return this.restorationIdentifier = r, this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", {
            restorationIdentifier: this.restorationIdentifier,
            restorationData: n,
            historyChanged: !0
          }), this.location = e.Location.wrap(t)) : this.adapter.pageInvalidated();
        }, r.prototype.getCachedSnapshotForLocation = function (t) {
          var e;
          return null != (e = this.cache.get(t)) ? e.clone() : void 0;
        }, r.prototype.shouldCacheSnapshot = function () {
          return this.view.getSnapshot().isCacheable();
        }, r.prototype.cacheSnapshot = function () {
          var t, r;
          return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), r = this.view.getSnapshot(), t = this.lastRenderedLocation, e.defer(function (e) {
            return function () {
              return e.cache.put(t, r.clone());
            };
          }(this))) : void 0;
        }, r.prototype.scrollToAnchor = function (t) {
          var e;
          return (e = this.view.getElementForAnchor(t)) ? this.scrollToElement(e) : this.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.scrollToElement = function (t) {
          return this.scrollManager.scrollToElement(t);
        }, r.prototype.scrollToPosition = function (t) {
          return this.scrollManager.scrollToPosition(t);
        }, r.prototype.scrollPositionChanged = function (t) {
          var e;
          return e = this.getCurrentRestorationData(), e.scrollPosition = t;
        }, r.prototype.render = function (t, e) {
          return this.view.render(t, e);
        }, r.prototype.viewInvalidated = function () {
          return this.adapter.pageInvalidated();
        }, r.prototype.viewWillRender = function (t) {
          return this.notifyApplicationBeforeRender(t);
        }, r.prototype.viewRendered = function () {
          return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender();
        }, r.prototype.pageLoaded = function () {
          return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad();
        }, r.prototype.clickCaptured = function () {
          return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1);
        }, r.prototype.clickBubbled = function (t) {
          var e, r, n;
          return this.enabled && this.clickEventIsSignificant(t) && (r = this.getVisitableLinkForNode(t.target)) && (n = this.getVisitableLocationForLink(r)) && this.applicationAllowsFollowingLinkToLocation(r, n) ? (t.preventDefault(), e = this.getActionForLink(r), this.visit(n, {
            action: e
          })) : void 0;
        }, r.prototype.applicationAllowsFollowingLinkToLocation = function (t, e) {
          var r;
          return r = this.notifyApplicationAfterClickingLinkToLocation(t, e), !r.defaultPrevented;
        }, r.prototype.applicationAllowsVisitingLocation = function (t) {
          var e;
          return e = this.notifyApplicationBeforeVisitingLocation(t), !e.defaultPrevented;
        }, r.prototype.notifyApplicationAfterClickingLinkToLocation = function (t, r) {
          return e.dispatch("turbolinks:click", {
            target: t,
            data: {
              url: r.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationBeforeVisitingLocation = function (t) {
          return e.dispatch("turbolinks:before-visit", {
            data: {
              url: t.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationAfterVisitingLocation = function (t) {
          return e.dispatch("turbolinks:visit", {
            data: {
              url: t.absoluteURL
            }
          });
        }, r.prototype.notifyApplicationBeforeCachingSnapshot = function () {
          return e.dispatch("turbolinks:before-cache");
        }, r.prototype.notifyApplicationBeforeRender = function (t) {
          return e.dispatch("turbolinks:before-render", {
            data: {
              newBody: t
            }
          });
        }, r.prototype.notifyApplicationAfterRender = function () {
          return e.dispatch("turbolinks:render");
        }, r.prototype.notifyApplicationAfterPageLoad = function (t) {
          return null == t && (t = {}), e.dispatch("turbolinks:load", {
            data: {
              url: this.location.absoluteURL,
              timing: t
            }
          });
        }, r.prototype.startVisit = function (t, e, r) {
          var n;
          return null != (n = this.currentVisit) && n.cancel(), this.currentVisit = this.createVisit(t, e, r), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t);
        }, r.prototype.createVisit = function (t, r, n) {
          var o, i, s, a, u;
          return i = null != n ? n : {}, a = i.restorationIdentifier, s = i.restorationData, o = i.historyChanged, u = new e.Visit(this, t, r), u.restorationIdentifier = null != a ? a : e.uuid(), u.restorationData = e.copyObject(s), u.historyChanged = o, u.referrer = this.location, u;
        }, r.prototype.visitCompleted = function (t) {
          return this.notifyApplicationAfterPageLoad(t.getTimingMetrics());
        }, r.prototype.clickEventIsSignificant = function (t) {
          return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey);
        }, r.prototype.getVisitableLinkForNode = function (t) {
          return this.nodeIsVisitable(t) ? e.closest(t, "a[href]:not([target]):not([download])") : void 0;
        }, r.prototype.getVisitableLocationForLink = function (t) {
          var r;
          return r = new e.Location(t.getAttribute("href")), this.locationIsVisitable(r) ? r : void 0;
        }, r.prototype.getActionForLink = function (t) {
          var e;
          return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance";
        }, r.prototype.nodeIsVisitable = function (t) {
          var r;
          return (r = e.closest(t, "[data-turbolinks]")) ? "false" !== r.getAttribute("data-turbolinks") : !0;
        }, r.prototype.locationIsVisitable = function (t) {
          return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML();
        }, r.prototype.getCurrentRestorationData = function () {
          return this.getRestorationDataForIdentifier(this.restorationIdentifier);
        }, r.prototype.getRestorationDataForIdentifier = function (t) {
          var e;
          return null != (e = this.restorationData)[t] ? e[t] : e[t] = {};
        }, r;
      }();
    }.call(this), function () {
      !function () {
        var t, e;
        if ((t = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning")) for (; t = t.parentNode;) if (t === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML);
      }();
    }.call(this), function () {
      var t, r, n;
      e.start = function () {
        return r() ? (null == e.controller && (e.controller = t()), e.controller.start()) : void 0;
      }, r = function () {
        return null == window.Turbolinks && (window.Turbolinks = e), n();
      }, t = function () {
        var t;
        return t = new e.Controller(), t.adapter = new e.BrowserAdapter(t), t;
      }, n = function () {
        return window.Turbolinks === e;
      }, n() && e.start();
    }.call(this);
  }).call(this),  true && module.exports ? module.exports = e :  true && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}).call(this);

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = function () {
  return this;
}();
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

/***/ })

/******/ });
//# sourceMappingURL=application-b6779e5257846eb40a79.js.map