import _extends from "@babel/runtime/helpers/esm/extends";
import _invoke from "lodash-es/invoke";
import _map from "lodash-es/map";
import cx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { childrenUtils, customPropTypes, getElementType, getUnhandledProps, SUI, useKeyOnly, useKeyOrValueAndKey, useValueAndKey, useVerticalAlignProp } from '../../lib';
import ListContent from './ListContent';
import ListDescription from './ListDescription';
import ListHeader from './ListHeader';
import ListIcon from './ListIcon';
import ListItem from './ListItem';
import ListList from './ListList';
/**
 * A list groups related content.
 */

var List = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var animated = props.animated,
      bulleted = props.bulleted,
      celled = props.celled,
      children = props.children,
      className = props.className,
      content = props.content,
      divided = props.divided,
      floated = props.floated,
      horizontal = props.horizontal,
      inverted = props.inverted,
      items = props.items,
      link = props.link,
      ordered = props.ordered,
      relaxed = props.relaxed,
      selection = props.selection,
      size = props.size,
      verticalAlign = props.verticalAlign;
  var classes = cx('ui', size, useKeyOnly(animated, 'animated'), useKeyOnly(bulleted, 'bulleted'), useKeyOnly(celled, 'celled'), useKeyOnly(divided, 'divided'), useKeyOnly(horizontal, 'horizontal'), useKeyOnly(inverted, 'inverted'), useKeyOnly(link, 'link'), useKeyOnly(ordered, 'ordered'), useKeyOnly(selection, 'selection'), useKeyOrValueAndKey(relaxed, 'relaxed'), useValueAndKey(floated, 'floated'), useVerticalAlignProp(verticalAlign), 'list', className);
  var rest = getUnhandledProps(List, props);
  var ElementType = getElementType(List, props);

  if (!childrenUtils.isNil(children)) {
    return /*#__PURE__*/React.createElement(ElementType, _extends({
      role: "list"
    }, rest, {
      className: classes,
      ref: ref
    }), children);
  }

  if (!childrenUtils.isNil(content)) {
    return /*#__PURE__*/React.createElement(ElementType, _extends({
      role: "list"
    }, rest, {
      className: classes,
      ref: ref
    }), content);
  }

  return /*#__PURE__*/React.createElement(ElementType, _extends({
    role: "list"
  }, rest, {
    className: classes,
    ref: ref
  }), _map(items, function (item) {
    return ListItem.create(item, {
      overrideProps: function overrideProps(predefinedProps) {
        return {
          onClick: function onClick(e, itemProps) {
            _invoke(predefinedProps, 'onClick', e, itemProps);

            _invoke(props, 'onItemClick', e, itemProps);
          }
        };
      }
    });
  }));
});
List.handledProps = ["animated", "as", "bulleted", "celled", "children", "className", "content", "divided", "floated", "horizontal", "inverted", "items", "link", "onItemClick", "ordered", "relaxed", "selection", "size", "verticalAlign"];
List.displayName = 'List';
List.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A list can animate to set the current item apart from the list. */
  animated: PropTypes.bool,

  /** A list can mark items with a bullet. */
  bulleted: PropTypes.bool,

  /** A list can divide its items into cells. */
  celled: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A list can show divisions between content. */
  divided: PropTypes.bool,

  /** An list can be floated left or right. */
  floated: PropTypes.oneOf(SUI.FLOATS),

  /** A list can be formatted to have items appear horizontally. */
  horizontal: PropTypes.bool,

  /** A list can be inverted to appear on a dark background. */
  inverted: PropTypes.bool,

  /** Shorthand array of props for ListItem. */
  items: customPropTypes.collectionShorthand,

  /** A list can be specially formatted for navigation links. */
  link: PropTypes.bool,

  /**
   * onClick handler for ListItem. Mutually exclusive with children.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onItemClick: customPropTypes.every([customPropTypes.disallow(['children']), PropTypes.func]),

  /** A list can be ordered numerically. */
  ordered: PropTypes.bool,

  /** A list can relax its padding to provide more negative space. */
  relaxed: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['very'])]),

  /** A selection list formats list items as possible choices. */
  selection: PropTypes.bool,

  /** A list can vary in size. */
  size: PropTypes.oneOf(SUI.SIZES),

  /** An element inside a list can be vertically aligned. */
  verticalAlign: PropTypes.oneOf(SUI.VERTICAL_ALIGNMENTS)
} : {};
List.Content = ListContent;
List.Description = ListDescription;
List.Header = ListHeader;
List.Icon = ListIcon;
List.Item = ListItem;
List.List = ListList;
export default List;