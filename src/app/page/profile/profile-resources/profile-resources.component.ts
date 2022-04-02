import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../../app/config.js';
declare const body: any;
declare const title: String;
declare const name: String;
declare const price: String;

@Component({
  selector: 'app-profile-resources',
  templateUrl: './profile-resources.component.html',
  styleUrls: ['./profile-resources.component.css',  
  '../../../../assets/css/app.css', 
  '../../../../assets/css/style.css',]
})
export class ProfileResourcesComponent implements OnInit {
  path: string = Path.url;
  name = 'Monica Lopez';
  price = '349.00'
  onClick(){
    body();
  }
  constructor() { }
  ngOnInit(): void {
  }

}
