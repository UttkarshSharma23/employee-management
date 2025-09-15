import { Injectable } from "@angular/core";

@Injectable()

export class TodoEndpointService {
  baseEndPoint : string  = 'https://dummyjson.com';

  getTodos() : string {
    return `${this.baseEndPoint}/todos`;
  }

  postTodo() : string {
    return `${this.baseEndPoint}/todos/add`;
  }

  updateTodo(id:number) : string {
    return `${this.baseEndPoint}/todos/${id}`;
  }

  deleteTodo(id : number) : string {
    return `${this.baseEndPoint}/toods/${id}`
  }
}
