import {RowDataPacket} from 'mysql2';

interface Species {
  species_id: number;
  species_name: string;
  category_id: number;
  image: string;
}

type PostSpecies = Omit<Species, 'category_id'>;

interface GetSpecies extends RowDataPacket, Species {}

export {Species, GetSpecies, PostSpecies};
