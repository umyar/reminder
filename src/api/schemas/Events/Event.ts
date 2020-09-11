export interface Event {
  id: string;
  event: string;
  time: string;
  icon?: File;
}

export interface EventBody extends Omit<Event, 'id'> {}
