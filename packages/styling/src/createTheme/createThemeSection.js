import { theme as defaultTheme } from '../theme';

export default function createThemeSection(section, sectionKey, keys) {
  const modifiedSection = { ...section };

  keys.forEach(key => {
    modifiedSection[key] = {
      ...defaultTheme[sectionKey][key],
      ...section[key]
    };
  });

  return modifiedSection;
}
