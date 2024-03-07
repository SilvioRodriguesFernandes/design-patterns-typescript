interface Visitor {
  visit(element: IElement): void;
}

interface IElement {
  accept(visitor: Visitor): void;
}

class ConcreteVisitor1 implements Visitor {
  visit(element: IElement): void {
    console.log(`ConcreteVisitor1 visitou ${element.name}`);
  }
}

class ConcreteVisitor2 implements Visitor {
  visit(element: IElement): void {
    console.log(`ConcreteVisitor2 visitou ${element.name}`);
  }
}

class Element1 implements IElement {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  accept(visitor: Visitor): void {
    visitor.visit(this);
  }
}

class Element2 implements IElement {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  accept(visitor: Visitor): void {
    visitor.visit(this);
  }
}

const elemento1 = new Element1('Elemento 1');
const elemento2 = new Element2('Elemento 2');

const visitor1 = new ConcreteVisitor1();
const visitor2 = new ConcreteVisitor2();

elemento1.accept(visitor1);
elemento1.accept(visitor2);

elemento2.accept(visitor1);
elemento2.accept(visitor2);
