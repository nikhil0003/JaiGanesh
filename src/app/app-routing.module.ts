import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductviewComponent } from './components/productview/productview.component';
import {MyaccountComponent} from './components/myaccount/myaccount.component';
import { RegisterComponent } from './components/register/register.component';
import { Productview2Component } from './productview2/productview2.component';
import { ShopcartComponent } from './components/shopcart/shopcart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderstatusComponent } from './components/orderstatus/orderstatus.component';

const routes: Routes = [
    {    
      path: '', redirectTo: '/home', pathMatch: 'full' 
  },
  { 
    path: 'home', component: HomeComponent 
  },
  {
    path : 'productview', component: ProductviewComponent
  },
  {
    path : 'products', component: ProductsComponent
  },{
    path : 'account', component: MyaccountComponent
  }
  ,{
    path : 'register', component: RegisterComponent
  },{
    path : 'productview2', component : Productview2Component
  },{
    path : 'shopcart', component : ShopcartComponent
  },
  {path : 'checkout',component : CheckoutComponent },{
    path: 'order',component : OrderstatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {scrollPositionRestoration:'top'}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
