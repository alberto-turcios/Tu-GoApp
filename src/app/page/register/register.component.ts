import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../app/config.js';
declare const login: any;


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.css',
    '../../../assets/css/style.css'  
  ]
})
export class RegisterComponent implements OnInit {
  path: string = Path.url;
  constructor() { }
  onClick(){
    login();
  }
  ngOnInit(): void {
  }

}
