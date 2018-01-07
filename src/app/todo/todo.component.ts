import {Component} from '@angular/core';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  todo_items: Todo[];
  input_text: string;

  constructor(private todoService: TodoService) {
    this.todo_items = this.todoService.getItems();
  }

  addItem() {
    if (this.input_text === '') {
      return;
    }
    const item = {title: this.input_text, isCompleted: false};
    this.todo_items = this.todoService.save(item);
    this.input_text = '';
  }

  deleteTodo(item) {
    this.todo_items = this.todoService.delete(item);
  }

  markAsCompleted(item) {
    this.todo_items = this.todoService.markAsCompleted(item);
  }
}
