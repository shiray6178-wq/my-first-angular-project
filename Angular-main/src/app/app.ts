import { Component, computed, signal } from '@angular/core';
import { Header } from './header/header'; // או ./header/header.component
import { User } from './user/user';       // או ./user/user.component
import { USERS } from './user/users_fake_data';
import { Tasks } from './tasks/tasks';     // או ./tasks/tasks.component
import { TASKS } from './tasks/task/task_fake_data';
@Component({
  imports: [Header, User, Tasks],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-first-app');
  users = signal(USERS);
  tasks = signal(TASKS);
  selectedUserId = signal<number | null>(null);
  selectedUser = computed(
    () => this.users().find((user) => user.id === this.selectedUserId()) ?? null,
  );

  onUserSelected(id: number) {
    this.selectedUserId.set(id);
  }

}