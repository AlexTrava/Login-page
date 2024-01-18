import { Button, Flex, Paper, Text, TextInput } from '@mantine/core';
import type { UseFormReturnType } from '@mantine/form';
import { useTranslation } from 'react-i18next';

import { handlerVerifyCode } from '@/redux/slices/authenticationFormSlice';
import { useAppDispatch } from '@/redux/store';
import type { FC, FormFields } from '@/types';

import classes from './CheckSmsCodeForm.module.css';

interface CheckSmsCodeFormProps {
  form: UseFormReturnType<FormFields>;
}

const CheckSmsCodeForm: FC<CheckSmsCodeFormProps> = ({ form }) => {
  const dispatch = useAppDispatch();


  const handlerVerifyCodeSms = async () => {
    await dispatch(handlerVerifyCode());
  };


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
