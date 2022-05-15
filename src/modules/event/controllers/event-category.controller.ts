import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EventCategoryService } from '../services/event-category.service';
import { EventCategoryDto } from '../dto/event-category.dto';
import { CreateEventCategoryDto } from '../dto/request/create-event-category.dto';

@Controller('categories')
@ApiTags('categories')
export class EventCategoryController {
  constructor(private readonly categoryService: EventCategoryService) {}

  @Get()
  async getAllCategories(): Promise<EventCategoryDto[]> {
    return await this.categoryService.getAll();
  }

  @Post()
  async create(@Body() dto: CreateEventCategoryDto): Promise<EventCategoryDto> {
    return await this.categoryService.create(dto);
  }
}
