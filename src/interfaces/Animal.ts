import {RowDataPacket} from 'mysql2';

// interfaces for Animal
interface Animal {
  animal_id: number;
  animal_name: string;
  species_id: number;
  image: string;
}

type PostAnimal = Omit<Animal, 'animal_id'>;

interface GetAnimal extends RowDataPacket, Animal {}

export {Animal, GetAnimal, PostAnimal};
