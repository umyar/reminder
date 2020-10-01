import React from 'react';
import { Button } from '../../ui/Button/Button';
import { Action } from './Action';

interface Props {
  action: Action;
}

export const ActionItem: React.FC<Props> = ({ action }) => {
  return (
    <Button onClick={action.action} icon={action.icon}>
      {action.label}
    </Button>
  );
};
