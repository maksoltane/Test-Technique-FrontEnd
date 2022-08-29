import { Component, OnInit } from '@angular/core';
import { CartDetail } from 'src/app/models/cart-detail';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  cartDetail = new CartDetail();

  constructor(private cartService: CartService) {
    this.cartDetail = this.cartService.retreiveCartDetails();
  }

  ngOnInit() {}
}
