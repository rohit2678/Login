import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'LoginProject';

  emailId: string;
  password: string;
  
  //isLoggedIn: boolean = false;

  constructor(private task: TaskService, private router: Router){}

  ngOnInit(){
    if(!this.task.isLoggedIn){
      this.router.navigateByUrl("/");
    }
  }
}
