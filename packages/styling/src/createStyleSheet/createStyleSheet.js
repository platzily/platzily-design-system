import createEmotion from '@emotion/css/create-instance';
import useTheme from '../useTheme/useTheme';


export default function createStyleSheet(styles, { key } = {}) {
  const { css, cx } = createEmotion({ key: key ? key.toLowerCase() : 'platzily-ui' });
  const getStyles = typeof styles === 'function' ? styles : () => styles;

  function useStyleSheet(props) {
    const theme = useTheme();

    const stylesheet = getStyles(theme, props);

    const classes = {};


    Object.keys(stylesheet).forEach((className) => {
      classes[className] = css(stylesheet[className]);
    });

    return {
      classes,
      theme,
      cx
    };
  }

  return useStyleSheet;
}
