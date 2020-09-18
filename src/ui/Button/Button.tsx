import React, { ReactElement } from 'react';
import './Button.css';

interface Props {
  onClick: () => void;
  disabled?: boolean;
  icon?: ReactElement;
}

export const Button: React.FC<Props> = ({ children, onClick, icon, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {icon}
      <span className="button-text">{children}</span>
    </button>
  );
};
