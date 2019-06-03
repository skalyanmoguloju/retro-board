'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _proptypes = require('proptypes');

var _proptypes2 = _interopRequireDefault(_proptypes);

var _terraTable = require('terra-table');

var _terraTable2 = _interopRequireDefault(_terraTable);

var _Instance = require('../../models/Instance');

var _Instance2 = _interopRequireDefault(_Instance);

var _InstanceSection = require('../Instance/InstanceSection');

var _InstanceSection2 = _interopRequireDefault(_InstanceSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Board = function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board() {
    _classCallCheck(this, Board);

    return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).apply(this, arguments));
  }

  _createClass(Board, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _terraTable2.default,
        { style: { border: '0' } },
        _react2.default.createElement(
          _terraTable2.default.Rows,
          null,
          _react2.default.createElement(
            _terraTable2.default.Row,
            { style: { border: 0 } },
            this.props.instances.map(function (instance) {
              return _react2.default.createElement(_terraTable2.default.Cell, {
                content: _react2.default.createElement(_InstanceSection2.default, {
                  instance: instance,
                  onAddComment: function onAddComment(comment) {
                    return _this2.props.onAddComment(instance.id, comment);
                  },
                  onEditCommentClick: function onEditCommentClick(commentId) {
                    return _this2.props.onEditCommentClick(instance.id, commentId);
                  },
                  onDeleteComment: function onDeleteComment(commentId) {
                    return _this2.props.onDeleteComment(instance.id, commentId);
                  },
                  onUpdateComment: function onUpdateComment(comment) {
                    return _this2.props.onUpdateComment(instance.id, comment);
                  },
                  onInstanceTitleChange: function onInstanceTitleChange(title) {
                    return _this2.props.onInstanceTitleChange(instance.id, title);
                  },
                  onColorChange: function onColorChange(colorCode, colorType) {
                    return _this2.props.onColorChange(instance.id, colorCode, colorType);
                  }
                }),
                key: instance.id,
                style: { width: 100 / _this2.props.instances.length + '%' }
              });
            })
          )
        )
      );
    }
  }]);

  return Board;
}(_react2.default.Component);

Board.propTypes = {
  instances: _proptypes2.default.arrayOf(_proptypes2.default.instanceOf(_Instance2.default)),
  onAddComment: _proptypes2.default.func,
  onEditCommentClick: _proptypes2.default.func,
  onDeleteComment: _proptypes2.default.func,
  onUpdateComment: _proptypes2.default.func,
  onInstanceTitleChange: _proptypes2.default.func,
  onColorChange: _proptypes2.default.func
};
Board.defaultProps = {
  instances: [],
  onEditCommentClick: function onEditCommentClick() {},
  onAddComment: function onAddComment() {},
  onDeleteComment: function onDeleteComment() {},
  onUpdateComment: function onUpdateComment() {},
  onInstanceTitleChange: function onInstanceTitleChange() {},
  onColorChange: function onColorChange() {}
};
exports.default = Board;