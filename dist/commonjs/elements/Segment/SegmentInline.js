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
 * A placeholder segment can be inline.
 */
var SegmentInline = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = (0, _clsx.default)('inline', className);
  var rest = (0, _lib.getUnhandledProps)(SegmentInline, props);
  var ElementType = (0, _lib.getElementType)(SegmentInline, props);
  return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
    className: classes,
    ref: ref
  }), _lib.childrenUtils.isNil(children) ? content : children);
});

SegmentInline.handledProps = ["as", "children", "className", "content"];
SegmentInline.displayName = 'SegmentInline';
SegmentInline.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand
} : {};
var _default = SegmentInline;
exports.default = _default;