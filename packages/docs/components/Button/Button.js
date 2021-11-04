import { Button } from '@platzily-ui/components';
import { ThemeProvider } from '@platzily-ui/styling';
import { defaultTheme } from './theme';

export default function ButtonComponent() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <section style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
        <div>
          <h4>Primary Button</h4>
          <Button type="button" style={{ margin: '10px' }}>
            ACTIVE
          </Button>
        </div>
        <div>
          <h4>Secondary Button</h4>
          <Button type="button" mode="secondary" style={{ margin: '10px' }}>
            ACTIVE
          </Button>
        </div>
        <div>
          <h4>Primary Button</h4>
          <Button type="button" style={{ margin: '10px' }} disabled>
            DISABLED
          </Button>
        </div>
        <div>
          <h4>Secondary Button</h4>
          <Button type="button" mode="secondary" style={{ margin: '10px' }} disabled>
            DISABLED
          </Button>
        </div>
      </section>
    </ThemeProvider>
  );
}
