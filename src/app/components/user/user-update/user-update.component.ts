import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user!: User;

  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || ''
    this.userService.readById(id).subscribe(res => {
      this.user = res;

    }, (err) => {
      this.userService.showMessage(err);
      console.log(err)
    })
  }

  changeIsAdmin(): void {
    this.user.admin = !this.user.admin;
  }

  updateUser(): void {
    this.userService.update(this.user).subscribe(() => {
      this.userService.showMessage("Cadastro realizado com sucesso!");
      this.router.navigate(["/users"]);
    });
  }

  cancel(): void {
    this.router.navigate(['/users']);
  }
}
