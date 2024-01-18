import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { LoginInformationComponent } from './components/login-information/login-information.component';
import { LogoComponent } from './components/logo/logo.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, LoginInformationComponent],
  imports: [CommonModule, LogoComponent, SharedModule, FormsModule],
  exports: [HeaderComponent, LoginInformationComponent],
})
export class CoreModule {}
