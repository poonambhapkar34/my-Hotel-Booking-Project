import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
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
  cities:any = [
    {cityName:"Pune",selected : false},
    {cityName:"Nashik",selected : false},
    {cityName:"Satara",selected : false},
    {cityName:"Kolhapur",selected : false}
  ]
constructor(private fb :FormBuilder ,
  private router : Router, private dataservice:DataServiceService){
 
}

ngOnInit(){
 this.endPoint = this.dataservice.endPoint;
  this.signUp();
  
}
get city1() {
  return this.signUpForm.controls["cities1"] as FormArray;
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
    city:['',[Validators.required]],
    cities1: this.fb.array([])

  })
  
}

onChange(event:any,i:number){
  const cities = (<FormArray>(
    this.signUpForm.get("cities")
  )) as FormArray;
 console.log(event.checked , i);
 if(event.checked){
  cities.push(new FormControl(event.source.value));

 }



 
}
submit(){
  console.log('cities',this.cities);
  
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
