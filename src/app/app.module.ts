import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './views/home/home.component';

import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { UserComponent } from './views/user/user.component';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserReadComponent } from './components/user/user-read/user-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';
import { LoginComponent } from './account/login/login.component';
import { AuthenticationComponent } from './views/authentication/authentication.component';

import { httpInterceptorProviders } from './account/http-interceptors';
import { SendFeedbackCreateComponent } from './components/SendFeedback/send-feedback-create/send-feedback-create.component';
import { SendFeedbackComponent } from './views/send-feedback/send-feedback.component';
import { SendFeedbackReadComponent } from './components/SendFeedback/send-feedback-read/send-feedback-read.component';
import { SendFeedbackUpdateComponent } from './components/SendFeedback/send-feedback-update/send-feedback-update.component';
import { ReceiveFeedbackReadComponent } from './components/ReceiveFeedback/receive-feedback-read/receive-feedback-read.component';
import { ReceiveFeedbackUpdateComponent } from './components/ReceiveFeedback/receive-feedback-update/receive-feedback-update.component'


registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    UserCreateComponent,
    UserComponent,
    UserReadComponent,
    UserUpdateComponent,
    UserDeleteComponent,
    LoginComponent,
    AuthenticationComponent,
    SendFeedbackCreateComponent,
    SendFeedbackComponent,
    SendFeedbackReadComponent,
    SendFeedbackUpdateComponent,
    ReceiveFeedbackReadComponent,
    ReceiveFeedbackUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule
  ],
  providers:
    [
      { provide: LOCALE_ID, useValue: 'pt-BR' },
      httpInterceptorProviders
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
