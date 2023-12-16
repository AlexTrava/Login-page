import { ActionIcon, Image, rem } from '@mantine/core';
import logout from '../../../public/logout.svg';

const  LogoutButton:React.FC = () => {
  return (
    <ActionIcon
      component="a"
      href="https://mantine.dev"
      size="xl"
      aria-label="Open in a new tab"
      onClick={(event) => event.preventDefault()}
      ml={10}
      
    >
          <Image h={30} w={30} src={logout}   />
    </ActionIcon>
  );
}

export default LogoutButton;