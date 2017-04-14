import Sequelize from 'sequelize';
import {
  dbURI,
  databaseUser,
  databasePassword,
  databasePort,
} from '../config';

const sequelize = new Sequelize(
  'slate',
  databaseUser,
  databasePassword,
  {
    dialect: 'mysql',
    port: databasePort,
    host: dbURI,
  },
);

export default sequelize;
