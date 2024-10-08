import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { restList } from '../Models/mockData';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css'],
})
export class RestaurantDetailComponent implements OnInit {
  restaurantId: string | undefined;
  restaurant: any;
  showItem: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params)
      this.restaurantId = params['resId'];
      this.loadRestaurantData();
    });
  }

  loadRestaurantData(): void {
    console.log(this.restaurantId , restList)
    this.restaurant = restList.find((res: any) => res.id === this.restaurantId);
 
  }

  toggleShowItem(index: number): void {
    console.log(index)
    this.showItem = index === this.showItem ? null : index;
  }
}
