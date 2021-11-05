import { useTheme } from '@platzily-ui/styling';

export default function UseColor(props) {
  const theme = useTheme();

  const boxStyle = {
    backgroundColor: theme.palette[props.color][props.colorType],
    color: props.colorType === 'light'? '#000000': '#FFFFFF',
    border: '1px solid',
    textAlign: 'center',
    width: '236px',
    margin: '7px',
    padding: '16px',
  };

  return <button type="button" style={boxStyle}>{`${props.color}.${props.colorType}`}</button>;
}
