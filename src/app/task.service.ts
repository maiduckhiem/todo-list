import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TackService {
  API: string = 'https://api-angular-1.herokuapp.com/api/task?categoryId';

  constructor(private http: HttpClient) {}
  getTask(): Observable<any> {
    return this.http.get<any>(this.API);
  }
  getTasks(id: any): Observable<any> {
    return this.http.get<any>(`${this.API}=${id}`);
  }
  addTasks(item: any): Observable<any> {
    return this.http.post<any>(this.API, item);
  }
  removeTasks(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API}/${id}`);
  }
  updateTasks(item: any): Observable<any> {
    return this.http.put<any>(`${this.API}/${item.id}`, item)
  }
}
