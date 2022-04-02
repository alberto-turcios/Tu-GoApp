import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../../app/config.js';
declare const body: any;
declare const title: String;
declare const price: String;

@Component({
  selector: 'app-compra-finalizada-form',
  templateUrl: './compra-finalizada-form.component.html',
  styleUrls: ['./compra-finalizada-form.component.css',  
  '../../../../assets/css/app.css', 
  '../../../../assets/css/style.css',]
})
export class CompraFinalizadaFormComponent implements OnInit {
  path: string = Path.url;
  title = 'Resumen de tu orden';
  description = ''; 
  amount: number = 1;
  number: number = 4523;

  room = 'Habitacion Delux #2';
  user = 'Ernesto Lopez';
  message = 'Se te entregara en un maximo de 10 min';

  constructor() { }
  ngOnInit(): void {
  }

}
