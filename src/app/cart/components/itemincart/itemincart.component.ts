import { Component, Input } from '@angular/core';
import * as CartActions from "../../store/actions"
import { Store, select } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { CartItem } from '../../models/cartItem.interface';



@Component({
  selector: 'app-itemincart',
  templateUrl: './itemincart.component.html',
  styleUrls: ['./itemincart.component.css']
})
export class ItemincartComponent {

  constructor(
    private store: Store<AppStateInterface>
  ) {

  }

  @Input() item!: CartItem
  deleteItem() {
    this.store.dispatch(CartActions.removeFromCart({ item: this.item }))
  }

}
