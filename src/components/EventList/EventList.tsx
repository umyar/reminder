import React from 'react';
import { Event } from '../../api/schemas/Events/Event';
import { EventItem } from './EventItem';

interface Props {
  events: Event[];
  editEvent: (id: string) => void;
  deleteEvent: (id: string) => void;
}

// TODO
// @ts-ignore
const eventSorter = (a: Event, b: Event): number => {
  const aTimestamp = Date.parse(a.date);
  const bTimestamp = Date.parse(b.date);

  if (aTimestamp < bTimestamp) {
    return -1;
  }

  if (aTimestamp > bTimestamp) {
    return 1;
  }

  if (aTimestamp === bTimestamp) {
    return 0;
  }
};

const prepareEventsForView = (events: Event[]): Event[] => {
  const sortedEvents = events.sort(eventSorter);

  const actualEvents = sortedEvents.filter(event => {
    const eventTimestamp = Date.parse(event.date);

    return eventTimestamp > Date.now();
  });

  // сначала актуальные события, потом завершенные
  return [...actualEvents, ...sortedEvents.slice(0, sortedEvents.length - actualEvents.length)];
};

export const EventList: React.FC<Props> = ({ events, editEvent, deleteEvent }) => {
  if (events.length === 0) {
    return <div>У Вас пока ничего не запланировано, поэтому скорее добавьте новое событие!</div>;
  }

  // TODO: добавить обновление списка после авершения одного из событий
  return (
    <ul className="collection">
      {events.length > 0 &&
        prepareEventsForView(events).map(event => (
          <EventItem key={event.id} event={event} editEvent={editEvent} deleteEvent={deleteEvent} />
        ))}
    </ul>
  );
};
