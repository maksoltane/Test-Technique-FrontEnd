import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CartDetail } from 'src/app/models/cart-detail';
import { takeUntil } from 'rxjs/operators';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  private unsubscribe$ = new Subject<void>();
  searchMobileInput = false;
  cartDetail = new CartDetail();
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartDetail = this.cartService.retreiveCartDetails();
    this.watcheCartAddProduct();
  }

  /**
   * Permet d'ajouter un élement dans le panier (header), 
   * de mettre à jour la localstorage 
   *
   * @memberof HeaderComponent
   */
  watcheCartAddProduct(): void {
    this.cartService.cartDetailUpdate
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.cartDetail.products.push(data);
        this.totalCartAmount();
        localStorage.setItem('cart_details', JSON.stringify(this.cartDetail));
      });
  }

  /**
   *
   * permetd e calculer le total du panier
   * @memberof HeaderComponent
   */
  totalCartAmount() {
    this.cartDetail.total = 0;
    this.cartDetail.products.forEach((product) => {
      this.cartDetail.total = this.cartDetail.total + product.price;
    });
  }
}
