import '@mantine/core/styles.css';

import { Button, Container, Flex, Image, Paper, Text, TextInput } from '@mantine/core';
// import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import iconSteam from '../../../public/steam.svg';
import { signIn } from '../../redux/slices/authSlice';
// import { auth } from '../../firebase';
import { useAppDispatch } from '../../redux/store';
import classes from './LoginForm.module.css';

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [phoneNumber, setNumberPhone] = useState('');

  const getPhoneNumberFromUserInput = (event) => {
    event.preventDefault();
    console.log(event.currentTarget.value);
    setNumberPhone(event.currentTarget.value);
  };

  const handlerAuth = useCallback(async () => {
    await dispatch(signIn(phoneNumber));
  }, [phoneNumber]);

  // useEffect(() => {
  //   window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
  //     size: 'invisible',
  //     callback: () => {
  //       // reCAPTCHA прошла проверку, отправляем SMS
  //       handleSendCode();
  //     }
  //   });
  // }, []);

  // const handleSendCode = () => {
  //   const appVerifier = window.recaptchaVerifier;
  //   const formattedPhoneNumber = phoneNumber.trim();
  //   console.log(phoneNumber, 'its 2 number');
  //   if (!formattedPhoneNumber.startsWith('+')) {
  //     console.error('Пожалуйста, укажите номер телефона в международном формате.');
  //     return;
  //   }
  //   signInWithPhoneNumber(auth, phoneNumber, appVerifier)
  //     .then((confirmationResult) => {
  //       window.confirmationResult = confirmationResult;
  //     })
  //     .catch((error) => {
  //       console.log('Ошибка при отправке SMS: ', error);
  //     });
  // };

  // const handleVerifyCode = () => {
  //   const codeInput = code;
  //   window.confirmationResult
  //     .confirm(codeInput)
  //     .then((result) => {
  //       // Пользователь аутентифицирован
  //       console.log('Пользователь успешно аутентифицирован', result.user);
  //     })
  //     .catch((error) => {
  //       console.log('Ошибка при вводе кода из SMS: ', error);
  //     });
  // };

  // const setupRecaptcha = (phoneNumber: string) => {
  //   const recaptcha = new RecaptchaVerifier(auth, 'sign-in-button', {
  //     size: 'invisible'
  //   });

  //   return signInWithPhoneNumber(auth, phoneNumber, recaptcha);
  // };

  // const sendSmsCode = async () => {
  //   try {
  //     const confirmObj = await setupRecaptcha(numberPhone);
  //     console.log(confirmObj, 'its confirm');
  //   } catch (e) {
  //     console.log(e, 'error catch');
  //   }
  // };

  // const onCaptchVerify = async (phone) => {
  //   const recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
  //     size: 'invisible',
  //     callback: (response) => {
  //       // reCAPTCHA solved, allow signInWithPhoneNumber.
  //       console.log(response, 'ist responce');
  //       // onSignInSubmit();
  //     }
  //   });
  //   console.log(signInWithPhoneNumber(auth, phone, recaptchaVerifier));
  //   return signInWithPhoneNumber(auth, phone, recaptchaVerifier);
  // };

  // const onSignInSubmit = () => {
  //   onCaptchVerify();
  //   const appVerifier = window.recaptchaVerifier;
  //   let phone = numberPhone;

  //   signInWithPhoneNumber(auth, phone, appVerifier)
  //     .then((confirmationResult) => {
  //       // SMS sent. Prompt user to type the code from the message, then sign the
  //       // user in with confirmationResult.confirm(code).
  //       window.confirmationResult = confirmationResult;
  //       console.log('send code');
  //       // ...
  //     })
  //     .catch((error) => {
  //       console.log(error, 'onSign errrorr');
  //     });
  // };

  const { t } = useTranslation();
  return (
    <Container size={460} my={30} ta="center" mt={250}>
      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <Text>{t('sign')}</Text>
        <TextInput
          label={t('yourPhone')}
          placeholder={t('enterPhone')}
          required
          ta="left"
          onChange={getPhoneNumberFromUserInput}
        />
        <Flex mih={50} gap="sm" justify="center" align="center" direction="column" wrap="wrap">
          <Button
            className={classes.control}
            mt={30}
            radius="lg"
            id="sign-in-button"
            onClick={handlerAuth}>
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
