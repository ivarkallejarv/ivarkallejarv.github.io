import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {
  storage = localStorage;
  StorageName = 'todo_items';

  constructor() {
  }

  getItems() {
    const items = this.storage.getItem(this.StorageName);
    return JSON.parse(items) || [];
  }

  save(item: Todo) {
    const items = this.getItems();
    this.storage.setItem(this.StorageName, JSON.stringify([...items, item]));
    return this.getItems();
  }

  markAsCompleted(item: Todo) {
    const items = this.getItems().map((i) => {
      if (i.title === item.title) {
        i.isCompleted = !i.isCompleted;
      }
      return i;
    });
    this.storage.setItem(this.StorageName, JSON.stringify(items));
    return this.getItems();
  }

  delete(item: Todo) {
    const items = this.getItems().filter((i) => i.title !== item.title);
    this.storage.setItem(this.StorageName, JSON.stringify(items));
    return this.getItems();
  }
}
