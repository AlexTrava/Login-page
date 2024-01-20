import { Container, Flex } from '@mantine/core';
import { Outlet } from 'react-router-dom';

import { Header } from '../../features/components/Header/Header';

const RootLayout = () => {
  return (
    <Container>
      <Flex justify="" align="flex-start" direction="" wrap="wrap">
        <Header />
        <Outlet />
      </Flex>
    </Container>
  );
};

export default RootLayout;
