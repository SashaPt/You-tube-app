import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { StrongPasswordValidator } from '../../validators/strong-password.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  authSubscription!: Subscription;

  isLoggedIn!: boolean;

  loginForm!: FormGroup<{
    login: FormControl<string | null>;
    password: FormControl<string | null>;
  }>;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authSubscription = this.authService
      .isLoggedIn$
      // eslint-disable-next-line no-return-assign
      .subscribe((isLoggedIn: boolean) => (this.isLoggedIn = isLoggedIn));

    this.loginForm = new FormGroup({
      login: new FormControl<string | null>('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl<string | null>('', [
        Validators.required,
        StrongPasswordValidator(),
      ]),
    });
  }

  get login() {
    return this.loginForm.get('login');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onLogin(event: Event) {
    event?.preventDefault();
    const { login, password } = this.loginForm.value;
    this.authService.login({ login, password });
    if (this.isLoggedIn) {
      this.router.navigateByUrl('/youtube');
    }
  }

  onLogout(event: Event) {
    event?.preventDefault();
    this.authService.logout();
  }
}
