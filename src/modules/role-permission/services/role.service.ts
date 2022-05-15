import { RoleEntity } from '../domain/entities/role.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private rolesRepository: Repository<RoleEntity>,
  ) {}

  async getAll(): Promise<RoleEntity[]> {
    try {
      return await this.rolesRepository.find();
    } catch (error) {
      throw new HttpException(error?.message, HttpStatus.BAD_REQUEST);
    }
  }

  async getRoleByName(name: string): Promise<RoleEntity> {
    const role = await this.rolesRepository.findOne({ name });
    return role;
  }

  async getRoleById(id: string): Promise<RoleEntity> {
    const role = await this.rolesRepository.findOne(id);
    return role;
  }
}
