import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// @ts-ignore
import { Path } from '../../../../app/config.js';
declare const body: any;
declare const title: String;
declare const price: String;

@Component({
  selector: 'app-cart-orders-form',
  templateUrl: './cart-orders-header.component.html',
  styleUrls: ['./cart-orders-header.component.css']
})
export class CartOrdersHeaderComponent implements OnInit {
  path: string = Path.url;
  title = 'Resumen de tu orden';
  description = ''; 
  amount: number = 1;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.CartDetails();
    this.cartItemFunc();
    this.getToken();
    console.log(this.getUserToken);
  }

  
  onClick(){
    body();
  }

  price_new(amount: number){
    amount * 3.50;
  }

  carItemMore : any;

  addItem(amount:any){
    if(amount.qty != 9){
      amount.qty += 1;
    }
  }

  removeItem(amount:any){
    if(amount.qty != 1){
      amount.qty -= 1;
    }
  }


  cartItem: number = 0;
    cartItemFunc(){
    if(localStorage.getItem('Cart') != null){
      var cartCount = JSON.parse(localStorage.getItem('Cart') || '{}');
      this.cartItem = cartCount.length;
    }
  }

  getCartDetails:any = [];
  CartDetails(){
    if(localStorage.getItem('Cart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('Cart') || '{}' );
    }
  }

  getUserToken: any= "";
  getToken() {
    if(localStorage.getItem('login-token')){
      this.getUserToken = localStorage.getItem('login-token');
    }
  }

}
