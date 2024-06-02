import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from 'src/interface/dto/create-transaction.dto';
import { TransactionRepository } from 'src/infrastructure/repositories/transaction.repository';
import { UpdateTransactionDto } from 'src/interface/dto/update-transaction.dto';
import { Transaction } from '../entities/transactions.entity';

@Injectable()
export class TransactionsService {
  constructor(private readonly transactionRepository: TransactionRepository) {}

  create(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    return this.transactionRepository.save(createTransactionDto);
  }

  findAll(): Promise<Transaction[]> {
    return this.transactionRepository.index();
  }

  findOne(id: number): Promise<Transaction> {
    return this.transactionRepository.show(id);
  }

  update(
    transaction: Transaction,
    updateTransactionDto: UpdateTransactionDto,
  ): Promise<Transaction> {
    return this.transactionRepository.update(updateTransactionDto, transaction);
  }

  remove(transaction: Transaction) {
    return this.transactionRepository.delete(transaction);
  }
}
