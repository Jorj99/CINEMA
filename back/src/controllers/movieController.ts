import { Request, Response, NextFunction } from 'express';

import MovieService from '@/services/movieService';

export const createMovie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { roomId, name, timeToStart, timeToEnd, reservedSeatIds, posterUrl } =
      req.body;
    const newMovie = await MovieService.createMovie({
      roomId,
      name,
      posterUrl,
      timeToStart,
      timeToEnd,
      reservedSeatIds,
    });
    res.status(201).json(newMovie);
  } catch (error) {
    next(error);
  }
};

export const updateMovie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { roomId, name, timeToStart, timeToEnd, reservedSeatIds, posterUrl } =
      req.body;
    const updatedMovie = await MovieService.updateMovie(id, {
      roomId,
      name,
      posterUrl,
      timeToStart,
      timeToEnd,
      reservedSeatIds,
    });
    if (!updatedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json(updatedMovie);
  } catch (error) {
    next(error);
  }
};

export const deleteMovie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const deletedMovie = await MovieService.deleteMovie(id);
    if (!deletedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json({ message: 'Movie deleted successfully' });
  } catch (error) {
    next(error);
  }
};

export const addReservedSeat = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { seatNumber } = req.body;
    const updatedMovie = await MovieService.addReservedSeat(id, seatNumber);
    if (!updatedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json(updatedMovie);
  } catch (error) {
    next(error);
  }
};

export const removeReservedSeat = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { seatNumber } = req.body;
    const updatedMovie = await MovieService.removeReservedSeat(id, seatNumber);
    if (!updatedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json(updatedMovie);
  } catch (error) {
    next(error);
  }
};
