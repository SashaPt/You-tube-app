import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './pages/card/card.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SharedModule } from '../shared/shared.module';
import { SortByPipe } from './pipes/sort-by.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortingComponent } from './components/sorting/sorting.component';
import { SetColorDirective } from './directives/set-color.directive';

const routes: Routes = [
  {
    path: '',
    component: SearchResultsComponent,
  },
  {
    path: ':id',
    component: CardComponent,
  },
];

@NgModule({
  declarations: [
    CardComponent,
    SearchItemComponent,
    SearchResultsComponent,
    SortingComponent,
    SortByPipe,
    OrderByPipe,
    FilterPipe,
    SetColorDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [
    RouterModule,
    SearchResultsComponent,
    SearchItemComponent,
    CardComponent,
    SortingComponent,
  ],
})
export class YoutubeModule {}
