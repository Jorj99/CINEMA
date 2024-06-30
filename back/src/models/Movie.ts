import { Schema, model } from 'mongoose';
import { IMovie } from '@/types';

const movieSchema = new Schema<IMovie>({
  roomId: { type: Schema.Types.ObjectId, ref: 'Room', required: true },
  name: { type: String, required: true },
  posterUrl: { type: String, required: true },
  timeToStart: { type: Date, required: true },
  timeToEnd: { type: Date, required: true },
  reservedSeatIds: { type: [Number], required: true },
});

// Add an index to automatically delete documents when timeToEnd is reached
movieSchema.index({ timeToEnd: 1 }, { expireAfterSeconds: 0 });

const Movie = model<IMovie>('Movie', movieSchema);

export { Movie, IMovie };
