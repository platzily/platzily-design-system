import React from 'react';
import PropTypes from 'prop-types';
import defaultTheme from '../theme';
import ThemeContext from '../useTheme/ThemeContext';

/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */
export default function ThemeProvider(props) {
  const { children, theme } = props;
  const definitiveTheme = { ...{ defaultTheme }, ...theme };

  return (
    <ThemeContext.Provider value={definitiveTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: PropTypes.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
