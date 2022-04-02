import { Component, OnInit } from '@angular/core';
import {CarouselModule} from 'primeng/carousel';

// @ts-ignore
import { Path } from '../../../app/config.js';
declare const body: any;
declare const title: String;
declare const paragraphs:String;
declare const slide: any; 


@Component({
  selector: 'app-food-category',
  templateUrl: './food-category.component.html',
  styleUrls: ['./food-category.component.css',
  '../../../assets/css/app.css', 
  '../../../assets/css/style.css'
]
})
export class FoodCategoryComponent implements OnInit {
  path: string = Path.url;
  title = 'Deléitate \n\n';
  paragraphs = 'con nuestras ricas comidas';
  onClick(){
    body();
  }
  ClickSlide(){
    slide();
  }
  constructor() { }
  ngOnInit(): void {
  }

}
