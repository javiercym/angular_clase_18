import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private url = "https://jsonplaceholder.typicode.com/todos"
  
  constructor(private http:HttpClient) { }
  
  GetAll():Observable<string[]>{
    return this.http.get<string[]>(this.url);
  }
}
