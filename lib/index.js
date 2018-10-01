'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * react-duallist
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * https://github.com/jyotirmaybanerjee/react-duallist
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2014 Jyotirmay Banerjee
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint-disable react/sort-comp */

var Duallist = function (_Component) {
  _inherits(Duallist, _Component);

  function Duallist() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Duallist);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Duallist.__proto__ || Object.getPrototypeOf(Duallist)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      searchStringLeft: '',
      searchStringRight: '',
      leftSelected: [],
      rightSelected: []
    }, _this.onMoveLeft = function () {
      var _this$props = _this.props,
          selected = _this$props.selected,
          onMove = _this$props.onMove;

      var selectedOptions = selected.filter(function (op) {
        return !_this.state.rightSelected.includes(op);
      });
      onMove(selectedOptions);
      _this.setState({ rightSelected: [] });
    }, _this.onMoveAllLeft = function () {
      var onMove = _this.props.onMove;

      onMove([]);
      _this.setState({ rightSelected: [] });
    }, _this.onMoveRight = function () {
      var _this$props2 = _this.props,
          selected = _this$props2.selected,
          onMove = _this$props2.onMove;

      var selectedOptions = [].concat(_toConsumableArray(selected), _toConsumableArray(_this.state.leftSelected));
      onMove(selectedOptions);
      _this.setState({ leftSelected: [] });
    }, _this.onMoveAllRight = function () {
      var _this$props3 = _this.props,
          available = _this$props3.available,
          onMove = _this$props3.onMove;

      var selectedOptions = available.map(function (op) {
        return op.value;
      });
      onMove(selectedOptions);
      _this.setState({ leftSelected: [] });
    }, _this.onMoveUp = function () {
      var _this$props4 = _this.props,
          selected = _this$props4.selected,
          onMove = _this$props4.onMove;

      var newSelected = selected;
      var currentIndex = selected.indexOf(_this.state.rightSelected[0]);
      newSelected.splice(currentIndex, 1);
      newSelected.splice(currentIndex - 1, 0, _this.state.rightSelected[0]);
      onMove(newSelected);
    }, _this.onMoveAllUp = function () {
      var _this$props5 = _this.props,
          selected = _this$props5.selected,
          onMove = _this$props5.onMove;

      var newSelected = selected;
      var currentIndex = selected.indexOf(_this.state.rightSelected[0]);
      newSelected.splice(currentIndex, 1);
      newSelected.splice(0, 0, _this.state.rightSelected[0]);
      onMove(newSelected);
    }, _this.onMoveDown = function () {
      var _this$props6 = _this.props,
          selected = _this$props6.selected,
          onMove = _this$props6.onMove;

      var newSelected = selected;
      var currentIndex = selected.indexOf(_this.state.rightSelected[0]);
      newSelected.splice(currentIndex, 1);
      newSelected.splice(currentIndex + 1, 0, _this.state.rightSelected[0]);
      onMove(newSelected);
    }, _this.onMoveAllDown = function () {
      var _this$props7 = _this.props,
          selected = _this$props7.selected,
          onMove = _this$props7.onMove;

      var newSelected = selected;
      var currentIndex = selected.indexOf(_this.state.rightSelected[0]);
      newSelected.splice(currentIndex, 1);
      newSelected.splice(newSelected.length, 0, _this.state.rightSelected[0]);
      onMove(newSelected);
    }, _this.onSelectInLeft = function (event) {
      var options = event.target.options;
      var values = [];
      for (var i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) {
          values.push(options[i].value);
        }
      }
      if (_this.props.onSelectInLeft) _this.props.onSelectInLeft(values);
      _this.setState({ leftSelected: values });
    }, _this.onSelectInRight = function (event) {
      var options = event.target.options;
      var values = [];
      for (var i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) {
          values.push(options[i].value);
        }
      }
      if (_this.props.onSelectInRight) _this.props.onSelectInRight(values);
      _this.setState({ rightSelected: values });
    }, _this.renderLeftList = function () {
      var _this$props8 = _this.props,
          available = _this$props8.available,
          selected = _this$props8.selected;

      var visibleOptions = available.filter(function (op) {
        if (_this.state.searchStringLeft && !op.label.toLowerCase().includes(_this.state.searchStringLeft.toLowerCase())) {
          return false;
        } else if (selected.includes(op.value)) {
          return false;
        }
        return true;
      });
      return _react2.default.createElement(
        'select',
        { className: 'list-control', multiple: true, onChange: _this.onSelectInLeft, defaultValue: [] },
        visibleOptions.map(function (op) {
          return _react2.default.createElement(
            'option',
            { value: op.value, key: 'left-' + op.value },
            op.label
          );
        })
      );
    }, _this.renderRightList = function () {
      var _this$props9 = _this.props,
          available = _this$props9.available,
          selected = _this$props9.selected;

      var selectedOptions = [];

      selected.forEach(function (selection) {
        if (!_this.state.searchStringRight || _this.state.searchStringRight && selection.toLowerCase().includes(_this.state.searchStringRight.toLowerCase())) {
          selectedOptions.push(available.find(function (av) {
            return av.value === selection;
          }));
        }
      });
      return _react2.default.createElement(
        'select',
        { className: 'list-control', multiple: true, onChange: _this.onSelectInRight, defaultValue: [] },
        selectedOptions.map(function (op) {
          return _react2.default.createElement(
            'option',
            { value: op.value, key: 'right-' + op.value },
            op.label
          );
        })
      );
    }, _this.onLeftSearch = function (event) {
      _this.setState({ searchStringLeft: event.target.value });
    }, _this.onRightSearch = function (event) {
      _this.setState({ searchStringRight: event.target.value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Duallist, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          leftLabel = _props.leftLabel,
          rightLabel = _props.rightLabel,
          sortable = _props.sortable,
          searchable = _props.searchable,
          moveLeftIcon = _props.moveLeftIcon,
          moveAllLeftIcon = _props.moveAllLeftIcon,
          moveRightIcon = _props.moveRightIcon,
          moveAllRightIcon = _props.moveAllRightIcon,
          moveUpIcon = _props.moveUpIcon,
          moveTopIcon = _props.moveTopIcon,
          moveDownIcon = _props.moveDownIcon,
          moveBottomIcon = _props.moveBottomIcon,
          available = _props.available,
          selected = _props.selected,
          leftSearchPlaceholder = _props.leftSearchPlaceholder,
          rightSearchPlaceholder = _props.rightSearchPlaceholder;


      if (available.length < 1) return _react2.default.createElement(
        'h3',
        null,
        'Please pass non empty arrays '
      );
      return _react2.default.createElement(
        'div',
        { className: 'react-listbox-dual-list' },
        _react2.default.createElement(
          'div',
          { className: 'react-listbox-list-box left-list' },
          _react2.default.createElement(
            'label',
            null,
            leftLabel
          ),
          searchable && _react2.default.createElement('input', { type: 'text', className: 'search-bar left-search', placeholder: leftSearchPlaceholder, onChange: this.onLeftSearch }),
          _react2.default.createElement(
            'div',
            { className: 'list-container' },
            this.renderLeftList()
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'react-listbox-center-toolbar' },
          _react2.default.createElement(
            'div',
            { className: 'move-right' },
            _react2.default.createElement(
              'button',
              {
                className: 'btn-move',
                onClick: this.onMoveAllRight
              },
              moveAllRightIcon
            ),
            _react2.default.createElement(
              'button',
              {
                className: 'btn-move',
                onClick: this.onMoveRight
              },
              moveRightIcon
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'move-left' },
            _react2.default.createElement(
              'button',
              {
                className: 'btn-move',
                onClick: this.onMoveLeft
              },
              moveLeftIcon
            ),
            _react2.default.createElement(
              'button',
              {
                className: 'btn-move',
                onClick: this.onMoveAllLeft
              },
              moveAllLeftIcon
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'react-listbox-list-box right-list' },
          _react2.default.createElement(
            'label',
            null,
            rightLabel
          ),
          searchable && _react2.default.createElement('input', { type: 'text', className: 'search-bar right-search', placeholder: rightSearchPlaceholder, onChange: this.onRightSearch }),
          _react2.default.createElement(
            'div',
            { className: 'list-container' },
            this.renderRightList()
          )
        ),
        sortable && _react2.default.createElement(
          'div',
          { className: 'react-listbox-right-toolbar' },
          _react2.default.createElement(
            'div',
            { className: 'move-top' },
            _react2.default.createElement(
              'button',
              {
                className: 'btn-move',
                disabled: this.state.rightSelected.length !== 1,
                onClick: this.onMoveAllUp
              },
              moveTopIcon
            ),
            _react2.default.createElement(
              'button',
              {
                className: 'btn-move',
                disabled: this.state.rightSelected.length !== 1,
                onClick: this.onMoveUp
              },
              moveUpIcon
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'move-bottom' },
            _react2.default.createElement(
              'button',
              {
                className: 'btn-move',
                disabled: this.state.rightSelected.length !== 1,
                onClick: this.onMoveDown
              },
              moveDownIcon
            ),
            _react2.default.createElement(
              'button',
              {
                className: 'btn-move',
                disabled: this.state.rightSelected.length !== 1,
                onClick: this.onMoveAllDown
              },
              moveBottomIcon
            )
          )
        )
      );
    }
  }]);

  return Duallist;
}(_react.Component);

