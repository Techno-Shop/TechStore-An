import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-products',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any;
  constructor(private userService:UsersService) { }

  ngOnInit(): void {
   
    this.userService.getUsers().subscribe((data:any)=>{this.users=data;console.log(this.users)  
    });
    
  }
}

