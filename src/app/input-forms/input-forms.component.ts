import { Component } from '@angular/core';

@Component({
  selector: 'app-input-forms',
  templateUrl: './input-forms.component.html',
  styleUrls: ['./input-forms.component.css']
})
export class InputFormsComponent {
  inputEmail:string =''
  inputPassword:string =''
  credentails:string =''
  showCredentials(){
    this.credentails = 'Your Id is' + this.inputEmail + '& Your Password is: ' + this.inputPassword
    
  }

}
