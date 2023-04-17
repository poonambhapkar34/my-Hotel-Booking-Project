import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  showPassword: boolean= false;
  showConfirmPassword: boolean= false;
  signUpForm! : FormGroup;
  passwordMatch: boolean = false;
  password: any;
  confirmPassword: any;
  confirmPasswordMatch: boolean = false;
  endPoint: any;
constructor(private fb :FormBuilder ,
  private router : Router, private dataservice:DataServiceService){
 
}

ngOnInit(){
 this.endPoint = this.dataservice.endPoint;
  this.signUp();
  
}
signUp(){
  this.signUpForm = this.fb.group({
    // name:['',[Validators.required]]
    name:['',[Validators.required,Validators.minLength(3),Validators.pattern('[A-Za-z]*')]],
    mobile:['',[ Validators.required, Validators.minLength(10),Validators.pattern('[0-9]*'),Validators.maxLength(10)]],
    Password:['',[Validators.required,Validators.minLength(8),Validators.pattern('[A-Za-z0-9]*$')]],
    confirmPassword:['',[Validators.required]],
    TnC:   ['', [Validators.requiredTrue]],
    gender:[],
    email:['', [Validators.required]],
    city:['',[Validators.required]]

  })
  
}
submit(){
  
  this.dataservice.postApiCall(this.endPoint,this.signUpForm.value).subscribe(response =>{})
  
  this.dataservice.signinOrSignUp = 'signUp';

  if (this.endPoint == 'admin') {
    this.router.navigateByUrl('/admin/loginSuccess')
  }
  else if (this.endPoint == 'owner') {
    this.router.navigateByUrl('/owner/loginSuccess')
  }
  else {
    this.router.navigateByUrl('/user/loginSuccess')
  }
  
}
visiblity(){
  this.showPassword = !this.showPassword;
}
passwordValidation(pass:any){
  this.password = pass.target.value;
  console.log('password',pass.target.value);
  
  if(this.password == this.confirmPassword  ){
    this.passwordMatch = false;
  }
  else{
   this.passwordMatch = true;
  }
}

confirmpasswordValidation(confirmpass:any){
  this.confirmPassword = confirmpass.target.value;
  console.log('confirm', confirmpass.target.value);
  
  if(this.password == this.confirmPassword  ){
    this.passwordMatch = false;
  }
  else{
   this.passwordMatch = true;
  }
}
back(){
this.router.navigateByUrl('/signIn');
}

}
