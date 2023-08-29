import {Request, Response, NextFunction} from 'express';
import {
  addSpecies,
  getAllSpecies,
  getSpeciesById,
} from '../models/speciesModel';
import {PostSpecies} from '../../interfaces/Species';
import MessageResponse from '../../interfaces/MessageResponse';

const speciesListGet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const species = await getAllSpecies();
    res.json(species);
  } catch (error) {
    next(error);
  }
};

const speciesGet = async (
  req: Request<{id: number}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const species = await getSpeciesById(req.params.id);
    res.json(species);
  } catch (error) {
    next(error);
  }
};

const speciesPost = async (
  req: Request<{}, {}, PostSpecies>,
  res: Response,
  next: NextFunction
) => {
  try {
    const speciesId = await addSpecies(req.body);
    const message: MessageResponse = {
      message: `Species ${speciesId} added`,
    };
    res.json(message);
  } catch (error) {
    next(error);
  }
};

export {speciesListGet, speciesGet, speciesPost};
