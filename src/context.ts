import { createContext, useContext } from 'react';
import { Client } from './api/Client';

export interface AppContextValue {
  readonly client: Client;
}

export const AppContext = createContext<AppContextValue | null>(null);

export function useClient(): Client {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('No context found');
  }

  return context.client;
}
