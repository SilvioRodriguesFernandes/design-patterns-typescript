import { DefaultDiscount } from './shopping-cart/default-discount';
import { ECommerceShoppingCart } from './shopping-cart/e-commerce-shopping-cart';

const shoppingCart = new ECommerceShoppingCart();
shoppingCart.discount = new DefaultDiscount();
// shoppingCart.discount = new NewDiscount();
shoppingCart.addProduct({ name: 'bota', price: 50 });
shoppingCart.addProduct({ name: 'tênis', price: 50 });
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
