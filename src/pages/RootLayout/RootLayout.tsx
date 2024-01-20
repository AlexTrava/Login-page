import { Container } from '@mantine/core';
import { Outlet } from 'react-router-dom';

import { Header } from '../../features/components/Header/Header';

const RootLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default RootLayout;
