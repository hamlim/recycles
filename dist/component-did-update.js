'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComponentDidUpdate = function (_Component) {
  _inherits(ComponentDidUpdate, _Component);

  function ComponentDidUpdate() {
    _classCallCheck(this, ComponentDidUpdate);

    return _possibleConstructorReturn(this, (ComponentDidUpdate.__proto__ || Object.getPrototypeOf(ComponentDidUpdate)).apply(this, arguments));
  }

  _createClass(ComponentDidUpdate, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
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

  return ComponentDidUpdate;
}(_react.Component);

exports.default = ComponentDidUpdate;