import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// @ts-ignore
import { Path } from '../../../app/config.js';
declare const login: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ],
  encapsulation: ViewEncapsulation.None, 

})
export class LoginComponent implements OnInit {
  path: string = Path.url;
  onClick(){
    login();
  }
  constructor() { }
  ngOnInit(): void {
  }
  

}
