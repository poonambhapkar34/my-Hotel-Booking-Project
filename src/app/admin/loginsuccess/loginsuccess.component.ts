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
    { value: "4 wheelers", option: "4 wheelers", isActive: false },
    { value: "3 wheelers", option: "3 wheelers", isActive: false }
  ];
  formdata!: FormGroup;
  tandc: any;
  editData: any;
  Edit = true;


  constructor(private dataservice: DataServiceService, private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    if(this.Edit){
      this.editData = {
        "TC": 
        "terms and conditions",
        "name": "kk",
        "vehicles":  ['2 wheelers', '4 wheelers']
      }
      this.setVehicleCheboxes()
      this.form();
    }
    else{
      console.log('this.editData',this.editData);
      
      this.form();
    }
 
    this.endPoint = this.dataservice.endPoint;
    console.log('this.signInOrSignUp --', this.signInOrSignUp);
  }

  setVehicleCheboxes(){
    this.Vehicles.forEach(item=>{
         this.editData.vehicles.forEach((arrayItem:any)=>{
        if(item.value == arrayItem){
          item.isActive = true;
        }
      }
      )
    })
  }

  form(){
    this.formdata = this.fb.group({
      name:[this.editData?.name ? this.editData?.name : '' ],
      vehicles: [''],
      TC:[this.editData?.TC ? true :false]
      //TC:[this.editdData.TC? true :false]
    });
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
    console.log('value', event.source.value);

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

   
  }
  
  setValuesForForm() {
    let vehicleData: any = [];
    this.Vehicles.forEach(item => {
      if (item.isActive) {
        vehicleData.push(item.value)
      }
    })

    let updatedVehicles = {
      name: this.formdata.value.name,
      vehicles: vehicleData,
      TC: this.tandc
    }
    this.formdata.setValue(updatedVehicles);

    console.log('this.formdata-->finel', this.formdata.value);

  }

  tcValue(event:any){
  console.log(event.source.value);
  this.tandc = event.source.value;

  }
  submit() {
    this.setValuesForForm()
    console.log(this.formdata.value);

  }
}
