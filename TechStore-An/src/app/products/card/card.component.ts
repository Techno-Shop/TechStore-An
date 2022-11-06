import { Component, OnInit,Input } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() imgUrl: string;
  @Input() title: string;
  @Input() description: string;
  @Input() price:string;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart({title:this.title, description:this.description, price:this.price,imgUrl:this.imgUrl});
  }

}
