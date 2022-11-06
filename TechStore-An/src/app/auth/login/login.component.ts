import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserDataService } from 'src/app/services/user-data.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { CheckauthService } from 'src/app/services/checkauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userLogin:any;
userDatas:any;

message:any;
messageObj:any;

token:any;
tokenObj:any;

  constructor(
    private userDataService: UserDataService,
    private userService: UserService,
    private route:Router,
    private http: HttpClient,
    private tokenServices: CheckauthService
  ) { }

  ngOnInit(): void {
  }
    
  login(userLogin: any){
    this.userService.login(userLogin.value).subscribe((result)=>{ console.log(result);

      this.messageObj=result;
      this.message=this.messageObj.status;
      var email={
        email:userLogin.value.email
      };
      this.userService.getOne(email).subscribe((result)=>{this.userDatas=result;this.userDataService.addUserData(this.userDatas)})
      this.tokenObj=result;
      this.token=this.tokenObj.token;
      this.tokenServices.getToken(this.token)

      this.route.navigate(['/'])

    },
    (error)=>{this.messageObj=error;
      this.message=this.messageObj.error})
  }
}
