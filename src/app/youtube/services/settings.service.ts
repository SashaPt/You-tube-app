import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  openSettings = false;

  sortByDate = '';

  sortByView = '';

  filterString = '';

  toggleSettings() {
    this.openSettings = !this.openSettings;
    return this.openSettings;
  }

  getSettings() {
    return this.openSettings;
  }

  toggleSortByDate() {
    if (this.sortByDate !== 'asc') {
      this.sortByDate = 'asc';
    } else {
      this.sortByDate = 'desc';
    }
    return this.sortByDate;
  }

  getSortByDate() {
    return this.sortByDate;
  }

  toggleSortByView() {
    if (this.sortByView !== 'asc') {
      this.sortByView = 'asc';
    } else {
      this.sortByView = 'desc';
    }
    return this.sortByView;
  }

  getSortByView() {
    return this.sortByView;
  }

  filterByString(value: string) {
    this.filterString = value;
    return this.filterString;
  }

  getFilterString() {
    return this.filterString;
  }

  clearSettings() {
    this.sortByDate = '';
    this.sortByView = '';
    this.filterString = '';
  }
}
