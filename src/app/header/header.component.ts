import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  foodLogo: string = './../../assets/foodLogo.png';

  cartItems: any[] = [];
  

  ngOnInit(){
    console.log()
  }
}
