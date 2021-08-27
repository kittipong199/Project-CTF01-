import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataUser } from '../data-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  private loginUrl = 'http://localhost:8082/api/authenticate';

  
  constructor(private http: HttpClient) { }

  

  loginUserByEmail(email: string, password: string, datauser: DataUser): Observable<DataUser>{
    return this.http.post<DataUser>(`${this.loginUrl}/${email},/${password}`, datauser);
    
    
    
  }
}
