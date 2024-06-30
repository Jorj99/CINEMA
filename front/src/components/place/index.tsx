import classNames from "classnames";
import styles from "./styles.module.css";
import { MovieData } from "@/utils/types";
import { useCallback } from "react";

interface PlaceProps {
  booking: (data: { movieId: string; seatNumber: number }) => void;
  cancelBooking?: (data: { movieId: string; seatNumber: number }) => void;
  currentMovie: MovieData | null;
  isEditMode?: boolean;
}

const Place = ({
  booking,
  cancelBooking,
  currentMovie,
  isEditMode,
}: PlaceProps) => {
  const book = useCallback(
    (num: number) => {
      const isAvailable = !currentMovie?.reservedSeatIds?.includes(num);
      if (isAvailable) {
        booking({
          movieId: currentMovie?.["_id"] || "",
          seatNumber: num,
        });
      } else if (isEditMode && !isAvailable && cancelBooking) {
        cancelBooking({
          movieId: currentMovie?.["_id"] || "",
          seatNumber: num,
        });
      }
    },
    [booking, currentMovie]
  );
  return (
    <div className={styles.places}>
      {!!currentMovie &&
        Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <button
            className={styles.place}
            onClick={() => {
              book(num);
            }}
          >
            <div
              className={classNames({
                [styles.booked]: currentMovie.reservedSeatIds.includes(num),
              })}
            >
              {num}
            </div>
          </button>
        ))}
    </div>
  );
};

export default Place;
