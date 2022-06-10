import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiServerUrl}/ManageUser/getAllUser`);
  }

  public addUsers(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiServerUrl}/ManageUser/addUser`, user);
  }

  public updateUsers(user: User): Observable<User>{
    return this.http.put<User>(`${this.apiServerUrl}/ManageUser/updateUser/${user.id}`, user);
  }

    public deleteUsers(userId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/ManageUser/delete/${userId}`);
  }
}
