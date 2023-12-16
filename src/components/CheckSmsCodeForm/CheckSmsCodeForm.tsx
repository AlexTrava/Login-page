import { Button, Container, Flex, Paper, Text, TextInput } from '@mantine/core';
import { useState } from 'react';
// import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import classes from './CheckSmsCodeForm.module.css';

const CheckSmsCodeForm: React.FC = () => {
  const [code, setCode] = useState('');

  const handleVerifyCode = () => {
    const codeInput = code;
    window.confirmationResult
      .confirm(codeInput)
      .then((result) => {
        // Пользователь аутентифицирован
        console.log('Пользователь успешно аутентифицирован', result.user);
      })
      .catch((error) => {
        console.log('Ошибка при вводе кода из SMS: ', error);
      });
  };

  const { t } = useTranslation();
  return (
    <Container size={460} my={30} ta="center" mt={250}>
      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <Text>{t('enterCode')}</Text>
        <TextInput required ta="left" onChange={(e) => setCode(e.target.value)} />
        <Flex mih={50} gap="sm" justify="center" align="center" direction="column" wrap="wrap">
          <Button
            className={classes.control}
            radius="lg"
            mt={20}
            id="sign-in-button"
            onClick={handleVerifyCode}>
            {t('send')}
          </Button>
        </Flex>
      </Paper>
    </Container>
  );
};

export default CheckSmsCodeForm;
