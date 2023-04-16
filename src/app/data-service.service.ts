import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  url='http://localhost:3000/';
  endPoint: any;
 //endPoint = 'admin';

  Data: any;
  signinOrSignUp: any;
  ownerName: any;
  constructor(private http:HttpClient) {
    

   }

  postApiCall(endPoint:any,data:any){
    let updateUrl = this.url + endPoint;
    return this.http.post(updateUrl , data)
   }
   getApiCallData(endPoint:any){
    let updateUrl = this.url + endPoint;
   return this.http.get(updateUrl);
  }

  
}
