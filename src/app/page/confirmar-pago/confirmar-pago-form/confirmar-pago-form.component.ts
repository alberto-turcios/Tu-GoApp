import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../../app/config.js';
declare const body: any;
declare const title: String;
declare const price: String;


@Component({
  selector: 'app-confirmar-pago-form',
  templateUrl: './confirmar-pago-form.component.html',
  styleUrls: ['./confirmar-pago-form.component.css',  
  '../../../../assets/css/app.css', 
  '../../../../assets/css/style.css',]
})
export class ConfirmarPagoFormComponent implements OnInit {
  path: string = Path.url;
  title = 'Resumen de tu orden';
  description = ''; 
  amount: number = 1;
  number: number = 4523;
  constructor() { }

  ngOnInit(): void {
  }

}
