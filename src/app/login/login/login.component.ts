import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();

  constructor(private router: Router, private authService: AuthenticationService) {
  }
  ngOnInit() {
  }

  addNewLogin(user) {
    console.log(user);

    let token = this.authService.authenticate(user);
    console.log(token);

    if (token) {
      this.authService.storeToken(token);
      this.authService.storeUsername(user.username);

      this.router.navigate(['/favourites']);

    } else {
      this.router.navigate(['/login']);
    }

  }
}
