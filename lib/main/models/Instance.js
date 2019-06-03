"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Comment = require("./Comment");

var _Comment2 = _interopRequireDefault(_Comment);

var _v = require("uuid/v4");

var _v2 = _interopRequireDefault(_v);

var _ColorCode = require("./ColorCode");

var _ColorCode2 = _interopRequireDefault(_ColorCode);

var _ColorType = require("./ColorType");

var _ColorType2 = _interopRequireDefault(_ColorType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Instance = function Instance(instance) {
  _classCallCheck(this, Instance);

  this.id = instance.id ? instance.id : (0, _v2.default)();
  this.title = instance.title;
  this.comments = instance.comments ? instance.comments.map(function (comment) {
    return new _Comment2.default(comment);
  }) : [];
  this.colorCode = instance.colorCode ? instance.colorCode : _ColorCode2.default.GREEN;
  this.colorType = instance.colorType ? instance.colorType : _ColorType2.default.FILL;
};

exports.default = Instance;