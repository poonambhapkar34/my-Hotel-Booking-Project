import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent {
  endPoint: any;
  signInOrSignUp: any;

 constructor(  private dataservice: DataServiceService,
  private router :Router){}

  ngOnInit(){

  this.endPoint = this.dataservice.endPoint;

  console.log('this.signInOrSignUp --',this.signInOrSignUp );
 
  }

  viewHotelList(){
    this.router.navigateByUrl('/hotelDetails');
  }
  back(){
    this.signInOrSignUp =  this.dataservice.signinOrSignUp;
    if(this.signInOrSignUp =='signIn'){
      this.router.navigateByUrl('/signIn');
    }
    else{
      this.router.navigateByUrl('/signUp')
    }
  }
}
