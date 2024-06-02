import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from '../controllers/users.controller';
import { UsersService } from 'src/core/domain/services/users.service';
import { UserRepository } from 'src/infrastructure/repositories/user.repository';
import { Transaction } from 'src/core/domain/entities/transactions.entity';
import { User } from 'src/core/domain/entities/users.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserRepository],
  imports: [SequelizeModule.forFeature([Transaction, User])],
  exports: [UsersService],
})
export class UsersModule {}
