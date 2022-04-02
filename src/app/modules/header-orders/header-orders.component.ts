import { Component, OnInit } from '@angular/core';

// @ts-ignore
import { Path } from '../../../app/config.js';
declare const body: any;
declare const title: String;
declare const paragraphs:String;
declare const carousel: String;

@Component({
  selector: 'app-header-orders',
  templateUrl: './header-orders.component.html',
  styleUrls: ['./header-orders.component.css']
})
export class HeaderOrdersComponent implements OnInit {
  path: string = Path.url;
  onClick(){
    body();
  }
  califications = '4.5';
  description = '';  
  pageTitle = 'default page title';
  image: string = 'https://makanacharters.com/wp-content/uploads/2022/01/surfing-in-kauai.jpeg';
  constructor() { }

  ngOnInit(): void {
  }

}
