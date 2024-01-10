import { Button, Container, Flex, Paper, Text, TextInput } from '@mantine/core';
import type { UseFormReturnType } from '@mantine/form';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { auth } from '@/firebase';
import { getDisplayName, getUsersState } from '@/redux/selectors';
import { setFormType } from '@/redux/slices/authenticationFormSlice';
import { getUser, setUser } from '@/redux/slices/userSliceFirestore';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import type { FC, FormFields, UserInfo } from '@/types';

import classes from './NickNameForm.module.css';

interface NickNameFormProps {
  form: UseFormReturnType<FormFields>;
}

const NickNameForm: FC<NickNameFormProps> = ({ form }) => {
  const dispatch = useAppDispatch();
  const nickName = useAppSelector(getDisplayName);
  // const [nickName, setNickName] = useState('');
  const [taken, setIsTaken] = useState(false);
  const usersFetch = useAppSelector(getUsersState);

  // const getDisplayName = (event: ChangeEvent<HTMLInputElement>): void => {
  //   event.preventDefault();
  //   setNickName(event.currentTarget.value);
  // };

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
      dispatch(setFormType('auth'));
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
            {...form.getInputProps('nickName')}
            error="Nickname already been taken"
          />
        ) : (
          <TextInput required ta="left" {...form.getInputProps('nickName')} />
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