Duallist.defaultProps = {
  leftLabel: 'Available',
  rightLabel: 'Selected',
  sortable: true,
  searchable: true,
  moveLeftIcon: _react2.default.createElement(
    'span',
    { style: { fontSize: '14px', fontWeight: 'bold' } },
    '<'
  ),
  moveAllLeftIcon: _react2.default.createElement(
    'span',
    { style: { fontSize: '14px', fontWeight: 'bold' } },
    '<<'
  ),
  moveRightIcon: _react2.default.createElement(
    'span',
    { style: { fontSize: '14px', fontWeight: 'bold' } },
    '>'
  ),
  moveAllRightIcon: _react2.default.createElement(
    'span',
    { style: { fontSize: '14px', fontWeight: 'bold' } },
    '>>'
  ),
  moveUpIcon: _react2.default.createElement(
    'span',
    { style: { fontSize: '14px', fontWeight: 'bold', color: '#000' } },
    '\uFFEA'
  ),
  moveTopIcon: _react2.default.createElement(
    'span',
    { style: { fontSize: '14px', fontWeight: 'bold', color: '#000' } },
    '\u21C8'
  ),
  moveDownIcon: _react2.default.createElement(
    'span',
    { style: { fontSize: '14px', fontWeight: 'bold', color: '#000' } },
    '\uFFEC'
  ),
  moveBottomIcon: _react2.default.createElement(
    'span',
    { style: { fontSize: '14px', fontWeight: 'bold', color: '#000' } },
    '\u21CA'
  ),
  leftSearchPlaceholder: 'Search available options',
  rightSearchPlaceholder: 'Search selected options'
};
exports.default = Duallist;