import { Container, Flex } from '@mantine/core';
import { Outlet } from 'react-router-dom';

import { Header } from '../../features/components/Header/Header';

const RootLayout = () => {
  return (
    <Container>
      <Flex justify="center" align="flex-start" direction="column">
        <Header />
        <Flex justify="center" align="center">
          <Outlet />
        </Flex>
      </Flex>
    </Container>
  );
};

export default RootLayout;
