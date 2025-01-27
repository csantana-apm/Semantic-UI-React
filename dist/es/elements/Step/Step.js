import _extends from "@babel/runtime/helpers/esm/extends";
import _invoke from "lodash-es/invoke";
import cx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { childrenUtils, createShorthandFactory, customPropTypes, getElementType, getUnhandledProps, useKeyOnly, useEventCallback } from '../../lib';
import Icon from '../Icon';
import StepContent from './StepContent';
import StepDescription from './StepDescription';
import StepGroup from './StepGroup';
import StepTitle from './StepTitle';
/**
 * A step shows the completion status of an activity in a series of activities.
 */

var Step = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var active = props.active,
      children = props.children,
      className = props.className,
      completed = props.completed,
      content = props.content,
      description = props.description,
      disabled = props.disabled,
      href = props.href,
      onClick = props.onClick,
      icon = props.icon,
      link = props.link,
      title = props.title;
  var handleClick = useEventCallback(function (e) {
    if (!disabled) {
      _invoke(props, 'onClick', e, props);
    }
  });
  var classes = cx(useKeyOnly(active, 'active'), useKeyOnly(completed, 'completed'), useKeyOnly(disabled, 'disabled'), useKeyOnly(link, 'link'), 'step', className);
  var rest = getUnhandledProps(Step, props);
  var ElementType = getElementType(Step, props, function () {
    if (onClick) {
      return 'a';
    }
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
  }), Icon.create(icon, {
    autoGenerateKey: false
  }), StepContent.create({
    description: description,
    title: title
  }, {
    autoGenerateKey: false
  }));
});
Step.handledProps = ["active", "as", "children", "className", "completed", "content", "description", "disabled", "href", "icon", "link", "onClick", "ordered", "title"];
Step.displayName = 'Step';
Step.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A step can be highlighted as active. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A step can show that a user has completed it. */
  completed: PropTypes.bool,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Shorthand for StepDescription. */
  description: customPropTypes.itemShorthand,

  /** Show that the Loader is inactive. */
  disabled: PropTypes.bool,

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: PropTypes.string,

  /** Shorthand for Icon. */
  icon: customPropTypes.itemShorthand,

  /** A step can be link. */
  link: PropTypes.bool,

  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func,

  /** A step can show a ordered sequence of steps. Passed from StepGroup. */
  ordered: PropTypes.bool,

  /** Shorthand for StepTitle. */
  title: customPropTypes.itemShorthand
} : {};
Step.Content = StepContent;
Step.Description = StepDescription;
Step.Group = StepGroup;
Step.Title = StepTitle;
Step.create = createShorthandFactory(Step, function (content) {
  return {
    content: content
  };
});
export default Step;