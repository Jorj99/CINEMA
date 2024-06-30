import { useCallback, useEffect, useState } from "react";

import { MovieData, RoomData } from "@/utils/types";
import useDeleteMovie from "@/hooks/useDeleteMovie";
import { findCurrentRoomAndMovie } from "@/utils";
import useRoomsData from "@/hooks/useRoomsData";
import Portal from "@/components/portal";

import styles from "./styles.module.css";
import MoviesSlider from "../moviesSlider";
import Place from "../place";
import FormMovie from "../formMovie";
import useBookMovie from "@/hooks/useBooking";
import useCancelBooking from "@/hooks/useCancelBooking";

interface EditPortalProps {
  open: boolean;
  close: () => void;
}

function EditPortal({ open, close }: EditPortalProps) {
  const { rooms } = useRoomsData();
  const { booking } = useBookMovie();
  const { cancelBooking } = useCancelBooking();
  const { deleteMovie } = useDeleteMovie();

  const firstRoom = rooms?.[0] || null;
  const firstMovie = rooms?.[0]?.movies?.[0] || null;
  const [currentRoom, setCurrentRoom] = useState<RoomData | null>(firstRoom);
  const [currentMovie, setCurrentMovie] = useState<MovieData | null>(
    firstMovie
  );

  useEffect(() => {
    if (!rooms) return;
    const { room, movie } = findCurrentRoomAndMovie(
      rooms,
      currentRoom?._id,
      currentMovie?._id
    );
    setCurrentRoom(room);
    setCurrentMovie(movie);
  }, [rooms, currentRoom?._id, currentMovie?._id]);

  const chooseMovie = useCallback(
    (room: RoomData) => {
      setCurrentRoom(room);
      setCurrentMovie(room?.movies?.[0]);
    },
    [setCurrentRoom, setCurrentMovie]
  );

  return (
    <>
      {!!open && (
        <Portal onClose={close}>
          <>
            <h2>EDIT CINEMA</h2>
            <div className={styles.roomBtnWrapper}>
              {rooms?.map((r) => (
                <button
                  className={styles.roomBtn}
                  onClick={() => chooseMovie(r)}
                >
                  <h3>{r.name}</h3>
                </button>
              ))}
            </div>
            <h2 className={styles.currentRoomName}>{currentRoom?.name}</h2>
            <MoviesSlider
              currentMovie={currentMovie}
              currentRoom={currentRoom}
              setCurrentMovie={setCurrentMovie}
              isEditMode={true}
              delateMovie={deleteMovie}
            />
            <FormMovie currentMovie={currentMovie} currentRoom={currentRoom} />
            <Place
              booking={booking}
              cancelBooking={cancelBooking}
              currentMovie={currentMovie}
              isEditMode={true}
            />
          </>
        </Portal>
      )}
    </>
  );
}

export default EditPortal;
