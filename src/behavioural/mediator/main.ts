import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';

const mediator = new Mediator();

const seller1 = new Seller();
seller1.addProduct({ id: '1', name: 'Camisa', price: 50.99 });
seller1.addProduct({ id: '2', name: 'Tênis', price: 250.99 });

const seller2 = new Seller();
seller2.addProduct({ id: '3', name: 'Boné', price: 80.99 });
seller2.addProduct({ id: '4', name: 'Calça', price: 120.99 });

mediator.addSeller(seller1, seller2);

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy('2');
buyer.buy('3');
buyer.viewProducts();
