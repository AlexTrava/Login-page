import '@mantine/core/styles.css';

import { AppShell, Flex } from '@mantine/core';

import InputLanguage from '../InputLanguage/InputLanguage';
import SwitchTheme from '../SwitchTheme/SwitchTheme';

const Header = () => {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 100,
        breakpoint: 'sm'
      }}
      padding="md">
      <AppShell.Header>
        <Flex mih={50} gap="md" justify="flex-end" align="baseline" direction="row" wrap="wrap">
          <InputLanguage />
          <SwitchTheme />
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>
    </AppShell>
  );
};

export default Header;
