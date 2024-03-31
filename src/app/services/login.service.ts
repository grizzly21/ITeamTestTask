import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, of} from "rxjs";
import {AuthResponseInterface} from "../interfaces/auth-response";
import {apiUrl} from "../app.config";
import {LoginDataInterface} from "../interfaces/login-data";
import {PersistanceService} from "../shared/services/persistance.service";

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn$: Observable<boolean> = of(false);

  constructor(private http: HttpClient, private perService: PersistanceService) {
  }

  login(value: LoginDataInterface): Observable<void> {
    return this.http.post<AuthResponseInterface>(`${apiUrl}api/login`, value).pipe(
      map((res: AuthResponseInterface) => {
        this.perService.set('token', res.token)
        this.perService.set('role', res.role)
        this.isLoggedIn$ = of(true)
      })
    )
  }

  logout(): void {
    this.perService.remove('token')
    this.perService.remove('role')
    this.isLoggedIn$ = of(false)
  }
}
