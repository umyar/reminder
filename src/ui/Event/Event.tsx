import React from 'react';
import { EventIcon } from './EventIcon';

interface Props {
  id: string;
  title: string;
  remainingTime: string;
  icon: any; // todo
  onEditClick: (id: string) => void;
  onDeleteClick: (id: string) => void;
}

export const Event: React.FC<Props> = ({ id, title, remainingTime, icon, onDeleteClick }) => {
  const handleDeleteEvent = (): void => {
    onDeleteClick(id);
  };

  return (
    <li className="event-item">
      <span>{title}</span>
      <span>событие наступит через {remainingTime}</span>
      <EventIcon src={icon} />
      <button onClick={handleDeleteEvent}>X</button>
    </li>
  );
};
