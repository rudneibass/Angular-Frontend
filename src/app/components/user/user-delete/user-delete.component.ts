import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  user!: User;


  constructor(private userService: UserService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || ``
    this.userService.readById(id).subscribe(res => {
      this.user = res;
      console.log(this.user);
    })
  }

  changeIsAdmin(): void {
    this.user.admin = !this.user.admin;
  }

  deleteUser(): void {
    this.userService.delete(this.user.id).subscribe(() => {
      this.userService.showMessage("Cadastro excluido com sucesso!");
      this.router.navigate(["/users"]);
    });
  }

  cancel(): void {
    this.router.navigate(['/users']);
  }
}
