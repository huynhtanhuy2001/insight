const Sequelize = require('sequelize');
const config = require('./config/config.json');

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: 'mysql',
    // Các tùy chọn khác nếu cần thiết
  }
);

// Kiểm tra kết nối
sequelize
  .authenticate()
  .then(() => {
    console.log('Kết nối tới cơ sở dữ liệu thành công');
  })
  .catch((error: Error) => {
    console.error('Lỗi kết nối tới cơ sở dữ liệu:', error);
  });

module.exports = sequelize;
