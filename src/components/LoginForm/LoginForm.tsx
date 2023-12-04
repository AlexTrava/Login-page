import {
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
  Flex,
} from '@mantine/core';
import '@mantine/core/styles.css';
import classes from './LoginForm.module.css';

// import iconSteam from "../../../public/steam.svg"
// leftSection={iconSteam}

export function LoginForm() {
  return (
    <Container size={460} my={30} ta="center">
      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
      <Text >Sign in</Text>
        <TextInput label="Your phone" placeholder="Enter phone number" required ta='left' />
        <Flex
      mih={50}
      gap="sm"
      justify="center"
      align="center"
      direction="column"
      wrap="wrap"
    >

          <Button className={classes.control} mt={30} radius='lg'>Send SMS with code</Button>
          <Button className={classes.control} radius='lg' >Sign in with Steam</Button>

        </Flex>
      </Paper>
    </Container>
  );
}

export default LoginForm;