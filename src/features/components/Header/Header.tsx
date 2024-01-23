import { Box, Flex, Group } from '@mantine/core';
import { Link } from 'react-router-dom';

import InputLanguage from '../../../components/InputLanguage/InputLanguage';
import SwitchTheme from '../../../components/SwitchTheme/SwitchTheme';
import { RoutersPaths } from '../../../shared/types/enums';
import classes from './Header.module.css';

export const Header = () => {
  return (
    <Box pb={5}>
      <header className={classes.header}>
        <Group>
          <Flex display="flex" justify="">
            <Link to={RoutersPaths.ADMIN} className={classes.link}>
              admin
            </Link>
            <Link to={RoutersPaths.MAIN} className={classes.link}>
              home
            </Link>
            <Link to={RoutersPaths.AUTH} className={classes.link}>
              Auth
            </Link>
          </Flex>
          <InputLanguage />
          <SwitchTheme />
        </Group>
      </header>
    </Box>
  );
};
