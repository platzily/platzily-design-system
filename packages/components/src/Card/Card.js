import { forwardRef } from 'react';
import PropTypes, { node, number, string } from 'prop-types';
import { createStyleSheet } from '@platzily-ui/styling';
import { Paper } from '../Paper';


const useStyleSheet = createStyleSheet(
  (theme) => {
    return {
      header: {
        padding: 5,
        width: 302,
        borderBottom: 1,
        borderStyle: 'solid',
        borderColor: theme.palette.neutral.dark
      },
      body: {
        padding: 5,
        width: 302,
        minHeight: 190,
      }
    };
  }
);

const Card = forwardRef(function Card(ref, props) {
  const { header, body } = props;
  return (
    <Paper elevation='2' ref={ref} {...props}>
      <div>{header}</div>
      <div>{body}</div>
    </Paper>
  );
});

Card.propTypes = {
  body: PropTypes.oneOfType([node, string, number]),
  header: PropTypes.oneOfType([node, string, number]),
};

export default Card;
