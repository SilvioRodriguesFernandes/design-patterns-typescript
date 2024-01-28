interface PaymentStrategy {
  pay(amount: number): Promise<void>;
}

class CreditCardStrategy implements PaymentStrategy {
  constructor(
    private readonly cardNumber: string,
    private readonly expirationDate: string,
    private readonly securityCode: string,
  ) {}

  pay(amount: number): Promise<void> {
    return new Promise((resolve, reject) => {
      if (amount > 100) {
        reject('O valor do pagamento é maior que 100 reais.');
      } else {
        resolve();
      }
    });
  }
}

class BankTransferStrategy implements PaymentStrategy {
  constructor(
    private readonly accountNumber: string,
    private readonly bankCode: string,
  ) {}

  pay(amount: number): Promise<void> {
    return new Promise((resolve, reject) => {
      if (amount > 10000) {
        reject('O valor do pagamento é maior que 10.000 reais.');
      } else {
        resolve();
      }
    });
  }
}

class PaymentSystem {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _strategy: any;

  constructor() {
    this._strategy = null;
  }

  setStrategy(strategy: PaymentStrategy) {
    this._strategy = strategy;
  }

  pay(amount: number) {
    return this._strategy.pay(amount);
  }
}

const paymentSystem = new PaymentSystem();

const creditCardStrategy = new CreditCardStrategy(
  '1522 4568 4823 0457',
  '01/26',
  '458',
);

paymentSystem.setStrategy(creditCardStrategy);
paymentSystem.pay(100);
console.log(paymentSystem);

const bankTransferStrategy = new BankTransferStrategy('45816-5', '12');

paymentSystem.setStrategy(bankTransferStrategy);
paymentSystem.pay(10000);
console.log(paymentSystem);
