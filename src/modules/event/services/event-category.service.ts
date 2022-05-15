import { EventCategoryEntity } from './../domain/entities/eventCategory.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventCategoryDto } from '../dto/event-category.dto';
import { CreateEventCategoryDto } from '../dto/request/create-event-category.dto';

@Injectable()
export class EventCategoryService {
  constructor(
    @InjectRepository(EventCategoryEntity)
    private _eventCategoryRepository: Repository<EventCategoryEntity>,
  ) {}

  async getAll(): Promise<EventCategoryDto[]> {
    try {
      return await this._eventCategoryRepository.find();
    } catch (error) {
      throw new HttpException(error?.message, HttpStatus.BAD_REQUEST);
    }
  }

  async create(dto: CreateEventCategoryDto): Promise<EventCategoryDto> {
    try {
      const newCategoryEvent = this._eventCategoryRepository.create(dto);
      await this._eventCategoryRepository.save(newCategoryEvent);
      return newCategoryEvent;
    } catch (error) {
      throw new HttpException(error?.message, HttpStatus.BAD_REQUEST);
    }
  }
}
