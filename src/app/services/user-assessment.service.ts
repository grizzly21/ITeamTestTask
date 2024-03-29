import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserAssessmentsInterface} from "../interfaces/user-assessments";
import {apiUrl} from "../app.config";

@Injectable({
  providedIn: 'root'
})
export class UserAssessmentService {

  constructor(private http: HttpClient) { }

  getUserAssessment(): Observable<UserAssessmentsInterface[]> {
    return this.http.get<UserAssessmentsInterface[]>(`${apiUrl}api/userassessments`)
  }

  getUserAssessmentGraph(): Observable<UserAssessmentsInterface> {
    return this.http.get<UserAssessmentsInterface>(`${apiUrl}api/userassessments/graph`)
  }
}
