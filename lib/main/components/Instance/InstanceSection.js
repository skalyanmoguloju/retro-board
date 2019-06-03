'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _proptypes = require('proptypes');

var _proptypes2 = _interopRequireDefault(_proptypes);

var _terraSpacer = require('terra-spacer');

var _terraSpacer2 = _interopRequireDefault(_terraSpacer);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _IconAdd = require('terra-icon/lib/icon/IconAdd');

var _IconAdd2 = _interopRequireDefault(_IconAdd);

var _Instance = require('../../models/Instance');

var _Instance2 = _interopRequireDefault(_Instance);

var _EditCard = require('../Card/EditCard');

var _EditCard2 = _interopRequireDefault(_EditCard);

var _Comment = require('../../models/Comment');

var _Comment2 = _interopRequireDefault(_Comment);

var _ViewCard = require('../Card/ViewCard');

var _ViewCard2 = _interopRequireDefault(_ViewCard);

var _Title = require('../Title/Title');

var _Title2 = _interopRequireDefault(_Title);

var _DeleteCommentDialog = require('../Dialog/DeleteCommentDialog');

var _DeleteCommentDialog2 = _interopRequireDefault(_DeleteCommentDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InstanceSection = function (_React$Component) {
  _inherits(InstanceSection, _React$Component);

  function InstanceSection() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InstanceSection);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InstanceSection.__proto__ || Object.getPrototypeOf(InstanceSection)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      newComments: [],
      deleteCommentId: undefined
    }, _this.onAddNewCommentButtonClick = function () {
      var newComments = _this.state.newComments;


      newComments.push(new _Comment2.default({}));
      _this.setState({ newComments: newComments });
    }, _this.onNewCommentAdd = function (id, displayValue) {
      var updatedNewComments = _this.state.newComments.filter(function (comment) {
        return comment.id !== id;
      });

      _this.setState({ newComments: updatedNewComments });

      _this.props.onAddComment(new _Comment2.default({ id: id, displayValue: displayValue }));
    }, _this.deleteNewComment = function (commentId) {
      var updatedNewComments = _this.state.newComments.filter(function (comment) {
        return comment.id !== commentId;
      });
      _this.setState({ newComments: updatedNewComments });
    }, _this.getAddCards = function () {
      return _this.state.newComments.map(function (comment) {
        return _react2.default.createElement(_EditCard2.default, {
          key: comment.id,
          comment: comment,
          isAddMode: true,
          onSubmit: function onSubmit(value) {
            return _this.onNewCommentAdd(comment.id, value);
          },
          onDelete: function onDelete() {
            return _this.deleteNewComment(comment.id);
          },
          colorCode: _this.props.instance.colorCode
        });
      });
    }, _this.onDeleteComment = function () {
      _this.props.onDeleteComment(_this.state.deleteCommentId);
      _this.setState({ deleteCommentId: undefined });
    }, _this.commentCards = function () {
      return _this.props.instance.comments.map(function (comment) {
        return comment.isEditMode ? _react2.default.createElement(_EditCard2.default, {
          key: comment.id,
          comment: comment,
          isAddMode: false,
          onDelete: function onDelete() {
            return _this.setState({ deleteCommentId: comment.id });
          },
          onSubmit: function onSubmit(value) {
            return _this.props.onUpdateComment(new _Comment2.default(_extends({}, comment, { displayValue: value, isEditMode: false })));
          },
          colorCode: _this.props.instance.colorCode
        }) : _react2.default.createElement(_ViewCard2.default, {
          key: comment.id,
          comment: comment,
          onEditCommentClick: function onEditCommentClick() {
            return _this.props.onEditCommentClick(comment.id);
          },
          colorCode: _this.props.instance.colorCode,
          colorType: _this.props.instance.colorType
        });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InstanceSection, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _terraSpacer2.default,
        null,
        this.state.deleteCommentId && _react2.default.createElement(_DeleteCommentDialog2.default, {
          onCancel: function onCancel() {
            return _this2.setState({ deleteCommentId: undefined });
          },
          onOk: this.onDeleteComment
        }),
        _react2.default.createElement(_Title2.default, {
          displayValue: this.props.instance.title,
          onChange: this.props.onInstanceTitleChange,
          isColorPickerVisible: true,
          defaultColorCode: this.props.instance.colorCode,
          defaultColorType: this.props.instance.colorType,
          onColorChange: this.props.onColorChange
        }),
        _react2.default.createElement(_terraButton2.default, {
          text: 'Add Comment',
          isIconOnly: true,
          icon: _react2.default.createElement(_IconAdd2.default, null),
          isBlock: true,
          onClick: this.onAddNewCommentButtonClick }),
        this.getAddCards(),
        this.commentCards()
      );
    }
  }]);

  return InstanceSection;
}(_react2.default.Component);

InstanceSection.propTypes = {
  instance: _proptypes2.default.instanceOf(_Instance2.default).isRequired,
  onAddComment: _proptypes2.default.func,
  onEditCommentClick: _proptypes2.default.func,
  onDeleteComment: _proptypes2.default.func,
  onUpdateComment: _proptypes2.default.func,
  onInstanceTitleChange: _proptypes2.default.func,
  onColorChange: _proptypes2.default.func
};
InstanceSection.defaultProps = {
  onEditCommentClick: function onEditCommentClick() {},
  onDeleteComment: function onDeleteComment() {},
  onUpdateComment: function onUpdateComment() {},
  onInstanceTitleChange: function onInstanceTitleChange() {},
  onColorChange: function onColorChange() {}
};
exports.default = InstanceSection;