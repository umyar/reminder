import React, { useEffect, useState } from 'react';
import { Event as IEvent } from '../../api/schemas/Events/Event';
import { getEventBackground } from '../../helpers/getEventBackground';
import { getRemainingSecondsToGivenDate } from '../../helpers/getEventItemInitialState';
import { Event } from '../../ui/Event/Event';
import { getRemainingTime } from '../../helpers/getTimeFromDateToNow';

interface Props {
  event: IEvent;
  editEvent: (id: string) => void;
  deleteEvent: (id: string) => void;
}

export const EventItem: React.FC<Props> = ({
  event: { id, title, date, icon },
  editEvent,
  deleteEvent,
}) => {
  const [seconds, setSeconds] = useState<number>(getRemainingSecondsToGivenDate(date));
  // TODO: сбрасывать состояние после успешного редактирования события

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevValue => {
        if (prevValue <= 0) {
          return 0;
        }

        return prevValue - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  });

  const eventBackground = getEventBackground(seconds);
  const remainingTime = getRemainingTime(seconds);
  const isEventHappeningNow = seconds <= 3 && seconds > 0;

  return (
    <Event
      id={id}
      title={title}
      isHappeningNow={isEventHappeningNow}
      background={eventBackground}
      remainingTime={remainingTime}
      icon={icon}
      onEditClick={editEvent}
      onDeleteClick={deleteEvent}
    />
  );
};
