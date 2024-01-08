import CheckSmsCodeForm from '@components/CheckSmsCodeForm/CheckSmsCodeForm';
import LoginForm from '@components/LoginForm/LoginForm';
import NickNameForm from '@components/NickNameForm/NickNameForm';
import SuccessCheckCode from '@components/SuccessCheckCode/SuccessCheckCode';
import { Container } from '@mantine/core';
import { useForm } from '@mantine/form';

import { getFormTypeState } from '@/redux/selectors';
import { useAppSelector } from '@/redux/store';

const AuthenticationForm = () => {
  const formType = useAppSelector(getFormTypeState);

  const form = useForm({
    initialValues: {
      name: '',
      terms: true
    },
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null)
    }
  });

  let renderForm;
  switch (formType) {
    case 'login':
      renderForm = <LoginForm />;
      break;
    case 'sms':
      renderForm = <CheckSmsCodeForm />;
      break;
    case 'auth':
      renderForm = <SuccessCheckCode />;
      break;
    case 'nick':
      renderForm = <NickNameForm />;
      break;
  }

  return (
    <Container size={460} my={30} ta="center" mt={250}>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>{renderForm}</form>
    </Container>
  );
};

export default AuthenticationForm;
