import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CreateCardComponent } from './components/create-card/create-card.component';
import { AdminComponent } from './pages/admin/admin.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
];

@NgModule({
  declarations: [CreateCardComponent, AdminComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes), SharedModule],
})
export class AdminModule {}
