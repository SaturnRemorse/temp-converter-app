import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoSum',
  standalone: false
})
export class TwoSumPipe implements PipeTransform {

  transform(value:string, n1:number, n2:number): unknown {
    return `${value} : ${n1+n2}`;
  }

}
