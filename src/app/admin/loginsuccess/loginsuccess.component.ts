import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent {
  endPoint: any;
  signInOrSignUp: any;
  Vehicles = [
    { value: "2 wheelers", option: "2 wheelers", isActive: false },
    { value: "4 wheelers", option: "4 wheelers", isActive: false }
  ];
  formdata!: FormGroup;



  constructor(private dataservice: DataServiceService, private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.formdata = this.fb.group({
      vehicles: ''
    });
    this.endPoint = this.dataservice.endPoint;
    console.log('this.signInOrSignUp --', this.signInOrSignUp);
  }

  viewHotelList() {
    this.router.navigateByUrl('/hotelDetails');
  }
  back() {
    this.signInOrSignUp = this.dataservice.signinOrSignUp;
    if (this.signInOrSignUp == 'signIn') {
      this.router.navigateByUrl('/signIn');
    }
    else {
      this.router.navigateByUrl('/signUp')
    }
  }
  setVehicles(event: any, value: string) {
    console.log(event);
    console.log('value', value);

    if (event.checked) {
      this.Vehicles.forEach(item => {
        if (value == item.value) {
          item.isActive = true;
        }
      })
    }
    else {
      this.Vehicles.forEach(item => {
        if (value == item.value) {
          item.isActive = false;
        }
      })
    }

    console.log('Vehicles', this.Vehicles);

    this.setValuesForForm()
  }
  setValuesForForm() {
    let vehicleData: any = [];
    this.Vehicles.forEach(item => {
      if (item.isActive) {
        vehicleData.push(item.value)
      }
    })
    let updatedVehicles = {
      vehicles: vehicleData
    }
    this.formdata.setValue(updatedVehicles);

    console.log('this.formdata-->finel', this.formdata.value);

  }

  submit() {

    console.log(this.formdata.value);

  }
}
