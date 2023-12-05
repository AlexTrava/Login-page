import '@mantine/core/styles.css';
import '../../i18n';

import { Button, Container, Flex, Image, Paper, Text, TextInput } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import iconSteam from '../../../public/steam.svg';
import classes from './LoginForm.module.css';

const LoginForm: React.FC = () => {
  const { t } = useTranslation('en');
  return (
    <Container size={460} my={30} ta="center" mt={250}>
      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <Text>{t('en.sign')}</Text>
        <TextInput label="Your phone" placeholder="Enter phone number" required ta="left" />
        <Flex mih={50} gap="sm" justify="center" align="center" direction="column" wrap="wrap">
          <Button className={classes.control} mt={30} radius="lg">
            Send SMS with code
          </Button>
          <Button
            className={classes.control}
            radius="lg"
            leftSection={<Image h={20} w={20} src={iconSteam} />}>
            Sign in with Steam
          </Button>
        </Flex>
      </Paper>
    </Container>
  );
};

export default LoginForm;
