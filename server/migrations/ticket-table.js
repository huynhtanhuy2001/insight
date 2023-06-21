'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ticket', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      BookingCode: {
        type: Sequelize.STRING
      },
      SoVe: {
        type: Sequelize.STRING
      },
      TenSuKien: {
        type: Sequelize.STRING
      },
      TinhTrangSuDung: {
        type: Sequelize.ENUM('Đã sử dụng', 'Chưa sử dụng', 'Ngưng sử dụng'),
        defaultValue: 'Chưa sử dụng'
      },
      NgaySuDung: {
        type: Sequelize.DATEONLY
      },
      NgayXuatVe: {
        type: Sequelize.DATEONLY
      },
      CongCheckIn: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tickets');
  }
};
