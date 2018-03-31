'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComponentWillUnmount = function (_Component) {
  _inherits(ComponentWillUnmount, _Component);

  function ComponentWillUnmount() {
    _classCallCheck(this, ComponentWillUnmount);

    return _possibleConstructorReturn(this, (ComponentWillUnmount.__proto__ || Object.getPrototypeOf(ComponentWillUnmount)).apply(this, arguments));
  }

  _createClass(ComponentWillUnmount, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.callback !== null) {
        this.props.callback();
      } else {
        this.props.children();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.callback !== null) {
        return this.props.children();
      } else {
        return null;
      }
    }
  }]);

  return ComponentWillUnmount;
}(_react.Component);

exports.default = ComponentWillUnmount;

ComponentWillUnmount.defaultProps = {
  callback: null
};