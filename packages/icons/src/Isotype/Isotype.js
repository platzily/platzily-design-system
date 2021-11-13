import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { createStyleSheet } from '@platzily-ui/styling';

const useStyleSheet = createStyleSheet(() => ({
  root: {
    backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAEnklEQVRYCcVZy27UMBSdT+gyGUByAuLRLtgAKsQp0xkJWlZIsEBClK4oOxASogvEICTKjqkEAkEXRahd8tgBGyrgA/oJ8wnzCUbHmZvceOy8GGCkyE5y43t87sPXnlar4c8TsuOL6K4fyk9+EA39QI78QKrxhf4+3nlCPoZsQzX1PpsRnZl2KPsGGAJV0kbDdhhve2Je1NNaQRrA/DAeMIZUMBerpZUFdXujo/q7XfXsU1cNviUX+utbi2r1YUfLnDgd58BPFagfyjucsbOXYvVga1G9/tWrdQEwJpRNMhp64txqBX7cIpy1psDMiYDdHKNhPHAjcLzRJg3kHs0WpjIV/en9tXvnNZueiN55Il6FTgecycc6AgOp/ayJOauC3/jQHR07FQ8Q6W0RX55EYnlCZkUQwPmrKmsq9/xLdwiQ2lpl5gbVZFYODiaGSeh69nG6wBFApNc7HN208NZqIT+NE666di/zOTg1fUwtgDZlzPXdzYeJTyJjWP2xLaJtAECE8UH+FUDonF8e50vT1Al7yTIFQP8LIDd1jkViD4mUg0P/XzLIWURkp75IvocZNAGISfDLHIPfD77mZU2LMRZHGqCuSiy+R4OWMdjfySKQgmj+0qQlaLzUz7LKRwE0vUcr5hJf1FUQqMTANvNCuAwgZGxKbdZg7KSZwaY3XbNFdLflC9RzUlcefBbUrwLQrngyFS2tpKkkBWiaGHqRd7U1RPS5RcuabcYQrgIQciaLwZzMmQ7JnVyAWht7GCtzm3gIgLoSts2kDkAbizzhV2XP0DkCQD0z01EhaAinDLhWEheLddgzdU4VoItFVN1EBLUui9kATsXExLiNxVyBWpAxaAzm96OWL/SOzFlaMeGUBZeJocDGIrFGbRF7xhj7jdLM5bXz6tVP957EZJGAoXVFLrGHNp9msLct+HDwrZcyR4ouXF9QL7/3nCCLWCxjDwAp4vV6TEsd8hafBe+bjLQDqQ4eSTfp6QTga8gGYNf8BpO7eMO9BHJ95LPphp9yIWbOBam/ZonCg4elaoeTIBGxAHjryaKCDMmhvf/aPj7pQZuxHw3TaobW46JFHoFBJkYLcFo5W/TxHAChaO1pRx06IpU4JpU4mjD+4E05wM7VZO/shfF2ClDg5GCsyMUilPZ3k833yYVYHT8VqwOhVLOnY12Fwyy47mwmIGy5b30rX7Vw5tDnCX3iiMQXchMgi1ikAV/96KkX37vq5V5PoU/PeWsHWMxg6nucPaJxzKJO2tPYqNcFmLkQjkQcB0z6OG1s6kfvuyPOSN1+HYDrb7Oit/S8BqbGccTsGdnHzr8uMJKvCrC/09UnGDoGhNwkixa2YBKRDZAYgJTWaasABHM4wRgH6H4hKPMlzkoosnldVwckVg1+8W/T5SyQyhNyL7fNNMG47imyARQRNo0jD7A2v8zOCaua1QUyOa9JKh4A7VxZ0Nmes1GlPwEMlTw2RdP4IewROGRyYhSLOkyF5M5Nif7jna5+h+qF+Vnib0JuNjJp2WQyoBmjHHRJf4TA+yvAbMBRaeg1HH9DCLlPBccY5MhDIazf6YzQ+G+I3zF+nn7IxBEZAAAAAElFTkSuQmCC")',
    width: 40,
    height: 40,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain'
  }
}));

const Isotype = forwardRef(function Isotype(props, ref) {
  const { className, ...other } = props;
  const { cx, classes } = useStyleSheet();
  return (
    <div
      className={cx(classes.root, className)}
      ref={ref}
      {...other}
    />
  );
});

Isotype.propTypes = {
  className: PropTypes.string
};

Isotype.defaultProps = {
  className: ''
};

export default Isotype;
