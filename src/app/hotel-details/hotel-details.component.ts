import { Component } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent {
  hotelDetails: any;
  tableHeadings = ["ownerName", "hotelAddress","hotelMobile", "hotelMenu"];
  constructor(  private dataservice: DataServiceService,
   ){}
  ngOnInit(){
    this.getHotelDetails();
  }

  async getHotelDetails(){
    let hotelEndPoint = 'hotelDetails';
    this.hotelDetails =  await this.dataservice.getApiCall(hotelEndPoint).toPromise();
    console.log('this.hotelDetails',this.hotelDetails);
    
  }

}
