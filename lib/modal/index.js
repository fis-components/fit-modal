'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = (function (_React$Component) {
    _inherits(Checkbox, _React$Component);

    function Checkbox(props) {
        _classCallCheck(this, Checkbox);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Checkbox).call(this, props));
    }

    // 确定

    _createClass(Checkbox, [{
        key: 'handleOk',
        value: function handleOk() {
            this.props.onOk();
        }

        // 取消

    }, {
        key: 'handleCancel',
        value: function handleCancel() {
            this.props.onCancel();
        }
    }, {
        key: 'handleOutClick',
        value: function handleOutClick() {
            this.handleCancel();
        }
    }, {
        key: 'handleModalClick',
        value: function handleModalClick(event) {
            event.stopPropagation();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'lib-pc-modal-lib-modal modal fade in',
                    onClick: this.handleOutClick.bind(this),
                    tabIndex: '-1',
                    style: { display: this.props.show ? 'block' : null } },
                _react2.default.createElement(
                    'div',
                    { className: 'modal-dialog',
                        onClick: this.handleModalClick.bind(this) },
                    _react2.default.createElement(
                        'div',
                        { className: 'modal-content' },
                        this.props.title === '' ? null : _react2.default.createElement(
                            'div',
                            { className: 'modal-header' },
                            _react2.default.createElement(
                                'button',
                                { type: 'button',
                                    className: 'close' },
                                _react2.default.createElement(
                                    'span',
                                    { onClick: this.handleCancel.bind(this) },
                                    '×'
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'sr-only' },
                                    'Close'
                                )
                            ),
                            _react2.default.createElement(
                                'h4',
                                { className: 'modal-title' },
                                this.props.title
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'modal-body',
                                style: { marginTop: this.props.title === '' ? 20 : null } },
                            this.props.children
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'modal-footer' },
                            _react2.default.createElement(
                                'button',
                                { type: 'button',
                                    onClick: this.handleCancel.bind(this),
                                    className: 'btn btn-secondary' },
                                this.props.cancelText
                            ),
                            _react2.default.createElement(
                                'button',
                                { type: 'button',
                                    className: 'btn btn-primary',
                                    onClick: this.handleOk.bind(this) },
                                this.props.okText
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Checkbox;
})(_react2.default.Component);

exports.default = Checkbox;

Checkbox.defaultProps = {
    cancelText: '取消',
    okText: '确定',
    show: false,
    title: '',
    onOk: function onOk() {},
    onCancel: function onCancel() {}
};