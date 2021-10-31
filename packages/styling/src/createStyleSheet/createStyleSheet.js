import { css } from '@emotion/react';
import useTheme from '../useTheme/useTheme';

export default function createStyleSheet(styles) {
  const getStyles = typeof styles === 'function' ? styles : () => styles;

  function useStyleSheet(props) {
    const theme = useTheme();

    const stylesheet = getStyles(theme, props);

    const classes = Object.fromEntries(Object.keys(stylesheet).map((ruleName) => [ruleName, css(stylesheet[ruleName])]));

    return {
      classes,
      theme,
    };
  }

  return useStyleSheet;
}
