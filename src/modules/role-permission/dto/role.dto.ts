import { AutoMap } from '@automapper/classes';
import { IsNotEmpty } from 'class-validator';

export class RoleDto {
  @AutoMap()
  @IsNotEmpty()
  id!: string;

  @AutoMap()
  @IsNotEmpty()
  name!: string;
}
