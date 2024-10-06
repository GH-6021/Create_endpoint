import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlarmModule } from './alarm/alarm.module';
import { MoviesModule } from './movies/movies.module';
import { TodoModule } from './todo/todo.module';


@Module({
  imports: [AlarmModule, MoviesModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
