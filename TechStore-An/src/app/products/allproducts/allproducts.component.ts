import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class allProducts implements OnInit {
  products:any;
constructor(private productservice:ProductService) { }
ngOnInit() {
  this.productservice.getAllProduct()
  .subscribe((res:any)=>{
    
    this.products=res
    console.log(res)
  })
}
parseImg(str:string):string{
  return JSON.parse(str)
}
}
