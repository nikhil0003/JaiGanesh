import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductviewComponent } from './components/productview/productview.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
