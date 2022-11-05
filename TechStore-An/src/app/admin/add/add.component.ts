import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });
  ngOnInit(): void {
  }
  onSubmit():void{
  }

}
