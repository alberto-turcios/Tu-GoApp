import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import {RegisterService} from '../../../services/register.service';
import { FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';


// @ts-ignore
import { Path } from '../../../../app/config.js';
declare const login: any;

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit, OnDestroy  {
  private isValidEmail =  /\S+@\S+\.\S+/;
  hide = true;
  private subscriptions :  Subscription = new Subscription();

  RegisterForm = this.fb.group({
    name: ['', Validators.required],
    mail: [
      '', 
      [Validators.required, Validators.pattern(this.isValidEmail)],
    ],
    password: ['', 
    [Validators.required, Validators.minLength(5)]],
  });
  path: string = Path.url;

  constructor(
    private registerSvc: RegisterService, 
    private fb: FormBuilder, 
    private router: Router
    ) { }

  onClick(){
    login();
  }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onRegister(): void {
    const formValue = this.RegisterForm.value;
    this.subscriptions.add(
    this.registerSvc.register(formValue).subscribe(res => {
      if(res){
        this.router.navigate([''])
      }
    })
    )
  }

  getErrorMessage(field: string){
    let message;
    if(this.RegisterForm.get(field)?.errors){
      message = 'no deje este campo vacio';
    }else if(this.RegisterForm.get(field)?.hasError('pattern')){
      message = 'email no valido';
    }else if(this.RegisterForm.get(field)?.hasError('minlength')){
      const minlength = this.RegisterForm.get(field)?.errors?.['minlength'].requiredLength;
      message = `agrege una contraseña de mas de  ${minlength} caracteres`
    }
    return message;
   }

  isValidField(field: string){
    return(
      (this.RegisterForm.get(field) || this.RegisterForm.get(field)?.dirty) && !this.RegisterForm.get(field)?.valid
    );
  }
}
