import { ValidationErrors, ValidatorFn,AbstractControl,FormGroup } from "@angular/forms";

export class Custompasswordvalidator {

    static passwordValidtor(regexp :RegExp,error : ValidationErrors) : ValidatorFn{

        return (control: AbstractControl): { [key: string]: any } | null => {
            if (!control.value) {
              return null;
            }
        
            // test the value of the control against the regexp supplied
            const valid = regexp.test(control.value);
        
            // if true, return no error (no error), else return error passed in the second parameter
            return valid ? null : error;
          };
        }

          static MustMatch(controlName: string, matchingControlName: string) :  ValidatorFn{
            return (control: AbstractControl): { [key: string]: any } | null => {
               const  confirmpassword = control.get('confirmpassword')?.value;
              const password  = control.get('password')?.value;
               if(confirmpassword !==password){
                control.get('confirmpassword')?.setErrors({'hasNoMatch': true});
                return {'hasNoMatch': true};
               }
               else {
                return null; 
               }  
          }
       }
    }
