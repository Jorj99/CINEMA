import axiosInstance from "@/utils/axios";

const addBookingAPI = async (
  movieId: string,
  seatNumber: number
): Promise<any> => {
  const { data } = await axiosInstance.put<boolean>(
    `movie/${movieId}/addReservedSeat`,
    {
      seatNumber: seatNumber,
    }
  );
  return data;
};

export const deleteBookingAPI = async (
  movieId: string,
  seatNumber: number
): Promise<any> => {
  const { data } = await axiosInstance.put<boolean>(
    `movie/${movieId}/removeReservedSeat`,
    {
      seatNumber: seatNumber,
    }
  );
  return data;
};
export default addBookingAPI;
