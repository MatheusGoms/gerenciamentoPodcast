//Função para gerar feeds RSS.

import RSS from 'rss';

export const generateFeed = () => {
  const feed = new RSS({
    title: 'Podcast Manager Feed',
    description: 'Um feed RSS gerado automaticamente.',
    feed_url: 'http://localhost:3000/rss',
    site_url: 'http://localhost:3000',
  });

  feed.item({
    title: 'Episódio 1',
    description: 'Descrição do episódio 1',
    url: 'http://localhost:3000/episodes/1',
    date: new Date(),
  });

  return feed.xml();
};
