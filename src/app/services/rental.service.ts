import { RentalResponsModel } from './../models/rentalResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44364/api/rentals/getrentaldetails";
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<RentalResponsModel>{
    return this.httpClient.get<RentalResponsModel>(this.apiUrl);
  }
}
