import { Container, Flex } from '@mantine/core';

import { Header } from '@/features/components/Header/Header';

import { AuthUiForm } from './ui/auth-ui-form';

export default function AuthPage() {
  return (
    <>
      <Header />
      <Container>
        <Flex h="100%" align="center" pt={100}>
          <Container size="xs">
            <AuthUiForm />
          </Container>
        </Flex>
      </Container>
    </>
  );
}
