import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class TicketModel extends Model {
  public id!: number;
  public bookingCode!: string;
  public soVe!: string;
  public tenSuKien!: string;
  public tinhTrangSuDung!: string;
  public ngaySuDung!: Date;
  public ngayXuatVe!: Date;
  public congCheckIn!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

TicketModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
      type: DataTypes.DATE,
      allowNull: false,
    },
    ngayXuatVe: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    congCheckIn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'tickets',
  }
);

export default TicketModel;
