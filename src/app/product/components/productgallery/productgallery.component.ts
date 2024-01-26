import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { imageSelector } from '../../store/selectors';
import { Observable } from 'rxjs';
import * as ProductActions from "../../store/actions"

@Component({
  selector: 'app-productgallery',
  templateUrl: './productgallery.component.html',
  styleUrls: ['./productgallery.component.css']
})
export class ProductgalleryComponent implements OnInit {
  @Output() lightboxToggle: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private store: Store<AppStateInterface>
    ) {
      this.activeState$= this.store.pipe!(select(imageSelector))
    }

    activeState$: Observable<number>


  thimages: string[] = [
    'assets/images/image-product-1-thumbnail.jpg',
    'assets/images/image-product-2-thumbnail.jpg',
    'assets/images/image-product-3-thumbnail.jpg',
    'assets/images/image-product-4-thumbnail.jpg',
    
  ];

  images: string[] = [
    'assets/images/image-product-1.jpg',
    'assets/images/image-product-2.jpg',
    'assets/images/image-product-3.jpg',
    'assets/images/image-product-4.jpg',

  ];



  slideNextActiveImage() {
    this.store.dispatch(ProductActions.imageIncrement())
  }

  slidePreviousActiveImage() {
    this.store.dispatch(ProductActions.imageDecrement())
  }

  setActiveImage(index: number) {
    this.store.dispatch(ProductActions.selectImage({index}))
  }

  lightboxtoggle() {
    this.lightboxToggle.emit();
  }

  ngOnInit(): void {
    // this.activeImage = this.images[this.activeStates.findIndex((state: boolean) => state === true)]
  }
}
