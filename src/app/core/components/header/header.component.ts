import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/youtube/services/search.service';
import { SettingsService } from 'src/app/youtube/services/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  placeholder = 'What are you want to find out?';

  hRouter!: Router;

  constructor(
    private settingsService: SettingsService,
    private router: Router,
    private searchService: SearchService,
  ) {}

  ngOnInit(): void {
    this.hRouter = this.router;
  }

  search(value: string) {
    this.searchService.onSearch(value);
  }

  onClickSettings() {
    this.settingsService.toggleSettings();
  }
}
