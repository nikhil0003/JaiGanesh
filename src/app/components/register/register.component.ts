import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators,AbstractControl } from '@angular/forms';
import {Custompasswordvalidator} from '../../domainclass/custompasswordvalidator';
import {LoginService} from '../../services/login.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm : FormGroup;
  isSubmitted :  boolean = false;
  userAlreadyFound : boolean = false;
  UserCreated : boolean = false;
  constructor(private loginService : LoginService) { 
    
  }

  ngOnInit(): void {
    this.regForm = new FormGroup({
      'username' : new FormControl('', Validators.compose([Validators.required,Validators.email])),
      'password' : new FormControl('',Validators.compose([
        Validators.required,
        Custompasswordvalidator.passwordValidtor(/\d/,{hasNumber:true}),
        Custompasswordvalidator.passwordValidtor(/[A-Z]/,{ hasCaptial:true}),
        Custompasswordvalidator.passwordValidtor(/[a-z]/,{ hasSmall:true}),
        Validators.minLength(8)
      ])),
      'confirmpassword' : new FormControl('',[Validators.required
      ])
    },{
     validators :[Custompasswordvalidator.MustMatch('password','confirmpassword')] 
    }

    );
}


get loginControls(){
  return this.regForm.controls;
}

registerc(regisform  : FormGroup){
  this.isSubmitted = !this.isSubmitted;
 
 if(regisform.valid) {
  console.log(  regisform.value    );
  this.loginService.register(regisform.controls['username'].value,regisform.controls['password'].value).subscribe(
    (resp : any )=>{
    
     if(resp['username']==="userAlreadyFound"){
       this.userAlreadyFound=resp['username'];
     }else{
       this.UserCreated= true;
     }
    }
  )
;
 }

}
}
