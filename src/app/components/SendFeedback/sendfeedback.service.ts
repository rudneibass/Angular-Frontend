import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ISendFeedback } from './sendfeedback.model';
import { environment } from './../../../environments/environment';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SendfeedbackService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
   
  create(feedback: ISendFeedback ): Observable<ISendFeedback>{
    return this.http.post<ISendFeedback>(`${environment.api}/feedback`, feedback).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<ISendFeedback[]>{
    return this.http.get<ISendFeedback[]>(`${environment.api}/users/feedback/send`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  
  readById(id: string): Observable<ISendFeedback>{
    const url = `${environment.api}/users/feedback/send/${id}`;
    return this.http.get<ISendFeedback>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(feedback: ISendFeedback): Observable<ISendFeedback>{
    const url = `${environment.api}/users/feedback/send/${feedback.id}`;
    return this.http.put<ISendFeedback>(url, feedback).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage(e, true)
    return EMPTY;
  }

  showMessage(msg: string, isError: boolean = false){
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['mg-error'] : ['mg-success']
    })
}

}
