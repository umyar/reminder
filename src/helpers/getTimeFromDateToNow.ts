import { formatDistance } from 'date-fns';
import { ru } from 'date-fns/locale';

export const getTimeFromDateToNow = (date: string): string => {
  const futureDate = Date.parse(date);

  return formatDistance(new Date(), futureDate, { locale: ru });
};
