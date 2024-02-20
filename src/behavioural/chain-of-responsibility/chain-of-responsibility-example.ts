interface Handler {
  handle(request: string): void | null;
  setNext(next: Handler): void;
}

class ConcreteHandler1 implements Handler {
  private next: Handler | null = null;

  handle(request: string): void | null {
    if (request === 'Tipo 1') {
      console.log('Handler 1 lidando com a solicitação.');
      return null;
    }
    return this.next?.handle(request);
  }

  setNext(next: Handler): void {
    this.next = next;
  }
}

class ConcreteHandler2 implements Handler {
  private next: Handler | null = null;

  handle(request: string): void | null {
    if (request === 'Tipo 2') {
      console.log('Handler 2 lidando com a solicitação.');
      return null;
    }
    return this.next?.handle(request);
  }

  setNext(next: Handler): void {
    this.next = next;
  }
}

class Client {
  private chain: Handler;

  constructor() {
    const handler1 = new ConcreteHandler1();
    const handler2 = new ConcreteHandler2();

    handler1.setNext(handler2);

    this.chain = handler1;
  }

  makeRequest(request: string): void {
    this.chain.handle(request);
  }
}

const client = new Client();

client.makeRequest('Tipo 1');
client.makeRequest('Tipo 2');
client.makeRequest('Tipo 3');
