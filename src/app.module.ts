import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@Module({
  imports: [ShoppingListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
