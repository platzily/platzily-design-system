import { render, screen } from '@testing-library/react';
import Portal from './Portal';

describe('@components/Portal', () => {
  it('Given a children when not passing parentId it should render inside document.body', () => {
    // act
    render(
      <Portal>
        <input />
      </Portal>
    );

    const input = screen.getByRole('textbox');

    // assert
    expect(document.body).toContainElement(input);
  });

  it('Given a children when passing parentId it should render inside parent node', () => {
    // act
    render(
      <div>
        <div id="wrapper" role="banner" />
        <Portal parentId="wrapper">
          <input />
        </Portal>
      </div>
    );

    const main = screen.getByRole('banner');
    const input = screen.getByRole('textbox');

    // assert
    expect(main).toContainElement(input);
  });
});
