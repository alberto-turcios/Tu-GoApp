import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../../app/config.js';
@Component({
  selector: 'app-food-details-form',
  templateUrl: './food-details-form.component.html',
  styleUrls: ['./food-details-form.component.css',
  '../../../../assets/css/app.css', 
  '../../../../assets/css/style.css']
})
export class FoodDetailsFormComponent implements OnInit {
  path: string = Path.url;
  description = 'Plato de arroz con camarones fritos en ajo vejetales salteados';
  category = 'almuerzo/cena';
  title = 'Arroz con camarones';
  amount: number = 1;
  price = '5.40';

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
