import { Input } from '@platzily-ui/components';
import { createStyleSheet } from '@platzily-ui/styling';

const useStyleSheet = createStyleSheet((theme) => ({
  input: {
    borderRadius: theme.spacing(),
    padding: theme.spacing(2),
    '&:invalid':{
      borderColor: theme.palette.error.main,
      '&::placeholder': {
        color: theme.palette.error.main,
      }
    }
  },
}), { key: 'DocsInput' });

const InputComponent = (props) => {
  const { classes } = useStyleSheet();
  const { type, placeholder, disabled, width, required, ...otherProps } = props;

  return <Input
    className={classes.input}
    type={type}
    placeholder={placeholder}
    disabled={disabled}
    width={width}
    required={required}
    {...otherProps}
  />;
};

export default InputComponent;
