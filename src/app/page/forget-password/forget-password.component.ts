import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../app/config.js';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: [
    './forget-password.component.css', 
    '../../../assets/css/style.css' 
  ]
})
export class ForgetPasswordComponent implements OnInit {
  path: string = Path.url;
  constructor() { }
  ngOnInit(): void {
  }

}
