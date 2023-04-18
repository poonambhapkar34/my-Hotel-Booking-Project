import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  url = 'http://localhost:3000/';
  endPoint: any;
 // endPoint = 'owner';

  Data: any;
  signinOrSignUp: any;
  ownerName: any;
  constructor(private http: HttpClient) {
  }

  postApiCall(endPoint: any, data: any) {
    let updateUrl = this.url + endPoint;
    return this.http.post(updateUrl, data)
  }

  getApiCall(endPoint: any) {
    let updateUrl = this.url + endPoint;
    return this.http.get(updateUrl);
  }

  deleteApiCall(endPoint : string, id:number){
    let updateUrl = this.url + endPoint + '/' + id;
    return this.http.delete(updateUrl);
  }


}
