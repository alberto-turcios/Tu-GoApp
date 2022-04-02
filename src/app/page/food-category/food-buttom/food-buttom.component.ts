import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../../app/config.js';
declare const body: any;
declare const title: String;

@Component({
  selector: 'app-food-buttom',
  templateUrl: './food-buttom.component.html',
  styleUrls: ['./food-buttom.component.css',   
  '../../../../assets/css/app.css', 
  '../../../../assets/css/style.css',]
})
export class FoodButtomComponent implements OnInit {
  path: string = Path.url;
  title = 'Hola Hernesto';
  onClick(){
    body();
  }
  constructor() { }
  ngOnInit(): void {
  }

}
