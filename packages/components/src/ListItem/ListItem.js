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
  const { className, active, ...otherProps } = props;
  return (
    <button
      type="button"
      {...otherProps}
      ref={ref}
      className={cx({
        [classes.root]: true,
        [classes.active]: active,
        [classes.noActive]: !active,
        [className]: !!className,
      })}
    />
  );
});

ListItem.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
};

ListItem.defaultProps = {
  active: false,
};

export default ListItem;
