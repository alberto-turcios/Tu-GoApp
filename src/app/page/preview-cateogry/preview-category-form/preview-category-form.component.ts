import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../../app/config.js';

@Component({
  selector: 'app-preview-category-form',
  templateUrl: './preview-category-form.component.html',
  styleUrls: ['./preview-category-form.component.css',
  '../../../../assets/css/app.css', 
  '../../../../assets/css/style.css']
})
export class PreviewCategoryFormComponent implements OnInit {
  path: string = Path.url;
  description = 'Estas dispuesto a adentrarte al mar y disfrutar de las olas salvajes esta clase de surf es para ti.';
  title = 'Clase de Surft';
  amount: number = 1;
  price = '25.00';
  constructor() { }

  ngOnInit(): void {
  }

  complementosArray =[
    { 
      name: 'Pan', 
      precio:  '0.35'
    },
    { 
      name: 'Ensalada', 
      precio:  '1.35'
    },
    { 
      name: 'Queso', 
      precio:  '0.35'
    }
  ];

  bebidasArrays=[
    { 
      name: 'Coca-cola 12oz', 
      precio:  '1.35'
    },
    { 
      name: 'Agua', 
      precio:  '0.50'
    },
    { 
      name: 'sangria', 
      precio:  '1.25'
    }
  ];

  

  addItem(){
    if(this.amount != 9){
      this.amount += 1;
    }
  }

  removeItem(){
    if(this.amount != 1){
      this.amount -= 1;
    }
  }

  price_new(amount: number){
    amount * 3.50;
  }

}
