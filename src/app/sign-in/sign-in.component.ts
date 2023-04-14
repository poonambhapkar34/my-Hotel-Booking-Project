import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  loginform!: FormGroup;
  

  constructor(private fb:FormBuilder){

  }
  ngOnInit(){
    this.login();
}
 login(){
 this.loginform = this.fb.group({
  username:['',[Validators.required, Validators.minLength(2),Validators.pattern("[a-zA-Z]*$")]],
  password:['',[Validators.required]]
 })
 }
 submit(){
  console.log('login',this.loginform.value);
  
 }
}