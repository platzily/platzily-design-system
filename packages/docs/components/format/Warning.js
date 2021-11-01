import Callout from 'nextra-theme-docs/callout';

export function Warning({ children }) {
  return (
    <Callout type="warning" emoji="🚨">
      {children}
    </Callout>
  );
}
