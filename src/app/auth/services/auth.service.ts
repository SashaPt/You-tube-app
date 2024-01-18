import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAuth } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userLogin = 'user@login.com';

  userPassword = 'User_Password1';

  private isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(
    this.getIsLoggedIn(),
  );

  isLoggedIn$: Observable<boolean> = this.isLoggedIn.asObservable();

  compareAuth(auth: IAuth) {
    if (auth.login === this.userLogin && auth.password === this.userPassword) {
      return true;
    }
    return false;
  }

  login(auth: IAuth) {
    if (this.compareAuth(auth)) {
      localStorage.setItem('user', JSON.stringify({ auth }));
      this.isLoggedIn.next(true);
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.isLoggedIn.next(false);
  }

  /* eslint-disable class-methods-use-this */
  getIsLoggedIn() {
    if (localStorage.getItem('user')) {
      return true;
    }
    return false;
  }
  /* eslint-enable class-methods-use-this */
}
