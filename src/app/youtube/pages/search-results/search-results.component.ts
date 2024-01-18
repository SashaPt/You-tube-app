import {
  Component, DoCheck, OnDestroy, OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { YoutubeService } from '../../services/youtube.service';
import { SettingsService } from '../../services/settings.service';
import { IItem } from '../../models/search-item.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements DoCheck, OnInit, OnDestroy {
  results: IItem[] = [];

  searchValue = this.searchService.searchValue;

  searchSubscription?: Subscription;

  openSorting = this.settingsService.getSettings();

  sortByDate = this.settingsService.getSortByDate();

  sortByView = this.settingsService.getSortByView();

  filterString = this.settingsService.getFilterString();

  constructor(
    private youtubeService: YoutubeService,
    private settingsService: SettingsService,
    private searchService: SearchService,
  ) {}

  ngOnInit(): void {
    if (this.searchValue) {
      this.youtubeService
        .searchItems(this.searchService.searchValue)
        .subscribe((resp) => {
          this.results = resp.items;
        });
    }
    this.searchSubscription = this.searchService.onSubscribe().subscribe(() => {
      this.youtubeService
        .searchItems(this.searchService.searchValue)
        .subscribe((resp) => {
          this.results = resp.items;
        });
    });
  }

  ngOnDestroy() {
    this.searchSubscription?.unsubscribe();
  }

  ngDoCheck() {
    this.openSorting = this.settingsService.getSettings();
    this.sortByDate = this.settingsService.getSortByDate();
    this.sortByView = this.settingsService.getSortByView();
    this.filterString = this.settingsService.getFilterString();
  }
}
