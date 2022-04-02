import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../../app/config.js';
declare const body: any;
declare const slide: any; 

@Component({
  selector: 'app-food-promotion',
  templateUrl: './food-promotion.component.html',
  styleUrls: ['./food-promotion.component.css', 
  '../../../../assets/css/style.css',]
})
export class FoodPromotionComponent implements OnInit {
  path: string = Path.url;
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
