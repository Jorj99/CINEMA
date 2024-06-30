import { Schema } from 'mongoose';

export interface MovieInput {
  roomId: Schema.Types.ObjectId;
  name: string;
  posterUrl: string;
  timeToStart: Date;
  timeToEnd: Date;
  reservedSeatIds: number[];
}

export interface IMovie extends Document {
  roomId: Schema.Types.ObjectId;
  name: string;
  posterUrl: string;
  timeToStart: Date;
  timeToEnd: Date;
  reservedSeatIds: number[];
}
