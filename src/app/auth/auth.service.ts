import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private pUser = new BehaviorSubject(null);

  currentUser = this.pUser.asObservable();

  constructor(private httpClient: HttpClient) { }

  login(email, password) {
    return this.httpClient.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBSW3NhTHaU3mYcB6OrXZdycNjFJoOW9Pk',{
      email, //email: email,
      password //password: password
    });
  }

  createAccount(email, password) {
    return this.httpClient.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBSW3NhTHaU3mYcB6OrXZdycNjFJoOW9Pk',{
        email, //email: email,
        password //password: password
      });
  }

  setUser(user) {
    this.pUser.next(user);
  }

  verifyToken(token) {
    return this.httpClient.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyBSW3NhTHaU3mYcB6OrXZdycNjFJoOW9Pk', {
      idToken: token
    })
  }
}
