import axiosInstance from "@/utils/axios";

interface updateMovieApiProps {
  name: string;
  roomId: string;
  movieId?: string;
  posterUrl: string;
  timeToStart: string;
  timeToEnd: string;
  reservedSeatIds?: number[];
}
const updateMovieApi = async ({
  name,
  roomId,
  movieId,
  posterUrl,
  timeToStart,
  timeToEnd,
  reservedSeatIds,
}: updateMovieApiProps): Promise<any> => {
  if (!movieId) {
    const { data } = await axiosInstance.post<boolean>(`movie`, {
      roomId,
      movieId,
      name,
      posterUrl,
      timeToStart,
      timeToEnd,
      reservedSeatIds,
    });
    return data;
  } else {
    const { data } = await axiosInstance.put<boolean>(`movie/${movieId}`, {
      roomId,
      movieId,
      name,
      posterUrl,
      timeToStart,
      timeToEnd,
      reservedSeatIds,
    });
    return data;
  }
};

export default updateMovieApi;
