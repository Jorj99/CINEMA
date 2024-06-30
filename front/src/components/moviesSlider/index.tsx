import { Swiper, SwiperSlide } from "swiper/react";
import classNames from "classnames";

import { MovieData, RoomData } from "@/utils/types";
import "@/fonts/fonts.css";

import styles from "./styles.module.css";
import "swiper/css";

interface MoviesSliderProps {
  currentRoom: RoomData | null;
  currentMovie: MovieData | null;
  setCurrentMovie: (movie: MovieData | null) => void;
  isEditMode?: boolean;
  delateMovie?: (data: { movieId: string }) => void;
}
function MoviesSlider({
  currentRoom,
  currentMovie,
  setCurrentMovie,
  isEditMode = false,
  delateMovie,
}: MoviesSliderProps) {
  return (
    <Swiper spaceBetween={10} slidesPerView={2.5}>
      {currentRoom?.movies?.map((movie: MovieData) => (
        <SwiperSlide>
          <button
            className={classNames(styles.posterBtn, {
              [styles.notSelected]: currentMovie?.["_id"] !== movie?.["_id"],
            })}
            onClick={() => setCurrentMovie(movie)}
          >
            {isEditMode && delateMovie && (
              <button
                className={styles.delateMovie}
                onClick={() =>
                  delateMovie({ movieId: currentMovie?.["_id"] || "" })
                }
              >
                X
              </button>
            )}
            <img className={styles.poster} src={movie.posterUrl} />
          </button>
        </SwiperSlide>
      ))}
      {isEditMode && (
        <SwiperSlide>
          <button
            className={classNames(styles.posterBtn, {
              [styles.notSelected]: currentMovie !== null,
            })}
            onClick={() => setCurrentMovie(null)}
          >
            <h2>ADD NEW MOVIE</h2>
          </button>
        </SwiperSlide>
      )}
    </Swiper>
  );
}

export default MoviesSlider;
