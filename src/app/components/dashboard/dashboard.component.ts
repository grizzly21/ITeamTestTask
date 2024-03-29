import {Component, OnInit} from '@angular/core';
import {UserAssessmentService} from "../../services/user-assessment.service";
import {Observable} from "rxjs";
import {UserAssessmentsInterface} from "../../interfaces/user-assessments";
import {AsyncPipe, NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    NgClass
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  assessmentReport$!: Observable<UserAssessmentsInterface[]>
  constructor(private userAssessment: UserAssessmentService) {
  }
  ngOnInit(): void {
    this.assessmentReport$ = this.userAssessment.getUserAssessment()
  }
}
