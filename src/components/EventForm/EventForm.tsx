import React from 'react';
import { EventBody } from '../../api/schemas/Events/Event';

interface Props extends EventBody {
  submitForm: () => void;
  onChangeDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const EventForm: React.FC<Props> = ({
  submitForm,
  title,
  onChangeTitle,
  date,
  onChangeDate,
  icon,
}) => {
  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" onChange={onChangeTitle} value={title} />
      <input type="text" onChange={onChangeDate} value={date} />
      <input type="submit" />
    </form>
  );
};
