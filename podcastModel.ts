//Define o modelo de podcast.

import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/dbConfig';

class Podcast extends Model {}

Podcast.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  { sequelize, modelName: 'podcast' }
);

export default Podcast;
