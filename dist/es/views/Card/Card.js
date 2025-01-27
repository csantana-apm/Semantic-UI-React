import _extends from "@babel/runtime/helpers/esm/extends";
import _invoke from "lodash-es/invoke";
import cx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { childrenUtils, customPropTypes, getElementType, getUnhandledProps, SUI, useKeyOnly, useEventCallback } from '../../lib';
import Image from '../../elements/Image';
import CardContent from './CardContent';
import CardDescription from './CardDescription';
import CardGroup from './CardGroup';
import CardHeader from './CardHeader';
import CardMeta from './CardMeta';
/**
 * A card displays site content in a manner similar to a playing card.
 */

var Card = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var centered = props.centered,
      children = props.children,
      className = props.className,
      color = props.color,
      content = props.content,
      description = props.description,
      extra = props.extra,
      fluid = props.fluid,
      header = props.header,
      href = props.href,
      image = props.image,
      link = props.link,
      meta = props.meta,
      onClick = props.onClick,
      raised = props.raised;
  var classes = cx('ui', color, useKeyOnly(centered, 'centered'), useKeyOnly(fluid, 'fluid'), useKeyOnly(link, 'link'), useKeyOnly(raised, 'raised'), 'card', className);
  var rest = getUnhandledProps(Card, props);
  var ElementType = getElementType(Card, props, function () {
    if (onClick) {
      return 'a';
    }
  });
  var handleClick = useEventCallback(function (e) {
    _invoke(props, 'onClick', e, props);
  });

  if (!childrenUtils.isNil(children)) {
    return /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
      className: classes,
      href: href,
      onClick: handleClick,
      ref: ref
    }), children);
  }

  if (!childrenUtils.isNil(content)) {
    return /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
      className: classes,
      href: href,
      onClick: handleClick,
      ref: ref
    }), content);
  }

  return /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
    className: classes,
    href: href,
    onClick: handleClick,
    ref: ref
  }), Image.create(image, {
    autoGenerateKey: false,
    defaultProps: {
      ui: false,
      wrapped: true
    }
  }), (description || header || meta) && /*#__PURE__*/React.createElement(CardContent, {
    description: description,
    header: header,
    meta: meta
  }), extra && /*#__PURE__*/React.createElement(CardContent, {
    extra: true
  }, extra));
});
Card.handledProps = ["as", "centered", "children", "className", "color", "content", "description", "extra", "fluid", "header", "href", "image", "link", "meta", "onClick", "raised"];
Card.displayName = 'Card';
Card.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A Card can center itself inside its container. */
  centered: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A Card can be formatted to display different colors. */
  color: PropTypes.oneOf(SUI.COLORS),

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Shorthand for CardDescription. */
  description: customPropTypes.itemShorthand,

  /** Shorthand for primary content of CardContent. */
  extra: customPropTypes.contentShorthand,

  /** A Card can be formatted to take up the width of its container. */
  fluid: PropTypes.bool,

  /** Shorthand for CardHeader. */
  header: customPropTypes.itemShorthand,

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: PropTypes.string,

  /** A card can contain an Image component. */
  image: customPropTypes.itemShorthand,

  /** A card can be formatted to link to other content. */
  link: PropTypes.bool,

  /** Shorthand for CardMeta. */
  meta: customPropTypes.itemShorthand,

  /**
   * Called on click. When passed, the component renders as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func,

  /** A Card can be formatted to raise above the page. */
  raised: PropTypes.bool
} : {};
Card.Content = CardContent;
Card.Description = CardDescription;
Card.Group = CardGroup;
Card.Header = CardHeader;
Card.Meta = CardMeta;
export default Card;