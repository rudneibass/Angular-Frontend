import { Component, OnInit } from '@angular/core';
import { SendfeedbackService } from '../sendfeedback.service';
import { Router } from '@angular/router';
import { ISendFeedback } from '../sendfeedback.model';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user.model';

@Component({
  selector: 'app-send-feedback-create',
  templateUrl: './send-feedback-create.component.html',
  styleUrls: ['./send-feedback-create.component.css']
})
export class SendFeedbackCreateComponent implements OnInit {

  feedback: ISendFeedback = {
    user_receiver: '',
    feedback_date: new Date(),
    points_improve: '',
    points_keep: '',
    final_feedback: ''
  }

users!: User[];

  constructor(
    private sendfeedbackService: SendfeedbackService, 
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void { 
    this.userService.read().subscribe(result =>{
      this.users = result;
      console.log(this.users)
    })
  }

  createFeedback() {
    this.sendfeedbackService.create(this.feedback).subscribe(() => {
      this.sendfeedbackService.showMessage("Cadastro realizado com sucasso!");
      this.router.navigate(['/send-feedback']);
    })


  }

  cancel() {
    this.router.navigate(['/send-feedback']);
  }
}
