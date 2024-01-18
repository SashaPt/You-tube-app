import { Injectable } from '@angular/core';
import {
  Subject,
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchSubject = new Subject<string>();

  searchValue = '';

  onSearch(value: string): void {
    if (value?.length >= 3) {
      this.searchSubject.next(value);
    }
  }

  onSubscribe() {
    return this.searchSubject
      .pipe(filter((query) => query.length > 2))
      .pipe(debounceTime(500))
      .pipe(distinctUntilChanged())
      .pipe(
        // eslint-disable-next-line no-return-assign
        switchMap((query) => (this.searchValue = query || '')),
      );
  }
}
