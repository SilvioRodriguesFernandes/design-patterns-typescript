import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Paloma', age: 21 });
myDatabaseClassic.add({ name: 'Gisele', age: 19 });
myDatabaseClassic.add({ name: 'Diana', age: 24 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);
