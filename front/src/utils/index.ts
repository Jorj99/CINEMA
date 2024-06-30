import { MovieData, RoomData } from "./types";

export const findCurrentRoomAndMovie = (
  rooms: RoomData[],
  currentRoomId: string | undefined,
  currentMovieId: string | undefined
): { room: RoomData | null; movie: MovieData | null } => {
  const room = rooms.find((room) => room["_id"] === currentRoomId) ?? null;
  const movie =
    room?.movies?.find((movie) => movie["_id"] === currentMovieId) ?? null;
  return { room, movie };
};
