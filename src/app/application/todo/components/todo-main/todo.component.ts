import { Component, OnInit } from "@angular/core";
import { Todo } from "../../../../models";
import { TodosService } from "../../services";

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})


export class TodoComponent implements OnInit{
  todos: Todo[] = [];
  newTodo: any;
  loading =  true;

  constructor(
    private _todo: TodosService
  ) { }

  ngOnInit(): void {
      this._fetchAllTodos();
  }

  private _fetchAllTodos(){
    this._todo.getAllTodos().subscribe({
        next:(todosResponse)=>{
            this.todos = todosResponse.todos;
            this.loading = false;
        },
        error:(err)=>{
          console.log('Failed to fetch the todos',err);
          this.loading = false;
        }
      })
  }

  addTodo() {
    console.log("Add todo clicked");
  }

  toggleTodo(todo: any) {

  }
  removeTodo(index: number) {

  }
}
