import { Button, Container, Flex, Paper, Text, TextInput } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { auth } from '@/firebase';
import { getCaptcha, getUsersState } from '@/redux/selectors';
import { getUser } from '@/redux/slices/userSliceFirestore';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { NavigateTo } from '@/routes';
import type { ChangeEvent, FC } from '@/types';

import classes from './CheckSmsCodeForm.module.css';

const CheckSmsCodeForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const fetchCapthca = useAppSelector(getCaptcha);
  const [codeSms, setCode] = useState('');
  const usersFetch = useAppSelector(getUsersState);

  const getSmsCode = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setCode(event.currentTarget.value);
  };
  useEffect(() => {
    dispatch(getUser());
  }, [codeSms]);

  const handlerVerifyCode = useCallback(async () => {
    await fetchCapthca.confirm(codeSms);
    const currentUserUid = auth.currentUser?.uid;
    const currentUser = usersFetch.filter((user) => user.uid === currentUserUid);
    if (currentUser.length == 0) {
      navigate(NavigateTo.SetNickname);
    }
    const [{ displayName }] = currentUser;

    if (currentUser.length > 0 && displayName) {
      navigate(NavigateTo.SuccesAuth);
    } else {
      navigate(NavigateTo.SuccesAuth);
    }
  }, [userFetch]);
  const { t } = useTranslation();
  return (
    <Container size={460} my={30} ta="center" mt={250}>
      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <Text>{t('enterCode')}</Text>
        <TextInput required ta="left" onChange={getSmsCode} value={codeSms} />
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
