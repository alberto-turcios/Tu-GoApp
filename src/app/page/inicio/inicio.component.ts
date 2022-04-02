import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../app/config.js';
declare const body: any;
declare const title: String;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: [
    './inicio.component.css', 
    '../../../assets/css/app.css', 
    '../../../assets/css/style.css'
]
})
export class InicioComponent implements OnInit {
  path: string = Path.url;
  title = 'Hola Hernesto';
  onClick(){
    body();
  }
  constructor() { }
  ngOnInit(): void {
  }

}
