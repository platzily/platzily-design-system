import 'nextra-theme-docs/style.css';
import { ThemeProvider, createTheme } from '@platzily-ui/styling';

export default function DocsApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={createTheme()}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
