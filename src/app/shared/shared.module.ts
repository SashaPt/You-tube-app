import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [ButtonComponent, PageNotFoundComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, PageNotFoundComponent],
})
export class SharedModule {}
