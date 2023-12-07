import '@mantine/core/styles.css';

import { Button, Container, Flex, Image, Paper, Text, TextInput } from '@mantine/core';

import { useTranslation } from 'react-i18next';

import { RecaptchaVerifier, signInWithPhoneNumber  } from "firebase/auth";
import { auth } from '../../firebase';

import iconSteam from '../../../public/steam.svg';
import classes from './LoginForm.module.css';
import { useState } from 'react';



const LoginForm: React.FC = () => {
let [numberPhone, setNumberPhone] = useState('');

const getPhoneNumberFromUserInput = (event) => {
  setNumberPhone(event.currentTarget.value)
  console.log(event.currentTarget.value);
}




const onCapthcVerify = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
      }
    });
};

const onSignInSubmit = () => {
  onCapthcVerify();
  const appVerifier = window.recaptchaVerifier;
  let phone= numberPhone;

  signInWithPhoneNumber(auth, phone, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      console.log('send code')
      // ...
    }).catch((error) => {
      console.log(error, 'onSign errrorr');
    });
}








  const { t } = useTranslation();
  return (
    <Container size={460} my={30} ta="center" mt={250}>
      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <Text>{t('sign')}</Text>
        <TextInput label={t('yourPhone')} placeholder={t('enterPhone')} required ta="left" onChange={getPhoneNumberFromUserInput}/>
        <Flex mih={50} gap="sm" justify="center" align="center" direction="column" wrap="wrap">
          <Button className={classes.control} mt={30} radius="lg" id="sign-in-button" onClick={onSignInSubmit}>
            {t('sendSms')}
          </Button>
          <Button
            className={classes.control}
            radius="lg"
            leftSection={<Image h={20} w={20} src={iconSteam} />}
          >
            {t('signSteam')}
          </Button>
        </Flex>
      </Paper>
    </Container>
  );
};

export default LoginForm;
