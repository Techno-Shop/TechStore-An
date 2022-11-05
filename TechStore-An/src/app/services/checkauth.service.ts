import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckauthService {
connected: boolean = true;
  constructor() { }

  getToken(token:any) {
    if(token) {
      this.connected= true
    }
    else {
      this.connected= false
    } 
  }

  verify(){
    return this.connected 
  }
}
