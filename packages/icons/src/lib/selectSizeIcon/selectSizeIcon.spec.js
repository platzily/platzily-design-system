import selectSizeIcon from './selectSizeIcon';

describe('@icons/Link', () => {
  it('Given a size value It should return un object with width and height', () => {
    // arrange
    const props = {
      size: '1x'
    };

    // act
    const result = selectSizeIcon(props);

    // assert
    expect(result).toHaveProperty('width');
    expect(result).toHaveProperty('height');
  });

  it('Given a value in rem It should return un object with width and height', () => {
    // arrange
    const props = {
      size: '23rem'
    };

    // act
    const result = selectSizeIcon(props);

    // assert
    expect(result).toHaveProperty('width');
    expect(result).toHaveProperty('height');
  });

  it('Given a value in px It should return un object with width and height', () => {
    // arrange
    const props = {
      size: '23px'
    };

    // act
    const result = selectSizeIcon(props);

    // assert
    expect(result).toHaveProperty('width');
    expect(result).toHaveProperty('height');
  });

  it('Given a value of Number type It should return un object with width and height', () => {
    // arrange
    const props = {
      size: 49
    };

    // act
    const result = selectSizeIcon(props);

    // assert
    expect(result).toHaveProperty('width');
    expect(result).toHaveProperty('height');
  });
});
