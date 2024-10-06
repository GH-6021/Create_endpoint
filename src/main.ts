import { NestFactory } from '@nestjs/core';
import { TodoModule } from './todo/todo.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const todo = await NestFactory.create(TodoModule);
  todo.useGlobalPipes(new ValidationPipe());
  await todo.listen(3000);
}
bootstrap();
