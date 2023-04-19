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
  ownerName: any;
  hotelDetails: any;
  hotelDetailsByOwner: any = [];
 constructor(  private dataservice: DataServiceService,
  private router :Router){}

  ngOnInit(){

  this.endPoint = this.dataservice.endPoint;
  this.signInOrSignUp =  this.dataservice.signinOrSignUp;
  this.ownerName = this.dataservice.ownerName;
  console.log('this.signInOrSignUp --',this.signInOrSignUp );
 
  }
  back(){
    if(this.signInOrSignUp =='signIn'){
      this.router.navigateByUrl('/signIn');
    }
    else{
      this.router.navigateByUrl('/signUp')
    }
  }
  async viewMyHotelList(){

  this.hotelDetails = await this.dataservice.getApiCall('hotelDetails').toPromise();
  console.log(" this.hotelDetails ", this.hotelDetails );
  
  if(this.hotelDetails){
    this.hotelDetails.forEach((element:any) => {
      let name = element.ownerName?.toLowerCase();
      console.log(name);
      let signInName = this.ownerName?.toLowerCase() ;
      if(name==signInName ){
        this.hotelDetailsByOwner.push(element);
      }
    });
    console.log('this.hotelDetailsByOwner',this.hotelDetailsByOwner);
    if(this.hotelDetailsByOwner <= 0){
      alert('Hotels Not found....')
    }
  }
 
  
    }

   viewAllHotelList(){
   this.router.navigateByUrl('/hotelDetails')
  }
}
