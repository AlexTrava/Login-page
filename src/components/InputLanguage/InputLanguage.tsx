import { NativeSelect, Image } from '@mantine/core';
import language from '../../../public/language.svg';


const InputLanguage = () => {
  return <NativeSelect mt="md" data={['RU', 'EN']} leftSection={<Image h={20} w={20} src={language} />}/>;
};

export default InputLanguage;
