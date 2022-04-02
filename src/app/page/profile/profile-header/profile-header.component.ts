import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../../app/config.js';
declare const body: any;
declare const title: String;
declare const name: String;

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {
  path: string = Path.url;
  name = 'Ernesto Lopez';
  onClick(){
    body();
  }
  constructor() { }
  ngOnInit(): void {
  }

}
