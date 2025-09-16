import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Todo, TodoResponse } from "../../models";
import { TodosService } from "../todo/services";

@Injectable({ providedIn: 'root' })

export class TodoStore {
  private _todos$ = new BehaviorSubject<Todo[]>([]);
  readonly todos$: Observable<Todo[]> = this._todos$.asObservable();


  private _loading$ = new BehaviorSubject<boolean>(true);
  readonly loading$ = this._loading$.asObservable();

  private editingTodoId: number | null = null;
  private editText: string = '';

  constructor(private todoService: TodosService) { }

  // NOTE : Loading All Todos
  loadTodos() {
    this._loading$.next(true);

    this.todoService.getAllTodos().subscribe({
      next: (res : TodoResponse) =>{
          this._todos$.next(res.todos);
          this._loading$.next(false);
      },
      error: (err) => {
        console.error('Failed to load todos', err);
        this._loading$.next(false);
      }
    })
  }

  // NOTE :  Adding a new Todo
  addTodo(text : string, userId : number) {
    if(!text.trim()) return;

    this.todoService.createTodo(text,userId).subscribe({
      next : (newTodo) =>{
        this._todos$.next([newTodo, ...this._todos$.value]);
      },
      error: (err) => console.error('Failed to add todo', err)
    });
  }

  // NOTE : Deleting the Todo
  removeTodo(todoId : number) {
    const updatedList  = this._todos$.value.filter(t => t.id !== todoId);
    this._todos$.next(updatedList);
  }

  // NOTE : Updating the Todo
  updateTodo(todo : Todo , changes : Partial<Todo>){
    this.todoService.updateTodo(todo.id,changes).subscribe({
      next: (res) => {
        const updatedList  = this._todos$.value
        .map( t => t.id === todo.id ? {...t , ...res} : t
        );
        this._todos$.next(updatedList);
        this.cancelEdit();
      },
      error: (err) => console.error('Failed to update todo', err),
    })
  }

  // UI Helpers for Editing
   startEdit(todo: Todo) {
    this.editingTodoId = todo.id;
    this.editText = todo.todo;
  }

  saveEdit(todo: Todo) {
    if (!this.editText.trim()) return;
    this.updateTodo(todo, { todo: this.editText });
  }

  cancelEdit() {
    this.editingTodoId = null;
    this.editText = '';
  }

    get editingId() {
    return this.editingTodoId;
  }

  get currentEditText() {
    return this.editText;
  }

  set currentEditText(value: string) {
    this.editText = value;
  }

}
