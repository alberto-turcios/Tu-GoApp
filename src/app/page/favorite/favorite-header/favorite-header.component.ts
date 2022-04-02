import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

// @ts-ignore
import { Path } from '../../../../app/config.js';
declare const body: any;
declare const title: String;


@Component({
  selector: 'app-favorite-form',
  templateUrl: './favorite-header.component.html',
  styleUrls: ['./favorite-header.component.css']
})
export class FavoriteHeaderComponent implements OnInit {
  path: string = Path.url;
  title = 'Tus favoritos';
  description = 'Los productos que mas te Gustaron'

  onClick(){
    body();
  }
  pageTitle = 'default page title';
  constructor(private route: ActivatedRoute) {}  
  
  ngOnInit(): void {
    this.route.data.subscribe(
      (data: Data) => {
        this.pageTitle = data['title'];
      }
    );
  }

  productArray =[
    { 
      prodId: 1,
      img: './../../../../assets/img/art7.png',
      name: 'Red Apple',
      description: 'Imported Simla', 
      price: '3.50',
      qty: 1,
      descount: '10% off'
    },
    { 
      prodId: 2,
      img: './../../../../assets/img/art8.png',
      name: 'Green Grapes',
      description: 'Chilled fresh', 
      price: '4.50',
      qty: 1,
      descount: '10% off'
    },
    { 
      prodId:3,
      img: './../../../../assets/img/art3.png',
      name: 'Orange',
      description: 'Sweet and Juicy', 
      price: '5.00',
      qty: 1,
      descount: '10% off'
    }
  ];

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
