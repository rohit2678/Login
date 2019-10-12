import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskService{
    isLoggedIn: boolean = false;
    isLoading: boolean = false;
    userName: string=null;

    constructor(private router: Router){}

    LoggedIn(emailId: string,password: string){
        this.isLoading = true;
        setTimeout(()=>{
          this.isLoading = false;
          this.isLoggedIn = true;
          this.userName = emailId;
          console.log("user Id", emailId, "pass", password);
          this.router.navigateByUrl("/home");
        },3000);
      }
}