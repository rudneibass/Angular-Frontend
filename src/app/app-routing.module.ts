import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';

import { UserComponent } from './views/user/user.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';
import { LoginComponent } from './account/login/login.component';
import { AuthGuard } from './account/shared/auth.guard';
import { AuthenticationComponent } from './views/authentication/authentication.component';
import { SendFeedbackCreateComponent } from './components/SendFeedback/send-feedback-create/send-feedback-create.component';
import { SendFeedbackComponent } from './views/send-feedback/send-feedback.component';
import { SendFeedbackUpdateComponent } from './components/SendFeedback/send-feedback-update/send-feedback-update.component';
import { ReceiveFeedbackReadComponent } from './components/ReceiveFeedback/receive-feedback-read/receive-feedback-read.component';
import { ReceiveFeedbackUpdateComponent } from './components/ReceiveFeedback/receive-feedback-update/receive-feedback-update.component';


const routes: Routes =
  [
    {
      path: "",
      component: HomeComponent,
      children: [
        { path: "users", component: UserComponent },
        { path: "users/create", component: UserCreateComponent },
        { path: "users/update/:id", component: UserUpdateComponent },
        { path: "users/delete/:id", component: UserDeleteComponent },
        { path: 'send-feedback', component: SendFeedbackComponent },
        { path: 'feedback/create', component: SendFeedbackCreateComponent },
        { path: 'feedback/update/:id', component: SendFeedbackUpdateComponent },
        { path: 'receive-feedback', component: ReceiveFeedbackReadComponent },
        { path: 'receive-feedback/update/:id', component: ReceiveFeedbackUpdateComponent }
      ],
      canActivate: [AuthGuard]
    },

    {
      path: '',
      component: AuthenticationComponent,
      children: [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'login', component: LoginComponent }
      ]
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
