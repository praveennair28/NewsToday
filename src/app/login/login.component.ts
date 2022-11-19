import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from '../models/user';
import { AuthApiService } from '../service/authapiservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private cookie: any = null;
  emailId : string = '';
  password: string = '';
  current_user: user;
  constructor(private authservice: AuthApiService,private router: Router) { 
    this.current_user = new user();
  }

  ngOnInit(): void {
  }
  Login(data: any){
    this.current_user.email = data.emailid;
    this.current_user.password = data.password;
    this.authservice.getToken(this.current_user).subscribe(result => {
      console.log(result);
      this.setCookie(result);
      this.router.navigateByUrl('Home');
    })
  }
  setCookie(currentCookie: any) {
    if (currentCookie !== null && currentCookie !== this.cookie) {
      localStorage.setItem('jwtToken', currentCookie?.access_token);
      this.cookie = currentCookie;
    }
  }
}
