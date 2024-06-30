import { MOVIES_INITIAL_DATA, ROOMS_INITIAL_DATA } from "./initalData";
import mongoose, { Schema, Document, Types } from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "../back/.env.development" });

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("MONGO_URI environment variable is not defined");
}

interface Room extends Document {
  name: string;
}

interface Movie extends Document {
  roomId: Types.ObjectId;
  name: string;
  posterUrl: string;
  timeToStart: Date;
  timeToEnd: Date;
  reservedSeatIds: number[];
}

const roomSchema = new Schema({
  name: { type: String, required: true },
});

const movieSchema = new Schema({
  roomId: { type: Schema.Types.ObjectId, ref: "Room", required: true },
  name: { type: String, required: true },
  posterUrl: { type: String, required: true },
  timeToStart: { type: Date, required: true },
  timeToEnd: { type: Date, required: true },
  reservedSeatIds: [{ type: Number }],
});

const Room = mongoose.model<Room>("Room", roomSchema);
const Movie = mongoose.model<Movie>("Movie", movieSchema);

const cinemaData = {
  rooms: ROOMS_INITIAL_DATA,
  movies: MOVIES_INITIAL_DATA,
};

async function initCinemaData() {
  try {
    if (!MONGO_URI) {
      throw new Error("MONGO_URI is not defined");
    }
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Clear existing data
    await Room.deleteMany({});
    await Movie.deleteMany({});

    // Insert rooms
    await Room.insertMany(
      cinemaData.rooms.map((room) => ({
        _id: new mongoose.Types.ObjectId(room._id),
        name: room.name,
      }))
    );

    // Insert movies
    await Movie.insertMany(
      cinemaData.movies.map((movie) => ({
        _id: new mongoose.Types.ObjectId(movie._id),
        roomId: new mongoose.Types.ObjectId(movie.roomId),
        name: movie.name,
        posterUrl: movie.posterUrl,
        timeToStart: new Date(movie.timeToStart.$date),
        timeToEnd: new Date(movie.timeToEnd.$date),
        reservedSeatIds: movie.reservedSeatIds,
      }))
    );

    console.log("Cinema data has been initialized");
    mongoose.connection.close();
  } catch (err) {
    console.error("Failed to initialize cinema data", err);
    mongoose.connection.close();
  }
}

initCinemaData();
