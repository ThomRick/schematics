import { INestApplicationContext } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TaskService } from './task.service';

async function bootstrap() {
  const application: INestApplicationContext = await NestFactory.createApplicationContext(AppModule);
  const taskService = application.get(TaskService);
  console.log(taskService.run());
}
bootstrap();