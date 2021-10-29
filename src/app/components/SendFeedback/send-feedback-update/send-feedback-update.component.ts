import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../user/user.model';
import { UserService } from '../../user/user.service';
import { ISendFeedback } from '../sendfeedback.model';
import { SendfeedbackService } from '../sendfeedback.service';

@Component({
  selector: 'app-send-feedback-update',
  templateUrl: './send-feedback-update.component.html',
  styleUrls: ['./send-feedback-update.component.css']
})
export class SendFeedbackUpdateComponent implements OnInit {

  feedback!: ISendFeedback;
  users!: User[];

  constructor(
    private sendfeedbackService: SendfeedbackService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userService.read().subscribe(result =>{
      this.users = result;     
      const id = this.route.snapshot.paramMap.get('id') || ``;
      this.sendfeedbackService.readById(id).subscribe(result => {
      this.feedback = result;
   
      })

    })
  }

  updateFeedback(): void {
    this.sendfeedbackService.update(this.feedback).subscribe(() =>{
      this.sendfeedbackService.showMessage('Cadastro atualizado com sucesso!');
      this.router.navigate(['/send-feedback']);
    })
  }

  cancel(): void {
    this.router.navigate(['/send-feedback']);
  }
}
