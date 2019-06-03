'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _proptypes = require('proptypes');

var _proptypes2 = _interopRequireDefault(_proptypes);

var _terraCard = require('terra-card');

var _terraCard2 = _interopRequireDefault(_terraCard);

var _terraGrid = require('terra-grid');

var _terraGrid2 = _interopRequireDefault(_terraGrid);

var _terraText = require('terra-text');

var _terraText2 = _interopRequireDefault(_terraText);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _terraArrange = require('terra-arrange');

var _terraArrange2 = _interopRequireDefault(_terraArrange);

var _terraSpacer = require('terra-spacer');

var _terraSpacer2 = _interopRequireDefault(_terraSpacer);

var _IconEdit = require('terra-icon/lib/icon/IconEdit');

var _IconEdit2 = _interopRequireDefault(_IconEdit);

var _fa = require('react-icons/fa');

require('emoji-mart/css/emoji-mart.css');

var _Comment = require('../../models/Comment');

var _Comment2 = _interopRequireDefault(_Comment);

var _ColorCode = require('../../models/ColorCode');

var _ColorCode2 = _interopRequireDefault(_ColorCode);

var _ColorType = require('../../models/ColorType');

var _ColorType2 = _interopRequireDefault(_ColorType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ViewCard = function ViewCard(props) {
  var fontColor = props.colorType === _ColorType2.default.FILL ? "white" : "black";
  return _react2.default.createElement(
    _terraSpacer2.default,
    {
      marginTop: 'small',
      marginBottom: 'small',
      paddingLeft: props.colorType === _ColorType2.default.BORDER ? 'small-2' : undefined,
      style: { backgroundColor: props.colorType === _ColorType2.default.BORDER ? props.colorCode : "white" }
    },
    _react2.default.createElement(
      _terraSpacer2.default,
      { style: { backgroundColor: props.colorType === _ColorType2.default.BORDER ? "white" : undefined } },
      _react2.default.createElement(
        _terraCard2.default,
        { style: { backgroundColor: props.colorType === _ColorType2.default.FILL ? props.colorCode : "white" } },
        _react2.default.createElement(
          _terraCard2.default.Body,
          { style: { padding: "0.2em" } },
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
                  fill: _react2.default.createElement(
                    _terraText2.default,
                    { style: { color: fontColor } },
                    props.comment.displayValue
                  ),
                  fitEnd: _react2.default.createElement(_terraButton2.default, {
                    isCompact: true,
                    isIconOnly: true,
                    text: 'edit',
                    icon: _react2.default.createElement(_IconEdit2.default, { style: { color: fontColor } }),
                    variant: 'utility',
                    onClick: props.onEditCommentClick
                  })
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
                  fill: _react2.default.createElement('div', null),
                  fitEnd: _react2.default.createElement(
                    _terraSpacer2.default,
                    null,
                    _react2.default.createElement(
                      _terraSpacer2.default,
                      { marginRight: 'small', isInlineBlock: true },
                      _react2.default.createElement(_fa.FaThumbsUp, { style: { color: fontColor, cursor: "pointer" } }),
                      _react2.default.createElement(
                        _terraSpacer2.default,
                        { marginLeft: 'small-2', isInlineBlock: true },
                        _react2.default.createElement(
                          _terraText2.default,
                          { style: { color: fontColor }, weight: 700 },
                          '0'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      _terraSpacer2.default,
                      { isInlineBlock: true },
                      _react2.default.createElement(_fa.FaComment, { style: { color: fontColor, cursor: "pointer" } }),
                      _react2.default.createElement(
                        _terraSpacer2.default,
                        { marginLeft: 'small-2', isInlineBlock: true },
                        _react2.default.createElement(
                          _terraText2.default,
                          { style: { color: fontColor }, weight: 700 },
                          '0'
                        )
                      )
                    )
                  ),
                  alignFitEnd: 'bottom'
                })
              )
            )
          )
        )
      )
    )
  );
};

ViewCard.propTypes = {
  comment: _proptypes2.default.instanceOf(_Comment2.default).isRequired,
  onUpdateClick: _proptypes2.default.func,
  onEditCommentClick: _proptypes2.default.func,
  colorCode: _proptypes2.default.string,
  colorType: _proptypes2.default.string
};

ViewCard.defaultProp = {
  onUpdateClick: function onUpdateClick() {},
  onEditCommentClick: function onEditCommentClick() {},
  colorCode: _ColorCode2.default.GREEN,
  colorType: _ColorType2.default.FILL
};

exports.default = ViewCard;