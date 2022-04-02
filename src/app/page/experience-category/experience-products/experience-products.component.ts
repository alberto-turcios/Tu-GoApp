import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../../app/config.js';
declare const califications: String;
declare const time: String;

@Component({
  selector: 'app-experience-products',
  templateUrl: './experience-products.component.html',
  styleUrls: ['./experience-products.component.css']
})
export class ExperienceProductsComponent implements OnInit {
  path: string = Path.url;
  time = '5 pm';
  califications = 'Hoy';
  constructor() { }
  ngOnInit(): void {
  }

}
