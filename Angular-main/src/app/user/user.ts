import { Component ,input, output} from '@angular/core';
import { UserModel } from '../models';


@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {
  user = input.required<UserModel>();
  selected = input(false);
  userClick = output<number>();

  onUserClick(){
    this.userClick.emit(this.user().id);
  }

}
