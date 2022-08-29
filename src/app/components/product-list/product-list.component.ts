import { Component, OnInit } from '@angular/core';
import { CartDetail } from 'src/app/models/cart-detail';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productsList: Product[] = [];
  categoryList: Category[] = [];
  cartDetail = new CartDetail();
  unsubscribe$ = new Subject<void>();
  selectedCategoryFilter!: Category;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.retreiveListProduct();
    this.retreiveListCategory();
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  addProductToCart(product: Product) {
    this.cartService.cartDetailUpdate.next(product);
  }

  retreiveListProduct(): void {
    this.cartService
      .getListProduct()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.productsList = data;
        console.log('data', data);
      });
  }

  retreiveListCategory(): void {
    this.cartService
      .getListCategory()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.categoryList = data;
        console.log('data', data);
      });
  }
}
