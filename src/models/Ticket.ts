import { Table, Column, Model } from "sequelize-typescript";
import sequelize from '../config/sequelize';
@Table({ tableName: "ticket" })
export default class Ticket extends Model {
  static async getAllTickets(): Promise<Ticket[]> {
    return Ticket.findAll();
  }
  @Column
  idTicket!: number;

  @Column
  BookingCode!: string;

  @Column
  SoVe!: string;

  @Column
  TenSuKien!: string;

  @Column
  TinhTrangSuDung!: string;

  @Column
  NgaySuDung!: string;

  @Column
  NgayXuatVe!: string;

  @Column
  CongCheckIn!: string;
}
Ticket.init({}, { sequelize });
export { Ticket };