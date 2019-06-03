'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _proptypes = require('proptypes');

var _proptypes2 = _interopRequireDefault(_proptypes);

var _terraSpacer = require('terra-spacer');

var _terraSpacer2 = _interopRequireDefault(_terraSpacer);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _terraActionHeader = require('terra-action-header');

var _terraActionHeader2 = _interopRequireDefault(_terraActionHeader);

var _IconUpload = require('terra-icon/lib/icon/IconUpload');

var _IconUpload2 = _interopRequireDefault(_IconUpload);

var _IconClipboard = require('terra-icon/lib/icon/IconClipboard');

var _IconClipboard2 = _interopRequireDefault(_IconClipboard);

var _IconDownload = require('terra-icon/lib/icon/IconDownload');

var _IconDownload2 = _interopRequireDefault(_IconDownload);

var _IconComment = require('terra-icon/lib/icon/IconComment');

var _IconComment2 = _interopRequireDefault(_IconComment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SettingsPanel = function SettingsPanel(props) {
  var getButton = function getButton(text, icon) {
    return _react2.default.createElement(_terraButton2.default, {
      style: { border: 0, height: '3em', textAlign: 'left' },
      text: text,
      icon: icon,
      variant: 'ghost',
      isBlock: true });
  };
  return _react2.default.createElement(
    _terraSpacer2.default,
    null,
    _react2.default.createElement(_terraActionHeader2.default, {
      onClose: props.onCloseSettingsPanel
    }),
    _react2.default.createElement(
      _terraSpacer2.default,
      { margin: 'large+2' },
      getButton("Copy board to clipboard", _react2.default.createElement(_IconClipboard2.default, null)),
      getButton("Export board to PDF", _react2.default.createElement(_IconDownload2.default, null)),
      getButton("Export board to CSV", _react2.default.createElement(_IconDownload2.default, null)),
      getButton("Export board to JPG", _react2.default.createElement(_IconDownload2.default, null)),
      getButton("Import CSV", _react2.default.createElement(_IconUpload2.default, null)),
      getButton("Show/hide comments", _react2.default.createElement(_IconComment2.default, null))
    )
  );
};

SettingsPanel.propTypes = {
  onCloseSettingsPanel: _proptypes2.default.func
};

SettingsPanel.defaultProp = {
  onCloseSettingsPanel: function onCloseSettingsPanel() {}
};

exports.default = SettingsPanel;