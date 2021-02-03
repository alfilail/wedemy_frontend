import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo'
})
export class DateAgoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      console.log(value);

      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      console.log(seconds);

      if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
        return 'Baru saja';
      const intervals = {
        'tahun': 31536000,
        'bulan': 2592000,
        'minggu': 604800,
        'hari': 86400,
        'jam': 3600,
        'menit': 60,
        'detik': 1
      };
      let counter;
      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i]);
        if (counter > 0)
          if (counter === 1) {
            return counter + ' ' + i + ' yang lalu';
          } else {
            return counter + ' ' + i + ' yang lalu';
          }
      }
    }
    return value;
  }

}
