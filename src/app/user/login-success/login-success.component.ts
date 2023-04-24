import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})
export class LoginSuccessComponent {
  endPoint: any;
  signInOrSignUp: any;
  ownerName: any;
  constructor(  private dataservice: DataServiceService,
    private router :Router){}
  
    ngOnInit(){
  
    this.endPoint = this.dataservice.endPoint;
    this.signInOrSignUp =  this.dataservice.signinOrSignUp;
    this.ownerName = this.dataservice.ownerName;
   
    console.log('this.signInOrSignUp --',this.signInOrSignUp, this.ownerName ,this.endPoint);
   
    }
  back(){
    if(this.signInOrSignUp =='signIn'){
      this.router.navigateByUrl('/signIn');
    }
    else{
      this.router.navigateByUrl('/signUp')
    }
  }
  viewHotelList(){
    this.router.navigateByUrl('/hotelDetails')
  }
}
