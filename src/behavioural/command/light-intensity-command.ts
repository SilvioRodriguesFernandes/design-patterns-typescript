import { SmartHouseCommand } from './smart-house-command';
import { SmartHouseLight } from './smart-house-light';

export class LightIntensityCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}

  execute(): void {
    const intensity = this.light.increaseIntensity();
    console.log(`A intensidade de ${this.light.name} é de ${intensity}`);
  }

  undo(): void {
    const intensity = this.light.decreaseIntensity();
    console.log(`A intensidade de ${this.light.name} é de ${intensity}`);
  }
}
