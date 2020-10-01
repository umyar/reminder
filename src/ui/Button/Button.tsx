import React from 'react';

import './Button.css';

// TODO: Привести в порядок типы

interface Props {
  id?: string;
  onClick?: () => void;
  variant?: 'primary' | 'transparent';
  danger?: boolean;
  disabled?: boolean;
  icon?: any;
  type?: 'button' | 'submit' | 'reset' | undefined;
  title?: string;
}

// TODO: Проброс остальных пропсов

export const Button: React.FC<Props> = ({
  children,
  onClick,
  id,
  type,
  icon,
  disabled,
  variant,
  danger,
  title,
}) => {
  const variantColorClasses = variant === 'transparent' ? 'waves-teal btn-flat' : 'blue accent-3';
  const dangerColorClass = danger ? 'danger' : '';

  return (
    <button
      id={id}
      title={title}
      type={type || 'button'}
      onClick={onClick}
      disabled={disabled}
      className={`waves-effect btn ${variantColorClasses} ${dangerColorClass}`}
    >
      {icon}
      {children && <span className="button-text">{children}</span>}
    </button>
  );
};
