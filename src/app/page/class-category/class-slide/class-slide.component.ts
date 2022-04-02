import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../../app/config.js';
declare const califications: String;
declare const time: String;

@Component({
  selector: 'app-class-slide',
  templateUrl: './class-slide.component.html',
  styleUrls: ['./class-slide.component.css']
})
export class ClassSlideComponent implements OnInit {
  path: string = Path.url;
  time = '10 min';
  califications = '4.5';
  constructor() { }
  ngOnInit(): void {
  }

}
