import {HttpClient}  from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
    ) { }

    // user registration  
    addUser(user: any){
    return this.http.post('http://localhost:3001/auth/register', user)
   }
   
   // user login
   login(user:any) {
    return this.http.post('http://localhost:3001/auth/login', user)
   } 
   // user sign off
   logout() {
   return this.http.get('http://localhost:3001/auth/logout') 
   }

   // get one user
   getOne(email: any) {
    return this.http.get(`http://localhost:3001/auth/one`,email)  
   }
}
