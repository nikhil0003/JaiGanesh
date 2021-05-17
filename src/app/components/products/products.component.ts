import { getLocaleTimeFormat } from '@angular/common';
import { Component, OnInit ,OnChanges, SimpleChanges} from '@angular/core';
import {trendproduct} from '../../domainclass/trendproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnChanges {

  cartItems :number=0;
  trendproductList : trendproduct[] = new Array;
  displayNavbar : string='block';
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    this.trendproductList.push( {productImg1:'http://localhost:8080/image/img-1.jpg',productImg2:'http://localhost:8080/image/img-2.jpg',productName: "Men's Blazer",productPrice:'₹1500.00',strickPrice:'₹2000.00',rating:'5',productlabel:'NEW'});
    this.trendproductList.push( {productImg1:'http://localhost:8080/image/img-3.jpg',productImg2:'http://localhost:8080/image/img-4.jpg',productName: "Women's White Shirt",productPrice:'₹1500.00',strickPrice:'₹2000.00',rating:'5',productlabel:'Hot'});
    this.trendproductList.push( {productImg1:'http://localhost:8080/image/img-5.jpg',productImg2:'http://localhost:8080/image/img-6.jpg',productName: "Women's Top",productPrice:'₹1500.00',strickPrice:'₹2000.00',rating:'5',productlabel:'Trending'});
    this.trendproductList.push( {productImg1:'http://localhost:8080/image/img-7.jpg',productImg2:'http://localhost:8080/image/img-8.jpg',productName: "Women's Black Top",productPrice:'₹1500.00',strickPrice:'₹2000.00',rating:'5',productlabel:'NEW'});
    this.trendproductList.push( {productImg1:'http://localhost:8080/image/img-1.jpg',productImg2:'http://localhost:8080/image/img-2.jpg',productName: "Men's Blazer",productPrice:'₹1500.00',strickPrice:'₹2000.00',rating:'5',productlabel:'NEW'});
    
    this.trendproductList.push( {productImg1:'http://localhost:8080/image/img-1.jpg',productImg2:'http://localhost:8080/image/img-2.jpg',productName: "Men's Blazer",productPrice:'₹1500.00',strickPrice:'₹2000.00',rating:'5',productlabel:'NEW'});
    this.trendproductList.push( {productImg1:'http://localhost:8080/image/img-3.jpg',productImg2:'http://localhost:8080/image/img-4.jpg',productName: "Women's White Shirt",productPrice:'₹1500.00',strickPrice:'₹2000.00',rating:'5',productlabel:'Hot'});
    this.trendproductList.push( {productImg1:'http://localhost:8080/image/img-5.jpg',productImg2:'http://localhost:8080/image/img-6.jpg',productName: "Women's Top",productPrice:'₹1500.00',strickPrice:'₹2000.00',rating:'5',productlabel:'Trending'});
    this.trendproductList.push( {productImg1:'http://localhost:8080/image/img-7.jpg',productImg2:'http://localhost:8080/image/img-8.jpg',productName: "Women's Black Top",productPrice:'₹1500.00',strickPrice:'₹2000.00',rating:'5',productlabel:'NEW'});
    this.trendproductList.push( {productImg1:'http://localhost:8080/image/img-1.jpg',productImg2:'http://localhost:8080/image/img-2.jpg',productName: "Men's Blazer",productPrice:'₹1500.00',strickPrice:'₹2000.00',rating:'5',productlabel:'NEW'});

    
    this.trendproductList.push( {productImg1:'http://localhost:8080/image/img-1.jpg',productImg2:'http://localhost:8080/image/img-2.jpg',productName: "Men's Blazer",productPrice:'₹1500.00',strickPrice:'₹2000.00',rating:'5',productlabel:'NEW'});
    this.trendproductList.push( {productImg1:'http://localhost:8080/image/img-3.jpg',productImg2:'http://localhost:8080/image/img-4.jpg',productName: "Women's White Shirt",productPrice:'₹1500.00',strickPrice:'₹2000.00',rating:'5',productlabel:'Hot'});
    this.trendproductList.push( {productImg1:'http://localhost:8080/image/img-5.jpg',productImg2:'http://localhost:8080/image/img-6.jpg',productName: "Women's Top",productPrice:'₹1500.00',strickPrice:'₹2000.00',rating:'5',productlabel:'Trending'});
    this.trendproductList.push( {productImg1:'http://localhost:8080/image/img-7.jpg',productImg2:'http://localhost:8080/image/img-8.jpg',productName: "Women's Black Top",productPrice:'₹1500.00',strickPrice:'₹2000.00',rating:'5',productlabel:'NEW'});
    this.trendproductList.push( {productImg1:'http://localhost:8080/image/img-1.jpg',productImg2:'http://localhost:8080/image/img-2.jpg',productName: "Men's Blazer",productPrice:'₹1500.00',strickPrice:'₹2000.00',rating:'5',productlabel:'NEW'});
    
    
  
  }

  addcart(){
    this.cartItems= this.cartItems+1;
   }

   closeFilterview(){
    this.displayNavbar='none';
   }
   openFilterview(){
    this.displayNavbar='block';
   }
   checking(){
     return {
       'display': this.displayNavbar
     };
   }
  
}
