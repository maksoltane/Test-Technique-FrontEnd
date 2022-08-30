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
  selectedCategoryFilter: string = '';
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.retreiveListProduct();
    this.retreiveListCategory();
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  /**
   * Permet d'ajouter un produit dansle panier
   *
   * @param {Product} product
   * @memberof ProductListComponent
   */
  addProductToCart(product: Product) {
    this.cartService.cartDetailUpdate.next(product);
  }

  /**
   * Permet de récupérer la liste des produits
   *
   * @memberof ProductListComponent
   */
  retreiveListProduct(): void {
    this.cartService
      .getListProduct()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.productsList = data;
      });
  }

  /**
   * Permet de récuprérer la liste des catégories
   * 
   * @memberof ProductListComponent
   */
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
