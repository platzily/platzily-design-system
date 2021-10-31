import { Fragment } from 'react';

export default {
  github: 'https://github.com/platzily/platzily-ui',
  docsRepositoryBase: 'https://github.com/platzily/platzily-ui/blob/main',
  titleSuffix: '',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null,
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Platzily.`,
  footerEditLink: '',
  logo: <p>Platzily UI</p>,
  head: (
    <Fragment>
      <title>Platzily UI - Docs</title>
    </Fragment>
  ),
  unstable_faviconGlyph: '📚',
};
