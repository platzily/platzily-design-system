import { Input } from '@platzily-ui/components';
import { createStyleSheet } from '@platzily-ui/styling';

const useStyleSheet = createStyleSheet((theme) => ({
  inputStyle: {
    padding: theme.spacing(2),
  },
}), { key: 'padding' });

const InputComponent = (props) => {
  const { classes } = useStyleSheet();
  const { required, type, otherProps } = props;

  return <Input
    className={classes.inputStyle}
    type={type}
    required={required}
    {...otherProps}
  />;
};

export default InputComponent;
