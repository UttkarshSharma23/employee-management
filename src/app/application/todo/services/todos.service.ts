import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TodoEndpointService } from "./todo-endpoint.service";
import { Observable } from "rxjs";
import { TodoResponse } from "../../../models";

@Injectable()

export class TodosService {
  constructor(
    private _http: HttpClient,
    private _endpoint: TodoEndpointService
  ) { }

  getAllTodos(): Observable<TodoResponse> {
    return this._http.get<TodoResponse>(this._endpoint.getTodos());
  }
}
