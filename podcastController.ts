//Contém a lógica dos endpoints de podcasts.

import { Request, Response } from 'express';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });

export const uploadEpisode = (req: Request, res: Response) => {
  upload.single('file')(req, res, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao fazer upload do arquivo' });
    }
    return res.status(200).json({ message: 'Episódio enviado com sucesso!' });
  });
};

export const listEpisodes = (req: Request, res: Response) => {
  const episodes = [
    { id: 1, title: 'Episódio 1', duration: '45:00' },
    { id: 2, title: 'Episódio 2', duration: '30:00' },
  ];
  res.status(200).json(episodes);
};
