import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
user:any;

  constructor(private http: HttpClient ) { }
  addUserData(datas:any){
    this.user= datas
  }
  getUserData(){
    console.log(this.user, "<====this is the customer data");
    
    return this.user
  }

  
}
