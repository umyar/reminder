import React from 'react';
import ReactDOM from 'react-dom';
import { Client } from './api/Client';
import { App } from './components/App';
import { AppContext, AppContextValue } from './context';

import './index.css';

const apiHost = 'http://localhost:9000';

const client = new Client(apiHost, () => alert('Произошла ошибка сервера'));

const context: AppContextValue = {
  client,
};

ReactDOM.render(
  <React.StrictMode>
    <AppContext.Provider value={context}>
      <App />
    </AppContext.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
