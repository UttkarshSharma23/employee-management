import { Component, OnInit } from "@angular/core";
import { Todo } from "../../../../models";
import { IconsService } from "../../../../shared";
import { TodoStore } from "../../../store";
import { Observable } from "rxjs";

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})


export class TodoComponent implements OnInit {
  todos$!: Observable<Todo[]>;
  loading$!: Observable<boolean>;
  newTodoText = '';

  constructor(
    public icons: IconsService,
    public store : TodoStore
  ) { }

  ngOnInit(): void {
    this.todos$ = this.store.todos$;
    this.loading$ = this.store.loading$;
    this.store.loadTodos();
  }

  addTodo(todoId : number) {
    this.store.addTodo(this.newTodoText,todoId);
    this.newTodoText = '';
  }

  toggleCompleted(todo : Todo) {
    this.store.updateTodo(todo,  {completed : !todo.completed});
  }

  startEditing(todo: Todo) {
    this.store.startEdit(todo);
  }

  saveEdit(todo: Todo) {
    this.store.saveEdit(todo);
  }

  cancelEdit() {
    this.store.cancelEdit();
  }

  removeTodo(todo : Todo) {
    this.store.removeTodo(todo.id);
  }

  get editingTodoId() {
    return this.store.editingId;
  }

  get editText() {
    return this.store.currentEditText;
  }

  set editText(value: string) {
    this.store.currentEditText = value;
  }
}
