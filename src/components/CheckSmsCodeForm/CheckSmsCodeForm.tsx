import { Button, Container, Flex, Paper, Text, TextInput } from '@mantine/core';
// import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import classes from './CheckSmsCodeForm.module.css';

const CheckSmsCodeForm: React.FC = () => {
  // const [codeUser, setCodeUser] = useState('');

  // const getPhoneNumberFromUserInput = (event) => {
  //   setCodeUser(event.currentTarget.value);
  // };

  // const check = () => {
  //   const code = codeUser;
  //   console.log(window.confirmationResult, 'window.confirmationResult its');
  //   window.confirmationResult
  //     .confirm(code)
  //     .then((result) => {
  //       // User signed in successfully.
  //       const user = result.user;
  //       console.log('succs code', user);
  //       // ...
  //     })
  //     .catch((error) => {
  //       // User couldn't sign in (bad verification code?)
  //       console.log(error,'error sms codee');
  //     });
  // };

  const { t } = useTranslation();
  return (
    <Container size={460} my={30} ta="center" mt={250}>
      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <Text>{t('enterCode')}</Text>
        <TextInput required ta="left" onChange={getPhoneNumberFromUserInput} />
        <Flex mih={50} gap="sm" justify="center" align="center" direction="column" wrap="wrap">
          <Button
            className={classes.control}
            radius="lg"
            mt={20}
            id="sign-in-button"
            onClick={check}>
            {t('send')}
          </Button>
        </Flex>
      </Paper>
    </Container>
  );
};

export default CheckSmsCodeForm;
