# Cinema Application

A Node.js application to manage cinema rooms and movie screenings. This project allows users to create, update, delete, and view cinema rooms and movies. Additionally, users can reserve seats for a movie and manage those reservations.

## Features

- Create, update, delete, and view cinema rooms
- Create, update, delete, and view movies
- Reserve and unreserve seats for movies
- Automatically delete movies after their end time

## Technologies Used

- Node.js
- Express
- TypeScript
- Mongoose
- MongoDB
- dotenv
- morgan
- helmet
- cors

## Installation

1. Clone the repository

2. Navigate to the project directory

   ```bash
   cd back
   ```

3. Install the dependencies

   ```bash
   npm install
   ```

4. Create a `.env.development` file in the root directory and add your MongoDB URI and server port

   ```env
   MONGO_URI=mongodb://localhost:27017/cinema
   PORT=3000
   ```

5. Start the development server

   ```bash
   npm run dev
   ```

6. Build the project

   ```bash
   npm run build
   ```

7. Start the production server

   ```bash
   npm start
   ```

## Usage

### Creating a Room

- **Endpoint:** `POST /api/v1/rooms`
- **Body:**

  ```json
  {
    "name": "Red Room",
    "rows": 10,
    "seatsPerRow": 8,
    "posterUrl": "http://example.com/poster.jpg"
  }
  ```

### Updating a Room

- **Endpoint:** `PUT /api/v1/rooms/:id`
- **Body:**

  ```json
  {
    "name": "Blue Room",
    "rows": 12,
    "seatsPerRow": 10,
    "posterUrl": "http://example.com/new-poster.jpg"
  }
  ```

### Deleting a Room

- **Endpoint:** `DELETE /api/v1/rooms/:id`

### Viewing All Rooms

- **Endpoint:** `GET /api/v1/rooms`

### Viewing a Room by ID

- **Endpoint:** `GET /api/v1/rooms/:id`

### Creating a Movie

- **Endpoint:** `POST /api/v1/movies`
- **Body:**

  ```json
  {
    "roomId": "60d21b4667d0d8992e610c85",
    "name": "Inception",
    "timeToStart": "2024-06-28T17:23:02Z",
    "timeToEnd": "2024-06-28T20:30:00Z",
    "reservedSeatIds": [1, 2, 3]
  }
  ```

### Updating a Movie

- **Endpoint:** `PUT /api/v1/movies/:id`
- **Body:**

  ```json
  {
    "roomId": "60d21b4667d0d8992e610c85",
    "name": "Interstellar",
    "timeToStart": "2024-06-28T17:23:02Z",
    "timeToEnd": "2024-06-28T20:30:00Z",
    "reservedSeatIds": [1, 2, 6, 7, 8]
  }
  ```

### Deleting a Movie

- **Endpoint:** `DELETE /api/v1/movies/:id`

### Adding a Reserved Seat

- **Endpoint:** `PUT /api/v1/movies/:id/addReservedSeat`
- **Body:**

  ```json
  {
    "seatNumber": 12
  }
  ```

### Removing a Reserved Seat

- **Endpoint:** `PUT /api/v1/movies/:id/removeReservedSeat`
- **Body:**

  ```json
  {
    "seatNumber": 12
  }
  ```

## Project Structure
