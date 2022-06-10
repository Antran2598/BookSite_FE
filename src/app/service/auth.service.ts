import { User } from "../model/user";

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
const url = `${environment.apiBaseUrl}`;
@Injectable({
  providedIn: "root",
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private http: HttpClient) {}
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  login(username: string, password: string): Observable<any> {
    return this.http.post(
      url + "signin",
      {
        username,
        password,
      },
      httpOptions
    );
  }
  register(
    username: string,
    password: string,
    role: ["USER"]
  ): Observable<any> {
    return this.http.post(
      url + "signup",
      {
        username,
        password,
        role,
      },
      httpOptions
    );
  }
  
  
}
