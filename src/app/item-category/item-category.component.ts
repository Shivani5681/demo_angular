import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.css'],
})
export class ItemCategoryComponent {
  @Input() item: any;
 
  CDN_URL = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';

  ngOnInit(){
    console.log(this.item , 
      "iTEM IN cATEGORY"
    )
  }

  addButtonClicked(item: any): void {
    // Implement add to cart functionality
    console.log('Adding item:', item);
  }
}


