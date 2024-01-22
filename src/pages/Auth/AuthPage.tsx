import { Button, Center, Container } from '@mantine/core';
import { Link } from 'react-router-dom';

import styles from './AuthPage.module.css';

export default function AuthPage() {
  return (
    <Container>
      <Center display={'flex'} className={styles.wrapper}>
        <Button component={Link} to="/">
          Click here to go back to root page.
        </Button>
        <h1>AuthPage</h1>
      </Center>
    </Container>
  );
}
