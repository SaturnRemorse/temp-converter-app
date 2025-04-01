import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'threeProduct',
  standalone: false
})
export class ThreeProductPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
