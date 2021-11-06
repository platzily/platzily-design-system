import { Header } from '@platzily-ui/components';

export default function ComponentHeader() {
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Header style={headerStyle} position="static">
      Header Component
    </Header>
  );
}
