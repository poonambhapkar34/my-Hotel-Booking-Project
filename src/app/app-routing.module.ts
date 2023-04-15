import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginsuccessComponent } from './admin/loginsuccess/loginsuccess.component';
import { HomeComponent } from './home/home.component';
import { OwnerComponent } from './owner/owner.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [ 
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  // {path :'admin',component:AdminComponent},
  // {path :'owner',component:OwnerComponent},
  // {path: 'user', component:UserComponent},
  { path:'signUp',component:SignUpComponent},
  {path : 'signIn', component:SignInComponent},
 // {path:'loginsuccess',component:LoginsuccessComponent},


  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'owner', loadChildren: () => import('./owner/owner.module').then(m => m.OwnerModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
