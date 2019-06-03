'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Comment = function Comment(comment) {
  _classCallCheck(this, Comment);

  this.id = comment.id ? comment.id : (0, _v2.default)();
  this.displayValue = comment.displayValue;
  this.ownerId = comment.ownerId;
  this.isEditMode = comment.isEditMode || false;
};

exports.default = Comment;