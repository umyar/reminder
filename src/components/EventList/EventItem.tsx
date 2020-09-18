import React from 'react';
import { Event as IEvent } from '../../api/schemas/Events/Event';
import { Event } from '../../ui/Event/Event';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getTimeFromDateToNow } from '../../helpers/getTimeFromDateToNow';

interface Props {
  event: IEvent;
  editEvent: (id: string) => void;
  deleteEvent: (id: string) => void;
}

export const EventItem: React.FC<Props> = ({
  event: { id, title, icon },
  editEvent,
  deleteEvent,
}) => {
  // const remainingTime = getTimeFromDateToNow(date);
  const remainingTime = 'некоторое время';

  return (
    <Event
      id={id}
      title={title}
      remainingTime={remainingTime}
      icon={icon}
      onEditClick={editEvent}
      onDeleteClick={deleteEvent}
    />
  );
};
