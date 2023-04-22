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
  hotelDetailsByOwner: any=[];
 hotelEndPoint= 'hotelDetails';
  inputBoxValue:any;
  tableHeadings =  [ "Hotel Name", "Owner Name","Hotel Contact No",
  "Hotel Address",  "Hotel Email", "Rooms", "Speciality","Delete","Edit"];
  hotelDetailsById: any;
 
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
  async viewMyHotelList(){

 
  this.hotelDetails = await this.dataservice.getApiCall(this.hotelEndPoint).toPromise();
  console.log(" this.hotelDetails ", this.hotelDetails );
  
  if(this.hotelDetails){
    this. hotelDetailsByOwner = [];
    this.hotelDetails.forEach((element:any) => {
      let name = element.ownerName?.toLowerCase();
      console.log(name);
      let signInName = this.ownerName?.toLowerCase() ;
      if(name == signInName ){
        this.hotelDetailsByOwner.push(element);
      }
    });
    console.log('this.hotelDetailsByOwner',this.hotelDetailsByOwner);
    if(this.hotelDetailsByOwner.length == 0){
      alert('Hotels Not found....')
    }
  }
 
  
    }

   viewAllHotelList(){
   this.router.navigateByUrl('/hotelDetails');
  }
  async delete(id:number){
    await this.dataservice.deleteApiCall(this.hotelEndPoint, id).toPromise();
    this.viewMyHotelList();
  }
  async edit(id:number){
    this.dataservice.editId = id;
    this.dataservice.editJourney = true;
   
   this.hotelDetailsById =  await this.dataservice.getApiCall(this.hotelEndPoint, id).toPromise();
     console.log('  this.hotelDetailsById-->',  this.hotelDetailsById);
     this.dataservice.hotelDetailsById =  this.hotelDetailsById ;
     this.router.navigateByUrl('/owner/hotelRegistration');
  }
}
