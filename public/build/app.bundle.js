webpackJsonp([1],{

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Formcontainer = __webpack_require__(192);

var _Formcontainer2 = _interopRequireDefault(_Formcontainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(113);
__webpack_require__(114);

var App = function App() {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_Formcontainer2.default, null)
	);
};

window.onload = function () {
	_reactDom2.default.render(_react2.default.createElement(_Formcontainer2.default, null), document.getElementById('wrapper'));
};

/***/ },

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Loginform = __webpack_require__(193);

var _Loginform2 = _interopRequireDefault(_Loginform);

var _Lostpass = __webpack_require__(194);

var _Lostpass2 = _interopRequireDefault(_Lostpass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormContainer = function (_Component) {
	_inherits(FormContainer, _Component);

	function FormContainer(props) {
		_classCallCheck(this, FormContainer);

		var _this = _possibleConstructorReturn(this, (FormContainer.__proto__ || Object.getPrototypeOf(FormContainer)).call(this, props));

		_this.state = {
			isLogin: true
		};
		_this.changeForm = _this.changeForm.bind(_this);
		return _this;
	}

	_createClass(FormContainer, [{
		key: 'changeForm',
		value: function changeForm(isLoginPass) {
			this.setState({
				isLogin: isLoginPass
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'container' },
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'div',
						{ id: 'formcontainer', className: 'col-md-4 col-md-offset-4' },
						this.state.isLogin ? _react2.default.createElement(_Loginform2.default, { onChange: this.changeForm }) : _react2.default.createElement(_Lostpass2.default, { onChange: this.changeForm })
					)
				)
			);
		}
	}]);

	return FormContainer;
}(_react.Component);

exports.default = FormContainer;

/***/ },

/***/ 193:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_Component) {
	_inherits(LoginForm, _Component);

	function LoginForm(props) {
		_classCallCheck(this, LoginForm);

		var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

		_this.onClick = _this.onClick.bind(_this);
		return _this;
	}

	_createClass(LoginForm, [{
		key: 'onClick',
		value: function onClick() {
			this.props.onChange(false);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'loginpanel', className: 'login-panel panel panel-default' },
				_react2.default.createElement(
					'div',
					{ className: 'panel-heading' },
					_react2.default.createElement(
						'h3',
						{ className: 'panel-title' },
						'H\xE3y \u0111\u0103ng nh\u1EADp!'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'panel-body' },
					_react2.default.createElement(
						'div',
						{ className: 'text-center' },
						'VTIGER CRM'
					),
					_react2.default.createElement(
						'form',
						{ role: 'form', method: 'post', action: '/login' },
						_react2.default.createElement(
							'fieldset',
							null,
							_react2.default.createElement(
								'div',
								{ className: 'form-group' },
								_react2.default.createElement('input', { className: 'form-control', placeholder: 'E-mail', name: 'email', autofocus: '', required: '', type: 'email' })
							),
							_react2.default.createElement(
								'div',
								{ className: 'form-group' },
								_react2.default.createElement('input', { className: 'form-control', placeholder: 'M\u1EADt kh\u1EA9u', name: 'pass', required: '', type: 'password' })
							),
							_react2.default.createElement(
								'button',
								{ className: 'btn btn-lg btn-success btn-block', type: 'submit' },
								' \u0110\u0103ng nh\u1EADp '
							),
							_react2.default.createElement(
								'a',
								{ className: 'btn btn-lg btn-warning btn-block', onClick: this.onClick },
								' Qu\xEAn m\u1EADt kh\u1EA9u? '
							)
						)
					)
				)
			);
		}
	}]);

	return LoginForm;
}(_react.Component);

exports.default = LoginForm;

/***/ },

/***/ 194:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LostpassForm = function (_Component) {
	_inherits(LostpassForm, _Component);

	function LostpassForm(props) {
		_classCallCheck(this, LostpassForm);

		var _this = _possibleConstructorReturn(this, (LostpassForm.__proto__ || Object.getPrototypeOf(LostpassForm)).call(this, props));

		_this.onClick = _this.onClick.bind(_this);
		return _this;
	}

	_createClass(LostpassForm, [{
		key: 'onClick',
		value: function onClick() {
			this.props.onChange(true);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'forgotpanel', className: 'login-panel panel panel-default' },
				_react2.default.createElement(
					'div',
					{ className: 'panel-heading' },
					_react2.default.createElement(
						'h3',
						{ className: 'panel-title' },
						'\u0110\u1ED5i m\u1EADt kh\u1EA9u'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'panel-body' },
					_react2.default.createElement(
						'form',
						{ role: 'form', method: 'post' },
						_react2.default.createElement(
							'fieldset',
							null,
							_react2.default.createElement(
								'div',
								{ className: 'form-group' },
								_react2.default.createElement('input', { className: 'form-control', placeholder: 'E-mail', name: 'email', autofocus: '', required: '', type: 'email' }),
								_react2.default.createElement('input', { name: 'forgot', value: '1', type: 'hidden' })
							),
							_react2.default.createElement(
								'button',
								{ className: 'btn btn-lg btn-success btn-block', type: 'submit' },
								'G\u1EEDi y\xEAu c\u1EA7u!'
							),
							_react2.default.createElement(
								'a',
								{ className: 'btn btn-lg btn-warning btn-block', onClick: this.onClick },
								'Quay l\u1EA1i \u0111\u0103ng nh\u1EADp'
							)
						)
					)
				)
			);
		}
	}]);

	return LostpassForm;
}(_react.Component);

exports.default = LostpassForm;

/***/ },

/***/ 425:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(173);


/***/ }

},[425]);