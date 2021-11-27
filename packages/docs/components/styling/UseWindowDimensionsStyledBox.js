import { useWindowDimensions } from '@platzily-ui/styling';

export default function UseWindowDimensionsStyledBox() {
  const { width, height } = useWindowDimensions();

  return (
    <div>
      <div>width: {width}px</div>
      <div>height: {height}px</div>
    </div>
  );
}
