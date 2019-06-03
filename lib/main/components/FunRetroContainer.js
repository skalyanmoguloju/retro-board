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

var _terraSlidePanel = require('terra-slide-panel');

var _terraSlidePanel2 = _interopRequireDefault(_terraSlidePanel);

var _Header = require('./Header/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Instance = require('../models/Instance');

var _Instance2 = _interopRequireDefault(_Instance);

var _Board = require('./Board/Board');

var _Board2 = _interopRequireDefault(_Board);

var _Comment = require('../models/Comment');

var _Comment2 = _interopRequireDefault(_Comment);

var _terraContentContainer = require('terra-content-container');

var _terraContentContainer2 = _interopRequireDefault(_terraContentContainer);

var _SettingsPanel = require('./SettingsPanel/SettingsPanel');

var _SettingsPanel2 = _interopRequireDefault(_SettingsPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FunRetroContainer = function (_React$Component) {
  _inherits(FunRetroContainer, _React$Component);

  function FunRetroContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FunRetroContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FunRetroContainer.__proto__ || Object.getPrototypeOf(FunRetroContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      instances: [new _Instance2.default({ title: 'kalyan' })],
      title: 'Header',
      showSettingsPanel: false
    }, _this.onAddColumnClick = function (value) {
      if (value.trim().length > 0) {
        var instances = _this.state.instances;

        instances.push(new _Instance2.default({ title: value }));
        _this.setState({ instances: instances });
      }
    }, _this.onAddComment = function (instanceId, comment) {
      var addComment = function addComment(instance) {
        instance.comments.push(comment);
        return instance;
      };
      var updatedInstances = _this.state.instances.map(function (instance) {
        return instance.id === instanceId ? addComment(instance) : instance;
      });
      _this.setState({ instances: updatedInstances });
    }, _this.onEditCommentClick = function (instanceId, commentId) {
      var editComment = function editComment(instance) {
        var updatedComments = instance.comments.map(function (comment) {
          return comment.id === commentId ? new _Comment2.default(_extends({}, comment, { isEditMode: true })) : comment;
        });
        return new _Instance2.default(_extends({}, instance, { comments: updatedComments }));
      };

      var updatedInstances = _this.state.instances.map(function (instance) {
        return instance.id === instanceId ? editComment(instance) : instance;
      });
      _this.setState({ instances: updatedInstances });
    }, _this.onDeleteComment = function (instanceId, commentId) {
      var deleteComment = function deleteComment(instance) {
        var updatedComments = instance.comments.filter(function (comment) {
          return comment.id !== commentId;
        });
        return new _Instance2.default(_extends({}, instance, { comments: updatedComments }));
      };

      var updatedInstances = _this.state.instances.map(function (instance) {
        return instance.id === instanceId ? deleteComment(instance) : instance;
      });
      _this.setState({ instances: updatedInstances });
    }, _this.onColorChange = function (instanceId, colorCode, colorType) {
      var updatedInstances = _this.state.instances.map(function (instance) {
        return instance.id === instanceId ? new _Instance2.default(_extends({}, instance, { colorCode: colorCode, colorType: colorType })) : instance;
      });
      _this.setState({ instances: updatedInstances });
    }, _this.onUpdateComment = function (instanceId, comment) {
      var updateComment = function updateComment(instance) {
        var updatedComments = instance.comments.map(function (c) {
          return comment.id === c.id ? comment : c;
        });
        return new _Instance2.default(_extends({}, instance, { comments: updatedComments }));
      };

      var updatedInstances = _this.state.instances.map(function (instance) {
        return instance.id === instanceId ? updateComment(instance) : instance;
      });
      _this.setState({ instances: updatedInstances });
    }, _this.onInstanceTitleChange = function (instanceId, title) {
      var updatedInstances = _this.state.instances.map(function (instance) {
        return instance.id === instanceId ? new _Instance2.default(_extends({}, instance, { title: title })) : instance;
      });
      _this.setState({ instances: updatedInstances });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FunRetroContainer, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_terraSlidePanel2.default, {
        fill: true,
        mainContent: _react2.default.createElement(
          _terraContentContainer2.default,
          {
            style: { height: "100%", backgroundColor: "#ECECF0" },
            header: _react2.default.createElement(_Header2.default, {
              onAddColumnClick: this.onAddColumnClick,
              title: this.state.title,
              onTitleChange: function onTitleChange(title) {
                return _this2.setState({ title: title });
              },
              onSettingsClick: function onSettingsClick() {
                return _this2.setState({ showSettingsPanel: true });
              }
            })
          },
          _react2.default.createElement(_Board2.default, {
            instances: this.state.instances,
            onAddComment: this.onAddComment,
            onEditCommentClick: this.onEditCommentClick,
            onDeleteComment: this.onDeleteComment,
            onUpdateComment: this.onUpdateComment,
            onInstanceTitleChange: this.onInstanceTitleChange,
            onColorChange: this.onColorChange
          })
        ),
        panelContent: _react2.default.createElement(_SettingsPanel2.default, {
          onCloseSettingsPanel: function onCloseSettingsPanel() {
            return _this2.setState({ showSettingsPanel: false });
          }
        }),
        isOpen: this.state.showSettingsPanel
      });
    }
  }]);

  return FunRetroContainer;
}(_react2.default.Component);

exports.default = FunRetroContainer;