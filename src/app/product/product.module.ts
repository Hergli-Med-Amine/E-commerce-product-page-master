import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { ShoppingcartComponent } from '../cart/components/shoppingcart/shoppingcart.component';
import { ProductgalleryComponent } from './components/productgallery/productgallery.component';
import { ItemincartComponent } from '../cart/components/itemincart/itemincart.component';
import { StoreModule } from '@ngrx/store';
import { ProductReducer } from './store/reducers';



@NgModule({
  declarations: [
    NavbarComponent,
    ProductdetailsComponent,
    ShoppingcartComponent,
    ProductgalleryComponent,
    ItemincartComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('product', ProductReducer),
  ], 
  exports: [
    NavbarComponent,
    ProductdetailsComponent,
    ShoppingcartComponent,
    ProductgalleryComponent,
    ItemincartComponent,
  ]
})
export class ProductModule { }
