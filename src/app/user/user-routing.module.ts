import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { BooknowComponent } from './booknow/booknow.component';
import { LoginSuccessComponent } from './login-success/login-success.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'bookNow', component: BooknowComponent },
  { path: 'loginSuccess', component: LoginSuccessComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
