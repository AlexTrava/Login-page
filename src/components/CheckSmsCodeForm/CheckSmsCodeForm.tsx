import { Button, Container, Flex, Paper, Text, TextInput } from '@mantine/core';
import type { ChangeEvent, FC } from 'react';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { getCaptcha } from '../../redux/selectors';
import { setVerificationId } from '../../redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import classes from './CheckSmsCodeForm.module.css';

const CheckSmsCodeForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const fetchCapthca = useAppSelector(getCaptcha);

  const [codeSms, setCode] = useState('');
  const getSmsCode = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setCode(event.currentTarget.value);
  };

  const handlerVerifyCode = useCallback(() => {
    dispatch(setVerificationId(fetchCapthca.verificationId));
    fetchCapthca.confirm(codeSms);
    navigate('/auth');
  }, [codeSms]);

  const { t } = useTranslation();
  return (
    <Container size={460} my={30} ta="center" mt={250}>
      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <Text>{t('enterCode')}</Text>
        <TextInput required ta="left" onChange={getSmsCode} />
        <Flex mih={50} gap="sm" justify="center" align="center" direction="column" wrap="wrap">
          <Button
            className={classes.control}
            radius="lg"
            mt={20}
            id="sign-in-button"
            onClick={handlerVerifyCode}>
            {t('send')}
          </Button>
        </Flex>
      </Paper>
    </Container>
  );
};

export default CheckSmsCodeForm;
