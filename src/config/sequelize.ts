import { Sequelize } from 'sequelize';
import Ticket from '../models/Ticket';

const sequelize = new Sequelize({
  database: 'insight',
  username: 'root',
  password: '123456',
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
});

export default sequelize;
