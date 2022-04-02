
import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../../app/config.js';
declare const body: any;
declare const title: String;

@Component({
  selector: 'app-header-inicio',
  templateUrl: './header-inicio.component.html',
  styleUrls: ['./header-inicio.component.css'
]
})
export class HeaderInicioComponent implements OnInit {
  path: string = Path.url;
  title = 'Hola Hernesto';
  onClick(){
    body();
  }
  constructor() { }
  ngOnInit(): void {
  }

}
