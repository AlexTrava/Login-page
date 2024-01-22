import CheckSmsCodeForm from '@components/CheckSmsCodeForm/CheckSmsCodeForm';
import LoginForm from '@components/LoginForm/LoginForm';
import NickNameForm from '@components/NickNameForm/NickNameForm';
import SuccessCheckCode from '@components/SuccessCheckCode/SuccessCheckCode';
import { Container } from '@mantine/core';
import { useForm } from '@mantine/form';

import { getStepFormState } from '@/redux/selectors';
import {
  setDisplayName,
  setPhoneNumber,
  setSmsCode,
} from '@/redux/slices/curentUserSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import type { FormFields } from '@/types';

const AuthenticationForm = () => {
  const stepForm = useAppSelector(getStepFormState);
  const dispatch = useAppDispatch();

  const form = useForm<FormFields>({
    validateInputOnChange: true,
    initialValues: {
      phoneNumber: '',
      smsCode: '',
      nickName: '',
    },
    validate: {
      phoneNumber: (value) =>
        value.length < 12 ? 'The phone number must consist of 12 characters' : null,
      smsCode: (value) =>
        value.length < 6 ? 'The smc code number must consist of 6 characters' : null,
      nickName: (value) =>
        value.length < 2 ? 'Name must have at least 2 letters' : null,
    },
  });

  dispatch(setPhoneNumber(form.values.phoneNumber));
  dispatch(setSmsCode(form.values.smsCode));
  dispatch(setDisplayName(form.values.nickName));

  const renderForm = (stepForm: string) => {
    switch (stepForm) {
      case 'login':
        return <LoginForm form={form} />;
      case 'sms':
        return <CheckSmsCodeForm form={form} />;
      case 'auth':
        return <SuccessCheckCode />;
      case 'nick':
        return <NickNameForm form={form} />;
    }
  };

  return (
    <Container size={460} my={30} ta="center" mt={250}>
      <form onSubmit={form.onSubmit(() => {})}>{renderForm(stepForm)}</form>
    </Container>
  );
};

export default AuthenticationForm;
