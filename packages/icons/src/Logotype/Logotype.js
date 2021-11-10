import { forwardRef } from 'react';
import selectSizeIcon from '../lib/selectSizeIcon/selectSizeIcon';
import SVG from './Logotype.svg';

const Logotype = forwardRef(function Link(props, ref) {
  const sizeIcon = selectSizeIcon(props);
  return <img src={SVG.src} alt="logotype" ref={ref} width={sizeIcon.width} />;
});

export default Logotype;
