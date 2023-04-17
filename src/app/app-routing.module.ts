import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginsuccessComponent } from './admin/loginsuccess/loginsuccess.component';
import { HomeComponent } from './home/home.component';
import { OwnerComponent } from './owner/owner.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';

const routes: Routes = [ 
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  { path:'signUp',component:SignUpComponent},
  {path : 'signIn', component:SignInComponent},
  { path : 'hotelDetails' , component: HotelDetailsComponent },



  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'owner', loadChildren: () => import('./owner/owner.module').then(m => m.OwnerModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
