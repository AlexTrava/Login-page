import type { ConfirmationResult } from 'firebase/auth';

import type { Status } from './enums';

export type LanguagePickerProps = {
  label: string;
  image: string;
};
export type StateAuth = {
  status: Status;
  captchaFetch: ConfirmationResult;
};

export type User = {
  phoneNumber: string;
  verificationId: string;
};
