import { Pipe, PipeTransform } from '@angular/core';
import { Blog } from '../models/blog';

@Pipe({
  name: 'sortByMostRecent'
})
export class SortByMostRecentPipe implements PipeTransform {
  transform(items: Blog[]): Blog[] {
    if (!items) return [];
    return items.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }
}
