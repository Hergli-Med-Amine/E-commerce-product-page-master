import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { Store, select } from '@ngrx/store';
import { NitemsSelector, cartToggleSelector, isEmptySelector } from 'src/app/cart/store/selectors';
import { Observable } from 'rxjs';
import * as CartActions from "../../../cart/store/actions"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void => *', animate('300ms')),
      transition('* => void', animate('300ms'))
    ]),
    trigger('slideleft2right', [
      state('void', style({ transform: 'translateX(-100%)' })),
      state('*', style({ transform: 'translateX(0)' })),
      transition('void => *', animate('300ms')),
      transition('* => void', animate('300ms'))
    ])
  ]

})
export class NavbarComponent {
  ;

  constructor(
    private store: Store<AppStateInterface>
  ) {
    this.cartToggle$ = this.store.pipe(select(cartToggleSelector))
    this.isEmpty$ = this.store.pipe(select(isEmptySelector))
    this.nItems$ = this.store.pipe(select(NitemsSelector))
  }

  isEmpty$: Observable<boolean>
  cartToggle$: Observable<boolean>
  nItems$ : Observable<number>
  togglemobilenavbar: boolean = true;


  togglemobilemenu() {
    this.togglemobilenavbar = !this.togglemobilenavbar 
  }

  
  carttoggle() {
    this.store.dispatch(CartActions.toggleCart())
  }

}
