import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login-information',
  templateUrl: './login-information.component.html',
  styleUrls: ['./login-information.component.scss'],
})
export class LoginInformationComponent {
  logRouter!: Router;

  constructor(private router: Router, private authService: AuthService) {
    this.logRouter = this.router;
  }
}
