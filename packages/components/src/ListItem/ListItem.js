import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { createStyleSheet } from '@platzily-ui/styling';

const useStyleSheet = createStyleSheet((theme) => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(2),
      color: theme.palette.primary.main,
      lineHeight: '1rem',
    },
    active: {
      fontWeight: 'bold',
    },
    noActive: {
      '&:hover': {
        textDecoration: 'underline',
      },
      '&:focus': {
        fontWeight: 'bold',
      },
      '&:disabled': {
        color: theme.palette.neutral.secondary,
        textDecoration: 'none',
        cursor: 'not-allowed',
      },
    },
  };
});

const ListItem = forwardRef(function ListItem(props, ref) {
  const { classes, cx } = useStyleSheet(props);
  const { className, status, ...otherProps } = props;
  return (
    <button
      type="button"
      {...otherProps}
      ref={ref}
      className={cx(classes.root, classes[status], className)}
    />
  );
});

ListItem.propTypes = {
  className: PropTypes.string,
  status: PropTypes.string,
};

ListItem.defaultProps = {
  status: 'noActive',
};

export default ListItem;
