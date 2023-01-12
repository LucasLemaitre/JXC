import { Component, Input } from '@angular/core';
import { IData } from 'src/model/IData';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() myData!: IData;
}
