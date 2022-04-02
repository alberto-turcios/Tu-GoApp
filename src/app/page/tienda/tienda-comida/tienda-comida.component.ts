import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../../app/config.js';
declare const body: any;
declare const title: String;

@Component({
  selector: 'app-tienda-comida',
  templateUrl: './tienda-comida.component.html',
  styleUrls: ['./tienda-comida.component.css', 
  '../../../../assets/css/app.css', 
  '../../../../assets/css/style.css',]
})
export class TiendaComidaComponent implements OnInit {
  path: string = Path.url;
  onClick(){
    body();
  }
  constructor() { }
  ngOnInit(): void {
  }

  productArray =[
    { 
      prodId: 22,
      img: 'https://thumbs.dreamstime.com/b/ensalada-c%C3%A9sar-en-una-placa-blanca-39887384.jpg',
      name: 'Ensalada',
      description: 'Ensalada mixta', 
      price: '5.50',
      qty: 1,
    },
    { 
      prodId: 23,
      img: 'https://thumbs.dreamstime.com/b/shawarma-en-un-fondo-blanco-137964782.jpg',
      name: 'Shawarma',
      description: 'Plato de origen Arabe', 
      price: '8.50',
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
