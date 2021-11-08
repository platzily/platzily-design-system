export default function Icons({ children, name }) {
  return (
    <div
      style={{
        padding: 16,
        margin: 10,
        width: 85,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '4px 4px 10px 5px rgba(0,0,0,0.10)',
        borderRadius: 8,
      }}
    >
      {children}
      <p style={{ margin: 0 }}>{name}</p>
    </div>
  );
}
