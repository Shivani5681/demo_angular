import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BodyComponent } from './body/body.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { ItemCategoryComponent } from './item-category/item-category.component';
import { RestaurantCategoryComponent } from './restaurant-category/restaurant-category.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestroCardComponent } from './restro-card/restro-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShimmerComponent } from './shimmer/shimmer.component';
import { GroceryComponent } from './grocery/grocery.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BodyComponent,
    CartComponent,
    ContactComponent,
    HeaderComponent,
    ItemCategoryComponent,
    RestaurantCategoryComponent,
    RestaurantDetailComponent,
    RestroCardComponent,
    ShimmerComponent,
    GroceryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule ,  ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
