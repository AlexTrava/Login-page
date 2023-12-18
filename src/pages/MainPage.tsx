import '@mantine/core/styles.css';

import { AppShell, Flex, Image } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';

import logo from '../../public/logo.svg';
import CheckSmsCodeForm from '../components/CheckSmsCodeForm/CheckSmsCodeForm';
import InputLanguage from '../components/InputLanguage/InputLanguage';
import LoginForm from '../components/LoginForm/LoginForm';
import LogoutButton from '../components/LogoutButton/LogoutButton';
import SuccessCheckCode from '../components/SuccessCheckCode/SuccessCheckCode';
import SwitchTheme from '../components/SwitchTheme/SwitchTheme';

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
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/sendSms" element={<CheckSmsCodeForm />} />
          <Route path="/auth" element={<SuccessCheckCode />} />
        </Routes>
      </AppShell.Main>
    </AppShell>
  );
};

export default MainPage;
