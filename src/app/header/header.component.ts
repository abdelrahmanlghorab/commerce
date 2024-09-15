import { Component, inject } from '@angular/core';
import { RouterLink ,RouterLinkActive } from '@angular/router';
import { CounterService } from '../service/counter.service';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   counter: number = 0;
   private counterService = inject(CounterService);
   ngOnInit() {
    this.counterService.getCounter().subscribe(counter => {
      this.counter = counter;
    });
  }
}
