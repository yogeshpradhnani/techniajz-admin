import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'breakAfterWords'
})
export class BreakAfterWordsPipe implements PipeTransform {
  transform(value: any){
    function breakString(str:any, chunkSize:any) {
      return str.match(new RegExp('.{1,' + chunkSize + '}', 'g')).join(' ');
    }
    const chunkSize = 15;
    const brokenString = breakString(value, chunkSize);
    return brokenString;
  }
}
