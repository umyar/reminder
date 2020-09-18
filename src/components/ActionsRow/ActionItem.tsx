import React from 'react';
import { Button } from '../../ui/Button/Button';
import { Action } from './Action';

interface Props {
  action: Action;
}

// TODO: Реализовать иконку кнопки

export const ActionItem: React.FC<Props> = ({ action }) => {
  return (
    <Button onClick={action.action} icon={action.icon}>
      {action.label}
    </Button>
  );
};
