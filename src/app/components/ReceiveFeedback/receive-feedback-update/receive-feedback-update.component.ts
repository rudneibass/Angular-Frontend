import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISendFeedback } from '../../SendFeedback/sendfeedback.model';
import { ReceivefeedbackService } from '../receivefeedback.service';

@Component({
  selector: 'app-receive-feedback-update',
  templateUrl: './receive-feedback-update.component.html',
  styleUrls: ['./receive-feedback-update.component.css']
})
export class ReceiveFeedbackUpdateComponent implements OnInit {

  feedback!: ISendFeedback;

  constructor( 
    private receivefeedback: ReceivefeedbackService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || ``;
    this.receivefeedback.readById(id).subscribe(result => {
    this.feedback = result; 
  })
  }

  cancel(): void {
    this.router.navigate(['/receive-feedback']);
  }
}
