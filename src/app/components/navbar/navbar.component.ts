import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
    $('.mymenubutton').on('click',function(){
      $('.sidebar-nav').addClass('opencl');
   });
    $('.dropmenuclass').hover(function(){
       $('.card').stop().slideToggle(200);

       } 
    );

    $('.dropmenuclass1').hover(function(){
      $('.card1').stop().slideToggle(200).css('display','blocked');
      } 
   );
}
}
