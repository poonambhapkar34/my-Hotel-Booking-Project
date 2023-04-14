import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  showPassword: boolean= false;
 signUpForm! : FormGroup;
 passMatch: boolean = false;
  password: any;
  confirmPassword: any;
constructor(private fb :FormBuilder , private dataservice:DataServiceService){
 
}

ngOnInit(){
  this.signUp();
  
}
signUp(){
  this.signUpForm = this.fb.group({
    // name:['',[Validators.required]]
    name:['',[Validators.required,Validators.minLength(3),Validators.pattern('[A-Za-z]*')]],
    mobile:['',[ Validators.required, Validators.minLength(10),Validators.pattern('[0-9]*'),Validators.maxLength(10)]],
    Password:['',[Validators.required,Validators.minLength(8),Validators.pattern('[a-z0-9@#$-]*$')]],
    confirmPassword:['',[Validators.required]],
    TnC:   ['', [Validators.requiredTrue]],
    gender:[],
    email:['', [Validators.required]],
    city:['',[Validators.required]]

  })
}
submit(){
  let endpoint = 'admin';
  this.dataservice.postApiCall(endpoint,this.signUpForm.value).subscribe(response =>{})

  
  console.log(this.signUpForm.value);
  
}
visiblity(){
  this.showPassword = !this.showPassword;
}
passwordValidation(pass:any){
  this.password = pass.target.value;
  console.log('password',pass.target.value);
  
  if(this.password == this.confirmPassword  ){
    this.passMatch = false;
  }
  else{
   this.passMatch = true;
  }
}

confirmpasswordValidation(confirmpass:any){
  this.confirmPassword = confirmpass.target.value;
  console.log('confirm', confirmpass.target.value);
  
  if(this.password == this.confirmPassword  ){
    this.passMatch = false;
  }
  else{
   this.passMatch = true;
  }
}

}
