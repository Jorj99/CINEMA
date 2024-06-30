import { Movie } from '@/models/Movie';
import { Room, IRoom } from '@/models/Room';
import { RoomInput } from '@/types';
import {
  getAggregationForAllRooms,
  getAggregationForRoomById,
} from '@/utils/aggregations';

class RoomService {
  async createRoom(roomInput: RoomInput): Promise<IRoom> {
    const room = new Room(roomInput);
    await room.save();
    return room;
  }

  async updateRoom(id: string, roomInput: RoomInput): Promise<IRoom | null> {
    const updatedRoom = await Room.findByIdAndUpdate(id, roomInput, {
      new: true,
    });
    return updatedRoom;
  }

  async deleteRoom(id: string): Promise<IRoom | null> {
    const deletedRoom = await Room.findByIdAndDelete(id);
    if (deletedRoom) {
      await Movie.deleteMany({ roomId: id });
    }
    return deletedRoom;
  }

  async getAllRooms(): Promise<any[]> {
    const aggregationArr = getAggregationForAllRooms();
    const rooms = await Room.aggregate(aggregationArr);
    return rooms;
  }

  async getRoomById(id: string): Promise<any | null> {
    const aggregationArr = getAggregationForRoomById(id);
    const room = await Room.aggregate(aggregationArr);
    return room.length > 0 ? room[0] : null;
  }
}

export default new RoomService();
