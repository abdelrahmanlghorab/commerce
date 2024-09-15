import { Component, inject, Input } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { RateComponent } from "../rate/rate.component";
import { CartitemsService } from '../service/cartitems.service';
import { CounterService } from '../service/counter.service';
import { Router } from '@angular/router';
interface Product {
  id: number;
  name: string;
  title: string;
  stock: number;
  category: string;
  description: string;
  price: number;
  rating: number;
  images: string;
}
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgbRatingModule, RateComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  counter: number = 0;
  
@Input () product:Product = {
  id: 0,
  name: '',
  title: '',
  stock: 0,
  category: '',
  description: '',
  price: 0,
  rating: 0,
  images: '',
}

private cartitemsService = inject(CartitemsService);
private counterservice= inject(CounterService);
private router = inject(Router);
ngOnInit() {
  this.counterservice.getCounter().subscribe(counter => {
    this.counter = counter;
  });
}
addToCart() {
  if (this.product.stock > this.counter) {
    this.cartitemsService.addToCart(this.product);
    this.counterservice.setCounter(this.counter + 1);
  }else{
  alert("out of stock");}
}
navigateToDetails(id: number) {
  this.router.navigate([`/carddetails/${id}`]);
}

}