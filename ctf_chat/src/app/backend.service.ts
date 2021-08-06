import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
                    //
  private baseUrl = 'http://localhost:8082/api/users';

  constructor(private http: HttpClient) { }

  getUser(_email: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/$email`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(this.baseUrl, user);
  }

  updateUser(email: String, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${email}`, value);
  }

  getregister(): Observable<any>{
    return this.http.get(this.baseUrl);
  }

  getlogin(email: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/eamil/${email}`);
  }
}
