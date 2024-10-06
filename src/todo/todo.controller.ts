import { Controller, Param, Get, Post, Body, ParseIntPipe } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './todoDto';

@Controller('/todo')
export class TodoController {
    private todoService:TodoService;
    constructor(todoService:TodoService){
        this.todoService = todoService;
    }

    @Get('/take')
    getAllTodo(@Body() todo:any): TodoDto{
        console.log('모든 todo 가져오기');
        return todo;
    }

    @Post('/new')
    addNewTodo(@Body() newTodo:TodoDto[]){
        console.log('todo 작성');
        //const createdTodo = this.todoService.addNewTodo(newTodo);
        //return createdTodo;
        return newTodo.map(todo => this.todoService.addNewTodo(todo));
    }

    @Get('/take/:id')
    getTodo(@Param('id') id:string){
        console.log(`[${id}]번 todo 가져오기`);
        return this.todoService.getTodo(id);
    }

}
