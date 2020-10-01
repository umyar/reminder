import { ReactElement } from 'react';

export interface Action {
  action: () => void;
  label?: string;
  icon?: ReactElement;
}
