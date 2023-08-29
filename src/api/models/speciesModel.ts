import {ResultSetHeader} from 'mysql2';
import promisePool from '../../database/db';
import {Species, PostSpecies, GetSpecies} from '../../interfaces/Species';

const getAllSpecies = async () => {
  const [rows] = await promisePool.execute<GetSpecies[]>(
    'SELECT * FROM species'
  );
  if (!rows) {
    throw new Error('No species found');
  }
  return rows as Species[];
};

const getSpeciesById = async (id: number) => {
  const [rows] = await promisePool.execute<GetSpecies[]>(
    'SELECT * FROM species WHERE species_id = ?',
    [id]
  );
  if (!rows) {
    throw new Error('No species found');
  }
  return rows[0] as Species;
};

const addSpecies = async (species: PostSpecies) => {
  const [headers] = await promisePool.execute<ResultSetHeader>(
    'INSERT INTO species (species_name) VALUES (?)',
    [species.species_name]
  );
  if (headers.affectedRows === 0) {
    throw new Error('Species not added');
  }
  console.log('Added new species: ' + species.species_name.toString());
};

export {getAllSpecies, getSpeciesById, addSpecies};
