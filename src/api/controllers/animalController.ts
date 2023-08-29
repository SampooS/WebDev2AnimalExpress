import {Request, Response, NextFunction} from 'express';
import {addAnimal, getAllAnimals, getAnimalById} from '../models/animalModel';
import {PostAnimal} from '../../interfaces/Animal';
import MessageResponse from '../../interfaces/MessageResponse';

const animalListGet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const animals = await getAllAnimals();
    res.json(animals);
  } catch (error) {
    next(error);
  }
};

const animalGet = async (
  req: Request<{id: number}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const animal = await getAnimalById(req.params.id);
    res.json(animal);
  } catch (error) {
    next(error);
  }
};

const animalPost = async (
  req: Request<{}, {}, PostAnimal>,
  res: Response,
  next: NextFunction
) => {
  try {
    const animalId = await addAnimal(req.body);
    const message: MessageResponse = {
      message: `Animal ${animalId} added`,
    };
    res.json(message);
  } catch (error) {
    next(error);
  }
};
export {animalListGet, animalGet, animalPost};
