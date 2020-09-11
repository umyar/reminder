export interface Event {
  id: string;
  title: string;
  date: string;
  icon?: File;
}

export interface EventBody extends Omit<Event, 'id'> {}
