import { Header } from '@platzily-ui/components';

export default function HeaderComponent() {
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Header style={headerStyle} >
      Header Component
    </Header>
  );
}
