import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
  constructor( private router :Router, private dataservice:DataServiceService){

  }
  journey(Data:any){
    this.dataservice.endPoint = Data;
    console.log("service endpoint", this.dataservice.endPoint);
    
    if( Data === 'admin'){
      this.router.navigateByUrl('/admin')
    }
    else if( Data === 'owner'){
      this.router.navigateByUrl('/owner')
    }
    else{
      this.router.navigateByUrl('/user')
    }
  }

//   city(){
//  console.log(' this.cities', this.cities);
   
//   }
}
