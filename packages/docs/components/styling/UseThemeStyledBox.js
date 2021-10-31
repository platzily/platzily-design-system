import { useTheme } from '@platzily-ui/styling';

export default function DefaultStyledBox(props) {
  const theme = useTheme();

  const rootStyle = {
    display: 'flex',
    justifyContent: 'center'
  };

  const boxStyle = {
    backgroundColor: props.color || theme.palette.primary.main,
    width: 200,
    height: 200
  };

  return (
    <div style={rootStyle}>
      <div style={boxStyle} />
    </div>
  );
}
