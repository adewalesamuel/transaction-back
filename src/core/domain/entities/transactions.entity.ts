import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from './users.entity';

@Table
export class Transaction extends Model {
  @Column
  number: string;

  @Column
  date: Date;

  @Column
  amount: number;

  @ForeignKey(() => User)
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
