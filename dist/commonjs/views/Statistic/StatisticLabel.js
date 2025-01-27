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
 * A statistic can contain a label to help provide context for the presented value.
 */
var StatisticLabel = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = (0, _clsx.default)('label', className);
  var rest = (0, _lib.getUnhandledProps)(StatisticLabel, props);
  var ElementType = (0, _lib.getElementType)(StatisticLabel, props);
  return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
    className: classes,
    ref: ref
  }), _lib.childrenUtils.isNil(children) ? content : children);
});

StatisticLabel.handledProps = ["as", "children", "className", "content"];
StatisticLabel.displayName = 'StatisticLabel';
StatisticLabel.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand
} : {};
StatisticLabel.create = (0, _lib.createShorthandFactory)(StatisticLabel, function (content) {
  return {
    content: content
  };
});
var _default = StatisticLabel;
exports.default = _default;