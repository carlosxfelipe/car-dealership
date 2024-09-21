import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
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

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) {
      throw new NotFoundException(`Car with id '${id}' not found`);
    }

    return car;
  }

  // create(CreateCarDto: CreateCarDto) {
  //   const car: Car = {
  //     id: uuidv4(),
  //     model: CreateCarDto.model,
  //     brand: CreateCarDto.brand,
  //   };

  //   return car;
  // }

  // create({ model, brand }: CreateCarDto) {
  //   const car: Car = {
  //     id: uuidv4(),
  //     model,
  //     brand,
  //   };

  //   return car;
  // }

  create(CreateCarDto: CreateCarDto) {
    const car: Car = {
      id: uuidv4(),
      ...CreateCarDto,
    };

    this.cars.push(car);

    return car;
  }
}
