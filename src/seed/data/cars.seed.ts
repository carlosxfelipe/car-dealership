import { v4 as uuidv4 } from 'uuid';
import { Car } from 'src/cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
  {
    id: uuidv4(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    id: uuidv4(),
    brand: 'Honda',
    model: 'Civic',
  },
  {
    id: uuidv4(),
    brand: 'Jeep',
    model: 'Renegade',
  },
];
