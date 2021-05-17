import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators ,NgForm, FormControl} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  token : boolean ;
  loginForm : FormGroup ;
  isSubmitted : boolean =false;
  constructor (private loginService : LoginService,private router:Router) {
   this.loginForm = new FormGroup({
    'username': new FormControl('',[Validators.email,Validators.required]),
    'password' : new FormControl('',[Validators.required]),
   });
  }
    
  ngOnInit() {
 
}

get loginControls() { 
  return this.loginForm.controls; 
}


login( loginform : FormGroup){
  this.isSubmitted = true;
this.loginService.checkLogin(
  loginform.controls['username'].value,loginform.controls['password'].value).subscribe(
    (rep : any) =>{
     this.token = rep['token'];
     this.router.navigate(['/home']);
    localStorage.setItem('hello',rep['token']);
    },
    (err) => {
      console.log(err);
    }

  );
}
  
}
