import express from 'express';
import pokemonController from '../controllers/pokemon.js';

const router = express.Router();

router.get('/:page', pokemonController.getPaginated);

export default router;