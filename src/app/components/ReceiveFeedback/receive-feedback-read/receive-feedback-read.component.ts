import { Component, OnInit } from '@angular/core';
import { IReceiveFeedback } from '../receivefeedback.model';
import { ReceivefeedbackService } from '../receivefeedback.service';


@Component({
  selector: 'app-receive-feedback-read',
  templateUrl: './receive-feedback-read.component.html',
  styleUrls: ['./receive-feedback-read.component.css']
})
export class ReceiveFeedbackReadComponent implements OnInit {

  feedbacks!: IReceiveFeedback[];
  displayedColumns = ['name', 'feedback_date', 'final_feedback', 'action']

  constructor(private receivefeedbackService:ReceivefeedbackService) { 
    
  }

  ngOnInit(): void {
    this.receivefeedbackService.read().subscribe(result => {
      this.feedbacks = result;
      console.log(this.feedbacks);
    }) 
  }
}
