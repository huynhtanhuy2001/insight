"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ticketpackage", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      PackageCode: {
        type: Sequelize.STRING,
      },
      PackageName: {
        type: Sequelize.STRING,
      },
      ExpirationDate: {
        type: Sequelize.STRING,
      },
      Fare: {
        type: Sequelize.STRING,
      },
      ComboPrice: {
        type: Sequelize.STRING,
      },
      TinhTrang: {
        type: Sequelize.ENUM("Đang áp dụng", "Tắt"),
        defaultValue: "Tắt",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ticketpackage");
  },
};
