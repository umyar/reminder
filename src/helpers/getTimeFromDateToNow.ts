import { formatDistanceToNow, addSeconds } from 'date-fns';
import { ru } from 'date-fns/locale';
import { TIMER_TRIGGER } from '../constants';

export const getRemainingTime = (secondsBeforeTheEvent: number): string => {
  if (secondsBeforeTheEvent <= 0) {
    return '';
  } else if (secondsBeforeTheEvent <= TIMER_TRIGGER) {
    const minutes = Math.floor(secondsBeforeTheEvent / 60);
    const seconds = secondsBeforeTheEvent % 60;

    return `${minutes} минут ${seconds} секунд`;
  } else {
    const eventTime = addSeconds(new Date(), secondsBeforeTheEvent);

    return formatDistanceToNow(eventTime, { locale: ru });
  }
};
