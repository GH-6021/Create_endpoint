import { Injectable } from '@nestjs/common';
import { TodoDto } from './todoDto';

@Injectable()
export class TodoService {
    private todoList:TodoDto[] = [];
    
    getAllTodo(){
        return this.todoList;
    }

    addNewTodo(todoDto:TodoDto):TodoDto{
        const id = (this.todoList.length + 1).toString();
        const newTodo:TodoDto = {
            id: id, 
            createDate: todoDto.createDate,
            title: todoDto.title,
            content: todoDto.content
        };
        this.todoList.push(newTodo);
        console.log('현재 todoList 상태:', this.todoList);
        return newTodo;
    }

    getTodo(id:string):TodoDto{
        console.log('현재 todoList 상태:', this.todoList);
        console.log('찾으려는 id:', id);
        return this.todoList.find(todo => todo.id === id);
    }
}
