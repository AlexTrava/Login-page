import { Box, Group } from '@mantine/core';
import { Link } from 'react-router-dom';

import { RoutersPaths } from '../../../shared/types/enums';
import classes from './HeaderMegaMenu.module.css';
export const Header = () => {
  return (
    <Box pb={5}>
      <header className={classes.header}>
        <Group display="flex" justify="flex-start">
          <Link to={RoutersPaths.ADMIN} className={classes.link}>
            admin
          </Link>
          <Link to={RoutersPaths.MAIN} className={classes.link}>
            home
          </Link>
          <Link to={RoutersPaths.AUTH} className={classes.link}>
            Auth
          </Link>
        </Group>
      </header>
    </Box>
  );
};
