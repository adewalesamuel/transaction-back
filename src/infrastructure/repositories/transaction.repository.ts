import { Injectable } from '@nestjs/common';
import { Transaction } from 'src/core/domain/entities/transactions.entity';
import { CreateTransactionDto } from 'src/interface/dto/create-transaction.dto';
import { UpdateTransactionDto } from 'src/interface/dto/update-transaction.dto';

@Injectable()
export class TransactionRepository {
  constructor() {}

  index(): Promise<Transaction[]> {
    return Transaction.findAll();
  }

  save(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    return Transaction.create({ ...createTransactionDto });
  }

  show(transactionId: number): Promise<Transaction> {
    return Transaction.findByPk(transactionId);
  }

  update(
    updateTransactionDto: UpdateTransactionDto,
    transaction: Transaction,
  ): Promise<Transaction> {
    return transaction.update({ ...updateTransactionDto });
  }

  delete(transaction: Transaction): Promise<void> {
    return transaction.destroy();
  }
}
