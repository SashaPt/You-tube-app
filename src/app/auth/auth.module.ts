import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './pages/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
];

@NgModule({
  declarations: [LoginComponent, AuthComponent],
  providers: [Permissions, AuthService],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class AuthModule {}
