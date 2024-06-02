import { Injectable } from '@nestjs/common';
import { User } from '../entities/users.entity';
import { CreateUserDto } from 'src/interface/dto/create-user.dto';
import { UserRepository } from 'src/infrastructure/repositories/user.repository';
import { UpdateUserDto } from 'src/interface/dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.save(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.index();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.show(id);
  }

  findByEmail(email: string): Promise<User> {
    return this.userRepository.findByEmail(email);
  }

  update(user: User, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userRepository.update(updateUserDto, user);
  }

  remove(user: User) {
    return this.userRepository.delete(user);
  }
}
