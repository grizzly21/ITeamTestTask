import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {UserAssessmentsInterface} from "../interfaces/user-assessments";
import {apiUrl} from "../app.config";
import {GraphReportInterface, GraphReportMappedInterface} from "../interfaces/graph-report";

@Injectable({
  providedIn: 'root'
})
export class UserAssessmentService {

  constructor(private http: HttpClient) { }

  getUserAssessment(): Observable<UserAssessmentsInterface[]> {
    return this.http.get<UserAssessmentsInterface[]>(`${apiUrl}api/userassessments`)
  }

  getUserAssessmentGraph(id: number): Observable<GraphReportMappedInterface[]> {
    return this.http.get<GraphReportInterface>(`${apiUrl}api/userassessments/graph`, {params:{id: id}}).pipe(
      map((res: GraphReportInterface) => {
        return Object.entries(res.data).map(([label, y]): GraphReportMappedInterface => ({label, y}))
      })
    )
  }
}
