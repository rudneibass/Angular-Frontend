import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISendFeedback } from '../SendFeedback/sendfeedback.model';
import { IReceiveFeedback } from './receivefeedback.model';


@Injectable({
  providedIn: 'root'
})
export class ReceivefeedbackService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string) {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  read(): Observable<IReceiveFeedback[]> {
    return this.http.get<IReceiveFeedback[]>(`${environment.api}/users/feedback/receive`);
  }
  
  readById(id: string): Observable<ISendFeedback >{
    const url = `${environment.api}/users/feedback/receive/${id}`;
    return this.http.get<ISendFeedback>(url);
  }
}
