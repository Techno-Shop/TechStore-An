import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 user:any;
 msg: any;
  constructor(
    private userService: UserService,
    private http: HttpClient,
    private route:Router,
      ) { }

  ngOnInit(): void {
    }

    
signUp(user:any){
  this.userService.addUser(user.value).subscribe((result)=>{this.msg=result;
     this.route.navigate(['/login'])
  })
}
}
