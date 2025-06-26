//Este arquivo configura o Express e conecta as rotas.

import express from 'express';
import podcastRoutes from './routes/podcastRoutes';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';

const app = express();

app.use(express.json());
app.use('/api/podcasts', podcastRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

export default app;
