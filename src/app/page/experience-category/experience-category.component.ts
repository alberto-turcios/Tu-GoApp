import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../app/config.js';
declare const body: any;
declare const title: String;
declare const paragraphs:String;

declare const carousel: String;

@Component({
  selector: 'app-experience-category',
  templateUrl: './experience-category.component.html',
  styleUrls: ['./experience-category.component.css']})
export class ExperienceCategoryComponent implements OnInit {
  path: string = Path.url;
  title = 'Disfruta';
  paragraphs = 'de una sabrosa experiencia ';
  onClick(){
    body();
  }
  constructor() { }
  ngOnInit(): void {
  }

}
