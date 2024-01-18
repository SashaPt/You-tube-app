import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { YoutubeService } from '../../services/youtube.service';
import { IItem } from '../../models/search-item.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  item!: IItem;

  date!: Date;

  location!: Location;

  constructor(
    private youtubeService: YoutubeService,
    private route: ActivatedRoute,
    private loc: Location,
  ) {}

  ngOnInit(): void {
    this.location = this.loc;
    const itemId = this.route.snapshot.params['id'];
    if (itemId) {
      this.youtubeService.getItem(itemId).subscribe(
        // eslint-disable-next-line no-return-assign, prefer-destructuring
        (data) => (this.item = data.items[0]),
      );
    }
    // eslint-disable-next-line no-return-assign
    this.date = new Date(this.item?.snippet.publishedAt);
  }
}
