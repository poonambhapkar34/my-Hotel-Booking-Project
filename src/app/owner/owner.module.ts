import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { SharedModule } from '../shared/shared.module';
import { HotelRegistrationComponent } from './hotel-registration/hotel-registration.component';

@NgModule({
  declarations: [
    OwnerComponent,
    LoginsuccessComponent,
    HotelRegistrationComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule
   
  ]
})
export class OwnerModule { }
