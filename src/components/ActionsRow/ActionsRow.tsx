import React from 'react';
import { Action } from './Action';
import { ActionItem } from './ActionItem';

interface Props {
  actions: Action[];
}

export const ActionsRow: React.FC<Props> = ({ actions }) => {
  return (
    <div>
      {actions.map(action => (
        <ActionItem key={action.label} action={action} />
      ))}
    </div>
  );
};
