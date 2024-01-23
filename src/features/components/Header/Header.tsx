import { Box, Group } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { RoutersPaths } from '../../../shared/types/enums';
import classes from './HeaderMegaMenu.module.css';
import { ColorSwitch } from './ui/components/ColorSwitch/ColorSwitch';
import LanguagePicker from './ui/components/LanguagePicker/LanguagePicker';
import { Navbar } from './ui/components/NavbarLink/NavbarLink';

export const Header = () => {
  const { t } = useTranslation();
  const isAuth = true;

  return (
    <Box pb={5}>
      <header className={classes.header}>
        <Group justify="space-evenly" h="100%">
          {isAuth ? (
            <Group h="100%" gap={0} visibleFrom="sm">
              <Link to={RoutersPaths.ADMIN} className={classes.link}>
                {t('header.admin')}
              </Link>
              <Link to={RoutersPaths.MAIN} className={classes.link}>
                {t('header.home')}
              </Link>
              <Link to="admin/1" className={classes.link}>
                {t('header.profile')}
              </Link>
              <Link to={RoutersPaths.AUTH} className={classes.link}>
                {t('header.Auth')}
              </Link>
            </Group>
          ) : (
            <Link to={RoutersPaths.AUTH} className={classes.link}>
              {t('header.Auth')}
            </Link>
          )}
          <Group align="center" justify="center">
            <ColorSwitch />
            <LanguagePicker type="collapsed" />
            <Navbar />
          </Group>
        </Group>
      </header>
    </Box>
  );
};
