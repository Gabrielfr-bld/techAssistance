import { Sequelize } from 'sequelize';

const database = require('../config/database')
export default new Sequelize(database);;
