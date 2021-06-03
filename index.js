"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _require = require('jsdom'),
    JSDOM = _require.JSDOM;

module.exports = function (eleventyConfig) {
  eleventyConfig.addTransform('img-alt-tag-check', function (content, outputPath) {
    if (outputPath.endsWith('.html')) {
      var dom = new JSDOM(content);
      var document = dom.window.document;

      var _document$getElements = document.getElementsByTagName('img'),
          _document$getElements2 = _toArray(_document$getElements),
          images = _document$getElements2.slice(0);

      images.forEach(function (image) {
        var alt_tag_value = image.getAttribute('alt');

        if (!alt_tag_value) {
          throw Error("Missing `alt` tag from: ".concat(_toConsumableArray(outputPath.split('/'))[1]));
        }
      });
      return document.documentElement.outerHTML;
    } else {
      return content;
    }
  });
};