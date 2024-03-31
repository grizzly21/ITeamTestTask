import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {CanvasJSAngularChartsModule} from "@canvasjs/angular-charts";
import {GraphReportMappedInterface} from "../../interfaces/graph-report";
import {Subscription} from "rxjs";
import {UserAssessmentService} from "../../services/user-assessment.service";
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [
    CanvasJSAngularChartsModule,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose
  ],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss'
})
export class GraphComponent implements OnInit, OnDestroy {
  sub$!: Subscription
  chartOptions = {}

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {id: number, title: string },
    private userAssessment: UserAssessmentService
    ) {
  }

  ngOnInit(): void {
    this.initializeChartData()
  }

  initializeChartData(): void{
    this.sub$ = this.userAssessment.getUserAssessmentGraph(this.data.id).subscribe({
      next: (response: GraphReportMappedInterface[]) => {
        this.chartOptions = {
          title: {text: `${this.data.title} Report`},
          axisY: {suffix: '%'},
          data: [{
            type: "bar",
            dataPoints: response
          }]
        }
      },
      error: err => console.log(err)
    })
  }

  ngOnDestroy(): void {
    if (this.sub$) this.sub$.unsubscribe()
  }
}
