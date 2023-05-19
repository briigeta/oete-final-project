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
!(function webpackMissingModule() { var e = new Error("Cannot find module '../stylesheets/application.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// app/javascript/packs/application.js
__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '@rails/ujs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())).start();
__webpack_require__(/*! turbolinks */ "./node_modules/turbolinks/dist/turbolinks.js").start();
__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'channels'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
__webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.esm.js").start();



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

/***/ })

/******/ });
//# sourceMappingURL=application-fd53cf4db36005f40331.js.map