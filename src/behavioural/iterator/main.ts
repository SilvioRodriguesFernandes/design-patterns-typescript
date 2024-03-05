import { MyDataStructure } from './my-data-structure';
import { MyReverseIterator } from './my-reverse-iterator';

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F');

const [a, b] = dataStructure;
console.log('Roubados:', a, b);
console.log('-'.repeat(15));

for (const data of dataStructure) {
  console.log(data);
}

console.log('-'.repeat(15));
dataStructure.changeIterator(new MyReverseIterator(dataStructure));

for (const data of dataStructure) {
  console.log(data);
}
