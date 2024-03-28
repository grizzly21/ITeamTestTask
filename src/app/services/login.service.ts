import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserInterface} from "../interfaces/user";
import {apiUrl} from "../app.config";
import {LoginDataInterface} from "../interfaces/login-data";

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {
  }

  login(value: LoginDataInterface): Observable<UserInterface> {
    return this.http.post<UserInterface>(`${apiUrl}api/login`, value)
  }
}
