// /Define as rotas relacionadas aos podcasts.
import express from 'express';
import { listEpisodes, uploadEpisode } from '../controllers/podcastController';

const router = express.Router();

router.get('/episodes', listEpisodes); // Listar episódios
router.post('/upload', uploadEpisode); // Fazer upload de episódios

export default router;
