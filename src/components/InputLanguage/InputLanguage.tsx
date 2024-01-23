import { Image, NativeSelect } from '@mantine/core';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// import language from '../../Assets/language';

const InputLanguage = () => {
  const [value, setValue] = useState<string>('');
  const { i18n } = useTranslation();

  const handleLangSwitch = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.currentTarget.value);
    const lang = event.currentTarget.value.toLowerCase();
    i18n.changeLanguage(lang);
  };

  return (
    <NativeSelect
      value={value}
      onChange={handleLangSwitch}
      data={['EN', 'RU']}
      mt="md"
      leftSection={<Image h={20} w={20} />}
    />
  );
};

export default InputLanguage;
