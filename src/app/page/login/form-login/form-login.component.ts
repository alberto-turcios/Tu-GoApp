import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';


// @ts-ignore
import { Path } from '../../../config.js';
declare const login: any;

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css' 
],
encapsulation: ViewEncapsulation.None, 
})
export class FormLoginComponent implements OnInit, OnDestroy {
  private isValidEmail =  /\S+@\S+\.\S+/;
  hide = true;
  private subscriptions :  Subscription = new Subscription();

  loginForm = this.fb.group({
    
    mail: [
      '', 
      [Validators.required, Validators.pattern(this.isValidEmail)],
    ],
    password: ['', 
    [Validators.required, Validators.minLength(5)]],
  });

  path: string = Path.url;
  constructor(
    private authSvc: AuthService, 
    private fb: FormBuilder, 
    private router: Router
    ) { }
  
  onClick(){
    login();
  }
  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onLogin(): void {
    const formValue = this.loginForm.value;
    this.subscriptions.add(
    this.authSvc.login(formValue).subscribe(res => {
      if(res){
        this.router.navigate(['/inicio'])
      }
    })
    )
  }

  getErrorMessage(field: string){
    let message;
    if(this.loginForm.get(field)?.errors){
      message = 'no deje este campo vacio';
    }else if(this.loginForm.get(field)?.hasError('pattern')){
      message = 'email no valido';
    }else if(this.loginForm.get(field)?.hasError('minlength')){
      const minlength = this.loginForm.get(field)?.errors?.['minlength'].requiredLength;
      message = `agrege una contraseña de mas de  ${minlength} caracteres`
    }
    return message;
   }

  isValidField(field: string){
    return(
      (this.loginForm.get(field) || this.loginForm.get(field)?.dirty) && !this.loginForm.get(field)?.valid
    );
  }
}
