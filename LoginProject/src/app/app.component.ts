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
  isLoading: boolean = false;
  isLoggedIn: boolean = false;

  onLogin(){
    this.isLoading = true;
    setTimeout(()=>{
      this.isLoading = false;
      this.isLoggedIn = true;
      console.log("user Id", this.emailId, "pass", this.password);
    },3000);
  }


}
