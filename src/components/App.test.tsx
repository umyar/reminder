import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { Client } from '../api/Client';
import { App } from './App';
import { AppContext } from '../context';

const client = new Client('', () => {});

const renderApp = () =>
  render(
    <AppContext.Provider value={{ client }}>
      <App />
    </AppContext.Provider>,
  );

test('App renders add event button', () => {
  const { getByText } = renderApp();
  const addEventButton = getByText(/Добавить событие/i);
  expect(addEventButton).toBeInTheDocument();
});

test('Add event button click opens new event form', () => {
  const { getByText } = renderApp();

  const addEventButton = getByText(/Добавить событие/i);

  fireEvent.click(addEventButton);

  const form = document.querySelector('form');
  const submitFormButton = document.querySelector('#submit-form-btn');

  expect(form).toBeInTheDocument();
  expect(submitFormButton).toBeInTheDocument();
  expect(submitFormButton).toHaveTextContent('Добавить');
});

test('Adding event', async () => {
  const { getByText, getByLabelText } = renderApp();
  const EVENT_TITLE = 'Some Event Title';

  const addEventButton = getByText(/Добавить событие/i);

  fireEvent.click(addEventButton);

  const eventNameInput = getByLabelText('Имя события');
  const eventDateInput = getByLabelText('Когда оно наступит');
  const submitFormButton = document.querySelector('#submit-form-btn');

  fireEvent.change(eventNameInput, { target: { value: EVENT_TITLE } });
  fireEvent.change(eventDateInput, { target: { value: '2020-09-09T22:00' } });
  fireEvent.click(submitFormButton!);

  await wait(() => {});


});
