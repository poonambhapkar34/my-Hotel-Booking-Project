import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { AdminComponent } from './admin.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'signUp', component:SignUpComponent},
  { path : 'signIn', component:SignInComponent},
  { path:'loginsuccess',component:LoginsuccessComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
