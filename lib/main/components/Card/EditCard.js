'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _proptypes = require('proptypes');

var _proptypes2 = _interopRequireDefault(_proptypes);

var _terraCard = require('terra-card');

var _terraCard2 = _interopRequireDefault(_terraCard);

var _terraGrid = require('terra-grid');

var _terraGrid2 = _interopRequireDefault(_terraGrid);

var _terraFormTextarea = require('terra-form-textarea');

var _terraFormTextarea2 = _interopRequireDefault(_terraFormTextarea);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _terraArrange = require('terra-arrange');

var _terraArrange2 = _interopRequireDefault(_terraArrange);

var _terraSpacer = require('terra-spacer');

var _terraSpacer2 = _interopRequireDefault(_terraSpacer);

var _terraPopup = require('terra-popup');

var _terraPopup2 = _interopRequireDefault(_terraPopup);

var _fa = require('react-icons/fa');

var _IconTrash = require('terra-icon/lib/icon/IconTrash');

var _IconTrash2 = _interopRequireDefault(_IconTrash);

require('emoji-mart/css/emoji-mart.css');

var _emojiMart = require('emoji-mart');

var _Comment = require('../../models/Comment');

var _Comment2 = _interopRequireDefault(_Comment);

var _ColorCode = require('../../models/ColorCode');

var _ColorCode2 = _interopRequireDefault(_ColorCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditCard = function (_React$Component) {
  _inherits(EditCard, _React$Component);

  function EditCard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EditCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditCard.__proto__ || Object.getPrototypeOf(EditCard)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isEmojiOpen: false,
      text: _this.props.comment.displayValue ? _this.props.comment.displayValue : ''
    }, _this.setEmojiPickerNode = function (node) {
      _this.linkNode = node;
    }, _this.getEmojiPickerNode = function () {
      return _this.linkNode;
    }, _this.onSelection = function (e) {
      if (e.unified.length <= 5) {
        var emojiPic = String.fromCodePoint('0x' + e.unified);
        _this.setState({
          text: _this.state.text + emojiPic
        });
      } else {
        var sym = e.unified.split('-');
        var codesArray = [];
        sym.forEach(function (el) {
          return codesArray.push('0x' + el);
        });
        var _emojiPic = String.fromCodePoint.apply(String, codesArray);
        _this.setState({
          text: _this.state.text + _emojiPic
        });
      }
    }, _this.onChange = function (e) {
      _this.setState({
        text: e.target.value
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EditCard, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _terraSpacer2.default,
        { marginBottom: 'small', marginTop: 'small' },
        _react2.default.createElement(
          _terraCard2.default,
          { style: { backgroundColor: this.props.colorCode } },
          _react2.default.createElement(
            _terraSpacer2.default,
            { padding: 'small' },
            _react2.default.createElement(
              _terraCard2.default.Body,
              { style: { backgroundColor: "white", padding: "0.2em" } },
              _react2.default.createElement(
                _terraGrid2.default,
                null,
                _react2.default.createElement(
                  _terraGrid2.default.Row,
                  null,
                  _react2.default.createElement(
                    _terraGrid2.default.Column,
                    null,
                    _react2.default.createElement(_terraArrange2.default, {
                      fill: _react2.default.createElement(_terraFormTextarea2.default, {
                        value: this.state.text,
                        onChange: this.onChange
                      }),
                      fitEnd: _react2.default.createElement(
                        _terraSpacer2.default,
                        { marginLeft: 'small-2' },
                        _react2.default.createElement(
                          'span',
                          { ref: this.setEmojiPickerNode, onClick: function onClick() {
                              return _this2.setState({ isEmojiOpen: true });
                            } },
                          _react2.default.createElement(_fa.FaSmile, { style: { color: this.props.colorCode, cursor: "pointer" } })
                        )
                      )
                    })
                  )
                ),
                _react2.default.createElement(
                  _terraGrid2.default.Row,
                  null,
                  _react2.default.createElement(
                    _terraGrid2.default.Column,
                    null,
                    _react2.default.createElement(_terraArrange2.default, {
                      fill: _react2.default.createElement(
                        _terraSpacer2.default,
                        null,
                        _react2.default.createElement(_terraButton2.default, {
                          isCompact: true,
                          text: this.props.isAddMode ? 'Add' : 'Done',
                          variant: 'emphasis',
                          onClick: function onClick() {
                            return _this2.props.onSubmit(_this2.state.text);
                          }
                        })
                      ),
                      fitEnd: _react2.default.createElement(
                        _terraSpacer2.default,
                        null,
                        _react2.default.createElement(
                          _terraSpacer2.default,
                          { isInlineBlock: true },
                          _react2.default.createElement(_terraButton2.default, {
                            isCompact: true,
                            isIconOnly: true,
                            text: 'delete',
                            icon: _react2.default.createElement(_IconTrash2.default, { style: { color: "red" } }),
                            variant: 'utility',
                            onClick: this.props.onDelete
                          })
                        )
                      ),
                      alignFitEnd: 'bottom'
                    })
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _terraPopup2.default,
          {
            isArrowDisplayed: true,
            isOpen: this.state.isEmojiOpen,
            targetRef: this.getEmojiPickerNode,
            onRequestClose: function onRequestClose() {
              return _this2.setState({ isEmojiOpen: false });
            },
            contentHeight: 'auto',
            contentWidth: 'auto',
            contentAttachment: 'middle left',
            'data-rule-result-popup': true
          },
          _react2.default.createElement(_emojiMart.Picker, { showPreview: false, title: '', showSkinTones: false, onSelect: this.onSelection })
        )
      );
    }
  }]);

  return EditCard;
}(_react2.default.Component);

EditCard.propTypes = {
  comment: _proptypes2.default.instanceOf(_Comment2.default).isRequired,
  isAddMode: _proptypes2.default.bool,
  onSubmit: _proptypes2.default.func,
  onDelete: _proptypes2.default.func,
  colorCode: _proptypes2.default.string
};
EditCard.defaultProps = {
  isAddMode: true,
  onSubmit: function onSubmit() {},
  onDelete: function onDelete() {},
  colorCode: _ColorCode2.default.GREEN
};
exports.default = EditCard;