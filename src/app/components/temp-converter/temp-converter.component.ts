import { Component } from '@angular/core';

@Component({
  selector: 'app-temp-converter',
  standalone: false,
  templateUrl: './temp-converter.component.html',
  styleUrl: './temp-converter.component.css'
})
export class TempConverterComponent {

  valueInF = 0;
  valueInC = 0;

}
