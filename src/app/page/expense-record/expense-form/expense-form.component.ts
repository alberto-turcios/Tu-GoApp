import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

// @ts-ignore
import { Path } from '../../../../app/config.js';
declare const body: any;
declare const title: String;
declare const price: String;
@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css',  
  '../../../../assets/css/app.css', 
  '../../../../assets/css/style.css',]
})
export class ExpenseFormComponent implements OnInit {
  path: string = Path.url;
  title = 'Actividad de Gastos';
  description = ''; 
  price = '349.00';
  onClick(){
    body();
  }
  constructor() {}
  ngOnInit(): void {
    const lineCanvasEle: any = document.getElementById('line_chart')
    const lineChar = new Chart(lineCanvasEle.getContext('2d'), {
      type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            { 
              data: [65, 59, 80, 81, 56, 55, 40], 
              label: 'Sales', 
              borderColor: '#13B065', 
              backgroundColor: '#FFFFFF',
              fill: true,
              tension: 0.4
              },
          ],
        },
        options: {
          
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true
              }
          }
        }
      });
  
  }
}
