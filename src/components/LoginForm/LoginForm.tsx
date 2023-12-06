import '@mantine/core/styles.css';

import { Button, Container, Flex, Image, Paper, Text, TextInput } from '@mantine/core';
import { useTranslation } from "react-i18next";

import iconSteam from '../../../public/steam.svg';
import classes from './LoginForm.module.css';

const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container size={460} my={30} ta="center" mt={250}>
      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <Text>{t('sign')}</Text>
        <TextInput label={t('yourPhone')} placeholder={t('enterPhone')} required ta="left" />
        <Flex mih={50} gap="sm" justify="center" align="center" direction="column" wrap="wrap">
          <Button className={classes.control} mt={30} radius="lg">
            {t('sendSms')}
          </Button>
          <Button
            className={classes.control}
            radius="lg"
            leftSection={<Image h={20} w={20} src={iconSteam} />}>
            {t('signSteam')}
          </Button>
        </Flex>
      </Paper>
    </Container>
  );
};

export default LoginForm;
