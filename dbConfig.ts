//Configuração do banco de dados.
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_URL || 'postgres://user:password@localhost:5432/podcast_manager');

export default sequelize;
