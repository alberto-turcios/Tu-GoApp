import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../../app/config.js';
declare const body: any;
declare const title: String;

@Component({
  selector: 'app-tienda-cuidado-personal',
  templateUrl: './tienda-cuidado-personal.component.html',
  styleUrls: ['./tienda-cuidado-personal.component.css']
})
export class TiendaCuidadoPersonalComponent implements OnInit {
  path: string = Path.url;
  onClick(){
    body();
  }
  constructor() { }
  ngOnInit(): void {
  }

  productArray =[
    { 
      prodId: 24,
      img: 'https://dojiw2m9tvv09.cloudfront.net/46114/product/30229833gelscott1026.png',
      name: 'Alcohol gel',
      description: 'Alcohol gel 300ml',
      price: '3.50',
      qty: 1,
    },
    { 
      prodId: 25,
      img: 'https://www.sanpellegrino.com/media//spain/product-range/water/glass/25cl/glass-range-water-25cl_front.jpg',
      name: 'Jabon de baño',
      description: 'Jabon de baño  de avena', 
      price: '1.50',
      qty: 1,
    }
  ];

  itemsCart: any = [];
  addCart(prod: any){
    let cartDataNull = localStorage.getItem('Cart');
    if(cartDataNull == null){
      let storeDataGet: any = [];
      storeDataGet.push(prod);
      localStorage.setItem('Cart', JSON.stringify(storeDataGet))
    }else{
      var id = prod.prodId;
      let index: number = -1;
      this.itemsCart = JSON.parse(localStorage.getItem('Cart') || '{}');
      for (let i = 0; i < this.itemsCart.length; i++){
        if(parseInt(id) === parseInt(this.itemsCart[i].prodId)){
          this.itemsCart[i].qty = prod.qty;
          index = i;
          break;
        }
      }
      if(index == -1){
        this.itemsCart.push(prod);
        localStorage.setItem('Cart', JSON.stringify(this.itemsCart));
      }else{
        localStorage.setItem('Cart', JSON.stringify(this.itemsCart));
      }
    }
  }
}
