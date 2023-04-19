import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from 'src/app/data-service.service';
@Component({
  selector: 'app-hotel-registration',
  templateUrl: './hotel-registration.component.html',
  styleUrls: ['./hotel-registration.component.css']
})
export class HotelRegistrationComponent {
  hotelRegistrationForm!: FormGroup;
  show: boolean = false;
  getEndPoint: any;
  constructor(private formBuilder: FormBuilder,
     private dataServiceService : DataServiceService,
     private router: Router) {

  }
  ngOnInit() {
    this.hotelRegistration();

  }

  hotelRegistration() {
    this.hotelRegistrationForm = this.formBuilder.group({
      ownerName: ['', [Validators.required, Validators.minLength(5)]],
      typeOfApplicant: [''],
      hotelName: ['', [Validators.required, Validators.minLength(5)]],
      hotelContact: ['', [Validators.required, Validators.pattern("[0-9]*$"), Validators.maxLength(10)]],
      HotelAddress: ['', [Validators.required]],
      pancard: ['', [Validators.required, Validators.pattern('([A-Z]){5}([0-9]){4}([A-Z]){1}$')]],
      city: ['', [Validators.required]],
      starRating: ['', [Validators.required]],
      hotelAsso: [''],
      hotelAssoList: ['select',],
      numberOfRooms: ['', [Validators.required, Validators.pattern("[0-9]*$")]],
      noOfEmployes: ['', [Validators.required, Validators.pattern("[0-9]*$")]],
      acceptTerms: [false, Validators.requiredTrue],

    })
  }


  submit() {
    console.log(this.hotelRegistrationForm.value);
   this.dataServiceService.postApiCall('hotelDetails',this.hotelRegistrationForm.value).subscribe();
    // this.commonApicallService.postApiCall(this.getEndPoint, this.hotelRegistrationForm.value).subscribe(response => { })
    // this.commonApicallService.hotelDetailsList = 'hotelDetails';
     this.router.navigateByUrl('/owner/loginSuccess');
  }


  journeyOfBack() {
    this.router.navigateByUrl('/owner/loginSuccess');
  }

  toggleShow() {
    this.show = !this.show
  }
  toggleHide() {
    this.show = false;
  }

  
}
