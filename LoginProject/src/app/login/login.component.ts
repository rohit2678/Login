import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private task: TaskService) { }
  emailId: string;
  password: string;

  ngOnInit() {
  }

  onLogin(){
    this.task.LoggedIn(this.emailId,this.password);
  }

}
