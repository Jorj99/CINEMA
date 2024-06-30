import express from 'express';

import movie from './movie';
import room from './room';

const router = express.Router();

router.use('/room', room);
router.use('/movie', movie);

export default router;
