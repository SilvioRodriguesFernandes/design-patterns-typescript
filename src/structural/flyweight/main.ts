import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();

deliveryContext(factory, 'Carla', '40b', ' Av. Princesa Isabel', 'RJ');
deliveryContext(factory, 'Livia', '40b', ' Av. Princesa Isabel', 'RJ');
deliveryContext(factory, 'Larissa', '10b', ' Av. Princesa Isabel', 'RJ');
deliveryContext(factory, 'Daiane', '203', ' Rua 15 de Novembro', 'PR');
deliveryContext(factory, 'Anna', '458', ' Rua José de Alencar', 'BH');

console.log('-'.repeat(45));
console.log(factory.getLocations());
