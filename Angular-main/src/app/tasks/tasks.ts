import { Component, computed, input } from '@angular/core';
import { TaskModel, UserModel } from '../models';
import { Task } from './task/task';

@Component({
  imports: [Task],
  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
})
export class Tasks {
  user = input.required<UserModel>();
  tasks = input<TaskModel[]>([]);
  userTasks = computed(() =>
    this.tasks().filter((task) => task.userId === this.user().id),
  );
}
