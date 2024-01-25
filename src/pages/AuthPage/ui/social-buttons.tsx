import type { ButtonProps } from '@mantine/core';
import { Button } from '@mantine/core';
import { IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react';
import type { ComponentPropsWithoutRef } from 'react';

export function GoogleButton(props: ButtonProps & ComponentPropsWithoutRef<'button'>) {
  return (
    <Button leftIcon={<IconBrandGoogle size={16} />} variant="default" color="gray" {...props} />
  );
}

export function GitHubButton(props: ButtonProps & ComponentPropsWithoutRef<'button'>) {
  return (
    <Button leftIcon={<IconBrandGithub size={16} />} variant="default" color="gray" {...props} />
  );
}
