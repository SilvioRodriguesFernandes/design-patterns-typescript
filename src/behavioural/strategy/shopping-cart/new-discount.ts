import { DiscountStrategy } from './discount-strategy';
import { ECommerceShoppingCart } from './e-commerce-shopping-cart';

export class NewDiscount extends DiscountStrategy {
  protected discount: number = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();

    if (total >= 100 && total < 200) {
      this.discount = 5;
    }

    return total - total * (this.discount / 100);
  }
}
