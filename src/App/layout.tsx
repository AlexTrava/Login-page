import { Container } from '@mantine/core';
import { Outlet } from 'react-router-dom';

import { Header } from '../features/components/Header/Header';

export function Layout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}
