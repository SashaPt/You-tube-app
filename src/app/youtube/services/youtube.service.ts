import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';
import { IItem } from '../models/search-item.model';
import { IResponse } from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(private http: HttpClient) {}

  searchItems(value: string, limit = 8): Observable<IResponse> {
    const params = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', limit)
      .set('q', value);

    return this.http.get<IResponse>('BASE_URL/search?', { params }).pipe(
      map((resp: IResponse) => {
        const ids: string = resp.items
          .map((item: IItem) => item.id.videoId)
          .join(',');
        return ids;
      }),
      switchMap((ids: string) => this.getItem(ids)),
    );
  }

  getItem(ids: string): Observable<IResponse> {
    const params = new HttpParams()
      .set('id', ids)
      .set('part', 'snippet,statistics');

    return this.http.get<IResponse>('BASE_URL/videos?', { params });
  }
}
