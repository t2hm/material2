import {Component} from '@angular/core';


@Component({
  selector: 'select-label-example',
  templateUrl: './select-label-example.html',
})
export class SelectLabelExample {
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}
