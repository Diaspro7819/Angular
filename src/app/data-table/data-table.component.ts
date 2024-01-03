import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import {User} from "../app.component";

@Component({
  selector: 'app-data-table',
  templateUrl: 'data-table.component.html',
  styleUrls: ['data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  public users: any[] = [];

  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.apiService.getUsers().subscribe({
      next: (data: User[]) => {
        this.users = data.map((user: User) => ({ ...user, visible: false }));
      },
      error: (error: any) => {
        console.error('Ошибка при получении данных:', error);
      }
    });
  }

  toggleRowsVisibility(): void {
    // Переключаем видимость строк при клике на кнопку "Получить"
    this.users.forEach((user) => {
      user.visible = !user.visible; // Инвертируем текущее состояние видимости
    });
  }
}
