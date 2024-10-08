import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-restro-card',
  templateUrl: './restro-card.component.html',
  styleUrls: ['./restro-card.component.css']
})
export class RestroCardComponent {
  @Input() resData: any;
  
  CDN_URL = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';
}
