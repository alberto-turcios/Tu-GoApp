import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../app/config.js';
declare const body: any;
declare const title: String;
declare const paragraphs:String;

@Component({
  selector: 'app-class-category',
  templateUrl: './class-category.component.html',
  styleUrls: ['./class-category.component.css', 
  '../../../assets/css/app.css', 
  '../../../assets/css/style.css']
})
export class ClassCategoryComponent implements OnInit {
  path: string = Path.url;
  title = 'Descubre ';
  paragraphs = 'la diversion a un tap ';
  onClick(){
    body();
  }
  constructor() { }
  ngOnInit(): void {
  }

}
