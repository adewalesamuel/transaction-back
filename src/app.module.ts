import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dialect } from 'sequelize';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './interface/modules/users.module';
import { TransactionsModule } from './interface/modules/transactions.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    TransactionsModule,
    SequelizeModule.forRoot({
      dialect: (process.env.DB_DIALECT as Dialect) ?? 'postgresql',
      host: process.env.DB_HOST ?? 'localhost',
      port: Number(process.env.DB_PORT) ?? 3306,
      username: process.env.DB_USER ?? '',
      password: process.env.DB_PASSWORD ?? '',
      database: process.env.DB_NAME ?? '',
      autoLoadModels: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
