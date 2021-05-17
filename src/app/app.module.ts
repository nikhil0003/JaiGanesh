import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FootbarComponent } from './components/footbar/footbar.component';
import { ProductviewComponent } from './components/productview/productview.component';
import { ProductsComponent } from './components/products/products.component';
import { MyaccountComponent } from './components/myaccount/myaccount.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import {LoginService} from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { Productview2Component } from './productview2/productview2.component';
import { ShopcartComponent } from './components/shopcart/shopcart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderstatusComponent } from './components/orderstatus/orderstatus.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FootbarComponent,
    ProductviewComponent,
    ProductsComponent,
    MyaccountComponent,
    RegisterComponent,
    Productview2Component,
    ShopcartComponent,
    CheckoutComponent,
    OrderstatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
