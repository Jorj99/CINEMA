import { Movie, IMovie } from '@/models/Movie';
import { MovieInput } from '@/types';

class MovieService {
  async createMovie(movieInput: MovieInput): Promise<IMovie> {
    const movie = new Movie(movieInput);
    await movie.save();
    return movie;
  }

  async updateMovie(
    id: string,
    movieInput: MovieInput
  ): Promise<IMovie | null> {
    const updatedMovie = await Movie.findByIdAndUpdate(id, movieInput, {
      new: true,
    });
    return updatedMovie;
  }

  async deleteMovie(id: string): Promise<IMovie | null> {
    const deletedMovie = await Movie.findByIdAndDelete(id);
    return deletedMovie;
  }

  async addReservedSeat(
    id: string,
    seatNumber: number
  ): Promise<IMovie | null> {
    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      { $addToSet: { reservedSeatIds: seatNumber } },
      { new: true }
    );
    return updatedMovie;
  }

  async removeReservedSeat(
    id: string,
    seatNumber: number
  ): Promise<IMovie | null> {
    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      { $pull: { reservedSeatIds: seatNumber } },
      { new: true }
    );
    return updatedMovie;
  }
}

export default new MovieService();
