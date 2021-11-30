import { render } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@platzily-ui/styling';
import Card from './Card';

describe('@components/card', () => {
  it('Given a normal call It should Render', () => {
    const { getByText } = render(
      <ThemeProvider theme={createTheme()}>
        <Card>Hello World</Card>
      </ThemeProvider>,
    );

    const card = getByText(/Hello World/i);
    expect(card).toBeDefined();
  });

  it('Given a normal call It should render the Header', () => {
    const { getByText } = render(
      <ThemeProvider theme={createTheme()}>
        <Card header="Header">Hello World</Card>
      </ThemeProvider>,
    );

    const card = getByText(/Header/i);
    expect(card).toBeDefined();
  });
});
