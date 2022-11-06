import { Component, OnInit,Input } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
