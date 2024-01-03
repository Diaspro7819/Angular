//app.component.ts
import {Component, NgIterable} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss'
})
export class AppComponent {
  title = 'new_train';
  users: (NgIterable<unknown> & NgIterable<any>) | undefined | null;
}
export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  gender: string;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    age: number,
    gender: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.gender = gender;
  }
}

