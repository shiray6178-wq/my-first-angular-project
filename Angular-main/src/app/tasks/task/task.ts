import { Component, input, signal } from '@angular/core';
import { TaskModel } from '../../models';

@Component({
  imports: [],
  selector: 'app-task',
  styleUrl: './task.css',
  templateUrl: './task.html',
})
export class Task {
  task = input.required<TaskModel>();
}
