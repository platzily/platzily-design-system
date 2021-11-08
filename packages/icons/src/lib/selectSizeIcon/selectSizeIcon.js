const selectSizeIcon = (props) => {
  if (props.size === 'xs') {
    return {
      height: 8,
      width: 8,
    };
  }
  if (props.size === 'sm') {
    return {
      height: 12,
      width: 12,
    };
  }
  if (props.size === 'lg') {
    return {
      height: 16,
      width: 16,
    };
  }
  if (props.size === '1x') {
    return {
      height: 24,
      width: 24,
    };
  }
  if (props.size === '2x') {
    return {
      height: 40,
      width: 40,
    };
  }
  if (props.height || props.width) {
    return {
      height: props.height || props.width,
      width: props.width || props.height,
    };
  }
  return {
    height: 24,
    width: 24,
  };
};

export default selectSizeIcon;
