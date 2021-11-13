import { render } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@platzily-ui/styling';
import Paper from './Paper';

describe('@components/paper', () => {
  it('Given a normal call It should Render', () => {
    const { getByText } = render(
      <ThemeProvider theme={createTheme()}>
        <Paper>Hello World</Paper>
      </ThemeProvider>,
    );

    const paper = getByText(/Hello World/i);
    expect(paper).toBeDefined();
  });
});
