import { Dispatch, SetStateAction } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import classNames from "classnames";

import { MovieData, RoomData } from "@/utils/types";
import useBookMovie from "@/hooks/useBooking";
import Portal from "@/components/portal";
import Place from "@/components/place";

import styles from "./styles.module.css";
import "@/fonts/fonts.css";
import "swiper/css";
import MoviesSlider from "../moviesSlider";

interface BookingProps {
  currentRoom: RoomData | null;
  currentMovie: MovieData | null;
  setCurrentRoom: Dispatch<SetStateAction<RoomData | null>>;
  setCurrentMovie: Dispatch<SetStateAction<MovieData | null>>;
}
function Booking({
  currentRoom,
  currentMovie,
  setCurrentRoom,
  setCurrentMovie,
}: BookingProps) {
  const { booking } = useBookMovie();

  return (
    <>
      {!!currentRoom && (
        <Portal
          onClose={() => {
            setCurrentRoom(null);
            setCurrentMovie(null);
          }}
        >
          <>
            <h2 className={styles.roomName}>{currentRoom?.name}</h2>
            <MoviesSlider
              currentMovie={currentMovie}
              currentRoom={currentRoom}
              setCurrentMovie={setCurrentMovie}
            />
            <Place booking={booking} currentMovie={currentMovie} />
          </>
        </Portal>
      )}
    </>
  );
}

export default Booking;
