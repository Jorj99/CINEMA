export const ROOMS_INITIAL_DATA = [
  {
    _id: "66817c038a0dfb0f6f9c9af9",
    name: "ROOM 1",
  },
  {
    _id: "66817c088a0dfb0f6f9c9afb",
    name: "ROOM 2",
  },
  {
    _id: "66817c0d8a0dfb0f6f9c9afd",
    name: "ROOM 3",
  },
];

export const MOVIES_INITIAL_DATA = [
  {
    _id: "66817d138a0dfb0f6f9c9b0a",
    roomId: "66817c088a0dfb0f6f9c9afb",
    name: "TILL",
    posterUrl:
      "https://assets.mubicdn.net/images/notebook/post_images/36485/images-w1400.jpg?1670783534",
    timeToStart: { $date: "2024-06-01T19:43:00.000Z" },
    timeToEnd: { $date: "2024-07-14T19:43:00.000Z" },
    reservedSeatIds: [1, 5, 10],
  },
  {
    _id: "66817d7e8a0dfb0f6f9c9b0d",
    roomId: "66817c038a0dfb0f6f9c9af9",
    name: "John Wick",
    posterUrl:
      "https://media.gq.com/photos/58582aab8ba341a6292b91a8/1:1/w_3599,h_3599,c_limit/John%20Wick%20Chapter%202%20-%20International%20Poster.jpg",
    timeToStart: { $date: "2024-07-02T19:48:00.000Z" },
    timeToEnd: { $date: "2024-09-13T19:48:00.000Z" },
    reservedSeatIds: [1, 2, 20],
  },
  {
    _id: "66817e968a0dfb0f6f9c9b1d",
    roomId: "66817c038a0dfb0f6f9c9af9",
    name: "Форсаж 10",
    posterUrl: "https://upload.wikimedia.org/wikipedia/ru/c/c4/Fast_X.jpg",
    timeToStart: { $date: "2024-07-11T19:49:00.000Z" },
    timeToEnd: { $date: "2024-07-19T19:49:00.000Z" },
    reservedSeatIds: [11],
  },
  {
    _id: "66817f168a0dfb0f6f9c9b20",
    roomId: "66817c0d8a0dfb0f6f9c9afd",
    name: "Spider Man",
    posterUrl:
      "https://images.hdqwalls.com/download/spider-man-no-way-home-movie-poster-5k-3a-1920x1080.jpg",
    timeToStart: { $date: "2024-07-01T19:51:00.000Z" },
    timeToEnd: { $date: "2024-07-27T19:51:00.000Z" },
    reservedSeatIds: [24],
  },
];
