import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoginProject';

  emailId: string;
  password: string;

  onLogin(){
    console.log("user Id", this.emailId, "pass", this.password);
    
  }


}
