import { forwardRef } from 'react';
import PropTypes, { node, number, string } from 'prop-types';
import { createStyleSheet } from '@platzily-ui/styling';
import { Paper } from '../index';

const useStyleSheet = createStyleSheet((theme) => {
  return {
    header: {
      padding: theme.spacing(),
      minWidth: 302,
      borderBottom: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.neutral.secondary,
    },
    body: {
      padding: theme.spacing(),
      minWidth: 302,
      minHeight: 190,
    },
    nopadding: {
      padding: '0',
    },
  };
});

const Card = forwardRef(function Card(props, ref) {
  const { classes, cx } = useStyleSheet();
  const { children, header, className, ...otherProps } = props;
  return (
    <Paper ref={ref} {...otherProps} padding="0">
      <div className={classes.header}>{header}</div>
      <div className={cx(classes.body, className)}>{children}</div>
    </Paper>
  );
});

Card.propTypes = {
  children: PropTypes.oneOfType([node, number, string]),
  className: PropTypes.string,
  header: PropTypes.oneOfType([node, number, string]),
};

export default Card;
