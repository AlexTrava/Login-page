import { notifications } from '@mantine/notifications';

export const errorHandler = (error: unknown, title: string): string => {
  const color = 'red';
  console.log('handler test');

  return notifications.show({
    id: 'error-notifications',
    title: title,
    message: error as string,
    color
  });
};

export default errorHandler;
