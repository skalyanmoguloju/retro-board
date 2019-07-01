'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Main = require('../Main');

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseApp = function BaseApp() {
  return _react2.default.createElement(_Main2.default, null);
};

(0, _reactDom.render)(_react2.default.createElement(BaseApp, null), document.getElementById('app'));