import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


// @ts-ignore
import { Path } from '../../../../app/config.js';
declare const califications: String;
declare const time: String;
@Component({
  selector: 'app-food-order',
  templateUrl: './food-order.component.html',
  styleUrls: ['./food-order.component.css']
})
export class FoodOrderComponent implements OnInit {
  path: string = Path.url;
  time = '10';
  califications = '4.5';
  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  goToProductDetails(id:any) {
    this.router.navigate(['/detalle/plato', id]);
  }

  
  platillosArray =[
    { 
      id: 1, 
      img:  'https://recetacubana.com/wp-content/uploads/2019/08/arroz-con-camarones-receta.jpg', 
      time: '10', 
      name: 'Arroz con camarones',
      category: 'Almuerzo/Cena',
      califications: '4.5',
      price: '9.50', 
      calories: '145',
      description: 'Plato de camarones con arroz  acompañado de vejetales fritos incluyo bebida',
      qty: 1,
      stock: 10,
    },
    { 
      id: 2, 
      img:  'https://c4.wallpaperflare.com/wallpaper/517/845/145/pizza-italian-food-vegetarian-food-pizza-margherita-wallpaper-preview.jpg', 
      time: '12', 
      name: 'Pizza a la Margarita',
      category: 'Almuerzo',
      califications: '5',
      price: '12.90', 
      calories: '250',
      description: 'Pizza completa estilo Margarita acompañado de vejetales fritos incluyo bebida',
      qty: 1,
      stock: 12,
    }
  ];

}
