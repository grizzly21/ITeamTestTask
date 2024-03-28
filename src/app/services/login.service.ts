import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {AuthResponseInterface} from "../interfaces/auth-response";
import {apiUrl} from "../app.config";
import {LoginDataInterface} from "../interfaces/login-data";
import {PersistanceService} from "./persistance.service";

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private perService: PersistanceService) {
  }

  login(value: LoginDataInterface): Observable<void> {
    return this.http.post<AuthResponseInterface>(`${apiUrl}api/login`, value).pipe(
      map((res: AuthResponseInterface) => {
        this.perService.set('token', res.token)
        this.perService.set('role', res.role)
      })
    )
  }
}
