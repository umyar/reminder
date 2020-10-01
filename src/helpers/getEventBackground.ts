import { EventBackground, GREEN, YELLOW, RED, WHITE } from '../api/schemas/Events/Event';
import { NORMAL_TIME_BEFORE_THE_EVENT, WARNING_TIME_BEFORE_THE_EVENT } from '../constants';

export const getEventBackground = (secondsBeforeTheEvent: number): EventBackground => {
  const minutesBeforeTheEvent = Math.ceil(secondsBeforeTheEvent / 60);

  if (minutesBeforeTheEvent > NORMAL_TIME_BEFORE_THE_EVENT) {
    return GREEN;
  } else if (
    minutesBeforeTheEvent <= NORMAL_TIME_BEFORE_THE_EVENT &&
    minutesBeforeTheEvent > WARNING_TIME_BEFORE_THE_EVENT
  ) {
    return YELLOW;
  } else if (minutesBeforeTheEvent <= WARNING_TIME_BEFORE_THE_EVENT && minutesBeforeTheEvent > 0) {
    return RED;
  } else {
    return WHITE;
  }
};
