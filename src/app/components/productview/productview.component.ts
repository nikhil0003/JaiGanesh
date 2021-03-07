import { Component, OnInit , AfterContentInit, ViewChild, ElementRef} from '@angular/core';
import * as $ from 'jquery';
import { CarouselModule } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {
  
  constructor() { }

 
  ngOnInit(): void {

       /* ===============================================================
         PRODUCT SLIDER
      =============================================================== */

   
     
     


    /* ===============================================================
         PRODUCT QUNATITY
      =============================================================== */
      // $('.dec-btn').click(function () {
      //     var siblings = $(this).siblings('input');
      //     if (parseInt(siblings.val(), 10) >= 1) {
      //         siblings.val(parseInt(siblings.val(), 10) - 1);
      //     }
      // });

      // $('.inc-btn').click(function () {
      //     var siblings = $(this).siblings('input');
      //     siblings.val(parseInt(siblings.val(), 10) + 1);
      // });
  }

}
