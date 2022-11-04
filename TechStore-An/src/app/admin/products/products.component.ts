import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
   
    this.productService.getProducts()
    .subscribe((data:any)=>{this.products=data;console.log(this.products)  
    });
    
  }
  parseImg(str:string):string{
    return JSON.parse(str);
  }
  deleteProd(str:any):any{
    return this.productService.DeleteProduct(str).subscribe((data)=>{console.log(data)});
  }


}
