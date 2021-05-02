import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,NgForm, FormControl} from '@angular/forms';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  loginForm : FormGroup ;
  isSubmitted : boolean =false;
  constructor () {
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
console.log(loginform.value);
console.log('invalid ='+ loginform.invalid);
console.log('error =' +this.loginControls['username'].errors);

}
  
}
