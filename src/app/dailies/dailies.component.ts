import {Component} from '@angular/core';
import {DailiesService} from '../services/dailies.service';

@Component({
  selector: 'app-dailies',
  templateUrl: './dailies.component.html',
  styleUrls: ['./dailies.component.scss']
})
export class DailiesComponent {
  dailies: Daily[];
  input_text: string;

  constructor(private dailyService: DailiesService) {
    this.dailies = this.dailyService.getItems();
  }

  addItem() {
    if (this.input_text === '') {
      return;
    }
    const item = {title: this.input_text, lastCompleted: new Date()};
    this.dailies = this.dailyService.save(item);
    this.input_text = '';
  }

  markAsCompleted(item) {
    this.dailies = this.dailyService.markAsCompleted(item);
  }

  isCompleted(item) {
    if (!item) {
      return false;
    }
    return new Date(item).toDateString() === new Date().toDateString();
  }
}
