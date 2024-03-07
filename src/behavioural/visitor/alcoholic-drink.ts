import { TaxVisitorProtocol } from './tax-visitor-protocol';
import { VisitableProduct } from './visitable-product';

export class AlcoholicDrink extends VisitableProduct {
  constructor(protected price: number) {
    super('AlcoholicDrink', price);
  }

  getPriceWithTaxes(myVisitor: TaxVisitorProtocol): number {
    return myVisitor.calculateTaxesForAlcoholicDrink(this);
  }
}
