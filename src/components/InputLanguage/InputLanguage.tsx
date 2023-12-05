import { Image, NativeSelect } from '@mantine/core';
import { useState } from 'react';

import language from '../../../public/language.svg';

const InputLanguage = () => {
  const [value, setValue] = useState('');
  console.log(value, 'its state');

  return (
    <NativeSelect
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      data={['RU', 'EN']}
      mt="md"
      leftSection={<Image h={20} w={20} src={language} />}
    />
  );
};

export default InputLanguage;
