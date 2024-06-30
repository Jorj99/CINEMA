import mongoose from 'mongoose';

const MOVIES_LOOKUP = {
  $lookup: {
    from: 'movies',
    localField: '_id',
    foreignField: 'roomId',
    as: 'movies',
  },
};

const SORT_MOVIES_BY_TIME_TO_END = {
  $set: {
    movies: {
      $sortArray: {
        input: '$movies',
        sortBy: { timeToEnd: 1 },
      },
    },
  },
};

export const getAggregationForRoomById = (id: string) => [
  { $match: { _id: new mongoose.Types.ObjectId(id) } },
  MOVIES_LOOKUP,
  SORT_MOVIES_BY_TIME_TO_END,
];

export const getAggregationForAllRooms = () => [MOVIES_LOOKUP];
