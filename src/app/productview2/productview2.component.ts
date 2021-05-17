import { Component, OnInit } from '@angular/core';
import {trendproduct} from '../domainclass/trendproduct';

@Component({
  selector: 'app-productview2',
  templateUrl: './productview2.component.html',
  styleUrls: ['./productview2.component.css']
})
export class Productview2Component implements OnInit {
  trendproductList : trendproduct[] = new Array;

  constructor() { }

  ngOnInit(): void {
 
    this.trendproductList.push( {productImg1:'http://localhost:8080/image/img-1.jpg',productImg2:'http://localhost:8080/image/img-2.jpg',productName: "Men's Blazer",productPrice:'₹1500.00',strickPrice:'₹2000.00',rating:'5',productlabel:'NEW'});
    this.trendproductList.push( {productImg1:'http://localhost:8080/image/img-3.jpg',productImg2:'http://localhost:8080/image/img-4.jpg',productName: "Women's White Shirt",productPrice:'₹1500.00',strickPrice:'₹2000.00',rating:'5',productlabel:'Hot'});
    this.trendproductList.push( {productImg1:'http://localhost:8080/image/img-5.jpg',productImg2:'http://localhost:8080/image/img-6.jpg',productName: "Women's Top",productPrice:'₹1500.00',strickPrice:'₹2000.00',rating:'5',productlabel:'Trending'});
    this.trendproductList.push( {productImg1:'http://localhost:8080/image/img-7.jpg',productImg2:'http://localhost:8080/image/img-8.jpg',productName: "Women's Black Top",productPrice:'₹1500.00',strickPrice:'₹2000.00',rating:'5',productlabel:'NEW'});


    $(document).ready(function() {
      $("#sidebarCollapse").on("click", function() {
        $("#sidebar").addClass("active");
      });
    
      $("#sidebarCollapseX").on("click", function() {
        $("#sidebar").removeClass("active");
      });
    
      $("#sidebarCollapse").on("click", function() {
        if ($("#sidebar").hasClass("active")) {
          $(".overlay").addClass("visible");
          console.log("it's working!");
        }
      });
    
      $("#sidebarCollapseX").on("click", function() {
        $(".overlay").removeClass("visible");
      });
    });
  }
    
  
}
