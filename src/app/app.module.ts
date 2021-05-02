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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FootbarComponent,
    ProductviewComponent,
    ProductsComponent,
    MyaccountComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
