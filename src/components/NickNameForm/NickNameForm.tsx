import { Button, Container, Flex, Paper, Text, TextInput } from '@mantine/core';
import type { UseFormReturnType } from '@mantine/form';
import { useTranslation } from 'react-i18next';

import { handlerNicknameInput } from '@/redux/slices/authenticationFormSlice';
import { useAppDispatch } from '@/redux/store';
import type { FC, FormFields } from '@/types';

import classes from './NickNameForm.module.css';

interface NickNameFormProps {
  form: UseFormReturnType<FormFields>;
}

const NickNameForm: FC<NickNameFormProps> = ({ form }) => {
  const dispatch = useAppDispatch();

  const displayNameHandler = async () => {
    dispatch(await handlerNicknameInput());
  };

  const { t } = useTranslation();
  return (
    <Container size={460} my={30} ta="center" mt={250}>
      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <Text>{t('nickName')}</Text>
        <TextInput required ta="left" {...form.getInputProps('nickName')} />
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
            onClick={displayNameHandler}
          >
            {t('send')}
          </Button>
        </Flex>
      </Paper>
    </Container>
  );
};

export default NickNameForm;
