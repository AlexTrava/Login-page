function App() {
  return (
    <AppShell
      navbar={
        <Navbar width={{ base: 300 }} height="100vh">
          <Navbar.Section>Assets/Hosts</Navbar.Section>
          <Navbar.Section>Software</Navbar.Section>
          <Navbar.Section>Configurations</Navbar.Section>
        </Navbar>
      }>
      {/* Your application here */}
    </AppShell>
  );
}

export default App;
