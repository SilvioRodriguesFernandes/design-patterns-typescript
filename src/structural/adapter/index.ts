interface JoystickProtocol {
  pressButton(button: string): void;
}

interface SensorProtocol {
  registerEvent(event: string): void;
}

class JoystickXbox implements JoystickProtocol {
  pressButton(button: string): void {
    console.log(`Button ${button} held down.`);
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class SensorPlaystation implements SensorProtocol {
  registerEvent(event: string): void {
    console.log(`Event ${event} registered`);
  }
}

class AdapterJoystickPlaystation implements SensorProtocol {
  private joystick: JoystickProtocol;

  constructor(joystick: JoystickProtocol) {
    this.joystick = joystick;
  }

  registerEvent(event: string): void {
    this.joystick.pressButton(event);
  }
}

const joystickXbox = new JoystickXbox();
const sensorPlaystation: SensorProtocol = new AdapterJoystickPlaystation(
  joystickXbox,
);

sensorPlaystation.registerEvent('A');
