import { FC, memo } from "react";
import classNames from "classnames";

import styles from "./styles.module.css";

interface IRoom {
  name: string;
  timeToStart: string;
  timeToEnd: string;
  movieName: string;
  posterUrl: string;
  isReversed: boolean;
  chooseMovie: () => void;
}

const Room: FC<IRoom> = ({
  name,
  timeToStart,
  timeToEnd,
  movieName,
  posterUrl,
  isReversed,
  chooseMovie,
}) => {
  return (
    <div
      className={classNames(styles.room, { [styles.roomReverse]: isReversed })}
    >
      <div className={styles.textBlock}>
        <h2>{name}</h2>
        <h1>{movieName}</h1>
        <button onClick={() => chooseMovie()}>BOOK</button>
        <div>
          <p>Starts: {timeToStart}</p>
          <p>Ends: {timeToEnd}</p>
        </div>
      </div>
      <div className={styles.posterBlock}>
        <img className={styles.poster} src={posterUrl} alt={movieName} />
      </div>
    </div>
  );
};

export default memo(Room);
