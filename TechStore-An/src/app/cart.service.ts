import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items:any=[];
  constructor(
    private http: HttpClient
  ) { }
  addToCart(product:any){
    console.log(this.items);
    this.items.push(product);
    
  }
  getItems() {
    return this.items;
  }
  clearCart(){
    this.items = [];
    return this.items;
  }
  deleteItem(index:any){
    this.items.splice(index,1);
  }
  totalPrice(){
    let t:number=0;
    for(let product of this.items){
      t+=parseInt(product.price);
    }
    return t;
  }

}
