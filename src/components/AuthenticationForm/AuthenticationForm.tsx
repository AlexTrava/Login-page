import CheckSmsCodeForm from '@components/CheckSmsCodeForm/CheckSmsCodeForm';
import LoginForm from '@components/LoginForm/LoginForm';
import NickNameForm from '@components/NickNameForm/NickNameForm';
import SuccessCheckCode from '@components/SuccessCheckCode/SuccessCheckCode';
import { Container } from '@mantine/core';
import { useForm } from '@mantine/form';

import { getFormTypeState } from '@/redux/selectors';
import {
  setDisplayName,
  setPhoneNumber,
  setSmsCode,
} from '@/redux/slices/curentUserSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import type { FormFields } from '@/types';

const AuthenticationForm = () => {
  const formType = useAppSelector(getFormTypeState);
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

  let renderForm;
  switch (formType) {
    case 'login':
      renderForm = <LoginForm form={form} />;
      break;
    case 'sms':
      renderForm = <CheckSmsCodeForm form={form} />;
      break;
    case 'auth':
      renderForm = <SuccessCheckCode />;
      break;
    case 'nick':
      renderForm = <NickNameForm form={form} />;
      break;
  }

  return (
    <Container size={460} my={30} ta="center" mt={250}>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>{renderForm}</form>
    </Container>
  );
};

export default AuthenticationForm;
