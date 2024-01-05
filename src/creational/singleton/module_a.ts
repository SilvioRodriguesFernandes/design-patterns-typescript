import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Camila', age: 22 });
myDatabaseClassic.add({ name: 'Lais', age: 20 });
myDatabaseClassic.add({ name: 'Lorena', age: 26 });

export { myDatabaseClassic };
