import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormatter'
})
export class DateFormatterPipe implements PipeTransform {

  transform(value: any): string {
    const datePipe: DatePipe = new DatePipe('en-US');
    const formattedDate = datePipe.transform(value, 'MMMM d, yyyy');
    if (formattedDate)
      return formattedDate;
    return value
  }

}
