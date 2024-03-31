import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UserAssessmentService} from "../../services/user-assessment.service";
import {Observable, Subscription} from "rxjs";
import {UserAssessmentsInterface} from "../../interfaces/user-assessments";
import {AsyncPipe, NgClass, NgForOf} from "@angular/common";
import {GraphComponent} from "../graph/graph.component";
import {GraphReportInterface} from "../../interfaces/graph-report";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    NgClass,
    GraphComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  assessmentReport$!: Observable<UserAssessmentsInterface[]>
  constructor(private userAssessment: UserAssessmentService, public dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.assessmentReport$ = this.userAssessment.getUserAssessment()
  }

  openDialogWithChartById(id: number, title: string): void {
    const dialogRef = this.dialog.open(GraphComponent, {
      data: {
        id: id,
        title: title
      },
      maxWidth: '700px',
      autoFocus: true
    })
  }

}
