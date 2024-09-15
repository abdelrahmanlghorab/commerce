import { Component, inject, Input } from '@angular/core';
// import * as data from '../../../products.json';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RateComponent } from "../rate/rate.component";
import { ProductsRequetsService } from '../service/products-requets.service';
import { CartitemsService } from '../service/cartitems.service';
import { CounterService } from '../service/counter.service';

// interface Product {
//   id: number;
//   name: string;
//   title: string;
//   stock: number;
//   category: string;
//   description: string;
//   price: number;
//   rating: number;
//   images: string;
// }
@Component({
  selector: 'app-carddetails',
  standalone: true,
  imports: [RateComponent, RouterLink],
  templateUrl: './carddetails.component.html',
  styleUrl: './carddetails.component.css'
})
export class CarddetailsComponent {
  @Input() id:string = '';
  product: any;
  counter: number = 0;
  constructor(private actiavtedRoute : ActivatedRoute,private productService: ProductsRequetsService) {
    this.id = this.actiavtedRoute.snapshot.params['id'];
  }
  private cartitemsService = inject(CartitemsService);
private counterservice= inject(CounterService);
ngOnInit() {
  this.productService.getProductDetails(this.id).subscribe((data: any) => {
    this.product = data;
  });
  this.counterservice.getCounter().subscribe(counter => {
    this.counter = counter;
  });
}
addToCart() {
  this.cartitemsService.addToCart(this.product);
  this.counterservice.setCounter(this.counter + 1);
}

}
