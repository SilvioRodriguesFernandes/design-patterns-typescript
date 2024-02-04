import { ShoppingOrder } from './shopping-order/shopping-order';

const order = new ShoppingOrder(); // Pendente
order.approvePayment(); // Aprovado
order.waitPayment(); // Pendente
order.shipOrder();
order.rejectPayment();
order.approvePayment();
order.waitPayment();
order.approvePayment();
order.shipOrder();
