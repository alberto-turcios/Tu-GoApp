import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../../app/config.js';
declare const body: any;
declare const title: String;

@Component({
  selector: 'app-interesting-products',
  templateUrl: './interesting-products.component.html',
  styleUrls: ['./interesting-products.component.css']
})
export class InterestingProductsComponent implements OnInit {
  path: string = Path.url;
  onClick(){
    body();
  }
  constructor() { }
  ngOnInit(): void {
  }

  productArray =[
    { 
      prodId: 6,
      img: './../../../../assets/img/art7.png',
      name: 'Red Apple',
      description: 'Imported Simla', 
      price:'3.50',
      qty: 1,
      descount: '10% off'
    },
    { 
      prodId: 7,
      img: './../../../../assets/img/art8.png',
      name: 'Green Grapes',
      description: 'Chilled fresh', 
      price: '4.50',
      qty: 1,
      descount: '10% off'
    },
    { 
      prodId: 8,
      img: './../../../../assets/img/art3.png',
      name: 'Orange',
      description: 'Sweet and Juicy', 
      price: '5.00',
      qty: 1,
      descount: '10% off'
    },
    { 
      prodId: 9,
      img: './../../../../assets/img/art4.png',
      name: 'Lemon',
      description: 'Most Demanded', 
      price: '6.00',
      qty: 1,
      descount: '10% off'
    },
    { 
      prodId: 10,
      img: './../../../../assets/img/art8.png',
      name: 'Red Apple',
      description: 'Imported Simla', 
      price: '5.50',
      qty: 1,
      descount: '10% off'
    },
    { 
      prodId: 11,
      img: './../../../../assets/img/art6.png',
      name: 'Green Grapes',
      description: 'Chilled fresh', 
      price: '6.50',
      qty: 1,
      descount: '10% off'
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
