import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../models/search-item.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  /* eslint-disable class-methods-use-this */
  transform(value: IItem[], substring: string): IItem[] {
    if (!substring?.trim()) {
      return value;
    }
    return value.filter((i) => i.snippet.title.toLowerCase().includes(substring.toLowerCase()));
  }
  /* eslint-enable class-methods-use-this */
}
