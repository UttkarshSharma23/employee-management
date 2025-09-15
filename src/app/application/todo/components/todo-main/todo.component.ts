import { Component, OnInit } from "@angular/core";
import { Todo } from "../../../../models";
import { TodosService } from "../../services";
import { IconsService } from "../../../../shared";

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})


export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  newTodoText: string = '';
  loading = true;

  editingTodoId: number | null = null;
  editText: string = '';

  constructor(
    private _todo: TodosService,
    public icons: IconsService
  ) { }

  ngOnInit(): void {
    this._fetchAllTodos();
  }

  // NOTE : Getting All Todos
  private _fetchAllTodos() {
    this._todo.getAllTodos().subscribe({
      next: (todosResponse) => {
        this.todos = todosResponse.todos;
        this.loading = false;
      },
      error: (err) => {
        console.log('Failed to fetch the todos', err);
        this.loading = false;
      }
    })
  }

  // NOTE : Fetching All Todos
  addTodo() {
    if (!this.newTodoText.trim()) return;

    let userID = 25;
    this._todo.createTodo(this.newTodoText, userID).subscribe({
      next: (newTodo) => {
        console.log('New Todo created:', newTodo);
        this.todos.unshift(newTodo);
        this.newTodoText = '';
      },
      error: (err) => console.error('Failed to add todo', err)
    });
  }

  //NOTE : Updating the Todo
  toggleCompleted(completedTodo: Todo) {
    const updated = { completed: !completedTodo.completed };
    this._todo.updateTodo(completedTodo.id, updated).subscribe({
      next: (res) => (completedTodo.completed = res.completed),
      error: (err) => console.error('Failed to update todo', err),
    });
  }

  updateTodo(updatedTodo: Todo) {
    if (!updatedTodo.todo.trim()) return; // prevent empty values
    this._todo.updateTodo(updatedTodo.id, { todo: updatedTodo.todo }).subscribe({
      next: (res) => {
        updatedTodo.todo = res.todo; // reflect updated text
      },
      error: (err) => console.error('Failed to update todo', err),
    });
  }

   startEdit(todo: Todo) {
    this.editingTodoId = todo.id;
    this.editText = todo.todo;
  }

   saveEdit(todo: Todo) {
    if (!this.editText.trim()) return;
    this._todo.updateTodo(todo.id, { todo: this.editText }).subscribe({
      next: (res) => {
        todo.todo = res.todo;
        this.cancelEdit();
      }
    });
  }

    cancelEdit() {
    this.editingTodoId = null;
    this.editText = '';
  }

  
// NOTE : Deleting the Todo
  removeTodo(index: number) {
    this._todo.deleteTodo(index).subscribe({
      next: () => {
        this.todos.splice(index, 1);
      },
      error: (err) => console.error('Failed to delete todo', err),
    });
  }

}
