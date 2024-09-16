import { Routes } from '@angular/router';
import { CardlistComponent } from './cardlist/cardlist.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CartComponent } from './cart/cart.component';
import { CarddetailsComponent } from './carddetails/carddetails.component';


export const routes: Routes = [
    {
      path: '',
      component: CardlistComponent,
      title: 'Home Page',
    },
    {
      path: 'commerce',
      component: CardlistComponent,
      title: 'Home Page',
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login Page',
    },
    {
      path: 'register',
      component: RegisterComponent,
      title: 'Register Page',
    },
    {
        path: 'carddetails/:id',
        component: CarddetailsComponent,
        title: 'Product Details',
    },
    {
        path: 'cart',
        component: CartComponent,
        title: 'Cart Page',
    },
    {
      path: '**',
      component: NotfoundComponent,
      title: 'Not Found Page',
    },
  ];
  
