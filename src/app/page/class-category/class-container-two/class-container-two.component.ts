import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../../app/config.js';
declare const califications: String;
declare const time: String;
@Component({
  selector: 'app-class-container-two',
  templateUrl: './class-container-two.component.html',
  styleUrls: ['./class-container-two.component.css']
})
export class ClassContainerTwoComponent implements OnInit {
  path: string = Path.url;
  time = '10 min';
  califications = '4.5';
  constructor() { }
  ngOnInit(): void {
  }

}
