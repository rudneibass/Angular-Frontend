import { Component, OnInit } from '@angular/core';
import { ISendFeedback } from '../sendfeedback.model';
import { SendfeedbackService } from '../sendfeedback.service';

@Component({
  selector: 'app-send-feedback-read',
  templateUrl: './send-feedback-read.component.html',
  styleUrls: ['./send-feedback-read.component.css']
})
export class SendFeedbackReadComponent implements OnInit {

  feedbacks!: ISendFeedback[];
  displayedColumns = ['name', 'feedback_date', 'final_feedback', 'action']

  constructor(private sendfeedbackService:SendfeedbackService) { 
    
  }

  ngOnInit(): void {
    this.sendfeedbackService.read().subscribe(result => {
      this.feedbacks = result;
      console.log(this.feedbacks);
    }) 
  }

}
