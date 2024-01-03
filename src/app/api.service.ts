// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://crudcrud.com/api/820847a165ab4165b58fc327e71d2e5b';
  constructor(private http: HttpClient) { }
  // Получение списка данных
  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user`);
  }
  // Получение конкретной записи
  getUser(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user/${id}`);
  }
  // Добавление новой записи
  addUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/user`, user);
  }
  // Редактирование записи
  editUser(id: string, user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/user/${id}`, user);
  }
  // Удаление записи
  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/user/${id}`);
  }
}
