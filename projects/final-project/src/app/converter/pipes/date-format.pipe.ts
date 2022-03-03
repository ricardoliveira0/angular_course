import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(dateEnFormat: string): string {
    if(!dateEnFormat)
      return '';

    const dateArray = dateEnFormat.split('-');

    if(dateArray.length !== 3)
      return dateEnFormat;

    return dateArray[2] + '/' + dateArray[1] + '/' + dateArray[0];
  }

}
