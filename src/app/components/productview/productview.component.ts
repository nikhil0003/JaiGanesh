import { Component, OnInit , AfterContentInit, ViewChild, ElementRef} from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
declare var $: any;

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit,AfterContentInit {

 product1 : boolean = true;
 product2 : boolean = false;
 product3 : boolean = false;
 product4 : boolean = false;


  constructor() { }
  ngAfterContentInit(): void {
   
    
  }

 
  ngOnInit(): void {}

     

  callproduct1(){
    this.product1=true;
    this.product2=false;
    this.product3=false;
    this.product4=false;
  }
     
  callproduct2(){
    this.product1=false;
    this.product2=true;
    this.product3=false;
    this.product4=false;
  }
  callproduct3(){
    this.product1=false;
    this.product2=false;
    this.product3=true;
    this.product4=false;
  }
  callproduct4(){
    this.product1=false;
    this.product2=false;
    this.product3=false;
    this.product4=true;
  }


}
