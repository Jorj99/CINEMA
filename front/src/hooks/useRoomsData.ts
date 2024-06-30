import { getRoomsCacheKey } from "@/dependencies/cash_key";
import { getRooms } from "@/requests/rooms";
import { RoomData } from "@/utils/types";
import { RefetchOptions, useQuery } from "@tanstack/react-query";

type useRoomsDataType = {
  rooms: RoomData[] | undefined;
  refetch: (options?: RefetchOptions | undefined) => void;
};

const useRoomsData = (): useRoomsDataType => {
  const { data: rooms, refetch } = useQuery({
    queryKey: getRoomsCacheKey(),
    queryFn: getRooms,
    staleTime: Infinity,
  });

  return { rooms, refetch };
};

export default useRoomsData;
