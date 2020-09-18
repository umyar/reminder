import React from 'react';
import { Event } from '../../api/schemas/Events/Event';
import { EventItem } from './EventItem';

interface Props {
  events: Event[];
  editEvent: () => void;
  deleteEvent: (id: string) => void;
}

export const EventList: React.FC<Props> = ({ events, editEvent, deleteEvent }) => {
  if (events.length === 0) {
    return <div>У Вас пока ничего не запланировано, поэтому скорее добавьте новое событие!</div>;
  }

  return (
    <ul>
      {events.length > 0 &&
        events.map(event => (
          <EventItem key={event.id} event={event} editEvent={editEvent} deleteEvent={deleteEvent} />
        ))}
    </ul>
  );
};
