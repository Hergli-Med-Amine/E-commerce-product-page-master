import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Product } from '../../models/productdata.module';
import { Store, select } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import * as ProductActions from "../../store/actions"
import * as CartActions from "../../../cart/store/actions"
import { countSelector, imageSelector } from '../../store/selectors';
import { Observable, first } from 'rxjs';
import { CartItem } from '../../../cart/models/cartItem.interface';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  @ViewChild('imageElement', { static: true }) imageElementRef!: ElementRef<HTMLImageElement>;


  constructor(
    private store: Store<AppStateInterface>
  ) {
    this.count$ = this.store.pipe(select(countSelector))
    this.activeState$ = this.store.pipe(select(imageSelector))
    this.activeState$.subscribe(i => {
      this.activeState = i
    })
  }
  activeState$: Observable<number>
  count$: Observable<number>
  product!: Product;
  thimages!: string[];
  activeState!: number;
  images!: string[];

  imageclicked: boolean = false;


  isMobileDevice() {
    return (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }

  handleImageClick(event: MouseEvent) {
    if (this.isMobileDevice()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.lightboxtoggle();
    }
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.deactivateClickEventForMobile();
  }

  deactivateClickEventForMobile() {
    const imageElement = this.imageElementRef?.nativeElement;
    if (imageElement) {
      if (this.isMobileDevice()) {
        imageElement.removeEventListener('click', this.handleImageClick);
      } else {
        imageElement.addEventListener('click', this.handleImageClick);
      }
    }
  }

  setActiveImage(index: number) {
    this.store.dispatch(ProductActions.selectImage({ index }))

  }

  lightboxtoggle() {
    this.imageclicked = !this.imageclicked
  }

  quantityIncrement() {
    this.store.dispatch(ProductActions.increment());
  }

  quantitydecrement() {
    this.store.dispatch(ProductActions.decrement())
  }

  addToCart() {
    this.count$.pipe(
      first()
    ).subscribe(count => {
      if (count != 0) {
        var newproduct: CartItem = {
          name: this.product.productName,
          price: this.product.productPrice,
          image: this.product.productThumbnailImages[0],
          quantity: count,
        }

        this.store.dispatch(CartActions.addToCart({ item: newproduct }));
      }
    });
  }

  slideNextActiveImage() {
    this.store.dispatch(ProductActions.imageIncrement())
  }

  slidePreviousActiveImage() {
    this.store.dispatch(ProductActions.imageDecrement())
  }


  ngOnInit(): void {
    this.product = {
      productName: 'Fall Limited Edition Sneakers',
      productDescription: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      productPrice: 125.00,
      productImages: [
        'assets/images/image-product-1.jpg',
        'assets/images/image-product-2.jpg',
        'assets/images/image-product-3.jpg',
        'assets/images/image-product-4.jpg'
      ],
      productThumbnailImages: [
        'assets/images/image-product-1-thumbnail.jpg',
        'assets/images/image-product-2-thumbnail.jpg',
        'assets/images/image-product-3-thumbnail.jpg',
        'assets/images/image-product-4-thumbnail.jpg'
      ],
      productquantity: 0,
    };
    this.images = this.product.productImages;
    this.thimages = this.product.productThumbnailImages;
  }
}
