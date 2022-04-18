import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: string) {
    var datePipe = new DatePipe("en-US");
     const transformvalue = datePipe.transform(value, 'dd/MM/yyyy');
     return value;
 }
}