import '@mantine/core/styles.css';

import { rem, Switch, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import type { FC } from 'react';
import { useState } from 'react';

const SwitchTheme: FC = () => {
  const [checked, setChecked] = useState(false);
  const { setColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

  return (
    <Switch
      onLabel={sunIcon}
      offLabel={moonIcon}
      size="lg"
      defaultChecked
      mr={20}
      onChange={() => {
        if (checked) {
          setColorScheme('dark');
          setChecked(!checked);
        } else {
          setColorScheme('light');
          setChecked(!checked);
        }
      }}
    />
  );
};

export default SwitchTheme;
