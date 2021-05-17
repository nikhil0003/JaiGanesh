import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {LoginService} from '../../services/login.service';
import {catchError, retry} from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private loginService : LoginService) { }

  islogined : boolean =false ;

  @Input()
  cartNumber : number;
  ngOnInit(): void { 
    $('.dropmenuclass').hover(function(){
       $('.card').stop().slideToggle(200);

       } 
    );

    $('.dropmenuclass1').hover(function(){
      $('.card1').stop().slideToggle(200).css('display','blocked');
      } 
   );
  this.callcheck();
  
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

callcheck(){
  this.loginService.checkActive().pipe(retry(1),catchError((err : HttpErrorResponse) =>{
    let errormsg ='';
    if(err.error instanceof ErrorEvent){
      errormsg = `Error: ${err.error.message}`;
      this.islogined = false;
    }
    else {
      this.islogined = false;
      errormsg = `Error: ${err.error.message}`;
    }
return throwError(errormsg);
  }))
  .subscribe(
    (resp) =>{
      this.islogined = true;
    }
    ,(err) =>{
      this.islogined = false;
    });
}

logout(){ 
  this.loginService.offActive().pipe(retry(1),catchError((err : HttpErrorResponse) =>{
    let errormsg ='';
    if(err.error instanceof ErrorEvent){
      errormsg = `Error: ${err.error.message}`;
      this.islogined = false;
    }
    else {
      this.islogined = false;
      errormsg = `Error: ${err.error.message}`;
    }
return throwError(errormsg);
  })).subscribe(
    (res)=>{
         this.islogined=false;
    }
  );

}
}
