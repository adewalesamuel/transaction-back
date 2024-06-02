import { Injectable } from '@nestjs/common';
import { User } from 'src/core/domain/entities/users.entity';
import { CreateUserDto } from 'src/interface/dto/create-user.dto';
import { UpdateUserDto } from 'src/interface/dto/update-user.dto';

@Injectable()
export class UserRepository {
  constructor() {}

  index(): Promise<User[]> {
    return User.findAll({ attributes: { exclude: ['password'] } });
  }

  save(createUserDto: CreateUserDto): Promise<User> {
    return User.create({ ...createUserDto });
  }

  show(userId: number): Promise<User> {
    return User.findByPk(userId, { attributes: { exclude: ['password'] } });
  }

  findByEmail(email: string): Promise<User> {
    return User.findOne({ where: { email } });
  }

  update(updateUserDto: UpdateUserDto, user: User): Promise<User> {
    return user.update({ ...updateUserDto });
  }

  delete(user: User): Promise<void> {
    return user.destroy();
  }
}
