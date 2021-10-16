import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TackService {
  API: string = 'http://localhost:3000/tack';

  constructor(private http: HttpClient) {}
  getTacks(): Observable<any> {
    return this.http.get<any>(this.API);
  }
  get(id: any): Observable<any> {
    return this.http.get<any>(`${this.API}/${id}`);
  }
  addTack(item: any): Observable<any> {
    return this.http.post<any>(this.API, item);
  }
  removeTack(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API}/${id}`);
  }
  updateTack(item: any): Observable<any> {
    return this.http.put<any>(`${this.API}/${item.id}`, item)
  }
}
