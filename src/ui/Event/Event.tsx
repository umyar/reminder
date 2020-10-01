import React from 'react';
import { EventBackground, GREEN, RED, YELLOW } from '../../api/schemas/Events/Event';
import { Button } from '../Button/Button';
import { DeleteIcon } from '../icons/DeleteIcon';
import { EditIcon } from '../icons/EditIcon';
import { EventIcon } from './EventIcon';

import './Event.css';

const getBackgroundClassName = (eventBackground: EventBackground): string => {
  switch (eventBackground) {
    case GREEN:
      return 'green lighten-4';
    case YELLOW:
      return 'yellow lighten-4';
    case RED:
      return 'red lighten-4';
    default:
      return '';
  }
};

interface Props {
  id: string;
  title: string;
  remainingTime: string;
  isHappeningNow: boolean;
  background: EventBackground;
  icon: any; // todo
  onEditClick: (id: string) => void;
  onDeleteClick: (id: string) => void;
}

export const Event: React.FC<Props> = ({
  id,
  title,
  remainingTime,
  isHappeningNow,
  background,
  icon,
  onDeleteClick,
  onEditClick,
}) => {
  const handleDeleteEvent = (): void => {
    onDeleteClick(id);
  };

  const handleEditEvent = (): void => {
    onEditClick(id);
  };

  const timeBeforeEvent =
    remainingTime.length === 0 ? (
      <>событие завершено</>
    ) : (
      <>
        до наступления события осталось <span style={{ color: 'black' }}>{remainingTime}</span>
      </>
    );

  return (
    <li
      className={`collection-item avatar ${getBackgroundClassName(background)} ${
        isHappeningNow && 'alarm'
      }`}
    >
      <EventIcon src={icon} />
      <span className="title">{title}</span>
      <br />
      <div style={{ color: 'grey' }}>{timeBeforeEvent}</div>
      <div className="secondary-content">
        <Button
          icon={<DeleteIcon />}
          variant="transparent"
          danger
          onClick={handleDeleteEvent}
          title="Удалить событие"
        />
        <Button
          icon={<EditIcon />}
          variant="transparent"
          onClick={handleEditEvent}
          title="Редактировать событие"
        />
      </div>
    </li>
  );
};
