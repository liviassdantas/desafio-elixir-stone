import { Controller, Get, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { ShoppingListService } from './shopping-list.service';
import { ShoppingListDto } from './dto/shopping-list.dto';
import { RequestListDto } from './dto/request-list.dto';

@Controller('shopping-list')
export class ShoppingListController {
  constructor(private readonly shoppingListService: ShoppingListService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  ordersList(@Body() requestListDto: RequestListDto) {
    return this.shoppingListService.ordersList(requestListDto);
  }

}
