import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TodoEndpointService } from "./todo-endpoint.service";
import { Observable } from "rxjs";
import { Todo, TodoResponse } from "../../../models";

@Injectable()

export class TodosService {
  constructor(
    private _http: HttpClient,
    private _endpoint: TodoEndpointService
  ) { }

  getAllTodos(): Observable<TodoResponse> {
    return this._http.get<TodoResponse>(this._endpoint.getTodos());
  }

  createTodo(todoText :string , userID : number ) : Observable<Todo>{
    const payload: Partial<Todo> = {
      todo: todoText,
      completed: false,
      userId : userID
    };

    return this._http.post<Todo>(this._endpoint.postTodo(), payload, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  updateTodo(id: number, changes: Partial<Todo>): Observable<Todo> {
    return this._http.put<Todo>(this._endpoint.updateTodo(id), changes, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  deleteTodo(id:number ) : Observable<Todo>{
    return this._http.delete<Todo>(this._endpoint.deleteTodo(id));
  }
}
