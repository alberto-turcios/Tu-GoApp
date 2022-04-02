import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../models/products.interface';

// @ts-ignore
import { Path } from '../../../../app/config.js';
declare const body: any;
declare const title: String;

@Component({
  selector: 'app-tienda-bebidas',
  templateUrl: './tienda-bebidas.component.html',
  styleUrls: ['./tienda-bebidas.component.css']
})


export class TiendaBebidasComponent implements OnInit {
  path: string = Path.url;
  onClick(){
    body();
  }
  constructor(private service: ProductsService) { }
  ngOnInit(): void {
    this.getProduct();
  }

  products : Product[] = [];

  public getProduct(){
    this.service.getProducts().
    subscribe(next =>{
      this.products = next
      console.log(this.products);
    })
  }

  productArray =[
    { 
      prodId: 20,
      img: 'https://dam.esquirelat.com/wp-content/uploads/2020/11/LA-CETTO-vinos.jpg',
      name: 'Botella de vino',
      description: 'Vino vallejo chardonnay 750 ml', 
      price: '30.50',
      qty: 1,
    },
    { 
      prodId: 21,
      img: 'https://www.sanpellegrino.com/media//spain/product-range/water/glass/25cl/glass-range-water-25cl_front.jpg',
      name: 'Agua Mineral',
      description: 'Agua San Pellegrino 500 ml', 
      price: '3.40',
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
