'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _proptypes = require('proptypes');

var _proptypes2 = _interopRequireDefault(_proptypes);

var _terraActionFooter = require('terra-action-footer');

var _terraActionFooter2 = _interopRequireDefault(_terraActionFooter);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _terraSpacer = require('terra-spacer');

var _terraSpacer2 = _interopRequireDefault(_terraSpacer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialogFooter = function DialogFooter(props) {
  return _react2.default.createElement(_terraActionFooter2.default, {
    end: _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement(
        _terraSpacer2.default,
        { isInlineBlock: true, marginRight: 'medium' },
        _react2.default.createElement(_terraButton2.default, { text: props.okButtonText, variant: _terraButton2.default.Opts.Variants.EMPHASIS, onClick: props.onOk })
      ),
      _react2.default.createElement(_terraButton2.default, { text: props.cancelButtonText, onClick: props.onCancel })
    )
  });
};

DialogFooter.propTypes = {
  onOk: _proptypes2.default.func,
  onCancel: _proptypes2.default.func,
  okButtonText: _proptypes2.default.string.isRequired,
  cancelButtonText: _proptypes2.default.string.isRequired
};

DialogFooter.defaultProps = {
  onOk: function onOk() {},
  onCancel: function onCancel() {}
};

exports.default = DialogFooter;