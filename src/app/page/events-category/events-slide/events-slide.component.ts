import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../../app/config.js';
declare const califications: String;
declare const time: String;

@Component({
  selector: 'app-events-slide',
  templateUrl: './events-slide.component.html',
  styleUrls: ['./events-slide.component.css']
})
export class EventsSlideComponent implements OnInit {
  path: string = Path.url;
  time = '10 min';
  califications = '4.5';
  constructor() { }
  ngOnInit(): void {
  }

}
