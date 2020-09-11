import React, { useState } from 'react';
import { Event } from '../../api/schemas/Events/Event';
import { EventItem } from './EventItem';

export const EventList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  return (
    <div>
      {events.length > 0 && events.map(event => <EventItem key={event.id} event={event} />)}
    </div>
  );
};
