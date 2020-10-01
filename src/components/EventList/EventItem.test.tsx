import React from 'react';
import { render } from '@testing-library/react';
import { EventItem } from './EventItem';
import { Event as IEvent } from '../../api/schemas/Events/Event';
import { v4 as uuidv4 } from 'uuid';

const TITLE = 'Random Title';

const mockedEvent: IEvent = {
  id: uuidv4(),
  title: TITLE,
  date: new Date().toDateString(),
};

const renderEventItem = () =>
  render(<EventItem event={mockedEvent} editEvent={() => {}} deleteEvent={() => {}} />);

test('Event Item renders correctly', () => {
  const { getByText } = renderEventItem();
  const addEventButton = getByText(TITLE);
  expect(addEventButton).toBeInTheDocument();
});

// TODO: проверки фоновых цветов событий
// TODO: проверки таймеров
