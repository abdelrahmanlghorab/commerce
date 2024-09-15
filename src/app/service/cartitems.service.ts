import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartitemsService {
  private cartItems: any[] = [];
  private counter = new BehaviorSubject<number>( this.cartItems.reduce((total) => total + 1, 0));
  constructor() { }
  getCartItems() {
    return this.cartItems;
  }
  addToCart(item: any) {
    if (this.cartItems.some(cartItem => cartItem.product.id === item.id)) {
      const existingItem = this.cartItems.find(cartItem => cartItem.product.id === item.id);
      existingItem.quantity++;
    } else {
      this.cartItems.push({ product: item, quantity: 1 });
    }
  }
  getCounter() {
    return this.counter;
  }
  setCounter(newCounter : number){
    this.counter.next(newCounter);
  }
}
