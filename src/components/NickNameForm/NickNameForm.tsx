import { Button, Container, Flex, Paper, Text, TextInput } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { auth } from '@/firebase';
import { getUsersState } from '@/redux/selectors';
import { getUser, setUser } from '@/redux/slices/userSliceFirestore';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { NavigateTo } from '@/routes';
import type { ChangeEvent, FC, UserInfo } from '@/types';

import classes from './NickNameForm.module.css';

const NickNameForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [nickName, setNickName] = useState('');
  const [taken, setIsTaken] = useState(false);
  const usersFetch = useAppSelector(getUsersState);

  const getDisplayName = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setNickName(event.currentTarget.value);
  };

  useEffect(() => {
    dispatch(getUser());
  }, [nickName]);

  const handlerNicknameInput = useCallback(async () => {
    const currentUser = auth.currentUser;
    const isTaken = !!usersFetch.find((user: UserInfo) => user.displayName == nickName);
    if (isTaken) {
      setIsTaken(true);
    } else {
      dispatch(
        setUser({
          displayName: nickName,
          email: currentUser!.email,
          phoneNumber: currentUser!.phoneNumber,
          photoURL: currentUser!.photoURL,
          providerId: currentUser!.providerId,
          uid: currentUser!.uid
        })
      );
      setIsTaken(false);
      navigate(NavigateTo.SuccesAuth);
    }
  }, [nickName]);

  const { t } = useTranslation();
  return (
    <Container size={460} my={30} ta="center" mt={250}>
      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <Text>{t('nickName')}</Text>
        {taken ? (
          <TextInput
            required
            ta="left"
            onChange={getDisplayName}
            value={nickName}
            error="Nickname already been taken"
          />
        ) : (
          <TextInput required ta="left" onChange={getDisplayName} value={nickName} />
        )}
        <Flex mih={50} gap="sm" justify="center" align="center" direction="column" wrap="wrap">
          <Button
            className={classes.control}
            radius="lg"
            mt={20}
            id="sign-in-button"
            onClick={handlerNicknameInput}>
            {t('send')}
          </Button>
        </Flex>
      </Paper>
    </Container>
  );
};

export default NickNameForm;
