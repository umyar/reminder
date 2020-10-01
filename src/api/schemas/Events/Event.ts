export interface Event {
  id: string;
  title: string;
  date: string;
  icon?: File;
}

export interface EventBody extends Omit<Event, 'id'> {}

export const GREEN = 'green';
export const YELLOW = 'yellow';
export const RED = 'red';
export const WHITE = 'white';

export type EventBackground = typeof GREEN | typeof YELLOW | typeof RED | typeof WHITE;
