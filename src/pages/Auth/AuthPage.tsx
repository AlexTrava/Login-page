import { Container, Flex } from '@mantine/core';

import { AuthUiForm } from './ui/auth-ui-form';

export default function AuthPage() {
  return (
    <Container>
      <Flex h="100%" align="center">
        <Container size="xs">
          <AuthUiForm />
        </Container>
      </Flex>
    </Container>
  );
}
