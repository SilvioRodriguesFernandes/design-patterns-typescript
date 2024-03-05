interface Iterator<T> {
  hasNext(): boolean;
  next(): T;
}

interface Aggregate<T> {
  createIterator(): Iterator<T>;
}

class ConcreteIterator<T> implements Iterator<T> {
  private _collection: T[];
  private _currentIndex: number;

  constructor(collection: T[]) {
    this._collection = collection;
    this._currentIndex = 0;
  }

  hasNext(): boolean {
    return this._currentIndex < this._collection.length;
  }

  next(): T {
    return this._collection[this._currentIndex++];
  }
}

class ConcreteAggregate<T> implements Aggregate<T> {
  private _collection: T[];

  constructor(collection: T[]) {
    this._collection = collection;
  }

  createIterator(): Iterator<T> {
    return new ConcreteIterator(this._collection);
  }
}

const collection = [1, 2, 3, 4, 5, 'Hello', true, 3.14];
const aggregate = new ConcreteAggregate(collection);
const iterator = aggregate.createIterator();

while (iterator.hasNext()) {
  const element = iterator.next();
  console.log(element);
}
