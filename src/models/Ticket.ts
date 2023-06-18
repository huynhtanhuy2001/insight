const { DataTypes,Model } = require('sequelize');
const sequelize = require('./sequelize');

class Ticket extends Model {
  public idTicket!: number;
  public BookingCode!: string;
  public SoVe!: string;
  public TenSuKien!: string;
  public TinhTrangSuDung!: string;
  public NgaySuDung!: string;
  public NgayXuatVe!: string;
  public CongCheckIn!: string;
}

Ticket.init(
  {
    idTicket: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    BookingCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SoVe: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    TenSuKien: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    TinhTrangSuDung: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    NgaySuDung: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    NgayXuatVe: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CongCheckIn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
     sequelize,
    modelName: 'Ticket',
    tableName: 'ticket',
  }
);

export default Ticket;
