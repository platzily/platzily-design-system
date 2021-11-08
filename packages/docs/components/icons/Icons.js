import { createStyleSheet } from '@platzily-ui/styling';
import { Link } from '@platzily-ui/icons';

const icons = [
  {
    id: 0,
    Icon: Link,
    name: 'Link',
    path: "import { Link } from '@platzily-ui/icons';"
  }
];

const useStyleSheet = createStyleSheet(() => ({
  root: {
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    marginTop: 12,
    padding: 8
  },
  input: {
    height: '2rem',
    borderRadius: 4
  },
  inputContainer: {
    margin: '12px 0'
  }
}));

export default function Icons() {
  const { classes } = useStyleSheet();

  return (
    <div className={classes.root}>
      <div className={classes.inputContainer}>
        <input className={classes.input}/>
      </div>
      <div>
        {icons.map(icon => (
          <div key={icon.id}>
            <icon.Icon/>
            <span>{icon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
