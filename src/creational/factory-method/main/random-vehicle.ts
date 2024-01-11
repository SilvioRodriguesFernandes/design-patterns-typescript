import { BicycleFactory } from '../factories/bicycle-factory';
import { CarFactory } from '../factories/car-factory';
import { randomNumbers } from '../utils/random-numbers';
import { Vehicle } from '../vehicle/vehicle';

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();
  const car1 = carFactory.getVehicle('fusca');
  const car2 = carFactory.getVehicle('gol');
  const car3 = carFactory.getVehicle('passat');
  const bicycle = bicycleFactory.getVehicle('Bicycle');
  const cars = [car1, car2, car3, bicycle];
  return cars[randomNumbers(cars.length)];
}
