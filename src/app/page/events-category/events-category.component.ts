import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../app/config.js';
declare const body: any;
declare const title: String;
declare const paragraphs:String;
@Component({
  selector: 'app-events-category',
  templateUrl: './events-category.component.html',
  styleUrls: ['./events-category.component.css']
})
export class EventsCategoryComponent implements OnInit {
  path: string = Path.url;
  title = 'Descubre ';
  paragraphs = 'una nueva experiencia';
  onClick(){
    body();
  }
  constructor() { }
  ngOnInit(): void {
  }

}
