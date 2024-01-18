import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../models/search-item.model';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  /* eslint-disable class-methods-use-this */
  transform(value: IItem[], order: string): IItem[] {
    if (!order?.trim()) {
      return value;
    }
    return value.sort((a: IItem, b: IItem) => {
      if (order === 'asc') {
        return (
          parseInt(a.statistics?.viewCount, 10)
          - parseInt(b.statistics?.viewCount, 10)
        );
      }
      if (order === 'desc') {
        return (
          parseInt(b.statistics?.viewCount, 10)
          - parseInt(a.statistics?.viewCount, 10)
        );
      }
      return 0;
    });
  }
  /* eslint-enable class-methods-use-this */
}
