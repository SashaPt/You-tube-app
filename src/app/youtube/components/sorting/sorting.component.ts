import { Component } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent {
  filterString = this.settingsService.filterString;

  constructor(private settingsService: SettingsService) {}

  onClickSortByDate() {
    this.settingsService.toggleSortByDate();
  }

  onClickSortByView() {
    this.settingsService.toggleSortByView();
  }

  onClickFilter() {
    this.settingsService.filterByString(this.filterString);
  }
}
