import { EventBody, Event } from './schemas/Events/Event';

export class Client {
  private readonly apiHost: string;

  private readonly onServerError: () => void;

  constructor(apiHost: string, onServerError: () => void) {
    this.apiHost = apiHost;
    this.onServerError = onServerError;
  }

  getEvents(onSuccess: (events: Event[]) => void): void {
    this.get('/events').then(newResponseHandler().on(ok(onSuccess)).build());
  }

  getEventById(id: string, onSuccess: (event: Event) => void, onNotFound: () => void): void {
    this.get(`/events/${id}`).then(
      newResponseHandler().on(ok(onSuccess)).on(notFound(onNotFound)).build(),
    );
  }

  newEvent(reqBody: EventBody, onSuccess: (id: string) => void): void {
    this.post('/events', reqBody).then(newResponseHandler().on(onCreated(onSuccess)).build());
  }

  editEvent(id: string, reqBody: EventBody, onSuccess: () => void): void {
    this.put(`/events/${id}`, reqBody).then(newResponseHandler().on(noContent(onSuccess)).build());
  }

  deleteEvent(id: string, onSuccess: () => void, onNotFound: () => void): void {
    this.delete(`/events/${id}`).then(
      newResponseHandler().on(noContent(onSuccess)).on(notFound(onNotFound)).build(),
    );
  }

  private get(relativeUrl: string): Promise<Response> {
    return this.fetch(relativeUrl, {
      method: 'GET',
    });
  }

  private post(relativeUrl: string, body?: any): Promise<Response> {
    return this.fetch(relativeUrl, {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  private put(relativeUrl: string, body: any): Promise<Response> {
    return this.fetch(relativeUrl, {
      method: 'PUT',
      body: JSON.stringify(body),
    });
  }

  private delete(relativeUrl: string): Promise<Response> {
    return this.fetch(relativeUrl, {
      method: 'DELETE',
    });
  }

  private fetch(relativeUrl: string, fetchParams: Object): Promise<Response> {
    const headers: { [key: string]: string } = {
      'Accept-Language': 'ru',
      'Content-type': 'application/json',
    };

    return fetch(this.apiHost + relativeUrl, {
      headers,
      ...fetchParams,
    }).then(response => {
      if (response.status === 500) {
        this.onServerError();
      }

      return response;
    });
  }
}

function newResponseHandler(): responseHandlerBuilder {
  return new responseHandlerBuilder();
}

type ResponseHandler = (response: Response) => Promise<boolean>;

class responseHandlerBuilder {
  private handlers: ResponseHandler[] = [];

  on(handler: ResponseHandler): responseHandlerBuilder {
    this.handlers.push(handler);

    return this;
  }

  build(): (response: Response) => void {
    return async response => {
      for (let i = 0; i < this.handlers.length; i++) {
        if (await this.handlers[i](response)) {
          return;
        }
      }

      throw new Error();
    };
  }
}

function ok<T>(callback: (data: T) => void): ResponseHandler {
  return async response => {
    if (response.status !== 200) {
      return false;
    }

    callback(await response.json());

    return true;
  };
}

function onCreated(callback: (id: string) => void): ResponseHandler {
  return async response => {
    if (response.status !== 201) {
      return false;
    }

    callback(await response.json());

    return true;
  };
}

function noContent(callback: () => void): ResponseHandler {
  return async response => {
    if (response.status !== 204) {
      return false;
    }

    callback();

    return true;
  };
}

function notFound(callback: () => void): ResponseHandler {
  return async response => {
    if (response.status !== 404) {
      return false;
    }

    callback();

    return true;
  };
}
