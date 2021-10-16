import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class CategoryService {
    API: string = 'http://localhost:3000/category';
  
    constructor(private http: HttpClient) {}
    getCategorys(): Observable<any> {
      return this.http.get<any>(this.API);
    }
    get(id: any): Observable<any> {
      return this.http.get<any>(`${this.API}/${id}`);
    }
    addCategory(item: any): Observable<any> {
      return this.http.post<any>(this.API, item);
    }
    removeCategory(id: number): Observable<any> {
      return this.http.delete<any>(`${this.API}/${id}`);
    }
    updateCategory(item: any): Observable<any> {
      return this.http.put<any>(`${this.API}/${item.id}`, item)
    }
  }
  