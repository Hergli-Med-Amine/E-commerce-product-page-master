import { Component } from '@angular/core';
import { CartItem } from '../../models/cartItem.interface';
import { Observable } from 'rxjs';
import { isEmptySelector, itemsSelector } from '../../store/selectors';
import { Store, select } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';


@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css'],
  
})
export class ShoppingcartComponent {
  constructor(
    private store: Store<AppStateInterface>
    ) {
      this.isEmpty$ = this.store.pipe(select(isEmptySelector))
      this.cartItems$ = this.store.pipe(select(itemsSelector))
  }

  isEmpty$: Observable<boolean>;
  cartItems$: Observable<CartItem[]>;
  
}
