import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../../app/config.js';
declare const califications: String;
declare const time: String;

@Component({
  selector: 'app-class-container-one',
  templateUrl: './class-container-one.component.html',
  styleUrls: ['./class-container-one.component.css']
})
export class ClassContainerOneComponent implements OnInit {
  path: string = Path.url;
  time = '10 min';
  califications = '4.5';
  constructor() { }
  ngOnInit(): void {
  }

}
