import { CarFactory } from './factories/car-factory';
import { randomCarAlgorithm } from './main/random-vehicle';
import { randomNumbers } from './utils/random-numbers';

const carFactory = new CarFactory();
const customerNames = ['Camila', 'Bia', 'Carla', 'Maísa'];

for (let i = 0; i < 6; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  const newCar = carFactory.pickUp(name, `new car - ${randomNumbers(100)}`);
  newCar.stop();
  console.log('-'.repeat(40));
}
