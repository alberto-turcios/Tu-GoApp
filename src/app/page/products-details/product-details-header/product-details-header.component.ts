import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../../app/config.js';
declare const body: any;
declare const title: String;
declare const paragraphs : String;

@Component({
  selector: 'app-product-details-header',
  templateUrl: './product-details-header.component.html',
  styleUrls: ['./product-details-header.component.css' ]
})
export class ProductDetailsHeaderComponent implements OnInit {
  path: string = Path.url;
  img: string = 'https://www.sanpellegrino.com/media//spain/product-range/water/glass/25cl/glass-range-water-25cl_front.jpg';
  title_1 = 'Agua Mineral PELLEGRINO';
  paragraphs_1 = 'Agua Mineral SAN PELLEGRINO 500 ml Botella de agua completamente sellada de uso personal';
  price: string = '5.40'
  amount: number = 1;

  onClick(){
    body();
  }

  constructor() { }
  ngOnInit(): void {
  }

  productArray =[
    { 
      prodId: 1,
      img: 'https://thumbs.dreamstime.com/b/londres-reino-unido-de-diciembre-botella-agua-mineral-natural-evian-en-un-blanco-hecho-francia-105731389.jpg',
      name: 'Agua Natural evian',
      description: 'Agua Embotellada natural evian 500 ml', 
      price: 5.40,
      qty: 1
    },
    { 
      prodId: 2,
      img: 'https://s.cornershopapp.com/product-images/911683.jpg?versionId=LkTqnsUK1DxQUbBrC9JGte0G4MUAFrmP',
      name: 'Jugo de Naranja',
      description: 'Botella de jugo de Naranja 500 ml', 
      price: 3.40,
      qty: 1
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
