import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { CartComponent } from './cart/cart.component';
import { BodyComponent } from './body/body.component';
import { AppComponent } from './app.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { GroceryComponent } from './grocery/grocery.component';

const routes: Routes = [
  { path: '', component: BodyComponent }, // Body will be rendered, no need for another Header here
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { path: 'restaurant/:resId', component: RestaurantDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
