import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cart } from '../model/cart';
import { Observable } from 'rxjs';
import { CartItem } from '../model/cartItem';
import { ShippingFee } from '../model/shippingFee';
import { Payment } from '../model/payment';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addCart(cart:Cart): Observable<Cart> {
    return this.http.post<Cart>(`${this.apiServerUrl}customer/addToCart`, cart);
  }

  public getCartItem(userId: number): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(`${this.apiServerUrl}customer/cart/user/${userId}`);
  }

  public deleteItem(itemId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}customer/removeItem/${itemId}`);
  }

  public getShippingFee(): Observable<ShippingFee[]> {
    return this.http.get<ShippingFee[]>(`${this.apiServerUrl}admin/allShipping`);
  }

  public getPayment(): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.apiServerUrl}admin/allPayment`);
  }

  public addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.apiServerUrl}customer/order`, order);
  }

  public updateAmount(cart:Cart): Observable<Cart> {
    return this.http.put<Cart>(`${this.apiServerUrl}customer/updateToCart`, cart);
  }
}
