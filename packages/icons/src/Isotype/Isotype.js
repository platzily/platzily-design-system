import { forwardRef } from 'react';
import selectSizeIcon from '../lib/selectSizeIcon/selectSizeIcon';
import SVG from './Isotype.svg';

const Isotype = forwardRef(function Link(props, ref) {
  const sizeIcon = selectSizeIcon(props);
  return <img src={SVG.src} alt="logotype" ref={ref} width={sizeIcon.width} height={sizeIcon.height}/>;
});

export default Isotype;
