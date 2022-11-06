import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:any
  constructor(private cartService:CartService) { }
  
  ngOnInit(): void {
   this.products= this.cartService.items;
  }
  parseImg(str:string):string{
    return JSON.parse(str);
  }
  deleteProd(index:any):any{
    this.cartService.deleteItem(index)
  }
  totalPrice(){
    console.log(this.cartService.items)
    return this.cartService.totalPrice();
    
  }
  BuyProduct(){

    alert("thank you for your purchase !!")
    window.location.reload();
  }

}
