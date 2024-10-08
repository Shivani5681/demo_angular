import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-restaurant-category',
  templateUrl: './restaurant-category.component.html',
  styleUrls: ['./restaurant-category.component.css'],
})
export class RestaurantCategoryComponent {
  @Input() itemData: any;
  @Input() showItem: boolean = false;
  @Output() toggle = new EventEmitter<void>();

  ngOnInit(){
    console.log(this.itemData , "Category")
  }

  handleClick(): void {
    this.toggle.emit();
  }
}
