import { forwardRef, createElement } from 'react';
import { createStyleSheet } from '@platzily-ui/styling';
import PropTypes from 'prop-types';

const detectColor = (theme, color) => {
  const colorSplit = color.split('-');
  const colorFound = theme.palette[colorSplit[0]];
  if (colorFound) {
    return colorFound[colorFound[1] || 'main'];
  }
  return color;
};

const useStyleSheet = createStyleSheet((theme, props) => ({
  title1: {
    fontWeight: 700,
    fontSize: '2rem',
    lineHeight: '2.5625rem',
    color: detectColor(theme, props.color || 'primary'),
  },
  title2: {
    fontWeight: 700,
    fontSize: '1.75rem',
    lineHeight: '2.5625rem',
    color: detectColor(theme, props.color || 'primary'),
  },
  title3: {
    fontWeight: 600,
    fontSize: '1.125rem',
    lineHeight: '2rem',
    color: detectColor(theme, props.color || 'primary'),
  },
  intro: {
    fontWeight: 'normal',
    fontSize: '1.125rem',
    lineHeight: '1.6875rem',
    color: detectColor(theme, props.color || 'neutral-dark'),
  },
  paragraph: {
    fontWeight: 'normal',
    fontSize: '1rem',
    lineHeight: '21px',
    color: detectColor(theme, props.color || 'neutral-dark'),
  },
  small: {
    fontWeight: 'normal',
    fontSize: '0.75rem',
    lineHeight: '1rem',
    color: detectColor(theme, props.color || 'neutral-dark'),
  },
  link: {
    fontWeight: 'normal',
    fontSize: '0.8125rem',
    lineHeight: '1rem',
    color: theme.palette.tertiary.main,
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  tag: {
    fontWeight: 500,
    fontSize: '0.625rem',
    lineHeight: '1rem',
    textTransform: 'uppercase',
    color: detectColor(theme, props.color || 'neutral-dark'),
  },
  smalltag: {
    fontWeight: 700,
    fontSize: '0.5rem',
    lineHeight: '1rem',
    color: detectColor(theme, props.color || 'neutral-dark'),
  },
}), { key: 'text' });

const Text = forwardRef(function Text(props, ref) {
  const { component, variant, className, ...otherProps } = props;
  const { classes, cx } = useStyleSheet(props);
  const element = createElement(component, {
    ...otherProps,
    ref,
    className: cx(classes[variant], className),
  });
  return element;
});

Text.propTypes = {
  className: PropTypes.string,
  component: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'span', 'textarea', 'p']),
  variant: PropTypes.oneOf(['title1', 'title2', 'title3', 'intro', 'paragraph', 'small', 'link', 'tag', 'smalltag']),
};

Text.defaultProps = {
  component: 'p',
  variant: 'paragraph',
};

export default Text;
