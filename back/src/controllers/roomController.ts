import { Request, Response, NextFunction } from 'express';

import RoomService from '@/services/roomService';

export const createRoom = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name } = req.body;
    const newRoom = await RoomService.createRoom({
      name,
    });
    res.status(201).json(newRoom);
  } catch (error) {
    next(error);
  }
};

export const updateRoom = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedRoom = await RoomService.updateRoom(id, {
      name,
    });
    if (!updatedRoom) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.status(200).json(updatedRoom);
  } catch (error) {
    next(error);
  }
};

export const deleteRoom = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const deletedRoom = await RoomService.deleteRoom(id);
    if (!deletedRoom) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res
      .status(200)
      .json({ message: 'Room and associated movies deleted successfully' });
  } catch (error) {
    next(error);
  }
};

export const getAllRooms = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const rooms = await RoomService.getAllRooms();
    res.status(200).json(rooms);
  } catch (error) {
    next(error);
  }
};

export const getRoomById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const room = await RoomService.getRoomById(id);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.status(200).json(room);
  } catch (error) {
    next(error);
  }
};
