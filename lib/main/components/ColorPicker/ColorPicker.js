'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _proptypes = require('proptypes');

var _proptypes2 = _interopRequireDefault(_proptypes);

var _terraGrid = require('terra-grid');

var _terraGrid2 = _interopRequireDefault(_terraGrid);

var _terraSpacer = require('terra-spacer');

var _terraSpacer2 = _interopRequireDefault(_terraSpacer);

var _terraPopup = require('terra-popup');

var _terraPopup2 = _interopRequireDefault(_terraPopup);

var _ColorCode = require('../../models/ColorCode');

var _ColorCode2 = _interopRequireDefault(_ColorCode);

var _ColorType = require('../../models/ColorType');

var _ColorType2 = _interopRequireDefault(_ColorType);

var _IconBusy = require('terra-icon/lib/icon/IconBusy');

var _IconBusy2 = _interopRequireDefault(_IconBusy);

var _IconUnavailable = require('terra-icon/lib/icon/IconUnavailable');

var _IconUnavailable2 = _interopRequireDefault(_IconUnavailable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorPicker = function (_React$Component) {
  _inherits(ColorPicker, _React$Component);

  function ColorPicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ColorPicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isOpen: false
    }, _this.getColorButton = function (colorCode, colorType, onClickAction) {
      return _react2.default.createElement(
        'div',
        { onClick: function onClick() {
            return onClickAction(colorCode, colorType);
          } },
        colorType === _ColorType2.default.FILL ? _react2.default.createElement(_IconBusy2.default, { style: { color: colorCode } }) : _react2.default.createElement(_IconUnavailable2.default, { style: { color: colorCode } })
      );
    }, _this.setColorPickerNode = function (node) {
      _this.linkNode = node;
    }, _this.getColorPickerNode = function () {
      return _this.linkNode;
    }, _this.togglePickerVisibility = function () {
      _this.setState({ isOpen: !_this.state.isOpen });
    }, _this.onColorChange = function (colorCode, colorType) {
      _this.props.onColorChange(colorCode, colorType);
      _this.togglePickerVisibility();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ColorPicker, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _terraSpacer2.default,
        { isInlineBlock: true, marginRight: 'small-2' },
        _react2.default.createElement(
          'span',
          {
            ref: this.setColorPickerNode,
            style: { cursor: 'pointer' }
          },
          this.getColorButton(this.props.defaultColorCode, this.props.defaultColorType, this.togglePickerVisibility)
        ),
        _react2.default.createElement(
          _terraPopup2.default,
          {
            isArrowDisplayed: true,
            isOpen: this.state.isOpen,
            targetRef: this.getColorPickerNode,
            onRequestClose: function onRequestClose() {
              return _this2.setState({ isOpen: false });
            },
            contentHeight: 'auto',
            contentWidth: 'auto',
            contentAttachment: 'middle left'
          },
          _react2.default.createElement(
            _terraSpacer2.default,
            { margin: 'small' },
            _react2.default.createElement(
              _terraGrid2.default,
              null,
              _react2.default.createElement(
                _terraGrid2.default.Row,
                null,
                _react2.default.createElement(
                  _terraGrid2.default.Column,
                  { tiny: 3 },
                  this.getColorButton(_ColorCode2.default.GREEN, _ColorType2.default.FILL, this.onColorChange)
                ),
                _react2.default.createElement(
                  _terraGrid2.default.Column,
                  { tiny: 3 },
                  this.getColorButton(_ColorCode2.default.PINK, _ColorType2.default.FILL, this.onColorChange)
                ),
                _react2.default.createElement(
                  _terraGrid2.default.Column,
                  { tiny: 3 },
                  this.getColorButton(_ColorCode2.default.LAVENDER, _ColorType2.default.FILL, this.onColorChange)
                ),
                _react2.default.createElement(
                  _terraGrid2.default.Column,
                  { tiny: 3 },
                  this.getColorButton(_ColorCode2.default.DARK_BLUE, _ColorType2.default.FILL, this.onColorChange)
                )
              ),
              _react2.default.createElement(
                _terraGrid2.default.Row,
                null,
                _react2.default.createElement(
                  _terraGrid2.default.Column,
                  { tiny: 3 },
                  this.getColorButton(_ColorCode2.default.LIGHT_BLUE, _ColorType2.default.FILL, this.onColorChange)
                ),
                _react2.default.createElement(
                  _terraGrid2.default.Column,
                  { tiny: 3 },
                  this.getColorButton(_ColorCode2.default.ORANGE, _ColorType2.default.FILL, this.onColorChange)
                ),
                _react2.default.createElement(
                  _terraGrid2.default.Column,
                  { tiny: 3 },
                  this.getColorButton(_ColorCode2.default.GREEN, _ColorType2.default.BORDER, this.onColorChange)
                ),
                _react2.default.createElement(
                  _terraGrid2.default.Column,
                  { tiny: 3 },
                  this.getColorButton(_ColorCode2.default.PINK, _ColorType2.default.BORDER, this.onColorChange)
                )
              ),
              _react2.default.createElement(
                _terraGrid2.default.Row,
                null,
                _react2.default.createElement(
                  _terraGrid2.default.Column,
                  { tiny: 3 },
                  this.getColorButton(_ColorCode2.default.LAVENDER, _ColorType2.default.BORDER, this.onColorChange)
                ),
                _react2.default.createElement(
                  _terraGrid2.default.Column,
                  { tiny: 3 },
                  this.getColorButton(_ColorCode2.default.DARK_BLUE, _ColorType2.default.BORDER, this.onColorChange)
                ),
                _react2.default.createElement(
                  _terraGrid2.default.Column,
                  { tiny: 3 },
                  this.getColorButton(_ColorCode2.default.LIGHT_BLUE, _ColorType2.default.BORDER, this.onColorChange)
                ),
                _react2.default.createElement(
                  _terraGrid2.default.Column,
                  { tiny: 3 },
                  this.getColorButton(_ColorCode2.default.ORANGE, _ColorType2.default.BORDER, this.onColorChange)
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ColorPicker;
}(_react2.default.Component);

ColorPicker.propTypes = {
  defaultColorCode: _proptypes2.default.string,
  defaultColorType: _proptypes2.default.string,
  onColorChange: _proptypes2.default.func
};
ColorPicker.defaultProps = {
  defaultColorCode: _ColorCode2.default.GREEN,
  defaultColorType: _ColorType2.default.FILL,
  onColorChange: function onColorChange() {}
};
exports.default = ColorPicker;