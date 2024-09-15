import { Component, inject } from '@angular/core';
import { CounterService } from '../service/counter.service';
import { CartitemsService } from '../service/cartitems.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
cartItems: any[] = [];
totalPrice: number = 0;
counter: number = 0;
headercounter: number = 0;
private cartitemsService = inject(CartitemsService);
private counterService = inject(CounterService);
ngOnInit() {
  this.cartItems = this.cartitemsService.getCartItems();
  this.counterService.getCounter().subscribe(counter => {
    this.headercounter = counter;
  });
  this.calculateTotalPrice();
  this.calulatequantity();
}
removeFromCart(item: any) {
  const index = this.cartItems.indexOf(item);
  if (index !== -1) {
    this.cartItems.splice(index, 1);
  }
  this.calulatequantity();
  this.calculateTotalPrice();
  this.counterService.setCounter(this.headercounter - (1*item.quantity));
}
calculateTotalPrice() {
  this.totalPrice = this.cartItems.reduce((total, item) => total + (item.product.price*item.quantity), 0);
}
calulatequantity() {
  this.counter = this.cartItems.reduce((total) => total + 1, 0);
}
increaseQuantity(item: any) {
  if (item.quantity < item.product.stock) {
  item.quantity++;
  this.calculateTotalPrice();
  this.calulatequantity();
  this.counterService.setCounter(this.headercounter + 1);
  }else{
    alert("out of stock");
  }
}
decreaseQuantity(item: any) {
  if (item.quantity > 1) {
    item.quantity--;
    this.calculateTotalPrice();
    this.calulatequantity();
    this.counterService.setCounter(this.headercounter - 1);
  }
}
}
