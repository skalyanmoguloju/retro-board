'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _proptypes = require('proptypes');

var _proptypes2 = _interopRequireDefault(_proptypes);

var _terraSpacer = require('terra-spacer');

var _terraSpacer2 = _interopRequireDefault(_terraSpacer);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _terraFormInput = require('terra-form-input');

var _terraFormInput2 = _interopRequireDefault(_terraFormInput);

var _IconEdit = require('terra-icon/lib/icon/IconEdit');

var _IconEdit2 = _interopRequireDefault(_IconEdit);

var _terraText = require('terra-text');

var _terraText2 = _interopRequireDefault(_terraText);

var _ColorPicker = require('../ColorPicker/ColorPicker');

var _ColorPicker2 = _interopRequireDefault(_ColorPicker);

var _ColorCode = require('../../models/ColorCode');

var _ColorCode2 = _interopRequireDefault(_ColorCode);

var _ColorType = require('../../models/ColorType');

var _ColorType2 = _interopRequireDefault(_ColorType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = function (_React$Component) {
  _inherits(Title, _React$Component);

  function Title() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Title);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Title.__proto__ || Object.getPrototypeOf(Title)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      editMode: false,
      titleText: _this.props.displayValue,
      showEditIcon: false
    }, _this.setEditMode = function (mode) {
      _this.setState({ editMode: mode });
    }, _this.setEditIcon = function (value) {
      _this.setState({ showEditIcon: value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Title, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _terraSpacer2.default,
        null,
        this.state.editMode ? _react2.default.createElement(
          _terraSpacer2.default,
          { margin: 'small-2' },
          _react2.default.createElement(_terraFormInput2.default, {
            defaultValue: this.state.titleText,
            onChange: function onChange(event) {
              _this2.setState({ titleText: event.target.value });
            }
          }),
          _react2.default.createElement(
            _terraSpacer2.default,
            { marginTop: 'small-2', isInlineBlock: true },
            _react2.default.createElement(_terraButton2.default, {
              isCompact: true,
              text: 'Save',
              variant: 'emphasis',
              onClick: function onClick() {
                _this2.setEditMode(false);_this2.props.onChange(_this2.state.titleText);
              }
            }),
            _react2.default.createElement(
              _terraSpacer2.default,
              { marginLeft: 'small-2', isInlineBlock: true },
              _react2.default.createElement(_terraButton2.default, {
                isCompact: true,
                text: 'Cancel',
                variant: 'de-emphasis',
                onClick: function onClick() {
                  return _this2.setEditMode(false);
                }
              })
            )
          )
        ) : _react2.default.createElement(
          _terraSpacer2.default,
          { isInlineBlock: true },
          this.props.isColorPickerVisible && _react2.default.createElement(_ColorPicker2.default, {
            defaultColorType: this.props.defaultColorType,
            defaultColorCode: this.props.defaultColorCode,
            onColorChange: this.props.onColorChange
          }),
          _react2.default.createElement(
            _terraSpacer2.default,
            {
              isInlineBlock: true,
              onClick: function onClick() {
                return _this2.setEditMode(true);
              },
              style: { cursor: "pointer" },
              onMouseOver: function onMouseOver() {
                return _this2.setEditIcon(true);
              },
              onMouseOut: function onMouseOut() {
                return _this2.setEditIcon(false);
              }

            },
            _react2.default.createElement(
              _terraText2.default,
              { weight: 700, fontSize: 16 },
              this.props.displayValue
            ),
            this.state.showEditIcon && _react2.default.createElement(
              _terraSpacer2.default,
              { isInlineBlock: true },
              _react2.default.createElement(_terraButton2.default, {
                isCompact: true,
                isIconOnly: true,
                text: 'edit',
                icon: _react2.default.createElement(_IconEdit2.default, null),
                variant: 'utility',
                onClick: function onClick() {
                  return _this2.setEditMode(true);
                }
              })
            )
          )
        )
      );
    }
  }]);

  return Title;
}(_react2.default.Component);

Title.propTypes = {
  displayValue: _proptypes2.default.string,
  onChange: _proptypes2.default.func,
  isColorPickerVisible: _proptypes2.default.bool,
  defaultColorCode: _proptypes2.default.string,
  defaultColorType: _proptypes2.default.string,
  onColorChange: _proptypes2.default.func
};
Title.defaultProps = {
  displayValue: '',
  onChange: function onChange() {},
  isColorPickerVisible: false,
  defaultColorCode: _ColorCode2.default.GREEN,
  defaultColorType: _ColorType2.default.FILL,
  onColorChange: function onColorChange() {}
};
exports.default = Title;