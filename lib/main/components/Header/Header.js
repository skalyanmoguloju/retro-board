'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _proptypes = require('proptypes');

var _proptypes2 = _interopRequireDefault(_proptypes);

var _terraClinicalHeader = require('terra-clinical-header');

var _terraClinicalHeader2 = _interopRequireDefault(_terraClinicalHeader);

var _terraSpacer = require('terra-spacer');

var _terraSpacer2 = _interopRequireDefault(_terraSpacer);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _IconSettings = require('terra-icon/lib/icon/IconSettings');

var _IconSettings2 = _interopRequireDefault(_IconSettings);

var _Title = require('../Title/Title');

var _Title2 = _interopRequireDefault(_Title);

var _NewColumnDialog = require('../Dialog/NewColumnDialog');

var _NewColumnDialog2 = _interopRequireDefault(_NewColumnDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isNewColumnDialogOpen: false
    }, _this.onNewColumnDialogOk = function (value) {
      _this.props.onAddColumnClick(value);
      _this.onNewColumnDialogCancel();
    }, _this.onNewColumnDialogCancel = function (value) {
      _this.setState({ isNewColumnDialogOpen: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _terraSpacer2.default,
        null,
        this.state.isNewColumnDialogOpen && _react2.default.createElement(_NewColumnDialog2.default, {
          onOk: this.onNewColumnDialogOk,
          onCancel: this.onNewColumnDialogCancel
        }),
        _react2.default.createElement(_terraClinicalHeader2.default, {
          startContent: _react2.default.createElement(
            _terraSpacer2.default,
            null,
            _react2.default.createElement(_Title2.default, {
              displayValue: this.props.title,
              onChange: this.props.onTitleChange
            })
          ),
          endContent: _react2.default.createElement(
            _terraSpacer2.default,
            null,
            _react2.default.createElement(_terraButton2.default, {
              text: 'Add Column',
              onClick: function onClick() {
                return _this2.setState({ isNewColumnDialogOpen: true });
              },
              variant: 'emphasis'
            }),
            _react2.default.createElement(_terraButton2.default, {
              text: 'Settings',
              onClick: this.props.onSettingsClick,
              icon: _react2.default.createElement(_IconSettings2.default, null),
              variant: 'de-emphasis'
            })
          )
        })
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

Header.propTypes = {
  onAddColumnClick: _proptypes2.default.func,
  title: _proptypes2.default.string,
  onTitleChange: _proptypes2.default.func,
  onSettingsClick: _proptypes2.default.func
};
Header.defaultProps = {
  onAddColumnClick: function onAddColumnClick() {},
  title: '',
  onTitleChange: function onTitleChange() {},
  onSettingsClick: function onSettingsClick() {}
};
exports.default = Header;