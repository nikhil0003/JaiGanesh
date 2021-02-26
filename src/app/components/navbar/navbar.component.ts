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
  //   $('.mymenubutton').on('click',function(){
  //     $('.sidebar-nav').addClass('opencl');
  //  });
   
    $('.dropmenuclass').hover(function(){
       $('.card').stop().slideToggle(200);

       } 
    );

    $('.dropmenuclass1').hover(function(){
      $('.card1').stop().slideToggle(200).css('display','blocked');
      } 
   );
}

closeNav() {
  $('.sidebar-nav').addClass('closecl'); 
  $('.sidebar-nav').removeClass('opencl');
  $('.nav-overlay').removeClass('open');

}

openNav(){
  $('.sidebar-nav').addClass('opencl');
  $('.nav-overlay').addClass('open');
  $('.sidebar-nav').removeClass('closecl');
}

closeoutNav(){
  $('.sidebar-nav').addClass('closecl'); 
  $('.sidebar-nav').removeClass('opencl');
  $('.nav-overlay').removeClass('open');
}
}
