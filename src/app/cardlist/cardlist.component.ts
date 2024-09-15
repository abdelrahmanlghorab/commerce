import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
// import * as data from "../../../products.json";
import { ProductsRequetsService } from '../service/products-requets.service';
@Component({
  selector: 'app-cardlist',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cardlist.component.html',
  styleUrl: './cardlist.component.css'
})
export class CardlistComponent {
  products:any;
  constructor(private productsService:ProductsRequetsService){}
  ngOnInit(){
    this.productsService.getproducts().subscribe((res:any)=>{
      this.products = res.products;
    })
  }

}
