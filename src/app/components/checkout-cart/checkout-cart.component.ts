import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartDetail } from 'src/app/models/cart-detail';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.css'],
})
export class CheckoutCartComponent implements OnInit {
  cartDetail = new CartDetail();

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartDetail = this.cartService.retreiveCartDetails();
  }
  returnToShop() {
    this.router.navigate(['/']);
  }
}
