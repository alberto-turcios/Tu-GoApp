import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../app/config.js';
declare const body: any;
@Component({
  selector: 'app-slide-promotion',
  templateUrl: './slide-promotion.component.html',
  styleUrls: ['./slide-promotion.component.css']
})
export class SlidePromotionComponent implements OnInit {
  path: string = Path.url;
  onClick(){
    body();
  }
  constructor() { }
  ngOnInit(): void {
  }

}
