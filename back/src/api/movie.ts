import express from 'express';

import {
  addReservedSeat,
  createMovie,
  deleteMovie,
  removeReservedSeat,
  updateMovie,
} from '@/controllers/movieController';

const router = express.Router();

router.post('/', createMovie);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);
router.put('/:id/addReservedSeat', addReservedSeat);
router.put('/:id/removeReservedSeat', removeReservedSeat);

export default router;
