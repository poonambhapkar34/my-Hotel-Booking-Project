import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule
  ],
  exports:[
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule
  ]
})
export class SharedModule { }
