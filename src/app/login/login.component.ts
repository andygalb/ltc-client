import { Component,OnInit,Inject } from '@angular/core';
import { UserService } from '../user.service';
import {User} from "../model/user";
import { Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
})

export class LoginComponent implements OnInit{

  user:User;
  tempUser:User;
  router: Router;

  constructor(private userService: UserService,
              router: Router)
  {
    this.router = router;
  }



  ngOnInit(){
    this.tempUser=new User();
    this.tempUser.local= {
      userType: '',
      firstName: '',
      username: '',
      password: '',
      lastName: ''
    }
  }

  doLogIn(): void {
    console.log("Logging in");
    this.userService.loginUser(this.tempUser).subscribe(
      data => {
        console.log("This is what was returned in data:")
        console.log(data);
        if(data.local.username!=null) {
          this.userService.initiateUser(data);
          this.userService.isUserLoggedIn=true;
          console.log(this.userService.user);
          this.tempUser=null;
          if(this.userService.user.local.userType=="teacher") {this.router.navigate(['teacher']);}
          if(this.userService.user.local.userType=="student") {this.router.navigate(['student']);}
        };
      }
      ,
      err => {
        console.error("Error logging in!");
        alert("Could not log in");
        return Observable.throw(err);
      },
      () => {
         }
    );

  }

}


