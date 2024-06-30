import { deleteBookingAPI } from "@/requests/booking";
import { getRoomsCacheKey } from "@/dependencies/cash_key";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type UseBookmarkMutationReturnData = {
  cancelBooking: (data: { movieId: string; seatNumber: number }) => void;
};

const useCancelBooking = (): UseBookmarkMutationReturnData => {
  const queryClient = useQueryClient();
  const roomsKey = getRoomsCacheKey();

  const { mutate } = useMutation({
    mutationFn: ({
      movieId,
      seatNumber,
    }: {
      movieId: string;
      seatNumber: number;
    }) => deleteBookingAPI(movieId, seatNumber),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: roomsKey });
    },
    onError: () => {
      queryClient.invalidateQueries({ queryKey: roomsKey });
    },
  });

  return {
    cancelBooking: mutate,
  };
};

export default useCancelBooking;
