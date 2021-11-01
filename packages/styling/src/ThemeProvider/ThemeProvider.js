import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { getTypeOf } from '@platzily-ui/utils';
import ThemeContext from '../useTheme/ThemeContext';
import useTheme from '../useTheme';

function mergeThemes(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    const mergedTheme = localTheme(outerTheme);

    if (process.env.NODE_ENV !== 'production') {
      if (!mergedTheme) {
        console.error(
          [
            'PlatzilyUI: You should return an object from your theme function, i.e.',
            '<ThemeProvider theme={() => ({})} />',
          ].join('\n'),
        );
      }
    }

    return mergedTheme;
  }

  return { ...outerTheme, ...localTheme };
}

/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */
export default function ThemeProvider(props) {
  const { children, theme: localTheme } = props;
  const outerTheme = useTheme();

  const localThemeDepth = getTypeOf(localTheme) === 'Object' ? JSON.stringify(localTheme) : localTheme;
  const outerThemeDepth = getTypeOf(outerTheme) === 'Object' ? JSON.stringify(outerTheme) : outerTheme;

  if (process.env.NODE_ENV !== 'production') {
    if (outerTheme === null && typeof localTheme === 'function') {
      console.error(
        [
          'PlatzilyUI: You are providing a theme function prop to the ThemeProvider component:',
          '<ThemeProvider theme={outerTheme => outerTheme} />',
          '',
          'However, no outer theme is present.',
          'Make sure a theme is already injected higher in the React tree or provide a theme object.',
        ].join('\n'),
      );
    }
  }

  const theme = useMemo(() => {
    return outerTheme === null ? localTheme : mergeThemes(outerTheme, localTheme);
  }, [localThemeDepth, outerThemeDepth]);

  return (
    <ThemeContext.Provider value={theme}>
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
