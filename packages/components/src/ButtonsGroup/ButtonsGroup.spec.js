import { render } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@platzily-ui/styling';
import ButtonsGroup from './ButtonsGroup';

describe('@Components/ButtonsGroup', () => {
  it('Given the ButtonsGroup Component, when the props provide borderWrapperComponent with a number then the ButtonsGroup component will take border-radius attribute', () => {
    // arrange
    const actions = [
      {
        childrenButton: 'Button One',
        selected: false,
        onClick: () => {},
      },
      {
        childrenButton: 'Button Two',
        selected: false,
        onClick: () => {},
      },
      {
        childrenButton: 'Button Three',
        selected: false,
        onClick: () => {},
      },
    ];

    const { getByRole } = render(
      <ThemeProvider theme={createTheme()}>
        <ButtonsGroup
          role="banner"
          actions={actions}
          borderWrapperComponent={5}
        />
      </ThemeProvider>,
    );

    // act
    const ButtonsGroupTestedText = getByRole('banner');

    // assert
    expect(ButtonsGroupTestedText).toBeDefined();
    expect(ButtonsGroupTestedText).toHaveStyle(`border-radius:5px`);
  });

});
