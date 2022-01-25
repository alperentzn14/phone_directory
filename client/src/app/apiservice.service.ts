import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  //connect server and client

  getAllUsersapiUrl='http://localhost:8080/api/users/getallUsers';
  

  

  ///get All data

  getAllUsers():Observable<any>
  {
       return this._http.get(`${this.getAllUsersapiUrl}`);
  }
}
