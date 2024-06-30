import { CSSProperties } from "react";

export interface Styles {
  [key: string]: CSSProperties;
}

export interface MovieData {
  _id: string;
  roomId: string;
  name: string;
  posterUrl: string;
  timeToStart: string;
  timeToEnd: string;
  reservedSeatIds: number[];
  __v: number;
}

export interface RoomData {
  _id: string;
  name: string;
  movies: MovieData[];
  __v: number;
}

export interface MovieInput {
  roomId?: string;
  movieId?: string;
  name: string;
  posterUrl: string;
  timeToStart: string;
  timeToEnd: string;
  reservedSeatIds?: number[];
}
