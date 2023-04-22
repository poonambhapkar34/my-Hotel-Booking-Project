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
  hotelRegistrationForm! :FormGroup;
   
  show: boolean = false;
  getEndPoint: any;
  isEditJourney!: boolean;
  editId!: number;
  hotelEndPoint = 'hotelDetails';
  hotelDetailsById: any;
  constructor(private fb: FormBuilder,
    private dataServiceService: DataServiceService,
    private router: Router) {

  }
  ngOnInit() {
    this.isEditJourney = this.dataServiceService.editJourney;
    this.editId = this.dataServiceService.editId;
    this.hotelDetailsById = this.dataServiceService.hotelDetailsById ;
   
    if (this.isEditJourney) {
      console.log(' this.hotelDetailsById', this.hotelDetailsById);
      if(this.hotelDetailsById){
        this.hotelRegistration();
      }
     
    }
   else{
    this.hotelRegistration()
   }
  }
 
  //  async getHotelDetailsById() {
  //   this.hotelDetailsById =  await this.dataServiceService.getApiCall(this.hotelEndPoint, this.editId).toPromise();
  
  // }

  hotelRegistration(){

    this.hotelRegistrationForm = this.fb.group({

    hotelName:[this.hotelDetailsById ? this.hotelDetailsById?.hotelName : '',[Validators.required, Validators.pattern(('[a-zA-Z ]*$')),Validators.minLength(2)]],
    ownerName:[this.hotelDetailsById ? this.hotelDetailsById?.ownerName : '',[Validators.required,Validators.pattern('[a-zA-Z ]*$'),Validators.minLength(2)]],
    hotelContactNo:[this.hotelDetailsById ? this.hotelDetailsById?.hotelContactNo  : '',[Validators.required, Validators.pattern('[0-9]*$'),Validators.minLength(10),Validators.maxLength(10)]],
    hotelAddress:[this.hotelDetailsById ? this.hotelDetailsById?.hotelAddress : '',[Validators.required]],
    hotelEmail:[this.hotelDetailsById ? this.hotelDetailsById?.hotelEmail : '', [Validators.required]], 
    totalRooms:[this.hotelDetailsById ? this.hotelDetailsById?.totalRooms :'',[Validators.required]],
    speciality:[this.hotelDetailsById ? this.hotelDetailsById?.speciality :'']
    
  
   })
  }


  submit() {
      console.log(this.hotelRegistrationForm.value);
    if(this.isEditJourney){
    //put/patch pi  
    }
    else{
      this.dataServiceService.postApiCall(this.hotelEndPoint, this.hotelRegistrationForm.value).subscribe();
    }
    
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
