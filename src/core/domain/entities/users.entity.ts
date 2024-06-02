import { Column, HasMany, Index, Model, Table } from 'sequelize-typescript';
import { Transaction } from './transactions.entity';

@Table
export class User extends Model {
  @Column
  name: string;

  @Column
  @Index({ unique: true })
  email: string;

  @Column
  password: string;

  @HasMany(() => Transaction)
  transactions: Transaction[];
}
