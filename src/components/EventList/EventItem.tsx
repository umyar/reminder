import React from 'react';
import { Event } from '../../api/schemas/Events/Event';

interface Props {
  event: Event;
}

export const EventItem: React.FC<Props> = ({ event: { title, date } }) => {
  return (
    <div>
      {title} - {date}
    </div>
  );
};
