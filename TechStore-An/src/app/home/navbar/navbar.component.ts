import { Component, OnInit } from '@angular/core';
import { CheckauthService } from 'src/app/services/checkauth.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public userService: UserService,private checkAuthService:CheckauthService) { }

  ngOnInit(): void {
  }
logout(){
  this.userService.connectedUser="";
  console.log(this.userService.connectedUser)
  this.userService.logout().subscribe(res=>{console.log(res);
  })

}

test(){
  console.log(this.checkAuthService.connected)
}
}
