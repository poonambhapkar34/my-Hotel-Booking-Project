import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import {MatSnackBar,  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,MatSnackBarConfig} from '@angular/material/snack-bar';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  loginform!: FormGroup;
  getApiData: any;
  endPoint : any;
  horizontalPosition : MatSnackBarHorizontalPosition= 'start';
  verticalPosition : MatSnackBarVerticalPosition = 'bottom'

  constructor(private fb: FormBuilder,
     private dataservice: DataServiceService, private router: Router,
     private snackBar: MatSnackBar) {

  }
  ngOnInit() {
   this.endPoint = this.dataservice.endPoint;
   console.log(" this.endPoint ", this.endPoint );
   
    this.login();
  }
  login() {
    this.loginform = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z]*$")]],
      password: ['', [Validators.required]]
    })
  }

  async submit() {
    console.log('login', this.loginform.value);
    this.getApiData = await this.dataservice.getApiCall(this.endPoint).toPromise();

    let loginData = this.getApiData.find((ele: any) => {
      return ele.name === this.loginform.value.name && ele.Password === this.loginform.value.password
    })
    if (loginData) {
      this.dataservice.signinOrSignUp = 'signIn';
      
      if (this.endPoint == 'admin') {
       // alert('login successfully');
       const panelCss = new MatSnackBarConfig();
       panelCss.verticalPosition = 'top';
       this.snackBar.open('Login successfully','Close' , panelCss);
        this.router.navigateByUrl('/admin/loginSuccess')
      }
      else if (this.endPoint == 'owner') {
        alert('login successfully');
        //this.dataservice.ownerName = this.loginform.value.name;
        this.dataservice.ownerName = 'poonam';
        this.router.navigateByUrl('/owner/loginSuccess')
      }
      else {
        this.router.navigateByUrl('/user/loginSuccess')
      }
    }
    else {
      alert('User not Fount')
      this.loginform.reset();
      this.router.navigateByUrl('/signIn');
    }
  }
  back(){
    if (this.endPoint == 'admin') {
      this.router.navigateByUrl('/admin')
    }
    else if (this.endPoint == 'owner') {
      this.router.navigateByUrl('/owner')
    }
    else {
      this.router.navigateByUrl('/user')
    }
  }
}