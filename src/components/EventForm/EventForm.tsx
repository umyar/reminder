import React from 'react';
import { Button } from '../../ui/Button/Button';
import { EventBody } from '../../api/schemas/Events/Event';

import './form.css';

interface Props extends EventBody {
  closeForm: () => void;
  submitForm: () => void;
  onChangeDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitButtonText: string;
}

export const EventForm: React.FC<Props> = ({
  closeForm,
  submitForm,
  title,
  onChangeTitle,
  date,
  onChangeDate,
  icon,
  submitButtonText,
}) => {
  const onFormSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    if (title.trim().length > 1) {
      submitForm();
    }
  };

  // TODO: Перенести ui в соответсвующее место
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card ">
          <div className="card-content white-text">
            <form onSubmit={onFormSubmit}>
              <div className="input-field">
                <label htmlFor="event-name" className="active">
                  Имя события
                </label>
                <input
                  id="event-name"
                  type="text"
                  onChange={onChangeTitle}
                  value={title}
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="event-date" className="active">
                  Когда оно наступит
                </label>
                <input
                  id="event-date"
                  type="datetime-local"
                  placeholder="Когда событие наступит"
                  onChange={onChangeDate}
                  value={date}
                  required
                />
              </div>
              <span>{icon}</span>
              <div className="form-actions">
                <Button variant="transparent" danger onClick={closeForm}>
                  Отмена
                </Button>
                <Button id="submit-form-btn" type="submit">
                  {submitButtonText}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
