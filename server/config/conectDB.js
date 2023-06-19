const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("insight", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

let connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connect();

module.exports = sequelize;
