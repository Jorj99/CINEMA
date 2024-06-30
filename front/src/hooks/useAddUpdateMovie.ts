import { getRoomsCacheKey } from "@/dependencies/cash_key";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import updateMovieApi from "@/requests/updateMovie";

type UseBookmarkMutationReturnData = {
  addUpdateMovie: (data: {
    roomId: string;
    movieId: string | undefined;
    name: string;
    posterUrl: string;
    timeToStart: string;
    timeToEnd: string;
    reservedSeatIds: number[];
  }) => void;
};

const useAddUpdateMovie = (): UseBookmarkMutationReturnData => {
  const queryClient = useQueryClient();
  const roomsKey = getRoomsCacheKey();

  const { mutate } = useMutation({
    mutationFn: ({
      roomId,
      movieId,
      name,
      posterUrl,
      timeToStart,
      timeToEnd,
      reservedSeatIds,
    }: {
      roomId: string;
      movieId: string | undefined;
      name: string;
      posterUrl: string;
      timeToStart: string;
      timeToEnd: string;
      reservedSeatIds: number[];
    }) =>
      updateMovieApi({
        roomId,
        movieId,
        name,
        posterUrl,
        timeToStart,
        timeToEnd,
        reservedSeatIds,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: roomsKey });
    },
    onError: () => {
      queryClient.invalidateQueries({ queryKey: roomsKey });
    },
  });

  return {
    addUpdateMovie: mutate,
  };
};

export default useAddUpdateMovie;
