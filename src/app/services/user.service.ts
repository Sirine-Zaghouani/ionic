import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8081/api/user'; 

  constructor(private http: HttpClient) { }

  register(user: User): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/register`, user);
  }

  login(user: User): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/login`, user);
  }
}
