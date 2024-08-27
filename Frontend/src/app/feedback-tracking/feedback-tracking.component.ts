import { Component, OnInit } from '@angular/core';
import { ReportingService } from '../reporting.service';

@Component({
  selector: 'app-feedback-tracking',
  templateUrl: './feedback-tracking.component.html'
})
export class FeedbackTrackingComponent implements OnInit {

  feedbackTracking: any[] = [];

  constructor(private ReportingService: ReportingService) { }

  ngOnInit(): void {
    this.ReportingService.getFeedbackAverage().subscribe(data => {
      this.feedbackTracking = data;
    });
  }
}
