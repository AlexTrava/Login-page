import { Button, Flex, Paper, Text, TextInput } from '@mantine/core';
import type { UseFormReturnType } from '@mantine/form';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { auth } from '@/firebase';
import { getCaptcha, getCurrentUserFetch } from '@/redux/selectors'; //
import { getSmsCode } from '@/redux/selectors';
import { handlerVerifyCode } from '@/redux/slices/authenticationFormSlice';
// import { setFormType } from '@/redux/slices/authenticationFormSlice';
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
  const currentUser = useAppSelector(getCurrentUserFetch);
  const handlerProps = { fetchCapthca, smsCode };
  const currentUserUid = auth.currentUser?.uid;

  useEffect(() => {
    if (currentUserUid) dispatch(getUser());
    console.log(currentUserUid, 'its checkSms comp');
  }, [smsCode]);

  const handlerVerifyCodeSms = useCallback(async () => {
    await dispatch(handlerVerifyCode(handlerProps));
    console.log(currentUser, 'currentUser');

    // const currentUser = auth.currentUser;

    // if (userisExist) {
    //   dispatch(setFormType('nick'));
    // }
    // const { displayName } = currentUser;
    // console.log(displayName, 'its display test');

    // if (userisExist && displayName) {
    //   dispatch(setFormType('auth'));
    // } else {
    //   dispatch(setFormType('auth'));
    // }
  }, [smsCode, currentUser, dispatch, fetchCapthca]);

  const { t } = useTranslation();
  return (
    <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
      <Text>{t('enterCode')}</Text>
      <TextInput required ta="left" {...form.getInputProps('smsCode')} />
      <Flex
        mih={50}
        gap="sm"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
      >
        <Button
          className={classes.control}
          radius="lg"
          mt={20}
          id="sign-in-button"
          onClick={handlerVerifyCodeSms}
        >
          {t('send')}
        </Button>
      </Flex>
    </Paper>
  );
};

export default CheckSmsCodeForm;
