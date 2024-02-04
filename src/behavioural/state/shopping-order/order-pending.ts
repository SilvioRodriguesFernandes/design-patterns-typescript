import { ShoppingOrderState } from '../shopping-order-state';
import { OrderApproved } from './order-approved';
import { OrderRejected } from './order-rejected';
import { ShoppingOrder } from './shopping-order';

export class OrderPending implements ShoppingOrderState {
  private name: string = 'OrderPending';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    this.order.setState(new OrderApproved(this.order));
  }

  rejectPayment(): void {
    this.order.setState(new OrderRejected(this.order));
  }

  waitPayment(): void {
    console.log(`O pedido já está no estado pagamento pendente.`);
  }

  shipOrder(): void {
    console.log(`O pedido não pode ser enviado, o pagamento está pendente.`);
  }
}
