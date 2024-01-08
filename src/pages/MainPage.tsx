import '@mantine/core/styles.css';

import { AppShell, Flex, Image } from '@mantine/core';

import AuthenticationForm from '@/components/AuthenticationForm/AuthenticationForm';
import InputLanguage from '@/components/InputLanguage/InputLanguage';
import LogoutButton from '@/components/LogoutButton/LogoutButton';
import SwitchTheme from '@/components/SwitchTheme/SwitchTheme';
import type { FC } from '@/types';

import logo from '../../public/logo.svg';

const MainPage: FC = () => {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 100,
        breakpoint: 'sm'
      }}
      padding="md">
      <AppShell.Header>
        <Flex justify="space-between">
          <Image h={50} w={50} src={logo} ml={20} />
          <Flex
            mih={50}
            gap="md"
            justify="space-between"
            align="baseline"
            direction="row"
            wrap="wrap">
            <InputLanguage />
            <SwitchTheme />
          </Flex>
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar p="xs">
        <LogoutButton />
      </AppShell.Navbar>
      <AppShell.Main>
        <AuthenticationForm />
      </AppShell.Main>
    </AppShell>
  );
};

export default MainPage;
