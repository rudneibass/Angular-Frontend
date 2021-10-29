import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:3333/users";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  readById(id: string): Observable<User> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(user: User): Observable<User[]> {
    const url = `${this.baseUrl}/${user.id}`;
    return this.http.put<User[]>(url, user).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: any): Observable<User> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<User>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    if (e.error.error) {
      this.showMessage(e.error.error, true);
    } else {
      this.showMessage("Atenção! Ocorreu um erro desconhecido.", true);
    }
    return EMPTY;
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['mg-error'] : ['mg-success']
    });
  }
}
