import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../models/search-item.model';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  /* eslint-disable class-methods-use-this */
  transform(value: IItem[], order: string): IItem[] {
    if (!order?.trim()) {
      return value;
    }
    return value.sort((a, b) => {
      if (order === 'asc') {
        return (
          new Date(a.snippet.publishedAt).getTime()
          - new Date(b.snippet.publishedAt).getTime()
        );
      } if (order === 'desc') {
        return (
          new Date(b.snippet.publishedAt).getTime()
          - new Date(a.snippet.publishedAt).getTime()
        );
      }
      return 0;
    });
  }
  /* eslint-enable class-methods-use-this */
}
