export const DEFAULT_SPACING = 5;

export const createSpacing = (spacingUnit) => (times = 1) => (spacingUnit || DEFAULT_SPACING) * times;

const OPACITY = 'rgba(0, 0, 0, 0.25)';

export const theme = {
  palette: {
    primary: {
      main: '#19213c',
      secondary: '#454C62',
      tertiary: '#717788'
    },
    secondary: {
      main: '#97c343',
      secondary: '#AACE68',
      tertiary: '#BCD88D'
    },
    tertiary: {
      main: '#2F8CCC',
      secondary: '#56A2D5',
      tertiary: '#7EB7DF'
    },
    success: {
      main: '#43B839',
      secondary: '#075500'
    },
    warning: {
      main: '#C3B643',
      secondary: '#5C4E00'
    },
    info: {
      main: '#1198FF',
      secondary: '#2F8CCC'
    },
    error: {
      main: '#C34343',
      secondary: '#610002'
    },
    neutral: {
      main: '#273B46',
      secondary: '#7E95A5',
      tertiary: '#F4F8FB',
      light: '#FFFFFF',
      dark: '#000000',
    },
  },
  spacing: createSpacing(),
  radius: 5,
  elevations: [
    `0 0px 4px ${OPACITY}`,
    `0 1px 4px ${OPACITY}`,
    `0 2px 4px ${OPACITY}`,
    `0 3px 6px ${OPACITY}`,
    `0 4px 8px ${OPACITY}`,
    `0 6px 12px ${OPACITY}`,
    `0 8px 16px ${OPACITY}`,
    `0 12px 24px ${OPACITY}`,
  ]
};
