import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataUser } from './data-user';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  
                    //
  private baseUrl = 'http://localhost:8082/api/users';

  constructor(private http: HttpClient) { }

  getUser(): Observable<DataUser[]> {
    return this.http.get<DataUser[]>(`${this.baseUrl}`);
  }

  
  createUser(dataUser: DataUser): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, dataUser);
  }

  getUserById(id: number): Observable<DataUser>{
    return this.http.get<DataUser>(`${this.baseUrl}/${id}`);
  }

  updateUser(email: String, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${email}`, value);
  }

  
  loginUserByEmail(email: string, password: string, datauser: DataUser): Observable<DataUser>{
    return this.http.post<DataUser>(`${this.baseUrl}/${email},/${password}`, datauser);
    
    
    
  }
  
}
