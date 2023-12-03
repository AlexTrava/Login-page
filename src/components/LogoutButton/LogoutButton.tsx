import { ActionIcon, Image } from '@mantine/core';
import { signOut } from 'firebase/auth';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '@/firebase';
import { setClearUser } from '@/redux/slices/userSliceFirestore';
import { useAppDispatch } from '@/redux/store';
import type { FC } from '@/types';

import logout from '../../../public/logout.svg';

const LogoutButton: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handlerLogOut = useCallback(async () => {
    signOut(auth)
      .then(() => {
        dispatch(setClearUser());
        navigate('/');
      })
      .catch((error) => {
        console.log(error, 'logout error');
      });
  }, []);
  return (
    <ActionIcon
      component="a"
      size="xl"
      aria-label="Open in a new tab"
      ml={10}
      onClick={handlerLogOut}>
      <Image h={30} w={30} src={logout} />
    </ActionIcon>
  );
};

export default LogoutButton;
