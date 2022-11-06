import {HttpClient}  from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  connectedUser:any;
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
  // var allCookies = document.cookie.split(';');
  // for (var i = 0; i < allCookies.length; i++)
  //     document.cookie = allCookies[i] + "=;expires="
  //     + new Date(0).toUTCString();
  //     console.log( document.cookie)
   }

   // get one user
   getOne(email: any) {
    return this.http.get(`http://localhost:3001/auth/one`,email)  
   }
}
