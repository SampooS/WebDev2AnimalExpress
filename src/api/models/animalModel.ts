import {Express} from 'express';
import promisePool from '../../database/db';
import {PostAnimal, GetAnimal, Animal} from '../../interfaces/Animal';
import {ResultSetHeader} from 'mysql2';

const getAllAnimals = async () => {
  const [rows] = await promisePool.execute<GetAnimal[]>(
    'SELECT * FROM animals'
  );
  if (!rows) {
    throw new Error('No animals found');
  }
};

const getAnimalById = async (id: number) => {
  const [rows] = await promisePool.execute<GetAnimal[]>(
    'SELECT * FROM animals WHERE animal_id = ?',
    [id]
  );
  if (!rows) {
    throw new Error('No animals found');
  }
  return rows[0] as Animal;
};

const addAnimal = async (animal: PostAnimal) => {
  const [headers] = await promisePool.execute<ResultSetHeader>(
    'INSERT INTO animals (animal_name, species_id, image) VALUES (?)',
    [animal.animal_name, animal.species_id, animal.image]
  );
  if (headers.affectedRows === 0) {
    throw new Error('Animal not added');
  }
  console.log('Added new animal: ' + animal.animal_name.toString());
};

export {getAllAnimals, getAnimalById, addAnimal};
