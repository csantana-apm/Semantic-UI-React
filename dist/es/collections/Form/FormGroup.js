import _extends from "@babel/runtime/helpers/esm/extends";
import cx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { customPropTypes, getElementType, getUnhandledProps, SUI, useKeyOnly, useWidthProp } from '../../lib';
/**
 * A set of fields can appear grouped together.
 * @see Form
 */

var FormGroup = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      className = props.className,
      disabled = props.disabled,
      error = props.error,
      grouped = props.grouped,
      inline = props.inline,
      unstackable = props.unstackable,
      widths = props.widths;
  var classes = cx(useKeyOnly(error, 'error'), useKeyOnly(disabled, 'disabled'), useKeyOnly(grouped, 'grouped'), useKeyOnly(inline, 'inline'), useKeyOnly(unstackable, 'unstackable'), useWidthProp(widths, null, true), 'fields', className);
  var rest = getUnhandledProps(FormGroup, props);
  var ElementType = getElementType(FormGroup, props);
  return /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
    className: classes,
    ref: ref
  }), children);
});
FormGroup.handledProps = ["as", "children", "className", "disabled", "error", "grouped", "inline", "unstackable", "widths"];
FormGroup.displayName = 'FormGroup';
FormGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A Form Group can be disabled. */
  disabled: PropTypes.bool,

  /** A Form Group can have error. */
  error: PropTypes.bool,

  /** Fields can show related choices. */
  grouped: customPropTypes.every([customPropTypes.disallow(['inline']), PropTypes.bool]),

  /** Multiple fields may be inline in a row. */
  inline: customPropTypes.every([customPropTypes.disallow(['grouped']), PropTypes.bool]),

  /** A form group can prevent itself from stacking on mobile. */
  unstackable: PropTypes.bool,

  /** Fields Groups can specify their width in grid columns or automatically divide fields to be equal width. */
  widths: PropTypes.oneOf([].concat(SUI.WIDTHS, ['equal']))
} : {};
export default FormGroup;