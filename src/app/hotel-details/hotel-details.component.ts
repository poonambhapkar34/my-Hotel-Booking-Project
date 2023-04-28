import { Component } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { CustomSnackbarComponent } from '../custom-snackbar/custom-snackbar.component';
@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent {

  hotelDetails: any;
  tableHeadings = [ "Hotel Name", "Owner Name","Hotel Contact No",
  "Hotel Address",  "Hotel Email", "Rooms", "Speciality"];
  endpoint!: string;
  hotelEndPoint = 'hotelDetails';
  inputBoxValue: any;

  constructor(private dataservice: DataServiceService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.endpoint = this.dataservice.endPoint;
    this.getHotelDetails();
  }

  async getHotelDetails() {
    this.hotelDetails = await this.dataservice.getApiCall(this.hotelEndPoint).toPromise();
    console.log('this.hotelDetails', this.hotelDetails);
  }

  async delete(id: number) {
    // await this.dataservice.deleteApiCall(this.hotelEndPoint, id).toPromise();
    // this.getHotelDetails();
    this.dialog.open(CustomSnackbarComponent, {
      minWidth: '200px',
      height:'100px',
     
    })
  }
  back() {
    if (this.endpoint == 'admin') {
      this.router.navigateByUrl('/admin/loginSuccess');
    }
    else if (this.endpoint == 'owner') {
      this.router.navigateByUrl('/owner/loginSuccess');
    }
    else {
      this.router.navigateByUrl('/owner/loginSuccess');
    }
  }
  bokNow(){
    this.router.navigateByUrl('/user/bookNow');
  }
}