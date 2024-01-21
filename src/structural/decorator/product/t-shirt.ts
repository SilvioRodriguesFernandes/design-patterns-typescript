import { ProductProtocol } from './product-protocol';

export class Tshirt implements ProductProtocol {
  private name = 'Camiseta';
  private price = 50;

  getPrice(): number {
    return this.price;
  }

  getName(): string {
    return this.name;
  }
}
