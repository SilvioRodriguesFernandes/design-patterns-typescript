import { TaxVisitorProtocol } from './tax-visitor-protocol';
import { VisitableProduct } from './visitable-product';

export class Food extends VisitableProduct {
  constructor(protected price: number) {
    super('Food', price);
  }

  getPriceWithTaxes(myVisitor: TaxVisitorProtocol): number {
    return myVisitor.calculateTaxesForFood(this);
  }
}
