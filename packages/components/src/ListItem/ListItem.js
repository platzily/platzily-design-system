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
  const { className, ...otherProps } = props;
  return <button type="button" {...otherProps} ref={ref} className={cx(classes.root, className)} />;
});

ListItem.propTypes = {
  className: PropTypes.string,
};

export default ListItem;
