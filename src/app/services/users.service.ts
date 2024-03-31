import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UsersInterface} from "../interfaces/users.interface";
import {apiUrl} from "../app.config";
import {PersistanceService} from "../shared/services/persistance.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private perService: PersistanceService) { }

  getUsers(): Observable<UsersInterface[]>{
    return this.http.get<UsersInterface[]>(`${apiUrl}api/users`)
  }
}
