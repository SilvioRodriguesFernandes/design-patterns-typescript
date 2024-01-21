interface IProduct {
  name: string;
  price: number;
}

class Product implements IProduct {
  constructor(
    public name: string,
    public price: number,
  ) {}
}

class Decorator {
  constructor(protected decorated: IProduct) {}

  getPrice(): number {
    return this.decorated.price + 10;
  }
}

const product = new Product('Clock', 50);
const decoratedProduct = new Decorator(product);

console.log(decoratedProduct.getPrice());
