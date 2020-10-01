import React from 'react';
import { Action } from './Action';
import { ActionItem } from './ActionItem';

import './actions.css';

interface Props {
  actions: Action[];
}

export const ActionsRow: React.FC<Props> = ({ actions }) => {
  return (
    <div className="actions-row">
      {actions.map(action => (
        <ActionItem key={action.label} action={action} />
      ))}
    </div>
  );
};
