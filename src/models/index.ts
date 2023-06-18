import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes,  } from 'sequelize';

interface Database {
  sequelize: Sequelize;
  [modelName: string]: any;
}

const basename = path.basename(__filename);
const env: string = process.env.NODE_ENV || 'development';
const config: any = require(path.join(__dirname, '/../config/config.json'))[env];
const db: Database = {} as Database;

let sequelize: Sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]!, config);
} else {
  sequelize = new Sequelize(
    config.database!,
    config.username!,
    config.password!,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file: string) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach((file: string) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName: string) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

export default db;
