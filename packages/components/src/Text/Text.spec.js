import { render } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@platzily-ui/styling';
import Text from './Text';

describe('@components/Text', () => {
  it('Given a Tag of <h1> to <h6> It should Render a title text', () => {
    const { getByRole } = render(
      <ThemeProvider theme={createTheme()}>
        <Text component="h1">Hello World</Text>
      </ThemeProvider>,
    );

    const text = getByRole('heading', { name: /Hello World/i });
    expect(text).toBeDefined();
  });

  it('Given a Tag <p> It should Render a Paragraph', () => {
    const { getByText } = render(
      <ThemeProvider theme={createTheme()}>
        <Text component="p">Hello World</Text>
      </ThemeProvider>,
    );

    const text = getByText(/Hello World/i);
    expect(text).toBeDefined();
  });

  it('Given a Tag <a> It should Render a link', () => {
    const { getByText } = render(
      <ThemeProvider theme={createTheme()}>
        <Text component="a">Hello World</Text>
      </ThemeProvider>,
    );

    const text = getByText(/Hello World/i);
    expect(text).toBeDefined();
  });

  it('Given a Tag <span> It should Render a span', () => {
    const { getByText } = render(
      <ThemeProvider theme={createTheme()}>
        <Text component="span">Hello World</Text>
      </ThemeProvider>,
    );

    const text = getByText(/Hello World/i);
    expect(text).toBeDefined();
  });

  it('Given a Tag <textarea> It should Render a textarea', () => {
    const { getByRole } = render(
      <ThemeProvider theme={createTheme()}>
        <Text component="textarea" name="textarea" defaultValue="This is a description." />
      </ThemeProvider>,
    );

    const textarea = getByRole('textbox');
    expect(textarea).toBeDefined();
  });
});
