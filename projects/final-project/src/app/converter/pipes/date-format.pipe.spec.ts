import { DatePipe } from '@angular/common';
import { DateFormatPipe } from './date-format.pipe';

describe('DateFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new DateFormatPipe();
    expect(pipe).toBeTruthy();
  });

  it('must format date 2022-02-28 to 28/02/2022', () => {
    const pipe = new DateFormatPipe();
    expect(pipe.transform('2022-02-28')).toEqual('28/02/2022');
  });

});
