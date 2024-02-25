interface Observable {
  subscribe(...observers: Observer[]): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

interface Observer {
  update(...args: unknown[]): void;
}

// Concrete Observable
class InputObservable implements Observable {
  private observers: Observer[] = [];

  constructor(public element: HTMLInputElement) {}

  subscribe(...observers: Observer[]): void {
    observers.forEach((observer) => {
      if (!this.observers.includes(observer)) {
        this.observers.push(observer);
      }
    });
  }

  unsubscribe(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index >= 0) {
      this.observers.splice(index, 1);
    }
  }

  notify(): void {
    this.observers.forEach((observer) => observer.update(this));
  }
}

// Concrete Observer
class ParagraphObserver implements Observer {
  constructor(public element: HTMLParagraphElement) {}

  update(observable: Observable): void {
    if (observable instanceof InputObservable) {
      this.element.innerText = observable.element.value;
    }
  }
}

// Concrete Observer
class DivObserver implements Observer {
  constructor(public element: HTMLDivElement) {}

  update(observable: Observable): void {
    if (observable instanceof InputObservable) {
      this.element.innerText = observable.element.value;
    }
  }
}

// Client code
function makeInput(): HTMLInputElement {
  const input = document.createElement('input');
  document.body.appendChild(input);
  return input;
}

function makeParagraph(): HTMLParagraphElement {
  const paragraph = document.createElement('p');
  document.body.appendChild(paragraph);
  paragraph.innerText = `Texto Inicial (Hardcoded)`;
  return paragraph;
}

function makeDiv(): HTMLDivElement {
  const div = document.createElement('div');
  document.body.appendChild(div);
  div.innerText = `Texto da Div`;
  return div;
}

const input = new InputObservable(makeInput());
const paragraph1 = new ParagraphObserver(makeParagraph());
const paragraph2 = new ParagraphObserver(makeParagraph());
const div1 = new DivObserver(makeDiv());
input.subscribe(paragraph1, paragraph2, div1);

input.element.addEventListener('keyup', () => {
  input.notify();
});

input.unsubscribe(paragraph2);
