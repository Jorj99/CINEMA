import { getRoomsCacheKey } from "@/dependencies/cash_key";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteMovieApi from "@/requests/deleteMovie";

type UseBookmarkMutationReturnData = {
  deleteMovie: (data: { movieId: string }) => void;
};

const useDeleteMovie = (): UseBookmarkMutationReturnData => {
  const queryClient = useQueryClient();
  const roomsKey = getRoomsCacheKey();

  const { mutate } = useMutation({
    mutationFn: ({ movieId }: { movieId: string }) => deleteMovieApi(movieId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: roomsKey });
    },
    onError: () => {
      queryClient.invalidateQueries({ queryKey: roomsKey });
    },
  });

  return {
    deleteMovie: mutate,
  };
};

export default useDeleteMovie;
