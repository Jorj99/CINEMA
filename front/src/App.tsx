import { useCallback, useEffect, useState } from "react";

import { MovieData, RoomData } from "@/utils/types";
import { findCurrentRoomAndMovie } from "@/utils";
import useRoomsData from "@/hooks/useRoomsData";
import Booking from "@/components/booking";
import Navbar from "@/components/navbar";
import Room from "@/components/room";
import "@/fonts/fonts.css";

import "swiper/css";
import "./App.css";
function App() {
  const { rooms } = useRoomsData();
  const [currentRoom, setCurrentRoom] = useState<RoomData | null>(null);
  const [currentMovie, setCurrentMovie] = useState<MovieData | null>(null);

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
    <div className="App">
      <Navbar />
      {rooms?.map((room, i) => (
        <>
          {!!room?.movies?.length && (
            <Room
              chooseMovie={() => chooseMovie(room)}
              isReversed={i % 2 === 0}
              name={room.name}
              timeToStart={room?.movies?.[0]?.timeToStart || ""}
              timeToEnd={room?.movies?.[0]?.timeToStart || ""}
              movieName={room?.movies?.[0]?.name || ""}
              posterUrl={room?.movies?.[0]?.posterUrl || ""}
            />
          )}
        </>
      ))}

      {!!currentRoom && (
        <Booking
          currentRoom={currentRoom}
          currentMovie={currentMovie}
          setCurrentMovie={setCurrentMovie}
          setCurrentRoom={setCurrentRoom}
        />
      )}
    </div>
  );
}

export default App;
