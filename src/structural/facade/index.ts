// Classes do subsistemas
class Subsystem1 {
  someMethod(): void {
    console.log('Some method.');
  }
}

class Subsystem2 {
  someOtherMethod(): void {
    console.log('Some other method.');
  }
}
// Classe facade
class Facade {
  private readonly subsystem1: Subsystem1;
  private readonly subsystem2: Subsystem2;

  constructor(subsystem1: Subsystem1, subsystem2: Subsystem2) {
    this.subsystem1 = subsystem1;
    this.subsystem2 = subsystem2;
  }

  public someMethod() {
    return this.subsystem1.someMethod();
  }

  someOtherMethod() {
    return this.subsystem2.someOtherMethod();
  }
}

// Client
const facade = new Facade();
facade.someMethod();
facade.someOtherMethod();
