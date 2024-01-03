// user.component.ts
import { Component } from '@angular/core';
import { ApiService } from '../api.service'; // Подставьте путь к вашему сервису
import { User } from '../app.component'; // Подставьте путь к вашей модели пользователя

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
  standalone: true,
  styleUrls: ['user.component.css']
})
export class UserComponent {
  constructor(private apiService: ApiService) { }

  addUser() {
    const userData = {
      firstname: 'Homer',
      lastname: 'Simpson',
      email: 'homer.s@gmail.com',
      age: 52,
      gender: 'male'
    };

    // this.apiService.addUser(userData)
    //   .subscribe((response: User) => {
    //     console.log('Пользователь добавлен:', response);
    //   }, (error: any) => {
    //     console.error('Ошибка:', error);
    //   });
    this.apiService.addUser(userData)
      .subscribe({
        next: (response: User) => {
          console.log('Пользователь добавлен:', response);
        },
        error: (error: any) => {
          console.error('Ошибка:', error);
        },
         complete: () => {
           console.log('Операция завершена');
         }
      });

  }

  // Аналогично, вызовите другие методы сервиса для других действий
}

