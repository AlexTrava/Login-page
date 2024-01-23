import '@mantine/core/styles.css';

import { Center, Container } from '@mantine/core';
import type { FC } from 'react';

import { Header } from '@/features/components/Header/Header';

import styles from './Main.module.css';

const MainPage: FC = () => {
  return (
    <Container>
      <Header />
      <Center className={styles.wrapper}>
        <h1>MainPage</h1>;
      </Center>
    </Container>
  );
};

export default MainPage;
