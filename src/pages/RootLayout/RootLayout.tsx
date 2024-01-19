import { Center, Container } from '@mantine/core';
import { Outlet } from 'react-router-dom';

import { Header } from '../../features/components/Header/Header';

const RootLayout = () => {
  return (
    <Container>
      <Center maw={400} h={100}>
        <Header />
        <Outlet />
      </Center>
    </Container>
  );
};

export default RootLayout;
