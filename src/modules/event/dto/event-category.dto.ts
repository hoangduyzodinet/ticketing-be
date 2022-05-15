import { IsString } from 'class-validator';

export class EventCategoryDto {
  @IsString()
  id!: string;

  @IsString()
  name!: string;
}
