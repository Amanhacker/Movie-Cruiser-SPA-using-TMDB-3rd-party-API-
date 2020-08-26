import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public users: User[] = [];

  constructor() {
    this.users.push(
      { username: 'admin', password: '12345678' },
      { username: 'user1', password: '12345678' }
    );
  }

  authenticate(user) {
    let token;

    const foundUser = this.users.find(u =>
      u.username === user.username && u.password === user.password
    );

    if (foundUser) {
      token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    return token;
  }

  storeToken(token) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  storeUsername(username) {
    localStorage.setItem('username', username);
  }

  getUsername() {
    return localStorage.getItem('username');
  }

  isAuthenticated() {
    if (this.getToken() && this.getUsername()) {
      return true;
    } else {
      return false;
    }
  }

  logoutUser() {
    localStorage.clear();
  }
}
