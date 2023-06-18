import { QueryInterface } from "sequelize";
const {  DataTypes } = require('sequelize');
module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize: any) => {
    await queryInterface.createTable('Tickets', {
      key: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      stt: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bookingCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      soVe: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tenSuKien: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tinhTrangSuDung: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ngaySuDung: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ngayXuatVe: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      congCheckIn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('Tickets');
  },
};
