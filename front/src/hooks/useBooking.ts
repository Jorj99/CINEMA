import addBookingAPI from "@/requests/booking";
import { getRoomsCacheKey } from "@/dependencies/cash_key";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type UseBookmarkMutationReturnData = {
  booking: (data: { movieId: string; seatNumber: number }) => void;
};

const useBookMovie = (): UseBookmarkMutationReturnData => {
  const queryClient = useQueryClient();
  const roomsKey = getRoomsCacheKey();

  const { mutate } = useMutation({
    mutationFn: ({
      movieId,
      seatNumber,
    }: {
      movieId: string;
      seatNumber: number;
    }) => addBookingAPI(movieId, seatNumber),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: roomsKey });
    },
    onError: () => {
      queryClient.invalidateQueries({ queryKey: roomsKey });
    },
  });

  return {
    booking: mutate,
  };
};

export default useBookMovie;
