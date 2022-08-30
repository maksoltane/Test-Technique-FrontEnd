import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, Subject } from 'rxjs';
import { CartDetail } from '../models/cart-detail';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartDetailUpdate = new Subject<Product>();
  cartDetail = new CartDetail();
  constructor(private http: HttpClient) {}

  /**
   * permet de récuprer le panier sauvgarder dans localstorage
   *
   * @return {*}  {CartDetail}
   * @memberof CartService
   */
  retreiveCartDetails(): CartDetail {
    let retreiveCartDetails = localStorage.getItem('cart_details');
    if (retreiveCartDetails) {
      this.cartDetail = JSON.parse(retreiveCartDetails);
    }
    return this.cartDetail;
  }

  /**
   * Permet de récupérer la liste de catégorie de produit depuis l'api
   *
   * @return {*}  {Observable<Product[]>}
   * @memberof CartService
   */
  getListProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiBaseUrl}/products`);
  }

  /**
   * Permet e récuprer la liste des produits depuis l'api
   *
   * @return {*}  {Observable<Category[]>}
   * @memberof CartService
   */
  getListCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiBaseUrl}/categories`);
  }
}
