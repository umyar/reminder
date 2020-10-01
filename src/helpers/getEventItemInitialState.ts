import { differenceInSeconds, isPast } from 'date-fns';

export const getRemainingSecondsToGivenDate = (date: string): number => {
  const timestamp = Date.parse(date);

  if (isPast(timestamp)) {
    return 0;
  }

  return differenceInSeconds(timestamp, new Date());
};
