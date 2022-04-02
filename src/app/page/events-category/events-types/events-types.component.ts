import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../../app/config.js';
declare const califications: String;
declare const time: String;

@Component({
  selector: 'app-events-types',
  templateUrl: './events-types.component.html',
  styleUrls: ['./events-types.component.css']
})
export class EventsTypesComponent implements OnInit {
  path: string = Path.url;
  time = '10 min';
  califications = '20';
  constructor() { }
  ngOnInit(): void {
  }

}
