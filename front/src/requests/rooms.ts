import axiosInstance from "@/utils/axios";
import { RoomData } from "@/utils/types";

export const getRooms = async (): Promise<RoomData[] | undefined> => {
  try {
    const rooms = await axiosInstance.get(`/room`);
    return rooms.data;
  } catch (error: any) {
    console.error(error);
  }
};
