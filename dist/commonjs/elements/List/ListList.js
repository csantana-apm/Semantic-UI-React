"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lib = require("../../lib");

/**
 * A list can contain a sub list.
 */
var ListList = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var rest = (0, _lib.getUnhandledProps)(ListList, props);
  var ElementType = (0, _lib.getElementType)(ListList, props);
  var classes = (0, _clsx.default)((0, _lib.useKeyOnly)(ElementType !== 'ul' && ElementType !== 'ol', 'list'), className);
  return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
    className: classes,
    ref: ref
  }), _lib.childrenUtils.isNil(children) ? content : children);
});

ListList.handledProps = ["as", "children", "className", "content"];
ListList.displayName = 'ListList';
ListList.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand
} : {};
var _default = ListList;
exports.default = _default;