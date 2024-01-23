import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { Header } from '@/features/components/Header/Header';

import { Navbar } from './ui/components/NavbarMinimal/NavbarMinimal';
import { TableSelection } from './ui/components/TableSelection/TableSelection';

export default function AdminPage() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 400,
        breakpoint: 'lg',
        collapsed: { mobile: !opened }
      }}
      padding="md">
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Header />
      </AppShell.Header>

      <AppShell.Navbar p="sm" w={200}>
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main maw={1400} p={0}>
        <TableSelection />
      </AppShell.Main>
    </AppShell>
  );
}
