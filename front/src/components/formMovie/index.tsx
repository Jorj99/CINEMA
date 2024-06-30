import { FormEvent, useEffect, useState } from "react";

import { MovieData, MovieInput, RoomData } from "@/utils/types";
import useAddUpdateMovie from "@/hooks/useAddUpdateMovie";

import classNames from "classnames";

import styles from "./styles.module.css";

interface FormMovieProps {
  currentMovie: MovieData | null;
  currentRoom: RoomData | null;
}
function FormMovie({ currentMovie, currentRoom }: FormMovieProps) {
  const { addUpdateMovie } = useAddUpdateMovie();
  const [errorText, setErrorText] = useState<string | null>(null);
  const [formState, setFormState] = useState<MovieInput>({
    name: "",
    posterUrl: "",
    timeToStart: "",
    timeToEnd: "",
  });

  const isBtnDisabled =
    !formState.name ||
    !formState.posterUrl ||
    !formState.timeToStart ||
    !formState.timeToEnd ||
    !!errorText;

  useEffect(() => {
    setFormState({
      roomId: currentRoom?._id || "",
      name: currentMovie?.name || "",
      posterUrl: currentMovie?.posterUrl || "",
      timeToStart: currentMovie?.timeToStart || "",
      timeToEnd: currentMovie?.timeToEnd || "",
      reservedSeatIds: currentMovie?.reservedSeatIds || [],
    });
  }, [currentMovie, currentRoom]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target.name === "timeToEnd") {
      const selectedTimeToEnd = new Date(e.target.value);
      const now = new Date();
      if (selectedTimeToEnd < now) {
        setErrorText("Time to end cannot be in the past.");
        return;
      } else if (errorText) {
        setErrorText(null);
      }
    }
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addUpdateMovie({
      roomId: currentRoom?._id || "",
      movieId: currentMovie?._id,
      name: formState.name,
      posterUrl: formState.posterUrl,
      timeToStart: formState.timeToStart,
      timeToEnd: formState.timeToEnd,
      reservedSeatIds: currentMovie?.reservedSeatIds || [],
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputWrapper}>
        <label>
          <p>Name:</p>
          <input
            placeholder="Name"
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={styles.inputWrapper}>
        <label>
          <p>Poster URL:</p>
          <input
            placeholder="Paste url"
            type="text"
            name="posterUrl"
            value={formState.posterUrl}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={styles.inputWrapper}>
        <label>
          <p>Time to Start:</p>
          <input
            type="datetime-local"
            name="timeToStart"
            value={formState.timeToStart}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={styles.inputWrapper}>
        <label>
          {!errorText && <p>Time to End:</p>}
          {errorText && <p style={{ color: "red" }}>{errorText}</p>}
          <input
            type="datetime-local"
            name="timeToEnd"
            value={formState.timeToEnd}
            onChange={handleChange}
          />
        </label>
      </div>
      <button
        disabled={isBtnDisabled}
        type="submit"
        className={classNames(styles.submitBtn, {
          [styles.disabledBtn]: isBtnDisabled,
        })}
      >
        {currentMovie?._id ? "EDIT" : "CREATE"}
      </button>
    </form>
  );
}

export default FormMovie;
