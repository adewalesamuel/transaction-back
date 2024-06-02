import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TransactionsController } from '../controllers/transactions.controller';
import { TransactionsService } from 'src/core/domain/services/transactions.service';
import { TransactionRepository } from 'src/infrastructure/repositories/transaction.repository';
import { User } from 'src/core/domain/entities/users.entity';
import { Transaction } from 'src/core/domain/entities/transactions.entity';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService, TransactionRepository],
  imports: [SequelizeModule.forFeature([Transaction, User])],
})
export class TransactionsModule {}
