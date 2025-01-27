import _extends from "@babel/runtime/helpers/esm/extends";
import cx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { childrenUtils, createShorthandFactory, customPropTypes, getElementType, getUnhandledProps } from '../../lib';
/**
 * Headers may contain subheaders.
 */

var HeaderSubheader = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = cx('sub header', className);
  var rest = getUnhandledProps(HeaderSubheader, props);
  var ElementType = getElementType(HeaderSubheader, props);
  return /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
    className: classes,
    ref: ref
  }), childrenUtils.isNil(children) ? content : children);
});
HeaderSubheader.handledProps = ["as", "children", "className", "content"];
HeaderSubheader.displayName = 'HeaderSubheader';
HeaderSubheader.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand
} : {};
HeaderSubheader.create = createShorthandFactory(HeaderSubheader, function (content) {
  return {
    content: content
  };
});
export default HeaderSubheader;