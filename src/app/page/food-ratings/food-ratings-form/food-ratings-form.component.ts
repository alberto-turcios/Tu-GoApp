import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../../app/config.js';
@Component({
  selector: 'app-food-ratings-form',
  templateUrl: './food-ratings-form.component.html',
  styleUrls: ['./food-ratings-form.component.css']
})
export class FoodRatingsFormComponent implements OnInit {
  path: string = Path.url;
  description = 'Plato de arroz con camarones fritos en ajo vejetales salteados';
  category = 'almuerzo/cena';
  title = 'Arroz con camarones';
  amount: number = 1;
  price = '5.40';
  constructor() { }
  ngOnInit(): void {
  }

}
