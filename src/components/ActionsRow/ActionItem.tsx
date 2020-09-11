import React from 'react';
import { Action } from './Action';

interface Props {
  action: Action;
}

// TODO: Реализовать иконку кнопки

export const ActionItem: React.FC<Props> = ({ action }) => {
  return <button onClick={action.action}>{action.label}</button>;
};
