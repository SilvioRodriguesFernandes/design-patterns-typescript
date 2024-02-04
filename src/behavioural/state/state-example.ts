// State
interface State {
  onClick(): void;
}

// Concrete State
class ActiveState implements State {
  onClick(): void {
    console.log('The button is active!');
  }
}

// Concrete State
class DisableState implements State {
  onClick(): void {
    console.log('The button is disabled!');
  }
}

// Concrete State
class PressedState implements State {
  onClick(): void {
    console.log('The button is pressed!');
  }
}

// Context Class
class Button {
  private state: State;

  constructor(state: State) {
    this.state = state;
  }

  changeState(state: State): void {
    this.state = state;
  }

  onClick(): void {
    this.state.onClick();
  }
}

const button = new Button(new ActiveState());
button.onClick();

button.changeState(new DisableState());
button.onClick();

button.changeState(new PressedState());
button.onClick();
