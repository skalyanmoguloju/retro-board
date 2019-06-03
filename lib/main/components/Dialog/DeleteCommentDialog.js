'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _proptypes = require('proptypes');

var _proptypes2 = _interopRequireDefault(_proptypes);

var _terraDialogModal = require('terra-dialog-modal');

var _terraDialogModal2 = _interopRequireDefault(_terraDialogModal);

var _terraArrange = require('terra-arrange');

var _terraArrange2 = _interopRequireDefault(_terraArrange);

var _terraText = require('terra-text');

var _terraText2 = _interopRequireDefault(_terraText);

var _IconWarning = require('terra-icon/lib/icon/IconWarning');

var _IconWarning2 = _interopRequireDefault(_IconWarning);

var _terraActionHeader = require('terra-action-header');

var _terraActionHeader2 = _interopRequireDefault(_terraActionHeader);

var _terraSpacer = require('terra-spacer');

var _terraSpacer2 = _interopRequireDefault(_terraSpacer);

var _DialogFooter = require('./DialogFooter');

var _DialogFooter2 = _interopRequireDefault(_DialogFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeleteCommentDialog = function (_React$Component) {
  _inherits(DeleteCommentDialog, _React$Component);

  function DeleteCommentDialog() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DeleteCommentDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DeleteCommentDialog.__proto__ || Object.getPrototypeOf(DeleteCommentDialog)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      inputValue: ''
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DeleteCommentDialog, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _terraDialogModal2.default,
        {
          isOpen: true,
          ariaLabel: 'Delete Comment',
          onRequestClose: this.props.onCancel,
          header: _react2.default.createElement(_terraActionHeader2.default, {
            title: 'Delete Comment'
          }),
          footer: _react2.default.createElement(_DialogFooter2.default, {
            onCancel: this.props.onCancel,
            onOk: this.props.onOk,
            okButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
          })
        },
        _react2.default.createElement(_terraArrange2.default, {
          fitStart: _react2.default.createElement(_IconWarning2.default, { height: '3em', width: '3em' }),
          fill: _react2.default.createElement(
            _terraSpacer2.default,
            { marginLeft: 'small' },
            _react2.default.createElement(
              _terraText2.default,
              null,
              'Are you sure you want to delete?'
            )
          ),
          alignFill: 'center'
        })
      );
    }
  }]);

  return DeleteCommentDialog;
}(_react2.default.Component);

DeleteCommentDialog.propTypes = {
  onCancel: _proptypes2.default.func,
  onOk: _proptypes2.default.func
};
DeleteCommentDialog.defaultProps = {
  onCancel: function onCancel() {},
  onOk: function onOk() {}
};
exports.default = DeleteCommentDialog;