import { createStyleSheet } from '@platzily-ui/styling';
import * as PlatzilyIcons from '@platzily-ui/icons';
import { Fragment, useState } from 'react';

const useStylesheet = createStyleSheet(() => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    justifyItems: 'center',
    marginTop: '1rem'
  },
  iconContainer: {
    padding: 16,
    margin: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '4px 4px 10px 5px rgba(0,0,0,0.10)',
    borderRadius: 8,
  },
  text: {
    margin: 0,
    marginTop: '0 !important'
  },
  input: {
    border: 'none',
    borderRadius: 8,
    boxShadow: '4px 4px 10px 5px rgba(0,0,0,0.10)',
    height: '2.5rem',
    margin: '0 auto',
    display: 'block',
    padding: '0 1rem',
    lineHeight: '2rem',
    marginTop: '1rem'
  }
}), { key: 'icons' });

export default function Icons() {
  const { classes } = useStylesheet();
  const defaultIconKeys = Object.keys(PlatzilyIcons);
  const [iconKeys, setIconKeys] = useState(defaultIconKeys);
  const [copiedValues, setCopiedValues] = useState({});

  const handleInputChange = (event) => {
    const { value } = event.target;
    if (!value) {
      setIconKeys(defaultIconKeys);
      return;
    }
    setIconKeys(defaultIconKeys.filter(key => key.toUpperCase().startsWith(value.toUpperCase())));
  };

  const copyValue = (key) => async () => {
    if (!copiedValues[key]) {
      const valueToCopy = `import { ${key} } from '@platzily-ui/icons'`;
      await navigator.clipboard.writeText(valueToCopy);
      setCopiedValues(prevState => ({ ...prevState, [key]: true }));
      setTimeout(() => {
        setCopiedValues(prevState => ({ ...prevState, [key]: false }));
      }, 1500);
    }
  };

  return (
    <Fragment>
      <input
        className={classes.input}
        placeholder="Search..."
        onChange={handleInputChange}
      />
      <div className={classes.root}>
        {iconKeys.map(key => {
          const Icon = PlatzilyIcons[key];
          return (
            <button
              className={classes.iconContainer}
              onClick={copyValue(key)}
              type="button"
              title="Copy"
              key={key}
            >
              <Icon />
              <p className={classes.text}>{copiedValues[key] ? 'Copied!' : key}</p>
            </button>
          );
        })}
      </div>
    </Fragment>
  );
}
