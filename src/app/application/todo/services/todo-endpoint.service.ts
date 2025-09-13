import { Injectable } from "@angular/core";

@Injectable()

export class TodoEndpointService {
  baseEndPoint : string  = 'https://dummyjson.com';

  getTodos() : string {
    return `${this.baseEndPoint}/todos`;
  }
}
