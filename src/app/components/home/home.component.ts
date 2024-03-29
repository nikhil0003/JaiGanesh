import { Component, OnInit, Input} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {trendproduct} from '../../domainclass/trendproduct';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  cartItems: number = 0;

  trendproductList : trendproduct[] = new Array;
  customOptions: OwlOptions = {
    autoHeight: false,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true,
   
  }
  ngOnInit(): void {

    this.trendproductList.push( {productImg1:'http://localhost:8080/image/img-1.jpg',productImg2:'http://localhost:8080/image/img-2.jpg',productName: "Men's Blazer",productPrice:'₹1500.00',strickPrice:'₹2000.00',rating:'5',productlabel:'NEW'});
    this.trendproductList.push( {productImg1:'http://localhost:8080/image/img-3.jpg',productImg2:'http://localhost:8080/image/img-4.jpg',productName: "Women's White Shirt",productPrice:'₹1500.00',strickPrice:'₹2000.00',rating:'5',productlabel:'Hot'});
    this.trendproductList.push( {productImg1:'http://localhost:8080/image/img-5.jpg',productImg2:'http://localhost:8080/image/img-6.jpg',productName: "Women's Top",productPrice:'₹1500.00',strickPrice:'₹2000.00',rating:'5',productlabel:'Trending'});
    this.trendproductList.push( {productImg1:'http://localhost:8080/image/img-7.jpg',productImg2:'http://localhost:8080/image/img-8.jpg',productName: "Women's Black Top",productPrice:'₹1500.00',strickPrice:'₹2000.00',rating:'5',productlabel:'NEW'});
  }

  addcart(){
   this.cartItems= this.cartItems+1;
  }
}
