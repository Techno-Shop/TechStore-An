import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-side-bar',
  templateUrl: './product-side-bar.component.html',
  styleUrls: ['./product-side-bar.component.css']
})
export class ProductSideBarComponent implements OnInit {
field:any
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
  }

}
