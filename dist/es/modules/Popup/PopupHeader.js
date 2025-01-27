import _extends from "@babel/runtime/helpers/esm/extends";
import cx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { childrenUtils, createShorthandFactory, customPropTypes, getElementType, getUnhandledProps } from '../../lib';
/**
 * A PopupHeader displays a header in a Popover.
 */

var PopupHeader = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = cx('header', className);
  var rest = getUnhandledProps(PopupHeader, props);
  var ElementType = getElementType(PopupHeader, props);
  return /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
    className: classes,
    ref: ref
  }), childrenUtils.isNil(children) ? content : children);
});
PopupHeader.handledProps = ["as", "children", "className", "content"];
PopupHeader.displayName = 'PopupHeader';
PopupHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand
} : {};
PopupHeader.create = createShorthandFactory(PopupHeader, function (children) {
  return {
    children: children
  };
});
export default PopupHeader;