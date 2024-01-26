import { DeliveryFlyweight } from './delivery-flyweight';
import { DeliveryLocationData } from './delivery-types';

export class DeliveryLocation implements DeliveryFlyweight {
  constructor(private readonly intrinsicState: DeliveryLocationData) {}

  delivery(name: string, number: string): void {
    console.log(`Entrega para ${name}.`);
    console.log(
      `Em:${this.intrinsicState.street} - ${this.intrinsicState.city} `,
    );
    console.log(`Número: ${number}`);
    console.log('='.repeat(30));
  }
}
