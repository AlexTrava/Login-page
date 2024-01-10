import { Button, Flex, Paper, Text, TextInput } from '@mantine/core';
import type { UseFormReturnType } from '@mantine/form';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { auth } from '@/firebase';
import { getCaptcha, getUsersState } from '@/redux/selectors';
import { getSmsCode } from '@/redux/selectors';
import { setFormType } from '@/redux/slices/authenticationFormSlice';
import { getUser } from '@/redux/slices/userSliceFirestore';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import type { FC, FormFields } from '@/types';

import classes from './CheckSmsCodeForm.module.css';

interface CheckSmsCodeFormProps {
  form: UseFormReturnType<FormFields>;
}

const CheckSmsCodeForm: FC<CheckSmsCodeFormProps> = ({ form }) => {
  const dispatch = useAppDispatch();
  const smsCode = useAppSelector(getSmsCode);
  const fetchCapthca = useAppSelector(getCaptcha);
  // const [codeSms, setCode] = useState('');
  const usersFetch = useAppSelector(getUsersState);

  // const getSmsCode = (event: ChangeEvent<HTMLInputElement>): void => {
  //   event.preventDefault();
  //   setCode(event.currentTarget.value);
  // };
  useEffect(() => {
    dispatch(getUser());
  }, [smsCode]);

  const handlerVerifyCode = useCallback(async () => {
    await fetchCapthca.confirm(smsCode!);
    const currentUserUid = auth.currentUser?.uid;
    const currentUser = usersFetch.filter((user) => user.uid === currentUserUid); // ?
    if (currentUser.length == 0) {
      dispatch(setFormType('nick'));
    }
    const [{ displayName }] = currentUser;

    if (currentUser.length > 0 && displayName) {
      dispatch(setFormType('auth'));
    } else {
      dispatch(setFormType('auth'));
    }
  }, [usersFetch]);
  const { t } = useTranslation();
  return (
    <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
      <Text>{t('enterCode')}</Text>
      <TextInput required ta="left" {...form.getInputProps('smsCode')} />
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
  );
};

export default CheckSmsCodeForm;
