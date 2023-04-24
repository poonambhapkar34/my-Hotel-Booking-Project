import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
import { BooknowComponent } from './booknow/booknow.component';
import { LoginSuccessComponent } from './login-success/login-success.component';

@NgModule({
  declarations: [
    UserComponent,
    BooknowComponent,
    LoginSuccessComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
